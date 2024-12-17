import{j as k}from"./jsx-runtime.qnxbK-qf.js";import{a as xt,r as wt}from"./index.CQPPKyn2.js";import{m as V}from"./proxy.CppYX_UJ.js";function _t(F){return F&&F.__esModule&&Object.prototype.hasOwnProperty.call(F,"default")?F.default:F}const jt={src:"/_astro/dashboard.CPsU-PuY.gif",width:1910,height:913,format:"gif"};var J={exports:{}},Et=J.exports,pt;function Ot(){return pt||(pt=1,function(F,rt){(function(nt,X){F.exports=X(xt())})(typeof self<"u"?self:Et,nt=>(()=>{var X={7403:(e,o,t)=>{t.d(o,{default:()=>U});var r=t(4087),s=t.n(r);const a=function(_){return new RegExp(/<[a-z][\s\S]*>/i).test(_)},n=function(_,h){return Math.floor(Math.random()*(h-_+1))+_};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",f="CALL_FUNCTION",y="ADD_HTML_TAG_ELEMENT",v="CHANGE_DELETE_SPEED",g="CHANGE_DELAY",x="CHANGE_CURSOR",E="PASTE_STRING",A="HTML_TAG";function O(_){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},O(_)}function m(_,h){var T=Object.keys(_);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(_);h&&(j=j.filter(function(Q){return Object.getOwnPropertyDescriptor(_,Q).enumerable})),T.push.apply(T,j)}return T}function w(_){for(var h=1;h<arguments.length;h++){var T=arguments[h]!=null?arguments[h]:{};h%2?m(Object(T),!0).forEach(function(j){S(_,j,T[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(T)):m(Object(T)).forEach(function(j){Object.defineProperty(_,j,Object.getOwnPropertyDescriptor(T,j))})}return _}function N(_){return function(h){if(Array.isArray(h))return C(h)}(_)||function(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}(_)||function(h,T){if(h){if(typeof h=="string")return C(h,T);var j=Object.prototype.toString.call(h).slice(8,-1);return j==="Object"&&h.constructor&&(j=h.constructor.name),j==="Map"||j==="Set"?Array.from(h):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?C(h,T):void 0}}(_)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function C(_,h){(h==null||h>_.length)&&(h=_.length);for(var T=0,j=new Array(h);T<h;T++)j[T]=_[T];return j}function P(_,h){for(var T=0;T<h.length;T++){var j=h[T];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(_,H(j.key),j)}}function S(_,h,T){return(h=H(h))in _?Object.defineProperty(_,h,{value:T,enumerable:!0,configurable:!0,writable:!0}):_[h]=T,_}function H(_){var h=function(T,j){if(O(T)!=="object"||T===null)return T;var Q=T[Symbol.toPrimitive];if(Q!==void 0){var i=Q.call(T,"string");if(O(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}(_);return O(h)==="symbol"?h:String(h)}const U=function(){function _(j,Q){var i=this;if(function(b,D){if(!(b instanceof D))throw new TypeError("Cannot call a class as a function")}(this,_),S(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),S(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),S(this,"setupWrapperElement",function(){i.state.elements.container&&(i.state.elements.wrapper.className=i.options.wrapperClassName,i.state.elements.cursor.className=i.options.cursorClassName,i.state.elements.cursor.innerHTML=i.options.cursor,i.state.elements.container.innerHTML="",i.state.elements.container.appendChild(i.state.elements.wrapper),i.state.elements.container.appendChild(i.state.elements.cursor))}),S(this,"start",function(){return i.state.eventLoopPaused=!1,i.runEventLoop(),i}),S(this,"pause",function(){return i.state.eventLoopPaused=!0,i}),S(this,"stop",function(){return i.state.eventLoop&&((0,r.cancel)(i.state.eventLoop),i.state.eventLoop=null),i}),S(this,"pauseFor",function(b){return i.addEventToQueue(p,{ms:b}),i}),S(this,"typeOutAllStrings",function(){return typeof i.options.strings=="string"?(i.typeString(i.options.strings).pauseFor(i.options.pauseFor),i):(i.options.strings.forEach(function(b){i.typeString(b).pauseFor(i.options.pauseFor).deleteAll(i.options.deleteSpeed)}),i)}),S(this,"typeString",function(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(b))return i.typeOutHTMLString(b,D);if(b){var L=(i.options||{}).stringSplitter,R=typeof L=="function"?L(b):b.split("");i.typeCharacters(R,D)}return i}),S(this,"pasteString",function(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(b)?i.typeOutHTMLString(b,D,!0):(b&&i.addEventToQueue(E,{character:b,node:D}),i)}),S(this,"typeOutHTMLString",function(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,L=arguments.length>2?arguments[2]:void 0,R=function($){var W=document.createElement("div");return W.innerHTML=$,W.childNodes}(b);if(R.length>0)for(var M=0;M<R.length;M++){var I=R[M],B=I.innerHTML;I&&I.nodeType!==3?(I.innerHTML="",i.addEventToQueue(y,{node:I,parentNode:D}),L?i.pasteString(B,I):i.typeString(B,I)):I.textContent&&(L?i.pasteString(I.textContent,D):i.typeString(I.textContent,D))}return i}),S(this,"deleteAll",function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return i.addEventToQueue(l,{speed:b}),i}),S(this,"changeDeleteSpeed",function(b){if(!b)throw new Error("Must provide new delete speed");return i.addEventToQueue(v,{speed:b}),i}),S(this,"changeDelay",function(b){if(!b)throw new Error("Must provide new delay");return i.addEventToQueue(g,{delay:b}),i}),S(this,"changeCursor",function(b){if(!b)throw new Error("Must provide new cursor");return i.addEventToQueue(x,{cursor:b}),i}),S(this,"deleteChars",function(b){if(!b)throw new Error("Must provide amount of characters to delete");for(var D=0;D<b;D++)i.addEventToQueue(c);return i}),S(this,"callFunction",function(b,D){if(!b||typeof b!="function")throw new Error("Callback must be a function");return i.addEventToQueue(f,{cb:b,thisArg:D}),i}),S(this,"typeCharacters",function(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(L){i.addEventToQueue(u,{character:L,node:D})}),i}),S(this,"removeCharacters",function(b){if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(){i.addEventToQueue(c)}),i}),S(this,"addEventToQueue",function(b,D){var L=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.addEventToStateProperty(b,D,L,"eventQueue")}),S(this,"addReverseCalledEvent",function(b,D){var L=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.options.loop?i.addEventToStateProperty(b,D,L,"reverseCalledEvents"):i}),S(this,"addEventToStateProperty",function(b,D){var L=arguments.length>2&&arguments[2]!==void 0&&arguments[2],R=arguments.length>3?arguments[3]:void 0,M={eventName:b,eventArgs:D||{}};return i.state[R]=L?[M].concat(N(i.state[R])):[].concat(N(i.state[R]),[M]),i}),S(this,"runEventLoop",function(){i.state.lastFrameTime||(i.state.lastFrameTime=Date.now());var b=Date.now(),D=b-i.state.lastFrameTime;if(!i.state.eventQueue.length){if(!i.options.loop)return;i.state.eventQueue=N(i.state.calledEvents),i.state.calledEvents=[],i.options=w({},i.state.initialOptions)}if(i.state.eventLoop=s()(i.runEventLoop),!i.state.eventLoopPaused){if(i.state.pauseUntil){if(b<i.state.pauseUntil)return;i.state.pauseUntil=null}var L,R=N(i.state.eventQueue),M=R.shift();if(!(D<=(L=M.eventName===d||M.eventName===c?i.options.deleteSpeed==="natural"?n(40,80):i.options.deleteSpeed:i.options.delay==="natural"?n(120,160):i.options.delay))){var I=M.eventName,B=M.eventArgs;switch(i.logInDevMode({currentEvent:M,state:i.state,delay:L}),I){case E:case u:var $=B.character,W=B.node,it=document.createTextNode($),q=it;i.options.onCreateTextNode&&typeof i.options.onCreateTextNode=="function"&&(q=i.options.onCreateTextNode($,it)),q&&(W?W.appendChild(q):i.state.elements.wrapper.appendChild(q)),i.state.visibleNodes=[].concat(N(i.state.visibleNodes),[{type:"TEXT_NODE",character:$,node:q}]);break;case c:R.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case p:var dt=M.eventArgs.ms;i.state.pauseUntil=Date.now()+parseInt(dt);break;case f:var ut=M.eventArgs,ft=ut.cb,vt=ut.thisArg;ft.call(vt,{elements:i.state.elements});break;case y:var ct=M.eventArgs,K=ct.node,Z=ct.parentNode;Z?Z.appendChild(K):i.state.elements.wrapper.appendChild(K),i.state.visibleNodes=[].concat(N(i.state.visibleNodes),[{type:A,node:K,parentNode:Z||i.state.elements.wrapper}]);break;case l:var ht=i.state.visibleNodes,tt=B.speed,G=[];tt&&G.push({eventName:v,eventArgs:{speed:tt,temp:!0}});for(var lt=0,yt=ht.length;lt<yt;lt++)G.push({eventName:d,eventArgs:{removingCharacterNode:!1}});tt&&G.push({eventName:v,eventArgs:{speed:i.options.deleteSpeed,temp:!0}}),R.unshift.apply(R,G);break;case d:var mt=M.eventArgs.removingCharacterNode;if(i.state.visibleNodes.length){var et=i.state.visibleNodes.pop(),bt=et.type,Y=et.node,gt=et.character;i.options.onRemoveNode&&typeof i.options.onRemoveNode=="function"&&i.options.onRemoveNode({node:Y,character:gt}),Y&&Y.parentNode.removeChild(Y),bt===A&&mt&&R.unshift({eventName:d,eventArgs:{}})}break;case v:i.options.deleteSpeed=M.eventArgs.speed;break;case g:i.options.delay=M.eventArgs.delay;break;case x:i.options.cursor=M.eventArgs.cursor,i.state.elements.cursor.innerHTML=M.eventArgs.cursor}i.options.loop&&(M.eventName===d||M.eventArgs&&M.eventArgs.temp||(i.state.calledEvents=[].concat(N(i.state.calledEvents),[M]))),i.state.eventQueue=R,i.state.lastFrameTime=b}}}),j)if(typeof j=="string"){var st=document.querySelector(j);if(!st)throw new Error("Could not find container element");this.state.elements.container=st}else this.state.elements.container=j;Q&&(this.options=w(w({},this.options),Q)),this.state.initialOptions=w({},this.options),this.init()}var h,T;return h=_,(T=[{key:"init",value:function(){var j,Q;this.setupWrapperElement(),this.addEventToQueue(x,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Q=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(Q),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&P(h.prototype,T),Object.defineProperty(h,"prototype",{writable:!1}),_}()},8552:(e,o,t)=>{var r=t(852)(t(5639),"DataView");e.exports=r},1989:(e,o,t)=>{var r=t(1789),s=t(401),a=t(7667),n=t(1327),u=t(1866);function c(l){var d=-1,p=l==null?0:l.length;for(this.clear();++d<p;){var f=l[d];this.set(f[0],f[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},8407:(e,o,t)=>{var r=t(7040),s=t(4125),a=t(2117),n=t(7518),u=t(4705);function c(l){var d=-1,p=l==null?0:l.length;for(this.clear();++d<p;){var f=l[d];this.set(f[0],f[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},7071:(e,o,t)=>{var r=t(852)(t(5639),"Map");e.exports=r},3369:(e,o,t)=>{var r=t(4785),s=t(1285),a=t(6e3),n=t(9916),u=t(5265);function c(l){var d=-1,p=l==null?0:l.length;for(this.clear();++d<p;){var f=l[d];this.set(f[0],f[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},3818:(e,o,t)=>{var r=t(852)(t(5639),"Promise");e.exports=r},8525:(e,o,t)=>{var r=t(852)(t(5639),"Set");e.exports=r},8668:(e,o,t)=>{var r=t(3369),s=t(619),a=t(2385);function n(u){var c=-1,l=u==null?0:u.length;for(this.__data__=new r;++c<l;)this.add(u[c])}n.prototype.add=n.prototype.push=s,n.prototype.has=a,e.exports=n},6384:(e,o,t)=>{var r=t(8407),s=t(7465),a=t(3779),n=t(7599),u=t(4758),c=t(4309);function l(d){var p=this.__data__=new r(d);this.size=p.size}l.prototype.clear=s,l.prototype.delete=a,l.prototype.get=n,l.prototype.has=u,l.prototype.set=c,e.exports=l},2705:(e,o,t)=>{var r=t(5639).Symbol;e.exports=r},1149:(e,o,t)=>{var r=t(5639).Uint8Array;e.exports=r},577:(e,o,t)=>{var r=t(852)(t(5639),"WeakMap");e.exports=r},4963:e=>{e.exports=function(o,t){for(var r=-1,s=o==null?0:o.length,a=0,n=[];++r<s;){var u=o[r];t(u,r,o)&&(n[a++]=u)}return n}},4636:(e,o,t)=>{var r=t(2545),s=t(5694),a=t(1469),n=t(4144),u=t(5776),c=t(6719),l=Object.prototype.hasOwnProperty;e.exports=function(d,p){var f=a(d),y=!f&&s(d),v=!f&&!y&&n(d),g=!f&&!y&&!v&&c(d),x=f||y||v||g,E=x?r(d.length,String):[],A=E.length;for(var O in d)!p&&!l.call(d,O)||x&&(O=="length"||v&&(O=="offset"||O=="parent")||g&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||u(O,A))||E.push(O);return E}},2488:e=>{e.exports=function(o,t){for(var r=-1,s=t.length,a=o.length;++r<s;)o[a+r]=t[r];return o}},2908:e=>{e.exports=function(o,t){for(var r=-1,s=o==null?0:o.length;++r<s;)if(t(o[r],r,o))return!0;return!1}},8470:(e,o,t)=>{var r=t(7813);e.exports=function(s,a){for(var n=s.length;n--;)if(r(s[n][0],a))return n;return-1}},8866:(e,o,t)=>{var r=t(2488),s=t(1469);e.exports=function(a,n,u){var c=n(a);return s(a)?c:r(c,u(a))}},4239:(e,o,t)=>{var r=t(2705),s=t(9607),a=t(2333),n=r?r.toStringTag:void 0;e.exports=function(u){return u==null?u===void 0?"[object Undefined]":"[object Null]":n&&n in Object(u)?s(u):a(u)}},9454:(e,o,t)=>{var r=t(4239),s=t(7005);e.exports=function(a){return s(a)&&r(a)=="[object Arguments]"}},939:(e,o,t)=>{var r=t(2492),s=t(7005);e.exports=function a(n,u,c,l,d){return n===u||(n==null||u==null||!s(n)&&!s(u)?n!=n&&u!=u:r(n,u,c,l,a,d))}},2492:(e,o,t)=>{var r=t(6384),s=t(7114),a=t(8351),n=t(6096),u=t(4160),c=t(1469),l=t(4144),d=t(6719),p="[object Arguments]",f="[object Array]",y="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(g,x,E,A,O,m){var w=c(g),N=c(x),C=w?f:u(g),P=N?f:u(x),S=(C=C==p?y:C)==y,H=(P=P==p?y:P)==y,U=C==P;if(U&&l(g)){if(!l(x))return!1;w=!0,S=!1}if(U&&!S)return m||(m=new r),w||d(g)?s(g,x,E,A,O,m):a(g,x,C,E,A,O,m);if(!(1&E)){var _=S&&v.call(g,"__wrapped__"),h=H&&v.call(x,"__wrapped__");if(_||h){var T=_?g.value():g,j=h?x.value():x;return m||(m=new r),O(T,j,E,A,m)}}return!!U&&(m||(m=new r),n(g,x,E,A,O,m))}},8458:(e,o,t)=>{var r=t(3560),s=t(5346),a=t(3218),n=t(346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,d=c.toString,p=l.hasOwnProperty,f=RegExp("^"+d.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(y){return!(!a(y)||s(y))&&(r(y)?f:u).test(n(y))}},8749:(e,o,t)=>{var r=t(4239),s=t(1780),a=t(7005),n={};n["[object Float32Array]"]=n["[object Float64Array]"]=n["[object Int8Array]"]=n["[object Int16Array]"]=n["[object Int32Array]"]=n["[object Uint8Array]"]=n["[object Uint8ClampedArray]"]=n["[object Uint16Array]"]=n["[object Uint32Array]"]=!0,n["[object Arguments]"]=n["[object Array]"]=n["[object ArrayBuffer]"]=n["[object Boolean]"]=n["[object DataView]"]=n["[object Date]"]=n["[object Error]"]=n["[object Function]"]=n["[object Map]"]=n["[object Number]"]=n["[object Object]"]=n["[object RegExp]"]=n["[object Set]"]=n["[object String]"]=n["[object WeakMap]"]=!1,e.exports=function(u){return a(u)&&s(u.length)&&!!n[r(u)]}},280:(e,o,t)=>{var r=t(5726),s=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(n){if(!r(n))return s(n);var u=[];for(var c in Object(n))a.call(n,c)&&c!="constructor"&&u.push(c);return u}},2545:e=>{e.exports=function(o,t){for(var r=-1,s=Array(o);++r<o;)s[r]=t(r);return s}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var r=t(5639)["__core-js_shared__"];e.exports=r},7114:(e,o,t)=>{var r=t(8668),s=t(2908),a=t(4757);e.exports=function(n,u,c,l,d,p){var f=1&c,y=n.length,v=u.length;if(y!=v&&!(f&&v>y))return!1;var g=p.get(n),x=p.get(u);if(g&&x)return g==u&&x==n;var E=-1,A=!0,O=2&c?new r:void 0;for(p.set(n,u),p.set(u,n);++E<y;){var m=n[E],w=u[E];if(l)var N=f?l(w,m,E,u,n,p):l(m,w,E,n,u,p);if(N!==void 0){if(N)continue;A=!1;break}if(O){if(!s(u,function(C,P){if(!a(O,P)&&(m===C||d(m,C,c,l,p)))return O.push(P)})){A=!1;break}}else if(m!==w&&!d(m,w,c,l,p)){A=!1;break}}return p.delete(n),p.delete(u),A}},8351:(e,o,t)=>{var r=t(2705),s=t(1149),a=t(7813),n=t(7114),u=t(8776),c=t(1814),l=r?r.prototype:void 0,d=l?l.valueOf:void 0;e.exports=function(p,f,y,v,g,x,E){switch(y){case"[object DataView]":if(p.byteLength!=f.byteLength||p.byteOffset!=f.byteOffset)return!1;p=p.buffer,f=f.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=f.byteLength||!x(new s(p),new s(f)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+p,+f);case"[object Error]":return p.name==f.name&&p.message==f.message;case"[object RegExp]":case"[object String]":return p==f+"";case"[object Map]":var A=u;case"[object Set]":var O=1&v;if(A||(A=c),p.size!=f.size&&!O)return!1;var m=E.get(p);if(m)return m==f;v|=2,E.set(p,f);var w=n(A(p),A(f),v,g,x,E);return E.delete(p),w;case"[object Symbol]":if(d)return d.call(p)==d.call(f)}return!1}},6096:(e,o,t)=>{var r=t(8234),s=Object.prototype.hasOwnProperty;e.exports=function(a,n,u,c,l,d){var p=1&u,f=r(a),y=f.length;if(y!=r(n).length&&!p)return!1;for(var v=y;v--;){var g=f[v];if(!(p?g in n:s.call(n,g)))return!1}var x=d.get(a),E=d.get(n);if(x&&E)return x==n&&E==a;var A=!0;d.set(a,n),d.set(n,a);for(var O=p;++v<y;){var m=a[g=f[v]],w=n[g];if(c)var N=p?c(w,m,g,n,a,d):c(m,w,g,a,n,d);if(!(N===void 0?m===w||l(m,w,u,c,d):N)){A=!1;break}O||(O=g=="constructor")}if(A&&!O){var C=a.constructor,P=n.constructor;C==P||!("constructor"in a)||!("constructor"in n)||typeof C=="function"&&C instanceof C&&typeof P=="function"&&P instanceof P||(A=!1)}return d.delete(a),d.delete(n),A}},1957:(e,o,t)=>{var r=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=r},8234:(e,o,t)=>{var r=t(8866),s=t(9551),a=t(3674);e.exports=function(n){return r(n,a,s)}},5050:(e,o,t)=>{var r=t(7019);e.exports=function(s,a){var n=s.__data__;return r(a)?n[typeof a=="string"?"string":"hash"]:n.map}},852:(e,o,t)=>{var r=t(8458),s=t(7801);e.exports=function(a,n){var u=s(a,n);return r(u)?u:void 0}},9607:(e,o,t)=>{var r=t(2705),s=Object.prototype,a=s.hasOwnProperty,n=s.toString,u=r?r.toStringTag:void 0;e.exports=function(c){var l=a.call(c,u),d=c[u];try{c[u]=void 0;var p=!0}catch{}var f=n.call(c);return p&&(l?c[u]=d:delete c[u]),f}},9551:(e,o,t)=>{var r=t(4963),s=t(479),a=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols,u=n?function(c){return c==null?[]:(c=Object(c),r(n(c),function(l){return a.call(c,l)}))}:s;e.exports=u},4160:(e,o,t)=>{var r=t(8552),s=t(7071),a=t(3818),n=t(8525),u=t(577),c=t(4239),l=t(346),d="[object Map]",p="[object Promise]",f="[object Set]",y="[object WeakMap]",v="[object DataView]",g=l(r),x=l(s),E=l(a),A=l(n),O=l(u),m=c;(r&&m(new r(new ArrayBuffer(1)))!=v||s&&m(new s)!=d||a&&m(a.resolve())!=p||n&&m(new n)!=f||u&&m(new u)!=y)&&(m=function(w){var N=c(w),C=N=="[object Object]"?w.constructor:void 0,P=C?l(C):"";if(P)switch(P){case g:return v;case x:return d;case E:return p;case A:return f;case O:return y}return N}),e.exports=m},7801:e=>{e.exports=function(o,t){return o?.[t]}},1789:(e,o,t)=>{var r=t(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var r=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var n=this.__data__;if(r){var u=n[a];return u==="__lodash_hash_undefined__"?void 0:u}return s.call(n,a)?n[a]:void 0}},1327:(e,o,t)=>{var r=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var n=this.__data__;return r?n[a]!==void 0:s.call(n,a)}},1866:(e,o,t)=>{var r=t(4536);e.exports=function(s,a){var n=this.__data__;return this.size+=this.has(s)?0:1,n[s]=r&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,r){var s=typeof t;return!!(r=r??9007199254740991)&&(s=="number"||s!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<r}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var r,s=t(4429),a=(r=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(n){return!!a&&a in n}},5726:e=>{var o=Object.prototype;e.exports=function(t){var r=t&&t.constructor;return t===(typeof r=="function"&&r.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var r=t(8470),s=Array.prototype.splice;e.exports=function(a){var n=this.__data__,u=r(n,a);return!(u<0||(u==n.length-1?n.pop():s.call(n,u,1),--this.size,0))}},2117:(e,o,t)=>{var r=t(8470);e.exports=function(s){var a=this.__data__,n=r(a,s);return n<0?void 0:a[n][1]}},7518:(e,o,t)=>{var r=t(8470);e.exports=function(s){return r(this.__data__,s)>-1}},4705:(e,o,t)=>{var r=t(8470);e.exports=function(s,a){var n=this.__data__,u=r(n,s);return u<0?(++this.size,n.push([s,a])):n[u][1]=a,this}},4785:(e,o,t)=>{var r=t(1989),s=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||s),string:new r}}},1285:(e,o,t)=>{var r=t(5050);e.exports=function(s){var a=r(this,s).delete(s);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var r=t(5050);e.exports=function(s){return r(this,s).get(s)}},9916:(e,o,t)=>{var r=t(5050);e.exports=function(s){return r(this,s).has(s)}},5265:(e,o,t)=>{var r=t(5050);e.exports=function(s,a){var n=r(this,s),u=n.size;return n.set(s,a),this.size+=n.size==u?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(s,a){r[++t]=[a,s]}),r}},4536:(e,o,t)=>{var r=t(852)(Object,"create");e.exports=r},6916:(e,o,t)=>{var r=t(5569)(Object.keys,Object);e.exports=r},1167:(e,o,t)=>{e=t.nmd(e);var r=t(1957),s=o&&!o.nodeType&&o,a=s&&e&&!e.nodeType&&e,n=a&&a.exports===s&&r.process,u=function(){try{return a&&a.require&&a.require("util").types||n&&n.binding&&n.binding("util")}catch{}}();e.exports=u},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(r){return o(t(r))}}},5639:(e,o,t)=>{var r=t(1957),s=typeof self=="object"&&self&&self.Object===Object&&self,a=r||s||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(s){r[++t]=s}),r}},7465:(e,o,t)=>{var r=t(8407);e.exports=function(){this.__data__=new r,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,r=t.delete(o);return this.size=t.size,r}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var r=t(8407),s=t(7071),a=t(3369);e.exports=function(n,u){var c=this.__data__;if(c instanceof r){var l=c.__data__;if(!s||l.length<199)return l.push([n,u]),this.size=++c.size,this;c=this.__data__=new a(l)}return c.set(n,u),this.size=c.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var r=t(9454),s=t(7005),a=Object.prototype,n=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(l){return s(l)&&n.call(l,"callee")&&!u.call(l,"callee")};e.exports=c},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var r=t(3560),s=t(1780);e.exports=function(a){return a!=null&&s(a.length)&&!r(a)}},4144:(e,o,t)=>{e=t.nmd(e);var r=t(5639),s=t(5062),a=o&&!o.nodeType&&o,n=a&&e&&!e.nodeType&&e,u=n&&n.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||s;e.exports=c},8446:(e,o,t)=>{var r=t(939);e.exports=function(s,a){return r(s,a)}},3560:(e,o,t)=>{var r=t(4239),s=t(3218);e.exports=function(a){if(!s(a))return!1;var n=r(a);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var r=t(8749),s=t(1717),a=t(1167),n=a&&a.isTypedArray,u=n?s(n):r;e.exports=u},3674:(e,o,t)=>{var r=t(4636),s=t(280),a=t(8612);e.exports=function(n){return a(n)?r(n):s(n)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,r,s,a,n;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,s=(o=function(){var u;return 1e9*(u=t())[0]+u[1]})(),n=1e9*process.uptime(),a=s-n):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var r=t(75),s=typeof window>"u"?t.g:window,a=["moz","webkit"],n="AnimationFrame",u=s["request"+n],c=s["cancel"+n]||s["cancelRequest"+n],l=0;!u&&l<a.length;l++)u=s[a[l]+"Request"+n],c=s[a[l]+"Cancel"+n]||s[a[l]+"CancelRequest"+n];if(!u||!c){var d=0,p=0,f=[];u=function(y){if(f.length===0){var v=r(),g=Math.max(0,16.666666666666668-(v-d));d=g+v,setTimeout(function(){var x=f.slice(0);f.length=0;for(var E=0;E<x.length;E++)if(!x[E].cancelled)try{x[E].callback(d)}catch(A){setTimeout(function(){throw A},0)}},Math.round(g))}return f.push({handle:++p,callback:y,cancelled:!1}),p},c=function(y){for(var v=0;v<f.length;v++)f[v].handle===y&&(f[v].cancelled=!0)}}e.exports=function(y){return u.call(s,y)},e.exports.cancel=function(){c.apply(s,arguments)},e.exports.polyfill=function(y){y||(y=s),y.requestAnimationFrame=u,y.cancelAnimationFrame=c}},8156:e=>{e.exports=nt}},ot={};function z(e){var o=ot[e];if(o!==void 0)return o.exports;var t=ot[e]={id:e,loaded:!1,exports:{}};return X[e].call(t.exports,t,t.exports,z),t.loaded=!0,t.exports}z.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return z.d(o,{a:o}),o},z.d=(e,o)=>{for(var t in o)z.o(o,t)&&!z.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},z.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),z.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),z.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var at={};return(()=>{z.d(at,{default:()=>f});var e=z(8156),o=z.n(e),t=z(7403),r=z(8446),s=z.n(r);function a(y){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},a(y)}function n(y,v){for(var g=0;g<v.length;g++){var x=v[g];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(y,d(x.key),x)}}function u(y,v){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,x){return g.__proto__=x,g},u(y,v)}function c(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function l(y){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},l(y)}function d(y){var v=function(g,x){if(a(g)!=="object"||g===null)return g;var E=g[Symbol.toPrimitive];if(E!==void 0){var A=E.call(g,"string");if(a(A)!=="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(y);return a(v)==="symbol"?v:String(v)}var p=function(y){(function(m,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(w&&w.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),w&&u(m,w)})(O,y);var v,g,x,E,A=(x=O,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var m,w=l(x);if(E){var N=l(this).constructor;m=Reflect.construct(w,arguments,N)}else m=w.apply(this,arguments);return function(C,P){if(P&&(a(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(C)}(this,m)});function O(){var m,w,N,C;(function(U,_){if(!(U instanceof _))throw new TypeError("Cannot call a class as a function")})(this,O);for(var P=arguments.length,S=new Array(P),H=0;H<P;H++)S[H]=arguments[H];return w=c(m=A.call.apply(A,[this].concat(S))),C={instance:null},(N=d(N="state"))in w?Object.defineProperty(w,N,{value:C,enumerable:!0,configurable:!0,writable:!0}):w[N]=C,m}return v=O,(g=[{key:"componentDidMount",value:function(){var m=this,w=new t.default(this.typewriter,this.props.options);this.setState({instance:w},function(){var N=m.props.onInit;N&&N(w)})}},{key:"componentDidUpdate",value:function(m){s()(this.props.options,m.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var m=this,w=this.props.component;return o().createElement(w,{ref:function(N){return m.typewriter=N},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&n(v.prototype,g),Object.defineProperty(v,"prototype",{writable:!1}),O}(e.Component);p.defaultProps={component:"div"};const f=p})(),at.default})())}(J)),J.exports}var Tt=Ot();const At=_t(Tt),Ct=()=>{const[F,rt]=wt.useState(!1);return k.jsx("section",{className:"w-screen  flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0",id:"home",children:k.jsxs("div",{className:"w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center",children:[k.jsxs(V.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.05},children:[k.jsx("div",{className:"rubik-moonrocks-regular text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4 sm:mt-32 mt-16",children:k.jsx("h1",{children:"non custodial crowdfunding"})}),k.jsx("h1",{className:"rubik-moonrocks-regular mt-2 sm:mt-2 text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-wide text-secondaryColor px-8 sm:px-20 md:px-24 lg:px-24",children:"with Angor"})]}),k.jsx(V.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:k.jsxs("h2",{className:"text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-30 ",children:[k.jsx(At,{options:{strings:["A decentralized crowdfunding protocol built on Bitcoin and Nostr"],autoStart:!0,loop:!0}})," "]})}),k.jsx(V.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},className:"flex justify-center mt-14 mb-40 sm:mb-40",children:k.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[k.jsx("a",{href:"https://hub.angor.io",className:"w-full sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition","aria-label":"Mainnet",children:"Angor Hub"}),k.jsxs("div",{className:"relative    w-52",children:[k.jsxs("button",{onClick:()=>rt(!F),className:"w-full h-12 rounded-xl font-bold text-primaryText border border-solid flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition px-4 relative","aria-expanded":F,"aria-label":"Angor App Dropdown",children:[k.jsx("span",{children:"Angor App"}),k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-5 w-5 absolute right-4 transition-transform ${F?"rotate-180":"rotate-0"}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),F&&k.jsxs(V.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3,ease:"easeOut"},className:"absolute top-full mt-2 left-0 w-full bg-bgDark2 border border-primaryColor rounded-lg shadow-lg z-10 overflow-hidden",children:[k.jsx("a",{href:"https://test.angor.io",className:"block px-4 py-2 text-primaryText hover:bg-bgDark3 transition text-center rounded-t-lg",children:"Testnet"}),k.jsx("a",{href:"#",className:"block px-4 py-2 text-primaryText opacity-50 cursor-not-allowed bg-bgDark2 text-center rounded-b-lg","aria-disabled":"true",children:"Mainnet"}),k.jsx("a",{href:"https://github.com/block-core/angor/releases/download/0.0.75/angor-desktop-0.0.75-win-x64.msi",className:"block px-4 py-2 text-primaryText opacity-50 cursor-not-allowed bg-bgDark2 text-center rounded-b-lg","aria-disabled":"true",children:"Windows (x64, msi)"}),k.jsx("a",{href:"https://github.com/block-core/angor/releases/download/0.0.75/angor-desktop-0.0.75-mac-aarch64.dmg",className:"block px-4 py-2 text-primaryText opacity-50 cursor-not-allowed bg-bgDark2 text-center rounded-b-lg","aria-disabled":"true",children:"Mac (Apple Silicon, dmg)"}),k.jsx("a",{href:"https://github.com/block-core/angor/releases/download/0.0.75/angor-desktop-0.0.75-linux-amd64.AppImage",className:"block px-4 py-2 text-primaryText opacity-50 cursor-not-allowed bg-bgDark2 text-center rounded-b-lg","aria-disabled":"true",children:"Linux (AMD64, AppImage)"})]})]})]})}),k.jsx(V.div,{initial:{opacity:0,y:10,zIndex:20},animate:{opacity:1,y:0,zIndex:20},transition:{duration:.5,delay:.15},children:k.jsx("div",{className:"relative w-screen flex justify-center ",children:k.jsx("img",{src:jt.src,alt:"Dashboard image",className:"w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"})})}),k.jsx("div",{className:"relative w-screen flex justify-center ",children:k.jsx("div",{className:"shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block",children:k.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",className:"bg-bgDark2",children:k.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"shape-fill bg-bgDark1  fill-bgDark1"})})})})]})})};export{Ct as Hero};
