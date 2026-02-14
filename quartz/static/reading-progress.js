// quartz/static/reading-progress.js

let progressBar = null;
let scrollHandler = null;

function initProgressBar() {
  // 如果已存在，先移除
  if (progressBar) {
    progressBar.remove();
  }
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
  }

  // 创建新的进度条
  progressBar = document.createElement("div");
  progressBar.className = "reading-progress";
  document.body.appendChild(progressBar);

  // 定义滚动处理函数
  scrollHandler = function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = Math.min(progress, 100) + "%";
  };

  window.addEventListener("scroll", scrollHandler);
  window.addEventListener("resize", scrollHandler);
  scrollHandler(); // 初始化
}

// 首次加载
document.addEventListener("DOMContentLoaded", initProgressBar);

// Quartz 路由变化时重新初始化
document.addEventListener("nav", initProgressBar);