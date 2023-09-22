(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=window,G=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),Z=new WeakMap;let mt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(e,t))}return t}toString(){return this.cssText}};const $t=o=>new mt(typeof o=="string"?o:o+"",void 0,at),gt=(o,t)=>{G?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},J=G?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return $t(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const T=window,Q=T.trustedTypes,ft=Q?Q.emptyScript:"",X=T.reactiveElementPolyfillSupport,W={toAttribute(o,t){switch(t){case Boolean:o=o?ft:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ht=(o,t)=>t!==o&&(t==t||o==o),R={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ht},q="finalized";let b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=R){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||R}static finalize(){if(this.hasOwnProperty(q))return!1;this[q]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return gt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=R){var s;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:W).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:W;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};b[q]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},X==null||X({ReactiveElement:b}),((D=T.reactiveElementVersions)!==null&&D!==void 0?D:T.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const M=window,C=M.trustedTypes,Y=C?C.createPolicy("lit-html",{createHTML:o=>o}):void 0,K="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,ct="?"+$,_t=`<${ct}>`,y=document,k=()=>y.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",dt=Array.isArray,yt=o=>dt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",B=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,f=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,st=/"/g,ut=/^(?:script|style|textarea|title)$/i,At=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),I=At(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ot=new WeakMap,_=y.createTreeWalker(y,129,null,!1);function pt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const bt=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=w;for(let h=0;h<e;h++){const l=o[h];let a,c,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===w?c[1]==="!--"?n=tt:c[1]!==void 0?n=et:c[2]!==void 0?(ut.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=f):c[3]!==void 0&&(n=f):n===f?c[0]===">"?(n=s??w,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=c[3]===void 0?f:c[3]==='"'?st:it):n===st||n===it?n=f:n===tt||n===et?n=w:(n=f,s=void 0);const v=n===f&&o[h+1].startsWith("/>")?" ":"";r+=n===w?l+_t:d>=0?(i.push(a),l.slice(0,d)+K+l.slice(d)+$+v):l+$+(d===-2?(i.push(void 0),h):v)}return[pt(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const h=t.length-1,l=this.parts,[a,c]=bt(t,e);if(this.el=N.createElement(a,i),_.currentNode=this.el.content,e===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(s=_.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const p of s.getAttributeNames())if(p.endsWith(K)||p.startsWith($)){const v=c[n++];if(d.push(p),v!==void 0){const vt=s.getAttribute(v.toLowerCase()+K).split($),U=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:U[2],strings:vt,ctor:U[1]==="."?Et:U[1]==="?"?wt:U[1]==="@"?xt:L})}else l.push({type:6,index:r})}for(const p of d)s.removeAttribute(p)}if(ut.test(s.tagName)){const d=s.textContent.split($),p=d.length-1;if(p>0){s.textContent=C?C.emptyScript:"";for(let v=0;v<p;v++)s.append(d[v],k()),_.nextNode(),l.push({type:2,index:++r});s.append(d[p],k())}}}else if(s.nodeType===8)if(s.data===ct)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)l.push({type:7,index:r}),d+=$.length-1}r++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function S(o,t,e=o,i){var s,r,n,h;if(t===E)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=P(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,i)),i!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=S(o,l._$AS(o,t.values),l,i)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(i,!0);_.currentNode=r;let n=_.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new O(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new kt(n,this,t)),this._$AV.push(c),a=s[++l]}h!==(a==null?void 0:a.index)&&(n=_.nextNode(),h++)}return _.currentNode=y,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):yt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(pt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const n=new Ct(r,this),h=n.u(this.options);n.v(i),this.$(h),this._$AH=n}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new N(t)),e}T(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new O(this.k(k()),this.k(k()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class L{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=S(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const h=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=S(this,h[i+l],e,l),a===E&&(a=this._$AH[l]),n||(n=!P(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const St=C?C.emptyScript:"";class wt extends L{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,St):this.element.removeAttribute(this.name)}}class xt extends L{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:u)===E)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const rt=M.litHtmlPolyfillSupport;rt==null||rt(N,O),((z=M.litHtmlVersions)!==null&&z!==void 0?z:M.litHtmlVersions=[]).push("2.8.0");const Pt=(o,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=r._$litPart$;if(n===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new O(t.insertBefore(k(),h),h,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,V;class x extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}}x.finalized=!0,x._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:x});const nt=globalThis.litElementPolyfillSupport;nt==null||nt({LitElement:x});((V=globalThis.litElementVersions)!==null&&V!==void 0?V:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(n){customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},Ut=(o,t,e)=>{t.constructor.createProperty(e,o)};function A(o){return(t,e)=>e!==void 0?Ut(o,t,e):Ot(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;((F=window.HTMLSlotElement)===null||F===void 0?void 0:F.prototype.assignedElements)!=null;const Ht={image_folder:"images/wallet_test",layer_names:["Leder","Nähte"],materials:[[{color:"#f7cfa6",name:"Natur"},{color:"#d7be34",name:"Senf"},{color:"#ff6c00",name:"Orange"},{color:"#02491d",name:"Dunkelgrün"},{color:"#073569",name:"Dunkelblau"},{color:"#a61515",name:"Bordeaux"},{color:"#b84432",name:"Cognac"},{color:"#6f1b05",name:"Dunkelbraun"},{color:"#0a0a0a",name:"Schwarz",displayColor:"#1F1F1F"},{color:"#f3cb8e",name:"Vintage Natur"},{color:"#986262",name:"Vintage Cognac"},{color:"#71471c",name:"Vintage Dunkelbraun"},{color:"#2b1b1b",name:"Vintage Schwarz"}],[{color:"#f5f1dc",name:"Natur"},{color:"#ffa500",name:"Orange"},{color:"#c62323",name:"Rot"},{color:"#790d0d",name:"Bordeaux"},{color:"#0b6704",name:"Grün"},{color:"#0893d7",name:"Blau"},{color:"#945f08",name:"Brauns"},{color:"#807474",name:"Grau"},{color:"#000000",name:"Schwarz",displayColor:"#080808"}]]},lt={purse:Ht};var Tt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,g=(o,t,e,i)=>{for(var s=i>1?void 0:i?Mt(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Tt(t,e,s),s};let m=class extends x{constructor(){super(),this.colors=["red","green","blue"],this.size=1,this.currentColor="#ff0000",this.productName="",this.imageFolder="",this.materialData=null,console.log("MAT: ",lt),this.activeColors=[0,0,0]}setActiveColor(o,t){this.activeColors[o]=t}isActiveColor(o,t){const e=this.activeColors[o]===t;return console.log("AC: ",e),e}getActiveColorByLayer(o){if(!this.materialData)return"";const t=this.materialData.materials[o],e=this.activeColors[o];var i=t[e].color;return t[e].displayColor&&(i=t[e].displayColor||""),console.log("ACT_COLOR: ",i),i}_handleClick(o){if(!o.target)return;const t=o.target.getAttribute("colorIndex"),e=o.target.getAttribute("layerIndex");if(console.log("HC: ",e," / ",t),!t||!e){console.log("Can't set color: ",e," / ",t);return}this.setActiveColor(parseInt(e),parseInt(t)),console.log("AC: ",this.activeColors),console.log("GAC: ",this.getActiveColorByLayer(0)),this.currentColor=this.getActiveColorByLayer(0),this.requestUpdate()}colorButtonTemplate(o,t,e){return I`<div
            @click="${this._handleClick}"
            class="color-selector ${this.activeColors[o]===t?"active":""}"
            colorIndex="${t}"
            layerIndex="${o}"
            style="background: ${e}; border: 2px solid ${e};"
        ></div>`}colorRowTemplate(o,t){if(!this.materialData){console.error("Product data is not available");return}return I`<div style="display:flex">
            <div
                style="color: gray; font-size: 0.8rem; display: flex; align-self: center;"
            >
                ${this.materialData.layer_names[o]}
            </div>
            ${t.map((e,i)=>this.colorButtonTemplate(o,i,e.color))}
        </div>`}getMixMode(o){var t=o.substring(1),e=parseInt(t,16),i=e>>16&255,s=e>>8&255,r=e>>0&255,n=.2126*i+.7152*s+.0722*r;return n<40?"hard-light":"multiply"}render(){const o=new Map(Object.entries(lt));if(this.materialData=o.get(this.productName),!this.materialData){console.error("Product data is not available");return}return this.imageFolder=this.materialData.image_folder,I`
            <style>
                .configurator {
                    padding: 1rem;
                    border: 1px solid lightgray;
                    min-width: 10rem;
                    min-height: 20rem;
                    display: flex;
                    flex-direction: column;>
                    align-items: center;
                }

                .color-selector {
                    width: ${this.size}rem;
                    height: ${this.size}rem;
                    border-radius: ${this.size}rem;
                    margin: 0.5rem;
                    box-shadow: inset 0 0 10px #000000;
                    transition: box-shadow 0.25s;
                }

                .color-selector:hover {
                    box-shadow: inset 0 0 5px #ffffff;
                }

                .active {
                    box-shadow: inset 0 0 10px #ffffff;
                }

                .image-container {
                    position: relative;
                    /* width: 40rem; */
                    height: 40rem;
                    background-image: url("${this.imageFolder}/Background.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                }

                .background-image {
                    position: absolute;
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    /* mix-blend-mode: multiply; */
                }

                .layer {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    /* mix-blend-mode: color-burn; */
                    /* mix-blend-mode: hard-light; */
                    mask-repeat: no-repeat;
                    mask-position: center;
                    -webkit-mask-position: center;
                    mask-size: contain;
                    -webkit-mask-size: contain;
                    /* transition: background-color 0.5s; */
                    /* mask-type: luminance; */
                    /* mask-mode: luminance; */
                    mask-repeat: no-repeat;
                    -webkit-mask-repeat: no-repeat;
                }

                .layer1-image {
                    z-index: 10;
                    background-color: ${this.getActiveColorByLayer(0)};
                    mask-image: url("${this.imageFolder}/Layer1.png");
                    -webkit-mask-image: url("${this.imageFolder}/Layer1.png");
                    mix-blend-mode: ${this.getMixMode(this.getActiveColorByLayer(0))};
                }

                .layer2-image {
                    z-index: 20;
                    background-color: ${this.getActiveColorByLayer(1)};
                    mask-image: url("${this.imageFolder}/Layer2.png");
                    -webkit-mask-image: url("${this.imageFolder}/Layer2.png");
                    mix-blend-mode: ${this.getMixMode(this.getActiveColorByLayer(1))};
                }
            </style>

            <div class="configurator">
                <div class="image-container">
                    <div class="layer layer1-image"></div>
                    <div class="layer layer2-image"></div>
                </div>
                <div
                    style="display:flex; flex-direction: column; align-items: center;"
                >
                    ${this.materialData.materials.map((t,e)=>this.colorRowTemplate(e,t))}
                </div>
            </div>
        `}};g([A()],m.prototype,"productName",2);g([A()],m.prototype,"activeColors",2);g([A()],m.prototype,"imageFolder",2);g([A()],m.prototype,"materialData",2);g([A()],m.prototype,"colors",2);g([A()],m.prototype,"size",2);g([A()],m.prototype,"currentColor",2);m=g([Nt("product-configurator")],m);
