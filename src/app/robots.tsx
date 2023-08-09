import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://steep-wms.github.io${process.env.basePath}/sitemap.xml`,
  }
}
