import { createStore } from 'vuex';

import cartModule from './modules/cart';
import productsModule from './modules/products';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule 
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    authenticate(state, loginStatus) {
      state.isLoggedIn = loginStatus;
    }
  },
  actions: {
    login({ commit }) {
      commit('authenticate', true);
    },
    logout({ commit }) {
      commit('authenticate', false);
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
