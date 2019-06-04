define(["heyui/lib/locale"], function(__WEBPACK_EXTERNAL_MODULE__11__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 584);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=82)}([function(t,n){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(23)("wks"),o=e(14),i=e(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(7),o=e(13);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(9),o=e(29),i=e(25),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(62),o=e(16);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n,e){var r=e(35),o=e(17);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(1),o=e(0),i=e(59),u=e(5),c=function(t,n,e){var f,a,s,l=t&c.F,p=t&c.G,y=t&c.S,h=t&c.P,v=t&c.B,d=t&c.W,g=p?o:o[n]||(o[n]={}),b=g.prototype,m=p?r:y?r[n]:(r[n]||{}).prototype;p&&(e=n);for(f in e)(a=!l&&m&&void 0!==m[f])&&f in g||(s=a?m[f]:e[f],g[f]=p&&"function"!=typeof m[f]?e[f]:v&&a?i(s,r):d&&m[f]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):h&&"function"==typeof s?i(Function.call,s):s,h&&((g.virtual||(g.virtual={}))[f]=s,t&c.R&&b&&!b[f]&&u(b,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=!0},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(7).f,o=e(3),i=e(2)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(23)("keys"),o=e(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(0),i=e(19),u=e(27),c=e(7).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(2)},function(t,n,e){var r=e(6),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){t.exports=!e(4)&&!e(10)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(19),o=e(18),i=e(37),u=e(5),c=e(3),f=e(11),a=e(64),s=e(21),l=e(69),p=e(2)("iterator"),y=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,d,g,b){a(e,n,v);var m,S,O,x=function(t){if(!y&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",j="values"==d,_=!1,P=t.prototype,M=P[p]||P["@@iterator"]||d&&P[d],E=!y&&M||x(d),N=d?j?x("entries"):E:void 0,L="Array"==n?P.entries||M:M;if(L&&(O=l(L.call(new t)))!==Object.prototype&&O.next&&(s(O,w,!0),r||c(O,p)||u(O,p,h)),j&&M&&"values"!==M.name&&(_=!0,E=function(){return M.call(this)}),r&&!b||!y&&!_&&P[p]||u(P,p,E),f[n]=E,f[w]=h,d)if(m={values:j?E:x("values"),keys:g?E:x("keys"),entries:N},b)for(S in m)S in P||i(P,S,m[S]);else o(o.P+o.F*(y||_),n,m);return m}},function(t,n,e){var r=e(14)("meta"),o=e(6),i=e(3),u=e(7).f,c=0,f=Object.isExtensible||function(){return!0},a=!e(10)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[r].w},y=function(t){return a&&h.NEED&&f(t)&&!i(t,r)&&s(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:y}},function(t,n,e){var r=e(9),o=e(66),i=e(17),u=e(22)("IE_PROTO"),c=function(){},f=function(){var t,n=e(28)("iframe"),r=i.length;for(n.style.display="none",e(61).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(35),o=e(17).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(3),o=e(8),i=e(57)(!1),u=e(22)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(18),o=e(0),i=e(10);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){t.exports=e(5)},function(t,n,e){var r=e(16);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(70)(!0);e(30)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(75);for(var r=e(1),o=e(5),i=e(11),u=e(2)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var a=c[f],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(43),i=r(o),u=e(42),c=r(u),f=e(45),a=r(f),s=e(44),l=r(s),p=e(48),y=r(p),h={isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isArray:function(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)},isDate:function(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)},isNumber:function(t){return t instanceof Number||"[object Number]"===Object.prototype.toString.call(t)},isString:function(t){return t instanceof String||"[object String]"===Object.prototype.toString.call(t)},isBoolean:function(t){return"boolean"==typeof t},isFunction:function(t){return"function"==typeof t},isNull:function(t){return void 0===t||null===t},isPlainObject:function(t){if(t&&"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object&&!hasOwnProperty.call(t,"constructor")){var n;for(n in t);return void 0===n||hasOwnProperty.call(t,n)}return!1},extend:function(){var t,n,e,r,o,i,u=arguments[0]||{},c=1,f=arguments.length,a=!1;for("boolean"==typeof u&&(a=u,u=arguments[1]||{},c=2),"object"===(void 0===u?"undefined":(0,y.default)(u))||this.isFunction(u)||(u={}),f===c&&(u=this,--c);c<f;c++)if(null!=(t=arguments[c]))for(n in t)e=u[n],r=t[n],e!==r&&(a&&r&&(this.isPlainObject(r)||(o=this.isArray(r)))?(o?(o=!1,i=e&&this.isArray(e)?e:[]):i=e&&this.isPlainObject(e)?e:{},u[n]=this.extend(a,i,r)):void 0!==r&&(u[n]=r));return u},freeze:function(t){var n=this,e=this;return(0,l.default)(t),(0,a.default)(t).forEach(function(r,o){e.isObject(t[r])&&n.freeze(t[r])}),t},copy:function(t){var n=null;if(this.isObject(t)){n={};for(var e in t)n[e]=this.copy(t[e])}else if(this.isArray(t)){n=[];var r=!0,o=!1,i=void 0;try{for(var u,f=(0,c.default)(t);!(r=(u=f.next()).done);r=!0){var a=u.value;n.push(this.copy(a))}}catch(t){o=!0,i=t}finally{try{!r&&f.return&&f.return()}finally{if(o)throw i}}}else n=t;return n},getKeyValue:function(t,n){if(!this.isObject(t))return null;var e=null;if(this.isArray(n)?e=n:this.isString(n)&&(e=n.split(".")),null==e||0==e.length)return null;var r=null,o=e.shift(),i=o.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));if(i){o=i[1];var u=i[2];r=t[o],this.isArray(r)&&r.length>u&&(r=r[u])}else r=t[o];return e.length>0?this.getKeyValue(r,e):r},setKeyValue:function(t,n,e,r){if(!this.isObject(t))return!1;var o=null;if(this.isArray(n)?o=n:this.isString(n)&&(o=n.split("."),r=t),null==o||0==o.length)return!1;var i=null,u=0,c=o.shift(),f=c.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));if(f){if(c=f[1],u=f[2],i=t[c],this.isArray(i)&&i.length>u){if(o.length>0)return this.setKeyValue(i[u],o,e,r);i[u]=e}}else{if(o.length>0)return this.setKeyValue(t[c],o,e,r);t[c]=e}return r},toArray:function(t,n,e){var r="";if(!this.isObject(t))return[];this.isString(e)&&(r=e);var o=[];for(var i in t){var u=t[i],c={};this.isObject(u)?c=u:c[r]=u,n&&(c[n]=i),o.push(c)}return o},toObject:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={},o=0;o<t.length;o++){var i=t[o];this.isObject(i)?"count"==n?r[o]=i:(r[i[n]]=i,e&&(r[i[n]].count=o)):r[i]=i}return r},saveLocal:function(t,n){return!!(window.localStorage&&JSON&&t)&&("object"==(void 0===n?"undefined":(0,y.default)(n))&&(n=(0,i.default)(n)),window.localStorage[t]=n,!0)},getLocal:function(t,n){if(window.localStorage&&JSON&&t){var e=window.localStorage[t];if(!n||"json"!=n||void 0===e)return e;try{return JSON.parse(e)}catch(t){return""}}return null},getLocal2Json:function(t){if(window.localStorage&&JSON&&t){var n=window.localStorage[t];if(this.isNull(n))return n;try{return JSON.parse(n)}catch(t){return""}}return null},removeLocal:function(t){return window.localStorage&&JSON&&t&&(window.localStorage[t]=null),null},saveCookie:function(t,n,e,r,o){var u=!!navigator.cookieEnabled;if(t&&u){r=r||"/","object"==(void 0===n?"undefined":(0,y.default)(n))&&(n=(0,i.default)(n));var c=void 0;o?(c=new Date,c.setTime(c.getTime()+1e3*o)):c=new Date("9998-01-01");var f=t+"="+escape(n)+(o?";expires="+c.toGMTString():"")+";path="+r+";";return e&&(f+="domain="+e+";"),document.cookie=f,!0}return!1},getCookie:function(t){var n=!!navigator.cookieEnabled;if(t&&n){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));if(null!==e)return unescape(e[2])}return null},clearCookie:function(t,n){var e=document.cookie.match(/[^ =;]+(?=\=)/g);if(n=n||"/",e)for(var r=e.length;r--;){var o=e[r]+"=0;expires="+new Date(0).toUTCString()+";path="+n+";";t&&(o+="domain="+t+";"),document.cookie=o}},removeCookie:function(t,n,e){var r=!!navigator.cookieEnabled;if(t&&r){e=e||"/";var o=t+"=0;expires="+new Date(0).toUTCString()+";path="+e+";";return n&&(o+="domain="+n+";"),document.cookie=o,!0}return!1},dictMapping:function(t){var n=this,e=t.value,r=t.dict,o=t.connector,i=t.keyField,u=void 0===i?"key":i,c=t.titleField,f=void 0===c?"value":c;return!r||this.isNull(e)?"":(o&&(e=e.split(o)),!this.isNull(e)&&""!==e&&r&&(this.isArray(e)||(e=[e])),e.length<=0?"":(this.isArray(r)&&(r=this.toObject(r,u)),e.map(function(t){if(n.isObject(t))return t[f];var e=r[t];return n.isObject(e)?e[f]:e}).filter(function(t){return t&&""!==t}).join(", ")))},uuid:function(){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},padLeft:function(t,n){var e="00000"+t;return e.substr(e.length-n)},toggleValue:function(t,n){if(!this.isArray(t))return[n];var e=t.filter(function(t){return t==n});e.length>0?t.splice(t.indexOf(e[0]),1):t.push(n)},toSimpleArray:function(t,n){var e=[];if(this.isObject(t)){var r=!0,o=!1,i=void 0;try{for(var u,f=(0,c.default)((0,a.default)(t));!(r=(u=f.next()).done);r=!0){var s=u.value;e.push(t[s][n])}}catch(t){o=!0,i=t}finally{try{!r&&f.return&&f.return()}finally{if(o)throw i}}}if(this.isArray(t)){var l=!0,p=!1,y=void 0;try{for(var h,v=(0,c.default)(t);!(l=(h=v.next()).done);l=!0){var d=h.value;e.push(d[n])}}catch(t){p=!0,y=t}finally{try{!l&&v.return&&v.return()}finally{if(p)throw y}}}return e},getURLParam:function(t,n){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(n||location.search)||[!0,""])[1].replace(/\+/g,"%20"))||null},getAuthor:function(){var t=this.getURLParam("author",window.location.search)||this.getLocal("window_author");return t&&this.saveLocal("window_author",t),t},add:function(t,n){var e=t.toString(),r=n.toString(),o=e.split("."),i=r.split("."),u=2==o.length?o[1]:"",c=2==i.length?i[1]:"",f=Math.max(u.length,c.length),a=Math.pow(10,f);return Number(((e*a+r*a)/a).toFixed(f))},sub:function(t,n){return this.add(t,-n)},mul:function(t,n){var e=0,r=t.toString(),o=n.toString();try{e+=r.split(".")[1].length}catch(t){}try{e+=o.split(".")[1].length}catch(t){}return Number(r.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,e)},div:function(t,n){var e=0,r=0;try{e=t.toString().split(".")[1].length}catch(t){}try{r=n.toString().split(".")[1].length}catch(t){}var o=Number(t.toString().replace(".","")),i=Number(n.toString().replace(".",""));return this.mul(o/i,Math.pow(10,r-e))}};h.valueForKeypath=h.getKeyValue,h.setValueForKeypath=h.setKeyValue,t.exports=h},function(t,n,e){t.exports={default:e(49),__esModule:!0}},function(t,n,e){t.exports={default:e(50),__esModule:!0}},function(t,n,e){t.exports={default:e(51),__esModule:!0}},function(t,n,e){t.exports={default:e(52),__esModule:!0}},function(t,n,e){t.exports={default:e(53),__esModule:!0}},function(t,n,e){t.exports={default:e(54),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(47),i=r(o),u=e(46),c=r(u),f="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};n.default="function"==typeof c.default&&"symbol"===f(i.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":f(t)}},function(t,n,e){e(40),e(39),t.exports=e(74)},function(t,n,e){var r=e(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,n,e){e(76),t.exports=e(0).Object.freeze},function(t,n,e){e(77),t.exports=e(0).Object.keys},function(t,n,e){e(79),e(78),e(80),e(81),t.exports=e(0).Symbol},function(t,n,e){e(39),e(40),t.exports=e(27).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(8),o=e(72),i=e(71);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(15),o=e(2)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(55);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(12),o=e(34),i=e(20);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(32),o=e(13),i=e(21),u={};e(5)(u,e(2)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(7),o=e(9),i=e(12);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(20),o=e(13),i=e(8),u=e(25),c=e(3),f=e(29),a=Object.getOwnPropertyDescriptor;n.f=e(4)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(8),o=e(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,n,e){var r=e(3),o=e(38),i=e(22)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(24),o=e(16);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(24),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(58),o=e(2)("iterator"),i=e(11);t.exports=e(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(9),o=e(73);t.exports=e(0).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},function(t,n,e){"use strict";var r=e(56),o=e(65),i=e(11),u=e(8);t.exports=e(30)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(6),o=e(31).onFreeze;e(36)("freeze",function(t){return function(n){return t&&r(n)?t(o(n)):n}})},function(t,n,e){var r=e(38),o=e(12);e(36)("keys",function(){return function(t){return o(r(t))}})},function(t,n){},function(t,n,e){"use strict";var r=e(1),o=e(3),i=e(4),u=e(18),c=e(37),f=e(31).KEY,a=e(10),s=e(23),l=e(21),p=e(14),y=e(2),h=e(27),v=e(26),d=e(60),g=e(63),b=e(9),m=e(6),S=e(8),O=e(25),x=e(13),w=e(32),j=e(68),_=e(67),P=e(7),M=e(12),E=_.f,N=P.f,L=j.f,A=r.Symbol,k=r.JSON,T=k&&k.stringify,F=y("_hidden"),C=y("toPrimitive"),D={}.propertyIsEnumerable,I=s("symbol-registry"),R=s("symbols"),V=s("op-symbols"),J=Object.prototype,K="function"==typeof A,G=r.QObject,U=!G||!G.prototype||!G.prototype.findChild,z=i&&a(function(){return 7!=w(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=E(J,n);r&&delete J[n],N(t,n,e),r&&t!==J&&N(J,n,r)}:N,W=function(t){var n=R[t]=w(A.prototype);return n._k=t,n},B=K&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},H=function(t,n,e){return t===J&&H(V,n,e),b(t),n=O(n,!0),b(e),o(R,n)?(e.enumerable?(o(t,F)&&t[F][n]&&(t[F][n]=!1),e=w(e,{enumerable:x(0,!1)})):(o(t,F)||N(t,F,x(1,{})),t[F][n]=!0),z(t,n,e)):N(t,n,e)},$=function(t,n){b(t);for(var e,r=d(n=S(n)),o=0,i=r.length;i>o;)H(t,e=r[o++],n[e]);return t},Y=function(t,n){return void 0===n?w(t):$(w(t),n)},q=function(t){var n=D.call(this,t=O(t,!0));return!(this===J&&o(R,t)&&!o(V,t))&&(!(n||!o(this,t)||!o(R,t)||o(this,F)&&this[F][t])||n)},Q=function(t,n){if(t=S(t),n=O(n,!0),t!==J||!o(R,n)||o(V,n)){var e=E(t,n);return!e||!o(R,n)||o(t,F)&&t[F][n]||(e.enumerable=!0),e}},X=function(t){for(var n,e=L(S(t)),r=[],i=0;e.length>i;)o(R,n=e[i++])||n==F||n==f||r.push(n);return r},Z=function(t){for(var n,e=t===J,r=L(e?V:S(t)),i=[],u=0;r.length>u;)!o(R,n=r[u++])||e&&!o(J,n)||i.push(R[n]);return i};K||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(V,e),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),z(this,t,x(1,e))};return i&&U&&z(J,t,{configurable:!0,set:n}),W(t)},c(A.prototype,"toString",function(){return this._k}),_.f=Q,P.f=H,e(33).f=j.f=X,e(20).f=q,e(34).f=Z,i&&!e(19)&&c(J,"propertyIsEnumerable",q,!0),h.f=function(t){return W(y(t))}),u(u.G+u.W+u.F*!K,{Symbol:A});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)y(tt[nt++]);for(var et=M(y.store),rt=0;et.length>rt;)v(et[rt++]);u(u.S+u.F*!K,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=A(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var n in I)if(I[n]===t)return n},useSetter:function(){U=!0},useSimple:function(){U=!1}}),u(u.S+u.F*!K,"Object",{create:Y,defineProperty:H,defineProperties:$,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),k&&u(u.S+u.F*(!K||a(function(){var t=A();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(m(n)||void 0!==t)&&!B(t))return g(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!B(n))return n}),r[1]=n,T.apply(k,r)}}),A.prototype[C]||e(5)(A.prototype,C,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(26)("asyncIterator")},function(t,n,e){e(26)("observable")},function(t,n,e){t.exports=e(41)}])});

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _locale = _interopRequireDefault(__webpack_require__(11));

