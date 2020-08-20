(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[1],{14:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(71),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"5ba345f8-29a4-4d9f-83bf-efaa59c593a9"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUserProfile:function(e){return console.warn("\u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0431\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0438\u0437 profileAPI"),c.getProfile(e)},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e))},editStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return d}));var r=n(6),a=n.n(r),u=n(13),c=n(4),i=n(14),s={id:null,email:null,login:null,isAuth:!1},o=function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return{type:"SET_USER_DATA",data:{id:e,login:t,email:n,isAuth:r}}},l=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,u=r.id,c=r.login,s=r.email,t(o(u,c,s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(u.a)(a.a.mark((function r(u){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:if(0===(c=r.sent).data.resultCode){r.next=7;break}return r.abrupt("return",c.data.messages);case 7:u(l());case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},d=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(o(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(c.a)(Object(c.a)({},e),t.data);default:return e}}},288:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(34),c=n.n(u),i=n(30),s=n(31),o=n(33),l=n(32),f=n(21),d=n(7),m=n(22),p=n(20),b=n(4),v=n(24),g={init:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{init:!0});default:return e}},E=(n(288),n(9)),O=n(8),_=n.n(O);var j=function(){return a.a.createElement("nav",{className:_.a.main_nav},a.a.createElement("div",{className:_.a.item},a.a.createElement(E.b,{to:"/profile",className:_.a.item_link,activeClassName:_.a.active},"Profile")),a.a.createElement("div",{className:_.a.item},a.a.createElement(E.b,{to:"/dialogs",className:_.a.item_link,activeClassName:_.a.active},"Messages")),a.a.createElement("div",{className:_.a.item},a.a.createElement(E.b,{to:"/",className:_.a.item_link},"News")),a.a.createElement("div",{className:_.a.item},a.a.createElement(E.b,{to:"/music",className:_.a.item_link},"Music")),a.a.createElement("div",{className:_.a.item},a.a.createElement(E.b,{to:"/",className:_.a.item_link},"Settings")),a.a.createElement("div",{className:_.a.item},a.a.createElement(E.b,{to:"/users",activeClassName:_.a.active,className:_.a.item_link},"Users")))},w=n(46),S=n.n(w),y=n(72),T=n.n(y);var k=function(e){var t=e.isAuth,n=e.login,r=e.logoutUser;return a.a.createElement("header",null,a.a.createElement(E.b,{to:"/",className:S.a.header__logo},a.a.createElement("img",{src:T.a,alt:"logo"})),a.a.createElement("div",{className:S.a.login_block},t?a.a.createElement("div",null,a.a.createElement(E.b,{to:"/profile"},n),"---",a.a.createElement("button",{onClick:r},"LOGOUT")):a.a.createElement(E.b,{to:"/login"},"Login")))},N=n(42),P=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(k,this.props)}}]),n}(a.a.Component),C={logoutUser:v.d},U=Object(m.b)((function(e){return{isAuth:Object(N.a)(e),login:Object(N.b)(e)}}),C)(P),I=n(47),x=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,308))})),R=a.a.lazy((function(){return n.e(5).then(n.bind(null,309))})),A=a.a.lazy((function(){return n.e(8).then(n.bind(null,306))})),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,307))})),L=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,310))})),G=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){return this.props.init?a.a.createElement(f.Container,null,a.a.createElement(f.Row,null,a.a.createElement(f.Col,null,a.a.createElement(U,null))),a.a.createElement(f.Row,null,a.a.createElement(f.Col,{col:"md-4"},a.a.createElement(j,null)),a.a.createElement(f.Col,{col:"md-8"},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},a.a.createElement(d.b,{path:"/profile/:userId?",component:D}),a.a.createElement(d.b,{path:"/dialogs",component:x}),a.a.createElement(d.b,{path:"/users",component:R}),a.a.createElement(d.b,{path:"/login",component:L}),a.a.createElement(d.b,{path:"/music/:musicName?",component:A}))))):a.a.createElement(I.a,null)}}]),n}(a.a.Component),M={initApp:function(){return function(e){var t=e(Object(v.b)());Promise.all([t]).then((function(){e({type:"INIT_SUCCESS"})}))}}},F=Object(p.d)(d.f,Object(m.b)((function(e){return{init:e.app.init}}),M))(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(73),q=n(48),B=n(68),H={},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;return e},X=n(69),Q=Object(p.c)({profilePage:q.b,dialogsPage:B.b,sidebar:W,usersPage:X.a,auth:v.a,app:h}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,K=Object(p.e)(Q,J(Object(p.a)(z.a)));window.__store__=K;var V=K,Y=function(e){c.a.render(a.a.createElement(E.a,null,a.a.createElement(m.a,{store:e},a.a.createElement(F,null))),document.getElementById("root"))};Y(V),V.subscribe((function(){Y(V)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return u}));var r=function(e){return e.auth.isAuth},a=function(e){return e.auth.id},u=function(e){return e.auth.login}},46:function(e,t,n){e.exports={header__logo:"Header_header__logo__1ETZb",login_block:"Header_login_block__3dzPh"}},47:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(290);t.a=function(){return a.a.createElement("div",{className:"lds-roller"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return h}));var r=n(6),a=n.n(r),u=n(13),c=n(25),i=n(4),s=n(14),o="profile-reducer/ADD_POST",l="profile-reducer/SET_PROFILE_USER_POST",f="profile-reducer/SET_STATUS",d="profile-reducer/DELETE_POST",m={postsData:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0434\u0435\u043b\u0430?",likesCount:10},{id:2,message:"\u042f \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b \u0442\u0435\u0431\u0435 \u043f\u0440\u043e\u043f\u0441\u044b",likesCount:2},{id:3,message:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0439",likesCount:15}],userProfile:null,status:""},p=function(e){return{type:o,newPostText:e}},b=function(e){return{type:f,profileStatus:e}},v=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getUserProfile(e);case 2:r=t.sent,n({type:l,userProfile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.editStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[{id:5,message:t.newPostText,likesCount:0}])});case d:return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case l:return Object(i.a)(Object(i.a)({},e),{},{userProfile:t.userProfile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.profileStatus});default:return e}}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(25),a=n(4),u="dialogs-reducer/ADD-DIALOG",c={dialogsData:[{name:"\u0414\u0438\u043c\u044b\u0447",id:1},{name:"\u0410\u043d\u0434\u0440\u0435\u0439",id:2},{name:"\u0412\u0430\u043b\u0435\u0440\u0430",id:3},{name:"\u0412\u0430\u0434\u043e\u0441",id:4},{name:"\u0421\u0432\u0435\u0442\u0430",id:5}],dialogsMessage:[{id:1,message:"\u0425\u0430\u0445"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430 \u041c\u044d\u043d?"},{id:3,message:"\u0422\u044b \u0447\u0435\u0433\u043e \u043c\u043e\u043b\u0447\u0438\u0448\u044c \u0434\u0440\u0443\u0436\u0435?"},{id:4,message:"\u041d\u0443 \u0438 \u043b\u0430\u0434\u043d\u043e... \u044f \u043f\u043e\u0448\u0435\u043b \u0433\u0443\u043b\u044f\u0442\u044c \u043e\u0434\u0438\u043d"}]},i=function(e){return{type:u,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(a.a)(Object(a.a)({},e),{},{dialogsMessage:[].concat(Object(r.a)(e.dialogsMessage),[{id:5,message:t.newMessageBody}])});default:return e}}},69:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return O})),n.d(t,"f",(function(){return _})),n.d(t,"b",(function(){return j}));var r=n(6),a=n.n(r),u=n(13),c=n(25),i=n(4),s=n(14),o="users-reducer/FOLLOW",l="users-reducer/UNFOLLOW",f="users-reducer/SET_USERS",d={users:[],pageSize:20,totalCountUsers:0,currentPage:1,isFetching:!0,requestInProgress:[]},m=function(e){return{type:o,userId:e}},p=function(e){return{type:l,userId:e}},b=function(e){return{type:f,users:e}},v=function(e){return{type:"users-reducer/SET_TOTAL_COUNT_USERS",count:e}},g=function(e){return{type:"users-reducer/TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"users-reducer/TOGGLE_IN_REQUEST_PROGRESS",isRequest:e,userId:t}},E=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.c.getUsers(e,t);case 2:u=n.sent,r(g(!1)),r(b(u.items)),r(v(u.totalCount));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},O=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"users-reducer/SET_CURRENT_PAGE",currrentPage:e}),r(g(!0)),n.next=4,s.c.getUsers(e,t);case 4:u=n.sent,r(g(!1)),r(b(u.items)),r(v(u.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h(!0,e)),t.next=3,s.c.unfollowUser(e);case 3:0===t.sent.resultCode&&n(p(e)),n(h(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h(!0,e)),t.next=3,s.c.followUser(e);case 3:0===t.sent.resultCode&&n(m(e)),n(h(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case f:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"users-reducer/SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currrentPage});case"users-reducer/SET_TOTAL_COUNT_USERS":return Object(i.a)(Object(i.a)({},e),{},{totalCountUsers:t.count});case"users-reducer/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"users-reducer/TOGGLE_IN_REQUEST_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{requestInProgress:t.isRequest?[].concat(Object(c.a)(e.requestInProgress),[t.userId]):e.requestInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},72:function(e,t,n){e.exports=n.p+"static/media/logo.d51eb85f.png"},74:function(e,t,n){e.exports=n(291)},8:function(e,t,n){e.exports={main_nav:"Nav_main_nav__1DmQD",item:"Nav_item__96rLj",item_link:"Nav_item_link__1p_Xk",active:"Nav_active__XSt-p"}}},[[74,2,3]]]);
//# sourceMappingURL=main.5b8776cf.chunk.js.map