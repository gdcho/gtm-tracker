// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: checkForGTM,
  });
});

function checkForGTM() {
  const hasGTM = !!document.querySelector(
    'script[src*="googletagmanager.com"]'
  );
  console.log(
    `Google Tag Manager is ${hasGTM ? "" : "not "}found on this page.`
  );
}
