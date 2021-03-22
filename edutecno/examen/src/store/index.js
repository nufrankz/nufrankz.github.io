import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    password: "",
  },
  mutations: {
    // state = desde vuex states, data = json
    SET_USER_DATA: (state, data) => {
      state.username = data.username;
      state.token = data.token;
    },
  },
  actions: {
    // Invoca SET_USER_DATA. data = user input
    setUserData: ({ commit }, data) => {
      commit("SET_USER_DATA", data);
    },
  },
  modules: {},
});
