import{_ as r,o as l,f as n,a as o,w as u,ac as t,F as _,al as f,br as m,t as s,a8 as g,e as x,r as y,c as $}from"./index.4d9cef6d.js";const b={data(){return{userlist:[],loading:!1}},created(){this.loadUserList()},methods:{loadUserList(){this.loading=!0,this.axios("https://dummyjson.com/users").then(a=>{this.userlist=a.data.users,this.loading=!1}),console.log(this.userlist)}}},B={class:"ma-16"},U=t("thead",null,[t("tr",{class:"bg-secondary",color:"#FBDF07"},[t("th",{class:"text-center py-2"},"Id"),t("th",{class:"text-left py-2"},"Image"),t("th",{class:"text-left py-2"},"Name"),t("th",{class:"text-left py-2"},"Age"),t("th",{class:"text-left py-2"},"Gender"),t("th",{class:"text-left py-2"},"Email"),t("th",{class:"text-left py-2"},"BirthDate"),t("th",{class:"text-left py-2"},"Phone")])],-1);function V(a,i,d,h,c,p){return l(),n("section",B,[o(m,null,{default:u(()=>[U,t("tbody",null,[(l(!0),n(_,null,f(c.userlist,e=>(l(),n("tr",{class:"bg-info",key:e.id},[t("td",null,s(e.id),1),t("td",null,[o(g,{src:e.image},null,8,["src"])]),t("td",null,s(e.username),1),t("td",null,s(e.age),1),t("td",null,s(e.gender),1),t("td",null,s(e.email),1),t("td",null,s(e.birthDate),1),t("td",null,s(e.phone),1),o(x)]))),128))])]),_:1})])}const D=r(b,[["render",V]]),k={components:{UserslistSection:D}};function F(a,i,d,h,c,p){const e=y("UserslistSection");return l(),$(e)}const S=r(k,[["render",F]]);export{S as default};
