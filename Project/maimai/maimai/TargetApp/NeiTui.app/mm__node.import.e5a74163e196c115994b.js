webpackJsonp([296],{962:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,c,_=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=a(1),d=r(o),m=a(981),u=r(m),f=a(983),p=(r(f),a(17)),g=r(p),v=a(46),b=r(v),E=(a(75),a(15)),h=r(E),y=a(76),z=r(y),N=(c=s=function(e){function t(e){i(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.viewReport=g.default.debounce(function(){a.props.share?(fetch("https://ping.mm.taou.com/maimai/outside_report?"+h.default.stringify({action:"create_report"}),{credentials:"include",mode:"cors"}).then(function(e){}).catch(),setTimeout(function(){(0,b.default)("/activity/outside_report","","fetch")},300)):(fetch("https://ping.mm.taou.com/maimai/outside_report?"+h.default.stringify({action:"share_button"}),{credentials:"include",mode:"cors"}).then(function(e){}).catch(),a.setState({grayCover:!0}))},500),a.state={grayCover:!1},a}return l(t,e),_(t,[{key:"componentWillReceiveProps",value:function(e,t){var a=this.props,r=a.data,i=a.mobile;if(!this.props.wx_sdk_inited&&e.wx_sdk_inited){var n={title:"我的朋友中有"+(r.posi_stat[0]?r.posi_stat[0][1]:13)+"位"+(r.posi_stat[0]?r.posi_stat[0][0]:"CEO")+"，"+(r.posi_stat[1]?r.posi_stat[1][1]:51)+"位"+(r.posi_stat[1]?r.posi_stat[1][0]:"高级经理")+"…你也测一下吧。",link:"https://maimai.cn/activity/outside_report_display?share=1&mobile="+i,imgUrl:"https://maimai.cn/static/images/logo.png",desc:"",success:function(){fetch("https://ping.mm.taou.com/maimai/outside_report?"+h.default.stringify({action:"share_success"}),{credentials:"include",mode:"cors"}).then(function(e){}).catch(),(0,z.default)("成功分享！"),setTimeout(function(){(0,b.default)("/activity/outside_report_success","","fetch")},500)},cancel:function(){console.log("failed!")}};t.wx_sdk.onMenuShareAppMessage(n),t.wx_sdk.onMenuShareTimeline(n),t.wx_sdk.onMenuShareQQ(n),t.wx_sdk.onMenuShareQZone(n)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,r=t.share;return d.default.createElement("div",{style:{maxWidth:750,margin:"0 auto"}},d.default.createElement(u.default,{title:"脉脉 - 测测我的人脉报告"}),this.state.grayCover&&d.default.createElement("div",{className:"grayCover",onClick:function(){e.setState({grayCover:!1})}},d.default.createElement("div",{className:"shareGuide"},d.default.createElement("img",{alt:"在浏览器中打开",src:"/static/images/share_guide.png"}))),d.default.createElement("div",{className:"regzl_c_friend_bg"},d.default.createElement("div",{className:"regzl_b_friend_text regzl_c_friend_text_color"},d.default.createElement("div",{className:"regzl_b_friend_text_line1"},"—— 人脉概况预览 ——"),d.default.createElement("div",{className:"regzl_b_friend_text_line2"},"通过好友可连接",d.default.createElement("span",{style:{fontSize:"20px"}},a.d2cnt),"个职业人脉")),d.default.createElement("div",{className:"regzl_b_friend_list clearfix"},a.users.slice(0,3).map(function(e,t){return d.default.createElement("div",{className:"regzl_b_friend_list_item",key:t},d.default.createElement("div",{className:"regzl_b_friend_item_avatar"},d.default.createElement("img",{src:e.avatar})),d.default.createElement("div",{className:"regzl_b_friend_item_name"},e.name),d.default.createElement("div",{className:"regzl_b_friend_item_position regzl_c_friend_item_position_color"},e.position))}),d.default.createElement("div",{className:"regzl_b_friend_list_item"},d.default.createElement("div",{className:"regzl_b_friend_item_avatar"},d.default.createElement("div",{className:"regzl_b_friend_item_img_wrap"},d.default.createElement("img",{src:a.users[3].avatar}),d.default.createElement("div",{className:"regzl_b_friend_item_avatar_cover"}),d.default.createElement("div",{className:"regzl_b_friend_question_mark1"},"?"))),d.default.createElement("div",{className:"regzl_b_friend_item_name"},"匿名好友")),a.users.slice(4,6).map(function(e,t){return d.default.createElement("div",{className:"regzl_b_friend_list_item",key:t},d.default.createElement("div",{className:"regzl_b_friend_item_avatar"},d.default.createElement("img",{src:e.avatar})),d.default.createElement("div",{className:"regzl_b_friend_item_name"},e.name),d.default.createElement("div",{className:"regzl_b_friend_item_position regzl_c_friend_item_position_color"},e.position))})),d.default.createElement("div",{className:"regzl_b_friend_img"},d.default.createElement("img",{src:"/static/images/regzl_c_map_img.png"}),d.default.createElement("div",{className:"regzl_b_friend_img_title"},"向你共享了精英同行人脉圈成员"),d.default.createElement("div",{className:"regzl_b_friend_me_wrap"},d.default.createElement("div",{className:"regzl_b_friend_me"},d.default.createElement("div",{className:"regzl_b_friend_sum_text"},"已有",d.default.createElement("br",null),d.default.createElement("span",{className:"regzl_c_friend_number"},a.tcnt),"位",d.default.createElement("br",null),"加入"))),a.posi_stat.slice(0,3).map(function(e,t){return d.default.createElement("div",{key:t},d.default.createElement("div",{className:"regzl_b_friend_type_num"+(t+1)},d.default.createElement("span",{className:"regzl_b_friend_type_number"},e[1]),"位"),d.default.createElement("div",{className:"regzl_b_friend_type_text"+(t+1)+" width_ellipsis"},e[0]))})),d.default.createElement("div",{className:"regzl_c_time_tips"},d.default.createElement("span",{className:"regzl_c_time_line"},"报告价值￥",a.price,"元")),d.default.createElement("div",{className:"regzl_b_btn regzl_c_btn_w",onClick:function(){e.viewReport()}},r?"免费生成我的人脉报告":"分享并免费解锁完整报告",d.default.createElement("span",{className:"regzl_b_finger"})),d.default.createElement("div",{className:"regzl_c_license"},"24小时内有效")))}}]),t}(d.default.Component),s.contextTypes={req:d.default.PropTypes.object,fconf:d.default.PropTypes.object,auth_info:d.default.PropTypes.object,wx_sdk:d.default.PropTypes.object},c);N.isHideHeader=function(e,t){return!0},t.default=e.exports=N}});