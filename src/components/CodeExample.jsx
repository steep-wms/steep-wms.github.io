import classNames from "classnames";
import getScrollTop from "./lib/get-scroll-top";
import AutoScrollingContext from "./lib/AutoScrollingContext";
import CodeLanguageContext from "./lib/CodeLanguageContext";
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
  const setAutoScrolling = React.useContext(AutoScrollingContext.Dispatch);
  const setActive = React.useContext(CodeLanguageContext.Dispatch);
  const active = React.useContext(CodeLanguageContext.State);

  const ref = React.useRef();

  let newChildren = [];
  findCodeInChildren(children, newChildren);

  const onClick = (lang) => {
    if (active === lang) {
      return;
    }

    // keep scroll position
    const lastDiff = ref.current.offsetTop - getScrollTop();
    const observer = new MutationObserver((mutations) => {
      document.body.scrollTop = document.documentElement.scrollTop =
          ref.current.offsetTop - lastDiff;

      for (let mutation of mutations) {
        if (mutation.target.parentNode === ref.current) {
          observer.disconnect();
          setAutoScrolling(false);
        }
      }
    });
    observer.observe(document, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true
    });

    // prevent navbar from hiding
    setAutoScrolling(true);

    // change language for all code examples
    setActive(lang);
  };

  let titles = [];
  let pages = [];
  newChildren.forEach((c, i) => {
    let lang = getLanguage(c);

    let activeClassName = { "active": active === lang };
    let titleClassName = classNames("code-example-title", activeClassName);
    let title = (
      <div className={titleClassName} onClick={() => onClick(lang)} key={`title-${lang}`}>
        {lang.toUpperCase()}
      </div>
    );
    titles.push(title);

    let pageClassName = classNames("code-example-page", activeClassName);
    let page = (
      <div className={pageClassName} key={`page-${lang}`}>
        {c}
      </div>
    );
    pages.push(page);
  });

  return (
    <div className="code-example" ref={ref}>{titles}{pages}</div>
  );
};
