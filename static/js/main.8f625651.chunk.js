(this["webpackJsonpgoit-react-hw-02"]=this["webpackJsonpgoit-react-hw-02"]||[]).push([[0],{1:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n=s(2),a=s.n(n),c=s(4),i=s.n(c),l=(s(14),s.p,s(15),s(5)),o=s(6),r=s(7),j=s(9),d=s(8),u=s(1),h=s.n(u),b=s(0),O=function(t){Object(j.a)(s,t);var e=Object(d.a)(s);function s(){var t;return Object(o.a)(this,s),(t=e.call(this)).totalCount=0,t.onBtnClick=function(e){t.setState(Object(l.a)({},e.target.textContent,t.state[e.target.textContent]+1))},t.countTotalFeedback=function(){return t.totalCount=t.state.Good+t.state.Neutral+t.state.Bad,t.totalCount},t.countPositivePercentage=function(){var e;return e=t.state.Good/t.totalCount*100,console.log(e),e},t.state={Good:0,Neutral:0,Bad:0},t}return Object(r.a)(s,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:this.props.title}),Object(b.jsx)("button",{onClick:this.onBtnClick,children:"Good"}),Object(b.jsx)("button",{onClick:this.onBtnClick,children:"Neutral"}),Object(b.jsx)("button",{onClick:this.onBtnClick,children:"Bad"})]}),Object(b.jsx)("ul",{className:h.a.statsList,children:Object(b.jsxs)("li",{className:h.a.statsItem,children:[Object(b.jsx)("span",{className:h.a.statskind,children:"Good: "}),Object(b.jsx)("span",{className:h.a.statsvalue,children:this.state.Good})]})}),Object(b.jsx)("ul",{className:h.a.statsList,children:Object(b.jsxs)("li",{className:h.a.statsItem,children:[Object(b.jsx)("span",{className:h.a.statskind,children:"Neutral: "}),Object(b.jsx)("span",{className:h.a.statsvalue,children:this.state.Neutral})]})}),Object(b.jsx)("ul",{className:h.a.statsList,children:Object(b.jsxs)("li",{className:h.a.statsItem,children:[Object(b.jsx)("span",{className:h.a.statskind,children:"Bad: "}),Object(b.jsx)("span",{className:h.a.statsvalue,children:this.state.Bad})]})}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Total: "}),Object(b.jsx)("span",{children:this.countTotalFeedback()})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Positive: "}),Object(b.jsxs)("span",{children:[Math.round(this.countPositivePercentage()),Object(b.jsx)("span",{children:" %"})]})]})]})]})}}]),s}(n.Component);O.defaultProps={Good:0,Neutral:0,Bad:0},console.dir(O);var x=O;var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(x,{title:"Statistics"})})},m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),c(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.8f625651.chunk.js.map