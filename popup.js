document.getElementById("checkButton").addEventListener("click", function () {
  chrome.runtime.sendMessage({ action: "checkGTM" }, function (response) {
    document.getElementById("output").textContent = JSON.stringify(
      response.data,
      null,
      2
    );
  });
});
