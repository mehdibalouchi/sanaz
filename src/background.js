global.browser = require('webextension-polyfill');
import store from './store';

console.log('fuck');

//
// chrome.browserAction.onClicked.addListener(tab => {
//   console.log('Browser Action Triggered')
//   // for the current tab, inject the "inject.js" file & execute it
//   chrome.tabs.executeScript(tab.id, {
//     file: 'main.js'
//   })
// })
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   tab.executeScript({
//     file: 'main.js'
//   })
//   //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
// });
