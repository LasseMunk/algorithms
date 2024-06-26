function rS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var fp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qv={exports:{}},Tu={},Jv={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),oS=Symbol.for("react.portal"),sS=Symbol.for("react.fragment"),aS=Symbol.for("react.strict_mode"),lS=Symbol.for("react.profiler"),uS=Symbol.for("react.provider"),cS=Symbol.for("react.context"),fS=Symbol.for("react.forward_ref"),dS=Symbol.for("react.suspense"),hS=Symbol.for("react.memo"),pS=Symbol.for("react.lazy"),dp=Symbol.iterator;function mS(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var e_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t_=Object.assign,n_={};function us(t,e,n){this.props=t,this.context=e,this.refs=n_,this.updater=n||e_}us.prototype.isReactComponent={};us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i_(){}i_.prototype=us.prototype;function Vd(t,e,n){this.props=t,this.context=e,this.refs=n_,this.updater=n||e_}var Gd=Vd.prototype=new i_;Gd.constructor=Vd;t_(Gd,us.prototype);Gd.isPureReactComponent=!0;var hp=Array.isArray,r_=Object.prototype.hasOwnProperty,Wd={current:null},o_={key:!0,ref:!0,__self:!0,__source:!0};function s_(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)r_.call(e,i)&&!o_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:va,type:t,key:o,ref:s,props:r,_owner:Wd.current}}function gS(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function vS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pp=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vS(""+t.key):e.toString(36)}function Tl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case va:case oS:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ic(s,0):i,hp(r)?(n="",t!=null&&(n=t.replace(pp,"$&/")+"/"),Tl(r,e,n,"",function(u){return u})):r!=null&&(jd(r)&&(r=gS(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(pp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",hp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+ic(o,a);s+=Tl(o,e,n,l,r)}else if(l=mS(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+ic(o,a++),s+=Tl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Na(t,e,n){if(t==null)return t;var i=[],r=0;return Tl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function _S(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Al={transition:null},xS={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Al,ReactCurrentOwner:Wd};function a_(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=us;$e.Fragment=sS;$e.Profiler=lS;$e.PureComponent=Vd;$e.StrictMode=aS;$e.Suspense=dS;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xS;$e.act=a_;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=t_({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)r_.call(e,l)&&!o_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:va,type:t.type,key:r,ref:o,props:i,_owner:s}};$e.createContext=function(t){return t={$$typeof:cS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uS,_context:t},t.Consumer=t};$e.createElement=s_;$e.createFactory=function(t){var e=s_.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:fS,render:t}};$e.isValidElement=jd;$e.lazy=function(t){return{$$typeof:pS,_payload:{_status:-1,_result:t},_init:_S}};$e.memo=function(t,e){return{$$typeof:hS,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};$e.unstable_act=a_;$e.useCallback=function(t,e){return Qt.current.useCallback(t,e)};$e.useContext=function(t){return Qt.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};$e.useEffect=function(t,e){return Qt.current.useEffect(t,e)};$e.useId=function(){return Qt.current.useId()};$e.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return Qt.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};$e.useRef=function(t){return Qt.current.useRef(t)};$e.useState=function(t){return Qt.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return Qt.current.useTransition()};$e.version="18.3.1";Jv.exports=$e;var xe=Jv.exports;const ii=Zv(xe),yS=rS({__proto__:null,default:ii},[xe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=xe,ES=Symbol.for("react.element"),MS=Symbol.for("react.fragment"),wS=Object.prototype.hasOwnProperty,TS=SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AS={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)wS.call(e,i)&&!AS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ES,type:t,key:o,ref:s,props:r,_owner:TS.current}}Tu.Fragment=MS;Tu.jsx=l_;Tu.jsxs=l_;Qv.exports=Tu;var Oe=Qv.exports,Tf={},u_={exports:{}},En={},c_={exports:{}},f_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,J){var A=U.length;U.push(J);e:for(;0<A;){var ue=A-1>>>1,ye=U[ue];if(0<r(ye,J))U[ue]=J,U[A]=ye,A=ue;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var J=U[0],A=U.pop();if(A!==J){U[0]=A;e:for(var ue=0,ye=U.length,M=ye>>>1;ue<M;){var k=2*(ue+1)-1,Z=U[k],te=k+1,ae=U[te];if(0>r(Z,A))te<ye&&0>r(ae,Z)?(U[ue]=ae,U[te]=A,ue=te):(U[ue]=Z,U[k]=A,ue=k);else if(te<ye&&0>r(ae,A))U[ue]=ae,U[te]=A,ue=te;else break e}}return J}function r(U,J){var A=U.sortIndex-J.sortIndex;return A!==0?A:U.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var J=n(u);J!==null;){if(J.callback===null)i(u);else if(J.startTime<=U)i(u),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(u)}}function E(U){if(x=!1,v(U),!g)if(n(l)!==null)g=!0,Y(R);else{var J=n(u);J!==null&&Q(E,J.startTime-U)}}function R(U,J){g=!1,x&&(x=!1,h(I),I=-1),p=!0;var A=d;try{for(v(J),f=n(l);f!==null&&(!(f.expirationTime>J)||U&&!P());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,d=f.priorityLevel;var ye=ue(f.expirationTime<=J);J=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&i(l),v(J)}else i(l);f=n(l)}if(f!==null)var M=!0;else{var k=n(u);k!==null&&Q(E,k.startTime-J),M=!1}return M}finally{f=null,d=A,p=!1}}var y=!1,b=null,I=-1,T=5,S=-1;function P(){return!(t.unstable_now()-S<T)}function O(){if(b!==null){var U=t.unstable_now();S=U;var J=!0;try{J=b(!0,U)}finally{J?H():(y=!1,b=null)}}else y=!1}var H;if(typeof _=="function")H=function(){_(O)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,j=K.port2;K.port1.onmessage=O,H=function(){j.postMessage(null)}}else H=function(){m(O,0)};function Y(U){b=U,y||(y=!0,H())}function Q(U,J){I=m(function(){U(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Y(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var J=3;break;default:J=d}var A=d;d=J;try{return U()}finally{d=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,J){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var A=d;d=U;try{return J()}finally{d=A}},t.unstable_scheduleCallback=function(U,J,A){var ue=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?ue+A:ue):A=ue,U){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=A+ye,U={id:c++,callback:J,priorityLevel:U,startTime:A,expirationTime:ye,sortIndex:-1},A>ue?(U.sortIndex=A,e(u,U),n(l)===null&&U===n(u)&&(x?(h(I),I=-1):x=!0,Q(E,A-ue))):(U.sortIndex=ye,e(l,U),g||p||(g=!0,Y(R))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var J=d;return function(){var A=d;d=J;try{return U.apply(this,arguments)}finally{d=A}}}})(f_);c_.exports=f_;var CS=c_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bS=xe,Sn=CS;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d_=new Set,qs={};function Qr(t,e){Ko(t,e),Ko(t+"Capture",e)}function Ko(t,e){for(qs[t]=e,t=0;t<e.length;t++)d_.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,RS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mp={},gp={};function PS(t){return Af.call(gp,t)?!0:Af.call(mp,t)?!1:RS.test(t)?gp[t]=!0:(mp[t]=!0,!1)}function LS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IS(t,e,n,i){if(e===null||typeof e>"u"||LS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,$d);Bt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,$d);Bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,$d);Bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IS(e,n,r,i)&&(n=null),i||r===null?PS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=bS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),wo=Symbol.for("react.portal"),To=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),h_=Symbol.for("react.provider"),p_=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Rf=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),m_=Symbol.for("react.offscreen"),vp=Symbol.iterator;function vs(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,rc;function Is(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var oc=!1;function sc(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function NS(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=sc(t.type,!1),t;case 11:return t=sc(t.type.render,!1),t;case 1:return t=sc(t.type,!0),t;default:return""}}function Pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case To:return"Fragment";case wo:return"Portal";case Cf:return"Profiler";case Yd:return"StrictMode";case bf:return"Suspense";case Rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case p_:return(t.displayName||"Context")+".Consumer";case h_:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:Pf(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Pf(t(e))}catch{}}return null}function DS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pf(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function US(t){var e=g_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=US(t))}function v_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=g_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lf(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function __(t,e){e=e.checked,e!=null&&qd(t,"checked",e,!1)}function If(t,e){__(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nf(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nf(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ns=Array.isArray;function Fo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Ns(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function x_(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ka,S_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kS=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){kS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function E_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function M_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=E_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var OS=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kf(t,e){if(e){if(OS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zf=null,zo=null,Bo=null;function Ep(t){if(t=ya(t)){if(typeof zf!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Pu(e),zf(t.stateNode,t.type,e))}}function w_(t){zo?Bo?Bo.push(t):Bo=[t]:zo=t}function T_(){if(zo){var t=zo,e=Bo;if(Bo=zo=null,Ep(t),e)for(t=0;t<e.length;t++)Ep(e[t])}}function A_(t,e){return t(e)}function C_(){}var ac=!1;function b_(t,e,n){if(ac)return t(e,n);ac=!0;try{return A_(t,e,n)}finally{ac=!1,(zo!==null||Bo!==null)&&(C_(),T_())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var i=Pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Bf=!1;if(Ai)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{Bf=!1}function FS(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fs=!1,Wl=null,jl=!1,Hf=null,zS={onError:function(t){Fs=!0,Wl=t}};function BS(t,e,n,i,r,o,s,a,l){Fs=!1,Wl=null,FS.apply(zS,arguments)}function HS(t,e,n,i,r,o,s,a,l){if(BS.apply(this,arguments),Fs){if(Fs){var u=Wl;Fs=!1,Wl=null}else throw Error(ce(198));jl||(jl=!0,Hf=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mp(t){if(Jr(t)!==t)throw Error(ce(188))}function VS(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Mp(r),t;if(o===i)return Mp(r),e;o=o.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function P_(t){return t=VS(t),t!==null?L_(t):null}function L_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L_(t);if(e!==null)return e;t=t.sibling}return null}var I_=Sn.unstable_scheduleCallback,wp=Sn.unstable_cancelCallback,GS=Sn.unstable_shouldYield,WS=Sn.unstable_requestPaint,Et=Sn.unstable_now,jS=Sn.unstable_getCurrentPriorityLevel,Jd=Sn.unstable_ImmediatePriority,N_=Sn.unstable_UserBlockingPriority,Xl=Sn.unstable_NormalPriority,XS=Sn.unstable_LowPriority,D_=Sn.unstable_IdlePriority,Au=null,ui=null;function $S(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Au,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:KS,qS=Math.log,YS=Math.LN2;function KS(t){return t>>>=0,t===0?32:31-(qS(t)/YS|0)|0}var Oa=64,Fa=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ds(a):(o&=s,o!==0&&(i=Ds(o)))}else s=n&~r,s!==0?i=Ds(s):o!==0&&(i=Ds(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function ZS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=ZS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U_(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function JS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function k_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var O_,th,F_,z_,B_,Gf=!1,za=[],tr=null,nr=null,ir=null,Zs=new Map,Qs=new Map,$i=[],eE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tp(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function xs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ya(e),e!==null&&th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tE(t,e,n,i,r){switch(e){case"focusin":return tr=xs(tr,t,e,n,i,r),!0;case"dragenter":return nr=xs(nr,t,e,n,i,r),!0;case"mouseover":return ir=xs(ir,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Zs.set(o,xs(Zs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Qs.set(o,xs(Qs.get(o)||null,t,e,n,i,r)),!0}return!1}function H_(t){var e=Fr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=R_(n),e!==null){t.blockedOn=e,B_(t.priority,function(){F_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ff=i,n.target.dispatchEvent(i),Ff=null}else return e=ya(n),e!==null&&th(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){Cl(t)&&n.delete(e)}function nE(){Gf=!1,tr!==null&&Cl(tr)&&(tr=null),nr!==null&&Cl(nr)&&(nr=null),ir!==null&&Cl(ir)&&(ir=null),Zs.forEach(Ap),Qs.forEach(Ap)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Gf||(Gf=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,nE)))}function Js(t){function e(r){return ys(r,t)}if(0<za.length){ys(za[0],t);for(var n=1;n<za.length;n++){var i=za[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&ys(tr,t),nr!==null&&ys(nr,t),ir!==null&&ys(ir,t),Zs.forEach(e),Qs.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)H_(n),n.blockedOn===null&&$i.shift()}var Ho=Ni.ReactCurrentBatchConfig,ql=!0;function iE(t,e,n,i){var r=it,o=Ho.transition;Ho.transition=null;try{it=1,nh(t,e,n,i)}finally{it=r,Ho.transition=o}}function rE(t,e,n,i){var r=it,o=Ho.transition;Ho.transition=null;try{it=4,nh(t,e,n,i)}finally{it=r,Ho.transition=o}}function nh(t,e,n,i){if(ql){var r=Wf(t,e,n,i);if(r===null)_c(t,e,i,Yl,n),Tp(t,i);else if(tE(r,t,e,n,i))i.stopPropagation();else if(Tp(t,i),e&4&&-1<eE.indexOf(t)){for(;r!==null;){var o=ya(r);if(o!==null&&O_(o),o=Wf(t,e,n,i),o===null&&_c(t,e,i,Yl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var Yl=null;function Wf(t,e,n,i){if(Yl=null,t=Qd(i),t=Fr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function V_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jS()){case Jd:return 1;case N_:return 4;case Xl:case XS:return 16;case D_:return 536870912;default:return 16}default:return 16}}var Ki=null,ih=null,bl=null;function G_(){if(bl)return bl;var t,e=ih,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function Cp(){return!1}function Mn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ba:Cp,this.isPropagationStopped=Cp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rh=Mn(cs),xa=vt({},cs,{view:0,detail:0}),oE=Mn(xa),uc,cc,Ss,Cu=vt({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(uc=t.screenX-Ss.screenX,cc=t.screenY-Ss.screenY):cc=uc=0,Ss=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:cc}}),bp=Mn(Cu),sE=vt({},Cu,{dataTransfer:0}),aE=Mn(sE),lE=vt({},xa,{relatedTarget:0}),fc=Mn(lE),uE=vt({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),cE=Mn(uE),fE=vt({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dE=Mn(fE),hE=vt({},cs,{data:0}),Rp=Mn(hE),pE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gE[t])?!!e[t]:!1}function oh(){return vE}var _E=vt({},xa,{key:function(t){if(t.key){var e=pE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xE=Mn(_E),yE=vt({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Mn(yE),SE=vt({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),EE=Mn(SE),ME=vt({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),wE=Mn(ME),TE=vt({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AE=Mn(TE),CE=[9,13,27,32],sh=Ai&&"CompositionEvent"in window,zs=null;Ai&&"documentMode"in document&&(zs=document.documentMode);var bE=Ai&&"TextEvent"in window&&!zs,W_=Ai&&(!sh||zs&&8<zs&&11>=zs),Lp=" ",Ip=!1;function j_(t,e){switch(t){case"keyup":return CE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ao=!1;function RE(t,e){switch(t){case"compositionend":return X_(e);case"keypress":return e.which!==32?null:(Ip=!0,Lp);case"textInput":return t=e.data,t===Lp&&Ip?null:t;default:return null}}function PE(t,e){if(Ao)return t==="compositionend"||!sh&&j_(t,e)?(t=G_(),bl=ih=Ki=null,Ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var LE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LE[t.type]:e==="textarea"}function $_(t,e,n,i){w_(i),e=Kl(e,"onChange"),0<e.length&&(n=new rh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bs=null,ea=null;function IE(t){r0(t,0)}function bu(t){var e=Ro(t);if(v_(e))return t}function NE(t,e){if(t==="change")return e}var q_=!1;if(Ai){var dc;if(Ai){var hc="oninput"in document;if(!hc){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),hc=typeof Dp.oninput=="function"}dc=hc}else dc=!1;q_=dc&&(!document.documentMode||9<document.documentMode)}function Up(){Bs&&(Bs.detachEvent("onpropertychange",Y_),ea=Bs=null)}function Y_(t){if(t.propertyName==="value"&&bu(ea)){var e=[];$_(e,ea,t,Qd(t)),b_(IE,e)}}function DE(t,e,n){t==="focusin"?(Up(),Bs=e,ea=n,Bs.attachEvent("onpropertychange",Y_)):t==="focusout"&&Up()}function UE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bu(ea)}function kE(t,e){if(t==="click")return bu(e)}function OE(t,e){if(t==="input"||t==="change")return bu(e)}function FE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:FE;function ta(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Af.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,e){var n=kp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function K_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z_(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zE(t){var e=Z_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K_(n.ownerDocument.documentElement,n)){if(i!==null&&ah(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Op(n,o);var s=Op(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BE=Ai&&"documentMode"in document&&11>=document.documentMode,Co=null,jf=null,Hs=null,Xf=!1;function Fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xf||Co==null||Co!==Gl(i)||(i=Co,"selectionStart"in i&&ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hs&&ta(Hs,i)||(Hs=i,i=Kl(jf,"onSelect"),0<i.length&&(e=new rh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Co)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bo={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},pc={},Q_={};Ai&&(Q_=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function Ru(t){if(pc[t])return pc[t];if(!bo[t])return t;var e=bo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Q_)return pc[t]=e[n];return t}var J_=Ru("animationend"),e0=Ru("animationiteration"),t0=Ru("animationstart"),n0=Ru("transitionend"),i0=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){i0.set(t,e),Qr(e,[t])}for(var mc=0;mc<zp.length;mc++){var gc=zp[mc],HE=gc.toLowerCase(),VE=gc[0].toUpperCase()+gc.slice(1);gr(HE,"on"+VE)}gr(J_,"onAnimationEnd");gr(e0,"onAnimationIteration");gr(t0,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(n0,"onTransitionEnd");Ko("onMouseEnter",["mouseout","mouseover"]);Ko("onMouseLeave",["mouseout","mouseover"]);Ko("onPointerEnter",["pointerout","pointerover"]);Ko("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function Bp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,HS(i,e,void 0,t),t.currentTarget=null}function r0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Bp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Bp(r,a,u),o=l}}}if(jl)throw t=Hf,jl=!1,Hf=null,t}function ft(t,e){var n=e[Zf];n===void 0&&(n=e[Zf]=new Set);var i=t+"__bubble";n.has(i)||(o0(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),o0(n,t,i,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[Va]){t[Va]=!0,d_.forEach(function(n){n!=="selectionchange"&&(GE.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,vc("selectionchange",!1,e))}}function o0(t,e,n,i){switch(V_(e)){case 1:var r=iE;break;case 4:r=rE;break;default:r=nh}n=r.bind(null,e,n,t),r=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Fr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}b_(function(){var u=o,c=Qd(n),f=[];e:{var d=i0.get(t);if(d!==void 0){var p=rh,g=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":p=xE;break;case"focusin":g="focus",p=fc;break;case"focusout":g="blur",p=fc;break;case"beforeblur":case"afterblur":p=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=aE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=EE;break;case J_:case e0:case t0:p=cE;break;case n0:p=wE;break;case"scroll":p=oE;break;case"wheel":p=AE;break;case"copy":case"cut":case"paste":p=dE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pp}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var _=u,v;_!==null;){v=_;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,h!==null&&(E=Ks(_,h),E!=null&&x.push(ia(_,E,v)))),m)break;_=_.return}0<x.length&&(d=new p(d,g,null,n,c),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ff&&(g=n.relatedTarget||n.fromElement)&&(Fr(g)||g[Ci]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Fr(g):null,g!==null&&(m=Jr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(x=bp,E="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Pp,E="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:Ro(p),v=g==null?d:Ro(g),d=new x(E,_+"leave",p,n,c),d.target=m,d.relatedTarget=v,E=null,Fr(c)===u&&(x=new x(h,_+"enter",g,n,c),x.target=v,x.relatedTarget=m,E=x),m=E,p&&g)t:{for(x=p,h=g,_=0,v=x;v;v=ro(v))_++;for(v=0,E=h;E;E=ro(E))v++;for(;0<_-v;)x=ro(x),_--;for(;0<v-_;)h=ro(h),v--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=ro(x),h=ro(h)}x=null}else x=null;p!==null&&Hp(f,d,p,x,!1),g!==null&&m!==null&&Hp(f,m,g,x,!0)}}e:{if(d=u?Ro(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=NE;else if(Np(d))if(q_)R=OE;else{R=UE;var y=DE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=kE);if(R&&(R=R(t,u))){$_(f,R,n,c);break e}y&&y(t,d,u),t==="focusout"&&(y=d._wrapperState)&&y.controlled&&d.type==="number"&&Nf(d,"number",d.value)}switch(y=u?Ro(u):window,t){case"focusin":(Np(y)||y.contentEditable==="true")&&(Co=y,jf=u,Hs=null);break;case"focusout":Hs=jf=Co=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,Fp(f,n,c);break;case"selectionchange":if(BE)break;case"keydown":case"keyup":Fp(f,n,c)}var b;if(sh)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ao?j_(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(W_&&n.locale!=="ko"&&(Ao||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ao&&(b=G_()):(Ki=c,ih="value"in Ki?Ki.value:Ki.textContent,Ao=!0)),y=Kl(u,I),0<y.length&&(I=new Rp(I,t,null,n,c),f.push({event:I,listeners:y}),b?I.data=b:(b=X_(n),b!==null&&(I.data=b)))),(b=bE?RE(t,n):PE(t,n))&&(u=Kl(u,"onBeforeInput"),0<u.length&&(c=new Rp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=b))}r0(f,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ks(t,n),o!=null&&i.unshift(ia(t,o,r)),o=Ks(t,e),o!=null&&i.push(ia(t,o,r))),t=t.return}return i}function ro(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ks(n,o),l!=null&&s.unshift(ia(n,l,a))):r||(l=Ks(n,o),l!=null&&s.push(ia(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var WE=/\r\n?/g,jE=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(WE,`
`).replace(jE,"")}function Ga(t,e,n){if(e=Vp(e),Vp(t)!==e&&n)throw Error(ce(425))}function Zl(){}var $f=null,qf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,XE=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,$E=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(qE)}:Kf;function qE(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Js(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Js(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),ri="__reactFiber$"+fs,ra="__reactProps$"+fs,Ci="__reactContainer$"+fs,Zf="__reactEvents$"+fs,YE="__reactListeners$"+fs,KE="__reactHandles$"+fs;function Fr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wp(t);t!==null;){if(n=t[ri])return n;t=Wp(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[ri]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ro(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Pu(t){return t[ra]||null}var Qf=[],Po=-1;function vr(t){return{current:t}}function ht(t){0>Po||(t.current=Qf[Po],Qf[Po]=null,Po--)}function ut(t,e){Po++,Qf[Po]=t.current,t.current=e}var hr={},Xt=vr(hr),sn=vr(!1),Xr=hr;function Zo(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Ql(){ht(sn),ht(Xt)}function jp(t,e,n){if(Xt.current!==hr)throw Error(ce(168));ut(Xt,e),ut(sn,n)}function s0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,DS(t)||"Unknown",r));return vt({},n,i)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Xr=Xt.current,ut(Xt,t),ut(sn,sn.current),!0}function Xp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=s0(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,ht(sn),ht(Xt),ut(Xt,t)):ht(sn),ut(sn,n)}var xi=null,Lu=!1,yc=!1;function a0(t){xi===null?xi=[t]:xi.push(t)}function ZE(t){Lu=!0,a0(t)}function _r(){if(!yc&&xi!==null){yc=!0;var t=0,e=it;try{var n=xi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Lu=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),I_(Jd,_r),r}finally{it=e,yc=!1}}return null}var Lo=[],Io=0,eu=null,tu=0,Cn=[],bn=0,$r=null,Si=1,Ei="";function Lr(t,e){Lo[Io++]=tu,Lo[Io++]=eu,eu=t,tu=e}function l0(t,e,n){Cn[bn++]=Si,Cn[bn++]=Ei,Cn[bn++]=$r,$r=t;var i=Si;t=Ei;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var o=32-Xn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Si=1<<32-Xn(e)+r|n<<r|i,Ei=o+t}else Si=1<<o|n<<r|i,Ei=t}function lh(t){t.return!==null&&(Lr(t,1),l0(t,1,0))}function uh(t){for(;t===eu;)eu=Lo[--Io],Lo[Io]=null,tu=Lo[--Io],Lo[Io]=null;for(;t===$r;)$r=Cn[--bn],Cn[bn]=null,Ei=Cn[--bn],Cn[bn]=null,Si=Cn[--bn],Cn[bn]=null}var yn=null,_n=null,pt=!1,Wn=null;function u0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,_n=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Si,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,_n=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ed(t){if(pt){var e=_n;if(e){var n=e;if(!$p(t,e)){if(Jf(t))throw Error(ce(418));e=rr(n.nextSibling);var i=yn;e&&$p(t,e)?u0(i,n):(t.flags=t.flags&-4097|2,pt=!1,yn=t)}}else{if(Jf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,pt=!1,yn=t}}}function qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Wa(t){if(t!==yn)return!1;if(!pt)return qp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=_n)){if(Jf(t))throw c0(),Error(ce(418));for(;e;)u0(t,e),e=rr(e.nextSibling)}if(qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=yn?rr(t.stateNode.nextSibling):null;return!0}function c0(){for(var t=_n;t;)t=rr(t.nextSibling)}function Qo(){_n=yn=null,pt=!1}function ch(t){Wn===null?Wn=[t]:Wn.push(t)}var QE=Ni.ReactCurrentBatchConfig;function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yp(t){var e=t._init;return e(t._payload)}function f0(t){function e(h,_){if(t){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=lr(h,_),h.index=0,h.sibling=null,h}function o(h,_,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=2,_)):(h.flags|=1048576,_)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,v,E){return _===null||_.tag!==6?(_=Cc(v,h.mode,E),_.return=h,_):(_=r(_,v),_.return=h,_)}function l(h,_,v,E){var R=v.type;return R===To?c(h,_,v.props.children,E,v.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ji&&Yp(R)===_.type)?(E=r(_,v.props),E.ref=Es(h,_,v),E.return=h,E):(E=kl(v.type,v.key,v.props,null,h.mode,E),E.ref=Es(h,_,v),E.return=h,E)}function u(h,_,v,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=bc(v,h.mode,E),_.return=h,_):(_=r(_,v.children||[]),_.return=h,_)}function c(h,_,v,E,R){return _===null||_.tag!==7?(_=Wr(v,h.mode,E,R),_.return=h,_):(_=r(_,v),_.return=h,_)}function f(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Cc(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Da:return v=kl(_.type,_.key,_.props,null,h.mode,v),v.ref=Es(h,null,_),v.return=h,v;case wo:return _=bc(_,h.mode,v),_.return=h,_;case ji:var E=_._init;return f(h,E(_._payload),v)}if(Ns(_)||vs(_))return _=Wr(_,h.mode,v,null),_.return=h,_;ja(h,_)}return null}function d(h,_,v,E){var R=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(h,_,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:return v.key===R?l(h,_,v,E):null;case wo:return v.key===R?u(h,_,v,E):null;case ji:return R=v._init,d(h,_,R(v._payload),E)}if(Ns(v)||vs(v))return R!==null?null:c(h,_,v,E,null);ja(h,v)}return null}function p(h,_,v,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(v)||null,a(_,h,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Da:return h=h.get(E.key===null?v:E.key)||null,l(_,h,E,R);case wo:return h=h.get(E.key===null?v:E.key)||null,u(_,h,E,R);case ji:var y=E._init;return p(h,_,v,y(E._payload),R)}if(Ns(E)||vs(E))return h=h.get(v)||null,c(_,h,E,R,null);ja(_,E)}return null}function g(h,_,v,E){for(var R=null,y=null,b=_,I=_=0,T=null;b!==null&&I<v.length;I++){b.index>I?(T=b,b=null):T=b.sibling;var S=d(h,b,v[I],E);if(S===null){b===null&&(b=T);break}t&&b&&S.alternate===null&&e(h,b),_=o(S,_,I),y===null?R=S:y.sibling=S,y=S,b=T}if(I===v.length)return n(h,b),pt&&Lr(h,I),R;if(b===null){for(;I<v.length;I++)b=f(h,v[I],E),b!==null&&(_=o(b,_,I),y===null?R=b:y.sibling=b,y=b);return pt&&Lr(h,I),R}for(b=i(h,b);I<v.length;I++)T=p(b,h,I,v[I],E),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?I:T.key),_=o(T,_,I),y===null?R=T:y.sibling=T,y=T);return t&&b.forEach(function(P){return e(h,P)}),pt&&Lr(h,I),R}function x(h,_,v,E){var R=vs(v);if(typeof R!="function")throw Error(ce(150));if(v=R.call(v),v==null)throw Error(ce(151));for(var y=R=null,b=_,I=_=0,T=null,S=v.next();b!==null&&!S.done;I++,S=v.next()){b.index>I?(T=b,b=null):T=b.sibling;var P=d(h,b,S.value,E);if(P===null){b===null&&(b=T);break}t&&b&&P.alternate===null&&e(h,b),_=o(P,_,I),y===null?R=P:y.sibling=P,y=P,b=T}if(S.done)return n(h,b),pt&&Lr(h,I),R;if(b===null){for(;!S.done;I++,S=v.next())S=f(h,S.value,E),S!==null&&(_=o(S,_,I),y===null?R=S:y.sibling=S,y=S);return pt&&Lr(h,I),R}for(b=i(h,b);!S.done;I++,S=v.next())S=p(b,h,I,S.value,E),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?I:S.key),_=o(S,_,I),y===null?R=S:y.sibling=S,y=S);return t&&b.forEach(function(O){return e(h,O)}),pt&&Lr(h,I),R}function m(h,_,v,E){if(typeof v=="object"&&v!==null&&v.type===To&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Da:e:{for(var R=v.key,y=_;y!==null;){if(y.key===R){if(R=v.type,R===To){if(y.tag===7){n(h,y.sibling),_=r(y,v.props.children),_.return=h,h=_;break e}}else if(y.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ji&&Yp(R)===y.type){n(h,y.sibling),_=r(y,v.props),_.ref=Es(h,y,v),_.return=h,h=_;break e}n(h,y);break}else e(h,y);y=y.sibling}v.type===To?(_=Wr(v.props.children,h.mode,E,v.key),_.return=h,h=_):(E=kl(v.type,v.key,v.props,null,h.mode,E),E.ref=Es(h,_,v),E.return=h,h=E)}return s(h);case wo:e:{for(y=v.key;_!==null;){if(_.key===y)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),_=r(_,v.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=bc(v,h.mode,E),_.return=h,h=_}return s(h);case ji:return y=v._init,m(h,_,y(v._payload),E)}if(Ns(v))return g(h,_,v,E);if(vs(v))return x(h,_,v,E);ja(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,v),_.return=h,h=_):(n(h,_),_=Cc(v,h.mode,E),_.return=h,h=_),s(h)):n(h,_)}return m}var Jo=f0(!0),d0=f0(!1),nu=vr(null),iu=null,No=null,fh=null;function dh(){fh=No=iu=null}function hh(t){var e=nu.current;ht(nu),t._currentValue=e}function td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vo(t,e){iu=t,fh=No=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(fh!==t)if(t={context:t,memoizedValue:e,next:null},No===null){if(iu===null)throw Error(ce(308));No=t,iu.dependencies={lanes:0,firstContext:t}}else No=No.next=t;return e}var zr=null;function ph(t){zr===null?zr=[t]:zr.push(t)}function h0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ph(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,ph(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}function Kp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,i){var r=t.updateQueue;Xi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(d=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=vt({},f,d);break e;case 2:Xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Yr|=s,t.lanes=s,t.memoizedState=f}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Sa={},ci=vr(Sa),oa=vr(Sa),sa=vr(Sa);function Br(t){if(t===Sa)throw Error(ce(174));return t}function gh(t,e){switch(ut(sa,e),ut(oa,t),ut(ci,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uf(e,t)}ht(ci),ut(ci,e)}function es(){ht(ci),ht(oa),ht(sa)}function m0(t){Br(sa.current);var e=Br(ci.current),n=Uf(e,t.type);e!==n&&(ut(oa,t),ut(ci,n))}function vh(t){oa.current===t&&(ht(ci),ht(oa))}var mt=vr(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function _h(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var Ll=Ni.ReactCurrentDispatcher,Ec=Ni.ReactCurrentBatchConfig,qr=0,gt=null,bt=null,Ut=null,su=!1,Vs=!1,aa=0,JE=0;function Ht(){throw Error(ce(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function yh(t,e,n,i,r,o){if(qr=o,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?iM:rM,t=n(i,r),Vs){o=0;do{if(Vs=!1,aa=0,25<=o)throw Error(ce(301));o+=1,Ut=bt=null,e.updateQueue=null,Ll.current=oM,t=n(i,r)}while(Vs)}if(Ll.current=au,e=bt!==null&&bt.next!==null,qr=0,Ut=bt=gt=null,su=!1,e)throw Error(ce(300));return t}function Sh(){var t=aa!==0;return aa=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function kn(){if(bt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?gt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(ce(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function la(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,gt.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,qn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,gt.lanes|=o,Yr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);qn(o,e.memoizedState)||(on=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function g0(){}function v0(t,e){var n=gt,i=kn(),r=e(),o=!qn(i.memoizedState,r);if(o&&(i.memoizedState=r,on=!0),i=i.queue,Eh(y0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ua(9,x0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ce(349));qr&30||_0(n,e,r)}return r}function _0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x0(t,e,n,i){e.value=n,e.getSnapshot=i,S0(e)&&E0(t)}function y0(t,e,n){return n(function(){S0(e)&&E0(t)})}function S0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function E0(t){var e=bi(t,1);e!==null&&$n(e,t,1,-1)}function Qp(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=nM.bind(null,gt,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function M0(){return kn().memoizedState}function Il(t,e,n,i){var r=Qn();gt.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function Iu(t,e,n,i){var r=kn();i=i===void 0?null:i;var o=void 0;if(bt!==null){var s=bt.memoizedState;if(o=s.destroy,i!==null&&xh(i,s.deps)){r.memoizedState=ua(e,n,o,i);return}}gt.flags|=t,r.memoizedState=ua(1|e,n,o,i)}function Jp(t,e){return Il(8390656,8,t,e)}function Eh(t,e){return Iu(2048,8,t,e)}function w0(t,e){return Iu(4,2,t,e)}function T0(t,e){return Iu(4,4,t,e)}function A0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C0(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4,4,A0.bind(null,e,t),n)}function Mh(){}function b0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function R0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function P0(t,e,n){return qr&21?(qn(n,e)||(n=U_(),gt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function eM(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{it=n,Ec.transition=i}}function L0(){return kn().memoizedState}function tM(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},I0(t))N0(e,n);else if(n=h0(t,e,n,i),n!==null){var r=Zt();$n(n,t,i,r),D0(n,e,i)}}function nM(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(I0(t))N0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,s)){var l=e.interleaved;l===null?(r.next=r,ph(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=h0(t,e,r,i),n!==null&&(r=Zt(),$n(n,t,i,r),D0(n,e,i))}}function I0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function N0(t,e){Vs=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}var au={readContext:Un,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},iM={readContext:Un,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,A0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tM.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Qp,useDebugValue:Mh,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Qp(!1),e=t[0];return t=eM.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Qn();if(pt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),kt===null)throw Error(ce(349));qr&30||_0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Jp(y0.bind(null,i,o,t),[t]),i.flags|=2048,ua(9,x0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Qn(),e=kt.identifierPrefix;if(pt){var n=Ei,i=Si;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rM={readContext:Un,useCallback:b0,useContext:Un,useEffect:Eh,useImperativeHandle:C0,useInsertionEffect:w0,useLayoutEffect:T0,useMemo:R0,useReducer:Mc,useRef:M0,useState:function(){return Mc(la)},useDebugValue:Mh,useDeferredValue:function(t){var e=kn();return P0(e,bt.memoizedState,t)},useTransition:function(){var t=Mc(la)[0],e=kn().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:v0,useId:L0,unstable_isNewReconciler:!1},oM={readContext:Un,useCallback:b0,useContext:Un,useEffect:Eh,useImperativeHandle:C0,useInsertionEffect:w0,useLayoutEffect:T0,useMemo:R0,useReducer:wc,useRef:M0,useState:function(){return wc(la)},useDebugValue:Mh,useDeferredValue:function(t){var e=kn();return bt===null?e.memoizedState=t:P0(e,bt.memoizedState,t)},useTransition:function(){var t=wc(la)[0],e=kn().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:v0,useId:L0,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nu={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=ar(t),o=Ti(i,r);o.payload=e,n!=null&&(o.callback=n),e=or(t,o,r),e!==null&&($n(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=ar(t),o=Ti(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=or(t,o,r),e!==null&&($n(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=ar(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=or(t,r,i),e!==null&&($n(e,t,i,n),Pl(e,t,i))}};function em(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ta(n,i)||!ta(r,o):!0}function U0(t,e,n){var i=!1,r=hr,o=e.contextType;return typeof o=="object"&&o!==null?o=Un(o):(r=an(e)?Xr:Xt.current,i=e.contextTypes,o=(i=i!=null)?Zo(t,r):hr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function tm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nu.enqueueReplaceState(e,e.state,null)}function id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Un(o):(o=an(e)?Xr:Xt.current,r.context=Zo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(nd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nu.enqueueReplaceState(r,r.state,null),ru(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e){try{var n="",i=e;do n+=NS(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sM=typeof WeakMap=="function"?WeakMap:Map;function k0(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uu||(uu=!0,pd=i),rd(t,e)},n}function O0(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yM.bind(null,t,e,n),e.then(t,t))}function im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var aM=Ni.ReactCurrentOwner,on=!1;function Kt(t,e,n,i){e.child=t===null?d0(e,null,n,i):Jo(e,t.child,n,i)}function om(t,e,n,i,r){n=n.render;var o=e.ref;return Vo(e,r),i=yh(t,e,n,i,o,r),n=Sh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(pt&&n&&lh(e),e.flags|=1,Kt(t,e,i,r),e.child)}function sm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Lh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,F0(t,e,o,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(s,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=lr(o,i),t.ref=e.ref,t.return=e,e.child=t}function F0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ta(o,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return od(t,e,n,i,r)}function z0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Uo,vn),vn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Uo,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ut(Uo,vn),vn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ut(Uo,vn),vn|=i;return Kt(t,e,r,n),e.child}function B0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,i,r){var o=an(n)?Xr:Xt.current;return o=Zo(e,o),Vo(e,r),n=yh(t,e,n,i,o,r),i=Sh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(pt&&i&&lh(e),e.flags|=1,Kt(t,e,n,r),e.child)}function am(t,e,n,i,r){if(an(n)){var o=!0;Jl(e)}else o=!1;if(Vo(e,r),e.stateNode===null)Nl(t,e),U0(e,n,i),id(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=an(n)?Xr:Xt.current,u=Zo(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&tm(e,s,i,u),Xi=!1;var d=e.memoizedState;s.state=d,ru(e,i,s,r),l=e.memoizedState,a!==i||d!==l||sn.current||Xi?(typeof c=="function"&&(nd(e,n,c,i),l=e.memoizedState),(a=Xi||em(e,n,a,i,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,p0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vn(e.type,a),s.props=u,f=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=an(n)?Xr:Xt.current,l=Zo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&tm(e,s,i,l),Xi=!1,d=e.memoizedState,s.state=d,ru(e,i,s,r);var g=e.memoizedState;a!==f||d!==g||sn.current||Xi?(typeof p=="function"&&(nd(e,n,p,i),g=e.memoizedState),(u=Xi||em(e,n,u,i,d,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return sd(t,e,n,i,o,r)}function sd(t,e,n,i,r,o){B0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Xp(e,n,!1),Ri(t,e,o);i=e.stateNode,aM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Jo(e,t.child,null,o),e.child=Jo(e,null,a,o)):Kt(t,e,a,o),e.memoizedState=i.state,r&&Xp(e,n,!0),e.child}function H0(t){var e=t.stateNode;e.pendingContext?jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jp(t,e.context,!1),gh(t,e.containerInfo)}function lm(t,e,n,i,r){return Qo(),ch(r),e.flags|=256,Kt(t,e,n,i),e.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function V0(t,e,n){var i=e.pendingProps,r=mt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(mt,r&1),t===null)return ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ku(s,i,0,null),t=Wr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ld(n),e.memoizedState=ad,t):wh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lM(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=lr(a,o):(o=Wr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?ld(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ad,i}return o=t.child,t=o.sibling,i=lr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wh(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,i){return i!==null&&ch(i),Jo(e,t.child,null,n),t=wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lM(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Tc(Error(ce(422))),Xa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=ku({mode:"visible",children:i.children},r,0,null),o=Wr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Jo(e,t.child,null,s),e.child.memoizedState=ld(s),e.memoizedState=ad,o);if(!(e.mode&1))return Xa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ce(419)),i=Tc(o,i,void 0),Xa(t,e,s,i)}if(a=(s&t.childLanes)!==0,on||a){if(i=kt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,bi(t,r),$n(i,t,r,-1))}return Ph(),i=Tc(Error(ce(421))),Xa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=SM.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,_n=rr(r.nextSibling),yn=e,pt=!0,Wn=null,t!==null&&(Cn[bn++]=Si,Cn[bn++]=Ei,Cn[bn++]=$r,Si=t.id,Ei=t.overflow,$r=e),e=wh(e,i.children),e.flags|=4096,e)}function um(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),td(t.return,e,n)}function Ac(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function G0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Kt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&um(t,n,e);else if(t.tag===19)um(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ou(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,o);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uM(t,e,n){switch(e.tag){case 3:H0(e),Qo();break;case 5:m0(e);break;case 1:an(e.type)&&Jl(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(nu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?V0(t,e,n):(ut(mt,mt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ut(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return G0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,z0(t,e,n)}return Ri(t,e,n)}var W0,ud,j0,X0;W0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ud=function(){};j0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(ci.current);var o=null;switch(n){case"input":r=Lf(t,r),i=Lf(t,i),o=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),o=[];break;case"textarea":r=Df(t,r),i=Df(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}kf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};X0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ms(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cM(t,e,n){var i=e.pendingProps;switch(uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return an(e.type)&&Ql(),Vt(e),null;case 3:return i=e.stateNode,es(),ht(sn),ht(Xt),_h(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(vd(Wn),Wn=null))),ud(t,e),Vt(e),null;case 5:vh(e);var r=Br(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)j0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Vt(e),null}if(t=Br(ci.current),Wa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ri]=e,i[ra]=o,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Us.length;r++)ft(Us[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":_p(i,o),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ft("invalid",i);break;case"textarea":yp(i,o),ft("invalid",i)}kf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",""+a]):qs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ft("scroll",i)}switch(n){case"input":Ua(i),xp(i,o,!0);break;case"textarea":Ua(i),Sp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ri]=e,t[ra]=i,W0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Of(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Us.length;r++)ft(Us[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":_p(t,i),r=Lf(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":yp(t,i),r=Df(t,i),ft("invalid",t);break;default:r=i}kf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?M_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&S_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ft("scroll",t):l!=null&&qd(t,o,l,s))}switch(n){case"input":Ua(t),xp(t,i,!1);break;case"textarea":Ua(t),Sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Fo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Fo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)X0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Br(sa.current),Br(ci.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(o=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Vt(e),null;case 13:if(ht(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&_n!==null&&e.mode&1&&!(e.flags&128))c0(),Qo(),e.flags|=98560,o=!1;else if(o=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ce(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ce(317));o[ri]=e}else Qo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else Wn!==null&&(vd(Wn),Wn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):Ph())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return es(),ud(t,e),t===null&&na(e.stateNode.containerInfo),Vt(e),null;case 10:return hh(e.type._context),Vt(e),null;case 17:return an(e.type)&&Ql(),Vt(e),null;case 19:if(ht(mt),o=e.memoizedState,o===null)return Vt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ms(o,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ou(t),s!==null){for(e.flags|=128,Ms(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(mt,mt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>ns&&(e.flags|=128,i=!0,Ms(o,!1),e.lanes=4194304)}else{if(!i)if(t=ou(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!pt)return Vt(e),null}else 2*Et()-o.renderingStartTime>ns&&n!==1073741824&&(e.flags|=128,i=!0,Ms(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=mt.current,ut(mt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Rh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function fM(t,e){switch(uh(e),e.tag){case 1:return an(e.type)&&Ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(),ht(sn),ht(Xt),_h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vh(e),null;case 13:if(ht(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Qo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(mt),null;case 4:return es(),null;case 10:return hh(e.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var $a=!1,jt=!1,dM=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Do(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function cd(t,e,n){try{n()}catch(i){yt(t,e,i)}}var cm=!1;function hM(t,e){if($f=ql,t=Z_(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=s),d===o&&++c===i&&(l=s),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qf={focusedElem:t,selectionRange:n},ql=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Vn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(E){yt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return g=cm,cm=!1,g}function Gs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&cd(e,n,o)}r=r.next}while(r!==i)}}function Du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $0(t){var e=t.alternate;e!==null&&(t.alternate=null,$0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[ra],delete e[Zf],delete e[YE],delete e[KE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q0(t){return t.tag===5||t.tag===3||t.tag===4}function fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}var Ot=null,Gn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Y0(t,e,n),n=n.sibling}function Y0(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:jt||Do(n,e);case 6:var i=Ot,r=Gn;Ot=null,Oi(t,e,n),Ot=i,Gn=r,Ot!==null&&(Gn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Gn?(t=Ot,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),Js(t)):xc(Ot,n.stateNode));break;case 4:i=Ot,r=Gn,Ot=n.stateNode.containerInfo,Gn=!0,Oi(t,e,n),Ot=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&cd(n,e,s),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!jt&&(Do(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Oi(t,e,n),jt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dM),e.forEach(function(i){var r=EM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Gn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Gn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Ot===null)throw Error(ce(160));Y0(o,s,r),Ot=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K0(e,t),e=e.sibling}function K0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Zn(t),i&4){try{Gs(3,t,t.return),Du(3,t)}catch(x){yt(t,t.return,x)}try{Gs(5,t,t.return)}catch(x){yt(t,t.return,x)}}break;case 1:Fn(e,t),Zn(t),i&512&&n!==null&&Do(n,n.return);break;case 5:if(Fn(e,t),Zn(t),i&512&&n!==null&&Do(n,n.return),t.flags&32){var r=t.stateNode;try{Ys(r,"")}catch(x){yt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&__(r,o),Of(a,s);var u=Of(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?M_(r,f):c==="dangerouslySetInnerHTML"?S_(r,f):c==="children"?Ys(r,f):qd(r,c,f,u)}switch(a){case"input":If(r,o);break;case"textarea":x_(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Fo(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Fo(r,!!o.multiple,o.defaultValue,!0):Fo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ra]=o}catch(x){yt(t,t.return,x)}}break;case 6:if(Fn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){yt(t,t.return,x)}}break;case 3:if(Fn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(x){yt(t,t.return,x)}break;case 4:Fn(e,t),Zn(t);break;case 13:Fn(e,t),Zn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Ch=Et())),i&4&&dm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,Fn(e,t),jt=u):Fn(e,t),Zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Me=t,c=t.child;c!==null;){for(f=Me=c;Me!==null;){switch(d=Me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Gs(4,d,d.return);break;case 1:Do(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){yt(i,n,x)}}break;case 5:Do(d,d.return);break;case 22:if(d.memoizedState!==null){pm(f);continue}}p!==null?(p.return=d,Me=p):pm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=E_("display",s))}catch(x){yt(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){yt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Zn(t),i&4&&dm(t);break;case 21:break;default:Fn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q0(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ys(r,""),i.flags&=-33);var o=fm(t);hd(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=fm(t);dd(t,a,s);break;default:throw Error(ce(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pM(t,e,n){Me=t,Z0(t)}function Z0(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||$a;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=$a;var u=jt;if($a=s,(jt=l)&&!u)for(Me=r;Me!==null;)s=Me,l=s.child,s.tag===22&&s.memoizedState!==null?mm(r):l!==null?(l.return=s,Me=l):mm(r);for(;o!==null;)Me=o,Z0(o),o=o.sibling;Me=r,$a=a,jt=u}hm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Me=o):hm(t)}}function hm(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Du(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Zp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Js(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}jt||e.flags&512&&fd(e)}catch(d){yt(e,e.return,d)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function pm(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function mm(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Du(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var o=e.return;try{fd(e)}catch(l){yt(e,o,l)}break;case 5:var s=e.return;try{fd(e)}catch(l){yt(e,s,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var mM=Math.ceil,lu=Ni.ReactCurrentDispatcher,Th=Ni.ReactCurrentOwner,Nn=Ni.ReactCurrentBatchConfig,qe=0,kt=null,Tt=null,zt=0,vn=0,Uo=vr(0),Rt=0,ca=null,Yr=0,Uu=0,Ah=0,Ws=null,nn=null,Ch=0,ns=1/0,_i=null,uu=!1,pd=null,sr=null,qa=!1,Zi=null,cu=0,js=0,md=null,Dl=-1,Ul=0;function Zt(){return qe&6?Et():Dl!==-1?Dl:Dl=Et()}function ar(t){return t.mode&1?qe&2&&zt!==0?zt&-zt:QE.transition!==null?(Ul===0&&(Ul=U_()),Ul):(t=it,t!==0||(t=window.event,t=t===void 0?16:V_(t.type)),t):1}function $n(t,e,n,i){if(50<js)throw js=0,md=null,Error(ce(185));_a(t,n,i),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(Uu|=n),Rt===4&&qi(t,zt)),ln(t,i),n===1&&qe===0&&!(e.mode&1)&&(ns=Et()+500,Lu&&_r()))}function ln(t,e){var n=t.callbackNode;QS(t,e);var i=$l(t,t===kt?zt:0);if(i===0)n!==null&&wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&wp(n),e===1)t.tag===0?ZE(gm.bind(null,t)):a0(gm.bind(null,t)),$E(function(){!(qe&6)&&_r()}),n=null;else{switch(k_(i)){case 1:n=Jd;break;case 4:n=N_;break;case 16:n=Xl;break;case 536870912:n=D_;break;default:n=Xl}n=ox(n,Q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q0(t,e){if(Dl=-1,Ul=0,qe&6)throw Error(ce(327));var n=t.callbackNode;if(Go()&&t.callbackNode!==n)return null;var i=$l(t,t===kt?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fu(t,i);else{e=i;var r=qe;qe|=2;var o=ex();(kt!==t||zt!==e)&&(_i=null,ns=Et()+500,Gr(t,e));do try{_M();break}catch(a){J0(t,a)}while(!0);dh(),lu.current=o,qe=r,Tt!==null?e=0:(kt=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=Vf(t),r!==0&&(i=r,e=gd(t,r))),e===1)throw n=ca,Gr(t,0),qi(t,i),ln(t,Et()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!gM(r)&&(e=fu(t,i),e===2&&(o=Vf(t),o!==0&&(i=o,e=gd(t,o))),e===1))throw n=ca,Gr(t,0),qi(t,i),ln(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Ir(t,nn,_i);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Ch+500-Et(),10<e)){if($l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Kf(Ir.bind(null,t,nn,_i),e);break}Ir(t,nn,_i);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Xn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mM(i/1960))-i,10<i){t.timeoutHandle=Kf(Ir.bind(null,t,nn,_i),i);break}Ir(t,nn,_i);break;case 5:Ir(t,nn,_i);break;default:throw Error(ce(329))}}}return ln(t,Et()),t.callbackNode===n?Q0.bind(null,t):null}function gd(t,e){var n=Ws;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=fu(t,e),t!==2&&(e=nn,nn=n,e!==null&&vd(e)),t}function vd(t){nn===null?nn=t:nn.push.apply(nn,t)}function gM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!qn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Ah,e&=~Uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function gm(t){if(qe&6)throw Error(ce(327));Go();var e=$l(t,0);if(!(e&1))return ln(t,Et()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var i=Vf(t);i!==0&&(e=i,n=gd(t,i))}if(n===1)throw n=ca,Gr(t,0),qi(t,e),ln(t,Et()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,nn,_i),ln(t,Et()),null}function bh(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(ns=Et()+500,Lu&&_r())}}function Kr(t){Zi!==null&&Zi.tag===0&&!(qe&6)&&Go();var e=qe;qe|=1;var n=Nn.transition,i=it;try{if(Nn.transition=null,it=1,t)return t()}finally{it=i,Nn.transition=n,qe=e,!(qe&6)&&_r()}}function Rh(){vn=Uo.current,ht(Uo)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XE(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(uh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ql();break;case 3:es(),ht(sn),ht(Xt),_h();break;case 5:vh(i);break;case 4:es();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:hh(i.type._context);break;case 22:case 23:Rh()}n=n.return}if(kt=t,Tt=t=lr(t.current,null),zt=vn=e,Rt=0,ca=null,Ah=Uu=Yr=0,nn=Ws=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}zr=null}return t}function J0(t,e){do{var n=Tt;try{if(dh(),Ll.current=au,su){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}su=!1}if(qr=0,Ut=bt=gt=null,Vs=!1,aa=0,Th.current=null,n===null||n.return===null){Rt=1,ca=e,Tt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=im(s);if(p!==null){p.flags&=-257,rm(p,s,a,o,e),p.mode&1&&nm(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){nm(o,u,e),Ph();break e}l=Error(ce(426))}}else if(pt&&a.mode&1){var m=im(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),rm(m,s,a,o,e),ch(ts(l,a));break e}}o=l=ts(l,a),Rt!==4&&(Rt=2),Ws===null?Ws=[o]:Ws.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=k0(o,l,e);Kp(o,h);break e;case 1:a=l;var _=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(sr===null||!sr.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=O0(o,a,e);Kp(o,E);break e}}o=o.return}while(o!==null)}nx(n)}catch(R){e=R,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function ex(){var t=lu.current;return lu.current=au,t===null?au:t}function Ph(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),kt===null||!(Yr&268435455)&&!(Uu&268435455)||qi(kt,zt)}function fu(t,e){var n=qe;qe|=2;var i=ex();(kt!==t||zt!==e)&&(_i=null,Gr(t,e));do try{vM();break}catch(r){J0(t,r)}while(!0);if(dh(),qe=n,lu.current=i,Tt!==null)throw Error(ce(261));return kt=null,zt=0,Rt}function vM(){for(;Tt!==null;)tx(Tt)}function _M(){for(;Tt!==null&&!GS();)tx(Tt)}function tx(t){var e=rx(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?nx(t):Tt=e,Th.current=null}function nx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fM(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=cM(n,e,vn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function Ir(t,e,n){var i=it,r=Nn.transition;try{Nn.transition=null,it=1,xM(t,e,n,i)}finally{Nn.transition=r,it=i}return null}function xM(t,e,n,i){do Go();while(Zi!==null);if(qe&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(JS(t,o),t===kt&&(Tt=kt=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,ox(Xl,function(){return Go(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Nn.transition,Nn.transition=null;var s=it;it=1;var a=qe;qe|=4,Th.current=null,hM(t,n),K0(n,t),zE(qf),ql=!!$f,qf=$f=null,t.current=n,pM(n),WS(),qe=a,it=s,Nn.transition=o}else t.current=n;if(qa&&(qa=!1,Zi=t,cu=r),o=t.pendingLanes,o===0&&(sr=null),$S(n.stateNode),ln(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uu)throw uu=!1,t=pd,pd=null,t;return cu&1&&t.tag!==0&&Go(),o=t.pendingLanes,o&1?t===md?js++:(js=0,md=t):js=0,_r(),null}function Go(){if(Zi!==null){var t=k_(cu),e=Nn.transition,n=it;try{if(Nn.transition=null,it=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,cu=0,qe&6)throw Error(ce(331));var r=qe;for(qe|=4,Me=t.current;Me!==null;){var o=Me,s=o.child;if(Me.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:Gs(8,c,o)}var f=c.child;if(f!==null)f.return=c,Me=f;else for(;Me!==null;){c=Me;var d=c.sibling,p=c.return;if($0(c),c===u){Me=null;break}if(d!==null){d.return=p,Me=d;break}Me=p}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Me=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Me=s;else e:for(;Me!==null;){if(o=Me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Gs(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Me=h;break e}Me=o.return}}var _=t.current;for(Me=_;Me!==null;){s=Me;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Me=v;else e:for(s=_;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Du(9,a)}}catch(R){yt(a,a.return,R)}if(a===s){Me=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Me=E;break e}Me=a.return}}if(qe=r,_r(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Au,t)}catch{}i=!0}return i}finally{it=n,Nn.transition=e}}return!1}function vm(t,e,n){e=ts(n,e),e=k0(t,e,1),t=or(t,e,1),e=Zt(),t!==null&&(_a(t,1,e),ln(t,e))}function yt(t,e,n){if(t.tag===3)vm(t,t,n);else for(;e!==null;){if(e.tag===3){vm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=ts(n,t),t=O0(e,t,1),e=or(e,t,1),t=Zt(),e!==null&&(_a(e,1,t),ln(e,t));break}}e=e.return}}function yM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>Et()-Ch?Gr(t,0):Ah|=n),ln(t,e)}function ix(t,e){e===0&&(t.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var n=Zt();t=bi(t,e),t!==null&&(_a(t,e,n),ln(t,n))}function SM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ix(t,n)}function EM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),ix(t,n)}var rx;rx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,uM(t,e,n);on=!!(t.flags&131072)}else on=!1,pt&&e.flags&1048576&&l0(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(t,e),t=e.pendingProps;var r=Zo(e,Xt.current);Vo(e,n),r=yh(null,e,i,t,r,n);var o=Sh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(o=!0,Jl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mh(e),r.updater=Nu,e.stateNode=r,r._reactInternals=e,id(e,i,t,n),e=sd(null,e,i,!0,o,n)):(e.tag=0,pt&&o&&lh(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wM(i),t=Vn(i,t),r){case 0:e=od(null,e,i,t,n);break e;case 1:e=am(null,e,i,t,n);break e;case 11:e=om(null,e,i,t,n);break e;case 14:e=sm(null,e,i,Vn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),am(t,e,i,r,n);case 3:e:{if(H0(e),t===null)throw Error(ce(387));i=e.pendingProps,o=e.memoizedState,r=o.element,p0(t,e),ru(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ts(Error(ce(423)),e),e=lm(t,e,i,n,r);break e}else if(i!==r){r=ts(Error(ce(424)),e),e=lm(t,e,i,n,r);break e}else for(_n=rr(e.stateNode.containerInfo.firstChild),yn=e,pt=!0,Wn=null,n=d0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qo(),i===r){e=Ri(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return m0(e),t===null&&ed(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Yf(i,r)?s=null:o!==null&&Yf(i,o)&&(e.flags|=32),B0(t,e),Kt(t,e,s,n),e.child;case 6:return t===null&&ed(e),null;case 13:return V0(t,e,n);case 4:return gh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Jo(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),om(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ut(nu,i._currentValue),i._currentValue=s,o!==null)if(qn(o.value,s)){if(o.children===r.children&&!sn.current){e=Ri(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ti(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),td(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ce(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),td(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vo(e,n),r=Un(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),sm(t,e,i,r,n);case 15:return F0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Nl(t,e),e.tag=1,an(i)?(t=!0,Jl(e)):t=!1,Vo(e,n),U0(e,i,r),id(e,i,r,n),sd(null,e,i,!0,t,n);case 19:return G0(t,e,n);case 22:return z0(t,e,n)}throw Error(ce(156,e.tag))};function ox(t,e){return I_(t,e)}function MM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new MM(t,e,n,i)}function Lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wM(t){if(typeof t=="function")return Lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Lh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case To:return Wr(n.children,r,o,e);case Yd:s=8,r|=8;break;case Cf:return t=Ln(12,n,e,r|2),t.elementType=Cf,t.lanes=o,t;case bf:return t=Ln(13,n,e,r),t.elementType=bf,t.lanes=o,t;case Rf:return t=Ln(19,n,e,r),t.elementType=Rf,t.lanes=o,t;case m_:return ku(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h_:s=10;break e;case p_:s=9;break e;case Kd:s=11;break e;case Zd:s=14;break e;case ji:s=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Ln(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Wr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function ku(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=m_,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function bc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lc(0),this.expirationTimes=lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ih(t,e,n,i,r,o,s,a,l){return t=new TM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ln(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(o),t}function AM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sx(t){if(!t)return hr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(an(n))return s0(t,n,e)}return e}function ax(t,e,n,i,r,o,s,a,l){return t=Ih(n,i,!0,t,r,o,s,a,l),t.context=sx(null),n=t.current,i=Zt(),r=ar(n),o=Ti(i,r),o.callback=e??null,or(n,o,r),t.current.lanes=r,_a(t,r,i),ln(t,i),t}function Ou(t,e,n,i){var r=e.current,o=Zt(),s=ar(r);return n=sx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=or(r,e,s),t!==null&&($n(t,r,s,o),Pl(t,r,s)),s}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nh(t,e){_m(t,e),(t=t.alternate)&&_m(t,e)}function CM(){return null}var lx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dh(t){this._internalRoot=t}Fu.prototype.render=Dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Ou(t,e,null,null)};Fu.prototype.unmount=Dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Ou(null,t,null,null)}),e[Ci]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=z_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&H_(t)}};function Uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xm(){}function bM(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=du(s);o.call(u)}}var s=ax(e,i,t,0,null,!1,!1,"",xm);return t._reactRootContainer=s,t[Ci]=s.current,na(t.nodeType===8?t.parentNode:t),Kr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=du(l);a.call(u)}}var l=Ih(t,0,!1,null,null,!1,!1,"",xm);return t._reactRootContainer=l,t[Ci]=l.current,na(t.nodeType===8?t.parentNode:t),Kr(function(){Ou(e,l,n,i)}),l}function Bu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=du(s);a.call(l)}}Ou(e,s,t,r)}else s=bM(n,e,t,r,i);return du(s)}O_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(eh(e,n|1),ln(e,Et()),!(qe&6)&&(ns=Et()+500,_r()))}break;case 13:Kr(function(){var i=bi(t,1);if(i!==null){var r=Zt();$n(i,t,1,r)}}),Nh(t,1)}};th=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Zt();$n(e,t,134217728,n)}Nh(t,134217728)}};F_=function(t){if(t.tag===13){var e=ar(t),n=bi(t,e);if(n!==null){var i=Zt();$n(n,t,e,i)}Nh(t,e)}};z_=function(){return it};B_=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};zf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pu(i);if(!r)throw Error(ce(90));v_(i),If(i,r)}}}break;case"textarea":x_(t,n);break;case"select":e=n.value,e!=null&&Fo(t,!!n.multiple,e,!1)}};A_=bh;C_=Kr;var RM={usingClientEntryPoint:!1,Events:[ya,Ro,Pu,w_,T_,bh]},ws={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PM={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=P_(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||CM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Au=Ya.inject(PM),ui=Ya}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RM;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(e))throw Error(ce(200));return AM(t,e,null,n)};En.createRoot=function(t,e){if(!Uh(t))throw Error(ce(299));var n=!1,i="",r=lx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ih(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,na(t.nodeType===8?t.parentNode:t),new Dh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=P_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Kr(t)};En.hydrate=function(t,e,n){if(!zu(e))throw Error(ce(200));return Bu(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Uh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=lx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ax(e,null,t,1,n??null,r,!1,o,s),t[Ci]=e.current,na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fu(e)};En.render=function(t,e,n){if(!zu(e))throw Error(ce(200));return Bu(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!zu(t))throw Error(ce(40));return t._reactRootContainer?(Kr(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};En.unstable_batchedUpdates=bh;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zu(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Bu(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ux)}catch(t){console.error(t)}}ux(),u_.exports=En;var LM=u_.exports,ym=LM;Tf.createRoot=ym.createRoot,Tf.hydrateRoot=ym.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fa.apply(this,arguments)}var Qi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qi||(Qi={}));const Sm="popstate";function IM(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return _d("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:hu(r)}return DM(e,n,null,t)}function At(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NM(){return Math.random().toString(36).substr(2,8)}function Em(t,e){return{usr:t.state,key:t.key,idx:e}}function _d(t,e,n,i){return n===void 0&&(n=null),fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ds(e):e,{state:n,key:e&&e.key||i||NM()})}function hu(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function DM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Qi.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(fa({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=Qi.Pop;let m=c(),h=m==null?null:m-u;u=m,l&&l({action:a,location:x.location,delta:h})}function d(m,h){a=Qi.Push;let _=_d(x.location,m,h);u=c()+1;let v=Em(_,u),E=x.createHref(_);try{s.pushState(v,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(E)}o&&l&&l({action:a,location:x.location,delta:1})}function p(m,h){a=Qi.Replace;let _=_d(x.location,m,h);u=c();let v=Em(_,u),E=x.createHref(_);s.replaceState(v,"",E),o&&l&&l({action:a,location:x.location,delta:0})}function g(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:hu(m);return _=_.replace(/ $/,"%20"),At(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let x={get action(){return a},get location(){return t(r,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Sm,f),l=m,()=>{r.removeEventListener(Sm,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return s.go(m)}};return x}var Mm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Mm||(Mm={}));function UM(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?ds(e):e,r=kh(i.pathname||"/",n);if(r==null)return null;let o=fx(t);kM(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=qM(r);s=jM(o[a],l)}return s}function fx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(At(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ur([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(At(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fx(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:GM(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of dx(o.path))r(o,s,l)}),e}function dx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=dx(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function kM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const OM=/^:[\w-]+$/,FM=3,zM=2,BM=1,HM=10,VM=-2,wm=t=>t==="*";function GM(t,e){let n=t.split("/"),i=n.length;return n.some(wm)&&(i+=VM),e&&(i+=zM),n.filter(r=>!wm(r)).reduce((r,o)=>r+(OM.test(o)?FM:o===""?BM:HM),i)}function WM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function jM(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=XM({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let f=a.route;o.push({params:i,pathname:ur([r,c.pathname]),pathnameBase:QM(ur([r,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(r=ur([r,c.pathnameBase]))}return o}function XM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=$M(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:d,isOptional:p}=c;if(d==="*"){let x=a[f]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[f];return p&&!g?u[d]=void 0:u[d]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function $M(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function qM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function YM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ds(t):t;return{pathname:n?n.startsWith("/")?n:KM(n,e):e,search:JM(i),hash:e1(r)}}function KM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Rc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hx(t,e){let n=ZM(t);return e?n.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function px(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ds(t):(r=fa({},t),At(!r.pathname||!r.pathname.includes("?"),Rc("?","pathname","search",r)),At(!r.pathname||!r.pathname.includes("#"),Rc("#","pathname","hash",r)),At(!r.search||!r.search.includes("#"),Rc("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=YM(r,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ur=t=>t.join("/").replace(/\/\/+/g,"/"),QM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,e1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function t1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mx=["post","put","patch","delete"];new Set(mx);const n1=["get",...mx];new Set(n1);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},da.apply(this,arguments)}const Oh=xe.createContext(null),i1=xe.createContext(null),eo=xe.createContext(null),Hu=xe.createContext(null),to=xe.createContext({outlet:null,matches:[],isDataRoute:!1}),gx=xe.createContext(null);function r1(t,e){let{relative:n}=e===void 0?{}:e;Ea()||At(!1);let{basename:i,navigator:r}=xe.useContext(eo),{hash:o,pathname:s,search:a}=_x(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:ur([i,s])),r.createHref({pathname:l,search:a,hash:o})}function Ea(){return xe.useContext(Hu)!=null}function Vu(){return Ea()||At(!1),xe.useContext(Hu).location}function vx(t){xe.useContext(eo).static||xe.useLayoutEffect(t)}function o1(){let{isDataRoute:t}=xe.useContext(to);return t?_1():s1()}function s1(){Ea()||At(!1);let t=xe.useContext(Oh),{basename:e,future:n,navigator:i}=xe.useContext(eo),{matches:r}=xe.useContext(to),{pathname:o}=Vu(),s=JSON.stringify(hx(r,n.v7_relativeSplatPath)),a=xe.useRef(!1);return vx(()=>{a.current=!0}),xe.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let f=px(u,JSON.parse(s),o,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ur([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,s,o,t])}function _x(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=xe.useContext(eo),{matches:r}=xe.useContext(to),{pathname:o}=Vu(),s=JSON.stringify(hx(r,i.v7_relativeSplatPath));return xe.useMemo(()=>px(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function a1(t,e){return l1(t,e)}function l1(t,e,n,i){Ea()||At(!1);let{navigator:r}=xe.useContext(eo),{matches:o}=xe.useContext(to),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Vu(),c;if(e){var f;let m=typeof e=="string"?ds(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||At(!1),c=m}else c=u;let d=c.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=UM(t,{pathname:p}),x=h1(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:ur([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:ur([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,i);return e&&x?xe.createElement(Hu.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Qi.Pop}},x):x}function u1(){let t=v1(),e=t1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return xe.createElement(xe.Fragment,null,xe.createElement("h2",null,"Unexpected Application Error!"),xe.createElement("h3",{style:{fontStyle:"italic"}},e),n?xe.createElement("pre",{style:r},n):null,null)}const c1=xe.createElement(u1,null);class f1 extends xe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?xe.createElement(to.Provider,{value:this.props.routeContext},xe.createElement(gx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function d1(t){let{routeContext:e,match:n,children:i}=t,r=xe.useContext(Oh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),xe.createElement(to.Provider,{value:e},i)}function h1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||At(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:p}=n,g=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let p,g=!1,x=null,m=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||c1,l&&(u<0&&d===0?(g=!0,m=null):u===d&&(g=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(s.slice(0,d+1)),_=()=>{let v;return p?v=x:g?v=m:f.route.Component?v=xe.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=c,xe.createElement(d1,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?xe.createElement(f1,{location:n.location,revalidation:n.revalidation,component:x,error:p,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var xx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xx||{}),pu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pu||{});function p1(t){let e=xe.useContext(Oh);return e||At(!1),e}function m1(t){let e=xe.useContext(i1);return e||At(!1),e}function g1(t){let e=xe.useContext(to);return e||At(!1),e}function yx(t){let e=g1(),n=e.matches[e.matches.length-1];return n.route.id||At(!1),n.route.id}function v1(){var t;let e=xe.useContext(gx),n=m1(pu.UseRouteError),i=yx(pu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function _1(){let{router:t}=p1(xx.UseNavigateStable),e=yx(pu.UseNavigateStable),n=xe.useRef(!1);return vx(()=>{n.current=!0}),xe.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,da({fromRouteId:e},o)))},[t,e])}function Ol(t){At(!1)}function x1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Qi.Pop,navigator:o,static:s=!1,future:a}=t;Ea()&&At(!1);let l=e.replace(/^\/*/,"/"),u=xe.useMemo(()=>({basename:l,navigator:o,static:s,future:da({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=ds(i));let{pathname:c="/",search:f="",hash:d="",state:p=null,key:g="default"}=i,x=xe.useMemo(()=>{let m=kh(c,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:p,key:g},navigationType:r}},[l,c,f,d,p,g,r]);return x==null?null:xe.createElement(eo.Provider,{value:u},xe.createElement(Hu.Provider,{children:n,value:x}))}function y1(t){let{children:e,location:n}=t;return a1(xd(e),n)}new Promise(()=>{});function xd(t,e){e===void 0&&(e=[]);let n=[];return xe.Children.forEach(t,(i,r)=>{if(!xe.isValidElement(i))return;let o=[...e,r];if(i.type===xe.Fragment){n.push.apply(n,xd(i.props.children,o));return}i.type!==Ol&&At(!1),!i.props.index||!i.props.children||At(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=xd(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yd(){return yd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},yd.apply(this,arguments)}function S1(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function E1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function M1(t,e){return t.button===0&&(!e||e==="_self")&&!E1(t)}const w1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],T1="6";try{window.__reactRouterVersion=T1}catch{}const A1="startTransition",Tm=yS[A1];function C1(t){let{basename:e,children:n,future:i,window:r}=t,o=xe.useRef();o.current==null&&(o.current=IM({window:r,v5Compat:!0}));let s=o.current,[a,l]=xe.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},c=xe.useCallback(f=>{u&&Tm?Tm(()=>l(f)):l(f)},[l,u]);return xe.useLayoutEffect(()=>s.listen(c),[s,c]),xe.createElement(x1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}const b1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sx=xe.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,d=S1(e,w1),{basename:p}=xe.useContext(eo),g,x=!1;if(typeof u=="string"&&R1.test(u)&&(g=u,b1))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),R=kh(E.pathname,p);E.origin===v.origin&&R!=null?u=R+E.search+E.hash:x=!0}catch{}let m=r1(u,{relative:r}),h=P1(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:r,unstable_viewTransition:f});function _(v){i&&i(v),v.defaultPrevented||h(v)}return xe.createElement("a",yd({},d,{href:g||m,onClick:x||o?i:_,ref:n,target:l}))});var Am;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Am||(Am={}));var Cm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Cm||(Cm={}));function P1(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=o1(),u=Vu(),c=_x(t,{relative:s});return xe.useCallback(f=>{if(M1(f,n)){f.preventDefault();let d=i!==void 0?i:hu(u)===hu(c);l(t,{replace:d,state:r,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,i,r,n,t,o,s,a])}const L1=t=>{const{value:e,setValue:n}=t,i=xe.useCallback(r=>{n(Number(r.replace(/^0+/,"")))},[n]);return Oe.jsx("input",{type:"number",inputMode:"numeric",pattern:"[0-9]*",size:3,min:0,max:100,className:"items-center border max-w-12 border-gray-300 bg-gray-50  focus:outline-gray-600  rounded-md p-1 focus:text-primary ",value:e,onChange:r=>i(r.target.value)})};function I1(t,e){const n={};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const N1=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,D1=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,U1={};function bm(t,e){return(U1.jsx?D1:N1).test(t)}const k1=/[ \t\n\f\r]/g;function O1(t){return typeof t=="object"?t.type==="text"?Rm(t.value):!1:Rm(t)}function Rm(t){return t.replace(k1,"")===""}class Ma{constructor(e,n,i){this.property=e,this.normal=n,i&&(this.space=i)}}Ma.prototype.property={};Ma.prototype.normal={};Ma.prototype.space=null;function Ex(t,e){const n={},i={};let r=-1;for(;++r<t.length;)Object.assign(n,t[r].property),Object.assign(i,t[r].normal);return new Ma(n,i,e)}function Sd(t){return t.toLowerCase()}class On{constructor(e,n){this.property=e,this.attribute=n}}On.prototype.space=null;On.prototype.boolean=!1;On.prototype.booleanish=!1;On.prototype.overloadedBoolean=!1;On.prototype.number=!1;On.prototype.commaSeparated=!1;On.prototype.spaceSeparated=!1;On.prototype.commaOrSpaceSeparated=!1;On.prototype.mustUseProperty=!1;On.prototype.defined=!1;let F1=0;const Ve=no(),wt=no(),Mx=no(),de=no(),lt=no(),Wo=no(),gn=no();function no(){return 2**++F1}const Ed=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ve,booleanish:wt,commaOrSpaceSeparated:gn,commaSeparated:Wo,number:de,overloadedBoolean:Mx,spaceSeparated:lt},Symbol.toStringTag,{value:"Module"})),Pc=Object.keys(Ed);class Fh extends On{constructor(e,n,i,r){let o=-1;if(super(e,n),Pm(this,"space",r),typeof i=="number")for(;++o<Pc.length;){const s=Pc[o];Pm(this,Pc[o],(i&Ed[s])===Ed[s])}}}Fh.prototype.defined=!0;function Pm(t,e,n){n&&(t[e]=n)}const z1={}.hasOwnProperty;function hs(t){const e={},n={};let i;for(i in t.properties)if(z1.call(t.properties,i)){const r=t.properties[i],o=new Fh(i,t.transform(t.attributes||{},i),r,t.space);t.mustUseProperty&&t.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),e[i]=o,n[Sd(i)]=i,n[Sd(o.attribute)]=i}return new Ma(e,n,t.space)}const wx=hs({space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Tx=hs({space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Ax(t,e){return e in t?t[e]:e}function Cx(t,e){return Ax(t,e.toLowerCase())}const bx=hs({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Cx,properties:{xmlns:null,xmlnsXLink:null}}),Rx=hs({transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:wt,ariaAutoComplete:null,ariaBusy:wt,ariaChecked:wt,ariaColCount:de,ariaColIndex:de,ariaColSpan:de,ariaControls:lt,ariaCurrent:null,ariaDescribedBy:lt,ariaDetails:null,ariaDisabled:wt,ariaDropEffect:lt,ariaErrorMessage:null,ariaExpanded:wt,ariaFlowTo:lt,ariaGrabbed:wt,ariaHasPopup:null,ariaHidden:wt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:lt,ariaLevel:de,ariaLive:null,ariaModal:wt,ariaMultiLine:wt,ariaMultiSelectable:wt,ariaOrientation:null,ariaOwns:lt,ariaPlaceholder:null,ariaPosInSet:de,ariaPressed:wt,ariaReadOnly:wt,ariaRelevant:null,ariaRequired:wt,ariaRoleDescription:lt,ariaRowCount:de,ariaRowIndex:de,ariaRowSpan:de,ariaSelected:wt,ariaSetSize:de,ariaSort:null,ariaValueMax:de,ariaValueMin:de,ariaValueNow:de,ariaValueText:null,role:null}}),B1=hs({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Cx,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Wo,acceptCharset:lt,accessKey:lt,action:null,allow:null,allowFullScreen:Ve,allowPaymentRequest:Ve,allowUserMedia:Ve,alt:null,as:null,async:Ve,autoCapitalize:null,autoComplete:lt,autoFocus:Ve,autoPlay:Ve,blocking:lt,capture:null,charSet:null,checked:Ve,cite:null,className:lt,cols:de,colSpan:null,content:null,contentEditable:wt,controls:Ve,controlsList:lt,coords:de|Wo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ve,defer:Ve,dir:null,dirName:null,disabled:Ve,download:Mx,draggable:wt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ve,formTarget:null,headers:lt,height:de,hidden:Ve,high:de,href:null,hrefLang:null,htmlFor:lt,httpEquiv:lt,id:null,imageSizes:null,imageSrcSet:null,inert:Ve,inputMode:null,integrity:null,is:null,isMap:Ve,itemId:null,itemProp:lt,itemRef:lt,itemScope:Ve,itemType:lt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ve,low:de,manifest:null,max:null,maxLength:de,media:null,method:null,min:null,minLength:de,multiple:Ve,muted:Ve,name:null,nonce:null,noModule:Ve,noValidate:Ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ve,optimum:de,pattern:null,ping:lt,placeholder:null,playsInline:Ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ve,referrerPolicy:null,rel:lt,required:Ve,reversed:Ve,rows:de,rowSpan:de,sandbox:lt,scope:null,scoped:Ve,seamless:Ve,selected:Ve,shadowRootClonable:Ve,shadowRootDelegatesFocus:Ve,shadowRootMode:null,shape:null,size:de,sizes:null,slot:null,span:de,spellCheck:wt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:de,step:null,style:null,tabIndex:de,target:null,title:null,translate:null,type:null,typeMustMatch:Ve,useMap:null,value:wt,width:de,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:lt,axis:null,background:null,bgColor:null,border:de,borderColor:null,bottomMargin:de,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ve,declare:Ve,event:null,face:null,frame:null,frameBorder:null,hSpace:de,leftMargin:de,link:null,longDesc:null,lowSrc:null,marginHeight:de,marginWidth:de,noResize:Ve,noHref:Ve,noShade:Ve,noWrap:Ve,object:null,profile:null,prompt:null,rev:null,rightMargin:de,rules:null,scheme:null,scrolling:wt,standby:null,summary:null,text:null,topMargin:de,valueType:null,version:null,vAlign:null,vLink:null,vSpace:de,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ve,disableRemotePlayback:Ve,prefix:null,property:null,results:de,security:null,unselectable:null}}),H1=hs({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Ax,properties:{about:gn,accentHeight:de,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:de,amplitude:de,arabicForm:null,ascent:de,attributeName:null,attributeType:null,azimuth:de,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:de,by:null,calcMode:null,capHeight:de,className:lt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:de,diffuseConstant:de,direction:null,display:null,dur:null,divisor:de,dominantBaseline:null,download:Ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:de,enableBackground:null,end:null,event:null,exponent:de,externalResourcesRequired:null,fill:null,fillOpacity:de,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Wo,g2:Wo,glyphName:Wo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:de,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:de,horizOriginX:de,horizOriginY:de,id:null,ideographic:de,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:de,k:de,k1:de,k2:de,k3:de,k4:de,kernelMatrix:gn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:de,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:de,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:de,overlineThickness:de,paintOrder:null,panose1:null,path:null,pathLength:de,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:lt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:de,pointsAtY:de,pointsAtZ:de,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:gn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:gn,rev:gn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:gn,requiredFeatures:gn,requiredFonts:gn,requiredFormats:gn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:de,specularExponent:de,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:de,strikethroughThickness:de,string:null,stroke:null,strokeDashArray:gn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:de,strokeOpacity:de,strokeWidth:null,style:null,surfaceScale:de,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:gn,tabIndex:de,tableValues:null,target:null,targetX:de,targetY:de,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:gn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:de,underlineThickness:de,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:de,values:null,vAlphabetic:de,vMathematical:de,vectorEffect:null,vHanging:de,vIdeographic:de,version:null,vertAdvY:de,vertOriginX:de,vertOriginY:de,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:de,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),V1=/^data[-\w.:]+$/i,Lm=/-[a-z]/g,G1=/[A-Z]/g;function W1(t,e){const n=Sd(e);let i=e,r=On;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&V1.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(Lm,X1);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=e.slice(4);if(!Lm.test(o)){let s=o.replace(G1,j1);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}r=Fh}return new r(i,e)}function j1(t){return"-"+t.toLowerCase()}function X1(t){return t.charAt(1).toUpperCase()}const $1={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},q1=Ex([Tx,wx,bx,Rx,B1],"html"),zh=Ex([Tx,wx,bx,Rx,H1],"svg");function Y1(t){return t.join(" ").trim()}var Px={},Im=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,K1=/\n/g,Z1=/^\s*/,Q1=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,J1=/^:\s*/,ew=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,tw=/^[;\s]*/,nw=/^\s+|\s+$/g,iw=`
`,Nm="/",Dm="*",Ur="",rw="comment",ow="declaration",sw=function(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,i=1;function r(g){var x=g.match(K1);x&&(n+=x.length);var m=g.lastIndexOf(iw);i=~m?g.length-m:i+g.length}function o(){var g={line:n,column:i};return function(x){return x.position=new s(g),u(),x}}function s(g){this.start=g,this.end={line:n,column:i},this.source=e.source}s.prototype.content=t;function a(g){var x=new Error(e.source+":"+n+":"+i+": "+g);if(x.reason=g,x.filename=e.source,x.line=n,x.column=i,x.source=t,!e.silent)throw x}function l(g){var x=g.exec(t);if(x){var m=x[0];return r(m),t=t.slice(m.length),x}}function u(){l(Z1)}function c(g){var x;for(g=g||[];x=f();)x!==!1&&g.push(x);return g}function f(){var g=o();if(!(Nm!=t.charAt(0)||Dm!=t.charAt(1))){for(var x=2;Ur!=t.charAt(x)&&(Dm!=t.charAt(x)||Nm!=t.charAt(x+1));)++x;if(x+=2,Ur===t.charAt(x-1))return a("End of comment missing");var m=t.slice(2,x-2);return i+=2,r(m),t=t.slice(x),i+=2,g({type:rw,comment:m})}}function d(){var g=o(),x=l(Q1);if(x){if(f(),!l(J1))return a("property missing ':'");var m=l(ew),h=g({type:ow,property:Um(x[0].replace(Im,Ur)),value:m?Um(m[0].replace(Im,Ur)):Ur});return l(tw),h}}function p(){var g=[];c(g);for(var x;x=d();)x!==!1&&(g.push(x),c(g));return g}return u(),p()};function Um(t){return t?t.replace(nw,Ur):Ur}var aw=fp&&fp.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Px,"__esModule",{value:!0});var lw=aw(sw);function uw(t,e){var n=null;if(!t||typeof t!="string")return n;var i=(0,lw.default)(t),r=typeof e=="function";return i.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;r?e(s,a,o):a&&(n=n||{},n[s]=a)}}),n}var km=Px.default=uw;const cw=km.default||km,Lx=Ix("end"),Bh=Ix("start");function Ix(t){return e;function e(n){const i=n&&n.position&&n.position[t]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function fw(t){const e=Bh(t),n=Lx(t);if(e&&n)return{start:e,end:n}}function Xs(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Om(t.position):"start"in t||"end"in t?Om(t):"line"in t||"column"in t?Md(t):""}function Md(t){return Fm(t&&t.line)+":"+Fm(t&&t.column)}function Om(t){return Md(t&&t.start)+"-"+Md(t&&t.end)}function Fm(t){return t&&typeof t=="number"?t:1}class $t extends Error{constructor(e,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof e=="string"?r=e:!o.cause&&e&&(s=!0,r=e.message,o.cause=e),!o.ruleId&&!o.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?o.ruleId=i:(o.source=i.slice(0,l),o.ruleId=i.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=Xs(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}$t.prototype.file="";$t.prototype.name="";$t.prototype.reason="";$t.prototype.message="";$t.prototype.stack="";$t.prototype.column=void 0;$t.prototype.line=void 0;$t.prototype.ancestors=void 0;$t.prototype.cause=void 0;$t.prototype.fatal=void 0;$t.prototype.place=void 0;$t.prototype.ruleId=void 0;$t.prototype.source=void 0;const Hh={}.hasOwnProperty,dw=new Map,hw=/[A-Z]/g,pw=/-([a-z])/g,mw=new Set(["table","tbody","thead","tfoot","tr"]),gw=new Set(["td","th"]),Nx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function vw(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let i;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=Tw(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=ww(n,e.jsx,e.jsxs)}const r={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:i,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?zh:q1,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},o=Dx(r,t,void 0);return o&&typeof o!="string"?o:r.create(t,r.Fragment,{children:o||void 0},void 0)}function Dx(t,e,n){if(e.type==="element")return _w(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return xw(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return Sw(t,e,n);if(e.type==="mdxjsEsm")return yw(t,e);if(e.type==="root")return Ew(t,e,n);if(e.type==="text")return Mw(t,e)}function _w(t,e,n){const i=t.schema;let r=i;e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=zh,t.schema=r),t.ancestors.push(e);const o=kx(t,e.tagName,!1),s=Aw(t,e);let a=Gh(t,e);return mw.has(e.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!O1(l):!0})),Ux(t,s,o,e),Vh(s,a),t.ancestors.pop(),t.schema=i,t.create(e,o,s,n)}function xw(t,e){if(e.data&&e.data.estree&&t.evaluater){const i=e.data.estree.body[0];return i.type,t.evaluater.evaluateExpression(i.expression)}ha(t,e.position)}function yw(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);ha(t,e.position)}function Sw(t,e,n){const i=t.schema;let r=i;e.name==="svg"&&i.space==="html"&&(r=zh,t.schema=r),t.ancestors.push(e);const o=e.name===null?t.Fragment:kx(t,e.name,!0),s=Cw(t,e),a=Gh(t,e);return Ux(t,s,o,e),Vh(s,a),t.ancestors.pop(),t.schema=i,t.create(e,o,s,n)}function Ew(t,e,n){const i={};return Vh(i,Gh(t,e)),t.create(e,t.Fragment,i,n)}function Mw(t,e){return e.value}function Ux(t,e,n,i){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=i)}function Vh(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function ww(t,e,n){return i;function i(r,o,s,a){const u=Array.isArray(s.children)?n:e;return a?u(o,s,a):u(o,s)}}function Tw(t,e){return n;function n(i,r,o,s){const a=Array.isArray(o.children),l=Bh(i);return e(r,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function Aw(t,e){const n={};let i,r;for(r in e.properties)if(r!=="children"&&Hh.call(e.properties,r)){const o=bw(t,r,e.properties[r]);if(o){const[s,a]=o;t.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&gw.has(e.tagName)?i=a:n[s]=a}}if(i){const o=n.style||(n.style={});o[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function Cw(t,e){const n={};for(const i of e.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&t.evaluater){const o=i.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,t.evaluater.evaluateExpression(a.argument))}else ha(t,e.position);else{const r=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&t.evaluater){const a=i.value.data.estree.body[0];a.type,o=t.evaluater.evaluateExpression(a.expression)}else ha(t,e.position);else o=i.value===null?!0:i.value;n[r]=o}return n}function Gh(t,e){const n=[];let i=-1;const r=t.passKeys?new Map:dw;for(;++i<e.children.length;){const o=e.children[i];let s;if(t.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=r.get(l)||0;s=l+"-"+u,r.set(l,u+1)}}const a=Dx(t,o,s);a!==void 0&&n.push(a)}return n}function bw(t,e,n){const i=W1(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?I1(n):Y1(n)),i.property==="style"){let r=typeof n=="object"?n:Rw(t,String(n));return t.stylePropertyNameCase==="css"&&(r=Pw(r)),["style",r]}return[t.elementAttributeNameCase==="react"&&i.space?$1[i.property]||i.property:i.attribute,n]}}function Rw(t,e){const n={};try{cw(e,i)}catch(r){if(!t.ignoreInvalidStyle){const o=r,s=new $t("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=Nx+"#cannot-parse-style-attribute",s}}return n;function i(r,o){let s=r;s.slice(0,2)!=="--"&&(s.slice(0,4)==="-ms-"&&(s="ms-"+s.slice(4)),s=s.replace(pw,Iw)),n[s]=o}}function kx(t,e,n){let i;if(!n)i={type:"Literal",value:e};else if(e.includes(".")){const r=e.split(".");let o=-1,s;for(;++o<r.length;){const a=bm(r[o])?{type:"Identifier",name:r[o]}:{type:"Literal",value:r[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}i=s}else i=bm(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(i.type==="Literal"){const r=i.value;return Hh.call(t.components,r)?t.components[r]:r}if(t.evaluater)return t.evaluater.evaluateExpression(i);ha(t)}function ha(t,e){const n=new $t("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=Nx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Pw(t){const e={};let n;for(n in t)Hh.call(t,n)&&(e[Lw(n)]=t[n]);return e}function Lw(t){let e=t.replace(hw,Nw);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function Iw(t,e){return e.toUpperCase()}function Nw(t){return"-"+t.toLowerCase()}const Lc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Dw={};function Uw(t,e){const n=Dw,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Ox(t,i,r)}function Ox(t,e,n){if(kw(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return zm(t.children,e,n)}return Array.isArray(t)?zm(t,e,n):""}function zm(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=Ox(t[r],e,n);return i.join("")}function kw(t){return!!(t&&typeof t=="object")}const Bm=document.createElement("i");function Wh(t){const e="&"+t+";";Bm.innerHTML=e;const n=Bm.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Pi(t,e,n,i){const r=t.length;let o=0,s;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)s=Array.from(i),s.unshift(e,n),t.splice(...s);else for(n&&t.splice(e,n);o<i.length;)s=i.slice(o,o+1e4),s.unshift(e,0),t.splice(...s),o+=1e4,e+=1e4}function Rn(t,e){return t.length>0?(Pi(t,t.length,0,e),t):e}const Hm={}.hasOwnProperty;function Ow(t){const e={};let n=-1;for(;++n<t.length;)Fw(e,t[n]);return e}function Fw(t,e){let n;for(n in e){const r=(Hm.call(t,n)?t[n]:void 0)||(t[n]={}),o=e[n];let s;if(o)for(s in o){Hm.call(r,s)||(r[s]=[]);const a=o[s];zw(r[s],Array.isArray(a)?a:a?[a]:[])}}}function zw(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);Pi(t,0,0,i)}function Fx(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function jo(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const oi=xr(/[A-Za-z]/),xn=xr(/[\dA-Za-z]/),Bw=xr(/[#-'*+\--9=?A-Z^-~]/);function wd(t){return t!==null&&(t<32||t===127)}const Td=xr(/\d/),Hw=xr(/[\dA-Fa-f]/),Vw=xr(/[!-/:-@[-`{-~]/);function Ue(t){return t!==null&&t<-2}function un(t){return t!==null&&(t<0||t===32)}function Ke(t){return t===-2||t===-1||t===32}const Gw=xr(new RegExp("\\p{P}|\\p{S}","u")),Ww=xr(/\s/);function xr(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function ps(t){const e=[];let n=-1,i=0,r=0;for(;++n<t.length;){const o=t.charCodeAt(n);let s="";if(o===37&&xn(t.charCodeAt(n+1))&&xn(t.charCodeAt(n+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=t.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),r=1):s="�"}else s=String.fromCharCode(o);s&&(e.push(t.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return e.join("")+t.slice(i)}function ct(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return Ke(l)?(t.enter(n),a(l)):e(l)}function a(l){return Ke(l)&&o++<r?(t.consume(l),a):(t.exit(n),e(l))}}const jw={tokenize:Xw};function Xw(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),ct(t,e,"linePrefix")}function r(a){return t.enter("paragraph"),o(a)}function o(a){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return Ue(a)?(t.consume(a),t.exit("chunkText"),o):(t.consume(a),s)}}const $w={tokenize:qw},Vm={tokenize:Yw};function qw(t){const e=this,n=[];let i=0,r,o,s;return a;function a(v){if(i<n.length){const E=n[i];return e.containerState=E[1],t.attempt(E[0].continuation,l,u)(v)}return u(v)}function l(v){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&_();const E=e.events.length;let R=E,y;for(;R--;)if(e.events[R][0]==="exit"&&e.events[R][1].type==="chunkFlow"){y=e.events[R][1].end;break}h(i);let b=E;for(;b<e.events.length;)e.events[b][1].end=Object.assign({},y),b++;return Pi(e.events,R+1,0,e.events.slice(E)),e.events.length=b,u(v)}return a(v)}function u(v){if(i===n.length){if(!r)return d(v);if(r.currentConstruct&&r.currentConstruct.concrete)return g(v);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Vm,c,f)(v)}function c(v){return r&&_(),h(i),d(v)}function f(v){return e.parser.lazy[e.now().line]=i!==n.length,s=e.now().offset,g(v)}function d(v){return e.containerState={},t.attempt(Vm,p,g)(v)}function p(v){return i++,n.push([e.currentConstruct,e.containerState]),d(v)}function g(v){if(v===null){r&&_(),h(0),t.consume(v);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:r}),x(v)}function x(v){if(v===null){m(t.exit("chunkFlow"),!0),h(0),t.consume(v);return}return Ue(v)?(t.consume(v),m(t.exit("chunkFlow")),i=0,e.interrupt=void 0,a):(t.consume(v),x)}function m(v,E){const R=e.sliceStream(v);if(E&&R.push(null),v.previous=o,o&&(o.next=v),o=v,r.defineSkip(v.start),r.write(R),e.parser.lazy[v.start.line]){let y=r.events.length;for(;y--;)if(r.events[y][1].start.offset<s&&(!r.events[y][1].end||r.events[y][1].end.offset>s))return;const b=e.events.length;let I=b,T,S;for(;I--;)if(e.events[I][0]==="exit"&&e.events[I][1].type==="chunkFlow"){if(T){S=e.events[I][1].end;break}T=!0}for(h(i),y=b;y<e.events.length;)e.events[y][1].end=Object.assign({},S),y++;Pi(e.events,I+1,0,e.events.slice(b)),e.events.length=y}}function h(v){let E=n.length;for(;E-- >v;){const R=n[E];e.containerState=R[1],R[0].exit.call(e,t)}n.length=v}function _(){r.write([null]),o=void 0,r=void 0,e.containerState._closeFlow=void 0}}function Yw(t,e,n){return ct(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Gm(t){if(t===null||un(t)||Ww(t))return 1;if(Gw(t))return 2}function jh(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const o=t[r].resolveAll;o&&!i.includes(o)&&(e=o(e,n),i.push(o))}return e}const Ad={name:"attention",tokenize:Zw,resolveAll:Kw};function Kw(t,e){let n=-1,i,r,o,s,a,l,u,c;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const f=Object.assign({},t[i][1].end),d=Object.assign({},t[n][1].start);Wm(f,-l),Wm(d,l),s={type:l>1?"strongSequence":"emphasisSequence",start:f,end:Object.assign({},t[i][1].end)},a={type:l>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[n][1].start),end:d},o={type:l>1?"strongText":"emphasisText",start:Object.assign({},t[i][1].end),end:Object.assign({},t[n][1].start)},r={type:l>1?"strong":"emphasis",start:Object.assign({},s.start),end:Object.assign({},a.end)},t[i][1].end=Object.assign({},s.start),t[n][1].start=Object.assign({},a.end),u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=Rn(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=Rn(u,[["enter",r,e],["enter",s,e],["exit",s,e],["enter",o,e]]),u=Rn(u,jh(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=Rn(u,[["exit",o,e],["enter",a,e],["exit",a,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(c=2,u=Rn(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):c=0,Pi(t,i-1,n-i+3,u),n=i+u.length-c-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function Zw(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Gm(i);let o;return s;function s(l){return o=l,t.enter("attentionSequence"),a(l)}function a(l){if(l===o)return t.consume(l),a;const u=t.exit("attentionSequence"),c=Gm(l),f=!c||c===2&&r||n.includes(l),d=!r||r===2&&c||n.includes(i);return u._open=!!(o===42?f:f&&(r||!d)),u._close=!!(o===42?d:d&&(c||!f)),e(l)}}function Wm(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const Qw={name:"autolink",tokenize:Jw};function Jw(t,e,n){let i=0;return r;function r(p){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),o}function o(p){return oi(p)?(t.consume(p),s):p===64?n(p):u(p)}function s(p){return p===43||p===45||p===46||xn(p)?(i=1,a(p)):u(p)}function a(p){return p===58?(t.consume(p),i=0,l):(p===43||p===45||p===46||xn(p))&&i++<32?(t.consume(p),a):(i=0,u(p))}function l(p){return p===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):p===null||p===32||p===60||wd(p)?n(p):(t.consume(p),l)}function u(p){return p===64?(t.consume(p),c):Bw(p)?(t.consume(p),u):n(p)}function c(p){return xn(p)?f(p):n(p)}function f(p){return p===46?(t.consume(p),i=0,c):p===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):d(p)}function d(p){if((p===45||xn(p))&&i++<63){const g=p===45?d:f;return t.consume(p),g}return n(p)}}const Gu={tokenize:eT,partial:!0};function eT(t,e,n){return i;function i(o){return Ke(o)?ct(t,r,"linePrefix")(o):r(o)}function r(o){return o===null||Ue(o)?e(o):n(o)}}const zx={name:"blockQuote",tokenize:tT,continuation:{tokenize:nT},exit:iT};function tT(t,e,n){const i=this;return r;function r(s){if(s===62){const a=i.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(s),t.exit("blockQuoteMarker"),o}return n(s)}function o(s){return Ke(s)?(t.enter("blockQuotePrefixWhitespace"),t.consume(s),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(s))}}function nT(t,e,n){const i=this;return r;function r(s){return Ke(s)?ct(t,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return t.attempt(zx,e,n)(s)}}function iT(t){t.exit("blockQuote")}const Bx={name:"characterEscape",tokenize:rT};function rT(t,e,n){return i;function i(o){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(o),t.exit("escapeMarker"),r}function r(o){return Vw(o)?(t.enter("characterEscapeValue"),t.consume(o),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(o)}}const Hx={name:"characterReference",tokenize:oT};function oT(t,e,n){const i=this;let r=0,o,s;return a;function a(f){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(f),t.exit("characterReferenceMarker"),l}function l(f){return f===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(f),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),o=31,s=xn,c(f))}function u(f){return f===88||f===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(f),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),o=6,s=Hw,c):(t.enter("characterReferenceValue"),o=7,s=Td,c(f))}function c(f){if(f===59&&r){const d=t.exit("characterReferenceValue");return s===xn&&!Wh(i.sliceSerialize(d))?n(f):(t.enter("characterReferenceMarker"),t.consume(f),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return s(f)&&r++<o?(t.consume(f),c):n(f)}}const jm={tokenize:aT,partial:!0},Xm={name:"codeFenced",tokenize:sT,concrete:!0};function sT(t,e,n){const i=this,r={tokenize:R,partial:!0};let o=0,s=0,a;return l;function l(y){return u(y)}function u(y){const b=i.events[i.events.length-1];return o=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,a=y,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),c(y)}function c(y){return y===a?(s++,t.consume(y),c):s<3?n(y):(t.exit("codeFencedFenceSequence"),Ke(y)?ct(t,f,"whitespace")(y):f(y))}function f(y){return y===null||Ue(y)?(t.exit("codeFencedFence"),i.interrupt?e(y):t.check(jm,x,E)(y)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),d(y))}function d(y){return y===null||Ue(y)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),f(y)):Ke(y)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),ct(t,p,"whitespace")(y)):y===96&&y===a?n(y):(t.consume(y),d)}function p(y){return y===null||Ue(y)?f(y):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),g(y))}function g(y){return y===null||Ue(y)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),f(y)):y===96&&y===a?n(y):(t.consume(y),g)}function x(y){return t.attempt(r,E,m)(y)}function m(y){return t.enter("lineEnding"),t.consume(y),t.exit("lineEnding"),h}function h(y){return o>0&&Ke(y)?ct(t,_,"linePrefix",o+1)(y):_(y)}function _(y){return y===null||Ue(y)?t.check(jm,x,E)(y):(t.enter("codeFlowValue"),v(y))}function v(y){return y===null||Ue(y)?(t.exit("codeFlowValue"),_(y)):(t.consume(y),v)}function E(y){return t.exit("codeFenced"),e(y)}function R(y,b,I){let T=0;return S;function S(j){return y.enter("lineEnding"),y.consume(j),y.exit("lineEnding"),P}function P(j){return y.enter("codeFencedFence"),Ke(j)?ct(y,O,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):O(j)}function O(j){return j===a?(y.enter("codeFencedFenceSequence"),H(j)):I(j)}function H(j){return j===a?(T++,y.consume(j),H):T>=s?(y.exit("codeFencedFenceSequence"),Ke(j)?ct(y,K,"whitespace")(j):K(j)):I(j)}function K(j){return j===null||Ue(j)?(y.exit("codeFencedFence"),b(j)):I(j)}}}function aT(t,e,n){const i=this;return r;function r(s){return s===null?n(s):(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),o)}function o(s){return i.parser.lazy[i.now().line]?n(s):e(s)}}const Ic={name:"codeIndented",tokenize:uT},lT={tokenize:cT,partial:!0};function uT(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),ct(t,o,"linePrefix",5)(u)}function o(u){const c=i.events[i.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):Ue(u)?t.attempt(lT,s,l)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||Ue(u)?(t.exit("codeFlowValue"),s(u)):(t.consume(u),a)}function l(u){return t.exit("codeIndented"),e(u)}}function cT(t,e,n){const i=this;return r;function r(s){return i.parser.lazy[i.now().line]?n(s):Ue(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),r):ct(t,o,"linePrefix",5)(s)}function o(s){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):Ue(s)?r(s):n(s)}}const fT={name:"codeText",tokenize:pT,resolve:dT,previous:hT};function dT(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function hT(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function pT(t,e,n){let i=0,r,o;return s;function s(f){return t.enter("codeText"),t.enter("codeTextSequence"),a(f)}function a(f){return f===96?(t.consume(f),i++,a):(t.exit("codeTextSequence"),l(f))}function l(f){return f===null?n(f):f===32?(t.enter("space"),t.consume(f),t.exit("space"),l):f===96?(o=t.enter("codeTextSequence"),r=0,c(f)):Ue(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),l):(t.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||Ue(f)?(t.exit("codeTextData"),l(f)):(t.consume(f),u)}function c(f){return f===96?(t.consume(f),r++,c):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(f)):(o.type="codeTextData",u(f))}}class mT{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Ts(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Ts(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Ts(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);Ts(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Ts(this.left,n.reverse())}}}function Ts(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function Vx(t){const e={};let n=-1,i,r,o,s,a,l,u;const c=new mT(t);for(;++n<c.length;){for(;n in e;)n=e[n];if(i=c.get(n),n&&i[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,gT(c,n)),n=e[n],u=!0);else if(i[1]._container){for(o=n,r=void 0;o--&&(s=c.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank");)s[0]==="enter"&&(r&&(c.get(r)[1].type="lineEndingBlank"),s[1].type="lineEnding",r=o);r&&(i[1].end=Object.assign({},c.get(r)[1].start),a=c.slice(r,n),a.unshift(i),c.splice(r,n-r+1,a))}}return Pi(t,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function gT(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const o=[],s=n._tokenizer||i.parser[n.contentType](n.start),a=s.events,l=[],u={};let c,f,d=-1,p=n,g=0,x=0;const m=[x];for(;p;){for(;t.get(++r)[1]!==p;);o.push(r),p._tokenizer||(c=i.sliceStream(p),p.next||c.push(null),f&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(c),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),f=p,p=p.next}for(p=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(x=d+1,m.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):m.pop(),d=m.length;d--;){const h=a.slice(m[d],m[d+1]),_=o.pop();l.push([_,_+h.length-1]),t.splice(_,2,h)}for(l.reverse(),d=-1;++d<l.length;)u[g+l[d][0]]=g+l[d][1],g+=l[d][1]-l[d][0]-1;return u}const vT={tokenize:yT,resolve:xT},_T={tokenize:ST,partial:!0};function xT(t){return Vx(t),t}function yT(t,e){let n;return i;function i(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?o(a):Ue(a)?t.check(_T,s,o)(a):(t.consume(a),r)}function o(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function s(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function ST(t,e,n){const i=this;return r;function r(s){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),ct(t,o,"linePrefix")}function o(s){if(s===null||Ue(s))return n(s);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):t.interrupt(i.parser.constructs.flow,n,e)(s)}}function Gx(t,e,n,i,r,o,s,a,l){const u=l||Number.POSITIVE_INFINITY;let c=0;return f;function f(h){return h===60?(t.enter(i),t.enter(r),t.enter(o),t.consume(h),t.exit(o),d):h===null||h===32||h===41||wd(h)?n(h):(t.enter(i),t.enter(s),t.enter(a),t.enter("chunkString",{contentType:"string"}),x(h))}function d(h){return h===62?(t.enter(o),t.consume(h),t.exit(o),t.exit(r),t.exit(i),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===62?(t.exit("chunkString"),t.exit(a),d(h)):h===null||h===60||Ue(h)?n(h):(t.consume(h),h===92?g:p)}function g(h){return h===60||h===62||h===92?(t.consume(h),p):p(h)}function x(h){return!c&&(h===null||h===41||un(h))?(t.exit("chunkString"),t.exit(a),t.exit(s),t.exit(i),e(h)):c<u&&h===40?(t.consume(h),c++,x):h===41?(t.consume(h),c--,x):h===null||h===32||h===40||wd(h)?n(h):(t.consume(h),h===92?m:x)}function m(h){return h===40||h===41||h===92?(t.consume(h),x):x(h)}}function Wx(t,e,n,i,r,o){const s=this;let a=0,l;return u;function u(p){return t.enter(i),t.enter(r),t.consume(p),t.exit(r),t.enter(o),c}function c(p){return a>999||p===null||p===91||p===93&&!l||p===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(t.exit(o),t.enter(r),t.consume(p),t.exit(r),t.exit(i),e):Ue(p)?(t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),c):(t.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===null||p===91||p===93||Ue(p)||a++>999?(t.exit("chunkString"),c(p)):(t.consume(p),l||(l=!Ke(p)),p===92?d:f)}function d(p){return p===91||p===92||p===93?(t.consume(p),a++,f):f(p)}}function jx(t,e,n,i,r,o){let s;return a;function a(d){return d===34||d===39||d===40?(t.enter(i),t.enter(r),t.consume(d),t.exit(r),s=d===40?41:d,l):n(d)}function l(d){return d===s?(t.enter(r),t.consume(d),t.exit(r),t.exit(i),e):(t.enter(o),u(d))}function u(d){return d===s?(t.exit(o),l(s)):d===null?n(d):Ue(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),ct(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===s||d===null||Ue(d)?(t.exit("chunkString"),u(d)):(t.consume(d),d===92?f:c)}function f(d){return d===s||d===92?(t.consume(d),c):c(d)}}function $s(t,e){let n;return i;function i(r){return Ue(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):Ke(r)?ct(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const ET={name:"definition",tokenize:wT},MT={tokenize:TT,partial:!0};function wT(t,e,n){const i=this;let r;return o;function o(p){return t.enter("definition"),s(p)}function s(p){return Wx.call(i,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return r=jo(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(t.enter("definitionMarker"),t.consume(p),t.exit("definitionMarker"),l):n(p)}function l(p){return un(p)?$s(t,u)(p):u(p)}function u(p){return Gx(t,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return t.attempt(MT,f,f)(p)}function f(p){return Ke(p)?ct(t,d,"whitespace")(p):d(p)}function d(p){return p===null||Ue(p)?(t.exit("definition"),i.parser.defined.push(r),e(p)):n(p)}}function TT(t,e,n){return i;function i(a){return un(a)?$s(t,r)(a):n(a)}function r(a){return jx(t,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return Ke(a)?ct(t,s,"whitespace")(a):s(a)}function s(a){return a===null||Ue(a)?e(a):n(a)}}const AT={name:"hardBreakEscape",tokenize:CT};function CT(t,e,n){return i;function i(o){return t.enter("hardBreakEscape"),t.consume(o),r}function r(o){return Ue(o)?(t.exit("hardBreakEscape"),e(o)):n(o)}}const bT={name:"headingAtx",tokenize:PT,resolve:RT};function RT(t,e){let n=t.length-2,i=3,r,o;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},o={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},Pi(t,i,n-i+1,[["enter",r,e],["enter",o,e],["exit",o,e],["exit",r,e]])),t}function PT(t,e,n){let i=0;return r;function r(c){return t.enter("atxHeading"),o(c)}function o(c){return t.enter("atxHeadingSequence"),s(c)}function s(c){return c===35&&i++<6?(t.consume(c),s):c===null||un(c)?(t.exit("atxHeadingSequence"),a(c)):n(c)}function a(c){return c===35?(t.enter("atxHeadingSequence"),l(c)):c===null||Ue(c)?(t.exit("atxHeading"),e(c)):Ke(c)?ct(t,a,"whitespace")(c):(t.enter("atxHeadingText"),u(c))}function l(c){return c===35?(t.consume(c),l):(t.exit("atxHeadingSequence"),a(c))}function u(c){return c===null||c===35||un(c)?(t.exit("atxHeadingText"),a(c)):(t.consume(c),u)}}const LT=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$m=["pre","script","style","textarea"],IT={name:"htmlFlow",tokenize:kT,resolveTo:UT,concrete:!0},NT={tokenize:FT,partial:!0},DT={tokenize:OT,partial:!0};function UT(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function kT(t,e,n){const i=this;let r,o,s,a,l;return u;function u(M){return c(M)}function c(M){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(M),f}function f(M){return M===33?(t.consume(M),d):M===47?(t.consume(M),o=!0,x):M===63?(t.consume(M),r=3,i.interrupt?e:A):oi(M)?(t.consume(M),s=String.fromCharCode(M),m):n(M)}function d(M){return M===45?(t.consume(M),r=2,p):M===91?(t.consume(M),r=5,a=0,g):oi(M)?(t.consume(M),r=4,i.interrupt?e:A):n(M)}function p(M){return M===45?(t.consume(M),i.interrupt?e:A):n(M)}function g(M){const k="CDATA[";return M===k.charCodeAt(a++)?(t.consume(M),a===k.length?i.interrupt?e:O:g):n(M)}function x(M){return oi(M)?(t.consume(M),s=String.fromCharCode(M),m):n(M)}function m(M){if(M===null||M===47||M===62||un(M)){const k=M===47,Z=s.toLowerCase();return!k&&!o&&$m.includes(Z)?(r=1,i.interrupt?e(M):O(M)):LT.includes(s.toLowerCase())?(r=6,k?(t.consume(M),h):i.interrupt?e(M):O(M)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(M):o?_(M):v(M))}return M===45||xn(M)?(t.consume(M),s+=String.fromCharCode(M),m):n(M)}function h(M){return M===62?(t.consume(M),i.interrupt?e:O):n(M)}function _(M){return Ke(M)?(t.consume(M),_):S(M)}function v(M){return M===47?(t.consume(M),S):M===58||M===95||oi(M)?(t.consume(M),E):Ke(M)?(t.consume(M),v):S(M)}function E(M){return M===45||M===46||M===58||M===95||xn(M)?(t.consume(M),E):R(M)}function R(M){return M===61?(t.consume(M),y):Ke(M)?(t.consume(M),R):v(M)}function y(M){return M===null||M===60||M===61||M===62||M===96?n(M):M===34||M===39?(t.consume(M),l=M,b):Ke(M)?(t.consume(M),y):I(M)}function b(M){return M===l?(t.consume(M),l=null,T):M===null||Ue(M)?n(M):(t.consume(M),b)}function I(M){return M===null||M===34||M===39||M===47||M===60||M===61||M===62||M===96||un(M)?R(M):(t.consume(M),I)}function T(M){return M===47||M===62||Ke(M)?v(M):n(M)}function S(M){return M===62?(t.consume(M),P):n(M)}function P(M){return M===null||Ue(M)?O(M):Ke(M)?(t.consume(M),P):n(M)}function O(M){return M===45&&r===2?(t.consume(M),Y):M===60&&r===1?(t.consume(M),Q):M===62&&r===4?(t.consume(M),ue):M===63&&r===3?(t.consume(M),A):M===93&&r===5?(t.consume(M),J):Ue(M)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(NT,ye,H)(M)):M===null||Ue(M)?(t.exit("htmlFlowData"),H(M)):(t.consume(M),O)}function H(M){return t.check(DT,K,ye)(M)}function K(M){return t.enter("lineEnding"),t.consume(M),t.exit("lineEnding"),j}function j(M){return M===null||Ue(M)?H(M):(t.enter("htmlFlowData"),O(M))}function Y(M){return M===45?(t.consume(M),A):O(M)}function Q(M){return M===47?(t.consume(M),s="",U):O(M)}function U(M){if(M===62){const k=s.toLowerCase();return $m.includes(k)?(t.consume(M),ue):O(M)}return oi(M)&&s.length<8?(t.consume(M),s+=String.fromCharCode(M),U):O(M)}function J(M){return M===93?(t.consume(M),A):O(M)}function A(M){return M===62?(t.consume(M),ue):M===45&&r===2?(t.consume(M),A):O(M)}function ue(M){return M===null||Ue(M)?(t.exit("htmlFlowData"),ye(M)):(t.consume(M),ue)}function ye(M){return t.exit("htmlFlow"),e(M)}}function OT(t,e,n){const i=this;return r;function r(s){return Ue(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),o):n(s)}function o(s){return i.parser.lazy[i.now().line]?n(s):e(s)}}function FT(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(Gu,e,n)}}const zT={name:"htmlText",tokenize:BT};function BT(t,e,n){const i=this;let r,o,s;return a;function a(A){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(A),l}function l(A){return A===33?(t.consume(A),u):A===47?(t.consume(A),R):A===63?(t.consume(A),v):oi(A)?(t.consume(A),I):n(A)}function u(A){return A===45?(t.consume(A),c):A===91?(t.consume(A),o=0,g):oi(A)?(t.consume(A),_):n(A)}function c(A){return A===45?(t.consume(A),p):n(A)}function f(A){return A===null?n(A):A===45?(t.consume(A),d):Ue(A)?(s=f,Q(A)):(t.consume(A),f)}function d(A){return A===45?(t.consume(A),p):f(A)}function p(A){return A===62?Y(A):A===45?d(A):f(A)}function g(A){const ue="CDATA[";return A===ue.charCodeAt(o++)?(t.consume(A),o===ue.length?x:g):n(A)}function x(A){return A===null?n(A):A===93?(t.consume(A),m):Ue(A)?(s=x,Q(A)):(t.consume(A),x)}function m(A){return A===93?(t.consume(A),h):x(A)}function h(A){return A===62?Y(A):A===93?(t.consume(A),h):x(A)}function _(A){return A===null||A===62?Y(A):Ue(A)?(s=_,Q(A)):(t.consume(A),_)}function v(A){return A===null?n(A):A===63?(t.consume(A),E):Ue(A)?(s=v,Q(A)):(t.consume(A),v)}function E(A){return A===62?Y(A):v(A)}function R(A){return oi(A)?(t.consume(A),y):n(A)}function y(A){return A===45||xn(A)?(t.consume(A),y):b(A)}function b(A){return Ue(A)?(s=b,Q(A)):Ke(A)?(t.consume(A),b):Y(A)}function I(A){return A===45||xn(A)?(t.consume(A),I):A===47||A===62||un(A)?T(A):n(A)}function T(A){return A===47?(t.consume(A),Y):A===58||A===95||oi(A)?(t.consume(A),S):Ue(A)?(s=T,Q(A)):Ke(A)?(t.consume(A),T):Y(A)}function S(A){return A===45||A===46||A===58||A===95||xn(A)?(t.consume(A),S):P(A)}function P(A){return A===61?(t.consume(A),O):Ue(A)?(s=P,Q(A)):Ke(A)?(t.consume(A),P):T(A)}function O(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(t.consume(A),r=A,H):Ue(A)?(s=O,Q(A)):Ke(A)?(t.consume(A),O):(t.consume(A),K)}function H(A){return A===r?(t.consume(A),r=void 0,j):A===null?n(A):Ue(A)?(s=H,Q(A)):(t.consume(A),H)}function K(A){return A===null||A===34||A===39||A===60||A===61||A===96?n(A):A===47||A===62||un(A)?T(A):(t.consume(A),K)}function j(A){return A===47||A===62||un(A)?T(A):n(A)}function Y(A){return A===62?(t.consume(A),t.exit("htmlTextData"),t.exit("htmlText"),e):n(A)}function Q(A){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),U}function U(A){return Ke(A)?ct(t,J,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):J(A)}function J(A){return t.enter("htmlTextData"),s(A)}}const Xh={name:"labelEnd",tokenize:XT,resolveTo:jT,resolveAll:WT},HT={tokenize:$T},VT={tokenize:qT},GT={tokenize:YT};function WT(t){let e=-1;for(;++e<t.length;){const n=t[e][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(t.splice(e+1,n.type==="labelImage"?4:2),n.type="data",e++)}return t}function jT(t,e){let n=t.length,i=0,r,o,s,a;for(;n--;)if(r=t[n][1],o){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(s){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(o=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(s=n);const l={type:t[o][1].type==="labelLink"?"link":"image",start:Object.assign({},t[o][1].start),end:Object.assign({},t[t.length-1][1].end)},u={type:"label",start:Object.assign({},t[o][1].start),end:Object.assign({},t[s][1].end)},c={type:"labelText",start:Object.assign({},t[o+i+2][1].end),end:Object.assign({},t[s-2][1].start)};return a=[["enter",l,e],["enter",u,e]],a=Rn(a,t.slice(o+1,o+i+3)),a=Rn(a,[["enter",c,e]]),a=Rn(a,jh(e.parser.constructs.insideSpan.null,t.slice(o+i+4,s-3),e)),a=Rn(a,[["exit",c,e],t[s-2],t[s-1],["exit",u,e]]),a=Rn(a,t.slice(s+1)),a=Rn(a,[["exit",l,e]]),Pi(t,o,t.length,a),t}function XT(t,e,n){const i=this;let r=i.events.length,o,s;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){o=i.events[r][1];break}return a;function a(d){return o?o._inactive?f(d):(s=i.parser.defined.includes(jo(i.sliceSerialize({start:o.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelEnd"),l):n(d)}function l(d){return d===40?t.attempt(HT,c,s?c:f)(d):d===91?t.attempt(VT,c,s?u:f)(d):s?c(d):f(d)}function u(d){return t.attempt(GT,c,f)(d)}function c(d){return e(d)}function f(d){return o._balanced=!0,n(d)}}function $T(t,e,n){return i;function i(f){return t.enter("resource"),t.enter("resourceMarker"),t.consume(f),t.exit("resourceMarker"),r}function r(f){return un(f)?$s(t,o)(f):o(f)}function o(f){return f===41?c(f):Gx(t,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function s(f){return un(f)?$s(t,l)(f):c(f)}function a(f){return n(f)}function l(f){return f===34||f===39||f===40?jx(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):c(f)}function u(f){return un(f)?$s(t,c)(f):c(f)}function c(f){return f===41?(t.enter("resourceMarker"),t.consume(f),t.exit("resourceMarker"),t.exit("resource"),e):n(f)}}function qT(t,e,n){const i=this;return r;function r(a){return Wx.call(i,t,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return i.parser.defined.includes(jo(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(a):n(a)}function s(a){return n(a)}}function YT(t,e,n){return i;function i(o){return t.enter("reference"),t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),r}function r(o){return o===93?(t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),t.exit("reference"),e):n(o)}}const KT={name:"labelStartImage",tokenize:ZT,resolveAll:Xh.resolveAll};function ZT(t,e,n){const i=this;return r;function r(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),o}function o(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):e(a)}}const QT={name:"labelStartLink",tokenize:JT,resolveAll:Xh.resolveAll};function JT(t,e,n){const i=this;return r;function r(s){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(s),t.exit("labelMarker"),t.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(s):e(s)}}const Nc={name:"lineEnding",tokenize:eA};function eA(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),ct(t,e,"linePrefix")}}const Fl={name:"thematicBreak",tokenize:tA};function tA(t,e,n){let i=0,r;return o;function o(u){return t.enter("thematicBreak"),s(u)}function s(u){return r=u,a(u)}function a(u){return u===r?(t.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||Ue(u))?(t.exit("thematicBreak"),e(u)):n(u)}function l(u){return u===r?(t.consume(u),i++,l):(t.exit("thematicBreakSequence"),Ke(u)?ct(t,a,"whitespace")(u):a(u))}}const tn={name:"list",tokenize:rA,continuation:{tokenize:oA},exit:aA},nA={tokenize:lA,partial:!0},iA={tokenize:sA,partial:!0};function rA(t,e,n){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,s=0;return a;function a(p){const g=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:Td(p)){if(i.containerState.type||(i.containerState.type=g,t.enter(g,{_container:!0})),g==="listUnordered")return t.enter("listItemPrefix"),p===42||p===45?t.check(Fl,n,u)(p):u(p);if(!i.interrupt||p===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(p)}return n(p)}function l(p){return Td(p)&&++s<10?(t.consume(p),l):(!i.interrupt||s<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(t.exit("listItemValue"),u(p)):n(p)}function u(p){return t.enter("listItemMarker"),t.consume(p),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,t.check(Gu,i.interrupt?n:c,t.attempt(nA,d,f))}function c(p){return i.containerState.initialBlankLine=!0,o++,d(p)}function f(p){return Ke(p)?(t.enter("listItemPrefixWhitespace"),t.consume(p),t.exit("listItemPrefixWhitespace"),d):n(p)}function d(p){return i.containerState.size=o+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(p)}}function oA(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(Gu,r,o);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,ct(t,e,"listItemIndent",i.containerState.size+1)(a)}function o(a){return i.containerState.furtherBlankLines||!Ke(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,s(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(iA,e,s)(a))}function s(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,ct(t,t.attempt(tn,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function sA(t,e,n){const i=this;return ct(t,r,"listItemIndent",i.containerState.size+1);function r(o){const s=i.events[i.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===i.containerState.size?e(o):n(o)}}function aA(t){t.exit(this.containerState.type)}function lA(t,e,n){const i=this;return ct(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const s=i.events[i.events.length-1];return!Ke(o)&&s&&s[1].type==="listItemPrefixWhitespace"?e(o):n(o)}}const qm={name:"setextUnderline",tokenize:cA,resolveTo:uA};function uA(t,e){let n=t.length,i,r,o;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!o&&t[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:Object.assign({},t[r][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[r][1].type="setextHeadingText",o?(t.splice(r,0,["enter",s,e]),t.splice(o+1,0,["exit",t[i][1],e]),t[i][1].end=Object.assign({},t[o][1].end)):t[i][1]=s,t.push(["exit",s,e]),t}function cA(t,e,n){const i=this;let r;return o;function o(u){let c=i.events.length,f;for(;c--;)if(i.events[c][1].type!=="lineEnding"&&i.events[c][1].type!=="linePrefix"&&i.events[c][1].type!=="content"){f=i.events[c][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||f)?(t.enter("setextHeadingLine"),r=u,s(u)):n(u)}function s(u){return t.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===r?(t.consume(u),a):(t.exit("setextHeadingLineSequence"),Ke(u)?ct(t,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Ue(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const fA={tokenize:dA};function dA(t){const e=this,n=t.attempt(Gu,i,t.attempt(this.parser.constructs.flowInitial,r,ct(t,t.attempt(this.parser.constructs.flow,r,t.attempt(vT,r)),"linePrefix")));return n;function i(o){if(o===null){t.consume(o);return}return t.enter("lineEndingBlank"),t.consume(o),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const hA={resolveAll:$x()},pA=Xx("string"),mA=Xx("text");function Xx(t){return{tokenize:e,resolveAll:$x(t==="text"?gA:void 0)};function e(n){const i=this,r=this.parser.constructs[t],o=n.attempt(r,s,a);return s;function s(c){return u(c)?o(c):a(c)}function a(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),l}function l(c){return u(c)?(n.exit("data"),o(c)):(n.consume(c),l)}function u(c){if(c===null)return!0;const f=r[c];let d=-1;if(f)for(;++d<f.length;){const p=f[d];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function $x(t){return e;function e(n,i){let r=-1,o;for(;++r<=n.length;)o===void 0?n[r]&&n[r][1].type==="data"&&(o=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==o+2&&(n[o][1].end=n[r-1][1].end,n.splice(o+2,r-o-2),r=o+2),o=void 0);return t?t(n,i):n}}function gA(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let o=r.length,s=-1,a=0,l;for(;o--;){const u=r[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){o++;break}}if(a){const u={type:n===t.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{line:i.end.line,column:i.end.column-a,offset:i.end.offset-a,_index:i.start._index+o,_bufferIndex:o?s:i.start._bufferIndex+s},end:Object.assign({},i.end)};i.end=Object.assign({},u.start),i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}function vA(t,e,n){let i=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const r={},o=[];let s=[],a=[];const l={consume:_,enter:v,exit:E,attempt:b(R),check:b(y),interrupt:b(y,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:p,sliceSerialize:d,now:g,defineSkip:x,write:f};let c=e.tokenize.call(u,l);return e.resolveAll&&o.push(e),u;function f(P){return s=Rn(s,P),m(),s[s.length-1]!==null?[]:(I(e,0),u.events=jh(o,u.events,u),u.events)}function d(P,O){return xA(p(P),O)}function p(P){return _A(s,P)}function g(){const{line:P,column:O,offset:H,_index:K,_bufferIndex:j}=i;return{line:P,column:O,offset:H,_index:K,_bufferIndex:j}}function x(P){r[P.line]=P.column,S()}function m(){let P;for(;i._index<s.length;){const O=s[i._index];if(typeof O=="string")for(P=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===P&&i._bufferIndex<O.length;)h(O.charCodeAt(i._bufferIndex));else h(O)}}function h(P){c=c(P)}function _(P){Ue(P)?(i.line++,i.column=1,i.offset+=P===-3?2:1,S()):P!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=P}function v(P,O){const H=O||{};return H.type=P,H.start=g(),u.events.push(["enter",H,u]),a.push(H),H}function E(P){const O=a.pop();return O.end=g(),u.events.push(["exit",O,u]),O}function R(P,O){I(P,O.from)}function y(P,O){O.restore()}function b(P,O){return H;function H(K,j,Y){let Q,U,J,A;return Array.isArray(K)?ye(K):"tokenize"in K?ye([K]):ue(K);function ue(te){return ae;function ae(Ce){const Ae=Ce!==null&&te[Ce],Pe=Ce!==null&&te.null,N=[...Array.isArray(Ae)?Ae:Ae?[Ae]:[],...Array.isArray(Pe)?Pe:Pe?[Pe]:[]];return ye(N)(Ce)}}function ye(te){return Q=te,U=0,te.length===0?Y:M(te[U])}function M(te){return ae;function ae(Ce){return A=T(),J=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?Z():te.tokenize.call(O?Object.assign(Object.create(u),O):u,l,k,Z)(Ce)}}function k(te){return P(J,A),j}function Z(te){return A.restore(),++U<Q.length?M(Q[U]):Y}}}function I(P,O){P.resolveAll&&!o.includes(P)&&o.push(P),P.resolve&&Pi(u.events,O,u.events.length-O,P.resolve(u.events.slice(O),u)),P.resolveTo&&(u.events=P.resolveTo(u.events,u))}function T(){const P=g(),O=u.previous,H=u.currentConstruct,K=u.events.length,j=Array.from(a);return{restore:Y,from:K};function Y(){i=P,u.previous=O,u.currentConstruct=H,u.events.length=K,a=j,S()}}function S(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function _A(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,o=e.end._bufferIndex;let s;if(n===r)s=[t[n].slice(i,o)];else{if(s=t.slice(n,r),i>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(i):s.shift()}o>0&&s.push(t[r].slice(0,o))}return s}function xA(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const o=t[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=e?" ":"	";break}case-1:{if(!e&&r)continue;s=" ";break}default:s=String.fromCharCode(o)}r=o===-2,i.push(s)}return i.join("")}const yA={42:tn,43:tn,45:tn,48:tn,49:tn,50:tn,51:tn,52:tn,53:tn,54:tn,55:tn,56:tn,57:tn,62:zx},SA={91:ET},EA={[-2]:Ic,[-1]:Ic,32:Ic},MA={35:bT,42:Fl,45:[qm,Fl],60:IT,61:qm,95:Fl,96:Xm,126:Xm},wA={38:Hx,92:Bx},TA={[-5]:Nc,[-4]:Nc,[-3]:Nc,33:KT,38:Hx,42:Ad,60:[Qw,zT],91:QT,92:[AT,Bx],93:Xh,95:Ad,96:fT},AA={null:[Ad,hA]},CA={null:[42,95]},bA={null:[]},RA=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:CA,contentInitial:SA,disable:bA,document:yA,flow:MA,flowInitial:EA,insideSpan:AA,string:wA,text:TA},Symbol.toStringTag,{value:"Module"}));function PA(t){const n=Ow([RA,...(t||{}).extensions||[]]),i={defined:[],lazy:{},constructs:n,content:r(jw),document:r($w),flow:r(fA),string:r(pA),text:r(mA)};return i;function r(o){return s;function s(a){return vA(i,o,a)}}}function LA(t){for(;!Vx(t););return t}const Ym=/[\0\t\n\r]/g;function IA(){let t=1,e="",n=!0,i;return r;function r(o,s,a){const l=[];let u,c,f,d,p;for(o=e+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),f=0,e="",n&&(o.charCodeAt(0)===65279&&f++,n=void 0);f<o.length;){if(Ym.lastIndex=f,u=Ym.exec(o),d=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(d),!u){e=o.slice(f);break}if(p===10&&f===d&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),f<d&&(l.push(o.slice(f,d)),t+=d-f),p){case 0:{l.push(65533),t++;break}case 9:{for(c=Math.ceil(t/4)*4,l.push(-2);t++<c;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:i=!0,t=1}f=d+1}return a&&(i&&l.push(-5),e&&l.push(e),l.push(null)),l}}const NA=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function DA(t){return t.replace(NA,UA)}function UA(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),o=r===120||r===88;return Fx(n.slice(o?2:1),o?16:10)}return Wh(n)||t}const qx={}.hasOwnProperty;function kA(t,e,n){return typeof e!="string"&&(n=e,e=void 0),OA(n)(LA(PA(n).document().write(IA()(t,e,!0))))}function OA(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Ze),autolinkProtocol:T,autolinkEmail:T,atxHeading:o(be),blockQuote:o(Pe),characterEscape:T,characterReference:T,codeFenced:o(N),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(N,s),codeText:o(Fe,s),codeTextData:T,data:T,codeFlowValue:T,definition:o(je),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(at),hardBreakEscape:o(Xe),hardBreakTrailing:o(Xe),htmlFlow:o(ze,s),htmlFlowData:T,htmlText:o(ze,s),htmlTextData:T,image:o(Be),label:s,link:o(Ze),listItem:o(w),listItemValue:d,listOrdered:o(L,f),listUnordered:o(L),paragraph:o(z),reference:M,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(be),strong:o(le),thematicBreak:o(ie)},exit:{atxHeading:l(),atxHeadingSequence:R,autolink:l(),autolinkEmail:Ae,autolinkProtocol:Ce,blockQuote:l(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:Z,characterReferenceMarkerNumeric:Z,characterReferenceValue:te,characterReference:ae,codeFenced:l(m),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:S,codeIndented:l(h),codeText:l(j),codeTextData:S,data:S,definition:l(),definitionDestinationString:E,definitionLabelString:_,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(O),hardBreakTrailing:l(O),htmlFlow:l(H),htmlFlowData:S,htmlText:l(K),htmlTextData:S,image:l(Q),label:J,labelText:U,lineEnding:P,link:l(Y),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:k,resourceDestinationString:A,resourceTitleString:ue,resource:ye,setextHeading:l(I),setextHeadingLineSequence:b,setextHeadingText:y,strong:l(),thematicBreak:l()}};Yx(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(B){let W={type:"root",children:[]};const ee={stack:[W],tokenStack:[],config:e,enter:a,exit:u,buffer:s,resume:c,data:n},ve=[];let V=-1;for(;++V<B.length;)if(B[V][1].type==="listOrdered"||B[V][1].type==="listUnordered")if(B[V][0]==="enter")ve.push(V);else{const ne=ve.pop();V=r(B,ne,V)}for(V=-1;++V<B.length;){const ne=e[B[V][0]];qx.call(ne,B[V][1].type)&&ne[B[V][1].type].call(Object.assign({sliceSerialize:B[V][2].sliceSerialize},ee),B[V][1])}if(ee.tokenStack.length>0){const ne=ee.tokenStack[ee.tokenStack.length-1];(ne[1]||Km).call(ee,void 0,ne[0])}for(W.position={start:Fi(B.length>0?B[0][1].start:{line:1,column:1,offset:0}),end:Fi(B.length>0?B[B.length-2][1].end:{line:1,column:1,offset:0})},V=-1;++V<e.transforms.length;)W=e.transforms[V](W)||W;return W}function r(B,W,ee){let ve=W-1,V=-1,ne=!1,me,he,fe,Ie;for(;++ve<=ee;){const Le=B[ve];switch(Le[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Le[0]==="enter"?V++:V--,Ie=void 0;break}case"lineEndingBlank":{Le[0]==="enter"&&(me&&!Ie&&!V&&!fe&&(fe=ve),Ie=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ie=void 0}if(!V&&Le[0]==="enter"&&Le[1].type==="listItemPrefix"||V===-1&&Le[0]==="exit"&&(Le[1].type==="listUnordered"||Le[1].type==="listOrdered")){if(me){let rt=ve;for(he=void 0;rt--;){const D=B[rt];if(D[1].type==="lineEnding"||D[1].type==="lineEndingBlank"){if(D[0]==="exit")continue;he&&(B[he][1].type="lineEndingBlank",ne=!0),D[1].type="lineEnding",he=rt}else if(!(D[1].type==="linePrefix"||D[1].type==="blockQuotePrefix"||D[1].type==="blockQuotePrefixWhitespace"||D[1].type==="blockQuoteMarker"||D[1].type==="listItemIndent"))break}fe&&(!he||fe<he)&&(me._spread=!0),me.end=Object.assign({},he?B[he][1].start:Le[1].end),B.splice(he||ve,0,["exit",me,Le[2]]),ve++,ee++}if(Le[1].type==="listItemPrefix"){const rt={type:"listItem",_spread:!1,start:Object.assign({},Le[1].start),end:void 0};me=rt,B.splice(ve,0,["enter",rt,Le[2]]),ve++,ee++,fe=void 0,Ie=!0}}}return B[W][1]._spread=ne,ee}function o(B,W){return ee;function ee(ve){a.call(this,B(ve),ve),W&&W.call(this,ve)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(B,W,ee){this.stack[this.stack.length-1].children.push(B),this.stack.push(B),this.tokenStack.push([W,ee]),B.position={start:Fi(W.start),end:void 0}}function l(B){return W;function W(ee){B&&B.call(this,ee),u.call(this,ee)}}function u(B,W){const ee=this.stack.pop(),ve=this.tokenStack.pop();if(ve)ve[0].type!==B.type&&(W?W.call(this,B,ve[0]):(ve[1]||Km).call(this,B,ve[0]));else throw new Error("Cannot close `"+B.type+"` ("+Xs({start:B.start,end:B.end})+"): it’s not open");ee.position.end=Fi(B.end)}function c(){return Uw(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function d(B){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(B),10),this.data.expectingFirstListItemValue=void 0}}function p(){const B=this.resume(),W=this.stack[this.stack.length-1];W.lang=B}function g(){const B=this.resume(),W=this.stack[this.stack.length-1];W.meta=B}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function m(){const B=this.resume(),W=this.stack[this.stack.length-1];W.value=B.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const B=this.resume(),W=this.stack[this.stack.length-1];W.value=B.replace(/(\r?\n|\r)$/g,"")}function _(B){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.label=W,ee.identifier=jo(this.sliceSerialize(B)).toLowerCase()}function v(){const B=this.resume(),W=this.stack[this.stack.length-1];W.title=B}function E(){const B=this.resume(),W=this.stack[this.stack.length-1];W.url=B}function R(B){const W=this.stack[this.stack.length-1];if(!W.depth){const ee=this.sliceSerialize(B).length;W.depth=ee}}function y(){this.data.setextHeadingSlurpLineEnding=!0}function b(B){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(B).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function T(B){const ee=this.stack[this.stack.length-1].children;let ve=ee[ee.length-1];(!ve||ve.type!=="text")&&(ve=oe(),ve.position={start:Fi(B.start),end:void 0},ee.push(ve)),this.stack.push(ve)}function S(B){const W=this.stack.pop();W.value+=this.sliceSerialize(B),W.position.end=Fi(B.end)}function P(B){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ee=W.children[W.children.length-1];ee.position.end=Fi(B.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(W.type)&&(T.call(this,B),S.call(this,B))}function O(){this.data.atHardBreak=!0}function H(){const B=this.resume(),W=this.stack[this.stack.length-1];W.value=B}function K(){const B=this.resume(),W=this.stack[this.stack.length-1];W.value=B}function j(){const B=this.resume(),W=this.stack[this.stack.length-1];W.value=B}function Y(){const B=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";B.type+="Reference",B.referenceType=W,delete B.url,delete B.title}else delete B.identifier,delete B.label;this.data.referenceType=void 0}function Q(){const B=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";B.type+="Reference",B.referenceType=W,delete B.url,delete B.title}else delete B.identifier,delete B.label;this.data.referenceType=void 0}function U(B){const W=this.sliceSerialize(B),ee=this.stack[this.stack.length-2];ee.label=DA(W),ee.identifier=jo(W).toLowerCase()}function J(){const B=this.stack[this.stack.length-1],W=this.resume(),ee=this.stack[this.stack.length-1];if(this.data.inReference=!0,ee.type==="link"){const ve=B.children;ee.children=ve}else ee.alt=W}function A(){const B=this.resume(),W=this.stack[this.stack.length-1];W.url=B}function ue(){const B=this.resume(),W=this.stack[this.stack.length-1];W.title=B}function ye(){this.data.inReference=void 0}function M(){this.data.referenceType="collapsed"}function k(B){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.label=W,ee.identifier=jo(this.sliceSerialize(B)).toLowerCase(),this.data.referenceType="full"}function Z(B){this.data.characterReferenceType=B.type}function te(B){const W=this.sliceSerialize(B),ee=this.data.characterReferenceType;let ve;ee?(ve=Fx(W,ee==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ve=Wh(W);const V=this.stack[this.stack.length-1];V.value+=ve}function ae(B){const W=this.stack.pop();W.position.end=Fi(B.end)}function Ce(B){S.call(this,B);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(B)}function Ae(B){S.call(this,B);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(B)}function Pe(){return{type:"blockquote",children:[]}}function N(){return{type:"code",lang:null,meta:null,value:""}}function Fe(){return{type:"inlineCode",value:""}}function je(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function at(){return{type:"emphasis",children:[]}}function be(){return{type:"heading",depth:0,children:[]}}function Xe(){return{type:"break"}}function ze(){return{type:"html",value:""}}function Be(){return{type:"image",title:null,url:"",alt:null}}function Ze(){return{type:"link",title:null,url:"",children:[]}}function L(B){return{type:"list",ordered:B.type==="listOrdered",start:null,spread:B._spread,children:[]}}function w(B){return{type:"listItem",spread:B._spread,checked:null,children:[]}}function z(){return{type:"paragraph",children:[]}}function le(){return{type:"strong",children:[]}}function oe(){return{type:"text",value:""}}function ie(){return{type:"thematicBreak"}}}function Fi(t){return{line:t.line,column:t.column,offset:t.offset}}function Yx(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?Yx(t,i):FA(t,i)}}function FA(t,e){let n;for(n in e)if(qx.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function Km(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Xs({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Xs({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Xs({start:e.start,end:e.end})+") is still open")}function zA(t){const e=this;e.parser=n;function n(i){return kA(i,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function BA(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function HA(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function VA(t,e){const n=e.value?e.value+`
`:"",i={};e.lang&&(i.className=["language-"+e.lang]);let r={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return e.meta&&(r.data={meta:e.meta}),t.patch(e,r),r=t.applyData(e,r),r={type:"element",tagName:"pre",properties:{},children:[r]},t.patch(e,r),r}function GA(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function WA(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function jA(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=String(e.identifier).toUpperCase(),r=ps(i.toLowerCase()),o=t.footnoteOrder.indexOf(i);let s,a=t.footnoteCounts.get(i);a===void 0?(a=0,t.footnoteOrder.push(i),s=t.footnoteOrder.length):s=o+1,a+=1,t.footnoteCounts.set(i,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};t.patch(e,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,u),t.applyData(e,u)}function XA(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function $A(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function Kx(t,e){const n=e.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+i}];const r=t.all(e),o=r[0];o&&o.type==="text"?o.value="["+o.value:r.unshift({type:"text",value:"["});const s=r[r.length-1];return s&&s.type==="text"?s.value+=i:r.push({type:"text",value:i}),r}function qA(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return Kx(t,e);const r={src:ps(i.url||""),alt:e.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,o),t.applyData(e,o)}function YA(t,e){const n={src:ps(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,i),t.applyData(e,i)}function KA(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,i),t.applyData(e,i)}function ZA(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return Kx(t,e);const r={href:ps(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,o),t.applyData(e,o)}function QA(t,e){const n={href:ps(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function JA(t,e,n){const i=t.all(e),r=n?eC(n):Zx(e),o={},s=[];if(typeof e.checked=="boolean"){const c=i[0];let f;c&&c.type==="element"&&c.tagName==="p"?f=c:(f={type:"element",tagName:"p",properties:{},children:[]},i.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<i.length;){const c=i[a];(r||a!==0||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!r?s.push(...c.children):s.push(c)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return t.patch(e,u),t.applyData(e,u)}function eC(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let i=-1;for(;!e&&++i<n.length;)e=Zx(n[i])}return e}function Zx(t){const e=t.spread;return e??t.children.length>1}function tC(t,e){const n={},i=t.all(e);let r=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++r<i.length;){const s=i[r];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(i,!0)};return t.patch(e,o),t.applyData(e,o)}function nC(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function iC(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function rC(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function oC(t,e){const n=t.all(e),i=n.shift(),r=[];if(i){const s={type:"element",tagName:"thead",properties:{},children:t.wrap([i],!0)};t.patch(e.children[0],s),r.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},a=Bh(e.children[1]),l=Lx(e.children[e.children.length-1]);a&&l&&(s.position={start:a,end:l}),r.push(s)}const o={type:"element",tagName:"table",properties:{},children:t.wrap(r,!0)};return t.patch(e,o),t.applyData(e,o)}function sC(t,e,n){const i=n?n.children:void 0,o=(i?i.indexOf(e):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:e.children.length;let l=-1;const u=[];for(;++l<a;){const f=e.children[l],d={},p=s?s[l]:void 0;p&&(d.align=p);let g={type:"element",tagName:o,properties:d,children:[]};f&&(g.children=t.all(f),t.patch(f,g),g=t.applyData(f,g)),u.push(g)}const c={type:"element",tagName:"tr",properties:{},children:t.wrap(u,!0)};return t.patch(e,c),t.applyData(e,c)}function aC(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const Zm=9,Qm=32;function lC(t){const e=String(t),n=/\r?\n|\r/g;let i=n.exec(e),r=0;const o=[];for(;i;)o.push(Jm(e.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(e);return o.push(Jm(e.slice(r),r>0,!1)),o.join("")}function Jm(t,e,n){let i=0,r=t.length;if(e){let o=t.codePointAt(i);for(;o===Zm||o===Qm;)i++,o=t.codePointAt(i)}if(n){let o=t.codePointAt(r-1);for(;o===Zm||o===Qm;)r--,o=t.codePointAt(r-1)}return r>i?t.slice(i,r):""}function uC(t,e){const n={type:"text",value:lC(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function cC(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const fC={blockquote:BA,break:HA,code:VA,delete:GA,emphasis:WA,footnoteReference:jA,heading:XA,html:$A,imageReference:qA,image:YA,inlineCode:KA,linkReference:ZA,link:QA,listItem:JA,list:tC,paragraph:nC,root:iC,strong:rC,table:oC,tableCell:aC,tableRow:sC,text:uC,thematicBreak:cC,toml:Ka,yaml:Ka,definition:Ka,footnoteDefinition:Ka};function Ka(){}const Qx=-1,Wu=0,mu=1,gu=2,$h=3,qh=4,Yh=5,Kh=6,Jx=7,ey=8,eg=typeof self=="object"?self:globalThis,dC=(t,e)=>{const n=(r,o)=>(t.set(o,r),r),i=r=>{if(t.has(r))return t.get(r);const[o,s]=e[r];switch(o){case Wu:case Qx:return n(s,r);case mu:{const a=n([],r);for(const l of s)a.push(i(l));return a}case gu:{const a=n({},r);for(const[l,u]of s)a[i(l)]=i(u);return a}case $h:return n(new Date(s),r);case qh:{const{source:a,flags:l}=s;return n(new RegExp(a,l),r)}case Yh:{const a=n(new Map,r);for(const[l,u]of s)a.set(i(l),i(u));return a}case Kh:{const a=n(new Set,r);for(const l of s)a.add(i(l));return a}case Jx:{const{name:a,message:l}=s;return n(new eg[a](l),r)}case ey:return n(BigInt(s),r);case"BigInt":return n(Object(BigInt(s)),r)}return n(new eg[o](s),r)};return i},tg=t=>dC(new Map,t)(0),oo="",{toString:hC}={},{keys:pC}=Object,As=t=>{const e=typeof t;if(e!=="object"||!t)return[Wu,e];const n=hC.call(t).slice(8,-1);switch(n){case"Array":return[mu,oo];case"Object":return[gu,oo];case"Date":return[$h,oo];case"RegExp":return[qh,oo];case"Map":return[Yh,oo];case"Set":return[Kh,oo]}return n.includes("Array")?[mu,n]:n.includes("Error")?[Jx,n]:[gu,n]},Za=([t,e])=>t===Wu&&(e==="function"||e==="symbol"),mC=(t,e,n,i)=>{const r=(s,a)=>{const l=i.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=As(s);switch(a){case Wu:{let c=s;switch(l){case"bigint":a=ey,c=s.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+l);c=null;break;case"undefined":return r([Qx],s)}return r([a,c],s)}case mu:{if(l)return r([l,[...s]],s);const c=[],f=r([a,c],s);for(const d of s)c.push(o(d));return f}case gu:{if(l)switch(l){case"BigInt":return r([l,s.toString()],s);case"Boolean":case"Number":case"String":return r([l,s.valueOf()],s)}if(e&&"toJSON"in s)return o(s.toJSON());const c=[],f=r([a,c],s);for(const d of pC(s))(t||!Za(As(s[d])))&&c.push([o(d),o(s[d])]);return f}case $h:return r([a,s.toISOString()],s);case qh:{const{source:c,flags:f}=s;return r([a,{source:c,flags:f}],s)}case Yh:{const c=[],f=r([a,c],s);for(const[d,p]of s)(t||!(Za(As(d))||Za(As(p))))&&c.push([o(d),o(p)]);return f}case Kh:{const c=[],f=r([a,c],s);for(const d of s)(t||!Za(As(d)))&&c.push(o(d));return f}}const{message:u}=s;return r([a,{name:l,message:u}],s)};return o},ng=(t,{json:e,lossy:n}={})=>{const i=[];return mC(!(e||n),!!e,new Map,i)(t),i},vu=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?tg(ng(t,e)):structuredClone(t):(t,e)=>tg(ng(t,e));function gC(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function vC(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function _C(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||gC,i=t.options.footnoteBackLabel||vC,r=t.options.footnoteLabel||"Footnotes",o=t.options.footnoteLabelTagName||"h2",s=t.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<t.footnoteOrder.length;){const u=t.footnoteById.get(t.footnoteOrder[l]);if(!u)continue;const c=t.all(u),f=String(u.identifier).toUpperCase(),d=ps(f.toLowerCase());let p=0;const g=[],x=t.footnoteCounts.get(f);for(;x!==void 0&&++p<=x;){g.length>0&&g.push({type:"text",value:" "});let _=typeof n=="string"?n:n(l,p);typeof _=="string"&&(_={type:"text",value:_}),g.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+d+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,p),className:["data-footnote-backref"]},children:Array.isArray(_)?_:[_]})}const m=c[c.length-1];if(m&&m.type==="element"&&m.tagName==="p"){const _=m.children[m.children.length-1];_&&_.type==="text"?_.value+=" ":m.children.push({type:"text",value:" "}),m.children.push(...g)}else c.push(...g);const h={type:"element",tagName:"li",properties:{id:e+"fn-"+d},children:t.wrap(c,!0)};t.patch(u,h),a.push(h)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...vu(s),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(a,!0)},{type:"text",value:`
`}]}}const ty=function(t){if(t==null)return EC;if(typeof t=="function")return ju(t);if(typeof t=="object")return Array.isArray(t)?xC(t):yC(t);if(typeof t=="string")return SC(t);throw new Error("Expected function, string, or object as test")};function xC(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=ty(t[n]);return ju(i);function i(...r){let o=-1;for(;++o<e.length;)if(e[o].apply(this,r))return!0;return!1}}function yC(t){const e=t;return ju(n);function n(i){const r=i;let o;for(o in t)if(r[o]!==e[o])return!1;return!0}}function SC(t){return ju(e);function e(n){return n&&n.type===t}}function ju(t){return e;function e(n,i,r){return!!(MC(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function EC(){return!0}function MC(t){return t!==null&&typeof t=="object"&&"type"in t}const ny=[],wC=!0,ig=!1,TC="skip";function AC(t,e,n,i){let r;typeof e=="function"&&typeof n!="function"?(i=n,n=e):r=e;const o=ty(r),s=i?-1:1;a(t,void 0,[])();function a(l,u,c){const f=l&&typeof l=="object"?l:{};if(typeof f.type=="string"){const p=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=ny,g,x,m;if((!e||o(l,u,c[c.length-1]||void 0))&&(p=CC(n(l,c)),p[0]===ig))return p;if("children"in l&&l.children){const h=l;if(h.children&&p[0]!==TC)for(x=(i?h.children.length:-1)+s,m=c.concat(h);x>-1&&x<h.children.length;){const _=h.children[x];if(g=a(_,x,m)(),g[0]===ig)return g;x=typeof g[1]=="number"?g[1]:x+s}}return p}}}function CC(t){return Array.isArray(t)?t:typeof t=="number"?[wC,t]:t==null?ny:[t]}function iy(t,e,n,i){let r,o,s;typeof e=="function"&&typeof n!="function"?(o=void 0,s=e,r=n):(o=e,s=n,r=i),AC(t,o,a,r);function a(l,u){const c=u[u.length-1],f=c?c.children.indexOf(l):void 0;return s(l,f,c)}}const Cd={}.hasOwnProperty,bC={};function RC(t,e){const n=e||bC,i=new Map,r=new Map,o=new Map,s={...fC,...n.handlers},a={all:u,applyData:LC,definitionById:i,footnoteById:r,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:PC,wrap:NC};return iy(t,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const f=c.type==="definition"?i:r,d=String(c.identifier).toUpperCase();f.has(d)||f.set(d,c)}}),a;function l(c,f){const d=c.type,p=a.handlers[d];if(Cd.call(a.handlers,d)&&p)return p(a,c,f);if(a.options.passThrough&&a.options.passThrough.includes(d)){if("children"in c){const{children:x,...m}=c,h=vu(m);return h.children=a.all(c),h}return vu(c)}return(a.options.unknownHandler||IC)(a,c,f)}function u(c){const f=[];if("children"in c){const d=c.children;let p=-1;for(;++p<d.length;){const g=a.one(d[p],c);if(g){if(p&&d[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=rg(g.value)),!Array.isArray(g)&&g.type==="element")){const x=g.children[0];x&&x.type==="text"&&(x.value=rg(x.value))}Array.isArray(g)?f.push(...g):f.push(g)}}}return f}}function PC(t,e){t.position&&(e.position=fw(t))}function LC(t,e){let n=e;if(t&&t.data){const i=t.data.hName,r=t.data.hChildren,o=t.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const s="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,vu(o)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function IC(t,e){const n=e.data||{},i="value"in e&&!(Cd.call(n,"hProperties")||Cd.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function NC(t,e){const n=[];let i=-1;for(e&&n.push({type:"text",value:`
`});++i<t.length;)i&&n.push({type:"text",value:`
`}),n.push(t[i]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function rg(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function og(t,e){const n=RC(t,e),i=n.one(t,void 0),r=_C(n),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&o.children.push({type:"text",value:`
`},r),o}function DC(t,e){return t&&"run"in t?async function(n,i){const r=og(n,{file:i,...e});await t.run(r,i)}:function(n,i){return og(n,{file:i,...e||t})}}function sg(t){if(t)throw t}var zl=Object.prototype.hasOwnProperty,ry=Object.prototype.toString,ag=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,ug=function(e){return typeof Array.isArray=="function"?Array.isArray(e):ry.call(e)==="[object Array]"},cg=function(e){if(!e||ry.call(e)!=="[object Object]")return!1;var n=zl.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&zl.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!i)return!1;var r;for(r in e);return typeof r>"u"||zl.call(e,r)},fg=function(e,n){ag&&n.name==="__proto__"?ag(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},dg=function(e,n){if(n==="__proto__")if(zl.call(e,n)){if(lg)return lg(e,n).value}else return;return e[n]},UC=function t(){var e,n,i,r,o,s,a=arguments[0],l=1,u=arguments.length,c=!1;for(typeof a=="boolean"&&(c=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(e=arguments[l],e!=null)for(n in e)i=dg(a,n),r=dg(e,n),a!==r&&(c&&r&&(cg(r)||(o=ug(r)))?(o?(o=!1,s=i&&ug(i)?i:[]):s=i&&cg(i)?i:{},fg(a,{name:n,newValue:t(c,s,r)})):typeof r<"u"&&fg(a,{name:n,newValue:r}));return a};const Dc=Zv(UC);function bd(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function kC(){const t=[],e={run:n,use:i};return e;function n(...r){let o=-1;const s=r.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...r);function a(l,...u){const c=t[++o];let f=-1;if(l){s(l);return}for(;++f<r.length;)(u[f]===null||u[f]===void 0)&&(u[f]=r[f]);r=u,c?OC(c,a)(...u):s(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return t.push(r),e}}function OC(t,e){let n;return i;function i(...s){const a=t.length>s.length;let l;a&&s.push(r);try{l=t.apply(this,s)}catch(u){const c=u;if(a&&n)throw c;return r(c)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,r):l instanceof Error?r(l):o(l))}function r(s,...a){n||(n=!0,e(s,...a))}function o(s){r(null,s)}}const Jn={basename:FC,dirname:zC,extname:BC,join:HC,sep:"/"};function FC(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');wa(t);let n=0,i=-1,r=t.length,o;if(e===void 0||e.length===0||e.length>t.length){for(;r--;)if(t.codePointAt(r)===47){if(o){n=r+1;break}}else i<0&&(o=!0,i=r+1);return i<0?"":t.slice(n,i)}if(e===t)return"";let s=-1,a=e.length-1;for(;r--;)if(t.codePointAt(r)===47){if(o){n=r+1;break}}else s<0&&(o=!0,s=r+1),a>-1&&(t.codePointAt(r)===e.codePointAt(a--)?a<0&&(i=r):(a=-1,i=s));return n===i?i=s:i<0&&(i=t.length),t.slice(n,i)}function zC(t){if(wa(t),t.length===0)return".";let e=-1,n=t.length,i;for(;--n;)if(t.codePointAt(n)===47){if(i){e=n;break}}else i||(i=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function BC(t){wa(t);let e=t.length,n=-1,i=0,r=-1,o=0,s;for(;e--;){const a=t.codePointAt(e);if(a===47){if(s){i=e+1;break}continue}n<0&&(s=!0,n=e+1),a===46?r<0?r=e:o!==1&&(o=1):r>-1&&(o=-1)}return r<0||n<0||o===0||o===1&&r===n-1&&r===i+1?"":t.slice(r,n)}function HC(...t){let e=-1,n;for(;++e<t.length;)wa(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":VC(n)}function VC(t){wa(t);const e=t.codePointAt(0)===47;let n=GC(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function GC(t,e){let n="",i=0,r=-1,o=0,s=-1,a,l;for(;++s<=t.length;){if(s<t.length)a=t.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(r===s-1||o===1))if(r!==s-1&&o===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=s,o=0;continue}}else if(n.length>0){n="",i=0,r=s,o=0;continue}}e&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+t.slice(r+1,s):n=t.slice(r+1,s),i=s-r-1;r=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function wa(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const WC={cwd:jC};function jC(){return"/"}function Rd(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function XC(t){if(typeof t=="string")t=new URL(t);else if(!Rd(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return $C(t)}function $C(t){if(t.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const i=e.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(e)}const Uc=["history","path","basename","stem","extname","dirname"];class oy{constructor(e){let n;e?Rd(e)?n={path:e}:typeof e=="string"||qC(e)?n={value:e}:n=e:n={},this.cwd=WC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Uc.length;){const o=Uc[i];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let r;for(r in n)Uc.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?Jn.basename(this.path):void 0}set basename(e){Oc(e,"basename"),kc(e,"basename"),this.path=Jn.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?Jn.dirname(this.path):void 0}set dirname(e){hg(this.basename,"dirname"),this.path=Jn.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?Jn.extname(this.path):void 0}set extname(e){if(kc(e,"extname"),hg(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Jn.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Rd(e)&&(e=XC(e)),Oc(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?Jn.basename(this.path,this.extname):void 0}set stem(e){Oc(e,"stem"),kc(e,"stem"),this.path=Jn.join(this.dirname||"",e+(this.extname||""))}fail(e,n,i){const r=this.message(e,n,i);throw r.fatal=!0,r}info(e,n,i){const r=this.message(e,n,i);return r.fatal=void 0,r}message(e,n,i){const r=new $t(e,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function kc(t,e){if(t&&t.includes(Jn.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+Jn.sep+"`")}function Oc(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function hg(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function qC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const YC=function(t){const i=this.constructor.prototype,r=i[t],o=function(){return r.apply(o,arguments)};Object.setPrototypeOf(o,i);const s=Object.getOwnPropertyNames(r);for(const a of s){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(o,a,l)}return o},KC={}.hasOwnProperty;class Zh extends YC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=kC()}copy(){const e=new Zh;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];e.use(...i)}return e.data(Dc(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Bc("data",this.frozen),this.namespace[e]=n,this):KC.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Bc("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(e,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=Qa(e),i=this.parser||this.Parser;return Fc("parse",i),i(String(n),n)}process(e,n){const i=this;return this.freeze(),Fc("process",this.parser||this.Parser),zc("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(o,s){const a=Qa(e),l=i.parse(a);i.run(l,a,function(c,f,d){if(c||!f||!d)return u(c);const p=f,g=i.stringify(p,d);JC(g)?d.value=g:d.result=g,u(c,d)});function u(c,f){c||!f?s(c):o?o(f):n(void 0,f)}}}processSync(e){let n=!1,i;return this.freeze(),Fc("processSync",this.parser||this.Parser),zc("processSync",this.compiler||this.Compiler),this.process(e,r),mg("processSync","process",n),i;function r(o,s){n=!0,sg(o),i=s}}run(e,n,i){pg(e),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?o(void 0,i):new Promise(o);function o(s,a){const l=Qa(n);r.run(e,l,u);function u(c,f,d){const p=f||e;c?a(c):s?s(p):i(void 0,p,d)}}}runSync(e,n){let i=!1,r;return this.run(e,n,o),mg("runSync","run",i),r;function o(s,a){sg(s),r=a,i=!0}}stringify(e,n){this.freeze();const i=Qa(n),r=this.compiler||this.Compiler;return zc("stringify",r),pg(e),r(e,i)}use(e,...n){const i=this.attachers,r=this.namespace;if(Bc("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?a(e):s(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...f]=u;l(c,f)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(r.settings=Dc(!0,r.settings,u.settings))}function a(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const f=u[c];o(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,c){let f=-1,d=-1;for(;++f<i.length;)if(i[f][0]===u){d=f;break}if(d===-1)i.push([u,...c]);else if(c.length>0){let[p,...g]=c;const x=i[d][1];bd(x)&&bd(p)&&(p=Dc(!0,x,p)),i[d]=[u,p,...g]}}}}const ZC=new Zh().freeze();function Fc(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function zc(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Bc(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function pg(t){if(!bd(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function mg(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function Qa(t){return QC(t)?t:new oy(t)}function QC(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function JC(t){return typeof t=="string"||eb(t)}function eb(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const tb="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",gg=[],vg={allowDangerousHtml:!0},nb=/^(https?|ircs?|mailto|xmpp)$/i,ib=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function rb(t){const e=t.allowedElements,n=t.allowElement,i=t.children||"",r=t.className,o=t.components,s=t.disallowedElements,a=t.rehypePlugins||gg,l=t.remarkPlugins||gg,u=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...vg}:vg,c=t.skipHtml,f=t.unwrapDisallowed,d=t.urlTransform||ob,p=ZC().use(zA).use(l).use(DC,u).use(a),g=new oy;typeof i=="string"&&(g.value=i);for(const _ of ib)Object.hasOwn(t,_.from)&&(""+_.from+(_.to?"use `"+_.to+"` instead":"remove it")+tb+_.id,void 0);const x=p.parse(g);let m=p.runSync(x,g);return r&&(m={type:"element",tagName:"div",properties:{className:r},children:m.type==="root"?m.children:[m]}),iy(m,h),vw(m,{Fragment:Oe.Fragment,components:o,ignoreInvalidStyle:!0,jsx:Oe.jsx,jsxs:Oe.jsxs,passKeys:!0,passNode:!0});function h(_,v,E){if(_.type==="raw"&&E&&typeof v=="number")return c?E.children.splice(v,1):E.children[v]={type:"text",value:_.value},v;if(_.type==="element"){let R;for(R in Lc)if(Object.hasOwn(Lc,R)&&Object.hasOwn(_.properties,R)){const y=_.properties[R],b=Lc[R];(b===null||b.includes(_.tagName))&&(_.properties[R]=d(String(y||""),R,_))}}if(_.type==="element"){let R=e?!e.includes(_.tagName):s?s.includes(_.tagName):!1;if(!R&&n&&typeof v=="number"&&(R=!n(_,v,E)),R&&E&&typeof v=="number")return f&&_.children?E.children.splice(v,1,..._.children):E.children.splice(v,1),v}}}function ob(t){const e=t.indexOf(":"),n=t.indexOf("?"),i=t.indexOf("#"),r=t.indexOf("/");return e<0||r>-1&&e>r||n>-1&&e>n||i>-1&&e>i||nb.test(t.slice(0,e))?t:""}function sb(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function ab(t,e){if(t==null)return{};var n,i,r=sb(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Pd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function lb(t){if(Array.isArray(t))return Pd(t)}function ub(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cb(t,e){if(t){if(typeof t=="string")return Pd(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pd(t,e):void 0}}function fb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function db(t){return lb(t)||ub(t)||cb(t)||fb()}function pa(t){"@babel/helpers - typeof";return pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pa(t)}function hb(t,e){if(pa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(pa(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pb(t){var e=hb(t,"string");return pa(e)=="symbol"?e:e+""}function sy(t,e,n){return(e=pb(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ld(){return Ld=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ld.apply(null,arguments)}function _g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ko(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_g(Object(n),!0).forEach(function(i){sy(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_g(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function mb(t){var e=t.length;if(e===0||e===1)return t;if(e===2)return[t[0],t[1],"".concat(t[0],".").concat(t[1]),"".concat(t[1],".").concat(t[0])];if(e===3)return[t[0],t[1],t[2],"".concat(t[0],".").concat(t[1]),"".concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[0]),"".concat(t[1],".").concat(t[2]),"".concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[1],".").concat(t[0])];if(e>=4)return[t[0],t[1],t[2],t[3],"".concat(t[0],".").concat(t[1]),"".concat(t[0],".").concat(t[2]),"".concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[0]),"".concat(t[1],".").concat(t[2]),"".concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[1]),"".concat(t[2],".").concat(t[3]),"".concat(t[3],".").concat(t[0]),"".concat(t[3],".").concat(t[1]),"".concat(t[3],".").concat(t[2]),"".concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[1],".").concat(t[3]),"".concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[2],".").concat(t[3]),"".concat(t[0],".").concat(t[3],".").concat(t[1]),"".concat(t[0],".").concat(t[3],".").concat(t[2]),"".concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[1],".").concat(t[2],".").concat(t[3]),"".concat(t[1],".").concat(t[3],".").concat(t[0]),"".concat(t[1],".").concat(t[3],".").concat(t[2]),"".concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[0],".").concat(t[3]),"".concat(t[2],".").concat(t[1],".").concat(t[0]),"".concat(t[2],".").concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[3],".").concat(t[0]),"".concat(t[2],".").concat(t[3],".").concat(t[1]),"".concat(t[3],".").concat(t[0],".").concat(t[1]),"".concat(t[3],".").concat(t[0],".").concat(t[2]),"".concat(t[3],".").concat(t[1],".").concat(t[0]),"".concat(t[3],".").concat(t[1],".").concat(t[2]),"".concat(t[3],".").concat(t[2],".").concat(t[0]),"".concat(t[3],".").concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[1],".").concat(t[2],".").concat(t[3]),"".concat(t[0],".").concat(t[1],".").concat(t[3],".").concat(t[2]),"".concat(t[0],".").concat(t[2],".").concat(t[1],".").concat(t[3]),"".concat(t[0],".").concat(t[2],".").concat(t[3],".").concat(t[1]),"".concat(t[0],".").concat(t[3],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[3],".").concat(t[2],".").concat(t[1]),"".concat(t[1],".").concat(t[0],".").concat(t[2],".").concat(t[3]),"".concat(t[1],".").concat(t[0],".").concat(t[3],".").concat(t[2]),"".concat(t[1],".").concat(t[2],".").concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[2],".").concat(t[3],".").concat(t[0]),"".concat(t[1],".").concat(t[3],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[3],".").concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[0],".").concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[0],".").concat(t[3],".").concat(t[1]),"".concat(t[2],".").concat(t[1],".").concat(t[0],".").concat(t[3]),"".concat(t[2],".").concat(t[1],".").concat(t[3],".").concat(t[0]),"".concat(t[2],".").concat(t[3],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[3],".").concat(t[1],".").concat(t[0]),"".concat(t[3],".").concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[3],".").concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[3],".").concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[3],".").concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[3],".").concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[3],".").concat(t[2],".").concat(t[1],".").concat(t[0])]}var Hc={};function gb(t){if(t.length===0||t.length===1)return t;var e=t.join(".");return Hc[e]||(Hc[e]=mb(t)),Hc[e]}function vb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=t.filter(function(o){return o!=="token"}),r=gb(i);return r.reduce(function(o,s){return ko(ko({},o),n[s])},e)}function xg(t){return t.join(" ")}function _b(t,e){var n=0;return function(i){return n+=1,i.map(function(r,o){return ay({node:r,stylesheet:t,useInlineStyles:e,key:"code-segment-".concat(n,"-").concat(o)})})}}function ay(t){var e=t.node,n=t.stylesheet,i=t.style,r=i===void 0?{}:i,o=t.useInlineStyles,s=t.key,a=e.properties,l=e.type,u=e.tagName,c=e.value;if(l==="text")return c;if(u){var f=_b(n,o),d;if(!o)d=ko(ko({},a),{},{className:xg(a.className)});else{var p=Object.keys(n).reduce(function(h,_){return _.split(".").forEach(function(v){h.includes(v)||h.push(v)}),h},[]),g=a.className&&a.className.includes("token")?["token"]:[],x=a.className&&g.concat(a.className.filter(function(h){return!p.includes(h)}));d=ko(ko({},a),{},{className:xg(x)||void 0,style:vb(a.className,Object.assign({},a.style,r),n)})}var m=f(e.children);return ii.createElement(u,Ld({key:s},d),m)}}const xb=function(t,e){var n=t.listLanguages();return n.indexOf(e)!==-1};var yb=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function yg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ti(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yg(Object(n),!0).forEach(function(i){sy(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}var Sb=/\n/g;function Eb(t){return t.match(Sb)}function Mb(t){var e=t.lines,n=t.startingLineNumber,i=t.style;return e.map(function(r,o){var s=o+n;return ii.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof i=="function"?i(s):i},"".concat(s,`
`))})}function wb(t){var e=t.codeString,n=t.codeStyle,i=t.containerStyle,r=i===void 0?{float:"left",paddingRight:"10px"}:i,o=t.numberStyle,s=o===void 0?{}:o,a=t.startingLineNumber;return ii.createElement("code",{style:Object.assign({},n,r)},Mb({lines:e.replace(/\n$/,"").split(`
`),style:s,startingLineNumber:a}))}function Tb(t){return"".concat(t.toString().length,".25em")}function ly(t,e){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(t),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:e},children:[{type:"text",value:t}]}}function uy(t,e,n){var i={display:"inline-block",minWidth:Tb(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},r=typeof t=="function"?t(e):t,o=ti(ti({},i),r);return o}function Bl(t){var e=t.children,n=t.lineNumber,i=t.lineNumberStyle,r=t.largestLineNumber,o=t.showInlineLineNumbers,s=t.lineProps,a=s===void 0?{}:s,l=t.className,u=l===void 0?[]:l,c=t.showLineNumbers,f=t.wrapLongLines,d=typeof a=="function"?a(n):a;if(d.className=u,n&&o){var p=uy(i,n,r);e.unshift(ly(n,p))}return f&c&&(d.style=ti(ti({},d.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:d,children:e}}function cy(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],i=0;i<t.length;i++){var r=t[i];if(r.type==="text")n.push(Bl({children:[r],className:db(new Set(e))}));else if(r.children){var o=e.concat(r.properties.className);cy(r.children,o).forEach(function(s){return n.push(s)})}}return n}function Ab(t,e,n,i,r,o,s,a,l){var u,c=cy(t.value),f=[],d=-1,p=0;function g(R,y){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Bl({children:R,lineNumber:y,lineNumberStyle:a,largestLineNumber:s,showInlineLineNumbers:r,lineProps:n,className:b,showLineNumbers:i,wrapLongLines:l})}function x(R,y){if(i&&y&&r){var b=uy(a,y,s);R.unshift(ly(y,b))}return R}function m(R,y){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e||b.length>0?g(R,y,b):x(R,y)}for(var h=function(){var y=c[p],b=y.children[0].value,I=Eb(b);if(I){var T=b.split(`
`);T.forEach(function(S,P){var O=i&&f.length+o,H={type:"text",value:"".concat(S,`
`)};if(P===0){var K=c.slice(d+1,p).concat(Bl({children:[H],className:y.properties.className})),j=m(K,O);f.push(j)}else if(P===T.length-1){var Y=c[p+1]&&c[p+1].children&&c[p+1].children[0],Q={type:"text",value:"".concat(S)};if(Y){var U=Bl({children:[Q],className:y.properties.className});c.splice(p+1,0,U)}else{var J=[Q],A=m(J,O,y.properties.className);f.push(A)}}else{var ue=[H],ye=m(ue,O,y.properties.className);f.push(ye)}}),d=p}p++};p<c.length;)h();if(d!==c.length-1){var _=c.slice(d+1,c.length);if(_&&_.length){var v=i&&f.length+o,E=m(_,v);f.push(E)}}return e?f:(u=[]).concat.apply(u,f)}function Cb(t){var e=t.rows,n=t.stylesheet,i=t.useInlineStyles;return e.map(function(r,o){return ay({node:r,stylesheet:n,useInlineStyles:i,key:"code-segement".concat(o)})})}function fy(t){return t&&typeof t.highlightAuto<"u"}function bb(t){var e=t.astGenerator,n=t.language,i=t.code,r=t.defaultCodeValue;if(fy(e)){var o=xb(e,n);return n==="text"?{value:r,language:"text"}:o?e.highlight(n,i):e.highlightAuto(i)}try{return n&&n!=="text"?{value:e.highlight(i,n)}:{value:r}}catch{return{value:r}}}function Rb(t,e){return function(i){var r=i.language,o=i.children,s=i.style,a=s===void 0?e:s,l=i.customStyle,u=l===void 0?{}:l,c=i.codeTagProps,f=c===void 0?{className:r?"language-".concat(r):void 0,style:ti(ti({},a['code[class*="language-"]']),a['code[class*="language-'.concat(r,'"]')])}:c,d=i.useInlineStyles,p=d===void 0?!0:d,g=i.showLineNumbers,x=g===void 0?!1:g,m=i.showInlineLineNumbers,h=m===void 0?!0:m,_=i.startingLineNumber,v=_===void 0?1:_,E=i.lineNumberContainerStyle,R=i.lineNumberStyle,y=R===void 0?{}:R,b=i.wrapLines,I=i.wrapLongLines,T=I===void 0?!1:I,S=i.lineProps,P=S===void 0?{}:S,O=i.renderer,H=i.PreTag,K=H===void 0?"pre":H,j=i.CodeTag,Y=j===void 0?"code":j,Q=i.code,U=Q===void 0?(Array.isArray(o)?o[0]:o)||"":Q,J=i.astGenerator,A=ab(i,yb);J=J||t;var ue=x?ii.createElement(wb,{containerStyle:E,codeStyle:f.style||{},numberStyle:y,startingLineNumber:v,codeString:U}):null,ye=a.hljs||a['pre[class*="language-"]']||{backgroundColor:"#fff"},M=fy(J)?"hljs":"prismjs",k=p?Object.assign({},A,{style:Object.assign({},ye,u)}):Object.assign({},A,{className:A.className?"".concat(M," ").concat(A.className):M,style:Object.assign({},u)});if(T?f.style=ti(ti({},f.style),{},{whiteSpace:"pre-wrap"}):f.style=ti(ti({},f.style),{},{whiteSpace:"pre"}),!J)return ii.createElement(K,k,ue,ii.createElement(Y,f,U));(b===void 0&&O||T)&&(b=!0),O=O||Cb;var Z=[{type:"text",value:U}],te=bb({astGenerator:J,language:r,code:U,defaultCodeValue:Z});te.language===null&&(te.value=Z);var ae=te.value.length+v,Ce=Ab(te,b,P,x,h,v,ae,y,T);return ii.createElement(K,k,ii.createElement(Y,f,!h&&ue,O({rows:Ce,stylesheet:a,useInlineStyles:p})))}}var io={};function Qh(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(e){var n=t[e];typeof n=="object"&&!Object.isFrozen(n)&&Qh(n)}),t}var dy=Qh,Pb=Qh;dy.default=Pb;class Sg{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Xo(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ji(t,...e){const n=Object.create(null);for(const i in t)n[i]=t[i];return e.forEach(function(i){for(const r in i)n[r]=i[r]}),n}const Lb="</span>",Eg=t=>!!t.kind;class Ib{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=Xo(e)}openNode(e){if(!Eg(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){Eg(e)&&(this.buffer+=Lb)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class Jh{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return typeof n=="string"?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(i=>this._walk(e,i)),e.closeNode(n)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(n=>typeof n=="string")?e.children=[e.children.join("")]:e.children.forEach(n=>{Jh._collapse(n)}))}}class Nb extends Jh{constructor(e){super(),this.options=e}addKeyword(e,n){e!==""&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,n){const i=e.root;i.kind=n,i.sublanguage=!0,this.add(i)}toHTML(){return new Ib(this,this.options).value()}finalize(){return!0}}function Db(t){return new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function ma(t){return t?typeof t=="string"?t:t.source:null}function Ub(...t){return t.map(n=>ma(n)).join("")}function kb(...t){return"("+t.map(n=>ma(n)).join("|")+")"}function Ob(t){return new RegExp(t.toString()+"|").exec("").length-1}function Fb(t,e){const n=t&&t.exec(e);return n&&n.index===0}const zb=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Bb(t,e="|"){let n=0;return t.map(i=>{n+=1;const r=n;let o=ma(i),s="";for(;o.length>0;){const a=zb.exec(o);if(!a){s+=o;break}s+=o.substring(0,a.index),o=o.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?s+="\\"+String(Number(a[1])+r):(s+=a[0],a[0]==="("&&n++)}return s}).map(i=>`(${i})`).join(e)}const Hb=/\b\B/,hy="[a-zA-Z]\\w*",ep="[a-zA-Z_]\\w*",tp="\\b\\d+(\\.\\d+)?",py="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",my="\\b(0b[01]+)",Vb="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Gb=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=Ub(e,/.*\b/,t.binary,/\b.*/)),Ji({className:"meta",begin:e,end:/$/,relevance:0,"on:begin":(n,i)=>{n.index!==0&&i.ignoreMatch()}},t)},ga={begin:"\\\\[\\s\\S]",relevance:0},Wb={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[ga]},jb={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[ga]},gy={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Xu=function(t,e,n={}){const i=Ji({className:"comment",begin:t,end:e,contains:[]},n);return i.contains.push(gy),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),i},Xb=Xu("//","$"),$b=Xu("/\\*","\\*/"),qb=Xu("#","$"),Yb={className:"number",begin:tp,relevance:0},Kb={className:"number",begin:py,relevance:0},Zb={className:"number",begin:my,relevance:0},Qb={className:"number",begin:tp+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},Jb={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[ga,{begin:/\[/,end:/\]/,relevance:0,contains:[ga]}]}]},eR={className:"title",begin:hy,relevance:0},tR={className:"title",begin:ep,relevance:0},nR={begin:"\\.\\s*"+ep,relevance:0},iR=function(t){return Object.assign(t,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})};var Ja=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Hb,IDENT_RE:hy,UNDERSCORE_IDENT_RE:ep,NUMBER_RE:tp,C_NUMBER_RE:py,BINARY_NUMBER_RE:my,RE_STARTERS_RE:Vb,SHEBANG:Gb,BACKSLASH_ESCAPE:ga,APOS_STRING_MODE:Wb,QUOTE_STRING_MODE:jb,PHRASAL_WORDS_MODE:gy,COMMENT:Xu,C_LINE_COMMENT_MODE:Xb,C_BLOCK_COMMENT_MODE:$b,HASH_COMMENT_MODE:qb,NUMBER_MODE:Yb,C_NUMBER_MODE:Kb,BINARY_NUMBER_MODE:Zb,CSS_NUMBER_MODE:Qb,REGEXP_MODE:Jb,TITLE_MODE:eR,UNDERSCORE_TITLE_MODE:tR,METHOD_GUARD:nR,END_SAME_AS_BEGIN:iR});function rR(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function oR(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=rR,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function sR(t,e){Array.isArray(t.illegal)&&(t.illegal=kb(...t.illegal))}function aR(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function lR(t,e){t.relevance===void 0&&(t.relevance=1)}const uR=["of","and","for","in","not","or","if","then","parent","list","value"],cR="keyword";function vy(t,e,n=cR){const i={};return typeof t=="string"?r(n,t.split(" ")):Array.isArray(t)?r(n,t):Object.keys(t).forEach(function(o){Object.assign(i,vy(t[o],e,o))}),i;function r(o,s){e&&(s=s.map(a=>a.toLowerCase())),s.forEach(function(a){const l=a.split("|");i[l[0]]=[o,fR(l[0],l[1])]})}}function fR(t,e){return e?Number(e):dR(t)?0:1}function dR(t){return uR.includes(t.toLowerCase())}function hR(t,{plugins:e}){function n(a,l){return new RegExp(ma(a),"m"+(t.case_insensitive?"i":"")+(l?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,l]),this.matchAt+=Ob(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(u=>u[1]);this.matcherRe=n(Bb(l),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(l);if(!u)return null;const c=u.findIndex((d,p)=>p>0&&d!==void 0),f=this.matchIndexes[c];return u.splice(0,c),Object.assign(u,f)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const u=new i;return this.rules.slice(l).forEach(([c,f])=>u.addRule(c,f)),u.compile(),this.multiRegexes[l]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,u){this.rules.push([l,u]),u.type==="begin"&&this.count++}exec(l){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let c=u.exec(l);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const f=this.getMatcher(0);f.lastIndex=this.lastIndex+1,c=f.exec(l)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function o(a){const l=new r;return a.contains.forEach(u=>l.addRule(u.begin,{rule:u,type:"begin"})),a.terminatorEnd&&l.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&l.addRule(a.illegal,{type:"illegal"}),l}function s(a,l){const u=a;if(a.isCompiled)return u;[aR].forEach(f=>f(a,l)),t.compilerExtensions.forEach(f=>f(a,l)),a.__beforeBegin=null,[oR,sR,lR].forEach(f=>f(a,l)),a.isCompiled=!0;let c=null;if(typeof a.keywords=="object"&&(c=a.keywords.$pattern,delete a.keywords.$pattern),a.keywords&&(a.keywords=vy(a.keywords,t.case_insensitive)),a.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return c=c||a.lexemes||/\w+/,u.keywordPatternRe=n(c,!0),l&&(a.begin||(a.begin=/\B|\b/),u.beginRe=n(a.begin),a.endSameAsBegin&&(a.end=a.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(u.endRe=n(a.end)),u.terminatorEnd=ma(a.end)||"",a.endsWithParent&&l.terminatorEnd&&(u.terminatorEnd+=(a.end?"|":"")+l.terminatorEnd)),a.illegal&&(u.illegalRe=n(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(f){return pR(f==="self"?a:f)})),a.contains.forEach(function(f){s(f,u)}),a.starts&&s(a.starts,l),u.matcher=o(u),u}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Ji(t.classNameAliases||{}),s(t)}function _y(t){return t?t.endsWithParent||_y(t.starts):!1}function pR(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return Ji(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:_y(t)?Ji(t,{starts:t.starts?Ji(t.starts):null}):Object.isFrozen(t)?Ji(t):t}var mR="10.7.3";function gR(t){return!!(t||t==="")}function vR(t){const e={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!t.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,Xo(this.code);let i={};return this.autoDetect?(i=t.highlightAuto(this.code),this.detectedLanguage=i.language):(i=t.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),i.value},autoDetect(){return!this.language||gR(this.autodetect)},ignoreIllegals(){return!0}},render(i){return i("pre",{},[i("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:e,VuePlugin:{install(i){i.component("highlightjs",e)}}}}const _R={"after:highlightElement":({el:t,result:e,text:n})=>{const i=Mg(t);if(!i.length)return;const r=document.createElement("div");r.innerHTML=e.value,e.value=xR(i,Mg(r),n)}};function Id(t){return t.nodeName.toLowerCase()}function Mg(t){const e=[];return function n(i,r){for(let o=i.firstChild;o;o=o.nextSibling)o.nodeType===3?r+=o.nodeValue.length:o.nodeType===1&&(e.push({event:"start",offset:r,node:o}),r=n(o,r),Id(o).match(/br|hr|img|input/)||e.push({event:"stop",offset:r,node:o}));return r}(t,0),e}function xR(t,e,n){let i=0,r="";const o=[];function s(){return!t.length||!e.length?t.length?t:e:t[0].offset!==e[0].offset?t[0].offset<e[0].offset?t:e:e[0].event==="start"?t:e}function a(c){function f(d){return" "+d.nodeName+'="'+Xo(d.value)+'"'}r+="<"+Id(c)+[].map.call(c.attributes,f).join("")+">"}function l(c){r+="</"+Id(c)+">"}function u(c){(c.event==="start"?a:l)(c.node)}for(;t.length||e.length;){let c=s();if(r+=Xo(n.substring(i,c[0].offset)),i=c[0].offset,c===t){o.reverse().forEach(l);do u(c.splice(0,1)[0]),c=s();while(c===t&&c.length&&c[0].offset===i);o.reverse().forEach(a)}else c[0].event==="start"?o.push(c[0].node):o.pop(),u(c.splice(0,1)[0])}return r+Xo(n.substr(i))}const wg={},Vc=t=>{console.error(t)},Tg=(t,...e)=>{console.log(`WARN: ${t}`,...e)},Tn=(t,e)=>{wg[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),wg[`${t}/${e}`]=!0)},Gc=Xo,Ag=Ji,Cg=Symbol("nomatch"),yR=function(t){const e=Object.create(null),n=Object.create(null),i=[];let r=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,s="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let l={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:Nb};function u(M){return l.noHighlightRe.test(M)}function c(M){let k=M.className+" ";k+=M.parentNode?M.parentNode.className:"";const Z=l.languageDetectRe.exec(k);if(Z){const te=j(Z[1]);return te||(Tg(s.replace("{}",Z[1])),Tg("Falling back to no-highlight mode for this block.",M)),te?Z[1]:"no-highlight"}return k.split(/\s+/).find(te=>u(te)||j(te))}function f(M,k,Z,te){let ae="",Ce="";typeof k=="object"?(ae=M,Z=k.ignoreIllegals,Ce=k.language,te=void 0):(Tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),Tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Ce=M,ae=k);const Ae={code:ae,language:Ce};A("before:highlight",Ae);const Pe=Ae.result?Ae.result:d(Ae.language,Ae.code,Z,te);return Pe.code=Ae.code,A("after:highlight",Pe),Pe}function d(M,k,Z,te){function ae(V,ne){const me=Ze.case_insensitive?ne[0].toLowerCase():ne[0];return Object.prototype.hasOwnProperty.call(V.keywords,me)&&V.keywords[me]}function Ce(){if(!z.keywords){oe.addText(ie);return}let V=0;z.keywordPatternRe.lastIndex=0;let ne=z.keywordPatternRe.exec(ie),me="";for(;ne;){me+=ie.substring(V,ne.index);const he=ae(z,ne);if(he){const[fe,Ie]=he;if(oe.addText(me),me="",B+=Ie,fe.startsWith("_"))me+=ne[0];else{const Le=Ze.classNameAliases[fe]||fe;oe.addKeyword(ne[0],Le)}}else me+=ne[0];V=z.keywordPatternRe.lastIndex,ne=z.keywordPatternRe.exec(ie)}me+=ie.substr(V),oe.addText(me)}function Ae(){if(ie==="")return;let V=null;if(typeof z.subLanguage=="string"){if(!e[z.subLanguage]){oe.addText(ie);return}V=d(z.subLanguage,ie,!0,le[z.subLanguage]),le[z.subLanguage]=V.top}else V=g(ie,z.subLanguage.length?z.subLanguage:null);z.relevance>0&&(B+=V.relevance),oe.addSublanguage(V.emitter,V.language)}function Pe(){z.subLanguage!=null?Ae():Ce(),ie=""}function N(V){return V.className&&oe.openNode(Ze.classNameAliases[V.className]||V.className),z=Object.create(V,{parent:{value:z}}),z}function Fe(V,ne,me){let he=Fb(V.endRe,me);if(he){if(V["on:end"]){const fe=new Sg(V);V["on:end"](ne,fe),fe.isMatchIgnored&&(he=!1)}if(he){for(;V.endsParent&&V.parent;)V=V.parent;return V}}if(V.endsWithParent)return Fe(V.parent,ne,me)}function je(V){return z.matcher.regexIndex===0?(ie+=V[0],1):(ve=!0,0)}function at(V){const ne=V[0],me=V.rule,he=new Sg(me),fe=[me.__beforeBegin,me["on:begin"]];for(const Ie of fe)if(Ie&&(Ie(V,he),he.isMatchIgnored))return je(ne);return me&&me.endSameAsBegin&&(me.endRe=Db(ne)),me.skip?ie+=ne:(me.excludeBegin&&(ie+=ne),Pe(),!me.returnBegin&&!me.excludeBegin&&(ie=ne)),N(me),me.returnBegin?0:ne.length}function be(V){const ne=V[0],me=k.substr(V.index),he=Fe(z,V,me);if(!he)return Cg;const fe=z;fe.skip?ie+=ne:(fe.returnEnd||fe.excludeEnd||(ie+=ne),Pe(),fe.excludeEnd&&(ie=ne));do z.className&&oe.closeNode(),!z.skip&&!z.subLanguage&&(B+=z.relevance),z=z.parent;while(z!==he.parent);return he.starts&&(he.endSameAsBegin&&(he.starts.endRe=he.endRe),N(he.starts)),fe.returnEnd?0:ne.length}function Xe(){const V=[];for(let ne=z;ne!==Ze;ne=ne.parent)ne.className&&V.unshift(ne.className);V.forEach(ne=>oe.openNode(ne))}let ze={};function Be(V,ne){const me=ne&&ne[0];if(ie+=V,me==null)return Pe(),0;if(ze.type==="begin"&&ne.type==="end"&&ze.index===ne.index&&me===""){if(ie+=k.slice(ne.index,ne.index+1),!r){const he=new Error("0 width match regex");throw he.languageName=M,he.badRule=ze.rule,he}return 1}if(ze=ne,ne.type==="begin")return at(ne);if(ne.type==="illegal"&&!Z){const he=new Error('Illegal lexeme "'+me+'" for mode "'+(z.className||"<unnamed>")+'"');throw he.mode=z,he}else if(ne.type==="end"){const he=be(ne);if(he!==Cg)return he}if(ne.type==="illegal"&&me==="")return 1;if(ee>1e5&&ee>ne.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ie+=me,me.length}const Ze=j(M);if(!Ze)throw Vc(s.replace("{}",M)),new Error('Unknown language: "'+M+'"');const L=hR(Ze,{plugins:i});let w="",z=te||L;const le={},oe=new l.__emitter(l);Xe();let ie="",B=0,W=0,ee=0,ve=!1;try{for(z.matcher.considerAll();;){ee++,ve?ve=!1:z.matcher.considerAll(),z.matcher.lastIndex=W;const V=z.matcher.exec(k);if(!V)break;const ne=k.substring(W,V.index),me=Be(ne,V);W=V.index+me}return Be(k.substr(W)),oe.closeAllNodes(),oe.finalize(),w=oe.toHTML(),{relevance:Math.floor(B),value:w,language:M,illegal:!1,emitter:oe,top:z}}catch(V){if(V.message&&V.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:V.message,context:k.slice(W-100,W+100),mode:V.mode},sofar:w,relevance:0,value:Gc(k),emitter:oe};if(r)return{illegal:!1,relevance:0,value:Gc(k),emitter:oe,language:M,top:z,errorRaised:V};throw V}}function p(M){const k={relevance:0,emitter:new l.__emitter(l),value:Gc(M),illegal:!1,top:a};return k.emitter.addText(M),k}function g(M,k){k=k||l.languages||Object.keys(e);const Z=p(M),te=k.filter(j).filter(Q).map(N=>d(N,M,!1));te.unshift(Z);const ae=te.sort((N,Fe)=>{if(N.relevance!==Fe.relevance)return Fe.relevance-N.relevance;if(N.language&&Fe.language){if(j(N.language).supersetOf===Fe.language)return 1;if(j(Fe.language).supersetOf===N.language)return-1}return 0}),[Ce,Ae]=ae,Pe=Ce;return Pe.second_best=Ae,Pe}function x(M){return l.tabReplace||l.useBR?M.replace(o,k=>k===`
`?l.useBR?"<br>":k:l.tabReplace?k.replace(/\t/g,l.tabReplace):k):M}function m(M,k,Z){const te=k?n[k]:Z;M.classList.add("hljs"),te&&M.classList.add(te)}const h={"before:highlightElement":({el:M})=>{l.useBR&&(M.innerHTML=M.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:M})=>{l.useBR&&(M.value=M.value.replace(/\n/g,"<br>"))}},_=/^(<[^>]+>|\t)+/gm,v={"after:highlightElement":({result:M})=>{l.tabReplace&&(M.value=M.value.replace(_,k=>k.replace(/\t/g,l.tabReplace)))}};function E(M){let k=null;const Z=c(M);if(u(Z))return;A("before:highlightElement",{el:M,language:Z}),k=M;const te=k.textContent,ae=Z?f(te,{language:Z,ignoreIllegals:!0}):g(te);A("after:highlightElement",{el:M,result:ae,text:te}),M.innerHTML=ae.value,m(M,Z,ae.language),M.result={language:ae.language,re:ae.relevance,relavance:ae.relevance},ae.second_best&&(M.second_best={language:ae.second_best.language,re:ae.second_best.relevance,relavance:ae.second_best.relevance})}function R(M){M.useBR&&(Tn("10.3.0","'useBR' will be removed entirely in v11.0"),Tn("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),l=Ag(l,M)}const y=()=>{if(y.called)return;y.called=!0,Tn("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(E)};function b(){Tn("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),I=!0}let I=!1;function T(){if(document.readyState==="loading"){I=!0;return}document.querySelectorAll("pre code").forEach(E)}function S(){I&&T()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",S,!1);function P(M,k){let Z=null;try{Z=k(t)}catch(te){if(Vc("Language definition for '{}' could not be registered.".replace("{}",M)),r)Vc(te);else throw te;Z=a}Z.name||(Z.name=M),e[M]=Z,Z.rawDefinition=k.bind(null,t),Z.aliases&&Y(Z.aliases,{languageName:M})}function O(M){delete e[M];for(const k of Object.keys(n))n[k]===M&&delete n[k]}function H(){return Object.keys(e)}function K(M){Tn("10.4.0","requireLanguage will be removed entirely in v11."),Tn("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const k=j(M);if(k)return k;throw new Error("The '{}' language is required, but not loaded.".replace("{}",M))}function j(M){return M=(M||"").toLowerCase(),e[M]||e[n[M]]}function Y(M,{languageName:k}){typeof M=="string"&&(M=[M]),M.forEach(Z=>{n[Z.toLowerCase()]=k})}function Q(M){const k=j(M);return k&&!k.disableAutodetect}function U(M){M["before:highlightBlock"]&&!M["before:highlightElement"]&&(M["before:highlightElement"]=k=>{M["before:highlightBlock"](Object.assign({block:k.el},k))}),M["after:highlightBlock"]&&!M["after:highlightElement"]&&(M["after:highlightElement"]=k=>{M["after:highlightBlock"](Object.assign({block:k.el},k))})}function J(M){U(M),i.push(M)}function A(M,k){const Z=M;i.forEach(function(te){te[Z]&&te[Z](k)})}function ue(M){return Tn("10.2.0","fixMarkup will be removed entirely in v11.0"),Tn("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),x(M)}function ye(M){return Tn("10.7.0","highlightBlock will be removed entirely in v12.0"),Tn("10.7.0","Please use highlightElement now."),E(M)}Object.assign(t,{highlight:f,highlightAuto:g,highlightAll:T,fixMarkup:ue,highlightElement:E,highlightBlock:ye,configure:R,initHighlighting:y,initHighlightingOnLoad:b,registerLanguage:P,unregisterLanguage:O,listLanguages:H,getLanguage:j,registerAliases:Y,requireLanguage:K,autoDetection:Q,inherit:Ag,addPlugin:J,vuePlugin:vR(t).VuePlugin}),t.debugMode=function(){r=!1},t.safeMode=function(){r=!0},t.versionString=mR;for(const M in Ja)typeof Ja[M]=="object"&&dy(Ja[M]);return Object.assign(t,Ja),t.addPlugin(h),t.addPlugin(_R),t.addPlugin(v),t};var SR=yR({}),ER=SR,xy={exports:{}};(function(t){(function(){var e;e=t.exports=r,e.format=r,e.vsprintf=i,typeof console<"u"&&typeof console.log=="function"&&(e.printf=n);function n(){console.log(r.apply(null,arguments))}function i(o,s){return r.apply(null,[o].concat(s))}function r(o){for(var s=1,a=[].slice.call(arguments),l=0,u=o.length,c="",f,d=!1,p,g,x=!1,m,h=function(){return a[s++]},_=function(){for(var v="";/\d/.test(o[l]);)v+=o[l++],f=o[l];return v.length>0?parseInt(v):null};l<u;++l)if(f=o[l],d)switch(d=!1,f=="."?(x=!1,f=o[++l]):f=="0"&&o[l+1]=="."?(x=!0,l+=2,f=o[l]):x=!0,m=_(),f){case"b":c+=parseInt(h(),10).toString(2);break;case"c":p=h(),typeof p=="string"||p instanceof String?c+=p:c+=String.fromCharCode(parseInt(p,10));break;case"d":c+=parseInt(h(),10);break;case"f":g=String(parseFloat(h()).toFixed(m||6)),c+=x?g:g.replace(/^0/,"");break;case"j":c+=JSON.stringify(h());break;case"o":c+="0"+parseInt(h(),10).toString(8);break;case"s":c+=h();break;case"x":c+="0x"+parseInt(h(),10).toString(16);break;case"X":c+="0x"+parseInt(h(),10).toString(16).toUpperCase();break;default:c+=f;break}else f==="%"?d=!0:c+=f;return c}})()})(xy);var MR=xy.exports,wR=MR,yr=Sr(Error),TR=yr;yr.eval=Sr(EvalError);yr.range=Sr(RangeError);yr.reference=Sr(ReferenceError);yr.syntax=Sr(SyntaxError);yr.type=Sr(TypeError);yr.uri=Sr(URIError);yr.create=Sr;function Sr(t){return e.displayName=t.displayName||t.name,e;function e(n){return n&&(n=wR.apply(null,arguments)),new t(n)}}var si=ER,Hl=TR;io.highlight=yy;io.highlightAuto=CR;io.registerLanguage=bR;io.listLanguages=RR;io.registerAlias=PR;Di.prototype.addText=NR;Di.prototype.addKeyword=LR;Di.prototype.addSublanguage=IR;Di.prototype.openNode=DR;Di.prototype.closeNode=UR;Di.prototype.closeAllNodes=Sy;Di.prototype.finalize=Sy;Di.prototype.toHTML=kR;var AR="hljs-";function yy(t,e,n){var i=si.configure({}),r=n||{},o=r.prefix,s;if(typeof t!="string")throw Hl("Expected `string` for name, got `%s`",t);if(!si.getLanguage(t))throw Hl("Unknown language: `%s` is not registered",t);if(typeof e!="string")throw Hl("Expected `string` for value, got `%s`",e);if(o==null&&(o=AR),si.configure({__emitter:Di,classPrefix:o}),s=si.highlight(e,{language:t,ignoreIllegals:!0}),si.configure(i||{}),s.errorRaised)throw s.errorRaised;return{relevance:s.relevance,language:s.language,value:s.emitter.rootNode.children}}function CR(t,e){var n=e||{},i=n.subset||si.listLanguages();n.prefix;var r=i.length,o=-1,s,a,l,u;if(typeof t!="string")throw Hl("Expected `string` for value, got `%s`",t);for(a={relevance:0,language:null,value:[]},s={relevance:0,language:null,value:[]};++o<r;)u=i[o],si.getLanguage(u)&&(l=yy(u,t,e),l.language=u,l.relevance>a.relevance&&(a=l),l.relevance>s.relevance&&(a=s,s=l));return a.language&&(s.secondBest=a),s}function bR(t,e){si.registerLanguage(t,e)}function RR(){return si.listLanguages()}function PR(t,e){var n=t,i;e&&(n={},n[t]=e);for(i in n)si.registerAliases(n[i],{languageName:i})}function Di(t){this.options=t,this.rootNode={children:[]},this.stack=[this.rootNode]}function LR(t,e){this.openNode(e),this.addText(t),this.closeNode()}function IR(t,e){var n=this.stack,i=n[n.length-1],r=t.rootNode.children,o=e?{type:"element",tagName:"span",properties:{className:[e]},children:r}:r;i.children=i.children.concat(o)}function NR(t){var e=this.stack,n,i;t!==""&&(n=e[e.length-1],i=n.children[n.children.length-1],i&&i.type==="text"?i.value+=t:n.children.push({type:"text",value:t}))}function DR(t){var e=this.stack,n=this.options.classPrefix+t,i=e[e.length-1],r={type:"element",tagName:"span",properties:{className:[n]},children:[]};i.children.push(r),e.push(r)}function UR(){this.stack.pop()}function kR(){return""}function Sy(){}var Ey=Rb(io,{});Ey.registerLanguage=io.registerLanguage;const OR={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#333",background:"#f8f8f8"},"hljs-comment":{color:"#998",fontStyle:"italic"},"hljs-quote":{color:"#998",fontStyle:"italic"},"hljs-keyword":{color:"#333",fontWeight:"bold"},"hljs-selector-tag":{color:"#333",fontWeight:"bold"},"hljs-subst":{color:"#333",fontWeight:"normal"},"hljs-number":{color:"#008080"},"hljs-literal":{color:"#008080"},"hljs-variable":{color:"#008080"},"hljs-template-variable":{color:"#008080"},"hljs-tag .hljs-attr":{color:"#008080"},"hljs-string":{color:"#d14"},"hljs-doctag":{color:"#d14"},"hljs-title":{color:"#900",fontWeight:"bold"},"hljs-section":{color:"#900",fontWeight:"bold"},"hljs-selector-id":{color:"#900",fontWeight:"bold"},"hljs-type":{color:"#458",fontWeight:"bold"},"hljs-class .hljs-title":{color:"#458",fontWeight:"bold"},"hljs-tag":{color:"#000080",fontWeight:"normal"},"hljs-name":{color:"#000080",fontWeight:"normal"},"hljs-attribute":{color:"#000080",fontWeight:"normal"},"hljs-regexp":{color:"#009926"},"hljs-link":{color:"#009926"},"hljs-symbol":{color:"#990073"},"hljs-bullet":{color:"#990073"},"hljs-built_in":{color:"#0086b3"},"hljs-builtin-name":{color:"#0086b3"},"hljs-meta":{color:"#999",fontWeight:"bold"},"hljs-deletion":{background:"#fdd"},"hljs-addition":{background:"#dfd"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},FR=t=>{const{markdownContent:e}=t;return Oe.jsx(rb,{className:"whitespace-pre-wrap",components:{code(n){const{children:i,className:r,...o}=n,s=/language-(\w+)/.exec(r||"");return s?Oe.jsx(Ey,{PreTag:"div",children:String(i).replace(/\n$/,""),language:s[1],style:OR}):Oe.jsx("code",{...o,className:r,children:i})}},children:e})},bg=()=>Oe.jsx("hr",{className:"border-dashed border-2"}),zR=`**FizzBuzz** is a program that **prints the numbers from 1 to n**\r
For multiples of 3 - it prints “Fizz” instead of the number\r
For the multiples of 5 - it prints “Buzz”\r
For numbers which are multiples of both 3 and 5 - it prints “FizzBuzz”\r
\r
\`\`\`typescript\r
let fb: string[] = [];\r
\r
const calculateFizzBuzz = (n: number) => {\r
	fb = [];\r
\r
	if (n <= 0) {\r
		fb.push("Please enter a number greater than 0");\r
		return;\r
	}\r
\r
	for (let i = 1; i <= n; i++) {\r
		if (i % 3 === 0 && i % 5 === 0) {\r
			fb.push("FizzBuzz");\r
		} else if (i % 3 === 0) {\r
			fb.push("Fizz");\r
		} else if (i % 5 === 0) {\r
			fb.push("Buzz");\r
		} else {\r
			fb.push(i.toString());\r
		}\r
	}\r
};\r
\`\`\`\r
`,BR=()=>{const[t,e]=xe.useState([]),[n,i]=xe.useState(0),[r]=xe.useState(zR),o=a=>{const l=[];if(a<=0){l.push("Please enter a number greater than 0"),e(l);return}for(let u=1;u<=a;u++)u%3===0&&u%5===0?l.push("FizzBuzz"):u%3===0?l.push("Fizz"):u%5===0?l.push("Buzz"):l.push(u.toString());e(l)};xe.useEffect(()=>{o(n)},[n]);const s=a=>{const l=Math.min(Math.max(a,0),100);i(l)};return Oe.jsxs("div",{className:"flex flex-col h-full gap-4 overflow-y-auto",children:[Oe.jsx(FR,{markdownContent:r}),Oe.jsx(bg,{}),Oe.jsxs("div",{className:"flex flex-row gap-4 items-center",children:[Oe.jsx(L1,{value:n,setValue:s}),Oe.jsx("p",{children:"Enter a number between 1 - 100 to calculate FizzBuzz"}),Oe.jsx(bg,{})]}),Oe.jsx("div",{className:"flex flex-col  ",children:t.map((a,l)=>Oe.jsx("p",{className:a==="Fizz"||a==="Buzz"||a==="FizzBuzz"?"text-primary":"",children:a},l))})]})},HR=()=>Oe.jsxs("div",{className:"flex flex-col gap-2",children:[Oe.jsx("h1",{children:"404 Not Found"}),Oe.jsx(Sx,{className:"text-cyan-400",to:"/",children:"Go Home"})]}),Wc=t=>{const{route:e,text:n}=t;return Oe.jsx(Sx,{to:e,children:Oe.jsx("li",{className:"text-gray-200 text-sm flex items-center gap-x-4 p-2 rounded-md mt-2 mx-2 hover:bg-gray-200 hover:text-gray-500",children:Oe.jsx("span",{children:n})})})},VR=()=>{const t=[{route:"/fizz-buzz",text:"fizz-buzz"}],[e,n]=xe.useState(""),[i,r]=xe.useState(t),o=s=>{n(s.target.value),r(t.filter(a=>a.text.toLowerCase().includes(s.target.value.toLowerCase())))};return Oe.jsxs("div",{className:"bg-primary flex flex-col h-screen text-ternary p-2 w-72 gap-2",children:[Oe.jsx("h1",{className:"text-gray-100 text-3xl",children:"algorithms"}),Oe.jsx("input",{type:"text",placeholder:"search..",value:e,onChange:o,className:"bg-gray-200 text-gray-500 p-2 rounded-lg width-full focus:outline-none"}),Oe.jsxs("ul",{children:[Oe.jsx(Wc,{route:"/",text:"home"}),i.length>0?i.map((s,a)=>Oe.jsx(Wc,{route:s.route,text:s.text},a)):Oe.jsx(Wc,{route:"/",text:"no algorithms found"})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="165",GR=0,Rg=1,WR=2,My=1,jR=2,vi=3,pr=0,cn=1,yi=2,cr=0,$o=1,Pg=2,Lg=3,Ig=4,XR=5,kr=100,$R=101,qR=102,YR=103,KR=104,ZR=200,QR=201,JR=202,eP=203,Nd=204,Dd=205,tP=206,nP=207,iP=208,rP=209,oP=210,sP=211,aP=212,lP=213,uP=214,cP=0,fP=1,dP=2,_u=3,hP=4,pP=5,mP=6,gP=7,wy=0,vP=1,_P=2,fr=0,xP=1,yP=2,SP=3,EP=4,MP=5,wP=6,TP=7,Ty=300,is=301,rs=302,Ud=303,kd=304,$u=306,Od=1e3,Hr=1001,Fd=1002,In=1003,AP=1004,el=1005,jn=1006,jc=1007,Vr=1008,mr=1009,CP=1010,bP=1011,xu=1012,Ay=1013,os=1014,er=1015,qu=1016,Cy=1017,by=1018,ss=1020,RP=35902,PP=1021,LP=1022,li=1023,IP=1024,NP=1025,qo=1026,as=1027,DP=1028,Ry=1029,UP=1030,Py=1031,Ly=1033,Xc=33776,$c=33777,qc=33778,Yc=33779,Ng=35840,Dg=35841,Ug=35842,kg=35843,Og=36196,Fg=37492,zg=37496,Bg=37808,Hg=37809,Vg=37810,Gg=37811,Wg=37812,jg=37813,Xg=37814,$g=37815,qg=37816,Yg=37817,Kg=37818,Zg=37819,Qg=37820,Jg=37821,Kc=36492,ev=36494,tv=36495,kP=36283,nv=36284,iv=36285,rv=36286,OP=3200,FP=3201,zP=0,BP=1,Yi="",ei="srgb",Er="srgb-linear",ip="display-p3",Yu="display-p3-linear",yu="linear",dt="srgb",Su="rec709",Eu="p3",so=7680,ov=519,HP=512,VP=513,GP=514,Iy=515,WP=516,jP=517,XP=518,$P=519,sv=35044,av="300 es",Mi=2e3,Mu=2001;class ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,zd=180/Math.PI;function Ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function qP(t,e){return(t%e+e)%e}function Qc(t,e,n){return(1-n)*t+n*e}function Cs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,o,s,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],_=r[1],v=r[4],E=r[7],R=r[2],y=r[5],b=r[8];return o[0]=s*x+a*_+l*R,o[3]=s*m+a*v+l*y,o[6]=s*h+a*E+l*b,o[1]=u*x+c*_+f*R,o[4]=u*m+c*v+f*y,o[7]=u*h+c*E+f*b,o[2]=d*x+p*_+g*R,o[5]=d*m+p*v+g*y,o[8]=d*h+p*E+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*s-a*u,d=a*l-c*o,p=u*o-s*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Jc.makeScale(e,n)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new We;function Ny(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function YP(){const t=wu("canvas");return t.style.display="block",t}const lv={};function Dy(t){t in lv||(lv[t]=!0,console.warn(t))}function KP(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const uv=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cv=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tl={[Er]:{transfer:yu,primaries:Su,toReference:t=>t,fromReference:t=>t},[ei]:{transfer:dt,primaries:Su,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yu]:{transfer:yu,primaries:Eu,toReference:t=>t.applyMatrix3(cv),fromReference:t=>t.applyMatrix3(uv)},[ip]:{transfer:dt,primaries:Eu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(cv),fromReference:t=>t.applyMatrix3(uv).convertLinearToSRGB()}},ZP=new Set([Er,Yu]),nt={enabled:!0,_workingColorSpace:Er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ZP.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=tl[e].toReference,r=tl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return tl[t].primaries},getTransfer:function(t){return t===Yi?yu:tl[t].transfer}};function Yo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ef(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ao;class QP{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ao===void 0&&(ao=wu("canvas")),ao.width=e.width,ao.height=e.height;const i=ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ao}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Yo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yo(n[i]/255)*255):n[i]=Yo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JP=0;class Uy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JP++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(tf(r[s].image)):o.push(tf(r[s]))}else o=tf(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function tf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?QP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eL=0;class fn extends ms{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Hr,r=Hr,o=jn,s=Vr,a=li,l=mr,u=fn.DEFAULT_ANISOTROPY,c=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eL++}),this.uuid=Ta(),this.name="",this.source=new Uy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ty)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Ty;fn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,E=(p+1)/2,R=(h+1)/2,y=(c+d)/4,b=(f+x)/4,I=(g+m)/4;return v>E&&v>R?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=y/i,o=b/i):E>R?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=y/r,o=I/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=b/o,r=I/o),this.set(i,r,o,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(d-c)/_,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tL extends ms{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Uy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends tL{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ky extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nL extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Aa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=o[s+0],p=o[s+1],g=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==d||u!==p||c!==g){let m=1-a;const h=l*d+u*p+c*g+f*x,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const R=Math.sqrt(v),y=Math.atan2(R,h*_);m=Math.sin(m*y)/R,a=Math.sin(a*y)/R}const E=a*_;if(l=l*m+d*E,u=u*m+p*E,c=c*m+g*E,f=f*m+x*E,m===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[s],d=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+c*f+l*p-u*d,e[n+1]=l*g+c*d+u*f-a*p,e[n+2]=u*g+c*p+a*d-l*f,e[n+3]=c*g-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(o/2),d=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"YXZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"ZXY":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"ZYX":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"YZX":this._x=d*c*f+u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f-d*p*g;break;case"XZY":this._x=d*c*f-u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=s*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*c,this.y=i+l*c+a*u-o*f,this.z=r+l*f+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nf=new q,fv=new Aa;class Ca{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,zn):zn.fromBufferAttribute(o,s),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),il.subVectors(this.max,bs),lo.subVectors(e.a,bs),uo.subVectors(e.b,bs),co.subVectors(e.c,bs),zi.subVectors(uo,lo),Bi.subVectors(co,uo),Tr.subVectors(lo,co);let n=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-Tr.z,Tr.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,Tr.z,0,-Tr.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-Tr.y,Tr.x,0];return!rf(n,lo,uo,co,il)||(n=[1,0,0,0,1,0,0,0,1],!rf(n,lo,uo,co,il))?!1:(rl.crossVectors(zi,Bi),n=[rl.x,rl.y,rl.z],rf(n,lo,uo,co,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new q,new q,new q,new q,new q,new q,new q,new q],zn=new q,nl=new Ca,lo=new q,uo=new q,co=new q,zi=new q,Bi=new q,Tr=new q,bs=new q,il=new q,rl=new q,Ar=new q;function rf(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Ar.fromArray(t,o);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),u=n.dot(Ar),c=i.dot(Ar);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const iL=new Ca,Rs=new q,of=new q;class Ku{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iL.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const n=Rs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Rs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(of)),this.expandByPoint(Rs.copy(e.center).sub(of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new q,sf=new q,ol=new q,Hi=new q,af=new q,sl=new q,lf=new q;class Oy{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sf.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(sf);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ol),a=Hi.dot(this.direction),l=-Hi.dot(ol),u=Hi.lengthSq(),c=Math.abs(1-s*s);let f,d,p,g;if(c>0)if(f=s*l-a,d=s*a-l,g=o*c,f>=0)if(d>=-g)if(d<=g){const x=1/c;f*=x,d*=x,p=f*(f+s*d+2*a)+d*(s*f+d+2*l)+u}else d=o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+u;else d=-o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+u):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+u);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sf).addScaledVector(ol,d),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(o=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(o=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,o){af.subVectors(n,e),sl.subVectors(i,e),lf.crossVectors(af,sl);let s=this.direction.dot(lf),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(Hi,sl));if(l<0)return null;const u=a*this.direction.dot(af.cross(Hi));if(u<0||l+u>s)return null;const c=-a*Hi.dot(lf);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,o,s,a,l,u,c,f,d,p,g,x,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,f,d,p,g,x,m)}set(e,n,i,r,o,s,a,l,u,c,f,d,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/fo.setFromMatrixColumn(e,0).length(),o=1/fo.setFromMatrixColumn(e,1).length(),s=1/fo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*c,p=s*f,g=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=g+p*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,g=u*c,x=u*f;n[0]=d+x*a,n[4]=g*a-p,n[8]=s*u,n[1]=s*f,n[5]=s*c,n[9]=-a,n[2]=p*a-g,n[6]=x+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,g=u*c,x=u*f;n[0]=d-x*a,n[4]=-s*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*c,n[9]=x-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*c,p=s*f,g=a*c,x=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=d*u+x,n[1]=l*f,n[5]=x*u+d,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*u,g=a*l,x=a*u;n[0]=l*c,n[4]=x-d*f,n[8]=g*f+p,n[1]=f,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=d-x*f}else if(e.order==="XZY"){const d=s*l,p=s*u,g=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+x,n[5]=s*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rL,e,oL)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Vi.crossVectors(i,pn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Vi.crossVectors(i,pn)),Vi.normalize(),al.crossVectors(pn,Vi),r[0]=Vi.x,r[4]=al.x,r[8]=pn.x,r[1]=Vi.y,r[5]=al.y,r[9]=pn.y,r[2]=Vi.z,r[6]=al.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],_=i[3],v=i[7],E=i[11],R=i[15],y=r[0],b=r[4],I=r[8],T=r[12],S=r[1],P=r[5],O=r[9],H=r[13],K=r[2],j=r[6],Y=r[10],Q=r[14],U=r[3],J=r[7],A=r[11],ue=r[15];return o[0]=s*y+a*S+l*K+u*U,o[4]=s*b+a*P+l*j+u*J,o[8]=s*I+a*O+l*Y+u*A,o[12]=s*T+a*H+l*Q+u*ue,o[1]=c*y+f*S+d*K+p*U,o[5]=c*b+f*P+d*j+p*J,o[9]=c*I+f*O+d*Y+p*A,o[13]=c*T+f*H+d*Q+p*ue,o[2]=g*y+x*S+m*K+h*U,o[6]=g*b+x*P+m*j+h*J,o[10]=g*I+x*O+m*Y+h*A,o[14]=g*T+x*H+m*Q+h*ue,o[3]=_*y+v*S+E*K+R*U,o[7]=_*b+v*P+E*j+R*J,o[11]=_*I+v*O+E*Y+R*A,o[15]=_*T+v*H+E*Q+R*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+o*l*f-r*u*f-o*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+o*s*d-r*s*p+r*u*c-o*l*c)+m*(+n*u*f-n*a*p-o*s*f+i*s*p+o*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*s*f-i*s*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],_=f*m*u-x*d*u+x*l*p-a*m*p-f*l*h+a*d*h,v=g*d*u-c*m*u-g*l*p+s*m*p+c*l*h-s*d*h,E=c*x*u-g*f*u+g*a*p-s*x*p-c*a*h+s*f*h,R=g*f*l-c*x*l-g*a*d+s*x*d+c*a*m-s*f*m,y=n*_+i*v+r*E+o*R;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/y;return e[0]=_*b,e[1]=(x*d*o-f*m*o-x*r*p+i*m*p+f*r*h-i*d*h)*b,e[2]=(a*m*o-x*l*o+x*r*u-i*m*u-a*r*h+i*l*h)*b,e[3]=(f*l*o-a*d*o-f*r*u+i*d*u+a*r*p-i*l*p)*b,e[4]=v*b,e[5]=(c*m*o-g*d*o+g*r*p-n*m*p-c*r*h+n*d*h)*b,e[6]=(g*l*o-s*m*o-g*r*u+n*m*u+s*r*h-n*l*h)*b,e[7]=(s*d*o-c*l*o+c*r*u-n*d*u-s*r*p+n*l*p)*b,e[8]=E*b,e[9]=(g*f*o-c*x*o-g*i*p+n*x*p+c*i*h-n*f*h)*b,e[10]=(s*x*o-g*a*o+g*i*u-n*x*u-s*i*h+n*a*h)*b,e[11]=(c*a*o-s*f*o-c*i*u+n*f*u+s*i*p-n*a*p)*b,e[12]=R*b,e[13]=(c*x*r-g*f*r+g*i*d-n*x*d-c*i*m+n*f*m)*b,e[14]=(g*a*r-s*x*r-g*i*l+n*x*l+s*i*m-n*a*m)*b,e[15]=(s*f*r-c*a*r+c*i*l-n*f*l-s*i*d+n*a*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,f=a+a,d=o*u,p=o*c,g=o*f,x=s*c,m=s*f,h=a*f,_=l*u,v=l*c,E=l*f,R=i.x,y=i.y,b=i.z;return r[0]=(1-(x+h))*R,r[1]=(p+E)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(p-E)*y,r[5]=(1-(d+h))*y,r[6]=(m+_)*y,r[7]=0,r[8]=(g+v)*b,r[9]=(m-_)*b,r[10]=(1-(d+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=fo.set(r[0],r[1],r[2]).length();const s=fo.set(r[4],r[5],r[6]).length(),a=fo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/o,c=1/s,f=1/a;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,n.setFromRotationMatrix(Bn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Mi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Mi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Mu)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Mi){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(s-o),d=(n+e)*u,p=(i+r)*c;let g,x;if(a===Mi)g=(s+o)*f,x=-2*f;else if(a===Mu)g=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fo=new q,Bn=new Ct,rL=new q(0,0,0),oL=new q(1,1,1),Vi=new q,al=new q,pn=new q,dv=new Ct,hv=new Aa;class Li{constructor(e=0,n=0,i=0,r=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sL=0;const pv=new q,ho=new Aa,pi=new Ct,ll=new q,Ps=new q,aL=new q,lL=new Aa,mv=new q(1,0,0),gv=new q(0,1,0),vv=new q(0,0,1),_v={type:"added"},uL={type:"removed"},po={type:"childadded",child:null},uf={type:"childremoved",child:null};class dn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sL++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new q,n=new Li,i=new Aa,r=new q(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new We}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ho.setFromAxisAngle(e,n),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,n){return ho.setFromAxisAngle(e,n),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(vv,e)}translateOnAxis(e,n){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ll.copy(e):ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ps,ll,this.up):pi.lookAt(ll,Ps,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),ho.setFromRotationMatrix(pi),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_v),po.child=e,this.dispatchEvent(po),po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uL),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_v),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,aL),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,lL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new q(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new q,mi=new q,cf=new q,gi=new q,mo=new q,go=new q,xv=new q,ff=new q,df=new q,hf=new q;class ai{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Hn.subVectors(r,n),mi.subVectors(i,n),cf.subVectors(e,n);const s=Hn.dot(Hn),a=Hn.dot(mi),l=Hn.dot(cf),u=mi.dot(mi),c=mi.dot(cf),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,g=(s*c-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),mi.subVectors(e,n),Hn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;mo.subVectors(r,i),go.subVectors(o,i),ff.subVectors(e,i);const l=mo.dot(ff),u=go.dot(ff);if(l<=0&&u<=0)return n.copy(i);df.subVectors(e,r);const c=mo.dot(df),f=go.dot(df);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(mo,s);hf.subVectors(e,o);const p=mo.dot(hf),g=go.dot(hf);if(g>=0&&p<=g)return n.copy(o);const x=p*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(go,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return xv.subVectors(o,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(xv,a);const h=1/(m+x+d);return s=x*h,a=d*h,n.copy(i).addScaledVector(mo,s).addScaledVector(go,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ul={h:0,s:0,l:0};function pf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=qP(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=pf(s,o,e+1/3),this.g=pf(s,o,e),this.b=pf(s,o,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const i=zy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}copyLinearToSRGB(e){return this.r=ef(e.r),this.g=ef(e.g),this.b=ef(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return nt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(rn(Wt.r*255,0,255))*65536+Math.round(rn(Wt.g*255,0,255))*256+Math.round(rn(Wt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,o=Wt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=c<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ei){nt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(ul);const i=Qc(Gi.h,ul.h,n),r=Qc(Gi.s,ul.s,n),o=Qc(Gi.l,ul.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Je;Je.NAMES=zy;let cL=0;class ba extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cL++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=$o,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Dd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=_u,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$o&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nd&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_u&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ov&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(i.stencilFail=this.stencilFail),this.stencilZFail!==so&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class By extends ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=wy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new q,cl=new et;class Dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Cs(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Cs(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Cs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Cs(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),o=en(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class Hy extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vy extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jr extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fL=0;const An=new Ct,mf=new dn,vo=new q,mn=new Ca,Ls=new Ca,Dt=new q;class Ui extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fL++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ny(e)?Vy:Hy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return mf.lookAt(e),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new jr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(mn.min,Ls.min),mn.expandByPoint(Dt),Dt.addVectors(mn.max,Ls.max),mn.expandByPoint(Dt)):(mn.expandByPoint(Ls.min),mn.expandByPoint(Ls.max))}mn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(vo.fromBufferAttribute(e,u),Dt.add(vo)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new q,l[I]=new q;const u=new q,c=new q,f=new q,d=new et,p=new et,g=new et,x=new q,m=new q;function h(I,T,S){u.fromBufferAttribute(i,I),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(o,I),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,S),c.sub(u),f.sub(u),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),a[I].add(x),a[T].add(x),a[S].add(x),l[I].add(m),l[T].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,T=_.length;I<T;++I){const S=_[I],P=S.start,O=S.count;for(let H=P,K=P+O;H<K;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new q,E=new q,R=new q,y=new q;function b(I){R.fromBufferAttribute(r,I),y.copy(R);const T=a[I];v.copy(T),v.sub(R.multiplyScalar(R.dot(T))).normalize(),E.crossVectors(y,T);const P=E.dot(l[I])<0?-1:1;s.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,T=_.length;I<T;++I){const S=_[I],P=S.start,O=S.count;for(let H=P,K=P+O;H<K;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new q,o=new q,s=new q,a=new q,l=new q,u=new q,c=new q,f=new q;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let h=0;h<c;h++)d[g++]=u[p++]}return new Dn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ui,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yv=new Ct,Cr=new Oy,fl=new Ku,Sv=new q,_o=new q,xo=new q,yo=new q,gf=new q,dl=new q,hl=new et,pl=new et,ml=new et,Ev=new q,Mv=new q,wv=new q,gl=new q,vl=new q;class wi extends dn{constructor(e=new Ui,n=new By){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){dl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],f=o[l];c!==0&&(gf.fromBufferAttribute(f,e),s?dl.addScaledVector(gf,c):dl.addScaledVector(gf.sub(n),c))}n.add(dl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(o),Cr.copy(e.ray).recast(e.near),!(fl.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(fl,Sv)===null||Cr.origin.distanceToSquared(Sv)>(e.far-e.near)**2))&&(yv.copy(o).invert(),Cr.copy(e.ray).applyMatrix4(yv),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=s[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,R=v;E<R;E+=3){const y=a.getX(E),b=a.getX(E+1),I=a.getX(E+2);r=_l(this,h,e,i,u,c,f,y,b,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const _=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);r=_l(this,s,e,i,u,c,f,_,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=s[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,R=v;E<R;E+=3){const y=E,b=E+1,I=E+2;r=_l(this,h,e,i,u,c,f,y,b,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const _=m,v=m+1,E=m+2;r=_l(this,s,e,i,u,c,f,_,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function dL(t,e,n,i,r,o,s,a){let l;if(e.side===cn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===pr,a),l===null)return null;vl.copy(a),vl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(vl);return u<n.near||u>n.far?null:{distance:u,point:vl.clone(),object:t}}function _l(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,_o),t.getVertexPosition(l,xo),t.getVertexPosition(u,yo);const c=dL(t,e,n,i,_o,xo,yo,gl);if(c){r&&(hl.fromBufferAttribute(r,a),pl.fromBufferAttribute(r,l),ml.fromBufferAttribute(r,u),c.uv=ai.getInterpolation(gl,_o,xo,yo,hl,pl,ml,new et)),o&&(hl.fromBufferAttribute(o,a),pl.fromBufferAttribute(o,l),ml.fromBufferAttribute(o,u),c.uv1=ai.getInterpolation(gl,_o,xo,yo,hl,pl,ml,new et)),s&&(Ev.fromBufferAttribute(s,a),Mv.fromBufferAttribute(s,l),wv.fromBufferAttribute(s,u),c.normal=ai.getInterpolation(gl,_o,xo,yo,Ev,Mv,wv,new q),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new q,materialIndex:0};ai.getNormal(_o,xo,yo,f.normal),c.face=f}return c}class Ra extends Ui{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new jr(u,3)),this.setAttribute("normal",new jr(c,3)),this.setAttribute("uv",new jr(f,2));function g(x,m,h,_,v,E,R,y,b,I,T){const S=E/b,P=R/I,O=E/2,H=R/2,K=y/2,j=b+1,Y=I+1;let Q=0,U=0;const J=new q;for(let A=0;A<Y;A++){const ue=A*P-H;for(let ye=0;ye<j;ye++){const M=ye*S-O;J[x]=M*_,J[m]=ue*v,J[h]=K,u.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[h]=y>0?1:-1,c.push(J.x,J.y,J.z),f.push(ye/b),f.push(1-A/I),Q+=1}}for(let A=0;A<I;A++)for(let ue=0;ue<b;ue++){const ye=d+ue+j*A,M=d+ue+j*(A+1),k=d+(ue+1)+j*(A+1),Z=d+(ue+1)+j*A;l.push(ye,M,Z),l.push(M,k,Z),U+=6}a.addGroup(p,U,T),p+=U,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=ls(t[n]);for(const r in i)e[r]=i[r]}return e}function hL(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const pL={clone:ls,merge:Yt};var mL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mL,this.fragmentShader=gL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=hL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wy extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new q,Tv=new et,Av=new et;class Pn extends Wy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,Tv,Av),n.subVectors(Av,Tv)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const So=-90,Eo=1;class vL extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(So,Eo,e,n);r.layers=this.layers,this.add(r);const o=new Pn(So,Eo,e,n);o.layers=this.layers,this.add(o);const s=new Pn(So,Eo,e,n);s.layers=this.layers,this.add(s);const a=new Pn(So,Eo,e,n);a.layers=this.layers,this.add(a);const l=new Pn(So,Eo,e,n);l.layers=this.layers,this.add(l);const u=new Pn(So,Eo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jy extends fn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:is,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _L extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ra(5,5,5),o=new Ii({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:cr});o.uniforms.tEquirect.value=n;const s=new wi(r,o),a=n.minFilter;return n.minFilter===Vr&&(n.minFilter=jn),new vL(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const vf=new q,xL=new q,yL=new We;class Nr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vf.subVectors(i,n).cross(xL.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yL.getNormalMatrix(e),r=this.coplanarPoint(vf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Ku,xl=new q;class Xy{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,o=new Nr,s=new Nr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],h=r[12],_=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-o,d-u,m-p,E-h).normalize(),i[1].setComponents(l+o,d+u,m+p,E+h).normalize(),i[2].setComponents(l+s,d+c,m+g,E+_).normalize(),i[3].setComponents(l-s,d-c,m-g,E-_).normalize(),i[4].setComponents(l-a,d-f,m-x,E-v).normalize(),n===Mi)i[5].setComponents(l+a,d+f,m+x,E+v).normalize();else if(n===Mu)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $y(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function SL(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),f.count===-1&&d.length===0&&t.bufferSubData(u,0,c),d.length!==0){for(let p=0,g=d.length;p<g;p++){const x=d[p];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class Zu extends Ui{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],g=[],x=[],m=[];for(let h=0;h<c;h++){const _=h*d-s;for(let v=0;v<u;v++){const E=v*f-o;g.push(E,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+u*h,E=_+u*(h+1),R=_+1+u*(h+1),y=_+1+u*h;p.push(v,E,y),p.push(E,R,y)}this.setIndex(p),this.setAttribute("position",new jr(g,3)),this.setAttribute("normal",new jr(x,3)),this.setAttribute("uv",new jr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.widthSegments,e.heightSegments)}}var EL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ML=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PL=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,IL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,jL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$L=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QL="gl_FragColor = linearToOutputTexel( gl_FragColor );",JL=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,e2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,j2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,rI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_I=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,II=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$I=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:EL,alphahash_pars_fragment:ML,alphamap_fragment:wL,alphamap_pars_fragment:TL,alphatest_fragment:AL,alphatest_pars_fragment:CL,aomap_fragment:bL,aomap_pars_fragment:RL,batching_pars_vertex:PL,batching_vertex:LL,begin_vertex:IL,beginnormal_vertex:NL,bsdfs:DL,iridescence_fragment:UL,bumpmap_pars_fragment:kL,clipping_planes_fragment:OL,clipping_planes_pars_fragment:FL,clipping_planes_pars_vertex:zL,clipping_planes_vertex:BL,color_fragment:HL,color_pars_fragment:VL,color_pars_vertex:GL,color_vertex:WL,common:jL,cube_uv_reflection_fragment:XL,defaultnormal_vertex:$L,displacementmap_pars_vertex:qL,displacementmap_vertex:YL,emissivemap_fragment:KL,emissivemap_pars_fragment:ZL,colorspace_fragment:QL,colorspace_pars_fragment:JL,envmap_fragment:e2,envmap_common_pars_fragment:t2,envmap_pars_fragment:n2,envmap_pars_vertex:i2,envmap_physical_pars_fragment:p2,envmap_vertex:r2,fog_vertex:o2,fog_pars_vertex:s2,fog_fragment:a2,fog_pars_fragment:l2,gradientmap_pars_fragment:u2,lightmap_pars_fragment:c2,lights_lambert_fragment:f2,lights_lambert_pars_fragment:d2,lights_pars_begin:h2,lights_toon_fragment:m2,lights_toon_pars_fragment:g2,lights_phong_fragment:v2,lights_phong_pars_fragment:_2,lights_physical_fragment:x2,lights_physical_pars_fragment:y2,lights_fragment_begin:S2,lights_fragment_maps:E2,lights_fragment_end:M2,logdepthbuf_fragment:w2,logdepthbuf_pars_fragment:T2,logdepthbuf_pars_vertex:A2,logdepthbuf_vertex:C2,map_fragment:b2,map_pars_fragment:R2,map_particle_fragment:P2,map_particle_pars_fragment:L2,metalnessmap_fragment:I2,metalnessmap_pars_fragment:N2,morphinstance_vertex:D2,morphcolor_vertex:U2,morphnormal_vertex:k2,morphtarget_pars_vertex:O2,morphtarget_vertex:F2,normal_fragment_begin:z2,normal_fragment_maps:B2,normal_pars_fragment:H2,normal_pars_vertex:V2,normal_vertex:G2,normalmap_pars_fragment:W2,clearcoat_normal_fragment_begin:j2,clearcoat_normal_fragment_maps:X2,clearcoat_pars_fragment:$2,iridescence_pars_fragment:q2,opaque_fragment:Y2,packing:K2,premultiplied_alpha_fragment:Z2,project_vertex:Q2,dithering_fragment:J2,dithering_pars_fragment:eI,roughnessmap_fragment:tI,roughnessmap_pars_fragment:nI,shadowmap_pars_fragment:iI,shadowmap_pars_vertex:rI,shadowmap_vertex:oI,shadowmask_pars_fragment:sI,skinbase_vertex:aI,skinning_pars_vertex:lI,skinning_vertex:uI,skinnormal_vertex:cI,specularmap_fragment:fI,specularmap_pars_fragment:dI,tonemapping_fragment:hI,tonemapping_pars_fragment:pI,transmission_fragment:mI,transmission_pars_fragment:gI,uv_pars_fragment:vI,uv_pars_vertex:_I,uv_vertex:xI,worldpos_vertex:yI,background_vert:SI,background_frag:EI,backgroundCube_vert:MI,backgroundCube_frag:wI,cube_vert:TI,cube_frag:AI,depth_vert:CI,depth_frag:bI,distanceRGBA_vert:RI,distanceRGBA_frag:PI,equirect_vert:LI,equirect_frag:II,linedashed_vert:NI,linedashed_frag:DI,meshbasic_vert:UI,meshbasic_frag:kI,meshlambert_vert:OI,meshlambert_frag:FI,meshmatcap_vert:zI,meshmatcap_frag:BI,meshnormal_vert:HI,meshnormal_frag:VI,meshphong_vert:GI,meshphong_frag:WI,meshphysical_vert:jI,meshphysical_frag:XI,meshtoon_vert:$I,meshtoon_frag:qI,points_vert:YI,points_frag:KI,shadow_vert:ZI,shadow_frag:QI,sprite_vert:JI,sprite_frag:eN},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ni={basic:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Yt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Yt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Yt([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Yt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Yt([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Yt([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Yt([_e.common,_e.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Yt([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ni.physical={uniforms:Yt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const yl={r:0,b:0,g:0},Rr=new Li,tN=new Ct;function nN(t,e,n,i,r,o,s){const a=new Je(0);let l=o===!0?0:1,u,c,f=null,d=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const E=g(_);E===null?h(a,l):E&&E.isColor&&(h(E,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===$u)?(c===void 0&&(c=new wi(new Ra(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:ls(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,y,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Rr.copy(v.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tN.makeRotationFromEuler(Rr)),c.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,(f!==E||d!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new wi(new Zu(2,2),new Ii({name:"BackgroundMaterial",uniforms:ls(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function h(_,v){_.getRGB(yl,Gy(t)),i.buffers.color.setClear(yl.r,yl.g,yl.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:m}}function iN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(S,P,O,H,K){let j=!1;const Y=f(H,O,P);o!==Y&&(o=Y,u(o.object)),j=p(S,H,O,K),j&&g(S,H,O,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,E(S,P,O,H),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,P,O){const H=O.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let j=K[P.id];j===void 0&&(j={},K[P.id]=j);let Y=j[H];return Y===void 0&&(Y=d(l()),j[H]=Y),Y}function d(S){const P=[],O=[],H=[];for(let K=0;K<n;K++)P[K]=0,O[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,P,O,H){const K=o.attributes,j=P.attributes;let Y=0;const Q=O.getAttributes();for(const U in Q)if(Q[U].location>=0){const A=K[U];let ue=j[U];if(ue===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),A===void 0||A.attribute!==ue||ue&&A.data!==ue.data)return!0;Y++}return o.attributesNum!==Y||o.index!==H}function g(S,P,O,H){const K={},j=P.attributes;let Y=0;const Q=O.getAttributes();for(const U in Q)if(Q[U].location>=0){let A=j[U];A===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(A=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(A=S.instanceColor));const ue={};ue.attribute=A,A&&A.data&&(ue.data=A.data),K[U]=ue,Y++}o.attributes=K,o.attributesNum=Y,o.index=H}function x(){const S=o.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function m(S){h(S,0)}function h(S,P){const O=o.newAttributes,H=o.enabledAttributes,K=o.attributeDivisors;O[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),K[S]!==P&&(t.vertexAttribDivisor(S,P),K[S]=P)}function _(){const S=o.newAttributes,P=o.enabledAttributes;for(let O=0,H=P.length;O<H;O++)P[O]!==S[O]&&(t.disableVertexAttribArray(O),P[O]=0)}function v(S,P,O,H,K,j,Y){Y===!0?t.vertexAttribIPointer(S,P,O,K,j):t.vertexAttribPointer(S,P,O,H,K,j)}function E(S,P,O,H){x();const K=H.attributes,j=O.getAttributes(),Y=P.defaultAttributeValues;for(const Q in j){const U=j[Q];if(U.location>=0){let J=K[Q];if(J===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const A=J.normalized,ue=J.itemSize,ye=e.get(J);if(ye===void 0)continue;const M=ye.buffer,k=ye.type,Z=ye.bytesPerElement,te=k===t.INT||k===t.UNSIGNED_INT||J.gpuType===Ay;if(J.isInterleavedBufferAttribute){const ae=J.data,Ce=ae.stride,Ae=J.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<U.locationSize;Pe++)h(U.location+Pe,ae.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<U.locationSize;Pe++)m(U.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,M);for(let Pe=0;Pe<U.locationSize;Pe++)v(U.location+Pe,ue/U.locationSize,k,A,Ce*Z,(Ae+ue/U.locationSize*Pe)*Z,te)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<U.locationSize;ae++)h(U.location+ae,J.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<U.locationSize;ae++)m(U.location+ae);t.bindBuffer(t.ARRAY_BUFFER,M);for(let ae=0;ae<U.locationSize;ae++)v(U.location+ae,ue/U.locationSize,k,A,ue*Z,ue/U.locationSize*ae*Z,te)}}else if(Y!==void 0){const A=Y[Q];if(A!==void 0)switch(A.length){case 2:t.vertexAttrib2fv(U.location,A);break;case 3:t.vertexAttrib3fv(U.location,A);break;case 4:t.vertexAttrib4fv(U.location,A);break;default:t.vertexAttrib1fv(U.location,A)}}}}_()}function R(){I();for(const S in i){const P=i[S];for(const O in P){const H=P[O];for(const K in H)c(H[K].object),delete H[K];delete P[O]}delete i[S]}}function y(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const O in P){const H=P[O];for(const K in H)c(H[K].object),delete H[K];delete P[O]}delete i[S.id]}function b(S){for(const P in i){const O=i[P];if(O[S.id]===void 0)continue;const H=O[S.id];for(const K in H)c(H[K].object),delete H[K];delete O[S.id]}}function I(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:y,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function rN(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(u[p],c[p]);else{d.multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];n.update(p,i,1)}}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)s(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=c[x];for(let x=0;x<d.length;x++)n.update(g,i,d[x])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oN(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(y){return!(y!==li&&i.convert(y)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const b=y===qu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==mr&&i.convert(y)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==er&&!b)}function l(y){if(y==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:R}}function sN(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Nr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?c(null):u();else{const _=o?0:i,v=_*4;let E=h.clippingState||null;l.value=E,E=c(g,d,v,p);for(let R=0;R!==v;++R)E[R]=n[R];h.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,E=p;v!==x;++v,E+=4)s.copy(f[v]).applyMatrix4(_,a),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function aN(t){let e=new WeakMap;function n(s,a){return a===Ud?s.mapping=is:a===kd&&(s.mapping=rs),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Ud||a===kd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new _L(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class lN extends Wy{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Oo=4,Cv=[.125,.215,.35,.446,.526,.582],Or=20,_f=new lN,bv=new Je;let xf=null,yf=0,Sf=0,Ef=!1;const Dr=(1+Math.sqrt(5))/2,Mo=1/Dr,Rv=[new q(-Dr,Mo,0),new q(Dr,Mo,0),new q(-Mo,0,Dr),new q(Mo,0,Dr),new q(0,Dr,-Mo),new q(0,Dr,Mo),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,yf,Sf),this._renderer.xr.enabled=Ef,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:qu,format:li,colorSpace:Er,depthBuffer:!1},r=Lv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lv(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uN(o)),this._blurMaterial=cN(o,e,n)}return r}_compileMaterial(e){const n=new wi(this._lodPlanes[0],e);this._renderer.compile(n,_f)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(bv),c.toneMapping=fr,c.autoClear=!1;const p=new By({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new wi(new Ra,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(bv),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;Sl(r,_*v,h>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iv());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new wi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,_f)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Rv[(r-o-1)%Rv.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new wi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Or-1),x=o/g,m=isFinite(o)?1+Math.floor(c*x):Or;m>Or&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const h=[];let _=0;for(let b=0;b<Or;++b){const I=b/x,T=Math.exp(-I*I/2);h.push(T),b===0?_+=T:b<m&&(_+=2*T)}for(let b=0;b<h.length;b++)h[b]=h[b]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const E=this._sizeLods[r],R=3*E*(r>v-Oo?r-v+Oo:0),y=4*(this._cubeSize-E);Sl(n,R,y,3*E,2*E),l.setRenderTarget(n),l.render(f,_f)}}function uN(t){const e=[],n=[],i=[];let r=t;const o=t-Oo+1+Cv.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Oo?l=Cv[s-t+Oo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,x=3,m=2,h=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),E=new Float32Array(h*g*p);for(let y=0;y<p;y++){const b=y%3*2/3-1,I=y>2?0:-1,T=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];_.set(T,x*g*y),v.set(d,m*g*y);const S=[y,y,y,y,y,y];E.set(S,h*g*y)}const R=new Ui;R.setAttribute("position",new Dn(_,x)),R.setAttribute("uv",new Dn(v,m)),R.setAttribute("faceIndex",new Dn(E,h)),e.push(R),r>Oo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lv(t,e,n){const i=new Zr(t,e,n);return i.texture.mapping=$u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cN(t,e,n){const i=new Float32Array(Or),r=new q(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Iv(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Nv(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function rp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fN(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ud||l===kd,c=l===is||l===rs;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Pv(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new Pv(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function dN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Dy("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hN(t,e,n,i){const r={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,E=_.length;v<E;v+=3){const R=_[v+0],y=_[v+1],b=_[v+2];d.push(R,y,y,b,b,R)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,E=_.length/3-1;v<E;v+=3){const R=v+0,y=v+1,b=v+2;d.push(R,y,y,b,b,R)}}else return;const m=new(Ny(d)?Vy:Hy)(d,1);m.version=x;const h=o.get(f);h&&e.remove(h),o.set(f,m)}function c(f){const d=o.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function pN(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(i,p,o,d*s),n.update(p,i,1)}function u(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,d*s,g),n.update(p,i,g))}function c(d,p,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<g;m++)this.render(d[m]/s,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,o,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}}function f(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/s,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,x,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_];for(let _=0;_<x.length;_++)n.update(h,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function mN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gN(t,e,n){const i=new WeakMap,r=new Ft;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let R=a.attributes.position.count*E,y=1;R>e.maxTextureSize&&(y=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*y*4*f),I=new ky(b,R,y,f);I.type=er,I.needsUpdate=!0;const T=E*4;for(let P=0;P<f;P++){const O=h[P],H=_[P],K=v[P],j=R*y*4*P;for(let Y=0;Y<O.count;Y++){const Q=Y*T;g===!0&&(r.fromBufferAttribute(O,Y),b[j+Q+0]=r.x,b[j+Q+1]=r.y,b[j+Q+2]=r.z,b[j+Q+3]=0),x===!0&&(r.fromBufferAttribute(H,Y),b[j+Q+4]=r.x,b[j+Q+5]=r.y,b[j+Q+6]=r.z,b[j+Q+7]=0),m===!0&&(r.fromBufferAttribute(K,Y),b[j+Q+8]=r.x,b[j+Q+9]=r.y,b[j+Q+10]=r.z,b[j+Q+11]=K.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new et(R,y)},i.set(a,d),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function vN(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class qy extends fn{constructor(e,n,i,r,o,s,a,l,u,c=qo){if(c!==qo&&c!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===qo&&(i=os),i===void 0&&c===as&&(i=ss),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Yy=new fn,Ky=new qy(1,1);Ky.compareFunction=Iy;const Zy=new ky,Qy=new nL,Jy=new jy,Dv=[],Uv=[],kv=new Float32Array(16),Ov=new Float32Array(9),Fv=new Float32Array(4);function gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Dv[r];if(o===void 0&&(o=new Float32Array(r),Dv[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qu(t,e){let n=Uv[e];n===void 0&&(n=new Int32Array(e),Uv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _N(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function yN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function SN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function EN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Fv.set(i),t.uniformMatrix2fv(this.addr,!1,Fv),Lt(n,i)}}function MN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Ov.set(i),t.uniformMatrix3fv(this.addr,!1,Ov),Lt(n,i)}}function wN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;kv.set(i),t.uniformMatrix4fv(this.addr,!1,kv),Lt(n,i)}}function TN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function CN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function bN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function RN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function LN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function IN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function NN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?Ky:Yy;n.setTexture2D(e||o,r)}function DN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qy,r)}function UN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jy,r)}function kN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zy,r)}function ON(t){switch(t){case 5126:return _N;case 35664:return xN;case 35665:return yN;case 35666:return SN;case 35674:return EN;case 35675:return MN;case 35676:return wN;case 5124:case 35670:return TN;case 35667:case 35671:return AN;case 35668:case 35672:return CN;case 35669:case 35673:return bN;case 5125:return RN;case 36294:return PN;case 36295:return LN;case 36296:return IN;case 35678:case 36198:case 36298:case 36306:case 35682:return NN;case 35679:case 36299:case 36307:return DN;case 35680:case 36300:case 36308:case 36293:return UN;case 36289:case 36303:case 36311:case 36292:return kN}}function FN(t,e){t.uniform1fv(this.addr,e)}function zN(t,e){const n=gs(e,this.size,2);t.uniform2fv(this.addr,n)}function BN(t,e){const n=gs(e,this.size,3);t.uniform3fv(this.addr,n)}function HN(t,e){const n=gs(e,this.size,4);t.uniform4fv(this.addr,n)}function VN(t,e){const n=gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GN(t,e){const n=gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WN(t,e){const n=gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jN(t,e){t.uniform1iv(this.addr,e)}function XN(t,e){t.uniform2iv(this.addr,e)}function $N(t,e){t.uniform3iv(this.addr,e)}function qN(t,e){t.uniform4iv(this.addr,e)}function YN(t,e){t.uniform1uiv(this.addr,e)}function KN(t,e){t.uniform2uiv(this.addr,e)}function ZN(t,e){t.uniform3uiv(this.addr,e)}function QN(t,e){t.uniform4uiv(this.addr,e)}function JN(t,e,n){const i=this.cache,r=e.length,o=Qu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Yy,o[s])}function eD(t,e,n){const i=this.cache,r=e.length,o=Qu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Qy,o[s])}function tD(t,e,n){const i=this.cache,r=e.length,o=Qu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Jy,o[s])}function nD(t,e,n){const i=this.cache,r=e.length,o=Qu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Zy,o[s])}function iD(t){switch(t){case 5126:return FN;case 35664:return zN;case 35665:return BN;case 35666:return HN;case 35674:return VN;case 35675:return GN;case 35676:return WN;case 5124:case 35670:return jN;case 35667:case 35671:return XN;case 35668:case 35672:return $N;case 35669:case 35673:return qN;case 5125:return YN;case 36294:return KN;case 36295:return ZN;case 36296:return QN;case 35678:case 36198:case 36298:case 36306:case 35682:return JN;case 35679:case 36299:case 36307:return eD;case 35680:case 36300:case 36308:case 36293:return tD;case 36289:case 36303:case 36311:case 36292:return nD}}class rD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ON(n.type)}}class oD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iD(n.type)}}class sD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Mf=/(\w+)(\])?(\[|\.)?/g;function zv(t,e){t.seq.push(e),t.map[e.id]=e}function aD(t,e,n){const i=t.name,r=i.length;for(Mf.lastIndex=0;;){const o=Mf.exec(i),s=Mf.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){zv(n,u===void 0?new rD(a,t,e):new oD(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new sD(a),zv(n,f)),n=f}}}class Vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);aD(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Bv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lD=37297;let uD=0;function cD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function fD(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Eu&&n===Su?i="LinearDisplayP3ToLinearSRGB":e===Su&&n===Eu&&(i="LinearSRGBToLinearDisplayP3"),t){case Er:case Yu:return[i,"LinearTransferOETF"];case ei:case ip:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Hv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+cD(t.getShaderSource(e),s)}else return r}function dD(t,e){const n=fD(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hD(t,e){let n;switch(e){case xP:n="Linear";break;case yP:n="Reinhard";break;case SP:n="OptimizedCineon";break;case EP:n="ACESFilmic";break;case wP:n="AgX";break;case TP:n="Neutral";break;case MP:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function pD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function mD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ks(t){return t!==""}function Vv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(t){return t.replace(vD,xD)}const _D=new Map;function xD(t,e){let n=Ge[e];if(n===void 0){const i=_D.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bd(n)}const yD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wv(t){return t.replace(yD,SD)}function SD(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function jv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ED(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===My?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===jR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function MD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case $u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function TD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wy:e="ENVMAP_BLENDING_MULTIPLY";break;case vP:e="ENVMAP_BLENDING_MIX";break;case _P:e="ENVMAP_BLENDING_ADD";break}return e}function AD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function CD(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=ED(n),u=MD(n),c=wD(n),f=TD(n),d=AD(n),p=pD(n),g=mD(o),x=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ks).join(`
`),h.length>0&&(h+=`
`)):(m=[jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),h=[jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==fr?hD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,dD("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ks).join(`
`)),s=Bd(s),s=Vv(s,n),s=Gv(s,n),a=Bd(a),a=Vv(a,n),a=Gv(a,n),s=Wv(s),a=Wv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===av?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=_+m+s,E=_+h+a,R=Bv(r,r.VERTEX_SHADER,v),y=Bv(r,r.FRAGMENT_SHADER,E);r.attachShader(x,R),r.attachShader(x,y),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(P){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(R).trim(),K=r.getShaderInfoLog(y).trim();let j=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,y);else{const Q=Hv(r,R,"vertex"),U=Hv(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Q+`
`+U)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||K==="")&&(Y=!1);Y&&(P.diagnostics={runnable:j,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:K,prefix:h}})}r.deleteShader(R),r.deleteShader(y),I=new Vl(r,x),T=gD(r,x)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,lD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uD++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=y,this}let bD=0;class RD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new PD(e),n.set(e,i)),i}}class PD{constructor(e){this.id=bD++,this.code=e,this.usedTimes=0}}function LD(t,e,n,i,r,o,s){const a=new Fy,l=new RD,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,O,H){const K=O.fog,j=H.geometry,Y=T.isMeshStandardMaterial?O.environment:null,Q=(T.isMeshStandardMaterial?n:e).get(T.envMap||Y),U=Q&&Q.mapping===$u?Q.image.height:null,J=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const A=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ue=A!==void 0?A.length:0;let ye=0;j.morphAttributes.position!==void 0&&(ye=1),j.morphAttributes.normal!==void 0&&(ye=2),j.morphAttributes.color!==void 0&&(ye=3);let M,k,Z,te;if(J){const ot=ni[J];M=ot.vertexShader,k=ot.fragmentShader}else M=T.vertexShader,k=T.fragmentShader,l.update(T),Z=l.getVertexShaderID(T),te=l.getFragmentShaderID(T);const ae=t.getRenderTarget(),Ce=H.isInstancedMesh===!0,Ae=H.isBatchedMesh===!0,Pe=!!T.map,N=!!T.matcap,Fe=!!Q,je=!!T.aoMap,at=!!T.lightMap,be=!!T.bumpMap,Xe=!!T.normalMap,ze=!!T.displacementMap,Be=!!T.emissiveMap,Ze=!!T.metalnessMap,L=!!T.roughnessMap,w=T.anisotropy>0,z=T.clearcoat>0,le=T.dispersion>0,oe=T.iridescence>0,ie=T.sheen>0,B=T.transmission>0,W=w&&!!T.anisotropyMap,ee=z&&!!T.clearcoatMap,ve=z&&!!T.clearcoatNormalMap,V=z&&!!T.clearcoatRoughnessMap,ne=oe&&!!T.iridescenceMap,me=oe&&!!T.iridescenceThicknessMap,he=ie&&!!T.sheenColorMap,fe=ie&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Le=!!T.specularColorMap,rt=!!T.specularIntensityMap,D=B&&!!T.transmissionMap,Se=B&&!!T.thicknessMap,re=!!T.gradientMap,se=!!T.alphaMap,ge=T.alphaTest>0,He=!!T.alphaHash,Ye=!!T.extensions;let St=fr;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(St=t.toneMapping);const It={shaderID:J,shaderType:T.type,shaderName:T.name,vertexShader:M,fragmentShader:k,defines:T.defines,customVertexShaderID:Z,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&H._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,instancingMorph:Ce&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Er,alphaToCoverage:!!T.alphaToCoverage,map:Pe,matcap:N,envMap:Fe,envMapMode:Fe&&Q.mapping,envMapCubeUVHeight:U,aoMap:je,lightMap:at,bumpMap:be,normalMap:Xe,displacementMap:d&&ze,emissiveMap:Be,normalMapObjectSpace:Xe&&T.normalMapType===BP,normalMapTangentSpace:Xe&&T.normalMapType===zP,metalnessMap:Ze,roughnessMap:L,anisotropy:w,anisotropyMap:W,clearcoat:z,clearcoatMap:ee,clearcoatNormalMap:ve,clearcoatRoughnessMap:V,dispersion:le,iridescence:oe,iridescenceMap:ne,iridescenceThicknessMap:me,sheen:ie,sheenColorMap:he,sheenRoughnessMap:fe,specularMap:Ie,specularColorMap:Le,specularIntensityMap:rt,transmission:B,transmissionMap:D,thicknessMap:Se,gradientMap:re,opaque:T.transparent===!1&&T.blending===$o&&T.alphaToCoverage===!1,alphaMap:se,alphaTest:ge,alphaHash:He,combine:T.combine,mapUv:Pe&&x(T.map.channel),aoMapUv:je&&x(T.aoMap.channel),lightMapUv:at&&x(T.lightMap.channel),bumpMapUv:be&&x(T.bumpMap.channel),normalMapUv:Xe&&x(T.normalMap.channel),displacementMapUv:ze&&x(T.displacementMap.channel),emissiveMapUv:Be&&x(T.emissiveMap.channel),metalnessMapUv:Ze&&x(T.metalnessMap.channel),roughnessMapUv:L&&x(T.roughnessMap.channel),anisotropyMapUv:W&&x(T.anisotropyMap.channel),clearcoatMapUv:ee&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(T.sheenRoughnessMap.channel),specularMapUv:Ie&&x(T.specularMap.channel),specularColorMapUv:Le&&x(T.specularColorMap.channel),specularIntensityMapUv:rt&&x(T.specularIntensityMap.channel),transmissionMapUv:D&&x(T.transmissionMap.channel),thicknessMapUv:Se&&x(T.thicknessMap.channel),alphaMapUv:se&&x(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Xe||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(Pe||se),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:Pe&&T.map.isVideoTexture===!0&&nt.getTransfer(T.map.colorSpace)===dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yi,flipSided:T.side===cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return It.vertexUv1s=u.has(1),It.vertexUv2s=u.has(2),It.vertexUv3s=u.has(3),u.clear(),It}function h(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(_(S,T),v(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function v(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function E(T){const S=g[T.type];let P;if(S){const O=ni[S];P=pL.clone(O.uniforms)}else P=T.uniforms;return P}function R(T,S){let P;for(let O=0,H=c.length;O<H;O++){const K=c[O];if(K.cacheKey===S){P=K,++P.usedTimes;break}}return P===void 0&&(P=new CD(t,S,T,o),c.push(P)),P}function y(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function b(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:R,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:I}}function ID(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ND(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $v(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,d,p,g,x,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,d,p,g,x,m){const h=s(f,d,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,x,m){const h=s(f,d,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||ND),i.length>1&&i.sort(d||Xv),r.length>1&&r.sort(d||Xv)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function DD(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new $v,t.set(i,[s])):r>=o.length?(s=new $v,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function UD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new Je};break;case"SpotLight":n={position:new q,direction:new q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function kD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OD=0;function FD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zD(t){const e=new UD,n=kD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);const r=new q,o=new Ct,s=new Ct;function a(u){let c=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,_=0,v=0,E=0,R=0,y=0,b=0;u.sort(FD);for(let T=0,S=u.length;T<S;T++){const P=u[T],O=P.color,H=P.intensity,K=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=O.r*H,f+=O.g*H,d+=O.b*H;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],H);b++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,U=n.get(P);U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=P.shadow.matrix,_++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar(H),Y.distance=K,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[x]=Y;const Q=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,Q.updateMatrices(P),P.castShadow&&y++),i.spotLightMatrix[x]=Q.matrix,P.castShadow){const U=n.get(P);U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=j,E++}x++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(O).multiplyScalar(H),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const Q=P.shadow,U=n.get(P);U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,U.shadowCameraNear=Q.camera.near,U.shadowCameraFar=Q.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=P.shadow.matrix,v++}i.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(H),Y.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[h]=Y,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==_||I.numPointShadows!==v||I.numSpotShadows!==E||I.numSpotMaps!==R||I.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+R-y,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=_,I.numPointShadows=v,I.numSpotShadows=E,I.numSpotMaps=R,I.numLightProbes=b,i.version=OD++)}function l(u,c){let f=0,d=0,p=0,g=0,x=0;const m=c.matrixWorldInverse;for(let h=0,_=u.length;h<_;h++){const v=u[h];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(v.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function qv(t){const e=new zD(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function BD(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new qv(t),e.set(r,[a])):o>=s.length?(a=new qv(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class HD extends ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VD extends ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jD(t,e,n){let i=new Xy;const r=new et,o=new et,s=new Ft,a=new HD({depthPacking:FP}),l=new VD,u={},c=n.maxTextureSize,f={[pr]:cn,[cn]:pr,[yi]:yi},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:GD,fragmentShader:WD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ui;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new wi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=My;let h=this.type;this.render=function(y,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),O=t.state;O.setBlending(cr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=h!==vi&&this.type===vi,K=h===vi&&this.type!==vi;for(let j=0,Y=y.length;j<Y;j++){const Q=y[j],U=Q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const J=U.getFrameExtents();if(r.multiply(J),o.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/J.x),r.x=o.x*J.x,U.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/J.y),r.y=o.y*J.y,U.mapSize.y=o.y)),U.map===null||H===!0||K===!0){const ue=this.type!==vi?{minFilter:In,magFilter:In}:{};U.map!==null&&U.map.dispose(),U.map=new Zr(r.x,r.y,ue),U.map.texture.name=Q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const A=U.getViewportCount();for(let ue=0;ue<A;ue++){const ye=U.getViewport(ue);s.set(o.x*ye.x,o.y*ye.y,o.x*ye.z,o.y*ye.w),O.viewport(s),U.updateMatrices(Q,ue),i=U.getFrustum(),E(b,I,U.camera,Q,this.type)}U.isPointLightShadow!==!0&&this.type===vi&&_(U,I),U.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,P)};function _(y,b){const I=e.update(x);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Zr(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(b,null,I,d,x,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(b,null,I,p,x,null)}function v(y,b,I,T){let S=null;const P=I.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=S.uuid,H=b.uuid;let K=u[O];K===void 0&&(K={},u[O]=K);let j=K[H];j===void 0&&(j=S.clone(),K[H]=j,b.addEventListener("dispose",R)),S=j}if(S.visible=b.visible,S.wireframe=b.wireframe,T===vi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=I}return S}function E(y,b,I,T,S){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===vi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,y.matrixWorld);const H=e.update(y),K=y.material;if(Array.isArray(K)){const j=H.groups;for(let Y=0,Q=j.length;Y<Q;Y++){const U=j[Y],J=K[U.materialIndex];if(J&&J.visible){const A=v(y,J,T,S);y.onBeforeShadow(t,y,b,I,H,A,U),t.renderBufferDirect(I,null,H,A,y,U),y.onAfterShadow(t,y,b,I,H,A,U)}}}else if(K.visible){const j=v(y,K,T,S);y.onBeforeShadow(t,y,b,I,H,j,null),t.renderBufferDirect(I,null,H,j,y,null),y.onAfterShadow(t,y,b,I,H,j,null)}}const O=y.children;for(let H=0,K=O.length;H<K;H++)E(O[H],b,I,T,S)}function R(y){y.target.removeEventListener("dispose",R);for(const I in u){const T=u[I],S=y.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function XD(t){function e(){let D=!1;const Se=new Ft;let re=null;const se=new Ft(0,0,0,0);return{setMask:function(ge){re!==ge&&!D&&(t.colorMask(ge,ge,ge,ge),re=ge)},setLocked:function(ge){D=ge},setClear:function(ge,He,Ye,St,It){It===!0&&(ge*=St,He*=St,Ye*=St),Se.set(ge,He,Ye,St),se.equals(Se)===!1&&(t.clearColor(ge,He,Ye,St),se.copy(Se))},reset:function(){D=!1,re=null,se.set(-1,0,0,0)}}}function n(){let D=!1,Se=null,re=null,se=null;return{setTest:function(ge){ge?te(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(ge){Se!==ge&&!D&&(t.depthMask(ge),Se=ge)},setFunc:function(ge){if(re!==ge){switch(ge){case cP:t.depthFunc(t.NEVER);break;case fP:t.depthFunc(t.ALWAYS);break;case dP:t.depthFunc(t.LESS);break;case _u:t.depthFunc(t.LEQUAL);break;case hP:t.depthFunc(t.EQUAL);break;case pP:t.depthFunc(t.GEQUAL);break;case mP:t.depthFunc(t.GREATER);break;case gP:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=ge}},setLocked:function(ge){D=ge},setClear:function(ge){se!==ge&&(t.clearDepth(ge),se=ge)},reset:function(){D=!1,Se=null,re=null,se=null}}}function i(){let D=!1,Se=null,re=null,se=null,ge=null,He=null,Ye=null,St=null,It=null;return{setTest:function(ot){D||(ot?te(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(ot){Se!==ot&&!D&&(t.stencilMask(ot),Se=ot)},setFunc:function(ot,Yn,Kn){(re!==ot||se!==Yn||ge!==Kn)&&(t.stencilFunc(ot,Yn,Kn),re=ot,se=Yn,ge=Kn)},setOp:function(ot,Yn,Kn){(He!==ot||Ye!==Yn||St!==Kn)&&(t.stencilOp(ot,Yn,Kn),He=ot,Ye=Yn,St=Kn)},setLocked:function(ot){D=ot},setClear:function(ot){It!==ot&&(t.clearStencil(ot),It=ot)},reset:function(){D=!1,Se=null,re=null,se=null,ge=null,He=null,Ye=null,St=null,It=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],p=null,g=!1,x=null,m=null,h=null,_=null,v=null,E=null,R=null,y=new Je(0,0,0),b=0,I=!1,T=null,S=null,P=null,O=null,H=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=Y>=2);let U=null,J={};const A=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),ye=new Ft().fromArray(A),M=new Ft().fromArray(ue);function k(D,Se,re,se){const ge=new Uint8Array(4),He=t.createTexture();t.bindTexture(D,He),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<re;Ye++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(Se+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return He}const Z={};Z[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),te(t.DEPTH_TEST),o.setFunc(_u),be(!1),Xe(Rg),te(t.CULL_FACE),je(cr);function te(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ae(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ce(D,Se){return c[D]!==Se?(t.bindFramebuffer(D,Se),c[D]=Se,D===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=Se),D===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ae(D,Se){let re=d,se=!1;if(D){re=f.get(Se),re===void 0&&(re=[],f.set(Se,re));const ge=D.textures;if(re.length!==ge.length||re[0]!==t.COLOR_ATTACHMENT0){for(let He=0,Ye=ge.length;He<Ye;He++)re[He]=t.COLOR_ATTACHMENT0+He;re.length=ge.length,se=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,se=!0);se&&t.drawBuffers(re)}function Pe(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const N={[kr]:t.FUNC_ADD,[$R]:t.FUNC_SUBTRACT,[qR]:t.FUNC_REVERSE_SUBTRACT};N[YR]=t.MIN,N[KR]=t.MAX;const Fe={[ZR]:t.ZERO,[QR]:t.ONE,[JR]:t.SRC_COLOR,[Nd]:t.SRC_ALPHA,[oP]:t.SRC_ALPHA_SATURATE,[iP]:t.DST_COLOR,[tP]:t.DST_ALPHA,[eP]:t.ONE_MINUS_SRC_COLOR,[Dd]:t.ONE_MINUS_SRC_ALPHA,[rP]:t.ONE_MINUS_DST_COLOR,[nP]:t.ONE_MINUS_DST_ALPHA,[sP]:t.CONSTANT_COLOR,[aP]:t.ONE_MINUS_CONSTANT_COLOR,[lP]:t.CONSTANT_ALPHA,[uP]:t.ONE_MINUS_CONSTANT_ALPHA};function je(D,Se,re,se,ge,He,Ye,St,It,ot){if(D===cr){g===!0&&(ae(t.BLEND),g=!1);return}if(g===!1&&(te(t.BLEND),g=!0),D!==XR){if(D!==x||ot!==I){if((m!==kr||v!==kr)&&(t.blendEquation(t.FUNC_ADD),m=kr,v=kr),ot)switch(D){case $o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pg:t.blendFunc(t.ONE,t.ONE);break;case Lg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ig:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ig:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,_=null,E=null,R=null,y.set(0,0,0),b=0,x=D,I=ot}return}ge=ge||Se,He=He||re,Ye=Ye||se,(Se!==m||ge!==v)&&(t.blendEquationSeparate(N[Se],N[ge]),m=Se,v=ge),(re!==h||se!==_||He!==E||Ye!==R)&&(t.blendFuncSeparate(Fe[re],Fe[se],Fe[He],Fe[Ye]),h=re,_=se,E=He,R=Ye),(St.equals(y)===!1||It!==b)&&(t.blendColor(St.r,St.g,St.b,It),y.copy(St),b=It),x=D,I=!1}function at(D,Se){D.side===yi?ae(t.CULL_FACE):te(t.CULL_FACE);let re=D.side===cn;Se&&(re=!re),be(re),D.blending===$o&&D.transparent===!1?je(cr):je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const se=D.stencilWrite;s.setTest(se),se&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(D){T!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),T=D)}function Xe(D){D!==GR?(te(t.CULL_FACE),D!==S&&(D===Rg?t.cullFace(t.BACK):D===WR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),S=D}function ze(D){D!==P&&(j&&t.lineWidth(D),P=D)}function Be(D,Se,re){D?(te(t.POLYGON_OFFSET_FILL),(O!==Se||H!==re)&&(t.polygonOffset(Se,re),O=Se,H=re)):ae(t.POLYGON_OFFSET_FILL)}function Ze(D){D?te(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function L(D){D===void 0&&(D=t.TEXTURE0+K-1),U!==D&&(t.activeTexture(D),U=D)}function w(D,Se,re){re===void 0&&(U===null?re=t.TEXTURE0+K-1:re=U);let se=J[re];se===void 0&&(se={type:void 0,texture:void 0},J[re]=se),(se.type!==D||se.texture!==Se)&&(U!==re&&(t.activeTexture(re),U=re),t.bindTexture(D,Se||Z[D]),se.type=D,se.texture=Se)}function z(){const D=J[U];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){ye.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ye.copy(D))}function fe(D){M.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),M.copy(D))}function Ie(D,Se){let re=l.get(Se);re===void 0&&(re=new WeakMap,l.set(Se,re));let se=re.get(D);se===void 0&&(se=t.getUniformBlockIndex(Se,D.name),re.set(D,se))}function Le(D,Se){const se=l.get(Se).get(D);a.get(Se)!==se&&(t.uniformBlockBinding(Se,se,D.__bindingPointIndex),a.set(Se,se))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},U=null,J={},c={},f=new WeakMap,d=[],p=null,g=!1,x=null,m=null,h=null,_=null,v=null,E=null,R=null,y=new Je(0,0,0),b=0,I=!1,T=null,S=null,P=null,O=null,H=null,ye.set(0,0,t.canvas.width,t.canvas.height),M.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:te,disable:ae,bindFramebuffer:Ce,drawBuffers:Ae,useProgram:Pe,setBlending:je,setMaterial:at,setFlipSided:be,setCullFace:Xe,setLineWidth:ze,setPolygonOffset:Be,setScissorTest:Ze,activeTexture:L,bindTexture:w,unbindTexture:z,compressedTexImage2D:le,compressedTexImage3D:oe,texImage2D:ne,texImage3D:me,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:ve,texStorage3D:V,texSubImage2D:ie,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:ee,scissor:he,viewport:fe,reset:rt}}function $D(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return p?new OffscreenCanvas(L,w):wu("canvas")}function x(L,w,z){let le=1;const oe=Ze(L);if((oe.width>z||oe.height>z)&&(le=z/Math.max(oe.width,oe.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ie=Math.floor(le*oe.width),B=Math.floor(le*oe.height);f===void 0&&(f=g(ie,B));const W=w?g(ie,B):f;return W.width=ie,W.height=B,W.getContext("2d").drawImage(L,0,0,ie,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ie+"x"+B+")."),W}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==In&&L.minFilter!==jn}function h(L){t.generateMipmap(L)}function _(L,w,z,le,oe=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=w;if(w===t.RED&&(z===t.FLOAT&&(ie=t.R32F),z===t.HALF_FLOAT&&(ie=t.R16F),z===t.UNSIGNED_BYTE&&(ie=t.R8)),w===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ie=t.R8UI),z===t.UNSIGNED_SHORT&&(ie=t.R16UI),z===t.UNSIGNED_INT&&(ie=t.R32UI),z===t.BYTE&&(ie=t.R8I),z===t.SHORT&&(ie=t.R16I),z===t.INT&&(ie=t.R32I)),w===t.RG&&(z===t.FLOAT&&(ie=t.RG32F),z===t.HALF_FLOAT&&(ie=t.RG16F),z===t.UNSIGNED_BYTE&&(ie=t.RG8)),w===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(ie=t.RG8UI),z===t.UNSIGNED_SHORT&&(ie=t.RG16UI),z===t.UNSIGNED_INT&&(ie=t.RG32UI),z===t.BYTE&&(ie=t.RG8I),z===t.SHORT&&(ie=t.RG16I),z===t.INT&&(ie=t.RG32I)),w===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),w===t.RGBA){const B=oe?yu:nt.getTransfer(le);z===t.FLOAT&&(ie=t.RGBA32F),z===t.HALF_FLOAT&&(ie=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ie=B===dt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(L,w){let z;return L?w===null||w===os||w===ss?z=t.DEPTH24_STENCIL8:w===er?z=t.DEPTH32F_STENCIL8:w===xu&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===os||w===ss?z=t.DEPTH_COMPONENT24:w===er?z=t.DEPTH_COMPONENT32F:w===xu&&(z=t.DEPTH_COMPONENT16),z}function E(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==In&&L.minFilter!==jn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function R(L){const w=L.target;w.removeEventListener("dispose",R),b(w),w.isVideoTexture&&c.delete(w)}function y(L){const w=L.target;w.removeEventListener("dispose",y),T(w)}function b(L){const w=i.get(L);if(w.__webglInit===void 0)return;const z=L.source,le=d.get(z);if(le){const oe=le[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&I(L),Object.keys(le).length===0&&d.delete(z)}i.remove(L)}function I(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const z=L.source,le=d.get(z);delete le[w.__cacheKey],s.memory.textures--}function T(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(w.__webglFramebuffer[le]))for(let oe=0;oe<w.__webglFramebuffer[le].length;oe++)t.deleteFramebuffer(w.__webglFramebuffer[le][oe]);else t.deleteFramebuffer(w.__webglFramebuffer[le]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[le])}else{if(Array.isArray(w.__webglFramebuffer))for(let le=0;le<w.__webglFramebuffer.length;le++)t.deleteFramebuffer(w.__webglFramebuffer[le]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let le=0;le<w.__webglColorRenderbuffer.length;le++)w.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[le]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=L.textures;for(let le=0,oe=z.length;le<oe;le++){const ie=i.get(z[le]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),s.memory.textures--),i.remove(z[le])}i.remove(L)}let S=0;function P(){S=0}function O(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function H(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function K(L,w){const z=i.get(L);if(L.isVideoTexture&&ze(L),L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){const le=L.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{M(z,L,w);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+w)}function j(L,w){const z=i.get(L);if(L.version>0&&z.__version!==L.version){M(z,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+w)}function Y(L,w){const z=i.get(L);if(L.version>0&&z.__version!==L.version){M(z,L,w);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+w)}function Q(L,w){const z=i.get(L);if(L.version>0&&z.__version!==L.version){k(z,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+w)}const U={[Od]:t.REPEAT,[Hr]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},J={[In]:t.NEAREST,[AP]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[jc]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},A={[HP]:t.NEVER,[$P]:t.ALWAYS,[VP]:t.LESS,[Iy]:t.LEQUAL,[GP]:t.EQUAL,[XP]:t.GEQUAL,[WP]:t.GREATER,[jP]:t.NOTEQUAL};function ue(L,w){if(w.type===er&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===jn||w.magFilter===jc||w.magFilter===el||w.magFilter===Vr||w.minFilter===jn||w.minFilter===jc||w.minFilter===el||w.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,U[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,U[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,U[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,J[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,J[w.minFilter]),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,A[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==el&&w.minFilter!==Vr||w.type===er&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ye(L,w){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",R));const le=w.source;let oe=d.get(le);oe===void 0&&(oe={},d.set(le,oe));const ie=H(w);if(ie!==L.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,z=!0),oe[ie].usedTimes++;const B=oe[L.__cacheKey];B!==void 0&&(oe[L.__cacheKey].usedTimes--,B.usedTimes===0&&I(w)),L.__cacheKey=ie,L.__webglTexture=oe[ie].texture}return z}function M(L,w,z){let le=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=t.TEXTURE_3D);const oe=ye(L,w),ie=w.source;n.bindTexture(le,L.__webglTexture,t.TEXTURE0+z);const B=i.get(ie);if(ie.version!==B.__version||oe===!0){n.activeTexture(t.TEXTURE0+z);const W=nt.getPrimaries(nt.workingColorSpace),ee=w.colorSpace===Yi?null:nt.getPrimaries(w.colorSpace),ve=w.colorSpace===Yi||W===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let V=x(w.image,!1,r.maxTextureSize);V=Be(w,V);const ne=o.convert(w.format,w.colorSpace),me=o.convert(w.type);let he=_(w.internalFormat,ne,me,w.colorSpace,w.isVideoTexture);ue(le,w);let fe;const Ie=w.mipmaps,Le=w.isVideoTexture!==!0,rt=B.__version===void 0||oe===!0,D=ie.dataReady,Se=E(w,V);if(w.isDepthTexture)he=v(w.format===as,w.type),rt&&(Le?n.texStorage2D(t.TEXTURE_2D,1,he,V.width,V.height):n.texImage2D(t.TEXTURE_2D,0,he,V.width,V.height,0,ne,me,null));else if(w.isDataTexture)if(Ie.length>0){Le&&rt&&n.texStorage2D(t.TEXTURE_2D,Se,he,Ie[0].width,Ie[0].height);for(let re=0,se=Ie.length;re<se;re++)fe=Ie[re],Le?D&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,fe.width,fe.height,ne,me,fe.data):n.texImage2D(t.TEXTURE_2D,re,he,fe.width,fe.height,0,ne,me,fe.data);w.generateMipmaps=!1}else Le?(rt&&n.texStorage2D(t.TEXTURE_2D,Se,he,V.width,V.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,V.width,V.height,ne,me,V.data)):n.texImage2D(t.TEXTURE_2D,0,he,V.width,V.height,0,ne,me,V.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Le&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,he,Ie[0].width,Ie[0].height,V.depth);for(let re=0,se=Ie.length;re<se;re++)if(fe=Ie[re],w.format!==li)if(ne!==null)if(Le){if(D)if(w.layerUpdates.size>0){for(const ge of w.layerUpdates){const He=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,ge,fe.width,fe.height,1,ne,fe.data.slice(He*ge,He*(ge+1)),0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,V.depth,ne,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,he,fe.width,fe.height,V.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,V.depth,ne,me,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,he,fe.width,fe.height,V.depth,0,ne,me,fe.data)}else{Le&&rt&&n.texStorage2D(t.TEXTURE_2D,Se,he,Ie[0].width,Ie[0].height);for(let re=0,se=Ie.length;re<se;re++)fe=Ie[re],w.format!==li?ne!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,fe.width,fe.height,ne,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,re,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,fe.width,fe.height,ne,me,fe.data):n.texImage2D(t.TEXTURE_2D,re,he,fe.width,fe.height,0,ne,me,fe.data)}else if(w.isDataArrayTexture)if(Le){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,he,V.width,V.height,V.depth),D)if(w.layerUpdates.size>0){let re;switch(me){case t.UNSIGNED_BYTE:switch(ne){case t.ALPHA:re=1;break;case t.LUMINANCE:re=1;break;case t.LUMINANCE_ALPHA:re=2;break;case t.RGB:re=3;break;case t.RGBA:re=4;break;default:throw new Error(`Unknown texel size for format ${ne}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:re=1;break;default:throw new Error(`Unknown texel size for type ${me}.`)}const se=V.width*V.height*re;for(const ge of w.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,V.width,V.height,1,ne,me,V.data.slice(se*ge,se*(ge+1)));w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ne,me,V.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,V.width,V.height,V.depth,0,ne,me,V.data);else if(w.isData3DTexture)Le?(rt&&n.texStorage3D(t.TEXTURE_3D,Se,he,V.width,V.height,V.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ne,me,V.data)):n.texImage3D(t.TEXTURE_3D,0,he,V.width,V.height,V.depth,0,ne,me,V.data);else if(w.isFramebufferTexture){if(rt)if(Le)n.texStorage2D(t.TEXTURE_2D,Se,he,V.width,V.height);else{let re=V.width,se=V.height;for(let ge=0;ge<Se;ge++)n.texImage2D(t.TEXTURE_2D,ge,he,re,se,0,ne,me,null),re>>=1,se>>=1}}else if(Ie.length>0){if(Le&&rt){const re=Ze(Ie[0]);n.texStorage2D(t.TEXTURE_2D,Se,he,re.width,re.height)}for(let re=0,se=Ie.length;re<se;re++)fe=Ie[re],Le?D&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ne,me,fe):n.texImage2D(t.TEXTURE_2D,re,he,ne,me,fe);w.generateMipmaps=!1}else if(Le){if(rt){const re=Ze(V);n.texStorage2D(t.TEXTURE_2D,Se,he,re.width,re.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne,me,V)}else n.texImage2D(t.TEXTURE_2D,0,he,ne,me,V);m(w)&&h(le),B.__version=ie.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function k(L,w,z){if(w.image.length!==6)return;const le=ye(L,w),oe=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+z);const ie=i.get(oe);if(oe.version!==ie.__version||le===!0){n.activeTexture(t.TEXTURE0+z);const B=nt.getPrimaries(nt.workingColorSpace),W=w.colorSpace===Yi?null:nt.getPrimaries(w.colorSpace),ee=w.colorSpace===Yi||B===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ve=w.isCompressedTexture||w.image[0].isCompressedTexture,V=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!ve&&!V?ne[se]=x(w.image[se],!0,r.maxCubemapSize):ne[se]=V?w.image[se].image:w.image[se],ne[se]=Be(w,ne[se]);const me=ne[0],he=o.convert(w.format,w.colorSpace),fe=o.convert(w.type),Ie=_(w.internalFormat,he,fe,w.colorSpace),Le=w.isVideoTexture!==!0,rt=ie.__version===void 0||le===!0,D=oe.dataReady;let Se=E(w,me);ue(t.TEXTURE_CUBE_MAP,w);let re;if(ve){Le&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ie,me.width,me.height);for(let se=0;se<6;se++){re=ne[se].mipmaps;for(let ge=0;ge<re.length;ge++){const He=re[ge];w.format!==li?he!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge,0,0,He.width,He.height,he,He.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge,Ie,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge,0,0,He.width,He.height,he,fe,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge,Ie,He.width,He.height,0,he,fe,He.data)}}}else{if(re=w.mipmaps,Le&&rt){re.length>0&&Se++;const se=Ze(ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ie,se.width,se.height)}for(let se=0;se<6;se++)if(V){Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,he,fe,ne[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ie,ne[se].width,ne[se].height,0,he,fe,ne[se].data);for(let ge=0;ge<re.length;ge++){const Ye=re[ge].image[se].image;Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge+1,0,0,Ye.width,Ye.height,he,fe,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge+1,Ie,Ye.width,Ye.height,0,he,fe,Ye.data)}}else{Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,he,fe,ne[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ie,he,fe,ne[se]);for(let ge=0;ge<re.length;ge++){const He=re[ge];Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge+1,0,0,he,fe,He.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge+1,Ie,he,fe,He.image[se])}}}m(w)&&h(t.TEXTURE_CUBE_MAP),ie.__version=oe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Z(L,w,z,le,oe,ie){const B=o.convert(z.format,z.colorSpace),W=o.convert(z.type),ee=_(z.internalFormat,B,W,z.colorSpace);if(!i.get(w).__hasExternalTextures){const V=Math.max(1,w.width>>ie),ne=Math.max(1,w.height>>ie);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ie,ee,V,ne,w.depth,0,B,W,null):n.texImage2D(oe,ie,ee,V,ne,0,B,W,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Xe(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,oe,i.get(z).__webglTexture,0,be(w)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,oe,i.get(z).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(L,w,z){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer){const le=w.depthTexture,oe=le&&le.isDepthTexture?le.type:null,ie=v(w.stencilBuffer,oe),B=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=be(w);Xe(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,W,ie,w.width,w.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,W,ie,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ie,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,B,t.RENDERBUFFER,L)}else{const le=w.textures;for(let oe=0;oe<le.length;oe++){const ie=le[oe],B=o.convert(ie.format,ie.colorSpace),W=o.convert(ie.type),ee=_(ie.internalFormat,B,W,ie.colorSpace),ve=be(w);z&&Xe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ee,w.width,w.height):Xe(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,ee,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ee,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const le=i.get(w.depthTexture).__webglTexture,oe=be(w);if(w.depthTexture.format===qo)Xe(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(w.depthTexture.format===as)Xe(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ce(L){const w=i.get(L),z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ae(w.__webglFramebuffer,L)}else if(z){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]=t.createRenderbuffer(),te(w.__webglDepthbuffer[le],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),te(w.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(L,w,z){const le=i.get(L);w!==void 0&&Z(le.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ce(L)}function Pe(L){const w=L.texture,z=i.get(L),le=i.get(w);L.addEventListener("dispose",y);const oe=L.textures,ie=L.isWebGLCubeRenderTarget===!0,B=oe.length>1;if(B||(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=w.version,s.memory.textures++),ie){z.__webglFramebuffer=[];for(let W=0;W<6;W++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[W]=[];for(let ee=0;ee<w.mipmaps.length;ee++)z.__webglFramebuffer[W][ee]=t.createFramebuffer()}else z.__webglFramebuffer[W]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let W=0;W<w.mipmaps.length;W++)z.__webglFramebuffer[W]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(B)for(let W=0,ee=oe.length;W<ee;W++){const ve=i.get(oe[W]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),s.memory.textures++)}if(L.samples>0&&Xe(L)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let W=0;W<oe.length;W++){const ee=oe[W];z.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[W]);const ve=o.convert(ee.format,ee.colorSpace),V=o.convert(ee.type),ne=_(ee.internalFormat,ve,V,ee.colorSpace,L.isXRRenderTarget===!0),me=be(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ne,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,z.__webglColorRenderbuffer[W])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),te(z.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),ue(t.TEXTURE_CUBE_MAP,w);for(let W=0;W<6;W++)if(w.mipmaps&&w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)Z(z.__webglFramebuffer[W][ee],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ee);else Z(z.__webglFramebuffer[W],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);m(w)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(B){for(let W=0,ee=oe.length;W<ee;W++){const ve=oe[W],V=i.get(ve);n.bindTexture(t.TEXTURE_2D,V.__webglTexture),ue(t.TEXTURE_2D,ve),Z(z.__webglFramebuffer,L,ve,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D,0),m(ve)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let W=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(W=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(W,le.__webglTexture),ue(W,w),w.mipmaps&&w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)Z(z.__webglFramebuffer[ee],L,w,t.COLOR_ATTACHMENT0,W,ee);else Z(z.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,W,0);m(w)&&h(W),n.unbindTexture()}L.depthBuffer&&Ce(L)}function N(L){const w=L.textures;for(let z=0,le=w.length;z<le;z++){const oe=w[z];if(m(oe)){const ie=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,B=i.get(oe).__webglTexture;n.bindTexture(ie,B),h(ie),n.unbindTexture()}}}const Fe=[],je=[];function at(L){if(L.samples>0){if(Xe(L)===!1){const w=L.textures,z=L.width,le=L.height;let oe=t.COLOR_BUFFER_BIT;const ie=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=i.get(L),W=w.length>1;if(W)for(let ee=0;ee<w.length;ee++)n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,B.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let ee=0;ee<w.length;ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),W){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,B.__webglColorRenderbuffer[ee]);const ve=i.get(w[ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,z,le,0,0,z,le,oe,t.NEAREST),l===!0&&(Fe.length=0,je.length=0,Fe.push(t.COLOR_ATTACHMENT0+ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Fe.push(ie),je.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let ee=0;ee<w.length;ee++){n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,B.__webglColorRenderbuffer[ee]);const ve=i.get(w[ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,B.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function be(L){return Math.min(r.maxSamples,L.samples)}function Xe(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(L){const w=s.render.frame;c.get(L)!==w&&(c.set(L,w),L.update())}function Be(L,w){const z=L.colorSpace,le=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Er&&z!==Yi&&(nt.getTransfer(z)===dt?(le!==li||oe!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=Ae,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Xe}function qD(t,e){function n(i,r=Yi){let o;const s=nt.getTransfer(r);if(i===mr)return t.UNSIGNED_BYTE;if(i===Cy)return t.UNSIGNED_SHORT_4_4_4_4;if(i===by)return t.UNSIGNED_SHORT_5_5_5_1;if(i===RP)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===CP)return t.BYTE;if(i===bP)return t.SHORT;if(i===xu)return t.UNSIGNED_SHORT;if(i===Ay)return t.INT;if(i===os)return t.UNSIGNED_INT;if(i===er)return t.FLOAT;if(i===qu)return t.HALF_FLOAT;if(i===PP)return t.ALPHA;if(i===LP)return t.RGB;if(i===li)return t.RGBA;if(i===IP)return t.LUMINANCE;if(i===NP)return t.LUMINANCE_ALPHA;if(i===qo)return t.DEPTH_COMPONENT;if(i===as)return t.DEPTH_STENCIL;if(i===DP)return t.RED;if(i===Ry)return t.RED_INTEGER;if(i===UP)return t.RG;if(i===Py)return t.RG_INTEGER;if(i===Ly)return t.RGBA_INTEGER;if(i===Xc||i===$c||i===qc||i===Yc)if(s===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Xc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$c)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ng||i===Dg||i===Ug||i===kg)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ng)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dg)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ug)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kg)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Og||i===Fg||i===zg)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Og||i===Fg)return s===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===zg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bg||i===Hg||i===Vg||i===Gg||i===Wg||i===jg||i===Xg||i===$g||i===qg||i===Yg||i===Kg||i===Zg||i===Qg||i===Jg)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Bg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$g)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jg)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kc||i===ev||i===tv)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Kc)return s===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ev)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tv)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kP||i===nv||i===iv||i===rv)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Kc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===nv)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===iv)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rv)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class YD extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class El extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KD={type:"move"};class wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new El;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ZD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new fn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ii({vertexShader:ZD,fragmentShader:QD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new Zu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class e3 extends ms{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,g=null;const x=new JD,m=n.getContextAttributes();let h=null,_=null;const v=[],E=[],R=new et;let y=null;const b=new Pn;b.layers.enable(1),b.viewport=new Ft;const I=new Pn;I.layers.enable(2),I.viewport=new Ft;const T=[b,I],S=new YD;S.layers.enable(1),S.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=v[k];return Z===void 0&&(Z=new wf,v[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=v[k];return Z===void 0&&(Z=new wf,v[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=v[k];return Z===void 0&&(Z=new wf,v[k]=Z),Z.getHandSpace()};function H(k){const Z=E.indexOf(k.inputSource);if(Z===-1)return;const te=v[Z];te!==void 0&&(te.update(k.inputSource,k.frame,u||s),te.dispatchEvent({type:k.type,data:k.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",j);for(let k=0;k<v.length;k++){const Z=E[k];Z!==null&&(E[k]=null,v[k].disconnect(Z))}P=null,O=null,x.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,_=null,M.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Zr(p.framebufferWidth,p.framebufferHeight,{format:li,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,te=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=m.stencil?as:qo,te=m.stencil?ss:os);const Ce={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:o};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Zr(d.textureWidth,d.textureHeight,{format:li,type:mr,depthTexture:new qy(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),M.setContext(r),M.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(k){for(let Z=0;Z<k.removed.length;Z++){const te=k.removed[Z],ae=E.indexOf(te);ae>=0&&(E[ae]=null,v[ae].disconnect(te))}for(let Z=0;Z<k.added.length;Z++){const te=k.added[Z];let ae=E.indexOf(te);if(ae===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=E.length){E.push(te),ae=Ae;break}else if(E[Ae]===null){E[Ae]=te,ae=Ae;break}if(ae===-1)break}const Ce=v[ae];Ce&&Ce.connect(te)}}const Y=new q,Q=new q;function U(k,Z,te){Y.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(te.matrixWorld);const ae=Y.distanceTo(Q),Ce=Z.projectionMatrix.elements,Ae=te.projectionMatrix.elements,Pe=Ce[14]/(Ce[10]-1),N=Ce[14]/(Ce[10]+1),Fe=(Ce[9]+1)/Ce[5],je=(Ce[9]-1)/Ce[5],at=(Ce[8]-1)/Ce[0],be=(Ae[8]+1)/Ae[0],Xe=Pe*at,ze=Pe*be,Be=ae/(-at+be),Ze=Be*-at;Z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ze),k.translateZ(Be),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const L=Pe+Be,w=N+Be,z=Xe-Ze,le=ze+(ae-Ze),oe=Fe*N/w*L,ie=je*N/w*L;k.projectionMatrix.makePerspective(z,le,oe,ie,L,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function J(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;x.texture!==null&&(k.near=x.depthNear,k.far=x.depthFar),S.near=I.near=b.near=k.near,S.far=I.far=b.far=k.far,(P!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,O=S.far,b.near=P,b.far=O,I.near=P,I.far=O,b.updateProjectionMatrix(),I.updateProjectionMatrix(),k.updateProjectionMatrix());const Z=k.parent,te=S.cameras;J(S,Z);for(let ae=0;ae<te.length;ae++)J(te[ae],Z);te.length===2?U(S,b,I):S.projectionMatrix.copy(b.projectionMatrix),A(k,S,Z)};function A(k,Z,te){te===null?k.matrix.copy(Z.matrixWorld):(k.matrix.copy(te.matrixWorld),k.matrix.invert(),k.matrix.multiply(Z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=zd*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ue=null;function ye(k,Z){if(c=Z.getViewerPose(u||s),g=Z,c!==null){const te=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ae=!1;te.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let Ae=0;Ae<te.length;Ae++){const Pe=te[Ae];let N=null;if(p!==null)N=p.getViewport(Pe);else{const je=f.getViewSubImage(d,Pe);N=je.viewport,Ae===0&&(e.setRenderTargetTextures(_,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(_))}let Fe=T[Ae];Fe===void 0&&(Fe=new Pn,Fe.layers.enable(Ae),Fe.viewport=new Ft,T[Ae]=Fe),Fe.matrix.fromArray(Pe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Pe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(N.x,N.y,N.width,N.height),Ae===0&&(S.matrix.copy(Fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(Fe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ae=f.getDepthInformation(te[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(e,Ae,r.renderState)}}for(let te=0;te<v.length;te++){const ae=E[te],Ce=v[te];ae!==null&&Ce!==void 0&&Ce.update(ae,Z,u||s)}ue&&ue(k,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const M=new $y;M.setAnimationLoop(ye),this.setAnimationLoop=function(k){ue=k},this.dispose=function(){}}}const Pr=new Li,t3=new Ct;function n3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Gy(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,v,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),f(m,h)):h.isMeshPhongMaterial?(o(m,h),c(m,h)):h.isMeshStandardMaterial?(o(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(o(m,h),g(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),x(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),v=_.envMap,E=_.envMapRotation;v&&(m.envMap.value=v,Pr.copy(E),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),m.envMapRotation.value.setFromMatrix4(t3.makeRotationFromEuler(Pr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i3(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const E=v.program;i.uniformBlockBinding(_,E)}function u(_,v){let E=r[_.id];E===void 0&&(g(_),E=c(_),r[_.id]=E,_.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(_,R);const y=e.render.frame;o[_.id]!==y&&(d(_),o[_.id]=y)}function c(_){const v=f();_.__bindingPointIndex=v;const E=t.createBuffer(),R=_.__size,y=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=r[_.id],E=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let y=0,b=E.length;y<b;y++){const I=Array.isArray(E[y])?E[y]:[E[y]];for(let T=0,S=I.length;T<S;T++){const P=I[T];if(p(P,y,T,R)===!0){const O=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let j=0;j<H.length;j++){const Y=H[j],Q=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,O+K,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,K),K+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,E,R){const y=_.value,b=v+"_"+E;if(R[b]===void 0)return typeof y=="number"||typeof y=="boolean"?R[b]=y:R[b]=y.clone(),!0;{const I=R[b];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return R[b]=y,!0}else if(I.equals(y)===!1)return I.copy(y),!0}return!1}function g(_){const v=_.uniforms;let E=0;const R=16;for(let b=0,I=v.length;b<I;b++){const T=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,P=T.length;S<P;S++){const O=T[S],H=Array.isArray(O.value)?O.value:[O.value];for(let K=0,j=H.length;K<j;K++){const Y=H[K],Q=x(Y),U=E%R;U!==0&&R-U<Q.boundary&&(E+=R-U),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Q.storage}}}const y=E%R;return y>0&&(E+=R-y),_.__size=E,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const E=s.indexOf(v.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:h}}class r3{constructor(e={}){const{canvas:n=YP(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=fr,this.toneMappingExposure=1;const v=this;let E=!1,R=0,y=0,b=null,I=-1,T=null;const S=new Ft,P=new Ft;let O=null;const H=new Je(0);let K=0,j=n.width,Y=n.height,Q=1,U=null,J=null;const A=new Ft(0,0,j,Y),ue=new Ft(0,0,j,Y);let ye=!1;const M=new Xy;let k=!1,Z=!1;const te=new Ct,ae=new q,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Pe(){return b===null?Q:1}let N=i;function Fe(C,F){return n.getContext(C,F)}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",se,!1),N===null){const F="webgl2";if(N=Fe(F,C),N===null)throw Fe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let je,at,be,Xe,ze,Be,Ze,L,w,z,le,oe,ie,B,W,ee,ve,V,ne,me,he,fe,Ie,Le;function rt(){je=new dN(N),je.init(),fe=new qD(N,je),at=new oN(N,je,e,fe),be=new XD(N),Xe=new mN(N),ze=new ID,Be=new $D(N,je,be,ze,at,fe,Xe),Ze=new aN(v),L=new fN(v),w=new SL(N),Ie=new iN(N,w),z=new hN(N,w,Xe,Ie),le=new vN(N,z,w,Xe),ne=new gN(N,at,Be),ee=new sN(ze),oe=new LD(v,Ze,L,je,at,Ie,ee),ie=new n3(v,ze),B=new DD,W=new BD(je),V=new nN(v,Ze,L,be,le,d,l),ve=new jD(v,le,at),Le=new i3(N,Xe,at,be),me=new rN(N,je,Xe),he=new pN(N,je,Xe),Xe.programs=oe.programs,v.capabilities=at,v.extensions=je,v.properties=ze,v.renderLists=B,v.shadowMap=ve,v.state=be,v.info=Xe}rt();const D=new e3(v,N);this.xr=D,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(j,Y,!1))},this.getSize=function(C){return C.set(j,Y)},this.setSize=function(C,F,X=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,Y=F,n.width=Math.floor(C*Q),n.height=Math.floor(F*Q),X===!0&&(n.style.width=C+"px",n.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(j*Q,Y*Q).floor()},this.setDrawingBufferSize=function(C,F,X){j=C,Y=F,Q=X,n.width=Math.floor(C*X),n.height=Math.floor(F*X),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(A)},this.setViewport=function(C,F,X,$){C.isVector4?A.set(C.x,C.y,C.z,C.w):A.set(C,F,X,$),be.viewport(S.copy(A).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,F,X,$){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,F,X,$),be.scissor(P.copy(ue).multiplyScalar(Q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){be.setScissorTest(ye=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(C=!0,F=!0,X=!0){let $=0;if(C){let G=!1;if(b!==null){const pe=b.texture.format;G=pe===Ly||pe===Py||pe===Ry}if(G){const pe=b.texture.type,Ee=pe===mr||pe===os||pe===xu||pe===ss||pe===Cy||pe===by,we=V.getClearColor(),Te=V.getClearAlpha(),De=we.r,ke=we.g,Ne=we.b;Ee?(p[0]=De,p[1]=ke,p[2]=Ne,p[3]=Te,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=De,g[1]=ke,g[2]=Ne,g[3]=Te,N.clearBufferiv(N.COLOR,0,g))}else $|=N.COLOR_BUFFER_BIT}F&&($|=N.DEPTH_BUFFER_BIT),X&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",se,!1),B.dispose(),W.dispose(),ze.dispose(),Ze.dispose(),L.dispose(),le.dispose(),Ie.dispose(),Le.dispose(),oe.dispose(),D.dispose(),D.removeEventListener("sessionstart",Yn),D.removeEventListener("sessionend",Kn),Mr.stop()};function Se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Xe.autoReset,F=ve.enabled,X=ve.autoUpdate,$=ve.needsUpdate,G=ve.type;rt(),Xe.autoReset=C,ve.enabled=F,ve.autoUpdate=X,ve.needsUpdate=$,ve.type=G}function se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const F=C.target;F.removeEventListener("dispose",ge),He(F)}function He(C){Ye(C),ze.remove(C)}function Ye(C){const F=ze.get(C).programs;F!==void 0&&(F.forEach(function(X){oe.releaseProgram(X)}),C.isShaderMaterial&&oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,X,$,G,pe){F===null&&(F=Ce);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,we=eS(C,F,X,$,G);be.setMaterial($,Ee);let Te=X.index,De=1;if($.wireframe===!0){if(Te=z.getWireframeAttribute(X),Te===void 0)return;De=2}const ke=X.drawRange,Ne=X.attributes.position;let Qe=ke.start*De,_t=(ke.start+ke.count)*De;pe!==null&&(Qe=Math.max(Qe,pe.start*De),_t=Math.min(_t,(pe.start+pe.count)*De)),Te!==null?(Qe=Math.max(Qe,0),_t=Math.min(_t,Te.count)):Ne!=null&&(Qe=Math.max(Qe,0),_t=Math.min(_t,Ne.count));const xt=_t-Qe;if(xt<0||xt===1/0)return;Ie.setup(G,$,we,X,Te);let hn,tt=me;if(Te!==null&&(hn=w.get(Te),tt=he,tt.setIndex(hn)),G.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*Pe()),tt.setMode(N.LINES)):tt.setMode(N.TRIANGLES);else if(G.isLine){let Re=$.linewidth;Re===void 0&&(Re=1),be.setLineWidth(Re*Pe()),G.isLineSegments?tt.setMode(N.LINES):G.isLineLoop?tt.setMode(N.LINE_LOOP):tt.setMode(N.LINE_STRIP)}else G.isPoints?tt.setMode(N.POINTS):G.isSprite&&tt.setMode(N.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?tt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)tt.renderInstances(Qe,xt,G.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,qt=Math.min(X.instanceCount,Re);tt.renderInstances(Qe,xt,qt)}else tt.render(Qe,xt)};function St(C,F,X){C.transparent===!0&&C.side===yi&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,La(C,F,X),C.side=pr,C.needsUpdate=!0,La(C,F,X),C.side=yi):La(C,F,X)}this.compile=function(C,F,X=null){X===null&&(X=C),m=W.get(X),m.init(F),_.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),C!==X&&C.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const $=new Set;return C.traverse(function(G){const pe=G.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const we=pe[Ee];St(we,X,G),$.add(we)}else St(pe,X,G),$.add(pe)}),_.pop(),m=null,$},this.compileAsync=function(C,F,X=null){const $=this.compile(C,F,X);return new Promise(G=>{function pe(){if($.forEach(function(Ee){ze.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){G(C);return}setTimeout(pe,10)}je.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let It=null;function ot(C){It&&It(C)}function Yn(){Mr.stop()}function Kn(){Mr.start()}const Mr=new $y;Mr.setAnimationLoop(ot),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(C){It=C,D.setAnimationLoop(C),C===null?Mr.stop():Mr.start()},D.addEventListener("sessionstart",Yn),D.addEventListener("sessionend",Kn),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(F),F=D.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,F,b),m=W.get(C,_.length),m.init(F),_.push(m),te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),M.setFromProjectionMatrix(te),Z=this.localClippingEnabled,k=ee.init(this.clippingPlanes,Z),x=B.get(C,h.length),x.init(),h.push(x),D.enabled===!0&&D.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&Ju(pe,F,-1/0,v.sortObjects)}Ju(C,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(U,J),Ae=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Ae&&V.addToRenderList(x,C),this.info.render.frame++,k===!0&&ee.beginShadows();const X=m.state.shadowsArray;ve.render(X,C,F),k===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,G=x.transmissive;if(m.setupLights(),F.isArrayCamera){const pe=F.cameras;if(G.length>0)for(let Ee=0,we=pe.length;Ee<we;Ee++){const Te=pe[Ee];sp($,G,C,Te)}Ae&&V.render(C);for(let Ee=0,we=pe.length;Ee<we;Ee++){const Te=pe[Ee];op(x,C,Te,Te.viewport)}}else G.length>0&&sp($,G,C,F),Ae&&V.render(C),op(x,C,F);b!==null&&(Be.updateMultisampleRenderTarget(b),Be.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(v,C,F),Ie.resetDefaultState(),I=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],k===!0&&ee.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Ju(C,F,X,$){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||M.intersectsSprite(C)){$&&ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(te);const Ee=le.update(C),we=C.material;we.visible&&x.push(C,Ee,we,X,ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||M.intersectsObject(C))){const Ee=le.update(C),we=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ae.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ae.copy(Ee.boundingSphere.center)),ae.applyMatrix4(C.matrixWorld).applyMatrix4(te)),Array.isArray(we)){const Te=Ee.groups;for(let De=0,ke=Te.length;De<ke;De++){const Ne=Te[De],Qe=we[Ne.materialIndex];Qe&&Qe.visible&&x.push(C,Ee,Qe,X,ae.z,Ne)}}else we.visible&&x.push(C,Ee,we,X,ae.z,null)}}const pe=C.children;for(let Ee=0,we=pe.length;Ee<we;Ee++)Ju(pe[Ee],F,X,$)}function op(C,F,X,$){const G=C.opaque,pe=C.transmissive,Ee=C.transparent;m.setupLightsView(X),k===!0&&ee.setGlobalState(v.clippingPlanes,X),$&&be.viewport(S.copy($)),G.length>0&&Pa(G,F,X),pe.length>0&&Pa(pe,F,X),Ee.length>0&&Pa(Ee,F,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function sp(C,F,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Zr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?qu:mr,minFilter:Vr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const pe=m.state.transmissionRenderTarget[$.id],Ee=$.viewport||S;pe.setSize(Ee.z,Ee.w);const we=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(H),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),Ae?V.render(X):v.clear();const Te=v.toneMapping;v.toneMapping=fr;const De=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),k===!0&&ee.setGlobalState(v.clippingPlanes,$),Pa(C,X,$),Be.updateMultisampleRenderTarget(pe),Be.updateRenderTargetMipmap(pe),je.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ne=0,Qe=F.length;Ne<Qe;Ne++){const _t=F[Ne],xt=_t.object,hn=_t.geometry,tt=_t.material,Re=_t.group;if(tt.side===yi&&xt.layers.test($.layers)){const qt=tt.side;tt.side=cn,tt.needsUpdate=!0,ap(xt,X,$,hn,tt,Re),tt.side=qt,tt.needsUpdate=!0,ke=!0}}ke===!0&&(Be.updateMultisampleRenderTarget(pe),Be.updateRenderTargetMipmap(pe))}v.setRenderTarget(we),v.setClearColor(H,K),De!==void 0&&($.viewport=De),v.toneMapping=Te}function Pa(C,F,X){const $=F.isScene===!0?F.overrideMaterial:null;for(let G=0,pe=C.length;G<pe;G++){const Ee=C[G],we=Ee.object,Te=Ee.geometry,De=$===null?Ee.material:$,ke=Ee.group;we.layers.test(X.layers)&&ap(we,F,X,Te,De,ke)}}function ap(C,F,X,$,G,pe){C.onBeforeRender(v,F,X,$,G,pe),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(v,F,X,$,C,pe),G.transparent===!0&&G.side===yi&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,v.renderBufferDirect(X,F,$,G,C,pe),G.side=pr,G.needsUpdate=!0,v.renderBufferDirect(X,F,$,G,C,pe),G.side=yi):v.renderBufferDirect(X,F,$,G,C,pe),C.onAfterRender(v,F,X,$,G,pe)}function La(C,F,X){F.isScene!==!0&&(F=Ce);const $=ze.get(C),G=m.state.lights,pe=m.state.shadowsArray,Ee=G.state.version,we=oe.getParameters(C,G.state,pe,F,X),Te=oe.getProgramCacheKey(we);let De=$.programs;$.environment=C.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(C.isMeshStandardMaterial?L:Ze).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,De===void 0&&(C.addEventListener("dispose",ge),De=new Map,$.programs=De);let ke=De.get(Te);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===Ee)return up(C,we),ke}else we.uniforms=oe.getUniforms(C),C.onBuild(X,we,v),C.onBeforeCompile(we,v),ke=oe.acquireProgram(we,Te),De.set(Te,ke),$.uniforms=we.uniforms;const Ne=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=ee.uniform),up(C,we),$.needsLights=nS(C),$.lightsStateVersion=Ee,$.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMap.value=G.state.directionalShadowMap,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotShadowMap.value=G.state.spotShadowMap,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMap.value=G.state.pointShadowMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function lp(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=Vl.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function up(C,F){const X=ze.get(C);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function eS(C,F,X,$,G){F.isScene!==!0&&(F=Ce),Be.resetTextureUnits();const pe=F.fog,Ee=$.isMeshStandardMaterial?F.environment:null,we=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Er,Te=($.isMeshStandardMaterial?L:Ze).get($.envMap||Ee),De=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color;let xt=fr;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(xt=v.toneMapping);const hn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tt=hn!==void 0?hn.length:0,Re=ze.get($),qt=m.state.lights;if(k===!0&&(Z===!0||C!==T)){const wn=C===T&&$.id===I;ee.setState($,C,wn)}let st=!1;$.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==qt.state.version||Re.outputColorSpace!==we||G.isBatchedMesh&&Re.batching===!1||!G.isBatchedMesh&&Re.batching===!0||G.isBatchedMesh&&Re.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Re.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Re.instancing===!1||!G.isInstancedMesh&&Re.instancing===!0||G.isSkinnedMesh&&Re.skinning===!1||!G.isSkinnedMesh&&Re.skinning===!0||G.isInstancedMesh&&Re.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Re.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Re.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Re.instancingMorph===!1&&G.morphTexture!==null||Re.envMap!==Te||$.fog===!0&&Re.fog!==pe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ee.numPlanes||Re.numIntersection!==ee.numIntersection)||Re.vertexAlphas!==De||Re.vertexTangents!==ke||Re.morphTargets!==Ne||Re.morphNormals!==Qe||Re.morphColors!==_t||Re.toneMapping!==xt||Re.morphTargetsCount!==tt)&&(st=!0):(st=!0,Re.__version=$.version);let fi=Re.currentProgram;st===!0&&(fi=La($,F,G));let Ia=!1,wr=!1,ec=!1;const Nt=fi.getUniforms(),ki=Re.uniforms;if(be.useProgram(fi.program)&&(Ia=!0,wr=!0,ec=!0),$.id!==I&&(I=$.id,wr=!0),Ia||T!==C){Nt.setValue(N,"projectionMatrix",C.projectionMatrix),Nt.setValue(N,"viewMatrix",C.matrixWorldInverse);const wn=Nt.map.cameraPosition;wn!==void 0&&wn.setValue(N,ae.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&Nt.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Nt.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,wr=!0,ec=!0)}if(G.isSkinnedMesh){Nt.setOptional(N,G,"bindMatrix"),Nt.setOptional(N,G,"bindMatrixInverse");const wn=G.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Nt.setValue(N,"boneTexture",wn.boneTexture,Be))}G.isBatchedMesh&&(Nt.setOptional(N,G,"batchingTexture"),Nt.setValue(N,"batchingTexture",G._matricesTexture,Be),Nt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(N,"batchingColorTexture",G._colorsTexture,Be));const tc=X.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0)&&ne.update(G,X,fi),(wr||Re.receiveShadow!==G.receiveShadow)&&(Re.receiveShadow=G.receiveShadow,Nt.setValue(N,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ki.envMap.value=Te,ki.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&F.environment!==null&&(ki.envMapIntensity.value=F.environmentIntensity),wr&&(Nt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&tS(ki,ec),pe&&$.fog===!0&&ie.refreshFogUniforms(ki,pe),ie.refreshMaterialUniforms(ki,$,Q,Y,m.state.transmissionRenderTarget[C.id]),Vl.upload(N,lp(Re),ki,Be)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Vl.upload(N,lp(Re),ki,Be),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Nt.setValue(N,"center",G.center),Nt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(N,"normalMatrix",G.normalMatrix),Nt.setValue(N,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const wn=$.uniformsGroups;for(let nc=0,iS=wn.length;nc<iS;nc++){const cp=wn[nc];Le.update(cp,fi),Le.bind(cp,fi)}}return fi}function tS(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function nS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,F,X){ze.get(C.texture).__webglTexture=F,ze.get(C.depthTexture).__webglTexture=X;const $=ze.get(C);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){const X=ze.get(C);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,X=0){b=C,R=F,y=X;let $=!0,G=null,pe=!1,Ee=!1;if(C){const Te=ze.get(C);Te.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(N.FRAMEBUFFER,null),$=!1):Te.__webglFramebuffer===void 0?Be.setupRenderTarget(C):Te.__hasExternalTextures&&Be.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);const De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ee=!0);const ke=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?G=ke[F][X]:G=ke[F],pe=!0):C.samples>0&&Be.useMultisampledRTT(C)===!1?G=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[X]:G=ke,S.copy(C.viewport),P.copy(C.scissor),O=C.scissorTest}else S.copy(A).multiplyScalar(Q).floor(),P.copy(ue).multiplyScalar(Q).floor(),O=ye;if(be.bindFramebuffer(N.FRAMEBUFFER,G)&&$&&be.drawBuffers(C,G),be.viewport(S),be.scissor(P),be.setScissorTest(O),pe){const Te=ze.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,X)}else if(Ee){const Te=ze.get(C.texture),De=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,X||0,De)}I=-1},this.readRenderTargetPixels=function(C,F,X,$,G,pe,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){be.bindFramebuffer(N.FRAMEBUFFER,we);try{const Te=C.texture,De=Te.format,ke=Te.type;if(!at.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-$&&X>=0&&X<=C.height-G&&N.readPixels(F,X,$,G,fe.convert(De),fe.convert(ke),pe)}finally{const Te=b!==null?ze.get(b).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(C,F,X,$,G,pe,Ee){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){be.bindFramebuffer(N.FRAMEBUFFER,we);try{const Te=C.texture,De=Te.format,ke=Te.type;if(!at.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=C.width-$&&X>=0&&X<=C.height-G){const Ne=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ne),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(F,X,$,G,fe.convert(De),fe.convert(ke),0),N.flush();const Qe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await KP(N,Qe,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Ne),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe)}finally{N.deleteBuffer(Ne),N.deleteSync(Qe)}return pe}}finally{const Te=b!==null?ze.get(b).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(C,F=null,X=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1]);const $=Math.pow(2,-X),G=Math.floor(C.image.width*$),pe=Math.floor(C.image.height*$),Ee=F!==null?F.x:0,we=F!==null?F.y:0;Be.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Ee,we,G,pe),be.unbindTexture()},this.copyTextureToTexture=function(C,F,X=null,$=null,G=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1],F=arguments[2],G=arguments[3]||0,X=null);let pe,Ee,we,Te,De,ke;X!==null?(pe=X.max.x-X.min.x,Ee=X.max.y-X.min.y,we=X.min.x,Te=X.min.y):(pe=C.image.width,Ee=C.image.height,we=0,Te=0),$!==null?(De=$.x,ke=$.y):(De=0,ke=0);const Ne=fe.convert(F.format),Qe=fe.convert(F.type);Be.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const _t=N.getParameter(N.UNPACK_ROW_LENGTH),xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),hn=N.getParameter(N.UNPACK_SKIP_PIXELS),tt=N.getParameter(N.UNPACK_SKIP_ROWS),Re=N.getParameter(N.UNPACK_SKIP_IMAGES),qt=C.isCompressedTexture?C.mipmaps[G]:C.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,qt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,De,ke,pe,Ee,Ne,Qe,qt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,De,ke,qt.width,qt.height,Ne,qt.data):N.texSubImage2D(N.TEXTURE_2D,G,De,ke,Ne,Qe,qt),N.pixelStorei(N.UNPACK_ROW_LENGTH,_t),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,hn),N.pixelStorei(N.UNPACK_SKIP_ROWS,tt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re),G===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(C,F,X=null,$=null,G=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,C=arguments[2],F=arguments[3],G=arguments[4]||0);let pe,Ee,we,Te,De,ke,Ne,Qe,_t;const xt=C.isCompressedTexture?C.mipmaps[G]:C.image;X!==null?(pe=X.max.x-X.min.x,Ee=X.max.y-X.min.y,we=X.max.z-X.min.z,Te=X.min.x,De=X.min.y,ke=X.min.z):(pe=xt.width,Ee=xt.height,we=xt.depth,Te=0,De=0,ke=0),$!==null?(Ne=$.x,Qe=$.y,_t=$.z):(Ne=0,Qe=0,_t=0);const hn=fe.convert(F.format),tt=fe.convert(F.type);let Re;if(F.isData3DTexture)Be.setTexture3D(F,0),Re=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Be.setTexture2DArray(F,0),Re=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const qt=N.getParameter(N.UNPACK_ROW_LENGTH),st=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fi=N.getParameter(N.UNPACK_SKIP_PIXELS),Ia=N.getParameter(N.UNPACK_SKIP_ROWS),wr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),N.pixelStorei(N.UNPACK_SKIP_ROWS,De),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke),C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Re,G,Ne,Qe,_t,pe,Ee,we,hn,tt,xt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,G,Ne,Qe,_t,pe,Ee,we,hn,xt.data):N.texSubImage3D(Re,G,Ne,Qe,_t,pe,Ee,we,hn,tt,xt),N.pixelStorei(N.UNPACK_ROW_LENGTH,qt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ia),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wr),G===0&&F.generateMipmaps&&N.generateMipmap(Re),be.unbindTexture()},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&Be.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Be.setTextureCube(C,0):C.isData3DTexture?Be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Be.setTexture2DArray(C,0):Be.setTexture2D(C,0),be.unbindTexture()},this.resetState=function(){R=0,y=0,b=null,be.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ip?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Yu?"display-p3":"srgb"}}class o3 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class s3 extends ba{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yv=new Ct,Hd=new Oy,Ml=new Ku,wl=new q;class a3 extends dn{constructor(e=new Ui,n=new s3){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(r),Ml.radius+=o,e.ray.intersectsSphere(Ml)===!1)return;Yv.copy(r).invert(),Hd.copy(e.ray).applyMatrix4(Yv);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let g=d,x=p;g<x;g++){const m=u.getX(g);wl.fromBufferAttribute(f,m),Kv(wl,m,l,r,e,n,this)}}else{const d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=d,x=p;g<x;g++)wl.fromBufferAttribute(f,g),Kv(wl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Kv(t,e,n,i,r,o,s){const a=Hd.distanceSqToPoint(t);if(a<n){const l=new q;Hd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);const l3=()=>{const t=xe.useRef(null),e=100,n=50,i=50;let r,o,s,a,l,u=0;const c=.01,f=16768477,d=15987958;let p=1632,g=911;const x=()=>{var H;r=document.createElement("div"),o=new Pn(75,p/g,1,1e4),o.position.z=1e3,s=new o3;const E=n*i,R=new Float32Array(E*3),y=new Float32Array(E);let b=0,I=0;for(let K=0;K<n;K++)for(let j=0;j<i;j++)R[b]=K*e-n*e/2,R[b+1]=0,R[b+2]=j*e-i*e/2,y[I]=1,b+=3,I++;const T=new Ui;T.setAttribute("position",new Dn(R,3)),T.setAttribute("scale",new Dn(y,1));const S=`
        attribute float scale;

			void main() {

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = scale * ( 300.0 / - mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}
        `,P=`
        uniform vec3 color;

			void main() {

				if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

				gl_FragColor = vec4( color, 1.0 );

			}`,O=new Ii({uniforms:{color:{value:new Je(f)}},vertexShader:S,fragmentShader:P});l=new a3(T,O),s.add(l),a=new r3({antialias:!0}),a.setPixelRatio(window.devicePixelRatio),a.setSize(p,g),a.setClearColor(d),a.setAnimationLoop(_),(H=t.current)==null||H.appendChild(a.domElement),r.style.touchAction="none",window.addEventListener("resize",h)},m=()=>{window.removeEventListener("resize",h),a.domElement.remove()};xe.useEffect(()=>(x(),()=>{m()}));const h=()=>{p=r.clientWidth,g=r.clientHeight,o.aspect=p/g,o.updateProjectionMatrix(),a.setSize(p,g)},_=()=>{v()},v=()=>{o.position.x=75,o.position.y=250,o.lookAt(s.position);const E=l.geometry.attributes.position.array,R=l.geometry.attributes.scale.array;let y=0,b=0;for(let I=0;I<n;I++)for(let T=0;T<i;T++)E[y+1]=Math.sin((I+u)*.3)*50+Math.sin((T+u)*.5)*50,R[b]=(Math.sin((I+u)*.3)+1)*20+(Math.sin((T+u)*.5)+1)*20,y+=3,b++;l.geometry.attributes.position.needsUpdate=!0,l.geometry.attributes.scale.needsUpdate=!0,a.render(s,o),u+=c};return Oe.jsx("div",{id:"threePointsWaveRef",ref:t,style:{width:"100%",height:"100%",overflow:"hidden"}})},u3=()=>Oe.jsx(l3,{});function c3(){return Oe.jsx(C1,{basename:"/algorithms",children:Oe.jsxs("div",{className:"flex h-screen",children:[Oe.jsx("div",{children:Oe.jsx(VR,{})}),Oe.jsx("div",{className:"bg-gray-100 flex-1",children:Oe.jsxs(y1,{children:[Oe.jsx(Ol,{path:"/",element:Oe.jsx(u3,{})}),Oe.jsx(Ol,{path:"/fizz-buzz",element:Oe.jsx(BR,{})}),Oe.jsx(Ol,{path:"*",element:Oe.jsx(HR,{})})]})})]})})}Tf.createRoot(document.getElementById("root")).render(Oe.jsx(ii.StrictMode,{children:Oe.jsx(c3,{})}));
