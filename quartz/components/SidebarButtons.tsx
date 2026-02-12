import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const SidebarButtons: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div class="sidebar-buttons-container">
        <button id="left-sidebar-toggle" class="sidebar-btn left-btn" aria-label="Toggle Left Sidebar">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        <button id="right-sidebar-toggle" class="sidebar-btn right-btn" aria-label="Toggle Right Sidebar">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    )
  }

  // 👇 核心修改：封装成函数，并监听 'nav' 事件
  SidebarButtons.afterDOMLoaded = `
    function initSidebarButtons() {
      const leftBtn = document.getElementById('left-sidebar-toggle')
      const rightBtn = document.getElementById('right-sidebar-toggle')
      const body = document.body

      // 绑定左侧
      if (leftBtn) {
        // 先移除旧事件防止重复(虽非必须但保险)
        leftBtn.onclick = null; 
        leftBtn.onclick = (e) => {
          e.stopPropagation(); 
          body.classList.toggle('show-left-sidebar')
        }
      }
      
      // 绑定右侧
      if (rightBtn) {
        rightBtn.onclick = null;
        rightBtn.onclick = (e) => {
          e.stopPropagation();
          body.classList.toggle('show-right-sidebar')
        }
      }
      
      // 点击空白关闭 (可选，增强体验)
      document.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('.sidebar') && !target.closest('.sidebar-btn')) {
           body.classList.remove('show-left-sidebar');
           body.classList.remove('show-right-sidebar');
        }
      }, { once: true }) // 只绑一次或者在每次nav里处理，这里简单处理即可
    }

    // 1. 页面初次加载时运行
    initSidebarButtons()

    // 2. ⚠️ 关键：每次 SPA 跳转结束时，重新运行！
    window.addEventListener('nav', initSidebarButtons)
  `
  
  SidebarButtons.css = `
  /* 样式保持不变，防止被清空 */
  .sidebar-buttons-container {
      pointer-events: none;
      position: fixed;
      top: 0; left: 0; width: 100%; height: 0;
      z-index: 10001;
  }
  .sidebar-btn {
      pointer-events: auto;
      position: fixed; top: 20px;
      z-index: 10002 !important;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(5px);
      border-radius: 6px;
      padding: 6px;
      cursor: pointer;
      color: var(--darkgray);
      border: 1px solid rgba(0,0,0,0.05);
      transition: transform 0.2s;
  }
  .left-btn { left: 20px; }
  .right-btn { right: 20px; }
  .sidebar-btn:hover { background: var(--secondary); color: white; transform: scale(1.05); }
  @media (max-width: 800px) { .sidebar-buttons-container { display: none; } }
  `

  return SidebarButtons
}) satisfies QuartzComponentConstructor