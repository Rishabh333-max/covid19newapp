(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),r=c.n(n),a=(c(11),c(3)),i=c.n(a),j=c(5),d=c(6),h=(c(13),c(0)),l=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.statewise),n(c.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid mt-5",children:[Object(h.jsx)("div",{className:"main-heading",children:Object(h.jsxs)("h1",{className:"center",children:[Object(h.jsx)("span",{className:"size",children:"INDIA "}),Object(h.jsx)("span",{className:"size2",children:"COVID-19"}),Object(h.jsx)("span",{className:"size3",children:" Dashboard"})]})}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"State"}),Object(h.jsx)("th",{children:"Confirmed"}),Object(h.jsx)("th",{children:"recovered"}),Object(h.jsx)("th",{children:"deaths"}),Object(h.jsx)("th",{children:"active"}),Object(h.jsx)("th",{children:"lastupdatedtime"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:e.state}),Object(h.jsx)("td",{children:e.confirmed}),Object(h.jsx)("td",{children:e.recovered}),Object(h.jsx)("td",{children:e.deaths}),Object(h.jsx)("td",{children:e.active}),Object(h.jsx)("td",{children:e.lastupdatedtime})]},t)}))})]})})]})})},b=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l,{})})};r.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2e6f44a4.chunk.js.map