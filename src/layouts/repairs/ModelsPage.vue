<template>
  <div class="repairs">
    <div class="container">
      <h2 class="repairs__title title-h2">
        Ремонт {{ data[brandName].name }} {{ data[brandName][repairName].name }}
      </h2>
      <img src="@/assets/logos/apple.svg" alt="apple" class="repairs-logo" />
      <div class="repairs-items-links">
        <router-link
          to="/PricePage"
          v-for="i in data[brandName][repairName].data"
          :key="i.name"
          class="repair-link"
          @click="priceName(i.name)"
        >
          {{ i.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  store,
  computed: {
    data() {
      return store.state.data;
    },
    repairName() {
      return store.state.repairName;
    },
    brandName() {
      return store.state.brandName;
    },
  },
  methods: {
    priceName(name) {
      store.dispatch("priceName", name);
    },
  },
};
</script>

<style></style>
