(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,c=n(4),i=n.n(c),r=n(5),a=n(6),o=n(8),l=n(7),u=n(3),b=n(1),h=n.n(b),d=(n(13),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function g(t,e,n,c){var i=Object(u.a)(t).filter((function(t){return t.length>=c}));return e===s.ALPABET?i.sort((function(t,e){return t.localeCompare(e)})):e===s.LENGTH&&i.sort((function(t,e){return t.length-e.length})),n?i.reverse():i}!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var p=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isStarted:!1,isReversed:!1,sortType:s.NONE,lengthValue:1},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,c=e.isReversed,i=e.sortType,r=e.lengthValue;return Object(d.jsxs)("div",{className:"App box has-background-warning-light",children:[!n&&Object(d.jsx)("button",{type:"button",onClick:function(){t.setState({isStarted:!0})},className:"button is-success is-light",children:"Start"}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",onClick:function(){t.setState({sortType:s.ALPABET})},className:"button is-info is-light",children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.setState({sortType:s.LENGTH})},className:"button is-info is-light",children:"Sort by length"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.setState({isReversed:!c})},className:"button is-info is-light",children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.setState({isReversed:!1,sortType:s.NONE,lengthValue:1})},className:"button is-danger is-light",children:"Reset"})]}),Object(d.jsx)("ul",{className:"Goods content is-large block",children:g(j,i,c,r).map((function(t){return Object(d.jsx)("li",{className:"Goods__item",children:t},t)}))}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"text",children:"Select min length of word:"}),Object(d.jsx)("div",{className:"select is-multiply is-success block",children:Object(d.jsx)("select",{name:"minWordLength",onChange:function(e){t.setState({lengthValue:+e.target.value})},children:Object(u.a)(Array(10)).map((function(t,e){return Object(d.jsx)("option",{value:e+1,children:e+1})}))})})]})]})]})}}]),n}(h.a.Component);i.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.757e531c.chunk.js.map