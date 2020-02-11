const Metalsmith  = require("metalsmith");
const argv = require("yargs").argv;
const fs = require("fs");
const highlightJs = require("highlight.js");
const hyphenopoly = require("hyphenopoly");
const nunjucks = require("nunjucks");
const simpleIcons = require("simple-icons");

const htmlMinifier = require("metalsmith-html-minifier");
const inPlace = require("metalsmith-in-place");
const layouts = require("metalsmith-layouts");
const permalinks = require("metalsmith-permalinks");
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

function SimpleIconsExtension() {
    this.tags = ['simpleIcon'];

    this.parse = function(parser, nodes, lexer) {
      let tok = parser.nextToken();
      let args = parser.parseSignature(true, true);
      parser.advanceAfterBlockEnd(tok.value);
      return new nodes.CallExtension(this, "run", args);
    };

    this.run = function(context, name) {
      return new nunjucks.runtime.SafeString("<i class=\"simple-icon\">" +
          simpleIcons.get(name).svg + "</i>");
    };
}

fs.mkdirSync("js", { recursive: true });
fs.copyFileSync("node_modules/headroom.js/dist/headroom.min.js", "js/headroom.min.js");

let engineOptions = {
  filters: {
    "hyphen": hyphenFilter
  },
  extensions: {
    "simpleIcon": new SimpleIconsExtension()
  },
  smartypants: true,
  highlight: (code, lang) => {
    if (!lang) {
      return code;
    }
    return highlightJs.highlight(lang, code).value
  }
};

let build = Metalsmith(__dirname)
  .source("src")
  .destination("..")
  .clean(false)
  .use(sass())
  .use(uglify({
    removeOriginal: true
  }))
  .use(inPlace({
    engineOptions
  }))
  .use(permalinks({
    relative: false
  }))
  .use(layouts({
    engineOptions
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
