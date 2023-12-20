"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[763,415],{415:function(e,t,n){n.r(t),n.d(t,{Styledli:function(){return f}});var r,a=n(168),u=n(439),i=n(791),c=n(87),s=n(390),o=n(867),p=n(184);t.default=function(){var e=(0,i.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1];return(0,i.useEffect)((function(){(0,s.Ny)().then((function(e){return r(e)}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"The most popular movies that may interest you today"}),(0,p.jsx)("hr",{}),(0,p.jsx)("ul",{children:n.map((function(e){return(0,p.jsx)(f,{children:(0,p.jsx)(c.rU,{to:"movies/".concat(e.id.toString()),children:e.original_title})},e.id)}))})]})};var f=o.ZP.li(r||(r=(0,a.Z)(["\n  display: flex;\n  font-size: 20px;\n  gap: 10px;\n  line-height: 1.5;\n  text-decoration: none;\n  list-style-type: none;\n  width: 100%;\n  & a:hover {\n    color: #ad90b0;\n  }\n"])))},763:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),u=n(757),i=n.n(u),c=n(791),s=n(390),o=n(87),p=n(689),f=n(184),d=function(e){var t=e.setQuery,n=(0,c.useState)([]),r=(0,a.Z)(n,2),u=r[0],i=r[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u)},children:[(0,f.jsx)("input",{style:{bpadding:"5px",borderRadius:"4px"},required:!0,type:"text",placeholder:"Find the movie",name:"search",value:u,onChange:function(e){return i(e.target.value)}}),(0,f.jsx)("button",{type:"submit",style:{background:"#dcf08d",borderRadius:"4px",border:"0",boxShadow:"inset 0 0 5px #000000"},children:"Search"})]})},l=n(415),h=function(){var e,t=(0,o.lr)(),n=(0,a.Z)(t,2),u=n[0],h=n[1],v=(0,c.useState)([]),x=(0,a.Z)(v,2),m=x[0],y=x[1],b=(0,p.TH)(),g=(0,c.useState)(!1),k=(0,a.Z)(g,2)[1],w=null!==(e=u.get("movie"))&&void 0!==e?e:"";return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.xj)(w);case 3:t=e.sent,y(t),0===t.lendth&&k(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(console.error());case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{setQuery:function(e){h(e?{movie:e}:{})}}),(0,f.jsx)("ul",{children:m.map((function(e){return(0,f.jsx)(l.Styledli,{children:(0,f.jsx)(o.rU,{state:{from:b},to:"/movies/".concat(e.id.toString()),children:e.title})},e.id)}))})]})}},390:function(e,t,n){n.d(t,{Mc:function(){return o},Ny:function(){return s},oO:function(){return d},xj:function(){return p},y:function(){return f}});var r=n(861),a=n(757),u=n.n(a),i=n(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="fd8ed35fd5e62e5eb969497540b2a96f",s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",{params:{api_key:c}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t),{params:{api_key:c}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie",{params:{api_key:c,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=763.bcaa9409.chunk.js.map