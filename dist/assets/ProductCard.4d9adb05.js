import{aG as u,_ as m,o as f,c as h,w as e,a,ak as _,a8 as p,d as n,t as r,ac as o,b as V,V as d,aX as g,a6 as v,aE as w,e as C,aT as b}from"./index.4d9cef6d.js";import{u as S}from"./NavBarSection.5eb35bf7.js";import{c as x,d as y,e as T,V as c,b as N,a as k}from"./VCard.74c28c20.js";import{V as B}from"./VRow.a459597f.js";import{b as P}from"./VToolbar.277fc3c7.js";const A={data:()=>({show:!1,loading:!1,selection:1}),methods:{...u(S,["AddToCart"]),reserve(){this.loading=!0,setTimeout(()=>this.loading=!1,2e3)}},props:{id:Number,title:String,price:Number,description:String,category:String,thumbnail:String}},D={class:"mr-1"},I={class:"mt-4 text-subtitle-1"};function E(t,i,s,$,z,G){return f(),h(k,{loading:t.loading,class:"mx-auto my-12 cardstyle","max-width":"374",color:"info"},{loader:e(({isActive:l})=>[a(_,{active:l,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:e(()=>[a(p,{height:"250",width:"100%",src:s.thumbnail,class:"w-100",cover:""},null,8,["src"]),a(T,null,{default:e(()=>[a(x,null,{default:e(()=>[n(r(s.title),1)]),_:1}),a(y,null,{default:e(()=>[o("span",D,r(s.category),1),a(V,{color:"error",icon:"mdi-fire-circle",size:"small"})]),_:1})]),_:1}),a(c,{class:"mb-0 pb-0"},{default:e(()=>[a(B,{align:"center",class:"mx-0"}),o("div",I," $ \u2022 "+r(s.price),1)]),_:1}),a(N,{mt:"0",pt:"0"},{default:e(()=>[a(d,{class:"cartcolor",variant:"text"},{default:e(()=>[g(t.$slots,"default")]),_:3}),a(P),a(d,{icon:t.show?"mdi-chevron-up":"mdi-chevron-down",onClick:i[0]||(i[0]=l=>t.show=!t.show)},null,8,["icon"])]),_:3}),a(b,null,{default:e(()=>[v(o("div",null,[a(C),a(c,null,{default:e(()=>[n(r(s.description),1)]),_:1})],512),[[w,t.show]])]),_:1})]),_:3},8,["loading"])}const F=m(A,[["render",E]]);export{F as P};
