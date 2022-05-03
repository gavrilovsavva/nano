<template>
  <div class="container">
    <div class="contacts">
      <h2 class="title-h2">Контакты</h2>
      <div class="contacts-items">
        <address-shevchenko></address-shevchenko>
        <address-starosennaya></address-starosennaya>
        <address-kosmonavtov></address-kosmonavtov>
        <address-viliamsa></address-viliamsa>
      </div>
    </div>
  </div>
</template>

<script>
import AddressShevchenko from "@/components/contacts/AddressShevchenko.vue";
import AddressStarosennaya from "@/components/contacts/AddressStarosennaya.vue";
import AddressKosmonavtov from "@/components/contacts/AddressKosmonavtov.vue";
import AddressViliamsa from "@/components/contacts/AddressViliamsa.vue";

export default {
  components: {
    AddressShevchenko,
    AddressStarosennaya,
    AddressKosmonavtov,
    AddressViliamsa,
  },
};
</script>

<style></style>
