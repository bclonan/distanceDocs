(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{165:function(t,s,n){},179:function(t,s,n){"use strict";var o=n(165);n.n(o).a},275:function(t,s,n){"use strict";n.r(s);var o=n(167),e=n.n(o),r={data:function(){return{posts:[],errors:[]}},methods:{GetPosts:function(){var t=this;e.a.get("http://jsonplaceholder.typicode.com/posts").then(function(s){t.posts=s.data}).catch(function(s){t.errors.push(s)})}}},c=(n(179),n(0)),u=Object(c.a)(r,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[t.posts&&t.posts.length?n("ul",t._l(t.posts,function(s){return n("li",[n("p",[n("strong",[t._v(t._s(s.title))])]),n("p",[t._v(t._s(s.body))])])})):t._e(),n("button",{staticClass:"button",on:{click:t.GetPosts}},[t._v("Click to Get Posts")]),t.errors&&t.errors.length?n("ul",t._l(t.errors,function(s){return n("li",[t._v("\n      "+t._s(s.message)+"\n    ")])})):t._e()])},[],!1,null,null,null);s.default=u.exports}}]);