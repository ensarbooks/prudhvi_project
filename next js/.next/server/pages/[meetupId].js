(()=>{var e={};e.id=549,e.ids=[549,660],e.modules={1839:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},5856:e=>{e.exports={detail:"MeetupDetail_detail__XZwet"}},5568:(e,t,n)=>{"use strict";n.r(t),n.d(t,{config:()=>w,default:()=>j,getServerSideProps:()=>O,getStaticPaths:()=>S,getStaticProps:()=>x,reportWebVitals:()=>M,routeModule:()=>C,unstable_getServerProps:()=>k,unstable_getServerSideProps:()=>U,unstable_getStaticParams:()=>I,unstable_getStaticPaths:()=>E,unstable_getStaticProps:()=>A});var r={};n.r(r),n.d(r,{default:()=>v,getStaticPaths:()=>_,getStaticProps:()=>h});var a=n(9795),i=n(231),o=n(1839),u=n(4954),s=n.n(u),l=n(4924),d=n.n(l),c=n(997);let p=require("mongodb");var f=n(6689),m=n(5845),g=n.n(m),P=n(5856),b=n.n(P);let y=function(e){return(0,c.jsxs)("section",{className:b().detail,children:[c.jsx("img",{src:e.image,alt:e.title}),c.jsx("h1",{children:e.title}),c.jsx("address",{children:e.address}),c.jsx("p",{children:e.description})]})};async function _(){let e=await p.MongoClient.connect("mongodb+srv://maximilian:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority"),t=e.db(),n=t.collection("meetups"),r=await n.find({},{_id:1}).toArray();return e.close(),{fallback:"blocking",paths:r.map(e=>({params:{meetupId:e._id.toString()}}))}}async function h(e){let t=e.params.meetupId,n=await p.MongoClient.connect("mongodb+srv://maximilian:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority"),r=n.db(),a=r.collection("meetups"),i=await a.findOne({_id:(0,p.ObjectId)(t)});return n.close(),{props:{meetupData:{id:i._id.toString(),title:i.title,address:i.address,image:i.image,description:i.description}}}}let v=function(e){return(0,c.jsxs)(f.Fragment,{children:[(0,c.jsxs)(g(),{children:[c.jsx("title",{children:e.meetupData.title}),c.jsx("meta",{name:"description",content:e.meetupData.description})]}),c.jsx(y,{image:e.meetupData.image,title:e.meetupData.title,address:e.meetupData.address,description:e.meetupData.description})]})},j=(0,o.l)(r,"default"),x=(0,o.l)(r,"getStaticProps"),S=(0,o.l)(r,"getStaticPaths"),O=(0,o.l)(r,"getServerSideProps"),w=(0,o.l)(r,"config"),M=(0,o.l)(r,"reportWebVitals"),A=(0,o.l)(r,"unstable_getStaticProps"),E=(0,o.l)(r,"unstable_getStaticPaths"),I=(0,o.l)(r,"unstable_getStaticParams"),k=(0,o.l)(r,"unstable_getServerProps"),U=(0,o.l)(r,"unstable_getServerSideProps"),C=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/[meetupId]",pathname:"/[meetupId]",bundlePath:"",filename:""},components:{App:d(),Document:s()},userland:r})},4924:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(8373),a=r._(n(6689)),i=n(6394);async function o(e){let{Component:t,ctx:n}=e,r=await (0,i.loadGetInitialProps)(t,n);return{pageProps:r}}class u extends a.default.Component{render(){let{Component:e,pageProps:t}=this.props;return a.default.createElement(e,t)}}u.origGetInitialProps=o,u.getInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6461:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9509:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return m}});let r=n(8373),a=n(9256),i=a._(n(6689)),o=r._(n(6706)),u=n(7275),s=n(3590),l=n(6461);function d(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(1317);let p=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return a=>{let i=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=a.props[t],n=r[t]||new Set;("name"!==t||!o)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6706:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(6689),a=()=>{},i=()=>{};function o(e){var t;let{headManager:n,reduceComponentsToState:o}=e;function u(){if(n&&n.mountedInstances){let t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(o(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),u(),a(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),a(()=>(n&&(n._pendingUpdate=u),()=>{n&&(n._pendingUpdate=u)})),i(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},1317:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},231:(e,t)=>{"use strict";var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},7275:(e,t,n)=>{"use strict";e.exports=n(9795).vendored.contexts.AmpContext},3590:(e,t,n)=>{"use strict";e.exports=n(9795).vendored.contexts.HeadManagerContext},5845:(e,t,n)=>{e.exports=n(9509)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")},9256:(e,t)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}}};var t=require("../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[954],()=>n(5568));module.exports=r})();