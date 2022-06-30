import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showUserDialog: false,
  },
  getters: {
    showUserDialog: (state) => {
      return state.showUserDialog;
    },
  },
  mutations: {
    showDialog(state, boolean) {
      state.showUserDialog = boolean;
    },
  },
  actions: {
    showUserDialog(context, status) {
      context.commit("showDialog", true);
    },
    closeUserDialog(context, status) {
      context.commit("showDialog", false);
    },
  },
  modules: {},
});
