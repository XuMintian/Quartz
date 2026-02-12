import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/sidebarButtons.scss"

export default (() => {
  const SidebarButtons: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <div class="sidebar-buttons">
        {/* 左侧按钮 */}
        <button id="left-sidebar-toggle" class="sidebar-btn" aria-label="Toggle Left Sidebar">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* 中间留空，或者你可以放点别的 */}
        
        {/* 右侧按钮 */}
        <button id="right-sidebar-toggle" class="sidebar-btn" aria-label="Toggle Right Sidebar">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    )
  }

  // 这里的代码负责处理点击事件：给 body 加 class
  SidebarButtons.afterDOMLoaded = `
    const leftBtn = document.getElementById('left-sidebar-toggle')
    const rightBtn = document.getElementById('right-sidebar-toggle')
    const body = document.body

    if (leftBtn) {
      leftBtn.onclick = () => {
        body.classList.toggle('show-left-sidebar')
      }
    }
    
    if (rightBtn) {
      rightBtn.onclick = () => {
        body.classList.toggle('show-right-sidebar')
      }
    }
  `
  
  // 这里写一点基础样式，让按钮漂亮点
  SidebarButtons.css = `
  .sidebar-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 1rem;
    pointer-events: none; /* 让中间区域不挡鼠标 */
  }
  
  .sidebar-btn {
    pointer-events: auto; /* 按钮可以点 */
    background: none;
    border: none;
    cursor: pointer;
    color: var(--darkgray);
    transition: transform 0.2s;
  }
  
  .sidebar-btn:hover {
    transform: scale(1.1);
    color: var(--secondary);
  }
  `

  return SidebarButtons
}) satisfies QuartzComponentConstructor