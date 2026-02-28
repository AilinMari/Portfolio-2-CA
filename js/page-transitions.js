
const shouldIntercept = (link) => {
  if (link.target === "_blank" || link.hasAttribute("download")) {
    return false;
  }

  if (link.getAttribute("href")?.startsWith("#")) {
    return false;
  }

  const url = new URL(link.href, window.location.origin);
  return url.origin === window.location.origin;
};

const initPageTransitions = () => {
  const pageLinks = document.querySelectorAll("a[href]");

  // Mark page as transition-in on load
  document.body.classList.add("page-transition-in");

  pageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!shouldIntercept(link)) {
        return;
      }

      event.preventDefault();
      document.body.classList.remove("page-transition-in");
      document.body.classList.add("page-transition-out");

      window.setTimeout(() => {
        window.location.href = link.href;
      }, 220);
    });
  });
};

export { initPageTransitions };
