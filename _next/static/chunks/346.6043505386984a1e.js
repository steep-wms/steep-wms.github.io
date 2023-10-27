"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{1291:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(2898);let i=(0,n.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},4685:function(e,t,r){r.d(t,{Z:function(){return s}});var n,__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function __awaiter(e,t,r,n){function adopt(e){return e instanceof r?e:new r(function(t){t(e)})}return new(r||(r=Promise))(function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})}function __generator(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function verb(e){return function(t){return step([e,t])}}function step(u){if(r)throw TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}"function"==typeof SuppressedError&&SuppressedError;var i="KEYS",o="VALUES",a=function(){function TreeIterator(e,t){var r=e._tree,n=Array.from(r.keys());this.set=e,this._type=t,this._path=n.length>0?[{node:r,keys:n}]:[]}return TreeIterator.prototype.next=function(){var e=this.dive();return this.backtrack(),e},TreeIterator.prototype.dive=function(){if(0===this._path.length)return{done:!0,value:void 0};var e=last$1(this._path),t=e.node,r=e.keys;if(""===last$1(r))return{done:!1,value:this.result()};var n=t.get(last$1(r));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()},TreeIterator.prototype.backtrack=function(){if(0!==this._path.length){var e=last$1(this._path).keys;e.pop(),e.length>0||(this._path.pop(),this.backtrack())}},TreeIterator.prototype.key=function(){return this.set._prefix+this._path.map(function(e){return last$1(e.keys)}).filter(function(e){return""!==e}).join("")},TreeIterator.prototype.value=function(){return last$1(this._path).node.get("")},TreeIterator.prototype.result=function(){switch(this._type){case o:return this.value();case i:return this.key();default:return[this.key(),this.value()]}},TreeIterator.prototype[Symbol.iterator]=function(){return this},TreeIterator}(),last$1=function(e){return e[e.length-1]},fuzzySearch=function(e,t,r){var n=new Map;if(void 0===t)return n;for(var i=t.length+1,o=i+r,a=new Uint8Array(o*i).fill(r+1),u=0;u<i;++u)a[u]=u;for(var s=1;s<o;++s)a[s*i]=s;return recurse(e,t,r,n,a,1,i,""),n},recurse=function(e,t,r,n,i,o,a,u){var s,l,c=o*a;try{e:for(var h=__values(e.keys()),d=h.next();!d.done;d=h.next()){var f=d.value;if(""===f){var _=i[c-1];_<=r&&n.set(u,[e.get(f),_])}else{for(var v=o,p=0;p<f.length;++p,++v){for(var y=f[p],m=a*v,g=m-a,F=i[m],x=Math.max(0,v-r-1),b=Math.min(a-1,v+r),w=x;w<b;++w){var S=y!==t[w],M=i[g+w]+ +S,A=i[g+w+1]+1,C=i[m+w]+1,z=i[m+w+1]=Math.min(M,A,C);z<F&&(F=z)}if(F>r)continue e}recurse(e.get(f),t,r,n,i,v,a,u+f)}}}catch(e){s={error:e}}finally{try{d&&!d.done&&(l=h.return)&&l.call(h)}finally{if(s)throw s.error}}},u=function(){function SearchableMap(e,t){void 0===e&&(e=new Map),void 0===t&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return SearchableMap.prototype.atPrefix=function(e){if(!e.startsWith(this._prefix))throw Error("Mismatched prefix");var t,r,n=__read(trackDown(this._tree,e.slice(this._prefix.length)),2),i=n[0],o=n[1];if(void 0===i){var a=__read(last(o),2),u=a[0],s=a[1];try{for(var l=__values(u.keys()),c=l.next();!c.done;c=l.next()){var h=c.value;if(""!==h&&h.startsWith(s)){var d=new Map;return d.set(h.slice(s.length),u.get(h)),new SearchableMap(d,e)}}}catch(e){t={error:e}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}}return new SearchableMap(i,e)},SearchableMap.prototype.clear=function(){this._size=void 0,this._tree.clear()},SearchableMap.prototype.delete=function(e){return this._size=void 0,remove(this._tree,e)},SearchableMap.prototype.entries=function(){return new a(this,"ENTRIES")},SearchableMap.prototype.forEach=function(e){var t,r;try{for(var n=__values(this),i=n.next();!i.done;i=n.next()){var o=__read(i.value,2),a=o[0],u=o[1];e(a,u,this)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},SearchableMap.prototype.fuzzyGet=function(e,t){return fuzzySearch(this._tree,e,t)},SearchableMap.prototype.get=function(e){var t=lookup(this._tree,e);return void 0!==t?t.get(""):void 0},SearchableMap.prototype.has=function(e){var t=lookup(this._tree,e);return void 0!==t&&t.has("")},SearchableMap.prototype.keys=function(){return new a(this,i)},SearchableMap.prototype.set=function(e,t){if("string"!=typeof e)throw Error("key must be a string");return this._size=void 0,createPath(this._tree,e).set("",t),this},Object.defineProperty(SearchableMap.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),SearchableMap.prototype.update=function(e,t){if("string"!=typeof e)throw Error("key must be a string");this._size=void 0;var r=createPath(this._tree,e);return r.set("",t(r.get(""))),this},SearchableMap.prototype.fetch=function(e,t){if("string"!=typeof e)throw Error("key must be a string");this._size=void 0;var r=createPath(this._tree,e),n=r.get("");return void 0===n&&r.set("",n=t()),n},SearchableMap.prototype.values=function(){return new a(this,o)},SearchableMap.prototype[Symbol.iterator]=function(){return this.entries()},SearchableMap.from=function(e){var t,r,n=new SearchableMap;try{for(var i=__values(e),o=i.next();!o.done;o=i.next()){var a=__read(o.value,2),u=a[0],s=a[1];n.set(u,s)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n},SearchableMap.fromObject=function(e){return SearchableMap.from(Object.entries(e))},SearchableMap}(),trackDown=function(e,t,r){var n,i;if(void 0===r&&(r=[]),0===t.length||null==e)return[e,r];try{for(var o=__values(e.keys()),a=o.next();!a.done;a=o.next()){var u=a.value;if(""!==u&&t.startsWith(u))return r.push([e,u]),trackDown(e.get(u),t.slice(u.length),r)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return r.push([e,t]),trackDown(void 0,"",r)},lookup=function(e,t){var r,n;if(0===t.length||null==e)return e;try{for(var i=__values(e.keys()),o=i.next();!o.done;o=i.next()){var a=o.value;if(""!==a&&t.startsWith(a))return lookup(e.get(a),t.slice(a.length))}}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}},createPath=function(e,t){var r,n,i=t.length;t:for(var o=0;e&&o<i;){try{for(var a=(r=void 0,__values(e.keys())),u=a.next();!u.done;u=a.next()){var s=u.value;if(""!==s&&t[o]===s[0]){for(var l=Math.min(i-o,s.length),c=1;c<l&&t[o+c]===s[c];)++c;var h=e.get(s);if(c===s.length)e=h;else{var d=new Map;d.set(s.slice(c),h),e.set(t.slice(o,o+c),d),e.delete(s),e=d}o+=c;continue t}}}catch(e){r={error:e}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}var f=new Map;return e.set(t.slice(o),f),f}return e},remove=function(e,t){var r=__read(trackDown(e,t),2),n=r[0],i=r[1];if(void 0!==n){if(n.delete(""),0===n.size)cleanup(i);else if(1===n.size){var o=__read(n.entries().next().value,2);merge(i,o[0],o[1])}}},cleanup=function(e){if(0!==e.length){var t=__read(last(e),2),r=t[0],n=t[1];if(r.delete(n),0===r.size)cleanup(e.slice(0,-1));else if(1===r.size){var i=__read(r.entries().next().value,2),o=i[0],a=i[1];""!==o&&merge(e.slice(0,-1),o,a)}}},merge=function(e,t,r){if(0!==e.length){var n=__read(last(e),2),i=n[0],o=n[1];i.set(o+t,r),i.delete(o)}},last=function(e){return e[e.length-1]},s=function(){function MiniSearch(e){if((null==e?void 0:e.fields)==null)throw Error('MiniSearch: option "fields" must be provided');var t=null==e.autoVacuum||!0===e.autoVacuum?v:e.autoVacuum;this._options=__assign(__assign(__assign({},c),e),{autoVacuum:t,searchOptions:__assign(__assign({},h),e.searchOptions||{}),autoSuggestOptions:__assign(__assign({},d),e.autoSuggestOptions||{})}),this._index=new u,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=_,this.addFields(this._options.fields)}return MiniSearch.prototype.add=function(e){var t,r,n,i,o,a,u=this._options,s=u.extractField,l=u.tokenize,c=u.processTerm,h=u.fields,d=u.idField,f=s(e,d);if(null==f)throw Error('MiniSearch: document does not have ID field "'.concat(d,'"'));if(this._idToShortId.has(f))throw Error("MiniSearch: duplicate ID ".concat(f));var _=this.addDocumentId(f);this.saveStoredFields(_,e);try{for(var v=__values(h),p=v.next();!p.done;p=v.next()){var y=p.value,m=s(e,y);if(null!=m){var g=l(m.toString(),y),F=this._fieldIds[y],x=new Set(g).size;this.addFieldLength(_,F,this._documentCount-1,x);try{for(var b=(n=void 0,__values(g)),w=b.next();!w.done;w=b.next()){var S=w.value,M=c(S,y);if(Array.isArray(M))try{for(var A=(o=void 0,__values(M)),C=A.next();!C.done;C=A.next()){var z=C.value;this.addTerm(F,_,z)}}catch(e){o={error:e}}finally{try{C&&!C.done&&(a=A.return)&&a.call(A)}finally{if(o)throw o.error}}else M&&this.addTerm(F,_,M)}}catch(e){n={error:e}}finally{try{w&&!w.done&&(i=b.return)&&i.call(b)}finally{if(n)throw n.error}}}}}catch(e){t={error:e}}finally{try{p&&!p.done&&(r=v.return)&&r.call(v)}finally{if(t)throw t.error}}},MiniSearch.prototype.addAll=function(e){var t,r;try{for(var n=__values(e),i=n.next();!i.done;i=n.next()){var o=i.value;this.add(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},MiniSearch.prototype.addAllAsync=function(e,t){var r=this;void 0===t&&(t={});var n=t.chunkSize,i=void 0===n?10:n,o={chunk:[],promise:Promise.resolve()},a=e.reduce(function(e,t,n){var o=e.chunk,a=e.promise;return(o.push(t),(n+1)%i==0)?{chunk:[],promise:a.then(function(){return new Promise(function(e){return setTimeout(e,0)})}).then(function(){return r.addAll(o)})}:{chunk:o,promise:a}},o),u=a.chunk;return a.promise.then(function(){return r.addAll(u)})},MiniSearch.prototype.remove=function(e){var t,r,n,i,o,a,u=this._options,s=u.tokenize,l=u.processTerm,c=u.extractField,h=u.fields,d=u.idField,f=c(e,d);if(null==f)throw Error('MiniSearch: document does not have ID field "'.concat(d,'"'));var _=this._idToShortId.get(f);if(null==_)throw Error("MiniSearch: cannot remove document with ID ".concat(f,": it is not in the index"));try{for(var v=__values(h),p=v.next();!p.done;p=v.next()){var y=p.value,m=c(e,y);if(null!=m){var g=s(m.toString(),y),F=this._fieldIds[y],x=new Set(g).size;this.removeFieldLength(_,F,this._documentCount,x);try{for(var b=(n=void 0,__values(g)),w=b.next();!w.done;w=b.next()){var S=w.value,M=l(S,y);if(Array.isArray(M))try{for(var A=(o=void 0,__values(M)),C=A.next();!C.done;C=A.next()){var z=C.value;this.removeTerm(F,_,z)}}catch(e){o={error:e}}finally{try{C&&!C.done&&(a=A.return)&&a.call(A)}finally{if(o)throw o.error}}else M&&this.removeTerm(F,_,M)}}catch(e){n={error:e}}finally{try{w&&!w.done&&(i=b.return)&&i.call(b)}finally{if(n)throw n.error}}}}}catch(e){t={error:e}}finally{try{p&&!p.done&&(r=v.return)&&r.call(v)}finally{if(t)throw t.error}}this._storedFields.delete(_),this._documentIds.delete(_),this._idToShortId.delete(f),this._fieldLength.delete(_),this._documentCount-=1},MiniSearch.prototype.removeAll=function(e){var t,r;if(e)try{for(var n=__values(e),i=n.next();!i.done;i=n.next()){var o=i.value;this.remove(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}else if(arguments.length>0)throw Error("Expected documents to be present. Omit the argument to remove all documents.");else this._index=new u,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0},MiniSearch.prototype.discard=function(e){var t=this,r=this._idToShortId.get(e);if(null==r)throw Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(r),this._storedFields.delete(r),(this._fieldLength.get(r)||[]).forEach(function(e,n){t.removeFieldLength(r,n,t._documentCount,e)}),this._fieldLength.delete(r),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},MiniSearch.prototype.maybeAutoVacuum=function(){if(!1!==this._options.autoVacuum){var e=this._options.autoVacuum,t=e.minDirtFactor,r=e.minDirtCount,n=e.batchSize,i=e.batchWait;this.conditionalVacuum({batchSize:n,batchWait:i},{minDirtCount:r,minDirtFactor:t})}},MiniSearch.prototype.discardAll=function(e){var t,r,n=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var i=__values(e),o=i.next();!o.done;o=i.next()){var a=o.value;this.discard(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=n}this.maybeAutoVacuum()},MiniSearch.prototype.replace=function(e){var t=this._options,r=t.idField,n=(0,t.extractField)(e,r);this.discard(n),this.add(e)},MiniSearch.prototype.vacuum=function(e){return void 0===e&&(e={}),this.conditionalVacuum(e)},MiniSearch.prototype.conditionalVacuum=function(e,t){var r=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,null!=this._enqueuedVacuum||(this._enqueuedVacuum=this._currentVacuum.then(function(){var t=r._enqueuedVacuumConditions;return r._enqueuedVacuumConditions=_,r.performVacuuming(e,t)})),this._enqueuedVacuum):!1===this.vacuumConditionsMet(t)?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},MiniSearch.prototype.performVacuuming=function(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,i,o,a,u,s,l,c,h,d,_,v,p,y,m,g,F,x,b,w,S,M;return __generator(this,function(A){switch(A.label){case 0:if(r=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];n=e.batchSize||f.batchSize,i=e.batchWait||f.batchWait,o=1,A.label=1;case 1:A.trys.push([1,7,8,9]),u=(a=__values(this._index)).next(),A.label=2;case 2:if(u.done)return[3,6];l=(s=__read(u.value,2))[0],c=s[1];try{for(b=void 0,d=(h=__values(c)).next();!d.done;d=h.next()){v=(_=__read(d.value,2))[0],p=_[1];try{for(S=void 0,m=(y=__values(p)).next();!m.done;m=y.next())g=__read(m.value,1)[0],this._documentIds.has(g)||(p.size<=1?c.delete(v):p.delete(g))}catch(e){S={error:e}}finally{try{m&&!m.done&&(M=y.return)&&M.call(y)}finally{if(S)throw S.error}}}}catch(e){b={error:e}}finally{try{d&&!d.done&&(w=h.return)&&w.call(h)}finally{if(b)throw b.error}}if(0===this._index.get(l).size&&this._index.delete(l),o%n!=0)return[3,4];return[4,new Promise(function(e){return setTimeout(e,i)})];case 3:A.sent(),A.label=4;case 4:o+=1,A.label=5;case 5:return u=a.next(),[3,2];case 6:return[3,9];case 7:return F={error:A.sent()},[3,9];case 8:try{u&&!u.done&&(x=a.return)&&x.call(a)}finally{if(F)throw F.error}return[7];case 9:this._dirtCount-=r,A.label=10;case 10:return[4,null];case 11:return A.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},MiniSearch.prototype.vacuumConditionsMet=function(e){if(null==e)return!0;var t=e.minDirtCount,r=e.minDirtFactor;return t=t||v.minDirtCount,r=r||v.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=r},Object.defineProperty(MiniSearch.prototype,"isVacuuming",{get:function(){return null!=this._currentVacuum},enumerable:!1,configurable:!0}),Object.defineProperty(MiniSearch.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(MiniSearch.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),MiniSearch.prototype.has=function(e){return this._idToShortId.has(e)},MiniSearch.prototype.getStoredFields=function(e){var t=this._idToShortId.get(e);if(null!=t)return this._storedFields.get(t)},MiniSearch.prototype.search=function(e,t){void 0===t&&(t={});var r,n,i=this.executeQuery(e,t),o=[];try{for(var a=__values(i),u=a.next();!u.done;u=a.next()){var s=__read(u.value,2),l=s[0],c=s[1],h=c.score,d=c.terms,f=c.match,_=d.length||1,v={id:this._documentIds.get(l),score:h*_,terms:Object.keys(f),match:f};Object.assign(v,this._storedFields.get(l)),(null==t.filter||t.filter(v))&&o.push(v)}}catch(e){r={error:e}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return e===MiniSearch.wildcard&&null==t.boostDocument&&null==this._options.searchOptions.boostDocument||o.sort(byScore),o},MiniSearch.prototype.autoSuggest=function(e,t){void 0===t&&(t={}),t=__assign(__assign({},this._options.autoSuggestOptions),t);var r,n,i,o,a=new Map;try{for(var u=__values(this.search(e,t)),s=u.next();!s.done;s=u.next()){var l=s.value,c=l.score,h=l.terms,d=h.join(" "),f=a.get(d);null!=f?(f.score+=c,f.count+=1):a.set(d,{score:c,terms:h,count:1})}}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}var _=[];try{for(var v=__values(a),p=v.next();!p.done;p=v.next()){var y=__read(p.value,2),f=y[0],m=y[1],c=m.score,h=m.terms,g=m.count;_.push({suggestion:f,terms:h,score:c/g})}}catch(e){i={error:e}}finally{try{p&&!p.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}return _.sort(byScore),_},Object.defineProperty(MiniSearch.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(MiniSearch.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),MiniSearch.loadJSON=function(e,t){if(null==t)throw Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},MiniSearch.getDefault=function(e){if(c.hasOwnProperty(e))return getOwnProperty(c,e);throw Error('MiniSearch: unknown option "'.concat(e,'"'))},MiniSearch.loadJS=function(e,t){var r,n,i,o,a,s,l=e.index,c=e.documentCount,h=e.nextId,d=e.documentIds,f=e.fieldIds,_=e.fieldLength,v=e.averageFieldLength,p=e.storedFields,y=e.dirtCount,m=e.serializationVersion;if(1!==m&&2!==m)throw Error("MiniSearch: cannot deserialize an index created with an incompatible version");var g=new MiniSearch(t);g._documentCount=c,g._nextId=h,g._documentIds=objectToNumericMap(d),g._idToShortId=new Map,g._fieldIds=f,g._fieldLength=objectToNumericMap(_),g._avgFieldLength=v,g._storedFields=objectToNumericMap(p),g._dirtCount=y||0,g._index=new u;try{for(var F=__values(g._documentIds),x=F.next();!x.done;x=F.next()){var b=__read(x.value,2),w=b[0],S=b[1];g._idToShortId.set(S,w)}}catch(e){r={error:e}}finally{try{x&&!x.done&&(n=F.return)&&n.call(F)}finally{if(r)throw r.error}}try{for(var M=__values(l),A=M.next();!A.done;A=M.next()){var C=__read(A.value,2),z=C[0],E=C[1],k=new Map;try{for(var D=(a=void 0,__values(Object.keys(E))),I=D.next();!I.done;I=D.next()){var T=I.value,O=E[T];1===m&&(O=O.ds),k.set(parseInt(T,10),objectToNumericMap(O))}}catch(e){a={error:e}}finally{try{I&&!I.done&&(s=D.return)&&s.call(D)}finally{if(a)throw a.error}}g._index.set(z,k)}}catch(e){i={error:e}}finally{try{A&&!A.done&&(o=M.return)&&o.call(M)}finally{if(i)throw i.error}}return g},MiniSearch.prototype.executeQuery=function(e,t){var r=this;if(void 0===t&&(t={}),e===MiniSearch.wildcard)return this.executeWildcardQuery(t);if("string"!=typeof e){var n=__assign(__assign(__assign({},t),e),{queries:void 0}),i=e.queries.map(function(e){return r.executeQuery(e,n)});return this.combineResults(i,n.combineWith)}var o=this._options,a=o.tokenize,u=o.processTerm,s=o.searchOptions,l=__assign(__assign({tokenize:a,processTerm:u},s),t),c=l.tokenize,h=l.processTerm,d=c(e).flatMap(function(e){return h(e)}).filter(function(e){return!!e}).map(termToQuerySpec(l)).map(function(e){return r.executeQuerySpec(e,l)});return this.combineResults(d,l.combineWith)},MiniSearch.prototype.executeQuerySpec=function(e,t){var r,n,i,o,a,u,s=__assign(__assign({},this._options.searchOptions),t),l=(s.fields||this._options.fields).reduce(function(e,t){var r;return __assign(__assign({},e),((r={})[t]=getOwnProperty(s.boost,t)||1,r))},{}),c=s.boostDocument,d=s.weights,f=s.maxFuzzy,_=s.bm25,v=__assign(__assign({},h.weights),d),p=v.fuzzy,y=v.prefix,m=this._index.get(e.term),g=this.termResults(e.term,e.term,1,m,l,c,_);if(e.prefix&&(a=this._index.atPrefix(e.term)),e.fuzzy){var F=!0===e.fuzzy?.2:e.fuzzy,x=F<1?Math.min(f,Math.round(e.term.length*F)):F;x&&(u=this._index.fuzzyGet(e.term,x))}if(a)try{for(var b=__values(a),w=b.next();!w.done;w=b.next()){var S=__read(w.value,2),M=S[0],A=S[1],C=M.length-e.term.length;if(C){null==u||u.delete(M);var z=y*M.length/(M.length+.3*C);this.termResults(e.term,M,z,A,l,c,_,g)}}}catch(e){r={error:e}}finally{try{w&&!w.done&&(n=b.return)&&n.call(b)}finally{if(r)throw r.error}}if(u)try{for(var E=__values(u.keys()),k=E.next();!k.done;k=E.next()){var M=k.value,D=__read(u.get(M),2),I=D[0],C=D[1];if(C){var z=p*M.length/(M.length+C);this.termResults(e.term,M,z,I,l,c,_,g)}}}catch(e){i={error:e}}finally{try{k&&!k.done&&(o=E.return)&&o.call(E)}finally{if(i)throw i.error}}return g},MiniSearch.prototype.executeWildcardQuery=function(e){var t,r,n=new Map,i=__assign(__assign({},this._options.searchOptions),e);try{for(var o=__values(this._documentIds),a=o.next();!a.done;a=o.next()){var u=__read(a.value,2),s=u[0],l=u[1],c=i.boostDocument?i.boostDocument(l,"",this._storedFields.get(s)):1;n.set(s,{score:c,terms:[],match:{}})}}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return n},MiniSearch.prototype.combineResults=function(e,t){if(void 0===t&&(t="or"),0===e.length)return new Map;var r=t.toLowerCase();return e.reduce(l[r])||new Map},MiniSearch.prototype.toJSON=function(){var e,t,r,n,i=[];try{for(var o=__values(this._index),a=o.next();!a.done;a=o.next()){var u=__read(a.value,2),s=u[0],l=u[1],c={};try{for(var h=(r=void 0,__values(l)),d=h.next();!d.done;d=h.next()){var f=__read(d.value,2),_=f[0],v=f[1];c[_]=Object.fromEntries(v)}}catch(e){r={error:e}}finally{try{d&&!d.done&&(n=h.return)&&n.call(h)}finally{if(r)throw r.error}}i.push([s,c])}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:i,serializationVersion:2}},MiniSearch.prototype.termResults=function(e,t,r,n,i,o,a,u){var s,l,c,h,d;if(void 0===u&&(u=new Map),null==n)return u;try{for(var f=__values(Object.keys(i)),_=f.next();!_.done;_=f.next()){var v=_.value,p=i[v],y=this._fieldIds[v],m=n.get(y);if(null!=m){var g=m.size,F=this._avgFieldLength[y];try{for(var x=(c=void 0,__values(m.keys())),b=x.next();!b.done;b=x.next()){var w=b.value;if(!this._documentIds.has(w)){this.removeTerm(y,w,t),g-=1;continue}var S=o?o(this._documentIds.get(w),t,this._storedFields.get(w)):1;if(S){var M=m.get(w),A=this._fieldLength.get(w)[y],C=calcBM25Score(M,g,this._documentCount,A,F,a),z=r*p*S*C,E=u.get(w);if(E){E.score+=z,assignUniqueTerm(E.terms,e);var k=getOwnProperty(E.match,t);k?k.push(v):E.match[t]=[v]}else u.set(w,{score:z,terms:[e],match:((d={})[t]=[v],d)})}}}catch(e){c={error:e}}finally{try{b&&!b.done&&(h=x.return)&&h.call(x)}finally{if(c)throw c.error}}}}}catch(e){s={error:e}}finally{try{_&&!_.done&&(l=f.return)&&l.call(f)}finally{if(s)throw s.error}}return u},MiniSearch.prototype.addTerm=function(e,t,r){var n=this._index.fetch(r,createMap),i=n.get(e);if(null==i)(i=new Map).set(t,1),n.set(e,i);else{var o=i.get(t);i.set(t,(o||0)+1)}},MiniSearch.prototype.removeTerm=function(e,t,r){if(!this._index.has(r)){this.warnDocumentChanged(t,e,r);return}var n=this._index.fetch(r,createMap),i=n.get(e);null==i||null==i.get(t)?this.warnDocumentChanged(t,e,r):1>=i.get(t)?i.size<=1?n.delete(e):i.delete(t):i.set(t,i.get(t)-1),0===this._index.get(r).size&&this._index.delete(r)},MiniSearch.prototype.warnDocumentChanged=function(e,t,r){var n,i;try{for(var o=__values(Object.keys(this._fieldIds)),a=o.next();!a.done;a=o.next()){var u=a.value;if(this._fieldIds[u]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(r,'" was not present in field "').concat(u,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},MiniSearch.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},MiniSearch.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},MiniSearch.prototype.addFieldLength=function(e,t,r,n){var i=this._fieldLength.get(e);null==i&&this._fieldLength.set(e,i=[]),i[t]=n;var o=this._avgFieldLength[t]||0;this._avgFieldLength[t]=(o*r+n)/(r+1)},MiniSearch.prototype.removeFieldLength=function(e,t,r,n){if(1===r){this._avgFieldLength[t]=0;return}var i=this._avgFieldLength[t]*r-n;this._avgFieldLength[t]=i/(r-1)},MiniSearch.prototype.saveStoredFields=function(e,t){var r,n,i=this._options,o=i.storeFields,a=i.extractField;if(null!=o&&0!==o.length){var u=this._storedFields.get(e);null==u&&this._storedFields.set(e,u={});try{for(var s=__values(o),l=s.next();!l.done;l=s.next()){var c=l.value,h=a(t,c);void 0!==h&&(u[c]=h)}}catch(e){r={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}}},MiniSearch.wildcard=Symbol("*"),MiniSearch}(),getOwnProperty=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},l=((n={}).or=function(e,t){var r,n;try{for(var i=__values(t.keys()),o=i.next();!o.done;o=i.next()){var a=o.value,u=e.get(a);if(null==u)e.set(a,t.get(a));else{var s=t.get(a),l=s.score,c=s.terms,h=s.match;u.score=u.score+l,u.match=Object.assign(u.match,h),assignUniqueTerms(u.terms,c)}}}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return e},n.and=function(e,t){var r,n,i=new Map;try{for(var o=__values(t.keys()),a=o.next();!a.done;a=o.next()){var u=a.value,s=e.get(u);if(null!=s){var l=t.get(u),c=l.score,h=l.terms,d=l.match;assignUniqueTerms(s.terms,h),i.set(u,{score:s.score+c,terms:s.terms,match:Object.assign(s.match,d)})}}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i},n.and_not=function(e,t){var r,n;try{for(var i=__values(t.keys()),o=i.next();!o.done;o=i.next()){var a=o.value;e.delete(a)}}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return e},n),calcBM25Score=function(e,t,r,n,i,o){var a=o.k,u=o.b;return Math.log(1+(r-t+.5)/(t+.5))*(o.d+e*(a+1)/(e+a*(1-u+u*n/i)))},termToQuerySpec=function(e){return function(t,r,n){var i="function"==typeof e.fuzzy?e.fuzzy(t,r,n):e.fuzzy||!1,o="function"==typeof e.prefix?e.prefix(t,r,n):!0===e.prefix;return{term:t,fuzzy:i,prefix:o}}},c={idField:"id",extractField:function(e,t){return e[t]},tokenize:function(e){return e.split(p)},processTerm:function(e){return e.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(e,t){"function"==typeof(null==console?void 0:console[e])&&console[e](t)},autoVacuum:!0},h={combineWith:"or",prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:{k:1.2,b:.7,d:.5}},d={combineWith:"and",prefix:function(e,t,r){return t===r.length-1}},f={batchSize:1e3,batchWait:10},_={minDirtFactor:.1,minDirtCount:20},v=__assign(__assign({},f),_),assignUniqueTerm=function(e,t){e.includes(t)||e.push(t)},assignUniqueTerms=function(e,t){var r,n;try{for(var i=__values(t),o=i.next();!o.done;o=i.next()){var a=o.value;e.includes(a)||e.push(a)}}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}},byScore=function(e,t){var r=e.score;return t.score-r},createMap=function(){return new Map},objectToNumericMap=function(e){var t,r,n=new Map;try{for(var i=__values(Object.keys(e)),o=i.next();!o.done;o=i.next()){var a=o.value;n.set(parseInt(a,10),e[a])}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n},p=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u}}]);