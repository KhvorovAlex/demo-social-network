(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{316:function(e,t,a){e.exports=a.p+"static/media/user-logo.845a0d1f.png"},318:function(e,t,a){},319:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var s=a(24),i=a(25),n=a(27),c=a(26),r=a(0),l=a.n(r),o=(a(318),a(21)),m=a(316),u=a.n(m);a(319);var d=function(e){var t=e.id,a=e.userName,s=e.photos,i=e.lastDialogActivityDate,n=e.lastUserActivityDate;return l.a.createElement("div",{className:"dialogs__item"},l.a.createElement(o.b,{to:"/dialogs/"+t,className:"dialogs__itemBody"},l.a.createElement("div",{className:"dialogs__itemImg"},l.a.createElement("img",{className:"item__img",src:s.small?s.small:u.a,alt:"user avatar"})),l.a.createElement("div",{className:"dialogs__itemText"},l.a.createElement("div",{className:"text__userName"},a),l.a.createElement("div",{className:"text__lastVisit"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0440\u0430\u0437 \u0431\u044b\u043b \u0432 \u0441\u0435\u0442\u0438: ",l.a.createElement("span",null,n))),l.a.createElement("div",{className:"dialogs__itemDate"},i)))};var g=function(e){var t=e.dialogsData;return l.a.createElement("div",{className:"dialogs"},l.a.createElement("h2",{className:"dialogs__title"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),l.a.createElement("div",{className:"dialogs__items"},t.map((function(e){return l.a.createElement(d,Object.assign({key:"userId_"+e.id},e))}))))},p=a(28),v=a(9),b=a(16),h=function(e){return{isAuth:e.auth.isAuth}},_=a(23),f=a(73),E=a(39),j=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getDialogs(!1)}},{key:"render",value:function(){return this.props.isFetching?l.a.createElement(E.a,null):l.a.createElement(g,this.props)}}]),a}(l.a.Component),O={addMessage:p.b,getDialogs:p.e};t.default=Object(_.d)((function(e){var t=function(t){Object(n.a)(r,t);var a=Object(c.a)(r);function r(){return Object(s.a)(this,r),a.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(v.a,{to:"/login"})}}]),r}(l.a.Component);return Object(b.b)(h)(t)}),Object(b.b)((function(e){return{dialogsMessage:Object(f.c)(e),dialogsData:Object(f.b)(e),isFetching:e.dialogsPage.isFetching}}),O))(j)}}]);
//# sourceMappingURL=4.b66c7e28.chunk.js.map