chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkGTM") {
    chrome.scripting.executeScript(
      {
        target: { tabId: sender.tab.id },
        func: () => {
          console.log("window.google_tag_manager:", window.google_tag_manager);
          if (window.google_tag_manager) {
            console.log("__ctm.config:", window.__ctm.config);
            return window.__ctm.config;
          } else {
            console.log("Google Tag Manager is not found.");
          }
        },
      },
      (results) => {
        sendResponse({ data: results[0]?.result });
      }
    );
  }
  return true;
});
