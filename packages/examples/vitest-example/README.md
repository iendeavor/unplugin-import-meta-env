# Setup

1. Install package:

   ```sh
   $ npm i -D @import-meta-env/typescript
   $ npm i -D @import-meta-env/unplugin
   ```

1. Run `typescript` plugin

   ```sh
   npx import-meta-env-typescript --example .env.example.public --outDir src
   ```

1. Register `import-meta-env` plugin:

   ```js
   // vite.config.ts

   import { defineConfig } from "vite";
   import importMetaEnv from "@import-meta-env/unplugin";

   // https://vitejs.dev/config/
   export default defineConfig({
     // ...
     plugins: [importMetaEnv.vite({ example: ".env.example.public" })],
   });
   ```

1. List public environment variables under `.env.example.public`.

   ```
   # .env.example.public
   HELLO=
   ```

1. Set environment variables:

   ```sh
   $ export HELLO=import-meta-env
   ```

1. Run tests:

   ```sh
   $ npm run test
   ```
