import React from "react";

export default React.createContext({
  autoScrolling: false,
  navBarPinned: false,
  navBarHeight: 0,
  setAutoScrolling: (autoScrolling) => {},
  setNavBarPinned: (navBarPinned) => {},
  setNavBarHeight: (navBarHeight) => {}
});
