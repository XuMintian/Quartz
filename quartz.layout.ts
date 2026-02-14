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
      title: "Studying", 
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        // 核心逻辑：只排除其他三个大板块和系统文件夹，保留 Studying 及其下所有内容（含 _index）
        const omit = new Set(["Projects", "Resources", "Thoughts", "Attachments", "tags", "Inbox", "templates", "hosting"]);
        return node.name === "Studying" || !omit.has(node.name);
      },
    }),

    // --- 2. Projects 板块 ---
    Component.Explorer({
      title: "Projects",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        const omit = new Set(["Studying", "Resources", "Thoughts", "Attachments", "tags", "Inbox", "templates", "hosting"]);
        return node.name === "Projects" || !omit.has(node.name);
      },
    }),

    // --- 3. Thoughts 板块 ---
    Component.Explorer({
      title: "Thoughts",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        const omit = new Set(["Studying", "Projects", "Resources", "Attachments", "tags", "Inbox", "templates", "hosting"]);
        return node.name === "Thoughts" || !omit.has(node.name);
      },
    }),

    // --- 4. Resources 板块 ---
    Component.Explorer({
      title: "Resources",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node: any) => {
        const omit = new Set(["Studying", "Projects", "Thoughts", "Attachments", "tags", "Inbox", "templates", "hosting"]);
        return node.name === "Resources" || !omit.has(node.name);
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
