export const id=375;export const ids=[375];export const modules={481:(e,n,t)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function i(e,n,t){return(n=a(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){var n=function(e,n){if("object"!==o(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(n)?n:String(n)}t.d(n,{U:()=>s});var l=Date.now().toString(36).substring(2),s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"on",value:function(e,n,t){var o=this;if("undefined"!=typeof BroadcastChannel){var r=new BroadcastChannel("ElsieSDK/EventBus");if(null!=t&&t.eager){var i=this._lastEvent[e];i&&n(i.payload)}return r.addEventListener("message",(function(t){var r=t.data;o._identifier&&o._identifier!==r.identifier||r.event===e&&n(r.payload)})),{off:function(){r.close()}}}}},{key:"emit",value:function(e,n){if("undefined"!=typeof BroadcastChannel){var t=new BroadcastChannel("ElsieSDK/EventBus");t.postMessage({event:e,identifier:this._identifier,payload:n}),this._lastEvent[e]={payload:n},t.close()}}},{key:"enableLogger",value:function(e){var n,t=this;"undefined"!=typeof BroadcastChannel&&(null===(n=this._logger)||void 0===n||n.close(),this._logger=null,!1!==e&&(this._logger=new BroadcastChannel("ElsieSDK/EventBus"),this._logger.addEventListener("message",(function(e){var n=e.data;t._identifier&&t._identifier!==n.identifier||(console.group("📡 Event (".concat(n.identifier,") ➡ ").concat(n.event)),console.log(n.payload),console.groupEnd())}))))}}],null&&r(n.prototype,null),t&&r(n,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();i(s,"_identifier",l),i(s,"_logger",null),i(s,"_lastEvent",{})}};import e from"./runtime.js";import*as n from"./event-bus.js";e.C(n);var t=(481,e(e.s=481)).U;export{t as events};