webpackJsonp([237],{753:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,u,l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=r(1),f=o(i),p=r(981),d=o(p),y=r(15),h=o(y),b=r(270),_=o(b),m=r(165),v=o(m),j=r(46),w=(o(j),r(78)),O=(o(w),r(75)),g=r(281),E=(o(g),r(982));t.default=e.exports=(u=s=function(e){function t(){var e,r,o,c;n(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.loadMore=function(){var e=o.props.cursor,t=o.refs.loader;t&&t.bindRequest(function(){return fetch("/contact/inapp_dist1_list?"+h.default.stringify({start:o.props.start||0,jsononly:1}),{credentials:"same-origin"}).then(O.parse_online_json).then(function(t){e.select("contacts").concat(t.data.contacts||[]),e.select("more").set(t.data.more),e.select("start").set(t.data.start)})})},c=r,a(o,c)}return c(t,e),l(t,[{key:"render",value:function(){var e=this.props.more||0;return f.default.createElement("div",{className:"add_friend_requested"},f.default.createElement(d.default,{title:"我的好友"}),f.default.createElement(E,{loadMore:this.loadMore,hasMore:e>0,loader:f.default.createElement(v.default,{ref:"loader",reload:this.loadMore,cursor:this.props.cursor.select("loading_status")})},this.props.contacts.map(function(e){return f.default.createElement(_.default,{key:e.id||e.mmid,contact:e})})))}}]),t}(f.default.Component),s.contextTypes={auth_info:f.default.PropTypes.object,req:f.default.PropTypes.object},u)}});