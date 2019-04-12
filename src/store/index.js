import Vue from 'vue';
import Vuex from 'vuex';

import input from './modules/input'
import chat from './modules/chat'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['chat']
});

export default new Vuex.Store({
  modules:{
    input,
    chat
  },
  plugins: [vuexLocal.plugin]
});
