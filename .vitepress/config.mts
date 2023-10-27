import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/bao-docs/",
  title: "Bao Docs",
  description: "A human-centered Bun framework, developing APIs is now easy enough!",
  outDir: "./docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: [
      {
        text: "Index",
        items: [{ text: "Introduction", link: "/" }],
      },
      {
        text: "Overview",
        items: [
          { text: "Install", link: "/markdown/docs/install" },
          { text: "Generation phase", link: "/markdown/docs/generation-phase" },
        ],
      },
      {
        text: "Abilities",
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
        text: "Recipes",
        items: [
          { text: "Prisma", link: "/markdown/recipes/prisma" },
          { text: "MikrORM", link: "/markdown/recipes/mikro-orm" },
        ],
      },
      {
        text: "Documentation",
        items: [{ text: "Contribution", link: "/README" }],
      },
    ],
    aside: false,
    search: {
      provider: "local",
    },
  },
});
