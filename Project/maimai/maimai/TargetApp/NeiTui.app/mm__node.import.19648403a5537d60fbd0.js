webpackJsonp([80],{1150:function(e,t,n){"use strict";var r=n(1),a=n(166),o=r.createClass({displayName:"SingleMessage",render:function(){var e=void 0;return 1==this.props.complete?e="/static/images/icon_msg_complete.png":2==this.props.complete&&(e="/static/images/icon_msg_alert.png"),r.createElement("div",null,e&&r.createElement("img",{style:i.poorMan,src:e}),r.createElement("p",{style:i.nullTxt},this.props.tips))}}),i={poorMan:{display:"block",width:100,height:100,margin:"0px auto 0"},nullTxt:{fontSize:"16px",color:"#999999",lineHeight:"26px",textAlign:"center",marginTop:"7px"}};e.exports=a(o)},774:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,l,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),f=r(d),y=n(981),p=r(y),_=n(75),h=r(_),v=n(113),w=n(15),b=r(w),q=n(76),g=(r(q),n(1150)),m=n(988);t.default=e.exports=(l=c=function(e){function t(){var e,n,r,i;a(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={alertMsg:"",complete:0,btnEnable:!1},r.delay_close=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=1==t?3:15;void 0!=r.intervalId&&window.clearInterval(r.intervalId);var a=r,o=function(){n>0?(console.log("this in showMsg"+this),a.setState({alertMsg:e+"("+n+"秒后关闭)",complete:t}),n--):(window.clearInterval(a.intervalId),window.MaiMai_Native.close_native(null,!0))};r.intervalId=window.setInterval(o,1e3),o(),r.setState({btnEnable:!0})},r.request_unbind_card=function(){var e=r.context,t=e.req,n=e.fconf,a=e.auth_info;if(void 0==t.query.unbind_card_id||void 0==t.query.token)return void r.delay_close("请求出错,请稍后重试...");var o=n.online_url+"mmpay/v4/unbind_card?"+b.default.stringify(s({},a));fetch(o,{credentials:"same-origin",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.default.stringify(s({request_no:t.query.request_no,bind_id:t.query.unbind_card_id,pwd_token:t.query.token},a))}).then(h.default.parse_online_json).then(function(e){(0,v.sendWebViewBroadcast)("account_unbind_card_success",{query:t.query}),r.delay_close("解绑成功。",1)}).catch(function(e){var t="string"==typeof e?e:"网络连接失败";throw r.delay_close(t),e}),r.setState({alertMsg:"解绑处理中,请耐心等待..."})},r.request_withdraw=function(){var e=r.context,t=e.req,n=e.fconf,a=e.auth_info;if(console.log(t.query),void 0==t.query.card_id||void 0==t.query.token||void 0==t.query.value||void 0==t.query.request_no)return void r.delay_close("请求出错,请稍后重试...");var o=n.online_url+"mmpay/v4/withdraw?"+b.default.stringify(s({},a));fetch(o,{credentials:"same-origin",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.default.stringify(s({value:t.query.value,cardid:t.query.card_id,ext_id:t.query.request_no,pwd_token:t.query.token,ct:30003},a))}).then(h.default.parse_online_json).then(function(e){if(e.value){if(t.query.balance){var n=t.query.balance-e.value;void 0!=e.fee&&e.fee>0&&(n-=e.fee),(0,v.sendWebViewBroadcast)("account.balance.change",{balance:n.toFixed(2)})}(0,v.sendWebViewBroadcast)("account_withdraw_success",{query:t.query}),r.delay_close("提现申请已提交。",1)}else r.delay_close("提现失败,请稍后重试。")}).catch(function(e){var t="string"==typeof e?e:"网络连接失败";throw r.delay_close(t),e}),r.setState({alertMsg:"提现申请发送中,请耐心等待..."})},r.request_withdraw_retry=function(){var e=r.context,t=e.req,n=e.fconf,a=e.auth_info;if(console.log(t.query),void 0==t.query.card_id||void 0==t.query.token||void 0==t.query.request_no)return void r.delay_close("请求出错,请稍后重试...");var o=n.online_url+"mmpay/v4/withdraw_retry?"+b.default.stringify(s({},a));fetch(o,{credentials:"same-origin",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.default.stringify(s({cardid:t.query.card_id,ext_id:t.query.old_request_no,retry_ext_id:t.query.request_no,pwd_token:t.query.token},a))}).then(h.default.parse_online_json).then(function(e){(0,v.sendWebViewBroadcast)("account_withdraw_success",{query:t.query}),r.delay_close("提现申请重新已提交。",1)}).catch(function(e){var t="string"==typeof e?e:"网络连接失败";throw r.delay_close(t),e}),r.setState({alertMsg:"提现申请发送中,请耐心等待..."})},i=n,o(r,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){switch(this.context.req.query.type){case"bindCard":(0,v.sendWebViewBroadcast)("account_bind_card_success",{}),this.delay_close("绑卡成功。",1);break;case"unbindCard":this.request_unbind_card();break;case"withdraw":this.request_withdraw();break;case"withdraw_retry":this.request_withdraw_retry();break;case"deposit":(0,v.sendWebViewBroadcast)("account.balance.change",{balance:this.props.balance.toFixed(2)}),this.delay_close("充值成功。",1);break;case"deposit_fail":this.delay_close("充值失败,请稍后重试。");break;case"consume_fail":this.delay_close("付款失败,请稍后重试。");break;default:this.delay_close("处理成功",1)}}},{key:"componentWillUnmount",value:function(){void 0!=this.intervalId&&window.clearInterval(this.intervalId)}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(p.default,{title:"提示"}),f.default.createElement("div",{style:{paddingTop:"100px"}},f.default.createElement(g,{tips:this.state.alertMsg,complete:this.state.complete}),this.state.btnEnable&&f.default.createElement(m,{btns:["关闭"],actions:[function(){window.MaiMai_Native.close_native(null,!0)}]})))}}]),t}(f.default.Component),c.contextTypes={auth_info:f.default.PropTypes.object,req:f.default.PropTypes.object,fconf:f.default.PropTypes.object},l)}});