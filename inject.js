console.log("Listening for messages from iframes.");
window.addEventListener("message", (event) => {
  if (event.origin === "https://expected-origin.com") {
    console.log("Data received from iframe:", event.data);
  }
});
