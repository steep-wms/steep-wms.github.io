const visit = require("unist-util-visit-parents")

module.exports = () => (tree) => {
  visit(tree, "inlineCode", (node) => {
    if (node.value) {
      node.value = node.value.replace(/(\/|\.|_)/g, "$1\u200b")
    }
  })
}
