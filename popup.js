document.getElementById("logCtmButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length > 0 && tabs[0].id) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: injectAndLogCTM,
      });
    }
  });
});

function injectAndLogCTM() {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("injectedScript.js");
  document.head.appendChild(script);

  window.addEventListener("message", function (event) {
    if (event.data.type === "CTM_FOUND") {
      console.log("__ctm object:", event.data.data);
    } else if (event.data.type === "CTM_NOT_FOUND") {
      console.log("No __ctm object found.");
    } else if (event.data.type === "CTM_RELATED_PROP") {
      console.log("Found related property:", event.data.prop, event.data.value);
    }
  });
}
