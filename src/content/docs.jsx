import { Fragment } from "react";
import ScrollLink from "../components/ScrollLink";
import Sidebar from "../components/Sidebar";

function spliceToc(currentToc, n) {
  while (currentToc.length > n + 1) {
    let last = currentToc.pop();
    let l = currentToc.length;
    if (l > 0) {
      currentToc[l - 1] = React.cloneElement(currentToc[l - 1], {
        children: [...(currentToc[l - 1].props.children || []), last]
      });
    }
  }
}

export default ({ children }) => {
  let currentToc = [];
  let currentHeadingNumbers = [];

  let newChildren = children.map(c => {
    let n = -1;
    if (c.props.mdxType === "h3") {
      n = 0;
    } else if (c.props.mdxType === "h4") {
      n = 1;
    } else if (c.props.mdxType === "h5") {
      n = 2;
    }

    if (n >= 0) {
      // generate heading number
      while (currentHeadingNumbers.length <= n) {
        currentHeadingNumbers.push(0);
      }

      currentHeadingNumbers[n]++;
      currentHeadingNumbers.splice(n + 1);

      let originalText = c.props.children;
      let text = currentHeadingNumbers.join(".") + "\u2002" + originalText;

      c = React.cloneElement(c, {
        children: text,
        key: c.props.id
      });

      // generate toc entry
      while (currentToc.length <= n) {
        currentToc.push(<ol key={`toc-list-${c.props.id}`}></ol>);
      }

      spliceToc(currentToc, n);

      let newItem = (<li key={`toc-item-${c.props.id}`}>
          <ScrollLink href={"#" + c.props.id}>{originalText}</ScrollLink>
        </li>);
      let l = currentToc.length;
      currentToc[l - 1] = React.cloneElement(currentToc[l - 1], {
        children: [...(currentToc[l - 1].props.children || []), newItem]
      });
    }

    return c;
  });

  // collapse all remaining toc entries
  spliceToc(currentToc, 0);

  newChildren = newChildren.map(c => {
    if (c.props.mdxType === "div" && c.props.className === "table-of-contents") {
      c = React.cloneElement(c, {
        children: currentToc[0],
        key: "table-of-contents"
      });
    }
    return c;
  });

  return (
    <section className="docs">
      {newChildren}
      <Sidebar>
        {currentToc[0]}
      </Sidebar>
    </section>
  );
};
