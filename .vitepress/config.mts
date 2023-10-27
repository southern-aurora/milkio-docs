import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/bao-docs/",
  title: "BAO",
  description: "高性能的 Bun 框架，以人为本，像你代码中的人体工学椅",
  outDir: "./docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: [
      {
        text: "首页",
        items: [{ text: "入门", link: "/" }],
      },
      {
        text: "概述",
        items: [
          { text: "安装", link: "/markdown/docs/install" },
          { text: "生成阶段", link: "/markdown/docs/generation-phase" },
        ],
      },
      {
        text: "功能",
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
        text: "食谱",
        items: [
          { text: "Prisma", link: "/markdown/recipes/prisma" },
          { text: "MikrORM", link: "/markdown/recipes/mikro-orm" },
        ],
      },
    ],
  },
});
