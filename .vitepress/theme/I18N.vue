<script setup></script>

<template>
  <div class="enable-i18n">
    <slot />
  </div>
</template>

<style>
:not(.i18n-loaded) .enable-i18n {
  display: none;
}

.i18n-loaded .enable-i18n {
  display: block;
}
</style>
