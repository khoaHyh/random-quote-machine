(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{18:function(t,e,n){},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(1),o=n(7),c=n.n(o),u=(n(18),n(2)),i=n.n(u),s=n(5),h=n(8),d=n(9),p=n(4),b=n(12),j=n(11),l=(n(20),n(10)),f=n.n(l),m=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var r;return Object(h.a)(this,n),(r=e.call(this,t)).generateRandomQuote=Object(s.a)(i.a.mark((function t(){var e,n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://type.fit/api/quotes",t.next=4,fetch("https://type.fit/api/quotes");case 4:return e=t.sent,t.next=7,e.json();case 7:n=t.sent,a=Math.round(Math.random()*(n.length-1)),r.setState({quote:n[a].text,author:n[a].author}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("error: ".concat(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),r.state={quote:"",author:"",newQuote:!1},r.generateRandomQuote=r.generateRandomQuote.bind(Object(p.a)(r)),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.generateRandomQuote();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.quote,n=t.author;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f.a,{}),Object(r.jsxs)("div",{id:"quote-box",children:[Object(r.jsx)("div",{id:"text",children:e}),Object(r.jsx)("div",{id:"author",children:n}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet",target:"_blank",rel:"noreferrer noopener",children:"Tweet Quote button"}),Object(r.jsx)("button",{id:"new-quote",onClick:this.generateRandomQuote,children:"New Quote"})]})]})]})}}]),n}(a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),o(t),c(t)}))};c.a.render(Object(r.jsx)(m,{}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.f7626a58.chunk.js.map