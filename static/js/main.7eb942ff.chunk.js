(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=n(11),l=n(5),i=n(20),u=n(7),b=n(9),j=n(2),d=n.n(j),m=n(0);function h(e){var t=e.handleChange,n=e.handleSubmit,a=e.state,c=a.name,r=a.number;return Object(m.jsxs)("form",{className:d.a.form,onSubmit:n,children:[Object(m.jsxs)("label",{className:d.a.label,children:[Object(m.jsx)("span",{children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",value:c,placeholder:"John Doe",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:t,className:d.a.input})]}),Object(m.jsxs)("label",{className:d.a.label,children:[Object(m.jsx)("span",{children:"Number"}),Object(m.jsx)("input",{type:"tel",name:"number",value:r,placeholder:"+38...",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:t,className:d.a.input})]}),Object(m.jsx)("button",{className:d.a.button,type:"submit",children:"Add contact"})]})}var O={name:"",number:""};function f(e){var t=e.onSubmit,n=Object(a.useState)(O),c=Object(l.a)(n,2),r=c[0],o=c[1],s=r.name,j=r.number;return Object(m.jsx)(h,{handleChange:function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},n,a))}))},handleSubmit:function(e){e.preventDefault();var n={id:Object(i.a)(),name:s,number:Number(j)};t(n),o(O)},state:r})}var p=n(3),x=n.n(p);function v(e){var t=e.filter,n=e.handleFilter;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Find contacts by name"}),Object(m.jsx)("input",{type:"text",name:"filter",value:t,required:!0,onInput:n,className:x.a.input,autoComplete:"off"})]})}function _(e){var t=e.contacts,n=e.deleteContact;return Object(m.jsx)("ul",{className:x.a.contacts,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsxs)("li",{className:x.a.contact,children:[Object(m.jsx)("span",{children:a}),Object(m.jsx)("span",{children:c}),Object(m.jsx)("button",{className:x.a.button,onClick:function(){return n(t)},children:"X"})]},t)}))})}function S(e){var t=e.contacts,n=e.filter,a=e.onChange,c=e.deleteContact;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(v,{filter:n,handleFilter:a}),Object(m.jsx)(_,{contacts:t,deleteContact:c})]})}function g(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),u=o[0],b=o[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contact"),t=JSON.parse(e);t&&c(t)}),[]),Object(a.useEffect)((function(){n.length?localStorage.setItem("contact",JSON.stringify(n)):localStorage.removeItem("contact")}),[n]);var j=n.filter((function(e){var t=e.name;e.number;return t.toLocaleLowerCase().includes(u.toLocaleLowerCase())}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(f,{onSubmit:function(e){var t=e.name,a=e.number,r={id:Object(i.a)(),name:t,number:Number(a)};n.some((function(e){return e.name===t}))?alert("".concat(t," is already in contacts!")):c((function(e){return[].concat(Object(s.a)(e),[r])}))}}),Object(m.jsx)(S,{contacts:j,filter:u,onChange:function(e){var t=e.target.value;b(t)},deleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}n(18);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={input:"Styles_input__2yRqc",label:"Styles_label__3DtF6",button:"Styles_button__3b5NY"}},3:function(e,t,n){e.exports={input:"Style_input__2DowU",contacts:"Style_contacts__1sFtp",contact:"Style_contact__3Ji_-",button:"Style_button__4ynNn"}}},[[19,1,2]]]);
//# sourceMappingURL=main.7eb942ff.chunk.js.map