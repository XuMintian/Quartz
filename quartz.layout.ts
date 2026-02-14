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
  title: "", 
  folderClickBehavior: "link",
  folderDefaultState: "open",
  useSavedState: false,
  
  // 只过滤不需要的文件夹
  filterFn: (node) => {
    if (!node || !node.displayName) return false;
    
    const omit = new Set(["tags", "Attachments", "Inbox", "hosting", "templates"]);
    return !omit.has(node.displayName);
  },
  
  // 按 SPTR 顺序排序
  sortFn: (a, b) => {
    if (!a?.displayName || !b?.displayName) return 0;
    
    const order = ["Studying", "Projects", "Thoughts", "Resources"];
    const idxA = order.indexOf(a.displayName);
    const idxB = order.indexOf(b.displayName);
    
    // 如果都在 SPTR 列表中，按指定顺序排
    if (idxA !== -1 && idxB !== -1) {
      return idxA - idxB;
    }
    
    // 如果只有一个在列表中，让它排在前面
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    
    // 都不在列表中，按字母排序
    return a.displayName.localeCompare(b.displayName, "zh-CN");
  }
})
    
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
