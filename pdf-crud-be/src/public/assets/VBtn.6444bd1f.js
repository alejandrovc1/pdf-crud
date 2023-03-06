import{E as K,g as te,r as L,I as Te,j as ne,F as H,v as ft,l as V,G as mt,s as Le,T as gt,H as se,J as de,K as ht,p as k,c as d,b as C,m as l,S as ve,x as Ve,L as yt,M as fe,N as oe,O as Re,P as ze,Q as bt,R as D,U as q,V as Pe,W as _e,X as Ce,n as X,q as Y,t as z,u as pt,d as St,e as Ne,i as _t,a as Ct,w as Oe,o as wt,Y as xt,Z as kt,k as It,_ as Bt,$ as le,a0 as $t,a1 as Et,a2 as Tt,a3 as Lt,a4 as we,D as Ae,a5 as Vt,a6 as xe,a7 as Rt}from"./index.9339ce7c.js";const We=["top","bottom"],zt=["start","end","left","right"];function Pt(e,n){let[s,t]=e.split(" ");return t||(t=K(We,s)?"start":K(zt,s)?"top":"center"),{side:ke(s,n),align:ke(t,n)}}function ke(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function Sn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function _n(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Cn(e){return{side:e.align,align:e.side}}function wn(e){return K(We,e.side)?"y":"x"}function A(e){const n=te("useRender");n.render=e}function Nt(e){const n=L(),s=L();if(Te){const t=new ResizeObserver(a=>{e==null||e(a,t),a.length&&(s.value=a[0].contentRect)});ne(()=>{t.disconnect()}),H(n,(a,i)=>{i&&(t.unobserve(i),s.value=void 0),a&&t.observe(a)},{flush:"post"})}return{resizeRef:n,contentRect:ft(s)}}const xn=(e,n)=>{const s=e.__vccOpts||e;for(const[t,a]of n)s[t]=a;return s},ae=V(!1)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,n){let{slots:s}=n;const{defaults:t,reset:a,root:i,scoped:r}=mt(e);return Le(t,{reset:a,root:i,scoped:r}),()=>{var o;return(o=s.default)==null?void 0:o.call(s)}}});function B(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",s=arguments.length>2?arguments[2]:void 0;return V()({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:s},origin:{type:String,default:n}},setup(t,a){let{slots:i}=a;return()=>{const r=t.group?gt:se;return de(r,{name:e,mode:t.mode,onBeforeEnter(o){o.style.transformOrigin=t.origin},onLeave(o){if(t.leaveAbsolute){const{offsetTop:u,offsetLeft:f,offsetWidth:m,offsetHeight:y}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${u}px`,o.style.left=`${f}px`,o.style.width=`${m}px`,o.style.height=`${y}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o==null?void 0:o._transitionInitialStyles)){const{position:u,top:f,left:m,width:y,height:c}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=u||"",o.style.top=f||"",o.style.left=m||"",o.style.width=y||"",o.style.height=c||""}}},i.default)}}})}function He(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return V()({name:e,props:{mode:{type:String,default:s}},setup(t,a){let{slots:i}=a;return()=>de(se,{name:e,...n},i.default)}})}function De(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=ht(`offset-${s}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[s]:r.style[s]}},onEnter(r){const o=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const u=`${r[t]}px`;r.style[s]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[s]=u})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[s]:r.style[s]},r.style.overflow="hidden",r.style[s]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[s]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){const o=r._initialStyle[s];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[s]=o),delete r._initialStyle}}B("fab-transition","center center","out-in");B("dialog-bottom-transition");B("dialog-top-transition");B("fade-transition");B("scale-transition");B("scroll-x-transition");B("scroll-x-reverse-transition");B("scroll-y-transition");B("scroll-y-reverse-transition");B("slide-x-transition");B("slide-x-reverse-transition");const kn=B("slide-y-transition");B("slide-y-reverse-transition");const In=He("expand-transition",De()),Bn=He("expand-x-transition",De("",!0));const Ge=k({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Me(e){return{dimensionStyles:d(()=>({height:C(e.height),maxHeight:C(e.maxHeight),maxWidth:C(e.maxWidth),minHeight:C(e.minHeight),minWidth:C(e.minWidth),width:C(e.width)}))}}function Ot(e){return{aspectStyles:d(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const At=V()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Ge()},setup(e,n){let{slots:s}=n;const{aspectStyles:t}=Ot(e),{dimensionStyles:a}=Me(e);return A(()=>{var i;return l("div",{class:"v-responsive",style:a.value},[l("div",{class:"v-responsive__sizer",style:t.value},null),(i=s.additional)==null?void 0:i.call(s),s.default&&l("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}});function Wt(e,n){if(!ve)return;const s=n.modifiers||{},t=n.value,{handler:a,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var y;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const f=(y=e._observe)==null?void 0:y[n.instance.$.uid];if(!f)return;const m=o.some(c=>c.isIntersecting);a&&(!s.quiet||f.init)&&(!s.once||m||f.init)&&a(m,o,u),m&&s.once?Fe(e,n):f.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Fe(e,n){var t;const s=(t=e._observe)==null?void 0:t[n.instance.$.uid];!s||(s.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Ht={mounted:Wt,unmounted:Fe},Dt=Ht,Gt=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Q=(e,n)=>{let{slots:s}=n;const{transition:t,...a}=e,{component:i=se,...r}=typeof t=="object"?t:{};return de(i,Ve(typeof t=="string"?{name:t}:r,a),s)},$n=V()({name:"VImg",directives:{intersect:Dt},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Gt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:s,slots:t}=n;const a=L(""),i=L(),r=L(e.eager?"loading":"idle"),o=L(),u=L(),f=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=d(()=>f.value.aspect||o.value/u.value||0);H(()=>e.src,()=>{y(r.value!=="idle")}),H(m,(g,x)=>{!g&&x&&i.value&&_(i.value)}),yt(()=>y());function y(g){if(!(e.eager&&g)&&!(ve&&!g&&!e.eager)){if(r.value="loading",f.value.lazySrc){const x=new Image;x.src=f.value.lazySrc,_(x,null)}!f.value.src||fe(()=>{var x,E;if(s("loadstart",((x=i.value)==null?void 0:x.currentSrc)||f.value.src),(E=i.value)!=null&&E.complete){if(i.value.naturalWidth||v(),r.value==="error")return;m.value||_(i.value,null),c()}else m.value||_(i.value),p()})}}function c(){var g;p(),r.value="loaded",s("load",((g=i.value)==null?void 0:g.currentSrc)||f.value.src)}function v(){var g;r.value="error",s("error",((g=i.value)==null?void 0:g.currentSrc)||f.value.src)}function p(){const g=i.value;g&&(a.value=g.currentSrc||g.src)}let b=-1;function _(g){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const E=()=>{clearTimeout(b);const{naturalHeight:R,naturalWidth:W}=g;R||W?(o.value=W,u.value=R):!g.complete&&r.value==="loading"&&x!=null?b=window.setTimeout(E,x):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};E()}const S=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),h=()=>{var E;if(!f.value.src||r.value==="idle")return null;const g=l("img",{class:["v-img__img",S.value],src:f.value.src,srcset:f.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:c,onError:v},null),x=(E=t.sources)==null?void 0:E.call(t);return l(Q,{transition:e.transition,appear:!0},{default:()=>[oe(x?l("picture",{class:"v-img__picture"},[x,g]):g,[[bt,r.value==="loaded"]])]})},w=()=>l(Q,{transition:e.transition},{default:()=>[f.value.lazySrc&&r.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",S.value],src:f.value.lazySrc,alt:""},null)]}),$=()=>t.placeholder?l(Q,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,T=()=>t.error?l(Q,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,P=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,G=L(!1);{const g=H(m,x=>{x&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{G.value=!0})}),g())})}return A(()=>oe(l(At,{class:["v-img",{"v-img--booting":!G.value}],style:{width:C(e.width==="auto"?o.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>l(ze,null,[l(h,null,null),l(w,null,null),l(P,null,null),l($,null,null),l(T,null,null)]),default:t.default}),[[Re("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:a,image:i,state:r,naturalWidth:o,naturalHeight:u}}}),U=k({tag:{type:String,default:"div"}},"tag"),je=k({border:[Boolean,Number,String]},"border");function qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{borderClasses:d(()=>{const t=q(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))a.push(`border-${i}`);return a})}}const Xe=k({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Ye(e){return{elevationClasses:d(()=>{const s=q(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const me=k({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ge(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{roundedClasses:d(()=>{const t=q(e)?e.value:e.rounded,a=[];if(t===!0||t==="")a.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))a.push(`rounded-${i}`);return a})}}function he(e){return Pe(()=>{const n=[],s={};return e.value.background&&(_e(e.value.background)?s.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(_e(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function Z(e,n){const s=d(()=>({text:q(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=he(s);return{textColorClasses:t,textColorStyles:a}}function Ie(e,n){const s=d(()=>({background:q(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=he(s);return{backgroundColorClasses:t,backgroundColorStyles:a}}const Mt=[null,"default","comfortable","compact"],Ue=k({density:{type:String,default:"default",validator:e=>Mt.includes(e)}},"density");function Je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{densityClasses:d(()=>`${n}--density-${e.density}`)}}const Ft=["elevated","flat","tonal","outlined","text","plain"];function jt(e,n){return l(ze,null,[e&&l("span",{key:"overlay",class:`${n}__overlay`},null),l("span",{key:"underlay",class:`${n}__underlay`},null)])}const Qe=k({color:String,variant:{type:String,default:"elevated",validator:e=>Ft.includes(e)}},"variant");function qt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();const s=d(()=>{const{variant:i}=Ce(e);return`${n}--variant-${i}`}),{colorClasses:t,colorStyles:a}=he(d(()=>{const{variant:i,color:r}=Ce(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:a,variantClasses:s}}const Ke=k({divided:Boolean,...je(),...Ue(),...Xe(),...me(),...U(),...X(),...Qe()},"v-btn-group"),Ze=V()({name:"VBtnGroup",props:Ke(),setup(e,n){let{slots:s}=n;const{themeClasses:t}=Y(e),{densityClasses:a}=Je(e),{borderClasses:i}=qe(e),{elevationClasses:r}=Ye(e),{roundedClasses:o}=ge(e);Le({VBtn:{height:"auto",color:z(e,"color"),density:z(e,"density"),flat:!0,variant:z(e,"variant")}}),A(()=>l(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,a.value,r.value,o.value]},s))}});function Xt(e){return pt(e,Object.keys(Ze.props))}const Yt=k({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ut=k({value:null,disabled:Boolean,selectedClass:String},"group-item");function Jt(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=te("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=St();Ne(Symbol.for(`${n.description}:id`),a);const i=_t(n,null);if(!i){if(!s)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const r=z(e,"value"),o=d(()=>i.disabled.value||e.disabled);i.register({id:a,value:r,disabled:o},t),ne(()=>{i.unregister(a)});const u=d(()=>i.isSelected(a)),f=d(()=>u.value&&[i.selectedClass.value,e.selectedClass]);return H(u,m=>{t.emit("group:selected",{value:m})}),{id:a,isSelected:u,toggle:()=>i.select(a,!u.value),select:m=>i.select(a,m),selectedClass:f,value:r,disabled:o,group:i}}function Qt(e,n){let s=!1;const t=Ct([]),a=Oe(e,"modelValue",[],c=>c==null?[]:et(t,kt(c)),c=>{const v=Zt(t,c);return e.multiple?v:v[0]}),i=te("useGroup");function r(c,v){const p=c,b=Symbol.for(`${n.description}:id`),S=It(b,i==null?void 0:i.vnode).indexOf(v);S>-1?t.splice(S,0,p):t.push(p)}function o(c){if(s)return;u();const v=t.findIndex(p=>p.id===c);t.splice(v,1)}function u(){const c=t.find(v=>!v.disabled);c&&e.mandatory==="force"&&!a.value.length&&(a.value=[c.id])}wt(()=>{u()}),ne(()=>{s=!0});function f(c,v){const p=t.find(b=>b.id===c);if(!(v&&(p==null?void 0:p.disabled)))if(e.multiple){const b=a.value.slice(),_=b.findIndex(h=>h===c),S=~_;if(v=v!=null?v:!S,S&&e.mandatory&&b.length<=1||!S&&e.max!=null&&b.length+1>e.max)return;_<0&&v?b.push(c):_>=0&&!v&&b.splice(_,1),a.value=b}else{const b=a.value.includes(c);if(e.mandatory&&b)return;a.value=(v!=null?v:!b)?[c]:[]}}function m(c){if(e.multiple&&Bt('This method is not supported when using "multiple" prop'),a.value.length){const v=a.value[0],p=t.findIndex(S=>S.id===v);let b=(p+c)%t.length,_=t[b];for(;_.disabled&&b!==p;)b=(b+c)%t.length,_=t[b];if(_.disabled)return;a.value=[t[b].id]}else{const v=t.find(p=>!p.disabled);v&&(a.value=[v.id])}}const y={register:r,unregister:o,selected:a,select:f,disabled:z(e,"disabled"),prev:()=>m(t.length-1),next:()=>m(1),isSelected:c=>a.value.includes(c),selectedClass:d(()=>e.selectedClass),items:d(()=>t),getItemIndex:c=>Kt(t,c)};return Ne(n,y),y}function Kt(e,n){const s=et(e,[n]);return s.length?e.findIndex(t=>t.id===s[0]):-1}function et(e,n){const s=[];for(let t=0;t<e.length;t++){const a=e[t];a.value!=null?n.find(i=>xt(i,a.value))!=null&&s.push(a.id):n.includes(t)&&s.push(a.id)}return s}function Zt(e,n){const s=[];for(let t=0;t<e.length;t++){const a=e[t];n.includes(a.id)&&s.push(a.value!=null?a.value:t)}return s}const tt=Symbol.for("vuetify:v-btn-toggle");V()({name:"VBtnToggle",props:{...Ke(),...Yt()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const{isSelected:t,next:a,prev:i,select:r,selected:o}=Qt(e,tt);return A(()=>{const[u]=Xt(e);return l(Ze,Ve({class:"v-btn-toggle"},u),{default:()=>{var f;return[(f=s.default)==null?void 0:f.call(s,{isSelected:t,next:a,prev:i,select:r,selected:o})]}})}),{next:a,prev:i,select:r}}});const en=["x-small","small","default","large","x-large"],ye=k({size:{type:[String,Number],default:"default"}},"size");function be(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return Pe(()=>{let s,t;return K(en,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:C(e.size),height:C(e.size)}),{sizeClasses:s,sizeStyles:t}})}const tn=k({color:String,start:Boolean,end:Boolean,icon:le,...ye(),...U({tag:"i"}),...X()},"v-icon"),ie=V()({name:"VIcon",props:tn(),setup(e,n){let{attrs:s,slots:t}=n,a;t.default&&(a=d(()=>{var y,c;const m=(y=t.default)==null?void 0:y.call(t);if(!!m)return(c=m.filter(v=>v.type===Et&&v.children&&typeof v.children=="string")[0])==null?void 0:c.children}));const{themeClasses:i}=Y(e),{iconData:r}=$t(a||e),{sizeClasses:o}=be(e),{textColorClasses:u,textColorStyles:f}=Z(z(e,"color"));return A(()=>l(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,o.value,u.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[o.value?void 0:{fontSize:C(e.size),height:C(e.size),width:C(e.size)},f.value],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>{var m;return[(m=t.default)==null?void 0:m.call(t)]}})),{}}});function nt(e){const n=L(),s=L(!1);if(ve){const t=new IntersectionObserver(a=>{e==null||e(a,t),s.value=!!a.find(i=>i.isIntersecting)});ne(()=>{t.disconnect()}),H(n,(a,i)=>{i&&(t.unobserve(i),s.value=!1),a&&t.observe(a)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const nn=V()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ye(),...U({tag:"div"}),...X()},setup(e,n){let{slots:s}=n;const t=20,a=2*Math.PI*t,i=L(),{themeClasses:r}=Y(e),{sizeClasses:o,sizeStyles:u}=be(e),{textColorClasses:f,textColorStyles:m}=Z(z(e,"color")),{textColorClasses:y,textColorStyles:c}=Z(z(e,"bgColor")),{intersectionRef:v,isIntersecting:p}=nt(),{resizeRef:b,contentRect:_}=Nt(),S=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=d(()=>Number(e.width)),w=d(()=>u.value?Number(e.size):_.value?_.value.width:Math.max(h.value,32)),$=d(()=>t/(1-h.value/w.value)*2),T=d(()=>h.value/w.value*$.value),P=d(()=>C((100-S.value)/100*a));return Tt(()=>{v.value=i.value,b.value=i.value}),A(()=>l(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,o.value,f.value],style:[u.value,m.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[l("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${$.value} ${$.value}`},[l("circle",{class:["v-progress-circular__underlay",y.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),l("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":a,"stroke-dashoffset":P.value},null)]),s.default&&l("div",{class:"v-progress-circular__content"},[s.default({value:S.value})])]})),{}}});const ue=Symbol("rippleStop"),sn=80;function Be(e,n){e.style.transform=n,e.style.webkitTransform=n}function ce(e){return e.constructor.name==="TouchEvent"}function st(e){return e.constructor.name==="KeyboardEvent"}const an=function(e,n){var y;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,a=0;if(!st(e)){const c=n.getBoundingClientRect(),v=ce(e)?e.touches[e.touches.length-1]:e;t=v.clientX-c.left,a=v.clientY-c.top}let i=0,r=.3;(y=n._ripple)!=null&&y.circle?(r=.15,i=n.clientWidth/2,i=s.center?i:i+Math.sqrt((t-i)**2+(a-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-i*2)/2}px`,u=`${(n.clientHeight-i*2)/2}px`,f=s.center?o:`${t-i}px`,m=s.center?u:`${a-i}px`;return{radius:i,scale:r,x:f,y:m,centerX:o,centerY:u}},ee={show(e,n){var v;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=n==null?void 0:n._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),a=document.createElement("span");t.appendChild(a),t.className="v-ripple__container",s.class&&(t.className+=` ${s.class}`);const{radius:i,scale:r,x:o,y:u,centerX:f,centerY:m}=an(e,n,s),y=`${i*2}px`;a.className="v-ripple__animation",a.style.width=y,a.style.height=y,n.appendChild(t);const c=window.getComputedStyle(n);c&&c.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),Be(a,`translate(${o}, ${u}) scale3d(${r},${r},${r})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),Be(a,`translate(${f}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const s=n[n.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const t=performance.now()-Number(s.dataset.activated),a=Math.max(250-t,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=s.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(s.parentNode)},300)},a)}};function at(e){return typeof e>"u"||!!e}function F(e){const n={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[ue])){if(e[ue]=!0,ce(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(n.center=s._ripple.centered||st(e),s._ripple.class&&(n.class=s._ripple.class),ce(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{ee.show(e,s,n)},s._ripple.showTimer=window.setTimeout(()=>{var t;(t=s==null?void 0:s._ripple)!=null&&t.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},sn)}else ee.show(e,s,n)}}function $e(e){e[ue]=!0}function I(e){const n=e.currentTarget;if(!!(n!=null&&n._ripple)){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{I(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),ee.hide(n)}}function it(e){const n=e.currentTarget;!(n!=null&&n._ripple)||(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let j=!1;function rt(e){!j&&(e.keyCode===we.enter||e.keyCode===we.space)&&(j=!0,F(e))}function ot(e){j=!1,I(e)}function lt(e){j&&(j=!1,I(e))}function ut(e,n,s){var r;const{value:t,modifiers:a}=n,i=at(t);if(i||ee.hide(e),e._ripple=(r=e._ripple)!=null?r:{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,Lt(t)&&t.class&&(e._ripple.class=t.class),i&&!s){if(a.stop){e.addEventListener("touchstart",$e,{passive:!0}),e.addEventListener("mousedown",$e);return}e.addEventListener("touchstart",F,{passive:!0}),e.addEventListener("touchend",I,{passive:!0}),e.addEventListener("touchmove",it,{passive:!0}),e.addEventListener("touchcancel",I),e.addEventListener("mousedown",F),e.addEventListener("mouseup",I),e.addEventListener("mouseleave",I),e.addEventListener("keydown",rt),e.addEventListener("keyup",ot),e.addEventListener("blur",lt),e.addEventListener("dragstart",I,{passive:!0})}else!i&&s&&ct(e)}function ct(e){e.removeEventListener("mousedown",F),e.removeEventListener("touchstart",F),e.removeEventListener("touchend",I),e.removeEventListener("touchmove",it),e.removeEventListener("touchcancel",I),e.removeEventListener("mouseup",I),e.removeEventListener("mouseleave",I),e.removeEventListener("keydown",rt),e.removeEventListener("keyup",ot),e.removeEventListener("dragstart",I),e.removeEventListener("blur",lt)}function rn(e,n){ut(e,n,!1)}function on(e){delete e._ripple,ct(e)}function ln(e,n){if(n.value===n.oldValue)return;const s=at(n.oldValue);ut(e,n,s)}const un={mounted:rn,unmounted:on,updated:ln};const Ee={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},dt=k({location:String},"location");function vt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Ae();return{locationStyles:d(()=>{if(!e.location)return{};const{side:i,align:r}=Pt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function o(f){return s?s(f):0}const u={};return i!=="center"&&(n?u[Ee[i]]=`calc(100% - ${o(i)}px)`:u[i]=0),r!=="center"?n?u[Ee[r]]=`calc(100% - ${o(r)}px)`:u[r]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const cn=V()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...dt({location:"top"}),...me(),...U(),...X()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const t=Oe(e,"modelValue"),{isRtl:a}=Ae(),{themeClasses:i}=Y(e),{locationStyles:r}=vt(e),{textColorClasses:o,textColorStyles:u}=Z(e,"color"),{backgroundColorClasses:f,backgroundColorStyles:m}=Ie(d(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:c}=Ie(e,"color"),{roundedClasses:v}=ge(e),{intersectionRef:p,isIntersecting:b}=nt(),_=d(()=>parseInt(e.max,10)),S=d(()=>parseInt(e.height,10)),h=d(()=>parseFloat(e.bufferValue)/_.value*100),w=d(()=>parseFloat(t.value)/_.value*100),$=d(()=>a.value!==e.reverse),T=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),P=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function G(g){if(!p.value)return;const{left:x,right:E,width:R}=p.value.getBoundingClientRect(),W=$.value?R-g.clientX+(E-R):g.clientX-x;t.value=Math.round(W/R*_.value)}return A(()=>l(e.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&b.value,"v-progress-linear--reverse":$.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,i.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?C(S.value):0,"--v-progress-linear-height":C(S.value),...r.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:w.value,onClick:e.clickable&&G},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...u.value,[$.value?"left":"right"]:C(-S.value),borderTop:`${C(S.value/2)} dotted`,opacity:P.value,top:`calc(50% - ${C(S.value/4)})`,width:C(100-h.value,"%"),"--v-progress-linear-stream-to":C(S.value*($.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",f.value],style:[m.value,{opacity:P.value,width:C(e.stream?h.value:100,"%")}]},null),l(se,{name:T.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(g=>l("div",{key:g,class:["v-progress-linear__indeterminate",g,y.value],style:c.value},null))]):l("div",{class:["v-progress-linear__determinate",y.value],style:[c.value,{width:C(w.value,"%")}]},null)]}),s.default&&l("div",{class:"v-progress-linear__content"},[s.default({value:w.value,buffer:h.value})])]})),{}}}),dn=k({loading:[Boolean,String]},"loader");function vn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{loaderClasses:d(()=>({[`${n}--loading`]:e.loading}))}}function En(e,n){var t;let{slots:s}=n;return l("div",{class:`${e.name}__loader`},[((t=s.default)==null?void 0:t.call(s,{color:e.color,isActive:e.active}))||l(cn,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const fn=["static","relative","fixed","absolute","sticky"],mn=k({position:{type:String,validator:e=>fn.includes(e)}},"position");function gn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{positionClasses:d(()=>e.position?`${n}--${e.position}`:void 0)}}function Tn(){var e,n;return(n=(e=te("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function hn(e,n){const s=Vt("RouterLink"),t=d(()=>!!(e.href||e.to)),a=d(()=>(t==null?void 0:t.value)||xe(n,"click")||xe(e,"click"));if(typeof s=="string")return{isLink:t,isClickable:a,href:z(e,"href")};const i=e.to?s.useLink(e):void 0;return{isLink:t,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&d(()=>{var r,o;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(o=i.isActive)==null?void 0:o.value}),href:d(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const yn=k({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let re=!1;function Ln(e,n){let s=!1,t,a;Te&&(fe(()=>{window.addEventListener("popstate",i),t=e==null?void 0:e.beforeEach((r,o,u)=>{re?s?n(u):u():setTimeout(()=>s?n(u):u()),re=!0}),a=e==null?void 0:e.afterEach(()=>{re=!1})}),Rt(()=>{window.removeEventListener("popstate",i),t==null||t(),a==null||a()}));function i(r){var o;(o=r.state)!=null&&o.replaced||(s=!0,setTimeout(()=>s=!1))}}function bn(e,n){H(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&n&&fe(()=>{n(!0)})},{immediate:!0})}const Vn=V()({name:"VBtn",directives:{Ripple:un},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:tt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:le,appendIcon:le,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...je(),...me(),...Ue(),...Ge(),...Xe(),...Ut(),...dn(),...dt(),...mn(),...yn(),...ye(),...U({tag:"button"}),...X(),...Qe({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,n){let{attrs:s,slots:t}=n;const{themeClasses:a}=Y(e),{borderClasses:i}=qe(e),{colorClasses:r,colorStyles:o,variantClasses:u}=qt(e),{densityClasses:f}=Je(e),{dimensionStyles:m}=Me(e),{elevationClasses:y}=Ye(e),{loaderClasses:c}=vn(e),{locationStyles:v}=vt(e),{positionClasses:p}=gn(e),{roundedClasses:b}=ge(e),{sizeClasses:_,sizeStyles:S}=be(e),h=Jt(e,e.symbol,!1),w=hn(e,s),$=d(()=>{var g;return e.active!==void 0?e.active:w.isLink.value?(g=w.isActive)==null?void 0:g.value:h==null?void 0:h.isSelected.value}),T=d(()=>(h==null?void 0:h.disabled.value)||e.disabled),P=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),G=d(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});return bn(w,h==null?void 0:h.select),A(()=>{var pe,Se;const g=w.isLink.value?"a":e.tag,x=!!(e.prependIcon||t.prepend),E=!!(e.appendIcon||t.append),R=!!(e.icon&&e.icon!==!0),W=(h==null?void 0:h.isSelected.value)&&(!w.isLink.value||((pe=w.isActive)==null?void 0:pe.value))||!h||((Se=w.isActive)==null?void 0:Se.value);return oe(l(g,{type:g==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":$.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":P.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,i.value,W?r.value:void 0,f.value,y.value,c.value,p.value,b.value,_.value,u.value],style:[W?o.value:void 0,m.value,v.value,S.value],disabled:T.value||void 0,href:w.href.value,onClick:J=>{var M;T.value||((M=w.navigate)==null||M.call(w,J),h==null||h.toggle())},value:G.value},{default:()=>{var J,M;return[jt(!0,"v-btn"),!e.icon&&x&&l(ae,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var N,O;return[l("span",{class:"v-btn__prepend"},[(O=(N=t.prepend)==null?void 0:N.call(t))!=null?O:l(ie,null,null)])]}}),l("span",{class:"v-btn__content","data-no-activator":""},[l(ae,{key:"content",defaults:{VIcon:{icon:R?e.icon:void 0}}},{default:()=>{var N,O;return[(O=(N=t.default)==null?void 0:N.call(t))!=null?O:R&&l(ie,{key:"icon"},null)]}})]),!e.icon&&E&&l(ae,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var N,O;return[l("span",{class:"v-btn__append"},[(O=(N=t.append)==null?void 0:N.call(t))!=null?O:l(ie,null,null)])]}}),!!e.loading&&l("span",{key:"loader",class:"v-btn__loader"},[(M=(J=t.loader)==null?void 0:J.call(t))!=null?M:l(nn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Re("ripple"),!T.value&&e.ripple,null]])}),{}}});export{ye as A,be as B,dn as C,yn as D,vn as E,hn as F,Bn as G,Gt as H,kn as I,Dt as J,Pt as K,En as L,Q as M,Sn as N,_n as O,Cn as P,wn as Q,un as R,Tn as S,Ln as T,Yt as U,ae as V,Qt as W,Ut as X,Jt as Y,xn as _,A as a,je as b,Xe as c,me as d,Ie as e,qe as f,Ye as g,ge as h,$n as i,In as j,ie as k,Vn as l,U as m,Ue as n,Ge as o,dt as p,mn as q,Qe as r,qt as s,Je as t,Nt as u,Me as v,vt as w,gn as x,Z as y,jt as z};
