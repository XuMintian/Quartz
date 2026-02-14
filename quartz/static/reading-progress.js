// quartz/static/reading-progress.js

(function() {
  let progressBar = null;
  let scrollHandler = null;

  function initProgressBar() {
    if (progressBar) {
      progressBar.remove();
    }
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
    }

    progressBar = document.createElement("div");
    progressBar.className = "reading-progress";
    document.body.appendChild(progressBar);

    scrollHandler = function() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      progressBar.style.width = Math.min(progress, 100) + "%";
    };

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", scrollHandler);
    scrollHandler();
  }

  document.addEventListener("DOMContentLoaded", initProgressBar);
  document.addEventListener("nav", initProgressBar);
})();