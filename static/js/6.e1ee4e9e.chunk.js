(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[6],{331:function(e,a,t){},332:function(e,a,t){},337:function(e,a,t){"use strict";t.r(a);var r=t(32),n=t(0),c=t.n(n),m=t(9),i=t(6),l=t.n(i),o=t(52),s=t(10);t(331);var u=function(e){var a=e.errorText;return c.a.createElement("div",{className:"error-login"},c.a.createElement("span",{className:"error-login__text"},a))},p=t(43),E=t(38);var f=function(e){var a=e.loginUser,t=e.captcha,r=function(){var e=Object(s.a)(l.a.mark((function e(t){var r,n,c,m,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,n=t.password,c=t.remember,m=t.captcha,e.next=3,a(r,n,c,m);case 3:if(!(i=e.sent)){e.next=6;break}return e.abrupt("return",Object(o.a)({},E.a,i));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n=function(e){return e?void 0:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u0430\u043f\u0447\u0443"};return c.a.createElement(p.b,{onSubmit:r,validate:function(e){var a={};return e.email||(a.email="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e.password||(a.password="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),a},render:function(e){var a=e.handleSubmit,r=e.submitting,m=e.submitError;return c.a.createElement("form",{className:"main-form",onSubmit:a},c.a.createElement(p.a,{name:"email",type:"email"},(function(e){var a=e.input,t=e.meta;return c.a.createElement("div",{className:"main-form__inputBody"},c.a.createElement("input",Object.assign({},a,{placeholder:"Email"})),t.error&&t.touched&&c.a.createElement("span",{className:"main-form__inputError"},t.error))})),c.a.createElement(p.a,{name:"password",type:"password"},(function(e){var a=e.input,t=e.meta;return c.a.createElement("div",{className:"main-form__inputBody"},c.a.createElement("input",Object.assign({},a,{placeholder:"Password"})),t.error&&t.touched&&c.a.createElement("span",{className:"main-form__inputError"},t.error))})),c.a.createElement(p.a,{name:"remember",type:"checkbox"},(function(e){var a=e.input,t=e.meta;return c.a.createElement("div",{className:"main-form__inputBody"},c.a.createElement("label",null,c.a.createElement("input",a),"Remember me"),t.error&&t.touched&&c.a.createElement("span",{className:"main-form__inputError"},t.error))})),t&&c.a.createElement("div",{className:"main-form__captcha"},c.a.createElement("img",{src:t,alt:"captcha"}),c.a.createElement(p.a,{name:"captcha",type:"text",validate:n},(function(e){var a=e.input,t=e.meta;return c.a.createElement("div",null,c.a.createElement("input",a),t.error&&t.touched&&c.a.createElement("span",{className:"main-form__inputError"},t.error))}))),c.a.createElement("div",{className:"main-from__submitWrapper"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:r},"Login"),m&&c.a.createElement(u,{errorText:m})))}})};t(332);var d=function(e){var a=e.loginUser,t=e.isAuth,r=e.captcha;return c.a.createElement("div",{className:"login"},t?c.a.createElement(m.a,{to:"/profile"}):c.a.createElement(f,{loginUser:a,captcha:r}),c.a.createElement("div",{className:"login__info"},c.a.createElement("h3",{className:"login__infoTitle"},"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 Email \u0438 Password"),c.a.createElement("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u044c\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0430 \u043d\u0430 \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0435 github. \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0435 \u043d\u0443\u0436\u043d\u0430! \u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430:"),c.a.createElement("span",null,c.a.createElement("b",null,"Email: free@samuraijs.com")),c.a.createElement("span",null,c.a.createElement("b",null,"Password: free"))))},b=t(17),v=t(36),h={loginUser:r.c};a.default=Object(b.b)((function(e){return{isAuth:Object(v.b)(e),captcha:Object(v.a)(e)}}),h)(d)}}]);
//# sourceMappingURL=6.e1ee4e9e.chunk.js.map