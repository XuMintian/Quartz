// quartz/static/back-to-top.js

(function() {
  let backToTopButton = null;
  let scrollHandler = null;

  function initBackToTop() {
    if (backToTopButton) {
      backToTopButton.remove();
    }
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
    }

    backToTopButton = document.createElement("button");
    backToTopButton.className = "back-to-top";
    backToTopButton.innerHTML = "🚀";
    backToTopButton.setAttribute("aria-label", "回到顶部");
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    scrollHandler = function() {
      if (window.scrollY > 200) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
  }

  document.addEventListener("DOMContentLoaded", initBackToTop);
  document.addEventListener("nav", initBackToTop);
})();