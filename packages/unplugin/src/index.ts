import { createUnplugin } from "unplugin";
import colors from "picocolors";
import { version } from "../package.json";
import {
  resolveEnv,
  getPackageManagerExecCommand,
  envFilePath as defaultEnvFilePath,
  createAccessorRegExp,
} from "../../shared";
import { PluginOptions } from "./types";
import { ImportMetaPlugin } from "./webpack/import-meta-plugin";
import { transformDev } from "./transform-dev";
import { transformProd } from "./transform-prod";
import { ViteResolvedConfig } from "./vite/types";
import { resolveEnvExample } from "packages/shared/resolve-env-example";
import { SourceMap } from "magic-string";

const createPlugin = createUnplugin<PluginOptions>((options, meta) => {
  const debug = process.env.DEBUG_IMPORT_META_ENV;
  debug && console.debug("factory::", options, meta);

  const envFilePath = options?.env ?? defaultEnvFilePath;
  const envExampleFilePath = options?.example;
  if (envExampleFilePath === undefined) {
    throw Error(
      `example option is required. Please specify it in the plugin options.`
    );
  }
  const example = resolveEnvExample({ envExampleFilePath });

  let transformMode: undefined | "compile-time" | "runtime" =
    options?.transformMode;

  let env: Record<string, string> =
    meta.framework === "esbuild"
      ? transformMode === "compile-time"
        ? resolveEnv({
            envFilePath,
            envExampleFilePath,
          })
        : {}
      : {};

  let viteConfig: undefined | ViteResolvedConfig;

  return {
    name: "import-meta-env",

    enforce: meta.framework === "webpack" ? "post" : void 0,

    vite: {
      enforce: "pre",

      apply(_, env) {
        debug && console.debug("apply::");

        transformMode =
          transformMode ??
          (env.mode !== "production" ? "compile-time" : "runtime");
        return true;
      },

      configResolved(_config) {
        debug && console.debug("configResolved::");

        if (transformMode === "compile-time") {
          env = resolveEnv({
            envFilePath,
            envExampleFilePath,
          });
        }

        viteConfig = _config;
      },

      transformIndexHtml(html) {
        debug && console.debug("transformIndexHtml::");

        debug && console.debug("=== index.html before ===");
        debug && console.debug(html);
        debug && console.debug("==================");

        html = html.replace(createAccessorRegExp(""), "import.meta.env");

        debug && console.debug("=== index.html after ===");
        debug && console.debug(html);
        debug && console.debug("==================");

        return html;
      },
    },

    rollup: {
      buildStart() {
        debug && console.debug("rollup::buildStart::");

        transformMode =
          transformMode ??
          (process.env.NODE_ENV !== "production" ? "compile-time" : "runtime");

        if (transformMode === "compile-time") {
          env = resolveEnv({
            envFilePath,
            envExampleFilePath,
          });
        }
      },
    },

    webpack: (compiler) => {
      compiler.options.plugins.push(new ImportMetaPlugin());

      const developmentModes: typeof compiler.options.mode[] = [
        "development",
        "none",
      ];
      transformMode =
        transformMode ??
        (developmentModes.includes(compiler.options.mode)
          ? "compile-time"
          : "runtime");

      if (transformMode === "compile-time") {
        env = resolveEnv({
          envFilePath,
          envExampleFilePath,
        });
      }
    },

    buildStart() {
      debug && console.debug("buildStart::");
      debug && console.debug("env::", env);
    },

    transformInclude(id) {
      const include = [/\.[jt]sx?$/, /\.vue$/, /\.vue\?(vue)/, /\.svelte$/];
      const exclude = [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/];
      const shouldInclude =
        include.some((re) => re.test(id)) &&
        exclude.every((re) => re.test(id) === false);

      debug && console.debug("transformIncludes::", shouldInclude, id);

      return shouldInclude;
    },

    transform(code, id) {
      let result: undefined | { code: string; map: SourceMap };
      debug && console.debug("==================");
      if (transformMode === "compile-time") {
        debug && console.debug("=== compile-time transform ===", id);
        debug && console.debug("=== before ===");
        debug && console.debug(code);

        result = transformDev({
          code,
          id,
          env,
          example,
          meta,
          viteConfig,
        });

        debug && console.debug("=== code after ===");
        debug && console.debug(result?.code ?? code);
      } else {
        debug && console.debug("=== runtime transform ===", id);
        debug && console.debug("=== before ===");
        debug && console.debug(code);

        result = transformProd({ code, id, example, meta, viteConfig });

        debug && console.debug("=== after ===");
        debug && console.debug(result?.code ?? code);
      }
      debug && console.debug("==================");

      return result?.code;
    },

    buildEnd() {
      debug && console.debug("buildEnd::");

      const execCommand = getPackageManagerExecCommand();

      if (transformMode === "compile-time") {
      } else {
        console.info(
          [
            "",
            `${colors.cyan("import-meta-env v" + version)}`,
            `${colors.green("✓")} environment files are generated.`,
            colors.yellow(
              `Remember to inject (\`${execCommand} import-meta-env\`) environment variables before serving your application.`
            ),
            "",
          ].join("\n")
        );
      }
    },
  };
});

export default createPlugin;
