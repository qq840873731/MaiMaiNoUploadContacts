webpackJsonp([108],{1188:function(e,t,a){"use strict";var n=a(46),s=function(e){return e&&e.__esModule?e:{default:e}}(n),o=a(1),r=a(285),c=a(15),i=o.createClass({displayName:"JobCardV2",job_detail:function(e){e.stopPropagation(),this.props.job.share_url&&(0,s.default)(this.props.job.share_url,"职位详情","fetch")},openMyMember:function(e){e.stopPropagation(),(0,s.default)("/uh_memlist?"+c.stringify({tpl:"show",fr:"joblist"}),"会员中心","fetch")},render:function(){var e=this.props.job,t=void 0,a=void 0;t=e.company_stage&&e.company_scale?o.createElement("i",null,r(e.company,6)+" | "+r(e.company_stage,7)+" | "+r(e.company_scale,7)):e.company_stage?o.createElement("i",null,r(e.company,12)+" | "+r(e.company_stage,10)):e.company_scale?o.createElement("i",null,r(e.company,12)+" | "+r(e.company_scale,10)):o.createElement("i",null,r(e.company,19)),e.hunter_corner&&(a=o.createElement("img",{className:"imgLie",src:"/static/images/lietou.png"}));var n=void 0;return e.agent_avatar_list&&e.agent_avatar_list.length>0&&(n=o.createElement("dd",{className:"internal_referral"},o.createElement("div",{className:"agent_list"},e.agent_avatar_list.map(function(e){return o.createElement("img",{className:"agent_avatar",src:e})})),e.agent_cnt&&o.createElement("div",{className:"agent_count"},e.agent_cnt,"位好友可帮你内推"))),o.createElement("div",{className:"joblistBox5 col"},o.createElement("dl",{className:"job_click joblistItem5 imgList",onClick:this.job_detail},o.createElement("dd",null,o.createElement("img",{src:e.user.avatar}),o.createElement("em",{className:"stressText"},o.createElement("nobr",null,o.createElement("span",{style:{border:"none",marginTop:"0",padding:"0",borderRadius:"0",marginRight:"4px",color:"#333"}},r(e.user.name,4)+" | "+e.user.short_career),1==e.user.is_mem&&o.createElement("img",{onClick:this.openMyMember,src:"https://maimai.cn/images/icon_mc_"+e.user.mem_id+".png",style:{width:"12px",height:"12px",marginTop:"5px",borderRadius:"0"}}))),o.createElement("em",{className:"replyShow"},e.refresh_time+"回复过")),o.createElement("dd",{className:"jobInfoMod"},o.createElement("div",{className:"imgMod"},a,o.createElement("img",{style:{width:"100%",height:"auto"},src:e.clogo})),o.createElement("div",{className:"jobInfos"},o.createElement("em",{className:"jobName"},o.createElement("i",{style:{float:"left",display:"block"}},r(e.position,8)),o.createElement("i",{style:{float:"right",color:"#FF680D",display:"block"}},e.salary_info)),o.createElement("em",{className:"companyInfo",style:{width:"100%"}},t),o.createElement("em",{className:"jobClaim"},e.province+" "+e.degree+" "+e.worktime))),n))}});e.exports=i},906:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(15),m=n(l),p=a(75),u=a(981),d=n(u),f=a(165),h=n(f),y=a(983),g=n(y),_=a(272),b=n(_),v=a(283),j=a(996),E=n(j),N=a(113),k=a(1),w=a(1188),x=a(1187),C=a(50),F=a(982),S=a(164).putCache,P=a(164).getCache,M=a(1009),T=a(17),I=function(e){function t(){var e,a,n,r;s(this,t);for(var i=arguments.length,l=Array(i),p=0;p<i;p++)l[p]=arguments[p];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={initial:0,tab:0,hot_company_point:0,bannerIndex:0},n.loadMore=function(){var e=n.props.cursor;switch(console.log(n),n.state.tab){case 0:n.refs.loader.bindRequest(function(){return t.loadFilteredData(n.context,n.nextJobPage,n.professionName,n.majorName,n.province,n.city,n.salary).then(function(t){n.nextJobPage++;var a=t.data;e.select("data").concat(a.data),e.select("remain").set(a.remain)})});break;case 1:n.refs.company_loader.bindRequest(function(){return t.loadCompanyData(n.context,n.nextCompanyPage).then(function(t){n.nextCompanyPage++;var a=t.data;e.select("company_data").concat(a.data),e.select("company_remain").set(a.remain)})})}},n.switchTab=function(e){var a=n.props.cursor;1==e&&0==n.nextCompanyPage?(t.loadCompanyData(n.context,n.nextCompanyPage).then(function(t){n.nextCompanyPage++,setTimeout(function(){window.scrollTo(0,0)},100);var s=t.data;a.select("company_data").set(s.data),a.select("company_remain").set(s.remain),n.setState({tab:e,hot_company_point:0})}),S("jobs_hot_compnies","1")):n.setState({tab:e})},n.sendRecords=function(e){e.stopPropagation(),C("/resume_jobs?fr=job_wanted&type=2")},n.favJobs=function(e){e.stopPropagation(),C("/resume_jobs?fr=job_wanted&type=1")},n.jobSetting=function(){MaiMai_Native.native_show_job_push_setting()},n.myResume=function(){var e=n.context.auth_info;MaiMai_Native.native_resume_detail(e.u,0)},n.gotoSearch=function(){MaiMai_Native.native_open_job_search()},n.switch_to=function(){S("jobs_switch_to_hr",1),(0,N.sendWebViewBroadcast)("contact_center_resume",{}),location.replace("/jobs/zhaopin_index")},n.toggleLocsFilter=function(){var e=n.props.cursor.select("locsFilter","close").get();n.props.cursor.select("locsFilter","close").set(!e),n.props.cursor.select("pfmjsFilter","close").set(!0),n.props.cursor.select("salaryFilter","close").set(!0)},n.onSelectLoc=function(e,t){0==n.state.tab&&(e==n.selectedLoc.province&&t==n.selectedLoc.city||(n.selectedLoc.province=e,n.selectedLoc.city=t,n.province=e>=0?n.locs[e].name:"",n.city=t>=0?n.locs[e].items[t].name:"",n.reloadJobList()))},n.onCancelSelectLoc=function(){n.props.cursor.select("locsFilter","parent").set(n.selectedLoc.province),n.props.cursor.select("locsFilter","child").set(n.selectedLoc.city)},n.togglePfmjsFilter=function(){var e=n.props.cursor.select("pfmjsFilter","close").get();n.props.cursor.select("pfmjsFilter","close").set(!e),n.props.cursor.select("locsFilter","close").set(!0),n.props.cursor.select("salaryFilter","close").set(!0)},n.onSelectedPfmj=function(e,t){0==n.state.tab&&(e==n.selectedPfmj.profession&&t==n.selectedPfmj.major||(n.selectedPfmj.profession=e,n.selectedPfmj.major=t,n.profession=e,n.major=t,n.professionName=e>=0?n.pfmjs[e].name:"",n.majorName=t>=0?n.pfmjs[e].items[t].name:"",n.reloadJobList()))},n.onCancelSelectPfmj=function(){n.props.cursor.select("pfmjsFilter","parent").set(n.selectedPfmj.profession),n.props.cursor.select("pfmjsFilter","child").set(n.selectedPfmj.major)},n.toggleSalaryFilter=function(){var e=n.props.cursor.select("salaryFilter","close").get();n.props.cursor.select("salaryFilter","close").set(!e),n.props.cursor.select("pfmjsFilter","close").set(!0),n.props.cursor.select("locsFilter","close").set(!0)},n.onSelectedSalary=function(e){0==n.state.tab&&e!=n.selectedSalary.salary&&(n.selectedSalary.salary=e,n.salary=e-1,n.salaryName=n.salaries[0<=e<n.salaries.length?e:0].name,n.reloadJobList())},n.onCancelSelectSalary=function(){n.props.cursor.select("salaryFilter","parent").set(n.selectedSalary.salary)},n.reloadJobList=function(){var e=n.props,a=e.cursor,s=e.skip_banner;return setTimeout(function(){window.scrollTo(0,1==s?100:0)},100),n.nextJobPage=0,t.loadFilteredData(n.context,n.nextJobPage,n.professionName,n.majorName,n.province,n.city,n.salary).then(function(e){n.nextJobPage++;var t=e.data;a.select("data").set(t.data),a.select("remain").set(t.remain)})},n.renderFilter=function(){var e=n.province||"";"全部"!=n.city&&(e+=n.city||"");var t="first highlight";e&&"全部"!=n.province||(e="全部城市",t+="first");var a=n.professionName||"";"全部"!=n.majorName&&(a+=n.majorName||"");var s="second highlight";a&&"全部"!=n.professionName||(a="全部行业",s+="second");var o=n.salaryName||"",r="third highlight";return o&&"全部"!=n.salaryName||(o="全部薪酬",r+="third"),k.createElement("div",null,k.createElement("div",{className:"searchFilter",style:{top:"43px"}},k.createElement("div",{className:t,onClick:n.toggleLocsFilter},k.createElement("span",null,e)),k.createElement("div",{className:s,onClick:n.togglePfmjsFilter},k.createElement("span",null,a)),k.createElement("div",{className:r,onClick:n.toggleSalaryFilter},k.createElement("span",null,o))),k.createElement(M,{cursor:n.props.cursor.select("locsFilter"),items:n.locs,onSelect:n.onSelectLoc,onCancel:n.onCancelSelectLoc}),k.createElement(M,{cursor:n.props.cursor.select("pfmjsFilter"),items:n.pfmjs,onSelect:n.onSelectedPfmj,onCancel:n.onCancelSelectPfmj}),k.createElement(M,{cursor:n.props.cursor.select("salaryFilter"),items:n.salaries,single:!0,onSelect:n.onSelectedSalary,onCancel:n.onCancelSelectSalary}))},n.pingBanner=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=n.context,s=a.auth_info,o=a.fconf,r=o.online_url+"tools/v3/banner_pingback?"+m.default.stringify(c({source:e.source,sid:e.sid,condid:e.condid,act:t?1:0},s));return fetch(r)},n.renderBanner=function(){n.state.initial>0&&n.timeoutId&&clearTimeout(n.timeoutId);var e=n.props.cursor,t=e.select("banner").get();if(t&&t.length>0){var a=n.state.bannerIndex%t.length,s=t[a];return t.length>1&&n.pingBanner(s),n.state.initial>0&&s.showTime>0&&(n.timeoutId=setTimeout("showNextBanner()",1e3*s.showTime)),k.createElement("div",{className:"clearfix",style:{position:"relative"}},k.createElement("img",{style:{width:"100%"},src:s.image,onClick:function(){C(s.target)}}),1==s.close&&k.createElement("img",{src:"/static/images/jobs/icon_banner_close.png",className:"banner_close",onClick:function(){n.pingBanner(s,!0),e.select("banner").set(t.filter(function(e,t){return t!=a}))}.bind(n)}))}},r=a,o(n,r)}return r(t,e),i(t,[{key:"componentWillMount",value:function(){if("undefined"!=typeof window){this.salaries=["全部","3k及以下/月","3k-7k/月","7k-15k/月","10k-20k/月","15k-30k/月","30k-50k/月","50k以上/月"].map(function(e){return{name:e,items:[]}}),this.locs=v.cst.loc.map(function(e){var t=e.cities.map(function(e){return{name:e.city}});return t.unshift({name:"全部"}),{name:e.province,items:t}}),this.locs.unshift({name:"全部",items:[{name:"全部"}]}),this.pfmjs=v.cst.pfmj.map(function(e){var t=e.majors.map(function(e){return{name:e.name}});return t.unshift({name:"全部"}),{name:e.name,items:t}}),this.pfmjs.unshift({name:"全部",items:[{name:"全部"}]});var e=this.props.filters;this.province=e.province,this.city=e.city,this.professionName=e.professionName,this.majorName=e.majorName,this.salary=e.salary;var t=this.province&&T.findIndex(this.locs,{name:this.province}),a=this.city&&(t>0?T.findIndex(this.locs[t].items,{name:this.city}):-1);t>=0?a=a>0?a:0:(t=0,a=-1);var n=this.profession&&T.findIndex(this.pfmjs,{name:this.professionName}),s=this.major&&(n>0?T.findIndex(this.pfmjs[n].items,{name:this.majorName}):-1);n>=0?s=s>0?s:0:(n=0,s=-1);var o=this.salary+1;this.salaryName=this.salaries[0<=o<this.salaries.length?o:0].name,this.selectedLoc={province:t,city:a},this.selectedPfmj={profession:n,major:s},this.selectedSalary={salary:o},this.props.cursor.merge({locsFilter:{parent:t,child:a,close:!0},pfmjsFilter:{parent:n,child:s,close:!0},salaryFilter:{parent:o,child:0,close:!0}})}}},{key:"componentDidMount",value:function(){var e=this;this.nextJobPage=1,this.nextCompanyPage=0,window.switch_to=this.switch_to,S("jobs_switch_to_hr",0),P("jobs_hot_compnies",function(t){"1"==t?e.setState({hot_company_point:0}):e.setState({hot_company_point:1})}),1==this.props.skip_banner&&window.scrollTo(0,80),window.showNextBanner=function(){this.setState({bannerIndex:this.state.bannerIndex+1})}.bind(this),this.setState({initial:1}),this.props.goto_joburl&&C(this.props.goto_joburl)}},{key:"render",value:function(){var e=this,t=this.props.cursor,a=c({},b.default);a.top_right_item={title:"我要招人",callback:"switch_to()"};var n=void 0,s=void 0,o=void 0,r=void 0,i=void 0,l=void 0,m=void 0;switch(this.state.tab){case 0:t.select("salaryFilter","close").get()&&t.select("locsFilter","close").get()&&t.select("pfmjsFilter","close").get()&&(r=this.props.data.length>0?k.createElement(F,{loadMore:this.loadMore,hasMore:this.props.remain>0,loader:k.createElement(h.default,{ref:"loader",reload:this.loadMore,cursor:t.select("loading_status")})},k.createElement("div",{className:"panel panel-default"},k.createElement("ul",{className:"list-group",style:{background:"#efeff4"}},this.props.data.map(function(e){return k.createElement(w,{key:e.id,job:e})})))):k.createElement(E.default,{tips:"当前筛选条件没有在招职位",onClick:function(){}}));break;case 1:r=k.createElement(F,{loadMore:this.loadMore,hasMore:this.props.company_remain>0,loader:k.createElement(h.default,{ref:"company_loader",reload:this.loadMore,cursor:t.select("loading_status")})},k.createElement("div",{className:"panel panel-default"},k.createElement("ul",{className:"list-group"},this.props.company_data.map(function(e){return k.createElement(x,{key:e.cid,company:e})}))));break;case 2:r=k.createElement("div",{className:"job_wanted",style:{background:"#efeff4"}},k.createElement("div",{className:"jobColumns",onClick:this.sendRecords},k.createElement("em",{className:"myJobName record"},"我的投递记录"),k.createElement("em",{className:"tipInfo"}," ")),k.createElement("div",{className:"jobColumns",onClick:this.favJobs},k.createElement("em",{className:"myJobName job_fav"},"收藏的职位"),k.createElement("em",{className:"tipInfo"}," ")),k.createElement("div",{className:"jobColumns",style:{marginTop:"10px"},onClick:this.jobSetting},k.createElement("em",{className:"myJobName rss"},"订阅职位"),k.createElement("em",{className:"tipInfo"}," ")),k.createElement("div",{className:"jobColumns",onClick:this.myResume},k.createElement("em",{className:"myJobName resume"},"我的简历"),k.createElement("em",{className:"tipInfo"}," ")))}return 0==this.state.tab&&(n=k.createElement("div",{className:"searchColor",style:L.search},k.createElement("div",{className:"connSearchBar",onClick:this.gotoSearch},k.createElement("span",{className:"searchBarBg"},"搜索"))),this.props.showFilter?(o=this.renderFilter(),m={paddingTop:"85px"}):m={paddingTop:"45px"},s=this.renderBanner()),console.log("hot_company_point="+this.state.hot_company_point),1==this.state.hot_company_point?(i=k.createElement("em",{className:"ygd"}," "),l="cpname"):l="",k.createElement("div",{style:m},k.createElement(d.default,{title:"求职"}),k.createElement(g.default,{msg_to_app:a}),n,o,s,r,k.createElement("span",{style:{marginBottom:"40px",display:"block"}}," "),k.createElement("div",{className:"jobtab",style:{height:"iphoneX"==this.context.env.device?83:49}},k.createElement("div",{className:0==this.state.tab?"item_a":"item_a job_normal",onClick:function(){e.switchTab(0)}},"职位"),k.createElement("div",{className:1==this.state.tab?"item_c":"item_c company_normal",onClick:function(){e.switchTab(1)}},i," ",k.createElement("em",{className:l,style:{fontStyle:"normal"}},"公司")),k.createElement("div",{className:2==this.state.tab?"item_b":"item_b resume_normal",onClick:function(){e.switchTab(2)}},"求职管理")))}}],[{key:"loadData",value:function(e,a){return t.loadFilteredData(e,a,"","","","")}},{key:"loadFilteredData",value:function(e,t,a,n,s,o,r){var i=e.req,l=i.query,u=c({page:t,jsononly:1},l);void 0!=a&&a.length>0&&(u.professionName=a),void 0!=n&&n.length>0&&(u.majorName=n),void 0!=s&&s.length>0&&(u.province=s),void 0!=o&&o.length>0&&(u.city=o),void 0!=r&&r>-1&&(u.salary=r);var d=i.pathname+"?"+m.default.stringify(u);return fetch(d,{credentials:"same-origin"}).then(p.parse_online_json)}},{key:"loadCompanyData",value:function(e,t){var a=e.req,n=a.query,s="/jobs/hot_companies?"+m.default.stringify(c({page:t,jsononly:1},n));return fetch(s,{credentials:"same-origin"}).then(p.parse_online_json)}}]),t}(k.Component);I.contextTypes={auth_info:k.PropTypes.object,req:k.PropTypes.object,fconf:k.PropTypes.object,env:k.PropTypes.object};var L={search:{position:"fixed",top:"0px",left:"0px",width:"100%",zIndex:"9999",boxSizing:"border-box"}};t.default=e.exports=I}});