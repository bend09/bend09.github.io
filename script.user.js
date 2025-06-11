// ==UserScript==
// @name         Block Triple Tap - TrevorSpace
// @namespace    https://www.trevorspace.com/
// @version      1.0
// @description  Prevent the safety triple-tap from closing the site
// @match        *://*.trevorspace.com/*
// @grant        none
// ==/UserScript==

(function() {
  let tapTimes = [];

  document.addEventListener('touchstart', (e) => {
    const now = Date.now();
    tapTimes.push(now);
    tapTimes = tapTimes.slice(-3);

    if (tapTimes.length === 3 && (tapTimes[2] - tapTimes[0]) < 600) {
      e.stopPropagation();
      e.preventDefault();
      console.log("🚫 Triple tap blocked.");
    }
  }, true);
})();