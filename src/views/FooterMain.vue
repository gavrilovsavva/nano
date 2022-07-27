<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-app-container">
        <div class="footer-app">
          <div class="footer-app__text-container">
            <span class="footer-app__title"
              >Залишіть заявку на ремонт та отримайте</span
            >
            <span class="footer-app__subtitle">5% Знижку</span>
          </div>
          <app-btn></app-btn>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <span class="footer-copy__text"
        >© 2022 NanoStore. Всі права захищені.</span
      >
    </div>
  </footer>
</template>

<script>
import AppBtn from "@/components/btns/AppBtn.vue";
export default {
  components: { AppBtn },
};
</script>

<style></style>
