(this["webpackJsonpform-component"]=this["webpackJsonpform-component"]||[]).push([[0],[,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(5),s=n.n(i);n(4),n(11),n(12);var l=function(){return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("h2",{className:"registration registration__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("div",{className:"registration registration__account",children:[Object(a.jsx)("span",{className:"registration__description",children:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"}),Object(a.jsx)("button",{className:"button registration__btn",type:"button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},o=n(2);n(13);var j=function(e){var t=e.index,n=e.field,i=Object(c.useState)(!1),s=Object(o.a)(i,2),l=s[0],j=s[1],d=Object(c.useState)(!1),u=Object(o.a)(d,2),b=u[0],m=u[1],O=Object(c.useState)(!1),f=Object(o.a)(O,2),h=f[0],p=f[1],_=Object(c.useState)(!0),x=Object(o.a)(_,2),g=x[0],v=x[1],N=n.title,w=n.placeholder,S=n.warning,F={name:/^[a-z\u0430-\u044f\u0451-]+$/i,email:/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,tel:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/},k=Object(c.useRef)(null);return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsxs)("div",{className:"form__group",children:[Object(a.jsx)("h2",{className:"form__title",children:N}),Object(a.jsx)("div",{className:"form__control",children:Object(a.jsx)("input",{onChange:function(e){var n=e.target;p(!0),F.name.test(n.value)&&0===t?j(!0):F.email.test(n.value)&&1===t?m(!0):F.tel.test(n.value)&&2===t?v(!0):(j(!1),m(!1),v(!1))},className:"form__input",type:"text",placeholder:w})}),Object(a.jsx)("span",{ref:k,className:"form__input_validation ".concat((l||b||g?"form__input_ok":"form__input_error")+" "+(h?"":"form__input_waiting")),children:S})]})})};var d=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){i([{id:1,title:"\u0418\u043c\u044f",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f",warning:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"},{id:2,title:"Email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email",warning:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"},{id:3,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",warning:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}])}),[]),Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("form",{className:"form",action:"#",children:n.map((function(e,t){var n=e.title,c=e.placeholder,r=e.warning,i=e.id;return Object(a.jsx)(j,{index:t,field:{title:n,placeholder:c,warning:r}},i)}))})})};var u=function(){return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"global",children:Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(l,{}),Object(a.jsx)(d,{})]})})})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.4949ca02.chunk.js.map