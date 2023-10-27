import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import I18N from "./I18N.vue";
import "./theme.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  async enhanceApp({ app }) {
    // register your custom global components
    app.component("I18N", I18N);
  },
};
