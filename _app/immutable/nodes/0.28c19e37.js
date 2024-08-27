import{s as k,n as d,o as Y,b as B,c as C,u as J,g as M,d as L,e as G}from"../chunks/scheduler.7a690678.js";import{S as U,i as v,g as p,r as R,h as w,j as E,u as I,f,k as b,a as h,x as V,v as S,d as m,t as g,w as T,y as D,l as A,s as Q,c as y,b as H,p as O}from"../chunks/index.e3d7379c.js";import{d as P}from"../chunks/singletons.13b90385.js";/* empty css                                                         */import"../chunks/paths.40e25134.js";import{I as W}from"../chunks/ImageLoader.ce586e77.js";import{s as F}from"../chunks/sleep.a3b1575c.js";const Z=!0,z="never",Ee=Object.freeze(Object.defineProperty({__proto__:null,prerender:Z,trailingSlash:z},Symbol.toStringTag,{value:"Module"})),j=()=>{const o=P;return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},updated:o.updated}},K={subscribe(o){return j().navigating.subscribe(o)}},x=""+new URL("../assets/background-large.b5339303.png",import.meta.url).href,X="data:image/png;base64,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";function q(o){let e,s,t,n;return t=new W({props:{information:o[0]}}),{c(){e=p("main"),s=p("picture"),R(t.$$.fragment),this.h()},l(i){e=w(i,"MAIN",{class:!0});var l=E(e);s=w(l,"PICTURE",{class:!0});var u=E(s);I(t.$$.fragment,u),u.forEach(f),l.forEach(f),this.h()},h(){b(s,"class","svelte-xt8ikq"),b(e,"class","svelte-xt8ikq")},m(i,l){h(i,e,l),V(e,s),S(t,s,null),n=!0},p:d,i(i){n||(m(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){i&&f(e),T(t)}}}function _(o){return[{largeImage:x,smallImage:X,imageText:"background"}]}class $ extends U{constructor(e){super(),v(this,e,_,q,k,{})}}function ee(o){let e,s;return{c(){e=p("div"),s=p("div"),this.h()},l(t){e=w(t,"DIV",{class:!0,style:!0});var n=E(e);s=w(n,"DIV",{class:!0}),E(s).forEach(f),n.forEach(f),this.h()},h(){b(s,"class","shadow svelte-5bpnhx"),D(s,"pause-animation",o[4]),b(e,"class","wrapper svelte-5bpnhx"),A(e,"--size",o[3]+o[1]),A(e,"--color",o[0]),A(e,"--duration",o[2])},m(t,n){h(t,e,n),V(e,s)},p(t,[n]){n&16&&D(s,"pause-animation",t[4]),n&10&&A(e,"--size",t[3]+t[1]),n&1&&A(e,"--color",t[0]),n&4&&A(e,"--duration",t[2])},i:d,o:d,d(t){t&&f(e)}}}function te(o,e,s){let{color:t="#FF3E00"}=e,{unit:n="px"}=e,{duration:i="1.7s"}=e,{size:l="60"}=e,{pause:u=!1}=e;return o.$$set=a=>{"color"in a&&s(0,t=a.color),"unit"in a&&s(1,n=a.unit),"duration"in a&&s(2,i=a.duration),"size"in a&&s(3,l=a.size),"pause"in a&&s(4,u=a.pause)},[t,n,i,l,u]}class se extends U{constructor(e){super(),v(this,e,te,ee,k,{color:0,unit:1,duration:2,size:3,pause:4})}}function ne(o){let e,s,t;return s=new se({props:{color:oe,size:ae,unit:re}}),{c(){e=p("div"),R(s.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=E(e);I(s.$$.fragment,i),i.forEach(f),this.h()},h(){b(e,"class","svelte-15wvgdg")},m(n,i){h(n,e,i),S(s,e,null),o[1](e),t=!0},p:d,i(n){t||(m(s.$$.fragment,n),t=!0)},o(n){g(s.$$.fragment,n),t=!1},d(n){n&&f(e),T(s),o[1](null)}}}const oe="#ebedf0",ae="40",re="px";function ie(o,e,s){var t;async function n(){try{await i()}catch{}await F(500),l()}async function i(){let a=!1,r=50;for(let c=0;c<6&&(await F(r),a=document.fonts.check("1px Poppins","1px Noto Sans JP"),!a);c++)r*=2}async function l(){let a=1,r=setInterval(function(){a>0?(a-=.1,s(0,t.style.opacity=a,t)):(clearInterval(r),s(0,t.style.display="none",t))},50)}Y(n);function u(a){B[a?"unshift":"push"](()=>{t=a,s(0,t)})}return o.$$.update=()=>{o.$$.dirty&1},[t,u]}class le extends U{constructor(e){super(),v(this,e,ie,ne,k,{})}}function N(o){let e,s;return e=new le({}),{c(){R(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){S(e,t,n),s=!0},p:d,i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function ce(o){let e,s,t=o[0],n,i;e=new $({});let l=N();const u=o[2].default,a=C(u,o,o[1],null);return{c(){R(e.$$.fragment),s=Q(),l.c(),n=Q(),a&&a.c()},l(r){I(e.$$.fragment,r),s=y(r),l.l(r),n=y(r),a&&a.l(r)},m(r,c){S(e,r,c),h(r,s,c),l.m(r,c),h(r,n,c),a&&a.m(r,c),i=!0},p(r,[c]){c&1&&k(t,t=r[0])?(O(),g(l,1,1,d),H(),l=N(),l.c(),m(l,1),l.m(n.parentNode,n)):l.p(r,c),a&&a.p&&(!i||c&2)&&J(a,u,r,r[1],i?L(u,r[1],c,null):M(r[1]),null)},i(r){i||(m(e.$$.fragment,r),m(l),m(a,r),i=!0)},o(r){g(e.$$.fragment,r),g(l),g(a,r),i=!1},d(r){r&&(f(s),f(n)),T(e,r),l.d(r),a&&a.d(r)}}}function ue(o,e,s){let t;G(o,K,l=>s(0,t=l));let{$$slots:n={},$$scope:i}=e;return o.$$set=l=>{"$$scope"in l&&s(1,i=l.$$scope)},[t,i,n]}class be extends U{constructor(e){super(),v(this,e,ue,ce,k,{})}}export{be as component,Ee as universal};
