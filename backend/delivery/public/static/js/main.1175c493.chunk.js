(this["webpackJsonpfuture-song-tracker"]=this["webpackJsonpfuture-song-tracker"]||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),u=(a(34),a(27)),i=a(1),o=a(13),s=a(25),f=a.n(s),m=a(26),h=a.n(m),E=a(8),b=a.n(E);function p(){var e=Object(n.useState)("https://www.highoff.life/"),t=Object(o.a)(e,2),a=t[0],c=(t[1],Object(n.useState)("00:00:00")),l=Object(o.a)(c,2),u=l[0],i=l[1],s=Object(n.useRef)(),m=Object(n.useRef)(),E=Object(n.useRef)(),p=function(e){return e<10?"0".concat(e):e};return Object(n.useEffect)((function(){var e=b()("2020-05-15T00"),t=b.a.duration(e.diff(b()()));t>0&&i(p(t.hours())+":"+p(t.minutes())+":"+p(t.seconds())),E.current=setInterval((function(){var t=b.a.duration(e.diff(b()()));return i(p(t.hours())+":"+p(t.minutes())+":"+p(t.seconds())),t<=0&&(clearInterval(E.current),i("the album is out now!")),function(){clearInterval(E.current)}}),1e3)}),[]),Object(n.useEffect)((function(){h.a.get("/info").then((function(e){}))}),[]),Object(n.useEffect)((function(){return s.current=new f.a("bf103ae2e4d0e5a11ed0",{cluster:"us2"}),m.current=s.current.subscribe("my-channel"),m.current.bind("my-event",(function(e){})),function(){m.current.unbind(),s.current.unsubscribe("my-channel"),s.current.disconnect()}}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Future - High Off Life",r.a.createElement("br",null),"Leak Tracker"),r.a.createElement("div",{className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"HIGH OFF LIFE leaked song available at:"),r.a.createElement("a",{className:"leakurl",href:a},a),r.a.createElement("p",{className:"hol-red"},"HIGH OFF LIFE ","the album is out now!"===u?" ":"releases in"," ",u))}a(53);var d=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement("h1",null,"Taco Breath Software \ud83c\udf2e"),r.a.createElement("a",{class:"future-link",href:"/future-high-off-life-leak-tracker"},r.a.createElement("img",{src:"/future-head.jpg"}),r.a.createElement("br",null),r.a.createElement("span",null,"High Off Life Tracker"))),r.a.createElement(i.a,{path:"/future-high-off-life-leak-tracker"},r.a.createElement(p,null))),r.a.createElement("p",null,"This application was developed in under an hour by"," ",r.a.createElement("a",{href:"https://twitter.com/IvanCaceres"},"@IvanCaceres."),r.a.createElement("br",null),"A full stack software engineer with 10+ years of experience:",r.a.createElement("br",null),"C++/Typescript/React/React-Native/PHP/Python/Elixir/Vuejs/Angular/Objective-C"),r.a.createElement("p",null,"Hire me for software development:",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:ballinuptown@live.com"},"ballinuptown@live.com"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/ivancaceres"},"github"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.linkedin.com/in/ivan-caceres-52977896/"},"linkedin"),r.a.createElement("br",null),"skype: caceres.ivan"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1175c493.chunk.js.map