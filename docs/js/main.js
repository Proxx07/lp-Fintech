(()=>{"use strict";var e={114:(e,t,o)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e){return r="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}e=o.hmd(e),function(){var t,n,a,l,i={frameRate:150,animationTime:800,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},c=i,u=!1,s={x:0,y:0},d=!1,m=document.documentElement,f=[],y=/^Mac/.test(navigator.platform),h={37:1,38:1,39:1,40:1};function p(){if(!d&&document.body){d=!0;var e=document.body,o=document.documentElement,r=window.innerHeight,l=e.scrollHeight;if(m=0<=document.compatMode.indexOf("CSS")?o:e,t=e,c.keyboardSupport&&j("keydown",x),top!=self)u=!0;else if(Z&&r<l&&(e.offsetHeight<=r||o.offsetHeight<=r)){var i,s=document.createElement("div");if(s.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(s),a=function(){i=i||setTimeout((function(){s.style.height="0",s.style.height=m.scrollHeight+"px",i=null}),500)},setTimeout(a,10),j("resize",a),(n=new Y(a)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=r){var f=document.createElement("div");f.style.clear="both",e.appendChild(f)}}c.fixedBackground||(e.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}var v=[],b=!1,w=Date.now();function g(e,t,o){if(function(e,t){e=0<e?1:-1,t=0<t?1:-1,s.x===e&&s.y===t||(s.x=e,s.y=t,v=[],w=0)}(t,o),1!=c.accelerationMax){var n=Date.now()-w;if(n<c.accelerationDelta){var r=(1+50/n)/2;1<r&&(r=Math.min(r,c.accelerationMax),t*=r,o*=r)}w=Date.now()}if(v.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!b){var a=$(),l=e===a||e===document.body;null==e.$scrollBehavior&&function(e){var t=A(e);if(null==M[t]){var o=getComputedStyle(e,"")["scroll-behavior"];M[t]="smooth"==o}return M[t]}(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto"),P((function n(r){for(var a=Date.now(),i=0,u=0,s=0;s<v.length;s++){var d=v[s],m=a-d.start,f=m>=c.animationTime,y=f?1:m/c.animationTime;c.pulseAlgorithm&&(y=U(y));var h=d.x*y-d.lastX|0,p=d.y*y-d.lastY|0;i+=h,u+=p,d.lastX+=h,d.lastY+=p,f&&(v.splice(s,1),s--)}l?window.scrollBy(i,u):(i&&(e.scrollLeft+=i),u&&(e.scrollTop+=u)),t||o||(v=[]),v.length?P(n,e,1e3/c.frameRate+1):(b=!1,null!=e.$scrollBehavior&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))}),e,0),b=!0}}function S(e){d||p();var o=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(N(t,"embed")||N(o,"embed")&&/\.pdf/i.test(o.src)||N(t,"object")||o.shadowRoot)return!0;var n=-e.wheelDeltaX||e.deltaX||0,r=-e.wheelDeltaY||e.deltaY||0;y&&(e.wheelDeltaX&&X(e.wheelDeltaX,120)&&(n=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&X(e.wheelDeltaY,120)&&(r=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),n||r||(r=-e.wheelDelta||0),1===e.deltaMode&&(n*=40,r*=40);var a=B(o);return a?!!function(e){if(e){f.length||(f=[e,e,e]),e=Math.abs(e),f.push(e),f.shift(),clearTimeout(l),l=setTimeout((function(){try{localStorage.SS_deltaBuffer=f.join(",")}catch(e){}}),1e3);var t=120<e&&I(e),o=!I(120)&&!I(100)&&!t;return e<50||o}}(r)||(1.2<Math.abs(n)&&(n*=c.stepSize/120),1.2<Math.abs(r)&&(r*=c.stepSize/120),g(a,n,r),e.preventDefault(),void D()):!u||!W||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function x(e){var o=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&32!==e.keyCode;document.body.contains(t)||(t=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(o.nodeName)||N(o,"input")&&!r.test(o.type)||N(t,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||o.isContentEditable||n)return!0;if((N(o,"button")||N(o,"input")&&r.test(o.type))&&32===e.keyCode)return!0;if(N(o,"input")&&"radio"==o.type&&h[e.keyCode])return!0;var a=0,l=0,i=B(t);if(!i)return!u||!W||parent.keydown(e);var s=i.clientHeight;switch(i==document.body&&(s=window.innerHeight),e.keyCode){case 38:l=-c.arrowScroll;break;case 40:l=c.arrowScroll;break;case 32:l=-(e.shiftKey?1:-1)*s*.9;break;case 33:l=.9*-s;break;case 34:l=.9*s;break;case 36:i==document.body&&document.scrollingElement&&(i=document.scrollingElement),l=-i.scrollTop;break;case 35:var d=i.scrollHeight-i.scrollTop-s;l=0<d?10+d:0;break;case 37:a=-c.arrowScroll;break;case 39:a=c.arrowScroll;break;default:return!0}g(i,a,l),e.preventDefault(),D()}function k(e){t=e.target}var E,L,A=(E=0,function(e){return e.uniqueID||(e.uniqueID=E++)}),T={},C={},M={};function D(){clearTimeout(L),L=setInterval((function(){T=C=M={}}),1e3)}function q(e,t,o){for(var n=o?T:C,r=e.length;r--;)n[A(e[r])]=t;return t}function B(e){var t=[],o=document.body,n=m.scrollHeight;do{var r=C[A(e)];if(r)return q(t,r);if(t.push(e),n===e.scrollHeight){var a=z(m)&&z(o)||O(m);if(u&&_(m)||!u&&a)return q(t,$())}else if(_(e)&&O(e))return q(t,e)}while(e=e.parentElement)}function _(e){return e.clientHeight+10<e.scrollHeight}function z(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function O(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function j(e,t,o){window.addEventListener(e,t,o||!1)}function H(e,t,o){window.removeEventListener(e,t,o||!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{f=localStorage.SS_deltaBuffer.split(",")}catch(S){}function X(e,t){return Math.floor(e/t)==e/t}function I(e){return X(f[0],e)&&X(f[1],e)&&X(f[2],e)}var K,P=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},Y=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,$=(K=document.scrollingElement,function(){if(!K){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),K=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return K});function R(e){var t;return((e*=c.pulseScale)<1?e-(1-Math.exp(-e)):(e-=1,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*c.pulseNormalize}function U(e){return 1<=e?1:e<=0?0:(1==c.pulseNormalize&&(c.pulseNormalize/=R(1)),R(e))}var V=window.navigator.userAgent,F=/Edge/.test(V),W=/chrome/i.test(V)&&!F,G=/safari/i.test(V)&&!F,J=/mobile/i.test(V),Q=/Windows NT 6.1/i.test(V)&&/rv:11/i.test(V),Z=G&&(/Version\/8/i.test(V)||/Version\/9/i.test(V)),ee=(W||G||Q)&&!J,te=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){te=!0}}))}catch(S){}var oe=!!te&&{passive:!1},ne="onwheel"in document.createElement("div")?"wheel":"mousewheel";function re(e){for(var t in e)i.hasOwnProperty(t)&&(c[t]=e[t])}ne&&ee&&(j(ne,S,oe),j("mousedown",k),j("load",p)),re.destroy=function(){n&&n.disconnect(),H(ne,S),H("mousedown",k),H("keydown",x),H("resize",a),H("load",p)},window.SmoothScrollOptions&&re(window.SmoothScrollOptions),"function"==typeof define&&o.amdO?define((function(){return re})):"object"==("undefined"==typeof exports?"undefined":r(exports))?e.exports=re:window.SmoothScroll=re}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n](a,a.exports,o),a.loaded=!0,a.exports}o.amdO={},o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),(()=>{o(114);function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,o){if(t){if("string"==typeof t)return e(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,o):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const n={ru:{menu_about:"О нас",menu_services:"Услуги",menu_cases:"Кейсы",menu_contacts:"Контакты",callback_button:"Связаться с нами"},en:{menu_about:"About",menu_services:"Services",menu_cases:"Cases",menu_contacts:"Contacts",callback_button:"Contact us"},uz:{menu_about:"Biz haqimizda",menu_services:"Xizmatlar",menu_cases:"Keyslar",menu_contacts:"Kontaktlar",callback_button:"Bog'lanish"}};var r=document.querySelector(".language");if(r){var a=r.querySelector(".lang-title"),l=r.querySelectorAll(".lang-buttons button"),i=function(){var e=localStorage.getItem("lang")||"ru",o=n[e]?n[e]:n.ru;Object.keys(o).forEach((function(e){var n=t(document.querySelectorAll("[data-ln=".concat(e,"]")));o[e]&&n.length&&n.forEach((function(t){"TEXTAREA"===t.tagName||"INPUT"===t.tagName?t.setAttribute("placeholder",o[e]):t.innerHTML=o[e]}))})),l.forEach((function(t){t.dataset.key===e?(a.textContent=t.textContent,t.classList.add("active")):t.classList.remove("active")}))};document.addEventListener("click",(function(e){e.target.closest(".language")||r.classList.remove("opened")})),a.addEventListener("click",(function(){r.classList.toggle("opened")})),l.forEach((function(e){e.addEventListener("click",(function(){localStorage.setItem("lang",e.dataset.key),i(),r.classList.remove("opened")}))})),"uz"!==localStorage.getItem("lang")&&i()}(function(){var e=document.querySelector(".burger-js"),o=document.querySelector(".burger-content-js"),n=document.querySelector(".burger-footer"),r=t(document.querySelectorAll(".burger-toggle-js"));if(o&&r.length&&e){var a=function(){document.querySelector("html").toggleAttribute("no-scroll"),e.classList.toggle("opened")};if(r.forEach((function(e){e.addEventListener("click",a)})),document.addEventListener("keydown",(function(t){e.classList.contains("opened")&&27===t.keyCode&&a()})),window.innerWidth<1025){var l=document.querySelector(".menu").cloneNode(!0);l.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(){a()}))})),l.classList.add("burger-menu"),o.appendChild(l);var i=document.querySelector(".copyright").cloneNode(!0);n.appendChild(i)}}})();var c=document.querySelector(".language"),u=null==c?void 0:c.querySelector(".dropdown");null==c||c.addEventListener("click",(function(){u.classList.toggle("opened")})),document.querySelector(".decisions").querySelectorAll(".ordered-list").forEach((function(e,t){var o=e.innerText;e.innerText="".concat(t<10?0:"").concat(t+1," ").concat(o)}))})()})();