<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-app-container">
        <div class="footer-app">
          <div class="footer-app__text-container">
            <span class="footer-app__title"
              >Оставьте заявку на ремонт и получите</span
            >
            <span class="footer-app__subtitle">5% Скидку</span>
          </div>
          <app-btn></app-btn>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <span class="footer-copy__text"
        >© 2022 NanoStore. Все права защищены.</span
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
