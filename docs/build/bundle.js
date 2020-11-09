var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function s(t){return t()}function o(){return Object.create(null)}function a(t){t.forEach(s)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(n,e,s){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const s=n.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}(e,s))}function i(t,n,e,s){if(t){const o=u(t,n,e,s);return t[0](o)}}function u(t,n,s,o){return t[1]&&o?e(s.ctx.slice(),t[1](o(n))):s.ctx}function p(t,n,e,s,o,a,c){const r=function(t,n,e,s){if(t[2]&&s){const o=t[2](s(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let s=0;s<e;s+=1)t[s]=n.dirty[s]|o[s];return t}return n.dirty|o}return n.dirty}(n,s,o,a);if(r){const o=u(n,e,s,c);t.p(o,r)}}function d(t){return null==t?"":t}const f="undefined"!=typeof window;let $=f?()=>window.performance.now():()=>Date.now(),m=f?t=>requestAnimationFrame(t):t;const g=new Set;function h(t){g.forEach((n=>{n.c(t)||(g.delete(n),n.f())})),0!==g.size&&m(h)}function y(t){let n;return 0===g.size&&m(h),{promise:new Promise((e=>{g.add(n={c:t,f:e})})),abort(){g.delete(n)}}}function b(t,n){t.appendChild(n)}function v(t,n,e){t.insertBefore(n,e||null)}function k(t){t.parentNode.removeChild(t)}function x(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function w(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function j(){return _(" ")}function E(){return _("")}function I(t,n,e,s){return t.addEventListener(n,e,s),()=>t.removeEventListener(n,e,s)}function A(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function C(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function L(t,n){t.value=null==n?"":n}function T(t,n,e,s){t.style.setProperty(n,e,s?"important":"")}function M(t,n,e){t.classList[e?"add":"remove"](n)}const O=new Set;let S,z=0;function H(t,n,e,s,o,a,c,r=0){const l=16.666/s;let i="{\n";for(let t=0;t<=1;t+=l){const s=n+(e-n)*a(t);i+=100*t+`%{${c(s,1-s)}}\n`}const u=i+`100% {${c(e,1-e)}}\n}`,p=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${r}`,d=t.ownerDocument;O.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(w("style")).sheet),$=d.__svelte_rules||(d.__svelte_rules={});$[p]||($[p]=!0,f.insertRule(`@keyframes ${p} ${u}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${p} ${s}ms linear ${o}ms 1 both`,z+=1,p}function P(t,n){const e=(t.style.animation||"").split(", "),s=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),o=e.length-s.length;o&&(t.style.animation=s.join(", "),z-=o,z||m((()=>{z||(O.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),O.clear())})))}function R(t){S=t}function D(){if(!S)throw new Error("Function called outside component initialization");return S}function q(t){D().$$.on_mount.push(t)}const N=[],U=[],B=[],W=[],F=Promise.resolve();let Y=!1;function G(){Y||(Y=!0,F.then(V))}function J(t){B.push(t)}let K=!1;const Q=new Set;function V(){if(!K){K=!0;do{for(let t=0;t<N.length;t+=1){const n=N[t];R(n),X(n.$$)}for(R(null),N.length=0;U.length;)U.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];Q.has(n)||(Q.add(n),n())}B.length=0}while(N.length);for(;W.length;)W.pop()();Y=!1,K=!1,Q.clear()}}function X(t){if(null!==t.fragment){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}let Z;function tt(){return Z||(Z=Promise.resolve(),Z.then((()=>{Z=null}))),Z}function nt(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const et=new Set;let st;function ot(){st={r:0,c:[],p:st}}function at(){st.r||a(st.c),st=st.p}function ct(t,n){t&&t.i&&(et.delete(t),t.i(n))}function rt(t,n,e,s){if(t&&t.o){if(et.has(t))return;et.add(t),st.c.push((()=>{et.delete(t),s&&(e&&t.d(1),s())})),t.o(n)}}const lt={duration:0};function it(t,n){const e={},s={},o={$$scope:1};let a=t.length;for(;a--;){const c=t[a],r=n[a];if(r){for(const t in c)t in r||(s[t]=1);for(const t in r)o[t]||(e[t]=r[t],o[t]=1);t[a]=r}else for(const t in c)o[t]=1}for(const t in s)t in e||(e[t]=void 0);return e}function ut(t){return"object"==typeof t&&null!==t?t:{}}function pt(t){t&&t.c()}function dt(t,n,e){const{fragment:o,on_mount:r,on_destroy:l,after_update:i}=t.$$;o&&o.m(n,e),J((()=>{const n=r.map(s).filter(c);l?l.push(...n):a(n),t.$$.on_mount=[]})),i.forEach(J)}function ft(t,n){const e=t.$$;null!==e.fragment&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function $t(n,e,s,c,r,l,i=[-1]){const u=S;R(n);const p=e.props||{},d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:i,skip_bound:!1};let f=!1;if(d.ctx=s?s(n,p,((t,e,...s)=>{const o=s.length?s[0]:e;return d.ctx&&r(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),f&&function(t,n){-1===t.$$.dirty[0]&&(N.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),f=!0,a(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(k)}else d.fragment&&d.fragment.c();e.intro&&ct(n.$$.fragment),dt(n,e.target,e.anchor),V()}R(u)}class mt{$destroy(){ft(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt=[];function ht(n,e=t){let s;const o=[];function a(t){if(r(n,t)&&(n=t,s)){const t=!gt.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),gt.push(e,n)}if(t){for(let t=0;t<gt.length;t+=2)gt[t][0](gt[t+1]);gt.length=0}}}return{set:a,update:function(t){a(t(n))},subscribe:function(c,r=t){const l=[c,r];return o.push(l),1===o.length&&(s=e(a)||t),c(n),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(s(),s=null)}}}}function yt(t){const n=t-1;return n*n*n+1}function bt(t){return"[object Date]"===Object.prototype.toString.call(t)}function vt(t,n){if(t===n||t!=t)return()=>t;const e=typeof t;if(e!==typeof n||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const e=n.map(((n,e)=>vt(t[e],n)));return t=>e.map((n=>n(t)))}if("object"===e){if(!t||!n)throw new Error("Object cannot be null");if(bt(t)&&bt(n)){t=t.getTime();const e=(n=n.getTime())-t;return n=>new Date(t+n*e)}const e=Object.keys(n),s={};return e.forEach((e=>{s[e]=vt(t[e],n[e])})),t=>{const n={};return e.forEach((e=>{n[e]=s[e](t)})),n}}if("number"===e){const e=n-t;return n=>t+n*e}throw new Error(`Cannot interpolate ${e} values`)}function kt(t,{delay:n=0,duration:e=400,easing:s=yt,x:o=0,y:a=0,opacity:c=0}){const r=getComputedStyle(t),l=+r.opacity,i="none"===r.transform?"":r.transform,u=l*(1-c);return{delay:n,duration:e,easing:s,css:(t,n)=>`\n\t\t\ttransform: ${i} translate(${(1-t)*o}px, ${(1-t)*a}px);\n\t\t\topacity: ${l-u*n}`}}const xt=t=>({currentIndex:1&t,payload:16&t,loop:2&t}),wt=t=>({currentIndex:t[0],payload:t[4],setIndex:t[2],controls:t[3],loop:t[1]});function _t(t){let n;const e=t[7].default,s=i(e,t,t[6],wt);return{c(){s&&s.c()},m(t,e){s&&s.m(t,e),n=!0},p(t,[n]){s&&s.p&&83&n&&p(s,e,t,t[6],n,xt,wt)},i(t){n||(ct(s,t),n=!0)},o(t){rt(s,t),n=!1},d(t){s&&s.d(t)}}}function jt(t,n,e){let{$$slots:s={},$$scope:o}=n,{items:a=[]}=n,{currentIndex:c=0}=n,{loop:r=!1}=n;const l={next:()=>e(0,c=c<a.length-1?c+1:r?0:a.length-1),previous:()=>e(0,c=0!=c?c-1:r?a.length-1:0)};let i;return t.$$set=t=>{"items"in t&&e(5,a=t.items),"currentIndex"in t&&e(0,c=t.currentIndex),"loop"in t&&e(1,r=t.loop),"$$scope"in t&&e(6,o=t.$$scope)},t.$$.update=()=>{33&t.$$.dirty&&e(4,i=a[c])},[c,r,t=>t<a.length&&e(0,c=t),l,i,a,o,s]}class Et extends mt{constructor(t){super(),$t(this,t,jt,_t,r,{items:5,currentIndex:0,loop:1,setIndex:2,controls:3})}get setIndex(){return this.$$.ctx[2]}get controls(){return this.$$.ctx[3]}}const It=t=>({tabs:1&t}),At=t=>({tabs:t[0]});function Ct(t){let n,e;const s=t[3].tabs,o=i(s,t,t[2],At),a=t[3].default,c=i(a,t,t[2],null);return{c(){o&&o.c(),n=j(),c&&c.c()},m(t,s){o&&o.m(t,s),v(t,n,s),c&&c.m(t,s),e=!0},p(t,[n]){o&&o.p&&5&n&&p(o,s,t,t[2],n,It,At),c&&c.p&&4&n&&p(c,a,t,t[2],n,null,null)},i(t){e||(ct(o,t),ct(c,t),e=!0)},o(t){rt(o,t),rt(c,t),e=!1},d(t){o&&o.d(t),t&&k(n),c&&c.d(t)}}}function Lt(t,n,e){let{$$slots:s={},$$scope:o}=n,{tabs:a}=n;const c=ht([]),r=t=>c.update((n=>n.map((n=>({...n,active:n.id==t})))));var l,i;return c.subscribe((t=>e(0,a=t))),l="tabcontrols_tabs",i={_tabs:c,setTab:r},D().$$.context.set(l,i),t.$$set=t=>{"tabs"in t&&e(0,a=t.tabs),"$$scope"in t&&e(2,o=t.$$scope)},[a,r,o,s]}class Tt extends mt{constructor(t){super(),$t(this,t,Lt,Ct,r,{tabs:0,setTab:1})}get setTab(){return this.$$.ctx[1]}}function Mt(t){let n;const e=t[7].default,s=i(e,t,t[6],null);return{c(){s&&s.c()},m(t,e){s&&s.m(t,e),n=!0},p(t,n){s&&s.p&&64&n&&p(s,e,t,t[6],n,null,null)},i(t){n||(ct(s,t),n=!0)},o(t){rt(s,t),n=!1},d(t){s&&s.d(t)}}}function Ot(t){let n,e,s=t[0]&&Mt(t);return{c(){s&&s.c(),n=E()},m(t,o){s&&s.m(t,o),v(t,n,o),e=!0},p(t,[e]){t[0]?s?(s.p(t,e),1&e&&ct(s,1)):(s=Mt(t),s.c(),ct(s,1),s.m(n.parentNode,n)):s&&(ot(),rt(s,1,1,(()=>{s=null})),at())},i(t){e||(ct(s),e=!0)},o(t){rt(s),e=!1},d(t){s&&s.d(t),t&&k(n)}}}function St(t,n,e){let s,{$$slots:o={},$$scope:a}=n;const{_tabs:c,setTab:r}=(i="tabcontrols_tabs",D().$$.context.get(i));var i;l(t,c,(t=>e(9,s=t)));let{active:u=!1}=n,{disabled:p=!1}=n,{id:d}=n,{payload:f}=n;const $=()=>r(d);let m,g;return q((()=>c.update((t=>[...t,{active:u,disabled:p,id:d,select:$,payload:f}])))),t.$$set=t=>{"active"in t&&e(2,u=t.active),"disabled"in t&&e(3,p=t.disabled),"id"in t&&e(4,d=t.id),"payload"in t&&e(5,f=t.payload),"$$scope"in t&&e(6,a=t.$$scope)},t.$$.update=()=>{528&t.$$.dirty&&e(8,m=s.find((t=>d===t.id))),256&t.$$.dirty&&e(0,g=m&&m.active),24&t.$$.dirty&&c.update((t=>t.map((t=>t.id===d?{...t,disabled:p}:t)))),20&t.$$.dirty&&c.update((t=>t.map((t=>t.id===d?{...t,active:u}:t))))},[g,c,u,p,d,f,a,o]}class zt extends mt{constructor(t){super(),$t(this,t,St,Ot,r,{active:2,disabled:3,id:4,payload:5})}}function Ht(t,n,e){const s=t.slice();return s[4]=n[e],s[6]=e,s}function Pt(t){let n,e,s,o,a,c=t[6]+1+"";function r(...n){return t[3](t[6],...n)}return{c(){n=w("div"),e=w("button"),s=_(c),A(e,"class","svelte-mbf5va"),M(e,"active",t[6]===t[0]),A(n,"class","svelte-mbf5va")},m(t,c){v(t,n,c),b(n,e),b(e,s),o||(a=I(e,"click",r),o=!0)},p(n,s){t=n,1&s&&M(e,"active",t[6]===t[0])},d(t){t&&k(n),o=!1,a()}}}function Rt(n){let e,s=n[1],o=[];for(let t=0;t<s.length;t+=1)o[t]=Pt(Ht(n,s,t));return{c(){e=w("nav");for(let t=0;t<o.length;t+=1)o[t].c();A(e,"class","svelte-mbf5va")},m(t,n){v(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,[n]){if(7&n){let a;for(s=t[1],a=0;a<s.length;a+=1){const c=Ht(t,s,a);o[a]?o[a].p(c,n):(o[a]=Pt(c),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=s.length}},i:t,o:t,d(t){t&&k(e),x(o,t)}}}function Dt(t,n,e){let{currentIndex:s}=n,{pages:o=[]}=n,{setIndex:a=(()=>{})}=n;return t.$$set=t=>{"currentIndex"in t&&e(0,s=t.currentIndex),"pages"in t&&e(1,o=t.pages),"setIndex"in t&&e(2,a=t.setIndex)},[s,o,a,t=>a(t)]}class qt extends mt{constructor(t){super(),$t(this,t,Dt,Rt,r,{currentIndex:0,pages:1,setIndex:2})}}function Nt(t){let n,e,s,o,a,c;const r=t[5].default,l=i(r,t,t[4],null);return{c(){n=w("div"),e=w("div"),l&&l.c(),A(e,"class",s=d(t[0])+" svelte-km9z25"),T(n,"--hue",t[1]),A(n,"class","page svelte-km9z25")},m(s,r){v(s,n,r),b(n,e),l&&l.m(e,null),t[6](n),o=!0,a||(c=I(window,"mousewheel",t[3]),a=!0)},p(t,[a]){l&&l.p&&16&a&&p(l,r,t,t[4],a,null,null),(!o||1&a&&s!==(s=d(t[0])+" svelte-km9z25"))&&A(e,"class",s),(!o||2&a)&&T(n,"--hue",t[1])},i(t){o||(ct(l,t),o=!0)},o(t){rt(l,t),o=!1},d(e){e&&k(n),l&&l.d(e),t[6](null),a=!1,c()}}}function Ut(t,n,e){let s,{$$slots:o={},$$scope:a}=n,{css:c=""}=n,{hue:r=0}=n;return t.$$set=t=>{"css"in t&&e(0,c=t.css),"hue"in t&&e(1,r=t.hue),"$$scope"in t&&e(4,a=t.$$scope)},[c,r,s,({deltaY:t})=>{s.clientHeight>=s.scrollHeight||s.scrollTo({top:t,behaviour:"smooth"})},a,o,function(t){U[t?"unshift":"push"]((()=>{s=t,e(2,s)}))}]}class Bt extends mt{constructor(t){super(),$t(this,t,Ut,Nt,r,{css:0,hue:1})}}function Wt(t){let n,e,s;return{c(){n=w("h1"),n.textContent="Svelte Presenter",e=j(),s=w("p"),s.textContent="(use the sidebar or the arrow keys up and down)"},m(t,o){v(t,n,o),v(t,e,o),v(t,s,o)},d(t){t&&k(n),t&&k(e),t&&k(s)}}}function Ft(t){let n,s;const o=[Yt];let a={$$slots:{default:[Wt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)a=e(a,o[t]);return n=new Bt({props:a}),{c(){pt(n.$$.fragment)},m(t,e){dt(n,t,e),s=!0},p(t,[e]){const s=0&e?it(o,[ut(Yt)]):{};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ct(n.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),s=!1},d(t){ft(n,t)}}}const Yt={css:"centered",hue:24};function Gt(t){let n,e,s,o,a,c,r;return{c(){n=w("h1"),n.textContent="What is Svelte Presenter ?",e=j(),s=w("p"),s.textContent="Svelte Presenter is an attempt at making a easy-to-use tool for presentations.",o=j(),a=w("p"),a.innerHTML='Pages are written using <a href="http://www.mdsvex.com" rel="nofollow">mdsvex</a> and picked up by the script during the build.',c=j(),r=w("p"),r.textContent="//TODO - pick up new pages automagically"},m(t,l){v(t,n,l),v(t,e,l),v(t,s,l),v(t,o,l),v(t,a,l),v(t,c,l),v(t,r,l)},d(t){t&&k(n),t&&k(e),t&&k(s),t&&k(o),t&&k(a),t&&k(c),t&&k(r)}}}function Jt(t){let n,s;const o=[Kt];let a={$$slots:{default:[Gt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)a=e(a,o[t]);return n=new Bt({props:a}),{c(){pt(n.$$.fragment)},m(t,e){dt(n,t,e),s=!0},p(t,[e]){const s=0&e?it(o,[ut(Kt)]):{};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ct(n.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),s=!1},d(t){ft(n,t)}}}const Kt={css:"centered",hue:220};function Qt(t){let n,e,s,o,a,c;return{c(){n=w("h1"),n.textContent="How to use it",e=j(),s=w("img"),a=j(),c=w("ul"),c.innerHTML="<li>add numbered folders to <code>/pages/content</code></li> \n<li>add a file <code>index.svx</code></li> \n<li>add a background hue to the frontmatter <code>hue: 220</code></li> \n<li>write markdown</li> \n<li>some build in styling classes: <code>centered</code>, <code>headed-double-column</code>, <code>column</code></li> \n<li>add these by setting some frontmatter <code>css: centered</code></li> \n<li>add bullet points, everybody wants to see bullet points in presentation</li>",s.src!==(o="./images/image.jpg")&&A(s,"src","./images/image.jpg"),A(s,"alt",""),A(s,"class","svelte-1o9fbc5")},m(t,o){v(t,n,o),v(t,e,o),v(t,s,o),v(t,a,o),v(t,c,o)},d(t){t&&k(n),t&&k(e),t&&k(s),t&&k(a),t&&k(c)}}}function Vt(t){let n,s;const o=[Xt];let a={$$slots:{default:[Qt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)a=e(a,o[t]);return n=new Bt({props:a}),{c(){pt(n.$$.fragment)},m(t,e){dt(n,t,e),s=!0},p(t,[e]){const s=0&e?it(o,[ut(Xt)]):{};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ct(n.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),s=!1},d(t){ft(n,t)}}}const Xt={css:"headed-double-column",hue:220};function Zt(t){let n,e;const s=t[1].default,o=i(s,t,t[0],null);return{c(){n=w("div"),o&&o.c(),A(n,"class","svelte-kzqdyz")},m(t,s){v(t,n,s),o&&o.m(n,null),e=!0},p(t,[n]){o&&o.p&&1&n&&p(o,s,t,t[0],n,null,null)},i(t){e||(ct(o,t),e=!0)},o(t){rt(o,t),e=!1},d(t){t&&k(n),o&&o.d(t)}}}function tn(t,n,e){let{$$slots:s={},$$scope:o}=n;return t.$$set=t=>{"$$scope"in t&&e(0,o=t.$$scope)},[o,s]}class nn extends mt{constructor(t){super(),$t(this,t,tn,Zt,r,{})}}function en(n){let e,s,o,a,c,r;return{c(){e=w("p"),e.textContent="Easily embed working code",s=j(),o=w("button"),a=_(n[0]),A(o,"class","svelte-12bfdyp")},m(t,l){v(t,e,l),v(t,s,l),v(t,o,l),b(o,a),c||(r=I(o,"click",n[1]),c=!0)},p(t,[n]){1&n&&C(a,t[0])},i:t,o:t,d(t){t&&k(e),t&&k(s),t&&k(o),c=!1,r()}}}function sn(t,n,e){let s=0;return[s,()=>e(0,s++,s)]}class on extends mt{constructor(t){super(),$t(this,t,sn,en,r,{})}}function an(t){let n,e;return n=new on({}),{c(){pt(n.$$.fragment)},m(t,s){dt(n,t,s),e=!0},i(t){e||(ct(n.$$.fragment,t),e=!0)},o(t){rt(n.$$.fragment,t),e=!1},d(t){ft(n,t)}}}function cn(t){let n,e,s,o,a,c,r,l;return a=new nn({props:{$$slots:{default:[an]},$$scope:{ctx:t}}}),{c(){n=w("h1"),n.textContent="Living Elements",e=j(),s=w("pre"),o=j(),pt(a.$$.fragment),c=j(),r=w("ul"),r.innerHTML="<li><p>Use the built inn <code>LiveCode</code> component to give your samples a nice look and feel</p></li> \n<li><p>Tip: use <code>columns: 2</code> as a CSS rule to spread your list over 2 columns’</p></li> \n<li><p>Long pages are cut off, but don’t worry, you can still scroll to make them appear</p></li>",A(s,"class","language-svelte"),A(r,"class","svelte-9t7jsh")},m(t,i){v(t,n,i),v(t,e,i),v(t,s,i),s.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Easily embed working code<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token operator">++</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>count<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">button</span> <span class="token punctuation">&#123;</span>\n        <span class="token property">border-radius</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>\n        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n        <span class="token property">margin</span><span class="token punctuation">:</span> 1rem 0<span class="token punctuation">;</span>\n        <span class="token property">padding</span><span class="token punctuation">:</span> .5rem 1rem<span class="token punctuation">;</span>\n        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>',v(t,o,i),dt(a,t,i),v(t,c,i),v(t,r,i),l=!0},p(t,n){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),a.$set(e)},i(t){l||(ct(a.$$.fragment,t),l=!0)},o(t){rt(a.$$.fragment,t),l=!1},d(t){t&&k(n),t&&k(e),t&&k(s),t&&k(o),ft(a,t),t&&k(c),t&&k(r)}}}function rn(t){let n,s;const o=[ln];let a={$$slots:{default:[cn]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)a=e(a,o[t]);return n=new Bt({props:a}),{c(){pt(n.$$.fragment)},m(t,e){dt(n,t,e),s=!0},p(t,[e]){const s=0&e?it(o,[ut(ln)]):{};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ct(n.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),s=!1},d(t){ft(n,t)}}}const ln={css:"headed-double-column",hue:280};function un(n){let e;return{c(){e=w("iframe"),A(e,"title","Rendered Repl"),A(e,"srcdoc",n[1]),A(e,"class","svelte-ua5iaq")},m(t,s){v(t,e,s),n[3](e)},p:t,i:t,o:t,d(t){t&&k(e),n[3](null)}}}function pn(t,n,e){let s,{compiled:o}=n;return t.$$set=t=>{"compiled"in t&&e(2,o=t.compiled)},t.$$.update=()=>{var n;5&t.$$.dirty&&s&&o&&(n=o,s.contentWindow.postMessage(n,"*"))},[s,'\n<!doctype html>\n<html>\n    <head>\n        <script type="module">\n            let c;\n\n            function update(code) {\n                if (c) {\n                    c.$destroy()\n                }\n\n                const blob = new Blob([code], { type: \'text/javascript\' })\n                const url = URL.createObjectURL(blob)\n\n                import(url).then(({ default: App }) => {\n                    document.body.innerHTML = ""\n                    c = new App({\n                        target: document.body\n                    })\n                })\n            }\n\n            window.addEventListener(\'message\', event => {\n                update(event.data)\n            }, false)\n        <\/script>\n    </head>\n    <body>\n        <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Loading...</p>\n    </body>\n</html>\n',o,function(t){U[t?"unshift":"push"]((()=>{s=t,e(0,s)}))}]}class dn extends mt{constructor(t){super(),$t(this,t,pn,un,r,{compiled:2})}}function fn(t,n,e){const s=t.slice();return s[4]=n[e],s[5]=n,s[6]=e,s}function $n(t,n,e){const s=t.slice();return s[8]=n[e].active,s[9]=n[e].payload,s[10]=n[e].select,s}function mn(t){let n,e,s,o,a=t[9]+"";return{c(){n=w("button"),e=_(a),A(n,"class","svelte-197i2fg"),M(n,"active",t[8])},m(a,r){v(a,n,r),b(n,e),s||(o=I(n,"click",(function(){c(t[10])&&t[10].apply(this,arguments)})),s=!0)},p(s,o){t=s,128&o&&a!==(a=t[9]+"")&&C(e,a),128&o&&M(n,"active",t[8])},d(t){t&&k(n),s=!1,o()}}}function gn(t){let n,e=t[7],s=[];for(let n=0;n<e.length;n+=1)s[n]=mn($n(t,e,n));return{c(){n=w("div");for(let t=0;t<s.length;t+=1)s[t].c();A(n,"class","tabs svelte-197i2fg"),A(n,"slot","tabs")},m(t,e){v(t,n,e);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,o){if(128&o){let a;for(e=t[7],a=0;a<e.length;a+=1){const c=$n(t,e,a);s[a]?s[a].p(c,o):(s[a]=mn(c),s[a].c(),s[a].m(n,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=e.length}},d(t){t&&k(n),x(s,t)}}}function hn(t){let n,e,s,o;function a(){t[2].call(n,t[5],t[6])}return{c(){n=w("textarea"),e=j(),A(n,"autocomplete","off"),A(n,"autocorrect","off"),A(n,"autocapitalize","off"),A(n,"spellcheck","false"),A(n,"class","svelte-197i2fg")},m(c,r){v(c,n,r),L(n,t[4].source),v(c,e,r),s||(o=I(n,"input",a),s=!0)},p(e,s){t=e,1&s&&L(n,t[4].source)},d(t){t&&k(n),t&&k(e),s=!1,o()}}}function yn(t){let n,e;return n=new zt({props:{id:t[6],payload:`${t[4].name}.${t[4].type}`,active:0===t[6],$$slots:{default:[hn]},$$scope:{ctx:t}}}),{c(){pt(n.$$.fragment)},m(t,s){dt(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.payload=`${t[4].name}.${t[4].type}`),8193&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(ct(n.$$.fragment,t),e=!0)},o(t){rt(n.$$.fragment,t),e=!1},d(t){ft(n,t)}}}function bn(t){let n,e,s,o=t[0],a=[];for(let n=0;n<o.length;n+=1)a[n]=yn(fn(t,o,n));const c=t=>rt(a[t],1,1,(()=>{a[t]=null}));return{c(){n=j();for(let t=0;t<a.length;t+=1)a[t].c();e=E()},m(t,o){v(t,n,o);for(let n=0;n<a.length;n+=1)a[n].m(t,o);v(t,e,o),s=!0},p(t,n){if(1&n){let s;for(o=t[0],s=0;s<o.length;s+=1){const c=fn(t,o,s);a[s]?(a[s].p(c,n),ct(a[s],1)):(a[s]=yn(c),a[s].c(),ct(a[s],1),a[s].m(e.parentNode,e))}for(ot(),s=o.length;s<a.length;s+=1)c(s);at()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)ct(a[t]);s=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)rt(a[t]);s=!1},d(t){t&&k(n),x(a,t),t&&k(e)}}}function vn(t){let n,e,s,o,a,c,r;return s=new Tt({props:{$$slots:{default:[bn],tabs:[gn,({tabs:t})=>({7:t}),({tabs:t})=>t?128:0]},$$scope:{ctx:t}}}),c=new dn({props:{compiled:t[1]}}),{c(){n=w("div"),e=w("div"),pt(s.$$.fragment),o=j(),a=w("div"),pt(c.$$.fragment),A(e,"class","input svelte-197i2fg"),A(a,"class","output svelte-197i2fg"),A(n,"class","wrapper svelte-197i2fg")},m(t,l){v(t,n,l),b(n,e),dt(s,e,null),b(n,o),b(n,a),dt(c,a,null),r=!0},p(t,[n]){const e={};8321&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e);const o={};2&n&&(o.compiled=t[1]),c.$set(o)},i(t){r||(ct(s.$$.fragment,t),ct(c.$$.fragment,t),r=!0)},o(t){rt(s.$$.fragment,t),rt(c.$$.fragment,t),r=!1},d(t){t&&k(n),ft(s),ft(c)}}}function kn(t,n,e){let s,o,{components:a=[]}=n;return q((()=>{e(3,o=new Worker("./worker.js")),o.addEventListener("message",(t=>{e(1,s=t.data)})),e(0,a)})),t.$$set=t=>{"components"in t&&e(0,a=t.components)},t.$$.update=()=>{9&t.$$.dirty&&o&&o.postMessage(a)},[a,s,function(t,n){t[n].source=this.value,e(0,a)}]}class xn extends mt{constructor(t){super(),$t(this,t,kn,vn,r,{components:0})}}var wn={id:0,name:"App",type:"svelte",source:"<script>\n    // Edit this code to showcase something\n    import Animal from './Animal.svelte'\n    import data from './data.json'\n<\/script>\n\n{#each data as item}\n    <Animal {...item} />\n{/each}\n"},_n={id:1,name:"Animal",type:"svelte",source:"<script>\n    export let animal\n    export let emoji\n<\/script>\n\n<p>{animal} - <span>{emoji}</span></p>\n\n<style>\n    span {\n        font-size: 2rem;\n    }\n</style>\n    "},jn={id:2,name:"data",type:"json",source:"[\n        { animal: 'Squirrel', emoji: '🐿️' },\n        { animal: 'Rabbit', emoji: '🐇' },\n        { animal: 'Hamster', emoji: '🐹' },\n        { animal: 'Dragon', emoji: '🐉' }\n    ]"};function En(n){let e,s;return e=new xn({props:{components:n[0]}}),{c(){pt(e.$$.fragment)},m(t,n){dt(e,t,n),s=!0},p:t,i(t){s||(ct(e.$$.fragment,t),s=!0)},o(t){rt(e.$$.fragment,t),s=!1},d(t){ft(e,t)}}}function In(t){let n,s;const o=[An];let a={$$slots:{default:[En]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)a=e(a,o[t]);return n=new Bt({props:a}),{c(){pt(n.$$.fragment)},m(t,e){dt(n,t,e),s=!0},p(t,[e]){const s=0&e?it(o,[ut(An)]):{};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ct(n.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),s=!1},d(t){ft(n,t)}}}const An={css:"column",hue:350};function Cn(t){return[[wn,_n,jn]]}function Ln(t){let n,e,s;return{c(){n=w("h1"),n.textContent="Things to hopefully come soon",e=j(),s=w("ul"),s.innerHTML="<li>automatic detection of new pages during development</li> \n<li>reflect color of the page in the sidebar</li> \n<li>automatic parsing of real files for the REPL</li> \n<li>some more quality of life stuff</li>"},m(t,o){v(t,n,o),v(t,e,o),v(t,s,o)},d(t){t&&k(n),t&&k(e),t&&k(s)}}}function Tn(t){let n,s;const o=[Mn];let a={$$slots:{default:[Ln]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)a=e(a,o[t]);return n=new Bt({props:a}),{c(){pt(n.$$.fragment)},m(t,e){dt(n,t,e),s=!0},p(t,[e]){const s=0&e?it(o,[ut(Mn)]):{};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ct(n.$$.fragment,t),s=!0)},o(t){rt(n.$$.fragment,t),s=!1},d(t){ft(n,t)}}}const Mn={css:"centered",hue:120};var On=[class extends mt{constructor(t){super(),$t(this,t,null,Ft,r,{})}},class extends mt{constructor(t){super(),$t(this,t,null,Jt,r,{})}},class extends mt{constructor(t){super(),$t(this,t,null,Vt,r,{})}},class extends mt{constructor(t){super(),$t(this,t,null,rn,r,{})}},class extends mt{constructor(t){super(),$t(this,t,Cn,In,r,{})}},class extends mt{constructor(t){super(),$t(this,t,null,Tn,r,{})}}];function Sn(e){let s,o,r,l,i;var u=e[10];return u&&(o=new u({})),{c(){s=w("div"),o&&pt(o.$$.fragment),A(s,"class","svelte-1vlp295")},m(t,n){v(t,s,n),o&&dt(o,s,null),i=!0},p(t,n){if(u!==(u=(e=t)[10])){if(o){ot();const t=o;rt(t.$$.fragment,1,0,(()=>{ft(t,1)})),at()}u?(o=new u({}),pt(o.$$.fragment),ct(o.$$.fragment,1),dt(o,s,null)):o=null}},i(a){i||(o&&ct(o.$$.fragment,a),J((()=>{l&&l.end(1),r||(r=function(e,s,o){let a,r,l=s(e,o),i=!1,u=0;function p(){a&&P(e,a)}function d(){const{delay:s=0,duration:o=300,easing:c=n,tick:d=t,css:f}=l||lt;f&&(a=H(e,0,1,o,s,c,f,u++)),d(0,1);const m=$()+s,g=m+o;r&&r.abort(),i=!0,J((()=>nt(e,!0,"start"))),r=y((t=>{if(i){if(t>=g)return d(1,0),nt(e,!0,"end"),p(),i=!1;if(t>=m){const n=c((t-m)/o);d(n,1-n)}}return i}))}let f=!1;return{start(){f||(P(e),c(l)?(l=l(),tt().then(d)):d())},invalidate(){f=!1},end(){i&&(p(),i=!1)}}}(s,kt,{y:e[1]*e[0],duration:1e3})),r.start()})),i=!0)},o(u){o&&rt(o.$$.fragment,u),r&&r.invalidate(),l=function(e,s,o){let r,l=s(e,o),i=!0;const u=st;function p(){const{delay:s=0,duration:o=300,easing:c=n,tick:p=t,css:d}=l||lt;d&&(r=H(e,1,0,o,s,c,d));const f=$()+s,m=f+o;J((()=>nt(e,!1,"start"))),y((t=>{if(i){if(t>=m)return p(0,1),nt(e,!1,"end"),--u.r||a(u.c),!1;if(t>=f){const n=c((t-f)/o);p(1-n,n)}}return i}))}return u.r+=1,c(l)?tt().then((()=>{l=l(),p()})):p(),{end(t){t&&l.tick&&l.tick(1,0),i&&(r&&P(e,r),i=!1)}}}(s,kt,{y:e[1]*(0-e[0]),duration:1e3}),i=!1},d(t){t&&k(s),o&&ft(o),t&&l&&l.end()}}}function zn(n){let e,s,o,a,c=n[10];e=new qt({props:{pages:On,setIndex:n[7],currentIndex:n[2]}});let l=Sn(n);return{c(){pt(e.$$.fragment),s=j(),o=w("main"),l.c(),A(o,"class","svelte-1vlp295")},m(t,n){dt(e,t,n),v(t,s,n),v(t,o,n),l.m(o,null),a=!0},p(n,s){const a={};4&s&&(a.currentIndex=n[2]),e.$set(a),1024&s&&r(c,c=n[10])?(ot(),rt(l,1,1,t),at(),l=Sn(n),l.c(),ct(l),l.m(o,null)):l.p(n,s)},i(t){a||(ct(e.$$.fragment,t),ct(l),a=!0)},o(t){rt(e.$$.fragment,t),rt(l),a=!1},d(t){ft(e,t),t&&k(s),t&&k(o),l.d(t)}}}function Hn(t){let n,e,s,o;return J(t[6]),n=new Et({props:{items:On,currentIndex:t[2],$$slots:{default:[zn,({setIndex:t,payload:n})=>({9:t,10:n}),({setIndex:t,payload:n})=>(t?512:0)|(n?1024:0)]},$$scope:{ctx:t}}}),{c(){pt(n.$$.fragment)},m(a,c){dt(n,a,c),e=!0,s||(o=[I(window,"keyup",t[5]),I(window,"resize",t[6])],s=!0)},p(t,[e]){const s={};4&e&&(s.currentIndex=t[2]),3079&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(ct(n.$$.fragment,t),e=!0)},o(t){rt(n.$$.fragment,t),e=!1},d(t){ft(n,t),s=!1,a(o)}}}function Pn(t,s,o){let a,c,r=function(t,s={}){const o=ht(t);let a,c=t;function r(r,l){if(null==t)return o.set(t=r),Promise.resolve();c=r;let i=a,u=!1,{delay:p=0,duration:d=400,easing:f=n,interpolate:m=vt}=e(e({},s),l);if(0===d)return i&&(i.abort(),i=null),o.set(t=c),Promise.resolve();const g=$()+p;let h;return a=y((n=>{if(n<g)return!0;u||(h=m(t,r),"function"==typeof d&&(d=d(t,r)),u=!0),i&&(i.abort(),i=null);const e=n-g;return e>d?(o.set(t=r),!1):(o.set(t=h(f(e/d))),!0)})),a.promise}return{set:r,update:(n,e)=>r(n(c,t),e),subscribe:o.subscribe}}(0,{duration:500});l(t,r,(t=>o(8,a=t)));let i=1;const u=async t=>{o(1,i=t>p?1:-1),await(G(),F),r.set(t,{duration:Math.abs(t-p)>1?500:0})};let p;return t.$$.update=()=>{256&t.$$.dirty&&o(2,p=Math.floor(a))},[c,i,p,r,u,({key:t})=>{switch(t){case"ArrowUp":return void(0!==p&&u(p-1));case"ArrowDown":return void(p!==On.length-1&&u(p+1))}},function(){o(0,c=window.innerHeight)},t=>u(t)]}return new class extends mt{constructor(t){super(),$t(this,t,Pn,Hn,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
