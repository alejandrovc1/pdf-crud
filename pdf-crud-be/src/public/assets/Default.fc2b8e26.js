import{u as he,m as X,a as k,b as xe,c as _e,d as Se,e as Ve,f as Ie,g as Be,h as Te,V as K,i as $e,j as we,_ as Ce,k as ke,l as Pe}from"./VBtn.6444bd1f.js";import{p as j,i as G,c as d,r as C,a as H,g as oe,o as ne,b as I,d as Re,e as le,f as Ae,h as ze,j as Le,k as He,l as P,m as l,n as se,t as Z,q as ue,s as Ne,u as Me,v as Oe,w as De,x as ie,y as W,z as Y,A as N,B as te,C as Ee,D as je}from"./index.9339ce7c.js";const E=Symbol.for("vuetify:layout"),re=Symbol.for("vuetify:layout-item"),ae=1e3,Ue=j({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),qe=j({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Fe(){const e=G(E);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ke(e){var v;const a=G(E);if(!a)throw new Error("[Vuetify] Could not find injected layout");const t=(v=e.id)!=null?v:`layout-item-${Re()}`,o=oe("useLayoutItem");le(re,{id:t});const n=C(!1);Ae(()=>n.value=!0),ze(()=>n.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:i}=a.register(o,{...e,active:d(()=>n.value?!1:e.active.value),id:t});return Le(()=>a.unregister(t)),{layoutItemStyles:s,layoutRect:a.layoutRect,layoutItemScrimStyles:i}}const Ze=(e,a,t,o)=>{let n={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...n}}];for(const i of e){const v=a.get(i),f=t.get(i),y=o.get(i);if(!v||!f||!y)continue;const m={...n,[v.value]:parseInt(n[v.value],10)+(y.value?parseInt(f.value,10):0)};s.push({id:i,layer:m}),n=m}return s};function Xe(e){const a=G(E,null),t=d(()=>a?a.rootZIndex.value-100:ae),o=C([]),n=H(new Map),s=H(new Map),i=H(new Map),v=H(new Map),f=H(new Map),{resizeRef:y,contentRect:m}=he(),_=d(()=>{var u;const r=new Map,p=(u=e.overlaps)!=null?u:[];for(const x of p.filter(c=>c.includes(":"))){const[c,b]=x.split(":");if(!o.value.includes(c)||!o.value.includes(b))continue;const $=n.get(c),A=n.get(b),z=s.get(c),O=s.get(b);!$||!A||!z||!O||(r.set(b,{position:$.value,amount:parseInt(z.value,10)}),r.set(c,{position:A.value,amount:-parseInt(O.value,10)}))}return r}),g=d(()=>{const r=[...new Set([...i.values()].map(u=>u.value))].sort((u,x)=>u-x),p=[];for(const u of r){const x=o.value.filter(c=>{var b;return((b=i.get(c))==null?void 0:b.value)===u});p.push(...x)}return Ze(p,n,s,v)}),B=d(()=>!Array.from(f.values()).some(r=>r.value)),T=d(()=>g.value[g.value.length-1].layer),M=d(()=>({"--v-layout-left":I(T.value.left),"--v-layout-right":I(T.value.right),"--v-layout-top":I(T.value.top),"--v-layout-bottom":I(T.value.bottom),...B.value?void 0:{transition:"none"}})),S=d(()=>g.value.slice(1).map((r,p)=>{let{id:u}=r;const{layer:x}=g.value[p],c=s.get(u),b=n.get(u);return{id:u,...x,size:Number(c.value),position:b.value}})),V=r=>S.value.find(p=>p.id===r),w=oe("createLayout"),R=C(!1);ne(()=>{R.value=!0}),le(E,{register:(r,p)=>{let{id:u,order:x,position:c,layoutSize:b,elementSize:$,active:A,disableTransitions:z,absolute:O}=p;i.set(u,x),n.set(u,c),s.set(u,b),v.set(u,A),z&&f.set(u,z);const J=He(re,w==null?void 0:w.vnode).indexOf(r);J>-1?o.value.splice(J,0,u):o.value.push(u);const Q=d(()=>S.value.findIndex(L=>L.id===u)),U=d(()=>t.value+g.value.length*2-Q.value*2),pe=d(()=>{const L=c.value==="left"||c.value==="right",q=c.value==="right",be=c.value==="bottom",ee={[c.value]:0,zIndex:U.value,transform:`translate${L?"X":"Y"}(${(A.value?0:-110)*(q||be?-1:1)}%)`,position:O.value||t.value!==ae?"absolute":"fixed",...B.value?void 0:{transition:"none"}};if(!R.value)return ee;const h=S.value[Q.value];if(!h)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const F=_.value.get(u);return F&&(h[F.position]+=F.amount),{...ee,height:L?`calc(100% - ${h.top}px - ${h.bottom}px)`:$.value?`${$.value}px`:void 0,left:q?void 0:`${h.left}px`,right:q?`${h.right}px`:void 0,top:c.value!=="bottom"?`${h.top}px`:void 0,bottom:c.value!=="top"?`${h.bottom}px`:void 0,width:L?$.value?`${$.value}px`:void 0:`calc(100% - ${h.left}px - ${h.right}px)`}}),ge=d(()=>({zIndex:U.value-1}));return{layoutItemStyles:pe,layoutItemScrimStyles:ge,zIndex:U}},unregister:r=>{i.delete(r),n.delete(r),s.delete(r),v.delete(r),f.delete(r),o.value=o.value.filter(p=>p!==r)},mainRect:T,mainStyles:M,getLayoutItem:V,items:S,layoutRect:m,rootZIndex:t});const fe=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ye=d(()=>({zIndex:t.value,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:fe,layoutStyles:ye,getLayoutItem:V,items:S,layoutRect:m,layoutRef:y}}const ce=j({text:String,...X()},"v-toolbar-title"),de=P()({name:"VToolbarTitle",props:ce(),setup(e,a){let{slots:t}=a;return k(()=>{const o=!!(t.default||t.text||e.text);return l(e.tag,{class:"v-toolbar-title"},{default:()=>{var n;return[o&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Ge=[null,"prominent","default","comfortable","compact"],ve=j({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ge.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...xe(),..._e(),...Se(),...X({tag:"header"}),...se()},"v-toolbar"),D=P()({name:"VToolbar",props:ve(),setup(e,a){var g;let{slots:t}=a;const{backgroundColorClasses:o,backgroundColorStyles:n}=Ve(Z(e,"color")),{borderClasses:s}=Ie(e),{elevationClasses:i}=Be(e),{roundedClasses:v}=Te(e),{themeClasses:f}=ue(e),y=C(!!(e.extended||((g=t.extension)==null?void 0:g.call(t)))),m=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),_=d(()=>y.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ne({VBtn:{variant:"text"}}),k(()=>{var S;const B=!!(e.title||t.title),T=!!(t.image||e.image),M=(S=t.extension)==null?void 0:S.call(t);return y.value=!!(e.extended||M),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,s.value,i.value,v.value,f.value],style:[n.value]},{default:()=>[T&&l("div",{key:"image",class:"v-toolbar__image"},[l(K,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var V;return[t.image?(V=t.image)==null?void 0:V.call(t):l($e,null,null)]}})]),l(K,{defaults:{VTabs:{height:I(m.value)}}},{default:()=>{var V,w,R;return[l("div",{class:"v-toolbar__content",style:{height:I(m.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(V=t.prepend)==null?void 0:V.call(t)]),B&&l(de,{key:"title",text:e.title},{text:t.title}),(w=t.default)==null?void 0:w.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(R=t.append)==null?void 0:R.call(t)])])]}}),l(K,{defaults:{VTabs:{height:I(_.value)}}},{default:()=>[l(we,null,{default:()=>[y.value&&l("div",{class:"v-toolbar__extension",style:{height:I(_.value)}},[M])]})]})]})}),{contentHeight:m,extensionHeight:_}}});function We(e){var a;return Me(e,Object.keys((a=D==null?void 0:D.props)!=null?a:{}))}function me(){const e=C(!1);return ne(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:Oe(e)}}const Ye=P()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ve(),...qe(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const o=C(),n=De(e,"modelValue"),s=d(()=>{var m,_,g,B;const f=(_=(m=o.value)==null?void 0:m.contentHeight)!=null?_:0,y=(B=(g=o.value)==null?void 0:g.extensionHeight)!=null?B:0;return f+y}),{ssrBootStyles:i}=me(),{layoutItemStyles:v}=Ke({id:e.name,order:d(()=>parseInt(e.order,10)),position:Z(e,"location"),layoutSize:s,elementSize:s,active:n,absolute:Z(e,"absolute")});return k(()=>{const[f]=We(e);return l(D,ie({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...v.value,height:void 0,...i.value}},f),t)}),{}}}),Je=P()({name:"VAppBarTitle",props:ce(),setup(e,a){let{slots:t}=a;return k(()=>l(de,ie(e,{class:"v-app-bar-title"}),t)),{}}}),Qe={methods:{SignOut(){sessionStorage.clear(),this.$router.push("/")}}};function et(e,a,t,o,n,s){return W(),Y(Ye,{flat:""},{default:N(()=>[l(Je,null,{default:N(()=>[l(ke,{icon:"mdi-file-arrow-left-right-outline"}),te(" PDF CRUD ")]),_:1}),l(Pe,{class:"ml-auto",color:"blue",text:"",onClick:a[0]||(a[0]=i=>s.SignOut())},{default:N(()=>[te("SIGN OUT")]),_:1})]),_:1})}const tt=Ce(Qe,[["render",et]]);const at=P()({name:"VMain",props:{scrollable:Boolean,...X({tag:"main"})},setup(e,a){let{slots:t}=a;const{mainStyles:o}=Fe(),{ssrBootStyles:n}=me();return k(()=>l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[o.value,n.value]},{default:()=>{var s,i;return[e.scrollable?l("div",{class:"v-main__scroller"},[(s=t.default)==null?void 0:s.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),ot={__name:"View",setup(e){return(a,t)=>{const o=Ee("router-view");return W(),Y(at,null,{default:N(()=>[l(o)]),_:1})}}};const nt=P()({name:"VApp",props:{...Ue({fullHeight:!0}),...se()},setup(e,a){let{slots:t}=a;const o=ue(e),{layoutClasses:n,layoutStyles:s,getLayoutItem:i,items:v,layoutRef:f}=Xe(e),{rtlClasses:y}=je();return k(()=>{var m;return l("div",{ref:f,class:["v-application",o.themeClasses.value,n.value,y.value],style:s.value},[l("div",{class:"v-application__wrap"},[(m=t.default)==null?void 0:m.call(t)])])}),{getLayoutItem:i,items:v,theme:o}}}),it={__name:"Default",setup(e){return(a,t)=>(W(),Y(nt,null,{default:N(()=>[l(tt),l(ot)]),_:1}))}};export{it as default};
