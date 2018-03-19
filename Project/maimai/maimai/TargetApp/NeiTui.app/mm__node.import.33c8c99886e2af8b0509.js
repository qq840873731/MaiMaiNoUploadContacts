webpackJsonp([138],{1456:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(1046),o=a(46),d=n(o),c=a(76),i=n(c),s=a(1),l=a(166),u=a(41),p=l(s.createClass({displayName:"BankCard",mixins:[u],identOk:function(){var e=this.props.ident_photos;return e.has_front&&e.has_back&&e.has_hold},cardEnabled:function(){var e=this.props.listtype;return 1==e||2==e?1!=this.props.card.withdraw?-1:15!=this.props.card.uploaded?this.identOk()?1!=this.props.card.has_photo?-3:-4:-2:1:3==e&&1!=this.props.card.pay?-101:1},onCardClicked:function(e){e.stopPropagation();var t=this.cardEnabled();t>0?this.props.onCardClicked(this.props.card):-1==t?(0,i.default)("该卡暂不支持提现"):-2==t||-3==t?(0,i.default)("该卡需补充资料方可提现"):-4==t?(0,i.default)("正在向第三方支付平台提交审核资料,请稍后再试"):-101==t?(0,i.default)("该卡暂不支持充值"):(0,i.default)("该卡暂不支持")},onCardImgClicked:function(e){e.stopPropagation(),this.identOk()?(0,d.default)("/contact/account/upload_card?cardid="+this.props.card.id,"银行卡信息","fetch"):(0,d.default)("/contact/account/upload_ident?add_card=1&upload_card=1&cardid="+this.props.card.id,"身份证信息","fetch")},render:function(){var e,t,a=void 0,n=void 0,o=this.cardEnabled(),d=r.Styles.bankCardItem;if(o<0&&(e=-2==o||-3==o?"缺少资料":-4==o?"审核中":"暂不支持",d=r.Styles.bankCardItem_disable,t=s.createElement("dd",{style:r.Styles.badge,className:"small text-muted"},e)),this.props.show_ph&&1==this.props.card.withdraw){var c="/static/images/checked-96.png";this.identOk()&&this.props.card.has_photo||(c="/static/images/warning-96.png"),n=s.createElement("dd",{style:r.Styles.badgeBottom,onClick:this.onCardImgClicked},s.createElement("img",{style:r.Styles.badgeBottomWar,src:c}))}return a=s.createElement("dl",{style:[d,(0,r.getCardStyleByBank)(this.props.card.bank)],onClick:this.onCardClicked},s.createElement("dt",{style:[r.Styles.itemDt,r.Styles.itemDtImg]},s.createElement("img",{style:r.Styles.itemDtImg,src:this.props.card.icon})),s.createElement("dd",{style:[r.Styles.ItemdDd,r.Styles.stressTxt]},this.props.card.bank),s.createElement("dd",{style:r.Styles.ItemdDd},this.props.card.type?"信用卡":"储蓄卡"),s.createElement("dd",{style:[r.Styles.ItemdDd,r.Styles.stressNum],className:"stressNum"},"**** **** **** ",this.props.card.subfix),n,t),s.createElement("div",null,a)}}));e.exports=l(p)},764:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,i,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),p=n(u),f=a(46),h=n(f),y=a(114),_=n(y),b=a(1046),m=a(113),v=a(15),g=n(v),k=a(76),C=n(k),w=a(75),E=n(w),B=a(1456),x=n(B),O=a(275),S=n(O),j=a(1094).gen_extid,D=a(981),P=a(41);t.default=e.exports=(i=c=function(e){function t(){var e,a,n,d;r(this,t);for(var c=arguments.length,i=Array(c),l=0;l<c;l++)i[l]=arguments[l];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.mixins=[P,S.default],n.addBankCard=function(){var e=n.context,t=e.fconf,a=e.auth_info,r=t.online_url+"mmpay/v4/bindcard_url?"+g.default.stringify(s({web_callback:t.web_url+"contact/account/web_callback?type=bindCard",return_url:t.web_url+"contact/account/return_close"},a)),o=fetch(r).then(E.default.parse_online_json).then(function(e){console.log("bindcard res:"+e),void 0!=e.redirectUrl&&e.redirectUrl.length>0?(0,h.default)(e.redirectUrl,"绑定银行卡","fetch"):(0,C.default)("请求失败,请稍后再试")}).catch(E.default.toast_error_handler);(0,_.default)("生成绑卡地址中...",o)},n.onOnUnbindCard=function(e){var t=n.props.cursor,a=e.query,r=t.select("cards").get().filter(function(e){return e.id!=a.unbind_card_id});t.select("cards").set(r),t.select("show_dialog").set(0)},n.onOnBindCard=function(e){var a=n.props.cursor;t.loadData(n.context,0).then(function(e){a.select("cards").set(e.data.cards)})},n.onCardClicked=function(e){switch(n.selected_card=e,n.props.type){case 0:n.props.cursor.select("show_dialog").set(1);break;case 1:n.withdrawMoney(e);break;case 2:(0,m.sendWebViewBroadcast)("selected_card",e),window.MaiMai_Native.close_native(null,!0);break;case 3:n.depositMoney(e)}},n.depositMoney=function(e){if(1!=e.pay)return void(0,C.default)("此卡不支持支付");var t="/contact/account/bankcard_deposit?"+g.default.stringify({card:JSON.stringify(e),dpvalue:n.props.dpvalue});(0,h.default)(t,"银行卡充值","fetch")},n.withdrawMoney=function(e){if(0!=e.type&&1!=e.withdraw)return void(0,C.default)("此卡不支持提现");var t="/contact/account/withdraw_money_to_bank?"+g.default.stringify({card_id:e.id});(0,h.default)(t,"转出到银行卡","fetch")},n.unbind=function(e){e.stopPropagation();var t=n.context,a=t.fconf,r=t.auth_info,o=j(r.u,"unbind"),d=a.web_url+"contact/account/web_callback?type=unbindCard&unbind_card_id="+n.selected_card.id+"&request_no="+o,c=a.online_url+"mmpay/v4/verify_passwd_url?"+g.default.stringify(s({request_no:o,web_callback:d,token_biz_type:"UN_BIND_CARD",return_url:a.web_url+"contact/account/return_close"},r));console.log("url="+c);var i=fetch(c).then(E.default.parse_online_json).then(function(e){void 0!=e.redirectUrl&&e.redirectUrl.length>0?(0,h.default)(e.redirectUrl,"绑定银行卡","fetch"):(0,C.default)("请求失败,请稍后再试")}).catch(E.default.toast_error_handler);(0,_.default)("请求支付密码中",i)},n.cancel=function(e){e.stopPropagation(),n.dissmisDialog()},n.dissmisDialog=function(){n.props.cursor.select("show_dialog").set(null)},d=a,o(n,d)}return d(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props.cursor;e.select("cards").get()||e.select("cards").set([]),this.selected_card=null,(0,m.bindBroadcast)("account_unbind_card_success",this.onOnUnbindCard),(0,m.bindBroadcast)("account_bind_card_success",this.onOnBindCard)}},{key:"componentWillUnmount",value:function(){(0,m.unbindBroadcast)("account_unbind_card_success",this.onOnUnbindCard),(0,m.unbindBroadcast)("account_bind_card_success",this.onOnBindCard)}},{key:"render",value:function(){var e=this,t=this.context,a=t.fconf,n=(t.auth_info,void 0),r=void 0,o=void 0;return this.props.cards&&this.props.cards.length>0?r=p.default.createElement("div",null,p.default.createElement("div",{style:b.Styles.bankCardList},this.props.cards.map(function(t,n){return p.default.createElement(x.default,{card:t,key:n,show_ph:a.need_idcard_photo,listtype:e.props.type,ident_photos:e.props.photos,onCardClicked:e.onCardClicked})})),p.default.createElement("div",{style:b.Styles.addBankCard,onClick:this.addBankCard},"+添加新银行卡")):n=p.default.createElement("div",null,p.default.createElement("div",{style:b.Styles.cashNoBankCard},"您还未添加过银行卡"),p.default.createElement("div",{style:b.Styles.btnBlueBg,onClick:this.addBankCard},"现在去添加")),this.props.cursor.select("show_dialog").get()&&(o=p.default.createElement("div",null,p.default.createElement("div",{style:I.layerCover}),p.default.createElement("div",{style:I.authLayerCon,onClick:this.cancel},p.default.createElement("div",{style:I.authLayerBtns},p.default.createElement("p",{style:[I.borderBottom,{color:"#FF0000"}],onClick:this.unbind},"解除绑定"),p.default.createElement("p",{style:I.borderBottom,onClick:this.cancel},"取消"))))),p.default.createElement("div",null,p.default.createElement(D,{title:"我的银行卡"}),n,r,o)}}],[{key:"loadData",value:function(e,t){var a=e.req,n=a.query,r=s({page:t,jsononly:1},n),o=a.pathname+"?"+g.default.stringify(r);return fetch(o,{credentials:"same-origin"}).then(w.parse_online_json)}}]),t}(p.default.Component),c.contextTypes={req:p.default.PropTypes.object,auth_info:p.default.PropTypes.object,fconf:p.default.PropTypes.object},i);var I={layerCover:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:4,background:"rgba(0,0,0,0.8)"},authLayerCon:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:5},authLayerBtns:{position:"absolute",bottom:0,left:0,background:"#ffffff",width:"100%",textAlign:"center",lineHeight:"46px",fontSize:"19px",color:"#081424"},borderBottom:{marginBottom:"1px",boxShadow:"0 1px 1px -1px rgba(187,187,187,0.8)"}}}});