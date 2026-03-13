"use strict";var c=function(f,s){return function(){return s||f((s={exports:{}}).exports,s),s.exports}};var g=c(function(L,b){b.exports=[701,301,132,57,23,10,4,1]});var j=c(function(M,h){
var R=require('@stdlib/math-base-assert-is-negative-zerof/dist'),Z=require('@stdlib/math-base-assert-is-nanf/dist'),p=g(),_=p.length;function E(f,s,a,r){var i,q,u,e,o,t,n,v;if(f<=0||s===0)return a;for(s<0&&(r*=-1),r<0?i=(1-f)*r:i=0,t=0;t<_;t++)for(u=p[t],n=u;n<f;n++)if(e=a[i+n*r],!Z(e)){for(q=R(e),v=n;v>=u&&(o=a[i+(v-u)*r],!(o<=e&&!(q&&o===e)));v-=u)a[i+v*r]=o;a[i+v*r]=e}return a}h.exports=E
});var A=c(function(N,y){
var O=require('@stdlib/math-base-assert-is-negative-zerof/dist'),w=require('@stdlib/math-base-assert-is-nanf/dist'),k=g(),z=k.length;function B(f,s,a,r,i){var q,u,e,o,t,n,v;if(f<=0||s===0)return a;for(s<0&&(r*=-1,i-=(f-1)*r),t=0;t<z;t++)for(u=k[t],n=u;n<f;n++)if(e=a[i+n*r],!w(e)){for(q=O(e),v=n;v>=u&&(o=a[i+(v-u)*r],!(o<=e&&!(q&&o===e)));v-=u)a[i+v*r]=o;a[i+v*r]=e}return a}y.exports=B
});var S=c(function(Q,P){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=j(),D=A();C(G,"ndarray",D);P.exports=G
});var F=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=S(),l,m=H(F(__dirname,"./native.js"));I(m)?l=J:l=m;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
