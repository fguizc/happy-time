(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{115:function(e,t,a){e.exports=a(272)},120:function(e,t,a){},140:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),o=a.n(c),r=(a(120),a(121),a(114)),i=a.n(r),s=(a(123),a(76)),m=a.n(s),u=(a(125),a(113)),d=a.n(u),f=(a(128),a(111)),E=a.n(f),h=(a(134),a(44)),v=a.n(h),b=a(57),g=(a(136),a(75)),p=a.n(g),S=(a(138),a(109)),O=a.n(S),y=(a(140),a(108)),w=a.n(y),k=a(274),x=O.a.Countdown,N=p.a.confirm,j=w()(),C=j.day(),F=j.startOf("day").set("hour",18).valueOf(),I=5===C,W=0;var z=l.a.memo((function(){var e=Object(n.useState)(F),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),r=Object(b.a)(o,2),s=r[0],u=r[1],f=Object(n.useState)(!1),h=Object(b.a)(f,2),g=h[0],S=h[1];Object(n.useEffect)((function(){var e=localStorage.getItem("localUserName");e?u(e):S(!0)}),[s]);var O=function(e){var t=e.hour(),a=e.minute()||0,n=j.startOf("day").set("hour",t).set("minute",a).valueOf();W=n},y=function(){for(var e=[],t=0;t<60;t++)0!==t&&e.push(t);return e};return l.a.createElement("div",{className:"App"},l.a.createElement(p.a,{title:"Preparing...",maskClosable:!1,closable:!1,mask:!0,visible:g,cancelButtonProps:{disabled:!0},onOk:function(){s?(localStorage.setItem("localUserName",s),S(!1)):v.a.error("\u4e0d\u5141\u8bb8\u6635\u79f0\u586b\u5199\u4e3a\u7a7a")}},"\u8bf7\u586b\u5199\u60a8\u7684\u6635\u79f0\uff1a",l.a.createElement(d.a,{onChange:function(e){u(e.target.value)},value:s,placeholder:"\u586b\u5199\u5b8c\u6210\u540e\u4e0d\u53ef\u66f4\u6539",maxLength:10})),g?l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{active:!0}),l.a.createElement(i.a,null),l.a.createElement(m.a,{active:!0})):l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"username"},"Hi, ",s),l.a.createElement("div",{className:"card"},l.a.createElement("h2",{className:"card-title"},"\u8ddd\u79bb\u4e0b\u73ed\u65f6\u95f4\uff1a",l.a.createElement(k.a,{style:{fontSize:"16px",color:"#fb8e4f",position:"absolute",right:"20px",top:"20px"},onClick:function(){N({content:l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"\u8bf7\u9009\u62e9\u4e0b\u73ed\u65f6\u95f4\uff1a"),l.a.createElement("br",null),l.a.createElement(E.a,{onChange:O,disabledSeconds:y}),l.a.createElement("br",null)),icon:null,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){setTimeout((function(){localStorage.setItem("localDealLine",W),c(W)}),0)}})}})),l.a.createElement(x,{value:a,format:"HH:mm:ss:SSS",onFinish:function(){v.a.success("\u4e0b\u73ed\u5566\uff01\u53c8\u662f\u4e00\u5929\u7f8e\u597d\u65f6\u95f4")}})),l.a.createElement("div",{className:"card"},l.a.createElement("h2",{className:"card-title"},"\u4eca\u5929\u662f\u5468\u4e94\u5417\uff1f"),I?l.a.createElement("div",{style:{textAlign:"center",fontSize:"50px",fontWeight:"bolder"}},"\u662f!"):l.a.createElement("div",{style:{fontSize:"23px"}},l.a.createElement("span",{"aria-label":"not friday","aria-labelledby":"not friday",role:"img"},"\ud83d\ude22\u4e0d\u662f"),l.a.createElement("div",null,"\u8ddd\u79bb\u5468\u4e94\u8fd8\u6709"," ",l.a.createElement("span",{style:{fontWeight:"600"}},C>=0&&C<=4?5-C:6)," ","\u5929")))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.b0f77a5b.chunk.js.map