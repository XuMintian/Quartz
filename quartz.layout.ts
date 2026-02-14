import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  
  header: [
    Component.Search(),    // 👈 搜索框排第一
    Component.PageTitle(),
  ],
  head: Component.Head(),
  afterBody: [Component.Graph()],
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
              title: "📖 学习区 | Studying", 
              folderClickBehavior: "link",
              folderDefaultState: "open",
              useSavedState: false,
              filterFn: (node: any) => {
        // 1. 如果是文件夹，名字必须叫 Studying
        if (node.children.length > 0) {
          return node.name === "Studying"
        }
        // 2. 如果是文件，路径必须包含 Studying/
        // 注意：这里用 path 来锁定它必须属于这个分类
        const path = node.file?.path ?? ""
        return path.includes("Studying/")
      },
    }),
    Component.Explorer({
              title: "📂 项目区 | Projects", 
              folderClickBehavior: "link",
              folderDefaultState: "open",
              useSavedState: false,
              filterFn: (node:any) => node.name !== "Attachments"&&node.name !== "Inbox"&&node.name !== "Studying"&&node.name !== "Resources"&&node.name !== "Thoughts",
    }),
    Component.Explorer({
              title: "🤔 一些思考 | Thoughts", 
              folderClickBehavior: "link",
              folderDefaultState: "open",
              useSavedState: false,
              filterFn: (node:any) => node.name !== "Attachments"&&node.name !== "Inbox"&&node.name !== "Studying"&&node.name !== "Resources"&&node.name !== "Projects",
    }),
    Component.Explorer({
              title: "📦 资源区 | Resources", 
              folderClickBehavior: "link",
              folderDefaultState: "open",
              useSavedState: false,
              filterFn: (node:any) => node.name !== "Attachments"&&node.name !== "Inbox"&&node.name !== "Studying"&&node.name !== "Projects"&&node.name !== "Thoughts",
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
