import { writeFileSync } from "fs";
import tmp from "tmp";
import pluginTester from "babel-plugin-tester";
import importMetaEnvBabelPlugin from "../index";

export const createTempFile = (code: string) => {
  const tmpFile = tmp.fileSync();

  writeFileSync(tmpFile.name, code);

  return tmpFile.name;
};

const env = createTempFile("EXISTS=value\nSECRET=***");
const example = createTempFile("EXISTS=");

describe(`globalThis.import_meta_env = JSON.parse("import_meta_env_placeholder")`, () => {
  pluginTester({
    title: "It should insert after last import",

    plugin: importMetaEnvBabelPlugin,

    pluginOptions: {
      env,
      example,
      transformMode: "compile-time",
    },

    tests: [
      {
        title: "compile-time",
        code: `
import "@import-meta-env/virtual-module";
import "another-module";
        `.trim(),
        output: `
import "another-module";
globalThis.import_meta_env = {
  EXISTS: "value",
};
        `.trim(),
      },
    ],
  });

  pluginTester({
    title: "It should replace virtual module with environment variables",

    plugin: importMetaEnvBabelPlugin,

    pluginOptions: {
      env,
      example,
      transformMode: "compile-time",
    },

    tests: [
      {
        title: "compile-time",
        code: `import "@import-meta-env/virtual-module";`,
        output: `
globalThis.import_meta_env = {
  EXISTS: "value",
};
        `.trim(),
      },
    ],
  });

  pluginTester({
    title: "It should replace virtual module with the special expression",

    plugin: importMetaEnvBabelPlugin,

    pluginOptions: {
      example,
      transformMode: "runtime",
    },

    tests: [
      {
        title: "runtime",
        code: `import "@import-meta-env/virtual-module";`,
        output: `globalThis.import_meta_env = "import_meta_env_placeholder";`,
      },
    ],
  });
});

describe("import.meta.env.*", () => {
  for (let transformMode of ["compile-time", "runtime"] as const) {
    pluginTester({
      title: `(transformMode: ${transformMode}) It should ignore`,

      plugin: importMetaEnvBabelPlugin,

      pluginOptions: {
        env: transformMode === "compile-time" ? env : void 0,
        example,
        transformMode,
      },

      tests: [
        {
          title: "new.target.env.EXISTS",
          code: `
function _() {
  new.target.env.EXISTS;
}
          `.trim(),
          output: `
function _() {
  new.target.env.EXISTS;
}
                  `.trim(),
        },

        {
          title: "import.meta.url.EXISTS",
          code: "console.log(() => import.meta.url.EXISTS);",
          output: "console.log(() => import.meta.url.EXISTS);",
        },

        {
          title: "import.meta.env",
          code: "console.log(() => import.meta.env);",
          output: "console.log(() => import.meta.env);",
        },

        {
          title: "import.meta.env.NOT_EXISTS",
          code: "console.log(() => import.meta.env.NOT_EXISTS);",
          output: "console.log(() => import.meta.env.NOT_EXISTS);",
        },
      ],
    });
  }

  pluginTester({
    title: "It should inline with given env",

    plugin: importMetaEnvBabelPlugin,

    pluginOptions: {
      env,
      example,
      transformMode: "compile-time",
    },

    tests: [
      {
        title: "import.meta.env.EXISTS",
        code: "console.log(() => import.meta.env.EXISTS);",
        output: `console.log(() => globalThis.import_meta_env.EXISTS);`.trim(),
      },
    ],
  });

  pluginTester({
    title: "It should replace with accessor",

    plugin: importMetaEnvBabelPlugin,

    pluginOptions: {
      example,
      transformMode: "runtime",
    },

    tests: [
      {
        title: "import.meta.env.EXISTS",
        code: "console.log(() => import.meta.env.EXISTS);",
        output: `
console.log(() => globalThis.import_meta_env.EXISTS);
      `.trim(),
      },
    ],
  });
});
