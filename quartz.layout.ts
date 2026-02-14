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
// --- 1. Studying 板块 ---
    Component.Explorer({
      title: "📖 学习区 | Studying", 
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        // 如果是文件夹，只允许名字叫 Studying 的通过
        if (node.children.length > 0) {
          return node.name === "Studying"
        }
        // 如果是文件，只有当它没有父文件夹（即在根目录，虽然你这不太可能）
        // 或者它的父节点通过了上面的过滤时，它才会被保留
        return true 
      },
    }),

    // --- 2. Projects 板块 ---
    Component.Explorer({
      title: "📂 项目区 | Projects", 
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        if (node.children.length > 0) {
          return node.name === "Projects"
        }
        return true
      },
    }),

    // --- 3. Thoughts 板块 ---
    Component.Explorer({
      title: "🤔 一些思考 | Thoughts", 
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        if (node.children.length > 0) {
          return node.name === "Thoughts"
        }
        return true
      },
    }),

    // --- 4. Resources 板块 ---
    Component.Explorer({
      title: "📦 资源区 | Resources", 
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        if (node.children.length > 0) {
          return node.name === "Resources"
        }
        return true
      },
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
