webpackJsonp([255],{805:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=n(1),s=a(p),d=n(981),m=a(d),v=n(272),b=a(v),y=n(983),h=a(y),_=n(76),w=a(_),g=n(47);t.default=e.exports=(u=l=function(e){function t(){var e,n,a,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.ok=function(){var e=g.findDOMNode(a.refs.inputEmail).value.replace(/\uff20/,"@");return null==e||""==e||0==e.length()?void(0,w.default)("邮箱不能为空"):checkValue(e)?void(window.MaiMai_Native.close_native_with_data&&window.MaiMai_Native.close_native_with_data("",!0,e)):void(0,w.default)("邮箱格式不正确")},a.checkValue=function(e){return/^(?:[a-z0-9]+[\w.-]*)*[a-z0-9]@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)$/i.test(e)},i=n,r(a,i)}return i(t,e),f(t,[{key:"componentDidMount",value:function(){window.ok=this.ok}},{key:"componentWillUnmount",value:function(){}},{key:"renderAppMessage",value:function(){var e=c({},b.default);return e.top_right_item={title:"确定",callback:"ok()"},s.default.createElement(h.default,{msg_to_app:e})}},{key:"render",value:function(){return s.default.createElement("div",null,this.renderAppMessage(),s.default.createElement(m.default,{title:"编辑邮箱"}),s.default.createElement("div",{className:"borderTop"},s.default.createElement("div",{className:"pubTopicItem borderBottom"},s.default.createElement("input",{placeholder:"填写常用邮箱",valueLink:"fafaf",ref:"inputEmail"}))),s.default.createElement("div",{className:"panel-heading"},s.default.createElement("span",{id:"tips",className:"text-muted"},"问答")))}}]),t}(s.default.Component),l.contextTypes={auth_info:s.default.PropTypes.object,fconf:s.default.PropTypes.object,req:s.default.PropTypes.object},u)}});