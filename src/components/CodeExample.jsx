import "./CodeExample.module.scss";
import { useState } from "react";

function findCode(node, pres) {
  if (node.props.mdxType === "pre") {
    pres.push(node);
  } else {
    findCodeInChildren(node.props.children, pres);
  }
}

function findCodeInChildren(children, pres) {
  React.Children.forEach(children, n => findCode(n, pres));
}

function getLanguage(pre) {
  let arr = React.Children.toArray(pre.props.children);
  return arr[0].props.className.match(/language-(.+)/)[1];
}

export default ({ children }) => {
  const [active, setActive] = useState("json");

  let newChildren = [];
  findCodeInChildren(children, newChildren);

  let titles = [];
  let pages = [];
  newChildren.forEach((c, i) => {
    let lang = getLanguage(c);

    let title = (
      <div className={`code-example-title${active === lang ? " active" : ""}`}
          onClick={() => setActive(lang)} key={`title-${lang}`}>
        {lang.toUpperCase()}
      </div>
    );
    titles.push(title);

    let page = (
      <div className={`code-example-page${active === lang ? " active" : ""}`} key={`page-${lang}`}>
        {c}
      </div>
    );
    pages.push(page);
  });

  return (
    <div className="code-example">{titles}{pages}</div>
  );
};
