(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"3YZR":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n("q1tI"),a=n.n(o).a.createElement;function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(o.createContext)(),s=Object(o.createContext)(),f=function(e,t){var n=t.height,r=t.pinned;return"undefined"!==typeof n&&n!==e.height&&(e=c(c({},e),{},{height:n})),"undefined"!==typeof r&&r!==e.pinned&&(e=c(c({},e),{},{pinned:r})),e};t.a={State:u,Dispatch:s,Provider:function(e){var t=e.children,n=Object(o.useReducer)(f,{height:0,pinned:!1}),r=n[0],i=n[1];return a(u.Provider,{value:r},a(s.Provider,{value:i},t))}}},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),f=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=f(n),d=r,v=l["".concat(i,".").concat(d)]||l[d]||p[d]||a;return n?o.a.createElement(v,c(c({ref:t},s),{},{components:n})):o.a.createElement(v,c({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"===typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=u(n("q1tI")),o=u(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function u(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var s=l[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;p.has(f)?a=!1:(p.add(f),r[s]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function v(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}v.rewind=d.rewind;var h=v;t.default=h},"9mAs":function(e,t,n){"use strict";var r=n("wx14"),o=n("q1tI"),a=n.n(o),i=n("wrRx"),c=n("lNPj"),u=n("3YZR"),s=a.a.createElement;function f(e){document.body.scrollTop=document.documentElement.scrollTop=e}t.a=function(e){var t=Object(o.useContext)(c.a.Dispatch),n=Object(o.useContext)(u.a.State);return s("a",Object(r.a)({},e,{onClick:function(r){var o=e.href;o.startsWith("/")&&(o=o.substring(1)),o.startsWith("#")&&(o=o.substring(1));var a=document.getElementById(o);if(a){r.preventDefault();var c=Math.max(15,n.pinned?n.height:0),u=Number.parseInt(window.getComputedStyle(a).paddingTop);!function(e,n,r){t(!0),requestAnimationFrame||f(e);var o=Object(i.a)();if(o===e)return window.location.hash=r,void t(!1);var a=e-o,c=void 0;requestAnimationFrame((function e(i){c||(c=i,window.location.hash=r);var u=i-c,s=Math.min(1,u/n);f(o+a*(s*(2-s))),s<1?requestAnimationFrame(e):t(!1)}))}(a.offsetTop+u-c,500,o)}}}))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},Cgje:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),c=n("TSYQ"),u=n.n(c),s=(n("SYuY"),n("YFqc")),f=n.n(s),l=n("9mAs"),p=n("NZY8"),d=n("wrRx"),v=n("lNPj"),h=n("3YZR"),m=o.a.createElement,y=function(){var e=Object(r.useState)(!0),t=e[0],n=e[1],o=Object(r.useState)(!1),a=o[0],i=o[1],c=Object(r.useState)(!1),s=c[0],y=c[1],b=Object(r.useState)(!1),g=b[0],w=b[1],O=Object(r.useRef)(0),j=Object(r.useRef)(0),x=Object(r.useRef)(-1),P=Object(r.useRef)(),E=Object(r.useContext)(v.a.State),k=Object(r.useContext)(h.a.Dispatch);return Object(r.useEffect)((function(){function e(){var e=Object(d.a)();if(-1===x.current&&(x.current=e),E)return x.current=e,void(g&&w(!1));var r=P.current.clientHeight,o=-P.current.offsetTop,c=s?e<=o:e<=r;if(s&&c&&(y(!1),k({pinned:!1})),c||!t||a?(n(c),i(!1)):(i(!0),w(!1)),!c){var u=e-x.current,f=s&&u>2;if(f||!s&&u<-2){j.current++;var l=+new Date;l-O.current>50&&(j.current=0),j.current>1&&(f?(y(!1),k({pinned:!1}),w(!1)):(y(!0),k({pinned:!0}),j.current=0),j.current=0),O.current=l}}x.current=e}window.addEventListener("scroll",e,{passive:!0});var r=P.current.clientHeight;return k({height:r}),function(){window.removeEventListener("scroll",e)}}),[t,a,s,g,E,k]),m("nav",{className:u()("navbar",{top:t,leaving:a,pinned:s,collapse:g}),id:"main-navbar",ref:P},m("div",{className:"container"},m("div",{className:"head"},m(f.a,{href:"/"},m("a",{className:"navbar-brand"},m("img",{src:"/images/steep-logo.svg",width:"200"}))),m("div",{className:"button",onClick:function(){return w(!g)}},m("span",null),m("span",null),m("span",null))),m(l.a,{className:"nav-item",href:"/#key-features"},"Features"),m(l.a,{className:"nav-item",href:"/#download-and-get-started"},"Download"),m(l.a,{className:"nav-item",href:"/#documentation"},"Docs"),m(l.a,{className:"nav-item",href:"/#about"},"About"),m("a",{className:"nav-item",href:"https://github.com/steep-wms/steep"},m(p.a,{className:"feather"}))))},b=o.a.createElement;t.a=function(e){var t=e.title,n=void 0===t?"Steep Workflow Management System":t;return b("header",null,b(i.a,null,b("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),b("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),b("meta",{name:"author",content:"Michel Kr\xe4mer"}),b("meta",{name:"description",content:"Scientific Workflows in the Cloud"}),b("meta",{name:"robots",content:"index,follow"}),b("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400",rel:"stylesheet"}),b("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400",rel:"stylesheet"}),b("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),b("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),b("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),b("link",{rel:"icon",type:"image/png",sizes:"48x48",href:"/favicons/favicon-48x48.png"}),b("title",null,n)),b(y,null))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JoS9:function(e,t,n){},NZY8:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,s=u(e,["color","size"]);return(o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="GitHub",t.a=s},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SYuY:function(e,t,n){},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),s=n("RIqP");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(s,c);var u=f(s);function s(e){var a;return r(this,s),a=u.call(this,e),p&&(t.add(o(a)),n(o(a))),a}return a(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(l.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("TqRt"),f=n("284h");t.__esModule=!0,t.default=void 0;var l,p=f(n("q1tI")),d=n("QmWs"),v=n("g/15"),h=s(n("nOHt")),m=n("elyg");function y(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var b=new Map,g=window.IntersectionObserver,w={};function O(){return l||(g?l=new g((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){a(i,e);var t=u(i);function i(e){var n;return r(this,i),(n=t.call(this,e)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,c=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var u=window.location.pathname;i=(0,d.resolve)(u,i),c=c?(0,d.resolve)(u,c):i,e.preventDefault();var s=n.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](i,c,{shallow:n.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return o(i,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=O();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,a=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),c={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(c.href=a||o);var u=n("P5f7").rewriteUrlForNextExport;return c.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(c.href=u(c.href)),p.default.cloneElement(i,c)}}]),i}(p.Component);t.default=j},lNPj:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement,a=Object(r.createContext)(),i=Object(r.createContext)(),c=function(e,t){return t};t.a={State:a,Dispatch:i,Provider:function(e){var t=e.children,n=Object(r.useReducer)(c,!1),u=n[0],s=n[1];return o(a.Provider,{value:u},o(i.Provider,{value:s},t))}}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},naWs:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=(n("JoS9"),o.a.createElement),u=new Intl.DateTimeFormat("en",{year:"numeric"}).format(new Date);t.a=function(){return c("footer",null,c("div",{className:"footer-background"}),c("div",{className:"footer-content"},c("div",{className:"container"},c("div",{className:"footer-row"},c("div",{className:"logo"},c("a",{href:"https://igd.fraunhofer.de"},c("img",{src:"/images/fraunhofer-light.svg",className:"img-fluid"}))),c("div",{className:"copyright"},"Copyright \xa9 2013-",u," ",c("a",{href:"https://igd.fraunhofer.de"},"Fraunhofer Institute for Computer Graphics Research IGD"),c("br",null),"[ ",c(i.a,{href:"/imprint/"},c("a",null,"Imprint"))," | ",c(i.a,{href:"/privacy/"},c("a",null,"Privacy"))," ]")))))}},wrRx:function(e,t,n){"use strict";t.a=function(){return Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}}]);