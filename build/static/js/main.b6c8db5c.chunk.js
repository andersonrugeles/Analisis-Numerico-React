(this.webpackJsonpAnalisis_numerico=this.webpackJsonpAnalisis_numerico||[]).push([[0],{28:function(e,c,t){},29:function(e,c,t){},30:function(e,c,t){},40:function(e,c){},41:function(e,c,t){},43:function(e,c,t){"use strict";t.r(c);var a=t(6),i=t.n(a),n=t(21),l=t.n(n),s=(t(28),t(29),t(15)),o=t(18),r=t(4),j=t(45),b=(t(30),t(0)),u=function(){var e,c=Object(a.useState)(0),t=Object(r.a)(c,2),i=t[0],n=t[1],l=Object(a.useState)([]),u=Object(r.a)(l,2),d=u[0],h=u[1],x=Object(a.useState)([]),O=Object(r.a)(x,2),v=O[0],p=O[1],f=Object(a.useState)([]),m=Object(r.a)(f,2),g=(m[0],m[1],Object(a.useState)({ecuacion:"",iniciala:"",inicialb:""})),N=Object(r.a)(g,2),S=N[0],y=N[1],C=Object(a.useState)(!1),F=Object(r.a)(C,2),P=F[0],A=F[1],B=Object(a.useState)(!1),I=Object(r.a)(B,2),D=I[0],M=I[1],_=function(e){return e<0?-e:e},w=function(e){var c=e.target;y(Object(o.a)(Object(o.a)({},S),{},Object(s.a)({},c.name,c.value)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"Actividades__container",children:Object(b.jsxs)("form",{onSubmit:function(c){if(c.preventDefault(),e=Object(j.b)(S.ecuacion),1===i){var t=function(c,t){var a=0,i=0,n=[];if(e.evaluate({x:c})*e.evaluate({x:t})<0)for(var l=0;l<1e4;l++){if(i++,a=(c+t)/2,_(e.evaluate({x:a}))<=1e-4){var s={iteracion:i,a:c,b:t,funcionA:e.evaluate({x:c}),funcionB:e.evaluate({x:t}),p:a,funcionP:e.evaluate({x:a})};return n.push(s),n}var o={iteracion:i,a:c,b:t,funcionA:e.evaluate({x:c}),funcionB:e.evaluate({x:t}),p:a,funcionP:e.evaluate({x:a})};if(e.evaluate({x:c})*e.evaluate({x:a})<0&&(t=a),e.evaluate({x:a})*e.evaluate({x:t})<0&&(c=a),a>=8)return void alert("Proporcione a y b adecuados");n.push(o)}}(parseFloat(S.iniciala),parseFloat(S.inicialb));(null===t||void 0===t?void 0:t.length)?h(t):alert("Proporcione a y b adecuados")}if(2===i){var a=function(c){for(var t=1e5,a=0,i=[];_(e.evaluate({x:c}))>.001&&t>=0;){var n=c;c-=e.evaluate({x:c})/Object(j.a)(e,"x").evaluate({x:c});var l={iteracion:a,xi1:n,fxi1:e.evaluate({x:n}),fxi:Object(j.a)(e,"x").evaluate({x:n}),xi:c};i.push(l),t-=1,a++}return i}(parseFloat(S.iniciala));(null===a||void 0===a?void 0:a.length)?p(a):alert("Proporcione a adecuado")}},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Ecuacion"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Digita la ecuacion",name:"ecuacion",onChange:w,value:null===S||void 0===S?void 0:S.ecuacion})]}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsxs)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:i,onChange:function(e){var c=parseInt(e.target.value);1===c&&(M(!0),A(!0)),2===c&&(M(!0),A(!1)),3===c&&(M(!0),A(!1)),4===c&&(M(!0),A(!1)),p([]),h([]),n(c)},children:[Object(b.jsx)("option",{selected:!0,children:"Escoge un Metodo"}),Object(b.jsx)("option",{value:1,children:"Biseccion"}),Object(b.jsx)("option",{value:2,children:"Newton Rapshon"}),Object(b.jsx)("option",{value:3,children:"Jacobi"}),Object(b.jsx)("option",{value:4,children:"Guss Seidel"})]})}),D?Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Valor Inicial a"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Digita valor inicial a",name:"iniciala",onChange:w,value:null===S||void 0===S?void 0:S.inicial})]}),P?Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Valor Inicial b"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Digita valor inicial b",name:"inicialb",onChange:w,value:null===S||void 0===S?void 0:S.inicial})]}):""]}):"",Object(b.jsx)("input",{type:"submit",className:"btn btn-success",value:"Calcular Metodo"})]})}),Object(b.jsxs)("div",{className:"table-i",children:[d.length?Object(b.jsx)("div",{children:Object(b.jsxs)("table",{className:"table table-striped",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"a"}),Object(b.jsx)("th",{scope:"col",children:"b"}),Object(b.jsx)("th",{scope:"col",children:"f(a)"}),Object(b.jsx)("th",{scope:"col",children:"f(b)"}),Object(b.jsx)("th",{scope:"col",children:"p"}),Object(b.jsx)("th",{scope:"col",children:"f(p)"})]})}),Object(b.jsx)("tbody",{children:d.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:e.iteracion}),Object(b.jsx)("th",{children:e.a}),Object(b.jsx)("th",{children:e.b}),Object(b.jsx)("th",{children:e.funcionA}),Object(b.jsx)("th",{children:e.funcionB}),Object(b.jsx)("th",{children:e.p}),Object(b.jsx)("th",{children:e.funcionP})]})}))})]})}):null,v.length?Object(b.jsx)("div",{children:Object(b.jsxs)("table",{className:"table table-striped",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Xi-1"}),Object(b.jsx)("th",{scope:"col",children:"f(xi-1)"}),Object(b.jsx)("th",{scope:"col",children:"f'(xi-1)"}),Object(b.jsx)("th",{scope:"col",children:"xi"})]})}),Object(b.jsx)("tbody",{children:v.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:e.iteracion}),Object(b.jsx)("th",{children:e.xi1}),Object(b.jsx)("th",{children:e.fxi1}),Object(b.jsx)("th",{children:e.fxi}),Object(b.jsx)("th",{children:e.xi})]})}))})]})}):null]})]})},d=(t(41),function(){return Object(b.jsx)("div",{className:"Navbar",children:Object(b.jsx)("h1",{children:"Metodos Iterativos"})})});t(42);var h=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsx)(u,{})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(c){var t=c.getCLS,a=c.getFID,i=c.getFCP,n=c.getLCP,l=c.getTTFB;t(e),a(e),i(e),n(e),l(e)}))};l.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.b6c8db5c.chunk.js.map