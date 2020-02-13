const Metalsmith  = require("metalsmith");
const argv = require("yargs").argv;
const fs = require("fs");
const highlightJs = require("highlight.js");
const hyphenopoly = require("hyphenopoly");
const nunjucks = require("nunjucks");
const nunjucksDate = require("nunjucks-date");
const simpleIcons = require("simple-icons");

// get marked module from jstransformer-marked
require("jstransformer-marked");
const marked = require.cache[require.resolve("jstransformer-marked")].require("marked");

const htmlMinifier = require("metalsmith-html-minifier");
const inPlace = require("metalsmith-in-place");
const layouts = require("metalsmith-layouts");
const permalinks = require("metalsmith-permalinks");
const sass = require("metalsmith-sass");
const uglify = require("metalsmith-uglify");
const watch = require("metalsmith-watch");
const yaml = require("js-yaml");

// configure hyphenation
const hyphenateText = hyphenopoly.config({
  "require": ["en-gb"],
  "hyphen": "\u00ad",
  "exceptions": {
    "en-gb": "plug-in"
  },
  "sync": true
});

// a nunjucks filter that hyphenates text
function hyphenFilter(str) {
  return new nunjucks.runtime.SafeString(hyphenateText(str));
}

function markdownFilter(str) {
  return new nunjucks.runtime.SafeString(marked(str, engineOptions));
}

// a nunjucks extension that automatically inserts SVG code of an icon from the
// simple-icons package
function SimpleIconsExtension() {
  this.tags = ["simpleIcon"];

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

// a nunjucks extension that renders code examples in JSON and YAML
function CodeExampleExtension() {
  this.tags = ["codeExample"];

  this.parse = function(parser, nodes, lexer) {
    let tok = parser.nextToken();
    let args = parser.parseSignature(true, true);
    parser.advanceAfterBlockEnd(tok.value);
    let body = parser.parseUntilBlocks("endCodeExample");
    parser.advanceAfterBlockEnd();
    return new nodes.CallExtension(this, "run", args, [body]);
  };

  this.run = function(context, id, body) {
    let json = body();
    let obj = JSON.parse(json);
    let yamlStr = yaml.safeDump(obj);
    let result =
`<div class="code-example">
  <nav>
    <div class="nav nav-tabs" id="nav-tab-${id}" role="tablist">
      <a class="nav-item nav-link active" id="nav-json-tab-${id}"
          data-toggle="tab" href="#nav-json-${id}" role="tab"
          aria-controls="nav-json-${id}" aria-selected="true">JSON</a>
      <a class="nav-item nav-link" id="nav-yaml-tab-${id}"
          data-toggle="tab" href="#nav-yaml-${id}" role="tab"
          aria-controls="nav-yaml-${id}" aria-selected="false">YAML</a>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent-${id}">
    <div class="tab-pane show active" id="nav-json-${id}" role="tabpanel" aria-labelledby="nav-json-tab-${id}">

\`\`\`json${json}\`\`\`

</div>
<div class="tab-pane" id="nav-yaml-${id}" role="tabpanel" aria-labelledby="nav-yaml-tab-${id}">

\`\`\`yaml
${yamlStr}\`\`\`

</div>
</div>
</div>`;
    return new nunjucks.runtime.SafeString(result);
  };
}

// a markdown renderer that automatically applies hyphenation to text but not
// headings
const markdownRenderer = new marked.Renderer();
markdownRenderer.oldHeadingRenderer = markdownRenderer.heading;
markdownRenderer.oldTextRenderer = markdownRenderer.text;
markdownRenderer.text = function(text) {
  return this.oldTextRenderer(hyphenateText(text));
};
markdownRenderer.heading = function(text, level, raw, slugger) {
  text = text.replace(/\u00ad/g, "");
  if (text === "Documentation") {
    this.inDocumentation = true;
    this.currentHeadingNumbers = [];
  } else if (text === "About") {
    this.inDocumentation = false;
  }
  if (level >= 3 && this.inDocumentation) {
    let n = level - 3;
    while (this.currentHeadingNumbers.length <= n) {
      this.currentHeadingNumbers.push(0);
    }
    this.currentHeadingNumbers[n]++;
    this.currentHeadingNumbers.splice(n + 1);
    text = this.currentHeadingNumbers.join(".") + "&ensp;" + text;
  }
  return this.oldHeadingRenderer(text, level, raw, slugger);
};
markdownRenderer.table = function(header, body) {
  if (body) {
    body = "<tbody>" + body + "</tbody>";
  }

  // add bootstrap class
  return "<table class=\"table\">\n" +
    "<thead>\n" + header + "</thead>\n" + body + "</table>\n";
};

// engine options for the metalsmith-in-place and metalsmith-layouts plugins
let engineOptions = {
  // nunjucks filters
  filters: {
    "hyphen": hyphenFilter,
    "date": nunjucksDate,
    "markdown": markdownFilter
  },

  // nunjucks extensions
  extensions: {
    "codeExample": new CodeExampleExtension(),
    "simpleIcon": new SimpleIconsExtension()
  },

  // enable smart quotes in markdown
  smartypants: true,

  // render IDs in headings
  headerIds: true,

  // do not mangle email addresses in markdown
  // this feature generates random characters everytime so our built HTML
  // pages will always appear as changed
  mangle: false,

  // enable syntax highlighting in markdown
  highlight: (code, lang) => {
    if (!lang) {
      return code;
    }
    return highlightJs.highlight(lang, code).value
  },

  // set a custom markdown renderer
  renderer: markdownRenderer
};

// copy required javascript files
fs.mkdirSync("js", { recursive: true });
fs.copyFileSync("node_modules/headroom.js/dist/headroom.min.js", "js/headroom.min.js");

// metalsmith build configuration
let build = Metalsmith(__dirname)
  .source("src")
  .destination("..")

  // do not clean destination directory - it's our repository's root!
  .clean(false)

  // compile SCSS
  .use(sass())

  // uglify JavaScript
  .use(uglify({
    removeOriginal: true
  }))

  // compile markdown files and apply template engine
  .use(inPlace({
    engineOptions
  }))

  .use(permalinks({
    // create a separate directory for each html file
    relative: false
  }))

  // apply layouts
  .use(layouts({
    engineOptions
  }))

  // minify HTML
  .use(htmlMinifier());

// recompile on changes if necessary
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

// start build
build.build(err => {
  if (err) throw err;
});
