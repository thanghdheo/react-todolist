(this.webpackJsonphook=this.webpackJsonphook||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(9),r=n.n(a),o=(n(16),n(4)),s=n(3),u=n(5),l=(n(17),n(10)),d=n(11),j=n(21),b=n(1);function f(e){var t=new Date,n="0".concat(t.getHours()).slice(-2),i="0".concat(t.getMinutes()).slice(-2),a="0".concat(t.getSeconds()).slice(-2),r=e.todolist,f=e.handleInsert,O=e.handleDelete,h=e.handleUpdate,x=Object(c.useState)(""),v=Object(u.a)(x,2),m=v[0],p=v[1],g=Object(c.useState)(""),S=Object(u.a)(g,2),I=S[0],N=S[1],C=Object(c.useState)(Object(o.a)(r)),k=Object(u.a)(C,2),y=k[0],D=k[1],E=Object(c.useRef)([]);Object(c.useEffect)((function(){var e=r.filter((function(e){return-1!==e.name.indexOf(I)}));D(e)}),[I,r]);return Object(b.jsx)("div",{className:"body",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h2",{children:"DANH SA\u0301CH C\xc2\u0300N LA\u0300M NE\u0300 BA\u0300 CON"}),Object(b.jsx)("input",{onChange:function(e){return function(e){N(e.target.value)}(e)},value:I,type:"text",placeholder:"Nh\xe2\u0323p \u0111\xea\u0309 ti\u0300m ki\xea\u0301m ..."}),Object(b.jsxs)("ul",{className:"todo__list",children:[Object(b.jsxs)("div",{className:"insert__box",children:[Object(b.jsx)("input",{onChange:function(e){return function(e){p(e.target.value)}(e)},value:m,placeholder:"Nh\xe2\u0323p c\xf4ng vi\xea\u0323c c\xe2\u0300n th\xeam",type:"text"}),Object(b.jsx)("button",{className:"submit",disabled:!m,onClick:function(){var e=document.querySelector(".submit");"Insert"===e.innerText?function(){if(f){var e={id:Object(j.a)(),name:m,time:"".concat(n," : ").concat(i," : ").concat(a),isComplete:!1};f(e),p("")}}():(!function(){if(h){var e=Object(s.a)(Object(s.a)({},E.current),{},{name:m,time:"".concat(n," : ").concat(i," : ").concat(a)});h(E.current.id,e),p("")}}(),e.innerText="Insert")},children:"Insert"})]}),y.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsxs)("div",{children:[e.name,Object(b.jsx)("p",{children:e.time})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{onClick:function(){return function(e){document.querySelector(".submit").innerText="Update";var t=r.findIndex((function(t){return t.id===e}));p(r[t].name),E.current=Object(s.a)({},r[t])}(e.id)},children:Object(b.jsx)(l.a,{})}),Object(b.jsx)("i",{onClick:function(){return t=e.id,void(O&&O(t));var t},children:Object(b.jsx)(d.a,{})})]})]},e.id)}))]})]})})}f.defaultProps={todolist:[],handleInsert:null,handleDelete:null,handleUpdate:null};var O=f;var h=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){localStorage.getItem("list")&&i(JSON.parse(localStorage.getItem("list")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(n))}),[n]),Object(b.jsx)("div",{children:Object(b.jsx)(O,{handleUpdate:function(e,t){return function(e,t){var c=n.findIndex((function(t){return t.id===e}));n[c]=Object(s.a)({},t);var a=Object(o.a)(n);i(a)}(e,t)},handleDelete:function(e){return function(e){var t=n.findIndex((function(t){return t.id===e}));n.splice(t,1);var c=Object(o.a)(n);i(c)}(e)},handleInsert:function(e){return function(e){n.unshift(Object(s.a)({},e));var t=Object(o.a)(n);i(t)}(e)},todolist:n})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.a41a1fb0.chunk.js.map