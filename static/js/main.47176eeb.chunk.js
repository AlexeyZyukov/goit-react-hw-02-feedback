(this["webpackJsonpgoit-react-hw-02"]=this["webpackJsonpgoit-react-hw-02"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(4),o=n.n(a),i=(n(14),n.p,n(15),n(5)),r=n(6),l=n(7),j=n(9),u=n(8),d=n(2),h=n.n(d),b=n(0),O=[{key:"Good"},{key:"Neutral"},{key:"Bad"}],x=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).totalCount="",s.onBtnClick=function(t){s.setState(Object(i.a)({},t.target.textContent,s.state[t.target.textContent]+1)),console.log("".concat(t.target.textContent),s.state[t.target.textContent]),console.log("total: ",s.totalCount)},s.countTotalFeedback=function(){var t=s.state,e=t.Good,n=t.Neutral,c=t.Bad;return s.totalCount=e+n+c,s.totalCount},s.countPositivePercentage=function(){var t=s.state.Good;return Math.round(t/s.totalCount*100)},s.state={Good:0,Neutral:0,Bad:0},s}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)("div",{children:[this.props.title&&Object(b.jsx)("h2",{children:this.props.title}),O.map((function(e){return Object(b.jsx)("button",{onClick:t.onBtnClick,children:e.key},e.key)}))]}),this.state.Good||this.state.Neutral||this.state.Bad?Object(b.jsx)(s.Fragment,{children:Object(b.jsxs)("div",{children:[O.map((function(e){return Object(b.jsx)("ul",{className:h.a.statsList,children:Object(b.jsxs)("li",{className:h.a.statsItem,children:[Object(b.jsxs)("span",{className:h.a.statsKind,children:[e.key,": "]}),Object(b.jsx)("span",{className:h.a.statsValue,children:t.state[e.key]})]})},e.key)})),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Total: "}),Object(b.jsx)("span",{children:this.countTotalFeedback()})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Positive: "}),Object(b.jsxs)("span",{children:[this.countPositivePercentage(),Object(b.jsx)("span",{children:" %"})]})]})]})]})}):"There is no feedback"]})}}]),n}(s.Component);console.dir(x);var p=x;var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(p,{title:"Statistics"})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),a(t),o(t)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),f()},2:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.47176eeb.chunk.js.map