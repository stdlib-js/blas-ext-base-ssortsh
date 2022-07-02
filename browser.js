// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,f=n.__lookupGetter__,u=n.__lookupSetter__,l=e,c=function(t,r,e){var l,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(t,r)||u.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&a&&a.call(t,r,e.set),t},y=r()?l:c,p=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,_=d,s=function(t){return _.call(t)},m=Object.prototype.hasOwnProperty,v=function(t,r){return null!=t&&m.call(t,r)},g="function"==typeof Symbol?Symbol.toStringTag:"",h=v,w=g,A=d,j=function(t){var r,e,n;if(null==t)return A.call(t);e=t[w],r=h(t,w);try{t[w]=void 0}catch(r){return A.call(t)}return n=A.call(t),r?t[w]=e:delete t[w],n},S=s,F=j,O=b&&"symbol"==typeof Symbol.toStringTag?F:S,T=O,U="function"==typeof Float32Array,E=function(t){return U&&t instanceof Float32Array||"[object Float32Array]"===T(t)},P=Number.POSITIVE_INFINITY,I="function"==typeof Float32Array?Float32Array:null,x=E,N=P,V=I,k="function"==typeof Float32Array?Float32Array:void 0,G=function(){throw new Error("not implemented")},C=function(){var t,r;if("function"!=typeof V)return!1;try{r=new V([1,3.14,-3.14,5e40]),t=x(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===N}catch(r){t=!1}return t}()?k:G,Y=O,q="function"==typeof Uint32Array,z="function"==typeof Uint32Array?Uint32Array:null,B=function(t){return q&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t)},D=z,H="function"==typeof Uint32Array?Uint32Array:void 0,J=function(){throw new Error("not implemented")},K=function(){var t,r;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,4294967296,4294967297]),t=B(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?H:J,L=new C(1);new K(L.buffer)[0]=4286578688;var M=L[0],Q=function(t){return 0===t&&1/t===M},R=function(t){return t!=t},W=[701,301,132,57,23,10,4,1],X=W.length;function Z(t,r,e,n){var o,i,a,f,u,l,c,y;if(t<=0||0===r)return e;for(r<0&&(n*=-1),o=n<0?(1-t)*n:0,l=0;l<X;l++)for(c=a=W[l];c<t;c++)if(f=e[o+c*n],!R(f)){for(i=Q(f),y=c;y>=a&&(!((u=e[o+(y-a)*n])<=f)||i&&u===f);y-=a)e[o+y*n]=u;e[o+y*n]=f}return e}var $=W.length;return p(Z,"ndarray",(function(t,r,e,n,o){var i,a,f,u,l,c,y;if(t<=0||0===r)return e;for(r<0&&(o-=(t-1)*(n*=-1)),l=0;l<$;l++)for(c=a=W[l];c<t;c++)if(f=e[o+c*n],!R(f)){for(i=Q(f),y=c;y>=a&&(!((u=e[o+(y-a)*n])<=f)||i&&u===f);y-=a)e[o+y*n]=u;e[o+y*n]=f}return e})),Z},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).ssortsh=r();
//# sourceMappingURL=browser.js.map
