webpackJsonp([264],{864:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(15),f=r(p),d=n(75),y=n(981),b=r(y),h=n(46),m=(r(h),n(165)),v=r(m),g=n(1),j=n(273),_=(n(1045),n(50)),O=n(982);t.default=e.exports=(c=i=function(e){function t(){var e,n,r,l;o(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.loadMore=function(){var e=r.props.cursor;r.refs.loader.bindRequest(function(){return t.loadData(r.context,r.nextPage).then(function(t){r.nextPage++;var n=t.data;e.select("jobs").concat(n.jobs),e.select("remain").set(n.remain)})})},l=n,a(r,l)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.nextPage=1}},{key:"render",value:function(){var e=this,t=this.props.cursor;return console.log(this.props.jobs),g.createElement("div",null,g.createElement(b.default,{title:"职位候选人"}),g.createElement(O,{loadMore:this.loadMore,hasMore:this.props.remain>0,loader:g.createElement(v.default,{ref:"loader",reload:this.loadMore,cursor:t.select("loading_status")})},g.createElement("div",{className:"panel panel-default"},g.createElement("ul",{className:"list-group"},this.props.jobs.map(function(t){return g.createElement(j,{key:t.id,avatar:t.clogo,line1:t.position,line3:t.txt,dist:0,clickHandler:_.bind(e,t.target_url,t.target_title)})})))))}}],[{key:"loadData",value:function(e,t){var n=e.req,r=n.query,o=n.pathname+"?"+f.default.stringify(s({page:t,jsononly:1},r));return fetch(o,{credentials:"same-origin"}).then(d.parse_online_json)}}]),t}(g.Component),i.contextTypes={auth_info:g.PropTypes.object,req:g.PropTypes.object,fconf:g.PropTypes.object},c)}});