var valids = {
  int: {
    valid: function valid(value) {
      return parseInt(value, 10) == value;
    },
    message: _locale.default.t('h.validation.type.int')
  },
  number: {
    valid: function valid(value) {
      return !isNaN(Number(value));
    },
    message: function message() {
      return _locale.default.t('h.validation.type.number');
    }
  },
  email: {
    pattern: /^[^\s]+@[^\s]+\.[^\s]+$/,
    message: function message() {
      return _locale.default.t('h.validation.type.email');
    }
  },
  url: {
    pattern: /^((\w+):\/\/)?([^\s]?[^\s]+\.)*[^\s]+-?[^\s]+\.[^\s]{2,}(\/.*)*\/?$/,
    message: function message() {
      return _locale.default.t('h.validation.type.url');
    }
  },
  tel: {
    pattern: /(^(\+\d{2,3}\/)?\d{3,4}(-)?\d{7,8}(\*\d{2,6})?$)|(^1\d{10}$)/,
    message: function message() {
      return _locale.default.t('h.validation.type.tel');
    }
  },
  mobile: {
    pattern: /^1\d{10}$/,
    message: function message() {
      return _locale.default.t('h.validation.type.mobile');
    }
  },
  globalmobile: {
    pattern: /^[+\-0-9a]+$/,
    message: function message() {
      return _locale.default.t('h.validation.type.globalmobile');
    }
  } // international mobile

};
var _default = valids;
exports.default = _default;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _locale = _interopRequireDefault(__webpack_require__(11));

