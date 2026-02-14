// quartz/static/back-to-top.js

let backToTopButton = null;
let scrollHandler = null;

function initBackToTop() {
  // 如果已存在，先移除
  if (backToTopButton) {
    backToTopButton.remove();
  }
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
  }

  // 创建按钮
  backToTopButton = document.createElement("button");
  backToTopButton.className = "back-to-top";
  backToTopButton.innerHTML = "↑"; // 可以改成其他图标，比如 "⬆" 或 "▲"
  backToTopButton.setAttribute("aria-label", "回到顶部");
  document.body.appendChild(backToTopButton);

  // 点击回到顶部
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 监听滚动，决定按钮显示/隐藏
  scrollHandler = function() {
    if (window.scrollY > 300) { // 滚动超过 300px 时显示
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  };

  window.addEventListener("scroll", scrollHandler);
  scrollHandler(); // 初始化
}

// 首次加载
document.addEventListener("DOMContentLoaded", initBackToTop);

// Quartz 路由变化时重新初始化
document.addEventListener("nav", initBackToTop);