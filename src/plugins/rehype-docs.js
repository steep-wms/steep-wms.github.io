const toc = require("rehype-toc");
const toText = require("hast-util-to-text");
const visit = require("unist-util-visit");

module.exports = () => {
  let table;
  let inDocumentation = false;
  let currentHeadingNumbers = [];

  function visitorNumbers(node) {
    if (node.tagName === "h2") {
      inDocumentation = toText(node) === "Documentation";
    } else if (inDocumentation) {
      let n = -1;
      if (node.tagName === "h3") {
        n = 0;
      } else if (node.tagName === "h4") {
        n = 1;
      } else if (node.tagName === "h5") {
        n = 2;
      }
      if (n >= 0) {
        while (currentHeadingNumbers.length <= n) {
          currentHeadingNumbers.push(0);
        }
        currentHeadingNumbers[n]++;
        currentHeadingNumbers.splice(n + 1);
        node.children.unshift({
          type: "text",
          value: currentHeadingNumbers.join(".") + "\u2002"
        });
      }
    }
  }

  function visitorToc(node) {
    if (node.value === '<div class="table-of-contents"></div>') {
      node.type = "element";
      node.tagName = table.tagName;
      node.children = table.children;
      node.properties = table.properties;
    }
  }

  let tocProc = toc({
    headings: ["h3", "h4", "h5"],

    customizeTOC: (t) => {
      table = t;
      return false;
    },

    customizeTOCItem: (item, heading) => {
      if (item.children[0] && item.children[0].tagName === "a") {
        item.children[0].tagName = "ScrollLink";
      }
    }
  });

  return (tree) => {
    tocProc(tree);
    visit(tree, "element", visitorNumbers);
    visit(tree, "jsx", visitorToc);
  }
};
