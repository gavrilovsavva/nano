<template>
  <transition name="blur-animation">
    <div
      v-if="burgerToggle.burgerActive === true"
      @click="burgerToggle.burgerActive = false"
      class="burger-blur"
    ></div>
  </transition>

  <transition name="burger-animation">
    <div v-if="burgerToggle.burgerActive === true" class="burger-menu">
      <router-link @click="burgerOn" to="/RepairsPage">Ремонти</router-link>
      <!-- <router-link @click="burgerOn" to="/AboutUs">О нас</router-link> -->
      <router-link @click="burgerOn" to="/ContactsPage">Контакти</router-link>
    </div>
  </transition>

  <header class="header">
    <div class="container">
      <div class="header__container">
        <router-link to="/HomePage"
          ><img src="@/assets/header/logo.svg" alt="logo"
        /></router-link>

        <div class="nav">
          <router-link to="/RepairsPage">Ремонти</router-link>
          <!-- <router-link to="/AboutUs">О нас</router-link> -->
          <router-link to="/ContactsPage">Контакти</router-link>
        </div>

        <div class="header-btns">
          <call-btn></call-btn>
          <app-btn></app-btn>
        </div>

        <div @click="locationOn" class="location">
          <img src="@/assets/header/location.svg" alt="location" />
          <span class="location__text">Показати відділення</span>
        </div>

        <div @click="burgerOn" :class="burgerToggle" class="burger">
          <div class="burger__line burger-active__line"></div>
          <div class="burger__line burger-active__line"></div>
          <div class="burger__line burger-active__line"></div>
        </div>
      </div>
    </div>
    <transition name="location-animation">
      <div v-if="locationToggle === true" class="location-nav">
        <router-link
          to="/ShevchenkoLayout"
          @click="locationOn"
          class="location-nav__item"
          >Проспект Шевченка 10/1</router-link
        >
        <router-link
          to="/StarosennayaLayout"
          @click="locationOn"
          class="location-nav__item"
          >Старосінна площа 1А</router-link
        >
        <router-link
          to="/ViliamsaLayout"
          @click="locationOn"
          class="location-nav__item"
          >Вільямса 9A</router-link
        >
        <router-link
          to="/KosmonavtovLayout"
          @click="locationOn"
          class="location-nav__item"
          >Космонавтів 9/1</router-link
        >
      </div>
    </transition>
  </header>
</template>

<script>
// btns
import CallBtn from "@/components/btns/CallBtn.vue";
import AppBtn from "@/components/btns/AppBtn.vue";

export default {
  components: { CallBtn, AppBtn },
  data() {
    return {
      burgerToggle: {
        burgerActive: false,
      },
      locationToggle: false,
    };
  },
  methods: {
    burgerOn() {
      this.burgerToggle.burgerActive = !this.burgerToggle.burgerActive;
    },
    locationOn() {
      this.locationToggle = !this.locationToggle;
    },
  },
};
</script>

<style></style>
