"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{433:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(2982),a=e(885),c=e(2791),o=e(501),u=e(6871),i=e(4390),s="Home_img__EDVsv",p="Home_moviesList__XOOaK",f="Home_listItem__PhiWw",l="Home_movieTitle__Zx60k",m=e(184);function h(){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),e=n[0],h=n[1],v=(0,u.TH)();return(0,c.useEffect)((function(){(0,i.XT)().then((function(t){var n=t.data;h((0,r.Z)(n.results))})).catch((function(t){console.log(t)}))}),[]),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Trending movies"}),(0,m.jsx)("ul",{className:p,children:e.map((function(t){var n=t.id,e=t.poster_path,r=t.title;return(0,m.jsx)("li",{className:f,children:(0,m.jsxs)(o.rU,{to:"/movies/".concat(n),state:{from:v.pathname+v.search},children:[(0,m.jsx)("img",{src:e&&"https://image.tmdb.org/t/p/w500/".concat(e),alt:r,className:s}),(0,m.jsx)("p",{className:l,children:r})]})},n)}))})]})}},4390:function(t,n,e){e.d(n,{K6:function(){return _},M1:function(){return h},Pg:function(){return l},XT:function(){return p},jP:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),o=e(4569),u=e.n(o),i="0bad0c478cca5baa77b2d3f25afa29cf",s="https://api.themoviedb.org/3/";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"trending/movie/week?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"movie/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"search/movie/?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},2982:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(907);var a=e(181);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=433.7df6750f.chunk.js.map