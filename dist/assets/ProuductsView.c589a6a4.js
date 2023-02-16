import{P as g}from"./ProductCard.acd8bbc2.js";import{aE as k,aU as S,aV as h,aF as m,_ as V,aG as y,r as i,o as n,c as p,ac as d,a as o,w as r,d as a,V as s,aW as b,F as f,ak as B,f as A,al as N,am as w,b as T}from"./index.1756445f.js";import{u as I,N as L}from"./NavBarSection.11be420b.js";import{u}from"./Product.781c0463.js";import{V as v}from"./VContainer.c05ae85c.js";import{V as U,a as D}from"./VRow.2c1998e9.js";import{b as E}from"./VCard.3ef8ac5f.js";import"./VToolbar.0681710f.js";import"./layout.18ae83ed.js";const R={components:{ProductCard:g},created(){this.loadProducts(),this.productFilterValue("all")},data(){return{Products:this.ProductsStore}},computed:{...k(y,["isLoggedIn"]),...S(u),...h(u,["searchvalue","productFilterValue","ProductsStore","filteredProducts","productFilterAll","productFilterlaptops","productFilterfragrances"])},methods:{...m(I,["AddToCart"]),...m(u,["addProducttoStore","deletProductStore","selectSingleProduct"]),loadProducts(){this.axios("https://dummyjson.com/products").then(e=>{this.addProducttoStore(e.data.products),console.log(e.data.products)})}}},W={class:"bg"},j=d("p",{class:"pcolor"},"Our Product",-1);function z(e,t,_,P,C,F){const c=i("product-card");return n(),p(f,null,[d("section",W,[o(v,null,{default:r(()=>[j]),_:1})]),d("section",null,[o(s,{onClick:t[0]||(t[0]=l=>e.productFilterValue("all")),class:"ma-8 hoveryellocolor",color:"#f2f2f3"},{default:r(()=>[a("All")]),_:1}),o(s,{onClick:t[1]||(t[1]=l=>e.productFilterValue("smartphones")),class:"ma-8 hoveryellocolor",color:"#f2f2f3"},{default:r(()=>[a("smartphones")]),_:1}),o(s,{onClick:t[2]||(t[2]=l=>e.productFilterValue("laptops")),class:"ma-8 hoveryellocolor",color:"#f2f2f3"},{default:r(()=>[a("laptops")]),_:1}),o(s,{onClick:t[3]||(t[3]=l=>e.productFilterValue("fragrances")),class:"ma-8 hoveryellocolor",color:"#f2f2f3"},{default:r(()=>[a("fragrances")]),_:1}),o(s,{onClick:t[4]||(t[4]=l=>e.productFilterValue("skincare")),class:"ma-8 hoveryellocolor",color:"#f2f2f3"},{default:r(()=>[a("skincare")]),_:1}),o(s,{onClick:t[5]||(t[5]=l=>e.productFilterValue("groceries")),class:"ma-8 hoveryellocolor",color:"#f2f2f3"},{default:r(()=>[a("groceries")]),_:1}),o(s,{onClick:t[6]||(t[6]=l=>e.productFilterValue("home-decoration")),class:"ma-8 hoveryellocolor",color:"#f2f2f3"},{default:r(()=>[a("home-decoration")]),_:1}),o(b,{modelValue:e.searchvalue,"onUpdate:modelValue":t[7]||(t[7]=l=>e.searchvalue=l),modelModifiers:{trim:!0},label:"search",class:"ma-8"},null,8,["modelValue"])]),d("section",null,[o(v,null,{default:r(()=>[o(U,null,{default:r(()=>[(n(!0),p(f,null,B(e.filteredProducts,l=>(n(),A(D,{cols:"12",sm:"6",md:"6",lg:"4",xl:"3",key:l.id},{default:r(()=>[o(c,N(w(l)),{default:r(()=>[o(s,{onClick:$=>e.selectSingleProduct(l),class:"cartcolor",variant:"text",color:"#FBDF07",to:"/singleproduct"},{default:r(()=>[a("read more info ")]),_:2},1032,["onClick"]),o(E,null,{default:r(()=>[o(s,{disabled:!e.isLoggedIn,class:"cartcolor",onClick:$=>e.AddToCart(l),color:"#FBDF07"},{default:r(()=>[o(T,null,{default:r(()=>[a("mdi-cart-plus")]),_:1}),a(" Add to cart")]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),_:2},1040)]),_:2},1024))),128))]),_:1})]),_:1})])],64)}const G=V(R,[["render",z]]),M={components:{ProductsSection:G,NavBarSection:L}};function O(e,t,_,P,C,F){const c=i("nav-bar-section"),l=i("products-section");return n(),p(f,null,[o(c),o(l)],64)}const oo=V(M,[["render",O]]);export{oo as default};