(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,n){e.exports=n(282)},131:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},168:function(e,t){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},244:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),o=n.n(c),l=n(19),s=n(26),i=n(98),u=n(51),p=n(35),m=n(6),f=n.n(m),h=n(37),d=n(38),E=n.n(d),b="http://localhost:8000/api";function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){return e.posts.request},j=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},P=function(e){return"app/".concat("posts","/").concat(e)},y=P("LOAD_POSTS"),_=P("LOAD_SINGLE_POST"),k=P("START_REQUEST"),N=P("END_REQUEST"),w=P("ERROR_REQUEST"),S=P("RESET_REQUEST"),C=P("LOAD_POSTS_PAGE"),x=function(){return{type:k}},D=function(){return{type:N}},q=function(e){return{error:e,type:w}},R=function(){return{type:S}},A=function(e){return{payload:e,type:C}},T={data:[],singlePost:{},amount:0,postsPerPage:10,presentPage:1,request:{pending:!1,error:null,success:null}};var I=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return g({},e,{data:t.payload});case _:return g({},e,{singlePost:t.payload});case k:return g({},e,{request:{pending:!0,error:null,success:null}});case N:return g({},e,{request:{pending:!1,error:null,success:!0}});case w:return g({},e,{request:{pending:!1,error:t.error,success:!1}});case S:return g({},e,{request:{pending:!1,error:null,success:null}});case C:return g({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(u.a)(t.payload.posts)});default:return e}}}),B=Object(s.e)(I,Object(s.d)(Object(s.a)(i.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),L=(n(131),n(132),n(21)),U=n(8),M=n(9),F=n(11),Q=n(10),X=n(12),G=n(25),J=(n(133),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),V=(n(134),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),H=(n(135),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(L.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))})))}),W=Object(G.e)((function(e){return r.a.createElement(H,e)})),Y=(n(139),function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{path:"/",title:"Home"},{path:"/posts/new",title:"Add post"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"}]},n}return Object(X.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(V,null),r.a.createElement(W,{links:e}))}}]),t}(r.a.Component)),z=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(J,null,r.a.createElement(Y,null),t))},K=(n(140),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),Z=(n(141),n(20)),$=(n(142),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(Z.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)}),ee=(n(143),function(e){var t=e.children,n=Object(Z.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),te=n(100),ne=n.n(te),ae=function(e){var t=e.children,n=Object(Z.a)(e,["children"]);return r.a.createElement("div",Object.assign({},n,{className:"html-box"}),ne()(t))},re=function(e){var t=e.id,n=e.title,a=e.author,c=e.content;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(ee,null,n),r.a.createElement("p",null,"Author: ",a),r.a.createElement(ae,null,function(e,t){return e.length<1?"Error":e.length<=t?e:e.substr(0,e.lastIndexOf(" ",t))+"..."}(c,250)),r.a.createElement($,{variant:"primary"},r.a.createElement(L.b,{to:"/posts/".concat(t)},"Read more")))},ce=function(e){var t=e.posts;return r.a.createElement("section",{className:"posts-list"},t.map((function(e){return r.a.createElement(re,Object.assign({key:e.id},e))})))},oe=n(50),le=(n(239),function(){return r.a.createElement(oe.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),se=n(30),ie=(n(240),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(Z.a)(e,["variant","children"]);return r.a.createElement(oe.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(se.c,null);case"success":return r.a.createElement(se.a,null);case"warning":case"error":return r.a.createElement(se.b,null);default:return r.a.createElement(se.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),ue=(n(241),function(e){function t(e){var n;return Object(U.a)(this,t),(n=Object(F.a)(this,Object(Q.a)(t).call(this,e))).changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.state={presentPage:n.props.initialPage||1},n}return Object(X.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.pages,t=this.state.presentPage,n=this.changePage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},t>1?r.a.createElement("li",{className:"pagination__list__item",onClick:function(){return n(t-1)}},"<"):"",Object(u.a)(Array(e)).map((function(e,a){return r.a.createElement("li",{key:++a,onClick:function(){n(a)},className:"pagination__list__item".concat(a===t?" pagination__list__item--active":"")},a)})),t===e&&0!==e?"":r.a.createElement("li",{className:"pagination__list__item",onClick:function(){return n(t+1)}},">")))}}]),t}(r.a.Component)),pe=function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).loadPostsPage=function(e){var t=n.props;(0,t.loadPostsByPage)(e,t.postsPerPage)},n}return Object(X.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadPostsByPage)(e.initialPage||1,e.postsPerPage||10)}},{key:"componentWillUnmount",value:function(){(0,this.props.resetRequest)()}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.request,a=e.pages,c=e.pagination,o=e.presentPage,l=n.pending,s=n.success,i=n.error,u=this.loadPostsPage;return!1===l&&!0===s&&t.length>0&&!0===c?r.a.createElement("div",null,r.a.createElement(ce,{posts:t}),r.a.createElement(ue,{pages:a,onPageChange:u,initialPage:o})):!1===l&&!0===s&&t.length>0&&!1===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{posts:t})):!0===l||null===s?r.a.createElement(le,null):!1===l&&null!==i?r.a.createElement(ie,{variant:"error"},i):!1===l&&!0===s&&0===t.length?r.a.createElement(ie,{variant:"info"},"No posts"):r.a.createElement(ie,{variant:"info"},"Something went wrong....")}}]),t}(r.a.Component);pe.defaultProps={initialPage:1,postsPerPage:10,pagination:!0};var me=pe,fe=Object(l.b)((function(e){return{posts:(n=e,n.posts.data),request:O(e),pages:j(e),presentPage:(t=e,t.posts.presentPage)};var t,n}),(function(e){return{loadPostsByPage:function(t,n){return e(function(e,t){return function(){var n=Object(h.a)(f.a.mark((function n(a){var r,c,o,l;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x()),n.prev=1,r=(e-1)*t,c=t,n.next=6,E.a.get("".concat(b,"/posts/range/").concat(r,"/").concat(c));case 6:o=n.sent,l={posts:o.data.posts,amount:o.data.amount,postsPerPage:t,presentPage:e},a(A(l)),a(D()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),a(q(n.t0.message));case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},resetRequest:function(){return e(R())}}}))(me),he=function(){return r.a.createElement("div",null,r.a.createElement(K,null,"Blog"),r.a.createElement(fe,{pagination:!1,postsPerPage:3}))},de=function(e){function t(){return Object(U.a)(this,t),Object(F.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.counter;return r.a.createElement("div",null,e>0?"Posts amount: ".concat(e):"No posts")}}]),t}(r.a.Component),Ee=Object(l.b)((function(e){return{counter:(t=e,t.posts.data.length)};var t}))(de),be=function(){return r.a.createElement("div",null,r.a.createElement(K,null,"Posts list"),r.a.createElement(Ee,null),r.a.createElement(fe,null))},ve=function(){return r.a.createElement("div",null,r.a.createElement(K,null,"Contact"),r.a.createElement("p",null,"Your Favourite Blooger Ltd."),r.a.createElement("p",null,"9432 Division Street"),r.a.createElement("p",null,"Stone Mountain, GA 30083"),r.a.createElement("p",null,"Mobile Number: 207-914-3411"))},ge=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},Oe=n(39),je=n(101),Pe=n(102),ye=(n(244),function(e){function t(){return Object(U.a)(this,t),Object(F.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadPost,n=e.id,a=e.resetRequest;t(n),a()}},{key:"render",value:function(){var e=this.props,t=e.request,n=e.post,a=e.location,c=t.pending,o=t.success,l=t.error;return!1===c&&!0===o&&null!==n?r.a.createElement("article",null,r.a.createElement(ee,null,n.title),r.a.createElement(Oe.FacebookProvider,{appId:"603320293534637"},r.a.createElement(Oe.ShareButton,{className:"facebook-share-button",href:"".concat("http://localhost:3000/","/").concat(a.pathname)},r.a.createElement(je.a,{icon:Pe.a,className:"facebook-icon"}),"Share on facebook")),r.a.createElement("p",null,"Author: ",n.author),r.a.createElement(ae,null,n.content),r.a.createElement(Oe.FacebookProvider,{appId:"603320293534637"},r.a.createElement(Oe.Comments,{href:"".concat("http://localhost:3000/").concat(a.pathname)}))):!0===c||null===o?r.a.createElement(le,null):!1===c&&null!==l?r.a.createElement(ie,{variant:"error"},l):!1===c&&!0===o&&null===n?r.a.createElement(ie,{variant:"info"},"No posts"):r.a.createElement(ie,{variant:"info"},"Something went wrong!")}}]),t}(r.a.Component)),_e=Object(G.e)((function(e){return r.a.createElement(ye,e)})),ke=Object(l.b)((function(e){return{post:(t=e,t.posts.singlePost),request:O(e)};var t}),(function(e){return{loadPost:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x()),t.prev=1,t.next=4,E.a.get("".concat(b,"/posts/").concat(e));case 4:a=t.sent,n({payload:a.data,type:_}),n(D()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(q(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e(R())}}}))(_e),Ne=function(e){return r.a.createElement(ke,{id:e.match.params.id})},we=n(103),Se=n.n(we),Ce=(n(277),n(278),n(279),function(e){var t=e.value,n=e.label,a=e.onChange,c=Object(Z.a)(e,["value","label","onChange"]);return r.a.createElement("label",{className:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},c,{value:t,onChange:a,className:"text-field__input"})))}),xe=(n(280),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)});n(281);function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re=function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={post:{title:"",author:"",content:""}},n.handleChange=function(e){var t=n.state.post;n.setState({post:qe({},t,Object(p.a)({},e.target.name,e.target.value))})},n.handleEditor=function(e){var t=n.state.post;n.setState({post:qe({},t,{content:e})})},n.addPost=function(e){var t=n.props.addPost,a=n.state.post;e.preventDefault(),t(a)},n}return Object(X.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.resetRequest)()}},{key:"render",value:function(){var e=this.state.post,t=this.handleChange,n=this.handleEditor,a=this.addPost,c=this.props.request,o=c.error,l=c.success,s=c.pending;return o?r.a.createElement(ie,{variant:"error"},o):l?r.a.createElement(ie,{variant:"success"},"Post has been added!"):s?r.a.createElement(le,null):r.a.createElement("form",{onSubmit:a},r.a.createElement(Ce,{label:"Title",value:e.title,onChange:t,name:"title"}),r.a.createElement(Ce,{label:"Author",value:e.author,onChange:t,name:"author"}),r.a.createElement(xe,null,"Edit post content"),r.a.createElement(Se.a,{className:"content-editor",text:e.content,onChange:n,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),r.a.createElement($,{variant:"primary"},"Add post"))}}]),t}(r.a.Component),Ae=Object(l.b)((function(e){return{request:O(e)}}),(function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x()),t.prev=1,t.next=4,E.a.post("".concat(b,"/posts"),e);case 4:t.sent,n(D()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(q(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e(R())}}}))(Re),Te=function(){return r.a.createElement(Ae,null)},Ie=function(e){function t(){return Object(U.a)(this,t),Object(F.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement(z,null,r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0,component:he}),r.a.createElement(G.a,{path:"/posts",exact:!0,component:be}),r.a.createElement(G.a,{path:"/contact",exact:!0,component:ve}),r.a.createElement(G.a,{path:"/posts/new",exact:!0,component:Te}),r.a.createElement(G.a,{path:"/posts/:id",exact:!0,component:Ne}),r.a.createElement(G.a,{component:ge})))}}]),t}(r.a.Component);o.a.render(r.a.createElement((function(){return r.a.createElement(l.a,{store:B},r.a.createElement(L.a,null,r.a.createElement(Ie,null)))}),null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.676b4e1f.chunk.js.map