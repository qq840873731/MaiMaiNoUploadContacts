webpackJsonp([152],{844:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(1),l=o(a),c=n(994),d=o(c),s=n(981),i=o(s),u=n(75),r=o(u),f=n(76),_=o(f),p=n(15),h=o(p),b=n(114),m=o(b),v=n(113),g=n(17),k=o(g);e.exports=l.default.createClass({displayName:"exports",contextTypes:{auth_info:l.default.PropTypes.object,fconf:l.default.PropTypes.object},componentDidMount:function(){document.body.style.background="#f9f9f9"},onLine1Clicked:function(){var e=this,t={badge_noti_level:1};this.doRequest(t,function(){e.props.cursor.select("badge_noti_level").set(1),(0,v.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,_.default)("修改成功")})},onLine2Clicked:function(){var e=this,t={badge_noti_level:0};this.doRequest(t,function(){e.props.cursor.select("badge_noti_level").set(0),(0,v.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,_.default)("修改成功")})},doRequest:function(e,t){var n=this.context,o=n.auth_info,a=n.fconf;k.default.extend(e,o);var l=a.online_url+"user/v3/update_config?"+h.default.stringify(e),c=fetch(l,{credentials:"same-origin"}).then(r.default.parse_online_json).then(function(){t()}).catch(r.default.toast_error_handler);(0,m.default)("设置中...",c)},render:function(){return l.default.createElement("div",null,l.default.createElement(i.default,{title:"工作圈里想看哪些通知"}),l.default.createElement("div",{className:"m-t-md m-b m-l text-muted"},"工作圈里想看哪些通知"),l.default.createElement(d.default,{title:"仅评论、回复和@我的",checked:1==this.props.badge_noti_level,checkRowClicked:this.onLine1Clicked}),l.default.createElement(d.default,{title:"所有的",checked:0==this.props.badge_noti_level,checkRowClicked:this.onLine2Clicked}))}})}});