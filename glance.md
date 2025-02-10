# Code

```ini
# .env.example
HELLO=
```

```ini
# .env
HELLO=world
```

```ts
// src/index.js
const name = import.meta.env.NAME;
document.querySelector("body").innerHTML = `<h1>Hello, ${name}</h1>`;
```

```html
<!-- public/index.html -->
<script>
  globalThis.import_meta_env = JSON.parse('"import_meta_env_placeholder"');
</script>
```

# Development

```sh
$ npx webpack --mode=development
```

# Production

```sh
$ npx webpack --mode=production
```

```sh
$ npx import-meta-env -x .env.example -p dist/index.html
```
