webpackJsonp([42],{1124:function(e,t,c){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e},s=c(75),n=c(15),r=c(113);e.exports=function(e,t,c,o,i){return new Promise(function(l,h){window.MaiMai_Native.native_local_search_with_contacts?(r.unbindBroadcast("local_search_result"),r.bindBroadcast("local_search_result",function(t){console.log(t);var c=JSON.parse(t);if(c.searchKey==e)if(i){var r=i.fconf,o=i.auth_info,h=[];c.local_contacts.data.forEach(function(e){e.in_app=1,h.push(new Promise(function(t,c){var i=r.online_url+"talent/v3/uh/get_one_sentence?"+n.stringify(a({u2:e.id},o));fetch(i).then(s.parse_online_json).then(function(e){t(e)},c)}))});var u=Promise.all(h);u.then(function(e){c.local_contacts.data.forEach(function(t,a){return c.local_contacts.data[a].one_sentence=e[a].one_sentence}),l(c)})}else c.local_contacts.data.forEach(function(e){e.in_app=1}),l(c)}),window.MaiMai_Native.native_local_search_with_contacts(e,t,c,o)):window.MaiMai_Native.native_local_search?(r.unbindBroadcast("local_search_result"),r.bindBroadcast("local_search_result",function(t){var c=JSON.parse(t);c.searchKey==e&&l(c)}),window.MaiMai_Native.native_local_search(e,t,c)):l({})})}},1126:function(e,t,c){"use strict";var a=c(1),s=c(46),n=c(15),r=a.createClass({displayName:"Search",contextTypes:{auth_info:a.PropTypes.object,req:a.PropTypes.object},componentDidMount:function(){document.body.style.background="#f6f6f6"},gotoSearchFeed:function(){s("/search/feeds?"+n.stringify({blank:"true",highlight:"true"}),"","fetch",{show_search_title:!0,search_hint:"搜索实名动态",search_focus:!1})},gotoSearchGossip:function(){s("/search/gossips?"+n.stringify({blank:"true",highlight:"true"}),"","fetch",{show_search_title:!0,search_hint:"搜索匿名交流",search_focus:!1})},gotoSearchContact:function(){s("/search/contacts_all?"+n.stringify({blank:"true",highlight:"true"}),"","fetch",{show_search_title:!0,search_hint:"搜索人脉",search_focus:!1})},gotoSearchJob:function(){window.MaiMai_Native.native_open_job_search?window.MaiMai_Native.native_open_job_search():s("/search/jobs?"+n.stringify({blank:"true",highlight:"true"}),"",{init_empty:1},{show_search_title:!0,search_hint:"搜索职位",search_focus:!0})},gotoSearchMeeting:function(){s("/search/meetings?"+n.stringify({blank:"true",highlight:"true"}),"",{init_empty:1},{show_search_title:!0,search_hint:"搜索活动",search_focus:!0})},gotoSearchTopic:function(){s("/search/topics?"+n.stringify({blank:"true",highlight:"true"}),"",{init_empty:1},{show_search_title:!0,search_hint:"搜索话题",search_focus:!0})},render:function(){return a.createElement("div",null,a.createElement("div",{className:"middleLineBox text-center",style:{background:"#f6f6f6",margin:"30px auto"}},a.createElement("div",{className:"middleLine"}),a.createElement("div",{className:"middleLineTxt",style:{background:"#f6f6f6"}},"在这里可以搜到")),a.createElement("div",{className:"searchIcons m-x clearfix"},a.createElement("div",{className:"searchItem m-b-10"},a.createElement("a",{href:"javascript:void(0)",onClick:this.gotoSearchJob},a.createElement("span",{className:"search_job_icon"})),a.createElement("p",{className:"text-muted small text-center"},"职位")),a.createElement("div",{className:"searchItem m-b-10"},a.createElement("a",{href:"javascript:void(0)",onClick:this.gotoSearchContact},a.createElement("span",{className:"search_renmai_icon"})),a.createElement("p",{className:"text-muted small text-center"},"找人")),a.createElement("div",{className:"searchItem m-b-10"},a.createElement("a",{href:"javascript:void(0)",onClick:this.gotoSearchFeed},a.createElement("span",{className:"search_feed_icon"})),a.createElement("p",{className:"text-muted small text-center"},"实名动态")),a.createElement("div",{className:"searchItem m-b-10"},a.createElement("a",{href:"javascript:void(0)",onClick:this.gotoSearchGossip},a.createElement("span",{className:"search_gossip_icon"})),a.createElement("p",{className:"text-muted small text-center"},"匿名交流")),a.createElement("div",{className:"searchItem m-b-10"},a.createElement("a",{href:"javascript:void(0)",onClick:this.gotoSearchTopic},a.createElement("span",{className:"search_topic_icon"})),a.createElement("p",{className:"text-muted small text-center"},"话题")),a.createElement("div",{className:"searchItem m-b-10"},a.createElement("a",{href:"javascript:void(0)",onClick:this.gotoSearchMeeting},a.createElement("span",{className:"search_meeting_icon"})),a.createElement("p",{className:"text-muted small text-center"},"活动"))))}});e.exports=r},733:function(e,t,c){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=c(1021),n=a(s),r=c(113),o=c(1007),i=a(o),l=c(1020),h=a(l),u=c(17),p=c(15),m=(c(76),c(50),c(46)),d=c(1),_=(c(273),c(270)),f=(c(1033),c(990)),y=c(166),g=c(75),v=c(165),w=c(1124),E=c(63),b=c(986),k=c(271),N=(c(1057),c(291)),C=(c(1126),d.createClass({displayName:"contacts_all",childContextTypes:E.contentTypes,contextTypes:{auth_info:d.PropTypes.object,req:d.PropTypes.object,fconf:d.PropTypes.object},getChildContext:function(){return E.getChildContext(this)},searchContacts:function(){m("/search/contacts?"+p.stringify({query:this.props.searchKey,dist:3,searchTokens:JSON.stringify(this.props.searchTokens),me:1,highlight:"true",frm:this.props.fr||"webview#/search/contacts"}),"更多人脉","fetch",{show_search_title:!0,search_keyword:this.props.searchKey,search_hint:"搜索人脉"})},searchD1Contacts:function(){m("/search/contacts?"+p.stringify({query:this.props.searchKey,dist:1,searchTokens:JSON.stringify(this.props.searchTokens),me:1,highlight:"true",frm:this.props.fr||"webview#/search/contacts"}),"更多好友","fetch",{show_search_title:!0,search_keyword:this.props.searchKey,search_hint:"搜索好友"})},renderDist1Contacts:function(){if(this.props.local_contacts&&this.props.local_contacts.data&&0!=this.props.local_contacts.data.length)return d.createElement(k,{title:"好友"},this.props.local_contacts.data.map(function(e){return d.createElement(_,{key:e.mmid,contact:e})}),function(){if(this.props.local_contacts.remain>0)return d.createElement(b,{onClick:this.searchD1Contacts,title:"更多好友 >>"})}.bind(this)())},renderContacts:function(){if(this.props.contacts&&this.props.contacts.count&&0!=this.props.contacts.count){var e=this.props,t=e.cursor,c=e.mycard,a=this.props.contacts.is_mmax;return d.createElement("div",null,d.createElement(k,{title:"人脉"},this.props.contacts.contacts.map(function(e,s){return e.is_company?d.createElement(N,{logo:e.company.clogo,name:e.company.name,stdname:e.company.stdname,line2:e.company.line2,company_url:e.company.share_url,noBorderBottom:!0}):1!=e.contact.dist&&0!=e.contact.dist||1==a?e.contact.outofrel||1==a?d.createElement(h.default,{contact:e.contact,key:e.contact.id,from:"webview#/search/contacts",cursor:t.select("contacts",s,"contact"),search:!0,mycard:c,is_mmax:a}):d.createElement(i.default,{contact:e.contact,key:e.contact.id,from:"webview#/search/contacts_all",cursor:t.select("contacts","contacts",s,"contact"),search:!0,mycard:c}):d.createElement(_,{key:e.contact.mmid,contact:e.contact})}),function(){if(this.props.contacts.more>0)return d.createElement(b,{onClick:this.searchContacts,title:"更多人脉 >>"})}.bind(this)()),a>0&&d.createElement("ul",{className:"m-t-30 search_tel_tip"},d.createElement("li",null,"非会员搜索手机号上限每月5次"),d.createElement("li",null,"商务版会员搜索手机号上限每月15次"),d.createElement("li",null,"VIP版会员搜索手机号上限每月80次"),d.createElement("li",null,"招聘版会员搜索手机号每月上限200次")))}},onSearchKeyChanged:function(e){var t=JSON.parse(e);this.currentKey!=t.keyword&&(this.props.cursor.merge({searchTokens:[t.keyword],loading_status:"loading",contacts:{},local_contacts:{}}),this.currentKey=t.keyword,this.onRetryLoad())},onRetryLoad:function(){this.currentKey&&this.currentKey.length>0?this.searchContent(this.currentKey):this.props.cursor.merge({loading_status:null,blank:!0})},searchContent:u.throttle(function(e){var t=this;if(this.currentKey==e){this.props.cursor.merge({loading_status:"loading",complete:!1,contacts:{},local_contacts:{}});var c=!1,a=!1,s=!1,n=!1,r="/search/contacts?"+p.stringify({query:e,count:6,page:0,dist:3,me:1,highlight:"true",match_company:!0,jsononly:1,frm:this.props.fr||"webview#/search/contacts_all"}),o=function(){t.currentKey==e&&t.props.cursor.merge({complete:s&&c})};fetch(r,{credentials:"same-origin"}).then(g.parse_online_json).then(function(a){if(t.currentKey==e){if(s=!0,a.data.contacts&&a.data.contacts.length>0)return a.data.count=a.data.contacts.length,a.data.contacts=a.data.contacts.slice(0,3),t.props.cursor.select("contacts").set(a.data),t.props.cursor.select("searchTokens").set(a.data.searchTokens),t.props.cursor.select("searchKey").set(t.currentKey),void t.props.cursor.select("loading_status").set(null);c&&t.props.cursor.merge({loading_status:null})}}).catch(function(r){t.currentKey==e&&(n=!0,s=!0,c&&a&&t.props.cursor.merge({loading_status:"failed"}))}).then(o),w(e,0,0,3,this.context).then(function(r){if(t.currentKey==e){if(c=!0,!t.isResultEmpty(r))return t.props.cursor.merge(u.extend(r,{loading_status:null})),void t.props.cursor.select("searchKey").set(t.currentKey);a=!0,n?t.props.cursor.select("loading_status").set("failed"):s&&t.props.cursor.select("loading_status").set(null)}}).then(o)}},1e3),componentDidMount:function(){(0,r.bindBroadcast)("broadcast_web_pay_suc",this.paySuc),window.MaiMai_Native.native_local_search_with_contacts&&(this.newClient=!0),window.search_callback=this.onSearchKeyChanged},paySuc:function(){var e=this;setTimeout(function(){"undefined"!=typeof window&&e.onRetryLoad()},1e3)},componentWillUnmount:function(){window.search_callback=null},isResultEmpty:function(e){return!(e.contacts&&e.contacts.contacts&&0!=e.contacts.contacts.length||e.local_contacts&&e.local_contacts.data&&0!=e.local_contacts.data.length)},render:function(){if(this.currentKey)return this.props.loading_status?d.createElement(v,{ref:"loader",reload:this.onRetryLoad,cursor:this.props.cursor.select("loading_status")}):this.isResultEmpty(this.props)?d.createElement("div",{style:f.empty},"没有找到相关结果"):!this.props.complete&&d.createElement("div",null,this.renderDist1Contacts(),d.createElement(v,{ref:"loader",reload:this.onRetryLoad,cursor:this.props.cursor.select("loading_status")}))||d.createElement("div",null,this.renderDist1Contacts(),this.renderContacts());if("undefined"!=typeof window&&window&&window.MaiMai_Native.native_set_search_key){var e=this.props.hotwords;return d.createElement(n.default,{search:"contacts",hotwords:e})}return d.createElement("div",null)}}));e.exports=y(C)}});