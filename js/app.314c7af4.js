(function(t){function e(e){for(var n,o,u=e[0],i=e[1],c=e[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("navbar"),r("keep-alive",[r("router-view",{key:t.$route.fullPath})],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.blog?r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("div",{staticClass:"container"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v(t._s(t.blog.name))]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._l(t.categories,(function(e){return r("li",{key:e.title,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/category/"+e.title}},[t._v(t._s(e.title))])],1)}))],2),r("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control mr-sm-2",attrs:{required:"",type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),r("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])])]):t._e()},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],i=(r("96cf"),r("1da1")),c=r("e4fd"),l=r.n(c),p={setup:function(t,e){var r=e.root,n=r.$store,a=r.$router,s=Object(c["ref"])(null),o=Object(c["ref"])(null);Object(c["onMounted"])(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.dispatch("infoModule/getInfo");case 2:return s.value=n.getters["infoModule/info"],t.next=5,n.dispatch("infoModule/getCategories");case 5:o.value=n.getters["infoModule/categories"];case 6:case"end":return t.stop()}}),t)}))));var u=Object(c["ref"])("");function l(){a.push("/search/"+u.value)}return{blog:s,categories:o,searchQuery:u,search:l}}},d=p,f=r("2877"),m=Object(f["a"])(d,o,u,!1,null,null,null),v=m.exports,g={components:{navbar:v}},h=g,b=Object(f["a"])(h,a,s,!1,null,null,null),y=b.exports,w=r("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var _=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container my-3"},[t.posts?r("div",{staticClass:"row"},t._l(t.posts,(function(t){return r("div",{key:t.id,staticClass:"col-12"},[r("Post",{attrs:{post:t}})],1)})),0):r("div",[t.loading?t._e():r("h3",[t._v("There's no posts, yet")])]),t.loading?r("h2",[t._v("Loading ....")]):t._e()])},O=[],j="AIzaSyA6u5xmvMOHNcOYQe0YUd2VVsYCFI2NaSw",C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("img",{staticClass:"card-img",staticStyle:{"max-height":"200px"},attrs:{src:t.image}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("router-link",{staticClass:"card-title",attrs:{to:"/posts/"+t.post.id}},[t._v(t._s(t.post.title))]),r("p",{staticClass:"card-text"},[r("small",{staticClass:"text-muted"},[t._v(t._s(t.post.updated))])]),r("b",[r("small",[t._v(t._s(t.post.labels[0]))])])],1)])])])},k=[],R={props:["post"],setup:function(t){var e=t.post,r=Object(c["ref"])(null),n=function(t){var e=new DOMParser,r=e.parseFromString(t,"text/html");return r.body};return Object(c["onMounted"])((function(){var t=n(e.content);t.getElementsByTagName("img").length?r.value=t.getElementsByTagName("img")[0].src:r.value="https://luminostechnology.com/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default.jpg"})),{image:r}}},S=R,P=Object(f["a"])(S,C,k,!1,null,null,null),M=P.exports,E={components:{Post:M},setup:function(t,e){var r=e.root.$store,n=Object(c["ref"])(!1),a=Object(c["ref"])(null);return Object(c["onMounted"])(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.value=!0,t.next=3,r.dispatch("postsModule/getAll");case 3:a.value=r.getters["postsModule/posts"],n.value=!1;case 5:case"end":return t.stop()}}),t)})))),{posts:a,loading:n}}},$=E,T=Object(f["a"])($,x,O,!1,null,null,null),A=T.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container my-3"},[t.posts?r("div",{staticClass:"row"},t._l(t.posts,(function(t){return r("div",{key:t.id,staticClass:"col-12"},[r("Post",{attrs:{post:t}})],1)})),0):t._e()])},N=[],I=(r("b0c0"),{components:{Post:M},setup:function(t,e){var r=e.root,n=r.$store,a=r.$route,s=Object(c["ref"])(null);return Object(c["onMounted"])(Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.params.name,t.next=3,n.dispatch("postsModule/getByCategory",e);case 3:s.value=t.sent;case 4:case"end":return t.stop()}}),t)})))),{posts:s}}}),q=I,F=Object(f["a"])(q,D,N,!1,null,null,null),U=F.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.post?r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.post.title))]),r("b",[r("small",[t._v(t._s(t.post.updated)+" - "+t._s(t.post.labels[0]))])]),r("div",{domProps:{innerHTML:t._s(t.post.content)}}),r("div",{staticClass:"media border p-3"},[r("img",{staticClass:"mr-3 mt-3 rounded-circle",staticStyle:{width:"60px"},attrs:{src:t.post.author.image.url,alt:"John Doe"}}),r("div",{staticClass:"media-body"},[r("h4",[t._v(t._s(t.post.author.displayName))]),r("p",[t._v("Posted on "+t._s(t.post.updated))])])])]):t._e()},Q=[],H={setup:function(t,e){var r=e.root,n=r.$store,a=r.$route,s=Object(c["ref"])(null);return Object(c["onMounted"])(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.dispatch("postsModule/getById",a.params.id);case 2:s.value=t.sent;case 3:case"end":return t.stop()}}),t)})))),{post:s}}},L=H,Y=Object(f["a"])(L,B,Q,!1,null,null,null),J=Y.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container my-3"},[t.posts?r("div",{staticClass:"row"},t._l(t.posts,(function(t){return r("div",{key:t.id,staticClass:"col-12"},[r("Post",{attrs:{post:t}})],1)})),0):r("div",[t.loading?t._e():r("h3",[t._v("Your search doesnt match any records !")])]),t.loading?r("h2",[t._v("Loading ....")]):t._e()])},V=[],z={components:{Post:M},setup:function(t,e){var r=e.root,n=r.$store,a=r.$route;console.log(a.params.query);var s=Object(c["ref"])(null),o=Object(c["ref"])(!1);return Object(c["onMounted"])(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o.value=!0,t.next=3,n.dispatch("postsModule/getFromSearch",a.params.query);case 3:s.value=t.sent,o.value=!1;case 5:case"end":return t.stop()}}),t)})))),{posts:s,loading:o}}},K=z,W=Object(f["a"])(K,G,V,!1,null,null,null),X=W.exports;n["default"].use(_["a"]);var Z=[{path:"/",name:"Home",component:A},{path:"/category/:name",name:"Category",component:U},{path:"/posts/:id",name:"ShowPost",component:J},{path:"/search/:query",name:"Search",component:X}],tt=new _["a"]({mode:"hash",base:"/",routes:Z}),et=tt,rt=r("2f62"),nt=r("5530"),at=r("bc3a"),st=r.n(at),ot=st.a.create({baseURL:"https://www.googleapis.com/blogger/v3/blogs/4498914292420755533"});ot.interceptors.request.use((function(t){return Object(nt["a"])(Object(nt["a"])({},t),{},{params:Object(nt["a"])({key:j},t.params)})}));var ut=ot;function it(){return ct.apply(this,arguments)}function ct(){return ct=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ut.get("/?fields=name");case 3:return e=t.sent,t.abrupt("return",{status:!0,data:e.data});case 7:if(t.prev=7,t.t0=t["catch"](0),!t.t0.response){t.next=11;break}return t.abrupt("return",{status:!1,data:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),ct.apply(this,arguments)}function lt(){return pt.apply(this,arguments)}function pt(){return pt=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ut.get("/pages?fields=items(title)");case 3:return e=t.sent,t.abrupt("return",{status:!0,data:e.data});case 7:if(t.prev=7,t.t0=t["catch"](0),!t.t0.response){t.next=11;break}return t.abrupt("return",{status:!1,data:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),pt.apply(this,arguments)}function dt(t){return ft.apply(this,arguments)}function ft(){return ft=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,it();case 3:n=t.sent,n.status&&r("INFO_UPDATED",n.data);case 5:case"end":return t.stop()}}),t)}))),ft.apply(this,arguments)}function mt(t){return vt.apply(this,arguments)}function vt(){return vt=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,lt();case 3:n=t.sent,n.status&&r("CATEGORIES_UPDATED",n.data.items.reverse());case 5:case"end":return t.stop()}}),t)}))),vt.apply(this,arguments)}var gt={getInfo:dt,getCategories:mt},ht=function(t){return t.info},bt=function(t){return t.categories},yt={info:ht,categories:bt},wt=function(t,e){return t.info=e},_t=function(t,e){return t.categories=e},xt={INFO_UPDATED:wt,CATEGORIES_UPDATED:_t},Ot={info:null,categories:null},jt={namespaced:!0,state:Ot,actions:gt,getters:yt,mutations:xt};function Ct(){return kt.apply(this,arguments)}function kt(){return kt=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ut.get("/posts?fields=items(id,title,content,updated,labels,author(displayName,image))");case 3:return e=t.sent,t.abrupt("return",{status:!0,data:e.data});case 7:if(t.prev=7,t.t0=t["catch"](0),!t.t0.response.data){t.next=11;break}return t.abrupt("return",{status:!1,data:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),kt.apply(this,arguments)}function Rt(t){return St.apply(this,arguments)}function St(){return St=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ut.get("/posts/"+e+"?fields=title,content,updated,labels,author(displayName,image)");case 3:return r=t.sent,t.abrupt("return",{status:!0,data:r.data});case 7:if(t.prev=7,t.t0=t["catch"](0),!t.t0.response.data){t.next=11;break}return t.abrupt("return",{status:!1,data:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),St.apply(this,arguments)}function Pt(t){return Mt.apply(this,arguments)}function Mt(){return Mt=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ut.get("/posts/search?q=label:"+e);case 3:return r=t.sent,t.abrupt("return",{status:!0,data:r.data});case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",{status:!1,data:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),Mt.apply(this,arguments)}function Et(t){return $t.apply(this,arguments)}function $t(){return $t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ut.get("/posts/search?q="+e+"&fields=items(id,title,content,updated,labels,author(displayName,image))");case 3:return r=t.sent,t.abrupt("return",{status:!0,data:r.data});case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",{status:!1,data:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),$t.apply(this,arguments)}function Tt(t){return At.apply(this,arguments)}function At(){return At=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,Ct();case 3:n=t.sent,n.status&&r("POSTS_UPDATED",n.data.items);case 5:case"end":return t.stop()}}),t)}))),At.apply(this,arguments)}function Dt(t,e){return Nt.apply(this,arguments)}function Nt(){return Nt=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Pt(r);case 2:if(n=t.sent,!n.status){t.next=5;break}return t.abrupt("return",n.data.items);case 5:case"end":return t.stop()}}),t)}))),Nt.apply(this,arguments)}function It(t,e){return qt.apply(this,arguments)}function qt(){return qt=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Rt(r);case 2:if(n=t.sent,!n.status){t.next=5;break}return t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)}))),qt.apply(this,arguments)}function Ft(t,e){return Ut.apply(this,arguments)}function Ut(){return Ut=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Et(r);case 2:if(n=t.sent,!n.status){t.next=5;break}return t.abrupt("return",n.data.items);case 5:case"end":return t.stop()}}),t)}))),Ut.apply(this,arguments)}var Bt={getAll:Tt,getByCategory:Dt,getById:It,getFromSearch:Ft},Qt=function(t){return t.posts},Ht={posts:Qt},Lt=function(t,e){return t.posts=e},Yt={POSTS_UPDATED:Lt},Jt={posts:null},Gt={namespaced:!0,state:Jt,actions:Bt,getters:Ht,mutations:Yt};n["default"].use(rt["a"]);var Vt=new rt["a"].Store({modules:{infoModule:jt,postsModule:Gt}});n["default"].config.productionTip=!1,n["default"].use(l.a),new n["default"]({router:et,store:Vt,render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=app.314c7af4.js.map