"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(t,n,e){e.r(n),e.d(n,{Styledli:function(){return f}});var r,a=e(168),u=e(439),c=e(791),i=e(87),s=e(390),o=e(867),p=e(184);n.default=function(){var t=(0,c.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1];return(0,c.useEffect)((function(){(0,s.Ny)().then((function(t){return r(t)}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"The most popular movies that may interest you today"}),(0,p.jsx)("hr",{}),(0,p.jsx)("ul",{children:e.map((function(t){return(0,p.jsx)(f,{children:(0,p.jsx)(i.rU,{to:"movies/".concat(t.id.toString()),children:t.original_title})},t.id)}))})]})};var f=o.ZP.li(r||(r=(0,a.Z)(["\n  display: flex;\n  font-size: 20px;\n  gap: 10px;\n  line-height: 1.5;\n  text-decoration: none;\n  list-style-type: none;\n  width: 100%;\n  & a:hover {\n    color: #ad90b0;\n  }\n"])))},390:function(t,n,e){e.d(n,{Mc:function(){return o},Ny:function(){return s},oO:function(){return d},xj:function(){return p},y:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="fd8ed35fd5e62e5eb969497540b2a96f",s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",{params:{api_key:i}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie",{params:{api_key:i,query:n}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits"),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:i}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.a5776c19.chunk.js.map