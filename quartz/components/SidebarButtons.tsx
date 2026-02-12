import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const SidebarButtons: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div class="sidebar-buttons-container">
        {/* 左侧按钮：加了 id 和 onclick 事件 */}
        <button id="left-sidebar-toggle" class="sidebar-btn left-btn" aria-label="Toggle Left Sidebar">
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        {/* 右侧按钮 */}
        <button id="right-sidebar-toggle" class="sidebar-btn right-btn" aria-label="Toggle Right Sidebar">
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    )
  }

  // 核心逻辑：点击按钮给 body 加/删 class
  SidebarButtons.afterDOMLoaded = `
    const leftBtn = document.getElementById('left-sidebar-toggle')
    const rightBtn = document.getElementById('right-sidebar-toggle')
    const body = document.body

    if (leftBtn) {
      leftBtn.onclick = (e) => {
        // 阻止冒泡，防止误触
        e.stopPropagation(); 
        body.classList.toggle('show-left-sidebar')
        console.log("Left button clicked, class toggled") // 调试用
      }
    }
    
    if (rightBtn) {
      rightBtn.onclick = (e) => {
        e.stopPropagation();
        body.classList.toggle('show-right-sidebar')
        console.log("Right button clicked, class toggled")
      }
    }
    
    // 点击屏幕空白处关闭侧边栏 (可选优化体验)
    document.addEventListener('click', (e) => {
      const target = e.target;
      // 如果点的不是侧边栏本身，也不是按钮，就关闭侧边栏
      if (!target.closest('.sidebar') && !target.closest('.sidebar-btn')) {
         body.classList.remove('show-left-sidebar');
         body.classList.remove('show-right-sidebar');
      }
    })
  `
  
  // 强制样式：固定在屏幕角落
  SidebarButtons.css = `
  .sidebar-btn {
    position: fixed; /* 关键！脱离文档流 */
    top: 20px;
    z-index: 2000; /* 保证在最最上层，比侧边栏还高 */
    background: rgba(255, 255, 255, 0.5); /* 给按钮加个浅白底，防止看不清 */
    backdrop-filter: blur(5px);
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 8px;
    cursor: pointer;
    padding: 8px;
    color: var(--darkgray);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .left-btn { left: 20px; }
  .right-btn { right: 20px; }

  .sidebar-btn:hover {
    background: var(--secondary);
    color: white;
    transform: scale(1.05);
  }
  
  /* 只有在屏幕比较宽的时候才显示这个特定的按钮逻辑，手机端 Quartz 自带汉堡菜单 */
  @media (max-width: 800px) {
    .sidebar-btn { display: none; } 
  }
  `

  return SidebarButtons
}) satisfies QuartzComponentConstructor