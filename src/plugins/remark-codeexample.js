const yaml = require("js-yaml")
const visit = require("unist-util-visit-parents")

module.exports = () => (tree) => {
  visit(tree, "code", (node) => {
    if (node.meta === "code-example") {
      let jsonObj = JSON.parse(node.value)
      let yamlStr = yaml.safeDump(jsonObj).trim()

      node.type = "parent"
      node.children = [{
        type: "code",
        lang: "yaml",
        value: yamlStr
      }, {
        type: "code",
        lang: "json",
        value: node.value
      }]
      delete node.meta
      delete node.value
    }
  })
}
