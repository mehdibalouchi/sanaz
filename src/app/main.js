global.browser = require('webextension-polyfill');
global.browser = require('@webcomponents/webcomponentsjs/webcomponents-bundle');
global.browser = require('@webcomponents/webcomponentsjs/custom-elements-es5-adapter');


import Vue from 'vue';
import App from './App.vue?shadow';
import wrap from '@vue/web-component-wrapper';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

Vue.prototype.$browser = global.browser;
window.Vue = Vue;
const CustomElement = wrap(Vue, App);
window.customElements.define('my-sanaz', CustomElement);
let root = document.createElement('my-sanaz');
root.setAttribute('style', `
        display:'none';
        background-color: white;
        position: fixed;
        top: 10%;
        right: 0;
        width: 65%;
        max-width: 400px;
        padding: 0px;
        box-sizing: border-box;
        z-index: 9999999999999999 ;`);
root.setAttribute('id', 'sanaz-container');

root.setAttribute('show', 'true');
document.body.appendChild(root);

window.addEventListener('message', function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == 'TFXI_HANDSHAKEُ')) {
    console.log('Sanaz received: ' + JSON.stringify(event.data));
  }
}, false);


chrome.runtime.onMessage.addListener((msgObj, sender, sendResponse) => {
  let sanazElement = document.getElementById('sanaz-container');
  if (msgObj.hasOwnProperty('event') && msgObj.event === 'toggle') {
    let showSanaz = sanazElement.style.display == 'block';
    showSanaz = !showSanaz;
    sanazElement.style.display = showSanaz ? 'block' : 'none';
    sanazElement.show = showSanaz ? 'true' : 'none';
  }
  sendResponse({ farewell: showSanaz ? 'Hi' : 'Goodbye' });
});