var valids = {
  required: function required(value) {
    var result = value !== null && value !== undefined && String(value).length > 0;
    return result === true ? true : _locale.default.t('h.validation.base.required');
  },
  maxLen: function maxLen(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }

    var result = value !== null && value !== undefined && String(value).length <= configValue;
    return result === true ? true : _locale.default.t('h.validation.base.maxLen', {
      value: configValue
    });
  },
  minLen: function minLen(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }

    var result = value !== null && value !== undefined && String(value).length >= configValue;
    return result === true ? true : _locale.default.t('h.validation.base.minLen', {
      value: configValue
    });
  },
  max: function max(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }

    var result = value !== null && value !== undefined && Number(value) <= configValue;
    return result === true ? true : _locale.default.t('h.validation.base.max', {
      value: configValue
    });
  },
  min: function min(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }

    var result = value !== null && value !== undefined && Number(value) >= configValue;
    return result === true ? true : _locale.default.t('h.validation.base.min', {
      value: configValue
    });
  }
};
var _default = valids;
exports.default = _default;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var valids = {
  lessThan: function lessThan(value1, value2) {
    return Number(value1) < Number(value2);
  },
  greaterThan: function greaterThan(value1, value2) {
    return Number(value1) > Number(value2);
  },
  equal: function equal(value1, value2) {
    return value1 == value2;
  }
};
var _default = valids;
exports.default = _default;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(585);


