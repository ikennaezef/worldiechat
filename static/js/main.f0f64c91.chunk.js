(this.webpackJsonpWorldieChat=this.webpackJsonpWorldieChat||[]).push([[0],{45:function(t,e,n){"use strict";n.r(e);var r,c,o,i,a,s,l,d,j,u,m,b,f,h,O,x,g,p,v,y,w,k,C,S,z,A,I,P,N,U,D,E,W,F,T,J,L,B,G=n(4),H=n.n(G),R=n(29),q=n.n(R),M=n(13),Y=n(8),_=n(7),K=n(6),V=Object(K.b)(r||(r=Object(_.a)(["\n\t\n\t* {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tbox-sizing: border-box;\n\t\ttransition: 0.3s ease;\n\t}\n\n\tbody {\n\t\tbackground-color: ",";\n\t\tfont-family: 'Rubik', 'Bahnschrift', sans-serif;\n\t\tcolor: ",";\n\t}\n\n\thtml {\n\t\tscroll-behaviour: smooth;\n\t\tfont-size: 16px;\n\t}\n\n\n\n\t@media(min-width: 1440px) {\n\t\thtml {\n\t\t\tfont-size: 20px;\n\t\t}\n"])),(function(t){return t.theme.default.body}),(function(t){return t.theme.default.text})),Z=n(9),Q=n(3),X=Object(G.createContext)(),$=function(){return Object(G.useContext)(X)},tt=function(t){var e=t.children,n=Object(G.useState)(null),r=Object(Z.a)(n,2),c=r[0],o=r[1],i=Object(G.useState)(!1),a=Object(Z.a)(i,2),s=a[0],l=a[1],d=Object(G.useState)(""),j=Object(Z.a)(d,2),u=j[0],m=j[1],b=Object(G.useState)(""),f=Object(Z.a)(b,2),h={currentUser:c,setCurrentUser:o,navOpen:s,setNavOpen:l,currentRoom:u,setCurrentRoom:m,display:f[0],setDisplay:f[1]};return Object(Q.jsx)(X.Provider,{value:h,children:e})},et=n(18),nt=et.a.initializeApp({apiKey:"AIzaSyD1YMyNJgDz1vkr9Eq2rFSMBEpW83imbjM",authDomain:"worldiechat.firebaseapp.com",projectId:"worldiechat",storageBucket:"worldiechat.appspot.com",messagingSenderId:"307355247872",appId:"1:307355247872:web:1baa8705a7000efe227fe5",measurementId:"G-NPGF4Z2HFC"}).firestore(),rt=et.a.auth(),ct=function(t){t.redirectPath;var e=t.children,n=$(),r=n.currentUser,c=n.setCurrentUser;return Object(G.useEffect)((function(){rt.onAuthStateChanged((function(t){if(!t)return c(null),Object(Q.jsx)(Y.a,{to:"/",replace:!0});c(t)}))()}),[r]),e},ot=n(17),it=K.c.span(c||(c=Object(_.a)(["\n\tmax-width: 100%;\n\tdisplay: inline-block;\n\tcolor: ",";\n\n\tsvg {\n\t\tanimation: spin 1.2s infinite linear;\n\t}\n\t\n\n\t@keyframes spin {\n\t\tfrom {\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\n\t\tto {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n"])),(function(t){var e=t.color,n=t.theme;return e||n.default.text})),at=function(t){var e=t.color;return Object(Q.jsx)(it,{color:e,children:Object(Q.jsx)(ot.d,{})})},st=K.c.div(o||(o=Object(_.a)(["\n\theight: 100vh;\n\toverflow: hidden;\n\tbackground-color: ",";\n\tpadding: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"])),(function(t){return t.theme.default.body})),lt=K.c.div(i||(i=Object(_.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 1rem;\n\tmax-width: 80rem;\n\tbackground-color: #fff;\n\tanimation: appear 1.5s ease forwards;\n\n\t@keyframes appear {\n\t\tfrom {\n\t\t\topacity: 0;\n\t\t}\n\n\t\tto {\n\t\t\topacity: 1;\n\t\t}\n\t}\n"]))),dt=K.c.div(a||(a=Object(_.a)(["\n\tpadding: 1rem;\n\n\t@media(max-width: 500px) {\n\t\tdisplay: none;\n\t}\n\n"]))),jt=K.c.img(s||(s=Object(_.a)(["\n\twidth: 28rem;\n\tmargin: 1rem;\n\n\t@media(max-width: 790px) {\n\t\twidth: 23rem;\n\t}\n"]))),ut=K.c.div(l||(l=Object(_.a)(["\n\tpadding: 1rem;\n"]))),mt=K.c.h1(d||(d=Object(_.a)(["\n\tfont-size: 2rem;\t\n\tmargin-bottom: 1.2rem;\n\ttext-align: center;\n\n\tspan {\n\t\tcolor: ",";\n\t}\n\n\t& + p {\n\t\ttext-align: center;\n\t}\n"])),(function(t){return t.theme.default.accent})),bt=K.c.form(j||(j=Object(_.a)(["\n\tmargin: 1.5rem 0 0.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tinput {\n\t\twidth: 100%;\n\t\tpadding: 0.8rem;\n\t\tborder: none;\n\t\toutline: none;\n\t\tbackground-color: ",";\n\t\tmargin-bottom: 1.2rem;\n\t\tfont-size: 1rem;\n\t\tfont-family: inherit;\n\t}\n"])),(function(t){return t.theme.default.body})),ft=K.c.button(u||(u=Object(_.a)(["\n\tcursor: pointer;\n\tpadding: 0.8rem;\n\tbackground-color: ",";\n\tborder: none;\n\toutline: none;\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tfont-family: inherit;\n\tfont-weight: 500;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t\ttransform: translateY(0.2rem);\n\t}\n\n\t&:disabled {\n\t\tbackground-color: #6379fc;\n\t\tcursor: default;\n\t}\n"])),(function(t){return t.theme.default.accent})),ht=Object(K.c)(ft)(m||(m=Object(_.a)(["\n\tbackground-color: #fff;\n\tcolor: ",";\n\tborder: 0.1rem solid ",";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: 1.5rem;\n\twidth: 100%;\n\n\tsvg {\n\t\tmargin-right: 1rem;\n\t}\n"])),(function(t){return t.theme.default.accent}),(function(t){return t.theme.default.accent})),Ot=K.c.p(b||(b=Object(_.a)(["\n\tfont-size: 0.8rem;\n\n\tspan a{\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.default.accent})),xt=n(16),gt=n(21),pt=function(){var t=$().setCurrentUser,e=Object(Y.g)(),n=Object(G.useState)(""),r=Object(Z.a)(n,2),c=r[0],o=r[1],i=Object(G.useState)(""),a=Object(Z.a)(i,2),s=a[0],l=a[1],d=Object(G.useState)(!1),j=Object(Z.a)(d,2),u=j[0],m=j[1];return Object(Q.jsx)(st,{children:Object(Q.jsxs)(lt,{children:[Object(Q.jsx)(dt,{children:Object(Q.jsx)(jt,{src:"./images/People-chatting.svg",alt:"People chatting"})}),Object(Q.jsxs)(ut,{children:[Object(Q.jsxs)(mt,{children:[" ",Object(Q.jsxs)("span",{children:[" ",Object(Q.jsx)(xt.a,{})," "]}),"Worldie",Object(Q.jsx)("span",{children:"Chat"})," "]}),Object(Q.jsx)("p",{children:"Login to continue communicating"}),Object(Q.jsxs)(bt,{onSubmit:function(n){m(!0),n.preventDefault(),rt.signInWithEmailAndPassword(c,s).then((function(n){t(n.user),sessionStorage.setItem("user",JSON.stringify(n.user)),m(!1),e("/chatroom/general")})).catch((function(t){m(!1),alert(t.message)}))},children:[Object(Q.jsx)("input",{type:"email",value:c,onChange:function(t){return o(t.target.value)},placeholder:"Email",required:!0}),Object(Q.jsx)("input",{type:"password",value:s,onChange:function(t){return l(t.target.value)},placeholder:"Password",required:!0}),Object(Q.jsx)(ft,{type:"submit",disabled:u,children:u?Object(Q.jsx)(at,{color:"#fff"}):"Login"})]}),Object(Q.jsxs)(ht,{onClick:function(){var n=new et.a.auth.GoogleAuthProvider;n.setCustomParameters({prompt:"select_account"}),rt.signInWithPopup(n).then((function(n){t(n.user),sessionStorage.setItem("user",JSON.stringify(n.user)),e("/chatroom/general")})).catch((function(t){return alert(t.message)}))},children:[" ",Object(Q.jsx)(gt.a,{})," Login with Google "]}),Object(Q.jsxs)(Ot,{children:["Not on WorldieChat yet? ",Object(Q.jsx)("span",{children:Object(Q.jsx)(M.b,{to:"/signup",children:"Sign Up Here."})})]})]})]})})},vt=function(){var t=$(),e=t.setCurrentUser,n=t.setDisplay,r=Object(G.useState)(""),c=Object(Z.a)(r,2),o=c[0],i=c[1],a=Object(G.useState)(""),s=Object(Z.a)(a,2),l=s[0],d=s[1],j=Object(G.useState)(""),u=Object(Z.a)(j,2),m=u[0],b=u[1],f=Object(G.useState)(!1),h=Object(Z.a)(f,2),O=h[0],x=h[1],g=Object(Y.g)();return Object(Q.jsx)(st,{children:Object(Q.jsxs)(lt,{children:[Object(Q.jsx)(dt,{children:Object(Q.jsx)(jt,{src:"./images/People-chatting.svg",alt:"People chatting"})}),Object(Q.jsxs)(ut,{children:[Object(Q.jsxs)(mt,{children:[" ",Object(Q.jsxs)("span",{children:[" ",Object(Q.jsx)(xt.a,{})," "]}),"Worldie",Object(Q.jsx)("span",{children:"Chat"})," "]}),Object(Q.jsx)("p",{children:"Sign Up to start communicating"}),Object(Q.jsxs)(bt,{onSubmit:function(t){x(!0),t.preventDefault(),rt.createUserWithEmailAndPassword(l,m).then((function(t){return t.user.updateProfile({displayName:o}),n(o),e(t.user),sessionStorage.setItem("user",JSON.stringify(t.user)),x(!1),g("/chatroom/general")})).catch((function(t){x(!1),alert(t.message)}))},children:[Object(Q.jsx)("input",{type:"text",value:o,onChange:function(t){return i(t.target.value)},placeholder:"Username",required:!0}),Object(Q.jsx)("input",{type:"email",value:l,onChange:function(t){return d(t.target.value)},placeholder:"Email Address",required:!0}),Object(Q.jsx)("input",{type:"password",onChange:function(t){return b(t.target.value)},placeholder:"Password",required:!0}),Object(Q.jsx)(ft,{type:"submit",disabled:O,children:O?Object(Q.jsx)(at,{color:"#fff"}):"Sign Up"})]}),Object(Q.jsxs)(ht,{onClick:function(){var t=new et.a.auth.GoogleAuthProvider;t.setCustomParameters({prompt:"select_account"}),rt.signInWithPopup(t).then((function(t){e(t.user),sessionStorage.setItem("user",JSON.stringify(t.user)),g("/chatroom/general")})).catch((function(t){return alert(t.message)}))},children:[" ",Object(Q.jsx)(gt.a,{})," Login with Google "]}),Object(Q.jsxs)(Ot,{children:["Already have an account? ",Object(Q.jsx)("span",{children:Object(Q.jsx)(M.b,{to:"/",children:"Login Here."})})]})]})]})})},yt=K.c.div(f||(f=Object(_.a)(["\n\t/*position: relative;*/\n"]))),wt=K.c.div(h||(h=Object(_.a)(["\n\tbackground-color: inherit;\n\tpadding: 2rem;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 2rem;\n"]))),kt=K.c.div(O||(O=Object(_.a)(["\n\tpadding: 1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\timg {\n\t\twidth: 20rem;\n\t\tmargin-bottom: 2rem;\n\t}\n\n\tp {\n\t\tfont-size: 1.2rem;\n\t\ttext-align: center;\n\t}\n\n\t@media (max-width: 500px) {\n\t\timg {\n\t\t\twidth: 14rem;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: 1rem;\n\t\t}\n\t}\n"]))),Ct=K.c.div(x||(x=Object(_.a)(["\n    max-width: 50rem;\n    padding: 0 1rem;\n    margin: 7rem auto 3rem;\n    overflow-y: scroll;\n    margin-bottom: 5rem;\n\n    ::-webkit-scrollbar {\n        background-color: #ddd;\n        width: 0.4rem;\n        border-radius: 0.3rem;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background-color: #bbb;\n        width: 0.4rem;\n        border-radius: 0.3rem;\n    }\n\n\n    @media (max-width: 500px) {\n        margin: 5rem auto 3rem;\n    }\n\n    @media (min-width: 1400px) {\n        max-width: 60rem;\n    }\n"]))),St=K.c.div(g||(g=Object(_.a)(["\n\n\twidth: fit-content;\n\tmax-width: 75vw;\n\tmargin-bottom: 0.4rem;\t\n\tmargin-left: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tanimation: slide 0.5s forwards;\n\n\tdiv {\n\t\tpadding: 0.5rem 0.7rem;\n\t\tbackground-color: #fff;\n\t\tcolor: ",";\n\t\tborder-radius: 0.4rem;\n\t\toverflow-wrap: break-word;\n\t}\n\n\tp {\n\t\tfont-size: 1rem;\n\t\tmargin-bottom: 0.2rem;\n\t\tmax-width: 100%;\n\t}\n\n\n\t@media(min-width: 450px)  {\t\t\n\t\tmax-width: 45vw;\n\t}\n\n\t@media(min-width: 1400px)  {\t\t\n\t\tmax-width: 40rem;\n\t}\n\n\n\t@keyframes slide {\n\t\tfrom {\n\t\t\ttransform: scale(0.6);\n\t\t\topacity: 0.7;\n\t\t}\n\n\t\tto {\n\t\t\ttransform: scale(1);\n\t\t\topacity: 1;\n\t\t}\n\t}\n"])),(function(t){return t.theme.default.textAlt})),zt=Object(K.c)(St)(p||(p=Object(_.a)(["\n\tmargin-left: auto;\n\n\tspan {\n\t\tmargin-left: auto;\n\t}\n\n\tdiv {\n\t\tbackground-color: ",";\n\t\tcolor: #fff;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t}\n\n\tbutton {\n\t\twidth: fit-content;\n\t\tpadding: 0.1rem;\n\t\ttext-align: right;\n\t\talign-self: flex-end;\n\t\tcursor: pointer;\n\t\tbackground-color: inherit;\n\t\tborder: none;\n\t\toutline: none;\n\t\tcolor: #fff;\n\t\tfont-size: 1.1rem;\n\t}\n"])),(function(t){return t.theme.default.accent})),At=K.c.span(v||(v=Object(_.a)(["\n\tfont-size: 0.8rem;\n\tfont-weight: 300;\n\tcolor: ",";\n"])),(function(t){return t.theme.default.body})),It=Object(K.c)(At)(y||(y=Object(_.a)(["\n\tcolor: ",";\n"])),(function(t){return t.theme.default.timeAlt})),Pt=K.c.span(w||(w=Object(_.a)(["\n\tfont-size: 0.8rem;\n\tfont-weight: 300;\n\tmargin-bottom: 0.1rem;\n\tcolor: ",";\n\n\t@media(max-width: 450px)  {\t\t\n\t\tfont-size: 0.8rem;\n\t}\n"])),(function(t){return t.theme.default.semi})),Nt=n(47),Ut=K.c.div(k||(k=Object(_.a)(["\n\tposition: fixed;\n\ttop: 30%;\n\tleft: 0;\n\tz-index: 100;\n\twidth: 100%;\n\theight: auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 2rem;\n\tanimation: appear 0.3s linear forwards;\n\n\t@keyframes appear {\n\t\tfrom {\n\t\t\topacity: 0.5;\n\t\t\ttransform: scale(0)\n\t\t}\n\n\t\tto {\n\t\t\topacity: 1;\n\t\t\ttransform: scale(1);\n\t\t}\n}\n"]))),Dt=K.c.div(C||(C=Object(_.a)(["\n\tpadding: 1.5rem;\n\tbackground-color: #fff;\n\tborder-radius: 0.4rem;\n\tz-index: 100;\n\ttransition: 0.5s ease;\n\n\th3 {\n\t\tfont-size: 1.2rem;\n\t\tmargin-bottom: 1rem;\n\t\tcolor: ",";\n\t\ttext-align: center;\n\t}\n\n\tdiv{\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\tbutton {\n\t\tpadding: 0.4rem 0.8rem;\n\t\tmargin: 0 1rem;\n\t\tborder-radius: 0.4rem;\n\t\tfont-family: inherit;\n\t\tfont-size: 0.9rem;\n\t\tcursor: pointer;\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\n\tbutton:first-child {\n\t\tbackground: #fff;\n\t\tcolor: ",";\n\t\tborder: 0.1rem solid ",";\n\t}\n\n\tbutton:nth-child(2) {\n\t\tbackground: ",";\n\t\tcolor: #fff;\n\t\tborder: 0.1rem solid ",";\n\t\tdisplay: flex;\n\n\t\tsvg {\n\t\t\tmargin-right: 0.2rem;\n\t\t}\n\t}\n\n"])),(function(t){return t.theme.default.textAlt}),(function(t){return t.theme.default.accent}),(function(t){return t.theme.default.accent}),(function(t){return t.theme.default.accent}),(function(t){return t.theme.default.accent})),Et=function(t){var e=t.handleClose,n=t.handleDelete;return Object(Q.jsx)(Ut,{children:Object(Q.jsxs)(Dt,{children:[Object(Q.jsx)("h3",{children:"Delete this message?"}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("button",{onClick:e,children:"Cancel"}),Object(Q.jsxs)("button",{onClick:n,children:[Object(Q.jsx)(xt.b,{})," Delete"]})]})]})})},Wt=function(t){var e=t.message,n=t.room,r=$().currentUser,c=Object(G.useState)(null),o=Object(Z.a)(c,2),i=o[0],a=o[1],s=Object(G.useState)(!1),l=Object(Z.a)(s,2),d=l[0],j=l[1];return Object(G.useEffect)((function(){var t=e.data.timestamp;t&&a(Object(Nt.a)(t.toDate()))}),[e]),Object(Q.jsx)(Q.Fragment,{children:e.data.sender===r.displayName?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(zt,{children:Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("button",{onClick:function(){return j(!0)},children:[" ",Object(Q.jsx)(xt.b,{})," "]}),Object(Q.jsx)("p",{children:e.data.message}),Object(Q.jsx)(At,{children:i})]})}),d&&Object(Q.jsx)(Et,{handleDelete:function(){j(!1),nt.collection(n).doc(e.id).delete()},handleClose:function(){return j(!1)}})]}):Object(Q.jsxs)(St,{children:[Object(Q.jsx)(Pt,{children:e.data.sender||"unknown user"}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("p",{children:e.data.message}),Object(Q.jsxs)(It,{children:[" ",i]})]})]})})},Ft=K.c.header(S||(S=Object(_.a)(["\n\tbackground-color: ",";\n\n\tmargin: 0 auto 1.5rem;\n\tpadding: 1.5rem 2rem;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tz-index: 10;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\th3 {\n\t\tfont-size: 1rem;\n\t\tfont-weight: 300;\n\t\tcolor: ",";\n\t}\n\n\tbutton {\n\t\tpadding: 0.2rem;\n\t\tfont-size: 1.4rem;\n\t\tcolor: inherit;\n\t\tbackground-color: inherit;\n\t\tborder: none;\n\t\toutline: none;\n\t\tcursor: pointer;\n\t}\n\n\t@media (max-width: 500px) {\n\t\tpadding: 0.8rem 1rem;\n\t}\n"])),(function(t){return t.theme.default.body}),(function(t){return t.theme.default.semi})),Tt=K.c.div(z||(z=Object(_.a)(["\n\t\n\ttext-align: center;\n\n\th1 {\n\t\tfont-size: 2.3rem;\n\t\tcolor: ",";\n\t\tmargin-bottom: 0.1rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\n\t\tspan {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n\n\t@media (max-width: 500px) {\n\t\th1 {\n\t\t\tfont-size: 1.6rem;\n\t\t}\n\t}\n\n"])),(function(t){return t.theme.default.text}),(function(t){return t.theme.default.accent})),Jt=(Object(K.c)(Tt)(A||(A=Object(_.a)(["\n\t\n\th1 {\n\t\tcolor: #fff;\n\n\t\tspan {\n\t\t\tcolor: #aaa;\n\t\t}\n\t}\n"]))),function(){return Object(Q.jsx)(Tt,{children:Object(Q.jsxs)("h1",{children:[Object(Q.jsxs)("span",{children:[Object(Q.jsx)(xt.a,{})," "]})," Worldie",Object(Q.jsx)("span",{children:"Chat"})]})})}),Lt={default:{accent:"#3451fb",body:"#e0e4fe",text:"#01051f",textAlt:"#01051f",timeAlt:"#6d7fb2",semi:"#6d7fb2",navHover:"rgba(224, 228, 254, 0.2)",nav:"#01051f",logoAlt:"#e0e4fe"}},Bt={default:{accent:"#8294fd",body:"#04011f",text:"#e4e0fe",textAlt:"#04011f",timeAlt:"#04011f",semi:"#e4e0fe",navHover:"rgba(227, 254, 224, 0.4)",nav:"#08023e",logoAlt:"#e0e4fe"}},Gt={default:{accent:"#22d807",body:"#e4fee0",text:"#051f01",textAlt:"#051f01",timeAlt:"#051f01",semi:"#76b26d",navHover:"rgba(227, 254, 224, 0.4)",nav:"#000",logoAlt:"#e4fee0"}},Ht=Object(G.createContext)(),Rt=function(){return Object(G.useContext)(Ht)},qt=function(t){var e=t.children,n=Object(G.useState)(Lt),r=Object(Z.a)(n,2),c=r[0],o=r[1];return Object(Q.jsx)(Ht.Provider,{value:{currentTheme:c,setCurrentTheme:o},children:Object(Q.jsx)(K.a,{theme:c,children:e})})},Mt=K.c.div(I||(I=Object(_.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: ",";\n\tbackground-color: ",";\n\tcolor: #fff;\n\twidth: 15rem;\n\theight: 95vh;\n\tz-index: 100;\n\tpadding: 0.5rem;\n\tpadding-top: 1.4rem;\n\ttransition: 0.5s ease;\n"])),(function(t){return t.open?"0":"-100%"}),(function(t){return t.theme.default.nav})),Yt=K.c.h1(P||(P=Object(_.a)(["\n\ttext-align: center;\n\tfont-size: 1.7rem;\n\tmargin-bottom: 1.5rem;\n\tcolor: ",";\n\n\t& + h4 {\n\t\tfont-size: 1.2rem;\n\t\tpadding-bottom: 0.2rem;\n\t\tborder-bottom: 0.1rem solid ",";\n\t}\n"])),(function(t){return t.theme.default.logoAlt}),(function(t){return t.theme.default.logoAlt})),_t=K.c.ul(N||(N=Object(_.a)(["\n\tmargin: 1rem 0;\n"]))),Kt=K.c.li(U||(U=Object(_.a)(["\n\tmargin: 0.3rem 0;\n\tpadding: 0.4rem 1rem;\n\tfont-size: 1.1rem;\n\tcolor: ",";\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n\n\ta {\n\t\tcolor: inherit;\n\t\ttext-decoration: none;\n\t\twidth: 100%;\n\t\tdisplay: inline-block;\n\n\t\tsvg {\n\t\t\tmargin-right: 1rem;\n\t\t}\n\t}\n"])),(function(t){var e=t.active,n=t.theme;return e?n.default.accent:"#fff"}),(function(t){return t.theme.default.navHover})),Vt=Object(K.c)(Kt)(D||(D=Object(_.a)(["\n\tposition: absolute;\n\tbottom: 2rem;\n\tright: 1rem;\n\tbackground-color: inherit;\n\tfont-family: inherit;\n\tborder: none;\n\toutline: none;\n\ttext-align: center;\n\tpadding: 0.4rem 1rem;\n\tfont-size: 1.1rem;\n\n\tsvg {\n\t\tfont-size: 1.2rem;\n\t}\n"]))),Zt=K.c.div(E||(E=Object(_.a)(["\n\tbackground-color: inherit;\n\tpadding: 0.5rem;\n\tcolor: #fff;\n\tposition: absolute;\n\tbottom: 2rem;\n\tleft: 1rem;\n\n\th3 {\n\t\tfont-size: 1.1rem;\n\t\tmargin-bottom: 0.3rem;\n\t\tcolor: #fff;\n\t}\n\n\t& >div {\n\t\tdisplay: flex;\n\t}\n"]))),Qt=K.c.span(W||(W=Object(_.a)(["\n\tdisplay: inline-block;\n\tcursor: pointer;\n\twidth: 1.2rem;\n\theight: 1.2rem;\n\tborder-radius: 50%;\n\tborder: 0.15rem solid #fff;\n\tbackground-color: ",";\n\tmargin-right: 0.7rem;\n"])),(function(t){return t.color})),Xt=function(){var t=Rt().setCurrentTheme;return Object(Q.jsxs)(Zt,{children:[Object(Q.jsx)("h3",{children:"Themes"}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(Qt,{color:"#3451fb",onClick:function(){return t(Lt)}}),Object(Q.jsx)(Qt,{color:"#22d807",onClick:function(){return t(Gt)}}),Object(Q.jsx)(Qt,{color:"#04011f",onClick:function(){return t(Bt)}})]})]})},$t=n(20),te=function(t){var e=t.room,n=$(),r=n.navOpen,c=n.setCurrentUser,o=Rt().setCurrentTheme;return Object(Q.jsxs)(Mt,{open:r,children:[Object(Q.jsxs)(Yt,{children:[Object(Q.jsxs)("span",{children:[Object(Q.jsx)(xt.a,{})," "]})," Worldie",Object(Q.jsx)("span",{children:"Chat"})]}),Object(Q.jsx)("h4",{children:"Rooms"}),Object(Q.jsxs)(_t,{children:[Object(Q.jsx)(Kt,{active:"general"===e,children:Object(Q.jsxs)(M.b,{to:"/chatroom/general",children:[" ",Object(Q.jsx)($t.e,{})," General "]})}),Object(Q.jsx)(Kt,{active:"introductions"===e,children:Object(Q.jsxs)(M.b,{to:"/chatroom/introductions",children:[" ",Object(Q.jsx)(ot.f,{})," Introductions "]})}),Object(Q.jsx)(Kt,{active:"sports"===e,children:Object(Q.jsxs)(M.b,{to:"/chatroom/sports",children:[" ",Object(Q.jsx)($t.f,{})," Sports "]})}),Object(Q.jsx)(Kt,{active:"music"===e,children:Object(Q.jsxs)(M.b,{to:"/chatroom/music",children:[" ",Object(Q.jsx)($t.d,{})," Music "]})}),Object(Q.jsx)(Kt,{active:"love"===e,children:Object(Q.jsxs)(M.b,{to:"/chatroom/love",children:[" ",Object(Q.jsx)($t.c,{})," Love "]})}),Object(Q.jsx)(Kt,{active:"technology"===e,children:Object(Q.jsxs)(M.b,{to:"/chatroom/technology",children:[" ",Object(Q.jsx)(ot.b,{})," Technology "]})}),Object(Q.jsx)(Kt,{active:"crypto"===e,children:Object(Q.jsxs)(M.b,{to:"/chatroom/crypto",children:[" ",Object(Q.jsx)($t.a,{})," Crypto "]})})]}),Object(Q.jsx)(Xt,{}),Object(Q.jsxs)(Vt,{as:"button",onClick:function(){sessionStorage.removeItem("user"),rt.signOut(),c(null),o(Lt)},children:[" ",Object(Q.jsx)($t.b,{})," Logout"]})]})},ee=function(){var t=$(),e=t.navOpen,n=t.setNavOpen,r=t.currentRoom,c=t.currentUser,o=t.display,i=sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")).displayName:o;return Object(Q.jsxs)(Ft,{children:[Object(Q.jsx)(te,{room:r}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(Jt,{}),Object(Q.jsxs)("h3",{children:["Welcome, ",(null===c||void 0===c?void 0:c.displayName)||i]})]}),Object(Q.jsx)("button",{onClick:function(){return n(!e)},children:e?Object(Q.jsx)(ot.e,{}):Object(Q.jsx)(ot.a,{})})]})},ne=K.c.form(F||(F=Object(_.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tposition: fixed;\n\tbottom: 0.1rem;\n\tleft: 0.1rem;\n\tright: 0.1rem;\n\tbackground-color: #fff;\n\tpadding: 0.5rem 1rem;\n\n\n\tinput {\n\t\twidth: 100%;\n\t\tborder: none;\n\t\toutline: none;\n\t\tborder-bottom: 0.1rem solid ",";\n\t\tmargin-right: 0.2rem;\n\t\tfont-family: inherit;\n\t}\n\n\tbutton {\n\t\tpadding: 0.5rem 1rem;\n\t\toutline: none;\n\t\tborder: none;\n\t\tborder-radius: 0.5rem;\n\t\tbackground-color: ",";\n\t\tcolor: #fff;\n\t\tfont-family: inherit;\n\t\tcursor: pointer;\n\t}\n\n\tbutton:disabled {\n\t\tbackground-color: #bbb;\n\t\tcolor: #000;\n\t}\n"])),(function(t){return t.theme.default.accent}),(function(t){return t.theme.default.accent})),re=function(t){var e=t.room,n=$().currentUser,r=Object(G.useState)(""),c=Object(Z.a)(r,2),o=c[0],i=c[1],a=Object(G.useState)(!1),s=Object(Z.a)(a,2),l=s[0],d=s[1];return Object(Q.jsxs)(ne,{children:[Object(Q.jsx)("input",{type:"text",placeholder:"Enter message...",value:o,onChange:function(t){return i(t.target.value)}}),Object(Q.jsx)("button",{type:"submit",disabled:!o,onClick:function(t){t.preventDefault(),d(!0),nt.collection(e).add({sender:n.displayName,message:o,timestamp:et.a.firestore.FieldValue.serverTimestamp()}),i(""),d(!1)},children:l?Object(Q.jsx)(at,{color:"#fff"}):Object(Q.jsx)(ot.c,{})})]})},ce=function(t){var e=t.room,n=$(),r=n.setCurrentRoom,c=n.setNavOpen,o=n.currentUser,i=n.setCurrentUser,a=Object(G.useState)(!1),s=Object(Z.a)(a,2),l=s[0],d=s[1],j=Object(G.useState)([]),u=Object(Z.a)(j,2),m=u[0],b=u[1],f=Object(G.useRef)(null);return Object(G.useEffect)((function(){r(e),setTimeout((function(){return c(!1)}),500)}),[e]),Object(G.useEffect)((function(){d(!0),nt.collection(e).orderBy("timestamp","asc").onSnapshot((function(t){b(t.docs.map((function(t){return{id:t.id,data:t.data()}})))})),d(!1)}),[e]),Object(G.useEffect)((function(){window.scroll(0,f.current.scrollHeight)}),[m]),null===sessionStorage.getItem("user")?Object(Q.jsx)(Y.a,{to:"/",replace:!0}):(null===o&&i(JSON.parse(sessionStorage.getItem("user"))),Object(Q.jsxs)(yt,{children:[Object(Q.jsx)(ee,{}),Object(Q.jsx)(Ct,{ref:f,children:l?Object(Q.jsx)(wt,{children:Object(Q.jsx)(at,{})}):Object(Q.jsx)(Q.Fragment,{children:m.length>0?m.map((function(t){return Object(Q.jsx)(Wt,{message:t,room:e},t.id)})):Object(Q.jsxs)(kt,{children:[Object(Q.jsx)("img",{src:"../../images/No-messages.svg",alt:"No messages yet"}),Object(Q.jsx)("p",{children:"It seems there are no messages here yet...Be the first to send a message"})]})})}),Object(Q.jsx)(re,{room:e})]}))},oe=K.c.div(T||(T=Object(_.a)(["\n\tpadding : 1rem;\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]))),ie=K.c.img(J||(J=Object(_.a)(["\n\twidth: 30rem;\n\tmargin-bottom: 2rem;\n\tmax-width: 100%;\n"]))),ae=K.c.h3(L||(L=Object(_.a)(["\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tmargin-bottom: 1rem;\n"]))),se=K.c.button(B||(B=Object(_.a)(["\n\tcursor: pointer;\n\tpadding: 0.8rem 2rem;\n\tbackground-color: ",";\n\tborder: none;\n\toutline: none;\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tfont-family: inherit;\n\tfont-weight: 500;\n\n\ta {\n\t\tcolor: inherit;\n\t\ttext-decoration: none;\n\t}\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n"])),(function(t){return t.theme.default.accent})),le=function(){return Object(Q.jsxs)(oe,{children:[Object(Q.jsx)(ie,{src:"./images/404error.svg",alt:"404 Error Illustration"}),Object(Q.jsx)(ae,{children:"Oops! It seems like the page you're looking for does not exist..."}),Object(Q.jsxs)(se,{children:[" ",Object(Q.jsx)(M.b,{to:"/",children:"Go Back"})," "]})]})};var de=function(){return Object(Q.jsx)(M.a,{children:Object(Q.jsx)(tt,{children:Object(Q.jsxs)(qt,{children:[Object(Q.jsx)(V,{}),Object(Q.jsxs)(Y.d,{children:[Object(Q.jsx)(Y.b,{path:"/",exact:!0,element:Object(Q.jsx)(pt,{})}),Object(Q.jsx)(Y.b,{path:"/signup",element:Object(Q.jsx)(vt,{})}),Object(Q.jsx)(Y.b,{path:"/chatroom/general",element:Object(Q.jsx)(ct,{children:Object(Q.jsx)(ce,{room:"general"})})}),Object(Q.jsx)(Y.b,{path:"/chatroom/introductions",element:Object(Q.jsx)(ct,{children:Object(Q.jsx)(ce,{room:"introductions"})})}),Object(Q.jsx)(Y.b,{path:"/chatroom/sports",element:Object(Q.jsx)(ct,{children:Object(Q.jsx)(ce,{room:"sports"})})}),Object(Q.jsx)(Y.b,{path:"/chatroom/music",element:Object(Q.jsx)(ct,{children:Object(Q.jsx)(ce,{room:"music"})})}),Object(Q.jsx)(Y.b,{path:"/chatroom/love",element:Object(Q.jsx)(ct,{children:Object(Q.jsx)(ce,{room:"love"})})}),Object(Q.jsx)(Y.b,{path:"/chatroom/technology",element:Object(Q.jsx)(ct,{children:Object(Q.jsx)(ce,{room:"technology"})})}),Object(Q.jsx)(Y.b,{path:"/chatroom/crypto",element:Object(Q.jsx)(ct,{children:Object(Q.jsx)(ce,{room:"crypto"})})}),Object(Q.jsx)(Y.b,{path:"/*",exact:!0,element:Object(Q.jsx)(le,{})})]})]})})})},je=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),o(t),i(t)}))};q.a.render(Object(Q.jsx)(H.a.StrictMode,{children:Object(Q.jsx)(de,{})}),document.getElementById("root")),je()}},[[45,1,2]]]);
//# sourceMappingURL=main.f0f64c91.chunk.js.map