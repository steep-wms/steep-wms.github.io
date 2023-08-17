import yaml from "js-yaml"
import _ from "lodash"
import { CONTINUE, SKIP, visit } from "unist-util-visit"

const rehypeGenerateYaml = () => tree => {
  visit(tree, "element", node => {
    if (
      node.tagName === "pre" &&
      (node.children?.[0]?.data?.meta === "generate-yaml" ||
        node.children?.[0]?.data?.meta === "generate-json")
    ) {
      let code = node.children[0].children[0].value

      let jsonStr
      let yamlStr
      if (node.children[0].data.meta === "generate-yaml") {
        // convert JSON to YAML
        let jsonObj = JSON.parse(code)
        yamlStr = yaml.dump(jsonObj).trim()
        jsonStr = code
      } else {
        // convert YAML to JSON
        yamlStr = code.trim()
        let jsonObj = yaml.load(yamlStr)
        jsonStr = JSON.stringify(jsonObj, undefined, 2)
      }

      // create two new nodes, one for JSON and one for YAML
      let jsonNode = _.clone(node)
      let yamlNode = _.cloneDeep(node)

      // update JSON clone
      jsonNode.children[0].children[0].value = jsonStr
      jsonNode.children[0].properties.className = ["language-json"]

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
