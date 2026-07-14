(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function L1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X_={exports:{}},iu={},Y_={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=Symbol.for("react.element"),N1=Symbol.for("react.portal"),I1=Symbol.for("react.fragment"),U1=Symbol.for("react.strict_mode"),F1=Symbol.for("react.profiler"),O1=Symbol.for("react.provider"),k1=Symbol.for("react.context"),B1=Symbol.for("react.forward_ref"),z1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),H1=Symbol.for("react.lazy"),dg=Symbol.iterator;function G1(t){return t===null||typeof t!="object"?null:(t=dg&&t[dg]||t["@@iterator"],typeof t=="function"?t:null)}var q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$_=Object.assign,K_={};function Ro(t,e,n){this.props=t,this.context=e,this.refs=K_,this.updater=n||q_}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z_(){}Z_.prototype=Ro.prototype;function sp(t,e,n){this.props=t,this.context=e,this.refs=K_,this.updater=n||q_}var op=sp.prototype=new Z_;op.constructor=sp;$_(op,Ro.prototype);op.isPureReactComponent=!0;var hg=Array.isArray,Q_=Object.prototype.hasOwnProperty,ap={current:null},J_={key:!0,ref:!0,__self:!0,__source:!0};function ex(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Q_.call(e,i)&&!J_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wa,type:t,key:s,ref:o,props:r,_owner:ap.current}}function j1(t,e){return{$$typeof:Wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wa}function W1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fg=/\/+/g;function Lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?W1(""+t.key):e.toString(36)}function Kl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wa:case N1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lu(o,0):i,hg(r)?(n="",t!=null&&(n=t.replace(fg,"$&/")+"/"),Kl(r,e,n,"",function(c){return c})):r!=null&&(lp(r)&&(r=j1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Lu(s,a);o+=Kl(s,e,n,l,r)}else if(l=G1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Lu(s,a++),o+=Kl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sl(t,e,n){if(t==null)return t;var i=[],r=0;return Kl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function X1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},Zl={transition:null},Y1={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:ap};function tx(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:sl,forEach:function(t,e,n){sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sl(t,function(){e++}),e},toArray:function(t){return sl(t,function(e){return e})||[]},only:function(t){if(!lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ro;Xe.Fragment=I1;Xe.Profiler=F1;Xe.PureComponent=sp;Xe.StrictMode=U1;Xe.Suspense=z1;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;Xe.act=tx;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ap.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Q_.call(e,l)&&!J_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Wa,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:k1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:O1,_context:t},t.Consumer=t};Xe.createElement=ex;Xe.createFactory=function(t){var e=ex.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:B1,render:t}};Xe.isValidElement=lp;Xe.lazy=function(t){return{$$typeof:H1,_payload:{_status:-1,_result:t},_init:X1}};Xe.memo=function(t,e){return{$$typeof:V1,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};Xe.unstable_act=tx;Xe.useCallback=function(t,e){return gn.current.useCallback(t,e)};Xe.useContext=function(t){return gn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return gn.current.useEffect(t,e)};Xe.useId=function(){return gn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return gn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};Xe.useRef=function(t){return gn.current.useRef(t)};Xe.useState=function(t){return gn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return gn.current.useTransition()};Xe.version="18.3.1";Y_.exports=Xe;var ee=Y_.exports;const q1=L1(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1=ee,K1=Symbol.for("react.element"),Z1=Symbol.for("react.fragment"),Q1=Object.prototype.hasOwnProperty,J1=$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eE={key:!0,ref:!0,__self:!0,__source:!0};function nx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Q1.call(e,i)&&!eE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:K1,type:t,key:s,ref:o,props:r,_owner:J1.current}}iu.Fragment=Z1;iu.jsx=nx;iu.jsxs=nx;X_.exports=iu;var S=X_.exports,Jd={},ix={exports:{}},Bn={},rx={exports:{}},sx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,X){var Z=U.length;U.push(X);e:for(;0<Z;){var ae=Z-1>>>1,fe=U[ae];if(0<r(fe,X))U[ae]=X,U[Z]=fe,Z=ae;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var X=U[0],Z=U.pop();if(Z!==X){U[0]=Z;e:for(var ae=0,fe=U.length,Ge=fe>>>1;ae<Ge;){var Ye=2*(ae+1)-1,Le=U[Ye],K=Ye+1,he=U[K];if(0>r(Le,Z))K<fe&&0>r(he,Le)?(U[ae]=he,U[K]=Z,ae=K):(U[ae]=Le,U[Ye]=Z,ae=Ye);else if(K<fe&&0>r(he,Z))U[ae]=he,U[K]=Z,ae=K;else break e}}return X}function r(U,X){var Z=U.sortIndex-X.sortIndex;return Z!==0?Z:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=U)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(U){if(y=!1,x(U),!g)if(n(l)!==null)g=!0,H(b);else{var X=n(c);X!==null&&O(M,X.startTime-U)}}function b(U,X){g=!1,y&&(y=!1,f(_),_=-1),p=!0;var Z=d;try{for(x(X),h=n(l);h!==null&&(!(h.expirationTime>X)||U&&!P());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var fe=ae(h.expirationTime<=X);X=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(l)&&i(l),x(X)}else i(l);h=n(l)}if(h!==null)var Ge=!0;else{var Ye=n(c);Ye!==null&&O(M,Ye.startTime-X),Ge=!1}return Ge}finally{h=null,d=Z,p=!1}}var T=!1,A=null,_=-1,R=5,D=-1;function P(){return!(t.unstable_now()-D<R)}function k(){if(A!==null){var U=t.unstable_now();D=U;var X=!0;try{X=A(!0,U)}finally{X?V():(T=!1,A=null)}}else T=!1}var V;if(typeof m=="function")V=function(){m(k)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,I=Y.port2;Y.port1.onmessage=k,V=function(){I.postMessage(null)}}else V=function(){v(k,0)};function H(U){A=U,T||(T=!0,V())}function O(U,X){_=v(function(){U(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(b))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Z=d;d=X;try{return U()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=d;d=U;try{return X()}finally{d=Z}},t.unstable_scheduleCallback=function(U,X,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,U){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Z+fe,U={id:u++,callback:X,priorityLevel:U,startTime:Z,expirationTime:fe,sortIndex:-1},Z>ae?(U.sortIndex=Z,e(c,U),n(l)===null&&U===n(c)&&(y?(f(_),_=-1):y=!0,O(M,Z-ae))):(U.sortIndex=fe,e(l,U),g||p||(g=!0,H(b))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var X=d;return function(){var Z=d;d=X;try{return U.apply(this,arguments)}finally{d=Z}}}})(sx);rx.exports=sx;var tE=rx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE=ee,On=tE;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ox=new Set,ya={};function ys(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(ya[t]=e,t=0;t<e.length;t++)ox.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=Object.prototype.hasOwnProperty,iE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pg={},mg={};function rE(t){return eh.call(mg,t)?!0:eh.call(pg,t)?!1:iE.test(t)?mg[t]=!0:(pg[t]=!0,!1)}function sE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oE(t,e,n,i){if(e===null||typeof e>"u"||sE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var cp=/[\-:]([a-z])/g;function up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cp,up);Qt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cp,up);Qt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cp,up);Qt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function dp(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oE(e,n,r,i)&&(n=null),i||r===null?rE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var rr=nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),ax=Symbol.for("react.provider"),lx=Symbol.for("react.context"),fp=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),ih=Symbol.for("react.suspense_list"),pp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),cx=Symbol.for("react.offscreen"),gg=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Nu;function Qo(t){if(Nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nu=e&&e[1]||""}return`
`+Nu+t}var Iu=!1;function Uu(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function aE(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Uu(t.type,!1),t;case 11:return t=Uu(t.type.render,!1),t;case 1:return t=Uu(t.type,!0),t;default:return""}}function rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Vs:return"Portal";case th:return"Profiler";case hp:return"StrictMode";case nh:return"Suspense";case ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lx:return(t.displayName||"Context")+".Consumer";case ax:return(t._context.displayName||"Context")+".Provider";case fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pp:return e=t.displayName||null,e!==null?e:rh(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return rh(t(e))}catch{}}return null}function lE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(e);case 8:return e===hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ux(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cE(t){var e=ux(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=cE(t))}function dx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ux(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sh(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hx(t,e){e=e.checked,e!=null&&dp(t,"checked",e,!1)}function oh(t,e){hx(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&ah(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _g(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ah(t,e,n){(e!=="number"||xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Jo=Array.isArray;function so(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Jo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function fx(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function px(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?px(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,mx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){uE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function gx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function vx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=gx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var dE=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(dE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fh=null,oo=null,ao=null;function Sg(t){if(t=qa(t)){if(typeof fh!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=lu(e),fh(t.stateNode,t.type,e))}}function _x(t){oo?ao?ao.push(t):ao=[t]:oo=t}function xx(){if(oo){var t=oo,e=ao;if(ao=oo=null,Sg(t),e)for(t=0;t<e.length;t++)Sg(e[t])}}function yx(t,e){return t(e)}function Sx(){}var Fu=!1;function Mx(t,e,n){if(Fu)return t(e,n);Fu=!0;try{return yx(t,e,n)}finally{Fu=!1,(oo!==null||ao!==null)&&(Sx(),xx())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=lu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var ph=!1;if(Zi)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){ph=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{ph=!1}function hE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var la=!1,yc=null,Sc=!1,mh=null,fE={onError:function(t){la=!0,yc=t}};function pE(t,e,n,i,r,s,o,a,l){la=!1,yc=null,hE.apply(fE,arguments)}function mE(t,e,n,i,r,s,o,a,l){if(pE.apply(this,arguments),la){if(la){var c=yc;la=!1,yc=null}else throw Error(ie(198));Sc||(Sc=!0,mh=c)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ex(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mg(t){if(Ss(t)!==t)throw Error(ie(188))}function gE(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mg(r),t;if(s===i)return Mg(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Tx(t){return t=gE(t),t!==null?wx(t):null}function wx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wx(t);if(e!==null)return e;t=t.sibling}return null}var bx=On.unstable_scheduleCallback,Eg=On.unstable_cancelCallback,vE=On.unstable_shouldYield,_E=On.unstable_requestPaint,Nt=On.unstable_now,xE=On.unstable_getCurrentPriorityLevel,gp=On.unstable_ImmediatePriority,Ax=On.unstable_UserBlockingPriority,Mc=On.unstable_NormalPriority,yE=On.unstable_LowPriority,Cx=On.unstable_IdlePriority,ru=null,Ti=null;function SE(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:TE,ME=Math.log,EE=Math.LN2;function TE(t){return t>>>=0,t===0?32:31-(ME(t)/EE|0)|0}var cl=64,ul=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ea(a):(s&=o,s!==0&&(i=ea(s)))}else o=n&~r,o!==0?i=ea(o):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function wE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=wE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rx(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function AE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Px(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dx,_p,Lx,Nx,Ix,vh=!1,dl=[],wr=null,br=null,Ar=null,Ea=new Map,Ta=new Map,xr=[],CE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tg(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qa(e),e!==null&&_p(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function RE(t,e,n,i,r){switch(e){case"focusin":return wr=ko(wr,t,e,n,i,r),!0;case"dragenter":return br=ko(br,t,e,n,i,r),!0;case"mouseover":return Ar=ko(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,ko(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,ko(Ta.get(s)||null,t,e,n,i,r)),!0}return!1}function Ux(t){var e=is(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=Ex(n),e!==null){t.blockedOn=e,Ix(t.priority,function(){Lx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_h(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hh=i,n.target.dispatchEvent(i),hh=null}else return e=qa(n),e!==null&&_p(e),t.blockedOn=n,!1;e.shift()}return!0}function wg(t,e,n){Ql(t)&&n.delete(e)}function PE(){vh=!1,wr!==null&&Ql(wr)&&(wr=null),br!==null&&Ql(br)&&(br=null),Ar!==null&&Ql(Ar)&&(Ar=null),Ea.forEach(wg),Ta.forEach(wg)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,vh||(vh=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,PE)))}function wa(t){function e(r){return Bo(r,t)}if(0<dl.length){Bo(dl[0],t);for(var n=1;n<dl.length;n++){var i=dl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(wr!==null&&Bo(wr,t),br!==null&&Bo(br,t),Ar!==null&&Bo(Ar,t),Ea.forEach(e),Ta.forEach(e),n=0;n<xr.length;n++)i=xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)Ux(n),n.blockedOn===null&&xr.shift()}var lo=rr.ReactCurrentBatchConfig,Tc=!0;function DE(t,e,n,i){var r=it,s=lo.transition;lo.transition=null;try{it=1,xp(t,e,n,i)}finally{it=r,lo.transition=s}}function LE(t,e,n,i){var r=it,s=lo.transition;lo.transition=null;try{it=4,xp(t,e,n,i)}finally{it=r,lo.transition=s}}function xp(t,e,n,i){if(Tc){var r=_h(t,e,n,i);if(r===null)Yu(t,e,i,wc,n),Tg(t,i);else if(RE(r,t,e,n,i))i.stopPropagation();else if(Tg(t,i),e&4&&-1<CE.indexOf(t)){for(;r!==null;){var s=qa(r);if(s!==null&&Dx(s),s=_h(t,e,n,i),s===null&&Yu(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yu(t,e,i,null,n)}}var wc=null;function _h(t,e,n,i){if(wc=null,t=mp(i),t=is(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ex(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function Fx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xE()){case gp:return 1;case Ax:return 4;case Mc:case yE:return 16;case Cx:return 536870912;default:return 16}default:return 16}}var Mr=null,yp=null,Jl=null;function Ox(){if(Jl)return Jl;var t,e=yp,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Jl=r.slice(t,1<i?1-i:void 0)}function ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function bg(){return!1}function zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hl:bg,this.isPropagationStopped=bg,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sp=zn(Po),Ya=Et({},Po,{view:0,detail:0}),NE=zn(Ya),ku,Bu,zo,su=Et({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(ku=t.screenX-zo.screenX,Bu=t.screenY-zo.screenY):Bu=ku=0,zo=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Ag=zn(su),IE=Et({},su,{dataTransfer:0}),UE=zn(IE),FE=Et({},Ya,{relatedTarget:0}),zu=zn(FE),OE=Et({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),kE=zn(OE),BE=Et({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zE=zn(BE),VE=Et({},Po,{data:0}),Cg=zn(VE),HE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jE[t])?!!e[t]:!1}function Mp(){return WE}var XE=Et({},Ya,{key:function(t){if(t.key){var e=HE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mp,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YE=zn(XE),qE=Et({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rg=zn(qE),$E=Et({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mp}),KE=zn($E),ZE=Et({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),QE=zn(ZE),JE=Et({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eT=zn(JE),tT=[9,13,27,32],Ep=Zi&&"CompositionEvent"in window,ca=null;Zi&&"documentMode"in document&&(ca=document.documentMode);var nT=Zi&&"TextEvent"in window&&!ca,kx=Zi&&(!Ep||ca&&8<ca&&11>=ca),Pg=" ",Dg=!1;function Bx(t,e){switch(t){case"keyup":return tT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function iT(t,e){switch(t){case"compositionend":return zx(e);case"keypress":return e.which!==32?null:(Dg=!0,Pg);case"textInput":return t=e.data,t===Pg&&Dg?null:t;default:return null}}function rT(t,e){if(Gs)return t==="compositionend"||!Ep&&Bx(t,e)?(t=Ox(),Jl=yp=Mr=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kx&&e.locale!=="ko"?null:e.data;default:return null}}var sT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sT[t.type]:e==="textarea"}function Vx(t,e,n,i){_x(i),e=bc(e,"onChange"),0<e.length&&(n=new Sp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,ba=null;function oT(t){Qx(t,0)}function ou(t){var e=Xs(t);if(dx(e))return t}function aT(t,e){if(t==="change")return e}var Hx=!1;if(Zi){var Vu;if(Zi){var Hu="oninput"in document;if(!Hu){var Ng=document.createElement("div");Ng.setAttribute("oninput","return;"),Hu=typeof Ng.oninput=="function"}Vu=Hu}else Vu=!1;Hx=Vu&&(!document.documentMode||9<document.documentMode)}function Ig(){ua&&(ua.detachEvent("onpropertychange",Gx),ba=ua=null)}function Gx(t){if(t.propertyName==="value"&&ou(ba)){var e=[];Vx(e,ba,t,mp(t)),Mx(oT,e)}}function lT(t,e,n){t==="focusin"?(Ig(),ua=e,ba=n,ua.attachEvent("onpropertychange",Gx)):t==="focusout"&&Ig()}function cT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(ba)}function uT(t,e){if(t==="click")return ou(e)}function dT(t,e){if(t==="input"||t==="change")return ou(e)}function hT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:hT;function Aa(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!eh.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function Ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fg(t,e){var n=Ug(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ug(n)}}function jx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wx(){for(var t=window,e=xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xc(t.document)}return e}function Tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fT(t){var e=Wx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jx(n.ownerDocument.documentElement,n)){if(i!==null&&Tp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fg(n,s);var o=Fg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pT=Zi&&"documentMode"in document&&11>=document.documentMode,js=null,xh=null,da=null,yh=!1;function Og(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||js==null||js!==xc(i)||(i=js,"selectionStart"in i&&Tp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Aa(da,i)||(da=i,i=bc(xh,"onSelect"),0<i.length&&(e=new Sp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=js)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Gu={},Xx={};Zi&&(Xx=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function au(t){if(Gu[t])return Gu[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xx)return Gu[t]=e[n];return t}var Yx=au("animationend"),qx=au("animationiteration"),$x=au("animationstart"),Kx=au("transitionend"),Zx=new Map,kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){Zx.set(t,e),ys(e,[t])}for(var ju=0;ju<kg.length;ju++){var Wu=kg[ju],mT=Wu.toLowerCase(),gT=Wu[0].toUpperCase()+Wu.slice(1);zr(mT,"on"+gT)}zr(Yx,"onAnimationEnd");zr(qx,"onAnimationIteration");zr($x,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Kx,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Bg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,mE(i,e,void 0,t),t.currentTarget=null}function Qx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bg(r,a,c),s=l}}}if(Sc)throw t=mh,Sc=!1,mh=null,t}function pt(t,e){var n=e[wh];n===void 0&&(n=e[wh]=new Set);var i=t+"__bubble";n.has(i)||(Jx(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),Jx(n,t,i,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[pl]){t[pl]=!0,ox.forEach(function(n){n!=="selectionchange"&&(vT.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Xu("selectionchange",!1,e))}}function Jx(t,e,n,i){switch(Fx(e)){case 1:var r=DE;break;case 4:r=LE;break;default:r=xp}n=r.bind(null,e,n,t),r=void 0,!ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Mx(function(){var c=s,u=mp(n),h=[];e:{var d=Zx.get(t);if(d!==void 0){var p=Sp,g=t;switch(t){case"keypress":if(ec(n)===0)break e;case"keydown":case"keyup":p=YE;break;case"focusin":g="focus",p=zu;break;case"focusout":g="blur",p=zu;break;case"beforeblur":case"afterblur":p=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=UE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=KE;break;case Yx:case qx:case $x:p=kE;break;case Kx:p=QE;break;case"scroll":p=NE;break;case"wheel":p=eT;break;case"copy":case"cut":case"paste":p=zE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rg}var y=(e&4)!==0,v=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,x;m!==null;){x=m;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,f!==null&&(M=Ma(m,f),M!=null&&y.push(Ra(m,M,x)))),v)break;m=m.return}0<y.length&&(d=new p(d,g,null,n,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==hh&&(g=n.relatedTarget||n.fromElement)&&(is(g)||g[Qi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?is(g):null,g!==null&&(v=Ss(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Ag,M="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Rg,M="onPointerLeave",f="onPointerEnter",m="pointer"),v=p==null?d:Xs(p),x=g==null?d:Xs(g),d=new y(M,m+"leave",p,n,u),d.target=v,d.relatedTarget=x,M=null,is(u)===c&&(y=new y(f,m+"enter",g,n,u),y.target=x,y.relatedTarget=v,M=y),v=M,p&&g)t:{for(y=p,f=g,m=0,x=y;x;x=ws(x))m++;for(x=0,M=f;M;M=ws(M))x++;for(;0<m-x;)y=ws(y),m--;for(;0<x-m;)f=ws(f),x--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break t;y=ws(y),f=ws(f)}y=null}else y=null;p!==null&&zg(h,d,p,y,!1),g!==null&&v!==null&&zg(h,v,g,y,!0)}}e:{if(d=c?Xs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=aT;else if(Lg(d))if(Hx)b=dT;else{b=cT;var T=lT}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=uT);if(b&&(b=b(t,c))){Vx(h,b,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&ah(d,"number",d.value)}switch(T=c?Xs(c):window,t){case"focusin":(Lg(T)||T.contentEditable==="true")&&(js=T,xh=c,da=null);break;case"focusout":da=xh=js=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,Og(h,n,u);break;case"selectionchange":if(pT)break;case"keydown":case"keyup":Og(h,n,u)}var A;if(Ep)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Gs?Bx(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(kx&&n.locale!=="ko"&&(Gs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Gs&&(A=Ox()):(Mr=u,yp="value"in Mr?Mr.value:Mr.textContent,Gs=!0)),T=bc(c,_),0<T.length&&(_=new Cg(_,t,null,n,u),h.push({event:_,listeners:T}),A?_.data=A:(A=zx(n),A!==null&&(_.data=A)))),(A=nT?iT(t,n):rT(t,n))&&(c=bc(c,"onBeforeInput"),0<c.length&&(u=new Cg("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}Qx(h,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Ma(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ma(n,s),l!=null&&o.unshift(Ra(n,l,a))):r||(l=Ma(n,s),l!=null&&o.push(Ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _T=/\r\n?/g,xT=/\u0000|\uFFFD/g;function Vg(t){return(typeof t=="string"?t:""+t).replace(_T,`
`).replace(xT,"")}function ml(t,e,n){if(e=Vg(e),Vg(t)!==e&&n)throw Error(ie(425))}function Ac(){}var Sh=null,Mh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,yT=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,ST=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(t){return Hg.resolve(null).then(t).catch(MT)}:Th;function MT(t){setTimeout(function(){throw t})}function qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Si="__reactFiber$"+Do,Pa="__reactProps$"+Do,Qi="__reactContainer$"+Do,wh="__reactEvents$"+Do,ET="__reactListeners$"+Do,TT="__reactHandles$"+Do;function is(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gg(t);t!==null;){if(n=t[Si])return n;t=Gg(t)}return e}t=n,n=t.parentNode}return null}function qa(t){return t=t[Si]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function lu(t){return t[Pa]||null}var bh=[],Ys=-1;function Vr(t){return{current:t}}function mt(t){0>Ys||(t.current=bh[Ys],bh[Ys]=null,Ys--)}function ht(t,e){Ys++,bh[Ys]=t.current,t.current=e}var Ir={},un=Vr(Ir),En=Vr(!1),hs=Ir;function go(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(t){return t=t.childContextTypes,t!=null}function Cc(){mt(En),mt(un)}function jg(t,e,n){if(un.current!==Ir)throw Error(ie(168));ht(un,e),ht(En,n)}function ey(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,lE(t)||"Unknown",r));return Et({},n,i)}function Rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,hs=un.current,ht(un,t),ht(En,En.current),!0}function Wg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=ey(t,e,hs),i.__reactInternalMemoizedMergedChildContext=t,mt(En),mt(un),ht(un,t)):mt(En),ht(En,n)}var Vi=null,cu=!1,$u=!1;function ty(t){Vi===null?Vi=[t]:Vi.push(t)}function wT(t){cu=!0,ty(t)}function Hr(){if(!$u&&Vi!==null){$u=!0;var t=0,e=it;try{var n=Vi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Vi=null,cu=!1}catch(r){throw Vi!==null&&(Vi=Vi.slice(t+1)),bx(gp,Hr),r}finally{it=e,$u=!1}}return null}var qs=[],$s=0,Pc=null,Dc=0,Wn=[],Xn=0,fs=null,Gi=1,ji="";function Zr(t,e){qs[$s++]=Dc,qs[$s++]=Pc,Pc=t,Dc=e}function ny(t,e,n){Wn[Xn++]=Gi,Wn[Xn++]=ji,Wn[Xn++]=fs,fs=t;var i=Gi;t=ji;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-ci(e)+r|n<<r|i,ji=s+t}else Gi=1<<s|n<<r|i,ji=t}function wp(t){t.return!==null&&(Zr(t,1),ny(t,1,0))}function bp(t){for(;t===Pc;)Pc=qs[--$s],qs[$s]=null,Dc=qs[--$s],qs[$s]=null;for(;t===fs;)fs=Wn[--Xn],Wn[Xn]=null,ji=Wn[--Xn],Wn[Xn]=null,Gi=Wn[--Xn],Wn[Xn]=null}var In=null,Nn=null,vt=!1,oi=null;function iy(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Nn=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:Gi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Nn=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(vt){var e=Nn;if(e){var n=e;if(!Xg(t,e)){if(Ah(t))throw Error(ie(418));e=Cr(n.nextSibling);var i=In;e&&Xg(t,e)?iy(i,n):(t.flags=t.flags&-4097|2,vt=!1,In=t)}}else{if(Ah(t))throw Error(ie(418));t.flags=t.flags&-4097|2,vt=!1,In=t}}}function Yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function gl(t){if(t!==In)return!1;if(!vt)return Yg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=Nn)){if(Ah(t))throw ry(),Error(ie(418));for(;e;)iy(t,e),e=Cr(e.nextSibling)}if(Yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=In?Cr(t.stateNode.nextSibling):null;return!0}function ry(){for(var t=Nn;t;)t=Cr(t.nextSibling)}function vo(){Nn=In=null,vt=!1}function Ap(t){oi===null?oi=[t]:oi.push(t)}var bT=rr.ReactCurrentBatchConfig;function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qg(t){var e=t._init;return e(t._payload)}function sy(t){function e(f,m){if(t){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Lr(f,m),f.index=0,f.sibling=null,f}function s(f,m,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,x,M){return m===null||m.tag!==6?(m=nd(x,f.mode,M),m.return=f,m):(m=r(m,x),m.return=f,m)}function l(f,m,x,M){var b=x.type;return b===Hs?u(f,m,x.props.children,M,x.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===gr&&qg(b)===m.type)?(M=r(m,x.props),M.ref=Vo(f,m,x),M.return=f,M):(M=ac(x.type,x.key,x.props,null,f.mode,M),M.ref=Vo(f,m,x),M.return=f,M)}function c(f,m,x,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=id(x,f.mode,M),m.return=f,m):(m=r(m,x.children||[]),m.return=f,m)}function u(f,m,x,M,b){return m===null||m.tag!==7?(m=us(x,f.mode,M,b),m.return=f,m):(m=r(m,x),m.return=f,m)}function h(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=nd(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ol:return x=ac(m.type,m.key,m.props,null,f.mode,x),x.ref=Vo(f,null,m),x.return=f,x;case Vs:return m=id(m,f.mode,x),m.return=f,m;case gr:var M=m._init;return h(f,M(m._payload),x)}if(Jo(m)||Fo(m))return m=us(m,f.mode,x,null),m.return=f,m;vl(f,m)}return null}function d(f,m,x,M){var b=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:a(f,m,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ol:return x.key===b?l(f,m,x,M):null;case Vs:return x.key===b?c(f,m,x,M):null;case gr:return b=x._init,d(f,m,b(x._payload),M)}if(Jo(x)||Fo(x))return b!==null?null:u(f,m,x,M,null);vl(f,x)}return null}function p(f,m,x,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(x)||null,a(m,f,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ol:return f=f.get(M.key===null?x:M.key)||null,l(m,f,M,b);case Vs:return f=f.get(M.key===null?x:M.key)||null,c(m,f,M,b);case gr:var T=M._init;return p(f,m,x,T(M._payload),b)}if(Jo(M)||Fo(M))return f=f.get(x)||null,u(m,f,M,b,null);vl(m,M)}return null}function g(f,m,x,M){for(var b=null,T=null,A=m,_=m=0,R=null;A!==null&&_<x.length;_++){A.index>_?(R=A,A=null):R=A.sibling;var D=d(f,A,x[_],M);if(D===null){A===null&&(A=R);break}t&&A&&D.alternate===null&&e(f,A),m=s(D,m,_),T===null?b=D:T.sibling=D,T=D,A=R}if(_===x.length)return n(f,A),vt&&Zr(f,_),b;if(A===null){for(;_<x.length;_++)A=h(f,x[_],M),A!==null&&(m=s(A,m,_),T===null?b=A:T.sibling=A,T=A);return vt&&Zr(f,_),b}for(A=i(f,A);_<x.length;_++)R=p(A,f,_,x[_],M),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?_:R.key),m=s(R,m,_),T===null?b=R:T.sibling=R,T=R);return t&&A.forEach(function(P){return e(f,P)}),vt&&Zr(f,_),b}function y(f,m,x,M){var b=Fo(x);if(typeof b!="function")throw Error(ie(150));if(x=b.call(x),x==null)throw Error(ie(151));for(var T=b=null,A=m,_=m=0,R=null,D=x.next();A!==null&&!D.done;_++,D=x.next()){A.index>_?(R=A,A=null):R=A.sibling;var P=d(f,A,D.value,M);if(P===null){A===null&&(A=R);break}t&&A&&P.alternate===null&&e(f,A),m=s(P,m,_),T===null?b=P:T.sibling=P,T=P,A=R}if(D.done)return n(f,A),vt&&Zr(f,_),b;if(A===null){for(;!D.done;_++,D=x.next())D=h(f,D.value,M),D!==null&&(m=s(D,m,_),T===null?b=D:T.sibling=D,T=D);return vt&&Zr(f,_),b}for(A=i(f,A);!D.done;_++,D=x.next())D=p(A,f,_,D.value,M),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?_:D.key),m=s(D,m,_),T===null?b=D:T.sibling=D,T=D);return t&&A.forEach(function(k){return e(f,k)}),vt&&Zr(f,_),b}function v(f,m,x,M){if(typeof x=="object"&&x!==null&&x.type===Hs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ol:e:{for(var b=x.key,T=m;T!==null;){if(T.key===b){if(b=x.type,b===Hs){if(T.tag===7){n(f,T.sibling),m=r(T,x.props.children),m.return=f,f=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===gr&&qg(b)===T.type){n(f,T.sibling),m=r(T,x.props),m.ref=Vo(f,T,x),m.return=f,f=m;break e}n(f,T);break}else e(f,T);T=T.sibling}x.type===Hs?(m=us(x.props.children,f.mode,M,x.key),m.return=f,f=m):(M=ac(x.type,x.key,x.props,null,f.mode,M),M.ref=Vo(f,m,x),M.return=f,f=M)}return o(f);case Vs:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(f,m.sibling),m=r(m,x.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=id(x,f.mode,M),m.return=f,f=m}return o(f);case gr:return T=x._init,v(f,m,T(x._payload),M)}if(Jo(x))return g(f,m,x,M);if(Fo(x))return y(f,m,x,M);vl(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,x),m.return=f,f=m):(n(f,m),m=nd(x,f.mode,M),m.return=f,f=m),o(f)):n(f,m)}return v}var _o=sy(!0),oy=sy(!1),Lc=Vr(null),Nc=null,Ks=null,Cp=null;function Rp(){Cp=Ks=Nc=null}function Pp(t){var e=Lc.current;mt(Lc),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function co(t,e){Nc=t,Cp=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function Zn(t){var e=t._currentValue;if(Cp!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Nc===null)throw Error(ie(308));Ks=t,Nc.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var rs=null;function Dp(t){rs===null?rs=[t]:rs.push(t)}function ay(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function Lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ly(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Dp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vp(t,n)}}function $g(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ic(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Et({},h,d);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ms|=o,t.lanes=o,t.memoizedState=h}}function Kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var $a={},wi=Vr($a),Da=Vr($a),La=Vr($a);function ss(t){if(t===$a)throw Error(ie(174));return t}function Np(t,e){switch(ht(La,e),ht(Da,t),ht(wi,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ch(e,t)}mt(wi),ht(wi,e)}function xo(){mt(wi),mt(Da),mt(La)}function cy(t){ss(La.current);var e=ss(wi.current),n=ch(e,t.type);e!==n&&(ht(Da,t),ht(wi,n))}function Ip(t){Da.current===t&&(mt(wi),mt(Da))}var yt=Vr(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function Up(){for(var t=0;t<Ku.length;t++)Ku[t]._workInProgressVersionPrimary=null;Ku.length=0}var nc=rr.ReactCurrentDispatcher,Zu=rr.ReactCurrentBatchConfig,ps=0,Mt=null,zt=null,Wt=null,Fc=!1,ha=!1,Na=0,AT=0;function en(){throw Error(ie(321))}function Fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Op(t,e,n,i,r,s){if(ps=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nc.current=t===null||t.memoizedState===null?DT:LT,t=n(i,r),ha){s=0;do{if(ha=!1,Na=0,25<=s)throw Error(ie(301));s+=1,Wt=zt=null,e.updateQueue=null,nc.current=NT,t=n(i,r)}while(ha)}if(nc.current=Oc,e=zt!==null&&zt.next!==null,ps=0,Wt=zt=Mt=null,Fc=!1,e)throw Error(ie(300));return t}function kp(){var t=Na!==0;return Na=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Qn(){if(zt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Wt===null?Mt.memoizedState:Wt.next;if(e!==null)Wt=e,zt=t;else{if(t===null)throw Error(ie(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Ia(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=Qn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ps&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=u,ms|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=Qn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function uy(){}function dy(t,e){var n=Mt,i=Qn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Bp(py.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,fy.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ie(349));ps&30||hy(n,e,r)}return r}function hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fy(t,e,n,i){e.value=n,e.getSnapshot=i,my(e)&&gy(t)}function py(t,e,n){return n(function(){my(e)&&gy(t)})}function my(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function gy(t){var e=Ji(t,1);e!==null&&ui(e,t,1,-1)}function Zg(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=PT.bind(null,Mt,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function vy(){return Qn().memoizedState}function ic(t,e,n,i){var r=xi();Mt.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function uu(t,e,n,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&Fp(i,o.deps)){r.memoizedState=Ua(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function Qg(t,e){return ic(8390656,8,t,e)}function Bp(t,e){return uu(2048,8,t,e)}function _y(t,e){return uu(4,2,t,e)}function xy(t,e){return uu(4,4,t,e)}function yy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sy(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,yy.bind(null,e,t),n)}function zp(){}function My(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ey(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ty(t,e,n){return ps&21?(hi(n,e)||(n=Rx(),Mt.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function CT(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Zu.transition;Zu.transition={};try{t(!1),e()}finally{it=n,Zu.transition=i}}function wy(){return Qn().memoizedState}function RT(t,e,n){var i=Dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},by(t))Ay(e,n);else if(n=ay(t,e,n,i),n!==null){var r=pn();ui(n,t,i,r),Cy(n,e,i)}}function PT(t,e,n){var i=Dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(by(t))Ay(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,Dp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ay(t,e,r,i),n!==null&&(r=pn(),ui(n,t,i,r),Cy(n,e,i))}}function by(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Ay(t,e){ha=Fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vp(t,n)}}var Oc={readContext:Zn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},DT={readContext:Zn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Zn,useEffect:Qg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ic(4194308,4,yy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return ic(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=RT.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Zg,useDebugValue:zp,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Zg(!1),e=t[0];return t=CT.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=xi();if(vt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Xt===null)throw Error(ie(349));ps&30||hy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qg(py.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,fy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Xt.identifierPrefix;if(vt){var n=ji,i=Gi;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LT={readContext:Zn,useCallback:My,useContext:Zn,useEffect:Bp,useImperativeHandle:Sy,useInsertionEffect:_y,useLayoutEffect:xy,useMemo:Ey,useReducer:Qu,useRef:vy,useState:function(){return Qu(Ia)},useDebugValue:zp,useDeferredValue:function(t){var e=Qn();return Ty(e,zt.memoizedState,t)},useTransition:function(){var t=Qu(Ia)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:uy,useSyncExternalStore:dy,useId:wy,unstable_isNewReconciler:!1},NT={readContext:Zn,useCallback:My,useContext:Zn,useEffect:Bp,useImperativeHandle:Sy,useInsertionEffect:_y,useLayoutEffect:xy,useMemo:Ey,useReducer:Ju,useRef:vy,useState:function(){return Ju(Ia)},useDebugValue:zp,useDeferredValue:function(t){var e=Qn();return zt===null?e.memoizedState=t:Ty(e,zt.memoizedState,t)},useTransition:function(){var t=Ju(Ia)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:uy,useSyncExternalStore:dy,useId:wy,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ph(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Dr(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(ui(e,t,r,i),tc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Dr(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(ui(e,t,r,i),tc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Dr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(ui(e,t,i,n),tc(e,t,i))}};function Jg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function Ry(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=Tn(e)?hs:un.current,i=e.contextTypes,s=(i=i!=null)?go(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function e0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Lp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=Tn(e)?hs:un.current,r.context=go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ph(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&du.enqueueReplaceState(r,r.state,null),Ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e){try{var n="",i=e;do n+=aE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IT=typeof WeakMap=="function"?WeakMap:Map;function Py(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bc||(Bc=!0,Hh=i),Lh(t,e)},n}function Dy(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function t0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new IT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=qT.bind(null,t,e,n),e.then(t,t))}function n0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function i0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var UT=rr.ReactCurrentOwner,Mn=!1;function hn(t,e,n,i){e.child=t===null?oy(e,null,n,i):_o(e,t.child,n,i)}function r0(t,e,n,i,r){n=n.render;var s=e.ref;return co(e,r),i=Op(t,e,n,i,s,r),n=kp(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(vt&&n&&wp(e),e.flags|=1,hn(t,e,i,r),e.child)}function s0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ly(t,e,s,i,r)):(t=ac(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ly(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,er(t,e,r)}return Nh(t,e,n,i,r)}function Ny(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Qs,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Qs,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Qs,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Qs,Dn),Dn|=i;return hn(t,e,r,n),e.child}function Iy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nh(t,e,n,i,r){var s=Tn(n)?hs:un.current;return s=go(e,s),co(e,r),n=Op(t,e,n,i,s,r),i=kp(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(vt&&i&&wp(e),e.flags|=1,hn(t,e,n,r),e.child)}function o0(t,e,n,i,r){if(Tn(n)){var s=!0;Rc(e)}else s=!1;if(co(e,r),e.stateNode===null)rc(t,e),Ry(e,n,i),Dh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=Tn(n)?hs:un.current,c=go(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&e0(e,o,i,c),vr=!1;var d=e.memoizedState;o.state=d,Ic(e,i,o,r),l=e.memoizedState,a!==i||d!==l||En.current||vr?(typeof u=="function"&&(Ph(e,n,u,i),l=e.memoizedState),(a=vr||Jg(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ly(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=Tn(n)?hs:un.current,l=go(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&e0(e,o,i,l),vr=!1,d=e.memoizedState,o.state=d,Ic(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||En.current||vr?(typeof p=="function"&&(Ph(e,n,p,i),g=e.memoizedState),(c=vr||Jg(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ih(t,e,n,i,s,r)}function Ih(t,e,n,i,r,s){Iy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wg(e,n,!1),er(t,e,s);i=e.stateNode,UT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_o(e,t.child,null,s),e.child=_o(e,null,a,s)):hn(t,e,a,s),e.memoizedState=i.state,r&&Wg(e,n,!0),e.child}function Uy(t){var e=t.stateNode;e.pendingContext?jg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jg(t,e.context,!1),Np(t,e.containerInfo)}function a0(t,e,n,i,r){return vo(),Ap(r),e.flags|=256,hn(t,e,n,i),e.child}var Uh={dehydrated:null,treeContext:null,retryLane:0};function Fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fy(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(yt,r&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,i,0,null),t=us(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fh(n),e.memoizedState=Uh,t):Vp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return FT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uh,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vp(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,i){return i!==null&&Ap(i),_o(e,t.child,null,n),t=Vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ed(Error(ie(422))),_l(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pu({mode:"visible",children:i.children},r,0,null),s=us(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_o(e,t.child,null,o),e.child.memoizedState=Fh(o),e.memoizedState=Uh,s);if(!(e.mode&1))return _l(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=ed(s,i,void 0),_l(t,e,o,i)}if(a=(o&t.childLanes)!==0,Mn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),ui(i,t,r,-1))}return Yp(),i=ed(Error(ie(421))),_l(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$T.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Nn=Cr(r.nextSibling),In=e,vt=!0,oi=null,t!==null&&(Wn[Xn++]=Gi,Wn[Xn++]=ji,Wn[Xn++]=fs,Gi=t.id,ji=t.overflow,fs=e),e=Vp(e,i.children),e.flags|=4096,e)}function l0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rh(t.return,e,n)}function td(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Oy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l0(t,n,e);else if(t.tag===19)l0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),td(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}td(e,!0,n,null,s);break;case"together":td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OT(t,e,n){switch(e.tag){case 3:Uy(e),vo();break;case 5:cy(e);break;case 1:Tn(e.type)&&Rc(e);break;case 4:Np(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?Fy(t,e,n):(ht(yt,yt.current&1),t=er(t,e,n),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Oy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ny(t,e,n)}return er(t,e,n)}var ky,Oh,By,zy;ky=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oh=function(){};By=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ss(wi.current);var s=null;switch(n){case"input":r=sh(t,r),i=sh(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=lh(t,r),i=lh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ac)}uh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ho(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function kT(t,e,n){var i=e.pendingProps;switch(bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Tn(e.type)&&Cc(),tn(e),null;case 3:return i=e.stateNode,xo(),mt(En),mt(un),Up(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(Wh(oi),oi=null))),Oh(t,e),tn(e),null;case 5:Ip(e);var r=ss(La.current);if(n=e.type,t!==null&&e.stateNode!=null)By(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return tn(e),null}if(t=ss(wi.current),gl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)pt(ta[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":vg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":xg(i,s),pt("invalid",i)}uh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ml(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ml(i.textContent,a,t),r=["children",""+a]):ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":al(i),_g(i,s,!0);break;case"textarea":al(i),yg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=px(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[Pa]=i,ky(t,e,!1,!1),e.stateNode=t;e:{switch(o=dh(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)pt(ta[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":vg(t,i),r=sh(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":xg(t,i),r=lh(t,i),pt("invalid",t);break;default:r=i}uh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&dp(t,s,l,o))}switch(n){case"input":al(t),_g(t,i,!1);break;case"textarea":al(t),yg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?so(t,!!i.multiple,s,!1):i.defaultValue!=null&&so(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)zy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ss(La.current),ss(wi.current),gl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:ml(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ml(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return tn(e),null;case 13:if(mt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Nn!==null&&e.mode&1&&!(e.flags&128))ry(),vo(),e.flags|=98560,s=!1;else if(s=gl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Si]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else oi!==null&&(Wh(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Vt===0&&(Vt=3):Yp())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return xo(),Oh(t,e),t===null&&Ca(e.stateNode.containerInfo),tn(e),null;case 10:return Pp(e.type._context),tn(e),null;case 17:return Tn(e.type)&&Cc(),tn(e),null;case 19:if(mt(yt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ho(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,Ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>So&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return tn(e),null}else 2*Nt()-s.renderingStartTime>So&&n!==1073741824&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=yt.current,ht(yt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return Xp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function BT(t,e){switch(bp(e),e.tag){case 1:return Tn(e.type)&&Cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),mt(En),mt(un),Up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ip(e),null;case 13:if(mt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(yt),null;case 4:return xo(),null;case 10:return Pp(e.type._context),null;case 22:case 23:return Xp(),null;case 24:return null;default:return null}}var xl=!1,on=!1,zT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function kh(t,e,n){try{n()}catch(i){At(t,e,i)}}var c0=!1;function VT(t,e){if(Sh=Tc,t=Wx(),Tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},Tc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,v=g.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:ri(e.type,y),v);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){At(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=c0,c0=!1,g}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kh(e,n,s)}r=r.next}while(r!==i)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vy(t){var e=t.alternate;e!==null&&(t.alternate=null,Vy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Pa],delete e[wh],delete e[ET],delete e[TT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hy(t){return t.tag===5||t.tag===3||t.tag===4}function u0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Vh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}var Yt=null,si=!1;function lr(t,e,n){for(n=n.child;n!==null;)Gy(t,e,n),n=n.sibling}function Gy(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:on||Zs(n,e);case 6:var i=Yt,r=si;Yt=null,lr(t,e,n),Yt=i,si=r,Yt!==null&&(si?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(si?(t=Yt,n=n.stateNode,t.nodeType===8?qu(t.parentNode,n):t.nodeType===1&&qu(t,n),wa(t)):qu(Yt,n.stateNode));break;case 4:i=Yt,r=si,Yt=n.stateNode.containerInfo,si=!0,lr(t,e,n),Yt=i,si=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kh(n,e,o),r=r.next}while(r!==i)}lr(t,e,n);break;case 1:if(!on&&(Zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,lr(t,e,n),on=i):lr(t,e,n);break;default:lr(t,e,n)}}function d0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zT),e.forEach(function(i){var r=KT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,si=!1;break e;case 3:Yt=a.stateNode.containerInfo,si=!0;break e;case 4:Yt=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(Yt===null)throw Error(ie(160));Gy(s,o,r),Yt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jy(e,t),e=e.sibling}function jy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),gi(t),i&4){try{fa(3,t,t.return),hu(3,t)}catch(y){At(t,t.return,y)}try{fa(5,t,t.return)}catch(y){At(t,t.return,y)}}break;case 1:Jn(e,t),gi(t),i&512&&n!==null&&Zs(n,n.return);break;case 5:if(Jn(e,t),gi(t),i&512&&n!==null&&Zs(n,n.return),t.flags&32){var r=t.stateNode;try{Sa(r,"")}catch(y){At(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hx(r,s),dh(a,o);var c=dh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?vx(r,h):u==="dangerouslySetInnerHTML"?mx(r,h):u==="children"?Sa(r,h):dp(r,u,h,c)}switch(a){case"input":oh(r,s);break;case"textarea":fx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?so(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?so(r,!!s.multiple,s.defaultValue,!0):so(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(y){At(t,t.return,y)}}break;case 6:if(Jn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){At(t,t.return,y)}}break;case 3:if(Jn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(y){At(t,t.return,y)}break;case 4:Jn(e,t),gi(t);break;case 13:Jn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jp=Nt())),i&4&&d0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,Jn(e,t),on=c):Jn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(h=Ee=u;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:fa(4,d,d.return);break;case 1:Zs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){At(i,n,y)}}break;case 5:Zs(d,d.return);break;case 22:if(d.memoizedState!==null){f0(h);continue}}p!==null?(p.return=d,Ee=p):f0(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gx("display",o))}catch(y){At(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){At(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Jn(e,t),gi(t),i&4&&d0(t);break;case 21:break;default:Jn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hy(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Sa(r,""),i.flags&=-33);var s=u0(t);Vh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=u0(t);zh(t,a,o);break;default:throw Error(ie(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HT(t,e,n){Ee=t,Wy(t)}function Wy(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||xl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=xl;var c=on;if(xl=o,(on=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?p0(r):l!==null?(l.return=o,Ee=l):p0(r);for(;s!==null;)Ee=s,Wy(s),s=s.sibling;Ee=r,xl=a,on=c}h0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):h0(t)}}function h0(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}on||e.flags&512&&Bh(e)}catch(d){At(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function f0(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function p0(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Bh(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Bh(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var GT=Math.ceil,kc=rr.ReactCurrentDispatcher,Hp=rr.ReactCurrentOwner,$n=rr.ReactCurrentBatchConfig,Je=0,Xt=null,Ft=null,Zt=0,Dn=0,Qs=Vr(0),Vt=0,Fa=null,ms=0,fu=0,Gp=0,pa=null,Sn=null,jp=0,So=1/0,zi=null,Bc=!1,Hh=null,Pr=null,yl=!1,Er=null,zc=0,ma=0,Gh=null,sc=-1,oc=0;function pn(){return Je&6?Nt():sc!==-1?sc:sc=Nt()}function Dr(t){return t.mode&1?Je&2&&Zt!==0?Zt&-Zt:bT.transition!==null?(oc===0&&(oc=Rx()),oc):(t=it,t!==0||(t=window.event,t=t===void 0?16:Fx(t.type)),t):1}function ui(t,e,n,i){if(50<ma)throw ma=0,Gh=null,Error(ie(185));Xa(t,n,i),(!(Je&2)||t!==Xt)&&(t===Xt&&(!(Je&2)&&(fu|=n),Vt===4&&yr(t,Zt)),wn(t,i),n===1&&Je===0&&!(e.mode&1)&&(So=Nt()+500,cu&&Hr()))}function wn(t,e){var n=t.callbackNode;bE(t,e);var i=Ec(t,t===Xt?Zt:0);if(i===0)n!==null&&Eg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Eg(n),e===1)t.tag===0?wT(m0.bind(null,t)):ty(m0.bind(null,t)),ST(function(){!(Je&6)&&Hr()}),n=null;else{switch(Px(i)){case 1:n=gp;break;case 4:n=Ax;break;case 16:n=Mc;break;case 536870912:n=Cx;break;default:n=Mc}n=Jy(n,Xy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xy(t,e){if(sc=-1,oc=0,Je&6)throw Error(ie(327));var n=t.callbackNode;if(uo()&&t.callbackNode!==n)return null;var i=Ec(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vc(t,i);else{e=i;var r=Je;Je|=2;var s=qy();(Xt!==t||Zt!==e)&&(zi=null,So=Nt()+500,cs(t,e));do try{XT();break}catch(a){Yy(t,a)}while(!0);Rp(),kc.current=s,Je=r,Ft!==null?e=0:(Xt=null,Zt=0,e=Vt)}if(e!==0){if(e===2&&(r=gh(t),r!==0&&(i=r,e=jh(t,r))),e===1)throw n=Fa,cs(t,0),yr(t,i),wn(t,Nt()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!jT(r)&&(e=Vc(t,i),e===2&&(s=gh(t),s!==0&&(i=s,e=jh(t,s))),e===1))throw n=Fa,cs(t,0),yr(t,i),wn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Qr(t,Sn,zi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=jp+500-Nt(),10<e)){if(Ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Th(Qr.bind(null,t,Sn,zi),e);break}Qr(t,Sn,zi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*GT(i/1960))-i,10<i){t.timeoutHandle=Th(Qr.bind(null,t,Sn,zi),i);break}Qr(t,Sn,zi);break;case 5:Qr(t,Sn,zi);break;default:throw Error(ie(329))}}}return wn(t,Nt()),t.callbackNode===n?Xy.bind(null,t):null}function jh(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(cs(t,e).flags|=256),t=Vc(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&Wh(e)),t}function Wh(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function jT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Gp,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function m0(t){if(Je&6)throw Error(ie(327));uo();var e=Ec(t,0);if(!(e&1))return wn(t,Nt()),null;var n=Vc(t,e);if(t.tag!==0&&n===2){var i=gh(t);i!==0&&(e=i,n=jh(t,i))}if(n===1)throw n=Fa,cs(t,0),yr(t,e),wn(t,Nt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,Sn,zi),wn(t,Nt()),null}function Wp(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(So=Nt()+500,cu&&Hr())}}function gs(t){Er!==null&&Er.tag===0&&!(Je&6)&&uo();var e=Je;Je|=1;var n=$n.transition,i=it;try{if($n.transition=null,it=1,t)return t()}finally{it=i,$n.transition=n,Je=e,!(Je&6)&&Hr()}}function Xp(){Dn=Qs.current,mt(Qs)}function cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yT(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(bp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cc();break;case 3:xo(),mt(En),mt(un),Up();break;case 5:Ip(i);break;case 4:xo();break;case 13:mt(yt);break;case 19:mt(yt);break;case 10:Pp(i.type._context);break;case 22:case 23:Xp()}n=n.return}if(Xt=t,Ft=t=Lr(t.current,null),Zt=Dn=e,Vt=0,Fa=null,Gp=fu=ms=0,Sn=pa=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rs=null}return t}function Yy(t,e){do{var n=Ft;try{if(Rp(),nc.current=Oc,Fc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fc=!1}if(ps=0,Wt=zt=Mt=null,ha=!1,Na=0,Hp.current=null,n===null||n.return===null){Vt=1,Fa=e,Ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=n0(o);if(p!==null){p.flags&=-257,i0(p,o,a,s,e),p.mode&1&&t0(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){t0(s,c,e),Yp();break e}l=Error(ie(426))}}else if(vt&&a.mode&1){var v=n0(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),i0(v,o,a,s,e),Ap(yo(l,a));break e}}s=l=yo(l,a),Vt!==4&&(Vt=2),pa===null?pa=[s]:pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Py(s,l,e);$g(s,f);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Pr===null||!Pr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Dy(s,a,e);$g(s,M);break e}}s=s.return}while(s!==null)}Ky(n)}catch(b){e=b,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function qy(){var t=kc.current;return kc.current=Oc,t===null?Oc:t}function Yp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Xt===null||!(ms&268435455)&&!(fu&268435455)||yr(Xt,Zt)}function Vc(t,e){var n=Je;Je|=2;var i=qy();(Xt!==t||Zt!==e)&&(zi=null,cs(t,e));do try{WT();break}catch(r){Yy(t,r)}while(!0);if(Rp(),Je=n,kc.current=i,Ft!==null)throw Error(ie(261));return Xt=null,Zt=0,Vt}function WT(){for(;Ft!==null;)$y(Ft)}function XT(){for(;Ft!==null&&!vE();)$y(Ft)}function $y(t){var e=Qy(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?Ky(t):Ft=e,Hp.current=null}function Ky(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BT(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ft=null;return}}else if(n=kT(n,e,Dn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Vt===0&&(Vt=5)}function Qr(t,e,n){var i=it,r=$n.transition;try{$n.transition=null,it=1,YT(t,e,n,i)}finally{$n.transition=r,it=i}return null}function YT(t,e,n,i){do uo();while(Er!==null);if(Je&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AE(t,s),t===Xt&&(Ft=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,Jy(Mc,function(){return uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=it;it=1;var a=Je;Je|=4,Hp.current=null,VT(t,n),jy(n,t),fT(Mh),Tc=!!Sh,Mh=Sh=null,t.current=n,HT(n),_E(),Je=a,it=o,$n.transition=s}else t.current=n;if(yl&&(yl=!1,Er=t,zc=r),s=t.pendingLanes,s===0&&(Pr=null),SE(n.stateNode),wn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bc)throw Bc=!1,t=Hh,Hh=null,t;return zc&1&&t.tag!==0&&uo(),s=t.pendingLanes,s&1?t===Gh?ma++:(ma=0,Gh=t):ma=0,Hr(),null}function uo(){if(Er!==null){var t=Px(zc),e=$n.transition,n=it;try{if($n.transition=null,it=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,zc=0,Je&6)throw Error(ie(331));var r=Je;for(Je|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:fa(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ee=h;else for(;Ee!==null;){u=Ee;var d=u.sibling,p=u.return;if(Vy(u),u===c){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=m;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hu(9,a)}}catch(b){At(a,a.return,b)}if(a===o){Ee=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ee=M;break e}Ee=a.return}}if(Je=r,Hr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(ru,t)}catch{}i=!0}return i}finally{it=n,$n.transition=e}}return!1}function g0(t,e,n){e=yo(n,e),e=Py(t,e,1),t=Rr(t,e,1),e=pn(),t!==null&&(Xa(t,1,e),wn(t,e))}function At(t,e,n){if(t.tag===3)g0(t,t,n);else for(;e!==null;){if(e.tag===3){g0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=yo(n,t),t=Dy(e,t,1),e=Rr(e,t,1),t=pn(),e!==null&&(Xa(e,1,t),wn(e,t));break}}e=e.return}}function qT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Vt===4||Vt===3&&(Zt&130023424)===Zt&&500>Nt()-jp?cs(t,0):Gp|=n),wn(t,e)}function Zy(t,e){e===0&&(t.mode&1?(e=ul,ul<<=1,!(ul&130023424)&&(ul=4194304)):e=1);var n=pn();t=Ji(t,e),t!==null&&(Xa(t,e,n),wn(t,n))}function $T(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zy(t,n)}function KT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Zy(t,n)}var Qy;Qy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,OT(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,vt&&e.flags&1048576&&ny(e,Dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rc(t,e),t=e.pendingProps;var r=go(e,un.current);co(e,n),r=Op(null,e,i,t,r,n);var s=kp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,Rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Lp(e),r.updater=du,e.stateNode=r,r._reactInternals=e,Dh(e,i,t,n),e=Ih(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&wp(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(rc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=QT(i),t=ri(i,t),r){case 0:e=Nh(null,e,i,t,n);break e;case 1:e=o0(null,e,i,t,n);break e;case 11:e=r0(null,e,i,t,n);break e;case 14:e=s0(null,e,i,ri(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Nh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),o0(t,e,i,r,n);case 3:e:{if(Uy(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ly(t,e),Ic(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=yo(Error(ie(423)),e),e=a0(t,e,i,n,r);break e}else if(i!==r){r=yo(Error(ie(424)),e),e=a0(t,e,i,n,r);break e}else for(Nn=Cr(e.stateNode.containerInfo.firstChild),In=e,vt=!0,oi=null,n=oy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),i===r){e=er(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return cy(e),t===null&&Ch(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Eh(i,r)?o=null:s!==null&&Eh(i,s)&&(e.flags|=32),Iy(t,e),hn(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return Fy(t,e,n);case 4:return Np(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_o(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),r0(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Lc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!En.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,co(e,n),r=Zn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),s0(t,e,i,r,n);case 15:return Ly(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),rc(t,e),e.tag=1,Tn(i)?(t=!0,Rc(e)):t=!1,co(e,n),Ry(e,i,r),Dh(e,i,r,n),Ih(null,e,i,!0,t,n);case 19:return Oy(t,e,n);case 22:return Ny(t,e,n)}throw Error(ie(156,e.tag))};function Jy(t,e){return bx(t,e)}function ZT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new ZT(t,e,n,i)}function qp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QT(t){if(typeof t=="function")return qp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fp)return 11;if(t===pp)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ac(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")qp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return us(n.children,r,s,e);case hp:o=8,r|=8;break;case th:return t=qn(12,n,e,r|2),t.elementType=th,t.lanes=s,t;case nh:return t=qn(13,n,e,r),t.elementType=nh,t.lanes=s,t;case ih:return t=qn(19,n,e,r),t.elementType=ih,t.lanes=s,t;case cx:return pu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ax:o=10;break e;case lx:o=9;break e;case fp:o=11;break e;case pp:o=14;break e;case gr:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function us(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function pu(t,e,n,i){return t=qn(22,t,i,e),t.elementType=cx,t.lanes=n,t.stateNode={isHidden:!1},t}function nd(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function id(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $p(t,e,n,i,r,s,o,a,l){return t=new JT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lp(s),t}function ew(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function eS(t){if(!t)return Ir;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Tn(n))return ey(t,n,e)}return e}function tS(t,e,n,i,r,s,o,a,l){return t=$p(n,i,!0,t,r,s,o,a,l),t.context=eS(null),n=t.current,i=pn(),r=Dr(n),s=Xi(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,Xa(t,r,i),wn(t,i),t}function mu(t,e,n,i){var r=e.current,s=pn(),o=Dr(r);return n=eS(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,o),t!==null&&(ui(t,r,o,s),tc(t,r,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function v0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kp(t,e){v0(t,e),(t=t.alternate)&&v0(t,e)}function tw(){return null}var nS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zp(t){this._internalRoot=t}gu.prototype.render=Zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));mu(t,e,null,null)};gu.prototype.unmount=Zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){mu(null,t,null,null)}),e[Qi]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&Ux(t)}};function Qp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _0(){}function nw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hc(o);s.call(c)}}var o=tS(e,i,t,0,null,!1,!1,"",_0);return t._reactRootContainer=o,t[Qi]=o.current,Ca(t.nodeType===8?t.parentNode:t),gs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Hc(l);a.call(c)}}var l=$p(t,0,!1,null,null,!1,!1,"",_0);return t._reactRootContainer=l,t[Qi]=l.current,Ca(t.nodeType===8?t.parentNode:t),gs(function(){mu(e,l,n,i)}),l}function _u(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hc(o);a.call(l)}}mu(e,o,t,r)}else o=nw(n,e,t,r,i);return Hc(o)}Dx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(vp(e,n|1),wn(e,Nt()),!(Je&6)&&(So=Nt()+500,Hr()))}break;case 13:gs(function(){var i=Ji(t,1);if(i!==null){var r=pn();ui(i,t,1,r)}}),Kp(t,1)}};_p=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=pn();ui(e,t,134217728,n)}Kp(t,134217728)}};Lx=function(t){if(t.tag===13){var e=Dr(t),n=Ji(t,e);if(n!==null){var i=pn();ui(n,t,e,i)}Kp(t,e)}};Nx=function(){return it};Ix=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};fh=function(t,e,n){switch(e){case"input":if(oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lu(i);if(!r)throw Error(ie(90));dx(i),oh(i,r)}}}break;case"textarea":fx(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};yx=Wp;Sx=gs;var iw={usingClientEntryPoint:!1,Events:[qa,Xs,lu,_x,xx,Wp]},Go={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tx(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{ru=Sl.inject(rw),Ti=Sl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qp(e))throw Error(ie(200));return ew(t,e,null,n)};Bn.createRoot=function(t,e){if(!Qp(t))throw Error(ie(299));var n=!1,i="",r=nS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$p(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,Ca(t.nodeType===8?t.parentNode:t),new Zp(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Tx(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return gs(t)};Bn.hydrate=function(t,e,n){if(!vu(e))throw Error(ie(200));return _u(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!Qp(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=nS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tS(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gu(e)};Bn.render=function(t,e,n){if(!vu(e))throw Error(ie(200));return _u(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!vu(t))throw Error(ie(40));return t._reactRootContainer?(gs(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Bn.unstable_batchedUpdates=Wp;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return _u(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function iS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iS)}catch(t){console.error(t)}}iS(),ix.exports=Bn;var sw=ix.exports,x0=sw;Jd.createRoot=x0.createRoot,Jd.hydrateRoot=x0.hydrateRoot;/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),y0=t=>{const e=aw(t);return e.charAt(0).toUpperCase()+e.slice(1)},rS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),lw=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=ee.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ee.createElement("svg",{ref:l,...cw,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:rS("lucide",r),...!s&&!lw(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>ee.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(t,e)=>{const n=ee.forwardRef(({className:i,...r},s)=>ee.createElement(uw,{ref:s,iconNode:e,className:rS(`lucide-${ow(y0(t))}`,`lucide-${t}`,i),...r}));return n.displayName=y0(t),n};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Gc=Ie("arrow-right",dw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]],sS=Ie("battery-charging",hw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Xh=Ie("bot",fw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],mw=Ie("circle-alert",pw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Yh=Ie("circle-check-big",gw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],_w=Ie("circle-check",vw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],yw=Ie("clock-3",xw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Mw=Ie("factory",Sw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Tw=Ie("gamepad-2",Ew);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Jp=Ie("hand",ww);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Aw=Ie("headphones",bw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],oS=Ie("heart",Cw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Pw=Ie("house",Rw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Lw=Ie("info",Dw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],aS=Ie("instagram",Nw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Uw=Ie("lightbulb",Iw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],rd=Ie("mail",Fw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],S0=Ie("map-pin",Ow);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Bw=Ie("menu",kw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Vw=Ie("message-circle",zw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M5 12h14",key:"1ays0h"}]],Gw=Ie("minus",Hw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Ww=Ie("monitor",jw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Yw=Ie("package",Xw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],$w=Ie("pen-line",qw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],qh=Ie("phone",Kw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],Qw=Ie("plug-zap",Zw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],eb=Ie("plus",Jw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],em=Ie("radio",tb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ib=Ie("refresh-cw",nb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],M0=Ie("search",rb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ob=Ie("send",sb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lS=Ie("shield-check",ab);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],$h=Ie("shopping-bag",lb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],ub=Ie("shopping-cart",cb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],hb=Ie("smile",db);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],cS=Ie("sparkles",fb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],mb=Ie("target",pb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],vb=Ie("trash-2",gb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],uS=Ie("truck",_b);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],lc=Ie("user",xb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],tm=Ie("volume-2",yb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Mb=Ie("wrench",Sb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Kn=Ie("x",Eb);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],xu=Ie("zap",Tb);function E0(t,e){const n=t.length,i=e.length,r=Array.from({length:n+1},(s,o)=>Array.from({length:i+1},(a,l)=>o===0?l:l===0?o:0));for(let s=1;s<=n;s++)for(let o=1;o<=i;o++)r[s][o]=t[s-1]===e[o-1]?r[s-1][o-1]:1+Math.min(r[s-1][o],r[s][o-1],r[s-1][o-1]);return r[n][i]}function wb(t,e){const n=e.trim().toLowerCase();if(!n)return{exact:t,fuzzy:[],didYouMean:null};const i=n.split(/\s+/),r=new Set;t.forEach(l=>{`${l.name} ${l.nameHighlight} ${l.tagline} ${l.description}`.toLowerCase().split(/\s+/).forEach(u=>r.add(u))});const s=[],o=[];t.forEach(l=>{const c=`${l.name} ${l.nameHighlight} ${l.tagline} ${l.description}`.toLowerCase();if(i.every(p=>c.includes(p))){s.push(l);return}const h=c.split(/\s+/);i.some(p=>h.some(g=>Math.abs(g.length-p.length)>3?!1:E0(p,g)<=2))&&o.push(l)});let a=null;if(s.length===0){const l=i[i.length-1];let c=null,u=1/0;r.forEach(h=>{if(Math.abs(h.length-l.length)>4)return;const d=E0(l,h);d<u&&d<=3&&d>0&&(u=d,c=h)}),c&&(a=c)}return{exact:s,fuzzy:o,didYouMean:a}}function nm({links:t,ariaLabel:e,onNavigate:n,isHome:i=!1,cartCount:r=0,onCartClick:s,searchQuery:o="",onSearchChange:a,user:l,onLoginClick:c,products:u=[]}){const[h,d]=ee.useState(!1),[p,g]=ee.useState(!1),[y,v]=ee.useState(!1),f=ee.useRef(null);ee.useEffect(()=>{d(!1)},[e]),ee.useEffect(()=>(document.body.style.overflow=h?"hidden":"",()=>{document.body.style.overflow=""}),[h]),ee.useEffect(()=>{function V(Y){f.current&&!f.current.contains(Y.target)&&v(!1)}return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[]);const m=(V,Y)=>{V.preventDefault(),d(!1),n(Y)},x=i?"#home":"/",M=[{href:"#home",label:"Home",Icon:Pw},{href:"#features",label:"Features",Icon:xu},{href:"#products",label:"Shop",Icon:$h},{href:"/about",label:"About Us",Icon:Lw},{href:"/support",label:"Support",Icon:Aw},{href:"#products",label:"Contact",Icon:qh}],{exact:b,fuzzy:T,didYouMean:A}=wb(u,o),_=[...b,...T].slice(0,5),R=b.length===0&&T.length>0,D=y&&o.trim().length>0;function P(V){v(!1),g(!1),a("");const Y=document.getElementById("products");Y&&Y.scrollIntoView({behavior:"smooth"})}function k(V){a(V)}return S.jsxs("header",{className:"topbar",children:[S.jsxs("div",{className:"announcement-bar",children:[S.jsx("span",{children:"🚀 Proudly Made in India"}),S.jsx("span",{className:"dot-sep"}),S.jsx("span",{children:"Smart Robots for a Smarter Tomorrow"})]}),S.jsxs("div",{className:"navbar",children:[S.jsx("a",{className:"brand-lockup",href:x,"aria-label":"RoboMitra home",onClick:V=>m(V,"/"),children:S.jsxs("span",{className:"brand-text-logo",children:["Robo",S.jsx("span",{children:"Mitra"})]})}),S.jsxs("nav",{id:"primary-navigation",className:`nav-links ${h?"nav-links-open":""}`,"aria-label":e,children:[S.jsxs("div",{className:"mobile-menu-header",children:[S.jsxs("span",{className:"brand-text-logo",style:{fontSize:"1.3rem"},children:["Robo",S.jsx("span",{children:"Mitra"})]}),S.jsx("button",{type:"button",className:"mobile-menu-close-btn",onClick:()=>d(!1),"aria-label":"Close menu",children:S.jsx(Kn,{size:22})})]}),S.jsx("div",{className:"mobile-menu-links",children:M.map(({href:V,label:Y,Icon:I})=>S.jsxs("a",{className:"nav-link",href:V,onClick:H=>m(H,V),children:[S.jsx("span",{className:"nav-link-icon",children:S.jsx(I,{size:18})}),Y,S.jsx(Gc,{size:14,className:"nav-link-arrow"})]},`${V}-${Y}`))}),S.jsxs("div",{className:"mobile-menu-footer",children:[S.jsx("p",{className:"mobile-menu-footer-label",children:"Get in touch"}),S.jsxs("div",{className:"mobile-menu-socials",children:[S.jsxs("a",{href:"https://wa.me/917977473538",target:"_blank",rel:"noopener noreferrer",className:"mobile-social-btn mobile-social-wa",children:[S.jsx(qh,{size:16})," WhatsApp"]}),S.jsxs("a",{href:"https://instagram.com/Robomitra.tech",target:"_blank",rel:"noopener noreferrer",className:"mobile-social-btn mobile-social-ig",children:[S.jsx(aS,{size:16})," Instagram"]})]})]})]}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[S.jsx("div",{ref:f,className:"nav-search-root",children:p?S.jsxs("div",{className:"nav-search-expanded",children:[S.jsxs("div",{className:"nav-search-bar",children:[S.jsx(M0,{size:14,className:"nav-search-icon"}),S.jsx("input",{type:"text",placeholder:"Search robots…",value:o,onChange:V=>{a(V.target.value),v(!0)},onFocus:()=>v(!0),className:"nav-search-input",autoFocus:!0,"aria-label":"Search products"}),S.jsx("button",{className:"nav-search-clear",onClick:()=>{g(!1),v(!1),a("")},"aria-label":"Close search",children:S.jsx(Kn,{size:14})})]}),D&&S.jsx("div",{className:"search-dropdown",role:"listbox","aria-label":"Search results",children:_.length>0?S.jsxs(S.Fragment,{children:[R&&S.jsx("p",{className:"search-dropdown-notice",children:"🔍 Showing closest matches"}),_.map(V=>S.jsxs("button",{className:"search-dropdown-item",role:"option",onClick:()=>P(),children:[S.jsx("img",{src:V.image,alt:V.nameHighlight,className:"search-dropdown-img"}),S.jsxs("div",{className:"search-dropdown-info",children:[S.jsxs("span",{className:"search-dropdown-name",children:[V.name," ",S.jsx("strong",{children:V.nameHighlight})]}),S.jsx("span",{className:"search-dropdown-tag",children:V.tagline})]}),S.jsx("span",{className:"search-dropdown-price",children:V.price}),S.jsx(Gc,{size:14,className:"search-dropdown-arrow"})]},V.id)),A&&b.length===0&&S.jsxs("div",{className:"search-dropdown-dym",children:["Did you mean ",S.jsxs("button",{className:"search-dym-btn",onClick:()=>k(A),children:['"',A,'"']}),"?"]})]}):S.jsxs("div",{className:"search-dropdown-empty",children:[S.jsxs("p",{className:"search-dropdown-empty-title",children:['No robots found for "',o,'"']}),A&&S.jsxs("p",{className:"search-dropdown-empty-dym",children:["Did you mean ",S.jsxs("button",{className:"search-dym-btn",onClick:()=>k(A),children:['"',A,'"']}),"?"]}),S.jsx("p",{className:"search-dropdown-hint",children:'Try "Alex", "Andy" or "R1"'})]})})]}):S.jsx("button",{className:"navbar-icon-btn","aria-label":"Search",type:"button",onClick:()=>g(!0),children:S.jsx(M0,{size:18})})}),S.jsx("div",{className:"navbar-icons",children:S.jsxs("button",{className:"navbar-icon-btn","aria-label":l?`Logged in as ${l.name}`:"Login / Account",type:"button",onClick:c,style:{position:"relative"},children:[S.jsx(lc,{size:18}),l&&S.jsx("span",{className:"user-indicator-dot"})]})}),S.jsxs("button",{className:"navbar-icon-btn","aria-label":"Cart",type:"button",style:{position:"relative"},onClick:s,children:[S.jsx(ub,{size:18}),r>0&&S.jsx("span",{className:"cart-badge",children:r})]}),S.jsx("button",{type:"button",className:"menu-toggle","aria-expanded":h,"aria-controls":"primary-navigation","aria-label":h?"Close menu":"Open menu",onClick:()=>d(V=>!V),children:h?S.jsx(Kn,{size:20}):S.jsx(Bw,{size:20})})]})]})]})}const im=ee.createContext({});function rm(t){const e=ee.useRef(null);return e.current===null&&(e.current=t()),e.current}const yu=ee.createContext(null),sm=ee.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class bb extends ee.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ab({children:t,isPresent:e}){const n=ee.useId(),i=ee.useRef(null),r=ee.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ee.useContext(sm);return ee.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),S.jsx(bb,{isPresent:e,childRef:i,sizeRef:r,children:ee.cloneElement(t,{ref:i})})}const Cb=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=rm(Rb),l=ee.useId(),c=ee.useCallback(h=>{a.set(h,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=ee.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:h=>(a.set(h,!1),()=>a.delete(h))}),s?[Math.random(),c]:[n,c]);return ee.useMemo(()=>{a.forEach((h,d)=>a.set(d,!1))},[n]),ee.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=S.jsx(Ab,{isPresent:n,children:t})),S.jsx(yu.Provider,{value:u,children:t})};function Rb(){return new Map}function dS(t=!0){const e=ee.useContext(yu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ee.useId();ee.useEffect(()=>{t&&r(s)},[t]);const o=ee.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Ml=t=>t.key||"";function T0(t){const e=[];return ee.Children.forEach(t,n=>{ee.isValidElement(n)&&e.push(n)}),e}const om=typeof window<"u",hS=om?ee.useLayoutEffect:ee.useEffect,vs=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=dS(o),c=ee.useMemo(()=>T0(t),[t]),u=o&&!a?[]:c.map(Ml),h=ee.useRef(!0),d=ee.useRef(c),p=rm(()=>new Map),[g,y]=ee.useState(c),[v,f]=ee.useState(c);hS(()=>{h.current=!1,d.current=c;for(let M=0;M<v.length;M++){const b=Ml(v[M]);u.includes(b)?p.delete(b):p.get(b)!==!0&&p.set(b,!1)}},[v,u.length,u.join("-")]);const m=[];if(c!==g){let M=[...c];for(let b=0;b<v.length;b++){const T=v[b],A=Ml(T);u.includes(A)||(M.splice(b,0,T),m.push(T))}s==="wait"&&m.length&&(M=m),f(T0(M)),y(c);return}const{forceRender:x}=ee.useContext(im);return S.jsx(S.Fragment,{children:v.map(M=>{const b=Ml(M),T=o&&!a?!1:c===v||u.includes(b),A=()=>{if(p.has(b))p.set(b,!0);else return;let _=!0;p.forEach(R=>{R||(_=!1)}),_&&(x==null||x(),f(d.current),o&&(l==null||l()),i&&i())};return S.jsx(Cb,{isPresent:T,initial:!h.current||n?void 0:!1,custom:T?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:T?void 0:A,children:M},b)})})},Un=t=>t;let fS=Un;function am(t){let e;return()=>(e===void 0&&(e=t()),e)}const Mo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Yi=t=>t*1e3,qi=t=>t/1e3,Pb={useManualTiming:!1};function Db(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,h=!1)=>{const p=h&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const El=["read","resolveKeyframes","update","preRender","render","postRender"],Lb=40;function pS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=El.reduce((f,m)=>(f[m]=Db(s),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:d}=o,p=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,Lb),1),r.timestamp=f,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),h.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:El.reduce((f,m)=>{const x=o[m];return f[m]=(M,b=!1,T=!1)=>(n||g(),x.schedule(M,b,T)),f},{}),cancel:f=>{for(let m=0;m<El.length;m++)o[El[m]].cancel(f)},state:r,steps:o}}const{schedule:gt,cancel:Ur,state:qt,steps:sd}=pS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Un,!0),mS=ee.createContext({strict:!1}),w0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Eo={};for(const t in w0)Eo[t]={isEnabled:e=>w0[t].some(n=>!!e[n])};function Nb(t){for(const e in t)Eo[e]={...Eo[e],...t[e]}}const Ib=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ib.has(t)}let gS=t=>!jc(t);function Ub(t){t&&(gS=e=>e.startsWith("on")?!jc(e):t(e))}try{Ub(require("@emotion/is-prop-valid").default)}catch{}function Fb(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(gS(r)||n===!0&&jc(r)||!e&&!jc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Ob(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const Su=ee.createContext({});function Oa(t){return typeof t=="string"||Array.isArray(t)}function Mu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const lm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cm=["initial",...lm];function Eu(t){return Mu(t.animate)||cm.some(e=>Oa(t[e]))}function vS(t){return!!(Eu(t)||t.variants)}function kb(t,e){if(Eu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Oa(n)?n:void 0,animate:Oa(i)?i:void 0}}return t.inherit!==!1?e:{}}function Bb(t){const{initial:e,animate:n}=kb(t,ee.useContext(Su));return ee.useMemo(()=>({initial:e,animate:n}),[b0(e),b0(n)])}function b0(t){return Array.isArray(t)?t.join(" "):t}const zb=Symbol.for("motionComponentSymbol");function Js(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Vb(t,e,n){return ee.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Js(n)&&(n.current=i))},[e])}const um=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Hb="framerAppearId",_S="data-"+um(Hb),{schedule:dm}=pS(queueMicrotask,!1),xS=ee.createContext({});function Gb(t,e,n,i,r){var s,o;const{visualElement:a}=ee.useContext(Su),l=ee.useContext(mS),c=ee.useContext(yu),u=ee.useContext(sm).reducedMotion,h=ee.useRef(null);i=i||l.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=h.current,p=ee.useContext(xS);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&jb(h.current,n,r,p);const g=ee.useRef(!1);ee.useInsertionEffect(()=>{d&&g.current&&d.update(n,c)});const y=n[_S],v=ee.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return hS(()=>{d&&(g.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),dm.render(d.render),v.current&&d.animationState&&d.animationState.animateChanges())}),ee.useEffect(()=>{d&&(!v.current&&d.animationState&&d.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,y)}),v.current=!1))}),d}function jb(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:yS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Js(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function yS(t){if(t)return t.options.allowProjection!==!1?t.projection:yS(t.parent)}function Wb({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&Nb(t);function a(c,u){let h;const d={...ee.useContext(sm),...c,layoutId:Xb(c)},{isStatic:p}=d,g=Bb(c),y=i(c,p);if(!p&&om){Yb();const v=qb(d);h=v.MeasureLayout,g.visualElement=Gb(r,y,d,e,v.ProjectionNode)}return S.jsxs(Su.Provider,{value:g,children:[h&&g.visualElement?S.jsx(h,{visualElement:g.visualElement,...d}):null,n(r,c,Vb(y,g.visualElement,u),y,p,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ee.forwardRef(a);return l[zb]=r,l}function Xb({layoutId:t}){const e=ee.useContext(im).id;return e&&t!==void 0?e+"-"+t:t}function Yb(t,e){ee.useContext(mS).strict}function qb(t){const{drag:e,layout:n}=Eo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const $b=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hm(t){return typeof t!="string"||t.includes("-")?!1:!!($b.indexOf(t)>-1||/[A-Z]/u.test(t))}function A0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function fm(t,e,n,i){if(typeof e=="function"){const[r,s]=A0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=A0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Kh=t=>Array.isArray(t),Kb=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Zb=t=>Kh(t)?t[t.length-1]||0:t,an=t=>!!(t&&t.getVelocity);function cc(t){const e=an(t)?t.get():t;return Kb(e)?e.toValue():e}function Qb({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:Jb(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const SS=t=>(e,n)=>{const i=ee.useContext(Su),r=ee.useContext(yu),s=()=>Qb(t,e,i,r);return n?s():rm(s)};function Jb(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=cc(s[d]);let{initial:o,animate:a}=t;const l=Eu(t),c=vS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!Mu(h)){const d=Array.isArray(h)?h:[h];for(let p=0;p<d.length;p++){const g=fm(t,d[p]);if(g){const{transitionEnd:y,transition:v,...f}=g;for(const m in f){let x=f[m];if(Array.isArray(x)){const M=u?x.length-1:0;x=x[M]}x!==null&&(r[m]=x)}for(const m in y)r[m]=y[m]}}}return r}const Lo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ms=new Set(Lo),MS=t=>e=>typeof e=="string"&&e.startsWith(t),ES=MS("--"),eA=MS("var(--"),pm=t=>eA(t)?tA.test(t.split("/*")[0].trim()):!1,tA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,TS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,tr=(t,e,n)=>n>e?e:n<t?t:n,No={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ka={...No,transform:t=>tr(0,1,t)},Tl={...No,default:1},Ka=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),mr=Ka("deg"),bi=Ka("%"),Ce=Ka("px"),nA=Ka("vh"),iA=Ka("vw"),C0={...bi,parse:t=>bi.parse(t)/100,transform:t=>bi.transform(t*100)},rA={borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,backgroundPositionX:Ce,backgroundPositionY:Ce},sA={rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:Tl,scaleX:Tl,scaleY:Tl,scaleZ:Tl,skew:mr,skewX:mr,skewY:mr,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:ka,originX:C0,originY:C0,originZ:Ce},R0={...No,transform:Math.round},mm={...rA,...sA,zIndex:R0,size:Ce,fillOpacity:ka,strokeOpacity:ka,numOctaves:R0},oA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},aA=Lo.length;function lA(t,e,n){let i="",r=!0;for(let s=0;s<aA;s++){const o=Lo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=TS(a,mm[o]);if(!l){r=!1;const u=oA[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function gm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Ms.has(l)){o=!0;continue}else if(ES(l)){r[l]=c;continue}else{const u=TS(c,mm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=lA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const cA={offset:"stroke-dashoffset",array:"stroke-dasharray"},uA={offset:"strokeDashoffset",array:"strokeDasharray"};function dA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?cA:uA;t[s.offset]=Ce.transform(-i);const o=Ce.transform(e),a=Ce.transform(n);t[s.array]=`${o} ${a}`}function P0(t,e,n){return typeof t=="string"?t:Ce.transform(e+n*t)}function hA(t,e,n){const i=P0(e,t.x,t.width),r=P0(n,t.y,t.height);return`${i} ${r}`}function vm(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h){if(gm(t,c,h),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:g}=t;d.transform&&(g&&(p.transform=d.transform),delete d.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=hA(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&dA(d,o,a,l,!1)}const _m=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),wS=()=>({..._m(),attrs:{}}),xm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function bS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const AS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function CS(t,e,n,i){bS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(AS.has(r)?r:um(r),e.attrs[r])}const Wc={};function fA(t){Object.assign(Wc,t)}function RS(t,{layout:e,layoutId:n}){return Ms.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Wc[t]||t==="opacity")}function ym(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(an(r[o])||e.style&&an(e.style[o])||RS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function PS(t,e,n){const i=ym(t,e,n);for(const r in t)if(an(t[r])||an(e[r])){const s=Lo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function pA(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const D0=["x","y","width","height","cx","cy","r"],mA={useVisualState:SS({scrapeMotionValuesFromProps:PS,createRenderState:wS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Ms.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<D0.length;a++){const l=D0[a];t[l]!==e[l]&&(o=!0)}o&&gt.read(()=>{pA(n,i),gt.render(()=>{vm(i,r,xm(n.tagName),t.transformTemplate),CS(n,i)})})}})},gA={useVisualState:SS({scrapeMotionValuesFromProps:ym,createRenderState:_m})};function DS(t,e,n){for(const i in e)!an(e[i])&&!RS(i,n)&&(t[i]=e[i])}function vA({transformTemplate:t},e){return ee.useMemo(()=>{const n=_m();return gm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function _A(t,e){const n=t.style||{},i={};return DS(i,n,t),Object.assign(i,vA(t,e)),i}function xA(t,e){const n={},i=_A(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function yA(t,e,n,i){const r=ee.useMemo(()=>{const s=wS();return vm(s,e,xm(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};DS(s,t.style,t),r.style={...s,...r.style}}return r}function SA(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(hm(n)?yA:xA)(i,s,o,n),c=Fb(i,typeof n=="string",t),u=n!==ee.Fragment?{...c,...l,ref:r}:{},{children:h}=i,d=ee.useMemo(()=>an(h)?h.get():h,[h]);return ee.createElement(n,{...u,children:d})}}function MA(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...hm(i)?mA:gA,preloadedFeatures:t,useRender:SA(r),createVisualElement:e,Component:i};return Wb(o)}}function LS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Tu(t,e,n){const i=t.getProps();return fm(i,e,n!==void 0?n:i.custom,t)}const EA=am(()=>window.ScrollTimeline!==void 0);class TA{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(EA()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class wA extends TA{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Sm(t,e){return t?t[e]||t.default||t:void 0}const Zh=2e4;function NS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Zh;)e+=n,i=t.next(e);return e>=Zh?1/0:e}function Mm(t){return typeof t=="function"}function L0(t,e){t.timeline=e,t.onfinish=null}const Em=t=>Array.isArray(t)&&typeof t[0]=="number",bA={linearEasing:void 0};function AA(t,e){const n=am(t);return()=>{var i;return(i=bA[e])!==null&&i!==void 0?i:n()}}const Xc=AA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),IS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Mo(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function US(t){return!!(typeof t=="function"&&Xc()||!t||typeof t=="string"&&(t in Qh||Xc())||Em(t)||Array.isArray(t)&&t.every(US))}const na=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Qh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:na([0,.65,.55,1]),circOut:na([.55,0,1,.45]),backIn:na([.31,.01,.66,-.59]),backOut:na([.33,1.53,.69,.99])};function FS(t,e){if(t)return typeof t=="function"&&Xc()?IS(t,e):Em(t)?na(t):Array.isArray(t)?t.map(n=>FS(n,e)||Qh.easeOut):Qh[t]}const ii={x:!1,y:!1};function OS(){return ii.x||ii.y}function CA(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function kS(t,e){const n=CA(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function N0(t){return e=>{e.pointerType==="touch"||OS()||t(e)}}function RA(t,e,n={}){const[i,r,s]=kS(t,n),o=N0(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=N0(h=>{c(h),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const BS=(t,e)=>e?t===e?!0:BS(t,e.parentElement):!1,Tm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,PA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function DA(t){return PA.has(t.tagName)||t.tabIndex!==-1}const ia=new WeakSet;function I0(t){return e=>{e.key==="Enter"&&t(e)}}function od(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const LA=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=I0(()=>{if(ia.has(n))return;od(n,"down");const r=I0(()=>{od(n,"up")}),s=()=>od(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function U0(t){return Tm(t)&&!OS()}function NA(t,e,n={}){const[i,r,s]=kS(t,n),o=a=>{const l=a.currentTarget;if(!U0(a)||ia.has(l))return;ia.add(l);const c=e(a),u=(p,g)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",d),!(!U0(p)||!ia.has(l))&&(ia.delete(l),typeof c=="function"&&c(p,{success:g}))},h=p=>{u(p,n.useGlobalTarget||BS(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{!DA(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>LA(c,r),r)}),s}function IA(t){return t==="x"||t==="y"?ii[t]?null:(ii[t]=!0,()=>{ii[t]=!1}):ii.x||ii.y?null:(ii.x=ii.y=!0,()=>{ii.x=ii.y=!1})}const zS=new Set(["width","height","top","left","right","bottom",...Lo]);let uc;function UA(){uc=void 0}const Ai={now:()=>(uc===void 0&&Ai.set(qt.isProcessing||Pb.useManualTiming?qt.timestamp:performance.now()),uc),set:t=>{uc=t,queueMicrotask(UA)}};function wm(t,e){t.indexOf(e)===-1&&t.push(e)}function bm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Am{constructor(){this.subscriptions=[]}add(e){return wm(this.subscriptions,e),()=>bm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function VS(t,e){return e?t*(1e3/e):0}const F0=30,FA=t=>!isNaN(parseFloat(t));class OA{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Ai.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Ai.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=FA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Am);const i=this.events[e].add(n);return e==="change"?()=>{i(),gt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ai.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>F0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,F0);return VS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ba(t,e){return new OA(t,e)}function kA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ba(n))}function BA(t,e){const n=Tu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=Zb(s[o]);kA(t,o,a)}}function zA(t){return!!(an(t)&&t.add)}function Jh(t,e){const n=t.getValue("willChange");if(zA(n))return n.add(e)}function HS(t){return t.props[_S]}const GS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,VA=1e-7,HA=12;function GA(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=GS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>VA&&++a<HA);return o}function Za(t,e,n,i){if(t===e&&n===i)return Un;const r=s=>GA(s,0,1,t,n);return s=>s===0||s===1?s:GS(r(s),e,i)}const jS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,WS=t=>e=>1-t(1-e),XS=Za(.33,1.53,.69,.99),Cm=WS(XS),YS=jS(Cm),qS=t=>(t*=2)<1?.5*Cm(t):.5*(2-Math.pow(2,-10*(t-1))),Rm=t=>1-Math.sin(Math.acos(t)),$S=WS(Rm),KS=jS(Rm),ZS=t=>/^0[^.\s]+$/u.test(t);function jA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ZS(t):!0}const ga=t=>Math.round(t*1e5)/1e5,Pm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function WA(t){return t==null}const XA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Dm=(t,e)=>n=>!!(typeof n=="string"&&XA.test(n)&&n.startsWith(t)||e&&!WA(n)&&Object.prototype.hasOwnProperty.call(n,e)),QS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Pm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},YA=t=>tr(0,255,t),ad={...No,transform:t=>Math.round(YA(t))},os={test:Dm("rgb","red"),parse:QS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+ad.transform(t)+", "+ad.transform(e)+", "+ad.transform(n)+", "+ga(ka.transform(i))+")"};function qA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ef={test:Dm("#"),parse:qA,transform:os.transform},eo={test:Dm("hsl","hue"),parse:QS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+bi.transform(ga(e))+", "+bi.transform(ga(n))+", "+ga(ka.transform(i))+")"},sn={test:t=>os.test(t)||ef.test(t)||eo.test(t),parse:t=>os.test(t)?os.parse(t):eo.test(t)?eo.parse(t):ef.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?os.transform(t):eo.transform(t)},$A=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function KA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Pm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match($A))===null||n===void 0?void 0:n.length)||0)>0}const JS="number",eM="color",ZA="var",QA="var(",O0="${}",JA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function za(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(JA,l=>(sn.test(l)?(i.color.push(s),r.push(eM),n.push(sn.parse(l))):l.startsWith(QA)?(i.var.push(s),r.push(ZA),n.push(l)):(i.number.push(s),r.push(JS),n.push(parseFloat(l))),++s,O0)).split(O0);return{values:n,split:a,indexes:i,types:r}}function tM(t){return za(t).values}function nM(t){const{split:e,types:n}=za(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===JS?s+=ga(r[o]):a===eM?s+=sn.transform(r[o]):s+=r[o]}return s}}const eC=t=>typeof t=="number"?0:t;function tC(t){const e=tM(t);return nM(t)(e.map(eC))}const Fr={test:KA,parse:tM,createTransformer:nM,getAnimatableNone:tC},nC=new Set(["brightness","contrast","saturate","opacity"]);function iC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Pm)||[];if(!i)return t;const r=n.replace(i,"");let s=nC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const rC=/\b([a-z-]*)\(.*?\)/gu,tf={...Fr,getAnimatableNone:t=>{const e=t.match(rC);return e?e.map(iC).join(" "):t}},sC={...mm,color:sn,backgroundColor:sn,outlineColor:sn,fill:sn,stroke:sn,borderColor:sn,borderTopColor:sn,borderRightColor:sn,borderBottomColor:sn,borderLeftColor:sn,filter:tf,WebkitFilter:tf},Lm=t=>sC[t];function iM(t,e){let n=Lm(t);return n!==tf&&(n=Fr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const oC=new Set(["auto","none","0"]);function aC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!oC.has(s)&&za(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=iM(n,r)}const k0=t=>t===No||t===Ce,B0=(t,e)=>parseFloat(t.split(", ")[e]),z0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return B0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?B0(s[1],t):0}},lC=new Set(["x","y","z"]),cC=Lo.filter(t=>!lC.has(t));function uC(t){const e=[];return cC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const To={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:z0(4,13),y:z0(5,14)};To.translateX=To.x;To.translateY=To.y;const ds=new Set;let nf=!1,rf=!1;function rM(){if(rf){const t=Array.from(ds).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=uC(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}rf=!1,nf=!1,ds.forEach(t=>t.complete()),ds.clear()}function sM(){ds.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(rf=!0)})}function dC(){sM(),rM()}class Nm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ds.add(this),nf||(nf=!0,gt.read(sM),gt.resolveKeyframes(rM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ds.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ds.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const oM=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),hC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fC(t){const e=hC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function aM(t,e,n=1){const[i,r]=fC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return oM(o)?parseFloat(o):o}return pm(r)?aM(r,e,n+1):r}const lM=t=>e=>e.test(t),pC={test:t=>t==="auto",parse:t=>t},cM=[No,Ce,bi,mr,iA,nA,pC],V0=t=>cM.find(lM(t));class uM extends Nm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),pm(c))){const u=aM(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!zS.has(i)||e.length!==2)return;const[r,s]=e,o=V0(r),a=V0(s);if(o!==a)if(k0(o)&&k0(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)jA(e[r])&&i.push(r);i.length&&aC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=To[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=To[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const H0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Fr.test(t)||t==="0")&&!t.startsWith("url("));function mC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function gC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=H0(r,e),a=H0(s,e);return!o||!a?!1:mC(t)||(n==="spring"||Mm(n))&&i}const vC=t=>t!==null;function wu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(vC),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const _C=40;class dM{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ai.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>_C?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&dC(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Ai.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!gC(e,i,r,s))if(o)this.options.duration=0;else{l&&l(wu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const St=(t,e,n)=>t+(e-t)*n;function ld(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function xC({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=ld(l,a,t+1/3),s=ld(l,a,t),o=ld(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Yc(t,e){return n=>n>0?e:t}const cd=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},yC=[ef,os,eo],SC=t=>yC.find(e=>e.test(t));function G0(t){const e=SC(t);if(!e)return!1;let n=e.parse(t);return e===eo&&(n=xC(n)),n}const j0=(t,e)=>{const n=G0(t),i=G0(e);if(!n||!i)return Yc(t,e);const r={...n};return s=>(r.red=cd(n.red,i.red,s),r.green=cd(n.green,i.green,s),r.blue=cd(n.blue,i.blue,s),r.alpha=St(n.alpha,i.alpha,s),os.transform(r))},MC=(t,e)=>n=>e(t(n)),Qa=(...t)=>t.reduce(MC),sf=new Set(["none","hidden"]);function EC(t,e){return sf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function TC(t,e){return n=>St(t,e,n)}function Im(t){return typeof t=="number"?TC:typeof t=="string"?pm(t)?Yc:sn.test(t)?j0:AC:Array.isArray(t)?hM:typeof t=="object"?sn.test(t)?j0:wC:Yc}function hM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Im(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function wC(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Im(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function bC(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const AC=(t,e)=>{const n=Fr.createTransformer(e),i=za(t),r=za(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?sf.has(t)&&!r.values.length||sf.has(e)&&!i.values.length?EC(t,e):Qa(hM(bC(i,r),r.values),n):Yc(t,e)};function fM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?St(t,e,n):Im(t)(t,e)}const CC=5;function pM(t,e,n){const i=Math.max(e-CC,0);return VS(n-t(i),e-i)}const bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ud=.001;function RC({duration:t=bt.duration,bounce:e=bt.bounce,velocity:n=bt.velocity,mass:i=bt.mass}){let r,s,o=1-e;o=tr(bt.minDamping,bt.maxDamping,o),t=tr(bt.minDuration,bt.maxDuration,qi(t)),o<1?(r=c=>{const u=c*o,h=u*t,d=u-n,p=of(c,o),g=Math.exp(-h);return ud-d/p*g},s=c=>{const h=c*o*t,d=h*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-h),y=of(Math.pow(c,2),o);return(-r(c)+ud>0?-1:1)*((d-p)*g)/y}):(r=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-ud+u*h},s=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=DC(r,s,a);if(t=Yi(t),isNaN(l))return{stiffness:bt.stiffness,damping:bt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const PC=12;function DC(t,e,n){let i=n;for(let r=1;r<PC;r++)i=i-t(i)/e(i);return i}function of(t,e){return t*Math.sqrt(1-e*e)}const LC=["duration","bounce"],NC=["stiffness","damping","mass"];function W0(t,e){return e.some(n=>t[n]!==void 0)}function IC(t){let e={velocity:bt.velocity,stiffness:bt.stiffness,damping:bt.damping,mass:bt.mass,isResolvedFromDuration:!1,...t};if(!W0(t,NC)&&W0(t,LC))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*tr(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:bt.mass,stiffness:r,damping:s}}else{const n=RC(t);e={...e,...n,mass:bt.mass},e.isResolvedFromDuration=!0}return e}function mM(t=bt.visualDuration,e=bt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:h,velocity:d,isResolvedFromDuration:p}=IC({...n,velocity:-qi(n.velocity||0)}),g=d||0,y=c/(2*Math.sqrt(l*u)),v=o-s,f=qi(Math.sqrt(l/u)),m=Math.abs(v)<5;i||(i=m?bt.restSpeed.granular:bt.restSpeed.default),r||(r=m?bt.restDelta.granular:bt.restDelta.default);let x;if(y<1){const b=of(f,y);x=T=>{const A=Math.exp(-y*f*T);return o-A*((g+y*f*v)/b*Math.sin(b*T)+v*Math.cos(b*T))}}else if(y===1)x=b=>o-Math.exp(-f*b)*(v+(g+f*v)*b);else{const b=f*Math.sqrt(y*y-1);x=T=>{const A=Math.exp(-y*f*T),_=Math.min(b*T,300);return o-A*((g+y*f*v)*Math.sinh(_)+b*v*Math.cosh(_))/b}}const M={calculatedDuration:p&&h||null,next:b=>{const T=x(b);if(p)a.done=b>=h;else{let A=0;y<1&&(A=b===0?Yi(g):pM(x,b,T));const _=Math.abs(A)<=i,R=Math.abs(o-T)<=r;a.done=_&&R}return a.value=a.done?o:T,a},toString:()=>{const b=Math.min(NS(M),Zh),T=IS(A=>M.next(b*A).value,b,30);return b+"ms "+T}};return M}function X0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},p=_=>a!==void 0&&_<a||l!==void 0&&_>l,g=_=>a===void 0?l:l===void 0||Math.abs(a-_)<Math.abs(l-_)?a:l;let y=n*e;const v=h+y,f=o===void 0?v:o(v);f!==v&&(y=f-h);const m=_=>-y*Math.exp(-_/i),x=_=>f+m(_),M=_=>{const R=m(_),D=x(_);d.done=Math.abs(R)<=c,d.value=d.done?f:D};let b,T;const A=_=>{p(d.value)&&(b=_,T=mM({keyframes:[d.value,g(d.value)],velocity:pM(x,_,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:_=>{let R=!1;return!T&&b===void 0&&(R=!0,M(_),A(_)),b!==void 0&&_>=b?T.next(_-b):(!R&&M(_),d)}}}const UC=Za(.42,0,1,1),FC=Za(0,0,.58,1),gM=Za(.42,0,.58,1),OC=t=>Array.isArray(t)&&typeof t[0]!="number",kC={linear:Un,easeIn:UC,easeInOut:gM,easeOut:FC,circIn:Rm,circInOut:KS,circOut:$S,backIn:Cm,backInOut:YS,backOut:XS,anticipate:qS},Y0=t=>{if(Em(t)){fS(t.length===4);const[e,n,i,r]=t;return Za(e,n,i,r)}else if(typeof t=="string")return kC[t];return t};function BC(t,e,n){const i=[],r=n||fM,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Un:e;a=Qa(l,a)}i.push(a)}return i}function zC(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(fS(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=BC(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(u<t[h+1]);h++);const d=Mo(t[h],t[h+1],u);return a[h](d)};return n?u=>c(tr(t[0],t[s-1],u)):c}function VC(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Mo(0,e,i);t.push(St(n,1,r))}}function HC(t){const e=[0];return VC(e,t.length-1),e}function GC(t,e){return t.map(n=>n*e)}function jC(t,e){return t.map(()=>e||gM).splice(0,t.length-1)}function qc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=OC(i)?i.map(Y0):Y0(i),s={done:!1,value:e[0]},o=GC(n&&n.length===e.length?n:HC(e),t),a=zC(o,e,{ease:Array.isArray(r)?r:jC(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const WC=t=>{const e=({timestamp:n})=>t(n);return{start:()=>gt.update(e,!0),stop:()=>Ur(e),now:()=>qt.isProcessing?qt.timestamp:Ai.now()}},XC={decay:X0,inertia:X0,tween:qc,keyframes:qc,spring:mM},YC=t=>t/100;class Um extends dM{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Nm,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Mm(n)?n:XC[n]||qc;let l,c;a!==qc&&typeof e[0]!="number"&&(l=Qa(YC,fM(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=NS(u));const{calculatedDuration:h}=u,d=h+r,p=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:_}=this.options;return{done:!0,value:_[_.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:g,repeatDelay:y,onUpdate:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-d*(this.speed>=0?1:-1),m=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let x=this.currentTime,M=s;if(p){const _=Math.min(this.currentTime,u)/h;let R=Math.floor(_),D=_%1;!D&&_>=1&&(D=1),D===1&&R--,R=Math.min(R,p+1),!!(R%2)&&(g==="reverse"?(D=1-D,y&&(D-=y/h)):g==="mirror"&&(M=o)),x=tr(0,1,D)*h}const b=m?{done:!1,value:l[0]}:M.next(x);a&&(b.value=a(b.value));let{done:T}=b;!m&&c!==null&&(T=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return A&&r!==void 0&&(b.value=wu(l,this.options,r)),v&&v(b.value),A&&this.finish(),b}get duration(){const{resolved:e}=this;return e?qi(e.calculatedDuration):0}get time(){return qi(this.currentTime)}set time(e){e=Yi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=qi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=WC,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const qC=new Set(["opacity","clipPath","filter","transform"]);function $C(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=FS(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const KC=am(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),$c=10,ZC=2e4;function QC(t){return Mm(t.type)||t.type==="spring"||!US(t.ease)}function JC(t,e){const n=new Um({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<ZC;)i=n.sample(s),r.push(i.value),s+=$c;return{times:void 0,keyframes:r,duration:s-$c,ease:"linear"}}const vM={anticipate:qS,backInOut:YS,circInOut:KS};function eR(t){return t in vM}class q0 extends dM{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new uM(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Xc()&&eR(s)&&(s=vM[s]),QC(this.options)){const{onComplete:h,onUpdate:d,motionValue:p,element:g,...y}=this.options,v=JC(e,y);e=v.keyframes,e.length===1&&(e[1]=e[0]),i=v.duration,r=v.times,s=v.ease,o="keyframes"}const u=$C(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(L0(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:h}=this.options;a.set(wu(e,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return qi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return qi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Yi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Un;const{animation:i}=n;L0(i,e)}return Un}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:d,...p}=this.options,g=new Um({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Yi(this.time);c.setWithVelocity(g.sample(y-$c).value,g.sample(y).value,$c)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return KC()&&i&&qC.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const tR={type:"spring",stiffness:500,damping:25,restSpeed:10},nR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),iR={type:"keyframes",duration:.8},rR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},sR=(t,{keyframes:e})=>e.length>2?iR:Ms.has(t)?t.startsWith("scale")?nR(e[1]):tR:rR;function oR({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Fm=(t,e,n,i={},r,s)=>o=>{const a=Sm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Yi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};oR(a)||(u={...u,...sR(t,u)}),u.duration&&(u.duration=Yi(u.duration)),u.repeatDelay&&(u.repeatDelay=Yi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!s&&e.get()!==void 0){const d=wu(u.keyframes,a);if(d!==void 0)return gt.update(()=>{u.onUpdate(d),u.onComplete()}),new wA([])}return!s&&q0.supports(u)?new q0(u):new Um(u)};function aR({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function _M(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const h in l){const d=t.getValue(h,(s=t.latestValues[h])!==null&&s!==void 0?s:null),p=l[h];if(p===void 0||u&&aR(u,h))continue;const g={delay:n,...Sm(o||{},h)};let y=!1;if(window.MotionHandoffAnimation){const f=HS(t);if(f){const m=window.MotionHandoffAnimation(f,h,gt);m!==null&&(g.startTime=m,y=!0)}}Jh(t,h),d.start(Fm(h,d,p,t.shouldReduceMotion&&zS.has(h)?{type:!1}:g,t,y));const v=d.animation;v&&c.push(v)}return a&&Promise.all(c).then(()=>{gt.update(()=>{a&&BA(t,a)})}),c}function af(t,e,n={}){var i;const r=Tu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(_M(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=s;return lR(t,e,u+c,h,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function lR(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(cR).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(af(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function cR(t,e){return t.sortNodePosition(e)}function uR(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>af(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=af(t,e,n);else{const r=typeof e=="function"?Tu(t,e,n.custom):e;i=Promise.all(_M(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const dR=cm.length;function xM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?xM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<dR;n++){const i=cm[n],r=t.props[i];(Oa(r)||r===!1)&&(e[i]=r)}return e}const hR=[...lm].reverse(),fR=lm.length;function pR(t){return e=>Promise.all(e.map(({animation:n,options:i})=>uR(t,n,i)))}function mR(t){let e=pR(t),n=$0(),i=!0;const r=l=>(c,u)=>{var h;const d=Tu(t,u,l==="exit"?(h=t.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:p,transitionEnd:g,...y}=d;c={...c,...y,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=xM(t.parent)||{},h=[],d=new Set;let p={},g=1/0;for(let v=0;v<fR;v++){const f=hR[v],m=n[f],x=c[f]!==void 0?c[f]:u[f],M=Oa(x),b=f===l?m.isActive:null;b===!1&&(g=v);let T=x===u[f]&&x!==c[f]&&M;if(T&&i&&t.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...p},!m.isActive&&b===null||!x&&!m.prevProp||Mu(x)||typeof x=="boolean")continue;const A=gR(m.prevProp,x);let _=A||f===l&&m.isActive&&!T&&M||v>g&&M,R=!1;const D=Array.isArray(x)?x:[x];let P=D.reduce(r(f),{});b===!1&&(P={});const{prevResolvedValues:k={}}=m,V={...k,...P},Y=O=>{_=!0,d.has(O)&&(R=!0,d.delete(O)),m.needsAnimating[O]=!0;const U=t.getValue(O);U&&(U.liveStyle=!1)};for(const O in V){const U=P[O],X=k[O];if(p.hasOwnProperty(O))continue;let Z=!1;Kh(U)&&Kh(X)?Z=!LS(U,X):Z=U!==X,Z?U!=null?Y(O):d.add(O):U!==void 0&&d.has(O)?Y(O):m.protectedKeys[O]=!0}m.prevProp=x,m.prevResolvedValues=P,m.isActive&&(p={...p,...P}),i&&t.blockInitialAnimation&&(_=!1),_&&(!(T&&A)||R)&&h.push(...D.map(O=>({animation:O,options:{type:f}})))}if(d.size){const v={};d.forEach(f=>{const m=t.getBaseTarget(f),x=t.getValue(f);x&&(x.liveStyle=!0),v[f]=m??null}),h.push({animation:v})}let y=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(h):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const h=o(l);for(const d in n)n[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=$0(),i=!0}}}function gR(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!LS(e,t):!1}function Xr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $0(){return{animate:Xr(!0),whileInView:Xr(),whileHover:Xr(),whileTap:Xr(),whileDrag:Xr(),whileFocus:Xr(),exit:Xr()}}class Gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class vR extends Gr{constructor(e){super(e),e.animationState||(e.animationState=mR(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Mu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let _R=0;class xR extends Gr{constructor(){super(...arguments),this.id=_R++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const yR={animation:{Feature:vR},exit:{Feature:xR}};function Va(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ja(t){return{point:{x:t.pageX,y:t.pageY}}}const SR=t=>e=>Tm(e)&&t(e,Ja(e));function va(t,e,n,i){return Va(t,e,SR(n),i)}const K0=(t,e)=>Math.abs(t-e);function MR(t,e){const n=K0(t.x,e.x),i=K0(t.y,e.y);return Math.sqrt(n**2+i**2)}class yM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=hd(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=MR(h.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:g}=h,{timestamp:y}=qt;this.history.push({...g,timestamp:y});const{onStart:v,onMove:f}=this.handlers;d||(v&&v(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=dd(d,this.transformPagePoint),gt.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=hd(h.type==="pointercancel"?this.lastMoveEventInfo:dd(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,v),g&&g(h,v)},!Tm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ja(e),a=dd(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=qt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,hd(a,this.history)),this.removeListeners=Qa(va(this.contextWindow,"pointermove",this.handlePointerMove),va(this.contextWindow,"pointerup",this.handlePointerUp),va(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ur(this.updatePoint)}}function dd(t,e){return e?{point:e(t.point)}:t}function Z0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function hd({point:t},e){return{point:t,delta:Z0(t,SM(e)),offset:Z0(t,ER(e)),velocity:TR(e,.1)}}function ER(t){return t[0]}function SM(t){return t[t.length-1]}function TR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=SM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Yi(e)));)n--;if(!i)return{x:0,y:0};const s=qi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const MM=1e-4,wR=1-MM,bR=1+MM,EM=.01,AR=0-EM,CR=0+EM;function kn(t){return t.max-t.min}function RR(t,e,n){return Math.abs(t-e)<=n}function Q0(t,e,n,i=.5){t.origin=i,t.originPoint=St(e.min,e.max,t.origin),t.scale=kn(n)/kn(e),t.translate=St(n.min,n.max,t.origin)-t.originPoint,(t.scale>=wR&&t.scale<=bR||isNaN(t.scale))&&(t.scale=1),(t.translate>=AR&&t.translate<=CR||isNaN(t.translate))&&(t.translate=0)}function _a(t,e,n,i){Q0(t.x,e.x,n.x,i?i.originX:void 0),Q0(t.y,e.y,n.y,i?i.originY:void 0)}function J0(t,e,n){t.min=n.min+e.min,t.max=t.min+kn(e)}function PR(t,e,n){J0(t.x,e.x,n.x),J0(t.y,e.y,n.y)}function ev(t,e,n){t.min=e.min-n.min,t.max=t.min+kn(e)}function xa(t,e,n){ev(t.x,e.x,n.x),ev(t.y,e.y,n.y)}function DR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?St(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?St(n,t,i.max):Math.min(t,n)),t}function tv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function LR(t,{top:e,left:n,bottom:i,right:r}){return{x:tv(t.x,n,r),y:tv(t.y,e,i)}}function nv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function NR(t,e){return{x:nv(t.x,e.x),y:nv(t.y,e.y)}}function IR(t,e){let n=.5;const i=kn(t),r=kn(e);return r>i?n=Mo(e.min,e.max-i,t.min):i>r&&(n=Mo(t.min,t.max-r,e.min)),tr(0,1,n)}function UR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const lf=.35;function FR(t=lf){return t===!1?t=0:t===!0&&(t=lf),{x:iv(t,"left","right"),y:iv(t,"top","bottom")}}function iv(t,e,n){return{min:rv(t,e),max:rv(t,n)}}function rv(t,e){return typeof t=="number"?t:t[e]||0}const sv=()=>({translate:0,scale:1,origin:0,originPoint:0}),to=()=>({x:sv(),y:sv()}),ov=()=>({min:0,max:0}),Lt=()=>({x:ov(),y:ov()});function jn(t){return[t("x"),t("y")]}function TM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function OR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function kR(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function fd(t){return t===void 0||t===1}function cf({scale:t,scaleX:e,scaleY:n}){return!fd(t)||!fd(e)||!fd(n)}function Jr(t){return cf(t)||wM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function wM(t){return av(t.x)||av(t.y)}function av(t){return t&&t!=="0%"}function Kc(t,e,n){const i=t-n,r=e*i;return n+r}function lv(t,e,n,i,r){return r!==void 0&&(t=Kc(t,r,i)),Kc(t,n,i)+e}function uf(t,e=0,n=1,i,r){t.min=lv(t.min,e,n,i,r),t.max=lv(t.max,e,n,i,r)}function bM(t,{x:e,y:n}){uf(t.x,e.translate,e.scale,e.originPoint),uf(t.y,n.translate,n.scale,n.originPoint)}const cv=.999999999999,uv=1.0000000000001;function BR(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&io(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,bM(t,o)),i&&Jr(s.latestValues)&&io(t,s.latestValues))}e.x<uv&&e.x>cv&&(e.x=1),e.y<uv&&e.y>cv&&(e.y=1)}function no(t,e){t.min=t.min+e,t.max=t.max+e}function dv(t,e,n,i,r=.5){const s=St(t.min,t.max,r);uf(t,e,n,s,i)}function io(t,e){dv(t.x,e.x,e.scaleX,e.scale,e.originX),dv(t.y,e.y,e.scaleY,e.scale,e.originY)}function AM(t,e){return TM(kR(t.getBoundingClientRect(),e))}function zR(t,e,n){const i=AM(t,n),{scroll:r}=e;return r&&(no(i.x,r.offset.x),no(i.y,r.offset.y)),i}const CM=({current:t})=>t?t.ownerDocument.defaultView:null,VR=new WeakMap;class HR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Lt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ja(u).point)},s=(u,h)=>{const{drag:d,dragPropagation:p,onDragStart:g}=this.getProps();if(d&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=IA(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jn(v=>{let f=this.getAxisMotionValue(v).get()||0;if(bi.test(f)){const{projection:m}=this.visualElement;if(m&&m.layout){const x=m.layout.layoutBox[v];x&&(f=kn(x)*(parseFloat(f)/100))}}this.originPoint[v]=f}),g&&gt.postRender(()=>g(u,h)),Jh(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:g,onDrag:y}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:v}=h;if(p&&this.currentDirection===null){this.currentDirection=GR(v),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),y&&y(u,h)},a=(u,h)=>this.stop(u,h),l=()=>jn(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new yM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:CM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&gt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!wl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=DR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Js(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=LR(r.layoutBox,n):this.constraints=!1,this.elastic=FR(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&jn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=UR(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Js(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=zR(i,r.root,this.visualElement.getTransformPagePoint());let o=NR(r.layout.layoutBox,s);if(n){const a=n(OR(o));this.hasMutatedConstraints=!!a,a&&(o=TM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=jn(u=>{if(!wl(u,n,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Jh(this.visualElement,e),i.start(Fm(e,i,0,n,this.visualElement,!1))}stopAnimation(){jn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){jn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){jn(n=>{const{drag:i}=this.getProps();if(!wl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-St(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Js(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};jn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=IR({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),jn(o=>{if(!wl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(St(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;VR.set(this.visualElement,this);const e=this.visualElement.current,n=va(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Js(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),gt.read(i);const o=Va(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(jn(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=lf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function wl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function GR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class jR extends Gr{constructor(e){super(e),this.removeGroupControls=Un,this.removeListeners=Un,this.controls=new HR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Un}unmount(){this.removeGroupControls(),this.removeListeners()}}const hv=t=>(e,n)=>{t&&gt.postRender(()=>t(e,n))};class WR extends Gr{constructor(){super(...arguments),this.removePointerDownListener=Un}onPointerDown(e){this.session=new yM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:CM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:hv(e),onStart:hv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&gt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=va(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const dc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const jo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ce.test(t))t=parseFloat(t);else return t;const n=fv(t,e.target.x),i=fv(t,e.target.y);return`${n}% ${i}%`}},XR={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Fr.parse(t);if(r.length>5)return i;const s=Fr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=St(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class YR extends ee.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;fA(qR),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),dc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||gt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),dm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function RM(t){const[e,n]=dS(),i=ee.useContext(im);return S.jsx(YR,{...t,layoutGroup:i,switchLayoutGroup:ee.useContext(xS),isPresent:e,safeToRemove:n})}const qR={borderRadius:{...jo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jo,borderTopRightRadius:jo,borderBottomLeftRadius:jo,borderBottomRightRadius:jo,boxShadow:XR};function $R(t,e,n){const i=an(t)?t:Ba(t);return i.start(Fm("",i,e,n)),i.animation}function KR(t){return t instanceof SVGElement&&t.tagName!=="svg"}const ZR=(t,e)=>t.depth-e.depth;class QR{constructor(){this.children=[],this.isDirty=!1}add(e){wm(this.children,e),this.isDirty=!0}remove(e){bm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ZR),this.isDirty=!1,this.children.forEach(e)}}function JR(t,e){const n=Ai.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ur(i),t(s-e))};return gt.read(i,!0),()=>Ur(i)}const PM=["TopLeft","TopRight","BottomLeft","BottomRight"],eP=PM.length,pv=t=>typeof t=="string"?parseFloat(t):t,mv=t=>typeof t=="number"||Ce.test(t);function tP(t,e,n,i,r,s){r?(t.opacity=St(0,n.opacity!==void 0?n.opacity:1,nP(i)),t.opacityExit=St(e.opacity!==void 0?e.opacity:1,0,iP(i))):s&&(t.opacity=St(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<eP;o++){const a=`border${PM[o]}Radius`;let l=gv(e,a),c=gv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||mv(l)===mv(c)?(t[a]=Math.max(St(pv(l),pv(c),i),0),(bi.test(c)||bi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=St(e.rotate||0,n.rotate||0,i))}function gv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const nP=DM(0,.5,$S),iP=DM(.5,.95,Un);function DM(t,e,n){return i=>i<t?0:i>e?1:n(Mo(t,e,i))}function vv(t,e){t.min=e.min,t.max=e.max}function Hn(t,e){vv(t.x,e.x),vv(t.y,e.y)}function _v(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function xv(t,e,n,i,r){return t-=e,t=Kc(t,1/n,i),r!==void 0&&(t=Kc(t,1/r,i)),t}function rP(t,e=0,n=1,i=.5,r,s=t,o=t){if(bi.test(e)&&(e=parseFloat(e),e=St(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=St(s.min,s.max,i);t===s&&(a-=e),t.min=xv(t.min,e,n,a,r),t.max=xv(t.max,e,n,a,r)}function yv(t,e,[n,i,r],s,o){rP(t,e[n],e[i],e[r],e.scale,s,o)}const sP=["x","scaleX","originX"],oP=["y","scaleY","originY"];function Sv(t,e,n,i){yv(t.x,e,sP,n?n.x:void 0,i?i.x:void 0),yv(t.y,e,oP,n?n.y:void 0,i?i.y:void 0)}function Mv(t){return t.translate===0&&t.scale===1}function LM(t){return Mv(t.x)&&Mv(t.y)}function Ev(t,e){return t.min===e.min&&t.max===e.max}function aP(t,e){return Ev(t.x,e.x)&&Ev(t.y,e.y)}function Tv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function NM(t,e){return Tv(t.x,e.x)&&Tv(t.y,e.y)}function wv(t){return kn(t.x)/kn(t.y)}function bv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class lP{constructor(){this.members=[]}add(e){wm(this.members,e),e.scheduleRender()}remove(e){if(bm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cP(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const es={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ra=typeof window<"u"&&window.MotionDebug!==void 0,pd=["","X","Y","Z"],uP={visibility:"hidden"},Av=1e3;let dP=0;function md(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function IM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=HS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",gt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&IM(i)}function UM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=dP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ra&&(es.totalNodes=es.resolvedTargetDeltas=es.recalculatedProjection=0),this.nodes.forEach(pP),this.nodes.forEach(xP),this.nodes.forEach(yP),this.nodes.forEach(mP),ra&&window.MotionDebug.record(es)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new QR)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Am),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=KR(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=JR(d,250),dc.hasAnimatedSinceResize&&(dc.hasAnimatedSinceResize=!1,this.nodes.forEach(Rv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||wP,{onLayoutAnimationStart:v,onLayoutAnimationComplete:f}=u.getProps(),m=!this.targetLayout||!NM(this.targetLayout,g)||p,x=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||d&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,x);const M={...Sm(y,"layout"),onPlay:v,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else d||Rv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SP),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&IM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cv);return}this.isUpdating||this.nodes.forEach(vP),this.isUpdating=!1,this.nodes.forEach(_P),this.nodes.forEach(hP),this.nodes.forEach(fP),this.clearAllSnapshots();const a=Ai.now();qt.delta=tr(0,1e3/60,a-qt.timestamp),qt.timestamp=a,qt.isProcessing=!0,sd.update.process(qt),sd.preRender.process(qt),sd.render.process(qt),qt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,dm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gP),this.sharedNodes.forEach(MP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){gt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Lt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!LM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Jr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),bP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Lt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(AP))){const{scroll:u}=this.root;u&&(no(l.x,u.offset.x),no(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Lt();if(Hn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&Hn(l,o),no(l.x,h.offset.x),no(l.y,h.offset.y))}return l}applyTransform(o,a=!1){const l=Lt();Hn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&io(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Jr(u.latestValues)&&io(l,u.latestValues)}return Jr(this.latestValues)&&io(l,this.latestValues),l}removeTransform(o){const a=Lt();Hn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Jr(c.latestValues))continue;cf(c.latestValues)&&c.updateSnapshot();const u=Lt(),h=c.measurePageBox();Hn(u,h),Sv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Jr(this.latestValues)&&Sv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=qt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),xa(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Hn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Lt(),this.targetWithTransforms=Lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),PR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Hn(this.target,this.layout.layoutBox),bM(this.target,this.targetDelta)):Hn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),xa(this.relativeTargetOrigin,this.target,p.target),Hn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ra&&es.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||cf(this.parent.latestValues)||wM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===qt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;Hn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;BR(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Lt());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_v(this.prevProjectionDelta.x,this.projectionDelta.x),_v(this.prevProjectionDelta.y,this.projectionDelta.y)),_a(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!bv(this.projectionDelta.x,this.prevProjectionDelta.x)||!bv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),ra&&es.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=to(),this.projectionDelta=to(),this.projectionDeltaWithTransform=to()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=to();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Lt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=p!==g,v=this.getStack(),f=!v||v.members.length<=1,m=!!(y&&!f&&this.options.crossfade===!0&&!this.path.some(TP));this.animationProgress=0;let x;this.mixTargetDelta=M=>{const b=M/1e3;Pv(h.x,o.x,b),Pv(h.y,o.y,b),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xa(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),EP(this.relativeTarget,this.relativeTargetOrigin,d,b),x&&aP(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Lt()),Hn(x,this.relativeTarget)),y&&(this.animationValues=u,tP(u,c,this.latestValues,b,m,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=gt.update(()=>{dc.hasAnimatedSinceResize=!0,this.currentAnimation=$R(0,Av,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Av),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&FM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Lt();const h=kn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=kn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Hn(a,l),io(a,u),_a(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new lP),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&md("z",o,c,this.animationValues);for(let u=0;u<pd.length;u++)md(`rotate${pd[u]}`,o,c,this.animationValues),md(`skew${pd[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return uP;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=cc(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=cc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=cP(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Wc){if(d[y]===void 0)continue;const{correct:v,applyTo:f}=Wc[y],m=c.transform==="none"?d[y]:v(d[y],h);if(f){const x=f.length;for(let M=0;M<x;M++)c[f[M]]=m}else c[y]=m}return this.options.layoutId&&(c.pointerEvents=h===this?cc(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Cv),this.root.sharedNodes.clear()}}}function hP(t){t.updateLayout()}function fP(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?jn(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],p=kn(d);d.min=i[h].min,d.max=d.min+p}):FM(s,n.layoutBox,i)&&jn(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],p=kn(i[h]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const a=to();_a(a,i,n.layoutBox);const l=to();o?_a(l,t.applyTransform(r,!0),n.measuredBox):_a(l,i,n.layoutBox);const c=!LM(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:p}=h;if(d&&p){const g=Lt();xa(g,n.layoutBox,d.layoutBox);const y=Lt();xa(y,i,p.layoutBox),NM(g,y)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=g,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function pP(t){ra&&es.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function mP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function gP(t){t.clearSnapshot()}function Cv(t){t.clearMeasurements()}function vP(t){t.isLayoutDirty=!1}function _P(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Rv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function xP(t){t.resolveTargetDelta()}function yP(t){t.calcProjection()}function SP(t){t.resetSkewAndRotation()}function MP(t){t.removeLeadSnapshot()}function Pv(t,e,n){t.translate=St(e.translate,0,n),t.scale=St(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Dv(t,e,n,i){t.min=St(e.min,n.min,i),t.max=St(e.max,n.max,i)}function EP(t,e,n,i){Dv(t.x,e.x,n.x,i),Dv(t.y,e.y,n.y,i)}function TP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const wP={duration:.45,ease:[.4,0,.1,1]},Lv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Nv=Lv("applewebkit/")&&!Lv("chrome/")?Math.round:Un;function Iv(t){t.min=Nv(t.min),t.max=Nv(t.max)}function bP(t){Iv(t.x),Iv(t.y)}function FM(t,e,n){return t==="position"||t==="preserve-aspect"&&!RR(wv(e),wv(n),.2)}function AP(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const CP=UM({attachResizeListener:(t,e)=>Va(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),gd={current:void 0},OM=UM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!gd.current){const t=new CP({});t.mount(window),t.setOptions({layoutScroll:!0}),gd.current=t}return gd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),RP={pan:{Feature:WR},drag:{Feature:jR,ProjectionNode:OM,MeasureLayout:RM}};function Uv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&gt.postRender(()=>s(e,Ja(e)))}class PP extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=RA(e,n=>(Uv(this.node,n,"Start"),i=>Uv(this.node,i,"End"))))}unmount(){}}class DP extends Gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qa(Va(this.node.current,"focus",()=>this.onFocus()),Va(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Fv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&gt.postRender(()=>s(e,Ja(e)))}class LP extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=NA(e,n=>(Fv(this.node,n,"Start"),(i,{success:r})=>Fv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const df=new WeakMap,vd=new WeakMap,NP=t=>{const e=df.get(t.target);e&&e(t)},IP=t=>{t.forEach(NP)};function UP({root:t,...e}){const n=t||document;vd.has(n)||vd.set(n,{});const i=vd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(IP,{root:t,...e})),i[r]}function FP(t,e,n){const i=UP(e);return df.set(t,n),i.observe(t),()=>{df.delete(t),i.unobserve(t)}}const OP={some:0,all:1};class kP extends Gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:OP[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return FP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(BP(e,n))&&this.startObserver()}unmount(){}}function BP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const zP={inView:{Feature:kP},tap:{Feature:LP},focus:{Feature:DP},hover:{Feature:PP}},VP={layout:{ProjectionNode:OM,MeasureLayout:RM}},hf={current:null},kM={current:!1};function HP(){if(kM.current=!0,!!om)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>hf.current=t.matches;t.addListener(e),e()}else hf.current=!1}const GP=[...cM,sn,Fr],jP=t=>GP.find(lM(t)),Ov=new WeakMap;function WP(t,e,n){for(const i in e){const r=e[i],s=n[i];if(an(r))t.addValue(i,r);else if(an(s))t.addValue(i,Ba(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Ba(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const kv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class XP{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Nm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Ai.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,gt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Eu(n),this.isVariantNode=vS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const g=d[p];l[p]!==void 0&&an(g)&&g.set(l[p],!1)}}mount(e){this.current=e,Ov.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),kM.current||HP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:hf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ov.delete(this.current),this.projection&&this.projection.unmount(),Ur(this.notifyUpdate),Ur(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Ms.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&gt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Eo){const n=Eo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Lt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<kv.length;i++){const r=kv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=WP(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ba(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(oM(r)||ZS(r))?r=parseFloat(r):!jP(r)&&Fr.test(n)&&(r=iM(e,n)),this.setBaseTarget(e,an(r)?r.get():r)),an(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=fm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!an(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Am),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class BM extends XP{constructor(){super(...arguments),this.KeyframeResolver=uM}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;an(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function YP(t){return window.getComputedStyle(t)}class qP extends BM{constructor(){super(...arguments),this.type="html",this.renderInstance=bS}readValueFromInstance(e,n){if(Ms.has(n)){const i=Lm(n);return i&&i.default||0}else{const i=YP(e),r=(ES(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return AM(e,n)}build(e,n,i){gm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return ym(e,n,i)}}class $P extends BM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Lt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ms.has(n)){const i=Lm(n);return i&&i.default||0}return n=AS.has(n)?n:um(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return PS(e,n,i)}build(e,n,i){vm(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){CS(e,n,i,r)}mount(e){this.isSVGTag=xm(e.tagName),super.mount(e)}}const KP=(t,e)=>hm(t)?new $P(e):new qP(e,{allowProjection:t!==ee.Fragment}),ZP=MA({...yR,...zP,...RP,...VP},KP),fn=Ob(ZP),QP={hidden:{opacity:0,y:36},visible:(t=0)=>({opacity:1,y:0,transition:{duration:.7,delay:t,ease:[.22,1,.36,1]}})};function $t({children:t,className:e,delay:n=0,as:i="div",...r}){const s=fn[i];return S.jsx(s,{className:e,custom:n,variants:QP,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},...r,children:t})}const JP=[{icon:sS,title:"1. Robot is not turning ON",points:["Make sure the battery is charged","Connect to charger and try again","Check if power switch is ON"]},{icon:Ww,title:"2. Screen is not turning ON",points:["Charge the battery fully","Restart the robot","Ensure all connections are proper"]},{icon:Qw,title:"3. Robot is not charging",points:["Use a good quality USB cable","Check charging module connection","Try a different charger"]},{icon:Jp,title:"4. Touch is not working",points:["Make sure your finger is clean and dry","Touch properly on the sensor area","Restart the robot"]},{icon:tm,title:"5. No sound from buzzer",points:["Restart the robot","Contact support"]},{icon:em,title:"6. Two RoboMitra are not connecting",points:["Bring both robots closer","Restart both devices","Wait a few seconds for auto connect"]},{icon:ib,title:"7. Robot keeps restarting",points:["Battery may be low","Charge fully before use"]}],e2=[{icon:Uw,title:"Built From A Simple Idea",text:"RoboMitra started with one question: why should smart companion robots be expensive? The project is focused on making them more affordable and accessible."},{icon:Xh,title:"More Than A Gadget",text:"RoboMitra is designed as a small desk companion that reacts, expresses, and interacts through touch, sound, and smart behavior."},{icon:oS,title:"Technology That Feels Human",text:"Our mission is to make technology more human, more fun, and more approachable for everyday use."},{icon:Mw,title:"Designed And Assembled In India",text:"We focus on creativity, simplicity, and continuous improvement while building and assembling our products in India."},{icon:em,title:"Interactive Future",text:"When two RoboMitra devices come close, they can interact with each other, creating a fun and unique shared experience."},{icon:mb,title:"Just The Beginning",text:"We aim to improve RoboMitra with better design, smarter features, and more interactive capabilities in the future."}];function t2({onNavigate:t,cartCount:e,onCartClick:n,user:i,onLoginClick:r}){return S.jsxs("div",{className:"page-shell",children:[S.jsx(nm,{ariaLabel:"About navigation",onNavigate:t,theme:"light",onToggleTheme:()=>{},links:[],cartCount:e,onCartClick:n,user:i,onLoginClick:r}),S.jsxs("main",{className:"support-main",children:[S.jsxs($t,{className:"support-hero",delay:.04,children:[S.jsx("p",{className:"section-tag",children:"About RoboMitra"}),S.jsx("h2",{children:"Small, interactive, affordable smart robots made for everyday joy."}),S.jsx("p",{className:"hero-text",children:"RoboMitra is a small innovation project focused on creating simple, interactive, and affordable smart robots for everyday use."})]}),S.jsxs($t,{className:"about-story-card",delay:.08,children:[S.jsxs("div",{className:"support-card-head",children:[S.jsx("div",{className:"icon-wrap support-head-icon",children:S.jsx(cS,{size:20})}),S.jsxs("div",{children:[S.jsx("p",{className:"section-tag",children:"Our story"}),S.jsx("h3",{children:"Why RoboMitra exists"})]})]}),S.jsxs("div",{className:"about-story-copy",children:[S.jsx("p",{children:"We started with a simple idea: smart companion robots should not be out of reach. Our goal is to bring fun, expressive, and engaging robots to everyone at a budget-friendly price."}),S.jsx("p",{children:"RoboMitra is not just a gadget. It is a small desk companion designed to react, express, and interact with you through touch, sound, and smart behavior."}),S.jsx("p",{children:"When two RoboMitra devices come close, they can even interact with each other, creating a unique and playful experience."})]})]}),S.jsxs("section",{className:"faq-section",children:[S.jsxs($t,{className:"faq-intro",delay:.1,children:[S.jsx("p",{className:"section-tag",children:"What we believe"}),S.jsx("h2",{children:"Making technology more fun, accessible, and human."})]}),S.jsx("div",{className:"faq-grid",children:e2.map(({icon:s,title:o,text:a},l)=>S.jsxs($t,{as:"article",className:"faq-card",delay:.05*(l+1),children:[S.jsxs("div",{className:"support-card-head",children:[S.jsx("div",{className:"icon-wrap support-head-icon",children:S.jsx(s,{size:20})}),S.jsx("h3",{children:o})]}),S.jsx("p",{className:"about-card-text",children:a})]},o))})]}),S.jsxs($t,{className:"support-help-card",delay:.12,children:[S.jsxs("div",{className:"support-card-head",children:[S.jsx("div",{className:"icon-wrap support-head-icon",children:S.jsx(oS,{size:20})}),S.jsxs("div",{children:[S.jsx("p",{className:"section-tag",children:"Thank you"}),S.jsx("h3",{children:"This is just the beginning."})]})]}),S.jsx("p",{className:"support-help-note",children:"Thank you for supporting RoboMitra. We are continuing to improve the product with better design, smarter features, and more interactive capabilities in the future."})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Om="184",ho={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n2=0,Bv=1,i2=2,hc=1,r2=2,sa=3,Or=0,bn=1,Hi=2,$i=0,fo=1,zv=2,Vv=3,Hv=4,s2=5,ts=100,o2=101,a2=102,l2=103,c2=104,u2=200,d2=201,h2=202,f2=203,ff=204,pf=205,p2=206,m2=207,g2=208,v2=209,_2=210,x2=211,y2=212,S2=213,M2=214,mf=0,gf=1,vf=2,wo=3,_f=4,xf=5,yf=6,Sf=7,zM=0,E2=1,T2=2,Ci=0,VM=1,HM=2,GM=3,jM=4,WM=5,XM=6,YM=7,qM=300,_s=301,bo=302,_d=303,xd=304,bu=306,Mf=1e3,Wi=1001,Ef=1002,Kt=1003,w2=1004,bl=1005,ln=1006,yd=1007,as=1008,Ln=1009,$M=1010,KM=1011,Ha=1012,km=1013,Pi=1014,Mi=1015,nr=1016,Bm=1017,zm=1018,Ga=1020,ZM=35902,QM=35899,JM=1021,e1=1022,li=1023,ir=1026,ls=1027,t1=1028,Vm=1029,xs=1030,Hm=1031,Gm=1033,fc=33776,pc=33777,mc=33778,gc=33779,Tf=35840,wf=35841,bf=35842,Af=35843,Cf=36196,Rf=37492,Pf=37496,Df=37488,Lf=37489,Zc=37490,Nf=37491,If=37808,Uf=37809,Ff=37810,Of=37811,kf=37812,Bf=37813,zf=37814,Vf=37815,Hf=37816,Gf=37817,jf=37818,Wf=37819,Xf=37820,Yf=37821,qf=36492,$f=36494,Kf=36495,Zf=36283,Qf=36284,Qc=36285,Jf=36286,b2=3200,ep=0,A2=1,Sr="",yn="srgb",Jc="srgb-linear",eu="linear",nt="srgb",bs=7680,Gv=519,C2=512,R2=513,P2=514,jm=515,D2=516,L2=517,Wm=518,N2=519,jv=35044,Wv="300 es",Ei=2e3,ja=2001;function I2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function U2(){const t=tu("canvas");return t.style.display="block",t}const Xv={};function Yv(...t){const e="THREE."+t.shift();console.log(e,...t)}function n1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Pe(...t){t=n1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=n1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function tp(...t){const e=t.join(" ");e in Xv||(Xv[e]=!0,Pe(...t))}function F2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const O2={[mf]:gf,[vf]:yf,[_f]:Sf,[wo]:xf,[gf]:mf,[yf]:vf,[Sf]:_f,[xf]:wo};class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,np=180/Math.PI;function el(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function k2(t,e){return(t%e+e)%e}function Sd(t,e,n){return(1-n)*t+n*e}function Wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const B2={DEG2RAD:vc},Qm=class Qm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qm.prototype.isVector2=!0;let Be=Qm;class kr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(h!==y||l!==d||c!==p||u!==g){let v=l*d+c*p+u*g+h*y;v<0&&(d=-d,p=-p,g=-g,y=-y,v=-v);let f=1-a;if(v<.9995){const m=Math.acos(v),x=Math.sin(m);f=Math.sin(f*m)/x,a=Math.sin(a*m)/x,l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+y*a}else{l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+y*a;const m=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=m,c*=m,u*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jm=class Jm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jm.prototype.isVector3=!0;let z=Jm;const Md=new z,qv=new kr,eg=class eg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],y=r[0],v=r[3],f=r[6],m=r[1],x=r[4],M=r[7],b=r[2],T=r[5],A=r[8];return s[0]=o*y+a*m+l*b,s[3]=o*v+a*x+l*T,s[6]=o*f+a*M+l*A,s[1]=c*y+u*m+h*b,s[4]=c*v+u*x+h*T,s[7]=c*f+u*M+h*A,s[2]=d*y+p*m+g*b,s[5]=d*v+p*x+g*T,s[8]=d*f+p*M+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ed.makeScale(e,n)),this}rotate(e){return this.premultiply(Ed.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ed.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eg.prototype.isMatrix3=!0;let Fe=eg;const Ed=new Fe,$v=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kv=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z2(){const t={enabled:!0,workingColorSpace:Jc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=po(r.r),r.g=po(r.g),r.b=po(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?eu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return tp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return tp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Jc]:{primaries:e,whitePoint:i,transfer:eu,toXYZ:$v,fromXYZ:Kv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:$v,fromXYZ:Kv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),t}const Ke=z2();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function po(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let As;class V2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=tu("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H2=0;class Xm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=el(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Td(r[o].image)):s.push(Td(r[o]))}else s=Td(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Td(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?V2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let G2=0;const wd=new z;class mn extends jr{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Wi,r=Wi,s=ln,o=as,a=li,l=Ln,c=mn.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G2++}),this.uuid=el(),this.name="",this.source=new Xm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mf:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mf:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=qM;mn.DEFAULT_ANISOTROPY=1;const tg=class tg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],v=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,b=(f+1)/2,T=(u+d)/4,A=(h+y)/4,_=(g+v)/4;return x>M&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=A/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=_/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-g)*(v-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(h-y)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tg.prototype.isVector4=!0;let Ct=tg;class j2 extends jr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new mn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Xm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends j2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class i1 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W2 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=class nu{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,v)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,y=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,y=c*h;n[0]=d+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,y=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X2,e,Y2)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),cr.crossVectors(i,Rn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),cr.crossVectors(i,Rn)),cr.normalize(),Al.crossVectors(Rn,cr),r[0]=cr.x,r[4]=Al.x,r[8]=Rn.x,r[1]=cr.y,r[5]=Al.y,r[9]=Rn.y,r[2]=cr.z,r[6]=Al.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],y=i[6],v=i[10],f=i[14],m=i[3],x=i[7],M=i[11],b=i[15],T=r[0],A=r[4],_=r[8],R=r[12],D=r[1],P=r[5],k=r[9],V=r[13],Y=r[2],I=r[6],H=r[10],O=r[14],U=r[3],X=r[7],Z=r[11],ae=r[15];return s[0]=o*T+a*D+l*Y+c*U,s[4]=o*A+a*P+l*I+c*X,s[8]=o*_+a*k+l*H+c*Z,s[12]=o*R+a*V+l*O+c*ae,s[1]=u*T+h*D+d*Y+p*U,s[5]=u*A+h*P+d*I+p*X,s[9]=u*_+h*k+d*H+p*Z,s[13]=u*R+h*V+d*O+p*ae,s[2]=g*T+y*D+v*Y+f*U,s[6]=g*A+y*P+v*I+f*X,s[10]=g*_+y*k+v*H+f*Z,s[14]=g*R+y*V+v*O+f*ae,s[3]=m*T+x*D+M*Y+b*U,s[7]=m*A+x*P+M*I+b*X,s[11]=m*_+x*k+M*H+b*Z,s[15]=m*R+x*V+M*O+b*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],v=e[11],f=e[15],m=l*p-c*d,x=a*p-c*h,M=a*d-l*h,b=o*p-c*u,T=o*d-l*u,A=o*h-a*u;return n*(y*m-v*x+f*M)-i*(g*m-v*b+f*T)+r*(g*x-y*b+f*A)-s*(g*M-y*T+v*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],v=e[14],f=e[15],m=n*a-i*o,x=n*l-r*o,M=n*c-s*o,b=i*l-r*a,T=i*c-s*a,A=r*c-s*l,_=u*y-h*g,R=u*v-d*g,D=u*f-p*g,P=h*v-d*y,k=h*f-p*y,V=d*f-p*v,Y=m*V-x*k+M*P+b*D-T*R+A*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/Y;return e[0]=(a*V-l*k+c*P)*I,e[1]=(r*k-i*V-s*P)*I,e[2]=(y*A-v*T+f*b)*I,e[3]=(d*T-h*A-p*b)*I,e[4]=(l*D-o*V-c*R)*I,e[5]=(n*V-r*D+s*R)*I,e[6]=(v*M-g*A-f*x)*I,e[7]=(u*A-d*M+p*x)*I,e[8]=(o*k-a*D+c*_)*I,e[9]=(i*D-n*k-s*_)*I,e[10]=(g*T-y*M+f*m)*I,e[11]=(h*M-u*T-p*m)*I,e[12]=(a*R-o*P-l*_)*I,e[13]=(n*P-i*R+r*_)*I,e[14]=(y*x-g*b-v*m)*I,e[15]=(u*b-h*x+d*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,y=o*u,v=o*h,f=a*h,m=l*c,x=l*u,M=l*h,b=i.x,T=i.y,A=i.z;return r[0]=(1-(y+f))*b,r[1]=(p+M)*b,r[2]=(g-x)*b,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(d+f))*T,r[6]=(v+m)*T,r[7]=0,r[8]=(g+x)*A,r[9]=(v-m)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Cs.set(r[0],r[1],r[2]).length();const a=Cs.set(r[4],r[5],r[6]).length(),l=Cs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ei.copy(this);const c=1/o,u=1/a,h=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,n.setFromRotationMatrix(ei),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===Ei)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===ja)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===Ei)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===ja)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};nu.prototype.isMatrix4=!0;let It=nu;const Cs=new z,ei=new It,X2=new z(0,0,0),Y2=new z(1,1,1),cr=new z,Al=new z,Rn=new z,Zv=new It,Qv=new kr;class Br{constructor(e=0,n=0,i=0,r=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qv.setFromEuler(this),this.setFromQuaternion(Qv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class r1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q2=0;const Jv=new z,Rs=new kr,Ii=new It,Cl=new z,Xo=new z,$2=new z,K2=new kr,e_=new z(1,0,0),t_=new z(0,1,0),n_=new z(0,0,1),i_={type:"added"},Z2={type:"removed"},Ps={type:"childadded",child:null},bd={type:"childremoved",child:null};class cn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new z,n=new Br,i=new kr,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Fe}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,n){return Jv.copy(e).applyQuaternion(this.quaternion),this.position.add(Jv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Cl.copy(e):Cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Xo,Cl,this.up):Ii.lookAt(Cl,Xo,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z2),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,K2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new z(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rl extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q2={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),f=this._getHandJoint(c,y);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Rl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const s1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Cd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=k2(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cd(o,s,e+1/3),this.g=Cd(o,s,e),this.b=Cd(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=s1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Ke.workingToColorSpace(rn.copy(this),e),Math.round(We(rn.r*255,0,255))*65536+Math.round(We(rn.g*255,0,255))*256+Math.round(We(rn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=yn){Ke.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(Pl);const i=Sd(ur.h,Pl.h,n),r=Sd(ur.s,Pl.s,n),s=Sd(ur.l,Pl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new tt;tt.NAMES=s1;class J2 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ti=new z,Ui=new z,Rd=new z,Fi=new z,Ds=new z,Ls=new z,r_=new z,Pd=new z,Dd=new z,Ld=new z,Nd=new Ct,Id=new Ct,Ud=new Ct;class ai{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Ui.subVectors(i,n),Rd.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Ui),l=ti.dot(Rd),c=Ui.dot(Ui),u=Ui.dot(Rd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Nd.setScalar(0),Id.setScalar(0),Ud.setScalar(0),Nd.fromBufferAttribute(e,n),Id.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Nd,s.x),o.addScaledVector(Id,s.y),o.addScaledVector(Ud,s.z),o}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Ui.subVectors(e,n),ti.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ti.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Ls.subVectors(s,i),Pd.subVectors(e,i);const l=Ds.dot(Pd),c=Ls.dot(Pd);if(l<=0&&c<=0)return n.copy(i);Dd.subVectors(e,r);const u=Ds.dot(Dd),h=Ls.dot(Dd);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ds,o);Ld.subVectors(e,s);const p=Ds.dot(Ld),g=Ls.dot(Ld);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ls,a);const v=u*g-p*h;if(v<=0&&h-u>=0&&p-g>=0)return r_.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(r_,a);const f=1/(v+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(Ds,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Io{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Ll.subVectors(this.max,Yo),Ns.subVectors(e.a,Yo),Is.subVectors(e.b,Yo),Us.subVectors(e.c,Yo),dr.subVectors(Is,Ns),hr.subVectors(Us,Is),Yr.subVectors(Ns,Us);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Yr.z,Yr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Yr.z,0,-Yr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Yr.y,Yr.x,0];return!Fd(n,Ns,Is,Us,Ll)||(n=[1,0,0,0,1,0,0,0,1],!Fd(n,Ns,Is,Us,Ll))?!1:(Nl.crossVectors(dr,hr),n=[Nl.x,Nl.y,Nl.z],Fd(n,Ns,Is,Us,Ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new z,new z,new z,new z,new z,new z,new z,new z],ni=new z,Dl=new Io,Ns=new z,Is=new z,Us=new z,dr=new z,hr=new z,Yr=new z,Yo=new z,Ll=new z,Nl=new z,qr=new z;function Fd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){qr.fromArray(t,s);const a=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=e.dot(qr),c=n.dot(qr),u=i.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ut=new z,Il=new Be;let e3=0;class Fn extends jr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jv,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Il.fromBufferAttribute(this,n),Il.applyMatrix3(e),this.setXY(n,Il.x,Il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class o1 extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class a1 extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class di extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const t3=new Io,qo=new z,Od=new z;class Ym{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):t3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const n=qo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Od)),this.expandByPoint(qo.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let n3=0;const Gn=new It,kd=new cn,Fs=new z,Pn=new Io,$o=new Io,jt=new z;class fi extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n3++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I2(e)?a1:o1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new di(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ym);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Pn.min,$o.min),Pn.expandByPoint(jt),jt.addVectors(Pn.max,$o.max),Pn.expandByPoint(jt)):(Pn.expandByPoint($o.min),Pn.expandByPoint($o.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),jt.add(Fs)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new z,l[_]=new z;const c=new z,u=new z,h=new z,d=new Be,p=new Be,g=new Be,y=new z,v=new z;function f(_,R,D){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,D),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,D),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[_].add(y),a[R].add(y),a[D].add(y),l[_].add(v),l[R].add(v),l[D].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let _=0,R=m.length;_<R;++_){const D=m[_],P=D.start,k=D.count;for(let V=P,Y=P+k;V<Y;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new z,M=new z,b=new z,T=new z;function A(_){b.fromBufferAttribute(r,_),T.copy(b);const R=a[_];x.copy(R),x.sub(b.multiplyScalar(b.dot(R))).normalize(),M.crossVectors(T,R);const P=M.dot(l[_])<0?-1:1;o.setXYZW(_,x.x,x.y,x.z,P)}for(let _=0,R=m.length;_<R;++_){const D=m[_],P=D.start,k=D.count;for(let V=P,Y=P+k;V<Y;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Fn(d,u,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let i3=0;class tl extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i3++}),this.uuid=el(),this.name="",this.type="Material",this.blending=fo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=pf,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Pe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ff&&(i.blendSrc=this.blendSrc),this.blendDst!==pf&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new z,Bd=new z,Ul=new z,fr=new z,zd=new z,Fl=new z,Vd=new z;class l1{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bd.copy(e).add(n).multiplyScalar(.5),Ul.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Bd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ul),a=fr.dot(this.direction),l=-fr.dot(Ul),c=fr.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Bd).addScaledVector(Ul,d),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){zd.subVectors(n,e),Fl.subVectors(i,e),Vd.crossVectors(zd,Fl);let o=this.direction.dot(Vd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Fl.crossVectors(fr,Fl));if(l<0)return null;const c=a*this.direction.dot(zd.cross(fr));if(c<0||l+c>o)return null;const u=-a*fr.dot(Vd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class c1 extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=zM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const s_=new It,$r=new l1,Ol=new Ym,o_=new z,kl=new z,Bl=new z,zl=new z,Hd=new z,Vl=new z,a_=new z,Hl=new z;class Di extends cn{constructor(e=new fi,n=new c1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Hd.fromBufferAttribute(h,e),o?Vl.addScaledVector(Hd,u):Vl.addScaledVector(Hd.sub(n),u))}n.add(Vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(Ol.containsPoint($r.origin)===!1&&($r.intersectSphere(Ol,o_)===null||$r.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(s_.copy(s).invert(),$r.copy(e.ray).applyMatrix4(s_),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const v=d[g],f=o[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,b=x;M<b;M+=3){const T=a.getX(M),A=a.getX(M+1),_=a.getX(M+2);r=Gl(this,f,e,i,c,u,h,T,A,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=g,f=y;v<f;v+=3){const m=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);r=Gl(this,o,e,i,c,u,h,m,x,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const v=d[g],f=o[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,b=x;M<b;M+=3){const T=M,A=M+1,_=M+2;r=Gl(this,f,e,i,c,u,h,T,A,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=g,f=y;v<f;v+=3){const m=v,x=v+1,M=v+2;r=Gl(this,o,e,i,c,u,h,m,x,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function r3(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Hl);return c<n.near||c>n.far?null:{distance:c,point:Hl.clone(),object:t}}function Gl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,kl),t.getVertexPosition(l,Bl),t.getVertexPosition(c,zl);const u=r3(t,e,n,i,kl,Bl,zl,a_);if(u){const h=new z;ai.getBarycoord(a_,kl,Bl,zl,h),r&&(u.uv=ai.getInterpolatedAttribute(r,a,l,c,h,new Be)),s&&(u.uv1=ai.getInterpolatedAttribute(s,a,l,c,h,new Be)),o&&(u.normal=ai.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};ai.getNormal(kl,Bl,zl,d.normal),u.face=d,u.barycoord=h}return u}class s3 extends mn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,u=Kt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gd=new z,o3=new z,a3=new Fe;class _r{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gd.subVectors(i,n).cross(o3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Gd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||a3.getNormalMatrix(e),r=this.coplanarPoint(Gd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Ym,l3=new Be(.5,.5),jl=new z;class qm{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],y=s[9],v=s[10],f=s[11],m=s[12],x=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-o,p-u,f-g,b-m).normalize(),r[1].setComponents(c+o,p+u,f+g,b+m).normalize(),r[2].setComponents(c+a,p+h,f+y,b+x).normalize(),r[3].setComponents(c-a,p-h,f-y,b-x).normalize(),i)r[4].setComponents(l,d,v,M).normalize(),r[5].setComponents(c-l,p-d,f-v,b-M).normalize();else if(r[4].setComponents(c-l,p-d,f-v,b-M).normalize(),n===Ei)r[5].setComponents(c+l,p+d,f+v,b+M).normalize();else if(n===ja)r[5].setComponents(l,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=l3.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(jl.x=r.normal.x>0?e.max.x:e.min.x,jl.y=r.normal.y>0?e.max.y:e.min.y,jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u1 extends mn{constructor(e=[],n=_s,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ao extends mn{constructor(e,n,i=Pi,r,s,o,a=Kt,l=Kt,c,u=ir,h=1){if(u!==ir&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class c3 extends Ao{constructor(e,n=Pi,i=_s,r,s,o=Kt,a=Kt,l,c=ir){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class d1 extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nl extends fi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(h,2));function g(y,v,f,m,x,M,b,T,A,_,R){const D=M/A,P=b/_,k=M/2,V=b/2,Y=T/2,I=A+1,H=_+1;let O=0,U=0;const X=new z;for(let Z=0;Z<H;Z++){const ae=Z*P-V;for(let fe=0;fe<I;fe++){const Ge=fe*D-k;X[y]=Ge*m,X[v]=ae*x,X[f]=Y,c.push(X.x,X.y,X.z),X[y]=0,X[v]=0,X[f]=T>0?1:-1,u.push(X.x,X.y,X.z),h.push(fe/A),h.push(1-Z/_),O+=1}}for(let Z=0;Z<_;Z++)for(let ae=0;ae<A;ae++){const fe=d+ae+I*Z,Ge=d+ae+I*(Z+1),Ye=d+(ae+1)+I*(Z+1),Le=d+(ae+1)+I*Z;l.push(fe,Ge,Le),l.push(Ge,Ye,Le),U+=6}a.addGroup(p,U,R),p+=U,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Au extends fi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],y=[],v=[];for(let f=0;f<u;f++){const m=f*d-o;for(let x=0;x<c;x++){const M=x*h-s;g.push(M,-m,0),y.push(0,0,1),v.push(x/a),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){const x=m+c*f,M=m+c*(f+1),b=m+1+c*(f+1),T=m+1+c*f;p.push(x,M,T),p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(y,3)),this.setAttribute("uv",new di(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.width,e.height,e.widthSegments,e.heightSegments)}}function Co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(l_(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(l_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=Co(t[n]);for(const r in i)e[r]=i[r]}return e}function l_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function u3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function h1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const d3={clone:Co,merge:dn};var h3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h3,this.fragmentShader=f3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=u3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class p3 extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class m3 extends tl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g3 extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v3 extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(u_(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!u_(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function u_(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _3{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const x3=new _3;class $m{constructor(e){this.manager=e!==void 0?e:x3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$m.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class y3 extends Error{constructor(e,n){super(e),this.response=n}}class S3 extends $m{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=c_.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(Bi[e]!==void 0){Bi[e].push({onLoad:n,onProgress:i,onError:r});return}Bi[e]=[],Bi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let y=0;const v=new ReadableStream({start(f){m();function m(){h.read().then(({done:x,value:M})=>{if(x)f.close();else{y+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let T=0,A=u.length;T<A;T++){const _=u[T];_.onProgress&&_.onProgress(b)}f.enqueue(M),m()}},x=>{f.error(x)})}}});return new Response(v)}else throw new y3(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{c_.add(`file:${e}`,c);const u=Bi[e];delete Bi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class f1 extends cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const jd=new It,d_=new z,h_=new z;class M3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qm,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;d_.setFromMatrixPosition(e.matrixWorld),n.position.copy(d_),h_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(h_),n.updateMatrixWorld(),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ja||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wl=new z,Xl=new kr,vi=new z;class p1 extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Wl,Xl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new z,f_=new Be,p_=new Be;class Yn extends p1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,f_,p_),n.subVectors(p_,f_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Km extends p1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class E3 extends M3{constructor(){super(new Km(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m_ extends f1{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new E3}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class T3 extends f1{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Os=-90,ks=1;class w3 extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(Os,ks,e,n);r.layers=this.layers,this.add(r);const s=new Yn(Os,ks,e,n);s.layers=this.layers,this.add(s);const o=new Yn(Os,ks,e,n);o.layers=this.layers,this.add(o);const a=new Yn(Os,ks,e,n);a.layers=this.layers,this.add(a);const l=new Yn(Os,ks,e,n);l.layers=this.layers,this.add(l);const c=new Yn(Os,ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class b3 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class g_{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ng=class ng{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};ng.prototype.isMatrix2=!0;let v_=ng;class A3 extends jr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function __(t,e,n,i){const r=C3(i);switch(n){case JM:return t*e;case t1:return t*e/r.components*r.byteLength;case Vm:return t*e/r.components*r.byteLength;case xs:return t*e*2/r.components*r.byteLength;case Hm:return t*e*2/r.components*r.byteLength;case e1:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case Gm:return t*e*4/r.components*r.byteLength;case fc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wf:case Af:return Math.max(t,16)*Math.max(e,8)/4;case Tf:case bf:return Math.max(t,8)*Math.max(e,8)/2;case Cf:case Rf:case Df:case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pf:case Zc:case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qf:case $f:case Kf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zf:case Qf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qc:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function C3(t){switch(t){case Ln:case $M:return{byteLength:1,components:1};case Ha:case KM:case nr:return{byteLength:2,components:1};case Bm:case zm:return{byteLength:2,components:4};case Pi:case km:case Mi:return{byteLength:4,components:1};case ZM:case QM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Om}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Om);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function m1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function R3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var P3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D3=`#ifdef USE_ALPHAHASH
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
#endif`,L3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F3=`#ifdef USE_AOMAP
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
#endif`,O3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k3=`#ifdef USE_BATCHING
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
#endif`,B3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G3=`#ifdef USE_IRIDESCENCE
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
#endif`,j3=`#ifdef USE_BUMPMAP
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
#endif`,W3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,J3=`#define PI 3.141592653589793
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
} // validated`,eD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tD=`vec3 transformedNormal = objectNormal;
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
#endif`,nD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oD="gl_FragColor = linearToOutputTexel( gl_FragColor );",aD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lD=`#ifdef USE_ENVMAP
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
#endif`,cD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uD=`#ifdef USE_ENVMAP
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
#endif`,dD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hD=`#ifdef USE_ENVMAP
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
#endif`,fD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vD=`#ifdef USE_GRADIENTMAP
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
}`,_D=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SD=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,MD=`#ifdef USE_ENVMAP
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
#endif`,ED=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AD=`PhysicalMaterial material;
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
#endif`,CD=`uniform sampler2D dfgLUT;
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
}`,RD=`
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
#endif`,PD=`#if defined( RE_IndirectDiffuse )
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
#endif`,DD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LD=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ND=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ID=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zD=`#if defined( USE_POINTS_UV )
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
#endif`,VD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XD=`#ifdef USE_MORPHTARGETS
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
#endif`,YD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$D=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JD=`#ifdef USE_NORMALMAP
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
#endif`,eL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mL=`float getShadowMask() {
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
}`,gL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vL=`#ifdef USE_SKINNING
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
#endif`,_L=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xL=`#ifdef USE_SKINNING
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
#endif`,yL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ML=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TL=`#ifdef USE_TRANSMISSION
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
#endif`,wL=`#ifdef USE_TRANSMISSION
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
#endif`,bL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DL=`uniform sampler2D t2D;
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
}`,LL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FL=`#include <common>
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
}`,OL=`#if DEPTH_PACKING == 3200
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
}`,kL=`#define DISTANCE
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
}`,BL=`#define DISTANCE
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
}`,zL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HL=`uniform float scale;
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
}`,GL=`uniform vec3 diffuse;
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
}`,jL=`#include <common>
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
}`,WL=`uniform vec3 diffuse;
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
}`,XL=`#define LAMBERT
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
}`,YL=`#define LAMBERT
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
}`,qL=`#define MATCAP
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
}`,$L=`#define MATCAP
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
}`,KL=`#define NORMAL
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
}`,ZL=`#define NORMAL
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
}`,QL=`#define PHONG
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
}`,JL=`#define PHONG
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
}`,eN=`#define STANDARD
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
}`,tN=`#define STANDARD
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
}`,nN=`#define TOON
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
}`,iN=`#define TOON
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
}`,rN=`uniform float size;
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
}`,sN=`uniform vec3 diffuse;
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
}`,oN=`#include <common>
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
}`,aN=`uniform vec3 color;
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
}`,lN=`uniform float rotation;
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
}`,cN=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:P3,alphahash_pars_fragment:D3,alphamap_fragment:L3,alphamap_pars_fragment:N3,alphatest_fragment:I3,alphatest_pars_fragment:U3,aomap_fragment:F3,aomap_pars_fragment:O3,batching_pars_vertex:k3,batching_vertex:B3,begin_vertex:z3,beginnormal_vertex:V3,bsdfs:H3,iridescence_fragment:G3,bumpmap_pars_fragment:j3,clipping_planes_fragment:W3,clipping_planes_pars_fragment:X3,clipping_planes_pars_vertex:Y3,clipping_planes_vertex:q3,color_fragment:$3,color_pars_fragment:K3,color_pars_vertex:Z3,color_vertex:Q3,common:J3,cube_uv_reflection_fragment:eD,defaultnormal_vertex:tD,displacementmap_pars_vertex:nD,displacementmap_vertex:iD,emissivemap_fragment:rD,emissivemap_pars_fragment:sD,colorspace_fragment:oD,colorspace_pars_fragment:aD,envmap_fragment:lD,envmap_common_pars_fragment:cD,envmap_pars_fragment:uD,envmap_pars_vertex:dD,envmap_physical_pars_fragment:MD,envmap_vertex:hD,fog_vertex:fD,fog_pars_vertex:pD,fog_fragment:mD,fog_pars_fragment:gD,gradientmap_pars_fragment:vD,lightmap_pars_fragment:_D,lights_lambert_fragment:xD,lights_lambert_pars_fragment:yD,lights_pars_begin:SD,lights_toon_fragment:ED,lights_toon_pars_fragment:TD,lights_phong_fragment:wD,lights_phong_pars_fragment:bD,lights_physical_fragment:AD,lights_physical_pars_fragment:CD,lights_fragment_begin:RD,lights_fragment_maps:PD,lights_fragment_end:DD,lightprobes_pars_fragment:LD,logdepthbuf_fragment:ND,logdepthbuf_pars_fragment:ID,logdepthbuf_pars_vertex:UD,logdepthbuf_vertex:FD,map_fragment:OD,map_pars_fragment:kD,map_particle_fragment:BD,map_particle_pars_fragment:zD,metalnessmap_fragment:VD,metalnessmap_pars_fragment:HD,morphinstance_vertex:GD,morphcolor_vertex:jD,morphnormal_vertex:WD,morphtarget_pars_vertex:XD,morphtarget_vertex:YD,normal_fragment_begin:qD,normal_fragment_maps:$D,normal_pars_fragment:KD,normal_pars_vertex:ZD,normal_vertex:QD,normalmap_pars_fragment:JD,clearcoat_normal_fragment_begin:eL,clearcoat_normal_fragment_maps:tL,clearcoat_pars_fragment:nL,iridescence_pars_fragment:iL,opaque_fragment:rL,packing:sL,premultiplied_alpha_fragment:oL,project_vertex:aL,dithering_fragment:lL,dithering_pars_fragment:cL,roughnessmap_fragment:uL,roughnessmap_pars_fragment:dL,shadowmap_pars_fragment:hL,shadowmap_pars_vertex:fL,shadowmap_vertex:pL,shadowmask_pars_fragment:mL,skinbase_vertex:gL,skinning_pars_vertex:vL,skinning_vertex:_L,skinnormal_vertex:xL,specularmap_fragment:yL,specularmap_pars_fragment:SL,tonemapping_fragment:ML,tonemapping_pars_fragment:EL,transmission_fragment:TL,transmission_pars_fragment:wL,uv_pars_fragment:bL,uv_pars_vertex:AL,uv_vertex:CL,worldpos_vertex:RL,background_vert:PL,background_frag:DL,backgroundCube_vert:LL,backgroundCube_frag:NL,cube_vert:IL,cube_frag:UL,depth_vert:FL,depth_frag:OL,distance_vert:kL,distance_frag:BL,equirect_vert:zL,equirect_frag:VL,linedashed_vert:HL,linedashed_frag:GL,meshbasic_vert:jL,meshbasic_frag:WL,meshlambert_vert:XL,meshlambert_frag:YL,meshmatcap_vert:qL,meshmatcap_frag:$L,meshnormal_vert:KL,meshnormal_frag:ZL,meshphong_vert:QL,meshphong_frag:JL,meshphysical_vert:eN,meshphysical_frag:tN,meshtoon_vert:nN,meshtoon_frag:iN,points_vert:rN,points_frag:sN,shadow_vert:oN,shadow_frag:aN,sprite_vert:lN,sprite_frag:cN},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},yi={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};yi.physical={uniforms:dn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Yl={r:0,b:0,g:0},uN=new It,g1=new Fe;g1.set(-1,0,0,0,1,0,0,0,1);function dN(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,u=null,h=0,d=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const M=m.backgroundBlurriness>0;x=e.get(x,M)}return x}function g(m){let x=!1;const M=p(m);M===null?v(o,a):M&&M.isColor&&(v(M,1),x=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===bu)?(c===void 0&&(c=new Di(new nl(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Co(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uN.makeRotationFromEuler(x.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(g1),c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,(u!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Di(new Au(2,2),new Li({name:"BackgroundMaterial",uniforms:Co(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,x){m.getRGB(Yl,h1(t)),n.buffers.color.setClear(Yl.r,Yl.g,Yl.b,x,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),a=x,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:g,addToRenderList:y,dispose:f}}function hN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(P,k,V,Y,I){let H=!1;const O=h(P,Y,V,k);s!==O&&(s=O,c(s.object)),H=p(P,Y,V,I),H&&g(P,Y,V,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(P,k,V,Y),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function h(P,k,V,Y){const I=Y.wireframe===!0;let H=i[k.id];H===void 0&&(H={},i[k.id]=H);const O=P.isInstancedMesh===!0?P.id:0;let U=H[O];U===void 0&&(U={},H[O]=U);let X=U[V.id];X===void 0&&(X={},U[V.id]=X);let Z=X[I];return Z===void 0&&(Z=d(l()),X[I]=Z),Z}function d(P){const k=[],V=[],Y=[];for(let I=0;I<n;I++)k[I]=0,V[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,k,V,Y){const I=s.attributes,H=k.attributes;let O=0;const U=V.getAttributes();for(const X in U)if(U[X].location>=0){const ae=I[X];let fe=H[X];if(fe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;O++}return s.attributesNum!==O||s.index!==Y}function g(P,k,V,Y){const I={},H=k.attributes;let O=0;const U=V.getAttributes();for(const X in U)if(U[X].location>=0){let ae=H[X];ae===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),I[X]=fe,O++}s.attributes=I,s.attributesNum=O,s.index=Y}function y(){const P=s.newAttributes;for(let k=0,V=P.length;k<V;k++)P[k]=0}function v(P){f(P,0)}function f(P,k){const V=s.newAttributes,Y=s.enabledAttributes,I=s.attributeDivisors;V[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),I[P]!==k&&(t.vertexAttribDivisor(P,k),I[P]=k)}function m(){const P=s.newAttributes,k=s.enabledAttributes;for(let V=0,Y=k.length;V<Y;V++)k[V]!==P[V]&&(t.disableVertexAttribArray(V),k[V]=0)}function x(P,k,V,Y,I,H,O){O===!0?t.vertexAttribIPointer(P,k,V,I,H):t.vertexAttribPointer(P,k,V,Y,I,H)}function M(P,k,V,Y){y();const I=Y.attributes,H=V.getAttributes(),O=k.defaultAttributeValues;for(const U in H){const X=H[U];if(X.location>=0){let Z=I[U];if(Z===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const ae=Z.normalized,fe=Z.itemSize,Ge=e.get(Z);if(Ge===void 0)continue;const Ye=Ge.buffer,Le=Ge.type,K=Ge.bytesPerElement,he=Le===t.INT||Le===t.UNSIGNED_INT||Z.gpuType===km;if(Z.isInterleavedBufferAttribute){const le=Z.data,Re=le.stride,Ue=Z.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)f(X.location+De,le.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<X.locationSize;De++)v(X.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let De=0;De<X.locationSize;De++)x(X.location+De,fe/X.locationSize,Le,ae,Re*K,(Ue+fe/X.locationSize*De)*K,he)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)f(X.location+le,Z.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<X.locationSize;le++)v(X.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let le=0;le<X.locationSize;le++)x(X.location+le,fe/X.locationSize,Le,ae,fe*K,fe/X.locationSize*le*K,he)}}else if(O!==void 0){const ae=O[U];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(X.location,ae);break;case 3:t.vertexAttrib3fv(X.location,ae);break;case 4:t.vertexAttrib4fv(X.location,ae);break;default:t.vertexAttrib1fv(X.location,ae)}}}}m()}function b(){R();for(const P in i){const k=i[P];for(const V in k){const Y=k[V];for(const I in Y){const H=Y[I];for(const O in H)u(H[O].object),delete H[O];delete Y[I]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const V in k){const Y=k[V];for(const I in Y){const H=Y[I];for(const O in H)u(H[O].object),delete H[O];delete Y[I]}}delete i[P.id]}function A(P){for(const k in i){const V=i[k];for(const Y in V){const I=V[Y];if(I[P.id]===void 0)continue;const H=I[P.id];for(const O in H)u(H[O].object),delete H[O];delete I[P.id]}}}function _(P){for(const k in i){const V=i[k],Y=P.isInstancedMesh===!0?P.id:0,I=V[Y];if(I!==void 0){for(const H in I){const O=I[H];for(const U in O)u(O[U].object),delete O[U];delete I[H]}delete V[Y],Object.keys(V).length===0&&delete i[k]}}}function R(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:v,disableUnusedAttributes:m}}function fN(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function pN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==li&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mi&&!_)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:M,maxSamples:b,samples:T}}function mN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _r,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!v)s?u(null):c();else{const m=s?0:i,x=m*4;let M=f.clippingState||null;l.value=M,M=u(g,d,x,p);for(let b=0;b!==x;++b)M[b]=n[b];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const f=p+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<f)&&(v=new Float32Array(f));for(let x=0,M=p;x!==y;++x,M+=4)o.copy(h[x]).applyMatrix4(m,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}const Tr=4,x_=[.125,.215,.35,.446,.526,.582],ns=20,gN=256,Ko=new Km,y_=new tt;let Wd=null,Xd=0,Yd=0,qd=!1;const vN=new z;class S_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=vN}=s;Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,Xd,Yd),this._renderer.xr.enabled=qd,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:nr,format:li,colorSpace:Jc,depthBuffer:!1},r=M_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_N(s)),this._blurMaterial=yN(s,e,n),this._ggxMaterial=xN(s,e,n)}return r}_compileMaterial(e){const n=new Di(new fi,e);this._renderer.compile(n,Ko)}_sceneToCubeUV(e,n,i,r,s){const l=new Yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(y_),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new nl,new c1({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,v=y.material;let f=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,f=!0):(v.color.copy(y_),f=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):M===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const b=this._cubeSize;Bs(r,M*b,x>2?b:0,b,b),h.setRenderTarget(r),f&&h.render(y,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_s||e.mapping===bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ko)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:g}=this,y=this._sizeLods[i],v=3*y*(i>g-Tr?i-g+Tr:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Bs(s,v,f,3*y,2*y),r.setRenderTarget(s),r.render(a,Ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Bs(e,v,f,3*y,2*y),r.setRenderTarget(e),r.render(a,Ko)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ns-1),y=s/g,v=isFinite(s)?1+Math.floor(u*y):ns;v>ns&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ns}`);const f=[];let m=0;for(let A=0;A<ns;++A){const _=A/y,R=Math.exp(-_*_/2);f.push(R),A===0?m+=R:A<v&&(m+=2*R)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const M=this._sizeLods[r],b=3*M*(r>x-Tr?r-x+Tr:0),T=4*(this._cubeSize-M);Bs(n,b,T,3*M,2*M),l.setRenderTarget(n),l.render(h,Ko)}}function _N(t){const e=[],n=[],i=[];let r=t;const s=t-Tr+1+x_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Tr?l=x_[o-t+Tr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,v=2,f=1,m=new Float32Array(y*g*p),x=new Float32Array(v*g*p),M=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,_=T>2?0:-1,R=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];m.set(R,y*g*T),x.set(d,v*g*T);const D=[T,T,T,T,T,T];M.set(D,f*g*T)}const b=new fi;b.setAttribute("position",new Fn(m,y)),b.setAttribute("uv",new Fn(x,v)),b.setAttribute("faceIndex",new Fn(M,f)),i.push(new Di(b,null)),r>Tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function M_(t,e,n){const i=new Ri(t,e,n);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xN(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function yN(t,e,n){const i=new Float32Array(ns),r=new z(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function E_(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function T_(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}class v1 extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new u1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nl(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:$i});s.uniforms.tEquirect.value=n;const o=new Di(r,s),a=n.minFilter;return n.minFilter===as&&(n.minFilter=ln),new w3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function SN(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===_d||p===xd)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const y=new v1(g.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===_d||p===xd,y=p===_s||p===bo;if(g||y){let v=n.get(d);const f=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new S_(t)),v=g?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),v.texture;if(v!==void 0)return v.texture;{const m=d.image;return g&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new S_(t)),v=g?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d,p){return p===_d?d.mapping=_s:p===xd&&(d.mapping=bo),d}function l(d){let p=0;const g=6;for(let y=0;y<g;y++)d[y]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function MN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&tp("WebGLRenderer: "+i+" extension not supported."),r}}}function EN(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let x=0,M=m.length;x<M;x+=3){const b=m[x+0],T=m[x+1],A=m[x+2];d.push(b,T,T,A,A,b)}}else{const m=g.array;y=g.version;for(let x=0,M=m.length/3-1;x<M;x+=3){const b=x+0,T=x+1,A=x+2;d.push(b,T,T,A,A,b)}}const v=new(g.count>=65535?a1:o1)(d,1);v.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,v)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function TN(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*o,p),n.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let y=0;for(let v=0;v<p;v++)y+=d[v];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bN(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let D=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",D)};var p=D;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),v===!0&&(M=3);let b=a.attributes.position.count*M,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*T*4*h),_=new i1(A,b,T,h);_.type=Mi,_.needsUpdate=!0;const R=M*4;for(let P=0;P<h;P++){const k=f[P],V=m[P],Y=x[P],I=b*T*4*P;for(let H=0;H<k.count;H++){const O=H*R;g===!0&&(r.fromBufferAttribute(k,H),A[I+O+0]=r.x,A[I+O+1]=r.y,A[I+O+2]=r.z,A[I+O+3]=0),y===!0&&(r.fromBufferAttribute(V,H),A[I+O+4]=r.x,A[I+O+5]=r.y,A[I+O+6]=r.z,A[I+O+7]=0),v===!0&&(r.fromBufferAttribute(Y,H),A[I+O+8]=r.x,A[I+O+9]=r.y,A[I+O+10]=r.z,A[I+O+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new Be(b,T)},i.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function AN(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const CN={[VM]:"LINEAR_TONE_MAPPING",[HM]:"REINHARD_TONE_MAPPING",[GM]:"CINEON_TONE_MAPPING",[jM]:"ACES_FILMIC_TONE_MAPPING",[XM]:"AGX_TONE_MAPPING",[YM]:"NEUTRAL_TONE_MAPPING",[WM]:"CUSTOM_TONE_MAPPING"};function RN(t,e,n,i,r){const s=new Ri(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Ao(e,n):void 0}),o=new Ri(e,n,{type:nr,depthBuffer:!1,stencilBuffer:!1}),a=new fi;a.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new di([0,2,0,0,2,0],2));const l=new p3({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Di(a,l),u=new Km(-1,1,1,-1,0,1);let h=null,d=null,p=!1,g,y=null,v=[],f=!1;this.setSize=function(m,x){s.setSize(m,x),o.setSize(m,x);for(let M=0;M<v.length;M++){const b=v[M];b.setSize&&b.setSize(m,x)}},this.setEffects=function(m){v=m,f=v.length>0&&v[0].isRenderPass===!0;const x=s.width,M=s.height;for(let b=0;b<v.length;b++){const T=v[b];T.setSize&&T.setSize(x,M)}},this.begin=function(m,x){if(p||m.toneMapping===Ci&&v.length===0)return!1;if(y=x,x!==null){const M=x.width,b=x.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return f===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=Ci,!0},this.hasRenderPass=function(){return f},this.end=function(m,x){m.toneMapping=g,p=!0;let M=s,b=o;for(let T=0;T<v.length;T++){const A=v[T];if(A.enabled!==!1&&(A.render(m,b,M,x),A.needsSwap!==!1)){const _=M;M=b,b=_}}if(h!==m.outputColorSpace||d!==m.toneMapping){h=m.outputColorSpace,d=m.toneMapping,l.defines={},Ke.getTransfer(h)===nt&&(l.defines.SRGB_TRANSFER="");const T=CN[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const _1=new mn,ip=new Ao(1,1),x1=new i1,y1=new W2,S1=new u1,w_=[],b_=[],A_=new Float32Array(16),C_=new Float32Array(9),R_=new Float32Array(4);function Uo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=w_[r];if(s===void 0&&(s=new Float32Array(r),w_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ru(t,e){let n=b_[e];n===void 0&&(n=new Int32Array(e),b_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function LN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function NN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function IN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;R_.set(i),t.uniformMatrix2fv(this.addr,!1,R_),Gt(n,i)}}function UN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;C_.set(i),t.uniformMatrix3fv(this.addr,!1,C_),Gt(n,i)}}function FN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;A_.set(i),t.uniformMatrix4fv(this.addr,!1,A_),Gt(n,i)}}function ON(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function BN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function zN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function VN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function GN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function jN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function WN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ip.compareFunction=n.isReversedDepthBuffer()?Wm:jm,s=ip):s=_1,n.setTexture2D(e||s,r)}function XN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||y1,r)}function YN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||S1,r)}function qN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||x1,r)}function $N(t){switch(t){case 5126:return PN;case 35664:return DN;case 35665:return LN;case 35666:return NN;case 35674:return IN;case 35675:return UN;case 35676:return FN;case 5124:case 35670:return ON;case 35667:case 35671:return kN;case 35668:case 35672:return BN;case 35669:case 35673:return zN;case 5125:return VN;case 36294:return HN;case 36295:return GN;case 36296:return jN;case 35678:case 36198:case 36298:case 36306:case 35682:return WN;case 35679:case 36299:case 36307:return XN;case 35680:case 36300:case 36308:case 36293:return YN;case 36289:case 36303:case 36311:case 36292:return qN}}function KN(t,e){t.uniform1fv(this.addr,e)}function ZN(t,e){const n=Uo(e,this.size,2);t.uniform2fv(this.addr,n)}function QN(t,e){const n=Uo(e,this.size,3);t.uniform3fv(this.addr,n)}function JN(t,e){const n=Uo(e,this.size,4);t.uniform4fv(this.addr,n)}function eI(t,e){const n=Uo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tI(t,e){const n=Uo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nI(t,e){const n=Uo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iI(t,e){t.uniform1iv(this.addr,e)}function rI(t,e){t.uniform2iv(this.addr,e)}function sI(t,e){t.uniform3iv(this.addr,e)}function oI(t,e){t.uniform4iv(this.addr,e)}function aI(t,e){t.uniform1uiv(this.addr,e)}function lI(t,e){t.uniform2uiv(this.addr,e)}function cI(t,e){t.uniform3uiv(this.addr,e)}function uI(t,e){t.uniform4uiv(this.addr,e)}function dI(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=ip:o=_1;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function hI(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||y1,s[o])}function fI(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||S1,s[o])}function pI(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||x1,s[o])}function mI(t){switch(t){case 5126:return KN;case 35664:return ZN;case 35665:return QN;case 35666:return JN;case 35674:return eI;case 35675:return tI;case 35676:return nI;case 5124:case 35670:return iI;case 35667:case 35671:return rI;case 35668:case 35672:return sI;case 35669:case 35673:return oI;case 5125:return aI;case 36294:return lI;case 36295:return cI;case 36296:return uI;case 35678:case 36198:case 36298:case 36306:case 35682:return dI;case 35679:case 36299:case 36307:return hI;case 35680:case 36300:case 36308:case 36293:return fI;case 36289:case 36303:case 36311:case 36292:return pI}}class gI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$N(n.type)}}class vI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mI(n.type)}}class _I{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function P_(t,e){t.seq.push(e),t.map[e.id]=e}function xI(t,e,n){const i=t.name,r=i.length;for($d.lastIndex=0;;){const s=$d.exec(i),o=$d.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){P_(n,c===void 0?new gI(a,t,e):new vI(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new _I(a),P_(n,h)),n=h}}}class _c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);xI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function D_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yI=37297;let SI=0;function MI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const L_=new Fe;function EI(t){Ke._getMatrix(L_,Ke.workingColorSpace,t);const e=`mat3( ${L_.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case eu:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function N_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+MI(t.getShaderSource(e),a)}else return s}function TI(t,e){const n=EI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const wI={[VM]:"Linear",[HM]:"Reinhard",[GM]:"Cineon",[jM]:"ACESFilmic",[XM]:"AgX",[YM]:"Neutral",[WM]:"Custom"};function bI(t,e){const n=wI[e];return n===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ql=new z;function AI(){Ke.getLuminanceCoefficients(ql);const t=ql.x.toFixed(4),e=ql.y.toFixed(4),n=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function RI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function oa(t){return t!==""}function I_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DI=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(t){return t.replace(DI,NI)}const LI=new Map;function NI(t,e){let n=Ve[e];if(n===void 0){const i=LI.get(e);if(i!==void 0)n=Ve[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rp(n)}const II=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F_(t){return t.replace(II,UI)}function UI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function O_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const FI={[hc]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function OI(t){return FI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kI={[_s]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function BI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":kI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const zI={[bo]:"ENVMAP_MODE_REFRACTION"};function VI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":zI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HI={[zM]:"ENVMAP_BLENDING_MULTIPLY",[E2]:"ENVMAP_BLENDING_MIX",[T2]:"ENVMAP_BLENDING_ADD"};function GI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":HI[t.combine]||"ENVMAP_BLENDING_NONE"}function jI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OI(n),c=BI(n),u=VI(n),h=GI(n),d=jI(n),p=CI(n),g=RI(s),y=r.createProgram();let v,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oa).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oa).join(`
`),f.length>0&&(f+=`
`)):(v=[O_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),f=[O_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ci?bI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,TI("linearToOutputTexel",n.outputColorSpace),AI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),o=rp(o),o=I_(o,n),o=U_(o,n),a=rp(a),a=I_(a,n),a=U_(a,n),o=F_(o),a=F_(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",n.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=m+v+o,M=m+f+a,b=D_(r,r.VERTEX_SHADER,x),T=D_(r,r.FRAGMENT_SHADER,M);r.attachShader(y,b),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(P){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y)||"",V=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(T)||"",I=k.trim(),H=V.trim(),O=Y.trim();let U=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,T);else{const Z=N_(r,b,"vertex"),ae=N_(r,T,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+Z+`
`+ae)}else I!==""?Pe("WebGLProgram: Program Info Log:",I):(H===""||O==="")&&(X=!1);X&&(P.diagnostics={runnable:U,programLog:I,vertexShader:{log:H,prefix:v},fragmentShader:{log:O,prefix:f}})}r.deleteShader(b),r.deleteShader(T),_=new _c(r,y),R=PI(r,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(y,yI)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SI++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=T,this}let XI=0;class YI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new qI(e),n.set(e,i)),i}}class qI{constructor(e){this.id=XI++,this.code=e,this.usedTimes=0}}function $I(t){return t===xs||t===Zc||t===Qc}function KI(t,e,n,i,r,s){const o=new r1,a=new YI,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,R,D,P,k,V){const Y=P.fog,I=k.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||H,O),X=U&&U.mapping===bu?U.image.height:null,Z=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=ae!==void 0?ae.length:0;let Ge=0;I.morphAttributes.position!==void 0&&(Ge=1),I.morphAttributes.normal!==void 0&&(Ge=2),I.morphAttributes.color!==void 0&&(Ge=3);let Ye,Le,K,he;if(Z){const Oe=yi[Z];Ye=Oe.vertexShader,Le=Oe.fragmentShader}else Ye=_.vertexShader,Le=_.fragmentShader,a.update(_),K=a.getVertexShaderID(_),he=a.getFragmentShaderID(_);const le=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,_t=!!_.map,qe=!!_.matcap,rt=!!U,ft=!!_.aoMap,je=!!_.lightMap,Ot=!!_.bumpMap,xt=!!_.normalMap,An=!!_.displacementMap,N=!!_.emissiveMap,kt=!!_.metalnessMap,$e=!!_.roughnessMap,ut=_.anisotropy>0,pe=_.clearcoat>0,Tt=_.dispersion>0,C=_.iridescence>0,E=_.sheen>0,B=_.transmission>0,Q=ut&&!!_.anisotropyMap,ne=pe&&!!_.clearcoatMap,re=pe&&!!_.clearcoatNormalMap,de=pe&&!!_.clearcoatRoughnessMap,q=C&&!!_.iridescenceMap,J=C&&!!_.iridescenceThicknessMap,_e=E&&!!_.sheenColorMap,Se=E&&!!_.sheenRoughnessMap,ce=!!_.specularMap,se=!!_.specularColorMap,Ne=!!_.specularIntensityMap,ze=B&&!!_.transmissionMap,et=B&&!!_.thicknessMap,L=!!_.gradientMap,oe=!!_.alphaMap,$=_.alphaTest>0,xe=!!_.alphaHash,ue=!!_.extensions;let te=Ci;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(te=t.toneMapping);const we={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Ye,fragmentShader:Le,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:_t,matcap:qe,envMap:rt,envMapMode:rt&&U.mapping,envMapCubeUVHeight:X,aoMap:ft,lightMap:je,bumpMap:Ot,normalMap:xt,displacementMap:An,emissiveMap:N,normalMapObjectSpace:xt&&_.normalMapType===A2,normalMapTangentSpace:xt&&_.normalMapType===ep,packedNormalMap:xt&&_.normalMapType===ep&&$I(_.normalMap.format),metalnessMap:kt,roughnessMap:$e,anisotropy:ut,anisotropyMap:Q,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:Tt,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:J,sheen:E,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:ce,specularColorMap:se,specularIntensityMap:Ne,transmission:B,transmissionMap:ze,thicknessMap:et,gradientMap:L,opaque:_.transparent===!1&&_.blending===fo&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:$,alphaHash:xe,combine:_.combine,mapUv:_t&&g(_.map.channel),aoMapUv:ft&&g(_.aoMap.channel),lightMapUv:je&&g(_.lightMap.channel),bumpMapUv:Ot&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:An&&g(_.displacementMap.channel),emissiveMapUv:N&&g(_.emissiveMap.channel),metalnessMapUv:kt&&g(_.metalnessMap.channel),roughnessMapUv:$e&&g(_.roughnessMap.channel),anisotropyMapUv:Q&&g(_.anisotropyMap.channel),clearcoatMapUv:ne&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(_.sheenRoughnessMap.channel),specularMapUv:ce&&g(_.specularMap.channel),specularColorMapUv:se&&g(_.specularColorMap.channel),specularIntensityMapUv:Ne&&g(_.specularIntensityMap.channel),transmissionMapUv:ze&&g(_.transmissionMap.channel),thicknessMapUv:et&&g(_.thicknessMap.channel),alphaMapUv:oe&&g(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||ut),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(_t||oe),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:k.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ge,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:_t&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:N&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hi,flipSided:_.side===bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function v(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)R.push(D),R.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(f(R,_),m(R,_),R.push(t.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function f(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function m(_,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function x(_){const R=p[_.type];let D;if(R){const P=yi[R];D=d3.clone(P.uniforms)}else D=_.uniforms;return D}function M(_,R){let D=u.get(R);return D!==void 0?++D.usedTimes:(D=new WI(t,R,_,r),c.push(D),u.set(R,D)),D}function b(_){if(--_.usedTimes===0){const R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:x,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function ZI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function QI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function k_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function B_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,y,v,f){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:v,group:f},t[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=g,m.materialVariant=o(d),m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=v,m.group=f),e++,m}function l(d,p,g,y,v,f){const m=a(d,p,g,y,v,f);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function c(d,p,g,y,v,f){const m=a(d,p,g,y,v,f);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,p){n.length>1&&n.sort(d||QI),i.length>1&&i.sort(p||k_),r.length>1&&r.sort(p||k_)}function h(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function JI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new B_,t.set(i,[o])):r>=s.length?(o=new B_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new tt};break;case"SpotLight":n={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function tU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nU=0;function iU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rU(t){const e=new eU,n=tU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new It,o=new It;function a(c){let u=0,h=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,g=0,y=0,v=0,f=0,m=0,x=0,M=0,b=0,T=0,A=0;c.sort(iU);for(let R=0,D=c.length;R<D;R++){const P=c[R],k=P.color,V=P.intensity,Y=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===xs?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*V,h+=k.g*V,d+=k.b*V;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],V);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,U=n.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(k).multiplyScalar(V),H.distance=Y,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[y]=H;const O=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,O.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[y]=O.matrix,P.castShadow){const U=n.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=I,M++}y++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(k).multiplyScalar(V),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=H,v++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const O=P.shadow,U=n.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(V),H.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[f]=H,f++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==v||_.hemiLength!==f||_.numDirectionalShadows!==m||_.numPointShadows!==x||_.numSpotShadows!==M||_.numSpotMaps!==b||_.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=v,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,_.directionalLength=p,_.pointLength=g,_.spotLength=y,_.rectAreaLength=v,_.hemiLength=f,_.numDirectionalShadows=m,_.numPointShadows=x,_.numSpotShadows=M,_.numSpotMaps=b,_.numLightProbes=A,i.version=nU++)}function l(c,u){let h=0,d=0,p=0,g=0,y=0;const v=u.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const x=c[f];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),h++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),p++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(x.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),d++}else if(x.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function z_(t){const e=new rU(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function sU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new z_(t),e.set(r,[a])):s>=o.length?(a=new z_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const oU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aU=`uniform sampler2D shadow_pass;
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
}`,lU=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],cU=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],V_=new It,Zo=new z,Kd=new z;function uU(t,e,n){let i=new qm;const r=new Be,s=new Be,o=new Ct,a=new g3,l=new v3,c={},u=n.maxTextureSize,h={[Or]:bn,[bn]:Or,[Hi]:Hi},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:oU,fragmentShader:aU}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new fi;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Di(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let f=this.type;this.render=function(T,A,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===r2&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hc);const R=t.getRenderTarget(),D=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending($i),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=f!==this.type;V&&A.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(I=>I.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,I=T.length;Y<I;Y++){const H=T[Y],O=H.shadow;if(O===void 0){Pe("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const U=O.getFrameExtents();r.multiply(U),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,O.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=X,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===sa){if(H.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ri(r.x,r.y,{format:xs,type:nr,minFilter:ln,magFilter:ln,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new Ao(r.x,r.y,Mi),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=ir,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt}else H.isPointLight?(O.map=new v1(r.x),O.map.depthTexture=new c3(r.x,Pi)):(O.map=new Ri(r.x,r.y),O.map.depthTexture=new Ao(r.x,r.y,Pi)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=ir,this.type===hc?(O.map.depthTexture.compareFunction=X?Wm:jm,O.map.depthTexture.minFilter=ln,O.map.depthTexture.magFilter=ln):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt);O.camera.updateProjectionMatrix()}const Z=O.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<Z;ae++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(O.map),t.clear());const fe=O.getViewport(ae);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),k.viewport(o)}if(H.isPointLight){const fe=O.camera,Ge=O.matrix,Ye=H.distance||fe.far;Ye!==fe.far&&(fe.far=Ye,fe.updateProjectionMatrix()),Zo.setFromMatrixPosition(H.matrixWorld),fe.position.copy(Zo),Kd.copy(fe.position),Kd.add(lU[ae]),fe.up.copy(cU[ae]),fe.lookAt(Kd),fe.updateMatrixWorld(),Ge.makeTranslation(-Zo.x,-Zo.y,-Zo.z),V_.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(V_,fe.coordinateSystem,fe.reversedDepth)}else O.updateMatrices(H);i=O.getFrustum(),M(A,_,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===sa&&m(O,_),O.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(R,D,P)};function m(T,A){const _=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ri(r.x,r.y,{format:xs,type:nr})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,_,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,_,p,y,null)}function x(T,A,_,R){let D=null;const P=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)D=P;else if(D=_.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=D.uuid,V=A.uuid;let Y=c[k];Y===void 0&&(Y={},c[k]=Y);let I=Y[V];I===void 0&&(I=D.clone(),Y[V]=I,A.addEventListener("dispose",b)),D=I}if(D.visible=A.visible,D.wireframe=A.wireframe,R===sa?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:h[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const k=t.properties.get(D);k.light=_}return D}function M(T,A,_,R,D){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===sa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const V=e.update(T),Y=T.material;if(Array.isArray(Y)){const I=V.groups;for(let H=0,O=I.length;H<O;H++){const U=I[H],X=Y[U.materialIndex];if(X&&X.visible){const Z=x(T,X,R,D);T.onBeforeShadow(t,T,A,_,V,Z,U),t.renderBufferDirect(_,null,V,Z,T,U),T.onAfterShadow(t,T,A,_,V,Z,U)}}}else if(Y.visible){const I=x(T,Y,R,D);T.onBeforeShadow(t,T,A,_,V,I,null),t.renderBufferDirect(_,null,V,I,T,null),T.onAfterShadow(t,T,A,_,V,I,null)}}const k=T.children;for(let V=0,Y=k.length;V<Y;V++)M(k[V],A,_,R,D)}function b(T){T.target.removeEventListener("dispose",b);for(const _ in c){const R=c[_],D=T.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function dU(t,e){function n(){let L=!1;const oe=new Ct;let $=null;const xe=new Ct(0,0,0,0);return{setMask:function(ue){$!==ue&&!L&&(t.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){L=ue},setClear:function(ue,te,we,Oe,Rt){Rt===!0&&(ue*=Oe,te*=Oe,we*=Oe),oe.set(ue,te,we,Oe),xe.equals(oe)===!1&&(t.clearColor(ue,te,we,Oe),xe.copy(oe))},reset:function(){L=!1,$=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,oe=!1,$=null,xe=null,ue=null;return{setReversed:function(te){if(oe!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=te;const Oe=ue;ue=null,this.setClear(Oe)}},getReversed:function(){return oe},setTest:function(te){te?le(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(te){$!==te&&!L&&(t.depthMask(te),$=te)},setFunc:function(te){if(oe&&(te=O2[te]),xe!==te){switch(te){case mf:t.depthFunc(t.NEVER);break;case gf:t.depthFunc(t.ALWAYS);break;case vf:t.depthFunc(t.LESS);break;case wo:t.depthFunc(t.LEQUAL);break;case _f:t.depthFunc(t.EQUAL);break;case xf:t.depthFunc(t.GEQUAL);break;case yf:t.depthFunc(t.GREATER);break;case Sf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=te}},setLocked:function(te){L=te},setClear:function(te){ue!==te&&(ue=te,oe&&(te=1-te),t.clearDepth(te))},reset:function(){L=!1,$=null,xe=null,ue=null,oe=!1}}}function r(){let L=!1,oe=null,$=null,xe=null,ue=null,te=null,we=null,Oe=null,Rt=null;return{setTest:function(st){L||(st?le(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(st){oe!==st&&!L&&(t.stencilMask(st),oe=st)},setFunc:function(st,Ni,pi){($!==st||xe!==Ni||ue!==pi)&&(t.stencilFunc(st,Ni,pi),$=st,xe=Ni,ue=pi)},setOp:function(st,Ni,pi){(te!==st||we!==Ni||Oe!==pi)&&(t.stencilOp(st,Ni,pi),te=st,we=Ni,Oe=pi)},setLocked:function(st){L=st},setClear:function(st){Rt!==st&&(t.clearStencil(st),Rt=st)},reset:function(){L=!1,oe=null,$=null,xe=null,ue=null,te=null,we=null,Oe=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,g=[],y=null,v=!1,f=null,m=null,x=null,M=null,b=null,T=null,A=null,_=new tt(0,0,0),R=0,D=!1,P=null,k=null,V=null,Y=null,I=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,U=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=U>=1):X.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=U>=2);let Z=null,ae={};const fe=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),Ye=new Ct().fromArray(fe),Le=new Ct().fromArray(Ge);function K(L,oe,$,xe){const ue=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<$;we++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return te}const he={};he[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(wo),Ot(!1),xt(Bv),le(t.CULL_FACE),ft($i);function le(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function Re(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Ue(L,oe){return d[L]!==oe?(t.bindFramebuffer(L,oe),d[L]=oe,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=oe),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function De(L,oe){let $=g,xe=!1;if(L){$=p.get(oe),$===void 0&&($=[],p.set(oe,$));const ue=L.textures;if($.length!==ue.length||$[0]!==t.COLOR_ATTACHMENT0){for(let te=0,we=ue.length;te<we;te++)$[te]=t.COLOR_ATTACHMENT0+te;$.length=ue.length,xe=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,xe=!0);xe&&t.drawBuffers($)}function _t(L){return y!==L?(t.useProgram(L),y=L,!0):!1}const qe={[ts]:t.FUNC_ADD,[o2]:t.FUNC_SUBTRACT,[a2]:t.FUNC_REVERSE_SUBTRACT};qe[l2]=t.MIN,qe[c2]=t.MAX;const rt={[u2]:t.ZERO,[d2]:t.ONE,[h2]:t.SRC_COLOR,[ff]:t.SRC_ALPHA,[_2]:t.SRC_ALPHA_SATURATE,[g2]:t.DST_COLOR,[p2]:t.DST_ALPHA,[f2]:t.ONE_MINUS_SRC_COLOR,[pf]:t.ONE_MINUS_SRC_ALPHA,[v2]:t.ONE_MINUS_DST_COLOR,[m2]:t.ONE_MINUS_DST_ALPHA,[x2]:t.CONSTANT_COLOR,[y2]:t.ONE_MINUS_CONSTANT_COLOR,[S2]:t.CONSTANT_ALPHA,[M2]:t.ONE_MINUS_CONSTANT_ALPHA};function ft(L,oe,$,xe,ue,te,we,Oe,Rt,st){if(L===$i){v===!0&&(Re(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),L!==s2){if(L!==f||st!==D){if((m!==ts||b!==ts)&&(t.blendEquation(t.FUNC_ADD),m=ts,b=ts),st)switch(L){case fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zv:t.blendFunc(t.ONE,t.ONE);break;case Vv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",L);break}else switch(L){case fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Vv:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hv:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",L);break}x=null,M=null,T=null,A=null,_.set(0,0,0),R=0,f=L,D=st}return}ue=ue||oe,te=te||$,we=we||xe,(oe!==m||ue!==b)&&(t.blendEquationSeparate(qe[oe],qe[ue]),m=oe,b=ue),($!==x||xe!==M||te!==T||we!==A)&&(t.blendFuncSeparate(rt[$],rt[xe],rt[te],rt[we]),x=$,M=xe,T=te,A=we),(Oe.equals(_)===!1||Rt!==R)&&(t.blendColor(Oe.r,Oe.g,Oe.b,Rt),_.copy(Oe),R=Rt),f=L,D=!1}function je(L,oe){L.side===Hi?Re(t.CULL_FACE):le(t.CULL_FACE);let $=L.side===bn;oe&&($=!$),Ot($),L.blending===fo&&L.transparent===!1?ft($i):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function xt(L){L!==n2?(le(t.CULL_FACE),L!==k&&(L===Bv?t.cullFace(t.BACK):L===i2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),k=L}function An(L){L!==V&&(O&&t.lineWidth(L),V=L)}function N(L,oe,$){L?(le(t.POLYGON_OFFSET_FILL),(Y!==oe||I!==$)&&(Y=oe,I=$,o.getReversed()&&(oe=-oe),t.polygonOffset(oe,$))):Re(t.POLYGON_OFFSET_FILL)}function kt(L){L?le(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function $e(L){L===void 0&&(L=t.TEXTURE0+H-1),Z!==L&&(t.activeTexture(L),Z=L)}function ut(L,oe,$){$===void 0&&(Z===null?$=t.TEXTURE0+H-1:$=Z);let xe=ae[$];xe===void 0&&(xe={type:void 0,texture:void 0},ae[$]=xe),(xe.type!==L||xe.texture!==oe)&&(Z!==$&&(t.activeTexture($),Z=$),t.bindTexture(L,oe||he[L]),xe.type=L,xe.texture=oe)}function pe(){const L=ae[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Tt(){try{t.compressedTexImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function E(){try{t.texSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function B(){try{t.texSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function de(){try{t.texStorage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function q(){try{t.texImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function _e(L){return h[L]!==void 0?h[L]:t.getParameter(L)}function Se(L,oe){h[L]!==oe&&(t.pixelStorei(L,oe),h[L]=oe)}function ce(L){Ye.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function se(L){Le.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Le.copy(L))}function Ne(L,oe){let $=c.get(oe);$===void 0&&($=new WeakMap,c.set(oe,$));let xe=$.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(oe,L.name),$.set(L,xe))}function ze(L,oe){const xe=c.get(oe).get(L);l.get(oe)!==xe&&(t.uniformBlockBinding(oe,xe,L.__bindingPointIndex),l.set(oe,xe))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,ae={},d={},p=new WeakMap,g=[],y=null,v=!1,f=null,m=null,x=null,M=null,b=null,T=null,A=null,_=new tt(0,0,0),R=0,D=!1,P=null,k=null,V=null,Y=null,I=null,Ye.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Re,bindFramebuffer:Ue,drawBuffers:De,useProgram:_t,setBlending:ft,setMaterial:je,setFlipSided:Ot,setCullFace:xt,setLineWidth:An,setPolygonOffset:N,setScissorTest:kt,activeTexture:$e,bindTexture:ut,unbindTexture:pe,compressedTexImage2D:Tt,compressedTexImage3D:C,texImage2D:q,texImage3D:J,pixelStorei:Se,getParameter:_e,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:re,texStorage3D:de,texSubImage2D:E,texSubImage3D:B,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:ce,viewport:se,reset:et}}function hU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,E){return g?new OffscreenCanvas(C,E):tu("canvas")}function v(C,E,B){let Q=1;const ne=Tt(C);if((ne.width>B||ne.height>B)&&(Q=B/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(Q*ne.width),de=Math.floor(Q*ne.height);d===void 0&&(d=y(re,de));const q=E?y(re,de):d;return q.width=re,q.height=de,q.getContext("2d").drawImage(C,0,0,re,de),Pe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+de+")."),q}else return"data"in C&&Pe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function f(C){return C.generateMipmaps}function m(C){t.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(C,E,B,Q,ne,re=!1){if(C!==null){if(t[C]!==void 0)return t[C];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de;Q&&(de=e.get("EXT_texture_norm16"),de||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=E;if(E===t.RED&&(B===t.FLOAT&&(q=t.R32F),B===t.HALF_FLOAT&&(q=t.R16F),B===t.UNSIGNED_BYTE&&(q=t.R8),B===t.UNSIGNED_SHORT&&de&&(q=de.R16_EXT),B===t.SHORT&&de&&(q=de.R16_SNORM_EXT)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.R8UI),B===t.UNSIGNED_SHORT&&(q=t.R16UI),B===t.UNSIGNED_INT&&(q=t.R32UI),B===t.BYTE&&(q=t.R8I),B===t.SHORT&&(q=t.R16I),B===t.INT&&(q=t.R32I)),E===t.RG&&(B===t.FLOAT&&(q=t.RG32F),B===t.HALF_FLOAT&&(q=t.RG16F),B===t.UNSIGNED_BYTE&&(q=t.RG8),B===t.UNSIGNED_SHORT&&de&&(q=de.RG16_EXT),B===t.SHORT&&de&&(q=de.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RG8UI),B===t.UNSIGNED_SHORT&&(q=t.RG16UI),B===t.UNSIGNED_INT&&(q=t.RG32UI),B===t.BYTE&&(q=t.RG8I),B===t.SHORT&&(q=t.RG16I),B===t.INT&&(q=t.RG32I)),E===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(q=t.RGB16UI),B===t.UNSIGNED_INT&&(q=t.RGB32UI),B===t.BYTE&&(q=t.RGB8I),B===t.SHORT&&(q=t.RGB16I),B===t.INT&&(q=t.RGB32I)),E===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),B===t.UNSIGNED_INT&&(q=t.RGBA32UI),B===t.BYTE&&(q=t.RGBA8I),B===t.SHORT&&(q=t.RGBA16I),B===t.INT&&(q=t.RGBA32I)),E===t.RGB&&(B===t.UNSIGNED_SHORT&&de&&(q=de.RGB16_EXT),B===t.SHORT&&de&&(q=de.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),E===t.RGBA){const J=re?eu:Ke.getTransfer(ne);B===t.FLOAT&&(q=t.RGBA32F),B===t.HALF_FLOAT&&(q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(q=J===nt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&de&&(q=de.RGBA16_EXT),B===t.SHORT&&de&&(q=de.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(C,E){let B;return C?E===null||E===Pi||E===Ga?B=t.DEPTH24_STENCIL8:E===Mi?B=t.DEPTH32F_STENCIL8:E===Ha&&(B=t.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===Ga?B=t.DEPTH_COMPONENT24:E===Mi?B=t.DEPTH_COMPONENT32F:E===Ha&&(B=t.DEPTH_COMPONENT16),B}function T(C,E){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==ln?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function _(C){const E=C.target;E.removeEventListener("dispose",_),P(E)}function R(C){const E=i.get(C);if(E.__webglInit===void 0)return;const B=C.source,Q=p.get(B);if(Q){const ne=Q[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(C),Object.keys(Q).length===0&&p.delete(B)}i.remove(C)}function D(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const B=C.source,Q=p.get(B);delete Q[E.__cacheKey],o.memory.textures--}function P(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ne=0;ne<E.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=C.textures;for(let Q=0,ne=B.length;Q<ne;Q++){const re=i.get(B[Q]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(C)}let k=0;function V(){k=0}function Y(){return k}function I(C){k=C}function H(){const C=k;return C>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),k+=1,C}function O(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function U(C,E){const B=i.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const Q=C.image;if(Q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(B,C,E);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function X(C,E){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Re(B,C,E);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function Z(C,E){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Re(B,C,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function ae(C,E){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Ue(B,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const fe={[Mf]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[Ef]:t.MIRRORED_REPEAT},Ge={[Kt]:t.NEAREST,[w2]:t.NEAREST_MIPMAP_NEAREST,[bl]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[yd]:t.LINEAR_MIPMAP_NEAREST,[as]:t.LINEAR_MIPMAP_LINEAR},Ye={[C2]:t.NEVER,[N2]:t.ALWAYS,[R2]:t.LESS,[jm]:t.LEQUAL,[P2]:t.EQUAL,[Wm]:t.GEQUAL,[D2]:t.GREATER,[L2]:t.NOTEQUAL};function Le(C,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ln||E.magFilter===yd||E.magFilter===bl||E.magFilter===as||E.minFilter===ln||E.minFilter===yd||E.minFilter===bl||E.minFilter===as)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,fe[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,fe[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,fe[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Ge[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Ge[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==bl&&E.minFilter!==as||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function K(C,E){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let ne=p.get(Q);ne===void 0&&(ne={},p.set(Q,ne));const re=O(E);if(re!==C.__cacheKey){ne[re]===void 0&&(ne[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[re].usedTimes++;const de=ne[C.__cacheKey];de!==void 0&&(ne[C.__cacheKey].usedTimes--,de.usedTimes===0&&D(E)),C.__cacheKey=re,C.__webglTexture=ne[re].texture}return B}function he(C,E,B){return Math.floor(Math.floor(C/B)/E)}function le(C,E,B,Q){const re=C.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,B,Q,E.data);else{re.sort((Se,ce)=>Se.start-ce.start);let de=0;for(let Se=1;Se<re.length;Se++){const ce=re[de],se=re[Se],Ne=ce.start+ce.count,ze=he(se.start,E.width,4),et=he(ce.start,E.width,4);se.start<=Ne+1&&ze===et&&he(se.start+se.count-1,E.width,4)===ze?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++de,re[de]=se)}re.length=de+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Se=0,ce=re.length;Se<ce;Se++){const se=re[Se],Ne=Math.floor(se.start/4),ze=Math.ceil(se.count/4),et=Ne%E.width,L=Math.floor(Ne/E.width),oe=ze,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,et),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,et,L,oe,$,B,Q,E.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function Re(C,E,B){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=K(C,E),re=E.source;n.bindTexture(Q,C.__webglTexture,t.TEXTURE0+B);const de=i.get(re);if(re.version!==de.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const $=Ke.getPrimaries(Ke.workingColorSpace),xe=E.colorSpace===Sr?null:Ke.getPrimaries(E.colorSpace),ue=E.colorSpace===Sr||$===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let J=v(E.image,!1,r.maxTextureSize);J=pe(E,J);const _e=s.convert(E.format,E.colorSpace),Se=s.convert(E.type);let ce=M(E.internalFormat,_e,Se,E.normalized,E.colorSpace,E.isVideoTexture);Le(Q,E);let se;const Ne=E.mipmaps,ze=E.isVideoTexture!==!0,et=de.__version===void 0||ne===!0,L=re.dataReady,oe=T(E,J);if(E.isDepthTexture)ce=b(E.format===ls,E.type),et&&(ze?n.texStorage2D(t.TEXTURE_2D,1,ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,null));else if(E.isDataTexture)if(Ne.length>0){ze&&et&&n.texStorage2D(t.TEXTURE_2D,oe,ce,Ne[0].width,Ne[0].height);for(let $=0,xe=Ne.length;$<xe;$++)se=Ne[$],ze?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,_e,Se,se.data):n.texImage2D(t.TEXTURE_2D,$,ce,se.width,se.height,0,_e,Se,se.data);E.generateMipmaps=!1}else ze?(et&&n.texStorage2D(t.TEXTURE_2D,oe,ce,J.width,J.height),L&&le(E,J,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,ce,Ne[0].width,Ne[0].height,J.depth);for(let $=0,xe=Ne.length;$<xe;$++)if(se=Ne[$],E.format!==li)if(_e!==null)if(ze){if(L)if(E.layerUpdates.size>0){const ue=__(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const we=se.data.subarray(te*ue/se.data.BYTES_PER_ELEMENT,(te+1)*ue/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,te,se.width,se.height,1,_e,we)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,J.depth,_e,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ce,se.width,se.height,J.depth,0,se.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,J.depth,_e,Se,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ce,se.width,se.height,J.depth,0,_e,Se,se.data)}else{ze&&et&&n.texStorage2D(t.TEXTURE_2D,oe,ce,Ne[0].width,Ne[0].height);for(let $=0,xe=Ne.length;$<xe;$++)se=Ne[$],E.format!==li?_e!==null?ze?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,_e,se.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ce,se.width,se.height,0,se.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,_e,Se,se.data):n.texImage2D(t.TEXTURE_2D,$,ce,se.width,se.height,0,_e,Se,se.data)}else if(E.isDataArrayTexture)if(ze){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,ce,J.width,J.height,J.depth),L)if(E.layerUpdates.size>0){const $=__(J.width,J.height,E.format,E.type);for(const xe of E.layerUpdates){const ue=J.data.subarray(xe*$/J.data.BYTES_PER_ELEMENT,(xe+1)*$/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,J.width,J.height,1,_e,Se,ue)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(E.isData3DTexture)ze?(et&&n.texStorage3D(t.TEXTURE_3D,oe,ce,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(E.isFramebufferTexture){if(et)if(ze)n.texStorage2D(t.TEXTURE_2D,oe,ce,J.width,J.height);else{let $=J.width,xe=J.height;for(let ue=0;ue<oe;ue++)n.texImage2D(t.TEXTURE_2D,ue,ce,$,xe,0,_e,Se,null),$>>=1,xe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),h.add(E),$.onpaint=Oe=>{const Rt=Oe.changedElements;for(const st of h)Rt.includes(st.image)&&(st.needsUpdate=!0)},$.requestPaint();return}const xe=0,ue=t.RGBA,te=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,ue,te,we,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ze&&et){const $=Tt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,oe,ce,$.width,$.height)}for(let $=0,xe=Ne.length;$<xe;$++)se=Ne[$],ze?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e,Se,se):n.texImage2D(t.TEXTURE_2D,$,ce,_e,Se,se);E.generateMipmaps=!1}else if(ze){if(et){const $=Tt(J);n.texStorage2D(t.TEXTURE_2D,oe,ce,$.width,$.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,ce,_e,Se,J);f(E)&&m(Q),de.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ue(C,E,B){if(E.image.length!==6)return;const Q=K(C,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const re=i.get(ne);if(ne.version!==re.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const de=Ke.getPrimaries(Ke.workingColorSpace),q=E.colorSpace===Sr?null:Ke.getPrimaries(E.colorSpace),J=E.colorSpace===Sr||de===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!_e&&!Se?ce[te]=v(E.image[te],!0,r.maxCubemapSize):ce[te]=Se?E.image[te].image:E.image[te],ce[te]=pe(E,ce[te]);const se=ce[0],Ne=s.convert(E.format,E.colorSpace),ze=s.convert(E.type),et=M(E.internalFormat,Ne,ze,E.normalized,E.colorSpace),L=E.isVideoTexture!==!0,oe=re.__version===void 0||Q===!0,$=ne.dataReady;let xe=T(E,se);Le(t.TEXTURE_CUBE_MAP,E);let ue;if(_e){L&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,et,se.width,se.height);for(let te=0;te<6;te++){ue=ce[te].mipmaps;for(let we=0;we<ue.length;we++){const Oe=ue[we];E.format!==li?Ne!==null?L?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Oe.width,Oe.height,Ne,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,et,Oe.width,Oe.height,0,Oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Oe.width,Oe.height,Ne,ze,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,et,Oe.width,Oe.height,0,Ne,ze,Oe.data)}}}else{if(ue=E.mipmaps,L&&oe){ue.length>0&&xe++;const te=Tt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,et,te.width,te.height)}for(let te=0;te<6;te++)if(Se){L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,Ne,ze,ce[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,ce[te].width,ce[te].height,0,Ne,ze,ce[te].data);for(let we=0;we<ue.length;we++){const Rt=ue[we].image[te].image;L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Rt.width,Rt.height,Ne,ze,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,et,Rt.width,Rt.height,0,Ne,ze,Rt.data)}}else{L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,ze,ce[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,Ne,ze,ce[te]);for(let we=0;we<ue.length;we++){const Oe=ue[we];L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Ne,ze,Oe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,et,Ne,ze,Oe.image[te])}}}f(E)&&m(t.TEXTURE_CUBE_MAP),re.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function De(C,E,B,Q,ne,re){const de=s.convert(B.format,B.colorSpace),q=s.convert(B.type),J=M(B.internalFormat,de,q,B.normalized,B.colorSpace),_e=i.get(E),Se=i.get(B);if(Se.__renderTarget=E,!_e.__hasExternalTextures){const ce=Math.max(1,E.width>>re),se=Math.max(1,E.height>>re);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,re,J,ce,se,E.depth,0,de,q,null):n.texImage2D(ne,re,J,ce,se,0,de,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,0,kt(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(C,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const Q=E.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,re=b(E.stencilBuffer,ne),de=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;$e(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(E),re,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(E),re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,C)}else{const Q=E.textures;for(let ne=0;ne<Q.length;ne++){const re=Q[ne],de=s.convert(re.format,re.colorSpace),q=s.convert(re.type),J=M(re.internalFormat,de,q,re.normalized,re.colorSpace);$e(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(E),J,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(E),J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(C,E,B){const Q=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Le(t.TEXTURE_CUBE_MAP,E.depthTexture);const _e=s.convert(E.depthTexture.format),Se=s.convert(E.depthTexture.type);let ce;E.depthTexture.format===ir?ce=t.DEPTH_COMPONENT24:E.depthTexture.format===ls&&(ce=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,E.width,E.height,0,_e,Se,null)}}else U(E.depthTexture,0);const re=ne.__webglTexture,de=kt(E),q=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,J=E.depthTexture.format===ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===ir)$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,q,re,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,q,re,0);else if(E.depthTexture.format===ls)$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,q,re,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,q,re,0);else throw new Error("Unknown depthTexture format")}function rt(C){const E=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)qe(E.__webglFramebuffer[Q],C,Q);else{const Q=C.texture.mipmaps;Q&&Q.length>0?qe(E.__webglFramebuffer[0],C,0):qe(E.__webglFramebuffer,C,0)}else if(B){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),_t(E.__webglDepthbuffer[Q],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}else{const Q=C.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),_t(E.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ft(C,E,B){const Q=i.get(C);E!==void 0&&De(Q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&rt(C)}function je(C){const E=C.texture,B=i.get(C),Q=i.get(E);C.addEventListener("dispose",_);const ne=C.textures,re=C.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),re){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let J=0;J<E.mipmaps.length;J++)B.__webglFramebuffer[q][J]=t.createFramebuffer()}else B.__webglFramebuffer[q]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)B.__webglFramebuffer[q]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(de)for(let q=0,J=ne.length;q<J;q++){const _e=i.get(ne[q]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&$e(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<ne.length;q++){const J=ne[q];B.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const _e=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),ce=M(J.internalFormat,_e,Se,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),se=kt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ce,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,B.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),_t(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(t.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)De(B.__webglFramebuffer[q][J],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else De(B.__webglFramebuffer[q],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(E)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let q=0,J=ne.length;q<J;q++){const _e=ne[q],Se=i.get(_e);let ce=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Se.__webglTexture),Le(ce,_e),De(B.__webglFramebuffer,C,_e,t.COLOR_ATTACHMENT0+q,ce,0),f(_e)&&m(ce)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,Q.__webglTexture),Le(q,E),E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)De(B.__webglFramebuffer[J],C,E,t.COLOR_ATTACHMENT0,q,J);else De(B.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,q,0);f(E)&&m(q),n.unbindTexture()}C.depthBuffer&&rt(C)}function Ot(C){const E=C.textures;for(let B=0,Q=E.length;B<Q;B++){const ne=E[B];if(f(ne)){const re=x(C),de=i.get(ne).__webglTexture;n.bindTexture(re,de),m(re),n.unbindTexture()}}}const xt=[],An=[];function N(C){if(C.samples>0){if($e(C)===!1){const E=C.textures,B=C.width,Q=C.height;let ne=t.COLOR_BUFFER_BIT;const re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(C),q=E.length>1;if(q)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const J=C.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Se=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,ne,t.NEAREST),l===!0&&(xt.length=0,An.length=0,xt.push(t.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xt.push(re),An.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,An)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Se=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function $e(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function pe(C,E){const B=C.colorSpace,Q=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Jc&&B!==Sr&&(Ke.getTransfer(B)===nt?(Q!==li||ne!==Ln)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",B)),E}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.getTextureUnits=Y,this.setTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ae,this.rebindTextures=ft,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fU(t,e){function n(i,r=Sr){let s;const o=Ke.getTransfer(r);if(i===Ln)return t.UNSIGNED_BYTE;if(i===Bm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ZM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===QM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$M)return t.BYTE;if(i===KM)return t.SHORT;if(i===Ha)return t.UNSIGNED_SHORT;if(i===km)return t.INT;if(i===Pi)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===nr)return t.HALF_FLOAT;if(i===JM)return t.ALPHA;if(i===e1)return t.RGB;if(i===li)return t.RGBA;if(i===ir)return t.DEPTH_COMPONENT;if(i===ls)return t.DEPTH_STENCIL;if(i===t1)return t.RED;if(i===Vm)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===Hm)return t.RG_INTEGER;if(i===Gm)return t.RGBA_INTEGER;if(i===fc||i===pc||i===mc||i===gc)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tf||i===wf||i===bf||i===Af)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Af)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cf||i===Rf||i===Pf||i===Df||i===Lf||i===Zc||i===Nf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cf||i===Rf)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Df)return s.COMPRESSED_R11_EAC;if(i===Lf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zc)return s.COMPRESSED_RG11_EAC;if(i===Nf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===If||i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===jf||i===Wf||i===Xf||i===Yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===If)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ff)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Of)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qf||i===$f||i===Kf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qf)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$f)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zf||i===Qf||i===Qc||i===Jf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ga?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const pU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mU=`
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

}`;class gU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new d1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:pU,fragmentShader:mU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new Au(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vU extends jr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",v=new gU,f={},m=n.getContextAttributes();let x=null,M=null;const b=[],T=[],A=new Be;let _=null;const R=new Yn;R.viewport=new Ct;const D=new Yn;D.viewport=new Ct;const P=[R,D],k=new b3;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=b[K];return he===void 0&&(he=new Ad,b[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=b[K];return he===void 0&&(he=new Ad,b[K]=he),he.getGripSpace()},this.getHand=function(K){let he=b[K];return he===void 0&&(he=new Ad,b[K]=he),he.getHandSpace()};function I(K){const he=T.indexOf(K.inputSource);if(he===-1)return;const le=b[he];le!==void 0&&(le.update(K.inputSource,K.frame,c||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",O);for(let K=0;K<b.length;K++){const he=T[K];he!==null&&(T[K]=null,b[K].disconnect(he))}V=null,Y=null,v.reset();for(const K in f)delete f[K];e.setRenderTarget(x),p=null,d=null,h=null,r=null,M=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",H),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Re=null,Ue=null;m.depth&&(Ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=m.stencil?ls:ir,Re=m.stencil?Ga:Pi);const De={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ri(d.textureWidth,d.textureHeight,{format:li,type:Ln,depthTexture:new Ao(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ri(p.framebufferWidth,p.framebufferHeight,{format:li,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(K){for(let he=0;he<K.removed.length;he++){const le=K.removed[he],Re=T.indexOf(le);Re>=0&&(T[Re]=null,b[Re].disconnect(le))}for(let he=0;he<K.added.length;he++){const le=K.added[he];let Re=T.indexOf(le);if(Re===-1){for(let De=0;De<b.length;De++)if(De>=T.length){T.push(le),Re=De;break}else if(T[De]===null){T[De]=le,Re=De;break}if(Re===-1)break}const Ue=b[Re];Ue&&Ue.connect(le)}}const U=new z,X=new z;function Z(K,he,le){U.setFromMatrixPosition(he.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const Re=U.distanceTo(X),Ue=he.projectionMatrix.elements,De=le.projectionMatrix.elements,_t=Ue[14]/(Ue[10]-1),qe=Ue[14]/(Ue[10]+1),rt=(Ue[9]+1)/Ue[5],ft=(Ue[9]-1)/Ue[5],je=(Ue[8]-1)/Ue[0],Ot=(De[8]+1)/De[0],xt=_t*je,An=_t*Ot,N=Re/(-je+Ot),kt=N*-je;if(he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(kt),K.translateZ(N),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ue[10]===-1)K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $e=_t+N,ut=qe+N,pe=xt-kt,Tt=An+(Re-kt),C=rt*qe/ut*$e,E=ft*qe/ut*$e;K.projectionMatrix.makePerspective(pe,Tt,C,E,$e,ut),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let he=K.near,le=K.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(le=v.depthFar)),k.near=D.near=R.near=he,k.far=D.far=R.far=le,(V!==k.near||Y!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,Y=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const Re=K.parent,Ue=k.cameras;ae(k,Re);for(let De=0;De<Ue.length;De++)ae(Ue[De],Re);Ue.length===2?Z(k,R,D):k.projectionMatrix.copy(R.projectionMatrix),fe(K,k,Re)};function fe(K,he,le){le===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=np*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(k)},this.getCameraTexture=function(K){return f[K]};let Ge=null;function Ye(K,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Re=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Re=!0);for(let qe=0;qe<le.length;qe++){const rt=le[qe];let ft=null;if(p!==null)ft=p.getViewport(rt);else{const Ot=h.getViewSubImage(d,rt);ft=Ot.viewport,qe===0&&(e.setRenderTargetTextures(M,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(M))}let je=P[qe];je===void 0&&(je=new Yn,je.layers.enable(qe),je.viewport=new Ct,P[qe]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ft.x,ft.y,ft.width,ft.height),qe===0&&(k.matrix.copy(je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Re===!0&&k.cameras.push(je)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const qe=h.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&v.init(qe,r.renderState)}if(Ue&&Ue.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let qe=0;qe<le.length;qe++){const rt=le[qe].camera;if(rt){let ft=f[rt];ft||(ft=new d1,f[rt]=ft);const je=h.getCameraImage(rt);ft.sourceTexture=je}}}}for(let le=0;le<b.length;le++){const Re=T[le],Ue=b[le];Re!==null&&Ue!==void 0&&Ue.update(Re,he,c||o)}Ge&&Ge(K,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Le=new m1;Le.setAnimationLoop(Ye),this.setAnimationLoop=function(K){Ge=K},this.dispose=function(){}}}const _U=new It,M1=new Fe;M1.set(-1,0,0,0,1,0,0,0,1);function xU(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,h1(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,m,x,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(v,f):f.isMeshLambertMaterial?(s(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(v,f),h(v,f)):f.isMeshPhongMaterial?(s(v,f),u(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(v,f),d(v,f),f.isMeshPhysicalMaterial&&p(v,f,M)):f.isMeshMatcapMaterial?(s(v,f),g(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),y(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(o(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?l(v,f,m,x):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===bn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===bn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const m=e.get(f),x=m.envMap,M=m.envMapRotation;x&&(v.envMap.value=x,v.envMapRotation.value.setFromMatrix4(_U.makeRotationFromEuler(M)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(M1),v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function o(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,m,x){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*m,v.scale.value=x*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function h(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function p(v,f,m){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,f){f.matcap&&(v.matcap.value=f.matcap)}function y(v,f){const m=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const M=x.program;i.uniformBlockBinding(m,M)}function c(m,x){let M=r[m.id];M===void 0&&(g(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",v));const b=x.program;i.updateUBOMapping(m,b);const T=e.render.frame;s[m.id]!==T&&(d(m),s[m.id]=T)}function u(m){const x=h();m.__bindingPointIndex=x;const M=t.createBuffer(),b=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const x=r[m.id],M=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,A=M.length;T<A;T++){const _=Array.isArray(M[T])?M[T]:[M[T]];for(let R=0,D=_.length;R<D;R++){const P=_[R];if(p(P,T,R,b)===!0){const k=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let I=0;I<V.length;I++){const H=V[I],O=y(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,k+Y,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):ArrayBuffer.isView(H)?P.__data.set(new H.constructor(H.buffer,H.byteOffset,P.__data.length)):(H.toArray(P.__data,Y),Y+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,M,b){const T=m.value,A=x+"_"+M;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:ArrayBuffer.isView(T)?b[A]=T.slice():b[A]=T.clone(),!0;{const _=b[A];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return b[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function g(m){const x=m.uniforms;let M=0;const b=16;for(let A=0,_=x.length;A<_;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let D=0,P=R.length;D<P;D++){const k=R[D],V=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,I=V.length;Y<I;Y++){const H=V[Y],O=y(H),U=M%b,X=U%O.boundary,Z=U+X;M+=X,Z!==0&&b-Z<O.storage&&(M+=b-Z),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=O.storage}}}const T=M%b;return T>0&&(M+=b-T),m.__size=M,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",m),x}function v(m){const x=m.target;x.removeEventListener("dispose",v);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}const SU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function MU(){return _i===null&&(_i=new s3(SU,16,16,xs,nr),_i.name="DFG_LUT",_i.minFilter=ln,_i.magFilter=ln,_i.wrapS=Wi,_i.wrapT=Wi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class EU{constructor(e={}){const{canvas:n=U2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=p,v=new Set([Gm,Hm,Vm]),f=new Set([Ln,Pi,Ha,Ga,Bm,zm]),m=new Uint32Array(4),x=new Int32Array(4),M=new z;let b=null,T=null;const A=[],_=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1,k=null;this._outputColorSpace=yn;let V=0,Y=0,I=null,H=-1,O=null;const U=new Ct,X=new Ct;let Z=null;const ae=new tt(0);let fe=0,Ge=n.width,Ye=n.height,Le=1,K=null,he=null;const le=new Ct(0,0,Ge,Ye),Re=new Ct(0,0,Ge,Ye);let Ue=!1;const De=new qm;let _t=!1,qe=!1;const rt=new It,ft=new z,je=new Ct,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function An(){return I===null?Le:1}let N=i;function kt(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Om}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),N===null){const F="webgl2";if(N=kt(F,w),N===null)throw kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Qe("WebGLRenderer: "+w.message),w}let $e,ut,pe,Tt,C,E,B,Q,ne,re,de,q,J,_e,Se,ce,se,Ne,ze,et,L,oe,$;function xe(){$e=new MN(N),$e.init(),L=new fU(N,$e),ut=new pN(N,$e,e,L),pe=new dU(N,$e),ut.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Tt=new wN(N),C=new ZI,E=new hU(N,$e,pe,C,ut,L,Tt),B=new SN(D),Q=new R3(N),oe=new hN(N,Q),ne=new EN(N,Q,Tt,oe),re=new AN(N,ne,Q,oe,Tt),Ne=new bN(N,ut,E),Se=new mN(C),de=new KI(D,B,$e,ut,oe,Se),q=new xU(D,C),J=new JI,_e=new sU($e),se=new dN(D,B,pe,re,g,l),ce=new uU(D,re,ut),$=new yU(N,Tt,ut,pe),ze=new fN(N,$e,Tt),et=new TN(N,$e,Tt),Tt.programs=de.programs,D.capabilities=ut,D.extensions=$e,D.properties=C,D.renderLists=J,D.shadowMap=ce,D.state=pe,D.info=Tt}xe(),y!==Ln&&(R=new RN(y,n.width,n.height,r,s));const ue=new vU(D,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(w){w!==void 0&&(Le=w,this.setSize(Ge,Ye,!1))},this.getSize=function(w){return w.set(Ge,Ye)},this.setSize=function(w,F,W=!0){if(ue.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=w,Ye=F,n.width=Math.floor(w*Le),n.height=Math.floor(F*Le),W===!0&&(n.style.width=w+"px",n.style.height=F+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Ge*Le,Ye*Le).floor()},this.setDrawingBufferSize=function(w,F,W){Ge=w,Ye=F,Le=W,n.width=Math.floor(w*W),n.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(y===Ln){Qe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,F,W,G){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,F,W,G),pe.viewport(U.copy(le).multiplyScalar(Le).round())},this.getScissor=function(w){return w.copy(Re)},this.setScissor=function(w,F,W,G){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,F,W,G),pe.scissor(X.copy(Re).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){pe.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,W=!0){let G=0;if(w){let j=!1;if(I!==null){const ve=I.texture.format;j=v.has(ve)}if(j){const ve=I.texture.type,Me=f.has(ve),ge=se.getClearColor(),Te=se.getClearAlpha(),be=ge.r,ke=ge.g,He=ge.b;Me?(m[0]=be,m[1]=ke,m[2]=He,m[3]=Te,N.clearBufferuiv(N.COLOR,0,m)):(x[0]=be,x[1]=ke,x[2]=He,x[3]=Te,N.clearBufferiv(N.COLOR,0,x))}else G|=N.COLOR_BUFFER_BIT}F&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),se.dispose(),J.dispose(),_e.dispose(),C.dispose(),B.dispose(),re.dispose(),oe.dispose(),$.dispose(),de.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ig),ue.removeEventListener("sessionend",rg),Wr.stop()};function te(w){w.preventDefault(),Yv("WebGLRenderer: Context Lost."),P=!0}function we(){Yv("WebGLRenderer: Context Restored."),P=!1;const w=Tt.autoReset,F=ce.enabled,W=ce.autoUpdate,G=ce.needsUpdate,j=ce.type;xe(),Tt.autoReset=w,ce.enabled=F,ce.autoUpdate=W,ce.needsUpdate=G,ce.type=j}function Oe(w){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Rt(w){const F=w.target;F.removeEventListener("dispose",Rt),st(F)}function st(w){Ni(w),C.remove(w)}function Ni(w){const F=C.get(w).programs;F!==void 0&&(F.forEach(function(W){de.releaseProgram(W)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,G,j,ve){F===null&&(F=Ot);const Me=j.isMesh&&j.matrixWorld.determinant()<0,ge=b1(w,F,W,G,j);pe.setMaterial(G,Me);let Te=W.index,be=1;if(G.wireframe===!0){if(Te=ne.getWireframeAttribute(W),Te===void 0)return;be=2}const ke=W.drawRange,He=W.attributes.position;let Ae=ke.start*be,ot=(ke.start+ke.count)*be;ve!==null&&(Ae=Math.max(Ae,ve.start*be),ot=Math.min(ot,(ve.start+ve.count)*be)),Te!==null?(Ae=Math.max(Ae,0),ot=Math.min(ot,Te.count)):He!=null&&(Ae=Math.max(Ae,0),ot=Math.min(ot,He.count));const Pt=ot-Ae;if(Pt<0||Pt===1/0)return;oe.setup(j,G,ge,W,Te);let wt,lt=ze;if(Te!==null&&(wt=Q.get(Te),lt=et,lt.setIndex(wt)),j.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*An()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(j.isLine){let Jt=G.linewidth;Jt===void 0&&(Jt=1),pe.setLineWidth(Jt*An()),j.isLineSegments?lt.setMode(N.LINES):j.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else j.isPoints?lt.setMode(N.POINTS):j.isSprite&&lt.setMode(N.TRIANGLES);if(j.isBatchedMesh)if($e.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,ye=j._multiDrawCounts,Cn=j._multiDrawCount,Ze=Te?Q.get(Te).bytesPerElement:1,Vn=C.get(G).currentProgram.getUniforms();for(let mi=0;mi<Cn;mi++)Vn.setValue(N,"_gl_DrawID",mi),lt.render(Jt[mi]/Ze,ye[mi])}else if(j.isInstancedMesh)lt.renderInstances(Ae,Pt,j.count);else if(W.isInstancedBufferGeometry){const Jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Jt);lt.renderInstances(Ae,Pt,ye)}else lt.render(Ae,Pt)};function pi(w,F,W){w.transparent===!0&&w.side===Hi&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,rl(w,F,W),w.side=Or,w.needsUpdate=!0,rl(w,F,W),w.side=Hi):rl(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),T=_e.get(W),T.init(F),_.push(T),W.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),w!==W&&w.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const G=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const ge=ve[Me];pi(ge,W,j),G.add(ge)}else pi(ve,W,j),G.add(ve)}),T=_.pop(),G},this.compileAsync=function(w,F,W=null){const G=this.compile(w,F,W);return new Promise(j=>{function ve(){if(G.forEach(function(Me){C.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){j(w);return}setTimeout(ve,10)}$e.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Pu=null;function T1(w){Pu&&Pu(w)}function ig(){Wr.stop()}function rg(){Wr.start()}const Wr=new m1;Wr.setAnimationLoop(T1),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(w){Pu=w,ue.setAnimationLoop(w),w===null?Wr.stop():Wr.start()},ue.addEventListener("sessionstart",ig),ue.addEventListener("sessionend",rg),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(w,F);const W=ue.enabled===!0&&ue.isPresenting===!0,G=R!==null&&(I===null||W)&&R.begin(D,I);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,F,I),T=_e.get(w,_.length),T.init(F),T.state.textureUnits=E.getTextureUnits(),_.push(T),rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),De.setFromProjectionMatrix(rt,Ei,F.reversedDepth),qe=this.localClippingEnabled,_t=Se.init(this.clippingPlanes,qe),b=J.get(w,A.length),b.init(),A.push(b),ue.enabled===!0&&ue.isPresenting===!0){const Me=D.xr.getDepthSensingMesh();Me!==null&&Du(Me,F,-1/0,D.sortObjects)}Du(w,F,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(K,he),xt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,xt&&se.addToRenderList(b,w),this.info.render.frame++,_t===!0&&Se.beginShadows();const j=T.state.shadowsArray;if(ce.render(j,w,F),_t===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&R.hasRenderPass())===!1){const Me=b.opaque,ge=b.transmissive;if(T.setupLights(),F.isArrayCamera){const Te=F.cameras;if(ge.length>0)for(let be=0,ke=Te.length;be<ke;be++){const He=Te[be];og(Me,ge,w,He)}xt&&se.render(w);for(let be=0,ke=Te.length;be<ke;be++){const He=Te[be];sg(b,w,He,He.viewport)}}else ge.length>0&&og(Me,ge,w,F),xt&&se.render(w),sg(b,w,F)}I!==null&&Y===0&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),G&&R.end(D),w.isScene===!0&&w.onAfterRender(D,w,F),oe.resetDefaultState(),H=-1,O=null,_.pop(),_.length>0?(T=_[_.length-1],E.setTextureUnits(T.state.textureUnits),_t===!0&&Se.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,k!==null&&k.renderEnd()};function Du(w,F,W,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){G&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(rt);const Me=re.update(w),ge=w.material;ge.visible&&b.push(w,Me,ge,W,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){const Me=re.update(w),ge=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),je.copy(Me.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(rt)),Array.isArray(ge)){const Te=Me.groups;for(let be=0,ke=Te.length;be<ke;be++){const He=Te[be],Ae=ge[He.materialIndex];Ae&&Ae.visible&&b.push(w,Me,Ae,W,je.z,He)}}else ge.visible&&b.push(w,Me,ge,W,je.z,null)}}const ve=w.children;for(let Me=0,ge=ve.length;Me<ge;Me++)Du(ve[Me],F,W,G)}function sg(w,F,W,G){const{opaque:j,transmissive:ve,transparent:Me}=w;T.setupLightsView(W),_t===!0&&Se.setGlobalState(D.clippingPlanes,W),G&&pe.viewport(U.copy(G)),j.length>0&&il(j,F,W),ve.length>0&&il(ve,F,W),Me.length>0&&il(Me,F,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function og(w,F,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ae=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Ri(1,1,{generateMipmaps:!0,type:Ae?nr:Ln,minFilter:as,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ve=T.state.transmissionRenderTarget[G.id],Me=G.viewport||U;ve.setSize(Me.z*D.transmissionResolutionScale,Me.w*D.transmissionResolutionScale);const ge=D.getRenderTarget(),Te=D.getActiveCubeFace(),be=D.getActiveMipmapLevel();D.setRenderTarget(ve),D.getClearColor(ae),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),xt&&se.render(W);const ke=D.toneMapping;D.toneMapping=Ci;const He=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),_t===!0&&Se.setGlobalState(D.clippingPlanes,G),il(w,W,G),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ot=0,Pt=F.length;ot<Pt;ot++){const wt=F[ot],{object:lt,geometry:Jt,material:ye,group:Cn}=wt;if(ye.side===Hi&&lt.layers.test(G.layers)){const Ze=ye.side;ye.side=bn,ye.needsUpdate=!0,ag(lt,W,G,Jt,ye,Cn),ye.side=Ze,ye.needsUpdate=!0,Ae=!0}}Ae===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve))}D.setRenderTarget(ge,Te,be),D.setClearColor(ae,fe),He!==void 0&&(G.viewport=He),D.toneMapping=ke}function il(w,F,W){const G=F.isScene===!0?F.overrideMaterial:null;for(let j=0,ve=w.length;j<ve;j++){const Me=w[j],{object:ge,geometry:Te,group:be}=Me;let ke=Me.material;ke.allowOverride===!0&&G!==null&&(ke=G),ge.layers.test(W.layers)&&ag(ge,F,W,Te,ke,be)}}function ag(w,F,W,G,j,ve){w.onBeforeRender(D,F,W,G,j,ve),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(D,F,W,G,w,ve),j.transparent===!0&&j.side===Hi&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,D.renderBufferDirect(W,F,G,j,w,ve),j.side=Or,j.needsUpdate=!0,D.renderBufferDirect(W,F,G,j,w,ve),j.side=Hi):D.renderBufferDirect(W,F,G,j,w,ve),w.onAfterRender(D,F,W,G,j,ve)}function rl(w,F,W){F.isScene!==!0&&(F=Ot);const G=C.get(w),j=T.state.lights,ve=T.state.shadowsArray,Me=j.state.version,ge=de.getParameters(w,j.state,ve,F,W,T.state.lightProbeGridArray),Te=de.getProgramCacheKey(ge);let be=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const ke=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=B.get(w.envMap||G.environment,ke),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",Rt),be=new Map,G.programs=be);let He=be.get(Te);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===Me)return cg(w,ge),He}else ge.uniforms=de.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,W,ge),w.onBeforeCompile(ge,D),He=de.acquireProgram(ge,Te),be.set(Te,He),G.uniforms=ge.uniforms;const Ae=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=Se.uniform),cg(w,ge),G.needsLights=C1(w),G.lightsStateVersion=Me,G.needsLights&&(Ae.ambientLightColor.value=j.state.ambient,Ae.lightProbe.value=j.state.probe,Ae.directionalLights.value=j.state.directional,Ae.directionalLightShadows.value=j.state.directionalShadow,Ae.spotLights.value=j.state.spot,Ae.spotLightShadows.value=j.state.spotShadow,Ae.rectAreaLights.value=j.state.rectArea,Ae.ltc_1.value=j.state.rectAreaLTC1,Ae.ltc_2.value=j.state.rectAreaLTC2,Ae.pointLights.value=j.state.point,Ae.pointLightShadows.value=j.state.pointShadow,Ae.hemisphereLights.value=j.state.hemi,Ae.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ae.spotLightMatrix.value=j.state.spotLightMatrix,Ae.spotLightMap.value=j.state.spotLightMap,Ae.pointShadowMatrix.value=j.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=He,G.uniformsList=null,He}function lg(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=_c.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function cg(w,F){const W=C.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function w1(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,G=w.length;W<G;W++){const j=w[W];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function b1(w,F,W,G,j){F.isScene!==!0&&(F=Ot),E.resetTextureUnits();const ve=F.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,ge=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ke.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,be=B.get(G.envMap||Me,Te),ke=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Pt=!!W.morphAttributes.color;let wt=Ci;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=D.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=lt!==void 0?lt.length:0,ye=C.get(G),Cn=T.state.lights;if(_t===!0&&(qe===!0||w!==O)){const dt=w===O&&G.id===H;Se.setState(G,w,dt)}let Ze=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Cn.state.version||ye.outputColorSpace!==ge||j.isBatchedMesh&&ye.batching===!1||!j.isBatchedMesh&&ye.batching===!0||j.isBatchedMesh&&ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ye.instancing===!1||!j.isInstancedMesh&&ye.instancing===!0||j.isSkinnedMesh&&ye.skinning===!1||!j.isSkinnedMesh&&ye.skinning===!0||j.isInstancedMesh&&ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ye.instancingMorph===!1&&j.morphTexture!==null||ye.envMap!==be||G.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==He||ye.morphTargets!==Ae||ye.morphNormals!==ot||ye.morphColors!==Pt||ye.toneMapping!==wt||ye.morphTargetsCount!==Jt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,ye.__version=G.version);let Vn=ye.currentProgram;Ze===!0&&(Vn=rl(G,F,j),k&&G.isNodeMaterial&&k.onUpdateProgram(G,Vn,ye));let mi=!1,sr=!1,Es=!1;const ct=Vn.getUniforms(),Dt=ye.uniforms;if(pe.useProgram(Vn.program)&&(mi=!0,sr=!0,Es=!0),G.id!==H&&(H=G.id,sr=!0),ye.needsLights){const dt=w1(T.state.lightProbeGridArray,j);ye.lightProbeGrid!==dt&&(ye.lightProbeGrid=dt,sr=!0)}if(mi||O!==w){pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ct.setValue(N,"projectionMatrix",w.projectionMatrix),ct.setValue(N,"viewMatrix",w.matrixWorldInverse);const ar=ct.map.cameraPosition;ar!==void 0&&ar.setValue(N,ft.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,sr=!0,Es=!0)}if(ye.needsLights&&(Cn.state.directionalShadowMap.length>0&&ct.setValue(N,"directionalShadowMap",Cn.state.directionalShadowMap,E),Cn.state.spotShadowMap.length>0&&ct.setValue(N,"spotShadowMap",Cn.state.spotShadowMap,E),Cn.state.pointShadowMap.length>0&&ct.setValue(N,"pointShadowMap",Cn.state.pointShadowMap,E)),j.isSkinnedMesh){ct.setOptional(N,j,"bindMatrix"),ct.setOptional(N,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(N,"boneTexture",dt.boneTexture,E))}j.isBatchedMesh&&(ct.setOptional(N,j,"batchingTexture"),ct.setValue(N,"batchingTexture",j._matricesTexture,E),ct.setOptional(N,j,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",j._indirectTexture,E),ct.setOptional(N,j,"batchingColorTexture"),j._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",j._colorsTexture,E));const or=W.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Ne.update(j,W,Vn),(sr||ye.receiveShadow!==j.receiveShadow)&&(ye.receiveShadow=j.receiveShadow,ct.setValue(N,"receiveShadow",j.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Dt.envMapIntensity.value=F.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=MU()),sr){if(ct.setValue(N,"toneMappingExposure",D.toneMappingExposure),ye.needsLights&&A1(Dt,Es),ve&&G.fog===!0&&q.refreshFogUniforms(Dt,ve),q.refreshMaterialUniforms(Dt,G,Le,Ye,T.state.transmissionRenderTarget[w.id]),ye.needsLights&&ye.lightProbeGrid){const dt=ye.lightProbeGrid;Dt.probesSH.value=dt.texture,Dt.probesMin.value.copy(dt.boundingBox.min),Dt.probesMax.value.copy(dt.boundingBox.max),Dt.probesResolution.value.copy(dt.resolution)}_c.upload(N,lg(ye),Dt,E)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_c.upload(N,lg(ye),Dt,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(N,"center",j.center),ct.setValue(N,"modelViewMatrix",j.modelViewMatrix),ct.setValue(N,"normalMatrix",j.normalMatrix),ct.setValue(N,"modelMatrix",j.matrixWorld),G.uniformsGroups!==void 0){const dt=G.uniformsGroups;for(let ar=0,Ts=dt.length;ar<Ts;ar++){const ug=dt[ar];$.update(ug,Vn),$.bind(ug,Vn)}}return Vn}function A1(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function C1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,W){const G=C.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),C.get(w.texture).__webglTexture=F,C.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const W=C.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const R1=N.createFramebuffer();this.setRenderTarget=function(w,F=0,W=0){I=w,V=F,Y=W;let G=null,j=!1,ve=!1;if(w){const ge=C.get(w);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),U.copy(w.viewport),X.copy(w.scissor),Z=w.scissorTest,pe.viewport(U),pe.scissor(X),pe.setScissorTest(Z),H=-1;return}else if(ge.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(ge.__hasExternalTextures)E.rebindTextures(w,C.get(w.texture).__webglTexture,C.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ke=w.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&C.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const be=C.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[F])?G=be[F][W]:G=be[F],j=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?G=C.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?G=be[W]:G=be,U.copy(w.viewport),X.copy(w.scissor),Z=w.scissorTest}else U.copy(le).multiplyScalar(Le).floor(),X.copy(Re).multiplyScalar(Le).floor(),Z=Ue;if(W!==0&&(G=R1),pe.bindFramebuffer(N.FRAMEBUFFER,G)&&pe.drawBuffers(w,G),pe.viewport(U),pe.scissor(X),pe.setScissorTest(Z),j){const ge=C.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,W)}else if(ve){const ge=F;for(let Te=0;Te<w.textures.length;Te++){const be=C.get(w.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,be.__webglTexture,W,ge)}}else if(w!==null&&W!==0){const ge=C.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,W)}H=-1},this.readRenderTargetPixels=function(w,F,W,G,j,ve,Me,ge=0){if(!(w&&w.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(N.FRAMEBUFFER,Te);try{const be=w.textures[ge],ke=be.format,He=be.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(ke)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(He)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&W>=0&&W<=w.height-j&&N.readPixels(F,W,G,j,L.convert(ke),L.convert(He),ve)}finally{const be=I!==null?C.get(I).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,G,j,ve,Me,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(F>=0&&F<=w.width-G&&W>=0&&W<=w.height-j){pe.bindFramebuffer(N.FRAMEBUFFER,Te);const be=w.textures[ge],ke=be.format,He=be.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),N.readPixels(F,W,G,j,L.convert(ke),L.convert(He),0);const ot=I!==null?C.get(I).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,ot);const Pt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await F2(N,Pt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.deleteBuffer(Ae),N.deleteSync(Pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,W=0){const G=Math.pow(2,-W),j=Math.floor(w.image.width*G),ve=Math.floor(w.image.height*G),Me=F!==null?F.x:0,ge=F!==null?F.y:0;E.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Me,ge,j,ve),pe.unbindTexture()};const P1=N.createFramebuffer(),D1=N.createFramebuffer();this.copyTextureToTexture=function(w,F,W=null,G=null,j=0,ve=0){let Me,ge,Te,be,ke,He,Ae,ot,Pt;const wt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(W!==null)Me=W.max.x-W.min.x,ge=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,ke=W.min.y,He=W.isBox3?W.min.z:0;else{const Dt=Math.pow(2,-j);Me=Math.floor(wt.width*Dt),ge=Math.floor(wt.height*Dt),w.isDataArrayTexture?Te=wt.depth:w.isData3DTexture?Te=Math.floor(wt.depth*Dt):Te=1,be=0,ke=0,He=0}G!==null?(Ae=G.x,ot=G.y,Pt=G.z):(Ae=0,ot=0,Pt=0);const lt=L.convert(F.format),Jt=L.convert(F.type);let ye;F.isData3DTexture?(E.setTexture3D(F,0),ye=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),ye=N.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),ye=N.TEXTURE_2D),pe.activeTexture(N.TEXTURE0),pe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Cn=pe.getParameter(N.UNPACK_ROW_LENGTH),Ze=pe.getParameter(N.UNPACK_IMAGE_HEIGHT),Vn=pe.getParameter(N.UNPACK_SKIP_PIXELS),mi=pe.getParameter(N.UNPACK_SKIP_ROWS),sr=pe.getParameter(N.UNPACK_SKIP_IMAGES);pe.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,be),pe.pixelStorei(N.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,He);const Es=w.isDataArrayTexture||w.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Dt=C.get(w),or=C.get(F),dt=C.get(Dt.__renderTarget),ar=C.get(or.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,dt.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Ts=0;Ts<Te;Ts++)Es&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,C.get(w).__webglTexture,j,He+Ts),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,C.get(F).__webglTexture,ve,Pt+Ts)),N.blitFramebuffer(be,ke,Me,ge,Ae,ot,Me,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||C.has(w)){const Dt=C.get(w),or=C.get(F);pe.bindFramebuffer(N.READ_FRAMEBUFFER,P1),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,D1);for(let dt=0;dt<Te;dt++)Es?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.__webglTexture,j,He+dt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dt.__webglTexture,j),ct?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,or.__webglTexture,ve,Pt+dt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,or.__webglTexture,ve),j!==0?N.blitFramebuffer(be,ke,Me,ge,Ae,ot,Me,ge,N.COLOR_BUFFER_BIT,N.NEAREST):ct?N.copyTexSubImage3D(ye,ve,Ae,ot,Pt+dt,be,ke,Me,ge):N.copyTexSubImage2D(ye,ve,Ae,ot,be,ke,Me,ge);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(ye,ve,Ae,ot,Pt,Me,ge,Te,lt,Jt,wt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,ve,Ae,ot,Pt,Me,ge,Te,lt,wt.data):N.texSubImage3D(ye,ve,Ae,ot,Pt,Me,ge,Te,lt,Jt,wt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,Ae,ot,Me,ge,lt,Jt,wt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,Ae,ot,wt.width,wt.height,lt,wt.data):N.texSubImage2D(N.TEXTURE_2D,ve,Ae,ot,Me,ge,lt,Jt,wt);pe.pixelStorei(N.UNPACK_ROW_LENGTH,Cn),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,Vn),pe.pixelStorei(N.UNPACK_SKIP_ROWS,mi),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,sr),ve===0&&F.generateMipmaps&&N.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(w){C.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){V=0,Y=0,I=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const H_={type:"change"},Zm={type:"start"},E1={type:"end"},$l=new l1,G_=new _r,TU=Math.cos(70*B2.DEG2RAD),Bt=new z,xn=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zd=1e-6;class wU extends A3{constructor(e,n=null){super(e,n),this.state=at.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new kr,this._lastTargetPosition=new z,this._quat=new kr().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new g_,this._sphericalDelta=new g_,this._scale=1,this._panOffset=new z,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new z,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AU.bind(this),this._onPointerDown=bU.bind(this),this._onPointerUp=CU.bind(this),this._onContextMenu=UU.bind(this),this._onMouseWheel=DU.bind(this),this._onKeyDown=LU.bind(this),this._onTouchStart=NU.bind(this),this._onTouchMove=IU.bind(this),this._onMouseDown=RU.bind(this),this._onMouseMove=PU.bind(this),this._interceptControlDown=FU.bind(this),this._interceptControlUp=OU.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(H_),this.update(),this.state=at.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Bt.copy(n).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),r<-Math.PI?r+=xn:r>Math.PI&&(r-=xn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($l.origin.copy(this.object.position),$l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($l.direction))<TU?this.object.lookAt(this.target):(G_.setFromNormalAndCoplanarPoint(this.object.up,this.target),$l.intersectPlane(G_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Zd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zd||this._lastTargetPosition.distanceToSquared(this.target)>Zd?(this.dispatchEvent(H_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Bt.setFromMatrixColumn(n,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,n){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(n,1):(Bt.setFromMatrixColumn(n,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Bt.copy(r).sub(this.target);let s=Bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function bU(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function AU(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function CU(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(E1),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function RU(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=at.DOLLY;break;case ho.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=at.ROTATE}break;case ho.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Zm)}function PU(t){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function DU(t){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(t.preventDefault(),this.dispatchEvent(Zm),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(E1))}function LU(t){this.enabled!==!1&&this._handleKeyDown(t)}function NU(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=at.TOUCH_ROTATE;break;case ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=at.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Zm)}function IU(t){switch(this._trackPointer(t),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=at.NONE}}function UU(t){this.enabled!==!1&&t.preventDefault()}function FU(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OU(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class kU extends $m{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new S3(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function n(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let y=0;y<5;y++)if(i(g,u,y))return!1;return!0}function i(c,u,h){for(let d=0,p=c.length;d<p;d++)if(c[d]!==u.getUint8(h+d))return!1;return!0}function r(c){const u=new DataView(c),h=u.getUint32(80,!0);let d,p,g,y=!1,v,f,m,x,M;for(let P=0;P<70;P++)u.getUint32(P,!1)==1129270351&&u.getUint8(P+4)==82&&u.getUint8(P+5)==61&&(y=!0,v=new Float32Array(h*3*3),f=u.getUint8(P+6)/255,m=u.getUint8(P+7)/255,x=u.getUint8(P+8)/255,M=u.getUint8(P+9)/255);const b=84,T=12*4+2,A=new fi,_=new Float32Array(h*3*3),R=new Float32Array(h*3*3),D=new tt;for(let P=0;P<h;P++){const k=b+P*T,V=u.getFloat32(k,!0),Y=u.getFloat32(k+4,!0),I=u.getFloat32(k+8,!0);if(y){const H=u.getUint16(k+48,!0);H&32768?(d=f,p=m,g=x):(d=(H&31)/31,p=(H>>5&31)/31,g=(H>>10&31)/31)}for(let H=1;H<=3;H++){const O=k+H*12,U=P*3*3+(H-1)*3;_[U]=u.getFloat32(O,!0),_[U+1]=u.getFloat32(O+4,!0),_[U+2]=u.getFloat32(O+8,!0),R[U]=V,R[U+1]=Y,R[U+2]=I,y&&(D.setRGB(d,p,g,yn),v[U]=D.r,v[U+1]=D.g,v[U+2]=D.b)}}return A.setAttribute("position",new Fn(_,3)),A.setAttribute("normal",new Fn(R,3)),y&&(A.setAttribute("color",new Fn(v,3)),A.hasColors=!0,A.alpha=M),A}function s(c){const u=new fi,h=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const y=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,v=new RegExp("vertex"+y+y+y,"g"),f=new RegExp("normal"+y+y+y,"g"),m=[],x=[],M=[],b=new z;let T,A=0,_=0,R=0;for(;(T=h.exec(c))!==null;){_=R;const D=T[0],P=(T=p.exec(D))!==null?T[1]:"";for(M.push(P);(T=d.exec(D))!==null;){let Y=0,I=0;const H=T[0];for(;(T=f.exec(H))!==null;)b.x=parseFloat(T[1]),b.y=parseFloat(T[2]),b.z=parseFloat(T[3]),I++;for(;(T=v.exec(H))!==null;)m.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),x.push(b.x,b.y,b.z),Y++,R++;I!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),Y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const k=_,V=R-_;u.userData.groupNames=M,u.addGroup(k,V,A),A++}return u.setAttribute("position",new di(m,3)),u.setAttribute("normal",new di(x,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return n(l)?r(l):s(o(e))}}function BU({open:t,title:e="3D Model",src:n,onClose:i}){const r=ee.useRef(null),s=ee.useMemo(()=>new kU,[]),o=t&&typeof n=="string"&&n.length>0;return ee.useEffect(()=>{if(!o)return;const a=r.current;if(!a)return;const l=new EU({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.outputColorSpace=yn,a.appendChild(l.domElement);const c=new J2;c.background=null;const u=new Yn(45,1,.01,100);u.position.set(.8,.5,1.2);const h=new wU(u,l.domElement);h.enableDamping=!0,h.dampingFactor=.08,h.minDistance=.2,h.maxDistance=8,c.add(new T3(16777215,.7));const d=new m_(16777215,.9);d.position.set(2,2,2),c.add(d);const p=new m_(16777215,.35);p.position.set(-2,1,-1),c.add(p);let g=null,y=null,v=!1;const f=()=>{const{width:M,height:b}=a.getBoundingClientRect();l.setSize(M,b,!1),u.aspect=M/Math.max(b,1),u.updateProjectionMatrix()},m=M=>{M.key==="Escape"&&(i==null||i())};window.addEventListener("resize",f),window.addEventListener("keydown",m),f(),s.load(n,M=>{if(v)return;M.computeVertexNormals(),M.center();const b=new m3({color:10134706,metalness:.25,roughness:.5});g=new Di(M,b),c.add(g);const T=new Io().setFromObject(g),A=T.getSize(new z),_=T.getCenter(new z),D=(Math.max(A.x,A.y,A.z)||1)*1.6;u.position.set(_.x+D,_.y+D*.7,_.z+D),h.target.copy(_),h.update()},void 0,()=>{});const x=()=>{h.update(),l.render(c,u),y=window.requestAnimationFrame(x)};return x(),()=>{var M,b,T,A,_,R;v=!0,window.removeEventListener("resize",f),window.removeEventListener("keydown",m),y&&window.cancelAnimationFrame(y),h.dispose(),g&&(c.remove(g),(b=(M=g.geometry)==null?void 0:M.dispose)==null||b.call(M),(A=(T=g.material)==null?void 0:T.dispose)==null||A.call(T)),l.dispose(),(R=(_=l.domElement)==null?void 0:_.remove)==null||R.call(_)}},[o,s,i,n]),t?S.jsxs("div",{className:"model-modal-backdrop",role:"dialog","aria-modal":"true","aria-label":e,children:[S.jsx("button",{className:"model-modal-close",type:"button",onClick:i,"aria-label":"Close 3D viewer",children:S.jsx(Kn,{size:20})}),S.jsxs("div",{className:"model-modal",children:[S.jsxs("div",{className:"model-modal-header",children:[S.jsx("h3",{children:e}),S.jsx("p",{children:"Drag to rotate, scroll to zoom."})]}),S.jsx("div",{className:"model-modal-canvas",ref:r})]}),S.jsx("button",{className:"model-modal-backdrop-hit",type:"button",onClick:i,"aria-label":"Close"})]}):null}const zU=({product:t,isOpen:e,onClose:n,instagramUrl:i,theme:r,onAddToCart:s})=>S.jsx(vs,{children:e&&t&&S.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},children:[S.jsx(fn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:r==="light"?"rgba(0, 0, 0, 0.4)":"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(8px)"}}),S.jsxs(fn.div,{initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},style:{position:"relative",background:r==="light"?"#fff":"#171717",color:r==="light"?"#000":"#fff",width:"100%",maxWidth:"1000px",borderRadius:"24px",overflow:"hidden",display:"flex",flexDirection:window.innerWidth<768?"column":"row",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",maxHeight:"90vh"},children:[S.jsx("button",{onClick:n,style:{position:"absolute",right:"1.5rem",top:"1.5rem",background:r==="light"?"#f3f4f6":"#262626",border:"none",borderRadius:"50%",width:"40px",height:"40px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},children:S.jsx(Kn,{size:20})}),S.jsx("div",{style:{background:r==="light"?"#f8fafc":"#262626",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem",borderRight:r==="light"?"1px solid #e2e8f0":"1px solid #333"},children:S.jsx(fn.img,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.1},src:t.image,alt:t.name,style:{width:"100%",height:"auto",borderRadius:"16px",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"}})}),S.jsxs("div",{style:{padding:"2.5rem",display:"flex",flexDirection:"column",overflowY:"auto"},children:[S.jsx("span",{style:{color:"#3b82f6",fontWeight:"700",fontSize:"0.8rem",textTransform:"uppercase",marginBottom:"0.5rem"},children:t.tag}),S.jsx("h2",{style:{fontSize:"2rem",fontWeight:"800",marginBottom:"0.5rem"},children:t.name}),S.jsx("div",{style:{fontSize:"2.5rem",fontWeight:"900",color:r==="light"?"#1e3a8a":"#60a5fa",margin:"1rem 0"},children:t.price}),S.jsx("p",{style:{lineHeight:"1.6",color:r==="light"?"#4b5563":"#a3a3a3",marginBottom:"2rem"},children:t.longDescription}),t.highlights&&S.jsx("div",{style:{marginBottom:"1.5rem"},children:S.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:t.highlights.map(o=>S.jsxs("li",{style:{fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[S.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#3b82f6"}})," ",o]},o))})}),S.jsxs("div",{style:{marginBottom:"2rem"},children:[S.jsx("h4",{style:{fontSize:"1rem",marginBottom:"1rem",fontWeight:"700"},children:"Features & Specs"}),S.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:t.specs.map(o=>S.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem"},children:[S.jsx(xu,{size:14,color:"#3b82f6"})," ",o]},o))})]}),S.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"2rem",padding:"1rem",background:r==="light"?"#f8fafc":"#262626",borderRadius:"16px"},children:[S.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[S.jsx(uS,{size:18,color:"#3b82f6"}),S.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"Fast Delivery"})]}),S.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[S.jsx(lS,{size:18,color:"#3b82f6"}),S.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"1 Year Support"})]}),S.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[S.jsx(_w,{size:18,color:"#3b82f6"}),S.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"700",textAlign:"center"},children:"Quality Test"})]})]}),S.jsxs("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:[S.jsxs("button",{onClick:()=>{s(t),n()},className:"primary-button",style:{padding:"1.25rem",borderRadius:"100px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",fontSize:"1rem",fontWeight:"700",border:"none",cursor:"pointer"},children:["Add to Cart ",S.jsx(Gc,{size:20})]}),S.jsx("p",{style:{fontSize:"0.75rem",textAlign:"center",opacity:.6},children:"Add to cart and checkout on WhatsApp"})]})]})]})]})}),VU="/assets/1599rs-Dz-93ukQ.jpeg",HU="/assets/robomitra-keychain-white-DxHzwwDs.jpeg",GU="/assets/robomitra-keychain-black-C712l2Az.jpeg",jU="/assets/heroma1in-C1v5yOQQ.jpeg",WU="/assets/mainsecond-CwSoDdWc.jpeg",j_="https://wa.me/917977473538",XU=[{icon:Jp,title:"Touch Interaction",desc:"Tap to change emotions and interact with your RoboMitra."},{icon:hb,title:"Cute Animated Eyes",desc:"Expressive digital eyes that show feelings like a real friend."},{icon:tm,title:"Sound & Talking",desc:"Built-in buzzer for sounds, beeps and robot talking."},{icon:Tw,title:"Mini Games",desc:"Play fun mini games like Flappy, Dino and more on OLED."},{icon:sS,title:"Rechargeable Battery",desc:"2-4 Hours backup with Type-C fast charging support."},{icon:em,title:"Robot Communication",desc:"Robots talk to each other using smart BLE technology."}],Qd=[{id:"r1",name:"RoboMitra",nameHighlight:"R1",tagline:"Smart Interactive Robot",price:"₹1,599",image:VU,whatsappMsg:"I want to buy RoboMitra R1",tag:"Flagship",description:"The premium portable model with battery backup and richer reactions.",longDescription:"RoboMitra R1 is the flagship companion with internal battery backup, polished finishing, expressive animations, and a more portable feel for people who want the full experience.",highlights:["Built-in 500mAh battery","USB-C charging","Advanced expression set","Premium matte finish"],specs:["Built-in Battery","2-4 Hours Backup","Interactive Eyes","USB-C Charging"]},{id:"keychain-white",name:"RoboMitra",nameHighlight:"Alex",tagline:"Pocket-Sized Companion Robot (White)",price:"₹999",image:HU,whatsappMsg:"I want to buy RoboMitra Alex",tag:"New Launch",description:"A pocket-sized white RoboMitra companion (Alex) with glowing expressive eyes.",longDescription:"RoboMitra Alex brings the companion robot look into a pocket-sized collectible form. It is designed for bags, keys, desks, and gifting with a glossy white body, rechargeable design, and animated blue display.",highlights:["Pocket-sized keychain design (Alex)","Animated blue display","Rechargeable build","Premium white finish"],specs:["Keychain Form","Animated Display","Rechargeable","Interactive","Pocket-Sized"]},{id:"keychain-black",name:"RoboMitra",nameHighlight:"Andy",tagline:"Pocket-Sized Companion Robot (Black)",price:"₹999",image:GU,whatsappMsg:"I want to buy RoboMitra Andy",tag:"New Variant",description:"A stealth black RoboMitra bag keychain (Andy) with a cyber-style animated screen.",longDescription:"RoboMitra Andy is the darker pocket companion variant with a textured black body, bright blue animated screen, rechargeable power, and a compact keyring form that is easy to carry anywhere.",highlights:["Stealth black textured body (Andy)","Animated blue screen","Portable keyring form","Rechargeable everyday carry"],specs:["Keychain Form","Animated Display","Rechargeable","Portable","Black Finish"]}],YU=[{icon:lS,title:"Proudly Made in India",desc:"Designed and built with pride"},{icon:xu,title:"Secure Payments",desc:"100% safe and secure checkout"},{icon:uS,title:"Fast Delivery",desc:"Quick delivery across India"},{icon:Yw,title:"24/7 Support",desc:"We're always here to help"}],qU=[{icon:cS,title:"Premium Quality",desc:"Components"},{icon:Jp,title:"Easy to Use",desc:"For Everyone"},{icon:tm,title:"Great Support",desc:"We are here for you"},{icon:xu,title:"Innovative",desc:"& Fun"}];function $U({onNavigate:t,onAddToCart:e,cartCount:n,onCartClick:i,searchQuery:r="",onSearchChange:s,user:o,onLoginClick:a}){const[l,c]=ee.useState(null),[u,h]=ee.useState(!1),d=Qd.filter(p=>{const g=r.toLowerCase();return p.name.toLowerCase().includes(g)||p.nameHighlight.toLowerCase().includes(g)||p.tagline.toLowerCase().includes(g)||p.description.toLowerCase().includes(g)});return S.jsxs("div",{className:"page-shell",children:[S.jsx(zU,{isOpen:!!l,product:l,onClose:()=>c(null),instagramUrl:j_,theme:"light",onAddToCart:e}),S.jsx(BU,{open:u,title:"RoboMitra 3D Model",src:"/models/lets-goo.stl",onClose:()=>h(!1)}),S.jsx(nm,{ariaLabel:"Primary",onNavigate:t,theme:"light",onToggleTheme:()=>{},isHome:!0,links:[],cartCount:n,onCartClick:i,searchQuery:r,onSearchChange:s,user:o,onLoginClick:a,products:Qd}),S.jsxs("main",{children:[S.jsx("section",{className:"rm-hero",id:"home",style:{padding:0,background:"#fff",width:"100%"},children:S.jsx($t,{delay:.05,children:S.jsx("a",{href:j_,target:"_blank",rel:"noreferrer",style:{display:"block",width:"100%"},children:S.jsx("img",{src:jU,alt:"Meet RoboMitra R1 - Smart. Cute. Interactive.",style:{width:"100%",height:"auto",display:"block"}})})})}),S.jsx("section",{className:"rm-features-section",id:"features",children:S.jsxs("div",{className:"rm-features-inner",children:[S.jsxs($t,{delay:.04,children:[S.jsx("p",{className:"rm-section-label",children:"Why Choose RoboMitra?"}),S.jsx("h2",{className:"rm-section-heading",children:"Packed with Smart Features"}),S.jsx("div",{className:"rm-section-divider"})]}),S.jsx("div",{className:"rm-features-grid",children:XU.map(({icon:p,title:g,desc:y},v)=>S.jsxs($t,{as:"article",className:"rm-feat-card",delay:.06*(v+1),children:[S.jsx("div",{className:"rm-feat-card-icon",children:S.jsx(p,{size:22})}),S.jsx("h3",{children:g}),S.jsx("p",{children:y})]},g))})]})}),S.jsx("section",{className:"rm-product-banner","aria-label":"RoboMitra specifications",style:{padding:0},children:S.jsx($t,{delay:.08,children:S.jsxs("div",{style:{position:"relative",width:"100%",overflow:"hidden"},children:[S.jsx("img",{src:WU,alt:"RoboMitra R1 Product Specifications",style:{width:"100%",height:"auto",display:"block"}}),S.jsx("button",{className:"rm-banner-overlay-btn",type:"button",onClick:()=>e(Qd[0]),title:"Add to Cart - RoboMitra R1","aria-label":"Add RoboMitra R1 to Cart",style:{border:"none",cursor:"pointer"}})]})})}),S.jsx("section",{className:"rm-explore-section",id:"products",children:S.jsxs("div",{className:"rm-explore-inner",children:[S.jsxs($t,{delay:.04,children:[S.jsx("h2",{className:"rm-explore-heading",children:"Explore Our Robots"}),S.jsx("div",{className:"rm-explore-divider"})]}),S.jsxs("div",{className:"rm-explore-layout",children:[S.jsx("div",{className:"rm-products-row",children:d.length===0?S.jsxs("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"48px 24px",color:"var(--text-secondary)"},children:[S.jsxs("p",{style:{fontSize:"1.05rem",fontWeight:700,margin:0},children:['No robots found matching "',r,'"']}),S.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginTop:"8px",marginBottom:0},children:'Try searching for "Alex" (white) or "Andy" (black)!'})]}):d.map((p,g)=>S.jsxs($t,{as:"article",className:"rm-product-card",delay:.08*(g+1),onClick:()=>c(p),children:[S.jsx("div",{className:"rm-product-img-wrap",children:S.jsx("img",{src:p.image,alt:`${p.name} ${p.nameHighlight}`})}),S.jsxs("div",{className:"rm-product-info",children:[S.jsxs("p",{className:"rm-product-name",children:[p.name," ",S.jsx("span",{children:p.nameHighlight})]}),S.jsx("p",{className:"rm-product-tagline",children:p.tagline}),S.jsx("p",{className:"rm-product-price",children:p.price}),S.jsx("button",{className:"rm-product-buy-btn",type:"button",onClick:y=>{y.stopPropagation(),e(p)},children:"Add to Cart"})]})]},p.nameHighlight))}),S.jsx($t,{className:"rm-trust-col",delay:.12,children:YU.map(({icon:p,title:g,desc:y})=>S.jsxs("div",{className:"rm-trust-item",children:[S.jsx("div",{className:"rm-trust-icon",children:S.jsx(p,{size:20})}),S.jsxs("div",{className:"rm-trust-text",children:[S.jsx("h4",{children:g}),S.jsx("p",{children:y})]})]},g))})]})]})}),S.jsx("section",{className:"rm-trust-strip","aria-label":"RoboMitra promises",children:S.jsx("div",{className:"rm-trust-strip-inner",children:qU.map(({icon:p,title:g,desc:y})=>S.jsxs("div",{className:"rm-strip-item",children:[S.jsx("div",{className:"rm-strip-icon",children:S.jsx(p,{size:20})}),S.jsx("h4",{children:g}),S.jsx("p",{children:y})]},g))})})]})]})}function KU({onNavigate:t,cartCount:e,onCartClick:n,user:i,onLoginClick:r}){return S.jsxs("div",{className:"page-shell support-shell",children:[S.jsx(nm,{ariaLabel:"Support navigation",onNavigate:t,theme:"light",onToggleTheme:()=>{},links:[],cartCount:e,onCartClick:n,user:i,onLoginClick:r}),S.jsxs("main",{style:{maxWidth:960,margin:"0 auto",padding:"48px 24px"},children:[S.jsxs($t,{className:"support-hero",delay:.04,children:[S.jsx("p",{className:"section-tag",style:{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--blue)",marginBottom:8},children:"Support and FAQ"}),S.jsx("h1",{style:{fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em",marginBottom:12},children:"Help & Frequently Asked Questions"}),S.jsx("p",{style:{fontSize:"1rem",color:"var(--text-muted)",lineHeight:1.7,maxWidth:560},children:"If you are facing charging, connection, touch, display, or power issues, this page covers the most common fixes."})]}),S.jsx($t,{delay:.08,style:{marginTop:36},children:S.jsxs("div",{style:{background:"var(--blue-light)",border:"1px solid #c7d7fd",borderRadius:16,padding:"24px",display:"flex",gap:16,alignItems:"flex-start",marginBottom:40},children:[S.jsx("div",{style:{width:44,height:44,borderRadius:10,background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",flexShrink:0},children:S.jsx(rd,{size:20})}),S.jsxs("div",{children:[S.jsx("p",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4},children:"Contact Support"}),S.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"var(--text)",marginBottom:8},children:"Need direct help?"}),S.jsxs("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[S.jsxs("a",{href:"mailto:robomitra@zohomail.in",style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.88rem",color:"var(--blue)",fontWeight:600},children:[S.jsx(rd,{size:14})," robomitra@zohomail.in"]}),S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.88rem",color:"var(--text-muted)"},children:[S.jsx(yw,{size:14})," Response: 24–48 hours"]})]})]})]})}),S.jsxs("section",{children:[S.jsx($t,{delay:.1,children:S.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,color:"var(--text)",marginBottom:24},children:"Quick Fixes"})}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16},children:JP.map(({icon:s,title:o,points:a},l)=>S.jsxs($t,{as:"article",delay:.05*(l+1),style:{border:"1px solid var(--border)",borderRadius:14,padding:22,background:"#fff",transition:"all 200ms"},children:[S.jsx("div",{style:{width:42,height:42,borderRadius:10,background:"var(--blue-light)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--blue)",marginBottom:12},children:S.jsx(s,{size:20})}),S.jsx("h3",{style:{fontSize:"0.92rem",fontWeight:700,color:"var(--text)",marginBottom:10},children:o}),S.jsx("ul",{style:{paddingLeft:16,display:"flex",flexDirection:"column",gap:4},children:a.map(c=>S.jsx("li",{style:{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.5},children:c},c))})]},o))})]}),S.jsx($t,{delay:.12,style:{marginTop:40},children:S.jsxs("div",{style:{background:"var(--bg-soft)",border:"1px solid var(--border)",borderRadius:16,padding:24,display:"flex",gap:16,alignItems:"flex-start"},children:[S.jsx("div",{style:{width:44,height:44,borderRadius:10,background:"var(--blue-light)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--blue)",flexShrink:0},children:S.jsx(Mb,{size:20})}),S.jsxs("div",{children:[S.jsx("p",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4},children:"Need More Help?"}),S.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"var(--text)",marginBottom:8},children:"Email us with your issue, photos or videos. We will help you ASAP."}),S.jsxs("a",{href:"mailto:robomitra@zohomail.in",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 18px",background:"var(--blue)",color:"#fff",borderRadius:8,fontSize:"0.88rem",fontWeight:700,textDecoration:"none"},children:[S.jsx(rd,{size:15})," robomitra@zohomail.in"]})]})]})})]})]})}const zs={main:{options:[{label:"📦 Where is my order?",text:"Where is my order?",value:"order"},{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"🔧 How to get support?",text:"How to get support?",value:"support"},{label:"✨ What is RoboMitra?",text:"What is RoboMitra?",value:"about"}]},order:{response:"Once your order is shipped, you will receive a tracking link via email (usually within 24-48 hours) to monitor your delivery. Custom orders may take 3-5 business days for assembly and testing before dispatch.",options:[{label:"🗓️ How many days to deliver?",text:"How many days to deliver?",value:"delivery_time"},{label:"📍 Can I change delivery address?",text:"Can I change delivery address?",value:"change_address"},{label:"💬 Talk to a human agent",text:"Talk to a human agent",value:"human_agent"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},delivery_time:{response:`Usually, shipping takes:
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
This helps our engineering team diagnose and solve your issue faster!`,options:[{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},about:{response:"RoboMitra is a cyber-style desktop companion robot and bag keychain series. They feature bright animated screen reactions, touch interactivity, rechargeable battery, and high-quality premium body finishes. Perfect for desks, setups, and backpacks!",options:[{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"🔧 Troubleshooting / support?",text:"Troubleshooting / support?",value:"support"},{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},human_agent:{response:"I have queued your query for a human team member. Please send us a message on Instagram DM or email us at robomitra@zohomail.in with your details and we'll reply right away!",options:[{label:"↩️ Back to main menu",text:"Back to main menu",value:"main"}]},hello:{response:"Hello there! 😊 How can I help you today? Please choose one of the options below or ask your question directly!",options:[{label:"📦 Where is my order?",text:"Where is my order?",value:"order"},{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"🔧 How to get support?",text:"How to get support?",value:"support"},{label:"✨ What is RoboMitra?",text:"What is RoboMitra?",value:"about"}]},fallback:{response:"I'm not sure I understand that query. 🤖 I am a helper assistant! Try asking about 'order tracking', 'how to buy', 'product specs', or 'support', or click one of the quick options below.",options:[{label:"📦 Where is my order?",text:"Where is my order?",value:"order"},{label:"🛍️ How to place an order?",text:"How to place an order?",value:"place"},{label:"🔧 How to get support?",text:"How to get support?",value:"support"},{label:"✨ What is RoboMitra?",text:"What is RoboMitra?",value:"about"}]}};function ZU(){var v;const[t,e]=ee.useState(!1),[n,i]=ee.useState("main"),[r,s]=ee.useState([{id:"greeting",sender:"ai",text:"Hello! 👋 I'm your RoboMitra AI Assistant. How can I help you today?",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[o,a]=ee.useState(""),[l,c]=ee.useState(!1),u=ee.useRef(null),h=async f=>{var m;try{const x=`You are the official RoboMitra AI Assistant, a friendly and smart companion chatbot for the RoboMitra website.
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
- If asked about ordering, always encourage them to click the buttons or message us on Instagram DM.`,M=((m=f[f.length-1])==null?void 0:m.text)||"Hello",b=f.slice(-5,-1).map(D=>`${D.sender==="user"?"User":"Assistant"}: ${D.text}`).join(`
`),T=b?`${b}
User: ${M}`:M,A=`https://text.pollinations.ai/${encodeURIComponent(T)}?system=${encodeURIComponent(x)}&model=openai`,_=await fetch(A);if(!_.ok)throw new Error("API call failed");return await _.text()}catch(x){return console.error("AI Assistant API error:",x),null}},d=f=>{const m=f.toLowerCase();return m.includes("hello")||m.includes("hi")||m.includes("hey")||m.includes("greetings")||m.includes("yo")?"hello":m.includes("buy")||m.includes("place")||m.includes("purchase")||m.includes("shop")||m.includes("how to order")?m.includes("price")||m.includes("cost")||m.includes("how much")||m.includes("catalog")?"pricing":m.includes("custom")||m.includes("design")||m.includes("color")?"customization":"place":m.includes("price")||m.includes("cost")||m.includes("how much")?"pricing":m.includes("custom")||m.includes("design")||m.includes("color")?"customization":m.includes("order")||m.includes("track")||m.includes("ship")||m.includes("delivery")?m.includes("day")||m.includes("how long")||m.includes("time")||m.includes("when")?"delivery_time":m.includes("address")||m.includes("location")||m.includes("change")?"change_address":"order":m.includes("day")||m.includes("how long")||m.includes("time")||m.includes("when")?"delivery_time":m.includes("address")||m.includes("location")||m.includes("change")?"change_address":m.includes("battery")||m.includes("charge")||m.includes("power")||m.includes("cable")||m.includes("usb")?"battery_guide":m.includes("reset")||m.includes("restart")||m.includes("pinhole")||m.includes("reboot")?"reset_guide":m.includes("email")||m.includes("contact")||m.includes("write")||m.includes("message")?"email_contact":m.includes("support")||m.includes("help")||m.includes("fix")||m.includes("broken")?"support":m.includes("what")||m.includes("robomitra")||m.includes("concept")||m.includes("who")||m.includes("features")?"about":m.includes("human")||m.includes("agent")||m.includes("person")||m.includes("live chat")?"human_agent":"fallback"},p=async(f,m)=>{if(f==="main"){const T={id:Math.random().toString(),sender:"user",text:m,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(A=>[...A,T]),c(!0),setTimeout(()=>{const A={id:Math.random().toString(),sender:"ai",text:"Returned to main menu. How can I help you?",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(_=>[..._,A]),i("main"),c(!1)},800);return}const x={id:Math.random().toString(),sender:"user",text:m,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},M=[...r,x];s(M),c(!0);const b=await h(M);if(b){const T={id:Math.random().toString(),sender:"ai",text:b,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(A=>[...A,T]),i(f),c(!1)}else{const T=zs[f]||zs.main,A={id:Math.random().toString(),sender:"ai",text:T.response||"How can I help you?",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(_=>[..._,A]),i(f),c(!1)}},g=async f=>{if(!f.trim())return;const m={id:Math.random().toString(),sender:"user",text:f,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},x=[...r,m];s(x),a(""),c(!0);const M=await h(x);if(M){const b={id:Math.random().toString(),sender:"ai",text:M,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(T=>[...T,b]),c(!1)}else{const b=d(f),T=zs[b],A={id:Math.random().toString(),sender:"ai",text:T.response||zs.fallback.response,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};s(_=>[..._,A]),i(b),c(!1)}};ee.useEffect(()=>{var f;(f=u.current)==null||f.scrollIntoView({behavior:"smooth"})},[r,l]);const y=((v=zs[n])==null?void 0:v.options)||zs.main.options;return S.jsxs("div",{className:"ai-assistant-wrapper",children:[S.jsx("button",{className:`ai-fab ${t?"open":""}`,onClick:()=>e(!t),"aria-label":"Toggle AI Assistant",children:S.jsx(vs,{mode:"wait",children:t?S.jsx(fn.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:S.jsx(Kn,{size:24})},"close"):S.jsxs(fn.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.2},className:"ai-fab-icon-inner",children:[S.jsx(Xh,{size:24}),S.jsx("span",{className:"ai-fab-badge"})]},"open")})}),S.jsx(vs,{children:t&&S.jsxs(fn.div,{className:"ai-chat-panel",initial:{opacity:0,y:50,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:50,scale:.9},transition:{type:"spring",stiffness:300,damping:25},children:[S.jsxs("div",{className:"ai-chat-header",children:[S.jsxs("div",{className:"ai-header-left",children:[S.jsxs("div",{className:"ai-header-avatar",children:[S.jsx(Xh,{size:20,className:"ai-avatar-icon"}),S.jsx("span",{className:"ai-avatar-status"})]}),S.jsxs("div",{children:[S.jsx("h4",{className:"ai-header-title",children:"RoboMitra Assistant"}),S.jsx("p",{className:"ai-header-subtitle",children:"Online • Powered by AI"})]})]}),S.jsx("button",{className:"ai-header-close",onClick:()=>e(!1),"aria-label":"Close Assistant",children:S.jsx(Kn,{size:18})})]}),S.jsx("div",{className:"ai-chat-body",children:S.jsxs("div",{className:"ai-messages-list",children:[r.map(f=>S.jsx("div",{className:`ai-message-bubble-wrapper ${f.sender==="user"?"user":"ai"}`,children:S.jsxs("div",{className:"ai-message-bubble",children:[S.jsx("p",{className:"ai-message-text",children:f.text}),S.jsx("span",{className:"ai-message-time",children:f.time})]})},f.id)),l&&S.jsx("div",{className:"ai-message-bubble-wrapper ai",children:S.jsx("div",{className:"ai-message-bubble typing",children:S.jsxs("div",{className:"ai-typing-indicator",children:[S.jsx("span",{}),S.jsx("span",{}),S.jsx("span",{})]})})}),S.jsx("div",{ref:u})]})}),S.jsxs("div",{className:"ai-chat-faqs",children:[S.jsx("p",{className:"ai-faq-label",children:"Suggested Questions:"}),S.jsx("div",{className:"ai-faq-grid",children:y.map(f=>S.jsx("button",{className:"ai-faq-btn",onClick:()=>p(f.value,f.text||f.label),disabled:l,children:f.label},f.value))})]}),S.jsxs("form",{className:"ai-chat-input-form",onSubmit:f=>{f.preventDefault(),o.trim()&&g(o)},children:[S.jsx("input",{type:"text",placeholder:"Ask something...",className:"ai-chat-input",value:o,onChange:f=>a(f.target.value),disabled:l}),S.jsx("button",{type:"submit",className:"ai-chat-send-btn",disabled:!o.trim()||l,"aria-label":"Send message",children:S.jsx(ob,{size:16})})]})]})})]})}function QU({isOpen:t,onClose:e,cartItems:n,onUpdateQuantity:i,onRemoveItem:r,onClearCart:s,whatsappUrl:o,user:a,onLoginClick:l}){var p;const c=n.reduce((g,y)=>g+parseFloat(y.price.replace(/[^\d]/g,""))*y.quantity,0),u=150,h=g=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(g),d=()=>{if(n.length===0)return;const g=c+u,y=n.map(m=>`  • ${m.quantity}x ${m.name} ${m.nameHighlight||""} — ${m.price} each`).join(`
`);let v=`Hello RoboMitra! 👋 I would like to place an order.

`;if(v+=`🛒 *Order Details:*
${y}

`,v+=`💵 *Subtotal:* ${h(c)}
`,v+=`🚚 *Delivery Charges:* ${h(u)}
`,v+=`💰 *Total Amount:* ${h(g)}
`,a){const m=a.name||`${a.firstName||""} ${a.lastName||""}`.trim();v+=`
👤 *Customer Name:* ${m}
`,v+=`📦 *Delivery Address:*
  ${a.address}
`}else v+=`
📦 *(Please share your name and delivery address so we can process the order)*
`;v+=`
Please confirm my order and share payment details! 😊`;const f=`${o}?text=${encodeURIComponent(v)}`;window.open(f,"_blank","noopener,noreferrer")};return S.jsx(vs,{children:t&&S.jsxs("div",{className:"cart-overlay-wrapper",children:[S.jsx(fn.div,{className:"cart-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e}),S.jsxs(fn.div,{className:"cart-drawer",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",stiffness:350,damping:30},children:[S.jsxs("div",{className:"cart-header",children:[S.jsxs("div",{className:"cart-header-title",children:[S.jsx($h,{size:20,className:"cart-icon-main"}),S.jsxs("h3",{children:["Your Cart (",n.reduce((g,y)=>g+y.quantity,0),")"]})]}),S.jsx("button",{className:"cart-close-btn",onClick:e,"aria-label":"Close cart",children:S.jsx(Kn,{size:20})})]}),S.jsx("div",{className:"cart-items-body",children:n.length===0?S.jsxs("div",{className:"cart-empty-state",children:[S.jsx($h,{size:48,className:"cart-empty-icon"}),S.jsx("p",{children:"Your cart is empty"}),S.jsx("button",{className:"cart-shop-now-btn",onClick:e,children:"Shop Our Products"})]}):S.jsx("div",{className:"cart-items-list",children:n.map(g=>S.jsxs("div",{className:"cart-item",children:[S.jsx("img",{src:g.image,alt:g.name,className:"cart-item-img"}),S.jsxs("div",{className:"cart-item-details",children:[S.jsxs("div",{className:"cart-item-header",children:[S.jsxs("h4",{children:[g.name," ",g.nameHighlight]}),S.jsx("button",{className:"cart-item-remove",onClick:()=>r(g.id),"aria-label":"Remove item",children:S.jsx(vb,{size:14})})]}),S.jsx("p",{className:"cart-item-price",children:g.price}),S.jsxs("div",{className:"cart-item-actions",children:[S.jsxs("div",{className:"cart-qty-selector",children:[S.jsx("button",{onClick:()=>i(g.id,-1),"aria-label":"Decrease",children:S.jsx(Gw,{size:12})}),S.jsx("span",{children:g.quantity}),S.jsx("button",{onClick:()=>i(g.id,1),"aria-label":"Increase",children:S.jsx(eb,{size:12})})]}),S.jsx("span",{className:"cart-item-total",children:h(parseFloat(g.price.replace(/[^\d]/g,""))*g.quantity)})]})]})]},g.id))})}),n.length>0&&S.jsxs("div",{className:"cart-footer",children:[a?S.jsxs("div",{className:"cart-shipping-success",children:[S.jsx(Yh,{size:16,style:{flexShrink:0}}),S.jsxs("span",{children:[S.jsx("strong",{children:a.firstName||((p=a.name)==null?void 0:p.split(" ")[0])})," — delivering to:"," ",a.address.split(",")[0],"…"]})]}):S.jsxs("div",{className:"cart-shipping-warning",children:[S.jsx(mw,{size:16,style:{flexShrink:0}}),S.jsxs("span",{children:[S.jsx("button",{onClick:l,style:{background:"none",border:"none",color:"#b45309",fontWeight:700,cursor:"pointer",textDecoration:"underline",padding:0,fontSize:"inherit"},children:"Add your name & address"})," ","to include delivery details in your WhatsApp order."]})]}),S.jsxs("div",{className:"cart-summary-row",style:{fontSize:"0.92rem",color:"var(--text-secondary)",fontWeight:500},children:[S.jsx("span",{children:"Subtotal"}),S.jsx("span",{children:h(c)})]}),S.jsxs("div",{className:"cart-summary-row",style:{fontSize:"0.92rem",color:"var(--text-secondary)",fontWeight:500},children:[S.jsx("span",{children:"Delivery Charges"}),S.jsx("span",{children:h(u)})]}),S.jsxs("div",{className:"cart-summary-row",style:{marginTop:"4px",paddingTop:"12px",borderTop:"1px dashed var(--border)"},children:[S.jsx("span",{children:"Total"}),S.jsx("span",{className:"cart-subtotal-price",children:h(c+u)})]}),S.jsx("p",{className:"cart-shipping-notice",children:"Orders are processed via WhatsApp. A flat delivery charge of ₹150 applies."}),S.jsxs("button",{className:"cart-checkout-btn",onClick:d,children:["Proceed to Checkout on WhatsApp",S.jsx(Gc,{size:18})]}),S.jsx("button",{className:"cart-clear-btn",onClick:s,children:"Clear All Items"})]})]})]})})}const JU="robomitra_customer";function W_(t){localStorage.setItem(JU,JSON.stringify(t))}function eF({isOpen:t,onClose:e,user:n,onSaveUser:i}){var v,f,m,x;const[r,s]=ee.useState(n?"profile":"form"),[o,a]=ee.useState({firstName:"",lastName:"",address:""}),[l,c]=ee.useState({}),[u,h]=ee.useState(!1);ee.useEffect(()=>{var M,b;t&&(n?(s("profile"),a({firstName:n.firstName||((M=n.name)==null?void 0:M.split(" ")[0])||"",lastName:n.lastName||((b=n.name)==null?void 0:b.split(" ").slice(1).join(" "))||"",address:n.address||""})):(s("form"),a({firstName:"",lastName:"",address:""})),c({}),h(!1))},[t,n]);function d(){const M={};return o.firstName.trim()||(M.firstName="First name is required"),o.lastName.trim()||(M.lastName="Surname is required"),o.address.trim()||(M.address="Delivery address is required"),M}function p(M){M.preventDefault();const b=d();if(Object.keys(b).length){c(b);return}const T={firstName:o.firstName.trim(),lastName:o.lastName.trim(),name:`${o.firstName.trim()} ${o.lastName.trim()}`,address:o.address.trim()};W_(T),i(T),h(!0),s("profile")}function g(){h(!1),s("form")}function y(){W_(null),i(null),a({firstName:"",lastName:"",address:""}),s("form")}return S.jsx(vs,{children:t&&S.jsxs("div",{className:"login-modal-backdrop",children:[S.jsx(fn.div,{className:"login-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e}),S.jsxs(fn.div,{className:"login-modal-container",initial:{scale:.93,opacity:0,y:18},animate:{scale:1,opacity:1,y:0},exit:{scale:.93,opacity:0,y:18},transition:{duration:.22,ease:[.4,0,.2,1]},children:[S.jsx("button",{className:"login-modal-close",onClick:e,"aria-label":"Close",children:S.jsx(Kn,{size:18})}),r==="form"&&S.jsxs("form",{onSubmit:p,className:"login-form",noValidate:!0,children:[S.jsxs("div",{className:"login-form-header",children:[S.jsx("div",{className:"login-header-icon",children:S.jsx(lc,{size:20})}),S.jsx("h3",{children:n?"Edit Your Details":"Your Details"}),S.jsx("p",{children:"We need your name and address so we can include it in your WhatsApp order."})]}),S.jsxs("div",{className:"login-form-body",children:[S.jsxs("div",{className:"cdm-row",children:[S.jsxs("div",{className:"login-input-group",children:[S.jsxs("label",{htmlFor:"cdm-fname",children:[S.jsx(lc,{size:13})," First Name"]}),S.jsx("input",{id:"cdm-fname",type:"text",placeholder:"e.g. Rohan",value:o.firstName,onChange:M=>a({...o,firstName:M.target.value}),autoComplete:"given-name"}),l.firstName&&S.jsx("span",{className:"login-field-error",children:l.firstName})]}),S.jsxs("div",{className:"login-input-group",children:[S.jsxs("label",{htmlFor:"cdm-lname",children:[S.jsx(lc,{size:13})," Surname"]}),S.jsx("input",{id:"cdm-lname",type:"text",placeholder:"e.g. Sharma",value:o.lastName,onChange:M=>a({...o,lastName:M.target.value}),autoComplete:"family-name"}),l.lastName&&S.jsx("span",{className:"login-field-error",children:l.lastName})]})]}),S.jsxs("div",{className:"login-input-group",children:[S.jsxs("label",{htmlFor:"cdm-addr",children:[S.jsx(S0,{size:13})," Delivery Address"]}),S.jsx("textarea",{id:"cdm-addr",rows:3,placeholder:"Flat no, Street, City, State, Pincode",value:o.address,onChange:M=>a({...o,address:M.target.value}),autoComplete:"street-address"}),l.address&&S.jsx("span",{className:"login-field-error",children:l.address})]})]}),S.jsxs("div",{className:"login-form-footer",children:[S.jsxs("button",{type:"submit",className:"login-save-btn",children:[S.jsx(Yh,{size:15})," Save Details"]}),n&&S.jsx("button",{type:"button",className:"login-cancel-btn",onClick:()=>s("profile"),children:"Cancel"})]})]}),r==="profile"&&n&&S.jsxs("div",{className:"login-profile-card",children:[u&&S.jsxs("div",{className:"login-success-banner",children:[S.jsx(Yh,{size:15})," Details saved! Your order will include these."]}),S.jsxs("div",{className:"login-profile-header",children:[S.jsx("div",{className:"login-profile-avatar",children:((f=(v=n.firstName)==null?void 0:v.charAt(0))==null?void 0:f.toUpperCase())||((x=(m=n.name)==null?void 0:m.charAt(0))==null?void 0:x.toUpperCase())||"?"}),S.jsx("h3",{children:n.name||`${n.firstName} ${n.lastName}`}),S.jsx("p",{className:"login-profile-tag",children:"RoboMitra Customer"})]}),S.jsxs("div",{className:"login-profile-body",children:[S.jsxs("div",{className:"login-profile-detail",children:[S.jsx("span",{className:"detail-label",children:"Name"}),S.jsxs("span",{className:"detail-val",children:[n.firstName," ",n.lastName]})]}),S.jsxs("div",{className:"login-profile-detail",children:[S.jsx("span",{className:"detail-label",children:"Delivery Address"}),S.jsxs("div",{className:"detail-val address-box",children:[S.jsx(S0,{size:14,className:"address-pin-icon"}),S.jsx("p",{children:n.address})]})]})]}),S.jsxs("div",{className:"login-profile-footer",children:[S.jsxs("button",{type:"button",className:"login-edit-btn",onClick:g,children:[S.jsx($w,{size:14})," Edit Details"]}),S.jsxs("button",{type:"button",className:"login-logout-btn",onClick:y,children:[S.jsx(Kn,{size:14})," Clear"]})]})]})]},r)]})})}function tF(){const[t,e]=ee.useState(!1);return S.jsxs("div",{className:"contact-float-root",children:[S.jsx(vs,{children:t&&S.jsxs(fn.div,{className:"contact-float-panel",initial:{opacity:0,scale:.85,y:12},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.85,y:12},transition:{duration:.2,ease:[.4,0,.2,1]},children:[S.jsxs("div",{className:"cfp-header",children:[S.jsxs("div",{className:"cfp-header-info",children:[S.jsx("div",{className:"cfp-avatar",children:"R"}),S.jsxs("div",{children:[S.jsx("p",{className:"cfp-name",children:"RoboMitra"}),S.jsxs("span",{className:"cfp-status",children:[S.jsx("span",{className:"cfp-dot"}),"Typically replies instantly"]})]})]}),S.jsx("button",{className:"cfp-close",onClick:()=>e(!1),"aria-label":"Close",children:S.jsx(Kn,{size:16})})]}),S.jsx("div",{className:"cfp-body",children:S.jsx("p",{className:"cfp-greeting",children:"👋 Hi there! Got a question about RoboMitra? Reach us directly on WhatsApp or Instagram — we're happy to help!"})}),S.jsxs("div",{className:"cfp-buttons",children:[S.jsxs("a",{href:"https://wa.me/917977473538",target:"_blank",rel:"noopener noreferrer",className:"cfp-btn cfp-btn-whatsapp",children:[S.jsx(qh,{size:16}),"Chat on WhatsApp"]}),S.jsxs("a",{href:"https://instagram.com/Robomitra.tech",target:"_blank",rel:"noopener noreferrer",className:"cfp-btn cfp-btn-instagram",children:[S.jsx(aS,{size:16}),"Ask on Instagram"]})]}),S.jsx("p",{className:"cfp-footer",children:"@Robomitra.tech  ·  +91 79774 73538"})]})}),S.jsx(fn.button,{className:"contact-float-trigger",onClick:()=>e(n=>!n),"aria-label":"Ask a question",whileHover:{scale:1.08},whileTap:{scale:.95},children:S.jsx(vs,{mode:"wait",children:t?S.jsx(fn.span,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.15},children:S.jsx(Kn,{size:22})},"x"):S.jsxs(fn.span,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.15},style:{display:"flex",alignItems:"center",gap:6},children:[S.jsx(Vw,{size:20}),S.jsx("span",{className:"contact-float-label",children:"Ask a question"})]},"msg")})})]})}function nF(){const[t,e]=ee.useState(window.location.pathname),[n,i]=ee.useState(()=>{try{const T=localStorage.getItem("robomitra_cart");return T?JSON.parse(T):[]}catch{return[]}}),[r,s]=ee.useState(()=>{try{const T=localStorage.getItem("robomitra_customer");return T?JSON.parse(T):null}catch{return null}}),[o,a]=ee.useState(!1),[l,c]=ee.useState(!1),[u,h]=ee.useState("");ee.useEffect(()=>{localStorage.setItem("robomitra_cart",JSON.stringify(n))},[n]),ee.useEffect(()=>{r?localStorage.setItem("robomitra_customer",JSON.stringify(r)):localStorage.removeItem("robomitra_customer")},[r]);const d=T=>{s(T),T&&c(!1)},p=T=>{i(A=>A.find(R=>R.id===T.id)?A.map(R=>R.id===T.id?{...R,quantity:R.quantity+1}:R):[...A,{...T,quantity:1}]),a(!0)},g=(T,A)=>{i(_=>_.map(R=>R.id===T?{...R,quantity:R.quantity+A}:R).filter(R=>R.quantity>0))},y=T=>{i(A=>A.filter(_=>_.id!==T))},v=()=>{i([])};ee.useEffect(()=>{document.documentElement.setAttribute("data-theme","light")},[]);const f=T=>{if(T.startsWith("#")){if(window.location.pathname!=="/"){window.history.pushState({},"","/"),e("/"),requestAnimationFrame(()=>{const _=document.querySelector(T);_==null||_.scrollIntoView({behavior:"smooth"})});return}const A=document.querySelector(T);A==null||A.scrollIntoView({behavior:"smooth"});return}T!==window.location.pathname&&(window.history.pushState({},"",T),e(T),window.scrollTo({top:0,behavior:"smooth"}))};ee.useEffect(()=>{const T=()=>e(window.location.pathname);return window.addEventListener("popstate",T),()=>window.removeEventListener("popstate",T)},[]);const m=n.reduce((T,A)=>T+A.quantity,0),x={onNavigate:f,cartCount:m,onCartClick:()=>a(!0),onLoginClick:()=>c(!0),user:r,searchQuery:u,onSearchChange:h};let M;return t==="/support"?M=S.jsx(KU,{...x}):t==="/about"||t==="/aboutus"?M=S.jsx(t2,{...x}):M=S.jsx($U,{...x,onAddToCart:p}),S.jsxs(S.Fragment,{children:[M,S.jsx(ZU,{}),S.jsx(tF,{}),S.jsx(eF,{isOpen:l,onClose:()=>c(!1),user:r,onSaveUser:d}),S.jsx(QU,{isOpen:o,onClose:()=>a(!1),cartItems:n,onUpdateQuantity:g,onRemoveItem:y,onClearCart:v,whatsappUrl:"https://wa.me/917977473538",user:r,onLoginClick:()=>c(!0)})]})}Jd.createRoot(document.getElementById("root")).render(S.jsx(q1.StrictMode,{children:S.jsx(nF,{})}));
