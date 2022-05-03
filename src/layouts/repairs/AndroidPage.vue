<template>
  <div class="repairs">
    <div class="container">
      <h2 class="repairs__title title-h2">Ремонты Android</h2>
      <div class="repairs-items">
        <!-- Samsung -->
        <div class="repairs-items__item">
          <div class="repairs-items__img">
            <img src="@/assets/logos/samsung.svg" alt="samsung" />
          </div>
          <router-link
            @click="
              repairName(data.samsung.sseries.name),
                brandName(data.samsung.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.samsung.sseries.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.samsung.aseries.name),
                brandName(data.samsung.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.samsung.aseries.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.samsung.mseries.name),
                brandName(data.samsung.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.samsung.mseries.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.samsung.noteseries.name),
                brandName(data.samsung.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.samsung.noteseries.name }}</router-link
          >
        </div>
        <!-- Xiaomi -->
        <div class="repairs-items__item">
          <div class="repairs-items__img">
            <img src="@/assets/logos/xiaomi.svg" alt="xiaomi" />
          </div>
          <router-link
            @click="
              repairName(data.xiaomi.redmi.name), brandName(data.xiaomi.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.xiaomi.redmi.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.xiaomi.redminote.name),
                brandName(data.xiaomi.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.xiaomi.redminote.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.xiaomi.mi.name), brandName(data.xiaomi.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.xiaomi.mi.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.xiaomi.poco.name), brandName(data.xiaomi.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.xiaomi.poco.name }}</router-link
          >
        </div>
        <!-- Huawei -->
        <div class="repairs-items__item">
          <div class="repairs-items__img">
            <img src="@/assets/logos/huawei.svg" alt="huawei" />
          </div>
          <router-link
            @click="repairName(data.huawei.p.name), brandName(data.huawei.name)"
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.huawei.p.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.huawei.honor.name), brandName(data.huawei.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.huawei.honor.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.huawei.nova.name), brandName(data.huawei.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.huawei.nova.name }}</router-link
          >
          <router-link
            @click="repairName(data.huawei.y.name), brandName(data.huawei.name)"
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.huawei.y.name }}</router-link
          >
          <router-link
            @click="
              repairName(data.huawei.mate.name), brandName(data.huawei.name)
            "
            to="/ModelsPage"
            class="repairs-items__btn repair-link"
            >{{ data.huawei.mate.name }}</router-link
          >
        </div>
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
  },
};
</script>

<style></style>
