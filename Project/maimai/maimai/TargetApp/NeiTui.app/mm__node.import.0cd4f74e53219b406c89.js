webpackJsonp([154],{851:function(e,t,n){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}var o=n(1),s=c(o),i=n(994),a=c(i),u=n(981),d=c(u),r=n(75),l=c(r),f=n(76),p=c(f),_=n(15),h=c(_),k=n(114),m=c(k),y=n(113),w=n(17),b=c(w);e.exports=s.default.createClass({displayName:"exports",contextTypes:{auth_info:s.default.PropTypes.object,fconf:s.default.PropTypes.object},componentDidMount:function(){document.body.style.background="#f9f9f9"},onLine1Clicked:function(){var e=this,t={sync_wiki:1};this.doRequest(t,function(){e.props.cursor.select("sync_wiki").set(1),(0,y.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,p.default)("修改成功")})},onLine2Clicked:function(){var e=this,t={sync_wiki:0};this.doRequest(t,function(){e.props.cursor.select("sync_wiki").set(0),(0,y.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,p.default)("修改成功")})},doRequest:function(e,t){var n=this.context,c=n.auth_info,o=n.fconf;b.default.extend(e,c);var s=o.online_url+"user/v3/update_config?"+h.default.stringify(e),i=fetch(s,{credentials:"same-origin"}).then(l.default.parse_online_json).then(function(){t()}).catch(l.default.toast_error_handler);(0,m.default)("设置中...",i)},render:function(){return s.default.createElement("div",null,s.default.createElement(d.default,{title:"自动为我建立百科词条"}),s.default.createElement("div",{className:"m-t-md m-b m-l text-muted"},"自动为我建立百科词条"),s.default.createElement(a.default,{title:"开启",checked:1==this.props.sync_wiki,checkRowClicked:this.onLine1Clicked}),s.default.createElement(a.default,{title:"关闭",checked:1!=this.props.sync_wiki,checkRowClicked:this.onLine2Clicked}))}})}});