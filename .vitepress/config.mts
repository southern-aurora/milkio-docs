import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/milkio-docs/",
  title: "Milkio Docs",
  description: "A human-centered Bun framework, developing APIs is now easy enough!",
  outDir: "./docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [{ icon: "github", link: "https://github.com/southern-aurora/milkio" }],
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
              <span class="lang-en">QuickStart</span>
              <span class="lang-zh">快速开始</span>
            `,
            link: "/markdown/docs/quick-start",
          },
        ],
      },
      {
        text: `
          <span class="lang-en">Abilities</span>
          <span class="lang-zh">能力</span>
        `,
        items: [
          //
          {
            text: `
              <span class="lang-en">State</span>
              <span class="lang-zh">State 状态</span>
            `,
            link: "/markdown/docs/states",
          },
          {
            text: `
              <span class="lang-en">Event</span>
              <span class="lang-zh">Event 事件</span>
            `,
            link: "/markdown/docs/events",
          },
          {
            text: `
              <span class="lang-en">Service</span>
              <span class="lang-zh">Service 服务</span>
            `,
            link: "/markdown/docs/services",
          },
          {
            text: `
              <span class="lang-en">Shadow</span>
              <span class="lang-zh">Shadow 影子</span>
            `,
            link: "/markdown/docs/shadow",
          },
          {
            text: `
              <span class="lang-en">DataSource</span>
              <span class="lang-zh">DataSource 数据源</span>
            `,
            link: "/markdown/docs/data-source",
          },
        ],
      },
      {
        text: `
          <span class="lang-en">DataSource</span>
          <span class="lang-zh">数据源</span>
        `,
        items: [
          //
          {
            text: `LocalStorage`,
            link: "/markdown/data-source/local-storage",
          },
          {
            text: `
              <span class="lang-en">Custom</span>
              <span class="lang-zh">自定义</span>
            `,
            link: "/markdown/data-source/custom",
          },
        ],
      },
      {
        text: `
          <span class="lang-en">Packages</span>
          <span class="lang-zh">Packages 包</span>
        `,
        items: [
          //
          {
            text: `SharedWorker`,
            link: "/markdown/packages/shared-worker",
          },
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
