webpackJsonp([168],{856:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,o,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(1),f=a(d),m=n(981),_=a(m),p=n(75),v=a(p),b=n(15),h=a(b),w=n(167),g=n(76);t.default=e.exports=(o=l=function(e){function t(){var e,n,a,c;i(this,t);for(var l=arguments.length,o=Array(l),u=0;u<l;u++)o[u]=arguments[u];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.startCheckBindWx=function(){a.didUnmount||(a.timer=setTimeout(function(){return a.checkBindWX()},4e3))},a.checkBindWX=function(){var e=a.context,t=e.auth_info,n=e.fconf,i=n.online_url+"/user/v4/wxtip?"+h.default.stringify(s({},t));fetch(i,{credentials:"same-origin"}).then(v.default.parse_online_json).then(function(e){a.props.cursor.select("qr_info","bind").set(1==e.bind),e.bind||a.startCheckBindWx()}).catch(function(){a.startCheckBindWx()})},a.saveImg=function(){window.MaiMai_Native.native_save_image_and_open_wx&&(window.MaiMai_Native.native_save_image_and_open_wx(a.props.qr_img,'打开微信扫一扫，点右上角"相册"选图扫码'),clearTimeout(a.timer),a.startCheckBindWx())},a.unbind=function(){var e=a.context.auth_info;(0,w.showModalForConfirm)({title:"解除绑定可能导致错过重要的职场机会和人脉动态",ok_text:"解绑",ok:function(){fetch("/sdk/user/unbind_wx?"+h.default.stringify(s({},e)),{credentials:"same-origin"}).then(v.default.parse_online_json).then(function(e){g("解绑成功"),window.MaiMai_Native.close_native("",!0)}).catch(v.default.toast_error_handler)},cancel_text:"以后再说"})},c=n,r(a,c)}return c(t,e),u(t,[{key:"componentWillUnmount",value:function(){this.didUnmount=!0,clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.qr_info,n=e.wxtips,a=e.qr_img;return f.default.createElement("div",null,f.default.createElement(_.default,{title:"开通服务号"}),!t.bind&&f.default.createElement("div",{className:"p-x-20"},f.default.createElement("div",{className:"bind_service_banner"},f.default.createElement("img",{className:"mw-100",src:n.banner})),f.default.createElement("div",{className:"bind_service_step_wrap"},f.default.createElement("div",{className:"bing_service_step_bg"},f.default.createElement("div",{className:"d-t w-100"},f.default.createElement("div",{className:"d-t-c media-middle",style:{height:48}},"开通步骤"))),f.default.createElement("div",null,"1 保存二维码→ 2 用微信",f.default.createElement("span",{className:"text-red-ee6723"},"从相册选图扫码"),"→ 3 关注"),f.default.createElement("div",{className:"bind_service_qrcode_wrap"},f.default.createElement("img",{className:"mw-100",src:a})),f.default.createElement("div",{className:"bind_service_save_btn",onClick:this.saveImg},"保存二维码到相册"))),t.bind&&f.default.createElement("div",{className:"p-x-20"},f.default.createElement("div",{className:"bind_service_banner"},!1,f.default.createElement("img",{className:"mw-100",src:"/static/images/bind_banner_b.png"})),f.default.createElement("div",{className:"bind_service_step_wrap m-t m-b-20"},f.default.createElement("div",{className:"font-0 text-center"},f.default.createElement("img",{style:{width:200},src:"/static/images/unbind_wx.png"})),f.default.createElement("div",{className:"text-center text-blue-33B0FF m-t m-b-20"},f.default.createElement("div",{className:"font-22"},"已绑定成功"),"重要的职场机会将通过微信服务号通知"),f.default.createElement("div",{className:"p-t text-muted",onClick:this.unbind},"解除绑定"))))}}]),t}(f.default.Component),l.contextTypes={auth_info:f.default.PropTypes.object,fconf:f.default.PropTypes.object},o)}});