/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(17));

var _createClass2 = _interopRequireDefault(__webpack_require__(19));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(6));

var _heyUtils = _interopRequireDefault(__webpack_require__(185));

var _typeValids = _interopRequireDefault(__webpack_require__(186));

var _baseValids = _interopRequireDefault(__webpack_require__(187));

var _combineValids = _interopRequireDefault(__webpack_require__(188));

var extendResult = function extendResult(result1, result2) {
  var result = {};
  var keys = new Set([].concat((0, _toConsumableArray2.default)(Object.keys(result1)), (0, _toConsumableArray2.default)(Object.keys(result2))));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (result1[key] && !result2[key]) {
        result[key] = result1[key];
      } else if (!result1[key] && result2[key]) {
        result[key] = result2[key];
      } else if (result1[key].valid === false || result2[key].valid === true) {
        result[key] = result1[key];
      } else {
        result[key] = result2[key];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};

var ruleExecute = function ruleExecute(rule, argus) {
  if (_heyUtils.default.isFunction(rule)) {
    return rule.call.apply(rule, [null].concat((0, _toConsumableArray2.default)(argus)));
  } else if (_heyUtils.default.isObject(rule)) {
    var result = null;

    if (rule.pattern) {
      result = rule.pattern.test(String(argus[0]));
    } else if (_heyUtils.default.isFunction(rule.valid)) {
      result = rule.valid.apply(null, argus);
    }

    if (result === true) {
      return true;
    }

    return _heyUtils.default.isFunction(rule.message) ? rule.message() : rule.message;
  }
};

var returnArgs = function returnArgs(prop, message) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'other';

  if (message === true || message === undefined) {
    return (0, _defineProperty2.default)({}, prop, {
      valid: true,
      message: null,
      type: type
    });
  }

  return (0, _defineProperty2.default)({}, prop, {
    valid: false,
    message: message,
    type: type
  });
};

