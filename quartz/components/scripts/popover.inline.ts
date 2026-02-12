import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const p = new DOMParser()
let activeAnchor: HTMLAnchorElement | null = null
let hidePopoverTimeout: number | null = null  // 👈 新增这一行

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  const link = (activeAnchor = this)
  if (link.dataset.noPopover === "true") {
    return
  }

  async function setPosition(popoverElement: HTMLElement) {
    const { x, y } = await computePosition(link, popoverElement, {
      strategy: "fixed",
      middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
    })
    Object.assign(popoverElement.style, {
      transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
    })
  }

  function showPopover(popoverElement: HTMLElement) {
    clearActivePopover()
    popoverElement.classList.add("active-popover")
    setPosition(popoverElement as HTMLElement)

    if (hash !== "") {
      const targetAnchor = `#popover-internal-${hash.slice(1)}`
      const heading = popoverInner.querySelector(targetAnchor) as HTMLElement | null
      if (heading) {
        // leave ~12px of buffer when scrolling to a heading
        popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
      }
    }
  }

  const targetUrl = new URL(link.href)
  const hash = decodeURIComponent(targetUrl.hash)
  targetUrl.hash = ""
  targetUrl.search = ""
  const popoverId = `popover-${link.pathname}`
  const prevPopoverElement = document.getElementById(popoverId)

  // dont refetch if there's already a popover
  if (!!document.getElementById(popoverId)) {
    showPopover(prevPopoverElement as HTMLElement)
    return
  }

  const response = await fetchCanonical(targetUrl).catch((err) => {
    console.error(err)
  })

  if (!response) return
  const [contentType] = response.headers.get("Content-Type")!.split(";")
  const [contentTypeCategory, typeInfo] = contentType.split("/")

  const popoverElement = document.createElement("div")
  popoverElement.id = popoverId
  popoverElement.classList.add("popover")
  const popoverInner = document.createElement("div")
  popoverInner.classList.add("popover-inner")
  popoverInner.dataset.contentType = contentType ?? undefined
  popoverElement.appendChild(popoverInner)

  switch (contentTypeCategory) {
    case "image":
      const img = document.createElement("img")
      img.src = targetUrl.toString()
      img.alt = targetUrl.pathname

      popoverInner.appendChild(img)
      break
    case "application":
      switch (typeInfo) {
        case "pdf":
          const pdf = document.createElement("iframe")
          pdf.src = targetUrl.toString()
          popoverInner.appendChild(pdf)
          break
        default:
          break
      }
      break
    default:
      const contents = await response.text()
      const html = p.parseFromString(contents, "text/html")
      normalizeRelativeURLs(html, targetUrl)
      // prepend all IDs inside popovers to prevent duplicates
      html.querySelectorAll("[id]").forEach((el) => {
        const targetID = `popover-internal-${el.id}`
        el.id = targetID
      })
      const elts = [...html.getElementsByClassName("popover-hint")]
      if (elts.length === 0) return

      elts.forEach((elt) => popoverInner.appendChild(elt))
  }

  if (!!document.getElementById(popoverId)) {
    return
  }

  document.body.appendChild(popoverElement)

// 👇 新增:给新创建的预览框绑定鼠标事件
popoverElement.addEventListener("mouseenter", () => {
  if (hidePopoverTimeout !== null) {
    clearTimeout(hidePopoverTimeout)
    hidePopoverTimeout = null
  }
})

popoverElement.addEventListener("mouseleave", () => {
  clearActivePopover()
})

if (activeAnchor !== this) {
  return
}

  showPopover(popoverElement)
}

function clearActivePopover() {
  activeAnchor = null
  const allPopoverElements = document.querySelectorAll(".popover")
  allPopoverElements.forEach((popoverElement) => popoverElement.classList.remove("active-popover"))
}

// 👇 新增:延迟关闭的超时器
let hidePopoverTimeout: number | null = null

document.addEventListener("nav", () => {
  const links = [...document.querySelectorAll("a.internal")] as HTMLAnchorElement[]
  for (const link of links) {
    link.addEventListener("mouseenter", mouseEnterHandler)
    
    // ✅ 改这里:鼠标离开链接时,延迟300ms再关闭
    link.addEventListener("mouseleave", () => {
      hidePopoverTimeout = window.setTimeout(() => {
        clearActivePopover()
      }, 300) // 给用户300ms时间把鼠标移到预览框上
    })
    
    window.addCleanup(() => {
      link.removeEventListener("mouseenter", mouseEnterHandler)
      // 原来的:
link.addEventListener("mouseleave", clearActivePopover)

// 改成:
link.addEventListener("mouseleave", () => {
  hidePopoverTimeout = window.setTimeout(() => {
    clearActivePopover()
  }, 300)
})
    })
  }
  
  // ✅ 新增:监听所有预览框的鼠标事件
  const allPopovers = document.querySelectorAll(".popover")
  allPopovers.forEach((popover) => {
    // 鼠标进入预览框时,取消关闭
    popover.addEventListener("mouseenter", () => {
      if (hidePopoverTimeout !== null) {
        clearTimeout(hidePopoverTimeout)
        hidePopoverTimeout = null
      }
    })
    
    // 鼠标离开预览框时,立即关闭
    popover.addEventListener("mouseleave", () => {
      clearActivePopover()
    })
  })
})