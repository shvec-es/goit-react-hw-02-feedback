(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c,o,a,r,i,s,d,l=n(8),b=n.n(l),j=(n(21),n(22),n(9)),u=n(10),h=n(11),p=n(16),O=n(15),x=n(0),f=n(2),g=n(3),v=g.a.h1(c||(c=Object(f.a)(["\n  color: SaddleBrown;\n  text-align: center;\n"]))),k=g.a.div(o||(o=Object(f.a)(["\n  border: 2px solid SaddleBrown;\n  border-radius: 5px;\n  width: 400px;\n  margin-top: 50px;\n  margin-left: 100px;\n"]))),m=Object(g.a)(v)(a||(a=Object(f.a)(["\n  font-size: 1.5em;\n"]))),w=g.a.div(r||(r=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]))),C=g.a.button(i||(i=Object(f.a)(["\n  color: Chocolate;\n  background: white;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid Chocolate;\n  border-radius: 3px;\n  text-transform: capitalize;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background: Chocolate;\n    outline: 2px solid Chocolate;\n  }\n"]))),y=g.a.div(s||(s=Object(f.a)(["\n  font-size: 1.25em;\n  padding-left: 15px;\n  color: Chocolate;\n"]))),P=g.a.p(d||(d=Object(f.a)(["\n  font-size: 1.25em;\n  text-align: center;\n  color: Chocolate;\n"]))),F=n(1),z=function(e){var t=e.title,n=e.children;return Object(F.jsxs)("section",{children:[Object(F.jsx)(m,{children:t}),n]})},B=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(F.jsx)(w,{children:Object.keys(t).map((function(e,t){return Object(F.jsx)(C,{type:"button",name:e,onClick:function(){return n(e)},children:e},t)}))})},S=function(e){var t=e.good,n=e.neutral,c=e.bad,o=e.total,a=e.positivePercentage;return Object(F.jsxs)(y,{children:[Object(F.jsxs)("p",{children:["Good: ",t]}),Object(F.jsxs)("p",{children:["Neutral: ",n]}),Object(F.jsxs)("p",{children:["Bad: ",c]}),Object(F.jsxs)("p",{children:["Total: ",o]}),Object(F.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})},T=function(e){var t=e.message;return Object(F.jsx)(P,{children:t})},E=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){e.setState((function(e){return Object(j.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(t){return Number.parseInt(e.state.good/t*100)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,o=this.countTotalFeedback(),a=this.countPositiveFeedbackPercentage(o);return Object(F.jsxs)("div",{children:[Object(F.jsx)(v,{children:"Welcome to cafe Expresso!"}),Object(F.jsxs)(k,{children:[Object(F.jsx)(z,{title:"Please leave feedback",children:Object(F.jsx)(B,{options:this.state,onLeaveFeedback:this.handleClick})}),Object(F.jsx)(z,{title:"Statistics",children:o?Object(F.jsx)(S,{good:t,neutral:n,bad:c,total:o,positivePercentage:a}):Object(F.jsx)(T,{message:"There is no feedback"})})]})]})}}]),n}(x.Component),I=E;b.a.render(Object(F.jsx)(I,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.16d14e1c.chunk.js.map