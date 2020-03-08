const hyphenopoly = require("hyphenopoly");
const yaml = require("js-yaml");
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
  visit(tree, "code", (node, ancestors) => {
    if (node.meta === "code-example") {
      let jsonObj = JSON.parse(node.value);
      let yamlStr = yaml.safeDump(jsonObj).trim();

      node.type = "parent";
      node.children = [{
        type: "code",
        lang: "json",
        value: node.value
      }, {
        type: "code",
        lang: "yaml",
        value: yamlStr
      }];
      delete node.meta;
      delete node.value;
    }
  });
};
