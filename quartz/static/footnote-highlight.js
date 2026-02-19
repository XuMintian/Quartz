function setupFootnoteHighlight() {
  const HIGHLIGHT_CLASS = "footnote-highlight-active";

  function scrollToCenterAndHighlight(target) {
    if (!target) return;

    // 移除旧高亮
    document.querySelectorAll("." + HIGHLIGHT_CLASS).forEach((el) => {
      el.classList.remove(HIGHLIGHT_CLASS);
    });

    // 居中滚动
    const rect = target.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const centerOffset = absoluteTop - window.innerHeight / 2 + rect.height / 2;

    window.scrollTo({ top: centerOffset, behavior: "smooth" });

    // 高亮目标元素
    // 脚注编号在文中是 <sup>，脚注内容在 <li> 里
    const highlightEl =
      target.closest("sup") ||
      target.closest("li[id]") ||
      target;

    highlightEl.classList.add(HIGHLIGHT_CLASS);

    // 2秒后淡出高亮
    setTimeout(() => {
      highlightEl.classList.remove(HIGHLIGHT_CLASS);
    }, 2000);
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href?.startsWith("#")) return;

    // 判断是否是脚注链接（Quartz/rehype 生成的 id 格式）
    const isFnLink =
      href.includes("fn") ||
      link.closest(".footnotes") !== null ||
      link.closest("sup") !== null;

    if (!isFnLink) return;

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    history.pushState(null, "", href);
    scrollToCenterAndHighlight(target);
  });
}

// 初始加载 & Quartz SPA 路由切换时重新绑定
document.addEventListener("DOMContentLoaded", setupFootnoteHighlight);
document.addEventListener("nav", setupFootnoteHighlight);