var DEFAULT = {
  rules: {},
  combineRules: []
};

var Validator =
/*#__PURE__*/
function () {
  function Validator(rules) {
    (0, _classCallCheck2.default)(this, Validator);

    if (!_heyUtils.default.isObject(rules)) {
      console.error('[HeyUI Error] Validator: Please provide the correct validation parameters');
    }

    this.combineRuleResults = {};
    this.rules = {};
    this.combineRules = {};
    this.initRules(rules);
  }

  (0, _createClass2.default)(Validator, [{
    key: "initRules",
    value: function initRules(rules) {
      var genRules = {};

      _heyUtils.default.extend(true, genRules, DEFAULT, rules);

      var keys = Object.keys(_typeValids.default);
      keys.unshift('required');

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var v = _keys[_i];
        var validList = rules[v];

        if (_heyUtils.default.isArray(validList)) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = validList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var p = _step2.value;
              var rule = genRules.rules[p];

              if (!_heyUtils.default.isObject(rule)) {
                rule = genRules.rules[p] = {};
              }

              if (v == 'required') {
                rule.required = true;
              } else {
                rule.type = v;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }

      this.rules = genRules.rules;
      this.initCombineRules(genRules.combineRules);
    }
  }, {
    key: "updateRule",
    value: function updateRule(rules) {
      this.initRules(rules || {});
    }
  }, {
    key: "initCombineRules",
    value: function initCombineRules(rules) {
      var genRules = {};
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = rules[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var rule = _step3.value;
          rule.id = _heyUtils.default.uuid();
          var parentRef = '';
          if (rule.parentRef) parentRef = "".concat(rule.parentRef, ".");
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = rule.refs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var ref = _step4.value;
              var refProp = parentRef + ref;

              if (_heyUtils.default.isArray(genRules[refProp])) {
                genRules[refProp].push(rule);
              } else {
                genRules[refProp] = [rule];
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.combineRules = genRules;
    }
  }, {
    key: "valid",
    value: function valid(data, _next, allNext) {
      var loadings = [];

      var uuid = _heyUtils.default.uuid();

      var result = this.validData(data, {
        uuid: uuid,
        next: function next(r) {
          for (var key in r) {
            if (loadings.indexOf(key) > -1) {
              loadings.splice(loadings.indexOf(key), 1);
            }
          }

          _heyUtils.default.extend(result, r);

          if (_next) {
            _next.call(this, r);
          }

          if (allNext && loadings.length == 0) {
            allNext.call(this, result);
          }
        }
      });

      for (var prop in result) {
        if (result[prop].loading) {
          loadings.push(prop);
        }
      }

      if (allNext && loadings.length == 0) {
        allNext.call(this, result);
      }

      return result;
    }
  }, {
    key: "validData",
    value: function validData(data) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          next = _ref3.next,
          _ref3$prop = _ref3.prop,
          prop = _ref3$prop === void 0 ? '' : _ref3$prop,
          sourceData = _ref3.sourceData,
          uuid = _ref3.uuid;

      var result = {};

      if (prop != '') {
        result = this.validField(prop, sourceData, {
          next: next,
          uuid: uuid
        });
      }

      if (sourceData == undefined) sourceData = data;

      if (_heyUtils.default.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          var nowProp = "".concat(prop, "[").concat(i, "]");
          result = extendResult(result, this.validData(data[i], {
            next: next,
            prop: nowProp,
            sourceData: sourceData,
            uuid: uuid
          }));
        }
      } else if (_heyUtils.default.isObject(data)) {
        for (var d in data) {
          var _nowProp = prop + (prop == '' ? '' : '.') + d;

          result = extendResult(result, this.validData(data[d], {
            next: next,
            prop: _nowProp,
            sourceData: sourceData,
            uuid: uuid
          }));
        }
      }

      return result;
    }
  }, {
    key: "getConfig",
    value: function getConfig(prop) {
      var ruleKey = prop;

      if (prop.indexOf('[') > -1 && !this.rules[prop]) {
        ruleKey = prop.replace(/\[\w+\]/, '[]');
      }

      return this.rules[ruleKey];
    }
  }, {
    key: "setConfig",
    value: function setConfig(prop, options) {
      var ruleKey = prop;
      this.rules[ruleKey] = _heyUtils.default.extend(true, this.rules[ruleKey], options);
    }
  }, {
    key: "validFieldBase",
    value: function validFieldBase(_ref4) {
      var rule = _ref4.rule,
          value = _ref4.value,
          parent = _ref4.parent;

      if (rule && Object.keys(rule).length > 0) {
        var result = ruleExecute(_baseValids.default.required, [value]);

        if (rule.required && result !== true) {
          return result;
        }

        if (result === true) {
          if (rule.type) {
            result = ruleExecute(_typeValids.default[rule.type], [value]);
            if (result !== true) return result;
          }

          var baseValidKeys = Object.keys(_baseValids.default);
          baseValidKeys.shift();

          for (var _i2 = 0, _baseValidKeys = baseValidKeys; _i2 < _baseValidKeys.length; _i2++) {
            var key = _baseValidKeys[_i2];

            if (!_heyUtils.default.isNull(rule[key])) {
              var _result = ruleExecute(_baseValids.default[key], [value, rule[key]]);

              if (_result !== true) return _result;
            }
          }

          if (!_heyUtils.default.isNull(rule.valid)) {
            result = ruleExecute(rule.valid, [value, parent]);
            if (result !== true) return result;
          }
        } else {
          if (!_heyUtils.default.isNull(rule.validAnyway)) {
            result = ruleExecute(rule.validAnyway, [value, parent]);
            if (result !== true) return result;
          }
        }
      }

      return true;
    }
  }, {
    key: "validField",
    value: function validField(prop, data) {
      var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          next = _ref5.next,
          uuid = _ref5.uuid;

      if (_heyUtils.default.isNull(prop)) {
        return returnArgs(prop);
      }

      var value = _heyUtils.default.getKeyValue(data, prop);

      var rule = this.rules[prop] || {};
      var combineRules = this.combineRules[prop] || [];

      if (prop.indexOf('[') > -1) {
        var arrayRuleKey = prop.replace(/\[\w+\]/, '[]');
        rule = _heyUtils.default.extend({}, rule, this.rules[arrayRuleKey]);
        combineRules = _heyUtils.default.extend([], combineRules, this.combineRules[arrayRuleKey]);
      }

      var parent = data;
      var parentProp = '';

      if (prop.lastIndexOf('.') > -1) {
        parentProp = prop.substr(0, prop.lastIndexOf('.'));
        parent = _heyUtils.default.getKeyValue(data, parentProp);
      }

      var result = this.validFieldBase({
        rule: rule,
        value: value,
        parent: parent
      });

      if (result !== true) {
        return returnArgs(prop, result, 'base');
      }

      result = this.combineRulesValid(combineRules, value, parent, parentProp, uuid);
      var baseResult = returnArgs(prop, undefined, 'base');

      if (result === true && _heyUtils.default.isFunction(next) && _heyUtils.default.isFunction(rule.validAsync)) {
        rule.validAsync.call(null, value, function (result1) {
          var n = returnArgs(prop, result1, 'async');
          n[prop].loading = false;
          next(n);
        }, parent, data);
        baseResult[prop].loading = true;
      }

      return _heyUtils.default.extend(baseResult, result);
    }
  }, {
    key: "combineRulesValid",
    value: function combineRulesValid(rules, value, parent, parentProp, uuid) {
      if (!rules) return true;
      var refValids = {};
      var count = 0;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = rules[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var rule = _step5.value;
          var result = null;
          var prop = (rule.parentRef && parentProp ? parentProp + '.' : '') + rule.refs[rule.refs.length - 1];
          var combineRuleResult = this.combineRuleResults[rule.id] || {};

          if (uuid && combineRuleResult.uuid == uuid + parentProp) {
            result = combineRuleResult.result;
          } else {
            var values = [];
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = rule.refs[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var ref = _step6.value;

                var v = _heyUtils.default.getKeyValue(parent, ref);

                var refProp = (rule.parentRef && parentProp ? parentProp + '.' : '') + ref; // When the basic parameters are not validated, it will stop validate.

                if (this.validFieldBase({
                  rule: this.rules[refProp],
                  value: v,
                  parent: parent
                }) != true) {
                  console.log('basic combine validation does not pass', refProp, this.rules[refProp], v);
                  break;
                }

                values.push(v);
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }

            if (values.length < rule.refs.length) continue;
            var valid = rule.valid;

            if (_heyUtils.default.isObject(valid) && _heyUtils.default.isString(valid.valid)) {
              valid.valid = _combineValids.default[valid.valid];

              if (_heyUtils.default.isNull(valid.valid)) {
                throw Error("There is no validation rule named ".concat(valid));
              }
            }

            result = ruleExecute(valid, values);
          }

          count += 1;
          var combineResult = returnArgs(prop, result, 'combine');

          if (uuid) {
            this.combineRuleResults[rule.id] = {
              uuid: uuid + parentProp,
              result: result
            };
          }

          if (!refValids[prop] || refValids[prop].valid) {
            _heyUtils.default.extend(refValids, combineResult);
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      if (count == 0) {
        return true;
      } else {
        return refValids;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.rules = null;
      this.combineRules = null;
      this.combineRuleResults = null;
    }
  }]);
  return Validator;
}();

var _default = Validator;
exports.default = _default;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(8);

var iterableToArray = __webpack_require__(9);

var nonIterableSpread = __webpack_require__(10);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ })

/******/ })["default"]});;