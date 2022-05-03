<template>
  <header-main></header-main>
  <component :is="layout"></component>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <footer-main></footer-main>
</template>

<script>
import HeaderMain from "./views/HeaderMain.vue";
import HomePage from "./layouts/HomePage.vue";
import FooterMain from "./views/FooterMain.vue";

export default {
  components: { HomePage, HeaderMain, FooterMain },

  computed: {
    layout() {
      return this.$route.meta.layout || HomePage;
    },
  },
};
</script>

<style src="@/styles/main.scss" lang="scss"></style>
