webpackJsonp([250],{754:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,l,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),s=o(f),p=n(75),d=n(981),y=o(d),h=n(15),m=o(h),b=n(46),_=(o(b),n(165)),g=o(_),v=n(996),j=o(v),P=n(270),E=n(982);n(63);t.default=e.exports=(l=c=function(e){function t(){var e,n,o,u;r(this,t);for(var c=arguments.length,l=Array(c),i=0;i<c;i++)l[i]=arguments[i];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.loadMore=function(){var e=o.context,t=(e.fconf,e.req),n=(e.auth_info,o.props.cursor),r=o.refs.loader;r&&r.bindRequest(function(){var e="/contact/home?"+m.default.stringify({count:20,page:o.nextPage||1,type:t.query.type,home:t.query.home,me:t.query.me,dist:t.query.dist,jsononly:1});return fetch(e,{credentials:"same-origin"}).then(p.parse_online_json).then(function(e){n.select("contacts").concat(e.data.contacts),n.select("more").set(e.data.more),o.nextPage++})})},u=n,a(o,u)}return u(t,e),i(t,[{key:"getChildContext",value:function(){return{from:"dist2_home"}}},{key:"componentDidMount",value:function(){this.nextPage=1}},{key:"render",value:function(){var e=this.props,t=e.contacts,n=e.cursor,o=e.more,r=this.context,a=r.req,u=r.auth_info,c=a.query.title||"更多人脉";return s.default.createElement("div",null,s.default.createElement(y.default,{title:c}),t.length>0||s.default.createElement(j.default,{tips:"暂时没有相关人脉",onClick:function(){}}),s.default.createElement(E,{loadMore:this.loadMore,hasMore:o>0&&u.u>0,loader:s.default.createElement(g.default,{ref:"loader",reload:this.loadMore,cursor:n.select("loading_status")})},s.default.createElement("div",{className:"panel panel-default"},s.default.createElement("ul",{className:"list-group"},t.map(function(e){return s.default.createElement(P,{key:e.contact.mmid,contact:e.contact})})))))}}]),t}(s.default.Component),c.contextTypes={req:s.default.PropTypes.object,fconf:s.default.PropTypes.object,auth_info:s.default.PropTypes.object},c.childContextTypes={from:s.default.PropTypes.string},l)}});