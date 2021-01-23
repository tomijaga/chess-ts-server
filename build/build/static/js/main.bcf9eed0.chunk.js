(this["webpackJsonpchess-ts"]=this["webpackJsonpchess-ts"]||[]).push([[0],{46:function(e,c,t){},47:function(e,c,t){},79:function(e,c,t){"use strict";t.r(c);var a,i=t(0),n=t(3),s=t.n(n),o=t(39),l=t.n(o),h=(t(46),t(47),t(10)),r=t(2),v=Object(n.createContext)({}),b=function(e){var c=e.show_move,t=e.tile,a=t.bg,s=t.size,o=t.piece,l=e.tile_position,h=l.row,b=l.column,u=e.onClick,w=e.on_check,j=e.style;e.children,Object(n.useContext)(v);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{onClick:u,className:"tile",style:Object(r.a)({height:s,width:s,backgroundColor:w?"green":a,fontSize:"small",display:"flex",justifyContent:"center",alignItems:"center"},j),children:[(null===o||void 0===o?void 0:o.icon)?o.icon:Object(i.jsx)(i.Fragment,{}),!0===c?Object(i.jsx)("div",{style:{width:"30px",height:"30px",position:"absolute",top:"40%",background:"rgba(14, 143, 212, 0.5)",borderRadius:"50%"}}):Object(i.jsx)(i.Fragment,{}),Object(i.jsxs)("div",{style:{position:"absolute",bottom:"0%",display:"flex"},children:[" ",Object(i.jsxs)("div",{children:["[",h,"]"]}),Object(i.jsxs)("div",{children:["[",b,"]"]})]})]})})},u=t(1),w=t(4),j=function(e,c){for(var t,a=[],i=0;i<c;i++)"object"===typeof e&&a.push((t=e,Object.assign(Object.create(Object.getPrototypeOf(t)),t))),a.push(e);return a},d=t(12),p=t(11),O=function e(c,t,a){Object(w.a)(this,e),this.icon=void 0,this.type=void 0,this.side=void 0,this.hasMoved=!1,this.location=null,this.icon=c,this.type=t,this.side=a},m=function(e){Object(d.a)(t,e);var c=Object(p.a)(t);function t(e,a){return Object(w.a)(this,t),c.call(this,e.rook,"rook",a)}return t}(O),f=function(e){Object(d.a)(t,e);var c=Object(p.a)(t);function t(e,a){return Object(w.a)(this,t),c.call(this,e.bishop,"bishop",a)}return t}(O),_=function(e){Object(d.a)(t,e);var c=Object(p.a)(t);function t(e,a){return Object(w.a)(this,t),c.call(this,e.king,"king",a)}return t}(O),g=function(e){Object(d.a)(t,e);var c=Object(p.a)(t);function t(e,a){return Object(w.a)(this,t),c.call(this,e.queen,"queen",a)}return t}(O),k=function(e){Object(d.a)(t,e);var c=Object(p.a)(t);function t(e,a){return Object(w.a)(this,t),c.call(this,e.knight,"knight",a)}return t}(O),z=function(e){Object(d.a)(t,e);var c=Object(p.a)(t);function t(e,a){return Object(w.a)(this,t),c.call(this,e.pawn,"pawn",a)}return t}(O),x=function e(c,t){var a=this;Object(w.a)(this,e),this.pawns=[],this.knights=[],this.king=void 0,this.queen=void 0,this.bishops=[],this.rooks=[],this.capturedPieces=[],this.capture=function(e){a.capturedPieces.push(e)},this.getPieces=function(){return[a.king,a.queen].concat(Object(u.a)(a.bishops),Object(u.a)(a.knights),Object(u.a)(a.pawns),Object(u.a)(a.rooks))};var i="white";1===t&&(i="black"),"white"===i?(this.king=new _(c.white,"white"),this.queen=new g(c.white,"white"),this.pawns[0]=new z(c.white,"white"),this.pawns[1]=new z(c.white,"white"),this.pawns[2]=new z(c.white,"white"),this.pawns[3]=new z(c.white,"white"),this.pawns[4]=new z(c.white,"white"),this.pawns[5]=new z(c.white,"white"),this.pawns[6]=new z(c.white,"white"),this.pawns[7]=new z(c.white,"white"),this.knights=j(new k(c.white,"white"),2),this.rooks=j(new m(c.white,"white"),2),this.bishops=j(new f(c.white,"white"),2)):(this.king=new _(c.black,"black"),this.queen=new g(c.black,"black"),this.pawns[0]=new z(c.black,"black"),this.pawns[1]=new z(c.black,"black"),this.pawns[2]=new z(c.black,"black"),this.pawns[3]=new z(c.black,"black"),this.pawns[4]=new z(c.black,"black"),this.pawns[5]=new z(c.black,"black"),this.pawns[6]=new z(c.black,"black"),this.pawns[7]=new z(c.black,"black"),this.knights=j(new k(c.black,"black"),2),this.rooks=j(new m(c.black,"black"),2),this.bishops=j(new f(c.black,"black"),2))};!function(e){e[e.white=0]="white",e[e.black=1]="black"}(a||(a={}));var H,M,L=function e(c){Object(w.a)(this,e),this.bg=void 0,this.piece=void 0,this.size="90px",this.bg=c},A=t(17),C=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M10 10.47a8.675 8.675 0 011.498-3.683 7.575 7.575 0 002.948 4.046 1 1 0 101.108-1.665 6.506 6.506 0 01-2.517-4.704 64.574 64.574 0 013.208-4.11.997.997 0 011.51.001C21.665 4.989 24 8.771 24 10.47A6.436 6.436 0 0120.688 16h-7.376A6.436 6.436 0 0110 10.47zM8 20v-1c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1H9c-.552 0-1-.448-1-1zm4 3h10v11H12V23zM8 37c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H9c-.552 0-1-.448-1-1v-2zm-4.933 9.475a2 2 0 011.156-2.615L9.183 42h15.635l4.96 1.86a2 2 0 011.155 2.615L30.323 48H3.677l-.61-1.525zM34 55c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},V=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsxs)("g",{fillRule:"nonzero",fill:"currentColor",children:[Object(i.jsx)("path",{d:"M10.072 10.914a.837.837 0 01.018-.717c.155-.293.43-.505.753-.579L17 8.033l6.157 1.585c.324.074.598.286.753.58.113.223.12.487.018.716L22.163 15H11.837l-1.765-4.086zM8 18c0-.552.448-1 1-1h16a1 1 0 010 2H9c-.552 0-1-.448-1-1zm4 3h10v17H12V21zM9 40h16a1 1 0 010 2H9a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615L9.183 44h15.635l4.96 1.86a2 2 0 011.155 2.615L30.323 50H3.677l-.61-1.525zM34 57c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4zM16 7.2V1a1 1 0 012 0v6.2L17 7l-1 .2z"}),Object(i.jsx)("path",{d:"M19 4h-4a1 1 0 010-2h4a1 1 0 010 2z"})]})}))},y=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M9 41.001c-.552 0-1-.447-1-1v-2c0-.552.448-.999 1-1h16c.552.001 1 .448 1 1v2c0 .553-.448 1-1 1H9zm20.055-7.097A2.004 2.004 0 0127.215 35h-6.654c.038-.042.08-.08.116-.123a5.987 5.987 0 001.339-4.863l-1.41-8.455 8.245 10.526c.423.512.503 1.226.204 1.82zM5.123 9.573a9.9 9.9 0 015.305-3.959 22.518 22.518 0 00-6 12.228c-.822-3.35-.607-6.128.695-8.27zm.897 12.894c.17-9.708 4.758-14.706 7.114-16.629-.012.257-.02.52-.02.793a1 1 0 002 0 10.22 10.22 0 011.155-5.142c.192-.312.535-.498.9-.489l2.972-.053v2.257a1.954 1.954 0 001.128 1.752l2.643 1.247a14.917 14.917 0 014.598 3.351l3.092 3.336a1.758 1.758 0 01-.083 2.467l-1.49 1.37-2.333-1.468c-1.388-.873-3.787-1.482-7.129-1.81a3.025 3.025 0 00-2.949 1.523 2.785 2.785 0 00.258 3.1l.155.199 2.012 12.072a3.991 3.991 0 01-.893 3.242A4.047 4.047 0 0116 35H8.09a1.935 1.935 0 01-2.012-1.842V22.737a.99.99 0 00-.057-.27zm-2.953 25.01a2 2 0 011.156-2.616l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.616L30.323 49H3.677l-.61-1.525zM34 56c0 .553-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H8v-2a1 1 0 00-2 0v2H4v-2a1 1 0 00-2 0v2H1c-.552 0-1-.447-1-1v-4c0-.552.448-.999 1-1h1.997l.003.001h30c.552 0 1 .447 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},B=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsxs)("g",{fillRule:"nonzero",fill:"currentColor",children:[Object(i.jsx)("path",{d:"M17 0a2.006 2.006 0 00-2 2c-.002.413.128.816.37 1.15 1.077-.2 2.183-.2 3.26 0 .242-.334.372-.737.37-1.15a2.006 2.006 0 00-2-2zm-5.2 6.94c-.02.02-.05.04-.07.06h.09l-.02-.06zm10.4 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06zm0 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06zM25 15H9a1 1 0 000 2h16a1 1 0 000-2zm-13 4v17h10V19H12zm13 19H9a1 1 0 000 2h16a1 1 0 000-2zm5.91 6.93a1.981 1.981 0 00-1.13-1.07L24.82 42H9.18l-4.96 1.86a1.981 1.981 0 00-1.13 1.07 2.03 2.03 0 00-.02 1.55L3.68 48h26.64l.61-1.52a2.03 2.03 0 00-.02-1.55zM33 50H1a1.003 1.003 0 00-1 1v4c.002.552.448.998 1 1h1v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h2v-2a1 1 0 012 0v2h1a1.003 1.003 0 001-1v-4a1.003 1.003 0 00-1-1z"}),Object(i.jsx)("path",{d:"M24.85 5.32L23.62 9h-.01l-1.33 4H11.71L9.15 5.32a1.002 1.002 0 111.9-.64l.75 2.26c-.02.02-.05.04-.07.06h.09l-.02-.06a7.94 7.94 0 0110.4 0l-.02.06h.09c-.02-.02-.05-.04-.07-.06l.75-2.26a1.002 1.002 0 111.9.64z"}),Object(i.jsx)("path",{d:"M11.82 7h-.09c.02-.02.05-.04.07-.06l.02.06zM22.27 7h-.09l.02-.06c.02.02.05.04.07.06z"})]})}))},P=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M13.05 2.05a7 7 0 119.901 9.898 7 7 0 01-9.9-9.898zm1.498 15.797a33.035 33.035 0 00-.561-2.796 8.96 8.96 0 008.027 0c-.226.92-.417 1.86-.562 2.795L21.43 18h-6.86l-.022-.153zM9 23v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1zm5.76 3h6.482a25.675 25.675 0 002.154 8H12.605a25.454 25.454 0 002.155-8zM7 37c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.923a2 2 0 011.154 2.615L34.323 48H1.677l-.61-1.525a1.987 1.987 0 01.027-1.55zM36 55c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H9v-2a1 1 0 00-2 0v2H5v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H35c.552.002.998.449.999 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},R=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M5 0h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V0h2v2a2.003 2.003 0 001.999 2H19A2.003 2.003 0 0021 2V0h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V0h2v5.871a4.023 4.023 0 01-1.228 2.884L28.477 10H7.523L6.228 8.755A4.022 4.022 0 015 5.87V0zm2 15v-2c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1zm3 3h16v16H10V18zM7 37c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.922a2 2 0 011.154 2.616L34.323 48H1.677l-.61-1.525a1.987 1.987 0 01.027-1.55zM36 55c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H9v-2a1 1 0 00-2 0v2H5v-2a1 1 0 00-2 0v2H1c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H35A1 1 0 0136 51v4z",fillRule:"nonzero",fill:"currentColor"})}))},q=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41v-2a3.003 3.003 0 00-3-3h-1V25h1a3.003 3.003 0 003-3v-1a3.003 3.003 0 00-3-3h-1.176A8.258 8.258 0 0028 12.47c0-2.847-3.652-7.774-6.716-11.404a2.976 2.976 0 00-4.568-.001C13.652 4.696 10 9.623 10 12.47c.014 2.05.79 4.02 2.176 5.53H11a3.003 3.003 0 00-3 3v1a3.003 3.003 0 003 3h1v11h-1a3.003 3.003 0 00-3 3v2c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zm9-47.53a8.675 8.675 0 011.498-3.683 7.575 7.575 0 002.948 4.046 1 1 0 101.108-1.665 6.506 6.506 0 01-2.517-4.704 64.574 64.574 0 013.208-4.11.997.997 0 011.51.001C23.665 6.989 26 10.771 26 12.47A6.436 6.436 0 0122.688 18h-7.376A6.436 6.436 0 0112 12.47zM10 22v-1c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1H11c-.552 0-1-.448-1-1zm4 3h10v11H14V25zm-4 14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H11c-.552 0-1-.448-1-1v-2zm-4.933 9.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},S=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41a3.003 3.003 0 00-3-3h-1V21h1a3 3 0 000-6h-.659l1.423-3.292c.331-.767.31-1.64-.058-2.39a3.13 3.13 0 00-2.05-1.636L20 6.225V4h1a1 1 0 000-2h-1V1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v2.225l-5.655 1.457a3.13 3.13 0 00-2.051 1.635 2.852 2.852 0 00-.058 2.39L11.66 15H11a3 3 0 000 6h1v17h-1a3.003 3.003 0 00-3 3c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zm9.072-49.086a.837.837 0 01.018-.717c.155-.293.43-.505.753-.579L19 8.033l6.157 1.585c.324.074.598.286.753.58.113.223.12.487.018.716L24.163 15H13.837l-1.765-4.086zM10 18c0-.552.448-1 1-1h16a1 1 0 010 2H11c-.552 0-1-.448-1-1zm4 3h10v17H14V21zm-3 19h16a1 1 0 010 2H11a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},F=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M35 50.001h-.523l.313-.782a4.001 4.001 0 00-2.31-5.23l-3.112-1.168a2.97 2.97 0 00.632-1.82v-2a2.969 2.969 0 00-.197-1.041 3.957 3.957 0 003.05-2.18 3.653 3.653 0 00-.428-3.928L21.45 17.84a.795.795 0 01-.079-.904 1.004 1.004 0 011.001-.497c2.987.294 5.152.817 6.26 1.514l2.334 1.469a2.033 2.033 0 002.477-.243l1.449-1.366a3.765 3.765 0 00.176-5.282l-3.091-3.335a16.896 16.896 0 00-5.211-3.8l-2.625-1.19V1.946A1.979 1.979 0 0022.137 0H19.17a3.031 3.031 0 00-2.635 1.493 9.92 9.92 0 00-.95 2.34c-1.689.186-7.389 1.142-10.163 5.688-2.17 3.557-1.967 8.353.587 14.253 0 .078-.009.148-.009.226 0 .133.027.265.078.387v9.77A3.828 3.828 0 008.36 37.61 2.961 2.961 0 008 39v2c.003.66.225 1.3.632 1.82L5.52 43.988a4 4 0 00-2.31 5.23l.313.783H3a3.003 3.003 0 00-3 3v4a3.004 3.004 0 003 3.001h32a3.004 3.004 0 003-3v-4a3.003 3.003 0 00-3-3zm-24-8c-.552 0-1-.447-1-1v-2c0-.552.448-.999 1-1h16c.552.001 1 .448 1 1v2c0 .553-.448 1-1 1H11zm20.055-7.097A2.004 2.004 0 0129.215 36h-6.654c.038-.042.08-.08.116-.123a5.987 5.987 0 001.339-4.863l-1.41-8.455 8.245 10.526c.423.512.503 1.226.204 1.82zM7.123 10.573a9.9 9.9 0 015.305-3.959 22.518 22.518 0 00-6 12.228c-.822-3.35-.607-6.128.695-8.27zm.897 12.894c.17-9.708 4.758-14.706 7.114-16.629-.012.257-.02.52-.02.793a1 1 0 002 0 10.22 10.22 0 011.155-5.142c.192-.312.535-.498.9-.489l2.972-.053v2.257a1.954 1.954 0 001.128 1.752l2.643 1.247a14.917 14.917 0 014.598 3.351l3.092 3.336a1.758 1.758 0 01-.083 2.467l-1.49 1.37-2.333-1.468c-1.388-.873-3.787-1.482-7.129-1.81a3.025 3.025 0 00-2.949 1.523 2.785 2.785 0 00.258 3.1l.155.199 2.012 12.072a3.991 3.991 0 01-.893 3.242A4.047 4.047 0 0118 36h-7.91a1.935 1.935 0 01-2.012-1.842V23.737a.99.99 0 00-.057-.27zm-2.953 25.01a2 2 0 011.156-2.616l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.616L32.323 50H5.677l-.61-1.525zM36 57c0 .553-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.447-1-1v-4c0-.552.448-.999 1-1h1.997l.003.001h30c.552 0 1 .447 1 1v4z",fillRule:"nonzero",fill:"currentColor"})}))},E=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h32a3.003 3.003 0 003-3v-4a3.003 3.003 0 00-3-3h-.523l.313-.782a4.001 4.001 0 00-2.31-5.231l-3.112-1.167A2.97 2.97 0 0030 41a3.003 3.003 0 00-3-3h-1V21h1a3 3 0 000-6h-.613l1.389-4.166.01-.028 1.162-3.49a1 1 0 10-1.896-.632l-.571 1.713a9.984 9.984 0 00-3.86-2.703 4 4 0 10-7.241 0 9.984 9.984 0 00-3.86 2.703l-.572-1.713a1 1 0 10-1.896.632l1.163 3.49.01.028L11.612 15H11a3 3 0 000 6h1v17h-1a3.003 3.003 0 00-3 3c.003.66.225 1.3.632 1.82L5.52 43.987a4.001 4.001 0 00-2.31 5.231l.313.782H3a3.003 3.003 0 00-3 3v4a3.003 3.003 0 003 3zM19 7a7.993 7.993 0 015.266 2H13.734A7.993 7.993 0 0119 7zm-2-3a2 2 0 113.635 1.15c-1.08-.2-2.19-.2-3.27 0A1.977 1.977 0 0117 4zm-4.613 7h13.226l-1.333 4H13.72l-1.333-4zM10 18c0-.552.448-1 1-1h16a1 1 0 010 2H11c-.552 0-1-.448-1-1zm4 3h10v17H14V21zm-3 19h16a1 1 0 010 2H11a1 1 0 010-2zm-5.933 8.475a2 2 0 011.156-2.615l4.96-1.86h15.635l4.96 1.86a2 2 0 011.155 2.615L32.323 50H5.677l-.61-1.525zM2 53c0-.552.448-1 1-1h32c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-1v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H6v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4z",fillRule:"nonzero",fill:"currentColor"})}))},T=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h34a3.003 3.003 0 003-3v-4a2.993 2.993 0 00-1.656-2.667l.446-1.115a4 4 0 00-2.31-5.231l-3.909-1.466c.278-.459.426-.985.429-1.521v-2a3.003 3.003 0 00-3-3h-2.528a.98.98 0 00-.091-.434A23.55 23.55 0 0125.254 28H28a3.003 3.003 0 003-3v-2a3.003 3.003 0 00-3-3h-2.544a30.257 30.257 0 011.246-5.009 9 9 0 10-13.404 0A30.244 30.244 0 0114.544 20H12a3.003 3.003 0 00-3 3v2a3.003 3.003 0 003 3h2.749a23.384 23.384 0 01-2.13 7.566.98.98 0 00-.09.434H10a3.003 3.003 0 00-3 3v2c.003.536.15 1.062.429 1.521l-3.91 1.466a4 4 0 00-2.309 5.231l.446 1.115A2.993 2.993 0 000 53v4a3.003 3.003 0 003 3zm35-3c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H7v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H37c.552.002.998.449.999 1v4zM15.05 4.05a7 7 0 119.901 9.898 7 7 0 01-9.9-9.898zm1.498 15.797a33.035 33.035 0 00-.561-2.796 8.96 8.96 0 008.027 0c-.226.92-.417 1.86-.562 2.795L23.43 20h-6.86l-.022-.153zM11 25v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H12c-.552 0-1-.448-1-1zm5.76 3h6.482a25.675 25.675 0 002.154 8H14.605a25.454 25.454 0 002.155-8zM9 39c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.923a2 2 0 011.154 2.615L36.323 50H3.677l-.61-1.525a1.987 1.987 0 01.027-1.55z",fillRule:"nonzero",fill:"currentColor"})}))},N=function(e){return Object(i.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75",height:70,width:70},e),{},{children:Object(i.jsx)("path",{d:"M3 60h34a3.003 3.003 0 003-3v-4a2.993 2.993 0 00-1.656-2.667l.446-1.115a4.001 4.001 0 00-2.31-5.231l-3.909-1.466c.278-.459.426-.985.429-1.521v-2a3.003 3.003 0 00-3-3V20a3.003 3.003 0 003-3v-2a2.973 2.973 0 00-.735-1.945l.894-.859A6.031 6.031 0 0035 7.871V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2h-2a2.002 2.002 0 00-2 2v2h-2V2a2.002 2.002 0 00-2-2H7a2.002 2.002 0 00-2 2v5.871a6.03 6.03 0 001.842 4.325l.893.859A2.973 2.973 0 007 15v2a3.003 3.003 0 003 3v16a3.003 3.003 0 00-3 3v2c.003.536.15 1.062.429 1.521l-3.91 1.466a4 4 0 00-2.309 5.231l.446 1.115A2.993 2.993 0 000 53v4a3.003 3.003 0 003 3zm35-3c0 .552-.448 1-1 1h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2h-2v-2a1 1 0 00-2 0v2H7v-2a1 1 0 00-2 0v2H3c-.552 0-1-.448-1-1v-4c0-.551.447-.998.999-1H37A1 1 0 0138 53v4zM7 2h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V2h2v2a2.003 2.003 0 001.999 2H21A2.003 2.003 0 0023 4V2h2v2a2.002 2.002 0 002 2h2a2.002 2.002 0 002-2V2h2v5.871a4.023 4.023 0 01-1.228 2.884L30.477 12H9.523l-1.295-1.245A4.022 4.022 0 017 7.87V2zm2 15v-2c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1zm3 3h16v16H12V20zM9 39c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1v-2zm-5.906 7.925a1.985 1.985 0 011.128-1.065l5.13-1.923.011-.008c.21.046.423.07.637.071h20c.214 0 .428-.025.637-.071l.012.008 5.13 1.922a2 2 0 011.154 2.616L36.323 50H3.677l-.61-1.525a1.987 1.987 0 01.027-1.55z",fillRule:"nonzero",fill:"currentColor"})}))},D=(H={},Object(A.a)(H,"black",{bishop:Object(i.jsx)(C,{}),king:Object(i.jsx)(V,{}),queen:Object(i.jsx)(B,{}),knight:Object(i.jsx)(y,{}),pawn:Object(i.jsx)(P,{}),rook:Object(i.jsx)(R,{})}),Object(A.a)(H,"white",{bishop:Object(i.jsx)(q,{}),king:Object(i.jsx)(S,{}),queen:Object(i.jsx)(E,{}),knight:Object(i.jsx)(F,{}),pawn:Object(i.jsx)(T,{}),rook:Object(i.jsx)(N,{})}),H),I=t(40),G=new function e(c){var t=this;Object(w.a)(this,e),this.tile_color_1=void 0,this.tile_color_2=void 0,this.sides=void 0,this.moves=[],this.tiles=[],this.movePiece=function(e,c){if(t.position_is_out_of_bounds(c))throw new Error("Next Position Out of Bounds");var a=t.tiles[e.column][e.row],i=t.tiles[c.column][c.row];if(console.log({next_tile:i,prev_tile:a}),!a.piece)throw new Error("There was no Piece on Previous Tile");if(a.piece.hasMoved||(a.piece.hasMoved=!0),i.piece&&a.piece.side!==i.piece.side)switch(a.piece.side){case"white":t.sides.white.capture(i.piece);break;case"black":t.sides.black.capture(i.piece);break;default:throw new Error("@movePiece. prev_tile's side does not exist ")}i.piece=a.piece,i.piece.location=c,a.piece=void 0,t.moves.push({prev:e,next:c}),console.log({next_tile:i,prev_tile:a}),console.log(t.tiles)},this.newGame=function(){t.tiles[0][0].piece=t.sides.white.rooks[0],t.sides.white.rooks[0].location={column:0,row:0},t.tiles[1][0].piece=t.sides.white.knights[0],t.sides.white.knights[0].location={column:1,row:0},t.tiles[2][0].piece=t.sides.white.bishops[0],t.sides.white.bishops[0].location={column:2,row:0},t.tiles[3][0].piece=t.sides.white.queen,t.sides.white.queen.location={column:3,row:0},t.tiles[4][0].piece=t.sides.white.king,t.sides.white.king.location={column:4,row:0},t.tiles[5][0].piece=t.sides.white.bishops[1],t.sides.white.bishops[1].location={column:5,row:0},t.tiles[6][0].piece=t.sides.white.knights[1],t.sides.white.knights[1].location={column:6,row:0},t.tiles[7][0].piece=t.sides.white.rooks[1],t.sides.white.rooks[1].location={column:7,row:0},t.tiles[0][7].piece=t.sides.black.rooks[0],t.sides.black.rooks[0].location={column:0,row:7},t.tiles[1][7].piece=t.sides.black.knights[0],t.sides.black.knights[0].location={column:0,row:7},t.tiles[2][7].piece=t.sides.black.bishops[0],t.sides.black.bishops[0].location={column:0,row:7},t.tiles[3][7].piece=t.sides.black.queen,t.sides.black.queen.location={column:0,row:7},t.tiles[4][7].piece=t.sides.black.king,t.sides.black.king.location={column:0,row:7},t.tiles[5][7].piece=t.sides.black.bishops[1],t.sides.black.bishops[1].location={column:0,row:7},t.tiles[6][7].piece=t.sides.black.knights[1],t.sides.black.knights[1].location={column:0,row:7},t.tiles[7][7].piece=t.sides.black.rooks[1],t.sides.black.rooks[1].location={column:0,row:7},t.set_pawns()},this.is_on_check=function(e){switch(e){case"white":if(t.sides.white.king.location)for(var c=t.sides.white.king.location,a=c.column,i=c.row,n=t.sides.black.getPieces(),s=0;s<n.length;++s){var o=n[s];if(o.location)for(var l=t.possible_moves_from_tile(o.location),h=0;h<l.length;++h){var r=l[h];if(r.column===a&&r.row===i)return!0}}break;case"black":if(t.sides.black.king.location)for(var v=t.sides.black.king.location,b=v.column,u=v.row,w=t.sides.white.getPieces(),j=0;j<w.length;++j){var d=w[j];if(d.location)for(var p=t.possible_moves_from_tile(d.location),O=0;O<p.length;++O){var m=p[O];return m.column===b&&m.row===u}}break;default:throw Error('parameter side should be either "white" or "black"')}},this.set_pawns=function(){for(var e=0;e<8;++e)t.tiles[e][1].piece=t.sides.white.pawns[e],t.sides.white.pawns[e].location={column:e,row:1},t.tiles[e][6].piece=t.sides.black.pawns[e],t.sides.black.pawns[e].location={column:e,row:6}},this.possible_moves_from_tile=function(e){var c=e.column,a=e.row,i=t.tiles[c][a],n=[];return i.piece&&(n=t.map_piece_to_move(e,i.piece)),n},this.traverse_tiles=function(e){for(var c=0;c<8;++c)for(var a=0;a<8;)e(t.tiles[a++][c])},this.map_piece_to_move=function(e,c){var a=e.row,i=e.column,n=c.side,s=[];switch(c.type){case"bishop":s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,1,1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,-1,1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,1,-1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,-1,-1)));break;case"pawn":var o,l,h={};h.column="white"===n?1:-1,h.row="white"===n?1:-1,t.position_is_out_of_bounds({column:i+h.column,row:a+h.row})||void 0===t.tiles[i+h.column][a+h.row].piece||(null===(o=t.tiles[i+h.column][a+h.row].piece)||void 0===o?void 0:o.side)!==n&&(s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_scan(e,n,1,1)))),t.position_is_out_of_bounds({column:i-h.column,row:a+h.row})||void 0===t.tiles[i-h.column][a+h.row].piece||(null===(l=t.tiles[i-h.column][a+h.row].piece)||void 0===l?void 0:l.side)!==n&&(s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_scan(e,n,-1,1)))),c.hasMoved?s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,0,1,1))):(console.log(c.hasMoved),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,0,1,2))));break;case"queen":s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,1,0))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,-1,0))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,0,1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,0,-1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,1,1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,-1,1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,1,-1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,-1,-1)));break;case"rook":s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,1,0))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,-1,0))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,0,1))),s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_recursive_scan(e,n,0,-1)));break;case"knight":s=[].concat(Object(u.a)(s),Object(u.a)(t.radial_scan(e,n,2,1)));break;case"king":if(s=[].concat(Object(u.a)(s),Object(u.a)(t.radial_scan(e,n,1,1)),Object(u.a)(t.radial_scan(e,n,1,0))),!c.hasMoved){var r="white"===n?2:-2;t.position_is_out_of_bounds({row:a,column:i+r})||void 0!==t.tiles[i+r][a].piece||(s=[].concat(Object(u.a)(s),Object(u.a)(t.linear_scan(e,n,2,0))))}}return s},this.linear_recursive_scan=function(e,c,a,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;s++;var o=e.column,l=e.row,h="white"===c?o+a*s:o-a*s,r="white"===c?l+i*s:l-i*s,v={column:h,row:r},b=t.position_is_out_of_bounds(v),w=[];if(!b){var j,d=t.tiles[o][l],p=t.tiles[v.column][v.row];if(s<=n)if(void 0===p.piece)w=[v].concat(Object(u.a)(t.linear_recursive_scan(e,c,a,i,n,s)));else if((null===(j=d.piece)||void 0===j?void 0:j.side)!==p.piece.side){var O;if("pawn"===(null===(O=d.piece)||void 0===O?void 0:O.type))return w;w=[v].concat(Object(u.a)(t.linear_recursive_scan(e,c,a,i,s,s)))}}return w},this.linear_scan=function(e,c,a,i){var n=e.column,s=e.row,o=[],l={column:"white"===c?n+a:n-a,row:"white"===c?s+i:s-i};if(!t.position_is_out_of_bounds(l)){var h,r=t.tiles[n][s],v=t.tiles[l.column][l.row];(void 0===v.piece||(null===(h=r.piece)||void 0===h?void 0:h.side)!==v.piece.side)&&(o=[].concat(Object(u.a)(o),[l]))}return o},this.radial_scan=function(e,c,a,i){return[].concat(Object(u.a)(t.linear_scan(e,c,a,i)),Object(u.a)(t.linear_scan(e,c,-a,-i)),Object(u.a)(t.linear_scan(e,c,a,-i)),Object(u.a)(t.linear_scan(e,c,-a,i)),Object(u.a)(t.linear_scan(e,c,i,a)),Object(u.a)(t.linear_scan(e,c,-i,-a)),Object(u.a)(t.linear_scan(e,c,i,-a)),Object(u.a)(t.linear_scan(e,c,-i,a)))},this.position_is_out_of_bounds=function(e){var c=e.column,t=e.row;return c>=8||c<0||(t>=8||t<0)},this.tile_color_1="red",this.tile_color_2="gold",this.sides={white:new x(c,a.white),black:new x(c,a.black)};for(var i=0;i<8;i++){for(var n=0,s=[],o=i%2===1;n<8;){var l=n%2===0,h=this.tile_color_1;o?l&&(h=this.tile_color_2):l||(h=this.tile_color_2),s.push(new L(h)),n++}this.tiles.push(s)}console.log("Called Constructor"),this.newGame()}(D),J=Object(I.io)({reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3,randomizationFactor:.5,timeout:2e4,autoConnect:!0,rejectUnauthorized:!1});J.on("game-id",(function(e){M=e})),J.on("sides",(function(e){console.log(J.id,e)}));var K=function(){var e=Object(n.useState)(!1),c=Object(h.a)(e,2),t=c[0],a=(c[1],Object(n.useState)("white")),s=Object(h.a)(a,2),o=s[0],l=(s[1],Object(n.useState)(G.tiles)),r=Object(h.a)(l,2),v=r[0],u=r[1],w=Object(n.useState)(),j=Object(h.a)(w,2),d=j[0],p=j[1],O=Object(n.useState)({}),m=Object(h.a)(O,2),f=m[0],_=m[1],g=Object(n.useState)("white"),k=Object(h.a)(g,2),z=k[0],x=k[1],H=Object(n.useState)(!1),L=Object(h.a)(H,2),A=L[0],C=L[1];Object(n.useEffect)((function(){!function(){var e=v.map((function(e,c){return e.map((function(e,a){var n=!1;f.possible_moves&&f.possible_moves.map((function(e){e.column===c&&e.row===a&&(n=!0)}));var s={row:a,column:c},o=function(){var e=G.sides.white.king.location,t=e.column,i=e.row;return A&&t===c&&i===a};return Object(i.jsx)(b,{style:{transform:"rotate(90deg)"},tile:e,on_check:A&&o(),show_move:n,tile_position:s,onClick:function(i){if(!t){if(e.piece&&e.piece.side===z){var o=G.possible_moves_from_tile({row:a,column:c});_((function(){return{position:s,possible_moves:o}}))}n&&(G.movePiece(f.position,s),console.log("showmove"),V(),_((function(){return{position:f.position,possible_moves:[]}})))}}},a+1+(c+1)*(a+1))}))}));p(e)}(),G.is_on_check(o)?(C(!0),console.log("King on Check")):C(!1)}),[v,f,A]);var V=function(){x((function(e){return"white"===e?"black":"white"})),u((function(){return G.tiles})),console.log(G.tiles)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 50px"},children:[Object(i.jsxs)("h2",{children:["game_id: ",M]}),Object(i.jsx)("h3",{children:"opponent:"}),Object(i.jsx)("h3",{children:"opponent:"})]}),Object(i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gridTemplateRows:"repeat(8, 1fr)",transform:"rotate(-90deg)"},children:d}),";"]})};var U=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(K,{})})})},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(c){var t=c.getCLS,a=c.getFID,i=c.getFCP,n=c.getLCP,s=c.getTTFB;t(e),a(e),i(e),n(e),s(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(U,{})}),document.getElementById("root")),Q()}},[[79,1,2]]]);
//# sourceMappingURL=main.bcf9eed0.chunk.js.map