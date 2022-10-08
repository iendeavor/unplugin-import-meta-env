import resolve from "@rollup/plugin-node-resolve";
import importMetaEnv from "@import-meta-env/unplugin";

const dev = {
  input: "src/main.js",
  output: {
    dir: "public/assets",
    format: "esm",
  },
  plugins: [
    resolve(),
    importMetaEnv.rollup({ example: ".env.example.public" }),
  ],
};

const prod = {
  input: "src/main.js",
  output: {
    dir: "dist/assets",
    format: "esm",

    // Make output files easier to diff.
    chunkFileNames: `[name].js`,
    entryFileNames: `[name].js`,
  },
  plugins: [
    resolve(),
    importMetaEnv.rollup({ example: ".env.example.public" }),
  ],
};

export default process.env.NODE_ENV === "production" ? prod : dev;
