(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{9787:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/[id]",function(){return r(5119)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,a=r(1598).Z,o=r(7273).Z,l=a(r(7294)),s=i(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=i(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/AreWeAntiCheatYet/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,i,a,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let x=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:a,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:m,loading:h,srcString:x,config:b,unoptimized:v,loader:w,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:O,setShowAltText:S,onLoad:z,onError:E}=e,C=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},C,r,{width:a,height:i,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:h,style:n({},d,u),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,x,m,y,j,O,v))},[x,m,y,j,O,E,v,t]),onLoad:e=>{let t=e.currentTarget;p(t,x,m,y,j,O,v)},onError:e=>{S(!0),"blur"===m&&O(!0),E&&E(e)}})))}),b=l.forwardRef((e,t)=>{let r,i;var a,{src:p,sizes:b,unoptimized:v=!1,priority:w=!1,loading:y,className:j,quality:O,width:S,height:z,fill:E,style:C,onLoad:_,onLoadingComplete:k,placeholder:P="empty",blurDataURL:M,layout:I,objectFit:N,objectPosition:A,lazyBoundary:R,lazyRoot:Z}=e,G=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=l.useContext(u.ImageConfigContext),W=l.useMemo(()=>{let e=g||L||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[L]),X=G,B=X.loader||f.default;delete X.loader;let D="__next_img_default"in B;if(D){if("custom"===W.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=B;B=t=>{let{config:r}=t,n=o(t,["config"]);return e(n)}}if(I){"fill"===I&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(C=n({},C,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!b&&(b=t)}let F="",T=h(S),U=h(z);if("object"==typeof(a=p)&&(m(a)||void 0!==a.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,i=e.blurHeight,M=M||e.blurDataURL,F=e.src,!E){if(T||U){if(T&&!U){let t=T/e.width;U=Math.round(e.height*t)}else if(!T&&U){let t=U/e.height;T=Math.round(e.width*t)}}else T=e.width,U=e.height}}let $=!w&&("lazy"===y||void 0===y);((p="string"==typeof p?p:F).startsWith("data:")||p.startsWith("blob:"))&&(v=!0,$=!1),W.unoptimized&&(v=!0),D&&p.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(v=!0);let[q,Y]=l.useState(!1),[V,J]=l.useState(!1),H=h(O),K=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:A}:{},V?{}:{color:"transparent"},C),Q="blur"===P&&M&&!q?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:T,heightInt:U,blurWidth:r,blurHeight:i,blurDataURL:M}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:o,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:a,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:a,width:s[d]})}}({config:W,src:p,unoptimized:v,width:T,quality:H,sizes:b,loader:B}),et=p,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:X.crossOrigin},en=l.useRef(_);l.useEffect(()=>{en.current=_},[_]);let ei=l.useRef(k);l.useEffect(()=>{ei.current=k},[k]);let ea=n({isLazy:$,imgAttributes:ee,heightInt:U,widthInt:T,qualityInt:H,className:j,imgStyle:K,blurStyle:Q,loading:y,config:W,fill:E,unoptimized:v,placeholder:P,loader:B,srcString:et,onLoadRef:en,onLoadingCompleteRef:ei,setBlurComplete:Y,setShowAltText:J},X);return l.default.createElement(l.default.Fragment,null,l.default.createElement(x,Object.assign({},ea,{ref:t})),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a}=e,o=n||t,l=i||r,s=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5119:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ew},default:function(){return ey}});var n=r(5893),i=r(4761),a=r(7294),o=r(8216);let[l,s]=(0,o.R)("Grid component was not found in tree");var c=r(7447),d=r(6817),u=Object.defineProperty,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&h(e,r,t[r]);if(f)for(var r of f(t))m.call(t,r)&&h(e,r,t[r]);return e};let x=(e,t)=>"content"===e?"auto":"auto"===e?"0px":e?`${100/(t/e)}%`:void 0,b=(e,t,r)=>r||"auto"===e||"content"===e?"unset":x(e,t),v=(e,t)=>{if(e)return"auto"===e||t?1:0},w=(e,t)=>0===e?0:e?`${100/(t/e)}%`:void 0,y=(e,t)=>void 0!==e?t.fn.size({size:e,sizes:t.spacing})/2:void 0;var j=(0,d.k)((e,{gutter:t,gutterXs:r,gutterSm:n,gutterMd:i,gutterLg:a,gutterXl:o,grow:l,offset:s,offsetXs:d,offsetSm:u,offsetMd:f,offsetLg:g,offsetXl:m,columns:h,span:j,xs:O,sm:S,md:z,lg:E,xl:C,order:_,orderXs:k,orderSm:P,orderMd:M,orderLg:I,orderXl:N})=>({col:p({boxSizing:"border-box",flexGrow:v(j,l),order:_,padding:y(t,e),marginLeft:w(s,h),flexBasis:x(j,h),flexShrink:0,width:"content"===j?"auto":void 0,maxWidth:b(j,h,l)},function({sizes:e,offsets:t,orders:r,theme:n,columns:i,gutters:a,grow:o}){return c.j1.reduce((l,s)=>(l[`@media (min-width: ${n.breakpoints[s]}px)`]={order:r[s],flexBasis:x(e[s],i),padding:y(a[s],n),flexShrink:0,width:"content"===e[s]?"auto":void 0,maxWidth:b(e[s],i,o),marginLeft:w(t[s],i),flexGrow:v(e[s],o)},l),{})}({sizes:{xs:O,sm:S,md:z,lg:E,xl:C},offsets:{xs:d,sm:u,md:f,lg:g,xl:m},orders:{xs:k,sm:P,md:M,lg:I,xl:N},gutters:{xs:r,sm:n,md:i,lg:a,xl:o},theme:e,columns:h,grow:l}))})),O=r(7414),S=Object.defineProperty,z=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&_(e,r,t[r]);if(z)for(var r of z(t))C.call(t,r)&&_(e,r,t[r]);return e},P=(e,t)=>{var r={};for(var n in e)E.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&z)for(var n of z(e))0>t.indexOf(n)&&C.call(e,n)&&(r[n]=e[n]);return r};let M={},I=(0,a.forwardRef)((e,t)=>{let r=(0,i.N4)("GridCol",M,e),{children:n,span:o,offset:l,offsetXs:c,offsetSm:d,offsetMd:u,offsetLg:f,offsetXl:g,xs:m,sm:h,md:p,lg:x,xl:b,order:v,orderXs:w,orderSm:y,orderMd:S,orderLg:z,orderXl:E,className:C,id:_,unstyled:I}=r,N=P(r,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled"]),A=s(),R=o||A.columns,{classes:Z,cx:G}=j({gutter:A.gutter,gutterXs:A.gutterXs,gutterSm:A.gutterSm,gutterMd:A.gutterMd,gutterLg:A.gutterLg,gutterXl:A.gutterXl,offset:l,offsetXs:c,offsetSm:d,offsetMd:u,offsetLg:f,offsetXl:g,xs:m,sm:h,md:p,lg:x,xl:b,order:v,orderXs:w,orderSm:y,orderMd:S,orderLg:z,orderXl:E,grow:A.grow,columns:A.columns,span:R},{unstyled:I,name:"Grid"});return!("auto"===R||"content"===R||"number"==typeof R&&R>0&&R%1==0)||R>A.columns?null:a.createElement(O.x,k({className:G(Z.col,C),ref:t},N),n)});I.displayName="@mantine/core/Col";var N=Object.defineProperty,A=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,L=(e,t)=>{for(var r in t||(t={}))R.call(t,r)&&G(e,r,t[r]);if(A)for(var r of A(t))Z.call(t,r)&&G(e,r,t[r]);return e},W=(0,d.k)((e,{justify:t,align:r,gutter:n,gutterXs:i,gutterSm:a,gutterMd:o,gutterLg:l,gutterXl:s})=>{var d,u;return{root:L({margin:-e.fn.size({size:n,sizes:e.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:t,alignItems:r},(d={xs:i,sm:a,md:o,lg:l,xl:s},u=e,c.j1.reduce((e,t)=>(void 0!==d[t]&&(e[`@media (min-width: ${u.breakpoints[t]}px)`]={margin:-u.fn.size({size:d[t],sizes:u.spacing})/2}),e),{})))}}),X=Object.defineProperty,B=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&T(e,r,t[r]);if(B)for(var r of B(t))F.call(t,r)&&T(e,r,t[r]);return e},$=(e,t)=>{var r={};for(var n in e)D.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&B)for(var n of B(e))0>t.indexOf(n)&&F.call(e,n)&&(r[n]=e[n]);return r};let q={gutter:"md",justify:"flex-start",align:"stretch",columns:12},Y=(0,a.forwardRef)((e,t)=>{let r=(0,i.N4)("Grid",q,e),{gutter:n,gutterXs:o,gutterSm:s,gutterMd:c,gutterLg:d,gutterXl:u,children:f,grow:g,justify:m,align:h,columns:p,className:x,id:b,unstyled:v}=r,w=$(r,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled"]),{classes:y,cx:j}=W({gutter:n,justify:m,align:h,gutterXs:o,gutterSm:s,gutterMd:c,gutterLg:d,gutterXl:u},{unstyled:v,name:"Grid"});return a.createElement(l,{value:{gutter:n,gutterXs:o,gutterSm:s,gutterMd:c,gutterLg:d,gutterXl:u,grow:g,columns:p}},a.createElement(O.x,U({className:j(y.root,x),ref:t},w),f))});Y.Col=I,Y.displayName="@mantine/core/Grid";var V=r(9094),J=r(7564),H=r(2623),K=r(9236),Q=r(9834),ee=r(1232),et=r(8393),er=r(5117),en=r(4065),ei=r(5063),ea=r(853),eo=(0,ea.Z)("world","IconWorld",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M3.6 9l16.8 0",key:"svg-1"}],["path",{d:"M3.6 15l16.8 0",key:"svg-2"}],["path",{d:"M11.5 3a17 17 0 0 0 0 18",key:"svg-3"}],["path",{d:"M12.5 3a17 17 0 0 1 0 18",key:"svg-4"}]]),el=(0,ea.Z)("award","IconAward",[["path",{d:"M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",key:"svg-0"}],["path",{d:"M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889",key:"svg-1"}],["path",{d:"M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889",key:"svg-2"}]]),es=r(9008),ec=r.n(es),ed=r(5675),eu=r.n(ed),ef=r(1138),eg=r(1892),em=r(2257),eh=r(608),ep=(0,ea.Z)("brand-steam","IconBrandSteam",[["path",{d:"M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 3l-.176 0a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z",key:"svg-0"}],["circle",{cx:"16.5",cy:"9.5",r:"1",fill:"currentColor",key:"svg-1"}]]),ex=r(1163);function eb(e){let{height:t,game:r,...i}=e,{storeIds:a}=r,{basePath:o}=(0,ex.useRouter)();return(0,n.jsx)(ee.Z,{noWrap:!0,...i,children:Object.keys(a).map(e=>{let r=a[e],i="epic"===e?"Epic Games":"Steam",l="epic"===e?"https://store.epicgames.com/p/".concat(r.slug):"https://store.steampowered.com/app/".concat(r);return(0,n.jsx)(et.u,{transition:"slide-up",label:i,events:{hover:!0,touch:!0,focus:!0},children:(0,n.jsx)(Q.A,{variant:"transparent",size:t,component:"a",href:l,target:"_blank",children:"epic"===e?(0,n.jsx)("img",{src:"".concat(o,"/stores/epic-games.webp"),alt:"Epic Games",height:t}):(0,n.jsx)(ep,{color:"white",size:t})})},i)})})}var ev=r(1223),ew=!0;function ey(e){var t;let{banner:r,game:a}=e,o=null===(t=(0,en.a)("(min-width: 1200px)"))||void 0===t||t,l=(0,i.rZ)(),s=r?l.colors.dark[6]:"gray",c={position:"absolute",width:"inherit",height:"100%",zIndex:-1};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ec(),{children:[(0,n.jsx)("meta",{name:"og:image",content:r}),(0,n.jsx)("meta",{name:"og:title",content:a.name}),(0,n.jsx)("title",{children:a.name+" - AreWeAntiCheatYet"}),(0,n.jsx)("meta",{name:"og:description",content:"".concat(a.name," on AreWeAntiCheatYet")}),(0,n.jsx)("meta",{name:"description",content:"See Game Status and Updates of ".concat(a.name," on AreWeAntiCheatYet")},"desc")]}),(0,n.jsxs)(Y,{columns:o?3:1,m:0,sx:{height:"100%"},children:[(0,n.jsx)(Y.Col,{span:1,p:0,children:(0,n.jsxs)(O.x,{sx:{position:"relative",overflow:"hidden",height:"100%",width:"100%"},children:[(0,n.jsx)(O.x,{bg:s,style:{...c}}),(0,n.jsx)(O.x,{style:r?{background:"url('".concat(r,"') center / cover , linear-gradient(black, gray)"),filter:"blur(50px)",opacity:.5,...c}:void 0}),(0,n.jsx)(V.M,{mt:80,children:(0,n.jsxs)(J.K,{align:"center",children:[(0,n.jsx)(H.X,{radius:"xl",shadow:"xl",sx:{overflow:"hidden"},children:r?(0,n.jsx)(eu(),{src:r,style:{objectFit:"cover"},alt:"Banner",width:220,height:310}):(0,n.jsx)(V.M,{bg:"gray",w:220,h:310,children:(0,n.jsx)(ei.Z,{size:32})})}),(0,n.jsx)(K.D,{mt:15,color:"white",align:"center",children:a.name}),a.url&&(0,n.jsx)(Q.A,{variant:"transparent",component:"a",href:a.url,target:"_blank",children:(0,n.jsx)(eo,{color:"white",size:64})}),(0,n.jsx)(eh.Z,{mt:20,shadow:"lg",fz:20,weight:700,size:32,game:a}),a.native&&(0,n.jsx)(ee.Z,{mt:15,children:(0,n.jsx)(et.u,{label:"Native",children:(0,n.jsx)(el,{size:48})})}),a.anticheats.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(er.x,{mt:20,fz:"md",color:"dimmed",children:"AntiCheat"}),(0,n.jsx)(ee.Z,{noWrap:!0,mb:20,children:a.anticheats.map(e=>(0,n.jsx)(ef.Z,{anticheat:e,height:64},e))})]}),Object.entries(a.storeIds).length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(er.x,{mt:20,fz:"md",color:"dimmed",children:"Available on"}),(0,n.jsx)(eb,{game:a,height:64,mb:20})]})]})})]})}),(0,n.jsx)(Y.Col,{mt:25,span:o?2:1,children:(0,n.jsxs)(Y,{columns:o?2:1,sx:{height:"100%"},children:[(0,n.jsxs)(Y.Col,{p:50,span:1,children:[(0,n.jsx)(K.D,{children:"Updates"}),(0,n.jsx)(ev.Z,{mt:55,game:a})]}),(0,n.jsxs)(Y.Col,{p:50,span:1,children:[(0,n.jsx)(K.D,{children:"Notes"}),(0,n.jsx)(eg.Z,{mt:50,game:a})]}),(0,n.jsxs)(Y.Col,{p:50,offset:o?1:0,span:1,children:[(0,n.jsx)(K.D,{children:"Reference"}),(0,n.jsx)(em.Z,{mt:55,game:a})]})]})})]})]})}},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9787)}),_N_E=e.O()}]);