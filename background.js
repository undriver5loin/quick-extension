// quick-extension/background.js

chrome.runtime.onInstalled.addListener(() => {
  console.log('Quick Extension Installed!');
});

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: 'https://www.example.com'
  });
});
