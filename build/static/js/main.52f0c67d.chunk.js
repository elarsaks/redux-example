(this["webpackJsonpdroppe-xmas"]=this["webpackJsonpdroppe-xmas"]||[]).push([[0],{31:function(n){n.exports=JSON.parse('[{"name":"Pinja","items":[{"productId":1,"favorite":5,"confirmed":false},{"productId":10,"favorite":4,"confirmed":false},{"productId":14,"favorite":3,"confirmed":false},{"productId":13,"favorite":2,"confirmed":false},{"productId":18,"favorite":1,"confirmed":false}]},{"name":"Emilia","items":[{"productId":8,"favorite":5,"confirmed":false},{"productId":9,"favorite":4,"confirmed":false}]},{"name":"Johannes","items":[{"productId":3,"favorite":5,"confirmed":false},{"productId":7,"favorite":4,"confirmed":false},{"productId":6,"favorite":3,"confirmed":false},{"productId":13,"favorite":2,"confirmed":false}]},{"name":"Mikael","items":[{"productId":18,"favorite":5,"confirmed":false},{"productId":9,"favorite":4,"confirmed":true},{"productId":3,"favorite":4,"confirmed":false}]},{"name":"Sofia","items":[{"productId":9,"favorite":5,"confirmed":true},{"productId":8,"favorite":4,"confirmed":false},{"productId":17,"favorite":3,"confirmed":false}]}]')},45:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var r=t(12),i=t(2),c=t(9),o=t(29),a=t(30),s=t(3),u={customSelection:!0,fullPrice:0,error:null,shoppingList:[],status:"loading",total:0},d=function(n,e){return n.map((function(n){return{name:n.name,items:e(n.items)}}))};var l,f,p,m,h,j,b,x,O,v,g,w,y=Object(a.composeWithDevTools)(Object(c.applyMiddleware)(o.a)),I=Object(c.createStore)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"set/fullPrice":return Object(s.a)(Object(s.a)({},n),{},{fullPrice:e.payload.toFixed(2)});case"set/shoppingList":return Object(s.a)(Object(s.a)({},n),{},{shoppingList:e.payload,status:"idle"});case"set/cheapest":var t=function(n){return n.reduce((function(n,e){return n.price<e.price?n:e}))},r=function(n){return n.map((function(e){return e.productId===t(n).productId?e.confirmed=!0:e.confirmed=!1,e}))};return Object(s.a)(Object(s.a)({},n),{},{customSelection:!1,shoppingList:d(n.shoppingList,r)});case"set/customSelection":return Object(s.a)(Object(s.a)({},n),{},{customSelection:e.payload});case"set/empty":var i=function(n){return n.map((function(n){return n.confirmed=!1,n}))};return Object(s.a)(Object(s.a)({},n),{},{customSelection:!1,shoppingList:d(n.shoppingList,i)});case"set/error":return Object(s.a)(Object(s.a)({},n),{},{error:e.payload});case"set/favorite":var c=function(n){return n.reduce((function(n,e){return n.favorite>e.favorite?n:e}))},o=function(n){return n.map((function(e){return e.productId===c(n).productId?e.confirmed=!0:e.confirmed=!1,e}))};return Object(s.a)(Object(s.a)({},n),{},{customSelection:!1,shoppingList:d(n.shoppingList,o)});case"set/singleProduct":var a=function(n){return n.map((function(n){return n.name===e.payload.listName&&l(n.items),n}))},l=function(n){return n.map((function(n){return n.productId===e.payload.productId&&(n.confirmed=!n.confirmed),n}))};return Object(s.a)(Object(s.a)({},n),{},{customSelection:!0,shoppingList:a(n.shoppingList)});case"set/total":return Object(s.a)(Object(s.a)({},n),{},{total:e.payload.toFixed(2)});default:return n}}),y),k=t(4),L=t(0),S=(t(45),t(5)),P=t(7),N=t(17),C=t.n(N),T={getProductsData:function(n){return C()({method:"GET",url:"https://fakestoreapi.com/products/".concat(n),headers:{"Access-Control-Allow-Origin":"*"}}).then((function(n){return n.data}))},saveProductData:function(n){return C()({method:"PUT",url:"https://fakestoreapi.com/products/".concat(n),headers:{"Access-Control-Allow-Origin":"*"}}).then((function(n){return n.data}))}},E=t(31),D=function(){return function(n){n({type:"set/status",payload:"loading"});var e=function(e){return Promise.all(e.items.map((function(e){return t=e,T.getProductsData(t.productId).then((function(n){return t.price=n.price,t.title=n.title,t})).catch((function(e){return n({type:"set/error",payload:e})}));var t})))};Promise.all(E.map((function(n){return e(n).then((function(e){return n.items=e,n}))}))).then((function(e){return n({type:"set/shoppingList",payload:e})}))}},B=t(14),F=t(1),G=S.a.div(l||(l=Object(k.a)(["\n  cursor: ",";\n  .open {\n    visibility: visible;\n    height: ","; \n    transition: all .75s ease;\n    position: relative;\n    background-color:  aliceblue;\n    border: 1px solid teal;\n    margin-top: 3px;\n    border-radius: 0.3em;\n    transition: all .5s ease;\n  }\n\n  .closed {\n    visibility: hidden;\n    overflow: hidden;\n    height: 0px;\n    transition: all .55s ease;\n  }\n\n  .title {\n    background-color: ","; \n    padding: 0.5em;\n    border-radius: 0.3em 0.3em 0 0;\n  }\n\n  .title:hover{\n    background-color: ",";\n  }\n\n  .lower-half{\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5em;\n  }\n\n  .favorite{\n    color: #ff9100\n  }\n\n  .confirmation-text {\n    font-size: 1.1em;\n    font-weight: 600;\n    width: 33%;\n    text-align: center;\n    color:","; \n  }\n"])),(function(n){return n.customSelection?"pointer":"auto"}),(function(n){return n.value>63?"100px":"75px"}),(function(n){return n.confirmed?"#51c8f7":"#068dc2"}),(function(n){return n.customSelection?"#51c8f7":""}),(function(n){return n.confirmed?"teal":"#a32424"})),A=S.a.div(f||(f=Object(k.a)(["\n  display: flex;\n  flex: 1;\n  flex-grow: ",";\n  white-space: pre-wrap;\n"])),(function(n){return n.flexGrow})),H=function(n){var e=n.amount,t=n.confirmed,r=n.favorite,i=n.open,c=n.price,o=n.sendItemToShoppingList,a=n.title,s=n.width;return Object(F.jsx)(G,{amount:e,confirmed:t,customSelection:!(null===o)&&"100%"===s,onClick:o,value:a.length,children:Object(F.jsxs)("div",{className:i?"open":"closed",children:[Object(F.jsx)("div",{className:"title",children:a}),Object(F.jsxs)("div",{className:"lower-half",children:[Object(F.jsxs)(A,{flexGrow:1,children:["Favorite: ",Object(B.a)(Array(r)).map((function(n,e){return Object(F.jsx)("span",{className:"favorite",children:" \u2605"},e)}))]}),0===e?Object(F.jsxs)(A,{flexGrow:2,children:[Object(F.jsxs)(A,{flexGrow:1,children:["Price: ",Object(F.jsxs)("b",{children:[c,"\u20ac"]})]}),Object(F.jsx)(A,{flexGrow:1,className:"confirmation-text",children:t?"Confirmed":"Not Confirmed"})]}):Object(F.jsxs)("div",{children:[" ",Object(F.jsxs)(A,{flexGrow:2,children:["Price: ",Object(F.jsxs)("b",{children:[c,"\u20ac "]}),"Amount: ",Object(F.jsxs)("b",{children:[e," "]}),"Discount: ",Object(F.jsxs)("b",{children:[1===e||e>9?0:10*e,"% "]}),"Total: ",Object(F.jsxs)("b",{children:[function(n,e){return e>1&&e<9?n*e-n*e/10:e>9?n*e-9*n/10:n*e}(c,e).toFixed(2),"\u20ac"]})]})]})]})]})})},z=S.a.div(p||(p=Object(k.a)(["\n  width: ",";\n  padding: 0.3em;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  ::-webkit-scrollbar { \n    width: 0;\n    height: 0;\n  }\n"])),(function(n){return n.width})),J=function(n){var e=n.width,t=Object(i.c)((function(n){return n.shoppingList})),r=function(n,e){return n.filter((function(n){return n.productId===e})).length},c=function(){var n=function(n){var e=[];return n.forEach((function(n){return e.push.apply(e,Object(B.a)(n.items))})),e}(t).filter((function(n){return n.confirmed})),e=n.map((function(n){return n.productId})).filter((function(n,e,t){return t.indexOf(n)===e})).map((function(e){return{productId:e,amount:r(n,e)}}));return function(n,e){return e.map((function(e){return n.filter((function(n){return n.productId===e.productId}))}))}(n,e)},o=function(n){var e=n.map((function(n){return n.favorite})),t=e.reduce((function(n,e){return n+e}));return Math.round(t/e.length)},a=c(),s=Object(i.b)(),u=function(){var n=c(),e=n.map((function(n){return e=n[0].price,(t=n.length)>1&&t<9?e*t-e*t/10:t>9?e*t-9*e/10:e*t;var e,t})),t=n.map((function(n){return n[0].price*n.length})).reduce((function(n,e){return n+e})),r=e.reduce((function(n,e){return n+e}));return s(function(n){return{type:"set/fullPrice",payload:n}}(t)),0===e.length?0:r}();return Object(L.useEffect)((function(){s(function(n){return{type:"set/total",payload:n}}(u))}),[s,a,u]),Object(F.jsxs)(z,{width:e,children:[Object(F.jsx)("h1",{children:"Shopping List"}),a.map((function(n,e){return Object(F.jsx)(H,{amount:n.length,confirmed:n[0].confirmed,open:!0,price:n[0].price,title:n[0].title,favorite:o(n),sendItemToShoppingList:null,width:"99%"},e)}))]})},W=S.a.div(m||(m=Object(k.a)(["\n  width: ",";\n  position: relative;\n  display: inline-block;\n  border-radius: 0.22em;\n  margin-bottom: 0.5em;\n\n  .wishlist-header{\n    // Width is 99% only in Final Confirmation Dialog\n    background-color: ",";\n    cursor: ",";\n    color: white;\n    border-radius: 0.2em;\n    padding: 0.5em;\n    font-size: 1.2em;\n    text-transform: uppercase;\n\n    :hover{\n     // background-color: #13c4d1;\n      background-color: ",";\n    }\n  }\n"])),(function(n){return n.width}),(function(n){return n.activeHeader?"#13c4d1":"teal"}),(function(n){return"100%"===n.width?"pointer":""}),(function(n){return"100%"===n.width?"#13c4d1":""})),M=function(n){var e=n.activeHeader,t=n.width,r=n.wishList,c=Object(i.b)(),o=Object(L.useState)(!1),a=Object(P.a)(o,2),s=a[0],u=a[1];return Object(L.useEffect)((function(){!0===e&&u(e)}),[e]),Object(L.useEffect)((function(){"99%"===t&&u(!0)}),[t]),Object(F.jsxs)(W,{activeHeader:e,width:t,children:[Object(F.jsx)("div",{className:"wishlist-header",onClick:function(){return"100%"===t?u(!s):null},children:r.name}),r.items.map((function(n){return Object(F.jsx)(H,{amount:0,confirmed:n.confirmed,favorite:n.favorite,open:s,sendItemToShoppingList:function(){return"99%"===t?null:(e=r.name,i=n.productId,c({type:"set/singleProduct",payload:{listName:e,productId:i}}));var e,i},price:n.price,title:n.title,width:t},n.productId)}))]},r.name)},U=S.a.div(h||(h=Object(k.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 99;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n\n  .content {\n    width: 70vw;\n    max-height: 90vh;\n    padding: 1em 0.5em 1em 1em;\n    background-color: white;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 1em;\n    overflow-y: scroll;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    text-align: center;\n\n    ::-webkit-scrollbar { \n      width: 0;\n      height: 0;\n    }\n    \n    .confirm-actions {\n      position: relative;\n      display: flex;\n      justify-content: space-around;\n      width: 100%;\n\n      .confirm-btn {\n          background-color: teal;\n      }\n\n      .cancel-btn {\n        background-color: #a32424;\n      }\n\n      .confirm-btn:hover {\n          background-color:#13c4d1;\n      }\n\n      .cancel-btn:hover {\n        background-color: #d33434;\n      }\n    }\n  }\n"]))),X=S.a.div(j||(j=Object(k.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  white-space: pre-wrap;\n  margin-bottom: 1em;\n"]))),Z=S.a.button(b||(b=Object(k.a)(["\n  outline: 0;\n  font-size: 1.1em;\n  margin: 0.1em;\n  cursor: pointer;\n  color: white;\n  padding: 0.5em;\n  text-transform: uppercase;\n  border-radius: 0.3em;\n  border: none;\n  min-width: 4em;\n"]))),q=function(n){var e=n.cancel,t=n.finalPrice,r=Object(i.c)((function(n){return n.shoppingList})),c=Object(i.c)((function(n){return n.fullPrice})),o=Object(L.useState)("wishList"),a=Object(P.a)(o,2),s=a[0],u=a[1],d=function(){return Promise.all(r.map((function(n){return Promise.all(n.items.map((function(n){return T.saveProductData(n.productId)})))}))).then((function(){return e()}))};return Object(F.jsx)(U,{children:Object(F.jsxs)("div",{className:"content",children:["wishList"===s?Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:" Wish List"}),r.map((function(n){return Object(F.jsx)(M,{activeHeader:(e=n.items,e.filter((function(n){return!0===n.confirmed}))).length>0,width:"99%",wishList:n},n.name);var e}))]}):"shoppingList"===s?Object(F.jsxs)("div",{children:[Object(F.jsx)(J,{width:"99%"}),Object(F.jsxs)(X,{children:["Total Price: ",Object(F.jsxs)("b",{children:[1,"\u20ac   "]}),"Total Discount: ",Object(F.jsxs)("b",{children:[(c-t).toFixed(2),"\u20ac   "]}),"Final Price: ",Object(F.jsxs)("b",{children:[t,"\u20ac"]})]})]}):Object(F.jsx)("div",{children:Object(F.jsx)("h1",{children:"Thank you for your purchase!"})}),"wishList"===s||"shoppingList"===s?Object(F.jsxs)("div",{className:"confirm-actions",children:[Object(F.jsx)(Z,{className:"cancel-btn",onClick:function(){return e()},children:"Cancel"}),Object(F.jsx)(Z,{className:"confirm-btn",onClick:function(){"wishList"===s?u("shoppingList"):"shoppingList"===s?(u("confirmed"),d()):u("wishList")},children:"wishList"===s?"Next":"Confirm"})]}):Object(F.jsx)("div",{className:"confirm-actions"})]})})},K=S.a.div(x||(x=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 10%;\n  background-color:  aliceblue;\n  height: 100%;\n  border-left: 1px solid teal;\n  border-right: 1px solid teal;\n\n  .container {\n    display: flex;\n    height: 3em;\n    text-align:center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 1em 2px 1em 2px;\n\n    h2 {\n      text-align: center;\n    }\n  }\n"]))),Q=S.a.div(O||(O=Object(k.a)(["\n  display: flex;\n  height: 3em;\n  text-align:center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 1em 2px 1em 2px;\n  cursor: pointer;\n  background-color: ","; \n  border-radius: 0.3em;\n  text-transform: uppercase;\n  color: white;\n  width: 100%auto;\n  padding: 1em;\n\n  :hover{\n    background-color: #13c4d1;\n  }\n"])),(function(n){return n.active?"#13c4d1":"teal"})),R=function(n){var e=n.active,t=n.callBack,r=n.text;return Object(F.jsx)(Q,{active:e,onClick:function(){return t()},children:r})},V=function(n){var e=n.customSelection,t=n.total,r=Object(i.b)(),c=Object(L.useState)("custom"),o=Object(P.a)(c,2),a=o[0],s=o[1],u=Object(L.useState)(!1),d=Object(P.a)(u,2),l=d[0],f=d[1];return Object(L.useEffect)((function(){e&&s("custom")}),[e]),Object(F.jsxs)(K,{children:[Object(F.jsx)(R,{active:"custom"===a,text:"custom option",callBack:function(){s("custom"),r(function(n){return{type:"set/customSelection",payload:n}}(!0))}}),Object(F.jsx)(R,{active:"cheapest"===a,text:"cheapest option",callBack:function(){s("cheapest"),r({type:"set/cheapest"})}}),Object(F.jsx)(R,{active:"favorite"===a,text:"favorite option",callBack:function(){s("favorite"),r({type:"set/favorite"})}}),l?Object(F.jsx)(q,{cancel:function(){return f(!1)},finalPrice:t}):Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("h2",{children:["Total: ",t,"\u20ac"]})}),Object(F.jsx)(R,{active:"confirm"===a,text:"Confirm List",callBack:function(){s("confirm"),f(!0)}}),Object(F.jsx)(R,{active:"empty"===a,text:"Empty List",callBack:function(){s("empty"),r({type:"set/empty"})}})]})},Y=Object(S.b)(v||(v=Object(k.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),$=S.a.div(g||(g=Object(k.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  margin-top: 30vh;\n\ttext-align: center;\n\n  .spinner {\n    animation: "," 1s linear infinite;\n    transform: translateZ(0);\n    border-top: 3px solid #51c8f7;\n    border-right: 3px solid #51c8f7;\n    border-bottom: 3px solid #51c8f7;\n    border-left: 5px solid teal;\n    background: transparent;\n    width: 10em;\n    height: 10em;\n    border-radius: 50%;\n  }\n"])),Y),_=S.a.div(w||(w=Object(k.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  margin-top: 30vh;\n\ttext-align: center;\n"]))),nn=function(){var n=Object(i.b)(),e=Object(i.c)((function(n){return n.shoppingList})),t=Object(i.c)((function(n){return n.customSelection})),r=Object(i.c)((function(n){return n.error})),c=Object(i.c)((function(n){return n.status})),o=Object(i.c)((function(n){return n.total}));return Object(L.useEffect)((function(){n(D())}),[n]),Object(F.jsxs)("main",{children:[Object(F.jsx)("div",{id:"header",children:Object(F.jsx)("h1",{children:" Droppe X-mas "})}),"loading"===c&&null===r?Object(F.jsx)($,{children:Object(F.jsx)("div",{className:"spinner"})}):null!=r?Object(F.jsx)(_,{children:Object(F.jsx)("h1",{style:{color:"#a32424"},children:"Oops something went wrong, please contact system administrator!"})}):Object(F.jsxs)("div",{id:"content-container",children:[Object(F.jsx)(J,{width:"49%"}),Object(F.jsx)(V,{customSelection:t,total:o}),Object(F.jsxs)("div",{className:"half",children:[Object(F.jsx)("h1",{children:" Wish List"}),e.map((function(n){return Object(F.jsx)(M,{activeHeader:(e=n.items,e.filter((function(n){return!0===n.confirmed}))).length>0,width:"100%",wishList:n},n.name);var e}))]})]})]})},en=document.getElementById("root");Object(r.render)(Object(F.jsx)(i.a,{store:I,children:Object(F.jsx)(nn,{})}),en)}},[[64,1,2]]]);
//# sourceMappingURL=main.52f0c67d.chunk.js.map