function t(t,e,i,n){var r,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,i,o):r(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(i,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:u,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:_}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,b=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);r?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),r=e.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=n;const s=r.fromAttribute(e,t.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,e,i,n=!1,r){if(void 0!==t){const s=this.constructor;if(!1===n&&(r=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:r},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[b("elementProperties")]=new Map,A[b("finalized")]=new Map,g?.({ReactiveElement:A}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=t=>t,S=x.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+T,P=`<${N}>`,k=document,O=()=>k.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,F="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,D=/>/g,R=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,H=/"/g,V=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,Y=k.createTreeWalker(k,129);function G(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}let K=class t{constructor({strings:e,_$litType$:i},n){let r;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,u]=((t,e)=>{const i=t.length-1,n=[];let r,s=2===e?"<svg>":3===e?"<math>":"",o=M;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,u=0;for(;u<i.length&&(o.lastIndex=u,c=o.exec(i),null!==c);)u=o.lastIndex,o===M?"!--"===c[1]?o=I:void 0!==c[1]?o=D:void 0!==c[2]?(V.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=R):void 0!==c[3]&&(o=R):o===R?">"===c[0]?(o=r??M,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?R:'"'===c[3]?H:j):o===H||o===j?o=R:o===I||o===D?o=M:(o=R,r=void 0);const h=o===R&&t[e+1].startsWith("/>")?" ":"";s+=o===M?i+P:l>=0?(n.push(a),i.slice(0,l)+C+i.slice(l)+T+h):i+T+(-2===l?e:h)}return[G(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]})(e,i);if(this.el=t.createElement(l,n),Y.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Y.nextNode())&&c.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(C)){const e=u[o++],i=r.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);c.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:X}),r.removeAttribute(t)}else t.startsWith(T)&&(c.push({type:6,index:s}),r.removeAttribute(t));if(V.test(r.tagName)){const t=r.textContent.split(T),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],O()),Y.nextNode(),c.push({type:2,index:++s});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===N)c.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(T,t+1));)c.push({type:7,index:s}),t+=T.length-1}s++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}};function Z(t,e,i=t,n){if(e===B)return e;let r=void 0!==n?i._$Co?.[n]:i._$Cl;const s=z(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,n)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??k).importNode(e,!0);Y.currentNode=n;let r=Y.nextNode(),s=0,o=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=i[++o]}s!==a?.index&&(r=Y.nextNode(),s++)}return Y.currentNode=k,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),z(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new J(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}let X=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,n){const r=this.strings;let s=!1;if(void 0===r)t=Z(this,t,e,0),s=!z(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const n=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Z(this,n[i+o],e,o),a===B&&(a=this._$AH[o]),s||=!z(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}let et=class extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}};class it extends X{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===B)return;const i=this._$AH,n=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(K,Q),(x.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let r=n._$litPart$;if(void 0===r){const t=i?.renderBefore??null;n._$litPart$=r=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};ot._$litElement$=!0,ot.finalized=!0,st.litElementHydrateSupport?.({LitElement:ot});const at=st.litElementPolyfillSupport;at?.({LitElement:ot}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ut=(t=lt,e,i)=>{const{kind:n,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,r,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const r=this[n];e.call(this,i),this.requestUpdate(n,r,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return ht({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=1,pt=t=>(...e)=>({_$litDirective$:t,values:e});let mt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=pt(class extends mt{constructor(t){if(super(t),t.type!==_t||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return B}}),gt="important",bt=" !"+gt,vt=pt(class extends mt{constructor(t){if(super(t),t.type!==_t||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const n=e[t];if(null!=n){this.ft.add(t);const e="string"==typeof n&&n.endsWith(bt);t.includes("-")||e?i.setProperty(t,e?n.slice(0,-11):n,e?gt:""):i[t]=n}}return B}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt,$t,At=function(t,e){return xt(e).format(t)},xt=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})};!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(yt||(yt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}($t||($t={}));var wt=function(t){if(t.time_format===$t.language||t.time_format===$t.system){var e=t.time_format===$t.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===$t.am_pm},St=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:wt(t)?"numeric":"2-digit",minute:"2-digit",hour12:wt(t)})},Et=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:wt(t)})};function Ct(){return(Ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var Tt=function(t,e,i){var n=e?function(t){switch(t.number_format){case yt.comma_decimal:return["en-US","en"];case yt.decimal_comma:return["de","es","it"];case yt.space_comma:return["fr","sv","cs"];case yt.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==yt.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,Nt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Nt(t,i)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},Nt=function(t,e){var i=Ct({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var n=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=n,i.maximumFractionDigits=n}return i},Pt=function(t,e,i,n){var r=e.state;if("unknown"===r||"unavailable"===r)return t("state.default."+r);if(function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}(e)){if("monetary"===e.attributes.device_class)try{return Tt(r,i,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return Tt(r,i)+(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var s,o=function(t){return function(t){return t.substr(0,t.indexOf("."))}(t.entity_id)}(e);return"input_datetime"===o?e.attributes.has_date&&e.attributes.has_time?function(t,e){return St(e).format(t)}(s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),i):e.attributes.has_date?(s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),At(s,i)):e.attributes.has_time?((s=new Date).setHours(e.attributes.hour,e.attributes.minute),function(t,e){return Et(e).format(t)}(s,i)):e.state:"humidifier"===o&&"on"===r&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?Tt(r,i):e.attributes.device_class&&t("component."+o+".state."+e.attributes.device_class+"."+r)||t("component."+o+".state._."+r)||r};const kt={show_unit:!0,base_size:"50px",card_padding:"8px",legacy_sizing:!1,fill_direction:"left",unit_opacity:.5,severity:[],tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},Ot=[{value:"more-info",label:"More Info"},{value:"toggle",label:"Toggle"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open URL"},{value:"assist",label:"Assist"},{value:"perform-action",label:"Perform Action"},{value:"none",label:"None"}];function zt(t){if(null==t)return null;const e=Number(t);return Number.isFinite(e)?e:null}function Ut(t,e){const i=null===e?null:function(t,e){for(const i of e){const e=i.min??Number.NEGATIVE_INFINITY,n=i.max??Number.POSITIVE_INFINITY;if(t>=e&&t<=n)return i}return null}(e,t.severity),n=t.text_color??"var(--primary-text-color)";return{text:n,valueText:i?.text_color??n,fill:i?.progress_color??t.fill_color??"var(--label-badge-blue)",background:i?.background_color??t.background_color??"var(--card-background-color)"}}function Ft(t,e,i){return Math.min(i,Math.max(e,t))}function Mt(t){return Number.isFinite(t)?Number(t):void 0}function It(t){const e={};for(const[i,n]of Object.entries(t))null!=n&&("string"==typeof n&&""===n.trim()||(e[i]=n));return e}const Dt={type:"custom:number-sensor-card",entity:"",show_unit:!0,base_size:"50px",card_padding:"8px",legacy_sizing:!1,unit_opacity:.5,fill_direction:"left",tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"},severity:[]};let Rt=class extends ot{constructor(){super(...arguments),this._config={...Dt},this._addSeverity=()=>{const t=[...this._value.severity??[]];t.push({min:0,max:0}),this._setConfigValue("severity",t)},this._handleFormValueChanged=t=>{this._setConfigValueObject(t.detail.value)},this._computeLabel=t=>({entity:"Entity",title:"Title",attribute:"Attribute",show_unit:"Show Unit",unit:"Unit Override",decimals:"Decimals",base_size:"Base Size",legacy_sizing:"Legacy Sizing (Ignore HA Grid Options)",value_font_size:"Value Font Size",title_font_size:"Title Font Size",card_padding:"Card Padding",unit_opacity:"Unit Opacity",min:"Minimum",max:"Maximum",fill_direction:"Fill Direction",text_color:"Text Color",fill_color:"Fill Color",background_color:"Background Color",none_text:"Unavailable Text",none_card_class:"Unavailable Card Class",none_value_class:"Unavailable Value Class"}[t.name]??t.name),this._basicSchema=[{name:"entity",required:!0,selector:{entity:{}}},{name:"title",selector:{text:{}}},{name:"attribute",selector:{text:{}}}],this._displaySchema=[{name:"show_unit",selector:{boolean:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{mode:"box",min:0,max:10}}}],this._sizingSchema=[{name:"base_size",selector:{text:{}}},{name:"legacy_sizing",selector:{boolean:{}}},{name:"value_font_size",selector:{text:{}}},{name:"title_font_size",selector:{text:{}}},{name:"card_padding",selector:{text:{}}},{name:"unit_opacity",selector:{number:{mode:"box",min:0,max:1,step:.05}}}],this._progressSchema=[{name:"min",selector:{number:{mode:"box"}}},{name:"max",selector:{number:{mode:"box"}}},{name:"fill_direction",selector:{select:{mode:"dropdown",options:[{value:"left",label:"Left to Right"},{value:"right",label:"Right to Left"},{value:"top",label:"Top to Bottom"},{value:"bottom",label:"Bottom to Top"}]}}}],this._colorSchema=[{name:"text_color",selector:{text:{}}},{name:"fill_color",selector:{text:{}}},{name:"background_color",selector:{text:{}}}],this._noneSchema=[{name:"none_text",selector:{text:{}}},{name:"none_card_class",selector:{text:{}}},{name:"none_value_class",selector:{text:{}}}]}get _value(){return{...Dt,...this._config}}setConfig(t){this._config={...Dt,...t,type:"custom:number-sensor-card",severity:(t.severity??[]).map(t=>({...t,progress_color:t.progress_color??t.fill_color}))}}render(){if(!this.hass)return W;const t=this._value;return L`
      <div class="editor">
        ${this._renderForm("Basic",this._basicSchema,t)}
        ${this._renderForm("Display",this._displaySchema,t)}
        ${this._renderForm("Sizing",this._sizingSchema,t)}
        ${this._renderForm("Progress",this._progressSchema,t)}
        ${this._renderForm("Colors",this._colorSchema,t)}
        ${this._renderForm("Unavailable State",this._noneSchema,t)}
        ${this._renderActions()}
        ${this._renderSeverity()}
      </div>
    `}_renderForm(t,e,i){return L`
      <ha-expansion-panel .header=${t} .outlined=${!0}>
        <ha-form
          .hass=${this.hass}
          .schema=${e}
          .data=${i}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._handleFormValueChanged}
        ></ha-form>
      </ha-expansion-panel>
    `}_renderActions(){return L`
      <ha-expansion-panel .header=${"Actions"} .outlined=${!0}>
        <div class="section">
          ${this._renderActionEditor("Tap Action","tap_action")}
          ${this._renderActionEditor("Hold Action","hold_action")}
          ${this._renderActionEditor("Double Tap Action","double_tap_action")}
        </div>
      </ha-expansion-panel>
    `}_renderActionEditor(t,e){const i=this._getActionConfig(e),n=i.action??"none",r=Boolean(i.confirmation),s="object"==typeof i.confirmation&&null!==i.confirmation?String(i.confirmation.text??""):"";return L`
      <div class="action-editor">
        <h4>${t}</h4>
        <label>
          Action
          <select
            .value=${n}
            @change=${t=>this._setActionType(e,t.target.value)}
          >
            ${Ot.map(t=>L`<option value=${t.value}>${t.label}</option>`)}
          </select>
        </label>

        ${"navigate"===n?this._renderTextField("Navigation Path",String(i.navigation_path??""),t=>this._setActionField(e,"navigation_path",t)):W}

        ${"url"===n?this._renderTextField("URL",String(i.url_path??""),t=>this._setActionField(e,"url_path",t)):W}

        ${"perform-action"===n?L`
              ${this._renderTextField("Perform Action",String(i.perform_action??""),t=>this._setActionField(e,"perform_action",t))}
              <ha-selector
                .hass=${this.hass}
                .selector=${{object:{}}}
                .value=${i.target??{}}
                .label=${"Target"}
                @value-changed=${t=>this._setActionField(e,"target",t.detail.value)}
              ></ha-selector>
              <ha-selector
                .hass=${this.hass}
                .selector=${{object:{}}}
                .value=${i.data??{}}
                .label=${"Data"}
                @value-changed=${t=>this._setActionField(e,"data",t.detail.value)}
              ></ha-selector>
            `:W}

        <div class="confirmation-row">
          <span>Require confirmation</span>
          <ha-switch
            .checked=${r}
            @change=${t=>this._setConfirmationEnabled(e,t.target.checked)}
          ></ha-switch>
        </div>

        ${r?this._renderTextField("Confirmation Text",s,t=>this._setConfirmationText(e,t)):W}
      </div>
    `}_renderSeverity(){const t=this._value.severity??[];return L`
      <ha-expansion-panel .header=${"Severity"} .outlined=${!0}>
        <div class="section">
          ${t.map((t,e)=>L`
              <div class="severity-row">
                <ha-textfield
                  .label=${"Min"}
                  .type=${"number"}
                  .value=${void 0!==t.min?String(t.min):""}
                  @input=${t=>this._updateSeverityField(e,"min",t.target.value)}
                ></ha-textfield>
                <ha-textfield
                  .label=${"Max"}
                  .type=${"number"}
                  .value=${void 0!==t.max?String(t.max):""}
                  @input=${t=>this._updateSeverityField(e,"max",t.target.value)}
                ></ha-textfield>
                <ha-textfield
                  .label=${"Progress Color"}
                  .value=${t.progress_color??""}
                  @input=${t=>this._updateSeverityField(e,"progress_color",t.target.value)}
                ></ha-textfield>
                <ha-textfield
                  .label=${"Text Color"}
                  .value=${t.text_color??""}
                  @input=${t=>this._updateSeverityField(e,"text_color",t.target.value)}
                ></ha-textfield>
                <ha-textfield
                  .label=${"Background Color"}
                  .value=${t.background_color??""}
                  @input=${t=>this._updateSeverityField(e,"background_color",t.target.value)}
                ></ha-textfield>
                <button
                  type="button"
                  class="remove"
                  @click=${()=>this._removeSeverity(e)}
                >
                  Remove
                </button>
              </div>
            `)}
          <button type="button" class="add" @click=${this._addSeverity}>
            Add Severity Level
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderTextField(t,e,i){return L`
      <ha-textfield
        .label=${t}
        .value=${e}
        @input=${t=>i(t.target.value)}
      ></ha-textfield>
    `}_setActionType(t,e){this._setConfigValue(t,{action:e})}_setActionField(t,e,i){const n={...this._getActionConfig(t),[e]:i};this._setConfigValue(t,It(n))}_setConfirmationEnabled(t,e){const i={...this._getActionConfig(t)};e?i.confirmation||(i.confirmation=!0):delete i.confirmation,this._setConfigValue(t,i)}_setConfirmationText(t,e){const i={...this._getActionConfig(t)},n=e.trim();i.confirmation=!n||{text:n},this._setConfigValue(t,i)}_getActionConfig(t){return{..."tap_action"===t?{action:"more-info"}:{action:"none"},...this._value[t]??{}}}_removeSeverity(t){const e=[...this._value.severity??[]];e.splice(t,1),this._setConfigValue("severity",e)}_updateSeverityField(t,e,i){const n=[...this._value.severity??[]],r={...n[t]};if("min"===e||"max"===e)r[e]=this._parseOptionalNumber(i);else{const t=String(i).trim();r[e]=t||void 0}n[t]=r,this._setConfigValue("severity",n)}_parseOptionalNumber(t){if("string"==typeof t&&""===t.trim())return;const e=Number(t);return Number.isFinite(e)?e:void 0}_setConfigValueObject(t){this._setConfigValue(null,t)}_setConfigValue(t,e){const i={...this._value};null===t?Object.assign(i,e):i[t]=e;const n=It(i);n.type="custom:number-sensor-card","show_unit"in n||(n.show_unit=!0),"severity"in n||(n.severity=[]),this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}static{this.styles=o`
    :host {
      display: block;
      padding: 8px 0;
    }

    .editor {
      display: grid;
      gap: 8px;
    }

    ha-form {
      display: block;
      padding: 12px;
    }

    .section {
      padding: 12px;
      display: grid;
      gap: 12px;
    }

    .action-editor {
      display: grid;
      gap: 8px;
      padding: 10px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
    }

    .action-editor h4 {
      margin: 0;
      font-size: 14px;
    }

    label {
      display: grid;
      gap: 6px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }

    select {
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      padding: 8px;
      font-size: 14px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    .confirmation-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
    }

    .severity-row {
      display: grid;
      grid-template-columns: repeat(5, minmax(120px, 1fr)) auto;
      gap: 8px;
      align-items: end;
    }

    button {
      border: none;
      border-radius: 6px;
      padding: 8px 10px;
      cursor: pointer;
      font-size: 13px;
    }

    button.add {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      justify-self: start;
    }

    button.remove {
      background: var(--error-color);
      color: #fff;
    }
  `}};function jt(t,e,i={}){const n=new Event(e,{bubbles:!0,cancelable:!1,composed:!0});n.detail=i,t.dispatchEvent(n)}function Ht(t){return!!t&&"none"!==t.action}async function Vt(t,e,i,n){const r=function(t,e){return"hold"===e?t.hold_action??t.tap_action:"double_tap"===e?t.double_tap_action??t.tap_action:t.tap_action}(i,n);if(r&&"none"!==r.action&&function(t,e){return!e||(!0===e?window.confirm("Are you sure?"):!!e.exemptions?.some(e=>e.user===t.user.id)||window.confirm(e.text??"Are you sure?"))}(e,r.confirmation))switch(r.action){case"more-info":{const e=r.entity??i.entity;return void(e&&jt(t,"hass-more-info",{entityId:e}))}case"toggle":{const t=i.entity;if(!t)return;const[n]=t.split(".");return void await e.callService(n,"toggle",{entity_id:t})}case"navigate":if(!r.navigation_path)return;return window.history.pushState(null,"",r.navigation_path),void jt(window,"location-changed",{replace:!1});case"url":return void(r.url_path&&window.open(r.url_path,"_blank","noopener"));case"assist":return window.history.pushState(null,"","/assist"),void jt(window,"location-changed",{replace:!1});case"perform-action":{if(!r.perform_action)return;const[t,i]=r.perform_action.split(".",2);if(!t||!i)return;return void await e.callService(t,i,r.data,r.target)}case"fire-dom-event":return void jt(t,"ll-custom",r)}}t([ht({attribute:!1})],Rt.prototype,"hass",void 0),t([dt()],Rt.prototype,"_config",void 0),Rt=t([ct("number-sensor-card-editor")],Rt);let Lt=class extends ot{constructor(){super(...arguments),this._holdTriggered=!1,this._onPointerDown=()=>{this._config&&Ht(this._config.hold_action)&&(window.clearTimeout(this._holdTimeout),this._holdTriggered=!1,this._holdTimeout=window.setTimeout(()=>{this._holdTriggered=!0,this._triggerAction("hold")},500))},this._onPointerUp=()=>{window.clearTimeout(this._holdTimeout)},this._onClick=()=>{if(this._config){if(!this._holdTriggered)return Ht(this._config.double_tap_action)?(window.clearTimeout(this._singleTapTimeout),void(this._singleTapTimeout=window.setTimeout(()=>{this._triggerAction("tap")},250))):void this._triggerAction("tap");this._holdTriggered=!1}},this._onDoubleClick=()=>{this._config&&Ht(this._config.double_tap_action)&&(window.clearTimeout(this._singleTapTimeout),this._triggerAction("double_tap"))},this._onKeyDown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._triggerAction("tap"))}}static getConfigElement(){return document.createElement("number-sensor-card-editor")}static getStubConfig(t){return{type:"custom:number-sensor-card",entity:(t&&Object.keys(t.states).find(t=>t.startsWith("sensor.")||t.startsWith("binary_sensor.")))??""}}setConfig(t){this._config=function(t){if(!t.entity?.trim())throw new Error("Entity is required");const e=(t.severity??[]).filter(t=>Number.isFinite(t.min)||Number.isFinite(t.max)).map(t=>({min:Mt(t.min),max:Mt(t.max),progress_color:t.progress_color?.trim()||t.fill_color?.trim()||void 0,text_color:t.text_color?.trim()||void 0,background_color:t.background_color?.trim()||void 0})).sort((t,e)=>{const i=t.min??Number.NEGATIVE_INFINITY,n=e.min??Number.NEGATIVE_INFINITY;return i!==n?i-n:(t.max??Number.POSITIVE_INFINITY)-(e.max??Number.POSITIVE_INFINITY)});return{...kt,...t,type:"custom:number-sensor-card",entity:t.entity.trim(),fill_direction:t.fill_direction??kt.fill_direction,base_size:t.base_size?.trim()||kt.base_size,legacy_sizing:t.legacy_sizing??kt.legacy_sizing,show_unit:t.show_unit??kt.show_unit,unit_opacity:Ft(t.unit_opacity??kt.unit_opacity,0,1),tap_action:t.tap_action??kt.tap_action,hold_action:t.hold_action??kt.hold_action,double_tap_action:t.double_tap_action??kt.double_tap_action,severity:e}}(t)}getCardSize(){return 1}getGridOptions(){if(!this._config?.legacy_sizing)return{columns:4,rows:2,min_rows:1}}async _triggerAction(t){this.hass&&this._config&&await Vt(this,this.hass,this._config,t)}render(){if(!this.hass||!this._config)return W;const t=this.hass.states[this._config.entity];if(!t)return L`
        <ha-card>
          <div class="missing">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=this._config.attribute?t.attributes[this._config.attribute]:t.state,i=!this._config.attribute&&t.entity_id.startsWith("binary_sensor."),n=i?null:zt(e),r=i?"unknown"===t.state||"unavailable"===t.state:null===n,s=this._config.title||t.attributes.friendly_name||this._config.entity,o=r?this._config.none_text??String(e??""):i?Pt(this.hass.localize,t,this.hass.locale):function(t,e,i){const n=zt(t);if(null===n)return String(t??"");const r={};return Number.isInteger(e)&&void 0!==e&&(r.minimumFractionDigits=e,r.maximumFractionDigits=e),new Intl.NumberFormat(i,r).format(n)}(n,this._config.decimals,this.hass.locale.language),a=this._config.unit??t.attributes.unit_of_measurement??"",c=this._config.show_unit&&!i&&!r&&"string"==typeof a&&""!==a,l=null===n?null:(u=n,h=this._config.min,d=this._config.max,void 0===h||void 0===d||h===d?null:Ft(100-100*(u-h)/(d-h),0,100));var u,h,d;const _=Ut(this._config,n),p=null===l?null:Math.min(100,Math.max(0,l)),m=null!==p&&p<=.001,f=!(null===p||p>=99.999)&&!m,g=m?_.fill:_.background,b={"--number-card-text-color":_.text,"--number-card-value-color":_.valueText,"--number-card-fill-color":_.fill,"--number-card-background-color":_.background,"--number-card-solid-color":g,"--number-card-gradient":f?"linear-gradient(to var(--number-card-direction), var(--number-card-background-color) 0%, var(--number-card-background-color) var(--number-card-percent), var(--number-card-fill-color) var(--number-card-percent), var(--number-card-fill-color) 100%)":"none","--number-card-direction":this._config.fill_direction,"--number-card-base-size":this._config.base_size,"--number-card-value-font-size":this._config.value_font_size??"calc(var(--number-card-base-size) * 1.3)","--number-card-title-font-size":this._config.title_font_size??"calc(var(--number-card-base-size) * 0.5)","--number-card-padding":this._config.card_padding??"8px","--number-card-unit-opacity":String(this._config.unit_opacity),"--number-card-percent":`${p??100}%`},v=Ht(this._config.tap_action)||Ht(this._config.hold_action)||Ht(this._config.double_tap_action),y={unavailable:r&&!this._config.none_card_class&&!this._config.none_value_class},$=ft({unavailable:r,[this._config.none_value_class??""]:r&&!!this._config.none_value_class}),A=ft({...y,[this._config.none_card_class??""]:r&&!!this._config.none_card_class});return L`
      <ha-card
        class=${A}
        style=${vt(b)}
        tabindex=${v?"0":"-1"}
        role=${v?"button":"presentation"}
        @pointerdown=${this._onPointerDown}
        @pointerup=${this._onPointerUp}
        @pointercancel=${this._onPointerUp}
        @pointerleave=${this._onPointerUp}
        @click=${this._onClick}
        @dblclick=${this._onDoubleClick}
        @keydown=${this._onKeyDown}
      >
        <div class="value ${$}">
          <span>${o}</span>
          ${c?L`<small>${a}</small>`:W}
        </div>
        <div class="title">${s}</div>
      </ha-card>
    `}static{this.styles=o`
    ha-card {
      text-align: center;
      color: var(--number-card-text-color);
      padding: var(--number-card-padding);
      background-color: var(--number-card-solid-color);
      background-image: var(--number-card-gradient);
      transition: background 180ms ease, color 180ms ease;
    }

    .value {
      font-size: var(--number-card-value-font-size);
      line-height: 1.1;
      font-weight: 400;
      display: flex;
      justify-content: center;
      align-items: baseline;
    }

    .value span {
      color: var(--number-card-value-color);
      transition: color 180ms ease;
    }

    .value small {
      color: var(--number-card-text-color);
      margin-left: 0.15em;
      opacity: var(--number-card-unit-opacity);
      font-size: 0.8em;
      font-weight: 500;
    }

    .title {
      color: var(--number-card-text-color);
      font-size: var(--number-card-title-font-size);
      line-height: 1.1;
    }

    .missing {
      padding: 16px;
      color: var(--error-color);
    }
  `}};t([ht({attribute:!1})],Lt.prototype,"hass",void 0),t([dt()],Lt.prototype,"_config",void 0),Lt=t([ct("number-sensor-card")],Lt),window.customCards=window.customCards||[],window.customCards.push({type:"number-sensor-card",name:"Number Sensor Card",preview:!0,description:"Displays a large number with optional severity colors and actions."});export{Lt as NumberSensorCard};
