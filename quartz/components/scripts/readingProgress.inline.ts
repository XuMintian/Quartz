// quartz/components/scripts/readingProgress.inline.ts

document.addEventListener("DOMContentLoaded", () => {
  // 创建进度条元素
  const progressBar = document.createElement("div");
  progressBar.className = "reading-progress";
  document.body.appendChild(progressBar);

  // 监听滚动事件
  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;

    // 更新进度条宽度
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  });
});