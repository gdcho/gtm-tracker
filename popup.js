document
  .getElementById("checkGtmButton")
  .addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: checkForGTM,
      });
    });
  });

function checkForGTM() {
  const hasGTM = !!document.querySelector(
    'script[src*="googletagmanager.com"]'
  );
  console.log(
    `Google Tag Manager is ${hasGTM ? "" : "not "}found on this page.`
  );
  if (hasGTM) {
    console.log("__ctm.config:", JSON.stringify(window.__ctm.config, null, 2));
  } else {
    console.log("error");
  }
}
