webpackJsonp([76],{1427:function(e,t,r){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=r(984),n=r(1),s=r(17),l=r(15),o=(r(985)("app"),r(991),r(90)),c=r(75),d=(r(114),r(41)),f=r(115).launch_webview,p=r(46),u=r(116),m=r(168),h=r(999);e.exports=n.createClass({displayName:"exports",mixins:[d],contextTypes:{auth_info:n.PropTypes.object,fconf:n.PropTypes.object},showFeedDetail:s.debounce(function(){var e=this.props.feed,t=this.context,r=t.auth_info,i=t.fconf;if(r.u>0){if(e.feed.text.length>250&&"operation_topic"!=e.feed.data_str?p("/article/detail?fid="+e.fid,"查看全文","fetch"):h(e.fid),e.feed.search_qs&&e.feed.search_order){var n=i.online_url+"search/web/s_pb?"+l.stringify(a({srcu:r.u,type:"feed",targetid:e.feed.id,order:e.feed.search_order,qs:e.feed.search_qs},r));fetch(n)}}else location.href="/article/detail?fid="+e.fid},1e3,!0),like:function(e){var t=this;e.stopPropagation();var r=this.props,i=r.feed,n=r.cursor,s=this.context,o=s.auth_info,d=s.fconf;if(n&&o.u>0)try{var p=i.me_like;this.props.cursor.select("me_like").set(1==p?0:1);var u=i.feed.likes;this.props.cursor.select("feed","likes").set((1==p?-1:1)+u);var m=d.online_url+"feed/v3/like?"+l.stringify(a({fid:this.props.feed.fid,like:1==p?0:1},o));fetch(m).then(c.parse_online_json).catch(c.toast_error_handler).catch(function(e){t.props.cursor.select("me_like").set(p),t.props.cursor.select("feed","likes").set(u)})}catch(e){alert(e)}else o.u<0&&f()},gotoDetail:function(e){this.refs.avatar.gotoDetail(e)},render:function(){var e,t=this.props.feed,r=u.getCareer(t.contact);return e=r?" | "+r:"",n.createElement("li",{className:"list-group-item clearfix",onClick:this.showFeedDetail},n.createElement("div",{className:"media"},n.createElement("div",{className:"media-left"},n.createElement(m,{ref:"avatar",customClass:"topic-avatar",card:t.contact,image_id:this.props.image_id})),n.createElement("div",{className:"media-body"},n.createElement("div",{className:"lineClamp1",style:{marginBottom:"6px"}},n.createElement("span",{className:"text-primary",onClick:this.gotoDetail},t.contact.name),n.createElement("span",{className:"text-info small"},e),1==t.contact.judge&&n.createElement("span",{className:"add_v_img"})),n.createElement("p",{style:(0,i.textOverflow)(7)},n.createElement(o,{text:t.feed.summary||t.feed.richtext||t.feed.text,support_dref:!0})),this.props.children,t.d1_spread_cards&&t.d1_spread_cards.length>0&&s.first(t.d1_spread_cards,3).map(function(e){return n.createElement(m,{customClass:"friend_img",card:e})}),t.d1_spread_cards&&t.d1_spread_cards.length>0&&n.createElement("span",{className:"friend_tips text-muted small"},t.d1_spread_cards.length,"个好友分享了这条动态")),n.createElement("div",{className:"media-right media-middle text-center"},n.createElement("div",{style:{width:"34px"},onClick:this.like},this.props.cursor&&n.createElement("img",{src:t.me_like?"/static/images/ding2.png":"/static/images/ding1.png",style:_.img}),n.createElement("p",{className:"text-light small"},t.feed.likes>0&&t.feed.likes)))))}});var _={heading:{marginTop:-10,marginLeft:-20,marginRight:-20},like:{marginBottom:3},avatarSize:{width:42,height:42,WebkitBorderRadius:"2px"},img:{width:"14px",height:"14px",marginBottom:"4px"},tableCell:{display:"table-cell"},zanBox:{display:"table-cell",textAlign:"center",verticalAlign:"middle",width:50}}},710:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,o,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),d=r(1),f=a(d),p=(r(75),r(981)),u=a(p),m=r(15),h=(a(m),r(1427)),_=a(h),g=r(46),y=(a(g),r(165)),v=(a(y),r(117)),b=a(v),x=r(17),E=a(x),k=r(1008),w=a(k);r(982);t.default=e.exports=(o=l=function(e){function t(){return i(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e,t=this.props.cursor,r=this.context,a=r.req,i=(r.auth_info,E.default.chain(this.props.feeds).map(function(e,r){return{feed:e,cursor:t.select("feeds",r)}}));return"time"==a.query.sortby?(e="全部观点",i=i.value()):(e="全部热门观点",i=i.filter(function(e){return e.feed.feed.likes>=2}).sortBy(function(e){return-e.feed.feed.likes}).value()),f.default.createElement("div",null,f.default.createElement(u.default,{title:e}),f.default.createElement("div",{className:"panel panel-default"},f.default.createElement("ul",{className:"list-group"},i.map(function(e){return f.default.createElement(_.default,{key:e.feed.id,feed:e.feed,cursor:e.cursor},f.default.createElement(w.default,{images:e.feed.pics,max_count:3,type_multi:!0}))}))))}}]),t}(f.default.Component),l.contextTypes={req:f.default.PropTypes.object,fconf:f.default.PropTypes.object,auth_info:f.default.PropTypes.object},o);b.default.Constants.large}});