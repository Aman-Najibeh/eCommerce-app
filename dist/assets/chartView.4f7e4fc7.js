import{_ as r,r as o,o as a,f as c,a as e,aF as $,ac as n,t as x,w as l,F as g}from"./index.4d9cef6d.js";import{u as C}from"./Product.caae5f64.js";import{V as b,a as h}from"./VRow.a459597f.js";const v={data:function(){return{options:{chart:{id:"vuechart-example"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}]}}},w={class:"ma-10"};function V(t,i,p,u,d,_){const s=o("apexchart");return a(),c("div",w,[e(s,{width:"500",type:"bar",options:t.options,series:t.series},null,8,["options","series"])])}const y=r(v,[["render",V]]),P={data:function(){return{options:{},series:[44,55,41,17,15]}}};function S(t,i,p,u,d,_){const s=o("apexchart");return a(),c("div",null,[e(s,{width:"380",type:"donut",options:t.options,series:t.series},null,8,["options","series"])])}const B=r(P,[["render",S]]),F={data:function(){return{options:{chart:{id:"vuechart-example"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}]}}};function k(t,i,p,u,d,_){const s=o("apexchart");return a(),c("div",null,[e(s,{width:"500",type:"line",options:t.options,series:t.series},null,8,["options","series"])])}const D=r(F,[["render",k]]),N={components:{barChart:y,DonutChart:B,LineChart:D},computed:{...$(C,["ProductsStore"])}},E={class:"mb-16 pa-16 bg-blue-grey-lighten-4"},L=n("p",{class:"text-h5 text-center"},"Users count: 30 user ",-1),R={class:"text-h5 text-center"};function U(t,i,p,u,d,_){const s=o("donut-chart"),m=o("barChart"),f=o("line-chart");return a(),c(g,null,[n("section",E,[n("div",null,[L,n("p",R,"Products count : "+x(t.ProductsStore.length)+" Product",1)])]),e(b,null,{default:l(()=>[e(h,null,{default:l(()=>[e(s)]),_:1}),e(h,null,{default:l(()=>[e(m)]),_:1})]),_:1}),e(f)],64)}const A=r(N,[["render",U]]);export{A as default};
