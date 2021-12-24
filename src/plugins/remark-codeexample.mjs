import yaml from "js-yaml"
import visit from "unist-util-visit-parents"

const codeExample = () => (tree) => {
  visit(tree, "code", (node) => {
    if (node.meta === "code-example") {
      let jsonObj = JSON.parse(node.value)
      let yamlStr = yaml.dump(jsonObj).trim()

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

export default codeExample
