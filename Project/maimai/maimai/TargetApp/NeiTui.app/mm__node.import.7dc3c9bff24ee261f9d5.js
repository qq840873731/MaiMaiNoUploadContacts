webpackJsonp([299],{959:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,m,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),d=n(u),f=a(981),p=n(f),_=a(274),v=n(_),E=a(75),N=n(E),h=a(1091),y=n(h),b=a(15),g=n(b),x=a(46),w=n(x);t.default=e.exports=(m=i=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onSwipeCompany=function(e){a.setState({company_cur_idx:e})},a.onSwipePartner=function(e){a.setState({partner_cur_idx:e})},a.contact=function(){var e=a.context.auth_info;fetch("/sdk/activity/contact_pople?"+g.default.stringify(s({},e)),{credentials:"same-origin"}).then(N.default.parse_online_json).then(function(e){(0,w.default)("/activity/detail_itinerary","详细行","fetch")}).catch(N.default.toast_error_handler)},a.state={company_cur_idx:0,partner_cur_idx:0},a}return c(t,e),o(t,[{key:"componentDidMount",value:function(){v.default.setMenuBarStyle({banner_trans:!0,hideTitle:!0})}},{key:"renderCompany",value:function(){var e=this,t=this.props.company_data;return d.default.createElement("div",{className:"visit_company"},d.default.createElement("div",{className:"title m-b-30"},"您将与世界巨头深度对话"),d.default.createElement(y.default,{callback:this.onSwipeCompany,auto:3e3,disableScroll:!1,continuous:!0},t.map(function(e,t){return d.default.createElement("div",{className:"p-x p-t company_item",key:t},d.default.createElement("div",{className:"font-0 m-b-12 img_warp"},d.default.createElement("img",{src:e.img,className:"mx-w-100"}),d.default.createElement("div",{className:"img_tit"},e.img_des)),d.default.createElement("div",{className:"item_tit text-center text-white-fff m-b-7"},e.tit),d.default.createElement("p",{className:"des",dangerouslySetInnerHTML:{__html:e.des}}))})),d.default.createElement("div",{className:"carousel"},d.default.createElement("ol",{className:"indicators"},t.map(function(t,a){return d.default.createElement("li",{key:a,className:e.state.company_cur_idx==a?"active":""})}))))}},{key:"renderPartner",value:function(){var e=this,t=this.props.partner_data;return d.default.createElement("div",{className:"itinerary_partner"},d.default.createElement("div",{className:"title m-b-25"},"您将和他深入交流"),d.default.createElement(y.default,{callback:this.onSwipePartner,auto:3e3,disableScroll:!1,continuous:!0},t.map(function(e,t){return d.default.createElement("div",{className:"p-x p-t-25 partner_item",key:t},d.default.createElement("div",{className:"partner_item_img"},d.default.createElement("img",{src:e.avator,className:"mx-w-100"})),d.default.createElement("div",{className:"item_tit text-center text-white-fff m-b-20"},e.tit),d.default.createElement("p",{className:"des",dangerouslySetInnerHTML:{__html:e.des}}))})),d.default.createElement("div",{className:"carousel m-b-60"},d.default.createElement("ol",{className:"indicators"},t.map(function(t,a){return d.default.createElement("li",{key:a,className:e.state.partner_cur_idx==a?"active":""})}))),d.default.createElement("ul",{className:"partner_ul clearfix"},d.default.createElement("li",null,d.default.createElement("div",{className:"m-b-10"},d.default.createElement("img",{src:"http://i9.taou.com/maimai/p/invitation_card/avatar_1.png",className:"avatar-90 b-r-c"})),d.default.createElement("span",{className:"text-white-fff"},"神秘特邀嘉宾")),d.default.createElement("li",null,d.default.createElement("div",{className:"m-b-10"},d.default.createElement("img",{src:"http://i9.taou.com/maimai/p/invitation_card/avatar_2.png",className:"avatar-90 b-r-c"})),d.default.createElement("span",{className:"text-white-fff"},"林凡"),d.default.createElement("span",{className:"text-white-fff font-weight-light"},"脉脉CEO")),d.default.createElement("li",{className:"m-r-0"},d.default.createElement("div",{className:"m-b-10"},d.default.createElement("img",{src:"http://i9.taou.com/maimai/p/invitation_card/avatar_3.png",className:"avatar-90 b-r-c"})),d.default.createElement("span",{className:"text-white-fff"},"神秘特邀嘉宾"))),d.default.createElement("div",{className:"text-center"},d.default.createElement("img",{src:"http://i9.taou.com/maimai/p/invitation_card/avatar_4.png",style:{height:"40px"}})),d.default.createElement("div",{className:"text-center text-white-fff m-t"},"20位知名公司",d.default.createElement("br",null),"高级管理者"))}},{key:"render",value:function(){var e=this.props,t=e.my_card,a=e.not_vip;return d.default.createElement("div",{className:"invitation_card"},d.default.createElement(p.default,{title:"海外交流邀请函"}),d.default.createElement("div",{className:"invitation_hearder text-center"},d.default.createElement("div",{className:"w-100 h-100"},d.default.createElement("img",{src:"http://i9.taou.com/maimai/p/invitation_card/top.png",className:"mx-w-100"})),d.default.createElement("span",{className:"text_welcome"},"尊贵的脉脉企业家",a?"":"会员",d.default.createElement("br",null),t.name," ",1==t.gender?"先生":"女士","，您好",d.default.createElement("br",null),"脉脉CEO林凡邀您",d.default.createElement("br",null),"共赴探寻全球前沿科技发展尊享之旅")),d.default.createElement("div",{className:"invitation_body"},d.default.createElement("div",{className:"invitation_tip m-b-35 m-t-65"},d.default.createElement("span",{className:"tip_tit_top font-28"},"这"),"不是一场简单的美国行"),d.default.createElement("div",{className:"w-100 h-100"},d.default.createElement("img",{src:"http://i9.taou.com/maimai/p/invitation_card/invitation_1.png",className:"mx-w-100"})),d.default.createElement("div",{className:"invitation_tip m-t-55 m-b-50"},d.default.createElement("span",{className:"tip_tit_top font-16 time"},"2018年1月8日"),"至",d.default.createElement("span",{className:"tip_tit_bottom font-16"},"2018年1月14日")),this.renderCompany(),d.default.createElement("div",{className:"w-100 h-100"},d.default.createElement("img",{src:"http://i9.taou.com/maimai/p/invitation_card/invitation_6.jpg",className:"mx-w-100"})),this.renderPartner(),d.default.createElement("div",{className:"invitation_footer"},d.default.createElement("div",{className:"invitation_tip m-b-16 m-t-65 special"},d.default.createElement("span",{className:"tip_tit_top font-20"},"企业家价格"),d.default.createElement("div",{className:"font-bold font-30 m-t-7"},a?65980:49980),d.default.createElement("div",{className:"text-white font-12 l-h"},a?"5日硅谷+2日拉斯维加斯+CES全球电子展+拉斯维加斯表演秀+硅谷VC高管沙龙+脉脉16800元/年的超级企业家会员权限":"5日硅谷+2日拉斯维加斯+CES全球电子展+拉斯维加斯表演秀+硅谷VC高管沙龙+超级企业家人脉累积",d.default.createElement("div",{className:"opacity-6"},"(限额20人)"))),d.default.createElement("dl",{className:"text-white opacity-6 font-12 p-x-25 m-t"},d.default.createElement("dt",{className:"fl"},"备注"),d.default.createElement("dd",{className:"m-l-35"},"1.该邀请函仅本人使用，不可转让及赠送，详情可点击了解详情进行咨询。"),d.default.createElement("dd",{className:"m-l-35"},"2.可开发票，仅限公司报销。")),d.default.createElement("div",{className:"dget_more_bg"},d.default.createElement("div",{className:"get_more text-center"},"活动已经结束 期待下次参与")))))}}]),t}(d.default.Component),i.contextTypes={auth_info:d.default.PropTypes.object,req:d.default.PropTypes.object,fconf:d.default.PropTypes.object},m)}});