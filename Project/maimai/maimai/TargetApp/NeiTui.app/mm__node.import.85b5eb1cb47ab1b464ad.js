webpackJsonp([295],{963:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(1),f=r(i),p=o(981),d=r(p),m=o(983),b=(r(m),o(17)),_=r(b),y=o(46),h=r(y),g=o(15),v=r(g),E=(o(276),o(76),s=l=function(e){function t(){var e,o,r,c;n(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return o=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.gotoDownload=_.default.debounce(function(){fetch("https://ping.mm.taou.com/maimai/outside_report?"+v.default.stringify({action:"success_button"}),{credentials:"include",mode:"cors"}).then(function(e){}).catch(),setTimeout(function(){(0,h.default)("https://maimai.cn/dl","","fetch")})},500),c=o,a(r,c)}return c(t,e),u(t,[{key:"render",value:function(){var e=this;this.props.share;return f.default.createElement("div",{style:{maxWidth:750,margin:"0 auto"}},f.default.createElement(d.default,{title:"脉脉 - 测测我的人脉报告"}),f.default.createElement("div",{className:"ors_background"},f.default.createElement("div",{className:"ors_wrap"},f.default.createElement("img",{className:"ors_logo",src:"/static/images/ors_logo.png",alt:""}),f.default.createElement("img",{className:"ors_report",src:"/static/images/ors_report.png",alt:""}),f.default.createElement("p",{className:"ors_title1"},"已免费获取报告"),f.default.createElement("p",{className:"ors_title2"},"现在下载脉脉App即可查看"),f.default.createElement("p",{className:"ors_tip"},"24小时内有效"),f.default.createElement("a",{className:"ors_button",onClick:function(){return e.gotoDownload()}},"立即下载并查看"),f.default.createElement("div",{className:"ors_bottom"}))))}}]),t}(f.default.Component),l.contextTypes={req:f.default.PropTypes.object,fconf:f.default.PropTypes.object,auth_info:f.default.PropTypes.object,wx_sdk:f.default.PropTypes.object},s);E.isHideHeader=function(e,t){return!0},t.default=e.exports=E}});