import{s as w,c as y,u as B,g as k,d as b}from"./scheduler.f76b625b.js";import{S as p,i as j,y as m,e as u,z as d,j as g,f as c,k as _,a as h,B as v,d as I,t as E,m as S,n as q,o as z}from"./index.7356150a.js";function F(i,s){const a={},l={},t={$$scope:1};let f=i.length;for(;f--;){const n=i[f],e=s[f];if(e){for(const o in n)o in e||(l[o]=1);for(const o in e)t[o]||(a[o]=e[o],t[o]=1);i[f]=e}else for(const o in n)t[o]=1}for(const n in l)n in a||(a[n]=void 0);return a}function G(i){return typeof i=="object"&&i!==null?i:{}}function r(i){let s,a;return{c(){s=m("title"),a=S(i[0])},l(l){s=d(l,"title",{});var t=g(s);a=q(t,i[0]),t.forEach(c)},m(l,t){h(l,s,t),v(s,a)},p(l,t){t&1&&z(a,l[0])},d(l){l&&c(s)}}}function C(i){let s,a,l,t=i[0]&&r(i);const f=i[3].default,n=y(f,i,i[2],null);return{c(){s=m("svg"),t&&t.c(),a=u(),n&&n.c(),this.h()},l(e){s=d(e,"svg",{xmlns:!0,viewBox:!0,class:!0});var o=g(s);t&&t.l(o),a=u(),n&&n.l(o),o.forEach(c),this.h()},h(){_(s,"xmlns","http://www.w3.org/2000/svg"),_(s,"viewBox",i[1]),_(s,"class","svelte-c8tyih")},m(e,o){h(e,s,o),t&&t.m(s,null),v(s,a),n&&n.m(s,null),l=!0},p(e,[o]){e[0]?t?t.p(e,o):(t=r(e),t.c(),t.m(s,a)):t&&(t.d(1),t=null),n&&n.p&&(!l||o&4)&&B(n,f,e,e[2],l?b(f,e[2],o,null):k(e[2]),null),(!l||o&2)&&_(s,"viewBox",e[1])},i(e){l||(I(n,e),l=!0)},o(e){E(n,e),l=!1},d(e){e&&c(s),t&&t.d(),n&&n.d(e)}}}function x(i,s,a){let{$$slots:l={},$$scope:t}=s,{title:f=null}=s,{viewBox:n}=s;return i.$$set=e=>{"title"in e&&a(0,f=e.title),"viewBox"in e&&a(1,n=e.viewBox),"$$scope"in e&&a(2,t=e.$$scope)},[f,n,t,l]}class H extends p{constructor(s){super(),j(this,s,x,C,w,{title:0,viewBox:1})}}export{H as I,G as a,F as g};