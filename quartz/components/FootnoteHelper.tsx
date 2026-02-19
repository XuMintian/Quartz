import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((() => {
  function FootnoteHelper() {
    return null
  }

  FootnoteHelper.afterDOMLoaded = `
    // 监听全局点击事件
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a")
      if (!link) return

      const href = link.getAttribute("href")
      // 判断是否是脚注相关的跳转（通常带 #fn 或 #fnref）
      if (href && href.startsWith("#fn")) {
        e.preventDefault() // 阻止默认瞬间跳转
        const id = href.substring(1)
        const targetElement = document.getElementById(id)
        
        if (targetElement) {
          // 更新 URL 记录，但不触发默认滚动
          history.pushState(null, "", href)
          
          // 执行平滑居中滚动
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "center" // 核心：垂直居中
          })
        }
      }
    })
  `

  return FootnoteHelper
}) satisfies QuartzComponentConstructor)