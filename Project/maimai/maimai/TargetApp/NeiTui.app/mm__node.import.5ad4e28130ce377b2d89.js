webpackJsonp([265],{863:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(15),d=r(p),f=n(75),m=n(981),b=r(m),h=n(165),v=r(h),y=n(1047),j=r(y),_=n(1),E=n(1168),g=n(1045),x=n(1170),w=n(982);t.default=e.exports=(c=l=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.loadMore=function(){var e=r.props.cursor;r.refs.loader.bindRequest(function(){return t.loadData(r.context,r.nextPage).then(function(t){r.nextPage++;var n=t.data;e.select("data").concat(n.data),e.select("job").set(n.job),e.select("remain").set(n.remain)})})},r.edit_job=function(){MaiMai_Native.native_job_update&&r.props.job&&MaiMai_Native.native_job_update(r.props.job.id,"excellent","onJobUpdate")},i=n,a(r,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.nextPage=1,window.onJobUpdate=function(){location.reload()}}},{key:"render",value:function(){var e=this,t=this.props.cursor,n=this.context.req,r=!1,o=void 0;return o=this.props.show_tab?_.createElement(g,{curName:"优秀人才推荐",curIndex:0,otherName:"看过职位的人",otherUrl:"/company/job/visitors?jid="+this.props.job.id+(n.query.fr?"&fr="+n.query.fr:""),otherNum:0}):_.createElement("div",{className:"panel-default"},_.createElement("div",{className:"panel-heading",style:{padding:"7px 10px"}},_.createElement("span",{className:"text-muted small"},"优秀人才需要你更用心才能挖到哦！"))),_.createElement("div",null,_.createElement(b.default,{title:this.props.show_tab?"职位候选人":"优秀人才推荐"}),_.createElement(x,{job:this.props.job}),o,this.props.data.length>0||_.createElement(j.default,{tips:"抱歉，暂未匹配到优秀人才，请检查职位技能标签是否填写正确",btn:"编辑职位",btnOnClick:this.edit_job,onClick:function(){}}),_.createElement(w,{loadMore:this.loadMore,hasMore:this.props.remain>0,loader:_.createElement(v.default,{ref:"loader",reload:this.loadMore,cursor:t.select("loading_status")})},_.createElement("div",{className:"panel panel-default"},_.createElement("ul",{className:"list-group"},this.props.data.map(function(t){var n=void 0;return r||1!=t.excellent.checked||(r=!0,n=_.createElement("div",{className:"middleLineBox text-center"},_.createElement("div",{className:"middleLine"}),_.createElement("div",{className:"middleLineTxt"},"上次你看到这里啦"))),_.createElement("div",null,n,_.createElement(E,{item:t,from:"jexcellent",from_id:e.props.job.id}))})))))}}],[{key:"loadData",value:function(e,t){var n=e.req,r=n.query,o=n.pathname+"?"+d.default.stringify(s({page:t,jsononly:1},r));return fetch(o,{credentials:"same-origin"}).then(f.parse_online_json)}}]),t}(_.Component),l.contextTypes={auth_info:_.PropTypes.object,req:_.PropTypes.object,fconf:_.PropTypes.object},c)}});