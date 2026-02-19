function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,v=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??b)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[v("elementProperties")]=new Map,A[v("finalized")]=new Map,g?.({ReactiveElement:A}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=t=>t,S=x.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+T,N=`<${P}>`,k=document,O=()=>k.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,R=/>/g,H=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,D=/"/g,V=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,Y=k.createTreeWalker(k,129);function G(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=F;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===F?"!--"===l[1]?r=I:void 0!==l[1]?r=R:void 0!==l[2]?(V.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=n??F,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?H:'"'===l[3]?D:j):r===D||r===j?r=H:r===I||r===R?r=F:(r=H,n=void 0);const d=r===H&&t[e+1].startsWith("/>")?" ":"";o+=r===F?i+N:c>=0?(s.push(a),i.slice(0,c)+C+i.slice(c)+T+d):i+T+(-2===c?e:d)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=Z.createElement(l,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Y.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[o++],i=s.getAttribute(t).split(T),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(V.test(s.tagName)){const t=s.textContent.split(T),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),Y.nextNode(),a.push({type:2,index:++n});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(T,t+1));)a.push({type:7,index:n}),t+=T.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===B)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=z(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);Y.currentNode=s;let n=Y.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=Y.nextNode(),o++)}return Y.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),z(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new X(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=J(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=J(this,s[i+r],e,r),a===B&&(a=this._$AH[r]),o||=!z(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===B)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(Z,X),(x.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new X(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const lt=rt.litElementPolyfillSupport;lt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b},dt=(t=ht,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ut({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=1,mt=t=>(...e)=>({_$litDirective$:t,values:e});let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=mt(class extends ft{constructor(t){if(super(t),t.type!==_t||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return B}}),vt="important",$t=" !"+vt,bt=mt(class extends ft{constructor(t){if(super(t),t.type!==_t||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith($t);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?vt:""):i[t]=s}}return B}}),yt={show_unit:!0,base_size:"50px",card_padding:"8px",legacy_sizing:!1,fill_direction:"left",unit_opacity:.5,severity:[],tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"}},At=[{value:"more-info",label:"More Info"},{value:"toggle",label:"Toggle"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open URL"},{value:"assist",label:"Assist"},{value:"perform-action",label:"Perform Action"},{value:"none",label:"None"}];
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt(t){if(null==t)return null;const e=Number(t);return Number.isFinite(e)?e:null}function wt(t,e){const i=null===e?null:function(t,e){for(const i of e){const e=i.min??Number.NEGATIVE_INFINITY,s=i.max??Number.POSITIVE_INFINITY;if(t>=e&&t<=s)return i}return null}(e,t.severity),s=t.text_color??"var(--primary-text-color)";return{text:s,valueText:i?.text_color??s,fill:i?.progress_color??t.fill_color??"var(--label-badge-blue)",background:i?.background_color??t.background_color??"var(--card-background-color)"}}function St(t,e,i){return Math.min(i,Math.max(e,t))}function Et(t){return Number.isFinite(t)?Number(t):void 0}function Ct(t){const e={};for(const[i,s]of Object.entries(t))null!=s&&("string"==typeof s&&""===s.trim()||(e[i]=s));return e}const Tt={type:"custom:number-sensor-card",entity:"",show_unit:!0,base_size:"50px",card_padding:"8px",legacy_sizing:!1,unit_opacity:.5,fill_direction:"left",tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"},severity:[]};let Pt=class extends at{constructor(){super(...arguments),this._config={...Tt},this._addSeverity=()=>{const t=[...this._value.severity??[]];t.push({min:0,max:0}),this._setConfigValue("severity",t)},this._handleFormValueChanged=t=>{this._setConfigValueObject(t.detail.value)},this._computeLabel=t=>({entity:"Entity",name:"Name",attribute:"Attribute",show_unit:"Show Unit",unit:"Unit Override",decimals:"Decimals",base_size:"Base Size",legacy_sizing:"Legacy Sizing (Ignore HA Grid Options)",value_font_size:"Value Font Size",title_font_size:"Title Font Size",card_padding:"Card Padding",unit_opacity:"Unit Opacity",min:"Minimum",max:"Maximum",fill_direction:"Fill Direction",text_color:"Text Color",fill_color:"Fill Color",background_color:"Background Color",none_text:"Unavailable Text",none_card_class:"Unavailable Card Class",none_value_class:"Unavailable Value Class"}[t.name]??t.name),this._basicSchema=[{name:"entity",required:!0,selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"attribute",selector:{text:{}}}],this._displaySchema=[{name:"show_unit",selector:{boolean:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{mode:"box",min:0,max:10}}}],this._sizingSchema=[{name:"base_size",selector:{text:{}}},{name:"legacy_sizing",selector:{boolean:{}}},{name:"value_font_size",selector:{text:{}}},{name:"title_font_size",selector:{text:{}}},{name:"card_padding",selector:{text:{}}},{name:"unit_opacity",selector:{number:{mode:"box",min:0,max:1,step:.05}}}],this._progressSchema=[{name:"min",selector:{number:{mode:"box"}}},{name:"max",selector:{number:{mode:"box"}}},{name:"fill_direction",selector:{select:{mode:"dropdown",options:[{value:"left",label:"Left to Right"},{value:"right",label:"Right to Left"},{value:"top",label:"Top to Bottom"},{value:"bottom",label:"Bottom to Top"}]}}}],this._colorSchema=[{name:"text_color",selector:{text:{}}},{name:"fill_color",selector:{text:{}}},{name:"background_color",selector:{text:{}}}],this._noneSchema=[{name:"none_text",selector:{text:{}}},{name:"none_card_class",selector:{text:{}}},{name:"none_value_class",selector:{text:{}}}]}get _value(){return{...Tt,...this._config}}setConfig(t){this._config={...Tt,...t,type:"custom:number-sensor-card",severity:(t.severity??[]).map(t=>({...t,progress_color:t.progress_color??t.fill_color}))}}render(){if(!this.hass)return q;const t=this._value;return L`
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
    `}_renderActionEditor(t,e){const i=this._getActionConfig(e),s=i.action??"none",n=Boolean(i.confirmation),o="object"==typeof i.confirmation&&null!==i.confirmation?String(i.confirmation.text??""):"";return L`
      <div class="action-editor">
        <h4>${t}</h4>
        <label>
          Action
          <select
            .value=${s}
            @change=${t=>this._setActionType(e,t.target.value)}
          >
            ${At.map(t=>L`<option value=${t.value}>${t.label}</option>`)}
          </select>
        </label>

        ${"navigate"===s?this._renderTextField("Navigation Path",String(i.navigation_path??""),t=>this._setActionField(e,"navigation_path",t)):q}

        ${"url"===s?this._renderTextField("URL",String(i.url_path??""),t=>this._setActionField(e,"url_path",t)):q}

        ${"perform-action"===s?L`
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
            `:q}

        <div class="confirmation-row">
          <span>Require confirmation</span>
          <ha-switch
            .checked=${n}
            @change=${t=>this._setConfirmationEnabled(e,t.target.checked)}
          ></ha-switch>
        </div>

        ${n?this._renderTextField("Confirmation Text",o,t=>this._setConfirmationText(e,t)):q}
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
    `}_setActionType(t,e){this._setConfigValue(t,{action:e})}_setActionField(t,e,i){const s={...this._getActionConfig(t),[e]:i};this._setConfigValue(t,Ct(s))}_setConfirmationEnabled(t,e){const i={...this._getActionConfig(t)};e?i.confirmation||(i.confirmation=!0):delete i.confirmation,this._setConfigValue(t,i)}_setConfirmationText(t,e){const i={...this._getActionConfig(t)},s=e.trim();i.confirmation=!s||{text:s},this._setConfigValue(t,i)}_getActionConfig(t){return{..."tap_action"===t?{action:"more-info"}:{action:"none"},...this._value[t]??{}}}_removeSeverity(t){const e=[...this._value.severity??[]];e.splice(t,1),this._setConfigValue("severity",e)}_updateSeverityField(t,e,i){const s=[...this._value.severity??[]],n={...s[t]};if("min"===e||"max"===e)n[e]=this._parseOptionalNumber(i);else{const t=String(i).trim();n[e]=t||void 0}s[t]=n,this._setConfigValue("severity",s)}_parseOptionalNumber(t){if("string"==typeof t&&""===t.trim())return;const e=Number(t);return Number.isFinite(e)?e:void 0}_setConfigValueObject(t){this._setConfigValue(null,t)}_setConfigValue(t,e){const i={...this._value};null===t?Object.assign(i,e):i[t]=e;const s=Ct(i);s.type="custom:number-sensor-card","show_unit"in s||(s.show_unit=!0),"severity"in s||(s.severity=[]),this._config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}static{this.styles=r`
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
  `}};function Nt(t,e,i={}){const s=new Event(e,{bubbles:!0,cancelable:!1,composed:!0});s.detail=i,t.dispatchEvent(s)}function kt(t){return!!t&&"none"!==t.action}async function Ot(t,e,i,s){const n=function(t,e){return"hold"===e?t.hold_action??t.tap_action:"double_tap"===e?t.double_tap_action??t.tap_action:t.tap_action}(i,s);if(n&&"none"!==n.action&&function(t,e){return!e||(!0===e?window.confirm("Are you sure?"):!!e.exemptions?.some(e=>e.user===t.user.id)||window.confirm(e.text??"Are you sure?"))}(e,n.confirmation))switch(n.action){case"more-info":{const e=n.entity??i.entity;return void(e&&Nt(t,"hass-more-info",{entityId:e}))}case"toggle":{const t=i.entity;if(!t)return;const[s]=t.split(".");return void await e.callService(s,"toggle",{entity_id:t})}case"navigate":if(!n.navigation_path)return;return window.history.pushState(null,"",n.navigation_path),void Nt(window,"location-changed",{replace:!1});case"url":return void(n.url_path&&window.open(n.url_path,"_blank","noopener"));case"assist":return window.history.pushState(null,"","/assist"),void Nt(window,"location-changed",{replace:!1});case"perform-action":{if(!n.perform_action)return;const[t,i]=n.perform_action.split(".",2);if(!t||!i)return;return void await e.callService(t,i,n.data,n.target)}case"fire-dom-event":return void Nt(t,"ll-custom",n)}}t([ut({attribute:!1})],Pt.prototype,"hass",void 0),t([pt()],Pt.prototype,"_config",void 0),Pt=t([ct("number-sensor-card-editor")],Pt);let zt=class extends at{constructor(){super(...arguments),this._holdTriggered=!1,this._onPointerDown=()=>{this._config&&kt(this._config.hold_action)&&(window.clearTimeout(this._holdTimeout),this._holdTriggered=!1,this._holdTimeout=window.setTimeout(()=>{this._holdTriggered=!0,this._triggerAction("hold")},500))},this._onPointerUp=()=>{window.clearTimeout(this._holdTimeout)},this._onClick=()=>{if(this._config){if(!this._holdTriggered)return kt(this._config.double_tap_action)?(window.clearTimeout(this._singleTapTimeout),void(this._singleTapTimeout=window.setTimeout(()=>{this._triggerAction("tap")},250))):void this._triggerAction("tap");this._holdTriggered=!1}},this._onDoubleClick=()=>{this._config&&kt(this._config.double_tap_action)&&(window.clearTimeout(this._singleTapTimeout),this._triggerAction("double_tap"))},this._onKeyDown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._triggerAction("tap"))}}static getConfigElement(){return document.createElement("number-sensor-card-editor")}static getStubConfig(t){return{type:"custom:number-sensor-card",entity:(t&&Object.keys(t.states).find(t=>t.startsWith("sensor.")))??""}}setConfig(t){this._config=function(t){if(!t.entity?.trim())throw new Error("Entity is required");const e=(t.severity??[]).filter(t=>Number.isFinite(t.min)||Number.isFinite(t.max)).map(t=>({min:Et(t.min),max:Et(t.max),progress_color:t.progress_color?.trim()||t.fill_color?.trim()||void 0,text_color:t.text_color?.trim()||void 0,background_color:t.background_color?.trim()||void 0})).sort((t,e)=>{const i=t.min??Number.NEGATIVE_INFINITY,s=e.min??Number.NEGATIVE_INFINITY;return i!==s?i-s:(t.max??Number.POSITIVE_INFINITY)-(e.max??Number.POSITIVE_INFINITY)});return{...yt,...t,type:"custom:number-sensor-card",entity:t.entity.trim(),fill_direction:t.fill_direction??yt.fill_direction,base_size:t.base_size?.trim()||yt.base_size,legacy_sizing:t.legacy_sizing??yt.legacy_sizing,show_unit:t.show_unit??yt.show_unit,unit_opacity:St(t.unit_opacity??yt.unit_opacity,0,1),tap_action:t.tap_action??yt.tap_action,hold_action:t.hold_action??yt.hold_action,double_tap_action:t.double_tap_action??yt.double_tap_action,severity:e}}(t)}getCardSize(){return 1}getGridOptions(){if(!this._config?.legacy_sizing)return{columns:4,rows:2,min_rows:1}}async _triggerAction(t){this.hass&&this._config&&await Ot(this,this.hass,this._config,t)}render(){if(!this.hass||!this._config)return q;const t=this.hass.states[this._config.entity];if(!t)return L`
        <ha-card>
          <div class="missing">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=this._config.attribute?t.attributes[this._config.attribute]:t.state,i=xt(e),s=null===i,n=this._config.name||t.attributes.friendly_name||this._config.entity,o=s?this._config.none_text??String(e??""):function(t,e,i){const s=xt(t);if(null===s)return String(t??"");const n={};return Number.isInteger(e)&&void 0!==e&&(n.minimumFractionDigits=e,n.maximumFractionDigits=e),new Intl.NumberFormat(i,n).format(s)}(e,this._config.decimals,this.hass.locale.language),r=this._config.unit??t.attributes.unit_of_measurement??"",a=this._config.show_unit&&!s&&"string"==typeof r&&""!==r,l=null===i?null:(c=i,h=this._config.min,d=this._config.max,void 0===h||void 0===d||h===d?null:St(100-100*(c-h)/(d-h),0,100));var c,h,d;const u=wt(this._config,i),p={"--number-card-text-color":u.text,"--number-card-value-color":u.valueText,"--number-card-fill-color":u.fill,"--number-card-background-color":u.background,"--number-card-direction":this._config.fill_direction,"--number-card-base-size":this._config.base_size,"--number-card-value-font-size":this._config.value_font_size??"calc(var(--number-card-base-size) * 1.3)","--number-card-title-font-size":this._config.title_font_size??"calc(var(--number-card-base-size) * 0.5)","--number-card-padding":this._config.card_padding??"8px","--number-card-unit-opacity":String(this._config.unit_opacity),"--number-card-percent":`${l??100}%`},_=kt(this._config.tap_action)||kt(this._config.hold_action)||kt(this._config.double_tap_action),m={unavailable:s&&!this._config.none_card_class&&!this._config.none_value_class},f=gt({unavailable:s,[this._config.none_value_class??""]:s&&!!this._config.none_value_class}),g=gt({...m,[this._config.none_card_class??""]:s&&!!this._config.none_card_class});return L`
      <ha-card
        class=${g}
        style=${bt(p)}
        tabindex=${_?"0":"-1"}
        role=${_?"button":"presentation"}
        @pointerdown=${this._onPointerDown}
        @pointerup=${this._onPointerUp}
        @pointercancel=${this._onPointerUp}
        @pointerleave=${this._onPointerUp}
        @click=${this._onClick}
        @dblclick=${this._onDoubleClick}
        @keydown=${this._onKeyDown}
      >
        <div class="value ${f}">
          <span>${o}</span>
          ${a?L`<small>${r}</small>`:q}
        </div>
        <div class="title">${n}</div>
      </ha-card>
    `}static{this.styles=r`
    ha-card {
      text-align: center;
      color: var(--number-card-text-color);
      padding: var(--number-card-padding);
      background: linear-gradient(
        to var(--number-card-direction),
        var(--number-card-background-color) var(--number-card-percent),
        var(--number-card-fill-color) var(--number-card-percent)
      );
      transition: background 180ms ease, color 180ms ease;
    }

    .value {
      font-size: var(--number-card-value-font-size);
      line-height: 1.1;
      font-weight: 400;
    }

    .value span {
      color: var(--number-card-value-color);
      transition: color 180ms ease;
    }

    .value small {
      color: var(--number-card-text-color);
      margin-left: 0.25em;
      opacity: var(--number-card-unit-opacity);
      font-size: 0.45em;
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
  `}};t([ut({attribute:!1})],zt.prototype,"hass",void 0),t([pt()],zt.prototype,"_config",void 0),zt=t([ct("number-sensor-card")],zt),window.customCards=window.customCards||[],window.customCards.push({type:"number-sensor-card",name:"Number Sensor Card",preview:!0,description:"Displays a large number with optional severity colors and actions."});export{zt as NumberSensorCard};
