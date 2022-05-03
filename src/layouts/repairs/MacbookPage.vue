<template>
  <div class="repairs">
    <div class="container">
      <h2 class="repairs__title title-h2">Ремонт MacBook</h2>
      <img src="@/assets/logos/apple.svg" alt="apple" class="repairs-logo" />
      <div class="repairs-items-links">
        <router-link
          to="/ModelsPage"
          class="repair-link"
          @click="
            repairName(data.apple.macbookpro.name), brandName(data.apple.name)
          "
        >
          {{ data.apple.macbookpro.name }}
        </router-link>
        <router-link
          to="/ModelsPage"
          class="repair-link"
          @click="
            repairName(data.apple.macbookair.name), brandName(data.apple.name)
          "
        >
          {{ data.apple.macbookair.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
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
    priceName(name) {
      store.dispatch("priceName", name);
    },
  },
};
</script>

<style></style>
