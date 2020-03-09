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

  const lastOffsetTop = React.useRef(-1);
  const lastScrollPos = React.useRef(-1);
  const ref = React.useRef();
  if (lastOffsetTop.current !== -1 && lastScrollPos.current !== -1) {
    setTimeout(() => {
      document.body.scrollTop = document.documentElement.scrollTop =
          ref.current.offsetTop - (lastOffsetTop.current - lastScrollPos.current);
      lastOffsetTop.current = -1;
      lastScrollPos.current = -1;
      setAutoScrolling(false);
    }, 0);
  }

  let newChildren = [];
  findCodeInChildren(children, newChildren);

  const onClick = (lang) => {
    lastOffsetTop.current = ref.current.offsetTop;
    lastScrollPos.current = getScrollTop();
    setAutoScrolling(true);
    setActive(lang);
  };

  let titles = [];
  let pages = [];
  newChildren.forEach((c, i) => {
    let lang = getLanguage(c);

    let title = (
      <div className={`code-example-title${active === lang ? " active" : ""}`}
          onClick={() => onClick(lang)} key={`title-${lang}`}>
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
    <div className="code-example" ref={ref}>{titles}{pages}</div>
  );
};
