(this["webpackJsonptik-tok-clone"]=this["webpackJsonptik-tok-clone"]||[]).push([[0],{27:function(e,t,a){e.exports=a(53)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(14),r=a.n(c),i=(a(32),a(9)),s=(a(33),a(19)),l=a.n(s),m=a(18);var u=function(e){var t=e.channel,a=e.description,n=e.song;return o.a.createElement("div",{className:"videoFooter"},o.a.createElement("div",{className:"videoFooter__text"},o.a.createElement("h3",null,"@",t),o.a.createElement("p",null,a),o.a.createElement("div",{className:"videoFooter__ticker"},o.a.createElement(l.a,{className:"videoFooter__icon"}),o.a.createElement(m.a,{mode:"smooth"},(function(e){e.index;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,n))})))),o.a.createElement("img",{className:"videoFooter__record",src:"https://static.thenounproject.com/png/934821-200.png",alt:""}))},d=(a(39),a(21)),p=a.n(d),v=a(22),f=a.n(v),E=a(23),g=a.n(E),h=a(24),k=a.n(h);var b=function(e){var t=e.likes,a=e.shares,c=e.messages,r=Object(n.useState)(!1),s=Object(i.a)(r,2),l=s[0],m=s[1];return o.a.createElement("div",{className:"videoSidebar"},o.a.createElement("div",{className:"videoSidebar__button"},l?o.a.createElement(p.a,{fontSize:"large",onClick:function(e){return m(!1)}}):o.a.createElement(f.a,{fontSize:"large",onClick:function(e){return m(!0)}}),o.a.createElement("p",null,l?t+1:t)),o.a.createElement("div",{className:"videoSidebar__button"},o.a.createElement(g.a,{fontSize:"large"}),o.a.createElement("p",null,c)),o.a.createElement("div",{className:"videoSidebar__button"},o.a.createElement(k.a,{fontSize:"large"}),o.a.createElement("p",null,a)))};a(40);var _=function(e){var t=e.url,a=e.channel,c=e.description,r=e.song,s=e.likes,l=e.messages,m=e.shares,d=Object(n.useState)(!1),p=Object(i.a)(d,2),v=p[0],f=p[1],E=Object(n.useRef)(null);return console.log(t),o.a.createElement("div",{className:"video"},o.a.createElement("video",{className:"video__player",loop:!0,onClick:function(){v?(E.current.pause(),f(!1)):(E.current.play(),f(!0))},ref:E,src:t}),o.a.createElement(u,{channel:a,description:c,song:r}),o.a.createElement(b,{likes:s,messages:l,shares:m}))},S=a(25),N=a.n(S).a.initializeApp({apiKey:"AIzaSyAIIwVQa_YlgN7SVJ-wcRbCVDbd2iZ3tI8",authDomain:"tik-tok-clone-29393.firebaseapp.com",projectId:"tik-tok-clone-29393",storageBucket:"tik-tok-clone-29393.appspot.com",messagingSenderId:"517391587965",appId:"1:517391587965:web:b6df33e5d121d6adc4af14",measurementId:"G-H7ZBZQ46HC"}).firestore();a(51);var w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){N.collection("videos").onSnapshot((function(e){return c(e.docs.map((function(e){return e.data()})))}))}),[]),console.log({videos:a}),o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__videos"},a.map((function(e){var t=e.url,a=e.channel,n=e.description,c=e.song,r=e.likes,i=e.messages,s=e.shares;return o.a.createElement(_,{url:t,channel:a,song:c,likes:r,messages:i,description:n,shares:s})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.92e430d2.chunk.js.map