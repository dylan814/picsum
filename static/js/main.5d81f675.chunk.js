(this.webpackJsonppicsum=this.webpackJsonppicsum||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),o=(a(27),a(5)),l=a(6),u=a(21),m=a(15),s=a(7),f=r.a.createContext();function v(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)([]),l=Object(s.a)(o,2),v=l[0],d=l[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),r.a.createElement(f.Provider,{value:{ImgArr:c,toggleFavourite:function(e){var t=c.map((function(t){return e===t.id?Object(m.a)(Object(m.a)({},t),{},{isFavorite:!t.isFavorite}):t}));i(t),console.log(c)},addImgtoCart:function(e){return d((function(t){return[].concat(Object(u.a)(t),[e])}))},cartItems:v,removeItem:function(e){d((function(t){return t.filter((function(t){return t.id!=e.id}))}))},emptyCart:function(){d([])}}},e.children)}var d=function(){var e=Object(n.useContext)(f).cartItems;return r.a.createElement("header",null,r.a.createElement(l.b,{to:"/picsum"},"   ",r.a.createElement("h2",null,"Pic Some")," "),r.a.createElement(l.b,{to:"/picsum/favourites"}," ",r.a.createElement("h2",null,"My Favourites")," "),r.a.createElement(l.b,{to:"/picsum/cart"},r.a.createElement("i",{className:e.length>0?"ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x"})))};var E=function(e){var t=Object(n.useContext)(f).removeItem;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{className:"ri-delete-bin-line",onClick:function(){return t(e.item)}}),r.a.createElement("img",{src:e.item.url,width:"130px"}),r.a.createElement("p",null,"$5.99"))};var g=function(){var e=Object(n.useContext)(f),t=e.cartItems,a=e.emptyCart,c=t.map((function(e){return r.a.createElement(E,{key:e.id,item:e})})),i=(5.99*t.length).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=Object(n.useState)("Place order"),l=Object(s.a)(o,2),u=l[0],m=l[1];return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"),c,r.a.createElement("p",{className:"total-cost"},"Total: ",i," "),r.a.createElement("div",{className:"order-button"},r.a.createElement("button",{onClick:function(){m("Ordering..."),setTimeout((function(){alert("Your order has been placed"),m("Place order"),a()}),3e3),console.log(t)}},u)))};var p=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],i=a[1],o=Object(n.useContext)(f),l=o.toggleFavourite,u=o.addImgtoCart,m=o.cartItems,v=o.removeItem;return r.a.createElement("div",{className:"".concat(e.className," image-container"),onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},r.a.createElement("img",{src:e.img.url,className:"image-grid"}),e.img.isFavorite?r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){return l(e.img.id)}}):c?r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return l(e.img.id)}}):void 0,m.some((function(t){return t.id===e.img.id}))?r.a.createElement("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return v(e.img)}}):c?r.a.createElement("i",{className:"ri-add-circle-line cart",onClick:function(){return u(e.img)}}):void 0)};var h=function(){var e=Object(n.useContext)(f).ImgArr.map((function(e,t){return r.a.createElement(p,{key:e.id,img:e,className:(a=t,a%5===0?"big":a%6===0?"wide":void 0)});var a}));return r.a.createElement("main",{className:"photos"},e)};var b=function(){var e=Object(n.useContext)(f).ImgArr.filter((function(e){if(!0===e.isFavorite)return e}));console.log(e);var t=e.map((function(e,t){return r.a.createElement(p,{key:e.id,img:e})}));return r.a.createElement("div",null,r.a.createElement("h1",null," My Favourites"),t)};var j=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/picsum"}," ",r.a.createElement(h,null)),r.a.createElement(o.a,{path:"/picsum/cart"}," ",r.a.createElement(g,null)),r.a.createElement(o.a,{path:"/picsum/favourites"},r.a.createElement(b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null,r.a.createElement(l.a,null,r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.5d81f675.chunk.js.map