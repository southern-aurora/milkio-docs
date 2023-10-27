<script setup>
import { ref } from "vue";
import { allLanguages, language } from "./state.js";
</script>

<template>
  <ClientOnly>
    <template v-for="langItem in allLanguages" :key="langItem">
      <slot v-if="language === langItem" :name="langItem"></slot>
    </template>
  </ClientOnly>
</template>

<style></style>
