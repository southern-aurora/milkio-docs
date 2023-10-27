import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/bao-docs/",
  title: "Bao Docs",
  description: "A human-centered Bun framework, developing APIs is now easy enough!",
  outDir: "./docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [{ icon: "github", link: "https://github.com/southern-aurora/bao" }],
    nav: [
      {
        text: `
          <span class="lang-en">Sponsors</span>
          <span class="lang-zh">支持者们</span>
        `,
        link: "/SUPPORT",
      },
    ],
    sidebar: [
      {
        text: `
          <span class="lang-en">Index</span>
          <span class="lang-zh">首页</span>
        `,
        items: [
          {
            text: `
              <span class="lang-en">Introduction</span>
              <span class="lang-zh">介绍</span>
            `,
            link: "/",
          },
        ],
      },
      {
        text: `
          <span class="lang-en">Overview</span>
          <span class="lang-zh">概述</span>
        `,
        items: [
          {
            text: `
              <span class="lang-en">Install</span>
              <span class="lang-zh">安装</span>
            `,
            link: "/markdown/docs/install",
          },
          {
            text: `
              <span class="lang-en">Generation phase</span>
              <span class="lang-zh">生成阶段</span>
            `,
            link: "/markdown/docs/generation-phase",
          },
        ],
      },
      {
        text: `
          <span class="lang-en">Abilities</span>
          <span class="lang-zh">能力</span>
        `,
        items: [
          { text: "Api", link: "/markdown/docs/api" },
          { text: "Middleware", link: "/markdown/docs/middleware" },
          { text: "Bootstrap", link: "/markdown/docs/bootstrap" },
          { text: "Use", link: "/markdown/docs/use" },
          { text: "Meta", link: "/markdown/docs/meta" },
          { text: "Context", link: "/markdown/docs/context" },
          { text: "Config", link: "/markdown/docs/config" },
          { text: "FrameworkConfig", link: "/markdown/docs/framework-config" },
          { text: "Cache", link: "/markdown/docs/cache" },
          { text: "Database", link: "/markdown/docs/database" },
          { text: "Logger", link: "/markdown/docs/logger" },
          { text: "Fail", link: "/markdown/docs/fail" },
          { text: "Client", link: "/markdown/docs/client" },
          { text: "Test", link: "/markdown/docs/test" },
        ],
      },
      {
        text: `
          <span class="lang-en">Recipes</span>
          <span class="lang-zh">食谱</span>
        `,
        items: [
          { text: "Prisma", link: "/markdown/recipes/prisma" },
          { text: "MikrORM", link: "/markdown/recipes/mikro-orm" },
        ],
      },
      {
        text: `
          <span class="lang-en">Document</span>
          <span class="lang-zh">文档</span>
        `,
        items: [
          //
          {
            text: `
              <span class="lang-en">Contribution</span>
              <span class="lang-zh">贡献</span>
            `,
            link: "/README",
          },
        ],
      },
    ],
    aside: false,
    search: {
      provider: "local",
    },
  },
});
