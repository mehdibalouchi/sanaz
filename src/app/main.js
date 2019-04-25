import Vue from 'vue';
import App from './App';
import store from '../store/index';
import $ from 'jquery';

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;


/* eslint-disable no-new */
$(document).ready(function() {
  console.log('its working');
  let root = document.createElement('div');
  root.setAttribute('id', 'sanaz');
  document.body.appendChild(root);

  new Vue({
    el: '#sanaz',
    store,

    render: h => h(App),
  });

});
