<template>
  <div class="container">
    <div class="price">
      <h2 class="title-h2">
        Ремонт {{ data[brandName].name }}
        {{ data[brandName][repairName].data[priceName].name }}
      </h2>
      <span class="price__subtitle"
        >У таблиці представлено остаточну вартість послуги ремонту. Вартість
        деталей вже включено.</span
      >
      <table class="price-table">
        <!-- Macbook -->
        <tr v-if="price.displayFrame !== undefined" class="price-table__row">
          <td class="price-table__data">Матриця у зборі з кришкою</td>
          <td class="price-table__data">{{ price.displayFrame }}</td>
        </tr>
        <tr v-if="price.displayWithout !== undefined" class="price-table__row">
          <td class="price-table__data">Матриця</td>
          <td class="price-table__data">{{ price.displayWithout }}</td>
        </tr>
        <tr v-if="price.keyboard !== undefined" class="price-table__row">
          <td class="price-table__data">Клавіатура</td>
          <td class="price-table__data">{{ price.keyboard }}</td>
        </tr>
        <tr v-if="price.touchpad !== undefined" class="price-table__row">
          <td class="price-table__data">Тачпад</td>
          <td class="price-table__data">{{ price.touchpad }}</td>
        </tr>
        <tr v-if="price.cleaning !== undefined" class="price-table__row">
          <td class="price-table__data">Очищення від пилу</td>
          <td class="price-table__data">{{ price.cleaning }}</td>
        </tr>
        <tr v-if="price.termo !== undefined" class="price-table__row">
          <td class="price-table__data">Заміна термопасти</td>
          <td class="price-table__data">{{ price.termo }}</td>
        </tr>
        <tr v-if="price.cooler !== undefined" class="price-table__row">
          <td class="price-table__data">Кулер</td>
          <td class="price-table__data">{{ price.cooler }}</td>
        </tr>

        <tr v-if="price.display !== undefined" class="price-table__row">
          <td class="price-table__data">Дисплей у зборі</td>
          <td class="price-table__data">{{ price.display }}</td>
        </tr>
        <tr v-if="price.displayGlass !== undefined" class="price-table__row">
          <td class="price-table__data">Заміна скла дисплея</td>
          <td class="price-table__data">{{ price.displayGlass }}</td>
        </tr>
        <tr v-if="price.battery !== undefined" class="price-table__row">
          <td class="price-table__data">Акумулятор</td>
          <td class="price-table__data">{{ price.battery }}</td>
        </tr>
        <tr v-if="price.body !== undefined" class="price-table__row">
          <td class="price-table__data">Заміна корпусу</td>
          <td class="price-table__data">{{ price.body }}</td>
        </tr>
        <tr v-if="price.bodyGlass !== undefined" class="price-table__row">
          <td class="price-table__data">Заміна скла корпусу</td>
          <td class="price-table__data">{{ price.bodyGlass }}</td>
        </tr>
        <tr v-if="price.cameraGlass !== undefined" class="price-table__row">
          <td class="price-table__data">Скло камери</td>
          <td class="price-table__data">{{ price.cameraGlass }}</td>
        </tr>
        <tr v-if="price.faceId !== undefined" class="price-table__row">
          <td class="price-table__data">Face ID</td>
          <td class="price-table__data">{{ price.faceId }}</td>
        </tr>
        <tr v-if="price.micro !== undefined" class="price-table__row">
          <td class="price-table__data">Мікрофон</td>
          <td class="price-table__data">{{ price.micro }}</td>
        </tr>
        <tr v-if="price.speaker !== undefined" class="price-table__row">
          <td class="price-table__data">Динамік</td>
          <td class="price-table__data">{{ price.speaker }}</td>
        </tr>
        <tr v-if="price.mainCamera !== undefined" class="price-table__row">
          <td class="price-table__data">Основна камера</td>
          <td class="price-table__data">{{ price.mainCamera }}</td>
        </tr>
        <tr v-if="price.frontCamera !== undefined" class="price-table__row">
          <td class="price-table__data">Фронтальна камера</td>
          <td class="price-table__data">{{ price.frontCamera }}</td>
        </tr>
        <tr v-if="price.homeBtn !== undefined" class="price-table__row">
          <td class="price-table__data">Кнопка додому</td>
          <td class="price-table__data">{{ price.homeBtn }}</td>
        </tr>
        <tr v-if="price.volumeBtns !== undefined" class="price-table__row">
          <td class="price-table__data">Кнопки гучності</td>
          <td class="price-table__data">{{ price.volumeBtns }}</td>
        </tr>
        <tr v-if="price.vibro !== undefined" class="price-table__row">
          <td class="price-table__data">Вібромотор</td>
          <td class="price-table__data">{{ price.vibro }}</td>
        </tr>
        <tr v-if="price.cable !== undefined" class="price-table__row">
          <td class="price-table__data">Шлейф зарядки / роз'єм</td>
          <td class="price-table__data">{{ price.cable }}</td>
        </tr>
        <tr v-if="price.proxiSensor !== undefined" class="price-table__row">
          <td class="price-table__data">Датчик приближения</td>
          <td class="price-table__data">{{ price.proxiSensor }}</td>
        </tr>
        <tr v-if="price.water !== undefined" class="price-table__row">
          <td class="price-table__data">Очищення після води</td>
          <td class="price-table__data">від {{ price.water }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  store,
  data() {
    return {
      price:
        store.state.data[store.state.brandName][store.state.repairName].data[
          store.state.priceName
        ] || "-",
    };
  },
  computed: {
    data() {
      return store.state.data;
    },
    priceName() {
      return store.state.priceName;
    },
    repairName() {
      return store.state.repairName;
    },
    brandName() {
      return store.state.brandName;
    },
  },
};
</script>

<style></style>
