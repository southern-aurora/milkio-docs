<script setup>
import DefaultTheme from "vitepress/theme";
import { defaultLanguage, allLanguages, language } from "./state.js";

const { Layout } = DefaultTheme;

const changeLanguage = (lang) => {
  language.value = lang;
  localStorage.setItem(".vitepress-select-language", lang);
  const body = document.querySelector("body");
  body.classList.remove(...allLanguages);
  body.classList.add(lang);
};

onMounted(() => {
  language.value = localStorage.getItem(".vitepress-select-language") || defaultLanguage;
  changeLanguage(language.value);
});
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="language-selector">
        <div class="message">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="var(--vp-c-text-1)"
              d="M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"
            ></path>
          </svg>
          What language do you want to read?
        </div>
        <div class="gap"></div>
        <div class="languages">
          <div
            class="item"
            :class="{
              active: language === allLanguages[0],
            }"
            @click="changeLanguage(allLanguages[0])"
          >
            English
          </div>
          <div
            class="item"
            :class="{
              active: language === allLanguages[1],
            }"
            @click="changeLanguage(allLanguages[1])"
          >
            中文
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.language-selector {
  background-color: var(--vp-input-switch-bg-color);
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.language-selector * {
  box-sizing: content-box;
}

.language-selector > .message {
  display: flex;
}

.language-selector > .message > svg {
  width: 20px;
  margin-right: 8px;
}

.language-selector > .gap {
  flex: 1;
}

.language-selector > .languages {
  display: flex;
}

.language-selector > .languages > .item {
  display: flex;
  color: #fff;
  padding: 4px 8px;
  cursor: pointer;
  color: var(--vp-c-brand-1);
}

.language-selector > .languages > .item.active {
  font-weight: bold;
  text-decoration: underline;
}

@media screen and (max-width: 1024px) {
  .language-selector {
    width: 100%;
    flex-direction: column;
  }

  .language-selector > .gap {
    flex: 0;
  }
}
</style>
