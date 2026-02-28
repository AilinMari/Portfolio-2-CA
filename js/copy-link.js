
const copyText = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

//   // Fallback for older browsers
//   const helper = document.createElement("textarea");
//   helper.value = text;
//   helper.setAttribute("readonly", "");
//   helper.style.position = "absolute";
//   helper.style.left = "-9999px";
//   document.body.appendChild(helper);
//   helper.select();
//   document.execCommand("copy");
//   document.body.removeChild(helper);
};

const initCopyLink = () => {
  const copyButtons = document.querySelectorAll("[data-copy]");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const status = button.parentElement?.querySelector(".copy-status");

      try {
        await copyText(window.location.href);
        if (status) {
          status.textContent = "Link copied.";
        }
      } catch (error) {
        if (status) {
          status.textContent = "Copy failed. Try again.";
        }
      }
    });
  });
};

export { initCopyLink };
