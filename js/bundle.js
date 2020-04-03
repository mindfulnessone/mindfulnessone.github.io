!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){(null!=e||t.value)&&(t.value=e)}let v;function b(t){v=t}const w=[],g=[],y=[],$=[],j=Promise.resolve();let x=!1;function _(){x||(x=!0,j.then(S))}function k(t){y.push(t)}let E=!1;const C=new Set;function S(){if(!E){E=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];b(e),H(e.$$)}for(w.length=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];C.has(e)||(C.add(e),e())}y.length=0}while(w.length);for(;$.length;)$.pop()();x=!1,E=!1,C.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const P=new Set;function q(s,i,c,a,l,d,f=[-1]){const m=v;b(s);const p=i.props||{},h=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:f};let g=!1;if(h.ctx=c?c(s,p,(t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&l(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),g&&function(t,e){-1===t.$$.dirty[0]&&(w.push(t),_(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(s,t)),e}):[],h.update(),g=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();i.intro&&((y=s.$$.fragment)&&y.i&&(P.delete(y),y.i($))),function(t,n,s){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,s),k(()=>{const n=c.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(k)}(s,i.target,i.anchor),S()}var y,$;b(m)}var A="https://js.stripe.com/v3",D=function(t){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.3.1"})},L=Promise.resolve().then((function(){if("undefined"==typeof window)return null;if(window.Stripe)return window.Stripe;var t=document.querySelector('script[src="'.concat(A,'"], script[src="').concat(A,'/"]'))||function(){var t=document.createElement("script");t.src=A;var e=document.head||document.body;if(!e)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return e.appendChild(t),t}();return new Promise((function(e,n){t.addEventListener("load",(function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))})),t.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}))})),I=!1;L.catch((function(t){I||console.warn(t)}));function T(e){let n,r,s,v,b,w,g,y,$,j,x,_,k,E,C,S,H,P,q,A,D,L,I,T,W,z,B,N,U,M,O,X,Y,F,G,Z;return{c(){n=l("a"),n.textContent="Donate",r=f(),s=l("div"),v=l("div"),b=l("span"),b.textContent="×",w=f(),g=l("h3"),g.textContent="How much would you like to donate?",y=f(),$=l("div"),j=l("div"),x=l("input"),k=f(),E=l("p"),E.textContent=".00",C=f(),S=l("p"),S.textContent=" CAD",H=f(),P=l("div"),q=l("button"),A=d("Donate once"),L=f(),I=l("button"),T=d("Donate every month"),z=f(),B=l("button"),N=d("Donate"),M=f(),O=l("div"),X=l("p"),Y=d(e[4]),p(n,"class","donate-link svelte-j6m16s"),p(b,"class","close svelte-j6m16s"),p(g,"class","modal-header svelte-j6m16s"),p(x,"type","text"),p(x,"class",_="price-input "+(e[2]?"price-input-hover":"")+" svelte-j6m16s"),p(x,"pattern","[0-9]*"),p(E,"class","price-label svelte-j6m16s"),p(S,"class","price-label-small svelte-j6m16s"),p(j,"class","input-row svelte-j6m16s"),p(q,"class",D=(e[3]?"inactive-button":"active-button")+" recurring-button svelte-j6m16s"),p(I,"class",W=(e[3]?"active-button":"inactive-button")+" recurring-button svelte-j6m16s"),p(P,"class","recurring-buttons svelte-j6m16s"),B.disabled=e[5],p(B,"class",U=(e[5]?"donate-button-disabled":"")+" donate-button svelte-j6m16s"),p(X,"class",F=i(e[5]?"disclaimer-error":"disclaimer")+" svelte-j6m16s"),p(O,"class","disclaimer-container svelte-j6m16s"),p($,"class","modal-content svelte-j6m16s"),p(v,"class","modal-body"),p(s,"id","myModal"),p(s,"class",G="modal "+(e[6]?"modal-visible":"modal-hidden")+" svelte-j6m16s")},m(t,i,u){a(t,n,i),a(t,r,i),a(t,s,i),c(s,v),c(v,b),c(v,w),c(v,g),c(v,y),c(v,$),c($,j),c(j,x),h(x,e[0]),e[21](x),c(j,k),c(j,E),c(j,C),c(j,S),c($,H),c($,P),c(P,q),c(q,A),c(P,L),c(P,I),c(I,T),c($,z),c($,B),c(B,N),c($,M),c($,O),c(O,X),c(X,Y),u&&o(Z),Z=[m(n,"click",e[7]),m(b,"click",e[8]),m(x,"input",e[20]),m(x,"keydown",e[9]),m(E,"mouseenter",e[12]),m(E,"mouseleave",e[13]),m(E,"click",e[14]),m(S,"mouseenter",e[12]),m(S,"mouseleave",e[13]),m(S,"click",e[14]),m(q,"click",e[22]),m(I,"click",e[23]),m(B,"click",e[11])]},p(t,[e]){4&e&&_!==(_="price-input "+(t[2]?"price-input-hover":"")+" svelte-j6m16s")&&p(x,"class",_),1&e&&x.value!==t[0]&&h(x,t[0]),8&e&&D!==(D=(t[3]?"inactive-button":"active-button")+" recurring-button svelte-j6m16s")&&p(q,"class",D),8&e&&W!==(W=(t[3]?"active-button":"inactive-button")+" recurring-button svelte-j6m16s")&&p(I,"class",W),32&e&&(B.disabled=t[5]),32&e&&U!==(U=(t[5]?"donate-button-disabled":"")+" donate-button svelte-j6m16s")&&p(B,"class",U),16&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(Y,t[4]),32&e&&F!==(F=i(t[5]?"disclaimer-error":"disclaimer")+" svelte-j6m16s")&&p(X,"class",F),64&e&&G!==(G="modal "+(t[6]?"modal-visible":"modal-hidden")+" svelte-j6m16s")&&p(s,"class",G)},i:t,o:t,d(t){t&&u(n),t&&u(r),t&&u(s),e[21](null),o(Z)}}}async function W(t){(await function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return I=!0,L.then((function(t){if(null===t)return null;var n=t.apply(void 0,e);return D(n),n}))}("pk_live_TsW6sy751tsXWBIPnzpTUZrI00HePBpp4m")).redirectToCheckout({items:[t],successUrl:"https://www.mindfulness.one/success/",cancelUrl:"https://www.mindfulness.one/#donate"}).then((function(t){}))}function z(t,e,n){let o,{useHash:r=!1}=e,s="",i=!1,c=!1,a="",u=!1,l="#donate"===window.location.hash&&r;function d(t){n(3,c=t)}let f,m;return t.$set=t=>{"useHash"in t&&n(15,r=t.useHash)},t.$$.update=()=>{1&t.$$.dirty&&n(16,f=parseInt(s,10)),65545&t.$$.dirty&&(s?s.match(/^[0-9]*$/)?parseInt(s,10)<1?(n(5,u=!0),n(4,a="Please input whole number bigger than zero.")):(n(5,u=!1),n(4,a="Your card will be charged "+f+".00 CAD"+(c?" and then billed "+f+".00 CAD each month":"")+".")):(n(5,u=!0),n(4,a="Please input whole number bigger than zero.")):(n(5,u=!1),n(4,a="Please write number into the box."))),196608&t.$$.dirty&&n(17,m=5!==f&&10!==f&&20!==f&&100!==f||m)},[s,o,i,c,a,u,l,async function(){window.location.hash="#donate",n(6,l=!0),await(_(),j),o.focus()},function(){window.location.hash="",n(6,l=!1)},function(){n(17,m=!0)},d,async function(){c?await W({plan:"plan_H1joqlfPdhtEeb",quantity:f}):await W({sku:"sku_H1jmGgXLYfix4y",quantity:f})},function(){n(2,i=!0)},function(){n(2,i=!1)},function(){o.focus()},r,f,m,function(t){n(17,m=!1),n(0,s=t)},function(){n(17,m=!0),o.focus()},function(){s=this.value,n(0,s)},function(t){g[t?"unshift":"push"](()=>{n(1,o=t)})},()=>d(!1),()=>d(!0)]}class B extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),q(this,t,z,T,s,{useHash:15})}}new B({target:document.querySelector("#donate-button-menu")}),new B({target:document.querySelector("#donate-button-footer"),props:{useHash:!0}})}();
//# sourceMappingURL=bundle.js.map
