import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🐱‍💻XuMintain's Blog",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Merriweather",
        body: "Noto Serif SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#ffcbdb3a",
          gray: "#f4a4c8",
          darkgray: "#4a4a4a",
          dark: "#1bbcd8",
          secondary: "#f06292",
          tertiary: "#f0ff23b5",
          highlight: "rgba(255, 252, 62, 0.15)",
          textHighlight: "rgba(240, 98, 145, 0.31)",
        },
        darkMode: {
      light: "#161618",         // 背景：深邃的炭黑 (不是死黑，护眼且有质感)
      lightgray: "#2e2e32",     // 代码块/边框：深灰 (让内容块凸显出来)
      gray: "#ad909e",          // 次要信息：带一点点粉调的灰，和主题呼应
      darkgray: "#ebebec",      // 正文：接近纯白 (在黑底上阅读最清晰)
      dark: "#1bbcd8",          // 标题：保持你的【青色】，在黑底上会非常酷炫！
      secondary: "#f06292",     // 链接：保持你的【粉色】，形成经典的蓝粉撞色
      tertiary: "#cddc39",      // 悬停/高亮：把你的荧光黄稍微调柔和一点，避免在黑夜太刺眼
      highlight: "rgba(255, 252, 62, 0.15)", // 保持你的高亮设置
      textHighlight: "rgba(240, 98, 145, 0.31)", // 保持你的文本高亮
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
