import{d as x,c as R,A as c,B as u,E as s,aG as e,aF as n,aI as A,aH as D,u as k,b1 as E,aC as z,aM as t,b2 as G,e as H,r as J,aL as f,aU as Q,aJ as V,b3 as T,b4 as W,b5 as j,b6 as K,b7 as O,aV as X,b8 as Y,b9 as Z,ba as ee,bb as oe}from"./arco.603f0d7f.js";import{F as se}from"./index.bd5d35fd.js";import{u as F,_ as C,a as ae}from"./index.56ab038b.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{f as ne,g as re}from"./vue.41c8e70f.js";import{u as te}from"./loading.7dd90c01.js";import"./chart.9d80d461.js";const I=""+new URL("login-banner.426fb77f.png",import.meta.url).href,le={class:"banner"},ie={class:"banner-inner"},ce={class:"carousel-title"},de={class:"carousel-sub-title"},_e=["src"],me=x({__name:"banner",setup(i){const{t:r}=F(),g=R(()=>[{slogan:r("login.banner.slogan1"),subSlogan:r("login.banner.subSlogan1"),image:I},{slogan:r("login.banner.slogan2"),subSlogan:r("login.banner.subSlogan2"),image:I},{slogan:r("login.banner.slogan3"),subSlogan:r("login.banner.subSlogan3"),image:I}]);return(b,v)=>{const p=G,h=E;return c(),u("div",le,[s("div",ie,[e(h,{class:"carousel","animation-name":"fade"},{default:n(()=>[(c(!0),u(A,null,D(k(g),a=>(c(),z(p,{key:a.slogan},{default:n(()=>[(c(),u("div",{key:a.slogan,class:"carousel-item"},[s("div",ce,t(a.slogan),1),s("div",de,t(a.subSlogan),1),s("img",{class:"carousel-image",src:a.image},null,8,_e)]))]),_:2},1024))),128))]),_:1})])])}}});const ue=C(me,[["__scopeId","data-v-2ce84fe6"]]),ge={class:"login-form-wrapper"},pe={class:"login-form-title"},fe={class:"login-form-sub-title"},be={class:"login-form-error-msg"},ve={class:"login-form-password-actions"},he=x({__name:"login-form",setup(i){const r=ne(),{t:g}=F(),b=H(""),{loading:v,setLoading:p}=te(),h=ae(),a=re("login-config",{rememberPassword:!0,username:"admin",password:"admin"}),d=J({username:a.value.username,password:a.value.password}),L=async({errors:o,values:l})=>{if(!v.value&&!o){p(!0);try{await h.login(l);const{redirect:_,...w}=r.currentRoute.value.query;r.push({name:_||"Workplace",query:{...w}}),Q.success(g("login.form.login.success"));const{rememberPassword:m}=a.value,{username:y,password:$}=l;a.value.username=m?y:"",a.value.password=m?$:""}catch(_){b.value=_.message}finally{p(!1)}}},B=o=>{a.value.rememberPassword=o};return(o,l)=>{const _=V("icon-user"),w=T,m=W,y=V("icon-lock"),$=j,M=K,N=O,P=X,U=Y,q=Z;return c(),u("div",ge,[s("div",pe,t(o.$t("login.form.title")),1),s("div",fe,t(o.$t("login.form.title")),1),s("div",be,t(b.value),1),e(q,{ref:"loginForm",model:d,class:"login-form",layout:"vertical",onSubmit:L},{default:n(()=>[e(m,{field:"username",rules:[{required:!0,message:o.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(w,{modelValue:d.username,"onUpdate:modelValue":l[0]||(l[0]=S=>d.username=S),placeholder:o.$t("login.form.userName.placeholder")},{prefix:n(()=>[e(_)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(m,{field:"password",rules:[{required:!0,message:o.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e($,{modelValue:d.password,"onUpdate:modelValue":l[1]||(l[1]=S=>d.password=S),placeholder:o.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:n(()=>[e(y)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(U,{size:16,direction:"vertical"},{default:n(()=>[s("div",ve,[e(M,{checked:"rememberPassword","model-value":k(a).rememberPassword,onChange:B},{default:n(()=>[f(t(o.$t("login.form.rememberPassword")),1)]),_:1},8,["model-value","onChange"]),e(N,null,{default:n(()=>[f(t(o.$t("login.form.forgetPassword")),1)]),_:1})]),e(P,{type:"primary","html-type":"submit",long:"",loading:k(v)},{default:n(()=>[f(t(o.$t("login.form.login")),1)]),_:1},8,["loading"]),e(P,{type:"text",long:"",class:"login-form-register-btn"},{default:n(()=>[f(t(o.$t("login.form.register")),1)]),_:1})]),_:1})]),_:1},8,["model"])])}}});const we=C(he,[["__scopeId","data-v-8da23d8b"]]),ye=i=>(ee("data-v-7183afbd"),i=i(),oe(),i),$e={class:"container"},Se=ye(()=>s("div",{class:"logo"},[s("img",{alt:"logo",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"}),s("div",{class:"logo-text"},"Arco Design Pro")],-1)),Ie={class:"content"},ke={class:"content-inner"},xe={class:"footer"},Ce=x({__name:"index",setup(i){return(r,g)=>(c(),u("div",$e,[Se,e(ue),s("div",Ie,[s("div",ke,[e(we)]),s("div",xe,[e(se)])])]))}});const Ee=C(Ce,[["__scopeId","data-v-7183afbd"]]);export{Ee as default};
