(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{21:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),c=t.n(a),i=t(9),s=t.n(i),l=t(2);function d(e){fetch("https://foo-bar-managers.herokuapp.com/",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){if(e.ok)return e.json();console.log("GET failed!")})).then((function(n){return e(n)}))}t(21);var b=function(e){return Object(r.jsxs)("div",{className:"Order",children:[Object(r.jsx)("p",{className:"highlight line-number",children:e.lineNumber+1}),Object(r.jsxs)("p",{className:"order-id highlight",children:[" # ",e.order.id]}),Object(r.jsxs)("p",{className:"order-details",children:[" ",e.order.order[0]," ..."]})]})};var o=function(e){return Object(r.jsx)("div",{className:"QueueList",children:e.orders.map((function(e,n){return Object(r.jsx)(b,{lineNumber:n,order:e},n)}))})};var j=function(e){var n=e.data.queue;return Object(r.jsxs)("div",{className:"Queue panel",children:[Object(r.jsx)("div",{className:"queue-header",children:Object(r.jsx)("h1",{children:"Queue"})}),Object(r.jsx)(o,{orders:n})]})},m=t(4);var h=function(e){var n=e.sevingOrder.order.length;return console.log("the order is for ",n," beers and will take ",5*n," seconds"),Object(r.jsx)("div",{className:"serving",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{id:"glass",children:Object(r.jsx)("div",{id:"beer",children:Object(r.jsx)("span",{id:"span",style:Object(m.a)({animation:"beer "+5*n+" infinite"},"animation","beer 5s infinite")})})}),Object(r.jsx)("div",{id:"handle"}),Object(r.jsx)("div",{id:"bubble_1",children:Object(r.jsx)("span",{id:"bb"})}),Object(r.jsx)("div",{id:"bubble_2",children:Object(r.jsx)("span",{id:"bb"})}),Object(r.jsx)("div",{id:"bubble_3",children:Object(r.jsx)("span",{id:"bb"})}),Object(r.jsx)("div",{id:"bubble_4",children:Object(r.jsx)("span",{id:"bb"})}),Object(r.jsx)("div",{id:"bubble_5",children:Object(r.jsx)("span",{id:"bb"})}),Object(r.jsx)("div",{id:"bubble_6",children:Object(r.jsx)("span",{id:"bb"})}),Object(r.jsx)("div",{id:"bubble_7",children:Object(r.jsx)("span",{id:"bb"})}),Object(r.jsx)("div",{id:"bubble_8",children:Object(r.jsx)("span",{id:"bb"})}),Object(r.jsxs)("p",{className:"order-number",children:[" # ",e.sevingOrder.id]})]})})};var u=function(e){return Object(r.jsx)("div",{className:"ServingList",children:e.serving.map((function(e,n){return Object(r.jsx)(h,{lineNumber:n,sevingOrder:e},n)}))})};var g=function(e){var n=e.data.serving;return Object(r.jsxs)("div",{className:"Serving panel",children:[Object(r.jsx)("h1",{children:"Serving"}),Object(r.jsx)(u,{serving:n})]})},O=[{name:"El Hefe",linkImg:"/images/beers-img/elhefe.png"},{name:"Fairy Tale Ale",linkImg:"/images/beers-img/fairytaleale.png"},{name:"GitHop",linkImg:"/images/beers-img/githop.png"},{name:"Hollaback Lager",linkImg:"/images/beers-img/hollabacklager.png"},{name:"Hoppily Ever After",linkImg:"/images/beers-img/hoppilyeverafter.png"},{name:"Mowintime",linkImg:"/images/beers-img/mowintime.png"},{name:"Row 26",linkImg:"/images/beers-img/row26.png"},{name:"Ruined Childhood",linkImg:"/images/beers-img/ruinedchildhood.png"},{name:"Sleighride",linkImg:"/images/beers-img/sleighride.png"},{name:"Steampunk",linkImg:"/images/beers-img/steampunk.png"}];var x=function(e){var n=[];e.data.taps.forEach((function(e){n.push({name:e.beer,level:e.level})})),n.sort((function(e,n){return e.level-n.level}));var t=n[0];console.log(n);var a=[];return n.forEach((function(e){a.push(e.name)})),console.log(a),Object(r.jsxs)("div",{className:"MostSoldBeer panel",children:[Object(r.jsx)("h1",{children:" Most Sold"}),Object(r.jsx)("div",{className:"readyNr",children:Object(r.jsx)("h1",{children:t.name})}),O.map((function(e,n){return a[0]===e.name?Object(r.jsx)("img",{className:"beer-tap-img",alt:"beerImage",src:"/foobar-dashboard"+e.linkImg},n):Object(r.jsx)("div",{},n)}))]})},v=t.p+"static/media/bartenders.f69bb32d.svg";var p=function(e){return Object(r.jsxs)("div",{className:"WORKING"===e.bartender.status?"Bartender":"inactive Bartender",children:[Object(r.jsx)("img",{src:v,alt:"bartenders"}),Object(r.jsxs)("div",{className:"bartender-info",children:[Object(r.jsxs)("p",{children:[e.bartender.name,", "]}),Object(r.jsx)("span",{style:{color:"WORKING"===e.bartender.status?"#eeb61c":"#ECC8BF"},children:e.bartender.status})]})]})};var f=function(e){var n=e.data.bartenders;return Object(r.jsxs)("div",{className:"Crew panel",children:[Object(r.jsx)("h1",{children:"Crew"}),Object(r.jsx)("div",{className:"crew-wrapper",children:n.map((function(e,n){return Object(r.jsx)(p,{bartender:e},n)}))})]})};function N(e){var n=e.item.capacity/105,t=e.item.level/110;return Object(r.jsxs)("div",{className:"each-tap",children:[Object(r.jsx)("div",{className:"capacity",style:{height:n+"vh"}}),Object(r.jsx)("div",{className:"level",style:{height:t+"vh"}}),Object(r.jsx)("p",{children:e.item.beer}),O.map((function(n,t){return e.item.beer===n.name?Object(r.jsx)("img",{className:"tap-img",alt:"beerImage",src:"/foobar-dashboard"+n.linkImg},t):Object(r.jsx)("div",{})}))]})}var k=function(e){var n=e.data.taps;return Object(r.jsxs)("div",{className:"Taps panel",children:[Object(r.jsx)("h1",{className:"header-taps",children:"Taps"}),Object(r.jsx)("div",{className:"tap-bars",children:n&&n.map((function(n,t){return Object(r.jsx)(N,{item:n,data:e.data},t)}))})]})};var C=function(e){var n=e.data;return Object(r.jsxs)("div",{className:"Main",children:[Object(r.jsx)(g,{data:n}),Object(r.jsx)(f,{data:n}),Object(r.jsx)(k,{data:n}),Object(r.jsx)(j,{data:n}),Object(r.jsx)(x,{data:n})]})},w=t(5),F={body:"#F5F0EA",text1:"#363537",text2:"#363537",orderColor:"black",panel1:"#FFFFFF",panel2:"#ECC8BF",panel3:"#ECC8BF",queueHeaderColor:"#E39C96",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},y={body:"#262D3B",text1:"white",text2:"white",orderColor:"white",panel1:"#343D50",panel2:"#343D50",panel3:"#24262b",queueHeaderColor:"#E39C96",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},I=t(10);function E(){var e=Object(I.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    background: ",";\n    color: ",";\n\n    transition: all 0.25s linear;\n  }\n  \n  .Main{\nbackground-color: ",";\n  }\n  .panel{\n      background-color: ",";\n\n  }\n  \n  .Order {\n      color: ",";\n  }\n  .Serving{\n          background-color: ",";\n\n  }\n  .each-tap .capacity{\n              background-color: ",";\n\n  }\n \n  \n\n  "]);return E=function(){return e},e}var B=Object(w.b)(E(),(function(e){return e.theme.body}),(function(e){return e.theme.text1}),(function(e){return e.theme.body}),(function(e){return e.theme.panel1}),(function(e){return e.theme.orderColor}),(function(e){return e.theme.panel2}),(function(e){return e.theme.panel3})),D=t.p+"static/media/logo.d3c5b883.svg",S=t(14),M=t(15),T=t.n(M);var _=function(e){var n=Object(a.useState)(""),t=Object(l.a)(n,2),c=t[0],i=t[1];return setInterval((function(){var n=new Date,t=n.getDate(),r=n.getMonth()+1,a=n.getFullYear(),c=new Date("".concat(r," ").concat(t,", ").concat(a," ").concat(e.data.bar.closingTime)).getTime()-n,s=Math.floor(c%864e5/36e5),l=Math.floor(c%36e5/6e4),d=Math.floor(c%6e4/1e3);i("Closing In ".concat(s<10?"0".concat(s):s,":").concat(l<10?"0".concat(l):l,":").concat(d<10?"0".concat(d):d)),c<0&&i("we are closed")}),1e3),Object(r.jsxs)("div",{className:"Clock",children:[Object(r.jsx)("div",{className:"clock",children:Object(r.jsx)(T.a,Object(S.a)({},{useCustomTime:!1,width:"120px",border:!0,borderColor:"#F7B71E",baseColor:"#262e3b",centerColor:"#F7B71E",centerBorderColor:"transparent",handColors:{second:"#transparent",minute:"#F7B71E",hour:"#F7B71E"}}))}),Object(r.jsx)("h1",{className:"title",children:c})]})},H=function(e){var n=e.theme,t=e.toggleTheme;return Object(r.jsx)("button",{style:{color:"light"===n?"white":"#262D3B",background:"light"===n?"#262D3B":"white"},className:"togglebtn",onClick:t,children:"light"!==n?"Light mode":"Dark mode"})};var L=function(e){var n=Object(a.useState)("dark"),t=Object(l.a)(n,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"Header",children:[Object(r.jsxs)("div",{className:"logo-wrapper",children:[Object(r.jsx)("img",{className:"logo",src:D,alt:"LOGO"}),Object(r.jsx)("h1",{children:e.data.bar.name})]}),Object(r.jsx)(w.a,{theme:"light"===c?F:y,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(B,{}),Object(r.jsx)(H,{theme:c,toggleTheme:function(){i("dark"===c?"light":"dark")}})]})}),Object(r.jsx)(_,{data:e.data})]})};function A(){return Object(r.jsx)("h1",{children:"Loading..."})}var G=function(){var e=Object(a.useState)({}),n=Object(l.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){d(c),setInterval((function(){d(c)}),1e4),d(c)}),[]),Object(r.jsxs)("div",{className:"App",children:[!t.bar&&Object(r.jsx)(A,{}),t.bar&&Object(r.jsx)(L,{data:t}),t.bar&&Object(r.jsx)(C,{data:t})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c31ea4fa.chunk.js.map