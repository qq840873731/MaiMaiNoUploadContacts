webpackJsonp([39],{1384:function(e,t,i){"use strict";var a=i(1),n=i(41),s=a.createClass({displayName:"ConnListItem",mixin:[n],render:function(){var e=this,t=a.createElement("span",{style:o.itemImg,className:"imacss "+this.props.imgcss});return a.createElement("div",{style:o.itemBox,onClick:function(){return e.props.onClick(e.props)}},a.createElement("div",{style:o.badgeBox},t,this.props.badge>0&&a.createElement("i",{style:o.badge},this.props.badge),!(this.props.badge>0)&&this.props.dot&&a.createElement("span",{style:o.dot})),a.createElement("div",{style:o.itemTxt},this.props.name),this.props.hotcss&&a.createElement("span",{style:o.rightIcon,className:this.props.hotcss}))}}),o={itemBox:{background:"#FFF",float:"left",width:"33.33%",boxSizing:"border-box",padding:"25px 8px 18px 8px",borderRight:"1px solid rgba(187,187,187,0.1)",borderBottom:"1px solid rgba(187,187,187,0.1)",position:"relative"},itemImg:{margin:"0 auto",display:"block",width:"35px",height:"35px",backgroundSize:"35px 35px",backgroundRepeat:"no-repeat",backgroundPosition:"center"},itemTxt:{textAlign:"center",fontSize:"14px",lineHeight:"36px",color:"#736E6A"},rightIcon:{display:"block",position:"absolute",right:"0",top:"0",width:30,height:17,backgroundSize:"30px 17px",backgroundRepeat:"no-repeat",backgroundPosition:"center"},badgeBox:{position:"relative"},badge:{position:"absolute",left:"63%",top:"-4px",WebkitBorderRadius:"8px",MozBorderRadius:"8px",color:"#ffffff",fontSize:"12px",fontStyle:"normal",padding:"0 4px",minWidth:"16px",maxHeight:"16px",lineHeight:"16px",overflow:"hidden",background:"#ff7800",textAlign:"center",display:"block"},dot:{position:"absolute",left:"65%",top:"-4px",WebkitBorderRadius:"3px",MozBorderRadius:"3px",width:"6px",height:"6px",background:"#ff7800",display:"block"}};e.exports=s},1385:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=i(1),s=a(n),o=i(50),c=(a(o),i(46)),r=(a(c),i(113),i(63)),l=a(r),d=i(168),u=(a(d),i(284)),f=a(u),_=i(116),m=a(_),h=s.default.createClass({displayName:"LiveHistory",getInitialState:function(){return{}},componentDidMount:function(){},componentWillUnmount:function(){},render:function(){var e=this,t=this.props,i=t.videos;return 1!=t.first_load||i&&0!=i.length?s.default.createElement("div",null,i&&i.map(function(t){return s.default.createElement(f.default,{component:"li",className:"list-unstyled p-x p-b-20",pressDelay:800,key:t.id,onClick:function(i){return e.liveHotClick(t)},style:{textAlign:"left"}},s.default.createElement("div",{className:"p-relative"},s.default.createElement("div",{className:"font-0 border-radius-6 text-center"},s.default.createElement("img",{className:"w-100 border-radius-6",style:{maxWidth:500},src:t.files})),s.default.createElement("div",{className:"contact_center_live_cover"}),s.default.createElement("div",{className:"contact_live_status"},t.tip),s.default.createElement("div",{className:"contact_center_live"},s.default.createElement("div",null,s.default.createElement("span",{className:"text-blue-1abbf3 font-16"},t.subcnt),s.default.createElement("span",{className:"small"},"人关注")),s.default.createElement("div",null,s.default.createElement("span",{className:"font-15 font-bold"},l.default.mark(e,t.name)),s.default.createElement("span",{className:"small"}," · ",l.default.mark(e,m.default.getCareer(t))),1==t.judge&&s.default.createElement("span",{className:"add_v_img"})),s.default.createElement("div",{className:""},t.title))))})):s.default.createElement("div",{style:{marginTop:50,height:80},className:"text-primary text-center"},"还没有热门职播哦")},liveHotClick:function(e){this.props.onClick(e)}});e.exports=h},1386:function(e,t,i){"use strict";var a=i(283);e.exports=function(e){var t,i,n=a.cst;if(n.pfmj.forEach(function(i,a){i.id==e&&(t=i)}),t){i={profession:t.name}}else i={profession:""};return i.profession}},694:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},s=i(1),o=a(s),c=i(1122),r=a(c),l=i(1384),d=(a(l),i(1027)),u=a(d),f=i(113),_=i(17),m=a(_),h=i(1385),p=a(h),v=i(75),g=a(v),w=i(50),b=a(w),x=i(46),N=a(x),k=i(164),C=i(15),y=a(C),E=i(275),M=a(E),j=i(276),I=a(j),z=(i(283).talent,i(279),i(1386)),B=i(164).getCache,T=i(164).putCache,H=o.default.createClass({displayName:"ContactCenter",mixins:[M.default],statics:{formatDist2Count:function(e){if(e)if(e<=1e3)var t="("+e+")";else var i=""+e,a=i.slice(0,1),n=m.default.reduce(m.default.range(i.length-1),function(e,t){return e+"0"},a),t=n+"+";return t}},contextTypes:{auth_info:o.default.PropTypes.object,req:o.default.PropTypes.object,fconf:o.default.PropTypes.object},getInitialState:function(){var e=this.context.auth_info,t=I.default.gte(e.version,"4.11.6");if(console.log("showLiveFlag="+t+",auth_info.version="+e.version),t)var i=[{id:"work",name:"求职招聘",hotcss:"imacss imacss-hot_invite_icon"},{id:"fast_contact",name:"极速找人",badge:0,dot:!1},{id:"live",name:"职播广场",hotcss:"imacss imacss-hot_icon"},{id:"meeting",name:"聚会活动",dot:!1},{name:"职业发展",img:"http://i9.taou.com/maimai/p/553/6703_96_3B69izKuxeOMjg",nxtnum:"18",need_v:0,name2:"我要加入职业咨询",w:500,id:3,isleaf:0},{name:"企业服务",img:"http://i9.taou.com/maimai/p/553/6705_96_4IffPfWmVbcsnQ",nxtnum:"15",need_v:0,name2:"申请成为企业服务商",w:498,id:377,isleaf:0},{name:"创业投资",img:"http://i9.taou.com/maimai/p/553/6685_96_418OGEqWGIskzg",nxtnum:"6",need_v:0,name2:"申请成为投资人",w:496,id:1,isleaf:0},{id:"friend_service",name:"好友服务"},{id:"pm_service",name:"同行服务"}];else var i=[{id:"work",name:"求职招聘",hotcss:"imacss imacss-hot_invite_icon"},{id:"fast_contact",name:"极速找人",badge:0,dot:!1},{id:"meeting",name:"聚会活动",hotcss:"imacss imacss-hot_icon"},{name:"职业发展",img:"http://i9.taou.com/maimai/p/553/6703_96_3B69izKuxeOMjg",nxtnum:"18",need_v:0,name2:"我要加入职业咨询",w:500,id:3,isleaf:0},{name:"企业服务",img:"http://i9.taou.com/maimai/p/553/6705_96_4IffPfWmVbcsnQ",nxtnum:"15",need_v:0,name2:"申请成为企业服务商",w:498,id:377,isleaf:0},{name:"创业投资",img:"http://i9.taou.com/maimai/p/553/6685_96_418OGEqWGIskzg",nxtnum:"6",need_v:0,name2:"申请成为投资人",w:496,id:1,isleaf:0},{name:"法律咨询",img:"http://i9.taou.com/maimai/p/553/6702_96_2fwxxt9Wm97vh2",nxtnum:"8",need_v:0,name2:"申请成为律师",w:489,id:11,isleaf:0},{id:"friend_service",name:"好友服务"},{id:"pm_service",name:"同行服务"}];return{user:{},items:i,is_showlive:t,tab3_live_click:1,jobs_switch_to_hr:0}},onItemClick:function(e){if("work"==e.id){var t=0;B("jobs_switch_to_hr",function(e){e&&(t=parseInt(e)),1==t?(0,b.default)("https://maimai.cn/jobs/zhaopin_index?fr=tab3","招聘"):(0,b.default)("https://maimai.cn/jobs/joblist?fr=tab3","求职")})}else"meeting"==e.id?window.MaiMai_Native.native_open_meeting_center():"talent"==e.id?(0,b.default)("https://maimai.cn/uh_search","找人才"):"fast_contact"==e.id?(0,b.default)("https://maimai.cn/search/fast_contact_index?fr=tap3","极速找人"):"friend_service"==e.id?(0,b.default)("https://maimai.cn/service/srvlist_ent?type=d1","好友服务"):"pm_service"==e.id?(0,b.default)("https://maimai.cn/service/srvlist_ent?type=pms","同行服务"):"live"==e.id?window.MaiMai_Native.native_open_live_center():0==e.isleaf?(0,b.default)("/uh_catas?cataid="+e.id,e.name):1==e.isleaf&&(0,b.default)("/uh_users?cataid="+e.id,e.name)},userInfoChanged:function(e){var t=JSON.parse(e);this.state.user.inapp_d1cnt==t.inapp_d1cnt&&this.state.user.dist2_count==t.dist2_count&&this.state.user.profession_name==z(t.profession)||this.setState({user:{inapp_d1cnt:t.inapp_d1cnt,dist2_count:t.dist2_count,profession_name:z(t.profession)}})},componentDidMount:function(){var e=this;document.body.style.background="#F2F6F7",this.lastVideoNum=0,(0,f.bindBroadcast)("User_Info_Changed",this.userInfoChanged),(0,f.bindBroadcast)("contact_center_resume",this.onResume),(0,f.bindBroadcast)("logout",this.onlogout),this.getBadge(!0),this.checkNewLiveVideo(),(0,k.getMyCardInfo)(this.userInfoChanged);var t=0;B("tab3_live_click",function(i){i&&(t=parseInt(i)),e.setState({tab3_live_click:t})});var i=this;this.is_jobs_switch_to_hr(function(e){i.setState({jobs_switch_to_hr:e})}),this.loadRecContactsInfo()},componentWillUnmount:function(){(0,f.unbindBroadcast)("User_Info_Changed",this.userInfoChanged),(0,f.unbindBroadcast)("contact_center_resume",this.onResume),(0,f.unbindBroadcast)("logout",this.onlogout)},onlogout:function(){clearTimeout(this.checkLiveNewTimer)},onResume:function(){var e=this,t=this.context,i=t.auth_info,a=t.fconf;window.MaiMai_Native.hide_dot&&window.MaiMai_Native.hide_dot("contact_center","live_new"),this.getBadge(!1);var s=a.online_url+"contact/v4/new_live?"+y.default.stringify(n({},i));fetch(s,{credentials:"same-origin"}).then(g.default.parse_online_json).then(function(t){var i=t.videos||[];e.props.cursor.select("videos").set(i)});var o=this;this.is_jobs_switch_to_hr(function(e){o.setState({jobs_switch_to_hr:e})}),this.loadRecContactsInfo(!0)},loadRecContactsInfo:function(e){var t=this,i=this.context.auth_info,a="/sdk/contact/rec_frs?"+y.default.stringify(n({page:0,batch_add:e?1:0,count:window.screen.width>320?5:3},i));fetch(a,{credentials:"same-origin"}).then(g.default.parse_online_json).then(function(e){e&&e.batch_add&&(0,N.default)("/contact/batch_add_friend_list?from=contact_center","添加好友","fetch"),e&&e.contacts&&t.props.cursor.select("rec_contacts").set(e.contacts)}).catch(function(e){})},getBadge:function(e){try{var t=this.context,i=t.auth_info,a=t.fconf,s=this.props.cursor,o=a.online_url+"talent/v3/unread_resume_count?"+y.default.stringify(n({},i));fetch(o).then(g.default.parse_online_json).then(function(e){s.select("resume_unread_cnt").set(Math.max(0,e.resume_unread_cnt)),s.select("new_visitor_count").set(Math.max(0,e.new_visitor_count)),s.select("force_show_zhaopin_index").set(e.force_show_zhaopin_index)})}catch(e){alert(e)}},startCheckNewFriends:function(){var e=this;this.setTimeout(function(){e.checkNewFriends()},6e4)},checkNewFriends:function(){var e=this,t=this.context,i=t.auth_info,a=t.fconf,s=a.online_url+"contact/v4/new_frs?"+y.default.stringify(n({cntonly:1},i));fetch(s,{credentials:"same-origin"}).then(g.default.parse_online_json).then(function(t){e.props.cursor.select("new_friends").set(t.cnt),e.startCheckNewFriends()}).catch(function(){e.startCheckNewFriends()})},startCheckNewLiveVideo:function(){var e=this;this.checkLiveNewTimer=this.setTimeout(function(){e.checkNewLiveVideo()},3e5)},checkNewLiveVideo:function(){var e=this,t=this.context,i=t.auth_info,a=t.fconf,s=a.online_url+"contact/v4/new_live?"+y.default.stringify(n({from:"checkLive"},i));fetch(s,{credentials:"same-origin"}).then(g.default.parse_online_json).then(function(t){var i=t.videos||[];e.props.cursor.select("videos").set(i);var a=t.cnt;if(a>0){if(e.lastVideoNum==a)return void e.startCheckNewLiveVideo();e.lastVideoNum=a,window.MaiMai_Native.show_dot_2?window.MaiMai_Native.show_dot_2("contact_center","","live_new"):window.MaiMai_Native.show_dot&&window.MaiMai_Native.show_dot("contact_center","live_new")}else 0!=e.lastVideoNum&&(e.lastVideoNum=0,window.MaiMai_Native.hide_dot&&window.MaiMai_Native.hide_dot("contact_center","live_new"));e.startCheckNewLiveVideo()}).catch(function(){e.startCheckNewLiveVideo()})},dist1_list:function(){(0,N.default)("/contact/friend_center?"+y.default.stringify({d1feeds:this.props.d1feeds||0,fetch_feed:1}),"我的好友","fetch"),this.props.cursor.select("d1feeds").set(0)},dist2_list:function(){var e="?count="+(this.state.user.dist2_count||0);(0,N.default)("new_dist2_list"+e,"拓展人脉","fetch")},liveHotClick:function(e){var t=this.context,i=t.fconf,a=t.auth_info,s=i.online_url+"/contact/v4/qlive_court?"+y.default.stringify(n({},a));if(fetch(s),window.MaiMai_Native&&window.MaiMai_Native.native_live_video)window.MaiMai_Native.native_live_video(e.id,a.u==e.mmid);else{var o="/article/live2?"+y.default.stringify({uid:e.mmid});(0,b.default)(o,e.title)}},is_jobs_switch_to_hr:function(e){var t=this.props.force_show_zhaopin_index,i=0;B("jobs_switch_to_hr",function(a){a?i=parseInt(a):1==t&&(T("jobs_switch_to_hr",1),i=1),e(i)})},go_list:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("job_center"==e){var i=this.props.force_show_zhaopin_index;this.is_jobs_switch_to_hr(function(e){1==e||1==i?(0,b.default)("https://maimai.cn/jobs/zhaopin_index?fr=tab3","招聘"):(0,b.default)("https://maimai.cn/jobs/joblist?fr=tab3","求职")})}else"meetings"==e?(0,b.default)("https://maimai.cn/jobs/events","活动"):"fast_contact"==e?(0,b.default)("https://maimai.cn/search/fast_contact_index?fr=tab3",t):"course"==e?(0,b.default)("https://maimai.cn/article/course?fr=tab3",t):"live"==e&&(T("tab3_live_click",1),this.setState({tab3_live_click:1}),window.MaiMai_Native.native_open_live_center(),this.lastVideoNum=0,this.props.cursor.select("new_livevideo").set(0),window.MaiMai_Native.hide_dot&&window.MaiMai_Native.hide_dot("contact_center","live_new"))},renderRecContacts:function(){var e=this,t=this.props.rec_contacts&&this.props.rec_contacts.length>0;return o.default.createElement("div",{className:"contact_center_friend"},t&&this.props.rec_contacts.map(function(t,i,a){if(t.avatar)return o.default.createElement("div",{key:t.mmid,className:"contact_center_friend_item",style:{zIndex:a.length-i}},o.default.createElement("img",{className:"mw-100 radius-50",src:t.avatar,onError:function(){return e.props.cursor.select("rec_contacts",i,"avatar").set("")}}))}))},render:function(){var e=this,t=this.context,i=(t.fconf,t.auth_info);i.u%4!=0&&i.u;var a=void 0;if(1==this.state.jobs_switch_to_hr||1==this.props.force_show_zhaopin_index){var n=this.props.resume_unread_cnt+this.props.new_visitor_count;a=n>0?n>99?o.default.createElement("em",{className:"right_badge"},"99+"):o.default.createElement("em",{className:"right_badge"},n):"50万+高端人才在找机会"}else a="高薪工作热招";if(this.state.user.inapp_d1cnt)var s=this.state.user.inapp_d1cnt?""+this.state.user.inapp_d1cnt:null;var c=H.formatDist2Count(this.state.user.dist2_count);return o.default.createElement("div",null,o.default.createElement(r.default,{onClick:function(){return window.MaiMai_Native.native_open_search_center(0)},bgClass:"gray-bg-f2f6f7"}),o.default.createElement("div",{className:"white-bg"},o.default.createElement(u.default,{onClick:this.dist1_list,key:"dist1",title:"我的好友",titleClass:"setting-icon-circle-40 imacss imacss-haoyou3x",lineHeight:"64px",leftClass:"m-l",arrow_img:"arrow_blue_gray"},o.default.createElement("span",{className:"text-info font-16 p-l-5 media-middle"},s)),o.default.createElement(u.default,{onClick:this.dist2_list,key:"dist2",title:"拓展人脉",titleClass:"setting-icon-circle-40 imacss imacss-renmai3x",lineHeight:"64px",leftClass:"m-l",lastCell:"lastCell",arrow_img:"arrow_blue_gray"},this.renderRecContacts(),o.default.createElement("span",{className:"text-info font-16 p-l-5 media-middle"},c))),o.default.createElement("div",{className:"p-y-5"}),o.default.createElement("div",{className:"white-bg"},o.default.createElement(u.default,{onClick:function(){e.go_list("job_center")},key:"job_center",title:"求职招聘",subTitle:"",titleClass:"setting-icon-circle-40 imacss imacss-qiuzhi3x",lineHeight:"64px",leftClass:"m-l",arrow_img:"arrow_blue_gray"},o.default.createElement("span",{className:"small text-info"},a)),o.default.createElement(u.default,{onClick:function(){e.go_list("fast_contact","极速找人")},key:"fast_contact",title:"极速找人",subTitle:"",titleClass:"setting-icon-circle-40 imacss imacss-zhaoren3x",lineHeight:"64px",leftClass:"m-l",arrow_img:"arrow_blue_gray"},o.default.createElement("span",{className:"small text-info"},"找合作、找人才、找投资")),43!=i.u&&o.default.createElement(u.default,{onClick:function(){e.go_list("course","脉课堂")},key:"course",title:"脉课堂",subTitle:"",titleClass:"setting-icon-circle-40 imacss imacss-course3x",lineHeight:"64px",leftClass:"m-l",lastCell:this.state.is_showlive?null:"lastCell",arrow_img:"arrow_blue_gray"},o.default.createElement("span",{className:"small text-info"},this.props.course_hint?this.props.course_hint:"每天学习10分钟")),this.state.is_showlive&&o.default.createElement(u.default,{onClick:function(){e.go_list("live",{liveText:"职场进阶"})},key:"live",title:"职场进阶",subTitle:"",showNew:!this.state.tab3_live_click,showHot:!0,showLive:this.props.new_livevideo&&this.props.new_livevideo>0,titleClass:"setting-icon-circle-40 imacss imacss-zhibo3x",lineHeight:"64px",lastCell:"lastCell",arrow_img:"arrow_blue_gray"},this.props.new_livevideo&&this.props.new_livevideo>0?o.default.createElement("span",{className:"small text-orange-hl"},this.props.new_livevideo,"场职播中"):o.default.createElement("span",{className:"small text-orange-hl"},"职播精英分享")),this.state.is_showlive&&o.default.createElement(p.default,{key:"1",videos:this.props.videos,onClick:this.liveHotClick})))}});e.exports=H}});