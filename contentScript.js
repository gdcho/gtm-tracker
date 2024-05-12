chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "sendMessageToIframe") {
    sendMessageToIframe();
    sendResponse({ status: "Message received by content script" });
  }
});

function sendMessageToIframe() {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.contentWindow.postMessage(
      "requestData",
      "https://expected-origin.com"
    );
    console.log("Request data sent to iframe.");
  } else {
    console.log("No iframe found to send a message to.");
  }
}
