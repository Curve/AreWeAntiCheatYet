(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{4280:function(e,t,n){"use strict";n.d(t,{V:function(){return z}});var r=n(7294),o=n(4761),i=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&c(e,n,t[n]);return e},u=n(6817),h=Object.defineProperty,p=Object.defineProperties,x=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,j=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&j(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&j(e,n,t[n]);return e},y=(e,t)=>p(e,x(t)),v=(0,u.k)((e,{color:t})=>({root:y(b({},e.fn.fontStyles()),{fontSize:e.fontSizes.lg,lineHeight:e.lineHeight,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,margin:0,borderTopRightRadius:e.radius.sm,borderBottomRightRadius:e.radius.sm,padding:`${e.spacing.md}px ${e.spacing.lg}px`}),inner:{display:"flex"},body:{flex:1,overflow:"hidden",textOverflow:"ellipsis"},icon:{color:e.fn.variant({variant:"filled",color:t}).background,marginRight:e.spacing.lg,marginTop:2,width:22},cite:{display:"block",fontSize:e.fontSizes.sm,marginTop:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],overflow:"hidden",textOverflow:"ellipsis"}})),w=n(7414),k=Object.defineProperty,O=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&S(e,n,t[n]);if(O)for(var n of O(t))P.call(t,n)&&S(e,n,t[n]);return e},N=(e,t)=>{var n={};for(var r in e)Z.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&O)for(var r of O(e))0>t.indexOf(r)&&P.call(e,r)&&(n[r]=e[r]);return n};let _={color:"gray",icon:r.createElement(function(e){return r.createElement("svg",d({width:"20",height:"20",viewBox:"0 0 409.294 409.294",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z"}))},null)},z=(0,r.forwardRef)((e,t)=>{let n=(0,o.N4)("Blockquote",_,e),{className:i,color:a,icon:l,cite:s,children:c,classNames:d,styles:u,unstyled:h}=n,p=N(n,["className","color","icon","cite","children","classNames","styles","unstyled"]),{classes:x,cx:f}=v({color:a},{classNames:d,styles:u,unstyled:h,name:"Blockquote"});return r.createElement(w.x,E({component:"blockquote",className:f(x.root,i),ref:t},p),r.createElement("div",{className:x.inner},l&&r.createElement("div",{className:x.icon},l),r.createElement("div",{className:x.body},c,s&&r.createElement("cite",{className:x.cite},s))))});z.displayName="@mantine/core/Blockquote"},4411:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/grid/[page]",function(){return n(9239)}])},3008:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),o=n(7841),i=(0,n(853).Z)("chart-area","IconChartArea",[["path",{d:"M4 19l16 0",key:"svg-0"}],["path",{d:"M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0",key:"svg-1"}]]),a=n(1163);function l(e){let{...t}=e,{basePath:n}=(0,a.useRouter)();return(0,r.jsx)(o.z,{...t,color:"gray",component:"a",variant:"light",target:"_blank",href:"".concat(n,"/breakdown"),leftIcon:(0,r.jsx)(i,{}),children:"Anti-Cheat Breakdown"})}},6330:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(5893),o=n(7564),i=n(1232),a=n(9814),l=n(7804),s=n(4065),c=n(880),d=n(7294),u=n(9192),h=n(7572),p=n(559);function x(e){var t;let{page:n,games:x,totalPages:f,assets:m,...g}=e,j=null===(t=(0,s.a)("(min-width: 1200px)"))||void 0===t||t,[b,y]=(0,d.useState)(x),[v,w]=(0,d.useState)(!1),{changes:k}=(0,d.useContext)(u.J),O=(0,c.useRouter)();return(0,r.jsxs)(o.K,{align:"center",...g,children:[(0,r.jsx)(i.Z,{position:"center",children:(0,r.jsx)(h.Z,{games:b,page:n,initialGames:x,setFiltered:w,setGames:y})}),(0,r.jsx)(a.M,{spacing:"xl",cols:4,breakpoints:[{cols:2,maxWidth:1335},{cols:1,maxWidth:715}],...g,children:b.map(e=>{let{slug:t}=e,n=k.find(e=>e.recent.slug===t);return(0,r.jsx)(p.Z,{game:e,banner:m.get(t).banner,change:n},t)})}),!v&&(0,r.jsx)(l.t,{radius:"md",page:n,total:f,size:j?"lg":void 0,onChange:e=>O.push("/grid/".concat(e))})]})}},8034:function(e,t,n){"use strict";n.d(t,{Z:function(){return x},d:function(){return p}});var r=n(5893),o=n(7564),i=n(1232),a=n(5044),l=n(9236),s=n(5117),c=n(7841),d=n(5963),u=n(5063),h=n(534);function p(){return(0,r.jsxs)(o.K,{children:[(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.k,{color:h.Z.supported.color,radius:"xl",children:(0,r.jsx)(h.Z.supported.icon,{size:16})}),(0,r.jsx)(l.D,{order:5,children:"Supported"})]}),(0,r.jsx)(s.x,{children:"Games that run on Linux due to the developers going out of their way to enable the anti-cheat to run on Linux or games that have anti-cheat which works perfectly fine out of the box under Wine/Proton (e.g. Overwatch, Battlefield 4)"}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.k,{color:h.Z.running.color,radius:"xl",children:(0,r.jsx)(h.Z.running.icon,{size:16})}),(0,r.jsx)(l.D,{order:5,children:"Running"})]}),(0,r.jsx)(s.x,{children:"Games that will run on Linux without impact on online gameplay but may require you to perform certain tinkering steps (This does not include any means of explicitly bypassing the anti-cheat)"}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.k,{color:h.Z.planned.color,radius:"xl",children:(0,r.jsx)(h.Z.planned.icon,{size:16})}),(0,r.jsx)(l.D,{order:5,children:"Planned"})]}),(0,r.jsx)(s.x,{children:"Games where the developers have explicitly stated that they plan to enable their anti-cheat to work on Linux or that they plan to support the game natively"}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.k,{color:h.Z.broken.color,radius:"xl",children:(0,r.jsx)(h.Z.broken.icon,{size:16})}),(0,r.jsx)(l.D,{order:5,children:"Broken"})]}),(0,r.jsx)(s.x,{children:"Games that will not run online due to the deployed anti-cheat solution"}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.k,{color:h.Z.denied.color,radius:"xl",children:(0,r.jsx)(h.Z.denied.icon,{size:16})}),(0,r.jsx)(l.D,{order:5,children:"Denied"})]}),(0,r.jsx)(s.x,{children:"Games where the developers have explicitly stated that they will not enable the anti-cheat solution to work on Linux or have denied the possibility of Linux support"})]})}function x(e){let{...t}=e;return(0,r.jsx)(c.z,{...t,color:"gray",variant:"light",leftIcon:(0,r.jsx)(u.Z,{}),onClick:()=>(0,d.h7)({children:(0,r.jsx)(p,{})}),children:'What does "Supported", "Running", ... mean?'})}},9239:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return p}});var r=n(5893),o=n(7564),i=n(4280),a=n(7294),l=n(6330),s=n(8034),c=n(5858),d=n(9192),u=n(3008),h=!0;function p(e){let{page:t,totalPages:n,currentGames:h,images:p,...x}=e,{overview:f}=(0,a.useContext)(d.J),m=new Map(p);return(0,r.jsxs)(o.K,{align:"center",mt:70,children:[(0,r.jsx)(i.V,{cite:"- Starz0r",mb:50,children:"A comprehensive and crowd-sourced list of games using anti-cheats and their compatibility with GNU/Linux or Wine/Proton."}),(0,r.jsx)(c.Z,{variant:f,...x}),(0,r.jsx)(s.Z,{mt:30}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(l.Z,{page:t,totalPages:n,games:h,assets:m,mt:50,mb:20})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4411)}),_N_E=e.O()}]);