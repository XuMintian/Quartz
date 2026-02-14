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
    // --- 第 1 个板块：Studying ---
    Component.Explorer({
      title: "Studying", // 配合 CSS 伪装成标题
      folderDefaultState: "open",
      useSavedState: false,
      // 🟢 修复点1：加上 :any 解决类型报错
      filterFn: (node: any) => {
        // 🟢 修复点2：使用黑名单逻辑。只要不是其他几个大板块，就保留。
        // 这样就不需要去读取 node.file.path 了，绝对不会报错。
        const omit = new Set(["Projects", "Resources", "Thoughts", "Attachments", "tags", "Inbox", "templates", "hosting", "index"])
        return node.name === "Studying" || !omit.has(node.name)
      },
      // 内部只剩一个文件夹了，不需要复杂排序，默认即可
    }),

    // --- 第 2 个板块：Projects ---
    Component.Explorer({
      title: "Projects",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        // 只保留 Projects，排除其他
        const omit = new Set(["Studying", "Resources", "Thoughts", "Attachments", "tags", "Inbox", "templates", "hosting", "index"])
        return node.name === "Projects" || !omit.has(node.name)
      },
    }),

    // --- 第 3 个板块：Thoughts ---
    Component.Explorer({
      title: "Thoughts",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        // 只保留 Thoughts
        const omit = new Set(["Studying", "Projects", "Resources", "Attachments", "tags", "Inbox", "templates", "hosting", "index"])
        return node.name === "Thoughts" || !omit.has(node.name)
      },
    }),

    // --- 第 4 个板块：Resources ---
    Component.Explorer({
      title: "Resources",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        // 只保留 Resources
        const omit = new Set(["Studying", "Projects", "Thoughts", "Attachments", "tags", "Inbox", "templates", "hosting", "index"])
        return node.name === "Resources" || !omit.has(node.name)
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
