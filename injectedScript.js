(function () {
  if (typeof window.__ctm !== "undefined") {
    window.postMessage(
      { type: "CTM_FOUND", data: JSON.parse(JSON.stringify(window.__ctm)) },
      "*"
    );
  } else {
    window.postMessage({ type: "CTM_NOT_FOUND" }, "*");
    for (let prop in window) {
      if (prop.toLowerCase().includes("ctm")) {
        window.postMessage(
          { type: "CTM_RELATED_PROP", prop: prop, value: window[prop] },
          "*"
        );
      }
    }
  }
})();
