

import { initCopyLink } from "./copy-link.js";
import { initPageTransitions } from "./page-transitions.js";

// Initialize all modules
document.addEventListener("DOMContentLoaded", () => {
  initCopyLink();
  initPageTransitions();
});
