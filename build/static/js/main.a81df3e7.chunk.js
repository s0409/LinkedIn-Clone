(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{66:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},74:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),i=s(18),a=s.n(i),r=(s(66),s(15)),o=(s(70),s(31)),l=Object(o.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),j=l.actions,d=j.login,b=j.logout,u=function(e){return e.user.user},h=l.reducer,O=s(20),p=(s(71),s(47)),m=s.n(p),x=s(48),f=s.n(x),v=(s(72),s(3));var g=function(e){var t=e.Icon,s=e.title,c=e.color;return Object(v.jsxs)("div",{className:"inputOption",children:[Object(v.jsx)(t,{style:{color:c}}),Object(v.jsx)("h4",{children:s})]})},_=s(49),N=s.n(_),w=s(50),y=s.n(w),I=s(51),k=s.n(I),C=s(100),S=(s(74),s(43)),U=s.n(S),L=s(44),B=s.n(L),E=s(45),R=s.n(E),A=s(46),D=s.n(A),M=Object(c.forwardRef)((function(e,t){var s=e.name,c=e.description,n=e.message,i=e.photoUrl;return Object(v.jsxs)("div",{ref:t,className:"post",children:[Object(v.jsxs)("div",{className:"post__header",children:[Object(v.jsx)(C.a,{src:i,children:s[0]}),Object(v.jsxs)("div",{className:"post__info",children:[Object(v.jsx)("h2",{children:s}),Object(v.jsx)("p",{children:c})]})]}),Object(v.jsx)("div",{className:"post__body",children:Object(v.jsx)("p",{children:n})}),Object(v.jsxs)("div",{className:"post__buttons",children:[Object(v.jsx)(g,{Icon:U.a,title:"Like",color:"gray"}),Object(v.jsx)(g,{Icon:B.a,title:"Like",color:"Comment"}),Object(v.jsx)(g,{Icon:R.a,title:"Like",color:"Share"}),Object(v.jsx)(g,{Icon:D.a,title:"Like",color:"Send"})]})]})})),T=s(26),W=T.a.initializeApp({apiKey:"AIzaSyD4CbVH-5txYbx8AIiRzxkYNxI38wQT-i8",authDomain:"linkedin-clone-43bd0.firebaseapp.com",projectId:"linkedin-clone-43bd0",storageBucket:"linkedin-clone-43bd0.appspot.com",messagingSenderId:"211896223619",appId:"1:211896223619:web:f885f1ecc3fbeba957d8b6"}).firestore(),P=T.a.auth(),F=s(52);var H=function(){var e=Object(r.c)(u),t=Object(c.useState)(""),s=Object(O.a)(t,2),n=s[0],i=s[1],a=Object(c.useState)([]),o=Object(O.a)(a,2),l=o[0],j=o[1];return Object(c.useEffect)((function(){W.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(v.jsxs)("div",{className:"feed",children:[Object(v.jsxs)("div",{className:"feed__inputContainer",children:[Object(v.jsxs)("div",{className:"feed__input",children:[Object(v.jsx)(m.a,{}),Object(v.jsxs)("form",{children:[Object(v.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text"}),Object(v.jsx)("button",{onClick:function(t){t.preventDefault(),W.collection("posts").add({name:e.displayName,description:e.email,message:n,photoUrl:e.photoUrl||"",timestamp:T.a.firestore.FieldValue.serverTimestamp()}),i("")},type:"submit",children:"Send"})]})]}),Object(v.jsxs)("div",{className:"feed__inputOptions",children:[Object(v.jsx)(g,{Icon:f.a,title:"Photo",color:"#7085F9"}),Object(v.jsx)(g,{Icon:N.a,title:"Video",color:"#E7A33E"}),Object(v.jsx)(g,{Icon:y.a,title:"Event",color:"#C0CBCD"}),Object(v.jsx)(g,{Icon:k.a,title:"Write article",color:"#7FC15E"})]})]}),Object(v.jsx)(F.a,{children:l.map((function(e){var t=e.id,s=e.data,c=s.name,n=s.description,i=s.message,a=s.photoUrl;return Object(v.jsx)(M,{name:c,description:n,message:i,photoUrl:a},t)}))})]})},J=(s(81),s(53)),V=s.n(J);s(82);var z=function(e){var t=e.avatar,s=e.Icon,c=e.title,n=e.onClick,i=Object(r.c)(u);return Object(v.jsxs)("div",{onClick:n,className:"headerOption",children:[s&&Object(v.jsx)(s,{className:"headerOptions__icon"}),t&&Object(v.jsx)(C.a,{className:"headerOption__icon",children:null===i||void 0===i?void 0:i.email[0]}),Object(v.jsx)("h3",{className:"headerOption__title",children:c})]})},q=s(54),X=s.n(q),Y=s(55),Z=s.n(Y),$=s(56),G=s.n($),K=s(57),Q=s.n(K),ee=s(58),te=s.n(ee);var se=function(){var e=Object(r.b)();return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{className:"header__left",children:[Object(v.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",alt:""}),Object(v.jsxs)("div",{className:"header__search",children:[Object(v.jsx)(V.a,{}),Object(v.jsx)("input",{placeholder:"Search",type:"text"})]})]}),Object(v.jsxs)("div",{className:"header__right",children:[Object(v.jsx)(z,{Icon:X.a,title:"Home"}),Object(v.jsx)(z,{Icon:Z.a,title:"My Network"}),Object(v.jsx)(z,{Icon:G.a,title:"Jobs"}),Object(v.jsx)(z,{Icon:Q.a,title:"Messaging"}),Object(v.jsx)(z,{Icon:te.a,title:"Notifications"}),Object(v.jsx)(z,{avatar:!0,title:"Me",onClick:function(){e(b()),P.signOut()}})]})]})};s(83);var ce=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)(""),a=Object(O.a)(i,2),o=a[0],l=a[1],j=Object(c.useState)(""),b=Object(O.a)(j,2),u=b[0],h=b[1],p=Object(c.useState)(""),m=Object(O.a)(p,2),x=m[0],f=m[1],g=Object(r.b)();return Object(v.jsxs)("div",{className:"login",children:[Object(v.jsx)("img",{src:"https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?",alt:""}),Object(v.jsxs)("form",{children:[Object(v.jsx)("input",{value:u,onChange:function(e){return h(e.target.value)},placeholder:"Full name (required if registering) ",type:"text"}),Object(v.jsx)("input",{value:x,onChange:function(e){return f(e.target.value)},placeholder:"Profile pic URL (optional)",type:"text"}),Object(v.jsx)("input",{value:s,onChange:function(e){return n(e.target.value)},placeholder:"Email",type:"email"}),Object(v.jsx)("input",{value:o,onChange:function(e){return l(e.target.value)},placeholder:"Password",type:"password"}),Object(v.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),P.signInWithEmailAndPassword(s,o).then((function(e){g(d({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.photoURL}))}))},children:"Sign In"})]}),Object(v.jsxs)("p",{children:["Not a member?","",Object(v.jsx)("span",{className:"login__register",onClick:function(){if(!u)return alert("Please enter a full name!");P.createUserWithEmailAndPassword(s,o).then((function(e){e.user.updateProfile({displayName:u,photoURL:x}).then((function(){g(d({email:e.user.email,uid:e.user.uid,displayName:u,photoURL:x}))}))})).catch((function(e){return alert(e)}))},children:"Register Now"})]})]})};s(84);var ne=function(){var e=Object(r.c)(u),t=function(e){return Object(v.jsxs)("div",{className:"sidebar__recentItem",children:[Object(v.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(v.jsx)("p",{children:e})]})};return Object(v.jsxs)("div",{className:"sidebar",children:[Object(v.jsxs)("div",{className:"sidebar__top",children:[Object(v.jsx)("img",{src:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDBBfHw%3D&w=1000&q=80",alt:""}),Object(v.jsx)(C.a,{src:e.photoUrl,className:"sidebar__avatar",children:e.email[0]}),Object(v.jsx)("h2",{children:e.displayName}),Object(v.jsx)("h4",{children:e.email})]}),Object(v.jsxs)("div",{className:"sidebar__stats",children:[Object(v.jsxs)("div",{className:"sidebar__stat",children:[Object(v.jsx)("p",{children:"Who viewed you"}),Object(v.jsx)("p",{className:"sidebar__statNumber",children:"2,543"})]}),Object(v.jsxs)("div",{className:"sidebar__stat",children:[Object(v.jsx)("p",{children:"Views on posts"}),Object(v.jsx)("p",{className:"sidebar__statNumber",children:"2,448"})]})]}),Object(v.jsxs)("div",{className:"sidebar__bottom",children:[Object(v.jsx)("p",{children:"Recent"}),t("react.js"),t("programming"),t("softwareengineering"),t("design"),t("developer")]})]})},ie=(s(85),s(60)),ae=s.n(ie),re=s(59),oe=s.n(re);var le=function(){var e=function(e,t){return Object(v.jsxs)("div",{className:"widgets__article",children:[Object(v.jsx)("div",{className:"widgets__articleleft",children:Object(v.jsx)(oe.a,{})}),Object(v.jsxs)("div",{className:"widgets__articleright",children:[Object(v.jsx)("h4",{children:e}),Object(v.jsx)("p",{children:t})]})]})};return Object(v.jsxs)("div",{className:"widgets",children:[Object(v.jsxs)("div",{className:"widgets__header",children:[Object(v.jsx)("h2",{children:"LinkedIn News"}),Object(v.jsx)(ae.a,{})]}),e("REACT.JS is Fun","Top news - 9099 Developers"),e("Coronavirus: India Updates","Top news - 886 readers"),e("Tesla hits new Highs","Cars & auto - 300 readers"),e("Bitcoin Breaks $22k","Crypto - 8000 readers"),e("REACT.JS is Fun","Code - 123 readers"),e("Data Structures & Algorithm Blogs","Top news - 6500 readers")]})};var je=function(){var e=Object(r.c)(u),t=Object(r.b)();return Object(c.useEffect)((function(){P.onAuthStateChanged((function(e){t(e?d({email:e.email,uid:e.displayName,photoUrl:e.photoURL}):b())}))}),[]),Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(se,{}),e?Object(v.jsxs)("div",{className:"app__body",children:[Object(v.jsx)(ne,{}),Object(v.jsx)(H,{}),Object(v.jsx)(le,{})]}):Object(v.jsx)(ce,{})]})},de=Object(o.a)({reducer:{user:h}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(r.a,{store:de,children:Object(v.jsx)(je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[87,1,2]]]);
//# sourceMappingURL=main.a81df3e7.chunk.js.map