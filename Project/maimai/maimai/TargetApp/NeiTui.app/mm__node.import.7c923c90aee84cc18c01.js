webpackJsonp([101],{1504:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),r=n(41),i=n(171),s=n(90),l=(n(50),n(46)),c=n(75),u=c.parse_online_json,f=c.toast_error_handler,d=n(15),p=(n(282).format_for_message,a.createClass({displayName:"TaskCard",mixins:[r],contextTypes:{fconf:a.PropTypes.object,auth_info:a.PropTypes.object,req:a.PropTypes.object},iconClick:function(e){e.stopPropagation();var t=this.props.task,n=t.icon_mmid,o=t.bktoken,a={from:"tasklist"};o&&(a.bktoken=o);var r="/contact/detail/"+n+"?"+d.stringify(a);l(r,"人脉详情","fetch")},ignore:function(e){e.stopPropagation();var t=this.props,n=t.task,a=t.cursor,r=this.context,i=r.fconf,s=r.auth_info,l=prompt("对TA说点什么: "),c=i.online_url+"tools/v3/ignore_task?"+d.stringify(o({id:n.id,type:n.id,attach:l},s));a.select("done").set(2),fetch(c).then(u).catch(function(e){throw a.select("done").set(0),e}).catch(f)},complete:function(e){e.stopPropagation();var t=this.props,n=t.cursor,a=t.task,r=this.context,i=r.fconf,s=r.auth_info,l=i.online_url+"tools/v3/complete_task?"+d.stringify(o({id:a.id,type:a.id},s));confirm(a.confirm.text)&&(n.select("done").set(1),fetch(l).then(u).catch(function(e){throw n.select("done").set(0),e}).catch(f))},renderBottomButtons:function(){var e=this.props.task;return a.createElement("div",{style:m.buttons},a.createElement("span",{style:m.button},a.createElement("button",{onClick:this.ignore,className:"btn btn-block btn-default"},"拒绝请求")),a.createElement("span",{style:m.button},a.createElement("button",{onClick:this.complete,className:"btn btn-block btn-primary"},e.btn_action_text)))},renderDoneArea:function(){var e=this.props.task;return a.createElement("div",{className:"text-center text-muted",style:m.done},1==e.done&&a.createElement("span",{className:"glyphicon glyphicon-ok-circle"}),1==e.done?" 已通过请求":"已拒绝请求")},render:function(){var e=(this.context.auth_info,this.props.task);return a.createElement("li",{className:"list-group-item"},3!=e.dist&&a.createElement(i,{dist:e.dist}),a.createElement("div",{className:"media list-group-item-heading list-group-item-text"},a.createElement("div",{className:"media-left"},a.createElement("img",{style:m.avatar,src:e.icon,onClick:this.iconClick})),a.createElement("div",{className:"media-body"},a.createElement("div",{style:m.name},a.createElement("div",{style:m.namestr},e.title),a.createElement("div",{className:"pull-right small"},e.time_str)),a.createElement("div",{style:m.line1,className:"text-muted small"},a.createElement(s,{text:e.rtext||e.text,support_dref:!0}),1==e.judge&&a.createElement("span",{className:"add_v_img"}),e.tail_text),a.createElement("div",{className:"text-muted small"},e.attach))),e.done&&this.renderDoneArea()||this.renderBottomButtons())}})),m={done:{marginTop:6,height:40,lineHeight:"40px",verticalAlign:"middle",backgroundColor:"#efefef"},buttons:{marginTop:6,height:40},button:{display:"inline-block",width:"50%",paddingLeft:4,paddingRight:4},avatar:{width:48,height:48},name:{fontSize:15,marginBottom:2,marginRight:5},namestr:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",display:"inline-block",width:"80%"},line1:{fontSize:13,marginBottom:5}};e.exports=p},839:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(15),d=o(f),p=n(75),m=n(981),h=o(m),_=n(1),g=o(_),y=n(165),b=o(y),v=n(271),k=(o(v),n(1504)),w=o(k),E=n(272),x=o(E),j=n(46),P=o(j),q=n(988),O=o(q),N=n(983),T=n(982);n(985)("app");t.default=e.exports=(l=s=function(e){function t(){var e,n,o,i;a(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.loadMore=function(){var e=o.props.cursor,n=o.refs.loader;n&&n.bindRequest(function(){return t.loadData(o.context,o.nextPage,o.props.before_id).then(function(t){e.select("tasks","requests").concat(t.data.tasks.requests),t.data.tasks.before_id?e.select("before_id").set(t.data.tasks.before_id):e.select("before_id").set(0),o.nextPage++})})},o.complete_all=function(e){e.stopPropagation();var t=o.props.tasks,n=o.context,a=n.fconf,r=n.auth_info,i=t.requests.map(function(e,t){return e.id}).join(","),s=a.online_url+"tools/v3/complete_tasks?"+d.default.stringify(c({ids:i,type:1},r));confirm("确认通过所有报名请求吗？")&&fetch(s).then(p.parse_online_json).then(function(e){location.reload()}).catch(function(e){throw e}).catch(toast_error_handler)},i=n,r(o,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.nextPage=1,window.show_complete_meeting_task=this.show_complete_meeting_task,window.show_fav_meeting_task=this.show_fav_meeting_task}},{key:"show_complete_meeting_task",value:function(e,t){(0,P.default)("/user_conf/meeting_task_list?pending=0&serid="+e+"&itemid="+t,"已处理","fetch")}},{key:"show_fav_meeting_task",value:function(e,t){(0,P.default)("/user_conf/meeting_task_list?pending=1&fav=1&serid="+e+"&itemid="+t,"优质待处理","fetch")}},{key:"render",value:function(){var e,t=this.props,n=t.tasks,o=(t.card,t.cursor),a=this.context.req,r=void 0;return 1!=a.query.pending||a.query.fav||(e=x.default,e.more_items=[],e.more_items.push({title:"已处理",callback:"show_complete_meeting_task("+a.query.serid+","+a.query.itemid+")"}),e.more_items.push({title:"优质待处理",callback:"show_fav_meeting_task("+a.query.serid+","+a.query.itemid+")"}),n.total>0&&(r=g.default.createElement(O.default,{btns:["一键通过"],actions:[this.complete_all]}))),g.default.createElement("div",null,e&&g.default.createElement(N,{msg_to_app:e}),g.default.createElement(h.default,{title:0!=a.query.pending?"报名管理":"已处理"}),g.default.createElement(T,{loadMore:this.loadMore,hasMore:n.total>n.requests.length,loader:g.default.createElement(b.default,{ref:"loader",reload:this.loadMore,cursor:o.select("loading_status")})},g.default.createElement("ul",{className:"list-group"},n.requests.map(function(e,t){return console.log(e.judge),g.default.createElement(w.default,{key:e.id,task:e,cursor:o.select("tasks","requests",t)})}),r)))}}],[{key:"loadData",value:function(e,t,n){var o=e.req,a=o.query,r=o.pathname+"?"+d.default.stringify(c({page:t,before_id:n||0},a,{jsononly:1}));return fetch(r,{credentials:"same-origin"}).then(p.parse_online_json)}}]),t}(g.default.Component),s.contextTypes={auth_info:g.default.PropTypes.object,req:g.default.PropTypes.object,fconf:g.default.PropTypes.object},l)}});