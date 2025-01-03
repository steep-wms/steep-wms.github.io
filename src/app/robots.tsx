import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://steep-wms.github.io${process.env.__NEXT_ROUTER_BASEPATH}/sitemap.xml`,
  }
}
