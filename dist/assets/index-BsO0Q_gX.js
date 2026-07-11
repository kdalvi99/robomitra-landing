(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function O1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z_={exports:{}},nu={},Q_={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),k1=Symbol.for("react.portal"),B1=Symbol.for("react.fragment"),z1=Symbol.for("react.strict_mode"),V1=Symbol.for("react.profiler"),H1=Symbol.for("react.provider"),G1=Symbol.for("react.context"),j1=Symbol.for("react.forward_ref"),W1=Symbol.for("react.suspense"),X1=Symbol.for("react.memo"),Y1=Symbol.for("react.lazy"),ug=Symbol.iterator;function q1(t){return t===null||typeof t!="object"?null:(t=ug&&t[ug]||t["@@iterator"],typeof t=="function"?t:null)}var J_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ex=Object.assign,tx={};function Ro(t,e,n){this.props=t,this.context=e,this.refs=tx,this.updater=n||J_}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nx(){}nx.prototype=Ro.prototype;function np(t,e,n){this.props=t,this.context=e,this.refs=tx,this.updater=n||J_}var ip=np.prototype=new nx;ip.constructor=np;ex(ip,Ro.prototype);ip.isPureReactComponent=!0;var dg=Array.isArray,ix=Object.prototype.hasOwnProperty,rp={current:null},rx={key:!0,ref:!0,__self:!0,__source:!0};function sx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ix.call(e,i)&&!rx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xa,type:t,key:s,ref:o,props:r,_owner:rp.current}}function $1(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function K1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hg=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K1(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xa:case k1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,dg(r)?(n="",t!=null&&(n=t.replace(hg,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(sp(r)&&(r=$1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=Zl(s,e,n,l,r)}else if(l=q1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=Zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},Ql={transition:null},Q1={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:rp};function ox(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ro;Xe.Fragment=B1;Xe.Profiler=V1;Xe.PureComponent=np;Xe.StrictMode=z1;Xe.Suspense=W1;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q1;Xe.act=ox;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ex({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ix.call(e,l)&&!rx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:G1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H1,_context:t},t.Consumer=t};Xe.createElement=sx;Xe.createFactory=function(t){var e=sx.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:j1,render:t}};Xe.isValidElement=sp;Xe.lazy=function(t){return{$$typeof:Y1,_payload:{_status:-1,_result:t},_init:Z1}};Xe.memo=function(t,e){return{$$typeof:X1,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Ql.transition;Ql.transition={};try{t()}finally{Ql.transition=e}};Xe.unstable_act=ox;Xe.useCallback=function(t,e){return gn.current.useCallback(t,e)};Xe.useContext=function(t){return gn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return gn.current.useEffect(t,e)};Xe.useId=function(){return gn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return gn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};Xe.useRef=function(t){return gn.current.useRef(t)};Xe.useState=function(t){return gn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return gn.current.useTransition()};Xe.version="18.3.1";Q_.exports=Xe;var ee=Q_.exports;const J1=O1(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE=ee,tE=Symbol.for("react.element"),nE=Symbol.for("react.fragment"),iE=Object.prototype.hasOwnProperty,rE=eE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sE={key:!0,ref:!0,__self:!0,__source:!0};function ax(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)iE.call(e,i)&&!sE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tE,type:t,key:s,ref:o,props:r,_owner:rE.current}}nu.Fragment=nE;nu.jsx=ax;nu.jsxs=ax;Z_.exports=nu;var x=Z_.exports,Qd={},lx={exports:{}},Bn={},cx={exports:{}},ux={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,X){var Z=F.length;F.push(X);e:for(;0<Z;){var ae=Z-1>>>1,fe=F[ae];if(0<r(fe,X))F[ae]=X,F[Z]=fe,Z=ae;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var X=F[0],Z=F.pop();if(Z!==X){F[0]=Z;e:for(var ae=0,fe=F.length,Ge=fe>>>1;ae<Ge;){var Ye=2*(ae+1)-1,Ne=F[Ye],K=Ye+1,he=F[K];if(0>r(Ne,Z))K<fe&&0>r(he,Ne)?(F[ae]=he,F[K]=Z,ae=K):(F[ae]=Ne,F[Ye]=Z,ae=Ye);else if(K<fe&&0>r(he,Z))F[ae]=he,F[K]=Z,ae=K;else break e}}return X}function r(F,X){var Z=F.sortIndex-X.sortIndex;return Z!==0?Z:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=F)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(F){if(S=!1,y(F),!g)if(n(l)!==null)g=!0,H(b);else{var X=n(c);X!==null&&k(M,X.startTime-F)}}function b(F,X){g=!1,S&&(S=!1,f(_),_=-1),p=!0;var Z=d;try{for(y(X),h=n(l);h!==null&&(!(h.expirationTime>X)||F&&!D());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var fe=ae(h.expirationTime<=X);X=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(l)&&i(l),y(X)}else i(l);h=n(l)}if(h!==null)var Ge=!0;else{var Ye=n(c);Ye!==null&&k(M,Ye.startTime-X),Ge=!1}return Ge}finally{h=null,d=Z,p=!1}}var T=!1,A=null,_=-1,R=5,P=-1;function D(){return!(t.unstable_now()-P<R)}function U(){if(A!==null){var F=t.unstable_now();P=F;var X=!0;try{X=A(!0,F)}finally{X?B():(T=!1,A=null)}}else T=!1}var B;if(typeof m=="function")B=function(){m(U)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,I=Y.port2;Y.port1.onmessage=U,B=function(){I.postMessage(null)}}else B=function(){v(U,0)};function H(F){A=F,T||(T=!0,B())}function k(F,X){_=v(function(){F(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(b))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Z=d;d=X;try{return F()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=d;d=F;try{return X()}finally{d=Z}},t.unstable_scheduleCallback=function(F,X,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,F){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Z+fe,F={id:u++,callback:X,priorityLevel:F,startTime:Z,expirationTime:fe,sortIndex:-1},Z>ae?(F.sortIndex=Z,e(c,F),n(l)===null&&F===n(c)&&(S?(f(_),_=-1):S=!0,k(M,Z-ae))):(F.sortIndex=fe,e(l,F),g||p||(g=!0,H(b))),F},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(F){var X=d;return function(){var Z=d;d=X;try{return F.apply(this,arguments)}finally{d=Z}}}})(ux);cx.exports=ux;var oE=cx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aE=ee,On=oE;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dx=new Set,Sa={};function ys(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(Sa[t]=e,t=0;t<e.length;t++)dx.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,lE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fg={},pg={};function cE(t){return Jd.call(pg,t)?!0:Jd.call(fg,t)?!1:lE.test(t)?pg[t]=!0:(fg[t]=!0,!1)}function uE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dE(t,e,n,i){if(e===null||typeof e>"u"||uE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var op=/[\-:]([a-z])/g;function ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(op,ap);Qt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(op,ap);Qt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(op,ap);Qt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function lp(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dE(e,n,r,i)&&(n=null),i||r===null?cE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var rr=aE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),hx=Symbol.for("react.provider"),fx=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),px=Symbol.for("react.offscreen"),mg=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=mg&&t[mg]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Du;function Qo(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Lu=!1;function Nu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function hE(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Vs:return"Portal";case eh:return"Profiler";case cp:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fx:return(t.displayName||"Context")+".Consumer";case hx:return(t._context.displayName||"Context")+".Provider";case up:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dp:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function fE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pE(t){var e=mx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=pE(t))}function gx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vx(t,e){e=e.checked,e!=null&&lp(t,"checked",e,!1)}function sh(t,e){vx(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Jo=Array.isArray;function so(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _g(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Jo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function _x(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,yx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mE=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){mE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function Sx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function Mx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gE=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(t,e){if(e){if(gE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=null;function hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,oo=null,ao=null;function yg(t){if(t=$a(t)){if(typeof hh!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=au(e),hh(t.stateNode,t.type,e))}}function Ex(t){oo?ao?ao.push(t):ao=[t]:oo=t}function Tx(){if(oo){var t=oo,e=ao;if(ao=oo=null,yg(t),e)for(t=0;t<e.length;t++)yg(e[t])}}function wx(t,e){return t(e)}function bx(){}var Iu=!1;function Ax(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return wx(t,e,n)}finally{Iu=!1,(oo!==null||ao!==null)&&(bx(),Tx())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=au(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var fh=!1;if(Zi)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){fh=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{fh=!1}function vE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var la=!1,yc=null,Sc=!1,ph=null,_E={onError:function(t){la=!0,yc=t}};function xE(t,e,n,i,r,s,o,a,l){la=!1,yc=null,vE.apply(_E,arguments)}function yE(t,e,n,i,r,s,o,a,l){if(xE.apply(this,arguments),la){if(la){var c=yc;la=!1,yc=null}else throw Error(ie(198));Sc||(Sc=!0,ph=c)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sg(t){if(Ss(t)!==t)throw Error(ie(188))}function SE(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sg(r),t;if(s===i)return Sg(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Rx(t){return t=SE(t),t!==null?Px(t):null}function Px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Px(t);if(e!==null)return e;t=t.sibling}return null}var Dx=On.unstable_scheduleCallback,Mg=On.unstable_cancelCallback,ME=On.unstable_shouldYield,EE=On.unstable_requestPaint,Nt=On.unstable_now,TE=On.unstable_getCurrentPriorityLevel,fp=On.unstable_ImmediatePriority,Lx=On.unstable_UserBlockingPriority,Mc=On.unstable_NormalPriority,wE=On.unstable_LowPriority,Nx=On.unstable_IdlePriority,iu=null,Ti=null;function bE(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:RE,AE=Math.log,CE=Math.LN2;function RE(t){return t>>>=0,t===0?32:31-(AE(t)/CE|0)|0}var ul=64,dl=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ea(a):(s&=o,s!==0&&(i=ea(s)))}else o=n&~r,o!==0?i=ea(o):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function PE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=PE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ix(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function LE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Ux(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fx,mp,Ox,kx,Bx,gh=!1,hl=[],wr=null,br=null,Ar=null,Ta=new Map,wa=new Map,xr=[],NE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eg(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$a(e),e!==null&&mp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function IE(t,e,n,i,r){switch(e){case"focusin":return wr=ko(wr,t,e,n,i,r),!0;case"dragenter":return br=ko(br,t,e,n,i,r),!0;case"mouseover":return Ar=ko(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,ko(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,ko(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function zx(t){var e=is(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=Cx(n),e!==null){t.blockedOn=e,Bx(t.priority,function(){Ox(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);dh=i,n.target.dispatchEvent(i),dh=null}else return e=$a(n),e!==null&&mp(e),t.blockedOn=n,!1;e.shift()}return!0}function Tg(t,e,n){Jl(t)&&n.delete(e)}function UE(){gh=!1,wr!==null&&Jl(wr)&&(wr=null),br!==null&&Jl(br)&&(br=null),Ar!==null&&Jl(Ar)&&(Ar=null),Ta.forEach(Tg),wa.forEach(Tg)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,UE)))}function ba(t){function e(r){return Bo(r,t)}if(0<hl.length){Bo(hl[0],t);for(var n=1;n<hl.length;n++){var i=hl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(wr!==null&&Bo(wr,t),br!==null&&Bo(br,t),Ar!==null&&Bo(Ar,t),Ta.forEach(e),wa.forEach(e),n=0;n<xr.length;n++)i=xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)zx(n),n.blockedOn===null&&xr.shift()}var lo=rr.ReactCurrentBatchConfig,Tc=!0;function FE(t,e,n,i){var r=it,s=lo.transition;lo.transition=null;try{it=1,gp(t,e,n,i)}finally{it=r,lo.transition=s}}function OE(t,e,n,i){var r=it,s=lo.transition;lo.transition=null;try{it=4,gp(t,e,n,i)}finally{it=r,lo.transition=s}}function gp(t,e,n,i){if(Tc){var r=vh(t,e,n,i);if(r===null)Wu(t,e,i,wc,n),Eg(t,i);else if(IE(r,t,e,n,i))i.stopPropagation();else if(Eg(t,i),e&4&&-1<NE.indexOf(t)){for(;r!==null;){var s=$a(r);if(s!==null&&Fx(s),s=vh(t,e,n,i),s===null&&Wu(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wu(t,e,i,null,n)}}var wc=null;function vh(t,e,n,i){if(wc=null,t=hp(i),t=is(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function Vx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TE()){case fp:return 1;case Lx:return 4;case Mc:case wE:return 16;case Nx:return 536870912;default:return 16}default:return 16}}var Mr=null,vp=null,ec=null;function Hx(){if(ec)return ec;var t,e=vp,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ec=r.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function wg(){return!1}function zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fl:wg,this.isPropagationStopped=wg,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_p=zn(Po),qa=Et({},Po,{view:0,detail:0}),kE=zn(qa),Fu,Ou,zo,ru=Et({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Fu=t.screenX-zo.screenX,Ou=t.screenY-zo.screenY):Ou=Fu=0,zo=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),bg=zn(ru),BE=Et({},ru,{dataTransfer:0}),zE=zn(BE),VE=Et({},qa,{relatedTarget:0}),ku=zn(VE),HE=Et({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),GE=zn(HE),jE=Et({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WE=zn(jE),XE=Et({},Po,{data:0}),Ag=zn(XE),YE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$E[t])?!!e[t]:!1}function xp(){return KE}var ZE=Et({},qa,{key:function(t){if(t.key){var e=YE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xp,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QE=zn(ZE),JE=Et({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=zn(JE),eT=Et({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xp}),tT=zn(eT),nT=Et({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),iT=zn(nT),rT=Et({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sT=zn(rT),oT=[9,13,27,32],yp=Zi&&"CompositionEvent"in window,ca=null;Zi&&"documentMode"in document&&(ca=document.documentMode);var aT=Zi&&"TextEvent"in window&&!ca,Gx=Zi&&(!yp||ca&&8<ca&&11>=ca),Rg=" ",Pg=!1;function jx(t,e){switch(t){case"keyup":return oT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function lT(t,e){switch(t){case"compositionend":return Wx(e);case"keypress":return e.which!==32?null:(Pg=!0,Rg);case"textInput":return t=e.data,t===Rg&&Pg?null:t;default:return null}}function cT(t,e){if(Gs)return t==="compositionend"||!yp&&jx(t,e)?(t=Hx(),ec=vp=Mr=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gx&&e.locale!=="ko"?null:e.data;default:return null}}var uT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uT[t.type]:e==="textarea"}function Xx(t,e,n,i){Ex(i),e=bc(e,"onChange"),0<e.length&&(n=new _p("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Aa=null;function dT(t){iy(t,0)}function su(t){var e=Xs(t);if(gx(e))return t}function hT(t,e){if(t==="change")return e}var Yx=!1;if(Zi){var Bu;if(Zi){var zu="oninput"in document;if(!zu){var Lg=document.createElement("div");Lg.setAttribute("oninput","return;"),zu=typeof Lg.oninput=="function"}Bu=zu}else Bu=!1;Yx=Bu&&(!document.documentMode||9<document.documentMode)}function Ng(){ua&&(ua.detachEvent("onpropertychange",qx),Aa=ua=null)}function qx(t){if(t.propertyName==="value"&&su(Aa)){var e=[];Xx(e,Aa,t,hp(t)),Ax(dT,e)}}function fT(t,e,n){t==="focusin"?(Ng(),ua=e,Aa=n,ua.attachEvent("onpropertychange",qx)):t==="focusout"&&Ng()}function pT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(Aa)}function mT(t,e){if(t==="click")return su(e)}function gT(t,e){if(t==="input"||t==="change")return su(e)}function vT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:vT;function Ca(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Jd.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function Ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ug(t,e){var n=Ig(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ig(n)}}function $x(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$x(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kx(){for(var t=window,e=xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xc(t.document)}return e}function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _T(t){var e=Kx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$x(n.ownerDocument.documentElement,n)){if(i!==null&&Sp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ug(n,s);var o=Ug(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xT=Zi&&"documentMode"in document&&11>=document.documentMode,js=null,_h=null,da=null,xh=!1;function Fg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||js==null||js!==xc(i)||(i=js,"selectionStart"in i&&Sp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ca(da,i)||(da=i,i=bc(_h,"onSelect"),0<i.length&&(e=new _p("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=js)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Vu={},Zx={};Zi&&(Zx=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function ou(t){if(Vu[t])return Vu[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zx)return Vu[t]=e[n];return t}var Qx=ou("animationend"),Jx=ou("animationiteration"),ey=ou("animationstart"),ty=ou("transitionend"),ny=new Map,Og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){ny.set(t,e),ys(e,[t])}for(var Hu=0;Hu<Og.length;Hu++){var Gu=Og[Hu],yT=Gu.toLowerCase(),ST=Gu[0].toUpperCase()+Gu.slice(1);zr(yT,"on"+ST)}zr(Qx,"onAnimationEnd");zr(Jx,"onAnimationIteration");zr(ey,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(ty,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function kg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yE(i,e,void 0,t),t.currentTarget=null}function iy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kg(r,a,c),s=l}}}if(Sc)throw t=ph,Sc=!1,ph=null,t}function pt(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var i=t+"__bubble";n.has(i)||(ry(e,t,2,!1),n.add(i))}function ju(t,e,n){var i=0;e&&(i|=4),ry(n,t,i,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[ml]){t[ml]=!0,dx.forEach(function(n){n!=="selectionchange"&&(MT.has(n)||ju(n,!1,t),ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,ju("selectionchange",!1,e))}}function ry(t,e,n,i){switch(Vx(e)){case 1:var r=FE;break;case 4:r=OE;break;default:r=gp}n=r.bind(null,e,n,t),r=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ax(function(){var c=s,u=hp(n),h=[];e:{var d=ny.get(t);if(d!==void 0){var p=_p,g=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":p=QE;break;case"focusin":g="focus",p=ku;break;case"focusout":g="blur",p=ku;break;case"beforeblur":case"afterblur":p=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=tT;break;case Qx:case Jx:case ey:p=GE;break;case ty:p=iT;break;case"scroll":p=kE;break;case"wheel":p=sT;break;case"copy":case"cut":case"paste":p=WE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Cg}var S=(e&4)!==0,v=!S&&t==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var m=c,y;m!==null;){y=m;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,f!==null&&(M=Ea(m,f),M!=null&&S.push(Pa(m,M,y)))),v)break;m=m.return}0<S.length&&(d=new p(d,g,null,n,u),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==dh&&(g=n.relatedTarget||n.fromElement)&&(is(g)||g[Qi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?is(g):null,g!==null&&(v=Ss(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(S=bg,M="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=Cg,M="onPointerLeave",f="onPointerEnter",m="pointer"),v=p==null?d:Xs(p),y=g==null?d:Xs(g),d=new S(M,m+"leave",p,n,u),d.target=v,d.relatedTarget=y,M=null,is(u)===c&&(S=new S(f,m+"enter",g,n,u),S.target=y,S.relatedTarget=v,M=S),v=M,p&&g)t:{for(S=p,f=g,m=0,y=S;y;y=ws(y))m++;for(y=0,M=f;M;M=ws(M))y++;for(;0<m-y;)S=ws(S),m--;for(;0<y-m;)f=ws(f),y--;for(;m--;){if(S===f||f!==null&&S===f.alternate)break t;S=ws(S),f=ws(f)}S=null}else S=null;p!==null&&Bg(h,d,p,S,!1),g!==null&&v!==null&&Bg(h,v,g,S,!0)}}e:{if(d=c?Xs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=hT;else if(Dg(d))if(Yx)b=gT;else{b=pT;var T=fT}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=mT);if(b&&(b=b(t,c))){Xx(h,b,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&oh(d,"number",d.value)}switch(T=c?Xs(c):window,t){case"focusin":(Dg(T)||T.contentEditable==="true")&&(js=T,_h=c,da=null);break;case"focusout":da=_h=js=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,Fg(h,n,u);break;case"selectionchange":if(xT)break;case"keydown":case"keyup":Fg(h,n,u)}var A;if(yp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Gs?jx(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Gx&&n.locale!=="ko"&&(Gs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Gs&&(A=Hx()):(Mr=u,vp="value"in Mr?Mr.value:Mr.textContent,Gs=!0)),T=bc(c,_),0<T.length&&(_=new Ag(_,t,null,n,u),h.push({event:_,listeners:T}),A?_.data=A:(A=Wx(n),A!==null&&(_.data=A)))),(A=aT?lT(t,n):cT(t,n))&&(c=bc(c,"onBeforeInput"),0<c.length&&(u=new Ag("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}iy(h,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(Pa(t,s,r)),s=Ea(t,e),s!=null&&i.push(Pa(t,s,r))),t=t.return}return i}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ea(n,s),l!=null&&o.unshift(Pa(n,l,a))):r||(l=Ea(n,s),l!=null&&o.push(Pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ET=/\r\n?/g,TT=/\u0000|\uFFFD/g;function zg(t){return(typeof t=="string"?t:""+t).replace(ET,`
`).replace(TT,"")}function gl(t,e,n){if(e=zg(e),zg(t)!==e&&n)throw Error(ie(425))}function Ac(){}var yh=null,Sh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,wT=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,bT=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(AT)}:Eh;function AT(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Si="__reactFiber$"+Do,Da="__reactProps$"+Do,Qi="__reactContainer$"+Do,Th="__reactEvents$"+Do,CT="__reactListeners$"+Do,RT="__reactHandles$"+Do;function is(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hg(t);t!==null;){if(n=t[Si])return n;t=Hg(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[Si]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function au(t){return t[Da]||null}var wh=[],Ys=-1;function Vr(t){return{current:t}}function mt(t){0>Ys||(t.current=wh[Ys],wh[Ys]=null,Ys--)}function ht(t,e){Ys++,wh[Ys]=t.current,t.current=e}var Ir={},un=Vr(Ir),En=Vr(!1),hs=Ir;function go(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(t){return t=t.childContextTypes,t!=null}function Cc(){mt(En),mt(un)}function Gg(t,e,n){if(un.current!==Ir)throw Error(ie(168));ht(un,e),ht(En,n)}function sy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,fE(t)||"Unknown",r));return Et({},n,i)}function Rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,hs=un.current,ht(un,t),ht(En,En.current),!0}function jg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=sy(t,e,hs),i.__reactInternalMemoizedMergedChildContext=t,mt(En),mt(un),ht(un,t)):mt(En),ht(En,n)}var Vi=null,lu=!1,Yu=!1;function oy(t){Vi===null?Vi=[t]:Vi.push(t)}function PT(t){lu=!0,oy(t)}function Hr(){if(!Yu&&Vi!==null){Yu=!0;var t=0,e=it;try{var n=Vi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Vi=null,lu=!1}catch(r){throw Vi!==null&&(Vi=Vi.slice(t+1)),Dx(fp,Hr),r}finally{it=e,Yu=!1}}return null}var qs=[],$s=0,Pc=null,Dc=0,Wn=[],Xn=0,fs=null,Gi=1,ji="";function Zr(t,e){qs[$s++]=Dc,qs[$s++]=Pc,Pc=t,Dc=e}function ay(t,e,n){Wn[Xn++]=Gi,Wn[Xn++]=ji,Wn[Xn++]=fs,fs=t;var i=Gi;t=ji;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-li(e)+r|n<<r|i,ji=s+t}else Gi=1<<s|n<<r|i,ji=t}function Mp(t){t.return!==null&&(Zr(t,1),ay(t,1,0))}function Ep(t){for(;t===Pc;)Pc=qs[--$s],qs[$s]=null,Dc=qs[--$s],qs[$s]=null;for(;t===fs;)fs=Wn[--Xn],Wn[Xn]=null,ji=Wn[--Xn],Wn[Xn]=null,Gi=Wn[--Xn],Wn[Xn]=null}var In=null,Nn=null,vt=!1,si=null;function ly(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Nn=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:Gi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Nn=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(vt){var e=Nn;if(e){var n=e;if(!Wg(t,e)){if(bh(t))throw Error(ie(418));e=Cr(n.nextSibling);var i=In;e&&Wg(t,e)?ly(i,n):(t.flags=t.flags&-4097|2,vt=!1,In=t)}}else{if(bh(t))throw Error(ie(418));t.flags=t.flags&-4097|2,vt=!1,In=t}}}function Xg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function vl(t){if(t!==In)return!1;if(!vt)return Xg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=Nn)){if(bh(t))throw cy(),Error(ie(418));for(;e;)ly(t,e),e=Cr(e.nextSibling)}if(Xg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=In?Cr(t.stateNode.nextSibling):null;return!0}function cy(){for(var t=Nn;t;)t=Cr(t.nextSibling)}function vo(){Nn=In=null,vt=!1}function Tp(t){si===null?si=[t]:si.push(t)}var DT=rr.ReactCurrentBatchConfig;function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yg(t){var e=t._init;return e(t._payload)}function uy(t){function e(f,m){if(t){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Lr(f,m),f.index=0,f.sibling=null,f}function s(f,m,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,y,M){return m===null||m.tag!==6?(m=ed(y,f.mode,M),m.return=f,m):(m=r(m,y),m.return=f,m)}function l(f,m,y,M){var b=y.type;return b===Hs?u(f,m,y.props.children,M,y.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===gr&&Yg(b)===m.type)?(M=r(m,y.props),M.ref=Vo(f,m,y),M.return=f,M):(M=lc(y.type,y.key,y.props,null,f.mode,M),M.ref=Vo(f,m,y),M.return=f,M)}function c(f,m,y,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=td(y,f.mode,M),m.return=f,m):(m=r(m,y.children||[]),m.return=f,m)}function u(f,m,y,M,b){return m===null||m.tag!==7?(m=us(y,f.mode,M,b),m.return=f,m):(m=r(m,y),m.return=f,m)}function h(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ed(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case al:return y=lc(m.type,m.key,m.props,null,f.mode,y),y.ref=Vo(f,null,m),y.return=f,y;case Vs:return m=td(m,f.mode,y),m.return=f,m;case gr:var M=m._init;return h(f,M(m._payload),y)}if(Jo(m)||Fo(m))return m=us(m,f.mode,y,null),m.return=f,m;_l(f,m)}return null}function d(f,m,y,M){var b=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(f,m,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return y.key===b?l(f,m,y,M):null;case Vs:return y.key===b?c(f,m,y,M):null;case gr:return b=y._init,d(f,m,b(y._payload),M)}if(Jo(y)||Fo(y))return b!==null?null:u(f,m,y,M,null);_l(f,y)}return null}function p(f,m,y,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(y)||null,a(m,f,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case al:return f=f.get(M.key===null?y:M.key)||null,l(m,f,M,b);case Vs:return f=f.get(M.key===null?y:M.key)||null,c(m,f,M,b);case gr:var T=M._init;return p(f,m,y,T(M._payload),b)}if(Jo(M)||Fo(M))return f=f.get(y)||null,u(m,f,M,b,null);_l(m,M)}return null}function g(f,m,y,M){for(var b=null,T=null,A=m,_=m=0,R=null;A!==null&&_<y.length;_++){A.index>_?(R=A,A=null):R=A.sibling;var P=d(f,A,y[_],M);if(P===null){A===null&&(A=R);break}t&&A&&P.alternate===null&&e(f,A),m=s(P,m,_),T===null?b=P:T.sibling=P,T=P,A=R}if(_===y.length)return n(f,A),vt&&Zr(f,_),b;if(A===null){for(;_<y.length;_++)A=h(f,y[_],M),A!==null&&(m=s(A,m,_),T===null?b=A:T.sibling=A,T=A);return vt&&Zr(f,_),b}for(A=i(f,A);_<y.length;_++)R=p(A,f,_,y[_],M),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?_:R.key),m=s(R,m,_),T===null?b=R:T.sibling=R,T=R);return t&&A.forEach(function(D){return e(f,D)}),vt&&Zr(f,_),b}function S(f,m,y,M){var b=Fo(y);if(typeof b!="function")throw Error(ie(150));if(y=b.call(y),y==null)throw Error(ie(151));for(var T=b=null,A=m,_=m=0,R=null,P=y.next();A!==null&&!P.done;_++,P=y.next()){A.index>_?(R=A,A=null):R=A.sibling;var D=d(f,A,P.value,M);if(D===null){A===null&&(A=R);break}t&&A&&D.alternate===null&&e(f,A),m=s(D,m,_),T===null?b=D:T.sibling=D,T=D,A=R}if(P.done)return n(f,A),vt&&Zr(f,_),b;if(A===null){for(;!P.done;_++,P=y.next())P=h(f,P.value,M),P!==null&&(m=s(P,m,_),T===null?b=P:T.sibling=P,T=P);return vt&&Zr(f,_),b}for(A=i(f,A);!P.done;_++,P=y.next())P=p(A,f,_,P.value,M),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?_:P.key),m=s(P,m,_),T===null?b=P:T.sibling=P,T=P);return t&&A.forEach(function(U){return e(f,U)}),vt&&Zr(f,_),b}function v(f,m,y,M){if(typeof y=="object"&&y!==null&&y.type===Hs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case al:e:{for(var b=y.key,T=m;T!==null;){if(T.key===b){if(b=y.type,b===Hs){if(T.tag===7){n(f,T.sibling),m=r(T,y.props.children),m.return=f,f=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===gr&&Yg(b)===T.type){n(f,T.sibling),m=r(T,y.props),m.ref=Vo(f,T,y),m.return=f,f=m;break e}n(f,T);break}else e(f,T);T=T.sibling}y.type===Hs?(m=us(y.props.children,f.mode,M,y.key),m.return=f,f=m):(M=lc(y.type,y.key,y.props,null,f.mode,M),M.ref=Vo(f,m,y),M.return=f,f=M)}return o(f);case Vs:e:{for(T=y.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),m=r(m,y.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=td(y,f.mode,M),m.return=f,f=m}return o(f);case gr:return T=y._init,v(f,m,T(y._payload),M)}if(Jo(y))return g(f,m,y,M);if(Fo(y))return S(f,m,y,M);_l(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,y),m.return=f,f=m):(n(f,m),m=ed(y,f.mode,M),m.return=f,f=m),o(f)):n(f,m)}return v}var _o=uy(!0),dy=uy(!1),Lc=Vr(null),Nc=null,Ks=null,wp=null;function bp(){wp=Ks=Nc=null}function Ap(t){var e=Lc.current;mt(Lc),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function co(t,e){Nc=t,wp=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(wp!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Nc===null)throw Error(ie(308));Ks=t,Nc.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var rs=null;function Cp(t){rs===null?rs=[t]:rs.push(t)}function hy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function Rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Cp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pp(t,n)}}function qg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ic(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,S=a;switch(d=e,p=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Et({},h,d);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ms|=o,t.lanes=o,t.memoizedState=h}}function $g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ka={},wi=Vr(Ka),La=Vr(Ka),Na=Vr(Ka);function ss(t){if(t===Ka)throw Error(ie(174));return t}function Pp(t,e){switch(ht(Na,e),ht(La,t),ht(wi,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}mt(wi),ht(wi,e)}function xo(){mt(wi),mt(La),mt(Na)}function py(t){ss(Na.current);var e=ss(wi.current),n=lh(e,t.type);e!==n&&(ht(La,t),ht(wi,n))}function Dp(t){La.current===t&&(mt(wi),mt(La))}var yt=Vr(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function Lp(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var ic=rr.ReactCurrentDispatcher,$u=rr.ReactCurrentBatchConfig,ps=0,Mt=null,zt=null,Wt=null,Fc=!1,ha=!1,Ia=0,LT=0;function en(){throw Error(ie(321))}function Np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Ip(t,e,n,i,r,s){if(ps=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?FT:OT,t=n(i,r),ha){s=0;do{if(ha=!1,Ia=0,25<=s)throw Error(ie(301));s+=1,Wt=zt=null,e.updateQueue=null,ic.current=kT,t=n(i,r)}while(ha)}if(ic.current=Oc,e=zt!==null&&zt.next!==null,ps=0,Wt=zt=Mt=null,Fc=!1,e)throw Error(ie(300));return t}function Up(){var t=Ia!==0;return Ia=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Zn(){if(zt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Wt===null?Mt.memoizedState:Wt.next;if(e!==null)Wt=e,zt=t;else{if(t===null)throw Error(ie(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Ua(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=Zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ps&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=u,ms|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function my(){}function gy(t,e){var n=Mt,i=Zn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Fp(xy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Fa(9,_y.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ie(349));ps&30||vy(n,e,r)}return r}function vy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _y(t,e,n,i){e.value=n,e.getSnapshot=i,yy(e)&&Sy(t)}function xy(t,e,n){return n(function(){yy(e)&&Sy(t)})}function yy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function Sy(t){var e=Ji(t,1);e!==null&&ci(e,t,1,-1)}function Kg(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=UT.bind(null,Mt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function My(){return Zn().memoizedState}function rc(t,e,n,i){var r=xi();Mt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function cu(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&Np(i,o.deps)){r.memoizedState=Fa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function Zg(t,e){return rc(8390656,8,t,e)}function Fp(t,e){return cu(2048,8,t,e)}function Ey(t,e){return cu(4,2,t,e)}function Ty(t,e){return cu(4,4,t,e)}function wy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function by(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,wy.bind(null,e,t),n)}function Op(){}function Ay(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Np(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Cy(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Np(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ry(t,e,n){return ps&21?(hi(n,e)||(n=Ix(),Mt.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function NT(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=$u.transition;$u.transition={};try{t(!1),e()}finally{it=n,$u.transition=i}}function Py(){return Zn().memoizedState}function IT(t,e,n){var i=Dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Dy(t))Ly(e,n);else if(n=hy(t,e,n,i),n!==null){var r=pn();ci(n,t,i,r),Ny(n,e,i)}}function UT(t,e,n){var i=Dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dy(t))Ly(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,Cp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hy(t,e,r,i),n!==null&&(r=pn(),ci(n,t,i,r),Ny(n,e,i))}}function Dy(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Ly(t,e){ha=Fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ny(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pp(t,n)}}var Oc={readContext:Kn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},FT={readContext:Kn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:Zg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,wy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=IT.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Kg,useDebugValue:Op,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Kg(!1),e=t[0];return t=NT.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=xi();if(vt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Xt===null)throw Error(ie(349));ps&30||vy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zg(xy.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,_y.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Xt.identifierPrefix;if(vt){var n=ji,i=Gi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OT={readContext:Kn,useCallback:Ay,useContext:Kn,useEffect:Fp,useImperativeHandle:by,useInsertionEffect:Ey,useLayoutEffect:Ty,useMemo:Cy,useReducer:Ku,useRef:My,useState:function(){return Ku(Ua)},useDebugValue:Op,useDeferredValue:function(t){var e=Zn();return Ry(e,zt.memoizedState,t)},useTransition:function(){var t=Ku(Ua)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1},kT={readContext:Kn,useCallback:Ay,useContext:Kn,useEffect:Fp,useImperativeHandle:by,useInsertionEffect:Ey,useLayoutEffect:Ty,useMemo:Cy,useReducer:Zu,useRef:My,useState:function(){return Zu(Ua)},useDebugValue:Op,useDeferredValue:function(t){var e=Zn();return zt===null?e.memoizedState=t:Ry(e,zt.memoizedState,t)},useTransition:function(){var t=Zu(Ua)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Dr(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(ci(e,t,r,i),nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Dr(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(ci(e,t,r,i),nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Dr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(ci(e,t,i,n),nc(e,t,i))}};function Qg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function Iy(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=Tn(e)?hs:un.current,i=e.contextTypes,s=(i=i!=null)?go(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function Ph(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=Tn(e)?hs:un.current,r.context=go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uu.enqueueReplaceState(r,r.state,null),Ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e){try{var n="",i=e;do n+=hE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BT=typeof WeakMap=="function"?WeakMap:Map;function Uy(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bc||(Bc=!0,Vh=i),Dh(t,e)},n}function Fy(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function e0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new BT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=JT.bind(null,t,e,n),e.then(t,t))}function t0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function n0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var zT=rr.ReactCurrentOwner,Mn=!1;function hn(t,e,n,i){e.child=t===null?dy(e,null,n,i):_o(e,t.child,n,i)}function i0(t,e,n,i,r){n=n.render;var s=e.ref;return co(e,r),i=Ip(t,e,n,i,s,r),n=Up(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(vt&&n&&Mp(e),e.flags|=1,hn(t,e,i,r),e.child)}function r0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Oy(t,e,s,i,r)):(t=lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(o,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Oy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,er(t,e,r)}return Lh(t,e,n,i,r)}function ky(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Qs,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Qs,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Qs,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Qs,Dn),Dn|=i;return hn(t,e,r,n),e.child}function By(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,i,r){var s=Tn(n)?hs:un.current;return s=go(e,s),co(e,r),n=Ip(t,e,n,i,s,r),i=Up(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(vt&&i&&Mp(e),e.flags|=1,hn(t,e,n,r),e.child)}function s0(t,e,n,i,r){if(Tn(n)){var s=!0;Rc(e)}else s=!1;if(co(e,r),e.stateNode===null)sc(t,e),Iy(e,n,i),Ph(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=Tn(n)?hs:un.current,c=go(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Jg(e,o,i,c),vr=!1;var d=e.memoizedState;o.state=d,Ic(e,i,o,r),l=e.memoizedState,a!==i||d!==l||En.current||vr?(typeof u=="function"&&(Rh(e,n,u,i),l=e.memoizedState),(a=vr||Qg(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,fy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=Tn(n)?hs:un.current,l=go(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Jg(e,o,i,l),vr=!1,d=e.memoizedState,o.state=d,Ic(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||En.current||vr?(typeof p=="function"&&(Rh(e,n,p,i),g=e.memoizedState),(c=vr||Qg(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Nh(t,e,n,i,s,r)}function Nh(t,e,n,i,r,s){By(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&jg(e,n,!1),er(t,e,s);i=e.stateNode,zT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_o(e,t.child,null,s),e.child=_o(e,null,a,s)):hn(t,e,a,s),e.memoizedState=i.state,r&&jg(e,n,!0),e.child}function zy(t){var e=t.stateNode;e.pendingContext?Gg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gg(t,e.context,!1),Pp(t,e.containerInfo)}function o0(t,e,n,i,r){return vo(),Tp(r),e.flags|=256,hn(t,e,n,i),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vy(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(yt,r&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fu(o,i,0,null),t=us(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=Ih,t):kp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return VT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kp(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xl(t,e,n,i){return i!==null&&Tp(i),_o(e,t.child,null,n),t=kp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Qu(Error(ie(422))),xl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fu({mode:"visible",children:i.children},r,0,null),s=us(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_o(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return xl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Qu(s,i,void 0),xl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Mn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),ci(i,t,r,-1))}return jp(),i=Qu(Error(ie(421))),xl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ew.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Nn=Cr(r.nextSibling),In=e,vt=!0,si=null,t!==null&&(Wn[Xn++]=Gi,Wn[Xn++]=ji,Wn[Xn++]=fs,Gi=t.id,ji=t.overflow,fs=e),e=kp(e,i.children),e.flags|=4096,e)}function a0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ch(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Hy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a0(t,n,e);else if(t.tag===19)a0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HT(t,e,n){switch(e.tag){case 3:zy(e),vo();break;case 5:py(e);break;case 1:Tn(e.type)&&Rc(e);break;case 4:Pp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?Vy(t,e,n):(ht(yt,yt.current&1),t=er(t,e,n),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Hy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,ky(t,e,n)}return er(t,e,n)}var Gy,Fh,jy,Wy;Gy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fh=function(){};jy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ss(wi.current);var s=null;switch(n){case"input":r=rh(t,r),i=rh(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=ah(t,r),i=ah(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ac)}ch(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Wy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ho(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function GT(t,e,n){var i=e.pendingProps;switch(Ep(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Tn(e.type)&&Cc(),tn(e),null;case 3:return i=e.stateNode,xo(),mt(En),mt(un),Lp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(jh(si),si=null))),Fh(t,e),tn(e),null;case 5:Dp(e);var r=ss(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)jy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return tn(e),null}if(t=ss(wi.current),vl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)pt(ta[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":gg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":_g(i,s),pt("invalid",i)}ch(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(i.textContent,a,t),r=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":ll(i),vg(i,s,!0);break;case"textarea":ll(i),xg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[Da]=i,Gy(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)pt(ta[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":gg(t,i),r=rh(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":_g(t,i),r=ah(t,i),pt("invalid",t);break;default:r=i}ch(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&lp(t,s,l,o))}switch(n){case"input":ll(t),vg(t,i,!1);break;case"textarea":ll(t),xg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?so(t,!!i.multiple,s,!1):i.defaultValue!=null&&so(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)Wy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ss(Na.current),ss(wi.current),vl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:gl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return tn(e),null;case 13:if(mt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Nn!==null&&e.mode&1&&!(e.flags&128))cy(),vo(),e.flags|=98560,s=!1;else if(s=vl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Si]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else si!==null&&(jh(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Vt===0&&(Vt=3):jp())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return xo(),Fh(t,e),t===null&&Ra(e.stateNode.containerInfo),tn(e),null;case 10:return Ap(e.type._context),tn(e),null;case 17:return Tn(e.type)&&Cc(),tn(e),null;case 19:if(mt(yt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ho(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,Ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>So&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return tn(e),null}else 2*Nt()-s.renderingStartTime>So&&n!==1073741824&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=yt.current,ht(yt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return Gp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function jT(t,e){switch(Ep(e),e.tag){case 1:return Tn(e.type)&&Cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),mt(En),mt(un),Lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dp(e),null;case 13:if(mt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(yt),null;case 4:return xo(),null;case 10:return Ap(e.type._context),null;case 22:case 23:return Gp(),null;case 24:return null;default:return null}}var yl=!1,on=!1,WT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Oh(t,e,n){try{n()}catch(i){At(t,e,i)}}var l0=!1;function XT(t,e){if(yh=Tc,t=Kx(),Sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},Tc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,v=g.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:ii(e.type,S),v);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){At(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=l0,l0=!1,g}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Oh(e,n,s)}r=r.next}while(r!==i)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xy(t){var e=t.alternate;e!==null&&(t.alternate=null,Xy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Da],delete e[Th],delete e[CT],delete e[RT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yy(t){return t.tag===5||t.tag===3||t.tag===4}function c0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function zh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}var Yt=null,ri=!1;function lr(t,e,n){for(n=n.child;n!==null;)qy(t,e,n),n=n.sibling}function qy(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:on||Zs(n,e);case 6:var i=Yt,r=ri;Yt=null,lr(t,e,n),Yt=i,ri=r,Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),ba(t)):Xu(Yt,n.stateNode));break;case 4:i=Yt,r=ri,Yt=n.stateNode.containerInfo,ri=!0,lr(t,e,n),Yt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Oh(n,e,o),r=r.next}while(r!==i)}lr(t,e,n);break;case 1:if(!on&&(Zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,lr(t,e,n),on=i):lr(t,e,n);break;default:lr(t,e,n)}}function u0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WT),e.forEach(function(i){var r=tw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,ri=!1;break e;case 3:Yt=a.stateNode.containerInfo,ri=!0;break e;case 4:Yt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(Yt===null)throw Error(ie(160));qy(s,o,r),Yt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$y(e,t),e=e.sibling}function $y(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),gi(t),i&4){try{fa(3,t,t.return),du(3,t)}catch(S){At(t,t.return,S)}try{fa(5,t,t.return)}catch(S){At(t,t.return,S)}}break;case 1:Qn(e,t),gi(t),i&512&&n!==null&&Zs(n,n.return);break;case 5:if(Qn(e,t),gi(t),i&512&&n!==null&&Zs(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(S){At(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vx(r,s),uh(a,o);var c=uh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Mx(r,h):u==="dangerouslySetInnerHTML"?yx(r,h):u==="children"?Ma(r,h):lp(r,u,h,c)}switch(a){case"input":sh(r,s);break;case"textarea":_x(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?so(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?so(r,!!s.multiple,s.defaultValue,!0):so(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(S){At(t,t.return,S)}}break;case 6:if(Qn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){At(t,t.return,S)}}break;case 3:if(Qn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(S){At(t,t.return,S)}break;case 4:Qn(e,t),gi(t);break;case 13:Qn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vp=Nt())),i&4&&u0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,Qn(e,t),on=c):Qn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(h=Ee=u;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:fa(4,d,d.return);break;case 1:Zs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){At(i,n,S)}}break;case 5:Zs(d,d.return);break;case 22:if(d.memoizedState!==null){h0(h);continue}}p!==null?(p.return=d,Ee=p):h0(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sx("display",o))}catch(S){At(t,t.return,S)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){At(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qn(e,t),gi(t),i&4&&u0(t);break;case 21:break;default:Qn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yy(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=c0(t);zh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=c0(t);Bh(t,a,o);break;default:throw Error(ie(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YT(t,e,n){Ee=t,Ky(t)}function Ky(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=yl;var c=on;if(yl=o,(on=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?f0(r):l!==null?(l.return=o,Ee=l):f0(r);for(;s!==null;)Ee=s,Ky(s),s=s.sibling;Ee=r,yl=a,on=c}d0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):d0(t)}}function d0(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||du(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$g(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ba(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}on||e.flags&512&&kh(e)}catch(d){At(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function h0(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function f0(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{kh(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{kh(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var qT=Math.ceil,kc=rr.ReactCurrentDispatcher,Bp=rr.ReactCurrentOwner,$n=rr.ReactCurrentBatchConfig,Je=0,Xt=null,Ft=null,Zt=0,Dn=0,Qs=Vr(0),Vt=0,Oa=null,ms=0,hu=0,zp=0,pa=null,Sn=null,Vp=0,So=1/0,zi=null,Bc=!1,Vh=null,Pr=null,Sl=!1,Er=null,zc=0,ma=0,Hh=null,oc=-1,ac=0;function pn(){return Je&6?Nt():oc!==-1?oc:oc=Nt()}function Dr(t){return t.mode&1?Je&2&&Zt!==0?Zt&-Zt:DT.transition!==null?(ac===0&&(ac=Ix()),ac):(t=it,t!==0||(t=window.event,t=t===void 0?16:Vx(t.type)),t):1}function ci(t,e,n,i){if(50<ma)throw ma=0,Hh=null,Error(ie(185));Ya(t,n,i),(!(Je&2)||t!==Xt)&&(t===Xt&&(!(Je&2)&&(hu|=n),Vt===4&&yr(t,Zt)),wn(t,i),n===1&&Je===0&&!(e.mode&1)&&(So=Nt()+500,lu&&Hr()))}function wn(t,e){var n=t.callbackNode;DE(t,e);var i=Ec(t,t===Xt?Zt:0);if(i===0)n!==null&&Mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mg(n),e===1)t.tag===0?PT(p0.bind(null,t)):oy(p0.bind(null,t)),bT(function(){!(Je&6)&&Hr()}),n=null;else{switch(Ux(i)){case 1:n=fp;break;case 4:n=Lx;break;case 16:n=Mc;break;case 536870912:n=Nx;break;default:n=Mc}n=rS(n,Zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zy(t,e){if(oc=-1,ac=0,Je&6)throw Error(ie(327));var n=t.callbackNode;if(uo()&&t.callbackNode!==n)return null;var i=Ec(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vc(t,i);else{e=i;var r=Je;Je|=2;var s=Jy();(Xt!==t||Zt!==e)&&(zi=null,So=Nt()+500,cs(t,e));do try{ZT();break}catch(a){Qy(t,a)}while(!0);bp(),kc.current=s,Je=r,Ft!==null?e=0:(Xt=null,Zt=0,e=Vt)}if(e!==0){if(e===2&&(r=mh(t),r!==0&&(i=r,e=Gh(t,r))),e===1)throw n=Oa,cs(t,0),yr(t,i),wn(t,Nt()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!$T(r)&&(e=Vc(t,i),e===2&&(s=mh(t),s!==0&&(i=s,e=Gh(t,s))),e===1))throw n=Oa,cs(t,0),yr(t,i),wn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Qr(t,Sn,zi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=Vp+500-Nt(),10<e)){if(Ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Eh(Qr.bind(null,t,Sn,zi),e);break}Qr(t,Sn,zi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qT(i/1960))-i,10<i){t.timeoutHandle=Eh(Qr.bind(null,t,Sn,zi),i);break}Qr(t,Sn,zi);break;case 5:Qr(t,Sn,zi);break;default:throw Error(ie(329))}}}return wn(t,Nt()),t.callbackNode===n?Zy.bind(null,t):null}function Gh(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(cs(t,e).flags|=256),t=Vc(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&jh(e)),t}function jh(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function $T(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~zp,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function p0(t){if(Je&6)throw Error(ie(327));uo();var e=Ec(t,0);if(!(e&1))return wn(t,Nt()),null;var n=Vc(t,e);if(t.tag!==0&&n===2){var i=mh(t);i!==0&&(e=i,n=Gh(t,i))}if(n===1)throw n=Oa,cs(t,0),yr(t,e),wn(t,Nt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,Sn,zi),wn(t,Nt()),null}function Hp(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(So=Nt()+500,lu&&Hr())}}function gs(t){Er!==null&&Er.tag===0&&!(Je&6)&&uo();var e=Je;Je|=1;var n=$n.transition,i=it;try{if($n.transition=null,it=1,t)return t()}finally{it=i,$n.transition=n,Je=e,!(Je&6)&&Hr()}}function Gp(){Dn=Qs.current,mt(Qs)}function cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wT(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(Ep(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cc();break;case 3:xo(),mt(En),mt(un),Lp();break;case 5:Dp(i);break;case 4:xo();break;case 13:mt(yt);break;case 19:mt(yt);break;case 10:Ap(i.type._context);break;case 22:case 23:Gp()}n=n.return}if(Xt=t,Ft=t=Lr(t.current,null),Zt=Dn=e,Vt=0,Oa=null,zp=hu=ms=0,Sn=pa=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rs=null}return t}function Qy(t,e){do{var n=Ft;try{if(bp(),ic.current=Oc,Fc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fc=!1}if(ps=0,Wt=zt=Mt=null,ha=!1,Ia=0,Bp.current=null,n===null||n.return===null){Vt=1,Oa=e,Ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=t0(o);if(p!==null){p.flags&=-257,n0(p,o,a,s,e),p.mode&1&&e0(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if(!(e&1)){e0(s,c,e),jp();break e}l=Error(ie(426))}}else if(vt&&a.mode&1){var v=t0(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),n0(v,o,a,s,e),Tp(yo(l,a));break e}}s=l=yo(l,a),Vt!==4&&(Vt=2),pa===null?pa=[s]:pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Uy(s,l,e);qg(s,f);break e;case 1:a=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pr===null||!Pr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Fy(s,a,e);qg(s,M);break e}}s=s.return}while(s!==null)}tS(n)}catch(b){e=b,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function Jy(){var t=kc.current;return kc.current=Oc,t===null?Oc:t}function jp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Xt===null||!(ms&268435455)&&!(hu&268435455)||yr(Xt,Zt)}function Vc(t,e){var n=Je;Je|=2;var i=Jy();(Xt!==t||Zt!==e)&&(zi=null,cs(t,e));do try{KT();break}catch(r){Qy(t,r)}while(!0);if(bp(),Je=n,kc.current=i,Ft!==null)throw Error(ie(261));return Xt=null,Zt=0,Vt}function KT(){for(;Ft!==null;)eS(Ft)}function ZT(){for(;Ft!==null&&!ME();)eS(Ft)}function eS(t){var e=iS(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?tS(t):Ft=e,Bp.current=null}function tS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jT(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ft=null;return}}else if(n=GT(n,e,Dn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Vt===0&&(Vt=5)}function Qr(t,e,n){var i=it,r=$n.transition;try{$n.transition=null,it=1,QT(t,e,n,i)}finally{$n.transition=r,it=i}return null}function QT(t,e,n,i){do uo();while(Er!==null);if(Je&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LE(t,s),t===Xt&&(Ft=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,rS(Mc,function(){return uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=it;it=1;var a=Je;Je|=4,Bp.current=null,XT(t,n),$y(n,t),_T(Sh),Tc=!!yh,Sh=yh=null,t.current=n,YT(n),EE(),Je=a,it=o,$n.transition=s}else t.current=n;if(Sl&&(Sl=!1,Er=t,zc=r),s=t.pendingLanes,s===0&&(Pr=null),bE(n.stateNode),wn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bc)throw Bc=!1,t=Vh,Vh=null,t;return zc&1&&t.tag!==0&&uo(),s=t.pendingLanes,s&1?t===Hh?ma++:(ma=0,Hh=t):ma=0,Hr(),null}function uo(){if(Er!==null){var t=Ux(zc),e=$n.transition,n=it;try{if($n.transition=null,it=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,zc=0,Je&6)throw Error(ie(331));var r=Je;for(Je|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:fa(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ee=h;else for(;Ee!==null;){u=Ee;var d=u.sibling,p=u.return;if(Xy(u),u===c){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){o=Ee;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Ee=y;else e:for(o=m;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:du(9,a)}}catch(b){At(a,a.return,b)}if(a===o){Ee=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ee=M;break e}Ee=a.return}}if(Je=r,Hr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(iu,t)}catch{}i=!0}return i}finally{it=n,$n.transition=e}}return!1}function m0(t,e,n){e=yo(n,e),e=Uy(t,e,1),t=Rr(t,e,1),e=pn(),t!==null&&(Ya(t,1,e),wn(t,e))}function At(t,e,n){if(t.tag===3)m0(t,t,n);else for(;e!==null;){if(e.tag===3){m0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=yo(n,t),t=Fy(e,t,1),e=Rr(e,t,1),t=pn(),e!==null&&(Ya(e,1,t),wn(e,t));break}}e=e.return}}function JT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Vt===4||Vt===3&&(Zt&130023424)===Zt&&500>Nt()-Vp?cs(t,0):zp|=n),wn(t,e)}function nS(t,e){e===0&&(t.mode&1?(e=dl,dl<<=1,!(dl&130023424)&&(dl=4194304)):e=1);var n=pn();t=Ji(t,e),t!==null&&(Ya(t,e,n),wn(t,n))}function ew(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nS(t,n)}function tw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),nS(t,n)}var iS;iS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,HT(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,vt&&e.flags&1048576&&ay(e,Dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=go(e,un.current);co(e,n),r=Ip(null,e,i,t,r,n);var s=Up();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,Rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rp(e),r.updater=uu,e.stateNode=r,r._reactInternals=e,Ph(e,i,t,n),e=Nh(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Mp(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iw(i),t=ii(i,t),r){case 0:e=Lh(null,e,i,t,n);break e;case 1:e=s0(null,e,i,t,n);break e;case 11:e=i0(null,e,i,t,n);break e;case 14:e=r0(null,e,i,ii(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Lh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),s0(t,e,i,r,n);case 3:e:{if(zy(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fy(t,e),Ic(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=yo(Error(ie(423)),e),e=o0(t,e,i,n,r);break e}else if(i!==r){r=yo(Error(ie(424)),e),e=o0(t,e,i,n,r);break e}else for(Nn=Cr(e.stateNode.containerInfo.firstChild),In=e,vt=!0,si=null,n=dy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),i===r){e=er(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return py(e),t===null&&Ah(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Mh(i,r)?o=null:s!==null&&Mh(i,s)&&(e.flags|=32),By(t,e),hn(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return Vy(t,e,n);case 4:return Pp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_o(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),i0(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Lc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!En.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ch(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,co(e,n),r=Kn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),r0(t,e,i,r,n);case 15:return Oy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),sc(t,e),e.tag=1,Tn(i)?(t=!0,Rc(e)):t=!1,co(e,n),Iy(e,i,r),Ph(e,i,r,n),Nh(null,e,i,!0,t,n);case 19:return Hy(t,e,n);case 22:return ky(t,e,n)}throw Error(ie(156,e.tag))};function rS(t,e){return Dx(t,e)}function nw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new nw(t,e,n,i)}function Wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iw(t){if(typeof t=="function")return Wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===up)return 11;if(t===dp)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return us(n.children,r,s,e);case cp:o=8,r|=8;break;case eh:return t=qn(12,n,e,r|2),t.elementType=eh,t.lanes=s,t;case th:return t=qn(13,n,e,r),t.elementType=th,t.lanes=s,t;case nh:return t=qn(19,n,e,r),t.elementType=nh,t.lanes=s,t;case px:return fu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hx:o=10;break e;case fx:o=9;break e;case up:o=11;break e;case dp:o=14;break e;case gr:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function us(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function fu(t,e,n,i){return t=qn(22,t,i,e),t.elementType=px,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xp(t,e,n,i,r,s,o,a,l){return t=new rw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rp(s),t}function sw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sS(t){if(!t)return Ir;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Tn(n))return sy(t,n,e)}return e}function oS(t,e,n,i,r,s,o,a,l){return t=Xp(n,i,!0,t,r,s,o,a,l),t.context=sS(null),n=t.current,i=pn(),r=Dr(n),s=Xi(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,Ya(t,r,i),wn(t,i),t}function pu(t,e,n,i){var r=e.current,s=pn(),o=Dr(r);return n=sS(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,o),t!==null&&(ci(t,r,o,s),nc(t,r,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function g0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yp(t,e){g0(t,e),(t=t.alternate)&&g0(t,e)}function ow(){return null}var aS=typeof reportError=="function"?reportError:function(t){console.error(t)};function qp(t){this._internalRoot=t}mu.prototype.render=qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));pu(t,e,null,null)};mu.prototype.unmount=qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){pu(null,t,null,null)}),e[Qi]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=kx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&zx(t)}};function $p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function v0(){}function aw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hc(o);s.call(c)}}var o=oS(e,i,t,0,null,!1,!1,"",v0);return t._reactRootContainer=o,t[Qi]=o.current,Ra(t.nodeType===8?t.parentNode:t),gs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Hc(l);a.call(c)}}var l=Xp(t,0,!1,null,null,!1,!1,"",v0);return t._reactRootContainer=l,t[Qi]=l.current,Ra(t.nodeType===8?t.parentNode:t),gs(function(){pu(e,l,n,i)}),l}function vu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hc(o);a.call(l)}}pu(e,o,t,r)}else o=aw(n,e,t,r,i);return Hc(o)}Fx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(pp(e,n|1),wn(e,Nt()),!(Je&6)&&(So=Nt()+500,Hr()))}break;case 13:gs(function(){var i=Ji(t,1);if(i!==null){var r=pn();ci(i,t,1,r)}}),Yp(t,1)}};mp=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=pn();ci(e,t,134217728,n)}Yp(t,134217728)}};Ox=function(t){if(t.tag===13){var e=Dr(t),n=Ji(t,e);if(n!==null){var i=pn();ci(n,t,e,i)}Yp(t,e)}};kx=function(){return it};Bx=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};hh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=au(i);if(!r)throw Error(ie(90));gx(i),sh(i,r)}}}break;case"textarea":_x(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};wx=Hp;bx=gs;var lw={usingClientEntryPoint:!1,Events:[$a,Xs,au,Ex,Tx,Hp]},Go={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cw={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rx(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{iu=Ml.inject(cw),Ti=Ml}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lw;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$p(e))throw Error(ie(200));return sw(t,e,null,n)};Bn.createRoot=function(t,e){if(!$p(t))throw Error(ie(299));var n=!1,i="",r=aS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xp(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,Ra(t.nodeType===8?t.parentNode:t),new qp(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Rx(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return gs(t)};Bn.hydrate=function(t,e,n){if(!gu(e))throw Error(ie(200));return vu(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!$p(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=aS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oS(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,Ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mu(e)};Bn.render=function(t,e,n){if(!gu(e))throw Error(ie(200));return vu(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!gu(t))throw Error(ie(40));return t._reactRootContainer?(gs(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Bn.unstable_batchedUpdates=Hp;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return vu(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function lS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lS)}catch(t){console.error(t)}}lS(),lx.exports=Bn;var uw=lx.exports,_0=uw;Qd.createRoot=_0.createRoot,Qd.hydrateRoot=_0.hydrateRoot;/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),x0=t=>{const e=hw(t);return e.charAt(0).toUpperCase()+e.slice(1)},cS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),fw=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=ee.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ee.createElement("svg",{ref:l,...pw,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:cS("lucide",r),...!s&&!fw(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>ee.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(t,e)=>{const n=ee.forwardRef(({className:i,...r},s)=>ee.createElement(mw,{ref:s,iconNode:e,className:cS(`lucide-${dw(x0(t))}`,`lucide-${t}`,i),...r}));return n.displayName=x0(t),n};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Kp=Le("arrow-right",gw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]],uS=Le("battery-charging",vw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Wh=Le("bot",_w);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],yw=Le("circle-alert",xw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],dS=Le("circle-check-big",Sw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ew=Le("circle-check",Mw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ww=Le("clock-3",Tw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],y0=Le("eye-off",bw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],S0=Le("eye",Aw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Rw=Le("factory",Cw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Dw=Le("gamepad-2",Pw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Zp=Le("hand",Lw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],hS=Le("heart",Nw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Uw=Le("instagram",Iw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Ow=Le("lightbulb",Fw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],M0=Le("lock",kw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],E0=Le("log-in",Bw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Vw=Le("log-out",zw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ga=Le("mail",Hw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],nd=Le("map-pin",Gw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Ww=Le("menu",jw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Yw=Le("message-circle",Xw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M5 12h14",key:"1ays0h"}]],$w=Le("minus",qw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Zw=Le("monitor",Kw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Jw=Le("package",Qw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],T0=Le("pen-line",eb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],nb=Le("phone",tb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],rb=Le("plug-zap",ib);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ob=Le("plus",sb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Qp=Le("radio",ab);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],cb=Le("refresh-cw",lb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],w0=Le("search",ub);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],hb=Le("send",db);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],fS=Le("shield-check",fb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],b0=Le("shopping-bag",pb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],gb=Le("shopping-cart",mb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],_b=Le("smile",vb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],pS=Le("sparkles",xb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Sb=Le("target",yb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Eb=Le("trash-2",Mb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],mS=Le("truck",Tb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],A0=Le("user-plus",wb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Xh=Le("user",bb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Jp=Le("volume-2",Ab);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Rb=Le("wrench",Cb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ui=Le("x",Pb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],em=Le("zap",Db);function C0(t,e){const n=t.length,i=e.length,r=Array.from({length:n+1},(s,o)=>Array.from({length:i+1},(a,l)=>o===0?l:l===0?o:0));for(let s=1;s<=n;s++)for(let o=1;o<=i;o++)r[s][o]=t[s-1]===e[o-1]?r[s-1][o-1]:1+Math.min(r[s-1][o],r[s][o-1],r[s-1][o-1]);return r[n][i]}function Lb(t,e){const n=e.trim().toLowerCase();if(!n)return{exact:t,fuzzy:[],didYouMean:null};const i=n.split(/\s+/),r=new Set;t.forEach(l=>{`${l.name} ${l.nameHighlight} ${l.tagline} ${l.description}`.toLowerCase().split(/\s+/).forEach(u=>r.add(u))});const s=[],o=[];t.forEach(l=>{const c=`${l.name} ${l.nameHighlight} ${l.tagline} ${l.description}`.toLowerCase();if(i.every(p=>c.includes(p))){s.push(l);return}const h=c.split(/\s+/);i.some(p=>h.some(g=>Math.abs(g.length-p.length)>3?!1:C0(p,g)<=2))&&o.push(l)});let a=null;if(s.length===0){const l=i[i.length-1];let c=null,u=1/0;r.forEach(h=>{if(Math.abs(h.length-l.length)>4)return;const d=C0(l,h);d<u&&d<=3&&d>0&&(u=d,c=h)}),c&&(a=c)}return{exact:s,fuzzy:o,didYouMean:a}}function tm({links:t,ariaLabel:e,onNavigate:n,isHome:i=!1,cartCount:r=0,onCartClick:s,searchQuery:o="",onSearchChange:a,user:l,onLoginClick:c,products:u=[]}){const[h,d]=ee.useState(!1),[p,g]=ee.useState(!1),[S,v]=ee.useState(!1),f=ee.useRef(null);ee.useEffect(()=>{d(!1)},[e]),ee.useEffect(()=>(document.body.style.overflow=h?"hidden":"",()=>{document.body.style.overflow=""}),[h]),ee.useEffect(()=>{function B(Y){f.current&&!f.current.contains(Y.target)&&v(!1)}return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[]);const m=(B,Y)=>{B.preventDefault(),d(!1),n(Y)},y=i?"#home":"/",M=[{href:"#home",label:"Home"},{href:"#features",label:"Features"},{href:"#products",label:"Shop"},{href:"/about",label:"About Us"},{href:"/support",label:"Support"},{href:"#products",label:"Contact"}],{exact:b,fuzzy:T,didYouMean:A}=Lb(u,o),_=[...b,...T].slice(0,5),R=b.length===0&&T.length>0,P=S&&o.trim().length>0;function D(B){v(!1),g(!1),a("");const Y=document.getElementById("products");Y&&Y.scrollIntoView({behavior:"smooth"})}function U(B){a(B)}return x.jsxs("header",{className:"topbar",children:[x.jsxs("div",{className:"announcement-bar",children:[x.jsx("span",{children:"🚀 Proudly Made in India"}),x.jsx("span",{className:"dot-sep"}),x.jsx("span",{children:"Smart Robots for a Smarter Tomorrow"})]}),x.jsxs("div",{className:"navbar",children:[x.jsx("a",{className:"brand-lockup",href:y,"aria-label":"RoboMitra home",onClick:B=>m(B,"/"),children:x.jsxs("span",{className:"brand-text-logo",children:["Robo",x.jsx("span",{children:"Mitra"})]})}),x.jsxs("nav",{id:"primary-navigation",className:`nav-links ${h?"nav-links-open":""}`,"aria-label":e,children:[h&&x.jsx("button",{type:"button",className:"menu-toggle",style:{position:"absolute",top:20,right:20},onClick:()=>d(!1),"aria-label":"Close menu",children:x.jsx(ui,{size:20})}),M.map(({href:B,label:Y})=>x.jsx("a",{className:"nav-link",href:B,onClick:I=>m(I,B),children:Y},`${B}-${Y}`))]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsx("div",{ref:f,className:"nav-search-root",children:p?x.jsxs("div",{className:"nav-search-expanded",children:[x.jsxs("div",{className:"nav-search-bar",children:[x.jsx(w0,{size:14,className:"nav-search-icon"}),x.jsx("input",{type:"text",placeholder:"Search robots…",value:o,onChange:B=>{a(B.target.value),v(!0)},onFocus:()=>v(!0),className:"nav-search-input",autoFocus:!0,"aria-label":"Search products"}),x.jsx("button",{className:"nav-search-clear",onClick:()=>{g(!1),v(!1),a("")},"aria-label":"Close search",children:x.jsx(ui,{size:14})})]}),P&&x.jsx("div",{className:"search-dropdown",role:"listbox","aria-label":"Search results",children:_.length>0?x.jsxs(x.Fragment,{children:[R&&x.jsx("p",{className:"search-dropdown-notice",children:"🔍 Showing closest matches"}),_.map(B=>x.jsxs("button",{className:"search-dropdown-item",role:"option",onClick:()=>D(),children:[x.jsx("img",{src:B.image,alt:B.nameHighlight,className:"search-dropdown-img"}),x.jsxs("div",{className:"search-dropdown-info",children:[x.jsxs("span",{className:"search-dropdown-name",children:[B.name," ",x.jsx("strong",{children:B.nameHighlight})]}),x.jsx("span",{className:"search-dropdown-tag",children:B.tagline})]}),x.jsx("span",{className:"search-dropdown-price",children:B.price}),x.jsx(Kp,{size:14,className:"search-dropdown-arrow"})]},B.id)),A&&b.length===0&&x.jsxs("div",{className:"search-dropdown-dym",children:["Did you mean ",x.jsxs("button",{className:"search-dym-btn",onClick:()=>U(A),children:['"',A,'"']}),"?"]})]}):x.jsxs("div",{className:"search-dropdown-empty",children:[x.jsxs("p",{className:"search-dropdown-empty-title",children:['No robots found for "',o,'"']}),A&&x.jsxs("p",{className:"search-dropdown-empty-dym",children:["Did you mean ",x.jsxs("button",{className:"search-dym-btn",onClick:()=>U(A),children:['"',A,'"']}),"?"]}),x.jsx("p",{className:"search-dropdown-hint",children:'Try "Alex", "Andy" or "R1"'})]})})]}):x.jsx("button",{className:"navbar-icon-btn","aria-label":"Search",type:"button",onClick:()=>g(!0),children:x.jsx(w0,{size:18})})}),x.jsx("div",{className:"navbar-icons",children:x.jsxs("button",{className:"navbar-icon-btn","aria-label":l?`Logged in as ${l.name}`:"Login / Account",type:"button",onClick:c,style:{position:"relative"},children:[x.jsx(Xh,{size:18}),l&&x.jsx("span",{className:"user-indicator-dot"})]})}),x.jsxs("button",{className:"navbar-icon-btn","aria-label":"Cart",type:"button",style:{position:"relative"},onClick:s,children:[x.jsx(gb,{size:18}),r>0&&x.jsx("span",{className:"cart-badge",children:r})]}),x.jsx("button",{type:"button",className:"menu-toggle","aria-expanded":h,"aria-controls":"primary-navigation","aria-label":h?"Close menu":"Open menu",onClick:()=>d(B=>!B),children:h?x.jsx(ui,{size:20}):x.jsx(Ww,{size:20})})]})]})]})}const nm=ee.createContext({});function im(t){const e=ee.useRef(null);return e.current===null&&(e.current=t()),e.current}const _u=ee.createContext(null),rm=ee.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Nb extends ee.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ib({children:t,isPresent:e}){const n=ee.useId(),i=ee.useRef(null),r=ee.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ee.useContext(rm);return ee.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),x.jsx(Nb,{isPresent:e,childRef:i,sizeRef:r,children:ee.cloneElement(t,{ref:i})})}const Ub=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=im(Fb),l=ee.useId(),c=ee.useCallback(h=>{a.set(h,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=ee.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:h=>(a.set(h,!1),()=>a.delete(h))}),s?[Math.random(),c]:[n,c]);return ee.useMemo(()=>{a.forEach((h,d)=>a.set(d,!1))},[n]),ee.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=x.jsx(Ib,{isPresent:n,children:t})),x.jsx(_u.Provider,{value:u,children:t})};function Fb(){return new Map}function gS(t=!0){const e=ee.useContext(_u);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ee.useId();ee.useEffect(()=>{t&&r(s)},[t]);const o=ee.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const El=t=>t.key||"";function R0(t){const e=[];return ee.Children.forEach(t,n=>{ee.isValidElement(n)&&e.push(n)}),e}const sm=typeof window<"u",vS=sm?ee.useLayoutEffect:ee.useEffect,vs=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=gS(o),c=ee.useMemo(()=>R0(t),[t]),u=o&&!a?[]:c.map(El),h=ee.useRef(!0),d=ee.useRef(c),p=im(()=>new Map),[g,S]=ee.useState(c),[v,f]=ee.useState(c);vS(()=>{h.current=!1,d.current=c;for(let M=0;M<v.length;M++){const b=El(v[M]);u.includes(b)?p.delete(b):p.get(b)!==!0&&p.set(b,!1)}},[v,u.length,u.join("-")]);const m=[];if(c!==g){let M=[...c];for(let b=0;b<v.length;b++){const T=v[b],A=El(T);u.includes(A)||(M.splice(b,0,T),m.push(T))}s==="wait"&&m.length&&(M=m),f(R0(M)),S(c);return}const{forceRender:y}=ee.useContext(nm);return x.jsx(x.Fragment,{children:v.map(M=>{const b=El(M),T=o&&!a?!1:c===v||u.includes(b),A=()=>{if(p.has(b))p.set(b,!0);else return;let _=!0;p.forEach(R=>{R||(_=!1)}),_&&(y==null||y(),f(d.current),o&&(l==null||l()),i&&i())};return x.jsx(Ub,{isPresent:T,initial:!h.current||n?void 0:!1,custom:T?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:T?void 0:A,children:M},b)})})},Un=t=>t;let _S=Un;function om(t){let e;return()=>(e===void 0&&(e=t()),e)}const Mo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Yi=t=>t*1e3,qi=t=>t/1e3,Ob={useManualTiming:!1};function kb(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,h=!1)=>{const p=h&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const Tl=["read","resolveKeyframes","update","preRender","render","postRender"],Bb=40;function xS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Tl.reduce((f,m)=>(f[m]=kb(s),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:d}=o,p=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,Bb),1),r.timestamp=f,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),h.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Tl.reduce((f,m)=>{const y=o[m];return f[m]=(M,b=!1,T=!1)=>(n||g(),y.schedule(M,b,T)),f},{}),cancel:f=>{for(let m=0;m<Tl.length;m++)o[Tl[m]].cancel(f)},state:r,steps:o}}const{schedule:gt,cancel:Ur,state:qt,steps:id}=xS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Un,!0),yS=ee.createContext({strict:!1}),P0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Eo={};for(const t in P0)Eo[t]={isEnabled:e=>P0[t].some(n=>!!e[n])};function zb(t){for(const e in t)Eo[e]={...Eo[e],...t[e]}}const Vb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Gc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Vb.has(t)}let SS=t=>!Gc(t);function Hb(t){t&&(SS=e=>e.startsWith("on")?!Gc(e):t(e))}try{Hb(require("@emotion/is-prop-valid").default)}catch{}function Gb(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(SS(r)||n===!0&&Gc(r)||!e&&!Gc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function jb(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const xu=ee.createContext({});function ka(t){return typeof t=="string"||Array.isArray(t)}function yu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const am=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lm=["initial",...am];function Su(t){return yu(t.animate)||lm.some(e=>ka(t[e]))}function MS(t){return!!(Su(t)||t.variants)}function Wb(t,e){if(Su(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ka(n)?n:void 0,animate:ka(i)?i:void 0}}return t.inherit!==!1?e:{}}function Xb(t){const{initial:e,animate:n}=Wb(t,ee.useContext(xu));return ee.useMemo(()=>({initial:e,animate:n}),[D0(e),D0(n)])}function D0(t){return Array.isArray(t)?t.join(" "):t}const Yb=Symbol.for("motionComponentSymbol");function Js(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function qb(t,e,n){return ee.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Js(n)&&(n.current=i))},[e])}const cm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),$b="framerAppearId",ES="data-"+cm($b),{schedule:um}=xS(queueMicrotask,!1),TS=ee.createContext({});function Kb(t,e,n,i,r){var s,o;const{visualElement:a}=ee.useContext(xu),l=ee.useContext(yS),c=ee.useContext(_u),u=ee.useContext(rm).reducedMotion,h=ee.useRef(null);i=i||l.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=h.current,p=ee.useContext(TS);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&Zb(h.current,n,r,p);const g=ee.useRef(!1);ee.useInsertionEffect(()=>{d&&g.current&&d.update(n,c)});const S=n[ES],v=ee.useRef(!!S&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,S))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,S)));return vS(()=>{d&&(g.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),um.render(d.render),v.current&&d.animationState&&d.animationState.animateChanges())}),ee.useEffect(()=>{d&&(!v.current&&d.animationState&&d.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,S)}),v.current=!1))}),d}function Zb(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:wS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Js(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function wS(t){if(t)return t.options.allowProjection!==!1?t.projection:wS(t.parent)}function Qb({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&zb(t);function a(c,u){let h;const d={...ee.useContext(rm),...c,layoutId:Jb(c)},{isStatic:p}=d,g=Xb(c),S=i(c,p);if(!p&&sm){eA();const v=tA(d);h=v.MeasureLayout,g.visualElement=Kb(r,S,d,e,v.ProjectionNode)}return x.jsxs(xu.Provider,{value:g,children:[h&&g.visualElement?x.jsx(h,{visualElement:g.visualElement,...d}):null,n(r,c,qb(S,g.visualElement,u),S,p,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ee.forwardRef(a);return l[Yb]=r,l}function Jb({layoutId:t}){const e=ee.useContext(nm).id;return e&&t!==void 0?e+"-"+t:t}function eA(t,e){ee.useContext(yS).strict}function tA(t){const{drag:e,layout:n}=Eo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const nA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dm(t){return typeof t!="string"||t.includes("-")?!1:!!(nA.indexOf(t)>-1||/[A-Z]/u.test(t))}function L0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function hm(t,e,n,i){if(typeof e=="function"){const[r,s]=L0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=L0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Yh=t=>Array.isArray(t),iA=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),rA=t=>Yh(t)?t[t.length-1]||0:t,an=t=>!!(t&&t.getVelocity);function cc(t){const e=an(t)?t.get():t;return iA(e)?e.toValue():e}function sA({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:oA(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const bS=t=>(e,n)=>{const i=ee.useContext(xu),r=ee.useContext(_u),s=()=>sA(t,e,i,r);return n?s():im(s)};function oA(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=cc(s[d]);let{initial:o,animate:a}=t;const l=Su(t),c=MS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!yu(h)){const d=Array.isArray(h)?h:[h];for(let p=0;p<d.length;p++){const g=hm(t,d[p]);if(g){const{transitionEnd:S,transition:v,...f}=g;for(const m in f){let y=f[m];if(Array.isArray(y)){const M=u?y.length-1:0;y=y[M]}y!==null&&(r[m]=y)}for(const m in S)r[m]=S[m]}}}return r}const Lo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ms=new Set(Lo),AS=t=>e=>typeof e=="string"&&e.startsWith(t),CS=AS("--"),aA=AS("var(--"),fm=t=>aA(t)?lA.test(t.split("/*")[0].trim()):!1,lA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,RS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,tr=(t,e,n)=>n>e?e:n<t?t:n,No={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ba={...No,transform:t=>tr(0,1,t)},wl={...No,default:1},Za=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),mr=Za("deg"),bi=Za("%"),Ce=Za("px"),cA=Za("vh"),uA=Za("vw"),N0={...bi,parse:t=>bi.parse(t)/100,transform:t=>bi.transform(t*100)},dA={borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,backgroundPositionX:Ce,backgroundPositionY:Ce},hA={rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:wl,scaleX:wl,scaleY:wl,scaleZ:wl,skew:mr,skewX:mr,skewY:mr,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:Ba,originX:N0,originY:N0,originZ:Ce},I0={...No,transform:Math.round},pm={...dA,...hA,zIndex:I0,size:Ce,fillOpacity:Ba,strokeOpacity:Ba,numOctaves:I0},fA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pA=Lo.length;function mA(t,e,n){let i="",r=!0;for(let s=0;s<pA;s++){const o=Lo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=RS(a,pm[o]);if(!l){r=!1;const u=fA[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function mm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Ms.has(l)){o=!0;continue}else if(CS(l)){r[l]=c;continue}else{const u=RS(c,pm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=mA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const gA={offset:"stroke-dashoffset",array:"stroke-dasharray"},vA={offset:"strokeDashoffset",array:"strokeDasharray"};function _A(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?gA:vA;t[s.offset]=Ce.transform(-i);const o=Ce.transform(e),a=Ce.transform(n);t[s.array]=`${o} ${a}`}function U0(t,e,n){return typeof t=="string"?t:Ce.transform(e+n*t)}function xA(t,e,n){const i=U0(e,t.x,t.width),r=U0(n,t.y,t.height);return`${i} ${r}`}function gm(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h){if(mm(t,c,h),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:g}=t;d.transform&&(g&&(p.transform=d.transform),delete d.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=xA(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&_A(d,o,a,l,!1)}const vm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),PS=()=>({...vm(),attrs:{}}),_m=t=>typeof t=="string"&&t.toLowerCase()==="svg";function DS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const LS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function NS(t,e,n,i){DS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(LS.has(r)?r:cm(r),e.attrs[r])}const jc={};function yA(t){Object.assign(jc,t)}function IS(t,{layout:e,layoutId:n}){return Ms.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!jc[t]||t==="opacity")}function xm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(an(r[o])||e.style&&an(e.style[o])||IS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function US(t,e,n){const i=xm(t,e,n);for(const r in t)if(an(t[r])||an(e[r])){const s=Lo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function SA(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const F0=["x","y","width","height","cx","cy","r"],MA={useVisualState:bS({scrapeMotionValuesFromProps:US,createRenderState:PS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Ms.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<F0.length;a++){const l=F0[a];t[l]!==e[l]&&(o=!0)}o&&gt.read(()=>{SA(n,i),gt.render(()=>{gm(i,r,_m(n.tagName),t.transformTemplate),NS(n,i)})})}})},EA={useVisualState:bS({scrapeMotionValuesFromProps:xm,createRenderState:vm})};function FS(t,e,n){for(const i in e)!an(e[i])&&!IS(i,n)&&(t[i]=e[i])}function TA({transformTemplate:t},e){return ee.useMemo(()=>{const n=vm();return mm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function wA(t,e){const n=t.style||{},i={};return FS(i,n,t),Object.assign(i,TA(t,e)),i}function bA(t,e){const n={},i=wA(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function AA(t,e,n,i){const r=ee.useMemo(()=>{const s=PS();return gm(s,e,_m(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};FS(s,t.style,t),r.style={...s,...r.style}}return r}function CA(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(dm(n)?AA:bA)(i,s,o,n),c=Gb(i,typeof n=="string",t),u=n!==ee.Fragment?{...c,...l,ref:r}:{},{children:h}=i,d=ee.useMemo(()=>an(h)?h.get():h,[h]);return ee.createElement(n,{...u,children:d})}}function RA(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...dm(i)?MA:EA,preloadedFeatures:t,useRender:CA(r),createVisualElement:e,Component:i};return Qb(o)}}function OS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Mu(t,e,n){const i=t.getProps();return hm(i,e,n!==void 0?n:i.custom,t)}const PA=om(()=>window.ScrollTimeline!==void 0);class DA{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(PA()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class LA extends DA{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function ym(t,e){return t?t[e]||t.default||t:void 0}const qh=2e4;function kS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<qh;)e+=n,i=t.next(e);return e>=qh?1/0:e}function Sm(t){return typeof t=="function"}function O0(t,e){t.timeline=e,t.onfinish=null}const Mm=t=>Array.isArray(t)&&typeof t[0]=="number",NA={linearEasing:void 0};function IA(t,e){const n=om(t);return()=>{var i;return(i=NA[e])!==null&&i!==void 0?i:n()}}const Wc=IA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),BS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Mo(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function zS(t){return!!(typeof t=="function"&&Wc()||!t||typeof t=="string"&&(t in $h||Wc())||Mm(t)||Array.isArray(t)&&t.every(zS))}const na=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,$h={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:na([0,.65,.55,1]),circOut:na([.55,0,1,.45]),backIn:na([.31,.01,.66,-.59]),backOut:na([.33,1.53,.69,.99])};function VS(t,e){if(t)return typeof t=="function"&&Wc()?BS(t,e):Mm(t)?na(t):Array.isArray(t)?t.map(n=>VS(n,e)||$h.easeOut):$h[t]}const ni={x:!1,y:!1};function HS(){return ni.x||ni.y}function UA(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function GS(t,e){const n=UA(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function k0(t){return e=>{e.pointerType==="touch"||HS()||t(e)}}function FA(t,e,n={}){const[i,r,s]=GS(t,n),o=k0(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=k0(h=>{c(h),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const jS=(t,e)=>e?t===e?!0:jS(t,e.parentElement):!1,Em=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,OA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kA(t){return OA.has(t.tagName)||t.tabIndex!==-1}const ia=new WeakSet;function B0(t){return e=>{e.key==="Enter"&&t(e)}}function rd(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const BA=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=B0(()=>{if(ia.has(n))return;rd(n,"down");const r=B0(()=>{rd(n,"up")}),s=()=>rd(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function z0(t){return Em(t)&&!HS()}function zA(t,e,n={}){const[i,r,s]=GS(t,n),o=a=>{const l=a.currentTarget;if(!z0(a)||ia.has(l))return;ia.add(l);const c=e(a),u=(p,g)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",d),!(!z0(p)||!ia.has(l))&&(ia.delete(l),typeof c=="function"&&c(p,{success:g}))},h=p=>{u(p,n.useGlobalTarget||jS(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{!kA(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>BA(c,r),r)}),s}function VA(t){return t==="x"||t==="y"?ni[t]?null:(ni[t]=!0,()=>{ni[t]=!1}):ni.x||ni.y?null:(ni.x=ni.y=!0,()=>{ni.x=ni.y=!1})}const WS=new Set(["width","height","top","left","right","bottom",...Lo]);let uc;function HA(){uc=void 0}const Ai={now:()=>(uc===void 0&&Ai.set(qt.isProcessing||Ob.useManualTiming?qt.timestamp:performance.now()),uc),set:t=>{uc=t,queueMicrotask(HA)}};function Tm(t,e){t.indexOf(e)===-1&&t.push(e)}function wm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class bm{constructor(){this.subscriptions=[]}add(e){return Tm(this.subscriptions,e),()=>wm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function XS(t,e){return e?t*(1e3/e):0}const V0=30,GA=t=>!isNaN(parseFloat(t));class jA{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Ai.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Ai.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=GA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new bm);const i=this.events[e].add(n);return e==="change"?()=>{i(),gt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ai.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>V0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,V0);return XS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function za(t,e){return new jA(t,e)}function WA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,za(n))}function XA(t,e){const n=Mu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=rA(s[o]);WA(t,o,a)}}function YA(t){return!!(an(t)&&t.add)}function Kh(t,e){const n=t.getValue("willChange");if(YA(n))return n.add(e)}function YS(t){return t.props[ES]}const qS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,qA=1e-7,$A=12;function KA(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=qS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>qA&&++a<$A);return o}function Qa(t,e,n,i){if(t===e&&n===i)return Un;const r=s=>KA(s,0,1,t,n);return s=>s===0||s===1?s:qS(r(s),e,i)}const $S=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,KS=t=>e=>1-t(1-e),ZS=Qa(.33,1.53,.69,.99),Am=KS(ZS),QS=$S(Am),JS=t=>(t*=2)<1?.5*Am(t):.5*(2-Math.pow(2,-10*(t-1))),Cm=t=>1-Math.sin(Math.acos(t)),eM=KS(Cm),tM=$S(Cm),nM=t=>/^0[^.\s]+$/u.test(t);function ZA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||nM(t):!0}const va=t=>Math.round(t*1e5)/1e5,Rm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function QA(t){return t==null}const JA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pm=(t,e)=>n=>!!(typeof n=="string"&&JA.test(n)&&n.startsWith(t)||e&&!QA(n)&&Object.prototype.hasOwnProperty.call(n,e)),iM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Rm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},eC=t=>tr(0,255,t),sd={...No,transform:t=>Math.round(eC(t))},os={test:Pm("rgb","red"),parse:iM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+sd.transform(t)+", "+sd.transform(e)+", "+sd.transform(n)+", "+va(Ba.transform(i))+")"};function tC(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Zh={test:Pm("#"),parse:tC,transform:os.transform},eo={test:Pm("hsl","hue"),parse:iM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+bi.transform(va(e))+", "+bi.transform(va(n))+", "+va(Ba.transform(i))+")"},sn={test:t=>os.test(t)||Zh.test(t)||eo.test(t),parse:t=>os.test(t)?os.parse(t):eo.test(t)?eo.parse(t):Zh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?os.transform(t):eo.transform(t)},nC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function iC(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Rm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(nC))===null||n===void 0?void 0:n.length)||0)>0}const rM="number",sM="color",rC="var",sC="var(",H0="${}",oC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Va(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(oC,l=>(sn.test(l)?(i.color.push(s),r.push(sM),n.push(sn.parse(l))):l.startsWith(sC)?(i.var.push(s),r.push(rC),n.push(l)):(i.number.push(s),r.push(rM),n.push(parseFloat(l))),++s,H0)).split(H0);return{values:n,split:a,indexes:i,types:r}}function oM(t){return Va(t).values}function aM(t){const{split:e,types:n}=Va(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===rM?s+=va(r[o]):a===sM?s+=sn.transform(r[o]):s+=r[o]}return s}}const aC=t=>typeof t=="number"?0:t;function lC(t){const e=oM(t);return aM(t)(e.map(aC))}const Fr={test:iC,parse:oM,createTransformer:aM,getAnimatableNone:lC},cC=new Set(["brightness","contrast","saturate","opacity"]);function uC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Rm)||[];if(!i)return t;const r=n.replace(i,"");let s=cC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const dC=/\b([a-z-]*)\(.*?\)/gu,Qh={...Fr,getAnimatableNone:t=>{const e=t.match(dC);return e?e.map(uC).join(" "):t}},hC={...pm,color:sn,backgroundColor:sn,outlineColor:sn,fill:sn,stroke:sn,borderColor:sn,borderTopColor:sn,borderRightColor:sn,borderBottomColor:sn,borderLeftColor:sn,filter:Qh,WebkitFilter:Qh},Dm=t=>hC[t];function lM(t,e){let n=Dm(t);return n!==Qh&&(n=Fr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const fC=new Set(["auto","none","0"]);function pC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!fC.has(s)&&Va(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=lM(n,r)}const G0=t=>t===No||t===Ce,j0=(t,e)=>parseFloat(t.split(", ")[e]),W0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return j0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?j0(s[1],t):0}},mC=new Set(["x","y","z"]),gC=Lo.filter(t=>!mC.has(t));function vC(t){const e=[];return gC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const To={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:W0(4,13),y:W0(5,14)};To.translateX=To.x;To.translateY=To.y;const ds=new Set;let Jh=!1,ef=!1;function cM(){if(ef){const t=Array.from(ds).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=vC(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}ef=!1,Jh=!1,ds.forEach(t=>t.complete()),ds.clear()}function uM(){ds.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ef=!0)})}function _C(){uM(),cM()}class Lm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ds.add(this),Jh||(Jh=!0,gt.read(uM),gt.resolveKeyframes(cM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ds.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ds.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const dM=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),xC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yC(t){const e=xC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function hM(t,e,n=1){const[i,r]=yC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return dM(o)?parseFloat(o):o}return fm(r)?hM(r,e,n+1):r}const fM=t=>e=>e.test(t),SC={test:t=>t==="auto",parse:t=>t},pM=[No,Ce,bi,mr,uA,cA,SC],X0=t=>pM.find(fM(t));class mM extends Lm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),fm(c))){const u=hM(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!WS.has(i)||e.length!==2)return;const[r,s]=e,o=X0(r),a=X0(s);if(o!==a)if(G0(o)&&G0(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)ZA(e[r])&&i.push(r);i.length&&pC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=To[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=To[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Y0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Fr.test(t)||t==="0")&&!t.startsWith("url("));function MC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function EC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Y0(r,e),a=Y0(s,e);return!o||!a?!1:MC(t)||(n==="spring"||Sm(n))&&i}const TC=t=>t!==null;function Eu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(TC),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const wC=40;class gM{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ai.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>wC?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&_C(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Ai.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!EC(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Eu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const St=(t,e,n)=>t+(e-t)*n;function od(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function bC({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=od(l,a,t+1/3),s=od(l,a,t),o=od(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Xc(t,e){return n=>n>0?e:t}const ad=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},AC=[Zh,os,eo],CC=t=>AC.find(e=>e.test(t));function q0(t){const e=CC(t);if(!e)return!1;let n=e.parse(t);return e===eo&&(n=bC(n)),n}const $0=(t,e)=>{const n=q0(t),i=q0(e);if(!n||!i)return Xc(t,e);const r={...n};return s=>(r.red=ad(n.red,i.red,s),r.green=ad(n.green,i.green,s),r.blue=ad(n.blue,i.blue,s),r.alpha=St(n.alpha,i.alpha,s),os.transform(r))},RC=(t,e)=>n=>e(t(n)),Ja=(...t)=>t.reduce(RC),tf=new Set(["none","hidden"]);function PC(t,e){return tf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function DC(t,e){return n=>St(t,e,n)}function Nm(t){return typeof t=="number"?DC:typeof t=="string"?fm(t)?Xc:sn.test(t)?$0:IC:Array.isArray(t)?vM:typeof t=="object"?sn.test(t)?$0:LC:Xc}function vM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Nm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function LC(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Nm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function NC(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const IC=(t,e)=>{const n=Fr.createTransformer(e),i=Va(t),r=Va(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?tf.has(t)&&!r.values.length||tf.has(e)&&!i.values.length?PC(t,e):Ja(vM(NC(i,r),r.values),n):Xc(t,e)};function _M(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?St(t,e,n):Nm(t)(t,e)}const UC=5;function xM(t,e,n){const i=Math.max(e-UC,0);return XS(n-t(i),e-i)}const bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ld=.001;function FC({duration:t=bt.duration,bounce:e=bt.bounce,velocity:n=bt.velocity,mass:i=bt.mass}){let r,s,o=1-e;o=tr(bt.minDamping,bt.maxDamping,o),t=tr(bt.minDuration,bt.maxDuration,qi(t)),o<1?(r=c=>{const u=c*o,h=u*t,d=u-n,p=nf(c,o),g=Math.exp(-h);return ld-d/p*g},s=c=>{const h=c*o*t,d=h*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-h),S=nf(Math.pow(c,2),o);return(-r(c)+ld>0?-1:1)*((d-p)*g)/S}):(r=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-ld+u*h},s=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=kC(r,s,a);if(t=Yi(t),isNaN(l))return{stiffness:bt.stiffness,damping:bt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const OC=12;function kC(t,e,n){let i=n;for(let r=1;r<OC;r++)i=i-t(i)/e(i);return i}function nf(t,e){return t*Math.sqrt(1-e*e)}const BC=["duration","bounce"],zC=["stiffness","damping","mass"];function K0(t,e){return e.some(n=>t[n]!==void 0)}function VC(t){let e={velocity:bt.velocity,stiffness:bt.stiffness,damping:bt.damping,mass:bt.mass,isResolvedFromDuration:!1,...t};if(!K0(t,zC)&&K0(t,BC))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*tr(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:bt.mass,stiffness:r,damping:s}}else{const n=FC(t);e={...e,...n,mass:bt.mass},e.isResolvedFromDuration=!0}return e}function yM(t=bt.visualDuration,e=bt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:h,velocity:d,isResolvedFromDuration:p}=VC({...n,velocity:-qi(n.velocity||0)}),g=d||0,S=c/(2*Math.sqrt(l*u)),v=o-s,f=qi(Math.sqrt(l/u)),m=Math.abs(v)<5;i||(i=m?bt.restSpeed.granular:bt.restSpeed.default),r||(r=m?bt.restDelta.granular:bt.restDelta.default);let y;if(S<1){const b=nf(f,S);y=T=>{const A=Math.exp(-S*f*T);return o-A*((g+S*f*v)/b*Math.sin(b*T)+v*Math.cos(b*T))}}else if(S===1)y=b=>o-Math.exp(-f*b)*(v+(g+f*v)*b);else{const b=f*Math.sqrt(S*S-1);y=T=>{const A=Math.exp(-S*f*T),_=Math.min(b*T,300);return o-A*((g+S*f*v)*Math.sinh(_)+b*v*Math.cosh(_))/b}}const M={calculatedDuration:p&&h||null,next:b=>{const T=y(b);if(p)a.done=b>=h;else{let A=0;S<1&&(A=b===0?Yi(g):xM(y,b,T));const _=Math.abs(A)<=i,R=Math.abs(o-T)<=r;a.done=_&&R}return a.value=a.done?o:T,a},toString:()=>{const b=Math.min(kS(M),qh),T=BS(A=>M.next(b*A).value,b,30);return b+"ms "+T}};return M}function Z0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},p=_=>a!==void 0&&_<a||l!==void 0&&_>l,g=_=>a===void 0?l:l===void 0||Math.abs(a-_)<Math.abs(l-_)?a:l;let S=n*e;const v=h+S,f=o===void 0?v:o(v);f!==v&&(S=f-h);const m=_=>-S*Math.exp(-_/i),y=_=>f+m(_),M=_=>{const R=m(_),P=y(_);d.done=Math.abs(R)<=c,d.value=d.done?f:P};let b,T;const A=_=>{p(d.value)&&(b=_,T=yM({keyframes:[d.value,g(d.value)],velocity:xM(y,_,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:_=>{let R=!1;return!T&&b===void 0&&(R=!0,M(_),A(_)),b!==void 0&&_>=b?T.next(_-b):(!R&&M(_),d)}}}const HC=Qa(.42,0,1,1),GC=Qa(0,0,.58,1),SM=Qa(.42,0,.58,1),jC=t=>Array.isArray(t)&&typeof t[0]!="number",WC={linear:Un,easeIn:HC,easeInOut:SM,easeOut:GC,circIn:Cm,circInOut:tM,circOut:eM,backIn:Am,backInOut:QS,backOut:ZS,anticipate:JS},Q0=t=>{if(Mm(t)){_S(t.length===4);const[e,n,i,r]=t;return Qa(e,n,i,r)}else if(typeof t=="string")return WC[t];return t};function XC(t,e,n){const i=[],r=n||_M,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Un:e;a=Ja(l,a)}i.push(a)}return i}function YC(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(_S(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=XC(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(u<t[h+1]);h++);const d=Mo(t[h],t[h+1],u);return a[h](d)};return n?u=>c(tr(t[0],t[s-1],u)):c}function qC(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Mo(0,e,i);t.push(St(n,1,r))}}function $C(t){const e=[0];return qC(e,t.length-1),e}function KC(t,e){return t.map(n=>n*e)}function ZC(t,e){return t.map(()=>e||SM).splice(0,t.length-1)}function Yc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=jC(i)?i.map(Q0):Q0(i),s={done:!1,value:e[0]},o=KC(n&&n.length===e.length?n:$C(e),t),a=YC(o,e,{ease:Array.isArray(r)?r:ZC(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const QC=t=>{const e=({timestamp:n})=>t(n);return{start:()=>gt.update(e,!0),stop:()=>Ur(e),now:()=>qt.isProcessing?qt.timestamp:Ai.now()}},JC={decay:Z0,inertia:Z0,tween:Yc,keyframes:Yc,spring:yM},eR=t=>t/100;class Im extends gM{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Lm,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Sm(n)?n:JC[n]||Yc;let l,c;a!==Yc&&typeof e[0]!="number"&&(l=Ja(eR,_M(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=kS(u));const{calculatedDuration:h}=u,d=h+r,p=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:_}=this.options;return{done:!0,value:_[_.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:g,repeatDelay:S,onUpdate:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-d*(this.speed>=0?1:-1),m=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let y=this.currentTime,M=s;if(p){const _=Math.min(this.currentTime,u)/h;let R=Math.floor(_),P=_%1;!P&&_>=1&&(P=1),P===1&&R--,R=Math.min(R,p+1),!!(R%2)&&(g==="reverse"?(P=1-P,S&&(P-=S/h)):g==="mirror"&&(M=o)),y=tr(0,1,P)*h}const b=m?{done:!1,value:l[0]}:M.next(y);a&&(b.value=a(b.value));let{done:T}=b;!m&&c!==null&&(T=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return A&&r!==void 0&&(b.value=Eu(l,this.options,r)),v&&v(b.value),A&&this.finish(),b}get duration(){const{resolved:e}=this;return e?qi(e.calculatedDuration):0}get time(){return qi(this.currentTime)}set time(e){e=Yi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=qi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=QC,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const tR=new Set(["opacity","clipPath","filter","transform"]);function nR(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=VS(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const iR=om(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),qc=10,rR=2e4;function sR(t){return Sm(t.type)||t.type==="spring"||!zS(t.ease)}function oR(t,e){const n=new Im({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<rR;)i=n.sample(s),r.push(i.value),s+=qc;return{times:void 0,keyframes:r,duration:s-qc,ease:"linear"}}const MM={anticipate:JS,backInOut:QS,circInOut:tM};function aR(t){return t in MM}class J0 extends gM{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new mM(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Wc()&&aR(s)&&(s=MM[s]),sR(this.options)){const{onComplete:h,onUpdate:d,motionValue:p,element:g,...S}=this.options,v=oR(e,S);e=v.keyframes,e.length===1&&(e[1]=e[0]),i=v.duration,r=v.times,s=v.ease,o="keyframes"}const u=nR(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(O0(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:h}=this.options;a.set(Eu(e,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return qi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return qi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Yi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Un;const{animation:i}=n;O0(i,e)}return Un}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:d,...p}=this.options,g=new Im({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),S=Yi(this.time);c.setWithVelocity(g.sample(S-qc).value,g.sample(S).value,qc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return iR()&&i&&tR.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const lR={type:"spring",stiffness:500,damping:25,restSpeed:10},cR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),uR={type:"keyframes",duration:.8},dR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hR=(t,{keyframes:e})=>e.length>2?uR:Ms.has(t)?t.startsWith("scale")?cR(e[1]):lR:dR;function fR({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Um=(t,e,n,i={},r,s)=>o=>{const a=ym(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Yi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};fR(a)||(u={...u,...hR(t,u)}),u.duration&&(u.duration=Yi(u.duration)),u.repeatDelay&&(u.repeatDelay=Yi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!s&&e.get()!==void 0){const d=Eu(u.keyframes,a);if(d!==void 0)return gt.update(()=>{u.onUpdate(d),u.onComplete()}),new LA([])}return!s&&J0.supports(u)?new J0(u):new Im(u)};function pR({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function EM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const h in l){const d=t.getValue(h,(s=t.latestValues[h])!==null&&s!==void 0?s:null),p=l[h];if(p===void 0||u&&pR(u,h))continue;const g={delay:n,...ym(o||{},h)};let S=!1;if(window.MotionHandoffAnimation){const f=YS(t);if(f){const m=window.MotionHandoffAnimation(f,h,gt);m!==null&&(g.startTime=m,S=!0)}}Kh(t,h),d.start(Um(h,d,p,t.shouldReduceMotion&&WS.has(h)?{type:!1}:g,t,S));const v=d.animation;v&&c.push(v)}return a&&Promise.all(c).then(()=>{gt.update(()=>{a&&XA(t,a)})}),c}function rf(t,e,n={}){var i;const r=Mu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(EM(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=s;return mR(t,e,u+c,h,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function mR(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(gR).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(rf(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function gR(t,e){return t.sortNodePosition(e)}function vR(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>rf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=rf(t,e,n);else{const r=typeof e=="function"?Mu(t,e,n.custom):e;i=Promise.all(EM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const _R=lm.length;function TM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?TM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<_R;n++){const i=lm[n],r=t.props[i];(ka(r)||r===!1)&&(e[i]=r)}return e}const xR=[...am].reverse(),yR=am.length;function SR(t){return e=>Promise.all(e.map(({animation:n,options:i})=>vR(t,n,i)))}function MR(t){let e=SR(t),n=ev(),i=!0;const r=l=>(c,u)=>{var h;const d=Mu(t,u,l==="exit"?(h=t.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:p,transitionEnd:g,...S}=d;c={...c,...S,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=TM(t.parent)||{},h=[],d=new Set;let p={},g=1/0;for(let v=0;v<yR;v++){const f=xR[v],m=n[f],y=c[f]!==void 0?c[f]:u[f],M=ka(y),b=f===l?m.isActive:null;b===!1&&(g=v);let T=y===u[f]&&y!==c[f]&&M;if(T&&i&&t.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...p},!m.isActive&&b===null||!y&&!m.prevProp||yu(y)||typeof y=="boolean")continue;const A=ER(m.prevProp,y);let _=A||f===l&&m.isActive&&!T&&M||v>g&&M,R=!1;const P=Array.isArray(y)?y:[y];let D=P.reduce(r(f),{});b===!1&&(D={});const{prevResolvedValues:U={}}=m,B={...U,...D},Y=k=>{_=!0,d.has(k)&&(R=!0,d.delete(k)),m.needsAnimating[k]=!0;const F=t.getValue(k);F&&(F.liveStyle=!1)};for(const k in B){const F=D[k],X=U[k];if(p.hasOwnProperty(k))continue;let Z=!1;Yh(F)&&Yh(X)?Z=!OS(F,X):Z=F!==X,Z?F!=null?Y(k):d.add(k):F!==void 0&&d.has(k)?Y(k):m.protectedKeys[k]=!0}m.prevProp=y,m.prevResolvedValues=D,m.isActive&&(p={...p,...D}),i&&t.blockInitialAnimation&&(_=!1),_&&(!(T&&A)||R)&&h.push(...P.map(k=>({animation:k,options:{type:f}})))}if(d.size){const v={};d.forEach(f=>{const m=t.getBaseTarget(f),y=t.getValue(f);y&&(y.liveStyle=!0),v[f]=m??null}),h.push({animation:v})}let S=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(h):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const h=o(l);for(const d in n)n[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=ev(),i=!0}}}function ER(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!OS(e,t):!1}function Xr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ev(){return{animate:Xr(!0),whileInView:Xr(),whileHover:Xr(),whileTap:Xr(),whileDrag:Xr(),whileFocus:Xr(),exit:Xr()}}class Gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class TR extends Gr{constructor(e){super(e),e.animationState||(e.animationState=MR(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();yu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let wR=0;class bR extends Gr{constructor(){super(...arguments),this.id=wR++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const AR={animation:{Feature:TR},exit:{Feature:bR}};function Ha(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function el(t){return{point:{x:t.pageX,y:t.pageY}}}const CR=t=>e=>Em(e)&&t(e,el(e));function _a(t,e,n,i){return Ha(t,e,CR(n),i)}const tv=(t,e)=>Math.abs(t-e);function RR(t,e){const n=tv(t.x,e.x),i=tv(t.y,e.y);return Math.sqrt(n**2+i**2)}class wM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=ud(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=RR(h.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:g}=h,{timestamp:S}=qt;this.history.push({...g,timestamp:S});const{onStart:v,onMove:f}=this.handlers;d||(v&&v(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=cd(d,this.transformPagePoint),gt.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=ud(h.type==="pointercancel"?this.lastMoveEventInfo:cd(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,v),g&&g(h,v)},!Em(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=el(e),a=cd(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=qt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,ud(a,this.history)),this.removeListeners=Ja(_a(this.contextWindow,"pointermove",this.handlePointerMove),_a(this.contextWindow,"pointerup",this.handlePointerUp),_a(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ur(this.updatePoint)}}function cd(t,e){return e?{point:e(t.point)}:t}function nv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ud({point:t},e){return{point:t,delta:nv(t,bM(e)),offset:nv(t,PR(e)),velocity:DR(e,.1)}}function PR(t){return t[0]}function bM(t){return t[t.length-1]}function DR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=bM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Yi(e)));)n--;if(!i)return{x:0,y:0};const s=qi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const AM=1e-4,LR=1-AM,NR=1+AM,CM=.01,IR=0-CM,UR=0+CM;function kn(t){return t.max-t.min}function FR(t,e,n){return Math.abs(t-e)<=n}function iv(t,e,n,i=.5){t.origin=i,t.originPoint=St(e.min,e.max,t.origin),t.scale=kn(n)/kn(e),t.translate=St(n.min,n.max,t.origin)-t.originPoint,(t.scale>=LR&&t.scale<=NR||isNaN(t.scale))&&(t.scale=1),(t.translate>=IR&&t.translate<=UR||isNaN(t.translate))&&(t.translate=0)}function xa(t,e,n,i){iv(t.x,e.x,n.x,i?i.originX:void 0),iv(t.y,e.y,n.y,i?i.originY:void 0)}function rv(t,e,n){t.min=n.min+e.min,t.max=t.min+kn(e)}function OR(t,e,n){rv(t.x,e.x,n.x),rv(t.y,e.y,n.y)}function sv(t,e,n){t.min=e.min-n.min,t.max=t.min+kn(e)}function ya(t,e,n){sv(t.x,e.x,n.x),sv(t.y,e.y,n.y)}function kR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?St(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?St(n,t,i.max):Math.min(t,n)),t}function ov(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function BR(t,{top:e,left:n,bottom:i,right:r}){return{x:ov(t.x,n,r),y:ov(t.y,e,i)}}function av(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function zR(t,e){return{x:av(t.x,e.x),y:av(t.y,e.y)}}function VR(t,e){let n=.5;const i=kn(t),r=kn(e);return r>i?n=Mo(e.min,e.max-i,t.min):i>r&&(n=Mo(t.min,t.max-r,e.min)),tr(0,1,n)}function HR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const sf=.35;function GR(t=sf){return t===!1?t=0:t===!0&&(t=sf),{x:lv(t,"left","right"),y:lv(t,"top","bottom")}}function lv(t,e,n){return{min:cv(t,e),max:cv(t,n)}}function cv(t,e){return typeof t=="number"?t:t[e]||0}const uv=()=>({translate:0,scale:1,origin:0,originPoint:0}),to=()=>({x:uv(),y:uv()}),dv=()=>({min:0,max:0}),Lt=()=>({x:dv(),y:dv()});function jn(t){return[t("x"),t("y")]}function RM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function jR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function WR(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function dd(t){return t===void 0||t===1}function of({scale:t,scaleX:e,scaleY:n}){return!dd(t)||!dd(e)||!dd(n)}function Jr(t){return of(t)||PM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function PM(t){return hv(t.x)||hv(t.y)}function hv(t){return t&&t!=="0%"}function $c(t,e,n){const i=t-n,r=e*i;return n+r}function fv(t,e,n,i,r){return r!==void 0&&(t=$c(t,r,i)),$c(t,n,i)+e}function af(t,e=0,n=1,i,r){t.min=fv(t.min,e,n,i,r),t.max=fv(t.max,e,n,i,r)}function DM(t,{x:e,y:n}){af(t.x,e.translate,e.scale,e.originPoint),af(t.y,n.translate,n.scale,n.originPoint)}const pv=.999999999999,mv=1.0000000000001;function XR(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&io(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,DM(t,o)),i&&Jr(s.latestValues)&&io(t,s.latestValues))}e.x<mv&&e.x>pv&&(e.x=1),e.y<mv&&e.y>pv&&(e.y=1)}function no(t,e){t.min=t.min+e,t.max=t.max+e}function gv(t,e,n,i,r=.5){const s=St(t.min,t.max,r);af(t,e,n,s,i)}function io(t,e){gv(t.x,e.x,e.scaleX,e.scale,e.originX),gv(t.y,e.y,e.scaleY,e.scale,e.originY)}function LM(t,e){return RM(WR(t.getBoundingClientRect(),e))}function YR(t,e,n){const i=LM(t,n),{scroll:r}=e;return r&&(no(i.x,r.offset.x),no(i.y,r.offset.y)),i}const NM=({current:t})=>t?t.ownerDocument.defaultView:null,qR=new WeakMap;class $R{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Lt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(el(u).point)},s=(u,h)=>{const{drag:d,dragPropagation:p,onDragStart:g}=this.getProps();if(d&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=VA(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jn(v=>{let f=this.getAxisMotionValue(v).get()||0;if(bi.test(f)){const{projection:m}=this.visualElement;if(m&&m.layout){const y=m.layout.layoutBox[v];y&&(f=kn(y)*(parseFloat(f)/100))}}this.originPoint[v]=f}),g&&gt.postRender(()=>g(u,h)),Kh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:g,onDrag:S}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:v}=h;if(p&&this.currentDirection===null){this.currentDirection=KR(v),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),S&&S(u,h)},a=(u,h)=>this.stop(u,h),l=()=>jn(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new wM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:NM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&gt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!bl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=kR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Js(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=BR(r.layoutBox,n):this.constraints=!1,this.elastic=GR(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&jn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=HR(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Js(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=YR(i,r.root,this.visualElement.getTransformPagePoint());let o=zR(r.layout.layoutBox,s);if(n){const a=n(jR(o));this.hasMutatedConstraints=!!a,a&&(o=RM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=jn(u=>{if(!bl(u,n,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Kh(this.visualElement,e),i.start(Um(e,i,0,n,this.visualElement,!1))}stopAnimation(){jn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){jn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){jn(n=>{const{drag:i}=this.getProps();if(!bl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-St(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Js(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};jn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=VR({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),jn(o=>{if(!bl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(St(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;qR.set(this.visualElement,this);const e=this.visualElement.current,n=_a(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Js(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),gt.read(i);const o=Ha(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(jn(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=sf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function bl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function KR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class ZR extends Gr{constructor(e){super(e),this.removeGroupControls=Un,this.removeListeners=Un,this.controls=new $R(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Un}unmount(){this.removeGroupControls(),this.removeListeners()}}const vv=t=>(e,n)=>{t&&gt.postRender(()=>t(e,n))};class QR extends Gr{constructor(){super(...arguments),this.removePointerDownListener=Un}onPointerDown(e){this.session=new wM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:NM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:vv(e),onStart:vv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&gt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=_a(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const dc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _v(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const jo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ce.test(t))t=parseFloat(t);else return t;const n=_v(t,e.target.x),i=_v(t,e.target.y);return`${n}% ${i}%`}},JR={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Fr.parse(t);if(r.length>5)return i;const s=Fr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=St(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class eP extends ee.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;yA(tP),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),dc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||gt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),um.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function IM(t){const[e,n]=gS(),i=ee.useContext(nm);return x.jsx(eP,{...t,layoutGroup:i,switchLayoutGroup:ee.useContext(TS),isPresent:e,safeToRemove:n})}const tP={borderRadius:{...jo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jo,borderTopRightRadius:jo,borderBottomLeftRadius:jo,borderBottomRightRadius:jo,boxShadow:JR};function nP(t,e,n){const i=an(t)?t:za(t);return i.start(Um("",i,e,n)),i.animation}function iP(t){return t instanceof SVGElement&&t.tagName!=="svg"}const rP=(t,e)=>t.depth-e.depth;class sP{constructor(){this.children=[],this.isDirty=!1}add(e){Tm(this.children,e),this.isDirty=!0}remove(e){wm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(rP),this.isDirty=!1,this.children.forEach(e)}}function oP(t,e){const n=Ai.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ur(i),t(s-e))};return gt.read(i,!0),()=>Ur(i)}const UM=["TopLeft","TopRight","BottomLeft","BottomRight"],aP=UM.length,xv=t=>typeof t=="string"?parseFloat(t):t,yv=t=>typeof t=="number"||Ce.test(t);function lP(t,e,n,i,r,s){r?(t.opacity=St(0,n.opacity!==void 0?n.opacity:1,cP(i)),t.opacityExit=St(e.opacity!==void 0?e.opacity:1,0,uP(i))):s&&(t.opacity=St(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<aP;o++){const a=`border${UM[o]}Radius`;let l=Sv(e,a),c=Sv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||yv(l)===yv(c)?(t[a]=Math.max(St(xv(l),xv(c),i),0),(bi.test(c)||bi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=St(e.rotate||0,n.rotate||0,i))}function Sv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const cP=FM(0,.5,eM),uP=FM(.5,.95,Un);function FM(t,e,n){return i=>i<t?0:i>e?1:n(Mo(t,e,i))}function Mv(t,e){t.min=e.min,t.max=e.max}function Hn(t,e){Mv(t.x,e.x),Mv(t.y,e.y)}function Ev(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Tv(t,e,n,i,r){return t-=e,t=$c(t,1/n,i),r!==void 0&&(t=$c(t,1/r,i)),t}function dP(t,e=0,n=1,i=.5,r,s=t,o=t){if(bi.test(e)&&(e=parseFloat(e),e=St(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=St(s.min,s.max,i);t===s&&(a-=e),t.min=Tv(t.min,e,n,a,r),t.max=Tv(t.max,e,n,a,r)}function wv(t,e,[n,i,r],s,o){dP(t,e[n],e[i],e[r],e.scale,s,o)}const hP=["x","scaleX","originX"],fP=["y","scaleY","originY"];function bv(t,e,n,i){wv(t.x,e,hP,n?n.x:void 0,i?i.x:void 0),wv(t.y,e,fP,n?n.y:void 0,i?i.y:void 0)}function Av(t){return t.translate===0&&t.scale===1}function OM(t){return Av(t.x)&&Av(t.y)}function Cv(t,e){return t.min===e.min&&t.max===e.max}function pP(t,e){return Cv(t.x,e.x)&&Cv(t.y,e.y)}function Rv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function kM(t,e){return Rv(t.x,e.x)&&Rv(t.y,e.y)}function Pv(t){return kn(t.x)/kn(t.y)}function Dv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class mP{constructor(){this.members=[]}add(e){Tm(this.members,e),e.scheduleRender()}remove(e){if(wm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function gP(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const es={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ra=typeof window<"u"&&window.MotionDebug!==void 0,hd=["","X","Y","Z"],vP={visibility:"hidden"},Lv=1e3;let _P=0;function fd(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function BM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=YS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",gt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&BM(i)}function zM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=_P++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ra&&(es.totalNodes=es.resolvedTargetDeltas=es.recalculatedProjection=0),this.nodes.forEach(SP),this.nodes.forEach(bP),this.nodes.forEach(AP),this.nodes.forEach(MP),ra&&window.MotionDebug.record(es)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new sP)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new bm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=iP(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=oP(d,250),dc.hasAnimatedSinceResize&&(dc.hasAnimatedSinceResize=!1,this.nodes.forEach(Iv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||u.getDefaultTransition()||LP,{onLayoutAnimationStart:v,onLayoutAnimationComplete:f}=u.getProps(),m=!this.targetLayout||!kM(this.targetLayout,g)||p,y=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||d&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,y);const M={...ym(S,"layout"),onPlay:v,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else d||Iv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(CP),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&BM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Nv);return}this.isUpdating||this.nodes.forEach(TP),this.isUpdating=!1,this.nodes.forEach(wP),this.nodes.forEach(xP),this.nodes.forEach(yP),this.clearAllSnapshots();const a=Ai.now();qt.delta=tr(0,1e3/60,a-qt.timestamp),qt.timestamp=a,qt.isProcessing=!0,id.update.process(qt),id.preRender.process(qt),id.render.process(qt),qt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,um.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(EP),this.sharedNodes.forEach(RP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){gt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Lt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!OM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Jr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),NP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Lt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(IP))){const{scroll:u}=this.root;u&&(no(l.x,u.offset.x),no(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Lt();if(Hn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&Hn(l,o),no(l.x,h.offset.x),no(l.y,h.offset.y))}return l}applyTransform(o,a=!1){const l=Lt();Hn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&io(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Jr(u.latestValues)&&io(l,u.latestValues)}return Jr(this.latestValues)&&io(l,this.latestValues),l}removeTransform(o){const a=Lt();Hn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Jr(c.latestValues))continue;of(c.latestValues)&&c.updateSnapshot();const u=Lt(),h=c.measurePageBox();Hn(u,h),bv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Jr(this.latestValues)&&bv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=qt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),ya(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Hn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Lt(),this.targetWithTransforms=Lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),OR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Hn(this.target,this.layout.layoutBox),DM(this.target,this.targetDelta)):Hn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),ya(this.relativeTargetOrigin,this.target,p.target),Hn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ra&&es.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||of(this.parent.latestValues)||PM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===qt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;Hn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;XR(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Lt());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ev(this.prevProjectionDelta.x,this.projectionDelta.x),Ev(this.prevProjectionDelta.y,this.projectionDelta.y)),xa(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!Dv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Dv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),ra&&es.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=to(),this.projectionDelta=to(),this.projectionDeltaWithTransform=to()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=to();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Lt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,S=p!==g,v=this.getStack(),f=!v||v.members.length<=1,m=!!(S&&!f&&this.options.crossfade===!0&&!this.path.some(DP));this.animationProgress=0;let y;this.mixTargetDelta=M=>{const b=M/1e3;Uv(h.x,o.x,b),Uv(h.y,o.y,b),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ya(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),PP(this.relativeTarget,this.relativeTargetOrigin,d,b),y&&pP(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Lt()),Hn(y,this.relativeTarget)),S&&(this.animationValues=u,lP(u,c,this.latestValues,b,m,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=gt.update(()=>{dc.hasAnimatedSinceResize=!0,this.currentAnimation=nP(0,Lv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&VM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Lt();const h=kn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=kn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Hn(a,l),io(a,u),xa(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new mP),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&fd("z",o,c,this.animationValues);for(let u=0;u<hd.length;u++)fd(`rotate${hd[u]}`,o,c,this.animationValues),fd(`skew${hd[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return vP;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=cc(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=cc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(S.transform=u?u({},""):"none",this.hasProjected=!1),S}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=gP(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const S in jc){if(d[S]===void 0)continue;const{correct:v,applyTo:f}=jc[S],m=c.transform==="none"?d[S]:v(d[S],h);if(f){const y=f.length;for(let M=0;M<y;M++)c[f[M]]=m}else c[S]=m}return this.options.layoutId&&(c.pointerEvents=h===this?cc(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Nv),this.root.sharedNodes.clear()}}}function xP(t){t.updateLayout()}function yP(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?jn(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],p=kn(d);d.min=i[h].min,d.max=d.min+p}):VM(s,n.layoutBox,i)&&jn(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],p=kn(i[h]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const a=to();xa(a,i,n.layoutBox);const l=to();o?xa(l,t.applyTransform(r,!0),n.measuredBox):xa(l,i,n.layoutBox);const c=!OM(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:p}=h;if(d&&p){const g=Lt();ya(g,n.layoutBox,d.layoutBox);const S=Lt();ya(S,i,p.layoutBox),kM(g,S)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=S,t.relativeTargetOrigin=g,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function SP(t){ra&&es.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function MP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function EP(t){t.clearSnapshot()}function Nv(t){t.clearMeasurements()}function TP(t){t.isLayoutDirty=!1}function wP(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Iv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function bP(t){t.resolveTargetDelta()}function AP(t){t.calcProjection()}function CP(t){t.resetSkewAndRotation()}function RP(t){t.removeLeadSnapshot()}function Uv(t,e,n){t.translate=St(e.translate,0,n),t.scale=St(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Fv(t,e,n,i){t.min=St(e.min,n.min,i),t.max=St(e.max,n.max,i)}function PP(t,e,n,i){Fv(t.x,e.x,n.x,i),Fv(t.y,e.y,n.y,i)}function DP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const LP={duration:.45,ease:[.4,0,.1,1]},Ov=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),kv=Ov("applewebkit/")&&!Ov("chrome/")?Math.round:Un;function Bv(t){t.min=kv(t.min),t.max=kv(t.max)}function NP(t){Bv(t.x),Bv(t.y)}function VM(t,e,n){return t==="position"||t==="preserve-aspect"&&!FR(Pv(e),Pv(n),.2)}function IP(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const UP=zM({attachResizeListener:(t,e)=>Ha(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),pd={current:void 0},HM=zM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!pd.current){const t=new UP({});t.mount(window),t.setOptions({layoutScroll:!0}),pd.current=t}return pd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),FP={pan:{Feature:QR},drag:{Feature:ZR,ProjectionNode:HM,MeasureLayout:IM}};function zv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&gt.postRender(()=>s(e,el(e)))}class OP extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=FA(e,n=>(zv(this.node,n,"Start"),i=>zv(this.node,i,"End"))))}unmount(){}}class kP extends Gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ja(Ha(this.node.current,"focus",()=>this.onFocus()),Ha(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Vv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&gt.postRender(()=>s(e,el(e)))}class BP extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=zA(e,n=>(Vv(this.node,n,"Start"),(i,{success:r})=>Vv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const lf=new WeakMap,md=new WeakMap,zP=t=>{const e=lf.get(t.target);e&&e(t)},VP=t=>{t.forEach(zP)};function HP({root:t,...e}){const n=t||document;md.has(n)||md.set(n,{});const i=md.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(VP,{root:t,...e})),i[r]}function GP(t,e,n){const i=HP(e);return lf.set(t,n),i.observe(t),()=>{lf.delete(t),i.unobserve(t)}}const jP={some:0,all:1};class WP extends Gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:jP[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return GP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(XP(e,n))&&this.startObserver()}unmount(){}}function XP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const YP={inView:{Feature:WP},tap:{Feature:BP},focus:{Feature:kP},hover:{Feature:OP}},qP={layout:{ProjectionNode:HM,MeasureLayout:IM}},cf={current:null},GM={current:!1};function $P(){if(GM.current=!0,!!sm)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>cf.current=t.matches;t.addListener(e),e()}else cf.current=!1}const KP=[...pM,sn,Fr],ZP=t=>KP.find(fM(t)),Hv=new WeakMap;function QP(t,e,n){for(const i in e){const r=e[i],s=n[i];if(an(r))t.addValue(i,r);else if(an(s))t.addValue(i,za(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,za(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Gv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class JP{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Lm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Ai.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,gt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Su(n),this.isVariantNode=MS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const g=d[p];l[p]!==void 0&&an(g)&&g.set(l[p],!1)}}mount(e){this.current=e,Hv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),GM.current||$P(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:cf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Hv.delete(this.current),this.projection&&this.projection.unmount(),Ur(this.notifyUpdate),Ur(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Ms.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&gt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Eo){const n=Eo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Lt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Gv.length;i++){const r=Gv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=QP(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=za(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(dM(r)||nM(r))?r=parseFloat(r):!ZP(r)&&Fr.test(n)&&(r=lM(e,n)),this.setBaseTarget(e,an(r)?r.get():r)),an(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=hm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!an(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new bm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class jM extends JP{constructor(){super(...arguments),this.KeyframeResolver=mM}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;an(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function e2(t){return window.getComputedStyle(t)}class t2 extends jM{constructor(){super(...arguments),this.type="html",this.renderInstance=DS}readValueFromInstance(e,n){if(Ms.has(n)){const i=Dm(n);return i&&i.default||0}else{const i=e2(e),r=(CS(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return LM(e,n)}build(e,n,i){mm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return xm(e,n,i)}}class n2 extends jM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Lt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ms.has(n)){const i=Dm(n);return i&&i.default||0}return n=LS.has(n)?n:cm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return US(e,n,i)}build(e,n,i){gm(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){NS(e,n,i,r)}mount(e){this.isSVGTag=_m(e.tagName),super.mount(e)}}const i2=(t,e)=>dm(t)?new n2(e):new t2(e,{allowProjection:t!==ee.Fragment}),r2=RA({...AR,...YP,...FP,...qP},i2),fn=jb(r2),s2={hidden:{opacity:0,y:36},visible:(t=0)=>({opacity:1,y:0,transition:{duration:.7,delay:t,ease:[.22,1,.36,1]}})};function $t({children:t,className:e,delay:n=0,as:i="div",...r}){const s=fn[i];return x.jsx(s,{className:e,custom:n,variants:s2,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},...r,children:t})}const o2=[{icon:uS,title:"1. Robot is not turning ON",points:["Make sure the battery is charged","Connect to charger and try again","Check if power switch is ON"]},{icon:Zw,title:"2. Screen is not turning ON",points:["Charge the battery fully","Restart the robot","Ensure all connections are proper"]},{icon:rb,title:"3. Robot is not charging",points:["Use a good quality USB cable","Check charging module connection","Try a different charger"]},{icon:Zp,title:"4. Touch is not working",points:["Make sure your finger is clean and dry","Touch properly on the sensor area","Restart the robot"]},{icon:Jp,title:"5. No sound from buzzer",points:["Restart the robot","Contact support"]},{icon:Qp,title:"6. Two RoboMitra are not connecting",points:["Bring both robots closer","Restart both devices","Wait a few seconds for auto connect"]},{icon:cb,title:"7. Robot keeps restarting",points:["Battery may be low","Charge fully before use"]}],a2=[{icon:Ow,title:"Built From A Simple Idea",text:"RoboMitra started with one question: why should smart companion robots be expensive? The project is focused on making them more affordable and accessible."},{icon:Wh,title:"More Than A Gadget",text:"RoboMitra is designed as a small desk companion that reacts, expresses, and interacts through touch, sound, and smart behavior."},{icon:hS,title:"Technology That Feels Human",text:"Our mission is to make technology more human, more fun, and more approachable for everyday use."},{icon:Rw,title:"Designed And Assembled In India",text:"We focus on creativity, simplicity, and continuous improvement while building and assembling our products in India."},{icon:Qp,title:"Interactive Future",text:"When two RoboMitra devices come close, they can interact with each other, creating a fun and unique shared experience."},{icon:Sb,title:"Just The Beginning",text:"We aim to improve RoboMitra with better design, smarter features, and more interactive capabilities in the future."}];function l2({onNavigate:t,cartCount:e,onCartClick:n,user:i,onLoginClick:r}){return x.jsxs("div",{className:"page-shell",children:[x.jsx(tm,{ariaLabel:"About navigation",onNavigate:t,theme:"light",onToggleTheme:()=>{},links:[],cartCount:e,onCartClick:n,user:i,onLoginClick:r}),x.jsxs("main",{className:"support-main",children:[x.jsxs($t,{className:"support-hero",delay:.04,children:[x.jsx("p",{className:"section-tag",children:"About RoboMitra"}),x.jsx("h2",{children:"Small, interactive, affordable smart robots made for everyday joy."}),x.jsx("p",{className:"hero-text",children:"RoboMitra is a small innovation project focused on creating simple, interactive, and affordable smart robots for everyday use."})]}),x.jsxs($t,{className:"about-story-card",delay:.08,children:[x.jsxs("div",{className:"support-card-head",children:[x.jsx("div",{className:"icon-wrap support-head-icon",children:x.jsx(pS,{size:20})}),x.jsxs("div",{children:[x.jsx("p",{className:"section-tag",children:"Our story"}),x.jsx("h3",{children:"Why RoboMitra exists"})]})]}),x.jsxs("div",{className:"about-story-copy",children:[x.jsx("p",{children:"We started with a simple idea: smart companion robots should not be out of reach. Our goal is to bring fun, expressive, and engaging robots to everyone at a budget-friendly price."}),x.jsx("p",{children:"RoboMitra is not just a gadget. It is a small desk companion designed to react, express, and interact with you through touch, sound, and smart behavior."}),x.jsx("p",{children:"When two RoboMitra devices come close, they can even interact with each other, creating a unique and playful experience."})]})]}),x.jsxs("section",{className:"faq-section",children:[x.jsxs($t,{className:"faq-intro",delay:.1,children:[x.jsx("p",{className:"section-tag",children:"What we believe"}),x.jsx("h2",{children:"Making technology more fun, accessible, and human."})]}),x.jsx("div",{className:"faq-grid",children:a2.map(({icon:s,title:o,text:a},l)=>x.jsxs($t,{as:"article",className:"faq-card",delay:.05*(l+1),children:[x.jsxs("div",{className:"support-card-head",children:[x.jsx("div",{className:"icon-wrap support-head-icon",children:x.jsx(s,{size:20})}),x.jsx("h3",{children:o})]}),x.jsx("p",{className:"about-card-text",children:a})]},o))})]}),x.jsxs($t,{className:"support-help-card",delay:.12,children:[x.jsxs("div",{className:"support-card-head",children:[x.jsx("div",{className:"icon-wrap support-head-icon",children:x.jsx(hS,{size:20})}),x.jsxs("div",{children:[x.jsx("p",{className:"section-tag",children:"Thank you"}),x.jsx("h3",{children:"This is just the beginning."})]})]}),x.jsx("p",{className:"support-help-note",children:"Thank you for supporting RoboMitra. We are continuing to improve the product with better design, smarter features, and more interactive capabilities in the future."})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fm="184",ho={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},c2=0,jv=1,u2=2,hc=1,d2=2,sa=3,Or=0,bn=1,Hi=2,$i=0,fo=1,Wv=2,Xv=3,Yv=4,h2=5,ts=100,f2=101,p2=102,m2=103,g2=104,v2=200,_2=201,x2=202,y2=203,uf=204,df=205,S2=206,M2=207,E2=208,T2=209,w2=210,b2=211,A2=212,C2=213,R2=214,hf=0,ff=1,pf=2,wo=3,mf=4,gf=5,vf=6,_f=7,WM=0,P2=1,D2=2,Ci=0,XM=1,YM=2,qM=3,$M=4,KM=5,ZM=6,QM=7,JM=300,_s=301,bo=302,gd=303,vd=304,Tu=306,xf=1e3,Wi=1001,yf=1002,Kt=1003,L2=1004,Al=1005,ln=1006,_d=1007,as=1008,Ln=1009,e1=1010,t1=1011,Ga=1012,Om=1013,Pi=1014,Mi=1015,nr=1016,km=1017,Bm=1018,ja=1020,n1=35902,i1=35899,r1=1021,s1=1022,ai=1023,ir=1026,ls=1027,o1=1028,zm=1029,xs=1030,Vm=1031,Hm=1033,fc=33776,pc=33777,mc=33778,gc=33779,Sf=35840,Mf=35841,Ef=35842,Tf=35843,wf=36196,bf=37492,Af=37496,Cf=37488,Rf=37489,Kc=37490,Pf=37491,Df=37808,Lf=37809,Nf=37810,If=37811,Uf=37812,Ff=37813,Of=37814,kf=37815,Bf=37816,zf=37817,Vf=37818,Hf=37819,Gf=37820,jf=37821,Wf=36492,Xf=36494,Yf=36495,qf=36283,$f=36284,Zc=36285,Kf=36286,N2=3200,Zf=0,I2=1,Sr="",yn="srgb",Qc="srgb-linear",Jc="linear",nt="srgb",bs=7680,qv=519,U2=512,F2=513,O2=514,Gm=515,k2=516,B2=517,jm=518,z2=519,$v=35044,Kv="300 es",Ei=2e3,Wa=2001;function V2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function eu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function H2(){const t=eu("canvas");return t.style.display="block",t}const Zv={};function Qv(...t){const e="THREE."+t.shift();console.log(e,...t)}function a1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Pe(...t){t=a1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=a1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Qf(...t){const e=t.join(" ");e in Zv||(Zv[e]=!0,Pe(...t))}function G2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const j2={[hf]:ff,[pf]:vf,[mf]:_f,[wo]:gf,[ff]:hf,[vf]:pf,[_f]:mf,[gf]:wo};class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,Jf=180/Math.PI;function tl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function W2(t,e){return(t%e+e)%e}function xd(t,e,n){return(1-n)*t+n*e}function Wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const X2={DEG2RAD:vc},Zm=class Zm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zm.prototype.isVector2=!0;let Be=Zm;class kr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],S=s[o+3];if(h!==S||l!==d||c!==p||u!==g){let v=l*d+c*p+u*g+h*S;v<0&&(d=-d,p=-p,g=-g,S=-S,v=-v);let f=1-a;if(v<.9995){const m=Math.acos(v),y=Math.sin(m);f=Math.sin(f*m)/y,a=Math.sin(a*m)/y,l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+S*a}else{l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+S*a;const m=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=m,c*=m,u*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qm=class Qm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qm.prototype.isVector3=!0;let V=Qm;const yd=new V,Jv=new kr,Jm=class Jm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],S=r[0],v=r[3],f=r[6],m=r[1],y=r[4],M=r[7],b=r[2],T=r[5],A=r[8];return s[0]=o*S+a*m+l*b,s[3]=o*v+a*y+l*T,s[6]=o*f+a*M+l*A,s[1]=c*S+u*m+h*b,s[4]=c*v+u*y+h*T,s[7]=c*f+u*M+h*A,s[2]=d*S+p*m+g*b,s[5]=d*v+p*y+g*T,s[8]=d*f+p*M+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=h*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Sd.makeScale(e,n)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Sd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jm.prototype.isMatrix3=!0;let Fe=Jm;const Sd=new Fe,e_=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t_=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y2(){const t={enabled:!0,workingColorSpace:Qc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=po(r.r),r.g=po(r.g),r.b=po(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?Jc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qc]:{primaries:e,whitePoint:i,transfer:Jc,toXYZ:e_,fromXYZ:t_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:e_,fromXYZ:t_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),t}const Ke=Y2();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function po(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let As;class q2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=eu("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=eu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $2=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$2++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Md(r[o].image)):s.push(Md(r[o]))}else s=Md(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Md(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?q2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let K2=0;const Ed=new V;class mn extends jr{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Wi,r=Wi,s=ln,o=as,a=ai,l=Ln,c=mn.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=tl(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==JM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=JM;mn.DEFAULT_ANISOTROPY=1;const eg=class eg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],S=l[2],v=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(p+1)/2,b=(f+1)/2,T=(u+d)/4,A=(h+S)/4,_=(g+v)/4;return y>M&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=A/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=_/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-g)*(v-g)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(h-S)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eg.prototype.isVector4=!0;let Ct=eg;class Z2 extends jr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new mn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Wm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Z2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class l1 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q2 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tu=class tu{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,g,S,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,S,v)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,S,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=S,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,S=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-S*c,n[9]=-a*l,n[2]=S-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,S=c*h;n[0]=d+S*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=S+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,S=c*h;n[0]=d-S*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=S-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,S=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=S-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-S*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+S,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J2,e,e3)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),cr.crossVectors(i,Rn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),cr.crossVectors(i,Rn)),cr.normalize(),Cl.crossVectors(Rn,cr),r[0]=cr.x,r[4]=Cl.x,r[8]=Rn.x,r[1]=cr.y,r[5]=Cl.y,r[9]=Rn.y,r[2]=cr.z,r[6]=Cl.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],S=i[6],v=i[10],f=i[14],m=i[3],y=i[7],M=i[11],b=i[15],T=r[0],A=r[4],_=r[8],R=r[12],P=r[1],D=r[5],U=r[9],B=r[13],Y=r[2],I=r[6],H=r[10],k=r[14],F=r[3],X=r[7],Z=r[11],ae=r[15];return s[0]=o*T+a*P+l*Y+c*F,s[4]=o*A+a*D+l*I+c*X,s[8]=o*_+a*U+l*H+c*Z,s[12]=o*R+a*B+l*k+c*ae,s[1]=u*T+h*P+d*Y+p*F,s[5]=u*A+h*D+d*I+p*X,s[9]=u*_+h*U+d*H+p*Z,s[13]=u*R+h*B+d*k+p*ae,s[2]=g*T+S*P+v*Y+f*F,s[6]=g*A+S*D+v*I+f*X,s[10]=g*_+S*U+v*H+f*Z,s[14]=g*R+S*B+v*k+f*ae,s[3]=m*T+y*P+M*Y+b*F,s[7]=m*A+y*D+M*I+b*X,s[11]=m*_+y*U+M*H+b*Z,s[15]=m*R+y*B+M*k+b*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],S=e[7],v=e[11],f=e[15],m=l*p-c*d,y=a*p-c*h,M=a*d-l*h,b=o*p-c*u,T=o*d-l*u,A=o*h-a*u;return n*(S*m-v*y+f*M)-i*(g*m-v*b+f*T)+r*(g*y-S*b+f*A)-s*(g*M-S*T+v*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],S=e[13],v=e[14],f=e[15],m=n*a-i*o,y=n*l-r*o,M=n*c-s*o,b=i*l-r*a,T=i*c-s*a,A=r*c-s*l,_=u*S-h*g,R=u*v-d*g,P=u*f-p*g,D=h*v-d*S,U=h*f-p*S,B=d*f-p*v,Y=m*B-y*U+M*D+b*P-T*R+A*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/Y;return e[0]=(a*B-l*U+c*D)*I,e[1]=(r*U-i*B-s*D)*I,e[2]=(S*A-v*T+f*b)*I,e[3]=(d*T-h*A-p*b)*I,e[4]=(l*P-o*B-c*R)*I,e[5]=(n*B-r*P+s*R)*I,e[6]=(v*M-g*A-f*y)*I,e[7]=(u*A-d*M+p*y)*I,e[8]=(o*U-a*P+c*_)*I,e[9]=(i*P-n*U-s*_)*I,e[10]=(g*T-S*M+f*m)*I,e[11]=(h*M-u*T-p*m)*I,e[12]=(a*R-o*D-l*_)*I,e[13]=(n*D-i*R+r*_)*I,e[14]=(S*y-g*b-v*m)*I,e[15]=(u*b-h*y+d*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,S=o*u,v=o*h,f=a*h,m=l*c,y=l*u,M=l*h,b=i.x,T=i.y,A=i.z;return r[0]=(1-(S+f))*b,r[1]=(p+M)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(d+f))*T,r[6]=(v+m)*T,r[7]=0,r[8]=(g+y)*A,r[9]=(v-m)*A,r[10]=(1-(d+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Cs.set(r[0],r[1],r[2]).length();const a=Cs.set(r[4],r[5],r[6]).length(),l=Cs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Jn.copy(this);const c=1/o,u=1/a,h=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,n.setFromRotationMatrix(Jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,S;if(l)g=s/(o-s),S=o*s/(o-s);else if(a===Ei)g=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Wa)g=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,S;if(l)g=1/(o-s),S=o/(o-s);else if(a===Ei)g=-2/(o-s),S=-(o+s)/(o-s);else if(a===Wa)g=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};tu.prototype.isMatrix4=!0;let It=tu;const Cs=new V,Jn=new It,J2=new V(0,0,0),e3=new V(1,1,1),cr=new V,Cl=new V,Rn=new V,n_=new It,i_=new kr;class Br{constructor(e=0,n=0,i=0,r=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return n_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return i_.setFromEuler(this),this.setFromQuaternion(i_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class c1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t3=0;const r_=new V,Rs=new kr,Ii=new It,Rl=new V,Xo=new V,n3=new V,i3=new kr,s_=new V(1,0,0),o_=new V(0,1,0),a_=new V(0,0,1),l_={type:"added"},r3={type:"removed"},Ps={type:"childadded",child:null},Td={type:"childremoved",child:null};class cn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t3++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new V,n=new Br,i=new kr,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Fe}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(s_,e)}rotateY(e){return this.rotateOnAxis(o_,e)}rotateZ(e){return this.rotateOnAxis(a_,e)}translateOnAxis(e,n){return r_.copy(e).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(s_,e)}translateY(e){return this.translateOnAxis(o_,e)}translateZ(e){return this.translateOnAxis(a_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rl.copy(e):Rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Xo,Rl,this.up):Ii.lookAt(Rl,Xo,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(r3),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,n3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,i3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new V(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pl extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s3={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const v=n.getJointPose(S,i),f=this._getHandJoint(c,S);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const u1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function bd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=W2(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bd(o,s,e+1/3),this.g=bd(o,s,e),this.b=bd(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=u1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Ke.workingToColorSpace(rn.copy(this),e),Math.round(We(rn.r*255,0,255))*65536+Math.round(We(rn.g*255,0,255))*256+Math.round(We(rn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=yn){Ke.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(Dl);const i=xd(ur.h,Dl.h,n),r=xd(ur.s,Dl.s,n),s=xd(ur.l,Dl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new tt;tt.NAMES=u1;class o3 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ei=new V,Ui=new V,Ad=new V,Fi=new V,Ds=new V,Ls=new V,c_=new V,Cd=new V,Rd=new V,Pd=new V,Dd=new Ct,Ld=new Ct,Nd=new Ct;class oi{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Ui.subVectors(i,n),Ad.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Ui),l=ei.dot(Ad),c=Ui.dot(Ui),u=Ui.dot(Ad),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Dd.setScalar(0),Ld.setScalar(0),Nd.setScalar(0),Dd.fromBufferAttribute(e,n),Ld.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Dd,s.x),o.addScaledVector(Ld,s.y),o.addScaledVector(Nd,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ui.subVectors(e,n),ei.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ei.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Ls.subVectors(s,i),Cd.subVectors(e,i);const l=Ds.dot(Cd),c=Ls.dot(Cd);if(l<=0&&c<=0)return n.copy(i);Rd.subVectors(e,r);const u=Ds.dot(Rd),h=Ls.dot(Rd);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ds,o);Pd.subVectors(e,s);const p=Ds.dot(Pd),g=Ls.dot(Pd);if(g>=0&&p<=g)return n.copy(s);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ls,a);const v=u*g-p*h;if(v<=0&&h-u>=0&&p-g>=0)return c_.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(c_,a);const f=1/(v+S+d);return o=S*f,a=d*f,n.copy(i).addScaledVector(Ds,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Io{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Nl.subVectors(this.max,Yo),Ns.subVectors(e.a,Yo),Is.subVectors(e.b,Yo),Us.subVectors(e.c,Yo),dr.subVectors(Is,Ns),hr.subVectors(Us,Is),Yr.subVectors(Ns,Us);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Yr.z,Yr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Yr.z,0,-Yr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Yr.y,Yr.x,0];return!Id(n,Ns,Is,Us,Nl)||(n=[1,0,0,0,1,0,0,0,1],!Id(n,Ns,Is,Us,Nl))?!1:(Il.crossVectors(dr,hr),n=[Il.x,Il.y,Il.z],Id(n,Ns,Is,Us,Nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new V,new V,new V,new V,new V,new V,new V,new V],ti=new V,Ll=new Io,Ns=new V,Is=new V,Us=new V,dr=new V,hr=new V,Yr=new V,Yo=new V,Nl=new V,Il=new V,qr=new V;function Id(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){qr.fromArray(t,s);const a=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=e.dot(qr),c=n.dot(qr),u=i.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ut=new V,Ul=new Be;let a3=0;class Fn extends jr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$v,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ul.fromBufferAttribute(this,n),Ul.applyMatrix3(e),this.setXY(n,Ul.x,Ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$v&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class d1 extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class h1 extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class di extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const l3=new Io,qo=new V,Ud=new V;class Xm{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):l3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const n=qo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Ud)),this.expandByPoint(qo.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let c3=0;const Gn=new It,Fd=new cn,Fs=new V,Pn=new Io,$o=new Io,jt=new V;class fi extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c3++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V2(e)?h1:d1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new di(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Pn.min,$o.min),Pn.expandByPoint(jt),jt.addVectors(Pn.max,$o.max),Pn.expandByPoint(jt)):(Pn.expandByPoint($o.min),Pn.expandByPoint($o.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),jt.add(Fs)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new V,l[_]=new V;const c=new V,u=new V,h=new V,d=new Be,p=new Be,g=new Be,S=new V,v=new V;function f(_,R,P){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,P),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[_].add(S),a[R].add(S),a[P].add(S),l[_].add(v),l[R].add(v),l[P].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let _=0,R=m.length;_<R;++_){const P=m[_],D=P.start,U=P.count;for(let B=D,Y=D+U;B<Y;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new V,M=new V,b=new V,T=new V;function A(_){b.fromBufferAttribute(r,_),T.copy(b);const R=a[_];y.copy(R),y.sub(b.multiplyScalar(b.dot(R))).normalize(),M.crossVectors(T,R);const D=M.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,D)}for(let _=0,R=m.length;_<R;++_){const P=m[_],D=P.start,U=P.count;for(let B=D,Y=D+U;B<Y;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),S=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,v=l.length;S<v;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Fn(d,u,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let u3=0;class nl extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u3++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=fo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=df,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Pe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uf&&(i.blendSrc=this.blendSrc),this.blendDst!==df&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new V,Od=new V,Fl=new V,fr=new V,kd=new V,Ol=new V,Bd=new V;class f1{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Od.copy(e).add(n).multiplyScalar(.5),Fl.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Od);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fl),a=fr.dot(this.direction),l=-fr.dot(Fl),c=fr.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const S=1/u;h*=S,d*=S,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Od).addScaledVector(Fl,d),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){kd.subVectors(n,e),Ol.subVectors(i,e),Bd.crossVectors(kd,Ol);let o=this.direction.dot(Bd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Ol.crossVectors(fr,Ol));if(l<0)return null;const c=a*this.direction.dot(kd.cross(fr));if(c<0||l+c>o)return null;const u=-a*fr.dot(Bd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class p1 extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=WM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const u_=new It,$r=new f1,kl=new Xm,d_=new V,Bl=new V,zl=new V,Vl=new V,zd=new V,Hl=new V,h_=new V,Gl=new V;class Di extends cn{constructor(e=new fi,n=new p1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(zd.fromBufferAttribute(h,e),o?Hl.addScaledVector(zd,u):Hl.addScaledVector(zd.sub(n),u))}n.add(Hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(kl.containsPoint($r.origin)===!1&&($r.intersectSphere(kl,d_)===null||$r.origin.distanceToSquared(d_)>(e.far-e.near)**2))&&(u_.copy(s).invert(),$r.copy(e.ray).applyMatrix4(u_),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=d.length;g<S;g++){const v=d[g],f=o[v.materialIndex],m=Math.max(v.start,p.start),y=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,b=y;M<b;M+=3){const T=a.getX(M),A=a.getX(M+1),_=a.getX(M+2);r=jl(this,f,e,i,c,u,h,T,A,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let v=g,f=S;v<f;v+=3){const m=a.getX(v),y=a.getX(v+1),M=a.getX(v+2);r=jl(this,o,e,i,c,u,h,m,y,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=d.length;g<S;g++){const v=d[g],f=o[v.materialIndex],m=Math.max(v.start,p.start),y=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,b=y;M<b;M+=3){const T=M,A=M+1,_=M+2;r=jl(this,f,e,i,c,u,h,T,A,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let v=g,f=S;v<f;v+=3){const m=v,y=v+1,M=v+2;r=jl(this,o,e,i,c,u,h,m,y,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function d3(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function jl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Bl),t.getVertexPosition(l,zl),t.getVertexPosition(c,Vl);const u=d3(t,e,n,i,Bl,zl,Vl,h_);if(u){const h=new V;oi.getBarycoord(h_,Bl,zl,Vl,h),r&&(u.uv=oi.getInterpolatedAttribute(r,a,l,c,h,new Be)),s&&(u.uv1=oi.getInterpolatedAttribute(s,a,l,c,h,new Be)),o&&(u.normal=oi.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};oi.getNormal(Bl,zl,Vl,d.normal),u.face=d,u.barycoord=h}return u}class h3 extends mn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,u=Kt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new V,f3=new V,p3=new Fe;class _r{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vd.subVectors(i,n).cross(f3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Vd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||p3.getNormalMatrix(e),r=this.coplanarPoint(Vd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Xm,m3=new Be(.5,.5),Wl=new V;class Ym{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],S=s[9],v=s[10],f=s[11],m=s[12],y=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-o,p-u,f-g,b-m).normalize(),r[1].setComponents(c+o,p+u,f+g,b+m).normalize(),r[2].setComponents(c+a,p+h,f+S,b+y).normalize(),r[3].setComponents(c-a,p-h,f-S,b-y).normalize(),i)r[4].setComponents(l,d,v,M).normalize(),r[5].setComponents(c-l,p-d,f-v,b-M).normalize();else if(r[4].setComponents(c-l,p-d,f-v,b-M).normalize(),n===Ei)r[5].setComponents(c+l,p+d,f+v,b+M).normalize();else if(n===Wa)r[5].setComponents(l,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=m3.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Wl.x=r.normal.x>0?e.max.x:e.min.x,Wl.y=r.normal.y>0?e.max.y:e.min.y,Wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class m1 extends mn{constructor(e=[],n=_s,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ao extends mn{constructor(e,n,i=Pi,r,s,o,a=Kt,l=Kt,c,u=ir,h=1){if(u!==ir&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class g3 extends Ao{constructor(e,n=Pi,i=_s,r,s,o=Kt,a=Kt,l,c=ir){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class g1 extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class il extends fi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(h,2));function g(S,v,f,m,y,M,b,T,A,_,R){const P=M/A,D=b/_,U=M/2,B=b/2,Y=T/2,I=A+1,H=_+1;let k=0,F=0;const X=new V;for(let Z=0;Z<H;Z++){const ae=Z*D-B;for(let fe=0;fe<I;fe++){const Ge=fe*P-U;X[S]=Ge*m,X[v]=ae*y,X[f]=Y,c.push(X.x,X.y,X.z),X[S]=0,X[v]=0,X[f]=T>0?1:-1,u.push(X.x,X.y,X.z),h.push(fe/A),h.push(1-Z/_),k+=1}}for(let Z=0;Z<_;Z++)for(let ae=0;ae<A;ae++){const fe=d+ae+I*Z,Ge=d+ae+I*(Z+1),Ye=d+(ae+1)+I*(Z+1),Ne=d+(ae+1)+I*Z;l.push(fe,Ge,Ne),l.push(Ge,Ye,Ne),F+=6}a.addGroup(p,F,R),p+=F,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wu extends fi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],S=[],v=[];for(let f=0;f<u;f++){const m=f*d-o;for(let y=0;y<c;y++){const M=y*h-s;g.push(M,-m,0),S.push(0,0,1),v.push(y/a),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){const y=m+c*f,M=m+c*(f+1),b=m+1+c*(f+1),T=m+1+c*f;p.push(y,M,T),p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(S,3)),this.setAttribute("uv",new di(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(f_(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(f_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=Co(t[n]);for(const r in i)e[r]=i[r]}return e}function f_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function v3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function v1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const _3={clone:Co,merge:dn};var x3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x3,this.fragmentShader=y3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=v3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class S3 extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class M3 extends nl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class E3 extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T3 extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(m_(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!m_(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function m_(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class w3{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const b3=new w3;class qm{constructor(e){this.manager=e!==void 0?e:b3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class A3 extends Error{constructor(e,n){super(e),this.response=n}}class C3 extends qm{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=p_.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Bi[e]!==void 0){Bi[e].push({onLoad:n,onProgress:i,onError:r});return}Bi[e]=[],Bi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let S=0;const v=new ReadableStream({start(f){m();function m(){h.read().then(({done:y,value:M})=>{if(y)f.close();else{S+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:S,total:p});for(let T=0,A=u.length;T<A;T++){const _=u[T];_.onProgress&&_.onProgress(b)}f.enqueue(M),m()}},y=>{f.error(y)})}}});return new Response(v)}else throw new A3(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{p_.add(`file:${e}`,c);const u=Bi[e];delete Bi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class _1 extends cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Hd=new It,g_=new V,v_=new V;class R3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ym,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;g_.setFromMatrixPosition(e.matrixWorld),n.position.copy(g_),v_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(v_),n.updateMatrixWorld(),Hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Wa||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xl=new V,Yl=new kr,vi=new V;class x1 extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,Yl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,Yl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Xl,Yl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,Yl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new V,__=new Be,x_=new Be;class Yn extends x1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,__,x_),n.subVectors(x_,__)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class $m extends x1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class P3 extends R3{constructor(){super(new $m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y_ extends _1{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new P3}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class D3 extends _1{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Os=-90,ks=1;class L3 extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(Os,ks,e,n);r.layers=this.layers,this.add(r);const s=new Yn(Os,ks,e,n);s.layers=this.layers,this.add(s);const o=new Yn(Os,ks,e,n);o.layers=this.layers,this.add(o);const a=new Yn(Os,ks,e,n);a.layers=this.layers,this.add(a);const l=new Yn(Os,ks,e,n);l.layers=this.layers,this.add(l);const c=new Yn(Os,ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class N3 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class S_{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const tg=class tg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};tg.prototype.isMatrix2=!0;let M_=tg;class I3 extends jr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function E_(t,e,n,i){const r=U3(i);switch(n){case r1:return t*e;case o1:return t*e/r.components*r.byteLength;case zm:return t*e/r.components*r.byteLength;case xs:return t*e*2/r.components*r.byteLength;case Vm:return t*e*2/r.components*r.byteLength;case s1:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case Hm:return t*e*4/r.components*r.byteLength;case fc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:case Tf:return Math.max(t,16)*Math.max(e,8)/4;case Sf:case Ef:return Math.max(t,8)*Math.max(e,8)/2;case wf:case bf:case Cf:case Rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Af:case Kc:case Pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wf:case Xf:case Yf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case qf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zc:case Kf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function U3(t){switch(t){case Ln:case e1:return{byteLength:1,components:1};case Ga:case t1:case nr:return{byteLength:2,components:1};case km:case Bm:return{byteLength:2,components:4};case Pi:case Om:case Mi:return{byteLength:4,components:1};case n1:case i1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fm}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function F3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],S=h[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const S=h[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var O3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k3=`#ifdef USE_ALPHAHASH
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
#endif`,B3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G3=`#ifdef USE_AOMAP
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
#endif`,j3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W3=`#ifdef USE_BATCHING
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
#endif`,X3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K3=`#ifdef USE_IRIDESCENCE
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
#endif`,Z3=`#ifdef USE_BUMPMAP
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
#endif`,Q3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,oD=`#define PI 3.141592653589793
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
} // validated`,aD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lD=`vec3 transformedNormal = objectNormal;
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
#endif`,cD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fD="gl_FragColor = linearToOutputTexel( gl_FragColor );",pD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mD=`#ifdef USE_ENVMAP
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
#endif`,gD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vD=`#ifdef USE_ENVMAP
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
#endif`,_D=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xD=`#ifdef USE_ENVMAP
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
#endif`,yD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ED=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TD=`#ifdef USE_GRADIENTMAP
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
}`,wD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CD=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,RD=`#ifdef USE_ENVMAP
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
#endif`,PD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ND=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ID=`PhysicalMaterial material;
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
#endif`,UD=`uniform sampler2D dfgLUT;
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
}`,FD=`
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
#endif`,OD=`#if defined( RE_IndirectDiffuse )
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
#endif`,kD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BD=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YD=`#if defined( USE_POINTS_UV )
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
#endif`,qD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$D=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JD=`#ifdef USE_MORPHTARGETS
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
#endif`,eL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oL=`#ifdef USE_NORMALMAP
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
#endif`,aL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_L=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ML=`float getShadowMask() {
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
}`,EL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TL=`#ifdef USE_SKINNING
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
#endif`,wL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bL=`#ifdef USE_SKINNING
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
#endif`,AL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DL=`#ifdef USE_TRANSMISSION
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
#endif`,LL=`#ifdef USE_TRANSMISSION
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
#endif`,NL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kL=`uniform sampler2D t2D;
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
}`,BL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GL=`#include <common>
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
}`,jL=`#if DEPTH_PACKING == 3200
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
}`,WL=`#define DISTANCE
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
}`,XL=`#define DISTANCE
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
}`,YL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$L=`uniform float scale;
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
}`,KL=`uniform vec3 diffuse;
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
}`,ZL=`#include <common>
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
}`,QL=`uniform vec3 diffuse;
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
}`,JL=`#define LAMBERT
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
}`,eN=`#define LAMBERT
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
}`,tN=`#define MATCAP
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
}`,nN=`#define MATCAP
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
}`,iN=`#define NORMAL
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
}`,rN=`#define NORMAL
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
}`,sN=`#define PHONG
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
}`,oN=`#define PHONG
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
}`,aN=`#define STANDARD
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
}`,lN=`#define STANDARD
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
}`,cN=`#define TOON
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
}`,uN=`#define TOON
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
}`,dN=`uniform float size;
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
}`,hN=`uniform vec3 diffuse;
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
}`,fN=`#include <common>
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
}`,pN=`uniform vec3 color;
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
}`,mN=`uniform float rotation;
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
}`,gN=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:O3,alphahash_pars_fragment:k3,alphamap_fragment:B3,alphamap_pars_fragment:z3,alphatest_fragment:V3,alphatest_pars_fragment:H3,aomap_fragment:G3,aomap_pars_fragment:j3,batching_pars_vertex:W3,batching_vertex:X3,begin_vertex:Y3,beginnormal_vertex:q3,bsdfs:$3,iridescence_fragment:K3,bumpmap_pars_fragment:Z3,clipping_planes_fragment:Q3,clipping_planes_pars_fragment:J3,clipping_planes_pars_vertex:eD,clipping_planes_vertex:tD,color_fragment:nD,color_pars_fragment:iD,color_pars_vertex:rD,color_vertex:sD,common:oD,cube_uv_reflection_fragment:aD,defaultnormal_vertex:lD,displacementmap_pars_vertex:cD,displacementmap_vertex:uD,emissivemap_fragment:dD,emissivemap_pars_fragment:hD,colorspace_fragment:fD,colorspace_pars_fragment:pD,envmap_fragment:mD,envmap_common_pars_fragment:gD,envmap_pars_fragment:vD,envmap_pars_vertex:_D,envmap_physical_pars_fragment:RD,envmap_vertex:xD,fog_vertex:yD,fog_pars_vertex:SD,fog_fragment:MD,fog_pars_fragment:ED,gradientmap_pars_fragment:TD,lightmap_pars_fragment:wD,lights_lambert_fragment:bD,lights_lambert_pars_fragment:AD,lights_pars_begin:CD,lights_toon_fragment:PD,lights_toon_pars_fragment:DD,lights_phong_fragment:LD,lights_phong_pars_fragment:ND,lights_physical_fragment:ID,lights_physical_pars_fragment:UD,lights_fragment_begin:FD,lights_fragment_maps:OD,lights_fragment_end:kD,lightprobes_pars_fragment:BD,logdepthbuf_fragment:zD,logdepthbuf_pars_fragment:VD,logdepthbuf_pars_vertex:HD,logdepthbuf_vertex:GD,map_fragment:jD,map_pars_fragment:WD,map_particle_fragment:XD,map_particle_pars_fragment:YD,metalnessmap_fragment:qD,metalnessmap_pars_fragment:$D,morphinstance_vertex:KD,morphcolor_vertex:ZD,morphnormal_vertex:QD,morphtarget_pars_vertex:JD,morphtarget_vertex:eL,normal_fragment_begin:tL,normal_fragment_maps:nL,normal_pars_fragment:iL,normal_pars_vertex:rL,normal_vertex:sL,normalmap_pars_fragment:oL,clearcoat_normal_fragment_begin:aL,clearcoat_normal_fragment_maps:lL,clearcoat_pars_fragment:cL,iridescence_pars_fragment:uL,opaque_fragment:dL,packing:hL,premultiplied_alpha_fragment:fL,project_vertex:pL,dithering_fragment:mL,dithering_pars_fragment:gL,roughnessmap_fragment:vL,roughnessmap_pars_fragment:_L,shadowmap_pars_fragment:xL,shadowmap_pars_vertex:yL,shadowmap_vertex:SL,shadowmask_pars_fragment:ML,skinbase_vertex:EL,skinning_pars_vertex:TL,skinning_vertex:wL,skinnormal_vertex:bL,specularmap_fragment:AL,specularmap_pars_fragment:CL,tonemapping_fragment:RL,tonemapping_pars_fragment:PL,transmission_fragment:DL,transmission_pars_fragment:LL,uv_pars_fragment:NL,uv_pars_vertex:IL,uv_vertex:UL,worldpos_vertex:FL,background_vert:OL,background_frag:kL,backgroundCube_vert:BL,backgroundCube_frag:zL,cube_vert:VL,cube_frag:HL,depth_vert:GL,depth_frag:jL,distance_vert:WL,distance_frag:XL,equirect_vert:YL,equirect_frag:qL,linedashed_vert:$L,linedashed_frag:KL,meshbasic_vert:ZL,meshbasic_frag:QL,meshlambert_vert:JL,meshlambert_frag:eN,meshmatcap_vert:tN,meshmatcap_frag:nN,meshnormal_vert:iN,meshnormal_frag:rN,meshphong_vert:sN,meshphong_frag:oN,meshphysical_vert:aN,meshphysical_frag:lN,meshtoon_vert:cN,meshtoon_frag:uN,points_vert:dN,points_frag:hN,shadow_vert:fN,shadow_frag:pN,sprite_vert:mN,sprite_frag:gN},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},yi={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};yi.physical={uniforms:dn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ql={r:0,b:0,g:0},vN=new It,S1=new Fe;S1.set(-1,0,0,0,1,0,0,0,1);function _N(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,u=null,h=0,d=null;function p(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const M=m.backgroundBlurriness>0;y=e.get(y,M)}return y}function g(m){let y=!1;const M=p(m);M===null?v(o,a):M&&M.isColor&&(v(M,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(m,y){const M=p(y);M&&(M.isCubeTexture||M.mapping===Tu)?(c===void 0&&(c=new Di(new il(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Co(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vN.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(S1),c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,(u!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Di(new wu(2,2),new Li({name:"BackgroundMaterial",uniforms:Co(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,y){m.getRGB(ql,v1(t)),n.buffers.color.setClear(ql.r,ql.g,ql.b,y,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,y=1){o.set(m),a=y,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:g,addToRenderList:S,dispose:f}}function xN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(D,U,B,Y,I){let H=!1;const k=h(D,Y,B,U);s!==k&&(s=k,c(s.object)),H=p(D,Y,B,I),H&&g(D,Y,B,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(D,U,B,Y),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function h(D,U,B,Y){const I=Y.wireframe===!0;let H=i[U.id];H===void 0&&(H={},i[U.id]=H);const k=D.isInstancedMesh===!0?D.id:0;let F=H[k];F===void 0&&(F={},H[k]=F);let X=F[B.id];X===void 0&&(X={},F[B.id]=X);let Z=X[I];return Z===void 0&&(Z=d(l()),X[I]=Z),Z}function d(D){const U=[],B=[],Y=[];for(let I=0;I<n;I++)U[I]=0,B[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:Y,object:D,attributes:{},index:null}}function p(D,U,B,Y){const I=s.attributes,H=U.attributes;let k=0;const F=B.getAttributes();for(const X in F)if(F[X].location>=0){const ae=I[X];let fe=H[X];if(fe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;k++}return s.attributesNum!==k||s.index!==Y}function g(D,U,B,Y){const I={},H=U.attributes;let k=0;const F=B.getAttributes();for(const X in F)if(F[X].location>=0){let ae=H[X];ae===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),I[X]=fe,k++}s.attributes=I,s.attributesNum=k,s.index=Y}function S(){const D=s.newAttributes;for(let U=0,B=D.length;U<B;U++)D[U]=0}function v(D){f(D,0)}function f(D,U){const B=s.newAttributes,Y=s.enabledAttributes,I=s.attributeDivisors;B[D]=1,Y[D]===0&&(t.enableVertexAttribArray(D),Y[D]=1),I[D]!==U&&(t.vertexAttribDivisor(D,U),I[D]=U)}function m(){const D=s.newAttributes,U=s.enabledAttributes;for(let B=0,Y=U.length;B<Y;B++)U[B]!==D[B]&&(t.disableVertexAttribArray(B),U[B]=0)}function y(D,U,B,Y,I,H,k){k===!0?t.vertexAttribIPointer(D,U,B,I,H):t.vertexAttribPointer(D,U,B,Y,I,H)}function M(D,U,B,Y){S();const I=Y.attributes,H=B.getAttributes(),k=U.defaultAttributeValues;for(const F in H){const X=H[F];if(X.location>=0){let Z=I[F];if(Z===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const ae=Z.normalized,fe=Z.itemSize,Ge=e.get(Z);if(Ge===void 0)continue;const Ye=Ge.buffer,Ne=Ge.type,K=Ge.bytesPerElement,he=Ne===t.INT||Ne===t.UNSIGNED_INT||Z.gpuType===Om;if(Z.isInterleavedBufferAttribute){const le=Z.data,Re=le.stride,Ue=Z.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)f(X.location+De,le.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<X.locationSize;De++)v(X.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let De=0;De<X.locationSize;De++)y(X.location+De,fe/X.locationSize,Ne,ae,Re*K,(Ue+fe/X.locationSize*De)*K,he)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)f(X.location+le,Z.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<X.locationSize;le++)v(X.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let le=0;le<X.locationSize;le++)y(X.location+le,fe/X.locationSize,Ne,ae,fe*K,fe/X.locationSize*le*K,he)}}else if(k!==void 0){const ae=k[F];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(X.location,ae);break;case 3:t.vertexAttrib3fv(X.location,ae);break;case 4:t.vertexAttrib4fv(X.location,ae);break;default:t.vertexAttrib1fv(X.location,ae)}}}}m()}function b(){R();for(const D in i){const U=i[D];for(const B in U){const Y=U[B];for(const I in Y){const H=Y[I];for(const k in H)u(H[k].object),delete H[k];delete Y[I]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const U=i[D.id];for(const B in U){const Y=U[B];for(const I in Y){const H=Y[I];for(const k in H)u(H[k].object),delete H[k];delete Y[I]}}delete i[D.id]}function A(D){for(const U in i){const B=i[U];for(const Y in B){const I=B[Y];if(I[D.id]===void 0)continue;const H=I[D.id];for(const k in H)u(H[k].object),delete H[k];delete I[D.id]}}}function _(D){for(const U in i){const B=i[U],Y=D.isInstancedMesh===!0?D.id:0,I=B[Y];if(I!==void 0){for(const H in I){const k=I[H];for(const F in k)u(k[F].object),delete k[F];delete I[H]}delete B[Y],Object.keys(B).length===0&&delete i[U]}}}function R(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:v,disableUnusedAttributes:m}}function yN(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function SN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ai&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mi&&!_)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:T}}function MN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _r,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,S=h.clipIntersection,v=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!v)s?u(null):c();else{const m=s?0:i,y=m*4;let M=f.clippingState||null;l.value=M,M=u(g,d,y,p);for(let b=0;b!==y;++b)M[b]=n[b];f.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const S=h!==null?h.length:0;let v=null;if(S!==0){if(v=l.value,g!==!0||v===null){const f=p+S*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<f)&&(v=new Float32Array(f));for(let y=0,M=p;y!==S;++y,M+=4)o.copy(h[y]).applyMatrix4(m,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,v}}const Tr=4,T_=[.125,.215,.35,.446,.526,.582],ns=20,EN=256,Ko=new $m,w_=new tt;let Gd=null,jd=0,Wd=0,Xd=!1;const TN=new V;class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=TN}=s;Gd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,jd,Wd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:nr,format:ai,colorSpace:Qc,depthBuffer:!1},r=A_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wN(s)),this._blurMaterial=AN(s,e,n),this._ggxMaterial=bN(s,e,n)}return r}_compileMaterial(e){const n=new Di(new fi,e);this._renderer.compile(n,Ko)}_sceneToCubeUV(e,n,i,r,s){const l=new Yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(w_),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new il,new p1({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,v=S.material;let f=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,f=!0):(v.color.copy(w_),f=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;Bs(r,M*b,y>2?b:0,b,b),h.setRenderTarget(r),f&&h.render(S,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_s||e.mapping===bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ko)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:g}=this,S=this._sizeLods[i],v=3*S*(i>g-Tr?i-g+Tr:0),f=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Bs(s,v,f,3*S,2*S),r.setRenderTarget(s),r.render(a,Ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Bs(e,v,f,3*S,2*S),r.setRenderTarget(e),r.render(a,Ko)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ns-1),S=s/g,v=isFinite(s)?1+Math.floor(u*S):ns;v>ns&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ns}`);const f=[];let m=0;for(let A=0;A<ns;++A){const _=A/S,R=Math.exp(-_*_/2);f.push(R),A===0?m+=R:A<v&&(m+=2*R)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const M=this._sizeLods[r],b=3*M*(r>y-Tr?r-y+Tr:0),T=4*(this._cubeSize-M);Bs(n,b,T,3*M,2*M),l.setRenderTarget(n),l.render(h,Ko)}}function wN(t){const e=[],n=[],i=[];let r=t;const s=t-Tr+1+T_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Tr?l=T_[o-t+Tr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,S=3,v=2,f=1,m=new Float32Array(S*g*p),y=new Float32Array(v*g*p),M=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,_=T>2?0:-1,R=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];m.set(R,S*g*T),y.set(d,v*g*T);const P=[T,T,T,T,T,T];M.set(P,f*g*T)}const b=new fi;b.setAttribute("position",new Fn(m,S)),b.setAttribute("uv",new Fn(y,v)),b.setAttribute("faceIndex",new Fn(M,f)),i.push(new Di(b,null)),r>Tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function A_(t,e,n){const i=new Ri(t,e,n);return i.texture.mapping=Tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bN(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function AN(t,e,n){const i=new Float32Array(ns),r=new V(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function C_(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function R_(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}class M1 extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new m1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new il(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:$i});s.uniforms.tEquirect.value=n;const o=new Di(r,s),a=n.minFilter;return n.minFilter===as&&(n.minFilter=ln),new L3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function CN(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===gd||p===vd)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const S=new M1(g.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),a(S.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===gd||p===vd,S=p===_s||p===bo;if(g||S){let v=n.get(d);const f=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new b_(t)),v=g?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),v.texture;if(v!==void 0)return v.texture;{const m=d.image;return g&&m&&m.height>0||S&&m&&l(m)?(i===null&&(i=new b_(t)),v=g?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d,p){return p===gd?d.mapping=_s:p===vd&&(d.mapping=bo),d}function l(d){let p=0;const g=6;for(let S=0;S<g;S++)d[S]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function RN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qf("WebGLRenderer: "+i+" extension not supported."),r}}}function PN(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let S=0;if(g===void 0)return;if(p!==null){const m=p.array;S=p.version;for(let y=0,M=m.length;y<M;y+=3){const b=m[y+0],T=m[y+1],A=m[y+2];d.push(b,T,T,A,A,b)}}else{const m=g.array;S=g.version;for(let y=0,M=m.length/3-1;y<M;y+=3){const b=y+0,T=y+1,A=y+2;d.push(b,T,T,A,A,b)}}const v=new(g.count>=65535?h1:d1)(d,1);v.version=S;const f=s.get(h);f&&e.remove(f),s.set(h,v)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function DN(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*o,p),n.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let S=0;for(let v=0;v<p;v++)S+=d[v];n.update(S,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function LN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NN(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),S===!0&&(M=2),v===!0&&(M=3);let b=a.attributes.position.count*M,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*T*4*h),_=new l1(A,b,T,h);_.type=Mi,_.needsUpdate=!0;const R=M*4;for(let D=0;D<h;D++){const U=f[D],B=m[D],Y=y[D],I=b*T*4*D;for(let H=0;H<U.count;H++){const k=H*R;g===!0&&(r.fromBufferAttribute(U,H),A[I+k+0]=r.x,A[I+k+1]=r.y,A[I+k+2]=r.z,A[I+k+3]=0),S===!0&&(r.fromBufferAttribute(B,H),A[I+k+4]=r.x,A[I+k+5]=r.y,A[I+k+6]=r.z,A[I+k+7]=0),v===!0&&(r.fromBufferAttribute(Y,H),A[I+k+8]=r.x,A[I+k+9]=r.y,A[I+k+10]=r.z,A[I+k+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new Be(b,T)},i.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function IN(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const UN={[XM]:"LINEAR_TONE_MAPPING",[YM]:"REINHARD_TONE_MAPPING",[qM]:"CINEON_TONE_MAPPING",[$M]:"ACES_FILMIC_TONE_MAPPING",[ZM]:"AGX_TONE_MAPPING",[QM]:"NEUTRAL_TONE_MAPPING",[KM]:"CUSTOM_TONE_MAPPING"};function FN(t,e,n,i,r){const s=new Ri(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Ao(e,n):void 0}),o=new Ri(e,n,{type:nr,depthBuffer:!1,stencilBuffer:!1}),a=new fi;a.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new di([0,2,0,0,2,0],2));const l=new S3({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Di(a,l),u=new $m(-1,1,1,-1,0,1);let h=null,d=null,p=!1,g,S=null,v=[],f=!1;this.setSize=function(m,y){s.setSize(m,y),o.setSize(m,y);for(let M=0;M<v.length;M++){const b=v[M];b.setSize&&b.setSize(m,y)}},this.setEffects=function(m){v=m,f=v.length>0&&v[0].isRenderPass===!0;const y=s.width,M=s.height;for(let b=0;b<v.length;b++){const T=v[b];T.setSize&&T.setSize(y,M)}},this.begin=function(m,y){if(p||m.toneMapping===Ci&&v.length===0)return!1;if(S=y,y!==null){const M=y.width,b=y.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return f===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=Ci,!0},this.hasRenderPass=function(){return f},this.end=function(m,y){m.toneMapping=g,p=!0;let M=s,b=o;for(let T=0;T<v.length;T++){const A=v[T];if(A.enabled!==!1&&(A.render(m,b,M,y),A.needsSwap!==!1)){const _=M;M=b,b=_}}if(h!==m.outputColorSpace||d!==m.toneMapping){h=m.outputColorSpace,d=m.toneMapping,l.defines={},Ke.getTransfer(h)===nt&&(l.defines.SRGB_TRANSFER="");const T=UN[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(S),m.render(c,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const E1=new mn,ep=new Ao(1,1),T1=new l1,w1=new Q2,b1=new m1,P_=[],D_=[],L_=new Float32Array(16),N_=new Float32Array(9),I_=new Float32Array(4);function Uo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=P_[r];if(s===void 0&&(s=new Float32Array(r),P_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Au(t,e){let n=D_[e];n===void 0&&(n=new Int32Array(e),D_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ON(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function BN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function zN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function VN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;I_.set(i),t.uniformMatrix2fv(this.addr,!1,I_),Gt(n,i)}}function HN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;N_.set(i),t.uniformMatrix3fv(this.addr,!1,N_),Gt(n,i)}}function GN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;L_.set(i),t.uniformMatrix4fv(this.addr,!1,L_),Gt(n,i)}}function jN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function XN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function YN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function qN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $N(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function KN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function ZN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function QN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ep.compareFunction=n.isReversedDepthBuffer()?jm:Gm,s=ep):s=E1,n.setTexture2D(e||s,r)}function JN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||w1,r)}function eI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b1,r)}function tI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||T1,r)}function nI(t){switch(t){case 5126:return ON;case 35664:return kN;case 35665:return BN;case 35666:return zN;case 35674:return VN;case 35675:return HN;case 35676:return GN;case 5124:case 35670:return jN;case 35667:case 35671:return WN;case 35668:case 35672:return XN;case 35669:case 35673:return YN;case 5125:return qN;case 36294:return $N;case 36295:return KN;case 36296:return ZN;case 35678:case 36198:case 36298:case 36306:case 35682:return QN;case 35679:case 36299:case 36307:return JN;case 35680:case 36300:case 36308:case 36293:return eI;case 36289:case 36303:case 36311:case 36292:return tI}}function iI(t,e){t.uniform1fv(this.addr,e)}function rI(t,e){const n=Uo(e,this.size,2);t.uniform2fv(this.addr,n)}function sI(t,e){const n=Uo(e,this.size,3);t.uniform3fv(this.addr,n)}function oI(t,e){const n=Uo(e,this.size,4);t.uniform4fv(this.addr,n)}function aI(t,e){const n=Uo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lI(t,e){const n=Uo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cI(t,e){const n=Uo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uI(t,e){t.uniform1iv(this.addr,e)}function dI(t,e){t.uniform2iv(this.addr,e)}function hI(t,e){t.uniform3iv(this.addr,e)}function fI(t,e){t.uniform4iv(this.addr,e)}function pI(t,e){t.uniform1uiv(this.addr,e)}function mI(t,e){t.uniform2uiv(this.addr,e)}function gI(t,e){t.uniform3uiv(this.addr,e)}function vI(t,e){t.uniform4uiv(this.addr,e)}function _I(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=ep:o=E1;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function xI(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||w1,s[o])}function yI(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||b1,s[o])}function SI(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||T1,s[o])}function MI(t){switch(t){case 5126:return iI;case 35664:return rI;case 35665:return sI;case 35666:return oI;case 35674:return aI;case 35675:return lI;case 35676:return cI;case 5124:case 35670:return uI;case 35667:case 35671:return dI;case 35668:case 35672:return hI;case 35669:case 35673:return fI;case 5125:return pI;case 36294:return mI;case 36295:return gI;case 36296:return vI;case 35678:case 36198:case 36298:case 36306:case 35682:return _I;case 35679:case 36299:case 36307:return xI;case 35680:case 36300:case 36308:case 36293:return yI;case 36289:case 36303:case 36311:case 36292:return SI}}class EI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nI(n.type)}}class TI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MI(n.type)}}class wI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function U_(t,e){t.seq.push(e),t.map[e.id]=e}function bI(t,e,n){const i=t.name,r=i.length;for(Yd.lastIndex=0;;){const s=Yd.exec(i),o=Yd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){U_(n,c===void 0?new EI(a,t,e):new TI(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new wI(a),U_(n,h)),n=h}}}class _c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);bI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function F_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const AI=37297;let CI=0;function RI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const O_=new Fe;function PI(t){Ke._getMatrix(O_,Ke.workingColorSpace,t);const e=`mat3( ${O_.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case Jc:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function k_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+RI(t.getShaderSource(e),a)}else return s}function DI(t,e){const n=PI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const LI={[XM]:"Linear",[YM]:"Reinhard",[qM]:"Cineon",[$M]:"ACESFilmic",[ZM]:"AgX",[QM]:"Neutral",[KM]:"Custom"};function NI(t,e){const n=LI[e];return n===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $l=new V;function II(){Ke.getLuminanceCoefficients($l);const t=$l.x.toFixed(4),e=$l.y.toFixed(4),n=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function FI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function oa(t){return t!==""}function B_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kI=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(t){return t.replace(kI,zI)}const BI=new Map;function zI(t,e){let n=Ve[e];if(n===void 0){const i=BI.get(e);if(i!==void 0)n=Ve[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tp(n)}const VI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(t){return t.replace(VI,HI)}function HI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function H_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const GI={[hc]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function jI(t){return GI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WI={[_s]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function XI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":WI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const YI={[bo]:"ENVMAP_MODE_REFRACTION"};function qI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":YI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $I={[WM]:"ENVMAP_BLENDING_MULTIPLY",[P2]:"ENVMAP_BLENDING_MIX",[D2]:"ENVMAP_BLENDING_ADD"};function KI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":$I[t.combine]||"ENVMAP_BLENDING_NONE"}function ZI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jI(n),c=XI(n),u=qI(n),h=KI(n),d=ZI(n),p=UI(n),g=FI(s),S=r.createProgram();let v,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oa).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oa).join(`
`),f.length>0&&(f+=`
`)):(v=[H_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),f=[H_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ci?NI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,DI("linearToOutputTexel",n.outputColorSpace),II(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),o=tp(o),o=B_(o,n),o=z_(o,n),a=tp(a),a=B_(a,n),a=z_(a,n),o=V_(o),a=V_(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",n.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=m+v+o,M=m+f+a,b=F_(r,r.VERTEX_SHADER,y),T=F_(r,r.FRAGMENT_SHADER,M);r.attachShader(S,b),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(D){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(T)||"",I=U.trim(),H=B.trim(),k=Y.trim();let F=!0,X=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,T);else{const Z=k_(r,b,"vertex"),ae=k_(r,T,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+Z+`
`+ae)}else I!==""?Pe("WebGLProgram: Program Info Log:",I):(H===""||k==="")&&(X=!1);X&&(D.diagnostics={runnable:F,programLog:I,vertexShader:{log:H,prefix:v},fragmentShader:{log:k,prefix:f}})}r.deleteShader(b),r.deleteShader(T),_=new _c(r,S),R=OI(r,S)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,AI)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CI++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=T,this}let JI=0;class eU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tU(e),n.set(e,i)),i}}class tU{constructor(e){this.id=JI++,this.code=e,this.usedTimes=0}}function nU(t){return t===xs||t===Kc||t===Zc}function iU(t,e,n,i,r,s){const o=new c1,a=new eU,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,R,P,D,U,B){const Y=D.fog,I=U.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||H,k),X=F&&F.mapping===Tu?F.image.height:null,Z=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=ae!==void 0?ae.length:0;let Ge=0;I.morphAttributes.position!==void 0&&(Ge=1),I.morphAttributes.normal!==void 0&&(Ge=2),I.morphAttributes.color!==void 0&&(Ge=3);let Ye,Ne,K,he;if(Z){const Oe=yi[Z];Ye=Oe.vertexShader,Ne=Oe.fragmentShader}else Ye=_.vertexShader,Ne=_.fragmentShader,a.update(_),K=a.getVertexShaderID(_),he=a.getFragmentShaderID(_);const le=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,_t=!!_.map,qe=!!_.matcap,rt=!!F,ft=!!_.aoMap,je=!!_.lightMap,Ot=!!_.bumpMap,xt=!!_.normalMap,An=!!_.displacementMap,N=!!_.emissiveMap,kt=!!_.metalnessMap,$e=!!_.roughnessMap,ut=_.anisotropy>0,pe=_.clearcoat>0,Tt=_.dispersion>0,C=_.iridescence>0,E=_.sheen>0,z=_.transmission>0,Q=ut&&!!_.anisotropyMap,ne=pe&&!!_.clearcoatMap,re=pe&&!!_.clearcoatNormalMap,de=pe&&!!_.clearcoatRoughnessMap,q=C&&!!_.iridescenceMap,J=C&&!!_.iridescenceThicknessMap,_e=E&&!!_.sheenColorMap,Se=E&&!!_.sheenRoughnessMap,ce=!!_.specularMap,se=!!_.specularColorMap,Ie=!!_.specularIntensityMap,ze=z&&!!_.transmissionMap,et=z&&!!_.thicknessMap,L=!!_.gradientMap,oe=!!_.alphaMap,$=_.alphaTest>0,xe=!!_.alphaHash,ue=!!_.extensions;let te=Ci;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(te=t.toneMapping);const we={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Ye,fragmentShader:Ne,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:De,batchingColor:De&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:_t,matcap:qe,envMap:rt,envMapMode:rt&&F.mapping,envMapCubeUVHeight:X,aoMap:ft,lightMap:je,bumpMap:Ot,normalMap:xt,displacementMap:An,emissiveMap:N,normalMapObjectSpace:xt&&_.normalMapType===I2,normalMapTangentSpace:xt&&_.normalMapType===Zf,packedNormalMap:xt&&_.normalMapType===Zf&&nU(_.normalMap.format),metalnessMap:kt,roughnessMap:$e,anisotropy:ut,anisotropyMap:Q,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:Tt,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:J,sheen:E,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:ce,specularColorMap:se,specularIntensityMap:Ie,transmission:z,transmissionMap:ze,thicknessMap:et,gradientMap:L,opaque:_.transparent===!1&&_.blending===fo&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:$,alphaHash:xe,combine:_.combine,mapUv:_t&&g(_.map.channel),aoMapUv:ft&&g(_.aoMap.channel),lightMapUv:je&&g(_.lightMap.channel),bumpMapUv:Ot&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:An&&g(_.displacementMap.channel),emissiveMapUv:N&&g(_.emissiveMap.channel),metalnessMapUv:kt&&g(_.metalnessMap.channel),roughnessMapUv:$e&&g(_.roughnessMap.channel),anisotropyMapUv:Q&&g(_.anisotropyMap.channel),clearcoatMapUv:ne&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(_.sheenRoughnessMap.channel),specularMapUv:ce&&g(_.specularMap.channel),specularColorMapUv:se&&g(_.specularColorMap.channel),specularIntensityMapUv:Ie&&g(_.specularIntensityMap.channel),transmissionMapUv:ze&&g(_.transmissionMap.channel),thicknessMapUv:et&&g(_.thicknessMap.channel),alphaMapUv:oe&&g(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||ut),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(_t||oe),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ge,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:_t&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:N&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hi,flipSided:_.side===bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function v(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)R.push(P),R.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(R,_),m(R,_),R.push(t.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function f(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function m(_,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function y(_){const R=p[_.type];let P;if(R){const D=yi[R];P=_3.clone(D.uniforms)}else P=_.uniforms;return P}function M(_,R){let P=u.get(R);return P!==void 0?++P.usedTimes:(P=new QI(t,R,_,r),c.push(P),u.set(R,P)),P}function b(_){if(--_.usedTimes===0){const R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function A(){a.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function rU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function G_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function j_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,S,v,f){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:S,renderOrder:d.renderOrder,z:v,group:f},t[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=g,m.materialVariant=o(d),m.groupOrder=S,m.renderOrder=d.renderOrder,m.z=v,m.group=f),e++,m}function l(d,p,g,S,v,f){const m=a(d,p,g,S,v,f);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function c(d,p,g,S,v,f){const m=a(d,p,g,S,v,f);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,p){n.length>1&&n.sort(d||sU),i.length>1&&i.sort(p||G_),r.length>1&&r.sort(p||G_)}function h(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function oU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new j_,t.set(i,[o])):r>=s.length?(o=new j_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new tt};break;case"SpotLight":n={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function lU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cU=0;function uU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dU(t){const e=new aU,n=lU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new It,o=new It;function a(c){let u=0,h=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,g=0,S=0,v=0,f=0,m=0,y=0,M=0,b=0,T=0,A=0;c.sort(uU);for(let R=0,P=c.length;R<P;R++){const D=c[R],U=D.color,B=D.intensity,Y=D.distance;let I=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?I=D.shadow.map.texture:I=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=U.r*B,h+=U.g*B,d+=U.b*B;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],B);A++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,F=n.get(D);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=H,p++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(U).multiplyScalar(B),H.distance=Y,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[S]=H;const k=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,k.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[S]=k.matrix,D.castShadow){const F=n.get(D);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,i.spotShadow[S]=F,i.spotShadowMap[S]=I,M++}S++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(U).multiplyScalar(B),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=H,v++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const k=D.shadow,F=n.get(D);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,F.shadowCameraNear=k.camera.near,F.shadowCameraFar=k.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(B),H.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[f]=H,f++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==S||_.rectAreaLength!==v||_.hemiLength!==f||_.numDirectionalShadows!==m||_.numPointShadows!==y||_.numSpotShadows!==M||_.numSpotMaps!==b||_.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=v,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,_.directionalLength=p,_.pointLength=g,_.spotLength=S,_.rectAreaLength=v,_.hemiLength=f,_.numDirectionalShadows=m,_.numPointShadows=y,_.numSpotShadows=M,_.numSpotMaps=b,_.numLightProbes=A,i.version=cU++)}function l(c,u){let h=0,d=0,p=0,g=0,S=0;const v=u.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const y=c[f];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),h++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),p++}else if(y.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(y.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),d++}else if(y.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(v),S++}}}return{setup:a,setupView:l,state:i}}function W_(t){const e=new dU(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function hU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new W_(t),e.set(r,[a])):s>=o.length?(a=new W_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const fU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pU=`uniform sampler2D shadow_pass;
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
}`,mU=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],gU=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],X_=new It,Zo=new V,qd=new V;function vU(t,e,n){let i=new Ym;const r=new Be,s=new Be,o=new Ct,a=new E3,l=new T3,c={},u=n.maxTextureSize,h={[Or]:bn,[bn]:Or,[Hi]:Hi},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:fU,fragmentShader:pU}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new fi;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Di(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let f=this.type;this.render=function(T,A,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===d2&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hc);const R=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;U.setBlending($i),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=f!==this.type;B&&A.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(I=>I.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,I=T.length;Y<I;Y++){const H=T[Y],k=H.shadow;if(k===void 0){Pe("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const F=k.getFrameExtents();r.multiply(F),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,k.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===sa){if(H.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ri(r.x,r.y,{format:xs,type:nr,minFilter:ln,magFilter:ln,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Ao(r.x,r.y,Mi),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ir,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Kt,k.map.depthTexture.magFilter=Kt}else H.isPointLight?(k.map=new M1(r.x),k.map.depthTexture=new g3(r.x,Pi)):(k.map=new Ri(r.x,r.y),k.map.depthTexture=new Ao(r.x,r.y,Pi)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ir,this.type===hc?(k.map.depthTexture.compareFunction=X?jm:Gm,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Kt,k.map.depthTexture.magFilter=Kt);k.camera.updateProjectionMatrix()}const Z=k.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<Z;ae++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(k.map),t.clear());const fe=k.getViewport(ae);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),U.viewport(o)}if(H.isPointLight){const fe=k.camera,Ge=k.matrix,Ye=H.distance||fe.far;Ye!==fe.far&&(fe.far=Ye,fe.updateProjectionMatrix()),Zo.setFromMatrixPosition(H.matrixWorld),fe.position.copy(Zo),qd.copy(fe.position),qd.add(mU[ae]),fe.up.copy(gU[ae]),fe.lookAt(qd),fe.updateMatrixWorld(),Ge.makeTranslation(-Zo.x,-Zo.y,-Zo.z),X_.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(X_,fe.coordinateSystem,fe.reversedDepth)}else k.updateMatrices(H);i=k.getFrustum(),M(A,_,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===sa&&m(k,_),k.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(R,P,D)};function m(T,A){const _=e.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ri(r.x,r.y,{format:xs,type:nr})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,_,d,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,_,p,S,null)}function y(T,A,_,R){let P=null;const D=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=P.uuid,B=A.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let I=Y[B];I===void 0&&(I=P.clone(),Y[B]=I,A.addEventListener("dispose",b)),P=I}if(P.visible=A.visible,P.wireframe=A.wireframe,R===sa?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:h[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=t.properties.get(P);U.light=_}return P}function M(T,A,_,R,P){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===sa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const B=e.update(T),Y=T.material;if(Array.isArray(Y)){const I=B.groups;for(let H=0,k=I.length;H<k;H++){const F=I[H],X=Y[F.materialIndex];if(X&&X.visible){const Z=y(T,X,R,P);T.onBeforeShadow(t,T,A,_,B,Z,F),t.renderBufferDirect(_,null,B,Z,T,F),T.onAfterShadow(t,T,A,_,B,Z,F)}}}else if(Y.visible){const I=y(T,Y,R,P);T.onBeforeShadow(t,T,A,_,B,I,null),t.renderBufferDirect(_,null,B,I,T,null),T.onAfterShadow(t,T,A,_,B,I,null)}}const U=T.children;for(let B=0,Y=U.length;B<Y;B++)M(U[B],A,_,R,P)}function b(T){T.target.removeEventListener("dispose",b);for(const _ in c){const R=c[_],P=T.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function _U(t,e){function n(){let L=!1;const oe=new Ct;let $=null;const xe=new Ct(0,0,0,0);return{setMask:function(ue){$!==ue&&!L&&(t.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){L=ue},setClear:function(ue,te,we,Oe,Rt){Rt===!0&&(ue*=Oe,te*=Oe,we*=Oe),oe.set(ue,te,we,Oe),xe.equals(oe)===!1&&(t.clearColor(ue,te,we,Oe),xe.copy(oe))},reset:function(){L=!1,$=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,oe=!1,$=null,xe=null,ue=null;return{setReversed:function(te){if(oe!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=te;const Oe=ue;ue=null,this.setClear(Oe)}},getReversed:function(){return oe},setTest:function(te){te?le(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(te){$!==te&&!L&&(t.depthMask(te),$=te)},setFunc:function(te){if(oe&&(te=j2[te]),xe!==te){switch(te){case hf:t.depthFunc(t.NEVER);break;case ff:t.depthFunc(t.ALWAYS);break;case pf:t.depthFunc(t.LESS);break;case wo:t.depthFunc(t.LEQUAL);break;case mf:t.depthFunc(t.EQUAL);break;case gf:t.depthFunc(t.GEQUAL);break;case vf:t.depthFunc(t.GREATER);break;case _f:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=te}},setLocked:function(te){L=te},setClear:function(te){ue!==te&&(ue=te,oe&&(te=1-te),t.clearDepth(te))},reset:function(){L=!1,$=null,xe=null,ue=null,oe=!1}}}function r(){let L=!1,oe=null,$=null,xe=null,ue=null,te=null,we=null,Oe=null,Rt=null;return{setTest:function(st){L||(st?le(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(st){oe!==st&&!L&&(t.stencilMask(st),oe=st)},setFunc:function(st,Ni,pi){($!==st||xe!==Ni||ue!==pi)&&(t.stencilFunc(st,Ni,pi),$=st,xe=Ni,ue=pi)},setOp:function(st,Ni,pi){(te!==st||we!==Ni||Oe!==pi)&&(t.stencilOp(st,Ni,pi),te=st,we=Ni,Oe=pi)},setLocked:function(st){L=st},setClear:function(st){Rt!==st&&(t.clearStencil(st),Rt=st)},reset:function(){L=!1,oe=null,$=null,xe=null,ue=null,te=null,we=null,Oe=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,g=[],S=null,v=!1,f=null,m=null,y=null,M=null,b=null,T=null,A=null,_=new tt(0,0,0),R=0,P=!1,D=null,U=null,B=null,Y=null,I=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=F>=2);let Z=null,ae={};const fe=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),Ye=new Ct().fromArray(fe),Ne=new Ct().fromArray(Ge);function K(L,oe,$,xe){const ue=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<$;we++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return te}const he={};he[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(wo),Ot(!1),xt(jv),le(t.CULL_FACE),ft($i);function le(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function Re(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Ue(L,oe){return d[L]!==oe?(t.bindFramebuffer(L,oe),d[L]=oe,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=oe),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function De(L,oe){let $=g,xe=!1;if(L){$=p.get(oe),$===void 0&&($=[],p.set(oe,$));const ue=L.textures;if($.length!==ue.length||$[0]!==t.COLOR_ATTACHMENT0){for(let te=0,we=ue.length;te<we;te++)$[te]=t.COLOR_ATTACHMENT0+te;$.length=ue.length,xe=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,xe=!0);xe&&t.drawBuffers($)}function _t(L){return S!==L?(t.useProgram(L),S=L,!0):!1}const qe={[ts]:t.FUNC_ADD,[f2]:t.FUNC_SUBTRACT,[p2]:t.FUNC_REVERSE_SUBTRACT};qe[m2]=t.MIN,qe[g2]=t.MAX;const rt={[v2]:t.ZERO,[_2]:t.ONE,[x2]:t.SRC_COLOR,[uf]:t.SRC_ALPHA,[w2]:t.SRC_ALPHA_SATURATE,[E2]:t.DST_COLOR,[S2]:t.DST_ALPHA,[y2]:t.ONE_MINUS_SRC_COLOR,[df]:t.ONE_MINUS_SRC_ALPHA,[T2]:t.ONE_MINUS_DST_COLOR,[M2]:t.ONE_MINUS_DST_ALPHA,[b2]:t.CONSTANT_COLOR,[A2]:t.ONE_MINUS_CONSTANT_COLOR,[C2]:t.CONSTANT_ALPHA,[R2]:t.ONE_MINUS_CONSTANT_ALPHA};function ft(L,oe,$,xe,ue,te,we,Oe,Rt,st){if(L===$i){v===!0&&(Re(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),L!==h2){if(L!==f||st!==P){if((m!==ts||b!==ts)&&(t.blendEquation(t.FUNC_ADD),m=ts,b=ts),st)switch(L){case fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wv:t.blendFunc(t.ONE,t.ONE);break;case Xv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",L);break}else switch(L){case fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Xv:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yv:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",L);break}y=null,M=null,T=null,A=null,_.set(0,0,0),R=0,f=L,P=st}return}ue=ue||oe,te=te||$,we=we||xe,(oe!==m||ue!==b)&&(t.blendEquationSeparate(qe[oe],qe[ue]),m=oe,b=ue),($!==y||xe!==M||te!==T||we!==A)&&(t.blendFuncSeparate(rt[$],rt[xe],rt[te],rt[we]),y=$,M=xe,T=te,A=we),(Oe.equals(_)===!1||Rt!==R)&&(t.blendColor(Oe.r,Oe.g,Oe.b,Rt),_.copy(Oe),R=Rt),f=L,P=!1}function je(L,oe){L.side===Hi?Re(t.CULL_FACE):le(t.CULL_FACE);let $=L.side===bn;oe&&($=!$),Ot($),L.blending===fo&&L.transparent===!1?ft($i):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function xt(L){L!==c2?(le(t.CULL_FACE),L!==U&&(L===jv?t.cullFace(t.BACK):L===u2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),U=L}function An(L){L!==B&&(k&&t.lineWidth(L),B=L)}function N(L,oe,$){L?(le(t.POLYGON_OFFSET_FILL),(Y!==oe||I!==$)&&(Y=oe,I=$,o.getReversed()&&(oe=-oe),t.polygonOffset(oe,$))):Re(t.POLYGON_OFFSET_FILL)}function kt(L){L?le(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function $e(L){L===void 0&&(L=t.TEXTURE0+H-1),Z!==L&&(t.activeTexture(L),Z=L)}function ut(L,oe,$){$===void 0&&(Z===null?$=t.TEXTURE0+H-1:$=Z);let xe=ae[$];xe===void 0&&(xe={type:void 0,texture:void 0},ae[$]=xe),(xe.type!==L||xe.texture!==oe)&&(Z!==$&&(t.activeTexture($),Z=$),t.bindTexture(L,oe||he[L]),xe.type=L,xe.texture=oe)}function pe(){const L=ae[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Tt(){try{t.compressedTexImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function E(){try{t.texSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function z(){try{t.texSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function de(){try{t.texStorage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function q(){try{t.texImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function _e(L){return h[L]!==void 0?h[L]:t.getParameter(L)}function Se(L,oe){h[L]!==oe&&(t.pixelStorei(L,oe),h[L]=oe)}function ce(L){Ye.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function se(L){Ne.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ne.copy(L))}function Ie(L,oe){let $=c.get(oe);$===void 0&&($=new WeakMap,c.set(oe,$));let xe=$.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(oe,L.name),$.set(L,xe))}function ze(L,oe){const xe=c.get(oe).get(L);l.get(oe)!==xe&&(t.uniformBlockBinding(oe,xe,L.__bindingPointIndex),l.set(oe,xe))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,ae={},d={},p=new WeakMap,g=[],S=null,v=!1,f=null,m=null,y=null,M=null,b=null,T=null,A=null,_=new tt(0,0,0),R=0,P=!1,D=null,U=null,B=null,Y=null,I=null,Ye.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Re,bindFramebuffer:Ue,drawBuffers:De,useProgram:_t,setBlending:ft,setMaterial:je,setFlipSided:Ot,setCullFace:xt,setLineWidth:An,setPolygonOffset:N,setScissorTest:kt,activeTexture:$e,bindTexture:ut,unbindTexture:pe,compressedTexImage2D:Tt,compressedTexImage3D:C,texImage2D:q,texImage3D:J,pixelStorei:Se,getParameter:_e,updateUBOMapping:Ie,uniformBlockBinding:ze,texStorage2D:re,texStorage3D:de,texSubImage2D:E,texSubImage3D:z,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:ce,viewport:se,reset:et}}function xU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,E){return g?new OffscreenCanvas(C,E):eu("canvas")}function v(C,E,z){let Q=1;const ne=Tt(C);if((ne.width>z||ne.height>z)&&(Q=z/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(Q*ne.width),de=Math.floor(Q*ne.height);d===void 0&&(d=S(re,de));const q=E?S(re,de):d;return q.width=re,q.height=de,q.getContext("2d").drawImage(C,0,0,re,de),Pe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+de+")."),q}else return"data"in C&&Pe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function f(C){return C.generateMipmaps}function m(C){t.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(C,E,z,Q,ne,re=!1){if(C!==null){if(t[C]!==void 0)return t[C];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de;Q&&(de=e.get("EXT_texture_norm16"),de||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=E;if(E===t.RED&&(z===t.FLOAT&&(q=t.R32F),z===t.HALF_FLOAT&&(q=t.R16F),z===t.UNSIGNED_BYTE&&(q=t.R8),z===t.UNSIGNED_SHORT&&de&&(q=de.R16_EXT),z===t.SHORT&&de&&(q=de.R16_SNORM_EXT)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.R8UI),z===t.UNSIGNED_SHORT&&(q=t.R16UI),z===t.UNSIGNED_INT&&(q=t.R32UI),z===t.BYTE&&(q=t.R8I),z===t.SHORT&&(q=t.R16I),z===t.INT&&(q=t.R32I)),E===t.RG&&(z===t.FLOAT&&(q=t.RG32F),z===t.HALF_FLOAT&&(q=t.RG16F),z===t.UNSIGNED_BYTE&&(q=t.RG8),z===t.UNSIGNED_SHORT&&de&&(q=de.RG16_EXT),z===t.SHORT&&de&&(q=de.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RG8UI),z===t.UNSIGNED_SHORT&&(q=t.RG16UI),z===t.UNSIGNED_INT&&(q=t.RG32UI),z===t.BYTE&&(q=t.RG8I),z===t.SHORT&&(q=t.RG16I),z===t.INT&&(q=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(q=t.RGB16UI),z===t.UNSIGNED_INT&&(q=t.RGB32UI),z===t.BYTE&&(q=t.RGB8I),z===t.SHORT&&(q=t.RGB16I),z===t.INT&&(q=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),z===t.UNSIGNED_INT&&(q=t.RGBA32UI),z===t.BYTE&&(q=t.RGBA8I),z===t.SHORT&&(q=t.RGBA16I),z===t.INT&&(q=t.RGBA32I)),E===t.RGB&&(z===t.UNSIGNED_SHORT&&de&&(q=de.RGB16_EXT),z===t.SHORT&&de&&(q=de.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),E===t.RGBA){const J=re?Jc:Ke.getTransfer(ne);z===t.FLOAT&&(q=t.RGBA32F),z===t.HALF_FLOAT&&(q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(q=J===nt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&de&&(q=de.RGBA16_EXT),z===t.SHORT&&de&&(q=de.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(C,E){let z;return C?E===null||E===Pi||E===ja?z=t.DEPTH24_STENCIL8:E===Mi?z=t.DEPTH32F_STENCIL8:E===Ga&&(z=t.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===ja?z=t.DEPTH_COMPONENT24:E===Mi?z=t.DEPTH_COMPONENT32F:E===Ga&&(z=t.DEPTH_COMPONENT16),z}function T(C,E){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==ln?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function _(C){const E=C.target;E.removeEventListener("dispose",_),D(E)}function R(C){const E=i.get(C);if(E.__webglInit===void 0)return;const z=C.source,Q=p.get(z);if(Q){const ne=Q[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(C),Object.keys(Q).length===0&&p.delete(z)}i.remove(C)}function P(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const z=C.source,Q=p.get(z);delete Q[E.__cacheKey],o.memory.textures--}function D(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ne=0;ne<E.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=C.textures;for(let Q=0,ne=z.length;Q<ne;Q++){const re=i.get(z[Q]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(C)}let U=0;function B(){U=0}function Y(){return U}function I(C){U=C}function H(){const C=U;return C>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function k(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function F(C,E){const z=i.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const Q=C.image;if(Q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(z,C,E);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function X(C,E){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Re(z,C,E);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function Z(C,E){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Re(z,C,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function ae(C,E){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Ue(z,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const fe={[xf]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[yf]:t.MIRRORED_REPEAT},Ge={[Kt]:t.NEAREST,[L2]:t.NEAREST_MIPMAP_NEAREST,[Al]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[_d]:t.LINEAR_MIPMAP_NEAREST,[as]:t.LINEAR_MIPMAP_LINEAR},Ye={[U2]:t.NEVER,[z2]:t.ALWAYS,[F2]:t.LESS,[Gm]:t.LEQUAL,[O2]:t.EQUAL,[jm]:t.GEQUAL,[k2]:t.GREATER,[B2]:t.NOTEQUAL};function Ne(C,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ln||E.magFilter===_d||E.magFilter===Al||E.magFilter===as||E.minFilter===ln||E.minFilter===_d||E.minFilter===Al||E.minFilter===as)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,fe[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,fe[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,fe[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Ge[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Ge[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==Al&&E.minFilter!==as||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function K(C,E){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let ne=p.get(Q);ne===void 0&&(ne={},p.set(Q,ne));const re=k(E);if(re!==C.__cacheKey){ne[re]===void 0&&(ne[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[re].usedTimes++;const de=ne[C.__cacheKey];de!==void 0&&(ne[C.__cacheKey].usedTimes--,de.usedTimes===0&&P(E)),C.__cacheKey=re,C.__webglTexture=ne[re].texture}return z}function he(C,E,z){return Math.floor(Math.floor(C/z)/E)}function le(C,E,z,Q){const re=C.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,z,Q,E.data);else{re.sort((Se,ce)=>Se.start-ce.start);let de=0;for(let Se=1;Se<re.length;Se++){const ce=re[de],se=re[Se],Ie=ce.start+ce.count,ze=he(se.start,E.width,4),et=he(ce.start,E.width,4);se.start<=Ie+1&&ze===et&&he(se.start+se.count-1,E.width,4)===ze?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++de,re[de]=se)}re.length=de+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Se=0,ce=re.length;Se<ce;Se++){const se=re[Se],Ie=Math.floor(se.start/4),ze=Math.ceil(se.count/4),et=Ie%E.width,L=Math.floor(Ie/E.width),oe=ze,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,et),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,et,L,oe,$,z,Q,E.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function Re(C,E,z){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=K(C,E),re=E.source;n.bindTexture(Q,C.__webglTexture,t.TEXTURE0+z);const de=i.get(re);if(re.version!==de.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const $=Ke.getPrimaries(Ke.workingColorSpace),xe=E.colorSpace===Sr?null:Ke.getPrimaries(E.colorSpace),ue=E.colorSpace===Sr||$===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let J=v(E.image,!1,r.maxTextureSize);J=pe(E,J);const _e=s.convert(E.format,E.colorSpace),Se=s.convert(E.type);let ce=M(E.internalFormat,_e,Se,E.normalized,E.colorSpace,E.isVideoTexture);Ne(Q,E);let se;const Ie=E.mipmaps,ze=E.isVideoTexture!==!0,et=de.__version===void 0||ne===!0,L=re.dataReady,oe=T(E,J);if(E.isDepthTexture)ce=b(E.format===ls,E.type),et&&(ze?n.texStorage2D(t.TEXTURE_2D,1,ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,null));else if(E.isDataTexture)if(Ie.length>0){ze&&et&&n.texStorage2D(t.TEXTURE_2D,oe,ce,Ie[0].width,Ie[0].height);for(let $=0,xe=Ie.length;$<xe;$++)se=Ie[$],ze?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,_e,Se,se.data):n.texImage2D(t.TEXTURE_2D,$,ce,se.width,se.height,0,_e,Se,se.data);E.generateMipmaps=!1}else ze?(et&&n.texStorage2D(t.TEXTURE_2D,oe,ce,J.width,J.height),L&&le(E,J,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,ce,Ie[0].width,Ie[0].height,J.depth);for(let $=0,xe=Ie.length;$<xe;$++)if(se=Ie[$],E.format!==ai)if(_e!==null)if(ze){if(L)if(E.layerUpdates.size>0){const ue=E_(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const we=se.data.subarray(te*ue/se.data.BYTES_PER_ELEMENT,(te+1)*ue/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,te,se.width,se.height,1,_e,we)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,J.depth,_e,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ce,se.width,se.height,J.depth,0,se.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,J.depth,_e,Se,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ce,se.width,se.height,J.depth,0,_e,Se,se.data)}else{ze&&et&&n.texStorage2D(t.TEXTURE_2D,oe,ce,Ie[0].width,Ie[0].height);for(let $=0,xe=Ie.length;$<xe;$++)se=Ie[$],E.format!==ai?_e!==null?ze?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,_e,se.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ce,se.width,se.height,0,se.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,_e,Se,se.data):n.texImage2D(t.TEXTURE_2D,$,ce,se.width,se.height,0,_e,Se,se.data)}else if(E.isDataArrayTexture)if(ze){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,ce,J.width,J.height,J.depth),L)if(E.layerUpdates.size>0){const $=E_(J.width,J.height,E.format,E.type);for(const xe of E.layerUpdates){const ue=J.data.subarray(xe*$/J.data.BYTES_PER_ELEMENT,(xe+1)*$/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,J.width,J.height,1,_e,Se,ue)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(E.isData3DTexture)ze?(et&&n.texStorage3D(t.TEXTURE_3D,oe,ce,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(E.isFramebufferTexture){if(et)if(ze)n.texStorage2D(t.TEXTURE_2D,oe,ce,J.width,J.height);else{let $=J.width,xe=J.height;for(let ue=0;ue<oe;ue++)n.texImage2D(t.TEXTURE_2D,ue,ce,$,xe,0,_e,Se,null),$>>=1,xe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),h.add(E),$.onpaint=Oe=>{const Rt=Oe.changedElements;for(const st of h)Rt.includes(st.image)&&(st.needsUpdate=!0)},$.requestPaint();return}const xe=0,ue=t.RGBA,te=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,ue,te,we,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(ze&&et){const $=Tt(Ie[0]);n.texStorage2D(t.TEXTURE_2D,oe,ce,$.width,$.height)}for(let $=0,xe=Ie.length;$<xe;$++)se=Ie[$],ze?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e,Se,se):n.texImage2D(t.TEXTURE_2D,$,ce,_e,Se,se);E.generateMipmaps=!1}else if(ze){if(et){const $=Tt(J);n.texStorage2D(t.TEXTURE_2D,oe,ce,$.width,$.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,ce,_e,Se,J);f(E)&&m(Q),de.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ue(C,E,z){if(E.image.length!==6)return;const Q=K(C,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+z);const re=i.get(ne);if(ne.version!==re.__version||Q===!0){n.activeTexture(t.TEXTURE0+z);const de=Ke.getPrimaries(Ke.workingColorSpace),q=E.colorSpace===Sr?null:Ke.getPrimaries(E.colorSpace),J=E.colorSpace===Sr||de===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!_e&&!Se?ce[te]=v(E.image[te],!0,r.maxCubemapSize):ce[te]=Se?E.image[te].image:E.image[te],ce[te]=pe(E,ce[te]);const se=ce[0],Ie=s.convert(E.format,E.colorSpace),ze=s.convert(E.type),et=M(E.internalFormat,Ie,ze,E.normalized,E.colorSpace),L=E.isVideoTexture!==!0,oe=re.__version===void 0||Q===!0,$=ne.dataReady;let xe=T(E,se);Ne(t.TEXTURE_CUBE_MAP,E);let ue;if(_e){L&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,et,se.width,se.height);for(let te=0;te<6;te++){ue=ce[te].mipmaps;for(let we=0;we<ue.length;we++){const Oe=ue[we];E.format!==ai?Ie!==null?L?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Oe.width,Oe.height,Ie,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,et,Oe.width,Oe.height,0,Oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Oe.width,Oe.height,Ie,ze,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,et,Oe.width,Oe.height,0,Ie,ze,Oe.data)}}}else{if(ue=E.mipmaps,L&&oe){ue.length>0&&xe++;const te=Tt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,et,te.width,te.height)}for(let te=0;te<6;te++)if(Se){L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,Ie,ze,ce[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,ce[te].width,ce[te].height,0,Ie,ze,ce[te].data);for(let we=0;we<ue.length;we++){const Rt=ue[we].image[te].image;L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Rt.width,Rt.height,Ie,ze,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,et,Rt.width,Rt.height,0,Ie,ze,Rt.data)}}else{L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,ze,ce[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,Ie,ze,ce[te]);for(let we=0;we<ue.length;we++){const Oe=ue[we];L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Ie,ze,Oe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,et,Ie,ze,Oe.image[te])}}}f(E)&&m(t.TEXTURE_CUBE_MAP),re.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function De(C,E,z,Q,ne,re){const de=s.convert(z.format,z.colorSpace),q=s.convert(z.type),J=M(z.internalFormat,de,q,z.normalized,z.colorSpace),_e=i.get(E),Se=i.get(z);if(Se.__renderTarget=E,!_e.__hasExternalTextures){const ce=Math.max(1,E.width>>re),se=Math.max(1,E.height>>re);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,re,J,ce,se,E.depth,0,de,q,null):n.texImage2D(ne,re,J,ce,se,0,de,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,0,kt(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(C,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const Q=E.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,re=b(E.stencilBuffer,ne),de=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;$e(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(E),re,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(E),re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,C)}else{const Q=E.textures;for(let ne=0;ne<Q.length;ne++){const re=Q[ne],de=s.convert(re.format,re.colorSpace),q=s.convert(re.type),J=M(re.internalFormat,de,q,re.normalized,re.colorSpace);$e(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(E),J,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(E),J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(C,E,z){const Q=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,E.depthTexture);const _e=s.convert(E.depthTexture.format),Se=s.convert(E.depthTexture.type);let ce;E.depthTexture.format===ir?ce=t.DEPTH_COMPONENT24:E.depthTexture.format===ls&&(ce=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,E.width,E.height,0,_e,Se,null)}}else F(E.depthTexture,0);const re=ne.__webglTexture,de=kt(E),q=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,J=E.depthTexture.format===ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===ir)$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,q,re,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,q,re,0);else if(E.depthTexture.format===ls)$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,q,re,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,q,re,0);else throw new Error("Unknown depthTexture format")}function rt(C){const E=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let Q=0;Q<6;Q++)qe(E.__webglFramebuffer[Q],C,Q);else{const Q=C.texture.mipmaps;Q&&Q.length>0?qe(E.__webglFramebuffer[0],C,0):qe(E.__webglFramebuffer,C,0)}else if(z){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),_t(E.__webglDepthbuffer[Q],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}else{const Q=C.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),_t(E.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ft(C,E,z){const Q=i.get(C);E!==void 0&&De(Q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&rt(C)}function je(C){const E=C.texture,z=i.get(C),Q=i.get(E);C.addEventListener("dispose",_);const ne=C.textures,re=C.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),re){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let J=0;J<E.mipmaps.length;J++)z.__webglFramebuffer[q][J]=t.createFramebuffer()}else z.__webglFramebuffer[q]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)z.__webglFramebuffer[q]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(de)for(let q=0,J=ne.length;q<J;q++){const _e=i.get(ne[q]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&$e(C)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<ne.length;q++){const J=ne[q];z.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const _e=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),ce=M(J.internalFormat,_e,Se,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),se=kt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ce,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,z.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),_t(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)De(z.__webglFramebuffer[q][J],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else De(z.__webglFramebuffer[q],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(E)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let q=0,J=ne.length;q<J;q++){const _e=ne[q],Se=i.get(_e);let ce=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Se.__webglTexture),Ne(ce,_e),De(z.__webglFramebuffer,C,_e,t.COLOR_ATTACHMENT0+q,ce,0),f(_e)&&m(ce)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,Q.__webglTexture),Ne(q,E),E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)De(z.__webglFramebuffer[J],C,E,t.COLOR_ATTACHMENT0,q,J);else De(z.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,q,0);f(E)&&m(q),n.unbindTexture()}C.depthBuffer&&rt(C)}function Ot(C){const E=C.textures;for(let z=0,Q=E.length;z<Q;z++){const ne=E[z];if(f(ne)){const re=y(C),de=i.get(ne).__webglTexture;n.bindTexture(re,de),m(re),n.unbindTexture()}}}const xt=[],An=[];function N(C){if(C.samples>0){if($e(C)===!1){const E=C.textures,z=C.width,Q=C.height;let ne=t.COLOR_BUFFER_BIT;const re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(C),q=E.length>1;if(q)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const J=C.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Se=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,z,Q,0,0,z,Q,ne,t.NEAREST),l===!0&&(xt.length=0,An.length=0,xt.push(t.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xt.push(re),An.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,An)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Se=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function $e(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function pe(C,E){const z=C.colorSpace,Q=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Qc&&z!==Sr&&(Ke.getTransfer(z)===nt?(Q!==ai||ne!==Ln)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",z)),E}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.getTextureUnits=Y,this.setTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ae,this.rebindTextures=ft,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yU(t,e){function n(i,r=Sr){let s;const o=Ke.getTransfer(r);if(i===Ln)return t.UNSIGNED_BYTE;if(i===km)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===i1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===e1)return t.BYTE;if(i===t1)return t.SHORT;if(i===Ga)return t.UNSIGNED_SHORT;if(i===Om)return t.INT;if(i===Pi)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===nr)return t.HALF_FLOAT;if(i===r1)return t.ALPHA;if(i===s1)return t.RGB;if(i===ai)return t.RGBA;if(i===ir)return t.DEPTH_COMPONENT;if(i===ls)return t.DEPTH_STENCIL;if(i===o1)return t.RED;if(i===zm)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===Vm)return t.RG_INTEGER;if(i===Hm)return t.RGBA_INTEGER;if(i===fc||i===pc||i===mc||i===gc)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sf||i===Mf||i===Ef||i===Tf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wf||i===bf||i===Af||i===Cf||i===Rf||i===Kc||i===Pf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wf||i===bf)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Af)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cf)return s.COMPRESSED_R11_EAC;if(i===Rf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Kc)return s.COMPRESSED_RG11_EAC;if(i===Pf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Df||i===Lf||i===Nf||i===If||i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Df)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===If)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ff)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Of)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wf||i===Xf||i===Yf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wf)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qf||i===$f||i===Zc||i===Kf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$f)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const SU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MU=`
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

}`;class EU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new g1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:SU,fragmentShader:MU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TU extends jr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",v=new EU,f={},m=n.getContextAttributes();let y=null,M=null;const b=[],T=[],A=new Be;let _=null;const R=new Yn;R.viewport=new Ct;const P=new Yn;P.viewport=new Ct;const D=[R,P],U=new N3;let B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=b[K];return he===void 0&&(he=new wd,b[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=b[K];return he===void 0&&(he=new wd,b[K]=he),he.getGripSpace()},this.getHand=function(K){let he=b[K];return he===void 0&&(he=new wd,b[K]=he),he.getHandSpace()};function I(K){const he=T.indexOf(K.inputSource);if(he===-1)return;const le=b[he];le!==void 0&&(le.update(K.inputSource,K.frame,c||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let K=0;K<b.length;K++){const he=T[K];he!==null&&(T[K]=null,b[K].disconnect(he))}B=null,Y=null,v.reset();for(const K in f)delete f[K];e.setRenderTarget(y),p=null,d=null,h=null,r=null,M=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Re=null,Ue=null;m.depth&&(Ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=m.stencil?ls:ir,Re=m.stencil?ja:Pi);const De={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ri(d.textureWidth,d.textureHeight,{format:ai,type:Ln,depthTexture:new Ao(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ri(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(K){for(let he=0;he<K.removed.length;he++){const le=K.removed[he],Re=T.indexOf(le);Re>=0&&(T[Re]=null,b[Re].disconnect(le))}for(let he=0;he<K.added.length;he++){const le=K.added[he];let Re=T.indexOf(le);if(Re===-1){for(let De=0;De<b.length;De++)if(De>=T.length){T.push(le),Re=De;break}else if(T[De]===null){T[De]=le,Re=De;break}if(Re===-1)break}const Ue=b[Re];Ue&&Ue.connect(le)}}const F=new V,X=new V;function Z(K,he,le){F.setFromMatrixPosition(he.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const Re=F.distanceTo(X),Ue=he.projectionMatrix.elements,De=le.projectionMatrix.elements,_t=Ue[14]/(Ue[10]-1),qe=Ue[14]/(Ue[10]+1),rt=(Ue[9]+1)/Ue[5],ft=(Ue[9]-1)/Ue[5],je=(Ue[8]-1)/Ue[0],Ot=(De[8]+1)/De[0],xt=_t*je,An=_t*Ot,N=Re/(-je+Ot),kt=N*-je;if(he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(kt),K.translateZ(N),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ue[10]===-1)K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $e=_t+N,ut=qe+N,pe=xt-kt,Tt=An+(Re-kt),C=rt*qe/ut*$e,E=ft*qe/ut*$e;K.projectionMatrix.makePerspective(pe,Tt,C,E,$e,ut),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let he=K.near,le=K.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(le=v.depthFar)),U.near=P.near=R.near=he,U.far=P.far=R.far=le,(B!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,Y=U.far),U.layers.mask=K.layers.mask|6,R.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;const Re=K.parent,Ue=U.cameras;ae(U,Re);for(let De=0;De<Ue.length;De++)ae(Ue[De],Re);Ue.length===2?Z(U,R,P):U.projectionMatrix.copy(R.projectionMatrix),fe(K,U,Re)};function fe(K,he,le){le===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(U)},this.getCameraTexture=function(K){return f[K]};let Ge=null;function Ye(K,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Re=!1;le.length!==U.cameras.length&&(U.cameras.length=0,Re=!0);for(let qe=0;qe<le.length;qe++){const rt=le[qe];let ft=null;if(p!==null)ft=p.getViewport(rt);else{const Ot=h.getViewSubImage(d,rt);ft=Ot.viewport,qe===0&&(e.setRenderTargetTextures(M,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(M))}let je=D[qe];je===void 0&&(je=new Yn,je.layers.enable(qe),je.viewport=new Ct,D[qe]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ft.x,ft.y,ft.width,ft.height),qe===0&&(U.matrix.copy(je.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Re===!0&&U.cameras.push(je)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const qe=h.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&v.init(qe,r.renderState)}if(Ue&&Ue.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let qe=0;qe<le.length;qe++){const rt=le[qe].camera;if(rt){let ft=f[rt];ft||(ft=new g1,f[rt]=ft);const je=h.getCameraImage(rt);ft.sourceTexture=je}}}}for(let le=0;le<b.length;le++){const Re=T[le],Ue=b[le];Re!==null&&Ue!==void 0&&Ue.update(Re,he,c||o)}Ge&&Ge(K,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ne=new y1;Ne.setAnimationLoop(Ye),this.setAnimationLoop=function(K){Ge=K},this.dispose=function(){}}}const wU=new It,A1=new Fe;A1.set(-1,0,0,0,1,0,0,0,1);function bU(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,v1(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,m,y,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(v,f):f.isMeshLambertMaterial?(s(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(v,f),h(v,f)):f.isMeshPhongMaterial?(s(v,f),u(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(v,f),d(v,f),f.isMeshPhysicalMaterial&&p(v,f,M)):f.isMeshMatcapMaterial?(s(v,f),g(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),S(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(o(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?l(v,f,m,y):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===bn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===bn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const m=e.get(f),y=m.envMap,M=m.envMapRotation;y&&(v.envMap.value=y,v.envMapRotation.value.setFromMatrix4(wU.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(A1),v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function o(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,m,y){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*m,v.scale.value=y*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function h(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function p(v,f,m){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,f){f.matcap&&(v.matcap.value=f.matcap)}function S(v,f){const m=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,y){const M=y.program;i.uniformBlockBinding(m,M)}function c(m,y){let M=r[m.id];M===void 0&&(g(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",v));const b=y.program;i.updateUBOMapping(m,b);const T=e.render.frame;s[m.id]!==T&&(d(m),s[m.id]=T)}function u(m){const y=h();m.__bindingPointIndex=y;const M=t.createBuffer(),b=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const y=r[m.id],M=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,A=M.length;T<A;T++){const _=Array.isArray(M[T])?M[T]:[M[T]];for(let R=0,P=_.length;R<P;R++){const D=_[R];if(p(D,T,R,b)===!0){const U=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let I=0;I<B.length;I++){const H=B[I],k=S(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,U+Y,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):ArrayBuffer.isView(H)?D.__data.set(new H.constructor(H.buffer,H.byteOffset,D.__data.length)):(H.toArray(D.__data,Y),Y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,y,M,b){const T=m.value,A=y+"_"+M;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:ArrayBuffer.isView(T)?b[A]=T.slice():b[A]=T.clone(),!0;{const _=b[A];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return b[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function g(m){const y=m.uniforms;let M=0;const b=16;for(let A=0,_=y.length;A<_;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let P=0,D=R.length;P<D;P++){const U=R[P],B=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,I=B.length;Y<I;Y++){const H=B[Y],k=S(H),F=M%b,X=F%k.boundary,Z=F+X;M+=X,Z!==0&&b-Z<k.storage&&(M+=b-Z),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=k.storage}}}const T=M%b;return T>0&&(M+=b-T),m.__size=M,m.__cache={},this}function S(m){const y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=48,y.storage=48):m.isMatrix4?(y.boundary=64,y.storage=64):m.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",m),y}function v(m){const y=m.target;y.removeEventListener("dispose",v);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}const CU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function RU(){return _i===null&&(_i=new h3(CU,16,16,xs,nr),_i.name="DFG_LUT",_i.minFilter=ln,_i.magFilter=ln,_i.wrapS=Wi,_i.wrapT=Wi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class PU{constructor(e={}){const{canvas:n=H2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=p,v=new Set([Hm,Vm,zm]),f=new Set([Ln,Pi,Ga,ja,km,Bm]),m=new Uint32Array(4),y=new Int32Array(4),M=new V;let b=null,T=null;const A=[],_=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,U=null;this._outputColorSpace=yn;let B=0,Y=0,I=null,H=-1,k=null;const F=new Ct,X=new Ct;let Z=null;const ae=new tt(0);let fe=0,Ge=n.width,Ye=n.height,Ne=1,K=null,he=null;const le=new Ct(0,0,Ge,Ye),Re=new Ct(0,0,Ge,Ye);let Ue=!1;const De=new Ym;let _t=!1,qe=!1;const rt=new It,ft=new V,je=new Ct,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function An(){return I===null?Ne:1}let N=i;function kt(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fm}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),N===null){const O="webgl2";if(N=kt(O,w),N===null)throw kt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Qe("WebGLRenderer: "+w.message),w}let $e,ut,pe,Tt,C,E,z,Q,ne,re,de,q,J,_e,Se,ce,se,Ie,ze,et,L,oe,$;function xe(){$e=new RN(N),$e.init(),L=new yU(N,$e),ut=new SN(N,$e,e,L),pe=new _U(N,$e),ut.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Tt=new LN(N),C=new rU,E=new xU(N,$e,pe,C,ut,L,Tt),z=new CN(P),Q=new F3(N),oe=new xN(N,Q),ne=new PN(N,Q,Tt,oe),re=new IN(N,ne,Q,oe,Tt),Ie=new NN(N,ut,E),Se=new MN(C),de=new iU(P,z,$e,ut,oe,Se),q=new bU(P,C),J=new oU,_e=new hU($e),se=new _N(P,z,pe,re,g,l),ce=new vU(P,re,ut),$=new AU(N,Tt,ut,pe),ze=new yN(N,$e,Tt),et=new DN(N,$e,Tt),Tt.programs=de.programs,P.capabilities=ut,P.extensions=$e,P.properties=C,P.renderLists=J,P.shadowMap=ce,P.state=pe,P.info=Tt}xe(),S!==Ln&&(R=new FN(S,n.width,n.height,r,s));const ue=new TU(P,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(w){w!==void 0&&(Ne=w,this.setSize(Ge,Ye,!1))},this.getSize=function(w){return w.set(Ge,Ye)},this.setSize=function(w,O,W=!0){if(ue.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=w,Ye=O,n.width=Math.floor(w*Ne),n.height=Math.floor(O*Ne),W===!0&&(n.style.width=w+"px",n.style.height=O+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Ge*Ne,Ye*Ne).floor()},this.setDrawingBufferSize=function(w,O,W){Ge=w,Ye=O,Ne=W,n.width=Math.floor(w*W),n.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(S===Ln){Qe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,O,W,G){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,O,W,G),pe.viewport(F.copy(le).multiplyScalar(Ne).round())},this.getScissor=function(w){return w.copy(Re)},this.setScissor=function(w,O,W,G){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,O,W,G),pe.scissor(X.copy(Re).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){pe.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,W=!0){let G=0;if(w){let j=!1;if(I!==null){const ve=I.texture.format;j=v.has(ve)}if(j){const ve=I.texture.type,Me=f.has(ve),ge=se.getClearColor(),Te=se.getClearAlpha(),be=ge.r,ke=ge.g,He=ge.b;Me?(m[0]=be,m[1]=ke,m[2]=He,m[3]=Te,N.clearBufferuiv(N.COLOR,0,m)):(y[0]=be,y[1]=ke,y[2]=He,y[3]=Te,N.clearBufferiv(N.COLOR,0,y))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),se.dispose(),J.dispose(),_e.dispose(),C.dispose(),z.dispose(),re.dispose(),oe.dispose(),$.dispose(),de.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ng),ue.removeEventListener("sessionend",ig),Wr.stop()};function te(w){w.preventDefault(),Qv("WebGLRenderer: Context Lost."),D=!0}function we(){Qv("WebGLRenderer: Context Restored."),D=!1;const w=Tt.autoReset,O=ce.enabled,W=ce.autoUpdate,G=ce.needsUpdate,j=ce.type;xe(),Tt.autoReset=w,ce.enabled=O,ce.autoUpdate=W,ce.needsUpdate=G,ce.type=j}function Oe(w){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Rt(w){const O=w.target;O.removeEventListener("dispose",Rt),st(O)}function st(w){Ni(w),C.remove(w)}function Ni(w){const O=C.get(w).programs;O!==void 0&&(O.forEach(function(W){de.releaseProgram(W)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,G,j,ve){O===null&&(O=Ot);const Me=j.isMesh&&j.matrixWorld.determinant()<0,ge=D1(w,O,W,G,j);pe.setMaterial(G,Me);let Te=W.index,be=1;if(G.wireframe===!0){if(Te=ne.getWireframeAttribute(W),Te===void 0)return;be=2}const ke=W.drawRange,He=W.attributes.position;let Ae=ke.start*be,ot=(ke.start+ke.count)*be;ve!==null&&(Ae=Math.max(Ae,ve.start*be),ot=Math.min(ot,(ve.start+ve.count)*be)),Te!==null?(Ae=Math.max(Ae,0),ot=Math.min(ot,Te.count)):He!=null&&(Ae=Math.max(Ae,0),ot=Math.min(ot,He.count));const Pt=ot-Ae;if(Pt<0||Pt===1/0)return;oe.setup(j,G,ge,W,Te);let wt,lt=ze;if(Te!==null&&(wt=Q.get(Te),lt=et,lt.setIndex(wt)),j.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*An()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(j.isLine){let Jt=G.linewidth;Jt===void 0&&(Jt=1),pe.setLineWidth(Jt*An()),j.isLineSegments?lt.setMode(N.LINES):j.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else j.isPoints?lt.setMode(N.POINTS):j.isSprite&&lt.setMode(N.TRIANGLES);if(j.isBatchedMesh)if($e.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,ye=j._multiDrawCounts,Cn=j._multiDrawCount,Ze=Te?Q.get(Te).bytesPerElement:1,Vn=C.get(G).currentProgram.getUniforms();for(let mi=0;mi<Cn;mi++)Vn.setValue(N,"_gl_DrawID",mi),lt.render(Jt[mi]/Ze,ye[mi])}else if(j.isInstancedMesh)lt.renderInstances(Ae,Pt,j.count);else if(W.isInstancedBufferGeometry){const Jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Jt);lt.renderInstances(Ae,Pt,ye)}else lt.render(Ae,Pt)};function pi(w,O,W){w.transparent===!0&&w.side===Hi&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,sl(w,O,W),w.side=Or,w.needsUpdate=!0,sl(w,O,W),w.side=Hi):sl(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),T=_e.get(W),T.init(O),_.push(T),W.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),w!==W&&w.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const G=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const ge=ve[Me];pi(ge,W,j),G.add(ge)}else pi(ve,W,j),G.add(ve)}),T=_.pop(),G},this.compileAsync=function(w,O,W=null){const G=this.compile(w,O,W);return new Promise(j=>{function ve(){if(G.forEach(function(Me){C.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){j(w);return}setTimeout(ve,10)}$e.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Cu=null;function R1(w){Cu&&Cu(w)}function ng(){Wr.stop()}function ig(){Wr.start()}const Wr=new y1;Wr.setAnimationLoop(R1),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(w){Cu=w,ue.setAnimationLoop(w),w===null?Wr.stop():Wr.start()},ue.addEventListener("sessionstart",ng),ue.addEventListener("sessionend",ig),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(w,O);const W=ue.enabled===!0&&ue.isPresenting===!0,G=R!==null&&(I===null||W)&&R.begin(P,I);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,O,I),T=_e.get(w,_.length),T.init(O),T.state.textureUnits=E.getTextureUnits(),_.push(T),rt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),De.setFromProjectionMatrix(rt,Ei,O.reversedDepth),qe=this.localClippingEnabled,_t=Se.init(this.clippingPlanes,qe),b=J.get(w,A.length),b.init(),A.push(b),ue.enabled===!0&&ue.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Ru(Me,O,-1/0,P.sortObjects)}Ru(w,O,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(K,he),xt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,xt&&se.addToRenderList(b,w),this.info.render.frame++,_t===!0&&Se.beginShadows();const j=T.state.shadowsArray;if(ce.render(j,w,O),_t===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&R.hasRenderPass())===!1){const Me=b.opaque,ge=b.transmissive;if(T.setupLights(),O.isArrayCamera){const Te=O.cameras;if(ge.length>0)for(let be=0,ke=Te.length;be<ke;be++){const He=Te[be];sg(Me,ge,w,He)}xt&&se.render(w);for(let be=0,ke=Te.length;be<ke;be++){const He=Te[be];rg(b,w,He,He.viewport)}}else ge.length>0&&sg(Me,ge,w,O),xt&&se.render(w),rg(b,w,O)}I!==null&&Y===0&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),G&&R.end(P),w.isScene===!0&&w.onAfterRender(P,w,O),oe.resetDefaultState(),H=-1,k=null,_.pop(),_.length>0?(T=_[_.length-1],E.setTextureUnits(T.state.textureUnits),_t===!0&&Se.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,U!==null&&U.renderEnd()};function Ru(w,O,W,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){G&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(rt);const Me=re.update(w),ge=w.material;ge.visible&&b.push(w,Me,ge,W,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){const Me=re.update(w),ge=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),je.copy(Me.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(rt)),Array.isArray(ge)){const Te=Me.groups;for(let be=0,ke=Te.length;be<ke;be++){const He=Te[be],Ae=ge[He.materialIndex];Ae&&Ae.visible&&b.push(w,Me,Ae,W,je.z,He)}}else ge.visible&&b.push(w,Me,ge,W,je.z,null)}}const ve=w.children;for(let Me=0,ge=ve.length;Me<ge;Me++)Ru(ve[Me],O,W,G)}function rg(w,O,W,G){const{opaque:j,transmissive:ve,transparent:Me}=w;T.setupLightsView(W),_t===!0&&Se.setGlobalState(P.clippingPlanes,W),G&&pe.viewport(F.copy(G)),j.length>0&&rl(j,O,W),ve.length>0&&rl(ve,O,W),Me.length>0&&rl(Me,O,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function sg(w,O,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ae=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Ri(1,1,{generateMipmaps:!0,type:Ae?nr:Ln,minFilter:as,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ve=T.state.transmissionRenderTarget[G.id],Me=G.viewport||F;ve.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Te=P.getActiveCubeFace(),be=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(ae),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),xt&&se.render(W);const ke=P.toneMapping;P.toneMapping=Ci;const He=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),_t===!0&&Se.setGlobalState(P.clippingPlanes,G),rl(w,W,G),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ot=0,Pt=O.length;ot<Pt;ot++){const wt=O[ot],{object:lt,geometry:Jt,material:ye,group:Cn}=wt;if(ye.side===Hi&&lt.layers.test(G.layers)){const Ze=ye.side;ye.side=bn,ye.needsUpdate=!0,og(lt,W,G,Jt,ye,Cn),ye.side=Ze,ye.needsUpdate=!0,Ae=!0}}Ae===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve))}P.setRenderTarget(ge,Te,be),P.setClearColor(ae,fe),He!==void 0&&(G.viewport=He),P.toneMapping=ke}function rl(w,O,W){const G=O.isScene===!0?O.overrideMaterial:null;for(let j=0,ve=w.length;j<ve;j++){const Me=w[j],{object:ge,geometry:Te,group:be}=Me;let ke=Me.material;ke.allowOverride===!0&&G!==null&&(ke=G),ge.layers.test(W.layers)&&og(ge,O,W,Te,ke,be)}}function og(w,O,W,G,j,ve){w.onBeforeRender(P,O,W,G,j,ve),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(P,O,W,G,w,ve),j.transparent===!0&&j.side===Hi&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,P.renderBufferDirect(W,O,G,j,w,ve),j.side=Or,j.needsUpdate=!0,P.renderBufferDirect(W,O,G,j,w,ve),j.side=Hi):P.renderBufferDirect(W,O,G,j,w,ve),w.onAfterRender(P,O,W,G,j,ve)}function sl(w,O,W){O.isScene!==!0&&(O=Ot);const G=C.get(w),j=T.state.lights,ve=T.state.shadowsArray,Me=j.state.version,ge=de.getParameters(w,j.state,ve,O,W,T.state.lightProbeGridArray),Te=de.getProgramCacheKey(ge);let be=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const ke=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=z.get(w.envMap||G.environment,ke),G.envMapRotation=G.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",Rt),be=new Map,G.programs=be);let He=be.get(Te);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===Me)return lg(w,ge),He}else ge.uniforms=de.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,W,ge),w.onBeforeCompile(ge,P),He=de.acquireProgram(ge,Te),be.set(Te,He),G.uniforms=ge.uniforms;const Ae=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=Se.uniform),lg(w,ge),G.needsLights=N1(w),G.lightsStateVersion=Me,G.needsLights&&(Ae.ambientLightColor.value=j.state.ambient,Ae.lightProbe.value=j.state.probe,Ae.directionalLights.value=j.state.directional,Ae.directionalLightShadows.value=j.state.directionalShadow,Ae.spotLights.value=j.state.spot,Ae.spotLightShadows.value=j.state.spotShadow,Ae.rectAreaLights.value=j.state.rectArea,Ae.ltc_1.value=j.state.rectAreaLTC1,Ae.ltc_2.value=j.state.rectAreaLTC2,Ae.pointLights.value=j.state.point,Ae.pointLightShadows.value=j.state.pointShadow,Ae.hemisphereLights.value=j.state.hemi,Ae.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ae.spotLightMatrix.value=j.state.spotLightMatrix,Ae.spotLightMap.value=j.state.spotLightMap,Ae.pointShadowMatrix.value=j.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=He,G.uniformsList=null,He}function ag(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=_c.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function lg(w,O){const W=C.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function P1(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let W=0,G=w.length;W<G;W++){const j=w[W];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function D1(w,O,W,G,j){O.isScene!==!0&&(O=Ot),E.resetTextureUnits();const ve=O.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,ge=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ke.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,be=z.get(G.envMap||Me,Te),ke=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Pt=!!W.morphAttributes.color;let wt=Ci;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=P.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=lt!==void 0?lt.length:0,ye=C.get(G),Cn=T.state.lights;if(_t===!0&&(qe===!0||w!==k)){const dt=w===k&&G.id===H;Se.setState(G,w,dt)}let Ze=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Cn.state.version||ye.outputColorSpace!==ge||j.isBatchedMesh&&ye.batching===!1||!j.isBatchedMesh&&ye.batching===!0||j.isBatchedMesh&&ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ye.instancing===!1||!j.isInstancedMesh&&ye.instancing===!0||j.isSkinnedMesh&&ye.skinning===!1||!j.isSkinnedMesh&&ye.skinning===!0||j.isInstancedMesh&&ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ye.instancingMorph===!1&&j.morphTexture!==null||ye.envMap!==be||G.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==He||ye.morphTargets!==Ae||ye.morphNormals!==ot||ye.morphColors!==Pt||ye.toneMapping!==wt||ye.morphTargetsCount!==Jt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,ye.__version=G.version);let Vn=ye.currentProgram;Ze===!0&&(Vn=sl(G,O,j),U&&G.isNodeMaterial&&U.onUpdateProgram(G,Vn,ye));let mi=!1,sr=!1,Es=!1;const ct=Vn.getUniforms(),Dt=ye.uniforms;if(pe.useProgram(Vn.program)&&(mi=!0,sr=!0,Es=!0),G.id!==H&&(H=G.id,sr=!0),ye.needsLights){const dt=P1(T.state.lightProbeGridArray,j);ye.lightProbeGrid!==dt&&(ye.lightProbeGrid=dt,sr=!0)}if(mi||k!==w){pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ct.setValue(N,"projectionMatrix",w.projectionMatrix),ct.setValue(N,"viewMatrix",w.matrixWorldInverse);const ar=ct.map.cameraPosition;ar!==void 0&&ar.setValue(N,ft.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,sr=!0,Es=!0)}if(ye.needsLights&&(Cn.state.directionalShadowMap.length>0&&ct.setValue(N,"directionalShadowMap",Cn.state.directionalShadowMap,E),Cn.state.spotShadowMap.length>0&&ct.setValue(N,"spotShadowMap",Cn.state.spotShadowMap,E),Cn.state.pointShadowMap.length>0&&ct.setValue(N,"pointShadowMap",Cn.state.pointShadowMap,E)),j.isSkinnedMesh){ct.setOptional(N,j,"bindMatrix"),ct.setOptional(N,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(N,"boneTexture",dt.boneTexture,E))}j.isBatchedMesh&&(ct.setOptional(N,j,"batchingTexture"),ct.setValue(N,"batchingTexture",j._matricesTexture,E),ct.setOptional(N,j,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",j._indirectTexture,E),ct.setOptional(N,j,"batchingColorTexture"),j._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",j._colorsTexture,E));const or=W.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Ie.update(j,W,Vn),(sr||ye.receiveShadow!==j.receiveShadow)&&(ye.receiveShadow=j.receiveShadow,ct.setValue(N,"receiveShadow",j.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Dt.envMapIntensity.value=O.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=RU()),sr){if(ct.setValue(N,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&L1(Dt,Es),ve&&G.fog===!0&&q.refreshFogUniforms(Dt,ve),q.refreshMaterialUniforms(Dt,G,Ne,Ye,T.state.transmissionRenderTarget[w.id]),ye.needsLights&&ye.lightProbeGrid){const dt=ye.lightProbeGrid;Dt.probesSH.value=dt.texture,Dt.probesMin.value.copy(dt.boundingBox.min),Dt.probesMax.value.copy(dt.boundingBox.max),Dt.probesResolution.value.copy(dt.resolution)}_c.upload(N,ag(ye),Dt,E)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_c.upload(N,ag(ye),Dt,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(N,"center",j.center),ct.setValue(N,"modelViewMatrix",j.modelViewMatrix),ct.setValue(N,"normalMatrix",j.normalMatrix),ct.setValue(N,"modelMatrix",j.matrixWorld),G.uniformsGroups!==void 0){const dt=G.uniformsGroups;for(let ar=0,Ts=dt.length;ar<Ts;ar++){const cg=dt[ar];$.update(cg,Vn),$.bind(cg,Vn)}}return Vn}function L1(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function N1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,O,W){const G=C.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),C.get(w.texture).__webglTexture=O,C.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const W=C.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const I1=N.createFramebuffer();this.setRenderTarget=function(w,O=0,W=0){I=w,B=O,Y=W;let G=null,j=!1,ve=!1;if(w){const ge=C.get(w);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),F.copy(w.viewport),X.copy(w.scissor),Z=w.scissorTest,pe.viewport(F),pe.scissor(X),pe.setScissorTest(Z),H=-1;return}else if(ge.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(ge.__hasExternalTextures)E.rebindTextures(w,C.get(w.texture).__webglTexture,C.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ke=w.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&C.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const be=C.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[O])?G=be[O][W]:G=be[O],j=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?G=C.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?G=be[W]:G=be,F.copy(w.viewport),X.copy(w.scissor),Z=w.scissorTest}else F.copy(le).multiplyScalar(Ne).floor(),X.copy(Re).multiplyScalar(Ne).floor(),Z=Ue;if(W!==0&&(G=I1),pe.bindFramebuffer(N.FRAMEBUFFER,G)&&pe.drawBuffers(w,G),pe.viewport(F),pe.scissor(X),pe.setScissorTest(Z),j){const ge=C.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,W)}else if(ve){const ge=O;for(let Te=0;Te<w.textures.length;Te++){const be=C.get(w.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,be.__webglTexture,W,ge)}}else if(w!==null&&W!==0){const ge=C.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,W)}H=-1},this.readRenderTargetPixels=function(w,O,W,G,j,ve,Me,ge=0){if(!(w&&w.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(N.FRAMEBUFFER,Te);try{const be=w.textures[ge],ke=be.format,He=be.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(ke)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(He)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&W>=0&&W<=w.height-j&&N.readPixels(O,W,G,j,L.convert(ke),L.convert(He),ve)}finally{const be=I!==null?C.get(I).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,G,j,ve,Me,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(O>=0&&O<=w.width-G&&W>=0&&W<=w.height-j){pe.bindFramebuffer(N.FRAMEBUFFER,Te);const be=w.textures[ge],ke=be.format,He=be.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),N.readPixels(O,W,G,j,L.convert(ke),L.convert(He),0);const ot=I!==null?C.get(I).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,ot);const Pt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await G2(N,Pt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.deleteBuffer(Ae),N.deleteSync(Pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,W=0){const G=Math.pow(2,-W),j=Math.floor(w.image.width*G),ve=Math.floor(w.image.height*G),Me=O!==null?O.x:0,ge=O!==null?O.y:0;E.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Me,ge,j,ve),pe.unbindTexture()};const U1=N.createFramebuffer(),F1=N.createFramebuffer();this.copyTextureToTexture=function(w,O,W=null,G=null,j=0,ve=0){let Me,ge,Te,be,ke,He,Ae,ot,Pt;const wt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(W!==null)Me=W.max.x-W.min.x,ge=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,ke=W.min.y,He=W.isBox3?W.min.z:0;else{const Dt=Math.pow(2,-j);Me=Math.floor(wt.width*Dt),ge=Math.floor(wt.height*Dt),w.isDataArrayTexture?Te=wt.depth:w.isData3DTexture?Te=Math.floor(wt.depth*Dt):Te=1,be=0,ke=0,He=0}G!==null?(Ae=G.x,ot=G.y,Pt=G.z):(Ae=0,ot=0,Pt=0);const lt=L.convert(O.format),Jt=L.convert(O.type);let ye;O.isData3DTexture?(E.setTexture3D(O,0),ye=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),ye=N.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),ye=N.TEXTURE_2D),pe.activeTexture(N.TEXTURE0),pe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),pe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),pe.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Cn=pe.getParameter(N.UNPACK_ROW_LENGTH),Ze=pe.getParameter(N.UNPACK_IMAGE_HEIGHT),Vn=pe.getParameter(N.UNPACK_SKIP_PIXELS),mi=pe.getParameter(N.UNPACK_SKIP_ROWS),sr=pe.getParameter(N.UNPACK_SKIP_IMAGES);pe.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,be),pe.pixelStorei(N.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,He);const Es=w.isDataArrayTexture||w.isData3DTexture,ct=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Dt=C.get(w),or=C.get(O),dt=C.get(Dt.__renderTarget),ar=C.get(or.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,dt.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Ts=0;Ts<Te;Ts++)Es&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,C.get(w).__webglTexture,j,He+Ts),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,C.get(O).__webglTexture,ve,Pt+Ts)),N.blitFramebuffer(be,ke,Me,ge,Ae,ot,Me,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||C.has(w)){const Dt=C.get(w),or=C.get(O);pe.bindFramebuffer(N.READ_FRAMEBUFFER,U1),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,F1);for(let dt=0;dt<Te;dt++)Es?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.__webglTexture,j,He+dt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dt.__webglTexture,j),ct?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,or.__webglTexture,ve,Pt+dt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,or.__webglTexture,ve),j!==0?N.blitFramebuffer(be,ke,Me,ge,Ae,ot,Me,ge,N.COLOR_BUFFER_BIT,N.NEAREST):ct?N.copyTexSubImage3D(ye,ve,Ae,ot,Pt+dt,be,ke,Me,ge):N.copyTexSubImage2D(ye,ve,Ae,ot,be,ke,Me,ge);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(ye,ve,Ae,ot,Pt,Me,ge,Te,lt,Jt,wt.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,ve,Ae,ot,Pt,Me,ge,Te,lt,wt.data):N.texSubImage3D(ye,ve,Ae,ot,Pt,Me,ge,Te,lt,Jt,wt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,Ae,ot,Me,ge,lt,Jt,wt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,Ae,ot,wt.width,wt.height,lt,wt.data):N.texSubImage2D(N.TEXTURE_2D,ve,Ae,ot,Me,ge,lt,Jt,wt);pe.pixelStorei(N.UNPACK_ROW_LENGTH,Cn),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,Vn),pe.pixelStorei(N.UNPACK_SKIP_ROWS,mi),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,sr),ve===0&&O.generateMipmaps&&N.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(w){C.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){B=0,Y=0,I=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const Y_={type:"change"},Km={type:"start"},C1={type:"end"},Kl=new f1,q_=new _r,DU=Math.cos(70*X2.DEG2RAD),Bt=new V,xn=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$d=1e-6;class LU extends I3{constructor(e,n=null){super(e,n),this.state=at.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new kr,this._lastTargetPosition=new V,this._quat=new kr().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new S_,this._sphericalDelta=new S_,this._scale=1,this._panOffset=new V,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new V,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=IU.bind(this),this._onPointerDown=NU.bind(this),this._onPointerUp=UU.bind(this),this._onContextMenu=HU.bind(this),this._onMouseWheel=kU.bind(this),this._onKeyDown=BU.bind(this),this._onTouchStart=zU.bind(this),this._onTouchMove=VU.bind(this),this._onMouseDown=FU.bind(this),this._onMouseMove=OU.bind(this),this._interceptControlDown=GU.bind(this),this._interceptControlUp=jU.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y_),this.update(),this.state=at.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Bt.copy(n).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),r<-Math.PI?r+=xn:r>Math.PI&&(r-=xn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Kl.origin.copy(this.object.position),Kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kl.direction))<DU?this.object.lookAt(this.target):(q_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kl.intersectPlane(q_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>$d||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$d||this._lastTargetPosition.distanceToSquared(this.target)>$d?(this.dispatchEvent(Y_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Bt.setFromMatrixColumn(n,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,n){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(n,1):(Bt.setFromMatrixColumn(n,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Bt.copy(r).sub(this.target);let s=Bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function NU(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function IU(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function UU(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(C1),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function FU(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=at.DOLLY;break;case ho.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=at.ROTATE}break;case ho.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Km)}function OU(t){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function kU(t){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(t.preventDefault(),this.dispatchEvent(Km),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(C1))}function BU(t){this.enabled!==!1&&this._handleKeyDown(t)}function zU(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=at.TOUCH_ROTATE;break;case ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=at.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Km)}function VU(t){switch(this._trackPointer(t),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=at.NONE}}function HU(t){this.enabled!==!1&&t.preventDefault()}function GU(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jU(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class WU extends qm{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new C3(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function n(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let S=0;S<5;S++)if(i(g,u,S))return!1;return!0}function i(c,u,h){for(let d=0,p=c.length;d<p;d++)if(c[d]!==u.getUint8(h+d))return!1;return!0}function r(c){const u=new DataView(c),h=u.getUint32(80,!0);let d,p,g,S=!1,v,f,m,y,M;for(let D=0;D<70;D++)u.getUint32(D,!1)==1129270351&&u.getUint8(D+4)==82&&u.getUint8(D+5)==61&&(S=!0,v=new Float32Array(h*3*3),f=u.getUint8(D+6)/255,m=u.getUint8(D+7)/255,y=u.getUint8(D+8)/255,M=u.getUint8(D+9)/255);const b=84,T=12*4+2,A=new fi,_=new Float32Array(h*3*3),R=new Float32Array(h*3*3),P=new tt;for(let D=0;D<h;D++){const U=b+D*T,B=u.getFloat32(U,!0),Y=u.getFloat32(U+4,!0),I=u.getFloat32(U+8,!0);if(S){const H=u.getUint16(U+48,!0);H&32768?(d=f,p=m,g=y):(d=(H&31)/31,p=(H>>5&31)/31,g=(H>>10&31)/31)}for(let H=1;H<=3;H++){const k=U+H*12,F=D*3*3+(H-1)*3;_[F]=u.getFloat32(k,!0),_[F+1]=u.getFloat32(k+4,!0),_[F+2]=u.getFloat32(k+8,!0),R[F]=B,R[F+1]=Y,R[F+2]=I,S&&(P.setRGB(d,p,g,yn),v[F]=P.r,v[F+1]=P.g,v[F+2]=P.b)}}return A.setAttribute("position",new Fn(_,3)),A.setAttribute("normal",new Fn(R,3)),S&&(A.setAttribute("color",new Fn(v,3)),A.hasColors=!0,A.alpha=M),A}function s(c){const u=new fi,h=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const S=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,v=new RegExp("vertex"+S+S+S,"g"),f=new RegExp("normal"+S+S+S,"g"),m=[],y=[],M=[],b=new V;let T,A=0,_=0,R=0;for(;(T=h.exec(c))!==null;){_=R;const P=T[0],D=(T=p.exec(P))!==null?T[1]:"";for(M.push(D);(T=d.exec(P))!==null;){let Y=0,I=0;const H=T[0];for(;(T=f.exec(H))!==null;)b.x=parseFloat(T[1]),b.y=parseFloat(T[2]),b.z=parseFloat(T[3]),I++;for(;(T=v.exec(H))!==null;)m.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),y.push(b.x,b.y,b.z),Y++,R++;I!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),Y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const U=_,B=R-_;u.userData.groupNames=M,u.addGroup(U,B,A),A++}return u.setAttribute("position",new di(m,3)),u.setAttribute("normal",new di(y,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return n(l)?r(l):s(o(e))}}function XU({open:t,title:e="3D Model",src:n,onClose:i}){const r=ee.useRef(null),s=ee.useMemo(()=>new WU,[]),o=t&&typeof n=="string"&&n.length>0;return ee.useEffect(()=>{if(!o)return;const a=r.current;if(!a)return;const l=new PU({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.outputColorSpace=yn,a.appendChild(l.domElement);const c=new o3;c.background=null;const u=new Yn(45,1,.01,100);u.position.set(.8,.5,1.2);const h=new LU(u,l.domElement);h.enableDamping=!0,h.dampingFactor=.08,h.minDistance=.2,h.maxDistance=8,c.add(new D3(16777215,.7));const d=new y_(16777215,.9);d.position.set(2,2,2),c.add(d);const p=new y_(16777215,.35);p.position.set(-2,1,-1),c.add(p);let g=null,S=null,v=!1;const f=()=>{const{width:M,height:b}=a.getBoundingClientRect();l.setSize(M,b,!1),u.aspect=M/Math.max(b,1),u.updateProjectionMatrix()},m=M=>{M.key==="Escape"&&(i==null||i())};window.addEventListener("resize",f),window.addEventListener("keydown",m),f(),s.load(n,M=>{if(v)return;M.computeVertexNormals(),M.center();const b=new M3({color:10134706,metalness:.25,roughness:.5});g=new Di(M,b),c.add(g);const T=new Io().setFromObject(g),A=T.getSize(new V),_=T.getCenter(new V),P=(Math.max(A.x,A.y,A.z)||1)*1.6;u.position.set(_.x+P,_.y+P*.7,_.z+P),h.target.copy(_),h.update()},void 0,()=>{});const y=()=>{h.update(),l.render(c,u),S=window.requestAnimationFrame(y)};return y(),()=>{var M,b,T,A,_,R;v=!0,window.removeEventListener("resize",f),window.removeEventListener("keydown",m),S&&window.cancelAnimationFrame(S),h.dispose(),g&&(c.remove(g),(b=(M=g.geometry)==null?void 0:M.dispose)==null||b.call(M),(A=(T=g.material)==null?void 0:T.dispose)==null||A.call(T)),l.dispose(),(R=(_=l.domElement)==null?void 0:_.remove)==null||R.call(_)}},[o,s,i,n]),t?x.jsxs("div",{className:"model-modal-backdrop",role:"dialog","aria-modal":"true","aria-label":e,children:[x.jsx("button",{className:"model-modal-close",type:"button",onClick:i,"aria-label":"Close 3D viewer",children:x.jsx(ui,{size:20})}),x.jsxs("div",{className:"model-modal",children:[x.jsxs("div",{className:"model-modal-header",children:[x.jsx("h3",{children:e}),x.jsx("p",{children:"Drag to rotate, scroll to zoom."})]}),x.jsx("div",{className:"model-modal-canvas",ref:r})]}),x.jsx("button",{className:"model-modal-backdrop-hit",type:"button",onClick:i,"aria-label":"Close"})]}):null}const YU=({product:t,isOpen:e,onClose:n,instagramUrl:i,theme:r,onAddToCart:s})=>x.jsx(vs,{children:e&&t&&x.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},children:[x.jsx(fn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:r==="light"?"rgba(0, 0, 0, 0.4)":"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(8px)"}}),x.jsxs(fn.div,{initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},style:{position:"relative",background:r==="light"?"#fff":"#171717",color:r==="light"?"#000":"#fff",width:"100%",maxWidth:"1000px",borderRadius:"24px",overflow:"hidden",display:"flex",flexDirection:window.innerWidth<768?"column":"row",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",maxHeight:"90vh"},children:[x.jsx("button",{onClick:n,style:{position:"absolute",right:"1.5rem",top:"1.5rem",background:r==="light"?"#f3f4f6":"#262626",border:"none",borderRadius:"50%",width:"40px",height:"40px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},children:x.jsx(ui,{size:20})}),x.jsx("div",{style:{background:r==="light"?"#f8fafc":"#262626",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem",borderRight:r==="light"?"1px solid #e2e8f0":"1px solid #333"},children:x.jsx(fn.img,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.1},src:t.image,alt:t.name,style:{width:"100%",height:"auto",borderRadius:"16px",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}})}),x.jsxs("div",{style:{padding:"2.5rem",display:"flex",flexDirection:"column",overflowY:"auto"},children:[x.jsx("span",{style:{color:"#3b82f6",fontWeight:"700",fontSize:"0.8rem",textTransform:"uppercase",marginBottom:"0.5rem"},children:t.tag}),x.jsx("h2",{style:{fontSize:"2rem",fontWeight:"800",marginBottom:"0.5rem"},children:t.name}),x.jsx("div",{style:{fontSize:"2.5rem",fontWeight:"900",color:r==="light"?"#1e3a8a":"#60a5fa",margin:"1rem 0"},children:t.price}),x.jsx("p",{style:{lineHeight:"1.6",color:r==="light"?"#4b5563":"#a3a3a3",marginBottom:"2rem"},children:t.longDescription}),t.highlights&&x.jsx("div",{style:{marginBottom:"1.5rem"},children:x.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:t.highlights.map(o=>x.jsxs("li",{style:{fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[x.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#3b82f6"}})," ",o]},o))})}),x.jsxs("div",{style:{marginBottom:"2rem"},children:[x.jsx("h4",{style:{fontSize:"1rem",marginBottom:"1rem",fontWeight:"700"},children:"Features & Specs"}),x.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:t.specs.map(o=>x.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem"},children:[x.jsx(em,{size:14,color:"#3b82f6"})," ",o]},o))})]}),x.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"2rem",padding:"1rem",background:r==="light"?"#f8fafc":"#262626",borderRadius:"16px"},children:[x.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[x.jsx(mS,{size:18,color:"#3b82f6"}),x.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"Fast Delivery"})]}),x.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[x.jsx(fS,{size:18,color:"#3b82f6"}),x.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"1 Year Support"})]}),x.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[x.jsx(Ew,{size:18,color:"#3b82f6"}),x.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"Quality Test"})]})]}),x.jsxs("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:[x.jsxs("button",{onClick:()=>{s(t),n()},className:"primary-button",style:{padding:"1.25rem",borderRadius:"100px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",fontSize:"1rem",fontWeight:"700",border:"none",cursor:"pointer"},children:["Add to Cart ",x.jsx(Kp,{size:20})]}),x.jsx("p",{style:{fontSize:"0.75rem",textAlign:"center",opacity:.6},children:"Add to cart and checkout on WhatsApp"})]})]})]})]})}),qU="/assets/1599rs-Dz-93ukQ.jpeg",$U="/assets/robomitra-keychain-white-DxHzwwDs.jpeg",KU="/assets/robomitra-keychain-black-C712l2Az.jpeg",ZU="/assets/heroma1in-C1v5yOQQ.jpeg",QU="/assets/mainsecond-CwSoDdWc.jpeg",$_="https://wa.me/917977473538",JU=[{icon:Zp,title:"Touch Interaction",desc:"Tap to change emotions and interact with your RoboMitra."},{icon:_b,title:"Cute Animated Eyes",desc:"Expressive digital eyes that show feelings like a real friend."},{icon:Jp,title:"Sound & Talking",desc:"Built-in buzzer for sounds, beeps and robot talking."},{icon:Dw,title:"Mini Games",desc:"Play fun mini games like Flappy, Dino and more on OLED."},{icon:uS,title:"Rechargeable Battery",desc:"2-4 Hours backup with Type-C fast charging support."},{icon:Qp,title:"Robot Communication",desc:"Robots talk to each other using smart BLE technology."}],Kd=[{id:"r1",name:"RoboMitra",nameHighlight:"R1",tagline:"Smart Interactive Robot",price:"₹1,599",image:qU,whatsappMsg:"I want to buy RoboMitra R1",tag:"Flagship",description:"The premium portable model with battery backup and richer reactions.",longDescription:"RoboMitra R1 is the flagship companion with internal battery backup, polished finishing, expressive animations, and a more portable feel for people who want the full experience.",highlights:["Built-in 500mAh battery","USB-C charging","Advanced expression set","Premium matte finish"],specs:["Built-in Battery","2-4 Hours Backup","Interactive Eyes","USB-C Charging"]},{id:"keychain-white",name:"RoboMitra",nameHighlight:"Alex",tagline:"Pocket-Sized Companion Robot (White)",price:"₹999",image:$U,whatsappMsg:"I want to buy RoboMitra Alex",tag:"New Launch",description:"A pocket-sized white RoboMitra companion (Alex) with glowing expressive eyes.",longDescription:"RoboMitra Alex brings the companion robot look into a pocket-sized collectible form. It is designed for bags, keys, desks, and gifting with a glossy white body, rechargeable design, and animated blue display.",highlights:["Pocket-sized keychain design (Alex)","Animated blue display","Rechargeable build","Premium white finish"],specs:["Keychain Form","Animated Display","Rechargeable","Interactive","Pocket-Sized"]},{id:"keychain-black",name:"RoboMitra",nameHighlight:"Andy",tagline:"Pocket-Sized Companion Robot (Black)",price:"₹999",image:KU,whatsappMsg:"I want to buy RoboMitra Andy",tag:"New Variant",description:"A stealth black RoboMitra bag keychain (Andy) with a cyber-style animated screen.",longDescription:"RoboMitra Andy is the darker pocket companion variant with a textured black body, bright blue animated screen, rechargeable power, and a compact keyring form that is easy to carry anywhere.",highlights:["Stealth black textured body (Andy)","Animated blue screen","Portable keyring form","Rechargeable everyday carry"],specs:["Keychain Form","Animated Display","Rechargeable","Portable","Black Finish"]}],eF=[{icon:fS,title:"Proudly Made in India",desc:"Designed and built with pride"},{icon:em,title:"Secure Payments",desc:"100% safe and secure checkout"},{icon:mS,title:"Fast Delivery",desc:"Quick delivery across India"},{icon:Jw,title:"1 Year Warranty",desc:"We've got you covered"}],tF=[{icon:pS,title:"Premium Quality",desc:"Components"},{icon:Zp,title:"Easy to Use",desc:"For Everyone"},{icon:Jp,title:"Great Support",desc:"We are here for you"},{icon:em,title:"Innovative",desc:"& Fun"}];function nF({onNavigate:t,onAddToCart:e,cartCount:n,onCartClick:i,searchQuery:r="",onSearchChange:s,user:o,onLoginClick:a}){const[l,c]=ee.useState(null),[u,h]=ee.useState(!1),d=Kd.filter(p=>{const g=r.toLowerCase();return p.name.toLowerCase().includes(g)||p.nameHighlight.toLowerCase().includes(g)||p.tagline.toLowerCase().includes(g)||p.description.toLowerCase().includes(g)});return x.jsxs("div",{className:"page-shell",children:[x.jsx(YU,{isOpen:!!l,product:l,onClose:()=>c(null),instagramUrl:$_,theme:"light",onAddToCart:e}),x.jsx(XU,{open:u,title:"RoboMitra 3D Model",src:"/models/lets-goo.stl",onClose:()=>h(!1)}),x.jsx(tm,{ariaLabel:"Primary",onNavigate:t,theme:"light",onToggleTheme:()=>{},isHome:!0,links:[],cartCount:n,onCartClick:i,searchQuery:r,onSearchChange:s,user:o,onLoginClick:a,products:Kd}),x.jsxs("main",{children:[x.jsx("section",{className:"rm-hero",id:"home",style:{padding:0,background:"#fff",width:"100%"},children:x.jsx($t,{delay:.05,children:x.jsx("a",{href:$_,target:"_blank",rel:"noreferrer",style:{display:"block",width:"100%"},children:x.jsx("img",{src:ZU,alt:"Meet RoboMitra R1 - Smart. Cute. Interactive.",style:{width:"100%",height:"auto",display:"block"}})})})}),x.jsx("section",{className:"rm-features-section",id:"features",children:x.jsxs("div",{className:"rm-features-inner",children:[x.jsxs($t,{delay:.04,children:[x.jsx("p",{className:"rm-section-label",children:"Why Choose RoboMitra?"}),x.jsx("h2",{className:"rm-section-heading",children:"Packed with Smart Features"}),x.jsx("div",{className:"rm-section-divider"})]}),x.jsx("div",{className:"rm-features-grid",children:JU.map(({icon:p,title:g,desc:S},v)=>x.jsxs($t,{as:"article",className:"rm-feat-card",delay:.06*(v+1),children:[x.jsx("div",{className:"rm-feat-card-icon",children:x.jsx(p,{size:22})}),x.jsx("h3",{children:g}),x.jsx("p",{children:S})]},g))})]})}),x.jsx("section",{className:"rm-product-banner","aria-label":"RoboMitra specifications",style:{padding:0},children:x.jsx($t,{delay:.08,children:x.jsxs("div",{style:{position:"relative",width:"100%",overflow:"hidden"},children:[x.jsx("img",{src:QU,alt:"RoboMitra R1 Product Specifications",style:{width:"100%",height:"auto",display:"block"}}),x.jsx("button",{className:"rm-banner-overlay-btn",type:"button",onClick:()=>e(Kd[0]),title:"Add to Cart - RoboMitra R1","aria-label":"Add RoboMitra R1 to Cart",style:{border:"none",cursor:"pointer"}})]})})}),x.jsx("section",{className:"rm-explore-section",id:"products",children:x.jsxs("div",{className:"rm-explore-inner",children:[x.jsxs($t,{delay:.04,children:[x.jsx("h2",{className:"rm-explore-heading",children:"Explore Our Robots"}),x.jsx("div",{className:"rm-explore-divider"})]}),x.jsxs("div",{className:"rm-explore-layout",children:[x.jsx("div",{className:"rm-products-row",children:d.length===0?x.jsxs("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"48px 24px",color:"var(--text-secondary)"},children:[x.jsxs("p",{style:{fontSize:"1.05rem",fontWeight:700,margin:0},children:['No robots found matching "',r,'"']}),x.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"8px",marginBottom:0},children:'Try searching for "Alex" (white) or "Andy" (black)!'})]}):d.map((p,g)=>x.jsxs($t,{as:"article",className:"rm-product-card",delay:.08*(g+1),onClick:()=>c(p),children:[x.jsx("div",{className:"rm-product-img-wrap",children:x.jsx("img",{src:p.image,alt:`${p.name} ${p.nameHighlight}`})}),x.jsxs("div",{className:"rm-product-info",children:[x.jsxs("p",{className:"rm-product-name",children:[p.name," ",x.jsx("span",{children:p.nameHighlight})]}),x.jsx("p",{className:"rm-product-tagline",children:p.tagline}),x.jsx("p",{className:"rm-product-price",children:p.price}),x.jsx("button",{className:"rm-product-buy-btn",type:"button",onClick:S=>{S.stopPropagation(),e(p)},children:"Add to Cart"})]})]},p.nameHighlight))}),x.jsx($t,{className:"rm-trust-col",delay:.12,children:eF.map(({icon:p,title:g,desc:S})=>x.jsxs("div",{className:"rm-trust-item",children:[x.jsx("div",{className:"rm-trust-icon",children:x.jsx(p,{size:20})}),x.jsxs("div",{className:"rm-trust-text",children:[x.jsx("h4",{children:g}),x.jsx("p",{children:S})]})]},g))})]})]})}),x.jsx("section",{className:"rm-trust-strip","aria-label":"RoboMitra promises",children:x.jsx("div",{className:"rm-trust-strip-inner",children:tF.map(({icon:p,title:g,desc:S})=>x.jsxs("div",{className:"rm-strip-item",children:[x.jsx("div",{className:"rm-strip-icon",children:x.jsx(p,{size:20})}),x.jsx("h4",{children:g}),x.jsx("p",{children:S})]},g))})})]})]})}function iF({onNavigate:t,cartCount:e,onCartClick:n,user:i,onLoginClick:r}){return x.jsxs("div",{className:"page-shell support-shell",children:[x.jsx(tm,{ariaLabel:"Support navigation",onNavigate:t,theme:"light",onToggleTheme:()=>{},links:[],cartCount:e,onCartClick:n,user:i,onLoginClick:r}),x.jsxs("main",{style:{maxWidth:960,margin:"0 auto",padding:"48px 24px"},children:[x.jsxs($t,{className:"support-hero",delay:.04,children:[x.jsx("p",{className:"section-tag",style:{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)",marginBottom:8},children:"Support and FAQ"}),x.jsx("h1",{style:{fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em",marginBottom:12},children:"Help & Frequently Asked Questions"}),x.jsx("p",{style:{fontSize:"1rem",color:"var(--text-muted)",lineHeight:1.7,maxWidth:560},children:"If you are facing charging, connection, touch, display, or power issues, this page covers the most common fixes."})]}),x.jsx($t,{delay:.08,style:{marginTop:36},children:x.jsxs("div",{style:{background:"var(--blue-light)",border:"1px solid #c7d7fd",borderRadius:16,padding:"24px",display:"flex",gap:16,alignItems:"flex-start",marginBottom:40},children:[x.jsx("div",{style:{width:44,height:44,borderRadius:10,background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",flexShrink:0},children:x.jsx(ga,{size:20})}),x.jsxs("div",{children:[x.jsx("p",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4},children:"Contact Support"}),x.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"var(--text)",marginBottom:8},children:"Need direct help?"}),x.jsxs("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[x.jsxs("a",{href:"mailto:robomitra@zohomail.in",style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.88rem",color:"var(--blue)",fontWeight:600},children:[x.jsx(ga,{size:14})," robomitra@zohomail.in"]}),x.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.88rem",color:"var(--text-muted)"},children:[x.jsx(ww,{size:14})," Response: 24–48 hours"]})]})]})]})}),x.jsxs("section",{children:[x.jsx($t,{delay:.1,children:x.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,color:"var(--text)",marginBottom:24},children:"Quick Fixes"})}),x.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16},children:o2.map(({icon:s,title:o,points:a},l)=>x.jsxs($t,{as:"article",delay:.05*(l+1),style:{border:"1px solid var(--border)",borderRadius:14,padding:22,background:"#fff",transition:"all 200ms"},children:[x.jsx("div",{style:{width:42,height:42,borderRadius:10,background:"var(--blue-light)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--blue)",marginBottom:12},children:x.jsx(s,{size:20})}),x.jsx("h3",{style:{fontSize:"0.92rem",fontWeight:700,color:"var(--text)",marginBottom:10},children:o}),x.jsx("ul",{style:{paddingLeft:16,display:"flex",flexDirection:"column",gap:4},children:a.map(c=>x.jsx("li",{style:{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.5},children:c},c))})]},o))})]}),x.jsx($t,{delay:.12,style:{marginTop:40},children:x.jsxs("div",{style:{background:"var(--bg-soft)",border:"1px solid var(--border)",borderRadius:16,padding:24,display:"flex",gap:16,alignItems:"flex-start"},children:[x.jsx("div",{style:{width:44,height:44,borderRadius:10,background:"var(--blue-light)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--blue)",flexShrink:0},children:x.jsx(Rb,{size:20})}),x.jsxs("div",{children:[x.jsx("p",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4},children:"Need More Help?"}),x.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"var(--text)",marginBottom:8},children:"Email us with your issue, photos or videos. We will help you ASAP."}),x.jsxs("a",{href:"mailto:robomitra@zohomail.in",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 18px",background:"var(--blue)",color:"#fff",borderRadius:8,fontSize:"0.88rem",fontWeight:700,textDecoration:"none"},children:[x.jsx(ga,{size:15})," robomitra@zohomail.in"]})]})]})})]})]})}const zs={main:{options:[{label:"📦 Where is my order?",text:"Where is my order?",value:"order"},{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"🔧 How to get support?",text:"How to get support?",value:"support"},{label:"✨ What is RoboMitra?",text:"What is RoboMitra?",value:"about"}]},order:{response:"Once your order is shipped, you will receive a tracking link via email (usually within 24-48 hours) to monitor your delivery. Custom orders may take 3-5 business days for assembly and testing before dispatch.",options:[{label:"🗓️ How many days to deliver?",text:"How many days to deliver?",value:"delivery_time"},{label:"📍 Can I change delivery address?",text:"Can I change delivery address?",value:"change_address"},{label:"💬 Talk to a human agent",text:"Talk to a human agent",value:"human_agent"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},delivery_time:{response:`Usually, shipping takes:
- Metro cities: 2-4 business days
- Other regions: 4-7 business days
- Custom keychains: Please add 3 days for custom assembly.`,options:[{label:"📦 Track order status",text:"Track order status",value:"order"},{label:"💬 Talk to a human agent",text:"Talk to a human agent",value:"human_agent"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},change_address:{response:"You can change your delivery address within 12 hours of placing your order. Please send your order ID and the new address to robomitra@zohomail.in or message us on Instagram DM as soon as possible!",options:[{label:"📦 Track order status",text:"Track order status",value:"order"},{label:"💬 Talk to a human agent",text:"Talk to a human agent",value:"human_agent"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},place:{response:"You can place an order directly through our official Instagram page via Direct Message (DM). Simply click the 'Buy Now' button in the navigation header to visit our page, choose your model (Mini Companion White or Bag Keychain Black), and send us a DM. We accept secure UPI payments.",options:[{label:"💰 What are the prices?",text:"What are the prices?",value:"pricing"},{label:"🎨 Are there custom designs?",text:"Are there custom designs?",value:"customization"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},pricing:{response:`Here is our current pricing catalog:
- RoboMitra Mini Companion White: Rs. 999
- RoboMitra Bag Keychain Black: Rs. 999
- RoboMitra R1 (Flagship desk buddy): Rs. 1,599`,options:[{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},customization:{response:"Yes! We support custom eye expression animations, body finishes, and personal tag engravings. Drop us a DM on Instagram with your requirements, and our design team will work on a preview template for you!",options:[{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},support:{response:"If you're facing charging, battery life, screen, or reaction issues, please check our troubleshooting guides on the Support page. If the issue persists, you can contact our support team at robomitra@zohomail.in. We respond within 24-48 hours.",options:[{label:"🔋 Battery / Charging guide",text:"Battery / Charging guide",value:"battery_guide"},{label:"🛠️ How to reset RoboMitra?",text:"How to reset RoboMitra?",value:"reset_guide"},{label:"📧 Direct Email Contact",text:"Direct Email Contact",value:"email_contact"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},battery_guide:{response:`RoboMitra charging instructions:
1. Use the provided USB-C cable.
2. Connect to a 5V 1A adapter (avoid high-wattage fast chargers).
3. Charging takes ~45 minutes. A solid blue display indicates fully charged.`,options:[{label:"🛠️ How to reset RoboMitra?",text:"How to reset RoboMitra?",value:"reset_guide"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},reset_guide:{response:`To reset your RoboMitra companion:
1. Locate the tiny reset pinhole next to the USB-C port.
2. Use a paperclip or SIM ejector tool to press it gently for 3 seconds.
3. The display will flash, resetting the animations.`,options:[{label:"🔋 Battery / Charging guide",text:"Battery / Charging guide",value:"battery_guide"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},email_contact:{response:`You can reach us at robomitra@zohomail.in. When emailing, please include:
1. Your order reference ID
2. A short video or photo of the issue
3. Description of the problem
This helps our engineering team diagnose and solve your issue faster!`,options:[{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},about:{response:"RoboMitra is a cyber-style desktop companion robot and bag keychain series. They feature bright animated screen reactions, touch interactivity, rechargeable battery, and high-quality premium body finishes. Perfect for desks, setups, and backpacks!",options:[{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"🔧 Troubleshooting / support?",text:"Troubleshooting / support?",value:"support"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},human_agent:{response:"I have queued your query for a human team member. Please send us a message on Instagram DM or email us at robomitra@zohomail.in with your details and we'll reply right away!",options:[{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},hello:{response:"Hello there! 😊 How can I help you today? Please choose one of the options below or ask your question directly!",options:[{label:"📦 Where is my order?",text:"Where is my order?",value:"order"},{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"🔧 How to get support?",text:"How to get support?",value:"support"},{label:"✨ What is RoboMitra?",text:"What is RoboMitra?",value:"about"}]},fallback:{response:"I'm not sure I understand that query. 🤖 I am a helper assistant! Try asking about 'order tracking', 'how to buy', 'product specs', or 'support', or click one of the quick options below.",options:[{label:"📦 Where is my order?",text:"Where is my order?",value:"order"},{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"🔧 How to get support?",text:"How to get support?",value:"support"},{label:"✨ What is RoboMitra?",text:"What is RoboMitra?",value:"about"}]}};function rF(){var v;const[t,e]=ee.useState(!1),[n,i]=ee.useState("main"),[r,s]=ee.useState([{id:"greeting",sender:"ai",text:"Hello! 👋 I'm your RoboMitra AI Assistant. How can I help you today?",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[o,a]=ee.useState(""),[l,c]=ee.useState(!1),u=ee.useRef(null),h=async f=>{var m;try{const y=`You are the official RoboMitra AI Assistant, a friendly and smart companion chatbot for the RoboMitra website.
You must answer questions about RoboMitra products, ordering, shipping, and support using the following official details:

Catalog & Pricing:
- RoboMitra R1 (Flagship desk buddy): Rs. 1,599. White casing, rechargeable 500mAh internal battery (2-4 hours backup, Type-C charging), expressive animated OLED eyes, touch control, buzzer sounds/beeps, BLE robot communication, mini-games (Flappy, Dino).
- RoboMitra Mini Companion White: Rs. 999. Glossy white pocket-sized keychain design, rechargeable, animated blue display.
- RoboMitra Bag Keychain Black: Rs. 999. Stealth black textured pocket-sized keychain design, rechargeable, animated blue display.

How to Buy:
- Customers can buy by clicking 'Buy Now' or 'Order Now' which redirects them to our official Instagram page where they can order via Direct Message (DM). We accept secure UPI payments.

Shipping & Delivery:
- Shipping time: Metro cities: 2-4 business days. Other regions: 4-7 business days. Custom orders require 3 extra days for assembly.
- Tracking links are emailed within 24-48 hours of shipping.
- Delivery address can be changed within 12 hours of ordering by emailing robomitra@zohomail.in or messaging our Instagram DM.

Troubleshooting & Support:
- Charging: Use the provided USB-C cable and a 5V 1A adapter. Avoid high-wattage fast chargers. Takes 45 minutes. Solid blue display means fully charged.
- Reset: Use a paperclip to press the reset pinhole next to the USB-C port for 3 seconds.
- Email: robomitra@zohomail.in (Include order ID, issue details, and a video/photo).

Guidelines:
- Keep your answers concise, friendly, and human-like.
- Use emojis where appropriate to keep it fun and engaging.
- You can also answer general knowledge questions, write code, or tell jokes, just like a real AI. Keep those answers concise too.
- If asked about ordering, always encourage them to click the buttons or message us on Instagram DM.`,M=((m=f[f.length-1])==null?void 0:m.text)||"Hello",b=f.slice(-5,-1).map(P=>`${P.sender==="user"?"User":"Assistant"}: ${P.text}`).join(`
`),T=b?`${b}
User: ${M}`:M,A=`https://text.pollinations.ai/${encodeURIComponent(T)}?system=${encodeURIComponent(y)}&model=openai`,_=await fetch(A);if(!_.ok)throw new Error("API call failed");return await _.text()}catch(y){return console.error("AI Assistant API error:",y),null}},d=f=>{const m=f.toLowerCase();return m.includes("hello")||m.includes("hi")||m.includes("hey")||m.includes("greetings")||m.includes("yo")?"hello":m.includes("buy")||m.includes("place")||m.includes("purchase")||m.includes("shop")||m.includes("how to order")?m.includes("price")||m.includes("cost")||m.includes("how much")||m.includes("catalog")?"pricing":m.includes("custom")||m.includes("design")||m.includes("color")?"customization":"place":m.includes("price")||m.includes("cost")||m.includes("how much")?"pricing":m.includes("custom")||m.includes("design")||m.includes("color")?"customization":m.includes("order")||m.includes("track")||m.includes("ship")||m.includes("delivery")?m.includes("day")||m.includes("how long")||m.includes("time")||m.includes("when")?"delivery_time":m.includes("address")||m.includes("location")||m.includes("change")?"change_address":"order":m.includes("day")||m.includes("how long")||m.includes("time")||m.includes("when")?"delivery_time":m.includes("address")||m.includes("location")||m.includes("change")?"change_address":m.includes("battery")||m.includes("charge")||m.includes("power")||m.includes("cable")||m.includes("usb")?"battery_guide":m.includes("reset")||m.includes("restart")||m.includes("pinhole")||m.includes("reboot")?"reset_guide":m.includes("email")||m.includes("contact")||m.includes("write")||m.includes("message")?"email_contact":m.includes("support")||m.includes("help")||m.includes("fix")||m.includes("broken")?"support":m.includes("what")||m.includes("robomitra")||m.includes("concept")||m.includes("who")||m.includes("features")?"about":m.includes("human")||m.includes("agent")||m.includes("person")||m.includes("live chat")?"human_agent":"fallback"},p=async(f,m)=>{if(f==="main"){const T={id:Math.random().toString(),sender:"user",text:m,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(A=>[...A,T]),c(!0),setTimeout(()=>{const A={id:Math.random().toString(),sender:"ai",text:"Returned to main menu. How can I help you?",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(_=>[..._,A]),i("main"),c(!1)},800);return}const y={id:Math.random().toString(),sender:"user",text:m,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},M=[...r,y];s(M),c(!0);const b=await h(M);if(b){const T={id:Math.random().toString(),sender:"ai",text:b,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(A=>[...A,T]),i(f),c(!1)}else{const T=zs[f]||zs.main,A={id:Math.random().toString(),sender:"ai",text:T.response||"How can I help you?",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(_=>[..._,A]),i(f),c(!1)}},g=async f=>{if(!f.trim())return;const m={id:Math.random().toString(),sender:"user",text:f,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},y=[...r,m];s(y),a(""),c(!0);const M=await h(y);if(M){const b={id:Math.random().toString(),sender:"ai",text:M,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(T=>[...T,b]),c(!1)}else{const b=d(f),T=zs[b],A={id:Math.random().toString(),sender:"ai",text:T.response||zs.fallback.response,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(_=>[..._,A]),i(b),c(!1)}};ee.useEffect(()=>{var f;(f=u.current)==null||f.scrollIntoView({behavior:"smooth"})},[r,l]);const S=((v=zs[n])==null?void 0:v.options)||zs.main.options;return x.jsxs("div",{className:"ai-assistant-wrapper",children:[x.jsx("button",{className:`ai-fab ${t?"open":""}`,onClick:()=>e(!t),"aria-label":"Toggle AI Assistant",children:x.jsx(vs,{mode:"wait",children:t?x.jsx(fn.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:x.jsx(ui,{size:24})},"close"):x.jsxs(fn.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.2},className:"ai-fab-icon-inner",children:[x.jsx(Wh,{size:24}),x.jsx("span",{className:"ai-fab-badge"})]},"open")})}),x.jsx(vs,{children:t&&x.jsxs(fn.div,{className:"ai-chat-panel",initial:{opacity:0,y:50,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:50,scale:.9},transition:{type:"spring",stiffness:300,damping:25},children:[x.jsxs("div",{className:"ai-chat-header",children:[x.jsxs("div",{className:"ai-header-left",children:[x.jsxs("div",{className:"ai-header-avatar",children:[x.jsx(Wh,{size:20,className:"ai-avatar-icon"}),x.jsx("span",{className:"ai-avatar-status"})]}),x.jsxs("div",{children:[x.jsx("h4",{className:"ai-header-title",children:"RoboMitra Assistant"}),x.jsx("p",{className:"ai-header-subtitle",children:"Online • Powered by AI"})]})]}),x.jsx("button",{className:"ai-header-close",onClick:()=>e(!1),"aria-label":"Close Assistant",children:x.jsx(ui,{size:18})})]}),x.jsx("div",{className:"ai-chat-body",children:x.jsxs("div",{className:"ai-messages-list",children:[r.map(f=>x.jsx("div",{className:`ai-message-bubble-wrapper ${f.sender==="user"?"user":"ai"}`,children:x.jsxs("div",{className:"ai-message-bubble",children:[x.jsx("p",{className:"ai-message-text",children:f.text}),x.jsx("span",{className:"ai-message-time",children:f.time})]})},f.id)),l&&x.jsx("div",{className:"ai-message-bubble-wrapper ai",children:x.jsx("div",{className:"ai-message-bubble typing",children:x.jsxs("div",{className:"ai-typing-indicator",children:[x.jsx("span",{}),x.jsx("span",{}),x.jsx("span",{})]})})}),x.jsx("div",{ref:u})]})}),x.jsxs("div",{className:"ai-chat-faqs",children:[x.jsx("p",{className:"ai-faq-label",children:"Suggested Questions:"}),x.jsx("div",{className:"ai-faq-grid",children:S.map(f=>x.jsx("button",{className:"ai-faq-btn",onClick:()=>p(f.value,f.text||f.label),disabled:l,children:f.label},f.value))})]}),x.jsxs("form",{className:"ai-chat-input-form",onSubmit:f=>{f.preventDefault(),o.trim()&&g(o)},children:[x.jsx("input",{type:"text",placeholder:"Ask something...",className:"ai-chat-input",value:o,onChange:f=>a(f.target.value),disabled:l}),x.jsx("button",{type:"submit",className:"ai-chat-send-btn",disabled:!o.trim()||l,"aria-label":"Send message",children:x.jsx(hb,{size:16})})]})]})})]})}function sF({isOpen:t,onClose:e,cartItems:n,onUpdateQuantity:i,onRemoveItem:r,onClearCart:s,whatsappUrl:o,user:a,onLoginClick:l}){const c=n.reduce((d,p)=>d+parseFloat(p.price.replace(/[^\d]/g,""))*p.quantity,0),u=d=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(d),h=()=>{if(n.length===0)return;let d=`Hello RoboMitra! 👋 I would like to place an order:

`;d+=`🛒 *Order Details:*
`,n.forEach(g=>{d+=`  • ${g.quantity}x ${g.name} ${g.nameHighlight||""} — ${g.price} each
`}),d+=`
💰 *Total Amount:* ${u(c)}
`,a&&(d+=`
👤 *Customer Details:*
`,d+=`  Name: ${a.name}
`,a.email&&(d+=`  Email: ${a.email}
`),d+=`
📦 *Shipping Address:*
  ${a.address}
`),d+=`
Please confirm my order and share payment details! 😊`;const p=`${o}?text=${encodeURIComponent(d)}`;window.open(p,"_blank","noopener,noreferrer")};return x.jsx(vs,{children:t&&x.jsxs("div",{className:"cart-overlay-wrapper",children:[x.jsx(fn.div,{className:"cart-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e}),x.jsxs(fn.div,{className:"cart-drawer",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",stiffness:350,damping:30},children:[x.jsxs("div",{className:"cart-header",children:[x.jsxs("div",{className:"cart-header-title",children:[x.jsx(b0,{size:20,className:"cart-icon-main"}),x.jsxs("h3",{children:["Your Cart (",n.reduce((d,p)=>d+p.quantity,0),")"]})]}),x.jsx("button",{className:"cart-close-btn",onClick:e,"aria-label":"Close cart",children:x.jsx(ui,{size:20})})]}),x.jsx("div",{className:"cart-items-body",children:n.length===0?x.jsxs("div",{className:"cart-empty-state",children:[x.jsx(b0,{size:48,className:"cart-empty-icon"}),x.jsx("p",{children:"Your cart is empty"}),x.jsx("button",{className:"cart-shop-now-btn",onClick:e,children:"Shop Our Products"})]}):x.jsx("div",{className:"cart-items-list",children:n.map(d=>x.jsxs("div",{className:"cart-item",children:[x.jsx("img",{src:d.image,alt:d.name,className:"cart-item-img"}),x.jsxs("div",{className:"cart-item-details",children:[x.jsxs("div",{className:"cart-item-header",children:[x.jsxs("h4",{children:[d.name," ",d.nameHighlight]}),x.jsx("button",{className:"cart-item-remove",onClick:()=>r(d.id),"aria-label":"Remove item",children:x.jsx(Eb,{size:14})})]}),x.jsx("p",{className:"cart-item-price",children:d.price}),x.jsxs("div",{className:"cart-item-actions",children:[x.jsxs("div",{className:"cart-qty-selector",children:[x.jsx("button",{onClick:()=>i(d.id,-1),"aria-label":"Decrease quantity",children:x.jsx($w,{size:12})}),x.jsx("span",{children:d.quantity}),x.jsx("button",{onClick:()=>i(d.id,1),"aria-label":"Increase quantity",children:x.jsx(ob,{size:12})})]}),x.jsx("span",{className:"cart-item-total",children:u(parseFloat(d.price.replace(/[^\d]/g,""))*d.quantity)})]})]})]},d.id))})}),n.length>0&&x.jsxs("div",{className:"cart-footer",children:[a?x.jsxs("div",{className:"cart-shipping-success",children:[x.jsx(dS,{size:16,style:{flexShrink:0}}),x.jsxs("span",{children:[x.jsx("strong",{children:a.name})," — delivering to: ",a.address.split(",")[0],"…"]})]}):x.jsxs("div",{className:"cart-shipping-warning",children:[x.jsx(yw,{size:16,style:{flexShrink:0}}),x.jsxs("span",{children:[x.jsx("button",{onClick:l,style:{background:"none",border:"none",color:"#b45309",fontWeight:700,cursor:"pointer",textDecoration:"underline",padding:0,fontSize:"inherit"},children:"Add your address"})," ","to include delivery details in your order."]})]}),x.jsxs("div",{className:"cart-summary-row",children:[x.jsx("span",{children:"Subtotal"}),x.jsx("span",{className:"cart-subtotal-price",children:u(c)})]}),x.jsx("p",{className:"cart-shipping-notice",children:"Shipping calculated at checkout. Orders processed via WhatsApp."}),x.jsxs("button",{className:"cart-checkout-btn",onClick:h,children:["Proceed to Checkout on WhatsApp",x.jsx(Kp,{size:18})]}),x.jsx("button",{className:"cart-clear-btn",onClick:s,children:"Clear All Items"})]})]})]})})}const Zd=()=>{try{return JSON.parse(localStorage.getItem("robomitra_accounts")||"[]")}catch{return[]}},K_=t=>{localStorage.setItem("robomitra_accounts",JSON.stringify(t))},oF=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.trim());function aF({isOpen:t,onClose:e,user:n,onSaveUser:i}){const[r,s]=ee.useState(n?"profile":"login"),[o,a]=ee.useState({name:"",email:"",password:"",address:""}),[l,c]=ee.useState({}),[u,h]=ee.useState({email:"",password:""}),[d,p]=ee.useState(""),[g,S]=ee.useState({name:"",email:"",address:""}),[v,f]=ee.useState(!1),[m,y]=ee.useState("");ee.useEffect(()=>{t&&(s(n?"profile":"login"),c({}),p(""),y(""))},[t,n]);const M=()=>{const P={};return o.name.trim()||(P.name="Full name is required"),oF(o.email)||(P.email="Valid email is required"),o.password.length<6&&(P.password="Password must be at least 6 characters"),o.address.trim()||(P.address="Shipping address is required"),P},b=P=>{P.preventDefault();const D=M();if(Object.keys(D).length){c(D);return}const U=Zd();if(U.find(Y=>Y.email.toLowerCase()===o.email.toLowerCase())){c({email:"An account with this email already exists"});return}const B={name:o.name.trim(),email:o.email.trim().toLowerCase(),password:o.password,address:o.address.trim()};K_([...U,B]),i({name:B.name,email:B.email,address:B.address}),y("Account created! Welcome to RoboMitra 🎉"),s("profile")},T=P=>{P.preventDefault(),p("");const U=Zd().find(B=>B.email.toLowerCase()===u.email.trim().toLowerCase()&&B.password===u.password);if(!U){p("Incorrect email or password. Please try again.");return}i({name:U.name,email:U.email,address:U.address}),y(`Welcome back, ${U.name}! 👋`),s("profile")},A=()=>{S({name:n.name,email:n.email,address:n.address}),s("edit")},_=P=>{if(P.preventDefault(),!g.name.trim()||!g.address.trim())return;const D=Zd().map(U=>U.email.toLowerCase()===n.email.toLowerCase()?{...U,name:g.name.trim(),address:g.address.trim()}:U);K_(D),i({...n,name:g.name.trim(),address:g.address.trim()}),s("profile")},R=()=>{i(null),h({email:"",password:""}),s("login")};return x.jsx(vs,{children:t&&x.jsxs("div",{className:"login-modal-backdrop",children:[x.jsx(fn.div,{className:"login-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e}),x.jsxs(fn.div,{className:"login-modal-container",initial:{scale:.93,opacity:0,y:16},animate:{scale:1,opacity:1,y:0},exit:{scale:.93,opacity:0,y:16},transition:{duration:.22,ease:[.4,0,.2,1]},children:[x.jsx("button",{className:"login-modal-close",onClick:e,"aria-label":"Close modal",children:x.jsx(ui,{size:18})}),r==="signup"&&x.jsxs("form",{onSubmit:b,className:"login-form",noValidate:!0,children:[x.jsxs("div",{className:"login-form-header",children:[x.jsx("div",{className:"login-header-icon",children:x.jsx(A0,{size:20})}),x.jsx("h3",{children:"Create Account"}),x.jsx("p",{children:"Join RoboMitra — save your address for faster checkout."})]}),x.jsxs("div",{className:"login-form-body",children:[x.jsxs("div",{className:"login-input-group",children:[x.jsxs("label",{htmlFor:"su-name",children:[x.jsx(Xh,{size:13})," Full Name"]}),x.jsx("input",{id:"su-name",type:"text",placeholder:"e.g. Rohan Sharma",value:o.name,onChange:P=>a({...o,name:P.target.value})}),l.name&&x.jsx("span",{className:"login-field-error",children:l.name})]}),x.jsxs("div",{className:"login-input-group",children:[x.jsxs("label",{htmlFor:"su-email",children:[x.jsx(ga,{size:13})," Email Address"]}),x.jsx("input",{id:"su-email",type:"email",placeholder:"you@example.com",value:o.email,onChange:P=>a({...o,email:P.target.value})}),l.email&&x.jsx("span",{className:"login-field-error",children:l.email})]}),x.jsxs("div",{className:"login-input-group",children:[x.jsxs("label",{htmlFor:"su-pass",children:[x.jsx(M0,{size:13})," Password"]}),x.jsxs("div",{className:"login-pass-wrap",children:[x.jsx("input",{id:"su-pass",type:v?"text":"password",placeholder:"Min. 6 characters",value:o.password,onChange:P=>a({...o,password:P.target.value})}),x.jsx("button",{type:"button",className:"login-eye-btn",onClick:()=>f(!v),children:v?x.jsx(y0,{size:15}):x.jsx(S0,{size:15})})]}),l.password&&x.jsx("span",{className:"login-field-error",children:l.password})]}),x.jsxs("div",{className:"login-input-group",children:[x.jsxs("label",{htmlFor:"su-addr",children:[x.jsx(nd,{size:13})," Shipping Address"]}),x.jsx("textarea",{id:"su-addr",rows:3,placeholder:"Flat, Street, City, State, Pincode",value:o.address,onChange:P=>a({...o,address:P.target.value})}),l.address&&x.jsx("span",{className:"login-field-error",children:l.address})]})]}),x.jsx("div",{className:"login-form-footer",children:x.jsxs("button",{type:"submit",className:"login-save-btn",children:[x.jsx(A0,{size:15})," Create Account"]})}),x.jsxs("p",{className:"login-switch-text",children:["Already have an account?"," ",x.jsx("button",{type:"button",className:"login-switch-btn",onClick:()=>s("login"),children:"Log In"})]})]}),r==="login"&&x.jsxs("form",{onSubmit:T,className:"login-form",noValidate:!0,children:[x.jsxs("div",{className:"login-form-header",children:[x.jsx("div",{className:"login-header-icon",children:x.jsx(E0,{size:20})}),x.jsx("h3",{children:"Welcome Back"}),x.jsx("p",{children:"Log in to access your saved address at checkout."})]}),x.jsxs("div",{className:"login-form-body",children:[x.jsxs("div",{className:"login-input-group",children:[x.jsxs("label",{htmlFor:"li-email",children:[x.jsx(ga,{size:13})," Email Address"]}),x.jsx("input",{id:"li-email",type:"email",placeholder:"you@example.com",value:u.email,onChange:P=>h({...u,email:P.target.value})})]}),x.jsxs("div",{className:"login-input-group",children:[x.jsxs("label",{htmlFor:"li-pass",children:[x.jsx(M0,{size:13})," Password"]}),x.jsxs("div",{className:"login-pass-wrap",children:[x.jsx("input",{id:"li-pass",type:v?"text":"password",placeholder:"Your password",value:u.password,onChange:P=>h({...u,password:P.target.value})}),x.jsx("button",{type:"button",className:"login-eye-btn",onClick:()=>f(!v),children:v?x.jsx(y0,{size:15}):x.jsx(S0,{size:15})})]})]}),d&&x.jsx("div",{className:"login-error-banner",children:d})]}),x.jsx("div",{className:"login-form-footer",children:x.jsxs("button",{type:"submit",className:"login-save-btn",children:[x.jsx(E0,{size:15})," Log In"]})}),x.jsxs("p",{className:"login-switch-text",children:["New here?"," ",x.jsx("button",{type:"button",className:"login-switch-btn",onClick:()=>s("signup"),children:"Create Account"})]})]}),r==="profile"&&n&&x.jsxs("div",{className:"login-profile-card",children:[m&&x.jsxs("div",{className:"login-success-banner",children:[x.jsx(dS,{size:15})," ",m]}),x.jsxs("div",{className:"login-profile-header",children:[x.jsx("div",{className:"login-profile-avatar",children:n.name.charAt(0).toUpperCase()}),x.jsx("h3",{children:n.name}),x.jsx("p",{className:"login-profile-tag",children:"RoboMitra Customer"})]}),x.jsxs("div",{className:"login-profile-body",children:[x.jsxs("div",{className:"login-profile-detail",children:[x.jsx("span",{className:"detail-label",children:"Email"}),x.jsx("span",{className:"detail-val",children:n.email})]}),x.jsxs("div",{className:"login-profile-detail",children:[x.jsx("span",{className:"detail-label",children:"Shipping Address"}),x.jsxs("div",{className:"detail-val address-box",children:[x.jsx(nd,{size:14,className:"address-pin-icon"}),x.jsx("p",{children:n.address})]})]})]}),x.jsxs("div",{className:"login-profile-footer",children:[x.jsxs("button",{type:"button",className:"login-edit-btn",onClick:A,children:[x.jsx(T0,{size:14})," Edit Details"]}),x.jsxs("button",{type:"button",className:"login-logout-btn",onClick:R,children:[x.jsx(Vw,{size:14})," Log Out"]})]})]}),r==="edit"&&x.jsxs("form",{onSubmit:_,className:"login-form",children:[x.jsxs("div",{className:"login-form-header",children:[x.jsx("div",{className:"login-header-icon",children:x.jsx(T0,{size:20})}),x.jsx("h3",{children:"Edit Details"}),x.jsx("p",{children:"Update your shipping address or display name."})]}),x.jsxs("div",{className:"login-form-body",children:[x.jsxs("div",{className:"login-input-group",children:[x.jsxs("label",{htmlFor:"ed-name",children:[x.jsx(Xh,{size:13})," Full Name"]}),x.jsx("input",{id:"ed-name",type:"text",value:g.name,required:!0,onChange:P=>S({...g,name:P.target.value})})]}),x.jsxs("div",{className:"login-input-group",children:[x.jsxs("label",{htmlFor:"ed-addr",children:[x.jsx(nd,{size:13})," Shipping Address"]}),x.jsx("textarea",{id:"ed-addr",rows:3,value:g.address,required:!0,onChange:P=>S({...g,address:P.target.value})})]})]}),x.jsxs("div",{className:"login-form-footer",children:[x.jsx("button",{type:"submit",className:"login-save-btn",children:"Save Changes"}),x.jsx("button",{type:"button",className:"login-cancel-btn",onClick:()=>s("profile"),children:"Cancel"})]})]})]},r)]})})}function lF(){const[t,e]=ee.useState(!1);return x.jsxs("div",{className:"contact-float-root",children:[x.jsx(vs,{children:t&&x.jsxs(fn.div,{className:"contact-float-panel",initial:{opacity:0,scale:.85,y:12},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.85,y:12},transition:{duration:.2,ease:[.4,0,.2,1]},children:[x.jsxs("div",{className:"cfp-header",children:[x.jsxs("div",{className:"cfp-header-info",children:[x.jsx("div",{className:"cfp-avatar",children:"R"}),x.jsxs("div",{children:[x.jsx("p",{className:"cfp-name",children:"RoboMitra"}),x.jsxs("span",{className:"cfp-status",children:[x.jsx("span",{className:"cfp-dot"}),"Typically replies instantly"]})]})]}),x.jsx("button",{className:"cfp-close",onClick:()=>e(!1),"aria-label":"Close",children:x.jsx(ui,{size:16})})]}),x.jsx("div",{className:"cfp-body",children:x.jsx("p",{className:"cfp-greeting",children:"👋 Hi there! Got a question about RoboMitra? Reach us directly on WhatsApp or Instagram — we're happy to help!"})}),x.jsxs("div",{className:"cfp-buttons",children:[x.jsxs("a",{href:"https://wa.me/917977473538",target:"_blank",rel:"noopener noreferrer",className:"cfp-btn cfp-btn-whatsapp",children:[x.jsx(nb,{size:16}),"Chat on WhatsApp"]}),x.jsxs("a",{href:"https://instagram.com/Robomitra.tech",target:"_blank",rel:"noopener noreferrer",className:"cfp-btn cfp-btn-instagram",children:[x.jsx(Uw,{size:16}),"Ask on Instagram"]})]}),x.jsx("p",{className:"cfp-footer",children:"@Robomitra.tech  ·  +91 79774 73538"})]})}),x.jsx(fn.button,{className:"contact-float-trigger",onClick:()=>e(n=>!n),"aria-label":"Ask a question",whileHover:{scale:1.08},whileTap:{scale:.95},children:x.jsx(vs,{mode:"wait",children:t?x.jsx(fn.span,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.15},children:x.jsx(ui,{size:22})},"x"):x.jsxs(fn.span,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.15},style:{display:"flex",alignItems:"center",gap:6},children:[x.jsx(Yw,{size:20}),x.jsx("span",{className:"contact-float-label",children:"Ask a question"})]},"msg")})})]})}function cF(){const[t,e]=ee.useState(window.location.pathname),[n,i]=ee.useState(()=>{try{const T=localStorage.getItem("robomitra_cart");return T?JSON.parse(T):[]}catch{return[]}}),[r,s]=ee.useState(()=>{try{const T=localStorage.getItem("robomitra_user");return T?JSON.parse(T):null}catch{return null}}),[o,a]=ee.useState(!1),[l,c]=ee.useState(!1),[u,h]=ee.useState("");ee.useEffect(()=>{localStorage.setItem("robomitra_cart",JSON.stringify(n))},[n]),ee.useEffect(()=>{r?localStorage.setItem("robomitra_user",JSON.stringify(r)):localStorage.removeItem("robomitra_user")},[r]);const d=T=>{s(T),T&&c(!1)},p=T=>{i(A=>A.find(R=>R.id===T.id)?A.map(R=>R.id===T.id?{...R,quantity:R.quantity+1}:R):[...A,{...T,quantity:1}]),a(!0)},g=(T,A)=>{i(_=>_.map(R=>R.id===T?{...R,quantity:R.quantity+A}:R).filter(R=>R.quantity>0))},S=T=>{i(A=>A.filter(_=>_.id!==T))},v=()=>{i([])};ee.useEffect(()=>{document.documentElement.setAttribute("data-theme","light")},[]);const f=T=>{if(T.startsWith("#")){if(window.location.pathname!=="/"){window.history.pushState({},"","/"),e("/"),requestAnimationFrame(()=>{const _=document.querySelector(T);_==null||_.scrollIntoView({behavior:"smooth"})});return}const A=document.querySelector(T);A==null||A.scrollIntoView({behavior:"smooth"});return}T!==window.location.pathname&&(window.history.pushState({},"",T),e(T),window.scrollTo({top:0,behavior:"smooth"}))};ee.useEffect(()=>{const T=()=>e(window.location.pathname);return window.addEventListener("popstate",T),()=>window.removeEventListener("popstate",T)},[]);const m=n.reduce((T,A)=>T+A.quantity,0),y={onNavigate:f,cartCount:m,onCartClick:()=>a(!0),onLoginClick:()=>c(!0),user:r,searchQuery:u,onSearchChange:h};let M;return t==="/support"?M=x.jsx(iF,{...y}):t==="/about"||t==="/aboutus"?M=x.jsx(l2,{...y}):M=x.jsx(nF,{...y,onAddToCart:p}),x.jsxs(x.Fragment,{children:[M,x.jsx(rF,{}),x.jsx(lF,{}),x.jsx(aF,{isOpen:l,onClose:()=>c(!1),user:r,onSaveUser:d}),x.jsx(sF,{isOpen:o,onClose:()=>a(!1),cartItems:n,onUpdateQuantity:g,onRemoveItem:S,onClearCart:v,whatsappUrl:"https://wa.me/917977473538",user:r,onLoginClick:()=>c(!0)})]})}Qd.createRoot(document.getElementById("root")).render(x.jsx(J1.StrictMode,{children:x.jsx(cF,{})}));
