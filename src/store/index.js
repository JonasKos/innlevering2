import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    email: ""
  },
  getters: {},
  mutations: {
    setName(state, name) {
      state.name = name;
      
    },
    setEmail(state, email) {
      state.email = email;
    }
  },
  actions: {},
  modules: {},
});
