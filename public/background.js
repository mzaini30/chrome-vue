chrome.runtime.onInstalled.addListener(({ reason, version }) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    showReadme();
  }
});

chrome.browserAction.onClicked.addListener((tab) => {
  showReadme();
});

function showReadme(info, tab) {
  let url = chrome.runtime.getURL("index.html");
  chrome.tabs.create({ url });
}