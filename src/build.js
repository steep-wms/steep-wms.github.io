const Metalsmith  = require("metalsmith");
const argv = require("yargs").argv;

const htmlMinifier = require("metalsmith-html-minifier");
const layouts = require("metalsmith-layouts");
const markdown = require("metalsmith-markdown");
const permalinks = require("metalsmith-permalinks");
const rename = require("metalsmith-rename");
const sass = require("metalsmith-sass");
const watch = require("metalsmith-watch");

let build = Metalsmith(__dirname)
  .source("src")
  .destination("..")
  .clean(false)
  .use(sass())
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(layouts())
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
