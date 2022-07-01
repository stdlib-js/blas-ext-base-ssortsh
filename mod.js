// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;var l=n,c=function(r,t,n){var l,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((c="value"in n)&&(u.call(r,t)||f.call(r,t)?(l=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=l):r[t]=n.value),y="get"in n,p="set"in n,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r},y=t()?l:c;var p=function(r,t,n){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return v&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,d=_;var m=function(r){return d.call(r)},s=Object.prototype.hasOwnProperty;var w=function(r,t){return null!=r&&s.call(r,t)},A="function"==typeof Symbol?Symbol.toStringTag:"",g=w,j=A,h=_;var S=function(r){var t,n,e;if(null==r)return h.call(r);n=r[j],t=g(r,j);try{r[j]=void 0}catch(t){return h.call(r)}return e=h.call(r),t?r[j]=n:delete r[j],e},F=m,O=S,U=b()?O:F,E=U,P="function"==typeof Float32Array;var T=function(r){return P&&r instanceof Float32Array||"[object Float32Array]"===E(r)},I=Number.POSITIVE_INFINITY,N="function"==typeof Float32Array?Float32Array:null,V=T,k=I,x=N;var G="function"==typeof Float32Array?Float32Array:void 0,C=function(){throw new Error("not implemented")},Y=function(){var r,t;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,5e40]),r=V(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===k}catch(t){r=!1}return r}()?G:C,q=U,z="function"==typeof Uint32Array;var B="function"==typeof Uint32Array?Uint32Array:null,D=function(r){return z&&r instanceof Uint32Array||"[object Uint32Array]"===q(r)},H=B;var J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},L=function(){var r,t;if("function"!=typeof H)return!1;try{t=new H(t=[1,3.14,-3.14,4294967296,4294967297]),r=D(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?J:K,M=new Y(1);new L(M.buffer)[0]=4286578688;var Q=M[0];var R=function(r){return 0===r&&1/r===Q};var W=function(r){return r!=r},X=[701,301,132,57,23,10,4,1],Z=X.length;function $(r,t,n,e){var o,a,i,u,f,l,c,y;if(r<=0||0===t)return n;for(t<0&&(e*=-1),o=e<0?(1-r)*e:0,l=0;l<Z;l++)for(c=i=X[l];c<r;c++)if(u=n[o+c*e],!W(u)){for(a=R(u),y=c;y>=i&&(!((f=n[o+(y-i)*e])<=u)||a&&f===u);y-=i)n[o+y*e]=f;n[o+y*e]=u}return n}var rr=X.length;function tr(r,t,n,e,o){var a,i,u,f,l,c,y;if(r<=0||0===t)return n;for(t<0&&(o-=(r-1)*(e*=-1)),l=0;l<rr;l++)for(c=i=X[l];c<r;c++)if(u=n[o+c*e],!W(u)){for(a=R(u),y=c;y>=i&&(!((f=n[o+(y-i)*e])<=u)||a&&f===u);y-=i)n[o+y*e]=f;n[o+y*e]=u}return n}p($,"ndarray",tr);export{$ as default,tr as ndarray};
//# sourceMappingURL=mod.js.map