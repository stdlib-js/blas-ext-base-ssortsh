"use strict";var c=function(f,u){return function(){try{return u||f((u={exports:{}}).exports,u),u.exports}catch(r){throw (u=0, r)}};};var g=c(function(L,b){b.exports=[701,301,132,57,23,10,4,1]});var j=c(function(M,h){
var R=require('@stdlib/math-base-assert-is-negative-zerof/dist'),Z=require('@stdlib/math-base-assert-is-nanf/dist'),p=g(),_=p.length;function E(f,u,r,a){var i,q,n,e,o,t,s,v;if(f<=0||u===0)return r;for(u<0&&(a*=-1),a<0?i=(1-f)*a:i=0,t=0;t<_;t++)for(n=p[t],s=n;s<f;s++)if(e=r[i+s*a],!Z(e)){for(q=R(e),v=s;v>=n&&(o=r[i+(v-n)*a],!(o<=e&&!(q&&o===e)));v-=n)r[i+v*a]=o;r[i+v*a]=e}return r}h.exports=E
});var A=c(function(N,y){
var O=require('@stdlib/math-base-assert-is-negative-zerof/dist'),w=require('@stdlib/math-base-assert-is-nanf/dist'),k=g(),z=k.length;function B(f,u,r,a,i){var q,n,e,o,t,s,v;if(f<=0||u===0)return r;for(u<0&&(a*=-1,i-=(f-1)*a),t=0;t<z;t++)for(n=k[t],s=n;s<f;s++)if(e=r[i+s*a],!w(e)){for(q=O(e),v=s;v>=n&&(o=r[i+(v-n)*a],!(o<=e&&!(q&&o===e)));v-=n)r[i+v*a]=o;r[i+v*a]=e}return r}y.exports=B
});var S=c(function(Q,P){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=j(),D=A();C(G,"ndarray",D);P.exports=G
});var F=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=S(),l,m=H(F(__dirname,"./native.js"));I(m)?l=J:l=m;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
