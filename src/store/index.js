import { createStore } from "vuex";
import data from "@/data.json";

export default createStore({
  state: {
    priceName: "",
    repairName: "",
    brandName: "",
    data: data,
  },
  getters: {},
  mutations: {
    priceName(state, name) {
      window.scrollTo(0, 0);
      state.priceName = name.toLowerCase().split(" ").join("");
    },
    repairName(state, name) {
      window.scrollTo(0, 0);
      state.repairName = name.toLowerCase().split(" ").join("");
    },
    brandName(state, name) {
      window.scrollTo(0, 0);
      state.brandName = name.toLowerCase().split(" ").join("");
    },
  },
  actions: {
    priceName({ commit }, name) {
      commit("priceName", name);
    },
    repairName({ commit }, name) {
      commit("repairName", name);
    },
    brandName({ commit }, name) {
      commit("brandName", name);
    },
  },
  modules: {},
});
