"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[423],{5423:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(2982),a=r(885),c=r(2791),u=r(501),o=r(6871),i=r(4390),s="SearchForm_img__ikP8q",p="SearchForm_moviesList__WiFYT",f="SearchForm_listItem__xbXV6",l="SearchForm_movieTitle__SMcUc",m=r(184);function h(){var t=(0,u.lr)(),e=(0,a.Z)(t,2),r=e[0],h=e[1],d=(0,c.useState)([]),v=(0,a.Z)(d,2),y=v[0],b=v[1],x=(0,o.TH)(),_=r.get("query");return(0,c.useEffect)((function(){_&&(0,i.K6)(_).then((function(t){var e=t.data;b((0,n.Z)(e.results))})).catch((function(t){console.log(t)}))}),[_]),(0,m.jsxs)("div",{children:[(0,m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h({query:t.currentTarget.elements.query.value})},children:[(0,m.jsx)("button",{type:"submit",children:"Search"}),(0,m.jsx)("input",{name:"query",type:"text",autoComplete:"off"})]}),(0,m.jsx)("div",{children:(0,m.jsx)("ul",{className:p,children:y&&y.map((function(t){var e=t.id,r=t.poster_path,n=t.title;return(0,m.jsx)("li",{className:f,children:(0,m.jsxs)(u.rU,{to:"/movies/".concat(e),state:{from:x},children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:n,className:s}),(0,m.jsx)("p",{className:l,children:n})]})},e)}))})})]})}},4390:function(t,e,r){r.d(e,{K6:function(){return b},M1:function(){return h},Pg:function(){return l},XT:function(){return p},jP:function(){return v}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),o=r.n(u),i="0bad0c478cca5baa77b2d3f25afa29cf",s="https://api.themoviedb.org/3/";function p(){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"trending/movie/week?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"movie/").concat(e,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("https://api.themoviedb.org/3/search/movie/?api_key=".concat(i,"&query=").concat(e,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},2982:function(t,e,r){r.d(e,{Z:function(){return c}});var n=r(907);var a=r(181);function c(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=423.823532d7.chunk.js.map