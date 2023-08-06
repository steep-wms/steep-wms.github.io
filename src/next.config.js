import ESLintPlugin from "eslint-webpack-plugin"
import svgToMiniDataURI from "mini-svg-data-uri"
import nextMDX from "@next/mdx"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import remarkSmartypants from "remark-smartypants"
import rehypeCodeContainer from "./plugins/rehype-codecontainer.js"
import JSON5 from "json5"
import fs from "fs"

const basePath = "/preview"

const steepColorTheme = JSON5.parse(
  fs.readFileSync("./components/lib/steep-color-theme.json", "utf8"),
)
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      rehypeCodeContainer,
      [
        rehypePrettyCode,
        {
          theme: steepColorTheme,
          keepBackground: false,
        },
      ],
    ],
  },
})

const config = {
  env: {
    basePath,
  },

  // also render markdown pages
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // create a folder for each page
  trailingSlash: true,

  // export static website
  output: "export",

  // configure base path
  basePath,
  assetPrefix: basePath === "" ? undefined : basePath,

  eslint: {
    dirs: ["app", "components", "content", "pages", "plugins"],
  },

  images: {
    // disable built-in image support
    disableStaticImages: true,
  },

  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
      preventFullImport: true,
    },
    "simple-icons": {
      transform: "simple-icons/icons",
      preventFullImport: true,
      skipDefaultConversion: true,
    },
  },

  webpack: (config, { dev, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g)$/i,
      type: "asset",
      use: "image-webpack-loader",
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
        },
      },
    })

    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /source/,
      type: "asset/source",
      use: "image-webpack-loader",
    })

    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          extensions: ["js", "jsx"],
        }),
      )
    }
    return config
  },
}

export default withMDX(config)
