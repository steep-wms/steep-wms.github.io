import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import classNames from "classnames";
import getScrollTop from "./lib/get-scroll-top";
import { useEffect, useRef, useState } from "react";
import { List, X } from "react-feather";
import throttle from "lodash.throttle";
import "./Sidebar.scss";

export default ({ children }) => {
  const tocRef = React.useRef();
  const autoHideTimer = React.useRef(null);
  const [ collapse, setCollapse ] = useState(false);
  const [ visible, setVisible ] = useState(false);

  const cancelAutoHideTimer = () => {
    if (autoHideTimer.current) {
      clearTimeout(autoHideTimer.current);
      autoHideTimer.current = null;
    }
  };

  const startAutoHideTimer = () => {
    cancelAutoHideTimer();
    autoHideTimer.current = setTimeout(() => {
      setCollapse(false);
      autoHideTimer.current = null;
    }, 500);
  };

  const onMouseEnter = () => {
    cancelAutoHideTimer();
    disableBodyScroll(tocRef.current);
  };

  const onMouseLeave = () => {
    enableBodyScroll(tocRef.current);
    startAutoHideTimer();
  };

  const onToggle = () => {
    if (collapse) {
      enableBodyScroll(tocRef.current);
    } else {
      disableBodyScroll(tocRef.current);
    }
    cancelAutoHideTimer();
    setCollapse(!collapse);
  };

  const onChildClick = () => {
    enableBodyScroll(tocRef.current);
    cancelAutoHideTimer();
    setCollapse(false);
  };

  const onScroll = throttle(() => {
    let docsSection = document.querySelector("section.docs");
    if (docsSection) {
      let scrollTop = getScrollTop();
      let scrollBottom = scrollTop + window.innerHeight;
      let docsTop = docsSection.offsetTop;
      let docsBottom = docsTop + docsSection.offsetHeight;
      let visible = scrollBottom >= (docsTop + 100) && scrollTop <= docsBottom;
      setVisible(visible);
    }
  }, 100);

  useEffect(() => {
    tocRef.current.addEventListener("mouseenter", onMouseEnter);
    tocRef.current.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    // trigger onScroll once so the button appears
    onScroll();

    return () => {
      tocRef.current.removeEventListener("mouseenter", onMouseEnter);
      tocRef.current.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      clearAllBodyScrollLocks();
    };
  }, []);

  const newChildren = React.Children.map(children, c => {
    return React.cloneElement(c, {
      onClick: onChildClick
    });
  });

  return (
    <div className={classNames("sidebar", { "visible": visible })} ref={tocRef}>
      <div className={classNames("table-of-contents", { "collapse": collapse })}>
        {newChildren}
      </div>
      <div className="sidebar-button" onClick={onToggle}>
        <div className="sidebar-button-icons">
          <List className={classNames("feather", { "collapse": collapse })}/>
          <X className={classNames("feather", "feather-x", { "collapse": collapse })}/>
        </div>
      </div>
    </div>
  );
};
