// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@v0.1.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.1-esm/index.mjs";var n=[701,301,132,57,23,10,4,1],s=n.length;function i(r,i,a,f){var o,d,m,l,v,h,j,p;if(r<=0||0===i)return a;for(i<0&&(f*=-1),o=f<0?(1-r)*f:0,h=0;h<s;h++)for(j=m=n[h];j<r;j++)if(l=a[o+j*f],!t(l)){for(d=e(l),p=j;p>=m&&(!((v=a[o+(p-m)*f])<=l)||d&&v===l);p-=m)a[o+p*f]=v;a[o+p*f]=l}return a}var a=n.length;function f(r,s,i,f,o){var d,m,l,v,h,j,p;if(r<=0||0===s)return i;for(s<0&&(o-=(r-1)*(f*=-1)),h=0;h<a;h++)for(j=m=n[h];j<r;j++)if(l=i[o+j*f],!t(l)){for(d=e(l),p=j;p>=m&&(!((v=i[o+(p-m)*f])<=l)||d&&v===l);p-=m)i[o+p*f]=v;i[o+p*f]=l}return i}r(i,"ndarray",f);export{i as default,f as ndarray};
//# sourceMappingURL=index.mjs.map
