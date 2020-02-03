const Metalsmith  = require("metalsmith");
const argv = require("yargs").argv;
const fs = require("fs");
const hyphenopoly = require("hyphenopoly");
const nunjucks = require("nunjucks");

const htmlMinifier = require("metalsmith-html-minifier");
const layouts = require("metalsmith-layouts");
const markdown = require("metalsmith-markdown");
const permalinks = require("metalsmith-permalinks");
const rename = require("metalsmith-rename");
const sass = require("metalsmith-sass");
const uglify = require("metalsmith-uglify");
const watch = require("metalsmith-watch");

const hyphenateText = hyphenopoly.config({
  "require": ["en-gb"],
  "hyphen": "\u00ad",
  "exceptions": {
    "en-gb": "plug-in"
  },
  "sync": true
});

function hyphenFilter(str) {
    return new nunjucks.runtime.SafeString(hyphenateText(str));
}

fs.mkdirSync("js", { recursive: true });
fs.copyFileSync("node_modules/headroom.js/dist/headroom.min.js", "js/headroom.min.js");

let build = Metalsmith(__dirname)
  .source("src")
  .destination("..")
  .clean(false)
  .use(sass())
  .use(uglify({
    removeOriginal: true
  }))
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(layouts({
    engineOptions: {
      filters: {
        "hyphen": hyphenFilter
      }
    }
  }))
  .use(htmlMinifier());

if (argv.watch) {
  build = build.use(
    watch({
      paths: {
        "${source}/**/*": "**/*",
        "layouts/**/*": "**/*"
      }
    })
  );
}

build.build(err => {
  if (err) throw err;
});
