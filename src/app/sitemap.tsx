import { MetadataRoute } from "next"
import { Toc } from "@/components/docs/Toc"

const root = `https://steep-wms.github.io${process.env.basePath}`

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
      url: `${root}/showcases/`,
      lastModified: new Date(),
    },
    ...docPages,
  ]
}
