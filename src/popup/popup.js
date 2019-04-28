global.browser = require('webextension-polyfill');

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { event: 'toggle' }, function(response) {
    console.log(response);
    window.close();
  });
});