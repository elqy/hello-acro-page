import{e as u}from"./arco.603f0d7f.js";import{u as i}from"./loading.7dd90c01.js";function d(o,s=[],t=!0){const{loading:a,setLoading:n}=i(t),e=u(s);return o().then(r=>{e.value=r.data}).finally(()=>{n(!1)}),{loading:a,response:e}}export{d as u};
