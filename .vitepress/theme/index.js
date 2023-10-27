import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import I18N from "./I18N.vue";
import { watch, nextTick } from "vue";
import { enableI18NForThisPage } from "./state.js"
import "./theme.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  async enhanceApp({ app, router }) {
    // register your custom global components
    app.component("I18N", I18N);

    console.log(router.route);

    watch(
      () => router.route.path,
      () => {
        if (!import.meta.env.SSR) {
          nextTick(() => {
            if (document.querySelector(".enable-i18n")) {
              enableI18NForThisPage.value = true;
            } else {
              enableI18NForThisPage.value = false;
            }
          })
        }
      }
    )
  },
};
