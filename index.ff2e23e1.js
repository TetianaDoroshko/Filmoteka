!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new I(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=P(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};s(w,a,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(O([])));x&&x!==r&&n.call(x,a)&&(w=x);var b=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=g,s(b,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(b),s(b,c,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a={searchForm:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery__container"),backdrop:document.querySelector(".backdrop")};function i(){return(i=t(e)(t(n).mark((function e(){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,c();case 3:return t.t1=t.sent,t.next=6,(0,t.t0)(t.t1);case 6:a.galleryContainer.addEventListener("click",g,{capture:!0});case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function c(){return s.apply(this,arguments)}function s(){return(s=t(e)(t(n).mark((function e(){var r,o,a,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new URL(API_URL+"/trending/movie/day")).searchParams.set("api_key",API_KEY),t.next=4,fetch(r);case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,i=a.results,t.abrupt("return",i);case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return(l=t(e)(t(n).mark((function e(){var r,o,a,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new URL(API_URL+"/genre/movie/list")).searchParams.set("api_key",API_KEY),r.searchParams.set("language","en-US"),t.next=5,fetch(r);case 5:return o=t.sent,t.next=8,o.json();case 8:return a=t.sent,i=a.genres,t.abrupt("return",i);case 11:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=t(e)(t(n).mark((function e(r){var o,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:o=t.sent,i=r.map((function(t){var e=t.genre_ids.map((function(t){return o.find((function(e){return e.id===t})).name}));return e=e.join(", "),'\n        <article class="movie-card" id="'.concat(t.id,'">\n        <div class="thumb">\n        <img class="movie-card__img" srcset="https://image.tmdb.org/t/p/w300').concat(t.poster_path," 300w, https://image.tmdb.org/t/p/w500").concat(t.poster_path,' 500w" sizes="100%" alt="').concat(t.title,'"/>\n        </div>\n        <div class="movie-card__description">\n            <p class="movie-card__name">').concat(t.title,'</p>\n            <p class="movie-card__info">').concat(e," | ").concat(Number.parseInt(t.release_date),"</p>\n        </div>\n        </article>")})).join(""),a.galleryContainer.innerHTML=i;case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),o=r.target.elements.searchQuery.value,t.t0=y,t.next=5,d(o);case 5:return t.t1=t.sent,t.next=8,(0,t.t0)(t.t1);case 8:a.searchForm.reset(d());case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=t(e)(t(n).mark((function e(r){var o,a,i,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r),(o=new URL(API_URL+"/search/movie")).searchParams.set("api_key",API_KEY),o.searchParams.set("query",r),t.next=6,fetch(o);case 6:return a=t.sent,t.next=9,a.json();case 9:return i=t.sent,c=i.results,console.log(c),t.abrupt("return",c);case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return(m=t(e)(t(n).mark((function e(r){var o,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r),t.next=3,u();case 3:o=t.sent,i=r.map((function(t){var e=t.genre_ids.map((function(t){return o.find((function(e){return e.id===t})).name}));return e=e.join(", "),'\n        <article class="movie-card" id="'.concat(t.id,'">\n        <div class="thumb">\n        <img class="movie-card__img" srcset="https://image.tmdb.org/t/p/w300').concat(t.poster_path," 300w, https://image.tmdb.org/t/p/w500").concat(t.poster_path,' 500w" sizes="100%" alt="').concat(t.title,'"/>\n        </div>\n        <div class="movie-card__description">\n            <p class="movie-card__name">').concat(t.title,'</p>\n            <p class="movie-card__info">').concat(e," | ").concat(Number.parseInt(t.release_date),"</p>\n        </div>\n        </article>")})).join(""),a.galleryContainer.innerHTML=i;case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function g(t){var e=t.target.closest(".movie-card");e&&(function(t){w.apply(this,arguments)}(e.getAttribute("id")),a.backdrop.classList.remove("hidden"))}function w(){return(w=t(e)(t(n).mark((function e(r){var o,a,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r),(o=new URL(API_URL+"/movie/"+r)).searchParams.set("api_key",API_KEY),t.next=5,fetch(o);case 5:return a=t.sent,t.next=8,a.json();case 8:return i=t.sent,console.log(i),t.abrupt("return",i);case 11:case"end":return t.stop()}}),e)})))).apply(this,arguments)}API_KEY="ed056b717633eb18d85d4433e906e4ce",API_URL="https://api.themoviedb.org/3",window.addEventListener("DOMContentLoaded",(function(){return i.apply(this,arguments)})),a.searchForm.addEventListener("submit",(function(t){return p.apply(this,arguments)}))}();
//# sourceMappingURL=index.ff2e23e1.js.map
