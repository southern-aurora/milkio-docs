import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b8c8dad6.js";const d=JSON.parse('{"title":"Cache","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/docs/cache.md","filePath":"markdown/docs/cache.md"}'),o={name:"markdown/docs/cache.md"},p=l(`<h1 id="cache" tabindex="-1">Cache <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;Cache&quot;">​</a></h1><p>Cache 可以将一些数据临时保存，并在一定时间后自动过期。合理的缓存数据，可以有效的提高你应用的性能。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>目前，Bao 支持使用 Redis 来缓存数据。你可以在环境变量或 <code>/.env</code> 文件中添加 <code>REDIS_URL</code> 来告诉 Bao 要使用哪个 Redis 服务。</p><h2 id="编写" tabindex="-1">编写 <a class="header-anchor" href="#编写" aria-label="Permalink to &quot;编写&quot;">​</a></h2><p>例如，我们可以为每个用户的个人信息创建缓存。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineNamespaceCache } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;southern-aurora-bao&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineNamespaceCache</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">UserInfo</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&quot;user-info&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserInfo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">age</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">email</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cache</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;alice&#39;</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">age</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">email</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;alice@gmail.com&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;alice&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#6A737D;">// echo: { age: 18, email: &#39;alice@gmail.com&#39; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">del</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#6A737D;">// echo: undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineNamespaceCache } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;southern-aurora-bao&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cache</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineNamespaceCache</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">UserInfo</span><span style="color:#24292E;">&gt;(</span><span style="color:#032F62;">&quot;user-info&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserInfo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">email</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cache</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;alice&#39;</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">, </span><span style="color:#E36209;">email</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;alice@gmail.com&#39;</span><span style="color:#24292E;"> }, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> cache.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;alice&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#6A737D;">// echo: { age: 18, email: &#39;alice@gmail.com&#39; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> cache.</span><span style="color:#6F42C1;">del</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> cache.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#6A737D;">// echo: undefined</span></span></code></pre></div><h2 id="全局缓存" tabindex="-1">全局缓存 <a class="header-anchor" href="#全局缓存" aria-label="Permalink to &quot;全局缓存&quot;">​</a></h2><p>前面，我们使用 <code>defineNamespaceCache</code> 创建的缓存是命名空间缓存，它适合存储集合数据的场景，就像存储用户信息，其中有许多用户。但是，有时你只需要缓存简单的数据，例如，你想要缓存一个布尔值，来表示是否开启了维护模式。这时候，就可以使用全局缓存。</p><p>你可以使用 <code>defineGlobalCache</code> 来定义一个全局缓存。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineGlobalCache } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;southern-aurora-bao&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineGlobalCache</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&quot;enable-maintenance-mode&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> cache.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#6A737D;">// echo: true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineGlobalCache } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;southern-aurora-bao&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cache</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineGlobalCache</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">&gt;(</span><span style="color:#032F62;">&quot;enable-maintenance-mode&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> cache.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> cache.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#6A737D;">// echo: true</span></span></code></pre></div>`,11),e=[p];function c(t,r,E,y,i,F){return a(),n("div",null,e)}const C=s(o,[["render",c]]);export{d as __pageData,C as default};