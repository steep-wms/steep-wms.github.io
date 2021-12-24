import codeBreak from "./plugins/remark-codebreak.mjs"
import codeExample from "./plugins/remark-codeexample.mjs"
import hyphenate from "./plugins/remark-hyphenate.mjs"
import highlight from "rehype-highlight"
import MDX from "@next/mdx"
import optimizedImages from "next-optimized-images"
import slug from "rehype-slug"
import smartypants from "@silvenon/remark-smartypants"
import styledJsx from "styled-jsx/webpack.js"
import withPlugins from "next-compose-plugins"

import handlebars from "highlight.js/lib/languages/handlebars"
import http from "highlight.js/lib/languages/http"

const mdx = MDX({
  options: {
    remarkPlugins: [hyphenate, smartypants, codeExample, codeBreak],
    rehypePlugins: [
      [highlight, {
        languages: {
          handlebars,
          http
        }
      }],
      slug]
  }
})

const config = {
  // also render markdown pages
  pageExtensions: ["js", "jsx", "md", "mdx"],

  // create a folder for each page
  trailingSlash: true,

  // opt-in to using SWC for minifying JavaScript
  swcMinify: true,

  // do not display static optimization indicator
  // it gets in the way of the toc button
  devIndicators: {
    autoPrerender: false
  },

  eslint: {
    dirs: ["components", "content", "pages", "plugins"]
  },

  images: {
    // make build compatible with next-optimized-images
    disableStaticImages: true
  },

  // list pages to export
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/imprint": { page: "/imprint" },
      "/privacy": { page: "/privacy" }
    }
  },

  webpack: (config, { dev, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: styledJsx.loader,
          options: {
            type: (fileName, options) => options.query.type || "scoped"
          }
        },
        "sass-loader"
      ]
    })

    if (dev) {
      config.module.rules.push({
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: [/node_modules/, /\.next/, /out/],
        enforce: "pre",
        options: {
          emitWarning: true
        }
      })
    }
    return config
  }
}

export default withPlugins([
  [optimizedImages],
  [mdx]
], config)
