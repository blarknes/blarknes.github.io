import{s as b,n as i,o as j,b as E,c as H,u as N,g as R,d as U}from"../chunks/scheduler.e4596647.js";import{S as v,i as y,e as k,a as f,f as u,g as _,h as d,x,k as h,j as P,r as w,s as L,u as M,c as T,v as C,d as g,t as $,w as I}from"../chunks/index.eefd0cc9.js";import{h as q,p as z}from"../chunks/load_lazily.a5937faf.js";/* empty css                                                     */import"../chunks/paths.b7162c23.js";import{s as S}from"../chunks/sleep.a3b1575c.js";const O=!0,A="never",lt=Object.freeze(Object.defineProperty({__proto__:null,prerender:O,trailingSlash:A},Symbol.toStringTag,{value:"Module"})),B=""+new URL("../assets/background-large.7d1a51d3.png",import.meta.url).href,D=""+new URL("../assets/background-small.240867f1.png",import.meta.url).href;function J(r){return{c:i,l:i,m:i,d:i}}function V(r){let t,s=`<img src="${r[0]}" alt="background"/>`;return{c(){t=_("picture"),t.innerHTML=s,this.h()},l(e){t=d(e,"PICTURE",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-wtdvuu"&&(t.innerHTML=s),this.h()},h(){h(t,"class","svelte-1vmt1y4")},m(e,l){f(e,t,l)},d(e){e&&u(t)}}}function F(r){let t,s=`<img src="${D}" alt="background"/>`;return{c(){t=_("picture"),t.innerHTML=s,this.h()},l(e){t=d(e,"PICTURE",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-2ia7o3"&&(t.innerHTML=s),this.h()},h(){h(t,"class","svelte-1vmt1y4")},m(e,l){f(e,t,l)},d(e){e&&u(t)}}}function G(r){let t,s={ctx:r,current:null,token:null,hasCatch:!1,pending:F,then:V,catch:J,value:0};return q(z(B),s),{c(){t=k(),s.block.c()},l(e){t=k(),s.block.l(e)},m(e,l){f(e,t,l),s.block.m(e,s.anchor=l),s.mount=()=>t.parentNode,s.anchor=t},p(e,[l]){r=e},i,o:i,d(e){e&&u(t),s.block.d(e),s.token=null,s=null}}}class K extends v{constructor(t){super(),y(this,t,null,G,b,{})}}function Q(r){let t;return{c(){t=_("div"),this.h()},l(s){t=d(s,"DIV",{class:!0}),P(t).forEach(u),this.h()},h(){h(t,"class","svelte-8nncll")},m(s,e){f(s,t,e),r[1](t)},p:i,i,o:i,d(s){s&&u(t),r[1](null)}}}function W(r,t,s){let e;const l=async()=>{try{c()}catch{}try{await S(1e3)}catch{}m()},c=async()=>{let a=!1,n=50;for(let o=0;o<6&&(await S(n),a=document.fonts.check("1px Poppins","1px Noto Sans JP"),!a);o++)n*=2},m=async()=>{let a=1,n=setInterval(function(){a>0?(a-=.1,s(0,e.style.opacity=a,e)):(clearInterval(n),s(0,e.style.display="none",e))},60)};j(l);function p(a){E[a?"unshift":"push"](()=>{e=a,s(0,e)})}return r.$$.update=()=>{r.$$.dirty&1},[e,p]}class X extends v{constructor(t){super(),y(this,t,W,Q,b,{})}}function Y(r){let t,s,e,l,c,m;t=new X({}),e=new K({});const p=r[1].default,a=H(p,r,r[0],null);return{c(){w(t.$$.fragment),s=L(),w(e.$$.fragment),l=L(),c=_("main"),a&&a.c(),this.h()},l(n){M(t.$$.fragment,n),s=T(n),M(e.$$.fragment,n),l=T(n),c=d(n,"MAIN",{class:!0});var o=P(c);a&&a.l(o),o.forEach(u),this.h()},h(){h(c,"class","svelte-xid3qj")},m(n,o){C(t,n,o),f(n,s,o),C(e,n,o),f(n,l,o),f(n,c,o),a&&a.m(c,null),m=!0},p(n,[o]){a&&a.p&&(!m||o&1)&&N(a,p,n,n[0],m?U(p,n[0],o,null):R(n[0]),null)},i(n){m||(g(t.$$.fragment,n),g(e.$$.fragment,n),g(a,n),m=!0)},o(n){$(t.$$.fragment,n),$(e.$$.fragment,n),$(a,n),m=!1},d(n){n&&(u(s),u(l),u(c)),I(t,n),I(e,n),a&&a.d(n)}}}function Z(r,t,s){let{$$slots:e={},$$scope:l}=t;return r.$$set=c=>{"$$scope"in c&&s(0,l=c.$$scope)},[l,e]}class ot extends v{constructor(t){super(),y(this,t,Z,Y,b,{})}}export{ot as component,lt as universal};
