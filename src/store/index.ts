import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import TodoModule from "./todo/index";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo: TodoModule
  },
  plugins: [vuexLocal.plugin]
});
