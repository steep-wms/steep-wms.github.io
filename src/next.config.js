const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})
const codeExample = require("./plugins/remark-codeexample")
const hyphenate = require("./plugins/remark-hyphenate")
const highlight = require("rehype-highlight")
const optimizedImages = require("next-optimized-images")
const sass = require("@zeit/next-sass")
const slug = require("rehype-slug")
const smartypants = require("@silvenon/remark-smartypants")
const withPlugins = require("next-compose-plugins")

const mdx = require("@next/mdx")({
  options: {
    remarkPlugins: [hyphenate, smartypants, codeExample],
    rehypePlugins: [highlight, slug]
  }
})

const config = {
  // also render markdown pages
  pageExtensions: ["js", "jsx", "md", "mdx"],

  // create a folder for each page
  exportTrailingSlash: true,

  // do not display static optimization indicator
  // it gets in the way of the toc button
  devIndicators: {
    autoPrerender: false
  },

  // list pages to export
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/imprint": { page: "/imprint" },
      "/privacy": { page: "/privacy" }
    }
  },

  webpack: (config, { dev }) => {
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

module.exports = withPlugins([
  [optimizedImages],
  [sass],
  [mdx],
  [bundleAnalyzer]
], config)
