global.browser = require('webextension-polyfill');
global.browser = require('@webcomponents/webcomponentsjs/webcomponents-bundle');
global.browser = require('@webcomponents/webcomponentsjs/custom-elements-es5-adapter');

import Vue from 'vue';
import App from './App.vue?shadow';
import wrap from '@vue/web-component-wrapper';

let showSanaz = false;
Vue.prototype.$browser = global.browser;
window.Vue = Vue;
const CustomElement = wrap(Vue, App);
window.customElements.define('my-sanaz', CustomElement);
let root = document.createElement('my-sanaz');
console.log(showSanaz);
root.setAttribute('style', `
        display: ${showSanaz ? 'block' : 'none' };
        background-color: white;
        position: fixed;
        top: 10%;
        right: 0;
        height: 70%;
        width: 65%;
        max-width: 400px;
        padding: 8px;
        box-sizing: border-box;
        z-index: 9999999999999999 ;`);
root.setAttribute('id', 'sanaz-container');
document.body.appendChild(root);


chrome.runtime.onMessage.addListener((msgObj, sender, sendResponse) => {
  // do something with msgObj
  console.log(msgObj);
  if (msgObj.hasOwnProperty('event') && msgObj.event === 'toggle') {
    showSanaz = !showSanaz;
    let sanazElement = document.getElementById('sanaz-container');
    sanazElement.style.display = showSanaz ? 'block' : 'none';
  }
  sendResponse({ farewell: showSanaz ? 'Hi' : 'Goodbye' });
});