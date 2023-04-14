import codeBreak from "./plugins/remark-codebreak.js"
import codeExample from "./plugins/remark-codeexample.js"
import ESLintPlugin from "eslint-webpack-plugin"
import remarkGfm from "remark-gfm"
import highlight from "rehype-highlight"
import slug from "rehype-slug"
import smartypants from "@silvenon/remark-smartypants"
import styledJsx from "styled-jsx/webpack.js"
import svgToMiniDataURI from "mini-svg-data-uri"
import withBundleAnalyzer from "@next/bundle-analyzer"

import handlebars from "highlight.js/lib/languages/handlebars"
import http from "highlight.js/lib/languages/http"

const config = {
  // also render markdown pages
  pageExtensions: ["js", "jsx", "md", "mdx"],

  // create a folder for each page
  trailingSlash: true,

  // export static website
  output: "export",

  // opt-in to using SWC for minifying JavaScript
  swcMinify: true,

  eslint: {
    dirs: ["components", "content", "pages", "plugins"]
  },

  images: {
    // disable built-in image support
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

    config.module.rules.push({
      test: /\.(gif|png|jpe?g)$/i,
      type: "asset",
      use: "image-webpack-loader"
    })

    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: { not: [/source/] },
      type: "asset",
      use: "image-webpack-loader",
      generator: {
        dataUrl: content => {
          content = content.toString()
          return svgToMiniDataURI(content)
        }
      }
    })

    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /source/,
      type: "asset/source",
      use: "image-webpack-loader"
    })

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            jsx: true, // Forward JSX elements as is. We need this for styled-jsx.
            remarkPlugins: [remarkGfm, smartypants, codeExample, codeBreak],
            rehypePlugins: [
              [highlight, {
                languages: {
                  handlebars,
                  http
                }
              }],
              slug
            ]
          }
        }
      ]
    })

    if (dev) {
      config.plugins.push(new ESLintPlugin({
        extensions: ["js", "jsx"]
      }))
    }
    return config
  }
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
})(config)
