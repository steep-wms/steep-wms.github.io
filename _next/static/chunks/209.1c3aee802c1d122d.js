"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209,689],{8369:function(e,t,i){i.d(t,{Ry:function(){return d}});var n=new WeakMap,r=new WeakMap,s={},o=0,u=function(e){return e&&(e.host||u(e.parentNode))},l=function(e,t,i,l){var d=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var i=u(e);return i&&t.contains(i)?i:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});s[i]||(s[i]=new WeakMap);var a=s[i],h=[],c=new Set,f=new Set(d),m=function(e){!e||c.has(e)||(c.add(e),m(e.parentNode))};d.forEach(m);var g=function(e){!e||f.has(e)||Array.prototype.forEach.call(e.children,function(e){if(c.has(e))g(e);else{var t=e.getAttribute(l),s=null!==t&&"false"!==t,o=(n.get(e)||0)+1,u=(a.get(e)||0)+1;n.set(e,o),a.set(e,u),h.push(e),1===o&&s&&r.set(e,!0),1===u&&e.setAttribute(i,"true"),s||e.setAttribute(l,"true")}})};return g(t),c.clear(),o++,function(){h.forEach(function(e){var t=n.get(e)-1,s=a.get(e)-1;n.set(e,t),a.set(e,s),t||(r.has(e)||e.removeAttribute(l),r.delete(e)),s||e.removeAttribute(i)}),--o||(n=new WeakMap,n=new WeakMap,r=new WeakMap,s={})}},d=function(e,t,i){void 0===i&&(i="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),r=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return r?(n.push.apply(n,Array.from(r.querySelectorAll("[aria-live]"))),l(n,r,i,"aria-hidden")):function(){return null}}},518:function(e,t,i){i.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,i(8030).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},589:function(e,t,i){i.d(t,{EW:function(){return s}});var n=i(2265),r=0;function s(){n.useEffect(()=>{var e,t;let i=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=i[0])&&void 0!==e?e:o()),document.body.insertAdjacentElement("beforeend",null!==(t=i[1])&&void 0!==t?t:o()),r++,()=>{1===r&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),r--}},[])}function o(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},467:function(e,t,i){let n;i.d(t,{M:function(){return c}});var r=i(2265),s=i(1584),o=i(5171),u=i(5137),l=i(7437),d="focusScope.autoFocusOnMount",a="focusScope.autoFocusOnUnmount",h={bubbles:!1,cancelable:!0},c=r.forwardRef((e,t)=>{let{loop:i=!1,trapped:n=!1,onMountAutoFocus:c,onUnmountAutoFocus:_,...v}=e,[y,b]=r.useState(null),w=(0,u.W)(c),S=(0,u.W)(_),x=r.useRef(null),I=(0,s.e)(t,e=>b(e)),E=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(n){let e=function(e){if(E.paused||!y)return;let t=e.target;y.contains(t)?x.current=t:g(x.current,{select:!0})},t=function(e){if(E.paused||!y)return;let t=e.relatedTarget;null===t||y.contains(t)||g(x.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let i=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&g(y)});return y&&i.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),i.disconnect()}}},[n,y,E.paused]),r.useEffect(()=>{if(y){p.add(E);let e=document.activeElement;if(!y.contains(e)){let t=new CustomEvent(d,h);y.addEventListener(d,w),y.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=document.activeElement;for(let n of e)if(g(n,{select:t}),document.activeElement!==i)return}(f(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&g(y))}return()=>{y.removeEventListener(d,w),setTimeout(()=>{let t=new CustomEvent(a,h);y.addEventListener(a,S),y.dispatchEvent(t),t.defaultPrevented||g(null!=e?e:document.body,{select:!0}),y.removeEventListener(a,S),p.remove(E)},0)}}},[y,w,S,E]);let O=r.useCallback(e=>{if(!i&&!n||E.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[n,s]=function(e){let t=f(e);return[m(t,e),m(t.reverse(),e)]}(t);n&&s?e.shiftKey||r!==s?e.shiftKey&&r===n&&(e.preventDefault(),i&&g(s,{select:!0})):(e.preventDefault(),i&&g(n,{select:!0})):r===t&&e.preventDefault()}},[i,n,E.paused]);return(0,l.jsx)(o.WV.div,{tabIndex:-1,...v,ref:I,onKeyDown:O})});function f(e){let t=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)t.push(i.currentNode);return t}function m(e,t){for(let i of e)if(!function(e,t){let{upTo:i}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===i||e!==i);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(i,{upTo:t}))return i}function g(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var i;let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&(i=e)instanceof HTMLInputElement&&"select"in i&&t&&e.select()}}c.displayName="FocusScope";var p=(n=[],{add(e){let t=n[0];e!==t&&(null==t||t.pause()),(n=_(n,e)).unshift(e)},remove(e){var t;null===(t=(n=_(n,e))[0])||void 0===t||t.resume()}});function _(e,t){let i=[...e],n=i.indexOf(t);return -1!==n&&i.splice(n,1),i}},3479:function(e,t,i){function n(e,t,i,n){return new(i||(i=Promise))(function(r,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function u(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(o,u)}l((n=n.apply(e,t||[])).next())})}i.d(t,{Z:function(){return v}}),"function"==typeof SuppressedError&&SuppressedError;let r="KEYS",s="VALUES";class o{constructor(e,t){let i=e._tree,n=Array.from(i.keys());this.set=e,this._type=t,this._path=n.length>0?[{node:i,keys:n}]:[]}next(){let e=this.dive();return this.backtrack(),e}dive(){if(0===this._path.length)return{done:!0,value:void 0};let{node:e,keys:t}=u(this._path);if(""===u(t))return{done:!1,value:this.result()};let i=e.get(u(t));return this._path.push({node:i,keys:Array.from(i.keys())}),this.dive()}backtrack(){if(0===this._path.length)return;let e=u(this._path).keys;e.pop(),e.length>0||(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:e})=>u(e)).filter(e=>""!==e).join("")}value(){return u(this._path).node.get("")}result(){switch(this._type){case s:return this.value();case r:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}let u=e=>e[e.length-1],l=(e,t,i)=>{let n=new Map;if(void 0===t)return n;let r=t.length+1,s=r+i,o=new Uint8Array(s*r).fill(i+1);for(let e=0;e<r;++e)o[e]=e;for(let e=1;e<s;++e)o[e*r]=e;return d(e,t,i,n,o,1,r,""),n},d=(e,t,i,n,r,s,o,u)=>{let l=s*o;e:for(let a of e.keys())if(""===a){let t=r[l-1];t<=i&&n.set(u,[e.get(a),t])}else{let l=s;for(let e=0;e<a.length;++e,++l){let n=a[e],s=o*l,u=s-o,d=r[s],h=Math.max(0,l-i-1),c=Math.min(o-1,l+i);for(let e=h;e<c;++e){let i=n!==t[e],o=r[u+e]+ +i,l=r[u+e+1]+1,a=r[s+e]+1,h=r[s+e+1]=Math.min(o,l,a);h<d&&(d=h)}if(d>i)continue e}d(e.get(a),t,i,n,r,l,o,u+a)}};class a{constructor(e=new Map,t=""){this._size=void 0,this._tree=e,this._prefix=t}atPrefix(e){if(!e.startsWith(this._prefix))throw Error("Mismatched prefix");let[t,i]=h(this._tree,e.slice(this._prefix.length));if(void 0===t){let[t,n]=_(i);for(let i of t.keys())if(""!==i&&i.startsWith(n)){let r=new Map;return r.set(i.slice(n.length),t.get(i)),new a(r,e)}}return new a(t,e)}clear(){this._size=void 0,this._tree.clear()}delete(e){return this._size=void 0,m(this._tree,e)}entries(){return new o(this,"ENTRIES")}forEach(e){for(let[t,i]of this)e(t,i,this)}fuzzyGet(e,t){return l(this._tree,e,t)}get(e){let t=c(this._tree,e);return void 0!==t?t.get(""):void 0}has(e){let t=c(this._tree,e);return void 0!==t&&t.has("")}keys(){return new o(this,r)}set(e,t){if("string"!=typeof e)throw Error("key must be a string");return this._size=void 0,f(this._tree,e).set("",t),this}get size(){if(this._size)return this._size;this._size=0;let e=this.entries();for(;!e.next().done;)this._size+=1;return this._size}update(e,t){if("string"!=typeof e)throw Error("key must be a string");this._size=void 0;let i=f(this._tree,e);return i.set("",t(i.get(""))),this}fetch(e,t){if("string"!=typeof e)throw Error("key must be a string");this._size=void 0;let i=f(this._tree,e),n=i.get("");return void 0===n&&i.set("",n=t()),n}values(){return new o(this,s)}[Symbol.iterator](){return this.entries()}static from(e){let t=new a;for(let[i,n]of e)t.set(i,n);return t}static fromObject(e){return a.from(Object.entries(e))}}let h=(e,t,i=[])=>{if(0===t.length||null==e)return[e,i];for(let n of e.keys())if(""!==n&&t.startsWith(n))return i.push([e,n]),h(e.get(n),t.slice(n.length),i);return i.push([e,t]),h(void 0,"",i)},c=(e,t)=>{if(0===t.length||null==e)return e;for(let i of e.keys())if(""!==i&&t.startsWith(i))return c(e.get(i),t.slice(i.length))},f=(e,t)=>{let i=t.length;t:for(let n=0;e&&n<i;){for(let r of e.keys())if(""!==r&&t[n]===r[0]){let s=Math.min(i-n,r.length),o=1;for(;o<s&&t[n+o]===r[o];)++o;let u=e.get(r);if(o===r.length)e=u;else{let i=new Map;i.set(r.slice(o),u),e.set(t.slice(n,n+o),i),e.delete(r),e=i}n+=o;continue t}let r=new Map;return e.set(t.slice(n),r),r}return e},m=(e,t)=>{let[i,n]=h(e,t);if(void 0!==i){if(i.delete(""),0===i.size)g(n);else if(1===i.size){let[e,t]=i.entries().next().value;p(n,e,t)}}},g=e=>{if(0===e.length)return;let[t,i]=_(e);if(t.delete(i),0===t.size)g(e.slice(0,-1));else if(1===t.size){let[i,n]=t.entries().next().value;""!==i&&p(e.slice(0,-1),i,n)}},p=(e,t,i)=>{if(0===e.length)return;let[n,r]=_(e);n.set(r+t,i),n.delete(r)},_=e=>e[e.length-1];class v{constructor(e){if((null==e?void 0:e.fields)==null)throw Error('MiniSearch: option "fields" must be provided');let t=null==e.autoVacuum||!0===e.autoVacuum?z:e.autoVacuum;this._options=Object.assign(Object.assign(Object.assign({},x),e),{autoVacuum:t,searchOptions:Object.assign(Object.assign({},I),e.searchOptions||{}),autoSuggestOptions:Object.assign(Object.assign({},E),e.autoSuggestOptions||{})}),this._index=new a,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=M,this.addFields(this._options.fields)}add(e){let{extractField:t,tokenize:i,processTerm:n,fields:r,idField:s}=this._options,o=t(e,s);if(null==o)throw Error(`MiniSearch: document does not have ID field "${s}"`);if(this._idToShortId.has(o))throw Error(`MiniSearch: duplicate ID ${o}`);let u=this.addDocumentId(o);for(let s of(this.saveStoredFields(u,e),r)){let r=t(e,s);if(null==r)continue;let o=i(r.toString(),s),l=this._fieldIds[s],d=new Set(o).size;for(let e of(this.addFieldLength(u,l,this._documentCount-1,d),o)){let t=n(e,s);if(Array.isArray(t))for(let e of t)this.addTerm(l,u,e);else t&&this.addTerm(l,u,t)}}}addAll(e){for(let t of e)this.add(t)}addAllAsync(e,t={}){let{chunkSize:i=10}=t,n={chunk:[],promise:Promise.resolve()},{chunk:r,promise:s}=e.reduce(({chunk:e,promise:t},n,r)=>(e.push(n),(r+1)%i==0)?{chunk:[],promise:t.then(()=>new Promise(e=>setTimeout(e,0))).then(()=>this.addAll(e))}:{chunk:e,promise:t},n);return s.then(()=>this.addAll(r))}remove(e){let{tokenize:t,processTerm:i,extractField:n,fields:r,idField:s}=this._options,o=n(e,s);if(null==o)throw Error(`MiniSearch: document does not have ID field "${s}"`);let u=this._idToShortId.get(o);if(null==u)throw Error(`MiniSearch: cannot remove document with ID ${o}: it is not in the index`);for(let s of r){let r=n(e,s);if(null==r)continue;let o=t(r.toString(),s),l=this._fieldIds[s],d=new Set(o).size;for(let e of(this.removeFieldLength(u,l,this._documentCount,d),o)){let t=i(e,s);if(Array.isArray(t))for(let e of t)this.removeTerm(l,u,e);else t&&this.removeTerm(l,u,t)}}this._storedFields.delete(u),this._documentIds.delete(u),this._idToShortId.delete(o),this._fieldLength.delete(u),this._documentCount-=1}removeAll(e){if(e)for(let t of e)this.remove(t);else if(arguments.length>0)throw Error("Expected documents to be present. Omit the argument to remove all documents.");else this._index=new a,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}discard(e){let t=this._idToShortId.get(e);if(null==t)throw Error(`MiniSearch: cannot discard document with ID ${e}: it is not in the index`);this._idToShortId.delete(e),this._documentIds.delete(t),this._storedFields.delete(t),(this._fieldLength.get(t)||[]).forEach((e,i)=>{this.removeFieldLength(t,i,this._documentCount,e)}),this._fieldLength.delete(t),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()}maybeAutoVacuum(){if(!1===this._options.autoVacuum)return;let{minDirtFactor:e,minDirtCount:t,batchSize:i,batchWait:n}=this._options.autoVacuum;this.conditionalVacuum({batchSize:i,batchWait:n},{minDirtCount:t,minDirtFactor:e})}discardAll(e){let t=this._options.autoVacuum;try{for(let t of(this._options.autoVacuum=!1,e))this.discard(t)}finally{this._options.autoVacuum=t}this.maybeAutoVacuum()}replace(e){let{idField:t,extractField:i}=this._options,n=i(e,t);this.discard(n),this.add(e)}vacuum(e={}){return this.conditionalVacuum(e)}conditionalVacuum(e,t){return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,null!=this._enqueuedVacuum||(this._enqueuedVacuum=this._currentVacuum.then(()=>{let t=this._enqueuedVacuumConditions;return this._enqueuedVacuumConditions=M,this.performVacuuming(e,t)})),this._enqueuedVacuum):!1===this.vacuumConditionsMet(t)?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)}performVacuuming(e,t){return n(this,void 0,void 0,function*(){let i=this._dirtCount;if(this.vacuumConditionsMet(t)){let t=e.batchSize||O.batchSize,n=e.batchWait||O.batchWait,r=1;for(let[e,i]of this._index){for(let[e,t]of i)for(let[n]of t)this._documentIds.has(n)||(t.size<=1?i.delete(e):t.delete(n));0===this._index.get(e).size&&this._index.delete(e),r%t==0&&(yield new Promise(e=>setTimeout(e,n))),r+=1}this._dirtCount-=i}yield null,this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null})}vacuumConditionsMet(e){if(null==e)return!0;let{minDirtCount:t,minDirtFactor:i}=e;return t=t||z.minDirtCount,i=i||z.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=i}get isVacuuming(){return null!=this._currentVacuum}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}has(e){return this._idToShortId.has(e)}getStoredFields(e){let t=this._idToShortId.get(e);if(null!=t)return this._storedFields.get(t)}search(e,t={}){let i=this.executeQuery(e,t),n=[];for(let[e,{score:r,terms:s,match:o}]of i){let i=s.length||1,u={id:this._documentIds.get(e),score:r*i,terms:Object.keys(o),queryTerms:s,match:o};Object.assign(u,this._storedFields.get(e)),(null==t.filter||t.filter(u))&&n.push(u)}return e===v.wildcard&&null==t.boostDocument&&null==this._options.searchOptions.boostDocument||n.sort(C),n}autoSuggest(e,t={}){t=Object.assign(Object.assign({},this._options.autoSuggestOptions),t);let i=new Map;for(let{score:n,terms:r}of this.search(e,t)){let e=r.join(" "),t=i.get(e);null!=t?(t.score+=n,t.count+=1):i.set(e,{score:n,terms:r,count:1})}let n=[];for(let[e,{score:t,terms:r,count:s}]of i)n.push({suggestion:e,terms:r,score:t/s});return n.sort(C),n}get documentCount(){return this._documentCount}get termCount(){return this._index.size}static loadJSON(e,t){if(null==t)throw Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)}static loadJSONAsync(e,t){return n(this,void 0,void 0,function*(){if(null==t)throw Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJSAsync(JSON.parse(e),t)})}static getDefault(e){if(x.hasOwnProperty(e))return y(x,e);throw Error(`MiniSearch: unknown option "${e}"`)}static loadJS(e,t){let{index:i,documentIds:n,fieldLength:r,storedFields:s,serializationVersion:o}=e,u=this.instantiateMiniSearch(e,t);for(let[e,t]of(u._documentIds=L(n),u._fieldLength=L(r),u._storedFields=L(s),u._documentIds))u._idToShortId.set(t,e);for(let[e,t]of i){let i=new Map;for(let e of Object.keys(t)){let n=t[e];1===o&&(n=n.ds),i.set(parseInt(e,10),L(n))}u._index.set(e,i)}return u}static loadJSAsync(e,t){return n(this,void 0,void 0,function*(){let{index:i,documentIds:n,fieldLength:r,storedFields:s,serializationVersion:o}=e,u=this.instantiateMiniSearch(e,t);for(let[e,t]of(u._documentIds=yield A(n),u._fieldLength=yield A(r),u._storedFields=yield A(s),u._documentIds))u._idToShortId.set(t,e);let l=0;for(let[e,t]of i){let i=new Map;for(let e of Object.keys(t)){let n=t[e];1===o&&(n=n.ds),i.set(parseInt(e,10),(yield A(n)))}++l%1e3==0&&(yield T(0)),u._index.set(e,i)}return u})}static instantiateMiniSearch(e,t){let{documentCount:i,nextId:n,fieldIds:r,averageFieldLength:s,dirtCount:o,serializationVersion:u}=e;if(1!==u&&2!==u)throw Error("MiniSearch: cannot deserialize an index created with an incompatible version");let l=new v(t);return l._documentCount=i,l._nextId=n,l._idToShortId=new Map,l._fieldIds=r,l._avgFieldLength=s,l._dirtCount=o||0,l._index=new a,l}executeQuery(e,t={}){if(e===v.wildcard)return this.executeWildcardQuery(t);if("string"!=typeof e){let i=Object.assign(Object.assign(Object.assign({},t),e),{queries:void 0}),n=e.queries.map(e=>this.executeQuery(e,i));return this.combineResults(n,i.combineWith)}let{tokenize:i,processTerm:n,searchOptions:r}=this._options,s=Object.assign(Object.assign({tokenize:i,processTerm:n},r),t),{tokenize:o,processTerm:u}=s,l=o(e).flatMap(e=>u(e)).filter(e=>!!e).map(S(s)).map(e=>this.executeQuerySpec(e,s));return this.combineResults(l,s.combineWith)}executeQuerySpec(e,t){let i,n;let r=Object.assign(Object.assign({},this._options.searchOptions),t),s=(r.fields||this._options.fields).reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:y(r.boost,t)||1}),{}),{boostDocument:o,weights:u,maxFuzzy:l,bm25:d}=r,{fuzzy:a,prefix:h}=Object.assign(Object.assign({},I.weights),u),c=this._index.get(e.term),f=this.termResults(e.term,e.term,1,c,s,o,d);if(e.prefix&&(i=this._index.atPrefix(e.term)),e.fuzzy){let t=!0===e.fuzzy?.2:e.fuzzy,i=t<1?Math.min(l,Math.round(e.term.length*t)):t;i&&(n=this._index.fuzzyGet(e.term,i))}if(i)for(let[t,r]of i){let i=t.length-e.term.length;if(!i)continue;null==n||n.delete(t);let u=h*t.length/(t.length+.3*i);this.termResults(e.term,t,u,r,s,o,d,f)}if(n)for(let t of n.keys()){let[i,r]=n.get(t);if(!r)continue;let u=a*t.length/(t.length+r);this.termResults(e.term,t,u,i,s,o,d,f)}return f}executeWildcardQuery(e){let t=new Map,i=Object.assign(Object.assign({},this._options.searchOptions),e);for(let[e,n]of this._documentIds){let r=i.boostDocument?i.boostDocument(n,"",this._storedFields.get(e)):1;t.set(e,{score:r,terms:[],match:{}})}return t}combineResults(e,t="or"){if(0===e.length)return new Map;let i=b[t.toLowerCase()];if(!i)throw Error(`Invalid combination operator: ${t}`);return e.reduce(i)||new Map}toJSON(){let e=[];for(let[t,i]of this._index){let n={};for(let[e,t]of i)n[e]=Object.fromEntries(t);e.push([t,n])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:e,serializationVersion:2}}termResults(e,t,i,n,r,s,o,u=new Map){if(null==n)return u;for(let l of Object.keys(r)){let d=r[l],a=this._fieldIds[l],h=n.get(a);if(null==h)continue;let c=h.size,f=this._avgFieldLength[a];for(let n of h.keys()){if(!this._documentIds.has(n)){this.removeTerm(a,n,t),c-=1;continue}let r=s?s(this._documentIds.get(n),t,this._storedFields.get(n)):1;if(!r)continue;let m=h.get(n),g=this._fieldLength.get(n)[a],p=i*d*r*w(m,c,this._documentCount,g,f,o),_=u.get(n);if(_){_.score+=p,F(_.terms,e);let i=y(_.match,t);i?i.push(l):_.match[t]=[l]}else u.set(n,{score:p,terms:[e],match:{[t]:[l]}})}}return u}addTerm(e,t,i){let n=this._index.fetch(i,j),r=n.get(e);if(null==r)(r=new Map).set(t,1),n.set(e,r);else{let e=r.get(t);r.set(t,(e||0)+1)}}removeTerm(e,t,i){if(!this._index.has(i)){this.warnDocumentChanged(t,e,i);return}let n=this._index.fetch(i,j),r=n.get(e);null==r||null==r.get(t)?this.warnDocumentChanged(t,e,i):1>=r.get(t)?r.size<=1?n.delete(e):r.delete(t):r.set(t,r.get(t)-1),0===this._index.get(i).size&&this._index.delete(i)}warnDocumentChanged(e,t,i){for(let n of Object.keys(this._fieldIds))if(this._fieldIds[n]===t){this._options.logger("warn",`MiniSearch: document with ID ${this._documentIds.get(e)} has changed before removal: term "${i}" was not present in field "${n}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}}addDocumentId(e){let t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t}addFields(e){for(let t=0;t<e.length;t++)this._fieldIds[e[t]]=t}addFieldLength(e,t,i,n){let r=this._fieldLength.get(e);null==r&&this._fieldLength.set(e,r=[]),r[t]=n;let s=this._avgFieldLength[t]||0;this._avgFieldLength[t]=(s*i+n)/(i+1)}removeFieldLength(e,t,i,n){if(1===i){this._avgFieldLength[t]=0;return}let r=this._avgFieldLength[t]*i-n;this._avgFieldLength[t]=r/(i-1)}saveStoredFields(e,t){let{storeFields:i,extractField:n}=this._options;if(null==i||0===i.length)return;let r=this._storedFields.get(e);for(let s of(null==r&&this._storedFields.set(e,r={}),i)){let e=n(t,s);void 0!==e&&(r[s]=e)}}}v.wildcard=Symbol("*");let y=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,b={or:(e,t)=>{for(let i of t.keys()){let n=e.get(i);if(null==n)e.set(i,t.get(i));else{let{score:e,terms:r,match:s}=t.get(i);n.score=n.score+e,n.match=Object.assign(n.match,s),k(n.terms,r)}}return e},and:(e,t)=>{let i=new Map;for(let n of t.keys()){let r=e.get(n);if(null==r)continue;let{score:s,terms:o,match:u}=t.get(n);k(r.terms,o),i.set(n,{score:r.score+s,terms:r.terms,match:Object.assign(r.match,u)})}return i},and_not:(e,t)=>{for(let i of t.keys())e.delete(i);return e}},w=(e,t,i,n,r,s)=>{let{k:o,b:u,d:l}=s;return Math.log(1+(i-t+.5)/(t+.5))*(l+e*(o+1)/(e+o*(1-u+u*n/r)))},S=e=>(t,i,n)=>{let r="function"==typeof e.fuzzy?e.fuzzy(t,i,n):e.fuzzy||!1,s="function"==typeof e.prefix?e.prefix(t,i,n):!0===e.prefix;return{term:t,fuzzy:r,prefix:s}},x={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(V),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{"function"==typeof(null==console?void 0:console[e])&&console[e](t)},autoVacuum:!0},I={combineWith:"or",prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:{k:1.2,b:.7,d:.5}},E={combineWith:"and",prefix:(e,t,i)=>t===i.length-1},O={batchSize:1e3,batchWait:10},M={minDirtFactor:.1,minDirtCount:20},z=Object.assign(Object.assign({},O),M),F=(e,t)=>{e.includes(t)||e.push(t)},k=(e,t)=>{for(let i of t)e.includes(i)||e.push(i)},C=({score:e},{score:t})=>t-e,j=()=>new Map,L=e=>{let t=new Map;for(let i of Object.keys(e))t.set(parseInt(i,10),e[i]);return t},A=e=>n(void 0,void 0,void 0,function*(){let t=new Map,i=0;for(let n of Object.keys(e))t.set(parseInt(n,10),e[n]),++i%1e3==0&&(yield T(0));return t}),T=e=>new Promise(t=>setTimeout(t,e)),V=/[\n\r\p{Z}\p{P}]/u}}]);