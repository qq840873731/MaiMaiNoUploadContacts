webpackJsonp([172],{980:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,s,o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),u=n(m),f=a(981),d=n(f),p=a(50),_=(n(p),a(75)),g=n(_),h=a(115);t.default=e.exports=(s=c=function(e){function t(){var e,a,n,i;r(this,t);for(var c=arguments.length,s=Array(c),o=0;o<c;o++)s[o]=arguments[o];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.renderNameTags=function(){var e=n.props,t=e.user_name,a=e.data;return u.default.createElement("div",{className:"tgame_m_info_wrap3"},u.default.createElement("div",{className:"tgame_m_name"},t),u.default.createElement("div",{className:"tgame_m_tags_wrap"},u.default.createElement("div",{className:"d-t w-100 h-100"},u.default.createElement("div",{className:"d-t-c media-middle"},a.tags.map(function(e,t){return u.default.createElement("div",{key:"tag_name"+t,className:"tgame_m_tag_name"},e)})))))},n.renderTagTips=function(){var e=n.props,t=e.friends_cnt,a=e.data,r=[];if(a.hint1&&a.hint1.length>=2){var l=void 0;l="province"==a.hint1[0]?"居住地":"mobile"==a.hint1[0]?"手机尾号":"age"==a.hint1[0]?"年龄":"",r.push(u.default.createElement("div",{key:"hint1",className:"font-14 lineClamp1 m-t-10"},u.default.createElement("span",{className:"tgame_arrow m-r-5"}),l+a.hint1[1]))}if(a.hint2&&a.hint2.length>=2){var i=void 0;i="ht_province"==a.hint1[0]?"家乡":"",r.push(u.default.createElement("div",{key:"hint2",className:"font-14 lineClamp1 m-t-10"},u.default.createElement("span",{className:"tgame_arrow m-r-5"}),i+a.hint2[1]))}return u.default.createElement("div",{className:"tgame_m_tips_wrap"},u.default.createElement("div",{className:"media-left p-r"},u.default.createElement("div",{className:"tgame_m_man"})),u.default.createElement("div",{className:"media-body"},u.default.createElement("div",{className:"font-16 lineClamp2"},"以上评价来自",t,t>99?"+":"","位神秘好友,其中一位",2==a.gender?"女":"男","性好友信息:"),r))},n.toTagGame=function(){fetch("https://ping.mm.taou.com/maimai/tag_game/clickmessagebtn").then(g.default.parse_online_json).catch(function(e){}),(0,h.launch_webview)("regfr=tag_game_message_btn",!1)},i=a,l(n,i)}return i(t,e),o(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(d.default,{title:"找出神秘好友"}),u.default.createElement("div",{className:"tgame_share_bg"}),u.default.createElement("div",{className:"tgame_message_wrap"},this.renderNameTags(),this.renderTagTips(),u.default.createElement("div",{className:"tgame_share_btn",onClick:this.toTagGame},u.default.createElement("div",{className:"font-0"},u.default.createElement("img",{className:"w-100",src:"/static/images/tag_game_share_border.png"})),u.default.createElement("div",{className:"tgame_share_btn_text"},"找出神秘好友")),u.default.createElement("div",{className:"tgame_chooose_tips tgame_tips_opacity"},"下载脉脉，获取更多神秘好友信息")))}}]),t}(u.default.Component),c.contextTypes={auth_info:u.default.PropTypes.object,fconf:u.default.PropTypes.object,req:u.default.PropTypes.object,env:u.default.PropTypes.object},s)}});