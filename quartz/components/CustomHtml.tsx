import { QuartzComponent, QuartzComponentProps } from "./types"

// 这个组件专门用来放你自定义的进度条和悬浮按钮
function CustomHtml({ displayClass }: QuartzComponentProps) {
  return (
    <div class={displayClass} dangerouslySetInnerHTML={{ __html: `
      <div id="progress-container"><div id="progress-bar"></div></div>
      
      <div class="fab-container">
        <a id="back-to-top" class="fab-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
        </a>
        <a href="/" class="fab-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </a>
      </div>

      <script>
        // 进度条与按钮逻辑
        window.addEventListener('scroll', () => {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          const pb = document.getElementById("progress-bar");
          if (pb) pb.style.width = scrolled + "%";

          const btt = document.getElementById('back-to-top');
          if (btt) {
            if (window.scrollY > 300) { btt.classList.add('show'); } 
            else { btt.classList.remove('show'); }
          }
        });
      </script>
    `}} />
  )
}

export default (() => CustomHtml) satisfies QuartzComponentConstructor