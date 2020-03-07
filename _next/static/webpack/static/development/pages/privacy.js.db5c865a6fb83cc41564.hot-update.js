webpackHotUpdate("static/development/pages/privacy.js",{

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavBar.module.scss */ "./components/NavBar.module.scss");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ScrollLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScrollLink */ "./components/ScrollLink.jsx");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _lib_get_scroll_top__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/get-scroll-top */ "./components/lib/get-scroll-top.js");
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/events */ "./components/lib/events.js");
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_lib_events__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/mkraemer/code/steep-wms/steep-wms.github.io/src/components/NavBar.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var NavBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavBar, _React$Component);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "currentScrollTop", -1);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ref", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      top: undefined,
      leaving: false,
      pinned: false,
      collapse: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "autoScrolling", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onAutoScrollStart", function () {
      _this.autoScrolling = true;

      _this.setState(function (state) {
        return {
          top: false,
          pinned: true,
          collapse: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onAutoScrollEnd", function () {
      _this.autoScrolling = false;

      _this.setState(function (state) {
        return {
          top: false,
          pinned: true,
          collapse: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onToggle", function () {
      _this.setState(function (state) {
        return {
          collapse: !state.collapse
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onScroll", function (e) {
      var newScrollTop = Object(_lib_get_scroll_top__WEBPACK_IMPORTED_MODULE_12__["default"])();

      if (_this.currentScrollTop < 0) {
        // not enabled yet
        return;
      }

      if (_this.autoScrolling) {
        // do not change state of navbar while we are auto-scrolling
        _this.currentScrollTop = newScrollTop;
        return;
      }

      var height = _this.ref.current.clientHeight;
      var py = -_this.ref.current.offsetTop; // If we are 'pinned' and scroll up until we reach the initial position
      // of the navbar, switch from 'pinned' to 'top'. Otherwise, switch from
      // 'top' to 'not-top' when the navbar leaves the screen.

      var isTop = _this.state.pinned ? newScrollTop <= py : newScrollTop <= height;

      if (_this.state.pinned && isTop) {
        _this.setState({
          pinned: false
        });
      }

      if (!isTop && _this.state.top && !_this.state.leaving) {
        // add .leaving class so there won't be a transition to translateY(-100%)
        _this.setState({
          leaving: true,
          collapse: false
        });
      } else {
        _this.setState({
          top: isTop,
          leaving: false
        });
      }

      if (!isTop) {
        // switch between 'pinned' states only if we're not 'top'
        var diff = newScrollTop - _this.currentScrollTop;

        if (_this.state.pinned && diff > 2) {
          _this.setState({
            pinned: false,
            collapse: false
          });
        } else if (!_this.state.pinned && diff < -2) {
          _this.setState({
            pinned: true
          });
        }
      }

      _this.currentScrollTop = newScrollTop;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("scroll", this.onScroll);
      window.addEventListener(_lib_events__WEBPACK_IMPORTED_MODULE_13__["AUTO_SCROLL_START"], this.onAutoScrollStart);
      window.addEventListener(_lib_events__WEBPACK_IMPORTED_MODULE_13__["AUTO_SCROLL_END"], this.onAutoScrollEnd); // enable component after 100ms to give browser some time to scroll
      // to the right place

      setTimeout(function () {
        var newScrollTop = Object(_lib_get_scroll_top__WEBPACK_IMPORTED_MODULE_12__["default"])();
        _this2.currentScrollTop = newScrollTop;
        var height = _this2.ref.current.clientHeight;
        var isTop = newScrollTop <= height;

        if (!isTop) {
          _this2.setState({
            top: false,
            pinned: true
          });
        }
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll);
      window.removeEventListener(_lib_events__WEBPACK_IMPORTED_MODULE_13__["AUTO_SCROLL_START"], this.onAutoScrollStart);
      window.removeEventListener(_lib_events__WEBPACK_IMPORTED_MODULE_13__["AUTO_SCROLL_END"], this.onAutoScrollEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var top;

      if (this.state.top === undefined) {
        top = "";
      } else {
        top = this.state.top ? "top" : "not-top";
      }

      var leaving = this.state.leaving ? "leaving" : "";
      var pinned = this.state.pinned ? "pinned" : "not-pinned";
      var collapse = this.state.collapse ? "collapse" : "";
      return __jsx("nav", {
        className: "navbar ".concat(top, " ").concat(leaving, " ").concat(pinned, " ").concat(collapse),
        id: "main-navbar",
        ref: this.ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("div", {
        className: "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("img", {
        src: "/images/steep-logo.svg",
        width: "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }))), __jsx("div", {
        className: "button",
        onClick: this.onToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }))), __jsx(_ScrollLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "nav-item",
        href: "/#features",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Features"), __jsx(_ScrollLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "nav-item",
        href: "/#download-and-get-started",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Download"), __jsx(_ScrollLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "nav-item",
        href: "/#documentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Docs"), __jsx(_ScrollLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "nav-item",
        href: "/#about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "About"), __jsx(_ScrollLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "nav-item",
        href: "https://github.com/steep-wms/steep",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_11__["GitHub"], {
        className: "feather",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=privacy.js.db5c865a6fb83cc41564.hot-update.js.map