webpackJsonp([28],{1043:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},o=r(15),n=s(o),i=r(75),c=r(275),l=s(c),p=r(167),d=r(170),m=r(1),u=(r(50),r(166),r(117)),h=(u.square,u.rightTopIcon,r(41),r(90),r(993)),f=r(1004),g=r(1088),_=(r(46),r(78)),C=r(1014);e.exports=m.createClass({displayName:"exports",mixins:[l.default,g],contextTypes:{auth_info:m.PropTypes.object,fconf:m.PropTypes.object,req:m.PropTypes.object},getInitialState:function(){return{showInput:!1}},gotoDetail:function(e){e.stopPropagation();try{var t=this.props.cursor.select("jwt").get(),r=t?{bktoken:t}:null,s=this.props.cursor.select("u","encode_mmid").get()||this.props.cursor.select("u","mmid").get()||this.props.cursor.select("u","id").get();_(s,this.context,r)}catch(e){alert(e)}},onPrizeBtnClicked:function(e){e.stopPropagation();var t=this.context,r=t.auth_info,s=t.fconf;if(r.u>0){var o=this.props.cursor.select("mylike"),i=0==o.get()?1:0;o.set(i),1==i?this.props.cursor.select("likes").apply(function(e){return e+1}):this.props.cursor.select("likes").apply(function(e){return e-1});var c=s.online_url+"feed/v3/likecmt?"+n.default.stringify(a({cid:this.props.cursor.select("id").get(),like:i},r));fetch(c).then().then()}},onLongPress:function(e){this.props.onCommentCardLongPressed&&this.props.onCommentCardLongPressed(this.props.cursor.get())},onCardClicked:function(){this.props.onCommentCardClicked&&this.props.onCommentCardClicked(this.props.cursor.get())},onSendCmtClicked:function(e,t,r){var s=this,a=this.props.cursor.get();(0,d.sendComment)({context:this.context,mycard:this.props.mycard,reply_to:a.id,input:e,at:r,feedCursor:this.props.feedCursor,commentsTabCursor:this.props.commentsTabCursor}).then(function(e){s.replaceState({showInput:!1}),t.setValue(""),t.updateWordCount()}).catch(i.toast_error_handler)},onDeleteBtnClicked:function(){var e=this,t=this.props.cursor.get();t.u.mmid==this.props.mycard.mmid&&(0,p.showModalForConfirm)({title:"是否要删除您发布的此条评论?",ok_text:"删除",ok:function(){(0,d.deleteComment)({context:e.context,cmt_id:t.id,feedCursor:e.props.feedCursor,commentsTabCursor:e.props.commentsTabCursor}).catch(i.toast_error_handler)},cancel_text:"取消"})},renderReply:function(){var e=this;if(!(this.context.auth_info.u<=0)&&this.props.showReply&&this.props.mycard){var t=this.props.mycard.mmid==this.props.cursor.select("u","mmid").get(),r=t?this.onDeleteBtnClicked:function(){e.replaceState({showInput:!e.state.showInput})};return m.createElement("div",{onClick:r},m.createElement("span",{className:"text-primary"}," ",t?"删除":"回复"))}},renderInputPanel:function(){if(!this.props.showReply)return null;var e=this.props.cursor.get(),t="回复:"+e.u.name;return m.createElement("div",{className:this.state.showInput?"p-b":"hidden"},m.createElement(f,{users:this.props.users,placeHolder:t,onClickSend:this.onSendCmtClicked,maxWord:250}))},render:function(){var e=this.props.cursor.select("rt").get()||this.props.cursor.select("t").get(),t=this.props.cursor.get();t.ru&&(e="回复<dref t=1 v="+t.ru.id+" ev="+t.ru.encode_mmid+">"+t.ru.name+": </dref>"+e);var r=this.props.cursor.select("u","career").get();return r=r&&r.length>0?" · "+r:"",m.createElement("li",{className:"p-relative p-x-20 p-y list-unstyled "+(this.props.isLast?"":"border-bottom-e0"),onClick:this.onCardClicked,onTouchEnd:this.handleTouchEnd,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,key:this.props.key,id:this.props.archor?"comment_archor":""},m.createElement("div",{className:"media list-group-item-heading list-group-item-text"},m.createElement("div",{className:"media-left font-0"},m.createElement("img",{className:"media-object avatar-25 radius-50",src:this.props.cursor.select("u","avatar").get(),onClick:this.gotoDetail})),m.createElement("div",{className:"media-body m-r-md l-h-22"},m.createElement("p",{className:"text-muted m-b-10 lineClamp1"},m.createElement("span",{onClick:this.gotoDetail},this.props.cursor.select("u","name").get()),m.createElement("span",null,r,1==this.props.cursor.select("u","judge").get()&&m.createElement("span",{className:"add_v_img"}),1==this.props.cursor.select("u","mem_st").get()&&C.renderMember(this.props.cursor.select("u","mem_id").get()))),m.createElement(h,{text:e}),this.renderReply()),m.createElement("div",{className:"media-right text-right p-l-0 ",onClick:this.onPrizeBtnClicked},!1,m.createElement("span",{style:{minWidth:55},className:"p-r-20 d-i-b "+(1==this.props.cursor.select("mylike").get()?"red_heart_icon":"gray_heart_icon")},0==this.props.cursor.select("likes").get()?"":this.props.cursor.select("likes").get()))),this.renderInputPanel())}})},1058:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},o=r(15),n=s(o),i=r(75),c=s(i),l=r(981),p=(s(l),r(270)),d=(s(p),r(1043)),m=(s(d),r(114)),u=(s(m),r(76)),h=s(u),f=r(1131),g=s(f),_=r(1132),C=s(_),b=r(115),x=r(275),y=s(x),v=r(170),k=r(287),w=(s(k),r(1089)),E=s(w),T=r(77),N=s(T),S=r(1),P=(r(47),r(982)),M=r(165),B=r(1090),z=B.showActionSheetDialog,I=B.selectActionSheetDialogCallback,A=B.check_actionsheet_support,L=r(1005),j=r(1006).tab_manager,F=r(1006).TabEnum,O=L.showInputPanel,D=L.showInputPanelAtBottom,W=L.clearInput,R=r(1004),q=r(986),H={table:{width:"100%",tableLayout:"fixed",marginBottom:-1},table1:{width:"100%",tableLayout:"fixed",marginBottom:1},tr:{height:"35px"},kzpBtnsWrap:{width:"65%"},kzpBtnsBtn:{width:"20px",height:"20px",marginTop:"-2px"},show:{display:"block",marginTop:-1},hide:{display:"none"}};e.exports=S.createClass({displayName:"exports",mixins:[y.default],contextTypes:{auth_info:S.PropTypes.object,fconf:S.PropTypes.object,env:S.PropTypes.object},getInitialState:function(){return{showInput:!1}},componentDidMount:function(){var e=this.props.cursor.select("tab_manager").get();if(!e){e=j();var t=this.props.cursor.select("current_tabindex").get();e.current_tabindex=t||0,this.props.cursor.select("tab_manager").set(e)}var r=this.context.auth_info;window.onInputFinished=L.onInputFinished,window.selectActionSheetDialogCallback=I,window.onSpreadFeedCallback=this.onSpreadFeedCallback,this.current_replay_cmt_id=0,0==e.current_tabindex&&(r.u>0&&this.props.feed.main.u.id==r.u?this.props.cursor.select("tab_manager","current_tabindex").set(F.visit):this.props.cursor.select("tab_manager","current_tabindex").set(F.comment)),this.current_replay_cmt_id=0;var s=this.props.feed.id+"_"+this.current_replay_cmt_id;D("评论",s,this.sendComment,"评论",!0),this.props.cursor.select("scroll_tab")&&this.props.cursor.select("scroll_tab").get()&&!this.props.cursor.select("comment_id").get()&&setTimeout(function(){location.replace("#zkp_content")},500)},componentWillUnmount:function(){window.onInputFinished=null,window.onSpreadFeedCallback=null,window.selectActionSheetDialogCallback=null},isOutApp:function(){return this.context.auth_info.u<0},loadMore:function(){var e=this,t=this.context.auth_info,r=this.props.cursor.select("tab_manager"),s=r.select("current_tabindex").get(),o=r.select("tabs",s),i=this.getApiUrl(s),l=a({api:i,fid:this.props.feed.id,page:o.get().currentPage,count:(F.comment,20),article_uid:this.props.feed.main.u.id},t);this.refs.loader&&!this.props.cursor.select("tab_manager","tabs",s).get().requesting&&this.props.cursor.select("tab_manager","tabs",s).get().hasMore&&this.refs.loader.bindRequest(function(){var t="/sdk/article/get_tab?"+n.default.stringify(l);return o.select("requesting").set(!0),fetch(t,{credentials:"same-origin"}).then(c.default.parse_online_json).then(function(t){e.updateData(t,o,s);var r=s==F.comment?t.comments.more:t.more;o.select("hasMore").set(1==r),o.select("currentPage").apply(function(e){return e+1}),o.select("cursor_status").set(0),o.select("requesting").set(!1),e.props.cursor.select("tab_manager","tabs",s,"requesting").set(!1)}).catch(function(e){o.select("cursor_status").set("failed"),o.select("requesting").set(!1),c.default.toast_error_handler(e)})})},updateData:function(e,t,r){switch(r){case F.visit:case F.prize:case F.spread:e.contacts&&e.contacts.length>0&&(0==t.select("currentPage").get()?t.select("data","contacts").set(e.contacts):t.select("data","contacts").concat(e.contacts));break;case F.comment:e.comments&&(e.comments.lst&&e.comments.lst.length>0&&(0==t.select("currentPage").get()?t.select("data","comments").set(e.comments.lst):t.select("data","comments").concat(e.comments.lst)),e.comments.hot_comments&&e.comments.hot_comments.length>0&&t.select("data","hot_comments").set(e.comments.hot_comments))}},getApiUrl:function(e){var t;switch(e){case F.prize:t="feed/v3/get_like_list";break;case F.spread:t="feed/v3/get_spread_list";break;case F.comment:t="feed/v3/getcmts";break;case F.visit:t="/article/visit_history_contacts"}return t},onTabVisitClicked:function(){this.props.cursor.select("tab_manager","current_tabindex").set(F.visit)},onTabPrizeClicked:function(){this.props.cursor.select("tab_manager","current_tabindex").set(F.prize)},onTabSpreadClicked:function(){this.props.cursor.select("tab_manager","current_tabindex").set(F.spread)},onTabCommentClicked:function(){this.props.cursor.select("tab_manager","current_tabindex").set(F.comment)},onCommentBtnClicked:function(){if(!this.isOutApp()){if("pc"==this.props.cursor.select("from").get())return void this.onCommentBtnClickedFromPC();this.current_replay_cmt_id=0;var e=this.props.feed.id+"_"+this.current_replay_cmt_id;O("评论",e,this.sendComment,"评论")}},onCommentBtnClickedFromPC:function(){var e=!this.state.showInput;this.replaceState({showInput:e})},onSendCmtClicked:function(e,t,r){var s=this;(0,v.sendComment)({context:this.context,mycard:this.props.cursor.select("mycard").get(),input:e,at:r,feedCursor:this.props.cursor.select("feed"),commentsTabCursor:this.props.cursor.select("tab_manager","tabs",F.comment,"data")}).then(function(e){s.replaceState({showInput:!1}),t.setValue(""),t.updateWordCount(),W(cacheKey)}).catch(toast_error_handler)},sendComment:function(e,t){var r=this;if(!e)return void(0,h.default)("评论内容不能为空");(0,v.sendComment)({context:this.context,input:e,at:t,feedCursor:this.props.cursor.select("feed"),mycard:this.props.cursor.select("mycard").get(),commentsTabCursor:this.props.cursor.select("tab_manager","tabs",F.comment,"data"),reply_to:this.current_replay_cmt_id}).then(function(e){var t=r.props.feed.id+"_"+r.current_replay_cmt_id;W(t),r.current_replay_cmt_id=0}).catch(c.default.toast_error_handler)},onCommentCardClicked:function(e){var t=this.context.auth_info;if(!this.isOutApp())if(e.u.id==t.u)1==confirm("是否要删除您发布的此条评论？")&&this.removeComment(e.id);else{this.current_replay_cmt_id=e.id;var r=this.props.feed.id+"_"+this.current_replay_cmt_id;O("评论",r,this.sendComment,"回复 "+e.u.name)}},onCommentCardLongPressed:function(e){var t=this;if(!this.isOutApp()&&A()&&window.MaiMai_Native.native_copy_text&&window.MaiMai_Native.native_complain){var r=this.context.auth_info,s=["复制"],a=this.props.feed;(e.u.id==r.u||!a.src&&a.main.u&&r.u==a.main.u.mmid||a.src&&a.src.main&&a.src.main.u&&r.u==a.src.main.u.mmid)&&s.push("删除"),e.u.id!=r.u&&s.push("举报"),z("",JSON.stringify(s),function(r){if("复制"===s[r]){var a=e.rt||e.t;window.MaiMai_Native.native_copy_text(a)}else"删除"===s[r]?t.removeComment(e.id):"举报"===s[r]&&window.MaiMai_Native.native_complain(6,e.id,"")},!1)}},removeComment:function(e){(0,v.deleteComment)({context:this.context,feedCursor:this.props.cursor.select("feed"),commentsTabCursor:this.props.cursor.select("tab_manager","tabs",F.comment,"data"),cmt_id:e}).catch(c.default.toast_error_handler)},onPrizeBtnClicked:function(){this.isOutApp()||(0,v.toggleLike)({context:this.context,feedCursor:this.props.cursor.select("feed"),mycard:this.props.cursor.select("mycard").get(),likesTabCursor:this.props.cursor.select("tab_manager","tabs",F.prize,"data")}).catch(c.default.toast_error_handler)},onSpreadFeedCallback:function(e){if(!this.isOutApp()){var t=null!=e?JSON.parse(e):null;(0,v.spreadToFeed)({context:this.context,content:t,mycard:this.props.cursor.select("mycard").get(),feedCursor:this.props.cursor.select("feed"),spreadsTabCursor:this.props.cursor.select("tab_manager","tabs",F.spread,"data")}).catch(c.default.toast_error_handler)}},cancelSpread:function(){(0,v.cancelSpread)({context:this.context,feedCursor:this.props.cursor.select("feed"),mycard:this.props.cursor.select("mycard").get(),spreadsTabCursor:this.props.cursor.select("tab_manager","tabs",F.spread,"data")}).catch(c.default.toast_error_handler)},spreadArticleToFeed:function(){if(this.props.cursor.select("feed","spreads","me").get())this.cancelSpread();else{if(this.props.cursor.select("feed","main","u","id").get()==this.props.cursor.select("mycard","id").get())return void(0,h.default)("好友已经看到，无需分享哦");window.MaiMai_Native.native_show_spread_feed_dialog?MaiMai_Native.native_show_spread_feed_dialog(JSON.stringify(this.props.cursor.select("feed").get()),"onSpreadFeedCallback"):this.onSpreadFeedCallback()}},onSpreadBtnClicked:function(){var e=this.context.env;this.isOutApp()||(e.from_pc?this.onSpreadBtnClickedFromPC():MaiMai_Native.native_share(1))},onSpreadBtnClickedFromPC:function(){var e=this;if(1==this.props.feed.spreads.me)(0,v.cancelSpread)({context:this.context,feedCursor:this.props.cursor.select("feed"),mycard:this.props.cursor.select("mycard").get(),spreadsTabCursor:this.props.cursor.select("tab_manager","tabs",F.spread,"data")}).catch(c.default.toast_error_handler);else{if(this.props.feed.main.u.mmid==this.props.cursor.select("mycard").get().mmid)return void(0,h.default)("好友已经看到，无需分享哦");var t=function(t,r,s){N.default.dismiss(),(0,v.spreadToFeed)({context:e.context,content:{text:t,atUserJsonStr:s},mycard:e.props.cursor.select("mycard").get(),feedCursor:e.props.cursor.select("feed"),spreadsTabCursor:e.props.cursor.select("tab_manager","tabs",F.spread,"data")}).catch(c.default.toast_error_handler)};N.default.popup(S.createElement(E.default,{feed:this.props.feed,onSpread:t,cancel:N.default.dismiss}))}},renderPCInput:function(){return S.createElement("div",{className:"panel-body m-t-md "+(this.state.showInput?"show":"hidden")},S.createElement(R,{users:this.props.users,onClickSend:this.onSendCmtClicked,maxWord:250}))},onDeleteArticle:function(){if(1==confirm("确认删除此文章?")){var e=this.context,t=e.fconf,r=e.auth_info,s=this.props.feed,o=t.online_url+"feed/v3/del?"+n.default.stringify(a({fid:s.id},r));fetch(o).then(c.default.parse_online_json).then(function(){window.MaiMai_Native.close_native?window.MaiMai_Native.close_native(null,!0):(0,h.default)("专栏删除成功")}).catch(c.default.toast_error_handler)}},renderZKPBtns:function(){if(!(this.context.auth_info.u<0)){var e=this.props.feed;return S.createElement("table",{className:"text-center clearfix pull-right m-b-0",style:H.kzpBtnsWrap},S.createElement("tbody",null,S.createElement("tr",{style:H.tr},1==e.del&&S.createElement("td",{className:"text-light",onClick:this.onDeleteArticle},S.createElement("span",{className:"text-primary m-r"},"删除")),S.createElement("td",{className:"text-light",onClick:this.onPrizeBtnClicked},S.createElement("span",null,S.createElement("img",{src:1==this.props.feed.likes.me?"/static/images/dingY.png":"/static/images/ding.png",style:H.kzpBtnsBtn})," "," "+this.props.feed.likes.n>0?this.props.feed.likes.n:"赞")),S.createElement("td",{className:"text-light",onClick:this.onSpreadBtnClicked},S.createElement("span",null,S.createElement("img",{src:1==this.props.feed.spreads.me?"/static/images/kuoY.png":"/static/images/kuo.png",style:H.kzpBtnsBtn})," "," "+this.props.feed.spreads.n>0?this.props.feed.spreads.n:"分享")),S.createElement("td",{className:"text-light",onClick:this.onCommentBtnClicked},S.createElement("span",null,S.createElement("img",{src:"/static/images/ping.png",style:H.kzpBtnsBtn})," "," "+this.props.feed.comments.n>0?this.props.feed.comments.n:"评论")))))}},render:function(){var e=this.context.auth_info,t=this.props.cursor.select("tab_manager").get();if(!t)return null;var r,s=t.tabs[t.current_tabindex],a=t.current_tabindex,o=this.props.cursor.select("tab_manager","tabs",a,"cursor_status"),n="pc"==this.props.cursor.select("from").get(),i=[],c=s.hasMore;return a!=F.comment&&(i=t.tabs[a].data.contacts||[],this.props.wrap&&i.length>5&&(i=i.slice(0,5),c=!1,r=S.createElement(q,{title:"查看更多 >>",onClick:function(){return(0,b.launch_webview)()}}))),S.createElement("div",null,this.renderZKPBtns(),S.createElement("div",{className:"clearfix"},this.renderPCInput(),S.createElement("table",{className:"table-bordered text-center",ref:"tabs",style:a==F.visit?H.table1:H.table},S.createElement("tbody",null,S.createElement("tr",{style:H.tr},S.createElement("td",{className:a==F.visit?"text-info":"text-light",onClick:this.onTabVisitClicked},"谁看过"),S.createElement("td",{className:a==F.prize?"text-info":"text-light",onClick:this.onTabPrizeClicked},"赞 ",this.props.feed.likes.n>0?this.props.feed.likes.n:""),S.createElement("td",{className:a==F.spread?"text-info":"text-light",onClick:this.onTabSpreadClicked},"分享 ",this.props.feed.spreads.n>0?this.props.feed.spreads.n:""),S.createElement("td",{className:a==F.comment?"text-info":"text-light",onClick:this.onTabCommentClicked},"评论 ",this.props.feed.comments.n>0?this.props.feed.comments.n:"")))),S.createElement(P,{loadMore:this.loadMore,hasMore:c,loader:S.createElement(M,{ref:"loader",reload:this.loadMore,cursor:o})},S.createElement("div",{className:"panel panel-default",id:"zkp_content",style:{marginBottom:"0"}},S.createElement("ul",{className:"list-group",key:"1",style:a==F.visit?H.show:H.hide},S.createElement(g.default,{key:"1",contacts:i}),r),S.createElement("ul",{className:"list-group",key:"2",style:a==F.prize?H.show:H.hide},S.createElement(g.default,{key:"2",contacts:i}),r),S.createElement("ul",{className:"list-group",key:"3",style:a==F.spread?H.show:H.hide},S.createElement(g.default,{key:"3",contacts:i}),r),S.createElement("ul",{className:"list-group",key:"4",style:a==F.comment?H.show:H.hide},S.createElement(C.default,{key:"4",wrap:this.props.wrap,auth_info:e,onCommentCardClicked:n?null:this.onCommentCardClicked,onCommentCardLongPressed:n?null:this.onCommentCardLongPressed,scroll_to_id:this.props.cursor.select("comment_id"),comments:this.props.cursor.select("tab_manager","tabs",F.comment,"data","comments"),hot_comments:this.props.cursor.select("tab_manager","tabs",F.comment,"data","hot_comments"),expanded:this.props.cursor.select("tab_manager","tabs",F.comment,"expanded"),from:this.props.cursor.select("from").get(),mycard:this.props.cursor.select("mycard").get(),feedCursor:this.props.cursor.select("feed"),commentsTabCursor:this.props.cursor.select("tab_manager","tabs",F.comment,"data"),hasMore:this.props.cursor.select("tab_manager","tabs",F.comment,"hasMore").get()}))))))}})},1131:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=r(1),o=s(a),n=r(270),i=s(n),c=r(41);e.exports=o.default.createClass({displayName:"exports",mixins:[c],render:function(){return!this.props.contacts||this.props.contacts.length<=0?null:o.default.createElement("div",null,this.props.contacts.map(function(e){return o.default.createElement(i.default,{key:e.mmid,contact:e})}))}})},1132:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=r(1),o=s(a),n=r(1043),i=s(n),c=r(275),l=s(c),p=r(986),d=s(p),m=r(115);r(984);e.exports=o.default.createClass({displayName:"exports",mixins:[l.default],componentDidMount:function(){this.props.scroll_to_id&&this.props.scroll_to_id.get()&&setTimeout(function(){location.replace("#comment_archor")},500)},onExpand:function(){this.props.expanded.set(!0)},renderEmpty:function(){return o.default.createElement("div",{style:{marginTop:50,height:80},className:"text-primary text-center"},"还没有人评论,快来抢沙发")},render:function(){if(!(this.props.hasMore||this.props.comments&&this.props.comments.get()&&0!=this.props.comments.get().length))return this.renderEmpty();var e,t="pc"==this.props.from,r=!0;if(this.props.hot_comments&&this.props.hot_comments.get()&&this.props.hot_comments.get().length>0){e=[],e.push(o.default.createElement("div",{className:"text-left"},o.default.createElement("p",{className:"p-t-20 p-x-20 font-16 font-bold"},"热门评论")));var s=this.props.expanded.get(),a=this.props.hot_comments.get().length;s||(a=Math.min(5,this.props.hot_comments.get().length));for(var n=0;n<a;n++){var c=this.props.hot_comments.select(n),l=n==a-1;e.push(o.default.createElement(i.default,{key:c.id,users:this.props.users,cursor:c,onCommentCardClicked:this.props.onCommentCardClicked,onCommentCardLongPressed:this.props.onCommentCardLongPressed,mycard:this.props.mycard,showReply:t,feedCursor:this.props.feedCursor,isLast:l,commentsTabCursor:this.props.commentsTabCursor}))}this.props.wrap&&this.props.hot_comments.get().length>5?(e.push(o.default.createElement(d.default,{title:"查看更多热门评论 >>",onClick:function(){return(0,m.launch_webview)()}})),r=!1):0==s&&this.props.hot_comments.get().length>5&&e.push(o.default.createElement(d.default,{title:"更多热门评论",onClick:this.onExpand}))}var p=[];if(r){a=this.props.comments.get().length,this.props.wrap&&(a=Math.min(5-this.props.hot_comments.get().length,this.props.comments.get().length)),p.push(o.default.createElement("div",{key:"separator",className:"text-left m-t-10"},o.default.createElement("p",{className:"p-t-20 p-x-20 font-16 font-bold"},"全部",this.props.comments&&this.props.comments.get()&&this.props.comments.get().length,"评论")));for(var n=0;n<a;n++){var c=this.props.comments.select(n),u=c.get().id==this.props.scroll_to_id.get(),l=n==a-1;p.push(o.default.createElement(i.default,{key:c.id,users:this.props.users,cursor:c,onCommentCardClicked:this.props.onCommentCardClicked,onCommentCardLongPressed:this.props.onCommentCardLongPressed,mycard:this.props.mycard,showReply:t,feedCursor:this.props.feedCursor,commentsTabCursor:this.props.commentsTabCursor,isLast:l,archor:u}))}this.props.wrap&&this.props.comments.get().length>5&&p.push(o.default.createElement(d.default,{title:"查看更多评论 >>",onClick:function(){return(0,m.launch_webview)()}}))}return o.default.createElement("div",{key:"comments",className:"PCFeedWarp"},o.default.createElement("div",{key:"hot_cells",className:"gray-bg-f9"},e),o.default.createElement("div",{key:"cells m-t",className:"gray-bg-f9"},p))}})},919:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},o=r(1),n=s(o),i=r(993),c=s(i),l=r(991),p=s(l),d=r(1044),m=(s(d),r(1058)),u=s(m),h=r(1043),f=(s(h),r(981)),g=r(166),_=g.Style,C=r(998),b=r(75),x=r(15),y=n.default.createClass({displayName:"App",contextTypes:{auth_info:n.default.PropTypes.object,req:n.default.PropTypes.object},getInitialState:function(){return{reward_cards:{}}},componentDidMount:function(){document.body.style.backgroundColor="#ededeb",this.props.reward_cards&&this.setState({reward_cards:this.props.reward_cards,reward_count:this.props.reward_count}),this.reload_extra_data(!0),window.collection=this.collection,window.uncollection=this.uncollection,window.spread=this.spread,window.unspread=this.unspread,window.native_image_data=C},reload_extra_data:function(e){var t=this,r=this.context.auth_info,s="/sdk/article/extra_info?"+x.stringify(a({fid:this.props.feed.id,fuid:this.props.feed.main.u.mmid,need_feed:e},r));fetch(s,{credentials:"same-origin"}).then(b.parse_online_json).then(function(e){t.props.cursor.select("mycard").set(e.mycard),t.props.cursor.select("sub_number").set(e.sub_number),t.props.cursor.select("sub_data").set(e.sub_data),e.reward_cards&&t.setState({reward_cards:e.reward_cards,reward_count:e.reward_count}),e.feed&&t.props.cursor.select("feed").set(e.feed),t.props.cursor.select("services").set(e.services),t.props.cursor.select("topic_white").set(e.topic_white)}).catch(b.toast_error_handler)},render:function(){var e,t=this.props.feed,r=this.props.feed.main,s=r.u,a=r.text,o=r.html;this.state.reward_count&&this.state.reward_count>0&&(e=n.default.createElement("p",{style:v.longTxtCount},n.default.createElement("em",{style:v.longTxtCount_em},this.state.reward_count),"人赞赏"));var i=[];for(var l in this.state.reward_cards){var d=[];for(var m in this.state.reward_cards[l])d.push(n.default.createElement("img",{style:v.rewardCard,src:this.state.reward_cards[l][m].avatar}));i.push(n.default.createElement("li",{style:v.reward_list_li},d))}a&&a.length>30&&(a=a.substr(0,30)+"...");var h=n.default.createElement("div",null,n.default.createElement(_,{scopeSelector:".article-text",rules:{img:{maxWidth:"100%",height:"auto"}}}),n.default.createElement(f,{title:a}),n.default.createElement("div",{className:"list-group-item",style:v.author},n.default.createElement("div",{className:"list-group-item-heading list-group-item-text"},n.default.createElement("div",{className:"pull-right text-center",style:v.orderBtn},n.default.createElement("div",null,n.default.createElement("span",{className:"small text-light text-center"},this.props.sub_number?this.props.sub_number.count:0,"位读者"))),n.default.createElement("div",{style:v.UserStyleCardWrap},n.default.createElement(p.default,{user:s,article_line:t.time_relation||t.crtime,image_id:"user_avatar"})))),n.default.createElement("div",{className:"article-text",style:[v.multiLineText,v.containerPadding]},!o&&n.default.createElement(c.default,{text:r.rtext||r.text}),o&&n.default.createElement("div",{dangerouslySetInnerHTML:{__html:o}})),n.default.createElement("div",{style:v.reward_circle},n.default.createElement("p",{style:v.circle_line1},"赏")),e,n.default.createElement("ul",{style:v.reward_list},i),n.default.createElement(u.default,{feed:this.props.feed,cursor:this.props.cursor,ref:"articleZKP"}));return n.default.createElement("div",{className:"white-bg clearfix"},h)}}),v={containerPadding:{paddingLeft:"15px",paddingRight:"15px"},multiLineText:{fontSize:17,marginTop:"20px",lineHeight:"28px",wordWrap:"break-word",fontFamily:'"Microsoft YaHei", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif'},orderBtn:{marginTop:-5,marginRight:-7},author:{backgroundColor:"#fafafa"},reward_circle:{background:"#ff8d5c",borderRadius:"50%",width:"70px",height:"70px",margin:"0 auto",textAlign:"center",color:"#ffffff",display:"table"},circle_line1:{lineHeight:"32px",display:"table-cell",verticalAlign:"middle",fontSize:"24px"},reward_list:{width:"300px",margin:"22px auto"},reward_list_li:{width:"220px",fontSize:0,listStyleType:"none",textAlign:"center"},rewardCard:{width:"30px",height:"30px",border:"0px solid #ffa34a",margin:"0 5px 5px"},longTxtCount:{textAlign:"center",fontSize:"14px",color:"#8a8a8a",lineHeight:"20px",marginTop:"5px"},longTxtCount_em:{color:"#6381a6"},subBtn:{position:"absolute",height:"100px",right:"0px",top:"0px"},subCount:{marginRight:"5px"},UserStyleCardWrap:{marginRight:"70px"},indicators:{marginTop:"20px"},carouselIndicators:{marginLeft:"5px"},table:{width:"100%",tableLayout:"fixed",marginBottom:-1},table1:{width:"100%",tableLayout:"fixed",marginBottom:1},tr:{height:"35px"},kzpBtnsWrap:{width:"50%"},kzpBtnsBtn:{width:"20px",height:"20px",marginTop:"-2px"},show:{display:"block",marginTop:-1},hide:{display:"none"}};e.exports=g(y)}});