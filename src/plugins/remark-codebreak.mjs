import { visitParents } from "unist-util-visit-parents"

const codeBreak = () => (tree) => {
  visitParents(tree, "inlineCode", (node) => {
    if (node.value) {
      node.value = node.value.replace(/(\/|\.|_)/g, "$1\u200b")
    }
  })
}

export default codeBreak
