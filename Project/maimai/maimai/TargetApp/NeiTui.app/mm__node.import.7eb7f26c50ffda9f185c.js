webpackJsonp([306],{938:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o,l,m=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),r=a(1),u=i(r),p=a(981),f=i(p),d=a(983),h=i(d),_=a(17),v=i(_);a(276),a(76);e.default=t.exports=(l=o=function(t){function e(){var t,a,i,s;c(this,e);for(var o=arguments.length,l=Array(o),m=0;m<o;m++)l[m]=arguments[m];return a=i=n(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),i.renderMoreItem=function(){var t={share_info:{title:"可怕！73%的职场人患有上班恐惧症",icon_url:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_icon.jpg",desc:""},more_items:[{title:"分享",callback:"MaiMai_Native.native_share(1)"}]};return u.default.createElement(h.default,{msg_to_app:t})},i.onShareWX=v.default.debounce(function(){window.MaiMai_Native&&window.MaiMai_Native.native_share&&window.MaiMai_Native.native_share(3)},500),s=a,n(i,s)}return s(e,t),m(e,[{key:"componentWillReceiveProps",value:function(t,e){if(!this.props.wx_sdk_inited&&t.wx_sdk_inited){var a={title:"可怕！73%的职场人患有上班恐惧症",link:window.location.href,imgUrl:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_icon.jpg",desc:"",success:function(){alert("success!")},cancel:function(){alert("failed!")}};e.wx_sdk.onMenuShareAppMessage(a),e.wx_sdk.onMenuShareTimeline(a),e.wx_sdk.onMenuShareQQ(a),e.wx_sdk.onMenuShareQZone(a)}}},{key:"render",value:function(){return u.default.createElement("div",{style:{maxWidth:750,margin:"0 auto"}},u.default.createElement(f.default,{title:"职场人厌班情绪调查——拯救丧班族 报告"}),this.renderMoreItem(),u.default.createElement("div",{className:"ap_content"},u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_01.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_02.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_03.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_04.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_05.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_06.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_07.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_08.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_09.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_10.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_11.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_12.png"})),u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_13.png"}))),this.props.inApp&&u.default.createElement("div",{className:"font-0 p-x p-y-30 ap_buttton_top"}),this.props.inApp&&u.default.createElement("div",{className:"font-0 p-x p-y-20 ap_buttton_bg",onClick:this.onShareWX},u.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_share_btn.png"})))}}]),e}(u.default.Component),o.contextTypes={req:u.default.PropTypes.object,fconf:u.default.PropTypes.object,auth_info:u.default.PropTypes.object,wx_sdk:u.default.PropTypes.object},l)}});