webpackJsonp([293],{947:function(e,t,a){"use strict";(function(r){function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d,m,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},f=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),u=a(1),_=n(u),v=a(981),p=n(v),h=a(15),g=n(h),E=a(76),N=n(E),y=a(114),b=n(y),w=a(274),x=n(w),k=a(46),C=n(k),T=a(78),O=n(T),j=a(75),F=n(j),S=a(167);t.default=e.exports=(m=d=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.gotoDetail=function(e){e.id?(0,C.default)("/contact/detail/"+e.id+"?from=TestForRelation","人脉详情","fetch"):(0,O.default)(e.encode_mmid||e.mmid||e.id,a.context)},a.goTest=function(e){var t=a.props,n=t.cursor,s=t.leftCount,l=a.context.auth_info,i={name:r(e.target).attr("name"),avatar:r(e.target).data("avatar"),id:r(e.target).attr("id")};if(s<1)return void(0,N.default)("今日测试次数已用完，明日再继续吧~");window.history.pushState("test",""),n.select("step").set(2),n.select("targetInfo").set(i);var c=0,d=setInterval(function(){c++,2==n.select("step").get()?c>3&&n.select("path").get()&&(clearInterval(d),window.history.pushState("show",""),n.select("step").set(3)):clearInterval(d)},1e3),m="/sdk/activity/test_relation?"+g.default.stringify(o({id:r(e.target).attr("id"),type:r(e.target).attr("type")},l));fetch(m,{credentials:"same-origin"}).then(F.default.parse_online_json).then(function(e){n.select("relation").set(e.relation),n.select("path").set(e.path),n.select("num").set(e.num),n.select("leftCount").set(e.left_count),a.setState({at_contacts:e.at_contacts}),a.setAtName()}).catch(function(e){F.default.toast_error_handler(e)})},a.share=function(){var e=a.props,t=e.myCard,r=e.path,n=e.targetInfo,s=e.num,l=e.cursor,i=(e.leftCount,a.state),c=i.at_contacts,d=i.atFriend,m=a.context.auth_info,f="/sdk/activity/share_test_res?"+g.default.stringify(o({},m)),u=d.split(" @"),_={};u.map(function(e){e&&(_[e]=c[e])});var v={path:JSON.stringify(r),myCard:g.default.stringify(t),targetInfo:g.default.stringify(n),at_contacts:JSON.stringify(_),num:s,atFriend:d},p=fetch(f,{credentials:"same-origin",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:g.default.stringify(v)}).then(F.default.parse_online_json).then(function(e){(0,N.default)("分享成功，获得3次测试机会。",1e3),window.history.pushState("init",""),l.select("step").set(1),l.select("leftCount").set(l.select("leftCount").get()+3)}).catch(function(e){F.default.toast_error_handler(e)});(0,b.default)("分享中...",p)},a.atFriendsCallback=function(e){var t=a.state.at_contacts,r=JSON.parse(e),n=r.username,l=r.usermmid;t?t[n]=[l]:s({},n,[l]);a.setState({at_contacts:t}),a.setAtName(n)},a.getFriends=function(e){e.stopPropagation();var t=r(e.target).val();a.state.atFriend+"@"==t?window.MaiMai_Native.native_at_friend&&window.MaiMai_Native.native_at_friend("atFriendsCallback"):a.setState({atFriend:t})},a.setAtName=function(e){var t="";if(e)t=a.state.atFriend+" @"+e;else for(var r in a.state.at_contacts)t+=" @"+r;a.setState({atFriend:t})},a.state={start:0},a}return c(t,e),f(t,[{key:"componentDidMount",value:function(){x.default.setMenuBarStyle({banner_trans:!0,hideTitle:!0}),window.atFriendsCallback=this.atFriendsCallback,window.history.pushState("init",""),window.history.state||window.location.replace(window.location.href);var e=this,t=this.props.cursor;window.addEventListener("popstate",function(){t.select("leftCount").get()<1&&3==t.select("step").get()?(0,S.showModalForConfirm)({title:"您今天的测试机会已用完，分享可获3次测试机会。",ok_text:"确认分享",cancel_text:"残忍拒绝",ok:function(){e.share()}.bind(e),cancel:function(){window.MaiMai_Native.close_native("",!0)}}):1!=t.select("step").get()?(t.select("step").set(1),window.history.pushState("init","")):window.MaiMai_Native.close_native("",!0)})}},{key:"componentWillUnmount",value:function(){window.atFriendsCallback=null}},{key:"renderTestOne",value:function(){var e=this,t=this.props,a=t.renderDatas,r=t.rank,n=t.testCount,s=this.state.start,l=6*s,i=6*(s+1);return _.default.createElement("div",null,_.default.createElement("div",{className:"w-100 p-r-25 p-l-34 m-b-25"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_one_top.png",className:"mx-w-100"})),_.default.createElement("div",{className:"p-x m-b-25 text-black-0"},"已有",_.default.createElement("span",{className:"text-white-fff"},n),"人完成测试"),_.default.createElement("div",{className:"p-x clearfix test_one_warp"},r.map(function(t,r){if(r>=l&&r<i){var n=a[t];return _.default.createElement("div",{className:"fl m-b-50 test_one_com "+(r%3==2?"m-r-0":""),key:t},_.default.createElement("div",null,_.default.createElement("img",{src:n.avatar,className:"avatar-56 relation_avatar"})),_.default.createElement("div",{className:"font-16 text-black-3"},n.name),_.default.createElement("div",{className:"m-b-10"},_.default.createElement("span",{className:"text-gray-7d font-12"},n.position)),_.default.createElement("a",{href:"javascript:;",className:"test_ont_btn",onClick:e.goTest,id:t,type:n.type,"data-avatar":n.avatar,name:n.name}))}})),_.default.createElement("div",{className:"text-center test_one_change"},_.default.createElement("span",{className:"text-white-fff font-15",onClick:function(){e.setState({start:e.state.start+1==10?0:e.state.start+1})}},"换一换")))}},{key:"renderTestWait",value:function(){var e=this.props,t=e.myCard,a=e.targetInfo;return _.default.createElement("div",null,_.default.createElement("div",{className:"test_two_top"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_two_top.png",className:"mx-w-100"})),_.default.createElement("div",{className:"media test_two_body"},_.default.createElement("div",{className:"media-left p-t-154 text-center test_two_me"},_.default.createElement("div",{className:"m-b test_avatar_bg"},_.default.createElement("img",{src:t.avatar,className:"avatar-50 b-r-c"}),_.default.createElement("p",{className:"font-16 text-white-fff  m-t-10"},"我"))),_.default.createElement("div",{className:"media-body test_two_sign"}),_.default.createElement("div",{className:"media-right text-center"},_.default.createElement("div",{className:"m-b test_avatar_bg w-75"},_.default.createElement("img",{src:a.avatar,className:"avatar-75 b-r-c"}),_.default.createElement("p",{className:"font-16 text-white-fff  m-t-10"},a.name)))))}},{key:"rendershare",value:function(){var e=this.state.atFriend,t=this.props,a=t.targetInfo,r=t.leftCount;this.context.auth_info.u;return r<1&&(r=0),_.default.createElement("div",{className:"test_share"},_.default.createElement("div",{className:"text-white-fff m-b-10 text-center hide"},"看看朋友认识哪些大咖？邀请他们也来玩!"),_.default.createElement("div",{className:"shart_fridens p-x-10 hide"},_.default.createElement("input",{type:"text",placeholder:"@你的脉脉好友",name:"friends",onChange:this.getFriends,value:e})),_.default.createElement("div",{className:"test_share_btn"},_.default.createElement("a",{href:"javascript:;",onClick:this.share},"分享我与",a.name,"的人脉")),_.default.createElement("div",{className:"test_chance text-white-fff text-center"},"还可再测",r,"次，分享再多3次机会"))}},{key:"renderTestNoRes",value:function(){var e=this.props,t=e.myCard,a=e.targetInfo;return _.default.createElement("div",null,_.default.createElement("div",{className:"test_no_res_top"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_no_res_top.png",className:"mx-w-100"})),_.default.createElement("div",{className:"media test_no_res_body"},_.default.createElement("div",{className:"media-left text-center no_res_left p-r-0"},_.default.createElement("div",{className:"test_avatar_bg m-b"},_.default.createElement("img",{src:t.avatar,className:"avatar-50 b-r-c"}),_.default.createElement("p",{className:"font-16 text-white-fff m-t-10"},"我"))),_.default.createElement("div",{className:"media-body test_heart"},_.default.createElement("i",{className:"no_res_left_line"}),_.default.createElement("div",{className:"heart_break"}),_.default.createElement("i",{className:"no_res_right_line"})),_.default.createElement("div",{className:"media-right text-center p-l-0"},_.default.createElement("div",{className:"test_avatar_bg m-b w-75"},_.default.createElement("img",{src:a.avatar,className:"avatar-75 b-r-c "}),_.default.createElement("p",{className:"font-16 text-white-fff m-t-10"},a.name)))),this.rendershare())}},{key:"renderTestResDirect",value:function(){var e=this.props,t=e.myCard,a=e.targetInfo,r=e.num;return _.default.createElement("div",null,_.default.createElement("div",{className:"text-center test_direct_header"},_.default.createElement("div",{className:"test_res_top"},_.default.createElement("div",{className:"test_res_top_one"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_res_one.png",className:"mx-w-100"})),_.default.createElement("div",{className:"clearfix test_re_img"},_.default.createElement("div",{className:"fl test_res_top_two"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_res_two.png",className:"mx-w-100"})),_.default.createElement("div",{className:"fl test_num J_num"},r),_.default.createElement("div",{className:"fl test_res_top_three"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_res_three.png",className:"mx-w-100"})))),_.default.createElement("div",{className:"text_shodow"},"竟然认识",a.name,","),_.default.createElement("div",{className:"text_shodow"},"人脉王说的就是你吧")),_.default.createElement("div",{className:"media test_direct_body"},_.default.createElement("div",{className:"media-left text-center p-r-0"},_.default.createElement("div",{className:"m-b test_avatar_bg"},_.default.createElement("img",{src:t.avatar,className:"avatar-75 b-r-c bg_color_f"}),_.default.createElement("p",{className:"font-16 text-white-fff m-t-10"},"我"))),_.default.createElement("div",{className:"media-body test_direct_sign p-t-20"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_direct.png",className:"mx-w-100"})),_.default.createElement("div",{className:"media-right text-center p-l-0 "},_.default.createElement("div",{className:"m-b test_avatar_bg w-75"},_.default.createElement("img",{src:a.avatar,className:"avatar-75 b-r-c bg_color_f"}),_.default.createElement("p",{className:"font-16 text-white-fff m-t-10"},a.name)))),this.rendershare())}},{key:"renderTestResIndirect",value:function(){var e=this,t={1:["indirect_top0"],2:["indirect_top1","indirect_top2"],3:["indirect_top3","indirect_top4","indirect_top5"]},a={1:["indirect_middle0"],2:["indirect_middle1","indirect_middle2"],3:["indirect_middle3","indirect_middle4","indirect_middle5"]},r={1:["indirect_bottom0"],2:["indirect_bottom1","indirect_bottom2"],3:["indirect_bottom3","indirect_bottom4","indirect_bottom5"]},n=this.props,s=n.myCard,l=n.path,i=n.targetInfo,c=n.num;if(l&&1==l.length)var d=l[0];else if(l&&2==l.length)var m=l&&l[0],o=l&&l[1];else var m=l&&l[0],d=l&&l[1],o=l&&l[2];return _.default.createElement("div",null,_.default.createElement("div",{className:"test_indirect_header"},_.default.createElement("div",{className:"test_indirect_top_warp"},_.default.createElement("div",{className:"test_res_top_one"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_res_one.png",className:"mx-w-100"})),_.default.createElement("div",{className:"clearfix test_re_img"},_.default.createElement("div",{className:"fl test_res_top_two"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_res_two.png",className:"mx-w-100"})),_.default.createElement("div",{className:"fl test_num J_num"},c),_.default.createElement("div",{className:"fl test_res_top_three"},_.default.createElement("img",{src:"/static/images/activity/activity_relation/test_res_three.png",className:"mx-w-100"}))))),_.default.createElement("div",{className:"test_indirect_body h-100 p-relative"},_.default.createElement("div",{className:"text-center test_indirect_left"},_.default.createElement("div",{className:"test_avatar_bg"},_.default.createElement("img",{src:s.avatar,className:"avatar-50 b-r-c bg_color_f"}),_.default.createElement("p",{className:"font-16 text-white-fff m-t-5"},"我"))),m&&_.default.createElement("div",{className:"test_indirect_top"},m.map(function(a,r){return _.default.createElement("div",{className:"test_indirect_top_item "+t[m.length][r],key:r},_.default.createElement("div",{className:"text-center mx-w-50",onClick:function(){return e.gotoDetail(a)}},_.default.createElement("img",{src:a.avatar,className:"avatar-40 b-r-c bg_color_f"}),_.default.createElement("p",{className:"font-13 text-white-fff m-t-2 h-25"},a.card?a.card.name:a.name)))})),d&&_.default.createElement("div",{className:"test_indirect_middle"},d.map(function(t,r){return _.default.createElement("div",{className:"test_indirect_middle_item "+a[d.length][r],key:r},_.default.createElement("div",{className:"mx-w-50 text-center",onClick:function(){return e.gotoDetail(t)}},_.default.createElement("img",{src:t.avatar,className:"avatar-40 b-r-c bg_color_f"}),_.default.createElement("p",{className:"font-13 text-white-fff m-t-2 h-25"},t.card?t.card.name:t.name)))})),o&&_.default.createElement("div",{className:"test_indirect_bottom"},o.map(function(t,a){return _.default.createElement("div",{className:"test_indirect_bottom_item "+r[o.length][a],key:a},_.default.createElement("div",{className:"mx-w-50 text-center",onClick:function(){return e.gotoDetail(t)}},_.default.createElement("img",{src:t.avatar,className:"avatar-40 b-r-c bg_color_f"}),_.default.createElement("p",{className:"font-13 text-white-fff m-t-2 h-25"},t.card?t.card.name:t.name)))})),_.default.createElement("div",{className:"fl text-center test_indirect_right"},_.default.createElement("div",{className:"test_avatar_bg w-75"},_.default.createElement("img",{src:i.avatar,className:"avatar-75 b-r-c "}),_.default.createElement("p",{className:"font-16 text-white-fff m-t-5"},i.name)))),this.rendershare())}},{key:"render",value:function(){var e=this.props,t=e.step,a=e.relation;return _.default.createElement("div",{className:"primary-gradient-bg test_relation"},_.default.createElement(p.default,{title:"职场测试"}),1==t&&this.renderTestOne(),2==t&&this.renderTestWait(),3==t&&!a&&this.renderTestNoRes(),3==t&&1==a&&this.renderTestResDirect(),3==t&&2==a&&this.renderTestResIndirect())}}]),t}(_.default.Component),d.contextTypes={auth_info:_.default.PropTypes.object,req:_.default.PropTypes.object,fconf:_.default.PropTypes.object},m)}).call(t,a(280))}});