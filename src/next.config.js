const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const docs = require("./plugins/rehype-docs");
const hyphenate = require("./plugins/remark-hyphenate");
const highlight = require("rehype-highlight");
const sass = require("@zeit/next-sass");
const slug = require("rehype-slug");
const smartypants = require("@silvenon/remark-smartypants");
const withPlugins = require("next-compose-plugins");

const mdx = require("@next/mdx")({
  options: {
    remarkPlugins: [hyphenate, smartypants],
    rehypePlugins: [highlight, slug, docs]
  }
});

const config = {
  // also render markdown pages
  pageExtensions: ["js", "jsx", "md", "mdx"],

  // create a folder for each page
  exportTrailingSlash: true,

  // list pages to export
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/imprint": { page: "/imprint" },
      "/privacy": { page: "/privacy" }
    };
  }
};

module.exports = withPlugins([
  [sass],
  [mdx],
  [bundleAnalyzer]
], config);
