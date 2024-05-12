document.getElementById("sendMsgButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length > 0 && tabs[0].id) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "sendMessageToIframe" },
        function (response) {
          if (chrome.runtime.lastError) {
            console.log(
              "Error sending message:",
              chrome.runtime.lastError.message
            );
          } else {
            console.log("Message sent successfully.");
          }
        }
      );
    } else {
      console.log("No active tab found.");
    }
  });
});
