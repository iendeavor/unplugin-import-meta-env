import { Plugin, ResolvedConfig } from "vite";
import colors from "picocolors";
import { config as dotenvConfig } from "dotenv";
import hash from "object-hash";
import { version } from "../package.json";
import { resolve } from "./env";
import { getPackageManagerExecCommand } from "./get-package-manager-exec-command";
import { assignManualChunks } from "./assign-manual-chunks";

export const virtualFile = "import-meta-env";
export const virtualId = "\0" + virtualFile;
export const placeholder = "__import_meta_env_placeholder__";
const inlineEnvKeys = ["BASE_URL", "MODE", "DEV", "PROD", "SSR", "LEGACY"];
const unique = (() => {
  const uniqueId = "import_meta_env_unique_id_";
  return (
    uniqueId +
    Array(256 - uniqueId.length)
      .fill("x")
      .join("")
  );
})();

const createPlugin: () => Plugin[] = () => {
  let config: ResolvedConfig;
  let env: Record<string, string> = {};

  const development = <Plugin>{
    name: "import-meta-env:development",
    enforce: "pre",
    apply: (_, env) => {
      return env.command === "serve";
    },
    configResolved(config) {
      if (config.isProduction) {
        // preview
      } else {
        // dev
        env = resolve({
          envFilePath: ".env",
          envExampleFilePath: ".env.example",
        });
      }
    },
    transform(code, id) {
      if (id !== virtualId && id.includes("node_modules") === false) {
        code = preserveViteBuiltInEnv(code);

        code = code.replace(/import\.meta\.env/g, JSON.stringify(env));

        code = restoreViteBuiltInEnv(code);
      }

      return code;
    },
  };

  const production = <Plugin>{
    name: "import-meta-env:production",
    enforce: "pre",
    apply: (_, env) => {
      return env.command === "build";
    },
    config(config) {
      return assignManualChunks(config);
    },
    configResolved(_config) {
      config = _config;
    },
    resolveId(id, _, options) {
      if (options.ssr) {
        throw new Error(`[import-meta-env]: SSR is not supported.`);
      }

      if (id === virtualFile) {
        return virtualId;
      }

      if (id === virtualId) {
        return virtualId;
      }
    },
    load(id) {
      if (id === virtualId) {
        const parsedExample = (() => {
          const { parsed, error } = dotenvConfig({ path: ".env.example" });
          if (error) {
            return {};
          }
          return parsed!;
        })();
        const hashValue = hash.keys(parsedExample);

        return [
          `console.assert("${hashValue}"); // Invalidate the cache when the .env.example changes.`,
          `const e = ${placeholder};`,
          `export default e;`,
        ].join("\n");
      }
    },
    transform(code, id) {
      if (id !== virtualId && id.includes("node_modules") === false) {
        if (isTransformingJs(code, id)) {
          code =
            `import ${unique} from '${virtualFile}';\n` +
            code.replace(`import ${unique} from '${virtualFile}';\n`, "");
        } else if (isTransformingVue(code, id)) {
          code = code.replace(
            /(\<script.*?\>)/,
            `$1\nimport ${unique} from '${virtualFile}';`
          );
        }

        code = preserveViteBuiltInEnv(code);

        code = code.replace(/import\.meta\.env/g, unique);

        code = restoreViteBuiltInEnv(code);
      }
      return code;
    },
    transformIndexHtml(html) {
      html = html.replace(new RegExp(unique, "g"), "import.meta.env");
      return html;
    },
    closeBundle() {
      const execCommand = getPackageManagerExecCommand();

      config.logger.info(
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
    },
  };

  return [development, production];
};

export default createPlugin;

const isTransformingJs = (code: string, id: string) =>
  [".js", ".ts", ".jsx", ".tsx"].some((ext) => id.endsWith(ext)) &&
  id.includes("?vue&type=template") === false;

const isTransformingVue = (code: string, id: string) => id.endsWith(".vue");

function preserveViteBuiltInEnv(code: string) {
  inlineEnvKeys.forEach((key) => {
    code = code.replace(
      new RegExp(`import.meta.env.${key}`, "g"),
      unique + `.${key}`
    );
  });

  return code;
}

function restoreViteBuiltInEnv(code: string) {
  inlineEnvKeys.forEach((key) => {
    code = code.replace(
      new RegExp(unique + `.${key}`, "g"),
      `import.meta.env.${key}`
    );
  });

  return code;
}
