(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ME(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U_={exports:{}},eu={},F_={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),EE=Symbol.for("react.portal"),TE=Symbol.for("react.fragment"),wE=Symbol.for("react.strict_mode"),AE=Symbol.for("react.profiler"),bE=Symbol.for("react.provider"),CE=Symbol.for("react.context"),RE=Symbol.for("react.forward_ref"),PE=Symbol.for("react.suspense"),DE=Symbol.for("react.memo"),LE=Symbol.for("react.lazy"),ig=Symbol.iterator;function NE(t){return t===null||typeof t!="object"?null:(t=ig&&t[ig]||t["@@iterator"],typeof t=="function"?t:null)}var O_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k_=Object.assign,B_={};function wo(t,e,n){this.props=t,this.context=e,this.refs=B_,this.updater=n||O_}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z_(){}z_.prototype=wo.prototype;function Zh(t,e,n){this.props=t,this.context=e,this.refs=B_,this.updater=n||O_}var Qh=Zh.prototype=new z_;Qh.constructor=Zh;k_(Qh,wo.prototype);Qh.isPureReactComponent=!0;var rg=Array.isArray,V_=Object.prototype.hasOwnProperty,Jh={current:null},H_={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)V_.call(e,i)&&!H_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ha,type:t,key:s,ref:o,props:r,_owner:Jh.current}}function IE(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ep(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function UE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sg=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UE(""+t.key):e.toString(36)}function Yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ha:case EE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,rg(r)?(n="",t!=null&&(n=t.replace(sg,"$&/")+"/"),Yl(r,e,n,"",function(c){return c})):r!=null&&(ep(r)&&(r=IE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(sg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",rg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=Yl(s,e,n,l,r)}else if(l=NE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=Yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(t,e,n){if(t==null)return t;var i=[],r=0;return Yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function FE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},ql={transition:null},OE={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:Jh};function W_(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!ep(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=wo;je.Fragment=TE;je.Profiler=AE;je.PureComponent=Zh;je.StrictMode=wE;je.Suspense=PE;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OE;je.act=W_;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=k_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)V_.call(e,l)&&!H_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:CE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bE,_context:t},t.Consumer=t};je.createElement=G_;je.createFactory=function(t){var e=G_.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:RE,render:t}};je.isValidElement=ep;je.lazy=function(t){return{$$typeof:LE,_payload:{_status:-1,_result:t},_init:FE}};je.memo=function(t,e){return{$$typeof:DE,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};je.unstable_act=W_;je.useCallback=function(t,e){return mn.current.useCallback(t,e)};je.useContext=function(t){return mn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};je.useEffect=function(t,e){return mn.current.useEffect(t,e)};je.useId=function(){return mn.current.useId()};je.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return mn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};je.useRef=function(t){return mn.current.useRef(t)};je.useState=function(t){return mn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return mn.current.useTransition()};je.version="18.3.1";F_.exports=je;var ae=F_.exports;const kE=ME(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE=ae,zE=Symbol.for("react.element"),VE=Symbol.for("react.fragment"),HE=Object.prototype.hasOwnProperty,GE=BE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,WE={key:!0,ref:!0,__self:!0,__source:!0};function j_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)HE.call(e,i)&&!WE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zE,type:t,key:s,ref:o,props:r,_owner:GE.current}}eu.Fragment=VE;eu.jsx=j_;eu.jsxs=j_;U_.exports=eu;var b=U_.exports,$d={},X_={exports:{}},kn={},Y_={exports:{}},q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,j){var Z=U.length;U.push(j);e:for(;0<Z;){var oe=Z-1>>>1,he=U[oe];if(0<r(he,j))U[oe]=j,U[Z]=he,Z=oe;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var j=U[0],Z=U.pop();if(Z!==j){U[0]=Z;e:for(var oe=0,he=U.length,He=he>>>1;oe<He;){var Xe=2*(oe+1)-1,Le=U[Xe],K=Xe+1,fe=U[K];if(0>r(Le,Z))K<he&&0>r(fe,Le)?(U[oe]=fe,U[K]=Z,oe=K):(U[oe]=Le,U[Xe]=Z,oe=Xe);else if(K<he&&0>r(fe,Z))U[oe]=fe,U[K]=Z,oe=K;else break e}}return j}function r(U,j){var Z=U.sortIndex-j.sortIndex;return Z!==0?Z:U.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=U)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function M(U){if(y=!1,_(U),!v)if(n(l)!==null)v=!0,V(w);else{var j=n(c);j!==null&&O(M,j.startTime-U)}}function w(U,j){v=!1,y&&(y=!1,h(x),x=-1),p=!0;var Z=d;try{for(_(j),f=n(l);f!==null&&(!(f.expirationTime>j)||U&&!P());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var he=oe(f.expirationTime<=j);j=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),_(j)}else i(l);f=n(l)}if(f!==null)var He=!0;else{var Xe=n(c);Xe!==null&&O(M,Xe.startTime-j),He=!1}return He}finally{f=null,d=Z,p=!1}}var E=!1,C=null,x=-1,R=5,D=-1;function P(){return!(t.unstable_now()-D<R)}function k(){if(C!==null){var U=t.unstable_now();D=U;var j=!0;try{j=C(!0,U)}finally{j?X():(E=!1,C=null)}}else E=!1}var X;if(typeof m=="function")X=function(){m(k)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,I=q.port2;q.port1.onmessage=k,X=function(){I.postMessage(null)}}else X=function(){g(k,0)};function V(U){C=U,E||(E=!0,X())}function O(U,j){x=g(function(){U(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,V(w))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var Z=d;d=j;try{return U()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=d;d=U;try{return j()}finally{d=Z}},t.unstable_scheduleCallback=function(U,j,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,U){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,U={id:u++,callback:j,priorityLevel:U,startTime:Z,expirationTime:he,sortIndex:-1},Z>oe?(U.sortIndex=Z,e(c,U),n(l)===null&&U===n(c)&&(y?(h(x),x=-1):y=!0,O(M,Z-oe))):(U.sortIndex=he,e(l,U),v||p||(v=!0,V(w))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var j=d;return function(){var Z=d;d=j;try{return U.apply(this,arguments)}finally{d=Z}}}})(q_);Y_.exports=q_;var jE=Y_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XE=ae,Fn=jE;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $_=new Set,va={};function vs(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(va[t]=e,t=0;t<e.length;t++)$_.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,YE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,og={},ag={};function qE(t){return Kd.call(ag,t)?!0:Kd.call(og,t)?!1:YE.test(t)?ag[t]=!0:(og[t]=!0,!1)}function $E(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KE(t,e,n,i){if(e===null||typeof e>"u"||$E(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var tp=/[\-:]([a-z])/g;function np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tp,np);Qt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tp,np);Qt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tp,np);Qt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ip(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KE(e,n,r,i)&&(n=null),i||r===null?qE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),Os=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),op=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Q_=Symbol.for("react.offscreen"),lg=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Du;function $o(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Lu=!1;function Nu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function ZE(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Os:return"Portal";case Zd:return"Profiler";case rp:return"StrictMode";case Qd:return"Suspense";case Jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z_:return(t.displayName||"Context")+".Consumer";case K_:return(t._context.displayName||"Context")+".Provider";case sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case op:return e=t.displayName||null,e!==null?e:ef(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return ef(t(e))}catch{}}return null}function QE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(e);case 8:return e===rp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JE(t){var e=J_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=JE(t))}function ex(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=J_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tf(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tx(t,e){e=e.checked,e!=null&&ip(t,"checked",e,!1)}function nf(t,e){tx(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rf(t,e.type,n):e.hasOwnProperty("defaultValue")&&rf(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ug(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rf(t,e,n){(e!=="number"||vc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function to(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ko(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function nx(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ix(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ix(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,rx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e1=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){e1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function sx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function ox(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var t1=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(t,e){if(e){if(t1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function lf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uf=null,no=null,io=null;function hg(t){if(t=ja(t)){if(typeof uf!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=su(e),uf(t.stateNode,t.type,e))}}function ax(t){no?io?io.push(t):io=[t]:no=t}function lx(){if(no){var t=no,e=io;if(io=no=null,hg(t),e)for(t=0;t<e.length;t++)hg(e[t])}}function cx(t,e){return t(e)}function ux(){}var Iu=!1;function dx(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return cx(t,e,n)}finally{Iu=!1,(no!==null||io!==null)&&(ux(),lx())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var df=!1;if($i)try{var No={};Object.defineProperty(No,"passive",{get:function(){df=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{df=!1}function n1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var sa=!1,_c=null,xc=!1,ff=null,i1={onError:function(t){sa=!0,_c=t}};function r1(t,e,n,i,r,s,o,a,l){sa=!1,_c=null,n1.apply(i1,arguments)}function s1(t,e,n,i,r,s,o,a,l){if(r1.apply(this,arguments),sa){if(sa){var c=_c;sa=!1,_c=null}else throw Error(ne(198));xc||(xc=!0,ff=c)}}function _s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pg(t){if(_s(t)!==t)throw Error(ne(188))}function o1(t){var e=t.alternate;if(!e){if(e=_s(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return pg(r),t;if(s===i)return pg(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function hx(t){return t=o1(t),t!==null?px(t):null}function px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=px(t);if(e!==null)return e;t=t.sibling}return null}var mx=Fn.unstable_scheduleCallback,mg=Fn.unstable_cancelCallback,a1=Fn.unstable_shouldYield,l1=Fn.unstable_requestPaint,It=Fn.unstable_now,c1=Fn.unstable_getCurrentPriorityLevel,lp=Fn.unstable_ImmediatePriority,gx=Fn.unstable_UserBlockingPriority,yc=Fn.unstable_NormalPriority,u1=Fn.unstable_LowPriority,vx=Fn.unstable_IdlePriority,tu=null,Mi=null;function d1(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:p1,f1=Math.log,h1=Math.LN2;function p1(t){return t>>>=0,t===0?32:31-(f1(t)/h1|0)|0}var ol=64,al=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function m1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=m1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _x(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function v1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function xx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yx,up,Sx,Mx,Ex,pf=!1,ll=[],Er=null,Tr=null,wr=null,ya=new Map,Sa=new Map,vr=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gg(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Io(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&up(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function x1(t,e,n,i,r){switch(e){case"focusin":return Er=Io(Er,t,e,n,i,r),!0;case"dragenter":return Tr=Io(Tr,t,e,n,i,r),!0;case"mouseover":return wr=Io(wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ya.set(s,Io(ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Sa.set(s,Io(Sa.get(s)||null,t,e,n,i,r)),!0}return!1}function Tx(t){var e=ts(t.target);if(e!==null){var n=_s(e);if(n!==null){if(e=n.tag,e===13){if(e=fx(n),e!==null){t.blockedOn=e,Ex(t.priority,function(){Sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cf=i,n.target.dispatchEvent(i),cf=null}else return e=ja(n),e!==null&&up(e),t.blockedOn=n,!1;e.shift()}return!0}function vg(t,e,n){$l(t)&&n.delete(e)}function y1(){pf=!1,Er!==null&&$l(Er)&&(Er=null),Tr!==null&&$l(Tr)&&(Tr=null),wr!==null&&$l(wr)&&(wr=null),ya.forEach(vg),Sa.forEach(vg)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,pf||(pf=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,y1)))}function Ma(t){function e(r){return Uo(r,t)}if(0<ll.length){Uo(ll[0],t);for(var n=1;n<ll.length;n++){var i=ll[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&Uo(Er,t),Tr!==null&&Uo(Tr,t),wr!==null&&Uo(wr,t),ya.forEach(e),Sa.forEach(e),n=0;n<vr.length;n++)i=vr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)Tx(n),n.blockedOn===null&&vr.shift()}var ro=nr.ReactCurrentBatchConfig,Mc=!0;function S1(t,e,n,i){var r=it,s=ro.transition;ro.transition=null;try{it=1,dp(t,e,n,i)}finally{it=r,ro.transition=s}}function M1(t,e,n,i){var r=it,s=ro.transition;ro.transition=null;try{it=4,dp(t,e,n,i)}finally{it=r,ro.transition=s}}function dp(t,e,n,i){if(Mc){var r=mf(t,e,n,i);if(r===null)ju(t,e,i,Ec,n),gg(t,i);else if(x1(r,t,e,n,i))i.stopPropagation();else if(gg(t,i),e&4&&-1<_1.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&yx(s),s=mf(t,e,n,i),s===null&&ju(t,e,i,Ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var Ec=null;function mf(t,e,n,i){if(Ec=null,t=ap(i),t=ts(t),t!==null)if(e=_s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ec=t,null}function wx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c1()){case lp:return 1;case gx:return 4;case yc:case u1:return 16;case vx:return 536870912;default:return 16}default:return 16}}var yr=null,fp=null,Kl=null;function Ax(){if(Kl)return Kl;var t,e=fp,n=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Kl=r.slice(t,1<i?1-i:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function _g(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:_g,this.isPropagationStopped=_g,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hp=Bn(Ao),Wa=Tt({},Ao,{view:0,detail:0}),E1=Bn(Wa),Fu,Ou,Fo,nu=Tt({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Fu=t.screenX-Fo.screenX,Ou=t.screenY-Fo.screenY):Ou=Fu=0,Fo=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),xg=Bn(nu),T1=Tt({},nu,{dataTransfer:0}),w1=Bn(T1),A1=Tt({},Wa,{relatedTarget:0}),ku=Bn(A1),b1=Tt({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=Bn(b1),R1=Tt({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P1=Bn(R1),D1=Tt({},Ao,{data:0}),yg=Bn(D1),L1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=I1[t])?!!e[t]:!1}function pp(){return U1}var F1=Tt({},Wa,{key:function(t){if(t.key){var e=L1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pp,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O1=Bn(F1),k1=Tt({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=Bn(k1),B1=Tt({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pp}),z1=Bn(B1),V1=Tt({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),H1=Bn(V1),G1=Tt({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),W1=Bn(G1),j1=[9,13,27,32],mp=$i&&"CompositionEvent"in window,oa=null;$i&&"documentMode"in document&&(oa=document.documentMode);var X1=$i&&"TextEvent"in window&&!oa,bx=$i&&(!mp||oa&&8<oa&&11>=oa),Mg=" ",Eg=!1;function Cx(t,e){switch(t){case"keyup":return j1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function Y1(t,e){switch(t){case"compositionend":return Rx(e);case"keypress":return e.which!==32?null:(Eg=!0,Mg);case"textInput":return t=e.data,t===Mg&&Eg?null:t;default:return null}}function q1(t,e){if(Bs)return t==="compositionend"||!mp&&Cx(t,e)?(t=Ax(),Kl=fp=yr=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bx&&e.locale!=="ko"?null:e.data;default:return null}}var $1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$1[t.type]:e==="textarea"}function Px(t,e,n,i){ax(i),e=Tc(e,"onChange"),0<e.length&&(n=new hp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,Ea=null;function K1(t){Vx(t,0)}function iu(t){var e=Hs(t);if(ex(e))return t}function Z1(t,e){if(t==="change")return e}var Dx=!1;if($i){var Bu;if($i){var zu="oninput"in document;if(!zu){var wg=document.createElement("div");wg.setAttribute("oninput","return;"),zu=typeof wg.oninput=="function"}Bu=zu}else Bu=!1;Dx=Bu&&(!document.documentMode||9<document.documentMode)}function Ag(){aa&&(aa.detachEvent("onpropertychange",Lx),Ea=aa=null)}function Lx(t){if(t.propertyName==="value"&&iu(Ea)){var e=[];Px(e,Ea,t,ap(t)),dx(K1,e)}}function Q1(t,e,n){t==="focusin"?(Ag(),aa=e,Ea=n,aa.attachEvent("onpropertychange",Lx)):t==="focusout"&&Ag()}function J1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Ea)}function eT(t,e){if(t==="click")return iu(e)}function tT(t,e){if(t==="input"||t==="change")return iu(e)}function nT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:nT;function Ta(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kd.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cg(t,e){var n=bg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bg(n)}}function Nx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ix(){for(var t=window,e=vc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vc(t.document)}return e}function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iT(t){var e=Ix(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nx(n.ownerDocument.documentElement,n)){if(i!==null&&gp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Cg(n,s);var o=Cg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rT=$i&&"documentMode"in document&&11>=document.documentMode,zs=null,gf=null,la=null,vf=!1;function Rg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||zs==null||zs!==vc(i)||(i=zs,"selectionStart"in i&&gp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&Ta(la,i)||(la=i,i=Tc(gf,"onSelect"),0<i.length&&(e=new hp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zs)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},Vu={},Ux={};$i&&(Ux=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function ru(t){if(Vu[t])return Vu[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ux)return Vu[t]=e[n];return t}var Fx=ru("animationend"),Ox=ru("animationiteration"),kx=ru("animationstart"),Bx=ru("transitionend"),zx=new Map,Pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){zx.set(t,e),vs(e,[t])}for(var Hu=0;Hu<Pg.length;Hu++){var Gu=Pg[Hu],sT=Gu.toLowerCase(),oT=Gu[0].toUpperCase()+Gu.slice(1);kr(sT,"on"+oT)}kr(Fx,"onAnimationEnd");kr(Ox,"onAnimationIteration");kr(kx,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Bx,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Dg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,s1(i,e,void 0,t),t.currentTarget=null}function Vx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dg(r,a,c),s=l}}}if(xc)throw t=ff,xc=!1,ff=null,t}function mt(t,e){var n=e[Mf];n===void 0&&(n=e[Mf]=new Set);var i=t+"__bubble";n.has(i)||(Hx(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),Hx(n,t,i,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[dl]){t[dl]=!0,$_.forEach(function(n){n!=="selectionchange"&&(aT.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Wu("selectionchange",!1,e))}}function Hx(t,e,n,i){switch(wx(e)){case 1:var r=S1;break;case 4:r=M1;break;default:r=dp}n=r.bind(null,e,n,t),r=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dx(function(){var c=s,u=ap(n),f=[];e:{var d=zx.get(t);if(d!==void 0){var p=hp,v=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":p=O1;break;case"focusin":v="focus",p=ku;break;case"focusout":v="blur",p=ku;break;case"beforeblur":case"afterblur":p=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=w1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=z1;break;case Fx:case Ox:case kx:p=C1;break;case Bx:p=H1;break;case"scroll":p=E1;break;case"wheel":p=W1;break;case"copy":case"cut":case"paste":p=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sg}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,_;m!==null;){_=m;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,h!==null&&(M=xa(m,h),M!=null&&y.push(Aa(m,M,_)))),g)break;m=m.return}0<y.length&&(d=new p(d,v,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==cf&&(v=n.relatedTarget||n.fromElement)&&(ts(v)||v[Ki]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ts(v):null,v!==null&&(g=_s(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=xg,M="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Sg,M="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?d:Hs(p),_=v==null?d:Hs(v),d=new y(M,m+"leave",p,n,u),d.target=g,d.relatedTarget=_,M=null,ts(u)===c&&(y=new y(h,m+"enter",v,n,u),y.target=_,y.relatedTarget=g,M=y),g=M,p&&v)t:{for(y=p,h=v,m=0,_=y;_;_=Ms(_))m++;for(_=0,M=h;M;M=Ms(M))_++;for(;0<m-_;)y=Ms(y),m--;for(;0<_-m;)h=Ms(h),_--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=Ms(y),h=Ms(h)}y=null}else y=null;p!==null&&Lg(f,d,p,y,!1),v!==null&&g!==null&&Lg(f,g,v,y,!0)}}e:{if(d=c?Hs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=Z1;else if(Tg(d))if(Dx)w=tT;else{w=J1;var E=Q1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=eT);if(w&&(w=w(t,c))){Px(f,w,n,u);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&rf(d,"number",d.value)}switch(E=c?Hs(c):window,t){case"focusin":(Tg(E)||E.contentEditable==="true")&&(zs=E,gf=c,la=null);break;case"focusout":la=gf=zs=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,Rg(f,n,u);break;case"selectionchange":if(rT)break;case"keydown":case"keyup":Rg(f,n,u)}var C;if(mp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bs?Cx(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(bx&&n.locale!=="ko"&&(Bs||x!=="onCompositionStart"?x==="onCompositionEnd"&&Bs&&(C=Ax()):(yr=u,fp="value"in yr?yr.value:yr.textContent,Bs=!0)),E=Tc(c,x),0<E.length&&(x=new yg(x,t,null,n,u),f.push({event:x,listeners:E}),C?x.data=C:(C=Rx(n),C!==null&&(x.data=C)))),(C=X1?Y1(t,n):q1(t,n))&&(c=Tc(c,"onBeforeInput"),0<c.length&&(u=new yg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=C))}Vx(f,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xa(t,n),s!=null&&i.unshift(Aa(t,s,r)),s=xa(t,e),s!=null&&i.push(Aa(t,s,r))),t=t.return}return i}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=xa(n,s),l!=null&&o.unshift(Aa(n,l,a))):r||(l=xa(n,s),l!=null&&o.push(Aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lT=/\r\n?/g,cT=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(lT,`
`).replace(cT,"")}function fl(t,e,n){if(e=Ng(e),Ng(t)!==e&&n)throw Error(ne(425))}function wc(){}var _f=null,xf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,uT=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,dT=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(fT)}:Sf;function fT(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bo=Math.random().toString(36).slice(2),xi="__reactFiber$"+bo,ba="__reactProps$"+bo,Ki="__reactContainer$"+bo,Mf="__reactEvents$"+bo,hT="__reactListeners$"+bo,pT="__reactHandles$"+bo;function ts(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ug(t);t!==null;){if(n=t[xi])return n;t=Ug(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[xi]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function su(t){return t[ba]||null}var Ef=[],Gs=-1;function Br(t){return{current:t}}function gt(t){0>Gs||(t.current=Ef[Gs],Ef[Gs]=null,Gs--)}function ht(t,e){Gs++,Ef[Gs]=t.current,t.current=e}var Lr={},un=Br(Lr),Mn=Br(!1),us=Lr;function fo(t,e){var n=t.type.contextTypes;if(!n)return Lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Ac(){gt(Mn),gt(un)}function Fg(t,e,n){if(un.current!==Lr)throw Error(ne(168));ht(un,e),ht(Mn,n)}function Gx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,QE(t)||"Unknown",r));return Tt({},n,i)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,us=un.current,ht(un,t),ht(Mn,Mn.current),!0}function Og(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Gx(t,e,us),i.__reactInternalMemoizedMergedChildContext=t,gt(Mn),gt(un),ht(un,t)):gt(Mn),ht(Mn,n)}var Bi=null,ou=!1,Yu=!1;function Wx(t){Bi===null?Bi=[t]:Bi.push(t)}function mT(t){ou=!0,Wx(t)}function zr(){if(!Yu&&Bi!==null){Yu=!0;var t=0,e=it;try{var n=Bi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Bi=null,ou=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(t+1)),mx(lp,zr),r}finally{it=e,Yu=!1}}return null}var Ws=[],js=0,Cc=null,Rc=0,Wn=[],jn=0,ds=null,Vi=1,Hi="";function $r(t,e){Ws[js++]=Rc,Ws[js++]=Cc,Cc=t,Rc=e}function jx(t,e,n){Wn[jn++]=Vi,Wn[jn++]=Hi,Wn[jn++]=ds,ds=t;var i=Vi;t=Hi;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-ai(e)+r|n<<r|i,Hi=s+t}else Vi=1<<s|n<<r|i,Hi=t}function vp(t){t.return!==null&&($r(t,1),jx(t,1,0))}function _p(t){for(;t===Cc;)Cc=Ws[--js],Ws[js]=null,Rc=Ws[--js],Ws[js]=null;for(;t===ds;)ds=Wn[--jn],Wn[jn]=null,Hi=Wn[--jn],Wn[jn]=null,Vi=Wn[--jn],Wn[jn]=null}var Nn=null,Ln=null,_t=!1,ri=null;function Xx(t,e){var n=Yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Ln=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:Vi,overflow:Hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Ln=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wf(t){if(_t){var e=Ln;if(e){var n=e;if(!kg(t,e)){if(Tf(t))throw Error(ne(418));e=Ar(n.nextSibling);var i=Nn;e&&kg(t,e)?Xx(i,n):(t.flags=t.flags&-4097|2,_t=!1,Nn=t)}}else{if(Tf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,_t=!1,Nn=t}}}function Bg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function hl(t){if(t!==Nn)return!1;if(!_t)return Bg(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=Ln)){if(Tf(t))throw Yx(),Error(ne(418));for(;e;)Xx(t,e),e=Ar(e.nextSibling)}if(Bg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Nn?Ar(t.stateNode.nextSibling):null;return!0}function Yx(){for(var t=Ln;t;)t=Ar(t.nextSibling)}function ho(){Ln=Nn=null,_t=!1}function xp(t){ri===null?ri=[t]:ri.push(t)}var gT=nr.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zg(t){var e=t._init;return e(t._payload)}function qx(t){function e(h,m){if(t){var _=h.deletions;_===null?(h.deletions=[m],h.flags|=16):_.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=Pr(h,m),h.index=0,h.sibling=null,h}function s(h,m,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags|=2,m):_):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,_,M){return m===null||m.tag!==6?(m=ed(_,h.mode,M),m.return=h,m):(m=r(m,_),m.return=h,m)}function l(h,m,_,M){var w=_.type;return w===ks?u(h,m,_.props.children,M,_.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===pr&&zg(w)===m.type)?(M=r(m,_.props),M.ref=Oo(h,m,_),M.return=h,M):(M=rc(_.type,_.key,_.props,null,h.mode,M),M.ref=Oo(h,m,_),M.return=h,M)}function c(h,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=td(_,h.mode,M),m.return=h,m):(m=r(m,_.children||[]),m.return=h,m)}function u(h,m,_,M,w){return m===null||m.tag!==7?(m=ls(_,h.mode,M,w),m.return=h,m):(m=r(m,_),m.return=h,m)}function f(h,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ed(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case il:return _=rc(m.type,m.key,m.props,null,h.mode,_),_.ref=Oo(h,null,m),_.return=h,_;case Os:return m=td(m,h.mode,_),m.return=h,m;case pr:var M=m._init;return f(h,M(m._payload),_)}if(Ko(m)||Lo(m))return m=ls(m,h.mode,_,null),m.return=h,m;pl(h,m)}return null}function d(h,m,_,M){var w=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(h,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case il:return _.key===w?l(h,m,_,M):null;case Os:return _.key===w?c(h,m,_,M):null;case pr:return w=_._init,d(h,m,w(_._payload),M)}if(Ko(_)||Lo(_))return w!==null?null:u(h,m,_,M,null);pl(h,_)}return null}function p(h,m,_,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(_)||null,a(m,h,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case il:return h=h.get(M.key===null?_:M.key)||null,l(m,h,M,w);case Os:return h=h.get(M.key===null?_:M.key)||null,c(m,h,M,w);case pr:var E=M._init;return p(h,m,_,E(M._payload),w)}if(Ko(M)||Lo(M))return h=h.get(_)||null,u(m,h,M,w,null);pl(m,M)}return null}function v(h,m,_,M){for(var w=null,E=null,C=m,x=m=0,R=null;C!==null&&x<_.length;x++){C.index>x?(R=C,C=null):R=C.sibling;var D=d(h,C,_[x],M);if(D===null){C===null&&(C=R);break}t&&C&&D.alternate===null&&e(h,C),m=s(D,m,x),E===null?w=D:E.sibling=D,E=D,C=R}if(x===_.length)return n(h,C),_t&&$r(h,x),w;if(C===null){for(;x<_.length;x++)C=f(h,_[x],M),C!==null&&(m=s(C,m,x),E===null?w=C:E.sibling=C,E=C);return _t&&$r(h,x),w}for(C=i(h,C);x<_.length;x++)R=p(C,h,x,_[x],M),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?x:R.key),m=s(R,m,x),E===null?w=R:E.sibling=R,E=R);return t&&C.forEach(function(P){return e(h,P)}),_t&&$r(h,x),w}function y(h,m,_,M){var w=Lo(_);if(typeof w!="function")throw Error(ne(150));if(_=w.call(_),_==null)throw Error(ne(151));for(var E=w=null,C=m,x=m=0,R=null,D=_.next();C!==null&&!D.done;x++,D=_.next()){C.index>x?(R=C,C=null):R=C.sibling;var P=d(h,C,D.value,M);if(P===null){C===null&&(C=R);break}t&&C&&P.alternate===null&&e(h,C),m=s(P,m,x),E===null?w=P:E.sibling=P,E=P,C=R}if(D.done)return n(h,C),_t&&$r(h,x),w;if(C===null){for(;!D.done;x++,D=_.next())D=f(h,D.value,M),D!==null&&(m=s(D,m,x),E===null?w=D:E.sibling=D,E=D);return _t&&$r(h,x),w}for(C=i(h,C);!D.done;x++,D=_.next())D=p(C,h,x,D.value,M),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?x:D.key),m=s(D,m,x),E===null?w=D:E.sibling=D,E=D);return t&&C.forEach(function(k){return e(h,k)}),_t&&$r(h,x),w}function g(h,m,_,M){if(typeof _=="object"&&_!==null&&_.type===ks&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case il:e:{for(var w=_.key,E=m;E!==null;){if(E.key===w){if(w=_.type,w===ks){if(E.tag===7){n(h,E.sibling),m=r(E,_.props.children),m.return=h,h=m;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===pr&&zg(w)===E.type){n(h,E.sibling),m=r(E,_.props),m.ref=Oo(h,E,_),m.return=h,h=m;break e}n(h,E);break}else e(h,E);E=E.sibling}_.type===ks?(m=ls(_.props.children,h.mode,M,_.key),m.return=h,h=m):(M=rc(_.type,_.key,_.props,null,h.mode,M),M.ref=Oo(h,m,_),M.return=h,h=M)}return o(h);case Os:e:{for(E=_.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(h,m.sibling),m=r(m,_.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=td(_,h.mode,M),m.return=h,h=m}return o(h);case pr:return E=_._init,g(h,m,E(_._payload),M)}if(Ko(_))return v(h,m,_,M);if(Lo(_))return y(h,m,_,M);pl(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,_),m.return=h,h=m):(n(h,m),m=ed(_,h.mode,M),m.return=h,h=m),o(h)):n(h,m)}return g}var po=qx(!0),$x=qx(!1),Pc=Br(null),Dc=null,Xs=null,yp=null;function Sp(){yp=Xs=Dc=null}function Mp(t){var e=Pc.current;gt(Pc),t._currentValue=e}function Af(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function so(t,e){Dc=t,yp=Xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(yp!==t)if(t={context:t,memoizedValue:e,next:null},Xs===null){if(Dc===null)throw Error(ne(308));Xs=t,Dc.dependencies={lanes:0,firstContext:t}}else Xs=Xs.next=t;return e}var ns=null;function Ep(t){ns===null?ns=[t]:ns.push(t)}function Kx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ep(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function Tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ep(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cp(t,n)}}function Vg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lc(t,e,n,i){var r=t.updateQueue;mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=Tt({},f,d);break e;case 2:mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=f}}function Hg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Xa={},Ei=Br(Xa),Ca=Br(Xa),Ra=Br(Xa);function is(t){if(t===Xa)throw Error(ne(174));return t}function wp(t,e){switch(ht(Ra,e),ht(Ca,t),ht(Ei,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=of(e,t)}gt(Ei),ht(Ei,e)}function mo(){gt(Ei),gt(Ca),gt(Ra)}function Qx(t){is(Ra.current);var e=is(Ei.current),n=of(e,t.type);e!==n&&(ht(Ca,t),ht(Ei,n))}function Ap(t){Ca.current===t&&(gt(Ei),gt(Ca))}var St=Br(0);function Nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function bp(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var Jl=nr.ReactCurrentDispatcher,$u=nr.ReactCurrentBatchConfig,fs=0,Et=null,Vt=null,Xt=null,Ic=!1,ca=!1,Pa=0,vT=0;function en(){throw Error(ne(321))}function Cp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function Rp(t,e,n,i,r,s){if(fs=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?ST:MT,t=n(i,r),ca){s=0;do{if(ca=!1,Pa=0,25<=s)throw Error(ne(301));s+=1,Xt=Vt=null,e.updateQueue=null,Jl.current=ET,t=n(i,r)}while(ca)}if(Jl.current=Uc,e=Vt!==null&&Vt.next!==null,fs=0,Xt=Vt=Et=null,Ic=!1,e)throw Error(ne(300));return t}function Pp(){var t=Pa!==0;return Pa=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Et.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Kn(){if(Vt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=Xt===null?Et.memoizedState:Xt.next;if(e!==null)Xt=e,Vt=t;else{if(t===null)throw Error(ne(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Xt===null?Et.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function Da(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((fs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Et.lanes|=u,hs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,hs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Jx(){}function ey(t,e){var n=Et,i=Kn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,Dp(iy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,La(9,ny.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(ne(349));fs&30||ty(n,e,r)}return r}function ty(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ny(t,e,n,i){e.value=n,e.getSnapshot=i,ry(e)&&sy(t)}function iy(t,e,n){return n(function(){ry(e)&&sy(t)})}function ry(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function sy(t){var e=Zi(t,1);e!==null&&li(e,t,1,-1)}function Gg(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=yT.bind(null,Et,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function oy(){return Kn().memoizedState}function ec(t,e,n,i){var r=vi();Et.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function au(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&Cp(i,o.deps)){r.memoizedState=La(e,n,s,i);return}}Et.flags|=t,r.memoizedState=La(1|e,n,s,i)}function Wg(t,e){return ec(8390656,8,t,e)}function Dp(t,e){return au(2048,8,t,e)}function ay(t,e){return au(4,2,t,e)}function ly(t,e){return au(4,4,t,e)}function cy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uy(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,cy.bind(null,e,t),n)}function Lp(){}function dy(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function fy(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hy(t,e,n){return fs&21?(ui(n,e)||(n=_x(),Et.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function _T(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=$u.transition;$u.transition={};try{t(!1),e()}finally{it=n,$u.transition=i}}function py(){return Kn().memoizedState}function xT(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},my(t))gy(e,n);else if(n=Kx(t,e,n,i),n!==null){var r=hn();li(n,t,i,r),vy(n,e,i)}}function yT(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(my(t))gy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,Ep(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Kx(t,e,r,i),n!==null&&(r=hn(),li(n,t,i,r),vy(n,e,i))}}function my(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function gy(t,e){ca=Ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cp(t,n)}}var Uc={readContext:$n,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},ST={readContext:$n,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,cy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xT.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:Gg,useDebugValue:Lp,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=Gg(!1),e=t[0];return t=_T.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=vi();if(_t){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Yt===null)throw Error(ne(349));fs&30||ty(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wg(iy.bind(null,i,s,t),[t]),i.flags|=2048,La(9,ny.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Yt.identifierPrefix;if(_t){var n=Hi,i=Vi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MT={readContext:$n,useCallback:dy,useContext:$n,useEffect:Dp,useImperativeHandle:uy,useInsertionEffect:ay,useLayoutEffect:ly,useMemo:fy,useReducer:Ku,useRef:oy,useState:function(){return Ku(Da)},useDebugValue:Lp,useDeferredValue:function(t){var e=Kn();return hy(e,Vt.memoizedState,t)},useTransition:function(){var t=Ku(Da)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Jx,useSyncExternalStore:ey,useId:py,unstable_isNewReconciler:!1},ET={readContext:$n,useCallback:dy,useContext:$n,useEffect:Dp,useImperativeHandle:uy,useInsertionEffect:ay,useLayoutEffect:ly,useMemo:fy,useReducer:Zu,useRef:oy,useState:function(){return Zu(Da)},useDebugValue:Lp,useDeferredValue:function(t){var e=Kn();return Vt===null?e.memoizedState=t:hy(e,Vt.memoizedState,t)},useTransition:function(){var t=Zu(Da)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Jx,useSyncExternalStore:ey,useId:py,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?_s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Rr(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(li(e,t,r,i),Ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Rr(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(li(e,t,r,i),Ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Rr(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(li(e,t,i,n),Ql(e,t,i))}};function jg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function _y(t,e,n){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=En(e)?us:un.current,i=e.contextTypes,s=(i=i!=null)?fo(t,r):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Tp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=En(e)?us:un.current,r.context=fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lu.enqueueReplaceState(r,r.state,null),Lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=ZE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TT=typeof WeakMap=="function"?WeakMap:Map;function xy(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Oc||(Oc=!0,Bf=i),Rf(t,e)},n}function yy(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rf(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new TT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kT.bind(null,t,e,n),e.then(t,t))}function qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $g(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var wT=nr.ReactCurrentOwner,Sn=!1;function fn(t,e,n,i){e.child=t===null?$x(e,null,n,i):po(e,t.child,n,i)}function Kg(t,e,n,i,r){n=n.render;var s=e.ref;return so(e,r),i=Rp(t,e,n,i,s,r),n=Pp(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(_t&&n&&vp(e),e.flags|=1,fn(t,e,i,r),e.child)}function Zg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sy(t,e,s,i,r)):(t=rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(o,i)&&t.ref===e.ref)return Qi(t,e,r)}return e.flags|=1,t=Pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,Qi(t,e,r)}return Pf(t,e,n,i,r)}function My(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(qs,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(qs,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(qs,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(qs,Pn),Pn|=i;return fn(t,e,r,n),e.child}function Ey(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,i,r){var s=En(n)?us:un.current;return s=fo(e,s),so(e,r),n=Rp(t,e,n,i,s,r),i=Pp(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(_t&&i&&vp(e),e.flags|=1,fn(t,e,n,r),e.child)}function Qg(t,e,n,i,r){if(En(n)){var s=!0;bc(e)}else s=!1;if(so(e,r),e.stateNode===null)tc(t,e),_y(e,n,i),Cf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=En(n)?us:un.current,c=fo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Xg(e,o,i,c),mr=!1;var d=e.memoizedState;o.state=d,Lc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Mn.current||mr?(typeof u=="function"&&(bf(e,n,u,i),l=e.memoizedState),(a=mr||jg(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Zx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=En(n)?us:un.current,l=fo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Xg(e,o,i,l),mr=!1,d=e.memoizedState,o.state=d,Lc(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||Mn.current||mr?(typeof p=="function"&&(bf(e,n,p,i),v=e.memoizedState),(c=mr||jg(e,n,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Df(t,e,n,i,s,r)}function Df(t,e,n,i,r,s){Ey(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Og(e,n,!1),Qi(t,e,s);i=e.stateNode,wT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&Og(e,n,!0),e.child}function Ty(t){var e=t.stateNode;e.pendingContext?Fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fg(t,e.context,!1),wp(t,e.containerInfo)}function Jg(t,e,n,i,r){return ho(),xp(r),e.flags|=256,fn(t,e,n,i),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function wy(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=du(o,i,0,null),t=ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nf(n),e.memoizedState=Lf,t):Np(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lf,i}return s=t.child,t=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Np(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,i){return i!==null&&xp(i),po(e,t.child,null,n),t=Np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Qu(Error(ne(422))),ml(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=du({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=Nf(o),e.memoizedState=Lf,s);if(!(e.mode&1))return ml(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Qu(s,i,void 0),ml(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),li(i,t,r,-1))}return Bp(),i=Qu(Error(ne(421))),ml(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=BT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Ar(r.nextSibling),Nn=e,_t=!0,ri=null,t!==null&&(Wn[jn++]=Vi,Wn[jn++]=Hi,Wn[jn++]=ds,Vi=t.id,Hi=t.overflow,ds=e),e=Np(e,i.children),e.flags|=4096,e)}function e0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Af(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ay(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,n,e);else if(t.tag===19)e0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bT(t,e,n){switch(e.tag){case 3:Ty(e),ho();break;case 5:Qx(e);break;case 1:En(e.type)&&bc(e);break;case 4:wp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?wy(t,e,n):(ht(St,St.current&1),t=Qi(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ay(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,My(t,e,n)}return Qi(t,e,n)}var by,If,Cy,Ry;by=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};If=function(){};Cy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,is(Ei.current);var s=null;switch(n){case"input":r=tf(t,r),i=tf(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=sf(t,r),i=sf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wc)}af(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(va.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ry=function(t,e,n,i){n!==i&&(e.flags|=4)};function ko(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CT(t,e,n){var i=e.pendingProps;switch(_p(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return En(e.type)&&Ac(),tn(e),null;case 3:return i=e.stateNode,mo(),gt(Mn),gt(un),bp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Hf(ri),ri=null))),If(t,e),tn(e),null;case 5:Ap(e);var r=is(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Cy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return tn(e),null}if(t=is(Ei.current),hl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)mt(Qo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":cg(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":dg(i,s),mt("invalid",i)}af(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",""+a]):va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":rl(i),ug(i,s,!0);break;case"textarea":rl(i),fg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ix(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[ba]=i,by(t,e,!1,!1),e.stateNode=t;e:{switch(o=lf(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)mt(Qo[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":cg(t,i),r=tf(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":dg(t,i),r=sf(t,i),mt("invalid",t);break;default:r=i}af(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ox(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_a(t,l):typeof l=="number"&&_a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&ip(t,s,l,o))}switch(n){case"input":rl(t),ug(t,i,!1);break;case"textarea":rl(t),fg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?to(t,!!i.multiple,s,!1):i.defaultValue!=null&&to(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)Ry(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=is(Ra.current),is(Ei.current),hl(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:fl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return tn(e),null;case 13:if(gt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Ln!==null&&e.mode&1&&!(e.flags&128))Yx(),ho(),e.flags|=98560,s=!1;else if(s=hl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[xi]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ri!==null&&(Hf(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ht===0&&(Ht=3):Bp())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return mo(),If(t,e),t===null&&wa(e.stateNode.containerInfo),tn(e),null;case 10:return Mp(e.type._context),tn(e),null;case 17:return En(e.type)&&Ac(),tn(e),null;case 19:if(gt(St),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ko(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nc(t),o!==null){for(e.flags|=128,ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>vo&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return tn(e),null}else 2*It()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return kp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function RT(t,e){switch(_p(e),e.tag){case 1:return En(e.type)&&Ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),gt(Mn),gt(un),bp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ap(e),null;case 13:if(gt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(St),null;case 4:return mo(),null;case 10:return Mp(e.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var gl=!1,on=!1,PT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Uf(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var t0=!1;function DT(t,e){if(_f=Mc,t=Ix(),gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xf={focusedElem:t,selectionRange:n},Mc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ni(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=t0,t0=!1,v}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Uf(e,n,s)}r=r.next}while(r!==i)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Py(t){var e=t.alternate;e!==null&&(t.alternate=null,Py(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[ba],delete e[Mf],delete e[hT],delete e[pT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dy(t){return t.tag===5||t.tag===3||t.tag===4}function n0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(i!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}var qt=null,ii=!1;function or(t,e,n){for(n=n.child;n!==null;)Ly(t,e,n),n=n.sibling}function Ly(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:on||Ys(n,e);case 6:var i=qt,r=ii;qt=null,or(t,e,n),qt=i,ii=r,qt!==null&&(ii?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ii?(t=qt,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),Ma(t)):Xu(qt,n.stateNode));break;case 4:i=qt,r=ii,qt=n.stateNode.containerInfo,ii=!0,or(t,e,n),qt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uf(n,e,o),r=r.next}while(r!==i)}or(t,e,n);break;case 1:if(!on&&(Ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,or(t,e,n),on=i):or(t,e,n);break;default:or(t,e,n)}}function i0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PT),e.forEach(function(i){var r=zT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,ii=!1;break e;case 3:qt=a.stateNode.containerInfo,ii=!0;break e;case 4:qt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(qt===null)throw Error(ne(160));Ly(s,o,r),qt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ny(e,t),e=e.sibling}function Ny(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),pi(t),i&4){try{ua(3,t,t.return),cu(3,t)}catch(y){Ct(t,t.return,y)}try{ua(5,t,t.return)}catch(y){Ct(t,t.return,y)}}break;case 1:Zn(e,t),pi(t),i&512&&n!==null&&Ys(n,n.return);break;case 5:if(Zn(e,t),pi(t),i&512&&n!==null&&Ys(n,n.return),t.flags&32){var r=t.stateNode;try{_a(r,"")}catch(y){Ct(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tx(r,s),lf(a,o);var c=lf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?ox(r,f):u==="dangerouslySetInnerHTML"?rx(r,f):u==="children"?_a(r,f):ip(r,u,f,c)}switch(a){case"input":nf(r,s);break;case"textarea":nx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?to(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?to(r,!!s.multiple,s.defaultValue,!0):to(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(y){Ct(t,t.return,y)}}break;case 6:if(Zn(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ct(t,t.return,y)}}break;case 3:if(Zn(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(y){Ct(t,t.return,y)}break;case 4:Zn(e,t),pi(t);break;case 13:Zn(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fp=It())),i&4&&i0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,Zn(e,t),on=c):Zn(e,t),pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(f=Ee=u;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:ua(4,d,d.return);break;case 1:Ys(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Ct(i,n,y)}}break;case 5:Ys(d,d.return);break;case 22:if(d.memoizedState!==null){s0(f);continue}}p!==null?(p.return=d,Ee=p):s0(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sx("display",o))}catch(y){Ct(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Ct(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Zn(e,t),pi(t),i&4&&i0(t);break;case 21:break;default:Zn(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dy(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_a(r,""),i.flags&=-33);var s=n0(t);kf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=n0(t);Of(t,a,o);break;default:throw Error(ne(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LT(t,e,n){Ee=t,Iy(t)}function Iy(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||gl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=gl;var c=on;if(gl=o,(on=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?o0(r):l!==null?(l.return=o,Ee=l):o0(r);for(;s!==null;)Ee=s,Iy(s),s=s.sibling;Ee=r,gl=a,on=c}r0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):r0(t)}}function r0(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ma(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}on||e.flags&512&&Ff(e)}catch(d){Ct(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function s0(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function o0(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Ff(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{Ff(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var NT=Math.ceil,Fc=nr.ReactCurrentDispatcher,Ip=nr.ReactCurrentOwner,qn=nr.ReactCurrentBatchConfig,Je=0,Yt=null,Ot=null,Zt=0,Pn=0,qs=Br(0),Ht=0,Na=null,hs=0,uu=0,Up=0,da=null,yn=null,Fp=0,vo=1/0,ki=null,Oc=!1,Bf=null,Cr=null,vl=!1,Sr=null,kc=0,fa=0,zf=null,nc=-1,ic=0;function hn(){return Je&6?It():nc!==-1?nc:nc=It()}function Rr(t){return t.mode&1?Je&2&&Zt!==0?Zt&-Zt:gT.transition!==null?(ic===0&&(ic=_x()),ic):(t=it,t!==0||(t=window.event,t=t===void 0?16:wx(t.type)),t):1}function li(t,e,n,i){if(50<fa)throw fa=0,zf=null,Error(ne(185));Ga(t,n,i),(!(Je&2)||t!==Yt)&&(t===Yt&&(!(Je&2)&&(uu|=n),Ht===4&&_r(t,Zt)),Tn(t,i),n===1&&Je===0&&!(e.mode&1)&&(vo=It()+500,ou&&zr()))}function Tn(t,e){var n=t.callbackNode;g1(t,e);var i=Sc(t,t===Yt?Zt:0);if(i===0)n!==null&&mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mg(n),e===1)t.tag===0?mT(a0.bind(null,t)):Wx(a0.bind(null,t)),dT(function(){!(Je&6)&&zr()}),n=null;else{switch(xx(i)){case 1:n=lp;break;case 4:n=gx;break;case 16:n=yc;break;case 536870912:n=vx;break;default:n=yc}n=Hy(n,Uy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uy(t,e){if(nc=-1,ic=0,Je&6)throw Error(ne(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var i=Sc(t,t===Yt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bc(t,i);else{e=i;var r=Je;Je|=2;var s=Oy();(Yt!==t||Zt!==e)&&(ki=null,vo=It()+500,as(t,e));do try{FT();break}catch(a){Fy(t,a)}while(!0);Sp(),Fc.current=s,Je=r,Ot!==null?e=0:(Yt=null,Zt=0,e=Ht)}if(e!==0){if(e===2&&(r=hf(t),r!==0&&(i=r,e=Vf(t,r))),e===1)throw n=Na,as(t,0),_r(t,i),Tn(t,It()),n;if(e===6)_r(t,i);else{if(r=t.current.alternate,!(i&30)&&!IT(r)&&(e=Bc(t,i),e===2&&(s=hf(t),s!==0&&(i=s,e=Vf(t,s))),e===1))throw n=Na,as(t,0),_r(t,i),Tn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Kr(t,yn,ki);break;case 3:if(_r(t,i),(i&130023424)===i&&(e=Fp+500-It(),10<e)){if(Sc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sf(Kr.bind(null,t,yn,ki),e);break}Kr(t,yn,ki);break;case 4:if(_r(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NT(i/1960))-i,10<i){t.timeoutHandle=Sf(Kr.bind(null,t,yn,ki),i);break}Kr(t,yn,ki);break;case 5:Kr(t,yn,ki);break;default:throw Error(ne(329))}}}return Tn(t,It()),t.callbackNode===n?Uy.bind(null,t):null}function Vf(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=Bc(t,e),t!==2&&(e=yn,yn=n,e!==null&&Hf(e)),t}function Hf(t){yn===null?yn=t:yn.push.apply(yn,t)}function IT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~Up,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function a0(t){if(Je&6)throw Error(ne(327));oo();var e=Sc(t,0);if(!(e&1))return Tn(t,It()),null;var n=Bc(t,e);if(t.tag!==0&&n===2){var i=hf(t);i!==0&&(e=i,n=Vf(t,i))}if(n===1)throw n=Na,as(t,0),_r(t,e),Tn(t,It()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,yn,ki),Tn(t,It()),null}function Op(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(vo=It()+500,ou&&zr())}}function ps(t){Sr!==null&&Sr.tag===0&&!(Je&6)&&oo();var e=Je;Je|=1;var n=qn.transition,i=it;try{if(qn.transition=null,it=1,t)return t()}finally{it=i,qn.transition=n,Je=e,!(Je&6)&&zr()}}function kp(){Pn=qs.current,gt(qs)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uT(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(_p(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ac();break;case 3:mo(),gt(Mn),gt(un),bp();break;case 5:Ap(i);break;case 4:mo();break;case 13:gt(St);break;case 19:gt(St);break;case 10:Mp(i.type._context);break;case 22:case 23:kp()}n=n.return}if(Yt=t,Ot=t=Pr(t.current,null),Zt=Pn=e,Ht=0,Na=null,Up=uu=hs=0,yn=da=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ns=null}return t}function Fy(t,e){do{var n=Ot;try{if(Sp(),Jl.current=Uc,Ic){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ic=!1}if(fs=0,Xt=Vt=Et=null,ca=!1,Pa=0,Ip.current=null,n===null||n.return===null){Ht=1,Na=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=qg(o);if(p!==null){p.flags&=-257,$g(p,o,a,s,e),p.mode&1&&Yg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Yg(s,c,e),Bp();break e}l=Error(ne(426))}}else if(_t&&a.mode&1){var g=qg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),$g(g,o,a,s,e),xp(go(l,a));break e}}s=l=go(l,a),Ht!==4&&(Ht=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=xy(s,l,e);Vg(s,h);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Cr===null||!Cr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=yy(s,a,e);Vg(s,M);break e}}s=s.return}while(s!==null)}By(n)}catch(w){e=w,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function Oy(){var t=Fc.current;return Fc.current=Uc,t===null?Uc:t}function Bp(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Yt===null||!(hs&268435455)&&!(uu&268435455)||_r(Yt,Zt)}function Bc(t,e){var n=Je;Je|=2;var i=Oy();(Yt!==t||Zt!==e)&&(ki=null,as(t,e));do try{UT();break}catch(r){Fy(t,r)}while(!0);if(Sp(),Je=n,Fc.current=i,Ot!==null)throw Error(ne(261));return Yt=null,Zt=0,Ht}function UT(){for(;Ot!==null;)ky(Ot)}function FT(){for(;Ot!==null&&!a1();)ky(Ot)}function ky(t){var e=Vy(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?By(t):Ot=e,Ip.current=null}function By(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RT(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Ot=null;return}}else if(n=CT(n,e,Pn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Ht===0&&(Ht=5)}function Kr(t,e,n){var i=it,r=qn.transition;try{qn.transition=null,it=1,OT(t,e,n,i)}finally{qn.transition=r,it=i}return null}function OT(t,e,n,i){do oo();while(Sr!==null);if(Je&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(v1(t,s),t===Yt&&(Ot=Yt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,Hy(yc,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=it;it=1;var a=Je;Je|=4,Ip.current=null,DT(t,n),Ny(n,t),iT(xf),Mc=!!_f,xf=_f=null,t.current=n,LT(n),l1(),Je=a,it=o,qn.transition=s}else t.current=n;if(vl&&(vl=!1,Sr=t,kc=r),s=t.pendingLanes,s===0&&(Cr=null),d1(n.stateNode),Tn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Oc)throw Oc=!1,t=Bf,Bf=null,t;return kc&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===zf?fa++:(fa=0,zf=t):fa=0,zr(),null}function oo(){if(Sr!==null){var t=xx(kc),e=qn.transition,n=it;try{if(qn.transition=null,it=16>t?16:t,Sr===null)var i=!1;else{if(t=Sr,Sr=null,kc=0,Je&6)throw Error(ne(331));var r=Je;for(Je|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:ua(8,u,s)}var f=u.child;if(f!==null)f.return=u,Ee=f;else for(;Ee!==null;){u=Ee;var d=u.sibling,p=u.return;if(Py(u),u===c){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=m;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cu(9,a)}}catch(w){Ct(a,a.return,w)}if(a===o){Ee=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ee=M;break e}Ee=a.return}}if(Je=r,zr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(tu,t)}catch{}i=!0}return i}finally{it=n,qn.transition=e}}return!1}function l0(t,e,n){e=go(n,e),e=xy(t,e,1),t=br(t,e,1),e=hn(),t!==null&&(Ga(t,1,e),Tn(t,e))}function Ct(t,e,n){if(t.tag===3)l0(t,t,n);else for(;e!==null;){if(e.tag===3){l0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=go(n,t),t=yy(e,t,1),e=br(e,t,1),t=hn(),e!==null&&(Ga(e,1,t),Tn(e,t));break}}e=e.return}}function kT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Zt&n)===n&&(Ht===4||Ht===3&&(Zt&130023424)===Zt&&500>It()-Fp?as(t,0):Up|=n),Tn(t,e)}function zy(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=hn();t=Zi(t,e),t!==null&&(Ga(t,e,n),Tn(t,n))}function BT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zy(t,n)}function zT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),zy(t,n)}var Vy;Vy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,bT(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,_t&&e.flags&1048576&&jx(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tc(t,e),t=e.pendingProps;var r=fo(e,un.current);so(e,n),r=Rp(null,e,i,t,r,n);var s=Pp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tp(e),r.updater=lu,e.stateNode=r,r._reactInternals=e,Cf(e,i,t,n),e=Df(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&vp(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HT(i),t=ni(i,t),r){case 0:e=Pf(null,e,i,t,n);break e;case 1:e=Qg(null,e,i,t,n);break e;case 11:e=Kg(null,e,i,t,n);break e;case 14:e=Zg(null,e,i,ni(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Qg(t,e,i,r,n);case 3:e:{if(Ty(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Zx(t,e),Lc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=go(Error(ne(423)),e),e=Jg(t,e,i,n,r);break e}else if(i!==r){r=go(Error(ne(424)),e),e=Jg(t,e,i,n,r);break e}else for(Ln=Ar(e.stateNode.containerInfo.firstChild),Nn=e,_t=!0,ri=null,n=$x(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=Qi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return Qx(e),t===null&&wf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yf(i,r)?o=null:s!==null&&yf(i,s)&&(e.flags|=32),Ey(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&wf(e),null;case 13:return wy(t,e,n);case 4:return wp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=po(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Kg(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Pc,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!Mn.current){e=Qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Af(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Af(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,n),r=$n(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),Zg(t,e,i,r,n);case 15:return Sy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),tc(t,e),e.tag=1,En(i)?(t=!0,bc(e)):t=!1,so(e,n),_y(e,i,r),Cf(e,i,r,n),Df(null,e,i,!0,t,n);case 19:return Ay(t,e,n);case 22:return My(t,e,n)}throw Error(ne(156,e.tag))};function Hy(t,e){return mx(t,e)}function VT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,e,n,i){return new VT(t,e,n,i)}function zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HT(t){if(typeof t=="function")return zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sp)return 11;if(t===op)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")zp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return ls(n.children,r,s,e);case rp:o=8,r|=8;break;case Zd:return t=Yn(12,n,e,r|2),t.elementType=Zd,t.lanes=s,t;case Qd:return t=Yn(13,n,e,r),t.elementType=Qd,t.lanes=s,t;case Jd:return t=Yn(19,n,e,r),t.elementType=Jd,t.lanes=s,t;case Q_:return du(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K_:o=10;break e;case Z_:o=9;break e;case sp:o=11;break e;case op:o=14;break e;case pr:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ls(t,e,n,i){return t=Yn(7,t,i,e),t.lanes=n,t}function du(t,e,n,i){return t=Yn(22,t,i,e),t.elementType=Q_,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=Yn(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=Yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vp(t,e,n,i,r,s,o,a,l){return t=new GT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tp(s),t}function WT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gy(t){if(!t)return Lr;t=t._reactInternals;e:{if(_s(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(En(n))return Gx(t,n,e)}return e}function Wy(t,e,n,i,r,s,o,a,l){return t=Vp(n,i,!0,t,r,s,o,a,l),t.context=Gy(null),n=t.current,i=hn(),r=Rr(n),s=Wi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Ga(t,r,i),Tn(t,i),t}function fu(t,e,n,i){var r=e.current,s=hn(),o=Rr(r);return n=Gy(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,o),t!==null&&(li(t,r,o,s),Ql(t,r,o)),o}function zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function c0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hp(t,e){c0(t,e),(t=t.alternate)&&c0(t,e)}function jT(){return null}var jy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gp(t){this._internalRoot=t}hu.prototype.render=Gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));fu(t,e,null,null)};hu.prototype.unmount=Gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ps(function(){fu(null,t,null,null)}),e[Ki]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&Tx(t)}};function Wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u0(){}function XT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zc(o);s.call(c)}}var o=Wy(e,i,t,0,null,!1,!1,"",u0);return t._reactRootContainer=o,t[Ki]=o.current,wa(t.nodeType===8?t.parentNode:t),ps(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=zc(l);a.call(c)}}var l=Vp(t,0,!1,null,null,!1,!1,"",u0);return t._reactRootContainer=l,t[Ki]=l.current,wa(t.nodeType===8?t.parentNode:t),ps(function(){fu(e,l,n,i)}),l}function mu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zc(o);a.call(l)}}fu(e,o,t,r)}else o=XT(n,e,t,r,i);return zc(o)}yx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(cp(e,n|1),Tn(e,It()),!(Je&6)&&(vo=It()+500,zr()))}break;case 13:ps(function(){var i=Zi(t,1);if(i!==null){var r=hn();li(i,t,1,r)}}),Hp(t,1)}};up=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=hn();li(e,t,134217728,n)}Hp(t,134217728)}};Sx=function(t){if(t.tag===13){var e=Rr(t),n=Zi(t,e);if(n!==null){var i=hn();li(n,t,e,i)}Hp(t,e)}};Mx=function(){return it};Ex=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};uf=function(t,e,n){switch(e){case"input":if(nf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=su(i);if(!r)throw Error(ne(90));ex(i),nf(i,r)}}}break;case"textarea":nx(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};cx=Op;ux=ps;var YT={usingClientEntryPoint:!1,Events:[ja,Hs,su,ax,lx,Op]},Bo={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qT={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hx(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||jT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{tu=_l.inject(qT),Mi=_l}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(e))throw Error(ne(200));return WT(t,e,null,n)};kn.createRoot=function(t,e){if(!Wp(t))throw Error(ne(299));var n=!1,i="",r=jy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vp(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,wa(t.nodeType===8?t.parentNode:t),new Gp(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=hx(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return ps(t)};kn.hydrate=function(t,e,n){if(!pu(e))throw Error(ne(200));return mu(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Wp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=jy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wy(e,null,t,1,n??null,r,!1,s,o),t[Ki]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hu(e)};kn.render=function(t,e,n){if(!pu(e))throw Error(ne(200));return mu(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!pu(t))throw Error(ne(40));return t._reactRootContainer?(ps(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};kn.unstable_batchedUpdates=Op;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return mu(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function Xy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xy)}catch(t){console.error(t)}}Xy(),X_.exports=kn;var $T=X_.exports,d0=$T;$d.createRoot=d0.createRoot,$d.hydrateRoot=d0.hydrateRoot;/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),f0=t=>{const e=ZT(t);return e.charAt(0).toUpperCase()+e.slice(1)},Yy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),QT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=ae.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ae.createElement("svg",{ref:l,...JT,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Yy("lucide",r),...!s&&!QT(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>ae.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(t,e)=>{const n=ae.forwardRef(({className:i,...r},s)=>ae.createElement(ew,{ref:s,iconNode:e,className:Yy(`lucide-${KT(f0(t))}`,`lucide-${t}`,i),...r}));return n.displayName=f0(t),n};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],sc=Ke("arrow-right",tw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],iw=Ke("backpack",nw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],sw=Ke("badge-check",rw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]],qy=Ke("battery-charging",ow);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],jp=Ke("bot",aw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],cw=Ke("box",lw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dw=Ke("circle-check",uw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],hw=Ke("clock-3",fw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],mw=Ke("cpu",pw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vw=Ke("eye",gw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],xw=Ke("factory",_w);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Sw=Ke("hand",yw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Xp=Ke("heart",Mw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Tw=Ke("layers",Ew);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Aw=Ke("lightbulb",ww);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],h0=Ke("mail",bw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Rw=Ke("menu",Cw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Dw=Ke("message-circle",Pw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Nw=Ke("monitor",Lw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Uw=Ke("moon",Iw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],Ow=Ke("mouse-pointer-click",Fw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]],Bw=Ke("orbit",kw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],Vw=Ke("plug-zap",zw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],$y=Ke("radio",Hw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ww=Ke("refresh-cw",Gw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gu=Ke("shield-check",jw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vu=Ke("sparkles",Xw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],qw=Ke("star",Yw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Kw=Ke("sun",$w);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Qw=Ke("target",Zw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],eA=Ke("truck",Jw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],nA=Ke("volume-2",tA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],rA=Ke("wrench",iA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yp=Ke("x",sA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ky=Ke("zap",oA),aA="/assets/header-logo-new-DQYqsBHg.png";function qp({links:t,ariaLabel:e,onNavigate:n,isHome:i=!1,theme:r,onToggleTheme:s,promoText:o,tagline:a}){const[l,c]=ae.useState(!1);ae.useEffect(()=>{c(!1)},[e]);const u=(p,v)=>{p.preventDefault(),c(!1),n(v)},f=()=>{c(!1)},d=i?"#home":"/";return b.jsxs("header",{className:"topbar",children:[o?b.jsx("div",{className:"promo-bar",children:o}):null,b.jsxs("div",{className:"navbar",children:[b.jsxs("div",{className:"navbar-row",children:[b.jsx("a",{className:"brand-lockup",href:d,"aria-label":"RoboMitra home",onClick:p=>u(p,"/"),children:b.jsx("img",{className:"brand-logo-image",src:aA,alt:a?`RoboMitra ${a}`:"RoboMitra"})}),b.jsx("button",{type:"button",className:"menu-toggle","aria-expanded":l,"aria-controls":"primary-navigation","aria-label":l?"Close menu":"Open menu",onClick:()=>c(p=>!p),children:l?b.jsx(Yp,{size:20}):b.jsx(Rw,{size:20})})]}),b.jsxs("nav",{id:"primary-navigation",className:`nav-links ${l?"nav-links-open":""}`,"aria-label":e,children:[b.jsxs("button",{type:"button",className:"theme-toggle",onClick:s,"aria-label":`Switch to ${r==="dark"?"light":"dark"} mode`,children:[r==="dark"?b.jsx(Kw,{size:18}):b.jsx(Uw,{size:18}),b.jsx("span",{children:r==="dark"?"Light":"Dark"})]}),t.map(({href:p,label:v,external:y})=>b.jsx("a",{className:y?"nav-link nav-link-cta":"nav-link",href:p,target:y?"_blank":void 0,rel:y?"noreferrer":void 0,onClick:y?f:g=>u(g,p),children:v},`${p}-${v}`))]})]})]})}const $p=ae.createContext({});function Kp(t){const e=ae.useRef(null);return e.current===null&&(e.current=t()),e.current}const _u=ae.createContext(null),Zp=ae.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class lA extends ae.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function cA({children:t,isPresent:e}){const n=ae.useId(),i=ae.useRef(null),r=ae.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ae.useContext(Zp);return ae.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),b.jsx(lA,{isPresent:e,childRef:i,sizeRef:r,children:ae.cloneElement(t,{ref:i})})}const uA=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Kp(dA),l=ae.useId(),c=ae.useCallback(f=>{a.set(f,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=ae.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return ae.useMemo(()=>{a.forEach((f,d)=>a.set(d,!1))},[n]),ae.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=b.jsx(cA,{isPresent:n,children:t})),b.jsx(_u.Provider,{value:u,children:t})};function dA(){return new Map}function Zy(t=!0){const e=ae.useContext(_u);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ae.useId();ae.useEffect(()=>{t&&r(s)},[t]);const o=ae.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const xl=t=>t.key||"";function p0(t){const e=[];return ae.Children.forEach(t,n=>{ae.isValidElement(n)&&e.push(n)}),e}const Qp=typeof window<"u",Qy=Qp?ae.useLayoutEffect:ae.useEffect,fA=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=Zy(o),c=ae.useMemo(()=>p0(t),[t]),u=o&&!a?[]:c.map(xl),f=ae.useRef(!0),d=ae.useRef(c),p=Kp(()=>new Map),[v,y]=ae.useState(c),[g,h]=ae.useState(c);Qy(()=>{f.current=!1,d.current=c;for(let M=0;M<g.length;M++){const w=xl(g[M]);u.includes(w)?p.delete(w):p.get(w)!==!0&&p.set(w,!1)}},[g,u.length,u.join("-")]);const m=[];if(c!==v){let M=[...c];for(let w=0;w<g.length;w++){const E=g[w],C=xl(E);u.includes(C)||(M.splice(w,0,E),m.push(E))}s==="wait"&&m.length&&(M=m),h(p0(M)),y(c);return}const{forceRender:_}=ae.useContext($p);return b.jsx(b.Fragment,{children:g.map(M=>{const w=xl(M),E=o&&!a?!1:c===g||u.includes(w),C=()=>{if(p.has(w))p.set(w,!0);else return;let x=!0;p.forEach(R=>{R||(x=!1)}),x&&(_==null||_(),h(d.current),o&&(l==null||l()),i&&i())};return b.jsx(uA,{isPresent:E,initial:!f.current||n?void 0:!1,custom:E?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:E?void 0:C,children:M},w)})})},In=t=>t;let Jy=In;function Jp(t){let e;return()=>(e===void 0&&(e=t()),e)}const _o=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},ji=t=>t*1e3,Xi=t=>t/1e3,hA={useManualTiming:!1};function pA(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const p=f&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const yl=["read","resolveKeyframes","update","preRender","render","postRender"],mA=40;function eS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=yl.reduce((h,m)=>(h[m]=pA(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:d}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,mA),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},v=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:yl.reduce((h,m)=>{const _=o[m];return h[m]=(M,w=!1,E=!1)=>(n||v(),_.schedule(M,w,E)),h},{}),cancel:h=>{for(let m=0;m<yl.length;m++)o[yl[m]].cancel(h)},state:r,steps:o}}const{schedule:vt,cancel:Nr,state:$t,steps:nd}=eS(typeof requestAnimationFrame<"u"?requestAnimationFrame:In,!0),tS=ae.createContext({strict:!1}),m0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},xo={};for(const t in m0)xo[t]={isEnabled:e=>m0[t].some(n=>!!e[n])};function gA(t){for(const e in t)xo[e]={...xo[e],...t[e]}}const vA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||vA.has(t)}let nS=t=>!Vc(t);function _A(t){t&&(nS=e=>e.startsWith("on")?!Vc(e):t(e))}try{_A(require("@emotion/is-prop-valid").default)}catch{}function xA(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(nS(r)||n===!0&&Vc(r)||!e&&!Vc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function yA(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const xu=ae.createContext({});function Ia(t){return typeof t=="string"||Array.isArray(t)}function yu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const em=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tm=["initial",...em];function Su(t){return yu(t.animate)||tm.some(e=>Ia(t[e]))}function iS(t){return!!(Su(t)||t.variants)}function SA(t,e){if(Su(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ia(n)?n:void 0,animate:Ia(i)?i:void 0}}return t.inherit!==!1?e:{}}function MA(t){const{initial:e,animate:n}=SA(t,ae.useContext(xu));return ae.useMemo(()=>({initial:e,animate:n}),[g0(e),g0(n)])}function g0(t){return Array.isArray(t)?t.join(" "):t}const EA=Symbol.for("motionComponentSymbol");function $s(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function TA(t,e,n){return ae.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):$s(n)&&(n.current=i))},[e])}const nm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),wA="framerAppearId",rS="data-"+nm(wA),{schedule:im}=eS(queueMicrotask,!1),sS=ae.createContext({});function AA(t,e,n,i,r){var s,o;const{visualElement:a}=ae.useContext(xu),l=ae.useContext(tS),c=ae.useContext(_u),u=ae.useContext(Zp).reducedMotion,f=ae.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=f.current,p=ae.useContext(sS);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&bA(f.current,n,r,p);const v=ae.useRef(!1);ae.useInsertionEffect(()=>{d&&v.current&&d.update(n,c)});const y=n[rS],g=ae.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return Qy(()=>{d&&(v.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),im.render(d.render),g.current&&d.animationState&&d.animationState.animateChanges())}),ae.useEffect(()=>{d&&(!g.current&&d.animationState&&d.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,y)}),g.current=!1))}),d}function bA(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:oS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&$s(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function oS(t){if(t)return t.options.allowProjection!==!1?t.projection:oS(t.parent)}function CA({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&gA(t);function a(c,u){let f;const d={...ae.useContext(Zp),...c,layoutId:RA(c)},{isStatic:p}=d,v=MA(c),y=i(c,p);if(!p&&Qp){PA();const g=DA(d);f=g.MeasureLayout,v.visualElement=AA(r,y,d,e,g.ProjectionNode)}return b.jsxs(xu.Provider,{value:v,children:[f&&v.visualElement?b.jsx(f,{visualElement:v.visualElement,...d}):null,n(r,c,TA(y,v.visualElement,u),y,p,v.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ae.forwardRef(a);return l[EA]=r,l}function RA({layoutId:t}){const e=ae.useContext($p).id;return e&&t!==void 0?e+"-"+t:t}function PA(t,e){ae.useContext(tS).strict}function DA(t){const{drag:e,layout:n}=xo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const LA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function rm(t){return typeof t!="string"||t.includes("-")?!1:!!(LA.indexOf(t)>-1||/[A-Z]/u.test(t))}function v0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function sm(t,e,n,i){if(typeof e=="function"){const[r,s]=v0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=v0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Gf=t=>Array.isArray(t),NA=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),IA=t=>Gf(t)?t[t.length-1]||0:t,an=t=>!!(t&&t.getVelocity);function oc(t){const e=an(t)?t.get():t;return NA(e)?e.toValue():e}function UA({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:FA(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const aS=t=>(e,n)=>{const i=ae.useContext(xu),r=ae.useContext(_u),s=()=>UA(t,e,i,r);return n?s():Kp(s)};function FA(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=oc(s[d]);let{initial:o,animate:a}=t;const l=Su(t),c=iS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!yu(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const v=sm(t,d[p]);if(v){const{transitionEnd:y,transition:g,...h}=v;for(const m in h){let _=h[m];if(Array.isArray(_)){const M=u?_.length-1:0;_=_[M]}_!==null&&(r[m]=_)}for(const m in y)r[m]=y[m]}}}return r}const Co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xs=new Set(Co),lS=t=>e=>typeof e=="string"&&e.startsWith(t),cS=lS("--"),OA=lS("var(--"),om=t=>OA(t)?kA.test(t.split("/*")[0].trim()):!1,kA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,uS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ji=(t,e,n)=>n>e?e:n<t?t:n,Ro={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ua={...Ro,transform:t=>Ji(0,1,t)},Sl={...Ro,default:1},Ya=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),hr=Ya("deg"),Ti=Ya("%"),Ce=Ya("px"),BA=Ya("vh"),zA=Ya("vw"),_0={...Ti,parse:t=>Ti.parse(t)/100,transform:t=>Ti.transform(t*100)},VA={borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,backgroundPositionX:Ce,backgroundPositionY:Ce},HA={rotate:hr,rotateX:hr,rotateY:hr,rotateZ:hr,scale:Sl,scaleX:Sl,scaleY:Sl,scaleZ:Sl,skew:hr,skewX:hr,skewY:hr,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:Ua,originX:_0,originY:_0,originZ:Ce},x0={...Ro,transform:Math.round},am={...VA,...HA,zIndex:x0,size:Ce,fillOpacity:Ua,strokeOpacity:Ua,numOctaves:x0},GA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},WA=Co.length;function jA(t,e,n){let i="",r=!0;for(let s=0;s<WA;s++){const o=Co[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=uS(a,am[o]);if(!l){r=!1;const u=GA[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function lm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(xs.has(l)){o=!0;continue}else if(cS(l)){r[l]=c;continue}else{const u=uS(c,am[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=jA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const XA={offset:"stroke-dashoffset",array:"stroke-dasharray"},YA={offset:"strokeDashoffset",array:"strokeDasharray"};function qA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?XA:YA;t[s.offset]=Ce.transform(-i);const o=Ce.transform(e),a=Ce.transform(n);t[s.array]=`${o} ${a}`}function y0(t,e,n){return typeof t=="string"?t:Ce.transform(e+n*t)}function $A(t,e,n){const i=y0(e,t.x,t.width),r=y0(n,t.y,t.height);return`${i} ${r}`}function cm(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(lm(t,c,f),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:v}=t;d.transform&&(v&&(p.transform=d.transform),delete d.transform),v&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=$A(v,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&qA(d,o,a,l,!1)}const um=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),dS=()=>({...um(),attrs:{}}),dm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function fS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const hS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function pS(t,e,n,i){fS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(hS.has(r)?r:nm(r),e.attrs[r])}const Hc={};function KA(t){Object.assign(Hc,t)}function mS(t,{layout:e,layoutId:n}){return xs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Hc[t]||t==="opacity")}function fm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(an(r[o])||e.style&&an(e.style[o])||mS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function gS(t,e,n){const i=fm(t,e,n);for(const r in t)if(an(t[r])||an(e[r])){const s=Co.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function ZA(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const S0=["x","y","width","height","cx","cy","r"],QA={useVisualState:aS({scrapeMotionValuesFromProps:gS,createRenderState:dS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(xs.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<S0.length;a++){const l=S0[a];t[l]!==e[l]&&(o=!0)}o&&vt.read(()=>{ZA(n,i),vt.render(()=>{cm(i,r,dm(n.tagName),t.transformTemplate),pS(n,i)})})}})},JA={useVisualState:aS({scrapeMotionValuesFromProps:fm,createRenderState:um})};function vS(t,e,n){for(const i in e)!an(e[i])&&!mS(i,n)&&(t[i]=e[i])}function eb({transformTemplate:t},e){return ae.useMemo(()=>{const n=um();return lm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function tb(t,e){const n=t.style||{},i={};return vS(i,n,t),Object.assign(i,eb(t,e)),i}function nb(t,e){const n={},i=tb(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function ib(t,e,n,i){const r=ae.useMemo(()=>{const s=dS();return cm(s,e,dm(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};vS(s,t.style,t),r.style={...s,...r.style}}return r}function rb(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(rm(n)?ib:nb)(i,s,o,n),c=xA(i,typeof n=="string",t),u=n!==ae.Fragment?{...c,...l,ref:r}:{},{children:f}=i,d=ae.useMemo(()=>an(f)?f.get():f,[f]);return ae.createElement(n,{...u,children:d})}}function sb(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...rm(i)?QA:JA,preloadedFeatures:t,useRender:rb(r),createVisualElement:e,Component:i};return CA(o)}}function _S(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Mu(t,e,n){const i=t.getProps();return sm(i,e,n!==void 0?n:i.custom,t)}const ob=Jp(()=>window.ScrollTimeline!==void 0);class ab{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(ob()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class lb extends ab{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function hm(t,e){return t?t[e]||t.default||t:void 0}const Wf=2e4;function xS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Wf;)e+=n,i=t.next(e);return e>=Wf?1/0:e}function pm(t){return typeof t=="function"}function M0(t,e){t.timeline=e,t.onfinish=null}const mm=t=>Array.isArray(t)&&typeof t[0]=="number",cb={linearEasing:void 0};function ub(t,e){const n=Jp(t);return()=>{var i;return(i=cb[e])!==null&&i!==void 0?i:n()}}const Gc=ub(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),yS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(_o(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function SS(t){return!!(typeof t=="function"&&Gc()||!t||typeof t=="string"&&(t in jf||Gc())||mm(t)||Array.isArray(t)&&t.every(SS))}const Jo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,jf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jo([0,.65,.55,1]),circOut:Jo([.55,0,1,.45]),backIn:Jo([.31,.01,.66,-.59]),backOut:Jo([.33,1.53,.69,.99])};function MS(t,e){if(t)return typeof t=="function"&&Gc()?yS(t,e):mm(t)?Jo(t):Array.isArray(t)?t.map(n=>MS(n,e)||jf.easeOut):jf[t]}const ti={x:!1,y:!1};function ES(){return ti.x||ti.y}function db(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function TS(t,e){const n=db(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function E0(t){return e=>{e.pointerType==="touch"||ES()||t(e)}}function fb(t,e,n={}){const[i,r,s]=TS(t,n),o=E0(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=E0(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const wS=(t,e)=>e?t===e?!0:wS(t,e.parentElement):!1,gm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,hb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function pb(t){return hb.has(t.tagName)||t.tabIndex!==-1}const ea=new WeakSet;function T0(t){return e=>{e.key==="Enter"&&t(e)}}function id(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const mb=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=T0(()=>{if(ea.has(n))return;id(n,"down");const r=T0(()=>{id(n,"up")}),s=()=>id(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function w0(t){return gm(t)&&!ES()}function gb(t,e,n={}){const[i,r,s]=TS(t,n),o=a=>{const l=a.currentTarget;if(!w0(a)||ea.has(l))return;ea.add(l);const c=e(a),u=(p,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!w0(p)||!ea.has(l))&&(ea.delete(l),typeof c=="function"&&c(p,{success:v}))},f=p=>{u(p,n.useGlobalTarget||wS(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{!pb(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>mb(c,r),r)}),s}function vb(t){return t==="x"||t==="y"?ti[t]?null:(ti[t]=!0,()=>{ti[t]=!1}):ti.x||ti.y?null:(ti.x=ti.y=!0,()=>{ti.x=ti.y=!1})}const AS=new Set(["width","height","top","left","right","bottom",...Co]);let ac;function _b(){ac=void 0}const wi={now:()=>(ac===void 0&&wi.set($t.isProcessing||hA.useManualTiming?$t.timestamp:performance.now()),ac),set:t=>{ac=t,queueMicrotask(_b)}};function vm(t,e){t.indexOf(e)===-1&&t.push(e)}function _m(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class xm{constructor(){this.subscriptions=[]}add(e){return vm(this.subscriptions,e),()=>_m(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function bS(t,e){return e?t*(1e3/e):0}const A0=30,xb=t=>!isNaN(parseFloat(t));class yb{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=wi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=wi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=xb(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new xm);const i=this.events[e].add(n);return e==="change"?()=>{i(),vt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=wi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>A0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,A0);return bS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fa(t,e){return new yb(t,e)}function Sb(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Fa(n))}function Mb(t,e){const n=Mu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=IA(s[o]);Sb(t,o,a)}}function Eb(t){return!!(an(t)&&t.add)}function Xf(t,e){const n=t.getValue("willChange");if(Eb(n))return n.add(e)}function CS(t){return t.props[rS]}const RS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Tb=1e-7,wb=12;function Ab(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=RS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>Tb&&++a<wb);return o}function qa(t,e,n,i){if(t===e&&n===i)return In;const r=s=>Ab(s,0,1,t,n);return s=>s===0||s===1?s:RS(r(s),e,i)}const PS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,DS=t=>e=>1-t(1-e),LS=qa(.33,1.53,.69,.99),ym=DS(LS),NS=PS(ym),IS=t=>(t*=2)<1?.5*ym(t):.5*(2-Math.pow(2,-10*(t-1))),Sm=t=>1-Math.sin(Math.acos(t)),US=DS(Sm),FS=PS(Sm),OS=t=>/^0[^.\s]+$/u.test(t);function bb(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||OS(t):!0}const ha=t=>Math.round(t*1e5)/1e5,Mm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Cb(t){return t==null}const Rb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Em=(t,e)=>n=>!!(typeof n=="string"&&Rb.test(n)&&n.startsWith(t)||e&&!Cb(n)&&Object.prototype.hasOwnProperty.call(n,e)),kS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Mm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Pb=t=>Ji(0,255,t),rd={...Ro,transform:t=>Math.round(Pb(t))},rs={test:Em("rgb","red"),parse:kS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+rd.transform(t)+", "+rd.transform(e)+", "+rd.transform(n)+", "+ha(Ua.transform(i))+")"};function Db(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Yf={test:Em("#"),parse:Db,transform:rs.transform},Ks={test:Em("hsl","hue"),parse:kS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ti.transform(ha(e))+", "+Ti.transform(ha(n))+", "+ha(Ua.transform(i))+")"},sn={test:t=>rs.test(t)||Yf.test(t)||Ks.test(t),parse:t=>rs.test(t)?rs.parse(t):Ks.test(t)?Ks.parse(t):Yf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?rs.transform(t):Ks.transform(t)},Lb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Nb(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Mm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Lb))===null||n===void 0?void 0:n.length)||0)>0}const BS="number",zS="color",Ib="var",Ub="var(",b0="${}",Fb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Oa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(Fb,l=>(sn.test(l)?(i.color.push(s),r.push(zS),n.push(sn.parse(l))):l.startsWith(Ub)?(i.var.push(s),r.push(Ib),n.push(l)):(i.number.push(s),r.push(BS),n.push(parseFloat(l))),++s,b0)).split(b0);return{values:n,split:a,indexes:i,types:r}}function VS(t){return Oa(t).values}function HS(t){const{split:e,types:n}=Oa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===BS?s+=ha(r[o]):a===zS?s+=sn.transform(r[o]):s+=r[o]}return s}}const Ob=t=>typeof t=="number"?0:t;function kb(t){const e=VS(t);return HS(t)(e.map(Ob))}const Ir={test:Nb,parse:VS,createTransformer:HS,getAnimatableNone:kb},Bb=new Set(["brightness","contrast","saturate","opacity"]);function zb(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Mm)||[];if(!i)return t;const r=n.replace(i,"");let s=Bb.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Vb=/\b([a-z-]*)\(.*?\)/gu,qf={...Ir,getAnimatableNone:t=>{const e=t.match(Vb);return e?e.map(zb).join(" "):t}},Hb={...am,color:sn,backgroundColor:sn,outlineColor:sn,fill:sn,stroke:sn,borderColor:sn,borderTopColor:sn,borderRightColor:sn,borderBottomColor:sn,borderLeftColor:sn,filter:qf,WebkitFilter:qf},Tm=t=>Hb[t];function GS(t,e){let n=Tm(t);return n!==qf&&(n=Ir),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Gb=new Set(["auto","none","0"]);function Wb(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Gb.has(s)&&Oa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=GS(n,r)}const C0=t=>t===Ro||t===Ce,R0=(t,e)=>parseFloat(t.split(", ")[e]),P0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return R0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?R0(s[1],t):0}},jb=new Set(["x","y","z"]),Xb=Co.filter(t=>!jb.has(t));function Yb(t){const e=[];return Xb.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const yo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:P0(4,13),y:P0(5,14)};yo.translateX=yo.x;yo.translateY=yo.y;const cs=new Set;let $f=!1,Kf=!1;function WS(){if(Kf){const t=Array.from(cs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Yb(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Kf=!1,$f=!1,cs.forEach(t=>t.complete()),cs.clear()}function jS(){cs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Kf=!0)})}function qb(){jS(),WS()}class wm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(cs.add(this),$f||($f=!0,vt.read(jS),vt.resolveKeyframes(WS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),cs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,cs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const XS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),$b=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Kb(t){const e=$b.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function YS(t,e,n=1){const[i,r]=Kb(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return XS(o)?parseFloat(o):o}return om(r)?YS(r,e,n+1):r}const qS=t=>e=>e.test(t),Zb={test:t=>t==="auto",parse:t=>t},$S=[Ro,Ce,Ti,hr,zA,BA,Zb],D0=t=>$S.find(qS(t));class KS extends wm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),om(c))){const u=YS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!AS.has(i)||e.length!==2)return;const[r,s]=e,o=D0(r),a=D0(s);if(o!==a)if(C0(o)&&C0(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)bb(e[r])&&i.push(r);i.length&&Wb(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=yo[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const L0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ir.test(t)||t==="0")&&!t.startsWith("url("));function Qb(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Jb(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=L0(r,e),a=L0(s,e);return!o||!a?!1:Qb(t)||(n==="spring"||pm(n))&&i}const eC=t=>t!==null;function Eu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(eC),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const tC=40;class ZS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=wi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>tC?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&qb(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=wi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Jb(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Eu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Mt=(t,e,n)=>t+(e-t)*n;function sd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function nC({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=sd(l,a,t+1/3),s=sd(l,a,t),o=sd(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Wc(t,e){return n=>n>0?e:t}const od=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},iC=[Yf,rs,Ks],rC=t=>iC.find(e=>e.test(t));function N0(t){const e=rC(t);if(!e)return!1;let n=e.parse(t);return e===Ks&&(n=nC(n)),n}const I0=(t,e)=>{const n=N0(t),i=N0(e);if(!n||!i)return Wc(t,e);const r={...n};return s=>(r.red=od(n.red,i.red,s),r.green=od(n.green,i.green,s),r.blue=od(n.blue,i.blue,s),r.alpha=Mt(n.alpha,i.alpha,s),rs.transform(r))},sC=(t,e)=>n=>e(t(n)),$a=(...t)=>t.reduce(sC),Zf=new Set(["none","hidden"]);function oC(t,e){return Zf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function aC(t,e){return n=>Mt(t,e,n)}function Am(t){return typeof t=="number"?aC:typeof t=="string"?om(t)?Wc:sn.test(t)?I0:uC:Array.isArray(t)?QS:typeof t=="object"?sn.test(t)?I0:lC:Wc}function QS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Am(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function lC(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Am(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function cC(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const uC=(t,e)=>{const n=Ir.createTransformer(e),i=Oa(t),r=Oa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Zf.has(t)&&!r.values.length||Zf.has(e)&&!i.values.length?oC(t,e):$a(QS(cC(i,r),r.values),n):Wc(t,e)};function JS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Mt(t,e,n):Am(t)(t,e)}const dC=5;function eM(t,e,n){const i=Math.max(e-dC,0);return bS(n-t(i),e-i)}const bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ad=.001;function fC({duration:t=bt.duration,bounce:e=bt.bounce,velocity:n=bt.velocity,mass:i=bt.mass}){let r,s,o=1-e;o=Ji(bt.minDamping,bt.maxDamping,o),t=Ji(bt.minDuration,bt.maxDuration,Xi(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=Qf(c,o),v=Math.exp(-f);return ad-d/p*v},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,v=Math.exp(-f),y=Qf(Math.pow(c,2),o);return(-r(c)+ad>0?-1:1)*((d-p)*v)/y}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-ad+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=pC(r,s,a);if(t=ji(t),isNaN(l))return{stiffness:bt.stiffness,damping:bt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const hC=12;function pC(t,e,n){let i=n;for(let r=1;r<hC;r++)i=i-t(i)/e(i);return i}function Qf(t,e){return t*Math.sqrt(1-e*e)}const mC=["duration","bounce"],gC=["stiffness","damping","mass"];function U0(t,e){return e.some(n=>t[n]!==void 0)}function vC(t){let e={velocity:bt.velocity,stiffness:bt.stiffness,damping:bt.damping,mass:bt.mass,isResolvedFromDuration:!1,...t};if(!U0(t,gC)&&U0(t,mC))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ji(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:bt.mass,stiffness:r,damping:s}}else{const n=fC(t);e={...e,...n,mass:bt.mass},e.isResolvedFromDuration=!0}return e}function tM(t=bt.visualDuration,e=bt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=vC({...n,velocity:-Xi(n.velocity||0)}),v=d||0,y=c/(2*Math.sqrt(l*u)),g=o-s,h=Xi(Math.sqrt(l/u)),m=Math.abs(g)<5;i||(i=m?bt.restSpeed.granular:bt.restSpeed.default),r||(r=m?bt.restDelta.granular:bt.restDelta.default);let _;if(y<1){const w=Qf(h,y);_=E=>{const C=Math.exp(-y*h*E);return o-C*((v+y*h*g)/w*Math.sin(w*E)+g*Math.cos(w*E))}}else if(y===1)_=w=>o-Math.exp(-h*w)*(g+(v+h*g)*w);else{const w=h*Math.sqrt(y*y-1);_=E=>{const C=Math.exp(-y*h*E),x=Math.min(w*E,300);return o-C*((v+y*h*g)*Math.sinh(x)+w*g*Math.cosh(x))/w}}const M={calculatedDuration:p&&f||null,next:w=>{const E=_(w);if(p)a.done=w>=f;else{let C=0;y<1&&(C=w===0?ji(v):eM(_,w,E));const x=Math.abs(C)<=i,R=Math.abs(o-E)<=r;a.done=x&&R}return a.value=a.done?o:E,a},toString:()=>{const w=Math.min(xS(M),Wf),E=yS(C=>M.next(w*C).value,w,30);return w+"ms "+E}};return M}function F0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,v=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let y=n*e;const g=f+y,h=o===void 0?g:o(g);h!==g&&(y=h-f);const m=x=>-y*Math.exp(-x/i),_=x=>h+m(x),M=x=>{const R=m(x),D=_(x);d.done=Math.abs(R)<=c,d.value=d.done?h:D};let w,E;const C=x=>{p(d.value)&&(w=x,E=tM({keyframes:[d.value,v(d.value)],velocity:eM(_,x,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:x=>{let R=!1;return!E&&w===void 0&&(R=!0,M(x),C(x)),w!==void 0&&x>=w?E.next(x-w):(!R&&M(x),d)}}}const _C=qa(.42,0,1,1),xC=qa(0,0,.58,1),nM=qa(.42,0,.58,1),yC=t=>Array.isArray(t)&&typeof t[0]!="number",SC={linear:In,easeIn:_C,easeInOut:nM,easeOut:xC,circIn:Sm,circInOut:FS,circOut:US,backIn:ym,backInOut:NS,backOut:LS,anticipate:IS},O0=t=>{if(mm(t)){Jy(t.length===4);const[e,n,i,r]=t;return qa(e,n,i,r)}else if(typeof t=="string")return SC[t];return t};function MC(t,e,n){const i=[],r=n||JS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||In:e;a=$a(l,a)}i.push(a)}return i}function EC(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Jy(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=MC(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=_o(t[f],t[f+1],u);return a[f](d)};return n?u=>c(Ji(t[0],t[s-1],u)):c}function TC(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=_o(0,e,i);t.push(Mt(n,1,r))}}function wC(t){const e=[0];return TC(e,t.length-1),e}function AC(t,e){return t.map(n=>n*e)}function bC(t,e){return t.map(()=>e||nM).splice(0,t.length-1)}function jc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=yC(i)?i.map(O0):O0(i),s={done:!1,value:e[0]},o=AC(n&&n.length===e.length?n:wC(e),t),a=EC(o,e,{ease:Array.isArray(r)?r:bC(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const CC=t=>{const e=({timestamp:n})=>t(n);return{start:()=>vt.update(e,!0),stop:()=>Nr(e),now:()=>$t.isProcessing?$t.timestamp:wi.now()}},RC={decay:F0,inertia:F0,tween:jc,keyframes:jc,spring:tM},PC=t=>t/100;class bm extends ZS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||wm,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=pm(n)?n:RC[n]||jc;let l,c;a!==jc&&typeof e[0]!="number"&&(l=$a(PC,JS(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=xS(u));const{calculatedDuration:f}=u,d=f+r,p=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:x}=this.options;return{done:!0,value:x[x.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:v,repeatDelay:y,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-d*(this.speed>=0?1:-1),m=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let _=this.currentTime,M=s;if(p){const x=Math.min(this.currentTime,u)/f;let R=Math.floor(x),D=x%1;!D&&x>=1&&(D=1),D===1&&R--,R=Math.min(R,p+1),!!(R%2)&&(v==="reverse"?(D=1-D,y&&(D-=y/f)):v==="mirror"&&(M=o)),_=Ji(0,1,D)*f}const w=m?{done:!1,value:l[0]}:M.next(_);a&&(w.value=a(w.value));let{done:E}=w;!m&&c!==null&&(E=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return C&&r!==void 0&&(w.value=Eu(l,this.options,r)),g&&g(w.value),C&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Xi(e.calculatedDuration):0}get time(){return Xi(this.currentTime)}set time(e){e=ji(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Xi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=CC,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const DC=new Set(["opacity","clipPath","filter","transform"]);function LC(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=MS(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const NC=Jp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Xc=10,IC=2e4;function UC(t){return pm(t.type)||t.type==="spring"||!SS(t.ease)}function FC(t,e){const n=new bm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<IC;)i=n.sample(s),r.push(i.value),s+=Xc;return{times:void 0,keyframes:r,duration:s-Xc,ease:"linear"}}const iM={anticipate:IS,backInOut:NS,circInOut:FS};function OC(t){return t in iM}class k0 extends ZS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new KS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Gc()&&OC(s)&&(s=iM[s]),UC(this.options)){const{onComplete:f,onUpdate:d,motionValue:p,element:v,...y}=this.options,g=FC(e,y);e=g.keyframes,e.length===1&&(e[1]=e[0]),i=g.duration,r=g.times,s=g.ease,o="keyframes"}const u=LC(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(M0(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;a.set(Eu(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Xi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Xi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=ji(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return In;const{animation:i}=n;M0(i,e)}return In}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:d,...p}=this.options,v=new bm({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=ji(this.time);c.setWithVelocity(v.sample(y-Xc).value,v.sample(y).value,Xc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return NC()&&i&&DC.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const kC={type:"spring",stiffness:500,damping:25,restSpeed:10},BC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),zC={type:"keyframes",duration:.8},VC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},HC=(t,{keyframes:e})=>e.length>2?zC:xs.has(t)?t.startsWith("scale")?BC(e[1]):kC:VC;function GC({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Cm=(t,e,n,i={},r,s)=>o=>{const a=hm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-ji(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};GC(a)||(u={...u,...HC(t,u)}),u.duration&&(u.duration=ji(u.duration)),u.repeatDelay&&(u.repeatDelay=ji(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const d=Eu(u.keyframes,a);if(d!==void 0)return vt.update(()=>{u.onUpdate(d),u.onComplete()}),new lb([])}return!s&&k0.supports(u)?new k0(u):new bm(u)};function WC({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function rM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const d=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||u&&WC(u,f))continue;const v={delay:n,...hm(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const h=CS(t);if(h){const m=window.MotionHandoffAnimation(h,f,vt);m!==null&&(v.startTime=m,y=!0)}}Xf(t,f),d.start(Cm(f,d,p,t.shouldReduceMotion&&AS.has(f)?{type:!1}:v,t,y));const g=d.animation;g&&c.push(g)}return a&&Promise.all(c).then(()=>{vt.update(()=>{a&&Mb(t,a)})}),c}function Jf(t,e,n={}){var i;const r=Mu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(rM(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=s;return jC(t,e,u+c,f,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function jC(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(XC).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Jf(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function XC(t,e){return t.sortNodePosition(e)}function YC(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Jf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Jf(t,e,n);else{const r=typeof e=="function"?Mu(t,e,n.custom):e;i=Promise.all(rM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const qC=tm.length;function sM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?sM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<qC;n++){const i=tm[n],r=t.props[i];(Ia(r)||r===!1)&&(e[i]=r)}return e}const $C=[...em].reverse(),KC=em.length;function ZC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>YC(t,n,i)))}function QC(t){let e=ZC(t),n=B0(),i=!0;const r=l=>(c,u)=>{var f;const d=Mu(t,u,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:v,...y}=d;c={...c,...y,...v}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=sM(t.parent)||{},f=[],d=new Set;let p={},v=1/0;for(let g=0;g<KC;g++){const h=$C[g],m=n[h],_=c[h]!==void 0?c[h]:u[h],M=Ia(_),w=h===l?m.isActive:null;w===!1&&(v=g);let E=_===u[h]&&_!==c[h]&&M;if(E&&i&&t.manuallyAnimateOnMount&&(E=!1),m.protectedKeys={...p},!m.isActive&&w===null||!_&&!m.prevProp||yu(_)||typeof _=="boolean")continue;const C=JC(m.prevProp,_);let x=C||h===l&&m.isActive&&!E&&M||g>v&&M,R=!1;const D=Array.isArray(_)?_:[_];let P=D.reduce(r(h),{});w===!1&&(P={});const{prevResolvedValues:k={}}=m,X={...k,...P},q=O=>{x=!0,d.has(O)&&(R=!0,d.delete(O)),m.needsAnimating[O]=!0;const U=t.getValue(O);U&&(U.liveStyle=!1)};for(const O in X){const U=P[O],j=k[O];if(p.hasOwnProperty(O))continue;let Z=!1;Gf(U)&&Gf(j)?Z=!_S(U,j):Z=U!==j,Z?U!=null?q(O):d.add(O):U!==void 0&&d.has(O)?q(O):m.protectedKeys[O]=!0}m.prevProp=_,m.prevResolvedValues=P,m.isActive&&(p={...p,...P}),i&&t.blockInitialAnimation&&(x=!1),x&&(!(E&&C)||R)&&f.push(...D.map(O=>({animation:O,options:{type:h}})))}if(d.size){const g={};d.forEach(h=>{const m=t.getBaseTarget(h),_=t.getValue(h);_&&(_.liveStyle=!0),g[h]=m??null}),f.push({animation:g})}let y=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=B0(),i=!0}}}function JC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!_S(e,t):!1}function Wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function B0(){return{animate:Wr(!0),whileInView:Wr(),whileHover:Wr(),whileTap:Wr(),whileDrag:Wr(),whileFocus:Wr(),exit:Wr()}}class Vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class eR extends Vr{constructor(e){super(e),e.animationState||(e.animationState=QC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();yu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let tR=0;class nR extends Vr{constructor(){super(...arguments),this.id=tR++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const iR={animation:{Feature:eR},exit:{Feature:nR}};function ka(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ka(t){return{point:{x:t.pageX,y:t.pageY}}}const rR=t=>e=>gm(e)&&t(e,Ka(e));function pa(t,e,n,i){return ka(t,e,rR(n),i)}const z0=(t,e)=>Math.abs(t-e);function sR(t,e){const n=z0(t.x,e.x),i=z0(t.y,e.y);return Math.sqrt(n**2+i**2)}class oM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=cd(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=sR(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:v}=f,{timestamp:y}=$t;this.history.push({...v,timestamp:y});const{onStart:g,onMove:h}=this.handlers;d||(g&&g(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ld(d,this.transformPagePoint),vt.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=cd(f.type==="pointercancel"?this.lastMoveEventInfo:ld(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,g),v&&v(f,g)},!gm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ka(e),a=ld(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=$t;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,cd(a,this.history)),this.removeListeners=$a(pa(this.contextWindow,"pointermove",this.handlePointerMove),pa(this.contextWindow,"pointerup",this.handlePointerUp),pa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Nr(this.updatePoint)}}function ld(t,e){return e?{point:e(t.point)}:t}function V0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function cd({point:t},e){return{point:t,delta:V0(t,aM(e)),offset:V0(t,oR(e)),velocity:aR(e,.1)}}function oR(t){return t[0]}function aM(t){return t[t.length-1]}function aR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=aM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>ji(e)));)n--;if(!i)return{x:0,y:0};const s=Xi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const lM=1e-4,lR=1-lM,cR=1+lM,cM=.01,uR=0-cM,dR=0+cM;function On(t){return t.max-t.min}function fR(t,e,n){return Math.abs(t-e)<=n}function H0(t,e,n,i=.5){t.origin=i,t.originPoint=Mt(e.min,e.max,t.origin),t.scale=On(n)/On(e),t.translate=Mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=lR&&t.scale<=cR||isNaN(t.scale))&&(t.scale=1),(t.translate>=uR&&t.translate<=dR||isNaN(t.translate))&&(t.translate=0)}function ma(t,e,n,i){H0(t.x,e.x,n.x,i?i.originX:void 0),H0(t.y,e.y,n.y,i?i.originY:void 0)}function G0(t,e,n){t.min=n.min+e.min,t.max=t.min+On(e)}function hR(t,e,n){G0(t.x,e.x,n.x),G0(t.y,e.y,n.y)}function W0(t,e,n){t.min=e.min-n.min,t.max=t.min+On(e)}function ga(t,e,n){W0(t.x,e.x,n.x),W0(t.y,e.y,n.y)}function pR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Mt(n,t,i.max):Math.min(t,n)),t}function j0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function mR(t,{top:e,left:n,bottom:i,right:r}){return{x:j0(t.x,n,r),y:j0(t.y,e,i)}}function X0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function gR(t,e){return{x:X0(t.x,e.x),y:X0(t.y,e.y)}}function vR(t,e){let n=.5;const i=On(t),r=On(e);return r>i?n=_o(e.min,e.max-i,t.min):i>r&&(n=_o(t.min,t.max-r,e.min)),Ji(0,1,n)}function _R(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const eh=.35;function xR(t=eh){return t===!1?t=0:t===!0&&(t=eh),{x:Y0(t,"left","right"),y:Y0(t,"top","bottom")}}function Y0(t,e,n){return{min:q0(t,e),max:q0(t,n)}}function q0(t,e){return typeof t=="number"?t:t[e]||0}const $0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Zs=()=>({x:$0(),y:$0()}),K0=()=>({min:0,max:0}),Nt=()=>({x:K0(),y:K0()});function Gn(t){return[t("x"),t("y")]}function uM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function yR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function SR(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function ud(t){return t===void 0||t===1}function th({scale:t,scaleX:e,scaleY:n}){return!ud(t)||!ud(e)||!ud(n)}function Zr(t){return th(t)||dM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function dM(t){return Z0(t.x)||Z0(t.y)}function Z0(t){return t&&t!=="0%"}function Yc(t,e,n){const i=t-n,r=e*i;return n+r}function Q0(t,e,n,i,r){return r!==void 0&&(t=Yc(t,r,i)),Yc(t,n,i)+e}function nh(t,e=0,n=1,i,r){t.min=Q0(t.min,e,n,i,r),t.max=Q0(t.max,e,n,i,r)}function fM(t,{x:e,y:n}){nh(t.x,e.translate,e.scale,e.originPoint),nh(t.y,n.translate,n.scale,n.originPoint)}const J0=.999999999999,ev=1.0000000000001;function MR(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Js(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,fM(t,o)),i&&Zr(s.latestValues)&&Js(t,s.latestValues))}e.x<ev&&e.x>J0&&(e.x=1),e.y<ev&&e.y>J0&&(e.y=1)}function Qs(t,e){t.min=t.min+e,t.max=t.max+e}function tv(t,e,n,i,r=.5){const s=Mt(t.min,t.max,r);nh(t,e,n,s,i)}function Js(t,e){tv(t.x,e.x,e.scaleX,e.scale,e.originX),tv(t.y,e.y,e.scaleY,e.scale,e.originY)}function hM(t,e){return uM(SR(t.getBoundingClientRect(),e))}function ER(t,e,n){const i=hM(t,n),{scroll:r}=e;return r&&(Qs(i.x,r.offset.x),Qs(i.y,r.offset.y)),i}const pM=({current:t})=>t?t.ownerDocument.defaultView:null,TR=new WeakMap;class wR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Nt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ka(u).point)},s=(u,f)=>{const{drag:d,dragPropagation:p,onDragStart:v}=this.getProps();if(d&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vb(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gn(g=>{let h=this.getAxisMotionValue(g).get()||0;if(Ti.test(h)){const{projection:m}=this.visualElement;if(m&&m.layout){const _=m.layout.layoutBox[g];_&&(h=On(_)*(parseFloat(h)/100))}}this.originPoint[g]=h}),v&&vt.postRender(()=>v(u,f)),Xf(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:v,onDrag:y}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:g}=f;if(p&&this.currentDirection===null){this.currentDirection=AR(g),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),y&&y(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Gn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new oM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:pM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&vt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Ml(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=pR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&$s(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=mR(r.layoutBox,n):this.constraints=!1,this.elastic=xR(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Gn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=_R(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!$s(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=ER(i,r.root,this.visualElement.getTransformPagePoint());let o=gR(r.layout.layoutBox,s);if(n){const a=n(yR(o));this.hasMutatedConstraints=!!a,a&&(o=uM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Gn(u=>{if(!Ml(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Xf(this.visualElement,e),i.start(Cm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Gn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Gn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Gn(n=>{const{drag:i}=this.getProps();if(!Ml(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-Mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!$s(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Gn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=vR({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Gn(o=>{if(!Ml(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Mt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;TR.set(this.visualElement,this);const e=this.visualElement.current,n=pa(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();$s(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),vt.read(i);const o=ka(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Gn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=eh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Ml(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function AR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class bR extends Vr{constructor(e){super(e),this.removeGroupControls=In,this.removeListeners=In,this.controls=new wR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||In}unmount(){this.removeGroupControls(),this.removeListeners()}}const nv=t=>(e,n)=>{t&&vt.postRender(()=>t(e,n))};class CR extends Vr{constructor(){super(...arguments),this.removePointerDownListener=In}onPointerDown(e){this.session=new oM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:nv(e),onStart:nv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&vt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=pa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const lc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function iv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const zo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ce.test(t))t=parseFloat(t);else return t;const n=iv(t,e.target.x),i=iv(t,e.target.y);return`${n}% ${i}%`}},RR={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Ir.parse(t);if(r.length>5)return i;const s=Ir.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=Mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class PR extends ae.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;KA(DR),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),lc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||vt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),im.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function mM(t){const[e,n]=Zy(),i=ae.useContext($p);return b.jsx(PR,{...t,layoutGroup:i,switchLayoutGroup:ae.useContext(sS),isPresent:e,safeToRemove:n})}const DR={borderRadius:{...zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zo,borderTopRightRadius:zo,borderBottomLeftRadius:zo,borderBottomRightRadius:zo,boxShadow:RR};function LR(t,e,n){const i=an(t)?t:Fa(t);return i.start(Cm("",i,e,n)),i.animation}function NR(t){return t instanceof SVGElement&&t.tagName!=="svg"}const IR=(t,e)=>t.depth-e.depth;class UR{constructor(){this.children=[],this.isDirty=!1}add(e){vm(this.children,e),this.isDirty=!0}remove(e){_m(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(IR),this.isDirty=!1,this.children.forEach(e)}}function FR(t,e){const n=wi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Nr(i),t(s-e))};return vt.read(i,!0),()=>Nr(i)}const gM=["TopLeft","TopRight","BottomLeft","BottomRight"],OR=gM.length,rv=t=>typeof t=="string"?parseFloat(t):t,sv=t=>typeof t=="number"||Ce.test(t);function kR(t,e,n,i,r,s){r?(t.opacity=Mt(0,n.opacity!==void 0?n.opacity:1,BR(i)),t.opacityExit=Mt(e.opacity!==void 0?e.opacity:1,0,zR(i))):s&&(t.opacity=Mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<OR;o++){const a=`border${gM[o]}Radius`;let l=ov(e,a),c=ov(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||sv(l)===sv(c)?(t[a]=Math.max(Mt(rv(l),rv(c),i),0),(Ti.test(c)||Ti.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Mt(e.rotate||0,n.rotate||0,i))}function ov(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const BR=vM(0,.5,US),zR=vM(.5,.95,In);function vM(t,e,n){return i=>i<t?0:i>e?1:n(_o(t,e,i))}function av(t,e){t.min=e.min,t.max=e.max}function Vn(t,e){av(t.x,e.x),av(t.y,e.y)}function lv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function cv(t,e,n,i,r){return t-=e,t=Yc(t,1/n,i),r!==void 0&&(t=Yc(t,1/r,i)),t}function VR(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ti.test(e)&&(e=parseFloat(e),e=Mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Mt(s.min,s.max,i);t===s&&(a-=e),t.min=cv(t.min,e,n,a,r),t.max=cv(t.max,e,n,a,r)}function uv(t,e,[n,i,r],s,o){VR(t,e[n],e[i],e[r],e.scale,s,o)}const HR=["x","scaleX","originX"],GR=["y","scaleY","originY"];function dv(t,e,n,i){uv(t.x,e,HR,n?n.x:void 0,i?i.x:void 0),uv(t.y,e,GR,n?n.y:void 0,i?i.y:void 0)}function fv(t){return t.translate===0&&t.scale===1}function _M(t){return fv(t.x)&&fv(t.y)}function hv(t,e){return t.min===e.min&&t.max===e.max}function WR(t,e){return hv(t.x,e.x)&&hv(t.y,e.y)}function pv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function xM(t,e){return pv(t.x,e.x)&&pv(t.y,e.y)}function mv(t){return On(t.x)/On(t.y)}function gv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class jR{constructor(){this.members=[]}add(e){vm(this.members,e),e.scheduleRender()}remove(e){if(_m(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function XR(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Qr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ta=typeof window<"u"&&window.MotionDebug!==void 0,dd=["","X","Y","Z"],YR={visibility:"hidden"},vv=1e3;let qR=0;function fd(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function yM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=CS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",vt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&yM(i)}function SM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=qR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ta&&(Qr.totalNodes=Qr.resolvedTargetDeltas=Qr.recalculatedProjection=0),this.nodes.forEach(ZR),this.nodes.forEach(nP),this.nodes.forEach(iP),this.nodes.forEach(QR),ta&&window.MotionDebug.record(Qr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new UR)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new xm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=NR(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=FR(d,250),lc.hasAnimatedSinceResize&&(lc.hasAnimatedSinceResize=!1,this.nodes.forEach(xv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||lP,{onLayoutAnimationStart:g,onLayoutAnimationComplete:h}=u.getProps(),m=!this.targetLayout||!xM(this.targetLayout,v)||p,_=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||d&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,_);const M={...hm(y,"layout"),onPlay:g,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else d||xv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Nr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rP),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&yM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_v);return}this.isUpdating||this.nodes.forEach(eP),this.isUpdating=!1,this.nodes.forEach(tP),this.nodes.forEach($R),this.nodes.forEach(KR),this.clearAllSnapshots();const a=wi.now();$t.delta=Ji(0,1e3/60,a-$t.timestamp),$t.timestamp=a,$t.isProcessing=!0,nd.update.process($t),nd.preRender.process($t),nd.render.process($t),$t.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,im.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(JR),this.sharedNodes.forEach(sP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,vt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){vt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Nt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!_M(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Zr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),cP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Nt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(uP))){const{scroll:u}=this.root;u&&(Qs(l.x,u.offset.x),Qs(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Nt();if(Vn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Vn(l,o),Qs(l.x,f.offset.x),Qs(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=Nt();Vn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Js(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Zr(u.latestValues)&&Js(l,u.latestValues)}return Zr(this.latestValues)&&Js(l,this.latestValues),l}removeTransform(o){const a=Nt();Vn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Zr(c.latestValues))continue;th(c.latestValues)&&c.updateSnapshot();const u=Nt(),f=c.measurePageBox();Vn(u,f),dv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Zr(this.latestValues)&&dv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$t.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=$t.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Nt(),this.relativeTargetOrigin=Nt(),ga(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Nt(),this.targetWithTransforms=Nt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),hR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Vn(this.target,this.layout.layoutBox),fM(this.target,this.targetDelta)):Vn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Nt(),this.relativeTargetOrigin=Nt(),ga(this.relativeTargetOrigin,this.target,p.target),Vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ta&&Qr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||th(this.parent.latestValues)||dM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===$t.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;Vn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;MR(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Nt());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(lv(this.prevProjectionDelta.x,this.projectionDelta.x),lv(this.prevProjectionDelta.y,this.projectionDelta.y)),ma(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!gv(this.projectionDelta.x,this.prevProjectionDelta.x)||!gv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),ta&&Qr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Zs(),this.projectionDelta=Zs(),this.projectionDeltaWithTransform=Zs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Zs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Nt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,g=this.getStack(),h=!g||g.members.length<=1,m=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(aP));this.animationProgress=0;let _;this.mixTargetDelta=M=>{const w=M/1e3;yv(f.x,o.x,w),yv(f.y,o.y,w),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ga(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),oP(this.relativeTarget,this.relativeTargetOrigin,d,w),_&&WR(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Nt()),Vn(_,this.relativeTarget)),y&&(this.animationValues=u,kR(u,c,this.latestValues,w,m,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Nr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=vt.update(()=>{lc.hasAnimatedSinceResize=!0,this.currentAnimation=LR(0,vv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&MM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Nt();const f=On(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=On(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Vn(a,l),Js(a,u),ma(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new jR),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&fd("z",o,c,this.animationValues);for(let u=0;u<dd.length;u++)fd(`rotate${dd[u]}`,o,c,this.animationValues),fd(`skew${dd[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return YR;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=oc(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=oc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Zr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=XR(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:v}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Hc){if(d[y]===void 0)continue;const{correct:g,applyTo:h}=Hc[y],m=c.transform==="none"?d[y]:g(d[y],f);if(h){const _=h.length;for(let M=0;M<_;M++)c[h[M]]=m}else c[y]=m}return this.options.layoutId&&(c.pointerEvents=f===this?oc(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(_v),this.root.sharedNodes.clear()}}}function $R(t){t.updateLayout()}function KR(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Gn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=On(d);d.min=i[f].min,d.max=d.min+p}):MM(s,n.layoutBox,i)&&Gn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=On(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Zs();ma(a,i,n.layoutBox);const l=Zs();o?ma(l,t.applyTransform(r,!0),n.measuredBox):ma(l,i,n.layoutBox);const c=!_M(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const v=Nt();ga(v,n.layoutBox,d.layoutBox);const y=Nt();ga(y,i,p.layoutBox),xM(v,y)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=v,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function ZR(t){ta&&Qr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function QR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function JR(t){t.clearSnapshot()}function _v(t){t.clearMeasurements()}function eP(t){t.isLayoutDirty=!1}function tP(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function xv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function nP(t){t.resolveTargetDelta()}function iP(t){t.calcProjection()}function rP(t){t.resetSkewAndRotation()}function sP(t){t.removeLeadSnapshot()}function yv(t,e,n){t.translate=Mt(e.translate,0,n),t.scale=Mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Sv(t,e,n,i){t.min=Mt(e.min,n.min,i),t.max=Mt(e.max,n.max,i)}function oP(t,e,n,i){Sv(t.x,e.x,n.x,i),Sv(t.y,e.y,n.y,i)}function aP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const lP={duration:.45,ease:[.4,0,.1,1]},Mv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Ev=Mv("applewebkit/")&&!Mv("chrome/")?Math.round:In;function Tv(t){t.min=Ev(t.min),t.max=Ev(t.max)}function cP(t){Tv(t.x),Tv(t.y)}function MM(t,e,n){return t==="position"||t==="preserve-aspect"&&!fR(mv(e),mv(n),.2)}function uP(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const dP=SM({attachResizeListener:(t,e)=>ka(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),hd={current:void 0},EM=SM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!hd.current){const t=new dP({});t.mount(window),t.setOptions({layoutScroll:!0}),hd.current=t}return hd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),fP={pan:{Feature:CR},drag:{Feature:bR,ProjectionNode:EM,MeasureLayout:mM}};function wv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&vt.postRender(()=>s(e,Ka(e)))}class hP extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=fb(e,n=>(wv(this.node,n,"Start"),i=>wv(this.node,i,"End"))))}unmount(){}}class pP extends Vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$a(ka(this.node.current,"focus",()=>this.onFocus()),ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Av(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&vt.postRender(()=>s(e,Ka(e)))}class mP extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=gb(e,n=>(Av(this.node,n,"Start"),(i,{success:r})=>Av(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ih=new WeakMap,pd=new WeakMap,gP=t=>{const e=ih.get(t.target);e&&e(t)},vP=t=>{t.forEach(gP)};function _P({root:t,...e}){const n=t||document;pd.has(n)||pd.set(n,{});const i=pd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(vP,{root:t,...e})),i[r]}function xP(t,e,n){const i=_P(e);return ih.set(t,n),i.observe(t),()=>{ih.delete(t),i.unobserve(t)}}const yP={some:0,all:1};class SP extends Vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:yP[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return xP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(MP(e,n))&&this.startObserver()}unmount(){}}function MP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const EP={inView:{Feature:SP},tap:{Feature:mP},focus:{Feature:pP},hover:{Feature:hP}},TP={layout:{ProjectionNode:EM,MeasureLayout:mM}},rh={current:null},TM={current:!1};function wP(){if(TM.current=!0,!!Qp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>rh.current=t.matches;t.addListener(e),e()}else rh.current=!1}const AP=[...$S,sn,Ir],bP=t=>AP.find(qS(t)),bv=new WeakMap;function CP(t,e,n){for(const i in e){const r=e[i],s=n[i];if(an(r))t.addValue(i,r);else if(an(s))t.addValue(i,Fa(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Fa(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Cv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class RP{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=wi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,vt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Su(n),this.isVariantNode=iS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const v=d[p];l[p]!==void 0&&an(v)&&v.set(l[p],!1)}}mount(e){this.current=e,bv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),TM.current||wP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:rh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){bv.delete(this.current),this.projection&&this.projection.unmount(),Nr(this.notifyUpdate),Nr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=xs.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&vt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in xo){const n=xo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Nt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Cv.length;i++){const r=Cv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=CP(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Fa(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(XS(r)||OS(r))?r=parseFloat(r):!bP(r)&&Ir.test(n)&&(r=GS(e,n)),this.setBaseTarget(e,an(r)?r.get():r)),an(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=sm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!an(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new xm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class wM extends RP{constructor(){super(...arguments),this.KeyframeResolver=KS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;an(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function PP(t){return window.getComputedStyle(t)}class DP extends wM{constructor(){super(...arguments),this.type="html",this.renderInstance=fS}readValueFromInstance(e,n){if(xs.has(n)){const i=Tm(n);return i&&i.default||0}else{const i=PP(e),r=(cS(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return hM(e,n)}build(e,n,i){lm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return fm(e,n,i)}}class LP extends wM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Nt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(xs.has(n)){const i=Tm(n);return i&&i.default||0}return n=hS.has(n)?n:nm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return gS(e,n,i)}build(e,n,i){cm(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){pS(e,n,i,r)}mount(e){this.isSVGTag=dm(e.tagName),super.mount(e)}}const NP=(t,e)=>rm(t)?new LP(e):new DP(e,{allowProjection:t!==ae.Fragment}),IP=sb({...iR,...EP,...fP,...TP},NP),cc=yA(IP),UP={hidden:{opacity:0,y:36},visible:(t=0)=>({opacity:1,y:0,transition:{duration:.7,delay:t,ease:[.22,1,.36,1]}})};function ft({children:t,className:e,delay:n=0,as:i="div",...r}){const s=cc[i];return b.jsx(s,{className:e,custom:n,variants:UP,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},...r,children:t})}const FP="/assets/cable-Bnc5TnYG.jpg",AM="/assets/dual-robots-DZMxQiPI.jpg",bM="/assets/hero-I-5Cd0Kk.jpg",Rv="/assets/hero-I-5Cd0Kk.jpg",OP="/assets/manual-CALWm8E1.jpg",CM="/assets/pouch-Bbg-vTYJ.jpg",RM="https://instagram.com/RoboMitra.tech",kP=[{icon:mw,title:"Interactive Robot Experience",text:"RoboMitra reacts with expressive movement and playful behavior that makes every interaction feel more alive."},{icon:gu,title:"Premium Build Quality",text:"Each RoboMitra unit is handmade with love, giving it a polished finish, compact body, and a more premium feel in hand and on display."},{icon:vu,title:"Compact Size Convenience",text:"Portable sizing makes RoboMitra ready to use anytime."}],BP=[{icon:jp,title:"Made To Be Giftable",text:"Its expressive personality, movement, and compact size make RoboMitra a fun gift for kids, friends, and collectors."},{icon:Tw,title:"Easy To Carry And Place",text:"Small enough for desks, shelves, and bedside tables, while still standing out as a display-worthy companion robot."}],zP=[{icon:jp,title:"Robots Interact Together",text:"When placed close to each other, RoboMitra units automatically respond and feel like they are talking to one another."},{icon:qy,title:"2-4 Hours Battery Backup",text:"Built for extended play and display sessions with dependable battery life in a compact body."},{icon:vw,title:"Smooth Eye Movements",text:"Expressive eye motion adds life, attention, and a more believable robotic personality."},{icon:vu,title:"Cute Animations",text:"Delightful animation moments make RoboMitra feel lively without losing its premium product feel."},{icon:iw,title:"Compact and Portable",text:"Designed to be easy to carry, place, and showcase anywhere without taking much space."},{icon:gu,title:"Premium Quality Build",text:"A sturdy finish and well-made construction help RoboMitra feel polished and durable."},{icon:Xp,title:"Human-Like Emotions",text:"Emotion-inspired expressions give the product a warmer, more relatable presence."}],VP=[{image:Rv,title:"3D Model View",alt:"Open 3D view of RoboMitra model",is3d:!0},{image:Rv,title:"Hero Product Shot",alt:"RoboMitra front-facing product photo"},{image:AM,title:"Dual Robot View",alt:"Two RoboMitra units shown together"},{image:bM,title:"Full Box Contents",alt:"RoboMitra with pouch, manual, cable and box contents"},{image:FP,title:"Charging Cable",alt:"RoboMitra Type-C charging cable"},{image:CM,title:"Brand Pouch",alt:"Red branded RoboMitra pouch"},{image:OP,title:"Manual",alt:"RoboMitra manual"}],HP=["RoboMitra robot unit","Type-C charging cable","User manual","Branded storage pouch","Retail packaging"],GP=[{icon:qy,title:"1. Robot is not turning ON",points:["Make sure the battery is charged","Connect to charger and try again","Check if power switch is ON"]},{icon:Nw,title:"2. Screen is not turning ON",points:["Charge the battery fully","Restart the robot","Ensure all connections are proper"]},{icon:Vw,title:"3. Robot is not charging",points:["Use a good quality USB cable","Check charging module connection","Try a different charger"]},{icon:Sw,title:"4. Touch is not working",points:["Make sure your finger is clean and dry","Touch properly on the sensor area","Restart the robot"]},{icon:nA,title:"5. No sound from buzzer",points:["Restart the robot","Contact support"]},{icon:$y,title:"6. Two RoboMitra are not connecting",points:["Bring both robots closer","Restart both devices","Wait a few seconds for auto connect"]},{icon:Ww,title:"7. Robot keeps restarting",points:["Battery may be low","Charge fully before use"]}],WP=[{icon:Aw,title:"Built From A Simple Idea",text:"RoboMitra started with one question: why should smart companion robots be expensive? The project is focused on making them more affordable and accessible."},{icon:jp,title:"More Than A Gadget",text:"RoboMitra is designed as a small desk companion that reacts, expresses, and interacts through touch, sound, and smart behavior."},{icon:Xp,title:"Technology That Feels Human",text:"Our mission is to make technology more human, more fun, and more approachable for everyday use."},{icon:xw,title:"Designed And Assembled In India",text:"We focus on creativity, simplicity, and continuous improvement while building and assembling our products in India."},{icon:$y,title:"Interactive Future",text:"When two RoboMitra devices come close, they can interact with each other, creating a fun and unique shared experience."},{icon:Qw,title:"Just The Beginning",text:"We aim to improve RoboMitra with better design, smarter features, and more interactive capabilities in the future."}],jP={dualRobotsImage:AM,fullKitImage:bM,pouchImage:CM};function XP({onNavigate:t,theme:e,onToggleTheme:n}){return b.jsxs("div",{className:"page-shell support-shell",children:[b.jsx(qp,{ariaLabel:"About navigation",onNavigate:t,theme:e,onToggleTheme:n,links:[{href:"/",label:"Home"},{href:"/support",label:"Support"},{href:RM,label:"Buy Now",external:!0}]}),b.jsxs("main",{className:"support-main",children:[b.jsxs(ft,{className:"support-hero",delay:.04,children:[b.jsx("p",{className:"section-tag",children:"About RoboMitra"}),b.jsx("h2",{children:"Small, interactive, affordable smart robots made for everyday joy."}),b.jsx("p",{className:"hero-text",children:"RoboMitra is a small innovation project focused on creating simple, interactive, and affordable smart robots for everyday use."})]}),b.jsxs(ft,{className:"about-story-card",delay:.08,children:[b.jsxs("div",{className:"support-card-head",children:[b.jsx("div",{className:"icon-wrap support-head-icon",children:b.jsx(vu,{size:20})}),b.jsxs("div",{children:[b.jsx("p",{className:"section-tag",children:"Our story"}),b.jsx("h3",{children:"Why RoboMitra exists"})]})]}),b.jsxs("div",{className:"about-story-copy",children:[b.jsx("p",{children:"We started with a simple idea: smart companion robots should not be out of reach. Our goal is to bring fun, expressive, and engaging robots to everyone at a budget-friendly price."}),b.jsx("p",{children:"RoboMitra is not just a gadget. It is a small desk companion designed to react, express, and interact with you through touch, sound, and smart behavior."}),b.jsx("p",{children:"When two RoboMitra devices come close, they can even interact with each other, creating a unique and playful experience."})]})]}),b.jsxs("section",{className:"faq-section",children:[b.jsxs(ft,{className:"faq-intro",delay:.1,children:[b.jsx("p",{className:"section-tag",children:"What we believe"}),b.jsx("h2",{children:"Making technology more fun, accessible, and human."})]}),b.jsx("div",{className:"faq-grid",children:WP.map(({icon:i,title:r,text:s},o)=>b.jsxs(ft,{as:"article",className:"faq-card",delay:.05*(o+1),children:[b.jsxs("div",{className:"support-card-head",children:[b.jsx("div",{className:"icon-wrap support-head-icon",children:b.jsx(i,{size:20})}),b.jsx("h3",{children:r})]}),b.jsx("p",{className:"about-card-text",children:s})]},r))})]}),b.jsxs(ft,{className:"support-help-card",delay:.12,children:[b.jsxs("div",{className:"support-card-head",children:[b.jsx("div",{className:"icon-wrap support-head-icon",children:b.jsx(Xp,{size:20})}),b.jsxs("div",{children:[b.jsx("p",{className:"section-tag",children:"Thank you"}),b.jsx("h3",{children:"This is just the beginning."})]})]}),b.jsx("p",{className:"support-help-note",children:"Thank you for supporting RoboMitra. We are continuing to improve the product with better design, smarter features, and more interactive capabilities in the future."})]})]})]})}function YP({title:t,image:e,alt:n,delay:i,onClick:r}){const s=typeof r=="function";return b.jsxs(ft,{as:s?"button":"article",className:`gallery-card${s?" gallery-card-button":""}`,delay:i,type:s?"button":void 0,onClick:s?r:void 0,children:[b.jsx("img",{className:"gallery-photo",src:e,alt:n}),b.jsxs("div",{className:"gallery-copy gallery-copy-overlay",children:[b.jsx("h3",{children:t}),s?b.jsx("p",{className:"gallery-hint",children:"Click to view in 3D"}):null]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rm="184",ao={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qP=0,Pv=1,$P=2,uc=1,KP=2,na=3,Ur=0,wn=1,zi=2,Yi=0,lo=1,Dv=2,Lv=3,Nv=4,ZP=5,Jr=100,QP=101,JP=102,e2=103,t2=104,n2=200,i2=201,r2=202,s2=203,sh=204,oh=205,o2=206,a2=207,l2=208,c2=209,u2=210,d2=211,f2=212,h2=213,p2=214,ah=0,lh=1,ch=2,So=3,uh=4,dh=5,fh=6,hh=7,PM=0,m2=1,g2=2,Ai=0,DM=1,LM=2,NM=3,IM=4,UM=5,FM=6,OM=7,kM=300,ms=301,Mo=302,md=303,gd=304,Tu=306,ph=1e3,Gi=1001,mh=1002,Kt=1003,v2=1004,El=1005,ln=1006,vd=1007,ss=1008,Dn=1009,BM=1010,zM=1011,Ba=1012,Pm=1013,Ci=1014,yi=1015,er=1016,Dm=1017,Lm=1018,za=1020,VM=35902,HM=35899,GM=1021,WM=1022,oi=1023,tr=1026,os=1027,jM=1028,Nm=1029,gs=1030,Im=1031,Um=1033,dc=33776,fc=33777,hc=33778,pc=33779,gh=35840,vh=35841,_h=35842,xh=35843,yh=36196,Sh=37492,Mh=37496,Eh=37488,Th=37489,qc=37490,wh=37491,Ah=37808,bh=37809,Ch=37810,Rh=37811,Ph=37812,Dh=37813,Lh=37814,Nh=37815,Ih=37816,Uh=37817,Fh=37818,Oh=37819,kh=37820,Bh=37821,zh=36492,Vh=36494,Hh=36495,Gh=36283,Wh=36284,$c=36285,jh=36286,_2=3200,Xh=0,x2=1,xr="",xn="srgb",Kc="srgb-linear",Zc="linear",nt="srgb",Es=7680,Iv=519,y2=512,S2=513,M2=514,Fm=515,E2=516,T2=517,Om=518,w2=519,Uv=35044,Fv="300 es",Si=2e3,Va=2001;function A2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function b2(){const t=Qc("canvas");return t.style.display="block",t}const Ov={};function kv(...t){const e="THREE."+t.shift();console.log(e,...t)}function XM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Pe(...t){t=XM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=XM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Yh(...t){const e=t.join(" ");e in Ov||(Ov[e]=!0,Pe(...t))}function C2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const R2={[ah]:lh,[ch]:fh,[uh]:hh,[So]:dh,[lh]:ah,[fh]:ch,[hh]:uh,[dh]:So};class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,qh=180/Math.PI;function Za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function P2(t,e){return(t%e+e)%e}function _d(t,e,n){return(1-n)*t+n*e}function Vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const D2={DEG2RAD:mc},Wm=class Wm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wm.prototype.isVector2=!0;let ke=Wm;class Fr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(f!==y||l!==d||c!==p||u!==v){let g=l*d+c*p+u*v+f*y;g<0&&(d=-d,p=-p,v=-v,y=-y,g=-g);let h=1-a;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);h=Math.sin(h*m)/_,a=Math.sin(a*m)/_,l=l*h+d*a,c=c*h+p*a,u=u*h+v*a,f=f*h+y*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+v*a,f=f*h+y*a;const m=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=m,c*=m,u*=m,f*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*d,e[n+1]=l*v+u*d+c*f-a*p,e[n+2]=c*v+u*p+a*d-l*f,e[n+3]=u*v-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jm=class jm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jm.prototype.isVector3=!0;let z=jm;const xd=new z,Bv=new Fr,Xm=class Xm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],y=r[0],g=r[3],h=r[6],m=r[1],_=r[4],M=r[7],w=r[2],E=r[5],C=r[8];return s[0]=o*y+a*m+l*w,s[3]=o*g+a*_+l*E,s[6]=o*h+a*M+l*C,s[1]=c*y+u*m+f*w,s[4]=c*g+u*_+f*E,s[7]=c*h+u*M+f*C,s[2]=d*y+p*m+v*w,s[5]=d*g+p*_+v*E,s[8]=d*h+p*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yd.makeScale(e,n)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,n){return this.premultiply(yd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xm.prototype.isMatrix3=!0;let Ue=Xm;const yd=new Ue,zv=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vv=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L2(){const t={enabled:!0,workingColorSpace:Kc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=co(r.r),r.g=co(r.g),r.b=co(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?Zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Kc]:{primaries:e,whitePoint:i,transfer:Zc,toXYZ:zv,fromXYZ:Vv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:zv,fromXYZ:Vv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),t}const $e=L2();function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function co(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ts;class N2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ts===void 0&&(Ts=Qc("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ts}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I2=0;class km{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I2++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sd(r[o].image)):s.push(Sd(r[o]))}else s=Sd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Sd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?N2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let U2=0;const Md=new z;class pn extends Hr{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Gi,r=Gi,s=ln,o=ss,a=oi,l=Dn,c=pn.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U2++}),this.uuid=Za(),this.name="",this.source=new km(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=kM;pn.DEFAULT_ANISOTROPY=1;const Ym=class Ym{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,w=(h+1)/2,E=(u+d)/4,C=(f+y)/4,x=(v+g)/4;return _>M&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=C/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=x/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(f-y)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ym.prototype.isVector4=!0;let Rt=Ym;class F2 extends Hr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new pn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new km(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends F2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class YM extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O2 extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,v,y,g)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,v,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,y=c*f;n[0]=d+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k2,e,B2)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ar.crossVectors(i,Cn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ar.crossVectors(i,Cn)),ar.normalize(),Tl.crossVectors(Cn,ar),r[0]=ar.x,r[4]=Tl.x,r[8]=Cn.x,r[1]=ar.y,r[5]=Tl.y,r[9]=Cn.y,r[2]=ar.z,r[6]=Tl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],y=i[6],g=i[10],h=i[14],m=i[3],_=i[7],M=i[11],w=i[15],E=r[0],C=r[4],x=r[8],R=r[12],D=r[1],P=r[5],k=r[9],X=r[13],q=r[2],I=r[6],V=r[10],O=r[14],U=r[3],j=r[7],Z=r[11],oe=r[15];return s[0]=o*E+a*D+l*q+c*U,s[4]=o*C+a*P+l*I+c*j,s[8]=o*x+a*k+l*V+c*Z,s[12]=o*R+a*X+l*O+c*oe,s[1]=u*E+f*D+d*q+p*U,s[5]=u*C+f*P+d*I+p*j,s[9]=u*x+f*k+d*V+p*Z,s[13]=u*R+f*X+d*O+p*oe,s[2]=v*E+y*D+g*q+h*U,s[6]=v*C+y*P+g*I+h*j,s[10]=v*x+y*k+g*V+h*Z,s[14]=v*R+y*X+g*O+h*oe,s[3]=m*E+_*D+M*q+w*U,s[7]=m*C+_*P+M*I+w*j,s[11]=m*x+_*k+M*V+w*Z,s[15]=m*R+_*X+M*O+w*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],y=e[7],g=e[11],h=e[15],m=l*p-c*d,_=a*p-c*f,M=a*d-l*f,w=o*p-c*u,E=o*d-l*u,C=o*f-a*u;return n*(y*m-g*_+h*M)-i*(v*m-g*w+h*E)+r*(v*_-y*w+h*C)-s*(v*M-y*E+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],y=e[13],g=e[14],h=e[15],m=n*a-i*o,_=n*l-r*o,M=n*c-s*o,w=i*l-r*a,E=i*c-s*a,C=r*c-s*l,x=u*y-f*v,R=u*g-d*v,D=u*h-p*v,P=f*g-d*y,k=f*h-p*y,X=d*h-p*g,q=m*X-_*k+M*P+w*D-E*R+C*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/q;return e[0]=(a*X-l*k+c*P)*I,e[1]=(r*k-i*X-s*P)*I,e[2]=(y*C-g*E+h*w)*I,e[3]=(d*E-f*C-p*w)*I,e[4]=(l*D-o*X-c*R)*I,e[5]=(n*X-r*D+s*R)*I,e[6]=(g*M-v*C-h*_)*I,e[7]=(u*C-d*M+p*_)*I,e[8]=(o*k-a*D+c*x)*I,e[9]=(i*D-n*k-s*x)*I,e[10]=(v*E-y*M+h*m)*I,e[11]=(f*M-u*E-p*m)*I,e[12]=(a*R-o*P-l*x)*I,e[13]=(n*P-i*R+r*x)*I,e[14]=(y*_-v*w-g*m)*I,e[15]=(u*w-f*_+d*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,v=s*f,y=o*u,g=o*f,h=a*f,m=l*c,_=l*u,M=l*f,w=i.x,E=i.y,C=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+M)*w,r[2]=(v-_)*w,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(d+h))*E,r[6]=(g+m)*E,r[7]=0,r[8]=(v+_)*C,r[9]=(g-m)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ws.set(r[0],r[1],r[2]).length();const a=ws.set(r[4],r[5],r[6]).length(),l=ws.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Qn.copy(this);const c=1/o,u=1/a,f=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,n.setFromRotationMatrix(Qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Si,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===Si)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Va)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===Si)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===Va)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Jc.prototype.isMatrix4=!0;let Ut=Jc;const ws=new z,Qn=new Ut,k2=new z(0,0,0),B2=new z(1,1,1),ar=new z,Tl=new z,Cn=new z,Hv=new Ut,Gv=new Fr;class Or{constructor(e=0,n=0,i=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gv.setFromEuler(this),this.setFromQuaternion(Gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class qM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z2=0;const Wv=new z,As=new Fr,Li=new Ut,wl=new z,Ho=new z,V2=new z,H2=new Fr,jv=new z(1,0,0),Xv=new z(0,1,0),Yv=new z(0,0,1),qv={type:"added"},G2={type:"removed"},bs={type:"childadded",child:null},Ed={type:"childremoved",child:null};class cn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new z,n=new Or,i=new Fr,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ue}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(jv,e)}rotateY(e){return this.rotateOnAxis(Xv,e)}rotateZ(e){return this.rotateOnAxis(Yv,e)}translateOnAxis(e,n){return Wv.copy(e).applyQuaternion(this.quaternion),this.position.add(Wv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jv,e)}translateY(e){return this.translateOnAxis(Xv,e)}translateZ(e){return this.translateOnAxis(Yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wl.copy(e):wl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ho,wl,this.up):Li.lookAt(wl,Ho,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),As.setFromRotationMatrix(Li),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qv),bs.child=e,this.dispatchEvent(bs),bs.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(G2),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qv),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,V2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,H2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new z(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Al extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W2={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Al;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $M={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},bl={h:0,s:0,l:0};function wd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=P2(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wd(o,s,e+1/3),this.g=wd(o,s,e),this.b=wd(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=$M[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return $e.workingToColorSpace(rn.copy(this),e),Math.round(We(rn.r*255,0,255))*65536+Math.round(We(rn.g*255,0,255))*256+Math.round(We(rn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=xn){$e.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(bl);const i=_d(lr.h,bl.h,n),r=_d(lr.s,bl.s,n),s=_d(lr.l,bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new tt;tt.NAMES=$M;class j2 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new z,Ni=new z,Ad=new z,Ii=new z,Cs=new z,Rs=new z,$v=new z,bd=new z,Cd=new z,Rd=new z,Pd=new Rt,Dd=new Rt,Ld=new Rt;class si{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ni.subVectors(i,n),Ad.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(Ni),l=Jn.dot(Ad),c=Ni.dot(Ni),u=Ni.dot(Ad),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Pd.setScalar(0),Dd.setScalar(0),Ld.setScalar(0),Pd.fromBufferAttribute(e,n),Dd.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pd,s.x),o.addScaledVector(Dd,s.y),o.addScaledVector(Ld,s.z),o}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ni.subVectors(e,n),Jn.cross(Ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Jn.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Cs.subVectors(r,i),Rs.subVectors(s,i),bd.subVectors(e,i);const l=Cs.dot(bd),c=Rs.dot(bd);if(l<=0&&c<=0)return n.copy(i);Cd.subVectors(e,r);const u=Cs.dot(Cd),f=Rs.dot(Cd);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Cs,o);Rd.subVectors(e,s);const p=Cs.dot(Rd),v=Rs.dot(Rd);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Rs,a);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return $v.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector($v,a);const h=1/(g+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Po{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),Rl.subVectors(this.max,Go),Ps.subVectors(e.a,Go),Ds.subVectors(e.b,Go),Ls.subVectors(e.c,Go),cr.subVectors(Ds,Ps),ur.subVectors(Ls,Ds),jr.subVectors(Ps,Ls);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-jr.z,jr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,jr.z,0,-jr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-jr.y,jr.x,0];return!Nd(n,Ps,Ds,Ls,Rl)||(n=[1,0,0,0,1,0,0,0,1],!Nd(n,Ps,Ds,Ls,Rl))?!1:(Pl.crossVectors(cr,ur),n=[Pl.x,Pl.y,Pl.z],Nd(n,Ps,Ds,Ls,Rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new z,new z,new z,new z,new z,new z,new z,new z],ei=new z,Cl=new Po,Ps=new z,Ds=new z,Ls=new z,cr=new z,ur=new z,jr=new z,Go=new z,Rl=new z,Pl=new z,Xr=new z;function Nd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),u=i.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ft=new z,Dl=new ke;let X2=0;class Un extends Hr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Uv,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Dl.fromBufferAttribute(this,n),Dl.applyMatrix3(e),this.setXY(n,Dl.x,Dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class KM extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ZM extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ci extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Y2=new Po,Wo=new z,Id=new z;class Bm{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Y2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const n=Wo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Wo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Id)),this.expandByPoint(Wo.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let q2=0;const Hn=new Ut,Ud=new cn,Ns=new z,Rn=new Po,jo=new Po,jt=new z;class di extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A2(e)?ZM:KM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ci(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Rn.min,jo.min),Rn.expandByPoint(jt),jt.addVectors(Rn.max,jo.max),Rn.expandByPoint(jt)):(Rn.expandByPoint(jo.min),Rn.expandByPoint(jo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),jt.add(Ns)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new z,l[x]=new z;const c=new z,u=new z,f=new z,d=new ke,p=new ke,v=new ke,y=new z,g=new z;function h(x,R,D){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,D),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,R),v.fromBufferAttribute(s,D),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(P),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),a[x].add(y),a[R].add(y),a[D].add(y),l[x].add(g),l[R].add(g),l[D].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let x=0,R=m.length;x<R;++x){const D=m[x],P=D.start,k=D.count;for(let X=P,q=P+k;X<q;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const _=new z,M=new z,w=new z,E=new z;function C(x){w.fromBufferAttribute(r,x),E.copy(w);const R=a[x];_.copy(R),_.sub(w.multiplyScalar(w.dot(R))).normalize(),M.crossVectors(E,R);const P=M.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,P)}for(let x=0,R=m.length;x<R;++x){const D=m[x],P=D.start,k=D.count;for(let X=P,q=P+k;X<q;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new Un(d,u,f)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $2=0;class Qa extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$2++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=lo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Pe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fi=new z,Fd=new z,Ll=new z,dr=new z,Od=new z,Nl=new z,kd=new z;class QM{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fd.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Fd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ll),a=dr.dot(this.direction),l=-dr.dot(Ll),c=dr.lengthSq(),u=Math.abs(1-o*o);let f,d,p,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const y=1/u;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fd).addScaledVector(Ll,d),p}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,r,s){Od.subVectors(n,e),Nl.subVectors(i,e),kd.crossVectors(Od,Nl);let o=this.direction.dot(kd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dr.subVectors(this.origin,e);const l=a*this.direction.dot(Nl.crossVectors(dr,Nl));if(l<0)return null;const c=a*this.direction.dot(Od.cross(dr));if(c<0||l+c>o)return null;const u=-a*dr.dot(kd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class JM extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=PM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kv=new Ut,Yr=new QM,Il=new Bm,Zv=new z,Ul=new z,Fl=new z,Ol=new z,Bd=new z,kl=new z,Qv=new z,Bl=new z;class Ri extends cn{constructor(e=new di,n=new JM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Bd.fromBufferAttribute(f,e),o?kl.addScaledVector(Bd,u):kl.addScaledVector(Bd.sub(n),u))}n.add(kl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(Il.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Il,Zv)===null||Yr.origin.distanceToSquared(Zv)>(e.far-e.near)**2))&&(Kv.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(Kv),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const g=d[v],h=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,w=_;M<w;M+=3){const E=a.getX(M),C=a.getX(M+1),x=a.getX(M+2);r=zl(this,h,e,i,c,u,f,E,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=v,h=y;g<h;g+=3){const m=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);r=zl(this,o,e,i,c,u,f,m,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const g=d[v],h=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,w=_;M<w;M+=3){const E=M,C=M+1,x=M+2;r=zl(this,h,e,i,c,u,f,E,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,h=y;g<h;g+=3){const m=g,_=g+1,M=g+2;r=zl(this,o,e,i,c,u,f,m,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function K2(t,e,n,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;Bl.copy(a),Bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bl);return c<n.near||c>n.far?null:{distance:c,point:Bl.clone(),object:t}}function zl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ul),t.getVertexPosition(l,Fl),t.getVertexPosition(c,Ol);const u=K2(t,e,n,i,Ul,Fl,Ol,Qv);if(u){const f=new z;si.getBarycoord(Qv,Ul,Fl,Ol,f),r&&(u.uv=si.getInterpolatedAttribute(r,a,l,c,f,new ke)),s&&(u.uv1=si.getInterpolatedAttribute(s,a,l,c,f,new ke)),o&&(u.normal=si.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};si.getNormal(Ul,Fl,Ol,d.normal),u.face=d,u.barycoord=f}return u}class Z2 extends pn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,u=Kt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new z,Q2=new z,J2=new Ue;class gr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zd.subVectors(i,n).cross(Q2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(zd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||J2.getNormalMatrix(e),r=this.coplanarPoint(zd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Bm,e3=new ke(.5,.5),Vl=new z;class zm{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,o=new gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],v=s[8],y=s[9],g=s[10],h=s[11],m=s[12],_=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-o,p-u,h-v,w-m).normalize(),r[1].setComponents(c+o,p+u,h+v,w+m).normalize(),r[2].setComponents(c+a,p+f,h+y,w+_).normalize(),r[3].setComponents(c-a,p-f,h-y,w-_).normalize(),i)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,p-d,h-g,w-M).normalize();else if(r[4].setComponents(c-l,p-d,h-g,w-M).normalize(),n===Si)r[5].setComponents(c+l,p+d,h+g,w+M).normalize();else if(n===Va)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const n=e3.distanceTo(e.center);return qr.radius=.7071067811865476+n,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vl.x=r.normal.x>0?e.max.x:e.min.x,Vl.y=r.normal.y>0?e.max.y:e.min.y,Vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eE extends pn{constructor(e=[],n=ms,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eo extends pn{constructor(e,n,i=Ci,r,s,o,a=Kt,l=Kt,c,u=tr,f=1){if(u!==tr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new km(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class t3 extends Eo{constructor(e,n=Ci,i=ms,r,s,o=Kt,a=Kt,l,c=tr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tE extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ja extends di{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(f,2));function v(y,g,h,m,_,M,w,E,C,x,R){const D=M/C,P=w/x,k=M/2,X=w/2,q=E/2,I=C+1,V=x+1;let O=0,U=0;const j=new z;for(let Z=0;Z<V;Z++){const oe=Z*P-X;for(let he=0;he<I;he++){const He=he*D-k;j[y]=He*m,j[g]=oe*_,j[h]=q,c.push(j.x,j.y,j.z),j[y]=0,j[g]=0,j[h]=E>0?1:-1,u.push(j.x,j.y,j.z),f.push(he/C),f.push(1-Z/x),O+=1}}for(let Z=0;Z<x;Z++)for(let oe=0;oe<C;oe++){const he=d+oe+I*Z,He=d+oe+I*(Z+1),Xe=d+(oe+1)+I*(Z+1),Le=d+(oe+1)+I*Z;l.push(he,He,Le),l.push(He,Xe,Le),U+=6}a.addGroup(p,U,R),p+=U,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wu extends di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],v=[],y=[],g=[];for(let h=0;h<u;h++){const m=h*d-o;for(let _=0;_<c;_++){const M=_*f-s;v.push(M,-m,0),y.push(0,0,1),g.push(_/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const _=m+c*h,M=m+c*(h+1),w=m+1+c*(h+1),E=m+1+c*h;p.push(_,M,E),p.push(M,w,E)}this.setIndex(p),this.setAttribute("position",new ci(v,3)),this.setAttribute("normal",new ci(y,3)),this.setAttribute("uv",new ci(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}function To(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Jv(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Jv(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=To(t[n]);for(const r in i)e[r]=i[r]}return e}function Jv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function n3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const i3={clone:To,merge:dn};var r3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r3,this.fragmentShader=s3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=n3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class o3 extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class a3 extends Qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class l3 extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c3 extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(t_(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!t_(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function t_(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class u3{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const d3=new u3;class Vm{constructor(e){this.manager=e!==void 0?e:d3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class f3 extends Error{constructor(e,n){super(e),this.response=n}}class h3 extends Vm{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=e_.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Oi[e]!==void 0){Oi[e].push({onLoad:n,onProgress:i,onError:r});return}Oi[e]=[],Oi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Oi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let y=0;const g=new ReadableStream({start(h){m();function m(){f.read().then(({done:_,value:M})=>{if(_)h.close();else{y+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:p});for(let E=0,C=u.length;E<C;E++){const x=u[E];x.onProgress&&x.onProgress(w)}h.enqueue(M),m()}},_=>{h.error(_)})}}});return new Response(g)}else throw new f3(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{e_.add(`file:${e}`,c);const u=Oi[e];delete Oi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class iE extends cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Vd=new Ut,n_=new z,i_=new z;class p3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zm,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;n_.setFromMatrixPosition(e.matrixWorld),n.position.copy(n_),i_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(i_),n.updateMatrixWorld(),Vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Va||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hl=new z,Gl=new Fr,mi=new z;class rE extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Gl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,mi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Hl,Gl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new z,r_=new ke,s_=new ke;class Xn extends rE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,r_,s_),n.subVectors(s_,r_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(mc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Hm extends rE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class m3 extends p3{constructor(){super(new Hm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class o_ extends iE{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new m3}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class g3 extends iE{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Is=-90,Us=1;class v3 extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(Is,Us,e,n);r.layers=this.layers,this.add(r);const s=new Xn(Is,Us,e,n);s.layers=this.layers,this.add(s);const o=new Xn(Is,Us,e,n);o.layers=this.layers,this.add(o);const a=new Xn(Is,Us,e,n);a.layers=this.layers,this.add(a);const l=new Xn(Is,Us,e,n);l.layers=this.layers,this.add(l);const c=new Xn(Is,Us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _3 extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class a_{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const qm=class qm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};qm.prototype.isMatrix2=!0;let l_=qm;class x3 extends Hr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function c_(t,e,n,i){const r=y3(i);switch(n){case GM:return t*e;case jM:return t*e/r.components*r.byteLength;case Nm:return t*e/r.components*r.byteLength;case gs:return t*e*2/r.components*r.byteLength;case Im:return t*e*2/r.components*r.byteLength;case WM:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Um:return t*e*4/r.components*r.byteLength;case dc:case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vh:case xh:return Math.max(t,16)*Math.max(e,8)/4;case gh:case _h:return Math.max(t,8)*Math.max(e,8)/2;case yh:case Sh:case Eh:case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mh:case qc:case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zh:case Vh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gh:case Wh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case $c:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y3(t){switch(t){case Dn:case BM:return{byteLength:1,components:1};case Ba:case zM:case er:return{byteLength:2,components:1};case Dm:case Lm:return{byteLength:2,components:4};case Ci:case Pm:case yi:return{byteLength:4,components:1};case VM:case HM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rm}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function S3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],y=f[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var M3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E3=`#ifdef USE_ALPHAHASH
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
#endif`,T3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C3=`#ifdef USE_AOMAP
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
#endif`,R3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,D3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U3=`#ifdef USE_IRIDESCENCE
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
#endif`,F3=`#ifdef USE_BUMPMAP
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
#endif`,O3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,j3=`#define PI 3.141592653589793
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
} // validated`,X3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y3=`vec3 transformedNormal = objectNormal;
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
#endif`,q3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q3="gl_FragColor = linearToOutputTexel( gl_FragColor );",J3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eD=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nD=`#ifdef USE_ENVMAP
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
#endif`,iD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rD=`#ifdef USE_ENVMAP
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
#endif`,sD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cD=`#ifdef USE_GRADIENTMAP
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
}`,uD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hD=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,pD=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,mD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_D=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,yD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SD=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,ED=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TD=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LD=`#if defined( USE_POINTS_UV )
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
#endif`,ND=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ID=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kD=`#ifdef USE_MORPHTARGETS
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
#endif`,BD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jD=`#ifdef USE_NORMALMAP
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
#endif`,XD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$D=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,aL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cL=`#ifdef USE_SKINNING
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
#endif`,uL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dL=`#ifdef USE_SKINNING
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
#endif`,fL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mL=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gL=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vL=`#ifdef USE_TRANSMISSION
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
#endif`,_L=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ML=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EL=`uniform sampler2D t2D;
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
}`,TL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CL=`#include <common>
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
}`,RL=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PL=`#define DISTANCE
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
}`,DL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IL=`uniform float scale;
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
}`,UL=`uniform vec3 diffuse;
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
}`,FL=`#include <common>
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
}`,OL=`uniform vec3 diffuse;
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
}`,kL=`#define LAMBERT
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
}`,BL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,zL=`#define MATCAP
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
}`,VL=`#define MATCAP
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
}`,HL=`#define NORMAL
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
}`,GL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WL=`#define PHONG
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
}`,jL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,XL=`#define STANDARD
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
}`,YL=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,qL=`#define TOON
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
}`,$L=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,KL=`uniform float size;
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
}`,ZL=`uniform vec3 diffuse;
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
}`,QL=`#include <common>
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
}`,JL=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,eN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,tN=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:M3,alphahash_pars_fragment:E3,alphamap_fragment:T3,alphamap_pars_fragment:w3,alphatest_fragment:A3,alphatest_pars_fragment:b3,aomap_fragment:C3,aomap_pars_fragment:R3,batching_pars_vertex:P3,batching_vertex:D3,begin_vertex:L3,beginnormal_vertex:N3,bsdfs:I3,iridescence_fragment:U3,bumpmap_pars_fragment:F3,clipping_planes_fragment:O3,clipping_planes_pars_fragment:k3,clipping_planes_pars_vertex:B3,clipping_planes_vertex:z3,color_fragment:V3,color_pars_fragment:H3,color_pars_vertex:G3,color_vertex:W3,common:j3,cube_uv_reflection_fragment:X3,defaultnormal_vertex:Y3,displacementmap_pars_vertex:q3,displacementmap_vertex:$3,emissivemap_fragment:K3,emissivemap_pars_fragment:Z3,colorspace_fragment:Q3,colorspace_pars_fragment:J3,envmap_fragment:eD,envmap_common_pars_fragment:tD,envmap_pars_fragment:nD,envmap_pars_vertex:iD,envmap_physical_pars_fragment:pD,envmap_vertex:rD,fog_vertex:sD,fog_pars_vertex:oD,fog_fragment:aD,fog_pars_fragment:lD,gradientmap_pars_fragment:cD,lightmap_pars_fragment:uD,lights_lambert_fragment:dD,lights_lambert_pars_fragment:fD,lights_pars_begin:hD,lights_toon_fragment:mD,lights_toon_pars_fragment:gD,lights_phong_fragment:vD,lights_phong_pars_fragment:_D,lights_physical_fragment:xD,lights_physical_pars_fragment:yD,lights_fragment_begin:SD,lights_fragment_maps:MD,lights_fragment_end:ED,lightprobes_pars_fragment:TD,logdepthbuf_fragment:wD,logdepthbuf_pars_fragment:AD,logdepthbuf_pars_vertex:bD,logdepthbuf_vertex:CD,map_fragment:RD,map_pars_fragment:PD,map_particle_fragment:DD,map_particle_pars_fragment:LD,metalnessmap_fragment:ND,metalnessmap_pars_fragment:ID,morphinstance_vertex:UD,morphcolor_vertex:FD,morphnormal_vertex:OD,morphtarget_pars_vertex:kD,morphtarget_vertex:BD,normal_fragment_begin:zD,normal_fragment_maps:VD,normal_pars_fragment:HD,normal_pars_vertex:GD,normal_vertex:WD,normalmap_pars_fragment:jD,clearcoat_normal_fragment_begin:XD,clearcoat_normal_fragment_maps:YD,clearcoat_pars_fragment:qD,iridescence_pars_fragment:$D,opaque_fragment:KD,packing:ZD,premultiplied_alpha_fragment:QD,project_vertex:JD,dithering_fragment:eL,dithering_pars_fragment:tL,roughnessmap_fragment:nL,roughnessmap_pars_fragment:iL,shadowmap_pars_fragment:rL,shadowmap_pars_vertex:sL,shadowmap_vertex:oL,shadowmask_pars_fragment:aL,skinbase_vertex:lL,skinning_pars_vertex:cL,skinning_vertex:uL,skinnormal_vertex:dL,specularmap_fragment:fL,specularmap_pars_fragment:hL,tonemapping_fragment:pL,tonemapping_pars_fragment:mL,transmission_fragment:gL,transmission_pars_fragment:vL,uv_pars_fragment:_L,uv_pars_vertex:xL,uv_vertex:yL,worldpos_vertex:SL,background_vert:ML,background_frag:EL,backgroundCube_vert:TL,backgroundCube_frag:wL,cube_vert:AL,cube_frag:bL,depth_vert:CL,depth_frag:RL,distance_vert:PL,distance_frag:DL,equirect_vert:LL,equirect_frag:NL,linedashed_vert:IL,linedashed_frag:UL,meshbasic_vert:FL,meshbasic_frag:OL,meshlambert_vert:kL,meshlambert_frag:BL,meshmatcap_vert:zL,meshmatcap_frag:VL,meshnormal_vert:HL,meshnormal_frag:GL,meshphong_vert:WL,meshphong_frag:jL,meshphysical_vert:XL,meshphysical_frag:YL,meshtoon_vert:qL,meshtoon_frag:$L,points_vert:KL,points_frag:ZL,shadow_vert:QL,shadow_frag:JL,sprite_vert:eN,sprite_frag:tN},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},_i={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};_i.physical={uniforms:dn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wl={r:0,b:0,g:0},nN=new Ut,oE=new Ue;oE.set(-1,0,0,0,1,0,0,0,1);function iN(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const M=m.backgroundBlurriness>0;_=e.get(_,M)}return _}function v(m){let _=!1;const M=p(m);M===null?g(o,a):M&&M.isColor&&(g(M,1),_=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===Tu)?(c===void 0&&(c=new Ri(new Ja(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:To(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nN.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(oE),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==nt,(u!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ri(new wu(2,2),new Pi({name:"BackgroundMaterial",uniforms:To(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(Wl,nE(t)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,_,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:v,addToRenderList:y,dispose:h}}function rN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(P,k,X,q,I){let V=!1;const O=f(P,q,X,k);s!==O&&(s=O,c(s.object)),V=p(P,q,X,I),V&&v(P,q,X,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(P,k,X,q),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function f(P,k,X,q){const I=q.wireframe===!0;let V=i[k.id];V===void 0&&(V={},i[k.id]=V);const O=P.isInstancedMesh===!0?P.id:0;let U=V[O];U===void 0&&(U={},V[O]=U);let j=U[X.id];j===void 0&&(j={},U[X.id]=j);let Z=j[I];return Z===void 0&&(Z=d(l()),j[I]=Z),Z}function d(P){const k=[],X=[],q=[];for(let I=0;I<n;I++)k[I]=0,X[I]=0,q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,k,X,q){const I=s.attributes,V=k.attributes;let O=0;const U=X.getAttributes();for(const j in U)if(U[j].location>=0){const oe=I[j];let he=V[j];if(he===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;O++}return s.attributesNum!==O||s.index!==q}function v(P,k,X,q){const I={},V=k.attributes;let O=0;const U=X.getAttributes();for(const j in U)if(U[j].location>=0){let oe=V[j];oe===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),I[j]=he,O++}s.attributes=I,s.attributesNum=O,s.index=q}function y(){const P=s.newAttributes;for(let k=0,X=P.length;k<X;k++)P[k]=0}function g(P){h(P,0)}function h(P,k){const X=s.newAttributes,q=s.enabledAttributes,I=s.attributeDivisors;X[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),I[P]!==k&&(t.vertexAttribDivisor(P,k),I[P]=k)}function m(){const P=s.newAttributes,k=s.enabledAttributes;for(let X=0,q=k.length;X<q;X++)k[X]!==P[X]&&(t.disableVertexAttribArray(X),k[X]=0)}function _(P,k,X,q,I,V,O){O===!0?t.vertexAttribIPointer(P,k,X,I,V):t.vertexAttribPointer(P,k,X,q,I,V)}function M(P,k,X,q){y();const I=q.attributes,V=X.getAttributes(),O=k.defaultAttributeValues;for(const U in V){const j=V[U];if(j.location>=0){let Z=I[U];if(Z===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const oe=Z.normalized,he=Z.itemSize,He=e.get(Z);if(He===void 0)continue;const Xe=He.buffer,Le=He.type,K=He.bytesPerElement,fe=Le===t.INT||Le===t.UNSIGNED_INT||Z.gpuType===Pm;if(Z.isInterleavedBufferAttribute){const le=Z.data,Re=le.stride,Ie=Z.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<j.locationSize;De++)h(j.location+De,le.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<j.locationSize;De++)g(j.location+De);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let De=0;De<j.locationSize;De++)_(j.location+De,he/j.locationSize,Le,oe,Re*K,(Ie+he/j.locationSize*De)*K,fe)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<j.locationSize;le++)h(j.location+le,Z.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<j.locationSize;le++)g(j.location+le);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let le=0;le<j.locationSize;le++)_(j.location+le,he/j.locationSize,Le,oe,he*K,he/j.locationSize*le*K,fe)}}else if(O!==void 0){const oe=O[U];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(j.location,oe);break;case 3:t.vertexAttrib3fv(j.location,oe);break;case 4:t.vertexAttrib4fv(j.location,oe);break;default:t.vertexAttrib1fv(j.location,oe)}}}}m()}function w(){R();for(const P in i){const k=i[P];for(const X in k){const q=k[X];for(const I in q){const V=q[I];for(const O in V)u(V[O].object),delete V[O];delete q[I]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const X in k){const q=k[X];for(const I in q){const V=q[I];for(const O in V)u(V[O].object),delete V[O];delete q[I]}}delete i[P.id]}function C(P){for(const k in i){const X=i[k];for(const q in X){const I=X[q];if(I[P.id]===void 0)continue;const V=I[P.id];for(const O in V)u(V[O].object),delete V[O];delete I[P.id]}}}function x(P){for(const k in i){const X=i[k],q=P.isInstancedMesh===!0?P.id:0,I=X[q];if(I!==void 0){for(const V in I){const O=I[V];for(const U in O)u(O[U].object),delete O[U];delete I[V]}delete X[q],Object.keys(X).length===0&&delete i[k]}}}function R(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function sN(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function oN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==oi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Dn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yi&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,maxSamples:w,samples:E}}function aN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,_=m*4;let M=h.clippingState||null;l.value=M,M=u(v,d,_,p);for(let w=0;w!==_;++w)M[w]=n[w];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const h=p+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,M=p;_!==y;++_,M+=4)o.copy(f[_]).applyMatrix4(m,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const Mr=4,u_=[.125,.215,.35,.446,.526,.582],es=20,lN=256,Xo=new Hm,d_=new tt;let Hd=null,Gd=0,Wd=0,jd=!1;const cN=new z;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=cN}=s;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,Wd),this._renderer.xr.enabled=jd,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:er,format:oi,colorSpace:Kc,depthBuffer:!1},r=h_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uN(s)),this._blurMaterial=fN(s,e,n),this._ggxMaterial=dN(s,e,n)}return r}_compileMaterial(e){const n=new Ri(new di,e);this._renderer.compile(n,Xo)}_sceneToCubeUV(e,n,i,r,s){const l=new Xn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(d_),f.toneMapping=Ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new Ja,new JM({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let h=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,h=!0):(g.color.copy(d_),h=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const w=this._cubeSize;Fs(r,M*w,_>2?w:0,w,w),f.setRenderTarget(r),h&&f.render(y,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:v}=this,y=this._sizeLods[i],g=3*y*(i>v-Mr?i-v+Mr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,Fs(s,g,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Fs(e,g,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Xo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*es-1),y=s/v,g=isFinite(s)?1+Math.floor(u*y):es;g>es&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);const h=[];let m=0;for(let C=0;C<es;++C){const x=C/y,R=Math.exp(-x*x/2);h.push(R),C===0?m+=R:C<g&&(m+=2*R)}for(let C=0;C<h.length;C++)h[C]=h[C]/m;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const M=this._sizeLods[r],w=3*M*(r>_-Mr?r-_+Mr:0),E=4*(this._cubeSize-M);Fs(n,w,E,3*M,2*M),l.setRenderTarget(n),l.render(f,Xo)}}function uN(t){const e=[],n=[],i=[];let r=t;const s=t-Mr+1+u_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Mr?l=u_[o-t+Mr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,y=3,g=2,h=1,m=new Float32Array(y*v*p),_=new Float32Array(g*v*p),M=new Float32Array(h*v*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,x=E>2?0:-1,R=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];m.set(R,y*v*E),_.set(d,g*v*E);const D=[E,E,E,E,E,E];M.set(D,h*v*E)}const w=new di;w.setAttribute("position",new Un(m,y)),w.setAttribute("uv",new Un(_,g)),w.setAttribute("faceIndex",new Un(M,h)),i.push(new Ri(w,null)),r>Mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function h_(t,e,n){const i=new bi(t,e,n);return i.texture.mapping=Tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dN(t,e,n){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function fN(t,e,n){const i=new Float32Array(es),r=new z(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function p_(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function m_(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}class aE extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new eE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ja(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Yi});s.uniforms.tEquirect.value=n;const o=new Ri(r,s),a=n.minFilter;return n.minFilter===ss&&(n.minFilter=ln),new v3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function hN(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===md||p===gd)if(e.has(d)){const v=e.get(d).texture;return a(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const y=new aE(v.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,v=p===md||p===gd,y=p===ms||p===Mo;if(v||y){let g=n.get(d);const h=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new f_(t)),g=v?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const m=d.image;return v&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new f_(t)),g=v?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,p){return p===md?d.mapping=ms:p===gd&&(d.mapping=Mo),d}function l(d){let p=0;const v=6;for(let y=0;y<v;y++)d[y]!==void 0&&p++;return p===v}function c(d){const p=d.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function pN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Yh("WebGLRenderer: "+i+" extension not supported."),r}}}function mN(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let _=0,M=m.length;_<M;_+=3){const w=m[_+0],E=m[_+1],C=m[_+2];d.push(w,E,E,C,C,w)}}else{const m=v.array;y=v.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const w=_+0,E=_+1,C=_+2;d.push(w,E,E,C,C,w)}}const g=new(v.count>=65535?ZM:KM)(d,1);g.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function gN(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*o),n.update(d,i,1)}function c(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*o,p),n.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let y=0;for(let g=0;g<p;g++)y+=d[g];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function vN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _N(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let D=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",D)};var p=D;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let w=a.attributes.position.count*M,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*E*4*f),x=new YM(C,w,E,f);x.type=yi,x.needsUpdate=!0;const R=M*4;for(let P=0;P<f;P++){const k=h[P],X=m[P],q=_[P],I=w*E*4*P;for(let V=0;V<k.count;V++){const O=V*R;v===!0&&(r.fromBufferAttribute(k,V),C[I+O+0]=r.x,C[I+O+1]=r.y,C[I+O+2]=r.z,C[I+O+3]=0),y===!0&&(r.fromBufferAttribute(X,V),C[I+O+4]=r.x,C[I+O+5]=r.y,C[I+O+6]=r.z,C[I+O+7]=0),g===!0&&(r.fromBufferAttribute(q,V),C[I+O+8]=r.x,C[I+O+9]=r.y,C[I+O+10]=r.z,C[I+O+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new ke(w,E)},i.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function xN(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const yN={[DM]:"LINEAR_TONE_MAPPING",[LM]:"REINHARD_TONE_MAPPING",[NM]:"CINEON_TONE_MAPPING",[IM]:"ACES_FILMIC_TONE_MAPPING",[FM]:"AGX_TONE_MAPPING",[OM]:"NEUTRAL_TONE_MAPPING",[UM]:"CUSTOM_TONE_MAPPING"};function SN(t,e,n,i,r){const s=new bi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Eo(e,n):void 0}),o=new bi(e,n,{type:er,depthBuffer:!1,stencilBuffer:!1}),a=new di;a.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ci([0,2,0,0,2,0],2));const l=new o3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ri(a,l),u=new Hm(-1,1,1,-1,0,1);let f=null,d=null,p=!1,v,y=null,g=[],h=!1;this.setSize=function(m,_){s.setSize(m,_),o.setSize(m,_);for(let M=0;M<g.length;M++){const w=g[M];w.setSize&&w.setSize(m,_)}},this.setEffects=function(m){g=m,h=g.length>0&&g[0].isRenderPass===!0;const _=s.width,M=s.height;for(let w=0;w<g.length;w++){const E=g[w];E.setSize&&E.setSize(_,M)}},this.begin=function(m,_){if(p||m.toneMapping===Ai&&g.length===0)return!1;if(y=_,_!==null){const M=_.width,w=_.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return h===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Ai,!0},this.hasRenderPass=function(){return h},this.end=function(m,_){m.toneMapping=v,p=!0;let M=s,w=o;for(let E=0;E<g.length;E++){const C=g[E];if(C.enabled!==!1&&(C.render(m,w,M,_),C.needsSwap!==!1)){const x=M;M=w,w=x}}if(f!==m.outputColorSpace||d!==m.toneMapping){f=m.outputColorSpace,d=m.toneMapping,l.defines={},$e.getTransfer(f)===nt&&(l.defines.SRGB_TRANSFER="");const E=yN[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const lE=new pn,$h=new Eo(1,1),cE=new YM,uE=new O2,dE=new eE,g_=[],v_=[],__=new Float32Array(16),x_=new Float32Array(9),y_=new Float32Array(4);function Do(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=g_[r];if(s===void 0&&(s=new Float32Array(r),g_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=v_[e];n===void 0&&(n=new Int32Array(e),v_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function MN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function EN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function TN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function wN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function AN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;y_.set(i),t.uniformMatrix2fv(this.addr,!1,y_),Wt(n,i)}}function bN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;x_.set(i),t.uniformMatrix3fv(this.addr,!1,x_),Wt(n,i)}}function CN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;__.set(i),t.uniformMatrix4fv(this.addr,!1,__),Wt(n,i)}}function RN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function PN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function DN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function LN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function NN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function UN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function FN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function ON(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?($h.compareFunction=n.isReversedDepthBuffer()?Om:Fm,s=$h):s=lE,n.setTexture2D(e||s,r)}function kN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||uE,r)}function BN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dE,r)}function zN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cE,r)}function VN(t){switch(t){case 5126:return MN;case 35664:return EN;case 35665:return TN;case 35666:return wN;case 35674:return AN;case 35675:return bN;case 35676:return CN;case 5124:case 35670:return RN;case 35667:case 35671:return PN;case 35668:case 35672:return DN;case 35669:case 35673:return LN;case 5125:return NN;case 36294:return IN;case 36295:return UN;case 36296:return FN;case 35678:case 36198:case 36298:case 36306:case 35682:return ON;case 35679:case 36299:case 36307:return kN;case 35680:case 36300:case 36308:case 36293:return BN;case 36289:case 36303:case 36311:case 36292:return zN}}function HN(t,e){t.uniform1fv(this.addr,e)}function GN(t,e){const n=Do(e,this.size,2);t.uniform2fv(this.addr,n)}function WN(t,e){const n=Do(e,this.size,3);t.uniform3fv(this.addr,n)}function jN(t,e){const n=Do(e,this.size,4);t.uniform4fv(this.addr,n)}function XN(t,e){const n=Do(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YN(t,e){const n=Do(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qN(t,e){const n=Do(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $N(t,e){t.uniform1iv(this.addr,e)}function KN(t,e){t.uniform2iv(this.addr,e)}function ZN(t,e){t.uniform3iv(this.addr,e)}function QN(t,e){t.uniform4iv(this.addr,e)}function JN(t,e){t.uniform1uiv(this.addr,e)}function eI(t,e){t.uniform2uiv(this.addr,e)}function tI(t,e){t.uniform3uiv(this.addr,e)}function nI(t,e){t.uniform4uiv(this.addr,e)}function iI(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=$h:o=lE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function rI(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||uE,s[o])}function sI(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dE,s[o])}function oI(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||cE,s[o])}function aI(t){switch(t){case 5126:return HN;case 35664:return GN;case 35665:return WN;case 35666:return jN;case 35674:return XN;case 35675:return YN;case 35676:return qN;case 5124:case 35670:return $N;case 35667:case 35671:return KN;case 35668:case 35672:return ZN;case 35669:case 35673:return QN;case 5125:return JN;case 36294:return eI;case 36295:return tI;case 36296:return nI;case 35678:case 36198:case 36298:case 36306:case 35682:return iI;case 35679:case 36299:case 36307:return rI;case 35680:case 36300:case 36308:case 36293:return sI;case 36289:case 36303:case 36311:case 36292:return oI}}class lI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VN(n.type)}}class cI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aI(n.type)}}class uI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function S_(t,e){t.seq.push(e),t.map[e.id]=e}function dI(t,e,n){const i=t.name,r=i.length;for(Xd.lastIndex=0;;){const s=Xd.exec(i),o=Xd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){S_(n,c===void 0?new lI(a,t,e):new cI(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new uI(a),S_(n,f)),n=f}}}class gc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);dI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function M_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fI=37297;let hI=0;function pI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const E_=new Ue;function mI(t){$e._getMatrix(E_,$e.workingColorSpace,t);const e=`mat3( ${E_.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Zc:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function T_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+pI(t.getShaderSource(e),a)}else return s}function gI(t,e){const n=mI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const vI={[DM]:"Linear",[LM]:"Reinhard",[NM]:"Cineon",[IM]:"ACESFilmic",[FM]:"AgX",[OM]:"Neutral",[UM]:"Custom"};function _I(t,e){const n=vI[e];return n===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jl=new z;function xI(){$e.getLuminanceCoefficients(jl);const t=jl.x.toFixed(4),e=jl.y.toFixed(4),n=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function SI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function w_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(t){return t.replace(EI,wI)}const TI=new Map;function wI(t,e){let n=ze[e];if(n===void 0){const i=TI.get(e);if(i!==void 0)n=ze[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kh(n)}const AI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b_(t){return t.replace(AI,bI)}function bI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function C_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const CI={[uc]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function RI(t){return CI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PI={[ms]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function DI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":PI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const LI={[Mo]:"ENVMAP_MODE_REFRACTION"};function NI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":LI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const II={[PM]:"ENVMAP_BLENDING_MULTIPLY",[m2]:"ENVMAP_BLENDING_MIX",[g2]:"ENVMAP_BLENDING_ADD"};function UI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":II[t.combine]||"ENVMAP_BLENDING_NONE"}function FI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=RI(n),c=DI(n),u=NI(n),f=UI(n),d=FI(n),p=yI(n),v=SI(s),y=r.createProgram();let g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ia).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(g=[C_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[C_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ai?_I("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,gI("linearToOutputTexel",n.outputColorSpace),xI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=Kh(o),o=w_(o,n),o=A_(o,n),a=Kh(a),a=w_(a,n),a=A_(a,n),o=b_(o),a=b_(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=m+g+o,M=m+h+a,w=M_(r,r.VERTEX_SHADER,_),E=M_(r,r.FRAGMENT_SHADER,M);r.attachShader(y,w),r.attachShader(y,E),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(P){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y)||"",X=r.getShaderInfoLog(w)||"",q=r.getShaderInfoLog(E)||"",I=k.trim(),V=X.trim(),O=q.trim();let U=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,E);else{const Z=T_(r,w,"vertex"),oe=T_(r,E,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+Z+`
`+oe)}else I!==""?Pe("WebGLProgram: Program Info Log:",I):(V===""||O==="")&&(j=!1);j&&(P.diagnostics={runnable:U,programLog:I,vertexShader:{log:V,prefix:g},fragmentShader:{log:O,prefix:h}})}r.deleteShader(w),r.deleteShader(E),x=new gc(r,y),R=MI(r,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(y,fI)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hI++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=E,this}let kI=0;class BI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zI(e),n.set(e,i)),i}}class zI{constructor(e){this.id=kI++,this.code=e,this.usedTimes=0}}function VI(t){return t===gs||t===qc||t===$c}function HI(t,e,n,i,r,s){const o=new qM,a=new BI,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,R,D,P,k,X){const q=P.fog,I=k.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||V,O),j=U&&U.mapping===Tu?U.image.height:null,Z=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const oe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,he=oe!==void 0?oe.length:0;let He=0;I.morphAttributes.position!==void 0&&(He=1),I.morphAttributes.normal!==void 0&&(He=2),I.morphAttributes.color!==void 0&&(He=3);let Xe,Le,K,fe;if(Z){const Fe=_i[Z];Xe=Fe.vertexShader,Le=Fe.fragmentShader}else Xe=x.vertexShader,Le=x.fragmentShader,a.update(x),K=a.getVertexShaderID(x),fe=a.getFragmentShaderID(x);const le=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,xt=!!x.map,Ye=!!x.matcap,rt=!!U,pt=!!x.aoMap,Ge=!!x.lightMap,kt=!!x.bumpMap,yt=!!x.normalMap,An=!!x.displacementMap,N=!!x.emissiveMap,Bt=!!x.metalnessMap,qe=!!x.roughnessMap,ut=x.anisotropy>0,pe=x.clearcoat>0,wt=x.dispersion>0,A=x.iridescence>0,S=x.sheen>0,B=x.transmission>0,Q=ut&&!!x.anisotropyMap,te=pe&&!!x.clearcoatMap,ie=pe&&!!x.clearcoatNormalMap,de=pe&&!!x.clearcoatRoughnessMap,Y=A&&!!x.iridescenceMap,J=A&&!!x.iridescenceThicknessMap,_e=S&&!!x.sheenColorMap,Se=S&&!!x.sheenRoughnessMap,ce=!!x.specularMap,re=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Be=B&&!!x.transmissionMap,et=B&&!!x.thicknessMap,L=!!x.gradientMap,se=!!x.alphaMap,$=x.alphaTest>0,xe=!!x.alphaHash,ue=!!x.extensions;let ee=Ai;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ee=t.toneMapping);const we={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Xe,fragmentShader:Le,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xt,matcap:Ye,envMap:rt,envMapMode:rt&&U.mapping,envMapCubeUVHeight:j,aoMap:pt,lightMap:Ge,bumpMap:kt,normalMap:yt,displacementMap:An,emissiveMap:N,normalMapObjectSpace:yt&&x.normalMapType===x2,normalMapTangentSpace:yt&&x.normalMapType===Xh,packedNormalMap:yt&&x.normalMapType===Xh&&VI(x.normalMap.format),metalnessMap:Bt,roughnessMap:qe,anisotropy:ut,anisotropyMap:Q,clearcoat:pe,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:de,dispersion:wt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:S,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:ce,specularColorMap:re,specularIntensityMap:Ne,transmission:B,transmissionMap:Be,thicknessMap:et,gradientMap:L,opaque:x.transparent===!1&&x.blending===lo&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:$,alphaHash:xe,combine:x.combine,mapUv:xt&&v(x.map.channel),aoMapUv:pt&&v(x.aoMap.channel),lightMapUv:Ge&&v(x.lightMap.channel),bumpMapUv:kt&&v(x.bumpMap.channel),normalMapUv:yt&&v(x.normalMap.channel),displacementMapUv:An&&v(x.displacementMap.channel),emissiveMapUv:N&&v(x.emissiveMap.channel),metalnessMapUv:Bt&&v(x.metalnessMap.channel),roughnessMapUv:qe&&v(x.roughnessMap.channel),anisotropyMapUv:Q&&v(x.anisotropyMap.channel),clearcoatMapUv:te&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(x.sheenRoughnessMap.channel),specularMapUv:ce&&v(x.specularMap.channel),specularColorMapUv:re&&v(x.specularColorMap.channel),specularIntensityMapUv:Ne&&v(x.specularIntensityMap.channel),transmissionMapUv:Be&&v(x.transmissionMap.channel),thicknessMapUv:et&&v(x.thicknessMap.channel),alphaMapUv:se&&v(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(yt||ut),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(xt||se),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Re,skinning:k.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:He,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:xt&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:N&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zi,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)R.push(D),R.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(h(R,x),m(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function h(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function m(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function _(x){const R=p[x.type];let D;if(R){const P=_i[R];D=i3.clone(P.uniforms)}else D=x.uniforms;return D}function M(x,R){let D=u.get(R);return D!==void 0?++D.usedTimes:(D=new OI(t,R,x,r),c.push(D),u.set(R,D)),D}function w(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function GI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function WI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function R_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function P_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,v,y,g,h){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:v,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:h},t[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=v,m.materialVariant=o(d),m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=g,m.group=h),e++,m}function l(d,p,v,y,g,h){const m=a(d,p,v,y,g,h);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):n.push(m)}function c(d,p,v,y,g,h){const m=a(d,p,v,y,g,h);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,p){n.length>1&&n.sort(d||WI),i.length>1&&i.sort(p||R_),r.length>1&&r.sort(p||R_)}function f(){for(let d=e,p=t.length;d<p;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function jI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new P_,t.set(i,[o])):r>=s.length?(o=new P_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function XI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new tt};break;case"SpotLight":n={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function YI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qI=0;function $I(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KI(t){const e=new XI,n=YI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Ut,o=new Ut;function a(c){let u=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,v=0,y=0,g=0,h=0,m=0,_=0,M=0,w=0,E=0,C=0;c.sort($I);for(let R=0,D=c.length;R<D;R++){const P=c[R],k=P.color,X=P.intensity,q=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===gs?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*X,f+=k.g*X,d+=k.b*X;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],X);C++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,U=n.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=V,p++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(k).multiplyScalar(X),V.distance=q,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[y]=V;const O=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,O.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[y]=O.matrix,P.castShadow){const U=n.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=I,M++}y++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(k).multiplyScalar(X),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const O=P.shadow,U=n.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=V,v++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(X),V.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[h]=V,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==h||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==w||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,x.directionalLength=p,x.pointLength=v,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=h,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=w,x.numLightProbes=C,i.version=qI++)}function l(c,u){let f=0,d=0,p=0,v=0,y=0;const g=u.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const _=c[h];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function D_(t){const e=new KI(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ZI(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new D_(t),e.set(r,[a])):s>=o.length?(a=new D_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const QI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eU=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],tU=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],L_=new Ut,Yo=new z,Yd=new z;function nU(t,e,n){let i=new zm;const r=new ke,s=new ke,o=new Rt,a=new l3,l=new c3,c={},u=n.maxTextureSize,f={[Ur]:wn,[wn]:Ur,[zi]:zi},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:QI,fragmentShader:JI}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new di;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ri(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let h=this.type;this.render=function(E,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===KP&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=uc);const R=t.getRenderTarget(),D=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Yi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=h!==this.type;X&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(I=>I.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,I=E.length;q<I;q++){const V=E[q],O=V.shadow;if(O===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const U=O.getFrameExtents();r.multiply(U),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,O.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=j,O.map===null||X===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===na){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new bi(r.x,r.y,{format:gs,type:er,minFilter:ln,magFilter:ln,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new Eo(r.x,r.y,yi),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=tr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt}else V.isPointLight?(O.map=new aE(r.x),O.map.depthTexture=new t3(r.x,Ci)):(O.map=new bi(r.x,r.y),O.map.depthTexture=new Eo(r.x,r.y,Ci)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=tr,this.type===uc?(O.map.depthTexture.compareFunction=j?Om:Fm,O.map.depthTexture.minFilter=ln,O.map.depthTexture.magFilter=ln):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt);O.camera.updateProjectionMatrix()}const Z=O.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<Z;oe++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(O.map),t.clear());const he=O.getViewport(oe);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),k.viewport(o)}if(V.isPointLight){const he=O.camera,He=O.matrix,Xe=V.distance||he.far;Xe!==he.far&&(he.far=Xe,he.updateProjectionMatrix()),Yo.setFromMatrixPosition(V.matrixWorld),he.position.copy(Yo),Yd.copy(he.position),Yd.add(eU[oe]),he.up.copy(tU[oe]),he.lookAt(Yd),he.updateMatrixWorld(),He.makeTranslation(-Yo.x,-Yo.y,-Yo.z),L_.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),O._frustum.setFromProjectionMatrix(L_,he.coordinateSystem,he.reversedDepth)}else O.updateMatrices(V);i=O.getFrustum(),M(C,x,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===na&&m(O,x),O.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(R,D,P)};function m(E,C){const x=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bi(r.x,r.y,{format:gs,type:er})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,x,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,x,p,y,null)}function _(E,C,x,R){let D=null;const P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)D=P;else if(D=x.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=D.uuid,X=C.uuid;let q=c[k];q===void 0&&(q={},c[k]=q);let I=q[X];I===void 0&&(I=D.clone(),q[X]=I,C.addEventListener("dispose",w)),D=I}if(D.visible=C.visible,D.wireframe=C.wireframe,R===na?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:f[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const k=t.properties.get(D);k.light=x}return D}function M(E,C,x,R,D){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===na)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const X=e.update(E),q=E.material;if(Array.isArray(q)){const I=X.groups;for(let V=0,O=I.length;V<O;V++){const U=I[V],j=q[U.materialIndex];if(j&&j.visible){const Z=_(E,j,R,D);E.onBeforeShadow(t,E,C,x,X,Z,U),t.renderBufferDirect(x,null,X,Z,E,U),E.onAfterShadow(t,E,C,x,X,Z,U)}}}else if(q.visible){const I=_(E,q,R,D);E.onBeforeShadow(t,E,C,x,X,I,null),t.renderBufferDirect(x,null,X,I,E,null),E.onAfterShadow(t,E,C,x,X,I,null)}}const k=E.children;for(let X=0,q=k.length;X<q;X++)M(k[X],C,x,R,D)}function w(E){E.target.removeEventListener("dispose",w);for(const x in c){const R=c[x],D=E.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function iU(t,e){function n(){let L=!1;const se=new Rt;let $=null;const xe=new Rt(0,0,0,0);return{setMask:function(ue){$!==ue&&!L&&(t.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){L=ue},setClear:function(ue,ee,we,Fe,Pt){Pt===!0&&(ue*=Fe,ee*=Fe,we*=Fe),se.set(ue,ee,we,Fe),xe.equals(se)===!1&&(t.clearColor(ue,ee,we,Fe),xe.copy(se))},reset:function(){L=!1,$=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,$=null,xe=null,ue=null;return{setReversed:function(ee){if(se!==ee){const we=e.get("EXT_clip_control");ee?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const Fe=ue;ue=null,this.setClear(Fe)}},getReversed:function(){return se},setTest:function(ee){ee?le(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ee){$!==ee&&!L&&(t.depthMask(ee),$=ee)},setFunc:function(ee){if(se&&(ee=R2[ee]),xe!==ee){switch(ee){case ah:t.depthFunc(t.NEVER);break;case lh:t.depthFunc(t.ALWAYS);break;case ch:t.depthFunc(t.LESS);break;case So:t.depthFunc(t.LEQUAL);break;case uh:t.depthFunc(t.EQUAL);break;case dh:t.depthFunc(t.GEQUAL);break;case fh:t.depthFunc(t.GREATER);break;case hh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=ee}},setLocked:function(ee){L=ee},setClear:function(ee){ue!==ee&&(ue=ee,se&&(ee=1-ee),t.clearDepth(ee))},reset:function(){L=!1,$=null,xe=null,ue=null,se=!1}}}function r(){let L=!1,se=null,$=null,xe=null,ue=null,ee=null,we=null,Fe=null,Pt=null;return{setTest:function(st){L||(st?le(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(st){se!==st&&!L&&(t.stencilMask(st),se=st)},setFunc:function(st,Di,fi){($!==st||xe!==Di||ue!==fi)&&(t.stencilFunc(st,Di,fi),$=st,xe=Di,ue=fi)},setOp:function(st,Di,fi){(ee!==st||we!==Di||Fe!==fi)&&(t.stencilOp(st,Di,fi),ee=st,we=Di,Fe=fi)},setLocked:function(st){L=st},setClear:function(st){Pt!==st&&(t.clearStencil(st),Pt=st)},reset:function(){L=!1,se=null,$=null,xe=null,ue=null,ee=null,we=null,Fe=null,Pt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},p=new WeakMap,v=[],y=null,g=!1,h=null,m=null,_=null,M=null,w=null,E=null,C=null,x=new tt(0,0,0),R=0,D=!1,P=null,k=null,X=null,q=null,I=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,U=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=U>=2);let Z=null,oe={};const he=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),Xe=new Rt().fromArray(he),Le=new Rt().fromArray(He);function K(L,se,$,xe){const ue=new Uint8Array(4),ee=t.createTexture();t.bindTexture(L,ee),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<$;we++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(se+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return ee}const fe={};fe[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(So),kt(!1),yt(Pv),le(t.CULL_FACE),pt(Yi);function le(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function Re(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Ie(L,se){return d[L]!==se?(t.bindFramebuffer(L,se),d[L]=se,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=se),!0):!1}function De(L,se){let $=v,xe=!1;if(L){$=p.get(se),$===void 0&&($=[],p.set(se,$));const ue=L.textures;if($.length!==ue.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,we=ue.length;ee<we;ee++)$[ee]=t.COLOR_ATTACHMENT0+ee;$.length=ue.length,xe=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,xe=!0);xe&&t.drawBuffers($)}function xt(L){return y!==L?(t.useProgram(L),y=L,!0):!1}const Ye={[Jr]:t.FUNC_ADD,[QP]:t.FUNC_SUBTRACT,[JP]:t.FUNC_REVERSE_SUBTRACT};Ye[e2]=t.MIN,Ye[t2]=t.MAX;const rt={[n2]:t.ZERO,[i2]:t.ONE,[r2]:t.SRC_COLOR,[sh]:t.SRC_ALPHA,[u2]:t.SRC_ALPHA_SATURATE,[l2]:t.DST_COLOR,[o2]:t.DST_ALPHA,[s2]:t.ONE_MINUS_SRC_COLOR,[oh]:t.ONE_MINUS_SRC_ALPHA,[c2]:t.ONE_MINUS_DST_COLOR,[a2]:t.ONE_MINUS_DST_ALPHA,[d2]:t.CONSTANT_COLOR,[f2]:t.ONE_MINUS_CONSTANT_COLOR,[h2]:t.CONSTANT_ALPHA,[p2]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(L,se,$,xe,ue,ee,we,Fe,Pt,st){if(L===Yi){g===!0&&(Re(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),L!==ZP){if(L!==h||st!==D){if((m!==Jr||w!==Jr)&&(t.blendEquation(t.FUNC_ADD),m=Jr,w=Jr),st)switch(L){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dv:t.blendFunc(t.ONE,t.ONE);break;case Lv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",L);break}else switch(L){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Lv:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nv:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",L);break}_=null,M=null,E=null,C=null,x.set(0,0,0),R=0,h=L,D=st}return}ue=ue||se,ee=ee||$,we=we||xe,(se!==m||ue!==w)&&(t.blendEquationSeparate(Ye[se],Ye[ue]),m=se,w=ue),($!==_||xe!==M||ee!==E||we!==C)&&(t.blendFuncSeparate(rt[$],rt[xe],rt[ee],rt[we]),_=$,M=xe,E=ee,C=we),(Fe.equals(x)===!1||Pt!==R)&&(t.blendColor(Fe.r,Fe.g,Fe.b,Pt),x.copy(Fe),R=Pt),h=L,D=!1}function Ge(L,se){L.side===zi?Re(t.CULL_FACE):le(t.CULL_FACE);let $=L.side===wn;se&&($=!$),kt($),L.blending===lo&&L.transparent===!1?pt(Yi):pt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function yt(L){L!==qP?(le(t.CULL_FACE),L!==k&&(L===Pv?t.cullFace(t.BACK):L===$P?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),k=L}function An(L){L!==X&&(O&&t.lineWidth(L),X=L)}function N(L,se,$){L?(le(t.POLYGON_OFFSET_FILL),(q!==se||I!==$)&&(q=se,I=$,o.getReversed()&&(se=-se),t.polygonOffset(se,$))):Re(t.POLYGON_OFFSET_FILL)}function Bt(L){L?le(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function qe(L){L===void 0&&(L=t.TEXTURE0+V-1),Z!==L&&(t.activeTexture(L),Z=L)}function ut(L,se,$){$===void 0&&(Z===null?$=t.TEXTURE0+V-1:$=Z);let xe=oe[$];xe===void 0&&(xe={type:void 0,texture:void 0},oe[$]=xe),(xe.type!==L||xe.texture!==se)&&(Z!==$&&(t.activeTexture($),Z=$),t.bindTexture(L,se||fe[L]),xe.type=L,xe.texture=se)}function pe(){const L=oe[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function wt(){try{t.compressedTexImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function S(){try{t.texSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function B(){try{t.texSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function ie(){try{t.texStorage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function de(){try{t.texStorage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Y(){try{t.texImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function _e(L){return f[L]!==void 0?f[L]:t.getParameter(L)}function Se(L,se){f[L]!==se&&(t.pixelStorei(L,se),f[L]=se)}function ce(L){Xe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Xe.copy(L))}function re(L){Le.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Le.copy(L))}function Ne(L,se){let $=c.get(se);$===void 0&&($=new WeakMap,c.set(se,$));let xe=$.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(se,L.name),$.set(L,xe))}function Be(L,se){const xe=c.get(se).get(L);l.get(se)!==xe&&(t.uniformBlockBinding(se,xe,L.__bindingPointIndex),l.set(se,xe))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Z=null,oe={},d={},p=new WeakMap,v=[],y=null,g=!1,h=null,m=null,_=null,M=null,w=null,E=null,C=null,x=new tt(0,0,0),R=0,D=!1,P=null,k=null,X=null,q=null,I=null,Xe.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Re,bindFramebuffer:Ie,drawBuffers:De,useProgram:xt,setBlending:pt,setMaterial:Ge,setFlipSided:kt,setCullFace:yt,setLineWidth:An,setPolygonOffset:N,setScissorTest:Bt,activeTexture:qe,bindTexture:ut,unbindTexture:pe,compressedTexImage2D:wt,compressedTexImage3D:A,texImage2D:Y,texImage3D:J,pixelStorei:Se,getParameter:_e,updateUBOMapping:Ne,uniformBlockBinding:Be,texStorage2D:ie,texStorage3D:de,texSubImage2D:S,texSubImage3D:B,compressedTexSubImage2D:Q,compressedTexSubImage3D:te,scissor:ce,viewport:re,reset:et}}function rU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return v?new OffscreenCanvas(A,S):Qc("canvas")}function g(A,S,B){let Q=1;const te=wt(A);if((te.width>B||te.height>B)&&(Q=B/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(Q*te.width),de=Math.floor(Q*te.height);d===void 0&&(d=y(ie,de));const Y=S?y(ie,de):d;return Y.width=ie,Y.height=de,Y.getContext("2d").drawImage(A,0,0,ie,de),Pe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ie+"x"+de+")."),Y}else return"data"in A&&Pe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function h(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,B,Q,te,ie=!1){if(A!==null){if(t[A]!==void 0)return t[A];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;Q&&(de=e.get("EXT_texture_norm16"),de||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===t.RED&&(B===t.FLOAT&&(Y=t.R32F),B===t.HALF_FLOAT&&(Y=t.R16F),B===t.UNSIGNED_BYTE&&(Y=t.R8),B===t.UNSIGNED_SHORT&&de&&(Y=de.R16_EXT),B===t.SHORT&&de&&(Y=de.R16_SNORM_EXT)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.R8UI),B===t.UNSIGNED_SHORT&&(Y=t.R16UI),B===t.UNSIGNED_INT&&(Y=t.R32UI),B===t.BYTE&&(Y=t.R8I),B===t.SHORT&&(Y=t.R16I),B===t.INT&&(Y=t.R32I)),S===t.RG&&(B===t.FLOAT&&(Y=t.RG32F),B===t.HALF_FLOAT&&(Y=t.RG16F),B===t.UNSIGNED_BYTE&&(Y=t.RG8),B===t.UNSIGNED_SHORT&&de&&(Y=de.RG16_EXT),B===t.SHORT&&de&&(Y=de.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RG8UI),B===t.UNSIGNED_SHORT&&(Y=t.RG16UI),B===t.UNSIGNED_INT&&(Y=t.RG32UI),B===t.BYTE&&(Y=t.RG8I),B===t.SHORT&&(Y=t.RG16I),B===t.INT&&(Y=t.RG32I)),S===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),B===t.UNSIGNED_INT&&(Y=t.RGB32UI),B===t.BYTE&&(Y=t.RGB8I),B===t.SHORT&&(Y=t.RGB16I),B===t.INT&&(Y=t.RGB32I)),S===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),B===t.UNSIGNED_INT&&(Y=t.RGBA32UI),B===t.BYTE&&(Y=t.RGBA8I),B===t.SHORT&&(Y=t.RGBA16I),B===t.INT&&(Y=t.RGBA32I)),S===t.RGB&&(B===t.UNSIGNED_SHORT&&de&&(Y=de.RGB16_EXT),B===t.SHORT&&de&&(Y=de.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),S===t.RGBA){const J=ie?Zc:$e.getTransfer(te);B===t.FLOAT&&(Y=t.RGBA32F),B===t.HALF_FLOAT&&(Y=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Y=J===nt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&de&&(Y=de.RGBA16_EXT),B===t.SHORT&&de&&(Y=de.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(A,S){let B;return A?S===null||S===Ci||S===za?B=t.DEPTH24_STENCIL8:S===yi?B=t.DEPTH32F_STENCIL8:S===Ba&&(B=t.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ci||S===za?B=t.DEPTH_COMPONENT24:S===yi?B=t.DEPTH_COMPONENT32F:S===Ba&&(B=t.DEPTH_COMPONENT16),B}function E(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),R(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function x(A){const S=A.target;S.removeEventListener("dispose",x),P(S)}function R(A){const S=i.get(A);if(S.__webglInit===void 0)return;const B=A.source,Q=p.get(B);if(Q){const te=Q[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&D(A),Object.keys(Q).length===0&&p.delete(B)}i.remove(A)}function D(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const B=A.source,Q=p.get(B);delete Q[S.__cacheKey],o.memory.textures--}function P(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let te=0;te<S.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let Q=0,te=B.length;Q<te;Q++){const ie=i.get(B[Q]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(A)}let k=0;function X(){k=0}function q(){return k}function I(A){k=A}function V(){const A=k;return A>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),k+=1,A}function O(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){const B=i.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const Q=A.image;if(Q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function j(A,S){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Re(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function Z(A,S){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Re(B,A,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function oe(A,S){const B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ie(B,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const he={[ph]:t.REPEAT,[Gi]:t.CLAMP_TO_EDGE,[mh]:t.MIRRORED_REPEAT},He={[Kt]:t.NEAREST,[v2]:t.NEAREST_MIPMAP_NEAREST,[El]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[vd]:t.LINEAR_MIPMAP_NEAREST,[ss]:t.LINEAR_MIPMAP_LINEAR},Xe={[y2]:t.NEVER,[w2]:t.ALWAYS,[S2]:t.LESS,[Fm]:t.LEQUAL,[M2]:t.EQUAL,[Om]:t.GEQUAL,[E2]:t.GREATER,[T2]:t.NOTEQUAL};function Le(A,S){if(S.type===yi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===vd||S.magFilter===El||S.magFilter===ss||S.minFilter===ln||S.minFilter===vd||S.minFilter===El||S.minFilter===ss)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,he[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,he[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,he[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,He[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,He[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kt||S.minFilter!==El&&S.minFilter!==ss||S.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function K(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const Q=S.source;let te=p.get(Q);te===void 0&&(te={},p.set(Q,te));const ie=O(S);if(ie!==A.__cacheKey){te[ie]===void 0&&(te[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[ie].usedTimes++;const de=te[A.__cacheKey];de!==void 0&&(te[A.__cacheKey].usedTimes--,de.usedTimes===0&&D(S)),A.__cacheKey=ie,A.__webglTexture=te[ie].texture}return B}function fe(A,S,B){return Math.floor(Math.floor(A/B)/S)}function le(A,S,B,Q){const ie=A.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,B,Q,S.data);else{ie.sort((Se,ce)=>Se.start-ce.start);let de=0;for(let Se=1;Se<ie.length;Se++){const ce=ie[de],re=ie[Se],Ne=ce.start+ce.count,Be=fe(re.start,S.width,4),et=fe(ce.start,S.width,4);re.start<=Ne+1&&Be===et&&fe(re.start+re.count-1,S.width,4)===Be?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++de,ie[de]=re)}ie.length=de+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Se=0,ce=ie.length;Se<ce;Se++){const re=ie[Se],Ne=Math.floor(re.start/4),Be=Math.ceil(re.count/4),et=Ne%S.width,L=Math.floor(Ne/S.width),se=Be,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,et),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,et,L,se,$,B,Q,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function Re(A,S,B){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const te=K(A,S),ie=S.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+B);const de=i.get(ie);if(ie.version!==de.__version||te===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const $=$e.getPrimaries($e.workingColorSpace),xe=S.colorSpace===xr?null:$e.getPrimaries(S.colorSpace),ue=S.colorSpace===xr||$===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let J=g(S.image,!1,r.maxTextureSize);J=pe(S,J);const _e=s.convert(S.format,S.colorSpace),Se=s.convert(S.type);let ce=M(S.internalFormat,_e,Se,S.normalized,S.colorSpace,S.isVideoTexture);Le(Q,S);let re;const Ne=S.mipmaps,Be=S.isVideoTexture!==!0,et=de.__version===void 0||te===!0,L=ie.dataReady,se=E(S,J);if(S.isDepthTexture)ce=w(S.format===os,S.type),et&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,null));else if(S.isDataTexture)if(Ne.length>0){Be&&et&&n.texStorage2D(t.TEXTURE_2D,se,ce,Ne[0].width,Ne[0].height);for(let $=0,xe=Ne.length;$<xe;$++)re=Ne[$],Be?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,Se,re.data):n.texImage2D(t.TEXTURE_2D,$,ce,re.width,re.height,0,_e,Se,re.data);S.generateMipmaps=!1}else Be?(et&&n.texStorage2D(t.TEXTURE_2D,se,ce,J.width,J.height),L&&le(S,J,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,ce,Ne[0].width,Ne[0].height,J.depth);for(let $=0,xe=Ne.length;$<xe;$++)if(re=Ne[$],S.format!==oi)if(_e!==null)if(Be){if(L)if(S.layerUpdates.size>0){const ue=c_(re.width,re.height,S.format,S.type);for(const ee of S.layerUpdates){const we=re.data.subarray(ee*ue/re.data.BYTES_PER_ELEMENT,(ee+1)*ue/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ee,re.width,re.height,1,_e,we)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,J.depth,_e,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ce,re.width,re.height,J.depth,0,re.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,J.depth,_e,Se,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ce,re.width,re.height,J.depth,0,_e,Se,re.data)}else{Be&&et&&n.texStorage2D(t.TEXTURE_2D,se,ce,Ne[0].width,Ne[0].height);for(let $=0,xe=Ne.length;$<xe;$++)re=Ne[$],S.format!==oi?_e!==null?Be?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,re.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ce,re.width,re.height,0,re.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,Se,re.data):n.texImage2D(t.TEXTURE_2D,$,ce,re.width,re.height,0,_e,Se,re.data)}else if(S.isDataArrayTexture)if(Be){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,ce,J.width,J.height,J.depth),L)if(S.layerUpdates.size>0){const $=c_(J.width,J.height,S.format,S.type);for(const xe of S.layerUpdates){const ue=J.data.subarray(xe*$/J.data.BYTES_PER_ELEMENT,(xe+1)*$/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,J.width,J.height,1,_e,Se,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(S.isData3DTexture)Be?(et&&n.texStorage3D(t.TEXTURE_3D,se,ce,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(S.isFramebufferTexture){if(et)if(Be)n.texStorage2D(t.TEXTURE_2D,se,ce,J.width,J.height);else{let $=J.width,xe=J.height;for(let ue=0;ue<se;ue++)n.texImage2D(t.TEXTURE_2D,ue,ce,$,xe,0,_e,Se,null),$>>=1,xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),f.add(S),$.onpaint=Fe=>{const Pt=Fe.changedElements;for(const st of f)Pt.includes(st.image)&&(st.needsUpdate=!0)},$.requestPaint();return}const xe=0,ue=t.RGBA,ee=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,ue,ee,we,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Be&&et){const $=wt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,se,ce,$.width,$.height)}for(let $=0,xe=Ne.length;$<xe;$++)re=Ne[$],Be?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e,Se,re):n.texImage2D(t.TEXTURE_2D,$,ce,_e,Se,re);S.generateMipmaps=!1}else if(Be){if(et){const $=wt(J);n.texStorage2D(t.TEXTURE_2D,se,ce,$.width,$.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,ce,_e,Se,J);h(S)&&m(Q),de.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,B){if(S.image.length!==6)return;const Q=K(A,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const ie=i.get(te);if(te.version!==ie.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const de=$e.getPrimaries($e.workingColorSpace),Y=S.colorSpace===xr?null:$e.getPrimaries(S.colorSpace),J=S.colorSpace===xr||de===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!_e&&!Se?ce[ee]=g(S.image[ee],!0,r.maxCubemapSize):ce[ee]=Se?S.image[ee].image:S.image[ee],ce[ee]=pe(S,ce[ee]);const re=ce[0],Ne=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),et=M(S.internalFormat,Ne,Be,S.normalized,S.colorSpace),L=S.isVideoTexture!==!0,se=ie.__version===void 0||Q===!0,$=te.dataReady;let xe=E(S,re);Le(t.TEXTURE_CUBE_MAP,S);let ue;if(_e){L&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,et,re.width,re.height);for(let ee=0;ee<6;ee++){ue=ce[ee].mipmaps;for(let we=0;we<ue.length;we++){const Fe=ue[we];S.format!==oi?Ne!==null?L?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Fe.width,Fe.height,Ne,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,et,Fe.width,Fe.height,0,Fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Fe.width,Fe.height,Ne,Be,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,et,Fe.width,Fe.height,0,Ne,Be,Fe.data)}}}else{if(ue=S.mipmaps,L&&se){ue.length>0&&xe++;const ee=wt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,et,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Ne,Be,ce[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,et,ce[ee].width,ce[ee].height,0,Ne,Be,ce[ee].data);for(let we=0;we<ue.length;we++){const Pt=ue[we].image[ee].image;L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Pt.width,Pt.height,Ne,Be,Pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,et,Pt.width,Pt.height,0,Ne,Be,Pt.data)}}else{L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,Be,ce[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,et,Ne,Be,ce[ee]);for(let we=0;we<ue.length;we++){const Fe=ue[we];L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Ne,Be,Fe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,et,Ne,Be,Fe.image[ee])}}}h(S)&&m(t.TEXTURE_CUBE_MAP),ie.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function De(A,S,B,Q,te,ie){const de=s.convert(B.format,B.colorSpace),Y=s.convert(B.type),J=M(B.internalFormat,de,Y,B.normalized,B.colorSpace),_e=i.get(S),Se=i.get(B);if(Se.__renderTarget=S,!_e.__hasExternalTextures){const ce=Math.max(1,S.width>>ie),re=Math.max(1,S.height>>ie);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ie,J,ce,re,S.depth,0,de,Y,null):n.texImage2D(te,ie,J,ce,re,0,de,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),qe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,Se.__webglTexture,0,Bt(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,Se.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(A,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,ie=w(S.stencilBuffer,te),de=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Bt(S),ie,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Bt(S),ie,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,A)}else{const Q=S.textures;for(let te=0;te<Q.length;te++){const ie=Q[te],de=s.convert(ie.format,ie.colorSpace),Y=s.convert(ie.type),J=M(ie.internalFormat,de,Y,ie.normalized,ie.colorSpace);qe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Bt(S),J,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Bt(S),J,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,J,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ye(A,S,B){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Le(t.TEXTURE_CUBE_MAP,S.depthTexture);const _e=s.convert(S.depthTexture.format),Se=s.convert(S.depthTexture.type);let ce;S.depthTexture.format===tr?ce=t.DEPTH_COMPONENT24:S.depthTexture.format===os&&(ce=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ce,S.width,S.height,0,_e,Se,null)}}else U(S.depthTexture,0);const ie=te.__webglTexture,de=Bt(S),Y=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,J=S.depthTexture.format===os?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===tr)qe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,ie,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,ie,0);else if(S.depthTexture.format===os)qe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,ie,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,ie,0);else throw new Error("Unknown depthTexture format")}function rt(A){const S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)Ye(S.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Ye(S.__webglFramebuffer[0],A,0):Ye(S.__webglFramebuffer,A,0)}else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),xt(S.__webglDepthbuffer[Q],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),xt(S.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(A,S,B){const Q=i.get(A);S!==void 0&&De(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&rt(A)}function Ge(A){const S=A.texture,B=i.get(A),Q=i.get(S);A.addEventListener("dispose",x);const te=A.textures,ie=A.isWebGLCubeRenderTarget===!0,de=te.length>1;if(de||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),ie){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let J=0;J<S.mipmaps.length;J++)B.__webglFramebuffer[Y][J]=t.createFramebuffer()}else B.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)B.__webglFramebuffer[Y]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(de)for(let Y=0,J=te.length;Y<J;Y++){const _e=i.get(te[Y]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&qe(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<te.length;Y++){const J=te[Y];B.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const _e=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),ce=M(J.internalFormat,_e,Se,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),re=Bt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),xt(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(t.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)De(B.__webglFramebuffer[Y][J],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else De(B.__webglFramebuffer[Y],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let Y=0,J=te.length;Y<J;Y++){const _e=te[Y],Se=i.get(_e);let ce=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Se.__webglTexture),Le(ce,_e),De(B.__webglFramebuffer,A,_e,t.COLOR_ATTACHMENT0+Y,ce,0),h(_e)&&m(ce)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,Q.__webglTexture),Le(Y,S),S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)De(B.__webglFramebuffer[J],A,S,t.COLOR_ATTACHMENT0,Y,J);else De(B.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,Y,0);h(S)&&m(Y),n.unbindTexture()}A.depthBuffer&&rt(A)}function kt(A){const S=A.textures;for(let B=0,Q=S.length;B<Q;B++){const te=S[B];if(h(te)){const ie=_(A),de=i.get(te).__webglTexture;n.bindTexture(ie,de),m(ie),n.unbindTexture()}}}const yt=[],An=[];function N(A){if(A.samples>0){if(qe(A)===!1){const S=A.textures,B=A.width,Q=A.height;let te=t.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(A),Y=S.length>1;if(Y)for(let _e=0;_e<S.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Se=i.get(S[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,te,t.NEAREST),l===!0&&(yt.length=0,An.length=0,yt.push(t.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(yt.push(ie),An.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,An)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let _e=0;_e<S.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Se=i.get(S[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Bt(A){return Math.min(r.maxSamples,A.samples)}function qe(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function pe(A,S){const B=A.colorSpace,Q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Kc&&B!==xr&&($e.getTransfer(B)===nt?(Q!==oi||te!==Dn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",B)),S}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=oe,this.rebindTextures=pt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function sU(t,e){function n(i,r=xr){let s;const o=$e.getTransfer(r);if(i===Dn)return t.UNSIGNED_BYTE;if(i===Dm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Lm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===VM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===HM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===BM)return t.BYTE;if(i===zM)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===Pm)return t.INT;if(i===Ci)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===er)return t.HALF_FLOAT;if(i===GM)return t.ALPHA;if(i===WM)return t.RGB;if(i===oi)return t.RGBA;if(i===tr)return t.DEPTH_COMPONENT;if(i===os)return t.DEPTH_STENCIL;if(i===jM)return t.RED;if(i===Nm)return t.RED_INTEGER;if(i===gs)return t.RG;if(i===Im)return t.RG_INTEGER;if(i===Um)return t.RGBA_INTEGER;if(i===dc||i===fc||i===hc||i===pc)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===dc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===dc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===vh||i===_h||i===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===qc||i===wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yh||i===Sh)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Eh)return s.COMPRESSED_R11_EAC;if(i===Th)return s.COMPRESSED_SIGNED_R11_EAC;if(i===qc)return s.COMPRESSED_RG11_EAC;if(i===wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ah||i===bh||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===Bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ah)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ch)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zh||i===Vh||i===Hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zh)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===Wh||i===$c||i===jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const oU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aU=`
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

}`;class lU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new tE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pi({vertexShader:oU,fragmentShader:aU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ri(new wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cU extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",g=new lU,h={},m=n.getContextAttributes();let _=null,M=null;const w=[],E=[],C=new ke;let x=null;const R=new Xn;R.viewport=new Rt;const D=new Xn;D.viewport=new Rt;const P=[R,D],k=new _3;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=w[K];return fe===void 0&&(fe=new Td,w[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=w[K];return fe===void 0&&(fe=new Td,w[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=w[K];return fe===void 0&&(fe=new Td,w[K]=fe),fe.getHandSpace()};function I(K){const fe=E.indexOf(K.inputSource);if(fe===-1)return;const le=w[fe];le!==void 0&&(le.update(K.inputSource,K.frame,c||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",O);for(let K=0;K<w.length;K++){const fe=E[K];fe!==null&&(E[K]=null,w[K].disconnect(fe))}X=null,q=null,g.reset();for(const K in h)delete h[K];e.setRenderTarget(_),p=null,d=null,f=null,r=null,M=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",V),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Re=null,Ie=null;m.depth&&(Ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=m.stencil?os:tr,Re=m.stencil?za:Ci);const De={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new bi(d.textureWidth,d.textureHeight,{format:oi,type:Dn,depthTexture:new Eo(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new bi(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(K){for(let fe=0;fe<K.removed.length;fe++){const le=K.removed[fe],Re=E.indexOf(le);Re>=0&&(E[Re]=null,w[Re].disconnect(le))}for(let fe=0;fe<K.added.length;fe++){const le=K.added[fe];let Re=E.indexOf(le);if(Re===-1){for(let De=0;De<w.length;De++)if(De>=E.length){E.push(le),Re=De;break}else if(E[De]===null){E[De]=le,Re=De;break}if(Re===-1)break}const Ie=w[Re];Ie&&Ie.connect(le)}}const U=new z,j=new z;function Z(K,fe,le){U.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(le.matrixWorld);const Re=U.distanceTo(j),Ie=fe.projectionMatrix.elements,De=le.projectionMatrix.elements,xt=Ie[14]/(Ie[10]-1),Ye=Ie[14]/(Ie[10]+1),rt=(Ie[9]+1)/Ie[5],pt=(Ie[9]-1)/Ie[5],Ge=(Ie[8]-1)/Ie[0],kt=(De[8]+1)/De[0],yt=xt*Ge,An=xt*kt,N=Re/(-Ge+kt),Bt=N*-Ge;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Bt),K.translateZ(N),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=xt+N,ut=Ye+N,pe=yt-Bt,wt=An+(Re-Bt),A=rt*Ye/ut*qe,S=pt*Ye/ut*qe;K.projectionMatrix.makePerspective(pe,wt,A,S,qe,ut),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let fe=K.near,le=K.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(le=g.depthFar)),k.near=D.near=R.near=fe,k.far=D.far=R.far=le,(X!==k.near||q!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,q=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const Re=K.parent,Ie=k.cameras;oe(k,Re);for(let De=0;De<Ie.length;De++)oe(Ie[De],Re);Ie.length===2?Z(k,R,D):k.projectionMatrix.copy(R.projectionMatrix),he(K,k,Re)};function he(K,fe,le){le===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=qh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(K){return h[K]};let He=null;function Xe(K,fe){if(u=fe.getViewerPose(c||o),v=fe,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Re=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Re=!0);for(let Ye=0;Ye<le.length;Ye++){const rt=le[Ye];let pt=null;if(p!==null)pt=p.getViewport(rt);else{const kt=f.getViewSubImage(d,rt);pt=kt.viewport,Ye===0&&(e.setRenderTargetTextures(M,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(M))}let Ge=P[Ye];Ge===void 0&&(Ge=new Xn,Ge.layers.enable(Ye),Ge.viewport=new Rt,P[Ye]=Ge),Ge.matrix.fromArray(rt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(rt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(pt.x,pt.y,pt.width,pt.height),Ye===0&&(k.matrix.copy(Ge.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Re===!0&&k.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const Ye=f.getDepthInformation(le[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,r.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Ye=0;Ye<le.length;Ye++){const rt=le[Ye].camera;if(rt){let pt=h[rt];pt||(pt=new tE,h[rt]=pt);const Ge=f.getCameraImage(rt);pt.sourceTexture=Ge}}}}for(let le=0;le<w.length;le++){const Re=E[le],Ie=w[le];Re!==null&&Ie!==void 0&&Ie.update(Re,fe,c||o)}He&&He(K,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Le=new sE;Le.setAnimationLoop(Xe),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}}const uU=new Ut,fE=new Ue;fE.set(-1,0,0,0,1,0,0,0,1);function dU(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,nE(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,_,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,M)):h.isMeshMatcapMaterial?(s(g,h),v(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,m,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===wn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===wn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),_=m.envMap,M=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(uU.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(fE),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=r[m.id];M===void 0&&(v(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",g));const w=_.program;i.updateUBOMapping(m,w);const E=e.render.frame;s[m.id]!==E&&(d(m),s[m.id]=E)}function u(m){const _=f();m.__bindingPointIndex=_;const M=t.createBuffer(),w=m.__size,E=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,w,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const _=r[m.id],M=m.uniforms,w=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,C=M.length;E<C;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let R=0,D=x.length;R<D;R++){const P=x[R];if(p(P,E,R,w)===!0){const k=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let I=0;I<X.length;I++){const V=X[I],O=y(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,k+q,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):ArrayBuffer.isView(V)?P.__data.set(new V.constructor(V.buffer,V.byteOffset,P.__data.length)):(V.toArray(P.__data,q),q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,M,w){const E=m.value,C=_+"_"+M;if(w[C]===void 0)return typeof E=="number"||typeof E=="boolean"?w[C]=E:ArrayBuffer.isView(E)?w[C]=E.slice():w[C]=E.clone(),!0;{const x=w[C];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return w[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function v(m){const _=m.uniforms;let M=0;const w=16;for(let C=0,x=_.length;C<x;C++){const R=Array.isArray(_[C])?_[C]:[_[C]];for(let D=0,P=R.length;D<P;D++){const k=R[D],X=Array.isArray(k.value)?k.value:[k.value];for(let q=0,I=X.length;q<I;q++){const V=X[q],O=y(V),U=M%w,j=U%O.boundary,Z=U+j;M+=j,Z!==0&&w-Z<O.storage&&(M+=w-Z),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=O.storage}}}const E=M%w;return E>0&&(M+=w-E),m.__size=M,m.__cache={},this}function y(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const hU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function pU(){return gi===null&&(gi=new Z2(hU,16,16,gs,er),gi.name="DFG_LUT",gi.minFilter=ln,gi.magFilter=ln,gi.wrapS=Gi,gi.wrapT=Gi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class mU{constructor(e={}){const{canvas:n=b2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=p,g=new Set([Um,Im,Nm]),h=new Set([Dn,Ci,Ba,za,Dm,Lm]),m=new Uint32Array(4),_=new Int32Array(4),M=new z;let w=null,E=null;const C=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1,k=null;this._outputColorSpace=xn;let X=0,q=0,I=null,V=-1,O=null;const U=new Rt,j=new Rt;let Z=null;const oe=new tt(0);let he=0,He=n.width,Xe=n.height,Le=1,K=null,fe=null;const le=new Rt(0,0,He,Xe),Re=new Rt(0,0,He,Xe);let Ie=!1;const De=new zm;let xt=!1,Ye=!1;const rt=new Ut,pt=new z,Ge=new Rt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function An(){return I===null?Le:1}let N=i;function Bt(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rm}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),N===null){const F="webgl2";if(N=Bt(F,T),N===null)throw Bt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Qe("WebGLRenderer: "+T.message),T}let qe,ut,pe,wt,A,S,B,Q,te,ie,de,Y,J,_e,Se,ce,re,Ne,Be,et,L,se,$;function xe(){qe=new pN(N),qe.init(),L=new sU(N,qe),ut=new oN(N,qe,e,L),pe=new iU(N,qe),ut.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),wt=new vN(N),A=new GI,S=new rU(N,qe,pe,A,ut,L,wt),B=new hN(D),Q=new S3(N),se=new rN(N,Q),te=new mN(N,Q,wt,se),ie=new xN(N,te,Q,se,wt),Ne=new _N(N,ut,S),Se=new aN(A),de=new HI(D,B,qe,ut,se,Se),Y=new dU(D,A),J=new jI,_e=new ZI(qe),re=new iN(D,B,pe,ie,v,l),ce=new nU(D,ie,ut),$=new fU(N,wt,ut,pe),Be=new sN(N,qe,wt),et=new gN(N,qe,wt),wt.programs=de.programs,D.capabilities=ut,D.extensions=qe,D.properties=A,D.renderLists=J,D.shadowMap=ce,D.state=pe,D.info=wt}xe(),y!==Dn&&(R=new SN(y,n.width,n.height,r,s));const ue=new cU(D,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(T){T!==void 0&&(Le=T,this.setSize(He,Xe,!1))},this.getSize=function(T){return T.set(He,Xe)},this.setSize=function(T,F,W=!0){if(ue.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}He=T,Xe=F,n.width=Math.floor(T*Le),n.height=Math.floor(F*Le),W===!0&&(n.style.width=T+"px",n.style.height=F+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(He*Le,Xe*Le).floor()},this.setDrawingBufferSize=function(T,F,W){He=T,Xe=F,Le=W,n.width=Math.floor(T*W),n.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(y===Dn){Qe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,F,W,H){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,F,W,H),pe.viewport(U.copy(le).multiplyScalar(Le).round())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,F,W,H){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,F,W,H),pe.scissor(j.copy(Re).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){pe.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,W=!0){let H=0;if(T){let G=!1;if(I!==null){const ve=I.texture.format;G=g.has(ve)}if(G){const ve=I.texture.type,Me=h.has(ve),ge=re.getClearColor(),Te=re.getClearAlpha(),Ae=ge.r,Oe=ge.g,Ve=ge.b;Me?(m[0]=Ae,m[1]=Oe,m[2]=Ve,m[3]=Te,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Ae,_[1]=Oe,_[2]=Ve,_[3]=Te,N.clearBufferiv(N.COLOR,0,_))}else H|=N.COLOR_BUFFER_BIT}F&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),k=T},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),re.dispose(),J.dispose(),_e.dispose(),A.dispose(),B.dispose(),ie.dispose(),se.dispose(),$.dispose(),de.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",$m),ue.removeEventListener("sessionend",Km),Gr.stop()};function ee(T){T.preventDefault(),kv("WebGLRenderer: Context Lost."),P=!0}function we(){kv("WebGLRenderer: Context Restored."),P=!1;const T=wt.autoReset,F=ce.enabled,W=ce.autoUpdate,H=ce.needsUpdate,G=ce.type;xe(),wt.autoReset=T,ce.enabled=F,ce.autoUpdate=W,ce.needsUpdate=H,ce.type=G}function Fe(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){const F=T.target;F.removeEventListener("dispose",Pt),st(F)}function st(T){Di(T),A.remove(T)}function Di(T){const F=A.get(T).programs;F!==void 0&&(F.forEach(function(W){de.releaseProgram(W)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,H,G,ve){F===null&&(F=kt);const Me=G.isMesh&&G.matrixWorld.determinant()<0,ge=gE(T,F,W,H,G);pe.setMaterial(H,Me);let Te=W.index,Ae=1;if(H.wireframe===!0){if(Te=te.getWireframeAttribute(W),Te===void 0)return;Ae=2}const Oe=W.drawRange,Ve=W.attributes.position;let be=Oe.start*Ae,ot=(Oe.start+Oe.count)*Ae;ve!==null&&(be=Math.max(be,ve.start*Ae),ot=Math.min(ot,(ve.start+ve.count)*Ae)),Te!==null?(be=Math.max(be,0),ot=Math.min(ot,Te.count)):Ve!=null&&(be=Math.max(be,0),ot=Math.min(ot,Ve.count));const Dt=ot-be;if(Dt<0||Dt===1/0)return;se.setup(G,H,ge,W,Te);let At,lt=Be;if(Te!==null&&(At=Q.get(Te),lt=et,lt.setIndex(At)),G.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*An()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(G.isLine){let Jt=H.linewidth;Jt===void 0&&(Jt=1),pe.setLineWidth(Jt*An()),G.isLineSegments?lt.setMode(N.LINES):G.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else G.isPoints?lt.setMode(N.POINTS):G.isSprite&&lt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Jt=G._multiDrawStarts,ye=G._multiDrawCounts,bn=G._multiDrawCount,Ze=Te?Q.get(Te).bytesPerElement:1,zn=A.get(H).currentProgram.getUniforms();for(let hi=0;hi<bn;hi++)zn.setValue(N,"_gl_DrawID",hi),lt.render(Jt[hi]/Ze,ye[hi])}else if(G.isInstancedMesh)lt.renderInstances(be,Dt,G.count);else if(W.isInstancedBufferGeometry){const Jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Jt);lt.renderInstances(be,Dt,ye)}else lt.render(be,Dt)};function fi(T,F,W){T.transparent===!0&&T.side===zi&&T.forceSinglePass===!1?(T.side=wn,T.needsUpdate=!0,tl(T,F,W),T.side=Ur,T.needsUpdate=!0,tl(T,F,W),T.side=zi):tl(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),E=_e.get(W),E.init(F),x.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),T!==W&&T.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const H=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const ge=ve[Me];fi(ge,W,G),H.add(ge)}else fi(ve,W,G),H.add(ve)}),E=x.pop(),H},this.compileAsync=function(T,F,W=null){const H=this.compile(T,F,W);return new Promise(G=>{function ve(){if(H.forEach(function(Me){A.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){G(T);return}setTimeout(ve,10)}qe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Cu=null;function pE(T){Cu&&Cu(T)}function $m(){Gr.stop()}function Km(){Gr.start()}const Gr=new sE;Gr.setAnimationLoop(pE),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(T){Cu=T,ue.setAnimationLoop(T),T===null?Gr.stop():Gr.start()},ue.addEventListener("sessionstart",$m),ue.addEventListener("sessionend",Km),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(T,F);const W=ue.enabled===!0&&ue.isPresenting===!0,H=R!==null&&(I===null||W)&&R.begin(D,I);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,F,I),E=_e.get(T,x.length),E.init(F),E.state.textureUnits=S.getTextureUnits(),x.push(E),rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),De.setFromProjectionMatrix(rt,Si,F.reversedDepth),Ye=this.localClippingEnabled,xt=Se.init(this.clippingPlanes,Ye),w=J.get(T,C.length),w.init(),C.push(w),ue.enabled===!0&&ue.isPresenting===!0){const Me=D.xr.getDepthSensingMesh();Me!==null&&Ru(Me,F,-1/0,D.sortObjects)}Ru(T,F,0,D.sortObjects),w.finish(),D.sortObjects===!0&&w.sort(K,fe),yt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,yt&&re.addToRenderList(w,T),this.info.render.frame++,xt===!0&&Se.beginShadows();const G=E.state.shadowsArray;if(ce.render(G,T,F),xt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&R.hasRenderPass())===!1){const Me=w.opaque,ge=w.transmissive;if(E.setupLights(),F.isArrayCamera){const Te=F.cameras;if(ge.length>0)for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const Ve=Te[Ae];Qm(Me,ge,T,Ve)}yt&&re.render(T);for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const Ve=Te[Ae];Zm(w,T,Ve,Ve.viewport)}}else ge.length>0&&Qm(Me,ge,T,F),yt&&re.render(T),Zm(w,T,F)}I!==null&&q===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),H&&R.end(D),T.isScene===!0&&T.onAfterRender(D,T,F),se.resetDefaultState(),V=-1,O=null,x.pop(),x.length>0?(E=x[x.length-1],S.setTextureUnits(E.state.textureUnits),xt===!0&&Se.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,k!==null&&k.renderEnd()};function Ru(T,F,W,H){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||De.intersectsSprite(T)){H&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(rt);const Me=ie.update(T),ge=T.material;ge.visible&&w.push(T,Me,ge,W,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||De.intersectsObject(T))){const Me=ie.update(T),ge=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ge.copy(Me.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(rt)),Array.isArray(ge)){const Te=Me.groups;for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const Ve=Te[Ae],be=ge[Ve.materialIndex];be&&be.visible&&w.push(T,Me,be,W,Ge.z,Ve)}}else ge.visible&&w.push(T,Me,ge,W,Ge.z,null)}}const ve=T.children;for(let Me=0,ge=ve.length;Me<ge;Me++)Ru(ve[Me],F,W,H)}function Zm(T,F,W,H){const{opaque:G,transmissive:ve,transparent:Me}=T;E.setupLightsView(W),xt===!0&&Se.setGlobalState(D.clippingPlanes,W),H&&pe.viewport(U.copy(H)),G.length>0&&el(G,F,W),ve.length>0&&el(ve,F,W),Me.length>0&&el(Me,F,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Qm(T,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const be=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new bi(1,1,{generateMipmaps:!0,type:be?er:Dn,minFilter:ss,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ve=E.state.transmissionRenderTarget[H.id],Me=H.viewport||U;ve.setSize(Me.z*D.transmissionResolutionScale,Me.w*D.transmissionResolutionScale);const ge=D.getRenderTarget(),Te=D.getActiveCubeFace(),Ae=D.getActiveMipmapLevel();D.setRenderTarget(ve),D.getClearColor(oe),he=D.getClearAlpha(),he<1&&D.setClearColor(16777215,.5),D.clear(),yt&&re.render(W);const Oe=D.toneMapping;D.toneMapping=Ai;const Ve=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),xt===!0&&Se.setGlobalState(D.clippingPlanes,H),el(T,W,H),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve),qe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ot=0,Dt=F.length;ot<Dt;ot++){const At=F[ot],{object:lt,geometry:Jt,material:ye,group:bn}=At;if(ye.side===zi&&lt.layers.test(H.layers)){const Ze=ye.side;ye.side=wn,ye.needsUpdate=!0,Jm(lt,W,H,Jt,ye,bn),ye.side=Ze,ye.needsUpdate=!0,be=!0}}be===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve))}D.setRenderTarget(ge,Te,Ae),D.setClearColor(oe,he),Ve!==void 0&&(H.viewport=Ve),D.toneMapping=Oe}function el(T,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ve=T.length;G<ve;G++){const Me=T[G],{object:ge,geometry:Te,group:Ae}=Me;let Oe=Me.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),ge.layers.test(W.layers)&&Jm(ge,F,W,Te,Oe,Ae)}}function Jm(T,F,W,H,G,ve){T.onBeforeRender(D,F,W,H,G,ve),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(D,F,W,H,T,ve),G.transparent===!0&&G.side===zi&&G.forceSinglePass===!1?(G.side=wn,G.needsUpdate=!0,D.renderBufferDirect(W,F,H,G,T,ve),G.side=Ur,G.needsUpdate=!0,D.renderBufferDirect(W,F,H,G,T,ve),G.side=zi):D.renderBufferDirect(W,F,H,G,T,ve),T.onAfterRender(D,F,W,H,G,ve)}function tl(T,F,W){F.isScene!==!0&&(F=kt);const H=A.get(T),G=E.state.lights,ve=E.state.shadowsArray,Me=G.state.version,ge=de.getParameters(T,G.state,ve,F,W,E.state.lightProbeGridArray),Te=de.getProgramCacheKey(ge);let Ae=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=B.get(T.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",Pt),Ae=new Map,H.programs=Ae);let Ve=Ae.get(Te);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===Me)return tg(T,ge),Ve}else ge.uniforms=de.getUniforms(T),k!==null&&T.isNodeMaterial&&k.build(T,W,ge),T.onBeforeCompile(ge,D),Ve=de.acquireProgram(ge,Te),Ae.set(Te,Ve),H.uniforms=ge.uniforms;const be=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=Se.uniform),tg(T,ge),H.needsLights=_E(T),H.lightsStateVersion=Me,H.needsLights&&(be.ambientLightColor.value=G.state.ambient,be.lightProbe.value=G.state.probe,be.directionalLights.value=G.state.directional,be.directionalLightShadows.value=G.state.directionalShadow,be.spotLights.value=G.state.spot,be.spotLightShadows.value=G.state.spotShadow,be.rectAreaLights.value=G.state.rectArea,be.ltc_1.value=G.state.rectAreaLTC1,be.ltc_2.value=G.state.rectAreaLTC2,be.pointLights.value=G.state.point,be.pointLightShadows.value=G.state.pointShadow,be.hemisphereLights.value=G.state.hemi,be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,be.spotLightMatrix.value=G.state.spotLightMatrix,be.spotLightMap.value=G.state.spotLightMap,be.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=Ve,H.uniformsList=null,Ve}function eg(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=gc.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function tg(T,F){const W=A.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function mE(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,H=T.length;W<H;W++){const G=T[W];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function gE(T,F,W,H,G){F.isScene!==!0&&(F=kt),S.resetTextureUnits();const ve=F.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ge=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:$e.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=B.get(H.envMap||Me,Te),Oe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),be=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Dt=!!W.morphAttributes.color;let At=Ai;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(At=D.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=lt!==void 0?lt.length:0,ye=A.get(H),bn=E.state.lights;if(xt===!0&&(Ye===!0||T!==O)){const dt=T===O&&H.id===V;Se.setState(H,T,dt)}let Ze=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==bn.state.version||ye.outputColorSpace!==ge||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Ae||H.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==Oe||ye.vertexTangents!==Ve||ye.morphTargets!==be||ye.morphNormals!==ot||ye.morphColors!==Dt||ye.toneMapping!==At||ye.morphTargetsCount!==Jt||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,ye.__version=H.version);let zn=ye.currentProgram;Ze===!0&&(zn=tl(H,F,G),k&&H.isNodeMaterial&&k.onUpdateProgram(H,zn,ye));let hi=!1,ir=!1,ys=!1;const ct=zn.getUniforms(),Lt=ye.uniforms;if(pe.useProgram(zn.program)&&(hi=!0,ir=!0,ys=!0),H.id!==V&&(V=H.id,ir=!0),ye.needsLights){const dt=mE(E.state.lightProbeGridArray,G);ye.lightProbeGrid!==dt&&(ye.lightProbeGrid=dt,ir=!0)}if(hi||O!==T){pe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(N,"projectionMatrix",T.projectionMatrix),ct.setValue(N,"viewMatrix",T.matrixWorldInverse);const sr=ct.map.cameraPosition;sr!==void 0&&sr.setValue(N,pt.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,ir=!0,ys=!0)}if(ye.needsLights&&(bn.state.directionalShadowMap.length>0&&ct.setValue(N,"directionalShadowMap",bn.state.directionalShadowMap,S),bn.state.spotShadowMap.length>0&&ct.setValue(N,"spotShadowMap",bn.state.spotShadowMap,S),bn.state.pointShadowMap.length>0&&ct.setValue(N,"pointShadowMap",bn.state.pointShadowMap,S)),G.isSkinnedMesh){ct.setOptional(N,G,"bindMatrix"),ct.setOptional(N,G,"bindMatrixInverse");const dt=G.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(N,"boneTexture",dt.boneTexture,S))}G.isBatchedMesh&&(ct.setOptional(N,G,"batchingTexture"),ct.setValue(N,"batchingTexture",G._matricesTexture,S),ct.setOptional(N,G,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",G._indirectTexture,S),ct.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",G._colorsTexture,S));const rr=W.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Ne.update(G,W,zn),(ir||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,ct.setValue(N,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Lt.envMapIntensity.value=F.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=pU()),ir){if(ct.setValue(N,"toneMappingExposure",D.toneMappingExposure),ye.needsLights&&vE(Lt,ys),ve&&H.fog===!0&&Y.refreshFogUniforms(Lt,ve),Y.refreshMaterialUniforms(Lt,H,Le,Xe,E.state.transmissionRenderTarget[T.id]),ye.needsLights&&ye.lightProbeGrid){const dt=ye.lightProbeGrid;Lt.probesSH.value=dt.texture,Lt.probesMin.value.copy(dt.boundingBox.min),Lt.probesMax.value.copy(dt.boundingBox.max),Lt.probesResolution.value.copy(dt.resolution)}gc.upload(N,eg(ye),Lt,S)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gc.upload(N,eg(ye),Lt,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(N,"center",G.center),ct.setValue(N,"modelViewMatrix",G.modelViewMatrix),ct.setValue(N,"normalMatrix",G.normalMatrix),ct.setValue(N,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const dt=H.uniformsGroups;for(let sr=0,Ss=dt.length;sr<Ss;sr++){const ng=dt[sr];$.update(ng,zn),$.bind(ng,zn)}}return zn}function vE(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function _E(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,F,W){const H=A.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),A.get(T.texture).__webglTexture=F,A.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const W=A.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const xE=N.createFramebuffer();this.setRenderTarget=function(T,F=0,W=0){I=T,X=F,q=W;let H=null,G=!1,ve=!1;if(T){const ge=A.get(T);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),U.copy(T.viewport),j.copy(T.scissor),Z=T.scissorTest,pe.viewport(U),pe.scissor(j),pe.setScissorTest(Z),V=-1;return}else if(ge.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(ge.__hasExternalTextures)S.rebindTextures(T,A.get(T.texture).__webglTexture,A.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(ge.__boundDepthTexture!==Oe){if(Oe!==null&&A.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Ae=A.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[F])?H=Ae[F][W]:H=Ae[F],G=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?H=A.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[W]:H=Ae,U.copy(T.viewport),j.copy(T.scissor),Z=T.scissorTest}else U.copy(le).multiplyScalar(Le).floor(),j.copy(Re).multiplyScalar(Le).floor(),Z=Ie;if(W!==0&&(H=xE),pe.bindFramebuffer(N.FRAMEBUFFER,H)&&pe.drawBuffers(T,H),pe.viewport(U),pe.scissor(j),pe.setScissorTest(Z),G){const ge=A.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,W)}else if(ve){const ge=F;for(let Te=0;Te<T.textures.length;Te++){const Ae=A.get(T.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,W,ge)}}else if(T!==null&&W!==0){const ge=A.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(T,F,W,H,G,ve,Me,ge=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Ae=T.textures[ge],Oe=Ae.format,Ve=Ae.type;if(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(Oe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ve)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-H&&W>=0&&W<=T.height-G&&N.readPixels(F,W,H,G,L.convert(Oe),L.convert(Ve),ve)}finally{const Ae=I!==null?A.get(I).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,H,G,ve,Me,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(F>=0&&F<=T.width-H&&W>=0&&W<=T.height-G){pe.bindFramebuffer(N.FRAMEBUFFER,Te);const Ae=T.textures[ge],Oe=Ae.format,Ve=Ae.type;if(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),N.readPixels(F,W,H,G,L.convert(Oe),L.convert(Ve),0);const ot=I!==null?A.get(I).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,ot);const Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await C2(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.deleteBuffer(be),N.deleteSync(Dt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,W=0){const H=Math.pow(2,-W),G=Math.floor(T.image.width*H),ve=Math.floor(T.image.height*H),Me=F!==null?F.x:0,ge=F!==null?F.y:0;S.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Me,ge,G,ve),pe.unbindTexture()};const yE=N.createFramebuffer(),SE=N.createFramebuffer();this.copyTextureToTexture=function(T,F,W=null,H=null,G=0,ve=0){let Me,ge,Te,Ae,Oe,Ve,be,ot,Dt;const At=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(W!==null)Me=W.max.x-W.min.x,ge=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Oe=W.min.y,Ve=W.isBox3?W.min.z:0;else{const Lt=Math.pow(2,-G);Me=Math.floor(At.width*Lt),ge=Math.floor(At.height*Lt),T.isDataArrayTexture?Te=At.depth:T.isData3DTexture?Te=Math.floor(At.depth*Lt):Te=1,Ae=0,Oe=0,Ve=0}H!==null?(be=H.x,ot=H.y,Dt=H.z):(be=0,ot=0,Dt=0);const lt=L.convert(F.format),Jt=L.convert(F.type);let ye;F.isData3DTexture?(S.setTexture3D(F,0),ye=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),ye=N.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),ye=N.TEXTURE_2D),pe.activeTexture(N.TEXTURE0),pe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const bn=pe.getParameter(N.UNPACK_ROW_LENGTH),Ze=pe.getParameter(N.UNPACK_IMAGE_HEIGHT),zn=pe.getParameter(N.UNPACK_SKIP_PIXELS),hi=pe.getParameter(N.UNPACK_SKIP_ROWS),ir=pe.getParameter(N.UNPACK_SKIP_IMAGES);pe.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),pe.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const ys=T.isDataArrayTexture||T.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Lt=A.get(T),rr=A.get(F),dt=A.get(Lt.__renderTarget),sr=A.get(rr.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,dt.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let Ss=0;Ss<Te;Ss++)ys&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(T).__webglTexture,G,Ve+Ss),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(F).__webglTexture,ve,Dt+Ss)),N.blitFramebuffer(Ae,Oe,Me,ge,be,ot,Me,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||A.has(T)){const Lt=A.get(T),rr=A.get(F);pe.bindFramebuffer(N.READ_FRAMEBUFFER,yE),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,SE);for(let dt=0;dt<Te;dt++)ys?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.__webglTexture,G,Ve+dt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Lt.__webglTexture,G),ct?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rr.__webglTexture,ve,Dt+dt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rr.__webglTexture,ve),G!==0?N.blitFramebuffer(Ae,Oe,Me,ge,be,ot,Me,ge,N.COLOR_BUFFER_BIT,N.NEAREST):ct?N.copyTexSubImage3D(ye,ve,be,ot,Dt+dt,Ae,Oe,Me,ge):N.copyTexSubImage2D(ye,ve,be,ot,Ae,Oe,Me,ge);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(ye,ve,be,ot,Dt,Me,ge,Te,lt,Jt,At.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,ve,be,ot,Dt,Me,ge,Te,lt,At.data):N.texSubImage3D(ye,ve,be,ot,Dt,Me,ge,Te,lt,Jt,At):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,be,ot,Me,ge,lt,Jt,At.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,be,ot,At.width,At.height,lt,At.data):N.texSubImage2D(N.TEXTURE_2D,ve,be,ot,Me,ge,lt,Jt,At);pe.pixelStorei(N.UNPACK_ROW_LENGTH,bn),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,zn),pe.pixelStorei(N.UNPACK_SKIP_ROWS,hi),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,ir),ve===0&&F.generateMipmaps&&N.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(T){A.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){X=0,q=0,I=null,pe.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}const N_={type:"change"},Gm={type:"start"},hE={type:"end"},Xl=new QM,I_=new gr,gU=Math.cos(70*D2.DEG2RAD),zt=new z,_n=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qd=1e-6;class vU extends x3{constructor(e,n=null){super(e,n),this.state=at.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Fr,this._lastTargetPosition=new z,this._quat=new Fr().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new a_,this._sphericalDelta=new a_,this._scale=1,this._panOffset=new z,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new z,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xU.bind(this),this._onPointerDown=_U.bind(this),this._onPointerUp=yU.bind(this),this._onContextMenu=bU.bind(this),this._onMouseWheel=EU.bind(this),this._onKeyDown=TU.bind(this),this._onTouchStart=wU.bind(this),this._onTouchMove=AU.bind(this),this._onMouseDown=SU.bind(this),this._onMouseMove=MU.bind(this),this._interceptControlDown=CU.bind(this),this._interceptControlUp=RU.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(N_),this.update(),this.state=at.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;zt.copy(n).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),n.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xl.origin.copy(this.object.position),Xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xl.direction))<gU?this.object.lookAt(this.target):(I_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xl.intersectPlane(I_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qd||this._lastTargetPosition.distanceToSquared(this.target)>qd?(this.dispatchEvent(N_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){zt.setFromMatrixColumn(n,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,n){this.screenSpacePanning===!0?zt.setFromMatrixColumn(n,1):(zt.setFromMatrixColumn(n,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;zt.copy(r).sub(this.target);let s=zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ke,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _U(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function xU(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function yU(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hE),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function SU(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=at.DOLLY;break;case ao.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=at.ROTATE}break;case ao.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Gm)}function MU(t){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function EU(t){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(t.preventDefault(),this.dispatchEvent(Gm),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(hE))}function TU(t){this.enabled!==!1&&this._handleKeyDown(t)}function wU(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=at.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=at.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Gm)}function AU(t){switch(this._trackPointer(t),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=at.NONE}}function bU(t){this.enabled!==!1&&t.preventDefault()}function CU(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RU(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class PU extends Vm{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new h3(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function n(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const v=[115,111,108,105,100];for(let y=0;y<5;y++)if(i(v,u,y))return!1;return!0}function i(c,u,f){for(let d=0,p=c.length;d<p;d++)if(c[d]!==u.getUint8(f+d))return!1;return!0}function r(c){const u=new DataView(c),f=u.getUint32(80,!0);let d,p,v,y=!1,g,h,m,_,M;for(let P=0;P<70;P++)u.getUint32(P,!1)==1129270351&&u.getUint8(P+4)==82&&u.getUint8(P+5)==61&&(y=!0,g=new Float32Array(f*3*3),h=u.getUint8(P+6)/255,m=u.getUint8(P+7)/255,_=u.getUint8(P+8)/255,M=u.getUint8(P+9)/255);const w=84,E=12*4+2,C=new di,x=new Float32Array(f*3*3),R=new Float32Array(f*3*3),D=new tt;for(let P=0;P<f;P++){const k=w+P*E,X=u.getFloat32(k,!0),q=u.getFloat32(k+4,!0),I=u.getFloat32(k+8,!0);if(y){const V=u.getUint16(k+48,!0);V&32768?(d=h,p=m,v=_):(d=(V&31)/31,p=(V>>5&31)/31,v=(V>>10&31)/31)}for(let V=1;V<=3;V++){const O=k+V*12,U=P*3*3+(V-1)*3;x[U]=u.getFloat32(O,!0),x[U+1]=u.getFloat32(O+4,!0),x[U+2]=u.getFloat32(O+8,!0),R[U]=X,R[U+1]=q,R[U+2]=I,y&&(D.setRGB(d,p,v,xn),g[U]=D.r,g[U+1]=D.g,g[U+2]=D.b)}}return C.setAttribute("position",new Un(x,3)),C.setAttribute("normal",new Un(R,3)),y&&(C.setAttribute("color",new Un(g,3)),C.hasColors=!0,C.alpha=M),C}function s(c){const u=new di,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let v=0;const y=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+y+y+y,"g"),h=new RegExp("normal"+y+y+y,"g"),m=[],_=[],M=[],w=new z;let E,C=0,x=0,R=0;for(;(E=f.exec(c))!==null;){x=R;const D=E[0],P=(E=p.exec(D))!==null?E[1]:"";for(M.push(P);(E=d.exec(D))!==null;){let q=0,I=0;const V=E[0];for(;(E=h.exec(V))!==null;)w.x=parseFloat(E[1]),w.y=parseFloat(E[2]),w.z=parseFloat(E[3]),I++;for(;(E=g.exec(V))!==null;)m.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),_.push(w.x,w.y,w.z),q++,R++;I!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+v),q!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+v),v++}const k=x,X=R-x;u.userData.groupNames=M,u.addGroup(k,X,C),C++}return u.setAttribute("position",new ci(m,3)),u.setAttribute("normal",new ci(_,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=a(e);return n(l)?r(l):s(o(e))}}function DU({open:t,title:e="3D Model",src:n,onClose:i}){const r=ae.useRef(null),s=ae.useMemo(()=>new PU,[]),o=t&&typeof n=="string"&&n.length>0;return ae.useEffect(()=>{if(!o)return;const a=r.current;if(!a)return;const l=new mU({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.outputColorSpace=xn,a.appendChild(l.domElement);const c=new j2;c.background=null;const u=new Xn(45,1,.01,100);u.position.set(.8,.5,1.2);const f=new vU(u,l.domElement);f.enableDamping=!0,f.dampingFactor=.08,f.minDistance=.2,f.maxDistance=8,c.add(new g3(16777215,.7));const d=new o_(16777215,.9);d.position.set(2,2,2),c.add(d);const p=new o_(16777215,.35);p.position.set(-2,1,-1),c.add(p);let v=null,y=null,g=!1;const h=()=>{const{width:M,height:w}=a.getBoundingClientRect();l.setSize(M,w,!1),u.aspect=M/Math.max(w,1),u.updateProjectionMatrix()},m=M=>{M.key==="Escape"&&(i==null||i())};window.addEventListener("resize",h),window.addEventListener("keydown",m),h(),s.load(n,M=>{if(g)return;M.computeVertexNormals(),M.center();const w=new a3({color:10134706,metalness:.25,roughness:.5});v=new Ri(M,w),c.add(v);const E=new Po().setFromObject(v),C=E.getSize(new z),x=E.getCenter(new z),D=(Math.max(C.x,C.y,C.z)||1)*1.6;u.position.set(x.x+D,x.y+D*.7,x.z+D),f.target.copy(x),f.update()},void 0,()=>{});const _=()=>{f.update(),l.render(c,u),y=window.requestAnimationFrame(_)};return _(),()=>{var M,w,E,C,x,R;g=!0,window.removeEventListener("resize",h),window.removeEventListener("keydown",m),y&&window.cancelAnimationFrame(y),f.dispose(),v&&(c.remove(v),(w=(M=v.geometry)==null?void 0:M.dispose)==null||w.call(M),(C=(E=v.material)==null?void 0:E.dispose)==null||C.call(E)),l.dispose(),(R=(x=l.domElement)==null?void 0:x.remove)==null||R.call(x)}},[o,s,i,n]),t?b.jsxs("div",{className:"model-modal-backdrop",role:"dialog","aria-modal":"true","aria-label":e,children:[b.jsx("button",{className:"model-modal-close",type:"button",onClick:i,"aria-label":"Close 3D viewer",children:b.jsx(Yp,{size:20})}),b.jsxs("div",{className:"model-modal",children:[b.jsxs("div",{className:"model-modal-header",children:[b.jsx("h3",{children:e}),b.jsx("p",{children:"Drag to rotate, scroll to zoom."})]}),b.jsx("div",{className:"model-modal-canvas",ref:r})]}),b.jsx("button",{className:"model-modal-backdrop-hit",type:"button",onClick:i,"aria-label":"Close"})]}):null}const LU=({product:t,isOpen:e,onClose:n,instagramUrl:i,theme:r})=>b.jsx(fA,{children:e&&t&&b.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},children:[b.jsx(cc.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:r==="light"?"rgba(0, 0, 0, 0.4)":"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(8px)"}}),b.jsxs(cc.div,{initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},style:{position:"relative",background:r==="light"?"#fff":"#171717",color:r==="light"?"#000":"#fff",width:"100%",maxWidth:"1000px",borderRadius:"24px",overflow:"hidden",display:"flex",flexDirection:window.innerWidth<768?"column":"row",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",maxHeight:"90vh"},children:[b.jsx("button",{onClick:n,style:{position:"absolute",right:"1.5rem",top:"1.5rem",background:r==="light"?"#f3f4f6":"#262626",border:"none",borderRadius:"50%",width:"40px",height:"40px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},children:b.jsx(Yp,{size:20})}),b.jsx("div",{style:{background:r==="light"?"#f8fafc":"#262626",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem",borderRight:r==="light"?"1px solid #e2e8f0":"1px solid #333"},children:b.jsx(cc.img,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.1},src:t.image,alt:t.name,style:{width:"100%",height:"auto",borderRadius:"16px",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}})}),b.jsxs("div",{style:{padding:"2.5rem",display:"flex",flexDirection:"column",overflowY:"auto"},children:[b.jsx("span",{style:{color:"#3b82f6",fontWeight:"700",fontSize:"0.8rem",textTransform:"uppercase",marginBottom:"0.5rem"},children:t.tag}),b.jsx("h2",{style:{fontSize:"2rem",fontWeight:"800",marginBottom:"0.5rem"},children:t.name}),b.jsx("div",{style:{fontSize:"2.5rem",fontWeight:"900",color:r==="light"?"#1e3a8a":"#60a5fa",margin:"1rem 0"},children:t.price}),b.jsx("p",{style:{lineHeight:"1.6",color:r==="light"?"#4b5563":"#a3a3a3",marginBottom:"2rem"},children:t.longDescription}),t.highlights&&b.jsx("div",{style:{marginBottom:"1.5rem"},children:b.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:t.highlights.map(s=>b.jsxs("li",{style:{fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[b.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#3b82f6"}})," ",s]},s))})}),b.jsxs("div",{style:{marginBottom:"2rem"},children:[b.jsx("h4",{style:{fontSize:"1rem",marginBottom:"1rem",fontWeight:"700"},children:"Features & Specs"}),b.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:t.specs.map(s=>b.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem"},children:[b.jsx(Ky,{size:14,color:"#3b82f6"})," ",s]},s))})]}),b.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"2rem",padding:"1rem",background:r==="light"?"#f8fafc":"#262626",borderRadius:"16px"},children:[b.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[b.jsx(eA,{size:18,color:"#3b82f6"}),b.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"Fast Delivery"})]}),b.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[b.jsx(gu,{size:18,color:"#3b82f6"}),b.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"1 Year Support"})]}),b.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[b.jsx(dw,{size:18,color:"#3b82f6"}),b.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"Quality Test"})]})]}),b.jsxs("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:[b.jsxs("a",{href:`${i}?text=${encodeURIComponent(`I want to buy ${t.name}`)}`,target:"_blank",rel:"noreferrer",className:"primary-button",style:{padding:"1.25rem",borderRadius:"100px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",fontSize:"1rem",fontWeight:"700"},children:["Message on WhatsApp ",b.jsx(sc,{size:20})]}),b.jsx("p",{style:{fontSize:"0.75rem",textAlign:"center",opacity:.6},children:"Order support on WhatsApp"})]})]})]})]})}),NU="/assets/bec4568b-9ea5-4b72-844e-27d7d9d113f7-C22KHMoC.png",IU="/assets/ChatGPT%20Image%20May%2028_%202026_%2001_25_30%20PM-mKS1tqbq.png",UU="/assets/1599rs-Dz-93ukQ.jpeg",FU="/assets/199rs-DZQpWdc8.jpeg",OU="/assets/robomitra-keychain-black-C712l2Az.jpeg",kU="/assets/robomitra-keychain-white-DxHzwwDs.jpeg",BU=[{name:"RoboMitra Mini Companion White",image:kU,price:"Rs. 999",tag:"New Launch",description:"A pocket-sized white RoboMitra companion with glowing expressive eyes.",longDescription:"RoboMitra Mini Companion White brings the companion robot look into a pocket-sized collectible form. It is designed for bags, keys, desks, and gifting with a glossy white body, rechargeable design, and animated blue display.",highlights:["Pocket-sized keychain design","Animated blue display","Rechargeable build","Premium white finish"],specs:["Keychain Form","Animated Display","Rechargeable","Interactive","Pocket-Sized"]},{name:"RoboMitra Bag Keychain Black",image:OU,price:"Rs. 999",tag:"New Variant",description:"A stealth black RoboMitra bag keychain with a cyber-style animated screen.",longDescription:"RoboMitra Bag Keychain Black is the darker pocket companion variant with a textured black body, bright blue animated screen, rechargeable power, and a compact keyring form that is easy to carry anywhere.",highlights:["Stealth black textured body","Animated blue screen","Portable keyring form","Rechargeable everyday carry"],specs:["Keychain Form","Animated Display","Rechargeable","Portable","Black Finish"]},{name:"RoboMitra R1",image:UU,price:"Rs. 1,599",tag:"Flagship",description:"The premium portable model with battery backup and richer reactions.",longDescription:"RoboMitra R1 is the flagship companion with internal battery backup, polished finishing, expressive animations, and a more portable feel for people who want the full experience.",highlights:["Built-in 500mAh battery","USB-C charging","Advanced expression set","Premium matte finish"],specs:["Built-in Battery","2-4 Hours Backup","Interactive Eyes","USB-C Charging"]},{name:"Head Set",image:FU,price:"Rs. 199",tag:"Accessory",description:"A snap-on personality upgrade for your RoboMitra buddy.",longDescription:"The RoboMitra Head Set clips onto compatible models for a sharper, more characterful look without blocking the robot's core interaction points.",highlights:["Universal clip-on fit","Lightweight material","Photo-ready style","Easy to apply"],specs:["Universal Fit","Lightweight","Multiple Colors","Easy Clip-On"]}],zU=[{name:"Aarav Sharma",city:"Pune",rating:5,photo:"https://i.pravatar.cc/120?img=12",text:"Very cute product for my desk setup. The expressions and look are the best part for me."},{name:"Priya Patel",city:"Ahmedabad",rating:5,photo:"https://i.pravatar.cc/120?img=32",text:"Looks premium in hand and the animations feel fun. I liked the compact size and finish."},{name:"Rohan Verma",city:"Delhi",rating:4,photo:"https://i.pravatar.cc/120?img=14",text:"Nice gift option and looks different from normal toys. Feels good on a shelf or table."},{name:"Sneha Iyer",city:"Bengaluru",rating:5,photo:"https://i.pravatar.cc/120?img=25",text:"The mini motions make it fun to keep near my workspace during the day."},{name:"Kunal Joshi",city:"Mumbai",rating:3,photo:"https://i.pravatar.cc/120?img=15",text:"Design is lovely and the robot looks premium. I would like even more features in the future."},{name:"Meera Nair",city:"Kochi",rating:4,photo:"https://i.pravatar.cc/120?img=47",text:"Small, unique, and easy to place anywhere. The packaging and presentation felt nice."},{name:"Vikram Singh",city:"Jaipur",rating:5,photo:"https://i.pravatar.cc/120?img=68",text:"One of the most eye-catching desk items I have bought recently. Great for gifting too."},{name:"Ananya Rao",city:"Hyderabad",rating:2,photo:"https://i.pravatar.cc/120?img=45",text:"Cute concept and good styling. I personally wanted a little bigger body size."}],VU=[{value:"2-4 hrs",label:"battery backup"},{value:"USB-C",label:"simple charging"},{value:"2x",label:"robot interaction"}],qo="https://wa.me/917977473538";function HU({onNavigate:t,theme:e,onToggleTheme:n}){const{dualRobotsImage:i,fullKitImage:r,pouchImage:s}=jP,o=e==="light"?IU:NU,[a,l]=ae.useState(null),[c,u]=ae.useState(!1),[f,d]=ae.useState("all"),[p,v]=ae.useState(!1),y=ae.useMemo(()=>"/models/lets-goo.stl",[]),g=zU.filter(m=>f==="all"||m.rating===Number(f)),h=p?g:g.slice(0,4);return b.jsxs("div",{className:"page-shell future-shell",children:[b.jsx(LU,{isOpen:!!a,product:a,onClose:()=>l(null),instagramUrl:qo,theme:e}),b.jsx(qp,{ariaLabel:"Primary",onNavigate:t,theme:e,onToggleTheme:n,isHome:!0,promoText:"Launch offer: use code ROBO50 for Rs. 50 off",tagline:"Your Smart Desk Buddy",links:[{href:"#home",label:"Home"},{href:"#products",label:"Products"},{href:"#features",label:"Features"},{href:"#gallery",label:"Gallery"},{href:"/support",label:"FAQ"},{href:qo,label:"WhatsApp",external:!0}]}),b.jsxs("main",{children:[b.jsx(DU,{open:c,title:"RoboMitra 3D Model",src:y,onClose:()=>u(!1)}),b.jsxs("section",{className:"future-hero full-photo-hero",id:"home",children:[b.jsx(ft,{className:"future-hero-stage",delay:.04,children:b.jsxs("div",{className:"hero-device-card",children:[b.jsx("div",{className:"scan-line"}),b.jsx("img",{className:"hero-product-photo hero-reference-photo",src:o,alt:"RoboMitra landing hero design"})]})}),b.jsxs(ft,{className:"future-hero-copy",delay:.08,children:[b.jsx("p",{className:"section-tag",children:"RoboMitra companion robot"}),b.jsx("h2",{children:"Your desk just got a little smarter."}),b.jsx("p",{className:"hero-text",children:"A compact expressive robot with smooth eyes, playful reactions, portable variants, and a premium look made for workspaces, shelves, gifts, and daily tiny moments of delight."}),b.jsxs("div",{className:"cta-row",children:[b.jsxs("a",{className:"primary-button",href:qo,target:"_blank",rel:"noreferrer",children:["Message on WhatsApp",b.jsx(sc,{size:18})]}),b.jsxs("button",{className:"secondary-button",type:"button",onClick:()=>u(!0),children:[b.jsx(Bw,{size:18}),"View 3D Model"]})]}),b.jsx("div",{className:"stat-grid hero-stat-grid",children:VU.map(m=>b.jsxs("div",{className:"stat-card future-stat",children:[b.jsx("strong",{children:m.value}),b.jsx("span",{children:m.label})]},m.label))})]})]}),b.jsxs("section",{className:"future-products",id:"products",children:[b.jsxs(ft,{className:"section-heading",delay:.04,children:[b.jsx("p",{className:"section-tag",children:"Choose your RoboMitra"}),b.jsx("h2",{children:"New keychain drops plus the flagship desk buddy."})]}),b.jsx("div",{className:"product-grid future-product-grid",children:BU.map((m,_)=>b.jsxs(ft,{as:"article",className:"future-product-card",delay:.08*(_+1),onClick:()=>l(m),children:[b.jsxs("div",{className:"product-image-frame",children:[b.jsx("img",{src:m.image,alt:m.name}),b.jsx("span",{children:m.tag})]}),b.jsxs("div",{className:"future-product-copy",children:[b.jsx("h3",{children:m.name}),b.jsx("p",{children:m.description}),b.jsxs("div",{className:"product-card-foot",children:[b.jsx("strong",{children:m.price}),b.jsxs("a",{className:"primary-button product-buy-button",href:`${qo}?text=${encodeURIComponent(`I want to buy ${m.name}`)}`,target:"_blank",rel:"noreferrer",onClick:M=>M.stopPropagation(),children:["Message on WhatsApp",b.jsx(sc,{size:15})]})]})]})]},m.name))})]}),b.jsx("section",{className:"highlights future-highlights",children:kP.map(({icon:m,title:_,text:M},w)=>b.jsxs(ft,{as:"article",className:"highlight-card",delay:.08*(w+1),children:[b.jsx("div",{className:"icon-wrap",children:b.jsx(m,{size:22})}),b.jsx("h3",{children:_}),b.jsx("p",{children:M})]},_))}),b.jsxs("section",{className:"feature-showcase",id:"features",children:[b.jsxs(ft,{className:"feature-showcase-copy",delay:.06,children:[b.jsx("p",{className:"section-tag",children:"Inside the experience"}),b.jsx("h2",{children:"Small body. Big personality. Built to feel alive."}),b.jsx("p",{children:"RoboMitra combines expressive visual feedback, touch interaction, portable design, and charming animations so it feels like a tiny companion instead of just another desk object."})]}),b.jsx("div",{className:"feature-grid",children:zP.map(({icon:m,title:_,text:M},w)=>b.jsxs(ft,{as:"article",className:"feature-spotlight-card",delay:.05*(w+1),children:[b.jsx("div",{className:"icon-wrap feature-spotlight-icon",children:b.jsx(m,{size:20})}),b.jsx("h3",{children:_}),b.jsx("p",{children:M})]},_))})]}),b.jsxs("section",{className:"future-split-section",id:"details",children:[b.jsxs(ft,{className:"details-copy",delay:.06,children:[b.jsx("p",{className:"section-tag",children:"Product details"}),b.jsx("h2",{children:"A compact robot designed to look premium and feel expressive."}),b.jsx("p",{children:"Built for desks, shelves, bedside tables, gifting, and collecting, RoboMitra keeps the setup simple while adding a more animated, personal feel to everyday spaces."}),b.jsx("div",{className:"feature-list",children:BP.map(({icon:m,title:_,text:M},w)=>b.jsxs(ft,{className:"feature-item",delay:.08*(w+1),children:[b.jsx("div",{className:"feature-icon",children:b.jsx(m,{size:18})}),b.jsxs("div",{children:[b.jsx("h3",{children:_}),b.jsx("p",{children:M})]})]},_))}),b.jsxs(ft,{className:"box-contents-card",delay:.18,children:[b.jsx("p",{className:"section-tag",children:"What's in the box"}),b.jsx("div",{className:"box-contents-list",children:HP.map(m=>b.jsxs("div",{className:"box-content-row",children:[b.jsx(cw,{size:16}),b.jsx("span",{children:m})]},m))})]})]}),b.jsxs(ft,{className:"media-column future-media-column",delay:.14,children:[b.jsx("div",{className:"media-card media-large",children:b.jsx("img",{className:"media-photo",src:r,alt:"Full RoboMitra box contents"})}),b.jsxs("div",{className:"media-row",children:[b.jsx("div",{className:"media-card",children:b.jsx("img",{className:"media-photo",src:i,alt:"Two RoboMitra units together"})}),b.jsx("div",{className:"media-card accent-card",children:b.jsx("img",{className:"media-photo",src:s,alt:"RoboMitra branded pouch"})})]})]})]}),b.jsxs("section",{className:"gallery-section",id:"gallery",children:[b.jsxs(ft,{className:"gallery-intro",delay:.06,children:[b.jsx("p",{className:"section-tag",children:"Product gallery"}),b.jsx("h2",{children:"Real product photos, packaging, accessories, and a 3D view."}),b.jsx("p",{children:"See RoboMitra from multiple angles: the robot body, charging cable, pouch, manual, box contents, and interactive model preview."})]}),b.jsx("div",{className:"gallery-grid",children:VP.map((m,_)=>b.jsx(YP,{title:m.title,image:m.image,alt:m.alt,delay:.05*(_+1),onClick:m.is3d?()=>u(!0):void 0},m.title))})]}),b.jsxs("section",{className:"reviews-section",id:"trust",children:[b.jsxs(ft,{className:"reviews-intro",delay:.05,children:[b.jsx("p",{className:"section-tag",children:"Customer signal"}),b.jsx("h2",{children:"Early desk owners are already giving RoboMitra a spot."}),b.jsx("p",{children:"Demo review cards show how customer feedback can look on the page while keeping the product story social and easy to scan."})]}),b.jsxs("div",{className:"reviews-toolbar",children:[b.jsxs("div",{className:"reviews-summary",children:[b.jsx("strong",{children:"8 sample reviews"}),b.jsx("span",{children:"Filter by rating to preview the review layout."})]}),b.jsxs("div",{className:"reviews-filters","aria-label":"Sample review filters",children:[b.jsx("button",{type:"button",className:`review-filter ${f==="all"?"review-filter-active":""}`,onClick:()=>{d("all"),v(!1)},children:"All"}),[5,4,3,2,1].map(m=>b.jsxs("button",{type:"button",className:`review-filter ${f===String(m)?"review-filter-active":""}`,onClick:()=>{d(String(m)),v(!1)},children:[m," Star"]},m))]})]}),b.jsx("div",{className:"reviews-grid",children:h.map((m,_)=>b.jsxs(ft,{as:"article",className:"review-card",delay:.05*(_+1),children:[b.jsxs("div",{className:"review-head",children:[b.jsx("img",{className:"review-avatar",src:m.photo,alt:`${m.name} sample profile`}),b.jsxs("div",{children:[b.jsx("h3",{children:m.name}),b.jsx("p",{className:"review-city",children:m.city})]})]}),b.jsx("div",{className:"review-stars","aria-label":`${m.rating} star sample review`,children:Array.from({length:5}).map((M,w)=>b.jsx(qw,{size:15,fill:w<m.rating?"currentColor":"none"},w))}),b.jsx("p",{className:"review-text",children:m.text})]},`${m.name}-${m.city}`))}),b.jsx("div",{className:"reviews-footer",children:b.jsxs("button",{type:"button",className:"secondary-button reviews-more-button",onClick:()=>v(m=>!m),children:[p?"Show fewer reviews":"See all reviews",b.jsx(sc,{size:16})]})})]}),b.jsxs(ft,{as:"section",className:"cta-banner future-cta",delay:.1,children:[b.jsxs("div",{children:[b.jsx("p",{className:"section-tag",children:"Order on WhatsApp"}),b.jsx("h2",{children:"Bring RoboMitra to your desk today."}),b.jsx("p",{children:"Message us on WhatsApp at 7977473538 for orders, colors, availability, and product questions."})]}),b.jsxs("div",{className:"cta-actions",children:[b.jsxs("a",{className:"primary-button",href:qo,target:"_blank",rel:"noreferrer",children:[b.jsx(Dw,{size:18}),"Message on WhatsApp"]}),b.jsxs("button",{className:"secondary-button",type:"button",onClick:()=>u(!0),children:[b.jsx(Ow,{size:18}),"Try 3D View"]})]})]}),b.jsx("section",{className:"trust-strip","aria-label":"RoboMitra product promises",children:[[sw,"Premium finish"],[gu,"Handmade with care"],[Ky,"Quick setup"],[vu,"Gift-ready design"]].map(([m,_])=>b.jsxs("div",{className:"trust-item",children:[b.jsx(m,{size:18}),b.jsx("span",{children:_})]},_))})]})]})}function GU({onNavigate:t,theme:e,onToggleTheme:n}){return b.jsxs("div",{className:"page-shell support-shell",children:[b.jsx(qp,{ariaLabel:"Support navigation",onNavigate:t,theme:e,onToggleTheme:n,links:[{href:"/",label:"Home"},{href:"/aboutus",label:"About Us"},{href:RM,label:"Buy Now",external:!0}]}),b.jsxs("main",{className:"support-main",children:[b.jsxs(ft,{className:"support-hero",delay:.04,children:[b.jsx("p",{className:"section-tag",children:"Support and FAQ"}),b.jsx("h2",{children:"Help for your RoboMitra, fast answers, and direct support contact."}),b.jsx("p",{className:"hero-text",children:"If you are facing charging, connection, touch, display, or power issues, this page covers the most common fixes before you reach out."})]}),b.jsxs(ft,{className:"support-contact-card",delay:.08,children:[b.jsxs("div",{className:"support-card-head",children:[b.jsx("div",{className:"icon-wrap support-head-icon",children:b.jsx(h0,{size:20})}),b.jsxs("div",{children:[b.jsx("p",{className:"section-tag",children:"Contact support"}),b.jsx("h3",{children:"Need direct help?"})]})]}),b.jsxs("div",{className:"support-contact-grid",children:[b.jsxs("a",{className:"support-contact-item",href:"mailto:robomitra@zohomail.in",children:[b.jsx(h0,{size:18}),b.jsx("span",{children:"robomitra@zohomail.in"})]}),b.jsxs("div",{className:"support-contact-item",children:[b.jsx(hw,{size:18}),b.jsx("span",{children:"Response time: Within 24-48 hours"})]})]})]}),b.jsxs("section",{className:"faq-section",children:[b.jsxs(ft,{className:"faq-intro",delay:.1,children:[b.jsx("p",{className:"section-tag",children:"Frequently asked questions"}),b.jsx("h2",{children:"Quick fixes for the most common RoboMitra issues."})]}),b.jsx("div",{className:"faq-grid",children:GP.map(({icon:i,title:r,points:s},o)=>b.jsxs(ft,{as:"article",className:"faq-card",delay:.05*(o+1),children:[b.jsxs("div",{className:"support-card-head",children:[b.jsx("div",{className:"icon-wrap support-head-icon",children:b.jsx(i,{size:20})}),b.jsx("h3",{children:r})]}),b.jsx("div",{className:"faq-points",children:s.map(a=>b.jsxs("div",{className:"faq-point",children:[b.jsx("span",{className:"box-content-dot"}),b.jsx("span",{children:a})]},a))})]},r))})]}),b.jsxs(ft,{className:"support-help-card",delay:.12,children:[b.jsxs("div",{className:"support-card-head",children:[b.jsx("div",{className:"icon-wrap support-head-icon",children:b.jsx(rA,{size:20})}),b.jsxs("div",{children:[b.jsx("p",{className:"section-tag",children:"Need more help?"}),b.jsx("h3",{children:"If your issue is not listed above, email us with:"})]})]}),b.jsxs("div",{className:"faq-points",children:[b.jsxs("div",{className:"faq-point",children:[b.jsx("span",{className:"box-content-dot"}),b.jsx("span",{children:"Problem description"})]}),b.jsxs("div",{className:"faq-point",children:[b.jsx("span",{className:"box-content-dot"}),b.jsx("span",{children:"Photos or videos"})]})]}),b.jsx("p",{className:"support-help-note",children:"We will help you as soon as possible."})]})]})]})}function WU(){const[t,e]=ae.useState(window.location.pathname),[n,i]=ae.useState(()=>window.localStorage.getItem("theme")||"dark");ae.useEffect(()=>{document.documentElement.setAttribute("data-theme",n),window.localStorage.setItem("theme",n)},[n]);const r=()=>{i(o=>o==="dark"?"light":"dark")},s=o=>{if(o.startsWith("#")){if(window.location.pathname!=="/"){window.history.pushState({},"","/"),e("/"),requestAnimationFrame(()=>{const l=document.querySelector(o);l==null||l.scrollIntoView({behavior:"smooth"})});return}const a=document.querySelector(o);a==null||a.scrollIntoView({behavior:"smooth"});return}o!==window.location.pathname&&(window.history.pushState({},"",o),e(o),window.scrollTo({top:0,behavior:"smooth"}))};return ae.useEffect(()=>{const o=()=>e(window.location.pathname);return window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)},[]),t==="/support"?b.jsx(GU,{onNavigate:s,theme:n,onToggleTheme:r}):t==="/about"||t==="/aboutus"?b.jsx(XP,{onNavigate:s,theme:n,onToggleTheme:r}):b.jsx(HU,{onNavigate:s,theme:n,onToggleTheme:r})}$d.createRoot(document.getElementById("root")).render(b.jsx(kE.StrictMode,{children:b.jsx(WU,{})}));
