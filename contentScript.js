// contentScript.js
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('script[src*="googletagmanager.com"]')) {
    console.log("Google Tag Manager is found on this page.");
    // Additional logic for __ctm can be executed here directly
    if (window.__ctm && window.__ctm.config) {
      console.log(
        "__ctm.config:",
        JSON.stringify(window.__ctm.config, null, 2)
      );
    }
  } else {
    console.log("Google Tag Manager is not found on this page.");
  }
});
