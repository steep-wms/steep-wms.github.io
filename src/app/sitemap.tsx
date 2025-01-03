import { Toc } from "@/components/docs/Toc"
import { MetadataRoute } from "next"

const root = `https://steep-wms.github.io${process.env.__NEXT_ROUTER_BASEPATH}`

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const docPages = Toc.flatMap(chapter => {
    return chapter.pages.map(page => {
      let slug = page.slug
      if (slug !== "") {
        slug += "/"
      }
      return {
        url: `${root}/docs/${slug}`,
        lastModified: new Date(),
      }
    })
  })

  return [
    {
      url: `${root}/`,
      lastModified: new Date(),
    },
    {
      url: `${root}/about/`,
      lastModified: new Date(),
    },
    {
      url: `${root}/legal-notice/`,
      lastModified: new Date(),
    },
    {
      url: `${root}/privacy-policy/`,
      lastModified: new Date(),
    },
    {
      url: `${root}/showcase/`,
      lastModified: new Date(),
    },
    ...docPages,
  ]
}
