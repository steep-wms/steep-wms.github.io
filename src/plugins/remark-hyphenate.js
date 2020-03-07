const hyphenopoly = require("hyphenopoly");
const visit = require("unist-util-visit-parents");

const hyphenateText = hyphenopoly.config({
  "require": ["en-us"],
  "hyphen": "\u00ad",
  "exceptions": {
    "en-us": "plug-in"
  },
  "sync": true
});

module.exports = () => (tree, file) => {
  visit(tree, "text", (node, ancestors) => {
    if (node.value) {
      if (ancestors.findIndex(e => e.type === "heading") == -1) {
        node.value = hyphenateText(node.value);
      }
    }
  });
};
