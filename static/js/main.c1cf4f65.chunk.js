(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(17),n(1)),i=n(2),l=n(3),u=n(6),h=n(7),m=n(9),f=n(8),b=n(10),S=(n(19),"https://hn.algolia.com/api/v1"),p="/search",v="query=",g="Redux",d="page=",E="hitsPerPage=",y="50",j=function(e){var t=e.value,n=e.onChange,a=e.children,c=e.onSubmit;return r.a.createElement("form",{onSubmit:c},a,r.a.createElement("input",{type:"text",value:t,onChange:n}),r.a.createElement("button",{className:"button-inline",type:"submit"},"Click me"))},T=function(e){var t=e.onClick,n=e.className,a=void 0===n?"":n,c=e.children;return r.a.createElement("button",{onClick:t,className:a,type:"button"},c)},w=(n(21),function(e){var t=e.list,n=e.onDismiss;return r.a.createElement("div",{className:"table"},t.map(function(e){return r.a.createElement("div",{key:e.objectID,className:"table-row"},r.a.createElement("h1",null,r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("h1",{className:"aut-btn"},r.a.createElement("span",{className:"space"}," by ",e.author),r.a.createElement(T,{onClick:function(){return n(e.objectID)},className:"button-inline btn"},"Fling")))}))}),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).fetchSearchTopStories=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;fetch("".concat(S).concat(p,"?").concat(v).concat(e,"&").concat(d).concat(t,"&").concat(E).concat(y)).then(function(e){return e.json()}).then(function(e){return n.setSearchTopStories(e)}).catch(function(e){return n.setState({error:e})})},n.setSearchTopStories=function(e){var t=n.state,a=t.result,r=t.searchKey,c=e.hits,o=e.page,u=a&&a[r]?a[r].hits:[],h=[].concat(Object(l.a)(u),Object(l.a)(c));n.setState({result:Object(i.a)({},a,Object(s.a)({},r,{hits:h,page:o}))})},n.needsToSearchTopStories=function(e){return!n.state.result[e]},n.onSearchSubmit=function(e){var t=n.state.searchTerm;n.setState({searchKey:t}),n.needsToSearchTopStories(t)&&n.fetchSearchTopStories(t),e.preventDefault()},n.onDismiss=function(e){var t=n.state,a=t.result,r=t.searchKey,c=a[r],o=c.hits,l=c.page,u=o.filter(function(t){return t.objectID!==e});n.setState({result:Object(i.a)({},a,Object(s.a)({},r,{hits:u,page:l}))})},n.onSearchChange=function(e){var t=e.target;n.setState({searchTerm:t.value})},n.state={result:null,error:null,searchKey:"",searchTerm:g},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTerm,a=t.searchKey,c=t.result;if(t.error)return r.a.createElement("h1",{className:"interaction"},"Something is wrong");var o=c&&c[a]&&c[a].page||0,s=c&&c[a]&&c[a].hits||[];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{value:n,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},r.a.createElement("h1",null,"Search")),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{list:s,onDismiss:this.onDismiss}),r.a.createElement("div",null,r.a.createElement(T,{className:"button-inline btn-bott",onClick:function(){return e.fetchSearchTopStories(a,o+1)}},"More histories"))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.c1cf4f65.chunk.js.map