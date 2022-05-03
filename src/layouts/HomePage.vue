<template>
  <div>
    <section class="header-front">
      <div class="container header-front__container">
        <div class="header-text">
          <div class="header-text__text-container">
            <h1 class="header-text__title">Качество прежде всего</h1>
            <span class="header-text__subtitle"
              >Быстрый и качественный ремонт Вашей техники в Одессе</span
            >
          </div>
          <div class="header-text__btns">
            <call-btn></call-btn>
            <app-btn></app-btn>
          </div>
        </div>
        <div class="header-items">
          <button
            @click="
              $router.push('/ModelsPage'),
                repairName(data.apple.iphone.name),
                brandName(data.apple.name)
            "
            class="header-items__item"
          >
            <img
              class="header-items__img"
              src="@/assets/header/apple.svg"
              alt="apple"
            />
            Ремонт iPhone
          </button>
          <button
            @click="$router.push('/AndroidPage')"
            class="header-items__item"
          >
            <img
              src="@/assets/header/android.svg"
              alt="android"
              class="header-items__img"
            />
            Ремонт Android
          </button>
          <button
            @click="
              $router.push('/ModelsPage'),
                repairName(data.apple.ipad.name),
                brandName(data.apple.name)
            "
            class="header-items__item"
          >
            <img
              src="@/assets/header/ipad.svg"
              alt="ipad"
              class="header-items__img"
            />
            Ремонт iPad
          </button>
          <button
            @click="$router.push('/MacbookPage'), brandName(data.apple.name)"
            class="header-items__item"
          >
            <img
              src="@/assets/header/macbook.svg"
              alt="macbook"
              class="header-items__img"
            />
            Ремонт MacBook
          </button>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <h2 class="about__title title-h2">Какие ремонты мы производим</h2>
        <div class="about-items">
          <div class="about-items__item">
            <div class="about-items__img">
              <img src="@/assets/homePage/glass.svg" alt="glass" />
            </div>
            <span class="about-items__text"
              >Замена стекла на iPhone, Samsung, Xiaomi и другие модели
              телефонов</span
            >
          </div>
          <div class="about-items__item">
            <div class="about-items__img">
              <img src="@/assets/homePage/volume.svg" alt="volume" />
            </div>
            <span class="about-items__text"
              >Замена слухового или полифонического динамика</span
            >
          </div>
          <div class="about-items__item">
            <div class="about-items__img">
              <img src="@/assets/homePage/water.svg" alt="water" />
            </div>
            <span class="about-items__text"
              >Восстановление Вашего устройсвта полсе попадания влаги</span
            >
          </div>
          <div class="about-items__item">
            <div class="about-items__img">
              <img src="@/assets/homePage/battery.svg" alt="battery" />
            </div>
            <span class="about-items__text"
              >Замена аккумулятора на телефоне, планшете или Macbook</span
            >
          </div>
          <div class="about-items__item">
            <div class="about-items__img">
              <img src="@/assets/homePage/board.svg" alt="board" />
            </div>
            <span class="about-items__text"
              >Ремонт материнской платы любой сложности</span
            >
          </div>
          <div class="about-items__item">
            <div class="about-items__img">
              <img src="@/assets/homePage/wifi.svg" alt="wifi" />
            </div>
            <span class="about-items__text">Ремонт компонентов сети</span>
          </div>
        </div>
      </div>
    </section>
    <section class="works">
      <div class="container">
        <h2 class="works__title title-h2">Как происходит ремонт</h2>
        <div class="works-items">
          <div class="works-items__item">
            <div class="works-items__i">1</div>
            <span class="works-items__title">Диагностика</span>
            <span class="works-text">Оценка времени работы</span>
          </div>
          <div class="works-items__item">
            <div class="works-items__i">2</div>
            <span class="works-items__title">Согласование</span>
            <span class="works-text"
              >Согласование деталей и стоимости ремонта</span
            >
          </div>
          <div class="works-items__item">
            <div class="works-items__i">3</div>
            <span class="works-items__title">Ремонт</span>
            <span class="works-text"
              >Производим ремонт в обговоренные сроки</span
            >
          </div>
          <div class="works-items__item">
            <div class="works-items__i">4</div>
            <span class="works-items__title">Выдача</span>
            <span class="works-text">Выдача клиенту готовое устройство</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <repairs-app></repairs-app>
    </section>
  </div>
</template>

<script>
// btns
import CallBtn from "@/components/btns/CallBtn.vue";
import AppBtn from "@/components/btns/AppBtn.vue";
import RepairsApp from "@/components/repairs/RepairsAll.vue";
import store from "@/store";

export default {
  components: { CallBtn, AppBtn, RepairsApp },
  store,
  computed: {
    data() {
      return store.state.data;
    },
  },
  methods: {
    repairName(name) {
      store.dispatch("repairName", name);
    },
    brandName(name) {
      store.dispatch("brandName", name);
    },
  },
};
</script>

<style></style>
