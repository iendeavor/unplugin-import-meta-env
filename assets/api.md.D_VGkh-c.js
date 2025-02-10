import{_ as a,c as i,o as n,ae as p}from"./chunks/framework.AELpvxz7.js";const c=JSON.parse('{"title":"API","description":"","frontmatter":{},"headers":[],"relativePath":"api.md","filePath":"api.md"}'),e={name:"api.md"};function t(l,s,h,k,r,o){return n(),i("div",null,s[0]||(s[0]=[p(`<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="import-meta-env-babel" tabindex="-1">@import-meta-env/babel <a class="header-anchor" href="#import-meta-env-babel" aria-label="Permalink to &quot;@import-meta-env/babel&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PluginOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * The .env file path to load</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * You can out-out this by passing an empty string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * The public .env example file path to load</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Compile-time: statically replace \`import.meta.env.KEY\` with \`&quot;value&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Runtime: statically replace \`import.meta.env\` with a global accessor</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * process.env.NODE_ENV === &quot;production&quot; ? &quot;runtime&quot; : &quot;compile-time&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  transformMode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;compile-time&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;runtime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="import-meta-env-cli" tabindex="-1">@import-meta-env/cli <a class="header-anchor" href="#import-meta-env-cli" aria-label="Permalink to &quot;@import-meta-env/cli&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import-meta-env</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Usage: import-meta-env [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Populates your environment variables from the system or \`.env\` file.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -V, --version           output the version number</span></span>
<span class="line"><span>  -e, --env &lt;path&gt;        The .env file path to load. You can out-out this by</span></span>
<span class="line"><span>                          passing an empty string. (default: &quot;.env&quot;)</span></span>
<span class="line"><span>  -x, --example &lt;path&gt;    The .env example file path to load</span></span>
<span class="line"><span>  -o, --output &lt;path...&gt;  [deprecated: use --path] The file/dir paths to inject</span></span>
<span class="line"><span>                          in-place (default:</span></span>
<span class="line"><span>                          [&quot;dist/**/*&quot;,&quot;.next/**/*&quot;,&quot;.nuxt/**/*&quot;,&quot;.output/**/*&quot;,&quot;build/**/*&quot;])</span></span>
<span class="line"><span>  -p, --path &lt;path...&gt;    The file/dir paths to inject in-place (default:</span></span>
<span class="line"><span>                          [&quot;dist/**/*&quot;,&quot;.next/**/*&quot;,&quot;.nuxt/**/*&quot;,&quot;.output/**/*&quot;,&quot;build/**/*&quot;])</span></span>
<span class="line"><span>  --disposable            Do not create backup files and restore from backup</span></span>
<span class="line"><span>                          files. In local development, disable this option to</span></span>
<span class="line"><span>                          avoid rebuilding the project when environment variable</span></span>
<span class="line"><span>                          changes, In production, enable this option to avoid</span></span>
<span class="line"><span>                          generating unnecessary backup files.</span></span>
<span class="line"><span>  -h, --help              display help for command</span></span></code></pre></div><h2 id="import-meta-env-flow" tabindex="-1">@import-meta-env/flow <a class="header-anchor" href="#import-meta-env-flow" aria-label="Permalink to &quot;@import-meta-env/flow&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import-meta-env-flow</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Usage: import-meta-env-flow [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Generate flow type from .env.example</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -V, --version         output the version number</span></span>
<span class="line"><span>  -x, --example &lt;path&gt;  The .env example file path to load</span></span>
<span class="line"><span>  -o, --outDir &lt;path&gt;   Specify an output folder for emitted file. (default:</span></span>
<span class="line"><span>                        &quot;.&quot;)</span></span>
<span class="line"><span>  -h, --help            display help for command</span></span></code></pre></div><h2 id="import-meta-env-prepare" tabindex="-1">@import-meta-env/prepare <a class="header-anchor" href="#import-meta-env-prepare" aria-label="Permalink to &quot;@import-meta-env/prepare&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import-meta-env-prepare</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Usage: import-meta-env-prepare [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Generate \`.env\` file from \`.env.*\` files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -V, --version           output the version number</span></span>
<span class="line"><span>  -e, --env &lt;path&gt;        .env file path to write (default: &quot;.env&quot;)</span></span>
<span class="line"><span>  -x, --example &lt;path&gt;    .env.example file path to read</span></span>
<span class="line"><span>  -p, --path &lt;path...&gt;    .env.* file paths to read (default:</span></span>
<span class="line"><span>                          [&quot;.env.local.defaults&quot;,&quot;.env.local&quot;])</span></span>
<span class="line"><span>  -u, --user-environment  whether to load user environment variables (i.e.,</span></span>
<span class="line"><span>                          process.env.*) (default: false)</span></span>
<span class="line"><span>  -h, --help              display help for command</span></span></code></pre></div><h2 id="import-meta-env-swc" tabindex="-1">@import-meta-env/swc <a class="header-anchor" href="#import-meta-env-swc" aria-label="Permalink to &quot;@import-meta-env/swc&quot;">​</a></h2><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> serde;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#[derive(serde</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Serialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, serde</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deserialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * The .env file path to load, related to current working directory.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Defaults to &quot;.env&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * The public .env example file path to load, related to current working directory.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Compile-time: statically replace \`import.meta.env.KEY\` with \`&quot;value&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Runtime: statically replace \`import.meta.env\` with a global accessor</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Default:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * if \`TransformPluginMetadataContextKind::Env\` equals to \`&quot;production&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * then \`Some(TransformMode::Runtime)\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * otherwise \`Some(TransformMode::CompileTime)\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #[serde(rename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;transformMode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> transform_mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TransformMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#[derive(serde</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Serialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, serde</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deserialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TransformMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #[serde(rename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;compile-time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    CompileTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #[serde(rename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;runtime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Runtime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="import-meta-env-typescript" tabindex="-1">@import-meta-env/typescript <a class="header-anchor" href="#import-meta-env-typescript" aria-label="Permalink to &quot;@import-meta-env/typescript&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import-meta-env-typescript</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Usage: import-meta-env-typescript [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Generate declaration file from .env.example</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -V, --version         output the version number</span></span>
<span class="line"><span>  -x, --example &lt;path&gt;  The .env example file path to load</span></span>
<span class="line"><span>  -o, --outDir &lt;path&gt;   Specify an output folder for emitted file. (default:</span></span>
<span class="line"><span>                        &quot;.&quot;)</span></span>
<span class="line"><span>  -h, --help            display help for command</span></span></code></pre></div><h2 id="import-meta-env-unplugin" tabindex="-1">@import-meta-env/unplugin <a class="header-anchor" href="#import-meta-env-unplugin" aria-label="Permalink to &quot;@import-meta-env/unplugin&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PluginOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * The .env file path to load</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * You can out-out this by passing an empty string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * The public .env example file path to load</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Compile-time: statically replace \`import.meta.env.KEY\` with \`&quot;value&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Runtime: statically replace \`import.meta.env\` with a global accessor</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * \`\`\`text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * vite:    if mode is not \`&quot;production&quot;\` then \`&quot;compile-time&quot;\`, otherwise \`&quot;runtime&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * webpack: if mode is \`&quot;development&quot;\` or \`&quot;none&quot;\` then \`&quot;compile-time&quot;\`, otherwise \`&quot;runtime&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * rollup:  if \`NODE_ENV\` is not \`&quot;production&quot;\` then \`&quot;compile-time&quot;\`, otherwise \`&quot;runtime&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * esbuild: (needs to be set explicitly)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  transformMode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;compile-time&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;runtime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,19)]))}const g=a(e,[["render",t]]);export{c as __pageData,g as default};
