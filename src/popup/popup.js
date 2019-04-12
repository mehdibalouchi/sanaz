import Vue from 'vue';
import App from './App';
import store from '../store';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,

  render: h => h(App),
});
