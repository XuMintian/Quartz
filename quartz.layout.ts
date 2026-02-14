import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
// 在 import 之后添加这一段
import { QuartzComponent, QuartzComponentProps } from "./quartz/components/types"

const CustomHtml = (html: string): QuartzComponent => {
  const component = ({ displayClass }: QuartzComponentProps) => (
    <div class={displayClass} dangerouslySetInnerHTML={{ __html: html }} />
  )
  return component
}


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  
  header: [
    Component.Search(),    // 👈 搜索框排第一
    Component.PageTitle(),
  ],
  head: Component.Head(),
  afterBody: [
              Component.Graph(),
              Component.Html({
      html: `
        <div id="progress-container"><div id="progress-bar"></div></div>
        <script>
          window.onscroll = function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("progress-bar").style.width = scrolled + "%";
          };
        </script>
      `
    }),
            
            
            ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/XuMintian",
    },
    
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  
  beforeBody: [
    Component.SidebarButtons(), // 👈 新加的，放在最上面
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
   // Component.Flex({
      //components: [
        //{
          //Component: Component.Search(),
          //grow: true,
        //},
        //{ Component: Component.Darkmode() },
        //{ Component: Component.ReaderMode() },
      //],
    //}),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer({
              title: "🗺️ 导航 | navigation", 
              folderClickBehavior: "link",
              folderDefaultState: "open",
              useSavedState: false,
              filterFn: (node:any) => node.name !== "Attachments"&&node.name !== "Inbox",   
            }),
    Component.RecentNotes({
      title: "✨ 最近更新 | Recently",
      limit: 3,
      filter: (f) => !f.slug?.startsWith("templates/"), // 过滤掉模板文件夹
    }),
  
  ],
  right: [
    
    //Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  
  beforeBody: [
    Component.SidebarButtons(),
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
       //{
          //Component: Component.Search(),
          //grow: true,
        //},
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
