webpackJsonp([187],{741:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(1),s=o(p),v=(n(75),n(981)),y=o(v),d=n(15),h=(o(d),n(46)),_=(o(h),n(165)),b=(o(_),n(996)),m=(o(b),n(283),n(1085)),g=(o(m),n(1021)),w=(o(g),n(1007)),O=(o(w),n(1020)),j=(o(O),n(272)),x=o(j),k=n(983),q=o(k);n(270),n(982),n(63),n(990),n(1009),n(17),n(164).getCache,n(164).putCache;t.default=e.exports=(l=i=function(e){function t(){var e,n,o,u;r(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={input_value:""},o.onInputChange=function(e){o.setState({input_value:e.target.value})},o.onSave=function(){var e=o.context.req;o.refs.input_value.blur();var t=JSON.stringify({type:"input",key:e.query.key,input_value:o.state.input_value});MaiMai_Native.close_native_with_data("",!0,t)},u=n,a(o,u)}return u(t,e),f(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&(window.onSave=this.onSave)}},{key:"componentDidMount",value:function(){var e=this.context.req;e.query.val&&this.setState({input_value:e.query.val}),this.refs.input_value.focus()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=c({},x.default),n=this.context.req;return t.top_right_item={title:"保存",callback:"onSave"},s.default.createElement("div",null,s.default.createElement(q.default,{msg_to_app:t}),s.default.createElement(y.default,{title:n.query.title?n.query.title:"高级搜索"}),s.default.createElement("div",{className:"from_group"},s.default.createElement("input",{type:"text",className:"from_com",ref:"input_value",style:{width:"100%",height:"40px",marginTop:"10px",border:"1px solid #eee"},value:this.state.input_value,onChange:function(t){e.onInputChange(t)}})))}}]),t}(s.default.Component),i.contextTypes={req:s.default.PropTypes.object,fconf:s.default.PropTypes.object,auth_info:s.default.PropTypes.object},l)}});