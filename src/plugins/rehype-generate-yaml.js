import yaml from "js-yaml"
import { visit, CONTINUE, SKIP } from "unist-util-visit"
import _ from "lodash"

const rehypeGenerateYaml = () => tree => {
  visit(tree, "element", node => {
    if (
      node.tagName === "pre" &&
      node.children?.[0]?.data?.meta === "generate-yaml"
    ) {
      // convert JSON to YAML
      let code = node.children[0].children[0].value
      let jsonObj = JSON.parse(code)
      let yamlStr = yaml.dump(jsonObj).trim()

      // create two new nodes, one for JSON and one for YAML
      let jsonNode = _.clone(node)
      let yamlNode = _.cloneDeep(node)

      // update YAML clone
      yamlNode.children[0].children[0].value = yamlStr
      yamlNode.children[0].properties.className = ["language-yaml"]

      // remove all properties from current node and make it a div with
      // our two new nodes as children
      Object.keys(node).forEach(k => delete node[k])

      node.type = "element"
      node.tagName = "div"
      node.children = [yamlNode, jsonNode]

      return SKIP
    } else {
      return CONTINUE
    }
  })
}

export default rehypeGenerateYaml
