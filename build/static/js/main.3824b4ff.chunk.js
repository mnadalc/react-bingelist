(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(83),i=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(20),c=n(14),m=n(15),s=n(21),u=n.n(s),g=n(38),d=(n(40),n(216)),v=n(206),f=n(204),p=n(201),h=n(202),E=n(217),b=n(203),x=n(9),w=n.n(x),j=function(e){var t=e.onSearch,n=void 0===t?function(){}:t,o=Object(a.useState)(""),i=Object(c.a)(o,2),l=i[0],m=i[1];return r.a.createElement(p.a,null,r.a.createElement(h.a,{"data-testid":"searchbar",title:"Search movies by genre",value:l,onChange:function(e){return m(e.target.value)},onKeyDown:function(e){return function(e,t){"Enter"===e.key&&t&&n(t)}(e,l)}}),r.a.createElement(E.a,{addonType:"append"},r.a.createElement(b.a,{color:"secondary",onClick:function(){w()(l)||n(l)}},"SEARCH")))};j.defaultProps={onSearch:void 0};var y=j,N=n(205),O=n(207),k=n(208),C=n(209),F=n(210),S=n(211),I=n(13),M=n.n(I),P=n(85),_=n.n(P),T=n(86),A=n.n(T),B=r.a.createContext({}),D=B.Provider,R=(B.Consumer,B),z=function(e){var t=e.movie,n=t.id,o=void 0===n?0:n,i=t.title,l=void 0===i?"":i,c=t.rating,m=void 0===c?0:c,s=t.overview,u=void 0===s?"":s,g=t.releaseDate,d=void 0===g?"":g,p=t.genres,h=void 0===p?[]:p,E=t.poster,b=void 0===E?{}:E,x=e.detailInfo,j=e.median,y=void 0===j?0:j,I=new Date(d).getFullYear(),P=Object(a.useContext)(R),T=P.favourites,B=P.addFavourite,D=P.removeFavourite,z=!w()(T)&&A()(T,function(e){return e.id===o});return r.a.createElement(f.a,{sm:"6",xs:"6"},r.a.createElement(N.a,{className:"card-info-thumbnail","data-testid":"thumbnail"},r.a.createElement(v.a,null,r.a.createElement(f.a,{xl:"4",lg:"4"},r.a.createElement("div",null,z?r.a.createElement("img",{alt:"Remove favorite icon",className:"floating-image image-top",src:"../../img/png/remove_favorite.png",onClick:function(){return D(x)}}):r.a.createElement("img",{alt:"Add favorite icon",className:"floating-image image-top",src:"../../img/png/add_favorite.png",onClick:function(){return B(x)}}),r.a.createElement(O.a,{src:b.fullPath,alt:"Image of",className:"picture-container"}),m>=y&&r.a.createElement("img",{className:"floating-image image-bottom d-lg-none",alt:"Above median star icon",src:"../../img/png/above_median_star.png"}))),r.a.createElement(f.a,{xl:"8",lg:"8",className:"d-none d-lg-block card-body-content"},r.a.createElement(k.a,null,r.a.createElement(C.a,null,r.a.createElement(v.a,null,r.a.createElement(f.a,{xl:"9",lg:"9"},r.a.createElement("h4",{className:"card-text-overflow-film","data-testid":"movieTitle"},l)),r.a.createElement(f.a,{xl:"3",lg:"3",className:"right-alignment"},r.a.createElement("img",{alt:"Rating star icon",src:"../../img/png/rating_star.png"}),r.a.createElement("span",null," ".concat(m))))),r.a.createElement(F.a,null,r.a.createElement(v.a,null,r.a.createElement(f.a,{xl:"3",lg:"4"},r.a.createElement("img",{alt:"Calendar icon",src:"../../img/png/calendar_icon.png"}),r.a.createElement("span",null," ".concat(I))),r.a.createElement(f.a,{xl:"9",lg:"8",className:"right-alignment card-text-overflow-film"},r.a.createElement("i",null,M()(h,"name").join(", "))))),r.a.createElement("br",null),r.a.createElement(S.a,null,_()(u,{length:120,separator:/,? +/})),r.a.createElement("hr",null),r.a.createElement(v.a,{className:"align-center-row"},r.a.createElement(f.a,null,m>=y&&r.a.createElement("img",{alt:"Above median icon",src:"../../img/png/above_median_star.png",height:"21"})),r.a.createElement(f.a,{className:"right-alignment"},r.a.createElement("span",{className:"more-info"},r.a.createElement("b",null,"MORE INFO"))))))),r.a.createElement("style",{jsx:!0},"\n          .card-info-thumbnail {\n            color: black;\n            margin: 1em 0 1em 0;\n          }\n\n          .card-text-overflow-film {\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          }\n\n          .floating-image {\n            position: absolute;\n            z-index: 1;\n          }\n\n          .image-top {\n            top: 0;\n            cursor: pointer;\n          }\n\n          .image-bottom {\n            bottom: 0;\n          }\n\n          .more-info {\n            color: MediumTurquoise;\n            cursor: pointer;\n          }\n\n          .picture-container {\n            height: 100%;\n            position: absolute;\n          }\n\n          @media (max-width: 991px) {\n            .picture-container {\n              position: initial;\n            }\n          }\n\n          .card-body-content {\n            padding-left: 0;\n          }\n\n          .right-alignment {\n            text-align: right;\n          }\n\n          @media (max-width: 991px) {\n            .image-bottom {\n              left: 1em;\n            }\n          }\n\n          .padding-right {\n            padding-right: 10px;\n          }\n\n          .align-center-row {\n            align-items: center;\n          }\n        ")))};z.defaultProps={movie:{title:"",rating:0,overview:"",releaseDate:"",genres:[],poster:{fullPath:"",size:""}},detailInfo:{},median:0};var q=z,H=n(54),J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(a,r){var o=Object(H.a)({},n.headers||{}),i="".concat("http://localhost:4000","/").concat(t);fetch(i,Object(H.a)({},n,{method:e,headers:o})).then(function(e){if(e.status>=200&&e.status<300)return e.json().then(function(t){return{headers:e.headers,status:e.status,data:t}}).then(a).catch(function(){return a()});e.json().then(r).catch(r)}).catch(function(e){console.error(e),r(new Error("There's a problem with the request"))})})},L=n(48),U=n.n(L),W=n(49),K=n.n(W),Y=n(50),$=n.n(Y),G=n(26),Q=n.n(G),V=function(){var e=Object(g.a)(u.a.mark(function e(){var t,n,a,r,o,i,c,m=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:"",n=m.length>1&&void 0!==m[1]?m[1]:0,a=m.length>2&&void 0!==m[2]?m[2]:0,e.prev=3,e.next=6,J("get","movies?genre=".concat(U()(K()($()(t.trim()))),"&offset=").concat(n,"&limit=").concat(a));case 6:if(r=e.sent,!Q()(r,"data.error")){e.next=9;break}return e.abrupt("return",'No results for genre "'.concat(t,'"'));case 9:return o=Q()(r,"data.metadata.total",0),e.next=12,J("get","movies?genre=".concat(U()(K()($()(t.trim()))),"&offset=").concat(n,"&limit=").concat(o));case 12:return i=e.sent,c=Q()(i,"data.data",[]),e.abrupt("return",w()(c)?'No results for genre "'.concat(t,'"'):Object(l.a)(c));case 17:e.prev=17,e.t0=e.catch(3),console.error(e.t0);case 20:case"end":return e.stop()}},e,null,[[3,17]])}));return function(){return e.apply(this,arguments)}}(),X=n(88),Z=n.n(X),ee=r.a.createContext({}),te=ee.Provider,ne=(ee.Consumer,ee),ae=function(e){var t=M()(e,"rating").sort(),n=t.length%2===0?(t[t.length/2]+t[t.length/2-1])/2:t[(t.length-1)/2];return n},re=n(19),oe=n(212),ie=n(213),le=n(214),ce=n(215),me=n(89),se=n(90),ue=Object(m.g)(function(e){var t;return t="/favourites"===e.location.pathname?r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{navbar:!0},r.a.createElement(le.a,{className:"left-alignment-navbar"},r.a.createElement(re.b,{to:"/"},r.a.createElement(me.a,{"data-testid":"backIcon",icon:se.a,inverse:!0}))),r.a.createElement(ie.a,{className:"white-label"},"Favourite Movies")),r.a.createElement("style",{jsx:!0},"\n      .left-alignment-navbar {\n        position: absolute;\n        left: 2rem;\n        top: 0.8rem;\n      }\n    ")):r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,null,r.a.createElement(ie.a,{className:"white-label"},"My Binge List"),r.a.createElement(le.a,{className:"right-alignment-navbar"},r.a.createElement(re.b,{to:"/favourites"},r.a.createElement("img",{alt:"Favorites link page",src:"../../img/png/favorites.png"})))),r.a.createElement("style",{jsx:!0},"\n      .right-alignment-navbar {\n        position: absolute;\n        right: 2rem;\n        top: 0.8rem;\n      }\n    ")),r.a.createElement(ce.a,{color:"dark",dark:!0},t,r.a.createElement("style",{jsx:!0},"\n          .navbar {\n            justify-content: center;\n            align-items: center;\n            align-content: center;\n            font-size: 20px;\n          }\n        "))}),ge=function(){var e=Object(a.useContext)(ne),t=e.movies,n=e.setMovies,o=Object(a.useState)(0),i=Object(c.a)(o,2),m=i[0],s=i[1],p=Object(a.useState)("Please enter a genre to find movies e.g. Action"),h=Object(c.a)(p,2),E=h[0],b=h[1],x=function(){var e=Object(g.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(t);case 3:a=e.sent,Z()(a)||w()(a)?(console.log(typeof n),n([]),b(a)):n(Object(l.a)(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Exception",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){if(!w()(t)){var e=ae(t);s(e)}},[t,s]),r.a.createElement("div",{className:"binge-list-view"},r.a.createElement(ue,null),r.a.createElement(d.a,{className:"movies-container"},r.a.createElement(y,{onSearch:x}),r.a.createElement(v.a,null,w()(t)?r.a.createElement(f.a,{className:"text-info-page","data-testid":"infoBingeList"},r.a.createElement("h3",null,E)):M()(t,function(e,t){return r.a.createElement(q,{movie:e,detailInfo:e,median:m,key:"thumbnail-".concat(e.id,"-").concat(t)})}))),r.a.createElement("style",{jsx:!0},"\n          .binge-list-view {\n            height: 100%;\n            color: white;\n          }\n        "))},de=function(){var e=Object(a.useContext)(R).favourites;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null),r.a.createElement(d.a,null,r.a.createElement(v.a,null,w()(e)?r.a.createElement(f.a,{className:"text-info-page"},r.a.createElement("h3",{"data-testid":"noFavouritesText"},"There's no favourites movies!")):M()(e,function(e){return r.a.createElement(q,{movie:e,detailInfo:e,key:"thumbnail-".concat(e.id)})}))))},ve=n(93),fe=n.n(ve);var pe=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([]),s=Object(c.a)(i,2),u=s[0],g=s[1];return r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement(D,{value:{favourites:u,addFavourite:function(e){g(function(t){return t?[].concat(Object(l.a)(t),[e]):[e]})},removeFavourite:function(e){var t=e.id;g(function(e){g(fe()(e,function(e){return e.id!==t}))})}}},r.a.createElement(te,{value:{movies:n,setMovies:o}},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:ge}),r.a.createElement(m.b,{exact:!0,path:"/favourites",component:de}),r.a.createElement(m.a,{from:"*",to:"/"})))),r.a.createElement("style",{jsx:!0,global:!0},"\n        body {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n            'Helvetica Neue', sans-serif;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          background: rgb(40, 42, 54);\n        }\n\n        code {\n          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n            monospace;\n        }\n\n        .navbar {\n          margin-bottom: 2rem;\n        }\n\n        .white-label {\n          color: white !important;\n          text-decoration: none !important;\n        }\n\n        .text-info-page {\n          text-align: center;\n          color: white;\n          margin-top: 1rem;\n        }\n      "))};n(199);i.a.render(r.a.createElement(re.a,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,n){e.exports=n(200)}},[[94,1,2]]]);
//# sourceMappingURL=main.3824b4ff.chunk.js.map