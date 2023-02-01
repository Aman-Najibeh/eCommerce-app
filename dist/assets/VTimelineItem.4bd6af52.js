import{g as v,J as b,m as D,h as z,p as B,Z as P,G as k,ax as s,l as S,u as m,a as t,v as c,I as T,T as I,ae as V,O as $,aJ as R,aA as _,a4 as N,a0 as j,b as w,N as O,$ as q,n as h,at as x}from"./index.eec527b5.js";const L=v({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...b(),...D(),...z()},setup(e,d){let{slots:l}=d;const{themeClasses:u}=B(e),{densityClasses:a}=P(e);k({VTimelineDivider:{lineColor:s(e,"lineColor")},VTimelineItem:{density:s(e,"density"),lineInset:s(e,"lineInset")}});const o=S(()=>{const i=e.side?e.side:e.density!=="default"?"end":null;return i&&`v-timeline--side-${i}`}),n=S(()=>{const i=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return i;case"start":return i[0];case"end":return i[1];default:return null}});return m(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,n.value,{"v-timeline--inset-line":!!e.lineInset},u.value,a.value,o.value],style:{"--v-timeline-line-thickness":c(e.lineThickness)}},l)),{}}}),E=v({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:T,iconColor:String,lineColor:String,...I(),...V(),...$()},setup(e,d){let{slots:l}=d;const{sizeClasses:u,sizeStyles:a}=R(e,"v-timeline-divider__dot"),{backgroundColorStyles:o,backgroundColorClasses:n}=_(s(e,"dotColor")),{roundedClasses:i}=N(e,"v-timeline-divider__dot"),{elevationClasses:r}=j(e),{backgroundColorClasses:f,backgroundColorStyles:y}=_(s(e,"lineColor"));return k({VIcon:{color:s(e,"iconColor"),icon:s(e,"icon"),size:s(e,"size")}}),m(()=>{var g;var C;return t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[t("div",{class:["v-timeline-divider__before",f.value],style:y.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",r.value,i.value,u.value],style:a.value},[t("div",{class:["v-timeline-divider__inner-dot",n.value,i.value],style:o.value},[(g=(C=l.default)==null?void 0:C.call(l))!=null?g:e.icon?t(w,null,null):void 0])]),t("div",{class:["v-timeline-divider__after",f.value],style:y.value},null)])}),{}}}),A=v({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:T,iconColor:String,lineInset:[Number,String],...I(),...$(),...V(),...D(),...O()},setup(e,d){let{slots:l}=d;const{dimensionStyles:u}=q(e),a=h(0),o=h();return x(o,n=>{var r;var i;!n||(a.value=(r=(i=n.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)!=null?r:0)},{flush:"post"}),m(()=>{var n,i;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":c(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${c(e.lineInset)})`:c(0)}},[t("div",{class:"v-timeline-item__body",style:u.value},[(n=l.default)==null?void 0:n.call(l)]),t(E,{ref:o,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=l.opposite)==null?void 0:i.call(l))])])}),{}}});export{A as V,L as a};