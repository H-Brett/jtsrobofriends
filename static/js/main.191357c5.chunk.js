(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=n(9),i=n(2),l={searchField:""},u={isPending:!1,robots:[],error:""},h=n(18),d=n(19),b=(n(29),n(30),n(6)),E=n(7),m=n(10),p=n(8),g=n(11),f=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"card tc dib bg-gray ma2 br3 grow shadow-5 bw2"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?150x150"),alt:""}),a.a.createElement("div",null,a.a.createElement("h4",null,n),a.a.createElement("p",null,r)))},O=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,t){return a.a.createElement(f,{key:e.id,id:e.id,name:e.name,email:e.email})}))},v=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2 tc"},a.a.createElement("input",{className:"tc pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},R=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children)},y=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},n}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops! Something went wrong"):this.props.children}}]),t}(r.Component),S=(n(31),function(e){function t(){return Object(b.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(v,{searchChange:n}),a.a.createElement(R,null,a.a.createElement(y,null,a.a.createElement(O,{robots:c}))))}}]),t}(r.Component)),w=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=Object(h.createLogger)(),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(C,Object(i.a)(d.a,j));c.a.render(a.a.createElement(s.a,{store:_},a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.191357c5.chunk.js.map