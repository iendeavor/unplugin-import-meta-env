# Guide

## Getting Started

[![License - MIT](https://img.shields.io/github/license/iendeavor/final-env?color=blue&label=License)](https://github.com/iendeavor/final-env/blob/main/LICENSE)

[![SemVer version](https://img.shields.io/badge/Sem%20Ver-2.0.0-black.svg)](https://semver.org/)

[![CI](https://github.com/iendeavor/final-env/actions/workflows/ci.yml/badge.svg)](https://github.com/iendeavor/final-env/actions/workflows/ci.yml)

### The `.env.example` File

For security reasons, we need to explicitly define which environment variables should be exposed to the browser.

You can do this by creating a `.env.example` file in your project:

```ini
# .env.example
S3_BUCKET=
```

### Installation

1. Choose a transformation plugin:

   - If you're already using Babel, you can install [babel plugin](#install-babel-plugin).
   - If you're already using Rollup, Vite, or Webpack, you can install [unplugin](#install-unplugin).

2. You will also need to install the [CLI](#install-cli) to populate your environment variables after production.

#### Install Babel Plugin

[![NPM version](https://img.shields.io/npm/v/@final-env/babel.svg)](https://www.npmjs.com/package/@final-env/babel)

::: warning
This plugin is not compatible with the Vite, you should use the [Unplugin](#install-unplugin) instead.
:::

Install it with your favorite package manager:

```bash
npm install @final-env/babel --save-dev
yarn add @final-env/babel --dev
pnpm add -D @final-env/babel
```

Register the plugin:

```json
// babel.config.json
{
  "plugins": [["module:@final-env/babel", { "example": ".env.example" }]]
}
```

Related examples: [babel](https://github.com/iendeavor/final-env/blob/main/packages/examples/babel-starter-example), [babel-loader](https://github.com/iendeavor/final-env/blob/main/packages/examples/webpack-babel-loader-example), [jest](https://github.com/iendeavor/final-env/blob/main/packages/examples/jest-example), [rollup-plugin-babel](https://github.com/iendeavor/final-env/blob/main/packages/examples/rollup-plugin-babel-example)

#### Install Unplugin

[![NPM version](https://img.shields.io/npm/v/@final-env/unplugin.svg)](https://www.npmjs.com/package/@final-env/unplugin)

Install it with your favorite package manager:

```bash
npm install @final-env/unplugin --save-dev
yarn add @final-env/unplugin --dev
pnpm add -D @final-env/unplugin
```

Register the plugin:

Rollup:

```js
// rollup.config.js
import ImportMetaEnvPlugin from "@final-env/unplugin";

export default {
  plugins: [
    ImportMetaEnvPlugin.rollup({
      example: ".env.example",
    }),
  ],
};
```

Vite:

```ts
// vite.config.ts
import ImportMetaEnvPlugin from "@final-env/unplugin";

export default {
  plugins: [
    ImportMetaEnvPlugin.vite({
      example: ".env.example",
    }),
  ],
};
```

Webpack:

```js
// webpack.config.js
module.exports = {
  plugins: [
    require("@final-env/unplugin").webpack({
      example: ".env.example",
    }),
  ],
};
```

Related examples: [rollup](https://github.com/iendeavor/final-env/blob/main/packages/examples/rollup-starter-example), [vite](https://github.com/iendeavor/final-env/blob/main/packages/examples/vite-starter-example), [webpack](https://github.com/iendeavor/final-env/blob/main/packages/examples/webpack-starter-example)

#### Install CLI

[![NPM version](https://img.shields.io/npm/v/@final-env/cli.svg)](https://www.npmjs.com/package/@final-env/cli)

Install it with your favorite package manager:

```bash
npm install @final-env/cli --save-dev
yarn add @final-env/cli --dev
pnpm add -D @final-env/cli
```

### Using Environment Variables

Suppose you have the following environment variables:

```bash
export S3_BUCKET=YOUR_S3_BUCKET
```

#### Accessing Environment Variables

You can access the environment variables in code like:

```js
console.log(__ENV__.S3_BUCKET);
```

#### Development

In development, `__ENV__` will simply be replaced with environment variables.

```js
console.log("YOUR_S3_BUCKET");
```

#### Production

During production, `__ENV__` will be temporarily replaced with a placeholder string.

```js
console.log('__env_placeholder__'.S3_BUCKET));
```

Therefore, before serving your production build, you need to run the CLI to populate the environment variables:

```bash
./node_modules/.bin/final-env --example .env.example
```

... and it will output:

```js
console.log("YOUR_S3_BUCKET");
```

Since your application may be deployed on a system that doesn't have Node.js installed, you can use [pkg](https://github.com/vercel/pkg) to package the `final-env` script into a standalone binary.

For example, you may host your application on the [Alpine Linux nginx image](https://hub.docker.com/_/nginx)):

```bash
npx pkg ./node_modules/@final-env/cli/bin/final-env.js \
  --target node16-alpine \
  --output final-env-alpine
```

and use it like above to populate environment variables:

```bash
./final-env-alpine --example .env.example
```

Related examples: [docker](https://github.com/iendeavor/final-env/blob/main/packages/examples/docker-starter-example)

::: warning
**final-env** will also replace all `__ENV__` appearing in JavaScript strings, so you may see errors like:

```js
console.log("__ENV__.S3_BUCKET is:", __ENV__.S3_BUCKET);
```

will be transformed into:

```js
console.log(
  ""__env_placeholder__".S3_BUCKET is:",
// ^ SyntaxError: missing ) after argument list
  "__env_placeholder__".S3_BUCKET
);
```

To avoid this, you can break the string up with a unicode zero-width space, e.g.:

```js
console.log("__ENV\u200b__.S3_BUCKET is:", __ENV__.S3_BUCKET);
```

output:

```js
console.log("__ENV\u200b__.S3_BUCKET is:", "__env_placeholder__".S3_BUCKET);
```

:::

::: info
By default, **final-env** will automatically determine the mode (development or production) and replace `__ENV__` with environment variables or placeholders, respectively.

You can override this by setting the `shouldInlineEnv` option for the [babel plugin](#install-babel-plugin) and the [unplugin](#install-unplugin).

For more information, see [API](api).
:::

## Extra Topics

### Local Development

In local development, for convenience, you can create a `.env.defaults` file in the project instead of manipulating environment variables in the system:

```ini
# final-env will only load `S3_BUCKET`'s value if you only defined it in the `.env.example` file.
S3_BUCKET="YOUR_S3_BUCKET"
SECRET_KEY="YOUR_SECRET_KEY_GOES_HERE"
```

### Sensitive Environment Variables

You may want to define all necessary environment variables in .env.example (i.e. including credentials), in this case, you can creating two example files, and pass the `.env.example.public` file to `final-env` options:

```ini
# .env.example
S3_BUCKET=
SECRET_KEY=
```

```ini
# .env.example.public
S3_BUCKET=
```

Or you may write a script to automatically create the `.env.example.public` file by filtering out the sensitive environment variables, it's all up to you:

```ini
# .env.example
PUBLIC_S3_BUCKET=
SECRET_KEY=
```

```ini
# .env.example.public
PUBLIC_S3_BUCKET=
```

In addition, you should use `process.env` to access the sensitive environment variables in your code instead of accessing the environment variables by `__ENV__`, this could help you to identify the sensitive environment variables in your code:

```js
const S3_BUCKET = __ENV__.S3_BUCKET;
const SECRET_KEY = process.env.SECRET_KEY;
```

To populate sensitive environment variables, you should still use [webpack.EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/) or similar:

```js
new webpack.EnvironmentPlugin(["SECRET_KEY"]);
```

```js
console.log(process.env.SECRET_KEY); // "YOUR_SECRET_KEY_GOES_HERE"
```

If you need to populate the sensitive environment variables at run-time, you need to find out another way to do it, for example:

1. For [NEXT.js](https://nextjs.org/), you can use [serverRuntimeConfig](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration).
2. For [NuxtJS](https://nuxtjs.org/), you can use [privateRuntimeConfig](https://nuxtjs.org/docs/configuration-glossary/configuration-final-env).

### IntelliSense for TypeScript

You may want to get TypeScript IntelliSense for user-defined environment variables.

To achieve, you can create an `env.d.ts`, then define `ImportMeta` like this:

```ts
// env.d.ts
interface ImportMeta {
  readonly env: {
    readonly S3_BUCKET: string;
  };
}
```

## Framework-specific Notes

### Vite

<br/>

#### The [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)

During production, the following variables will be statically replaced just like Vite:

- [Built-in](https://vitejs.dev/guide/env-and-mode.html#env-variables) variables: `MODE`, `BASE_URL`, `PROD`, and `DEV`.

- [Server-side rendering](https://vitejs.dev/guide/ssr.html#conditional-logic) variable: `SSR`.

- [@vitejs/plugin-legacy](https://vitejs.dev/plugins/#vitejs-plugin-legacy) variable: `LEGACY`.

- [envPrefix](https://vitejs.dev/config/index.html#envprefix) variables. You can disable it by setting `envPrefix` to `[]` (**Recommended**).

#### IntelliSense for TypeScript

For Vite projects, you can augment [ImportMetaEnv](https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript) like this:

```ts
// src/env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly S3_BUCKET: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

## FAQ

### Why use ImportMeta?

Since `process.env` is a Node specific object, we should not use it in browser environment.

For server-side rendering, it is also more precise to use `__ENV__` (heavily inspired by Vite) and `process.env` respectively.

### Boolean Values

Environment variables are always strings.

```bash
export DEBUG=whatever # true
export DEBUG= # false
```

The easiest way to do this is to treat `""` and `undefined` as `false`, otherwise treat them as `true`:

```js
if (__ENV__.DEBUG) {
  console.log("DEBUG is anything but the empty string and undefined.");
} else {
  console.log("DEBUG is the empty string.");
}
```

If you need to convert it to `boolean` type:

```diff
- if (  __ENV__.DEBUG) {
+ if (!!__ENV__.DEBUG === true) {
  console.log("DEBUG is anything but the empty string and undefined.");
} else {
  console.log("DEBUG is the empty string.");
}
```

### Changes to environment variables is not updated

You will need to restart your dev server after changing the environment variables.

This is useful, for example:

- You want to track bugs for production, but you don't want to shut down the development environment.
- Or, you want to start multiple development environments at the same time and each one has its own environment variables.

### Can I have multiple `.env` files?

Yes. You can choose which one to be used by passing the `env` option to `final-env`, for example, you can pass `.env.local` to `final-env`:

```bash
./node_modules/.bin/final-env \
  --env .env.local \
  --example .env.example
```

### Should I commit my `.env` file?

No. We strongly recommend against committing your `.env` file to version control.
