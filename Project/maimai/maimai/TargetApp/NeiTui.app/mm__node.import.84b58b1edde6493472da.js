webpackJsonp([149],{837:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(15),u=(n(c),a(981)),i=n(u),p=a(1),f=n(p),d=a(50),m=n(d),b=a(77),y=(n(b),a(1e3)),k=(n(y),a(46)),h=(n(k),a(113)),v=a(164),E=a(76),_=n(E),g=a(1036),N=n(g),j=a(270),w=a(1029),x=a(75),O=(x.parse_online_json,x.toast_error_handler,a(985)("app"),N.default.styles);t.default=e.exports=function(e){function t(){var e,a,n,l;r(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.passTask=function(){var e=n.props,t=e.task;e.cursor;2==t.job.status?(0,_.default)("该职位已过期"):(0,v.spreadJob)(t)},n.renderBottomButtons=function(){return f.default.createElement("div",null,f.default.createElement("span",{style:O.buttonL},f.default.createElement("button",{onClick:n.ignoreTask,className:"btn btn-block btn-ignore"},"忽略")),f.default.createElement("span",{style:O.buttonR},f.default.createElement("button",{onClick:n.passTask,className:"btn btn-block btn-secondary"},"帮TA分享")))},n.renderDoneArea=function(){var e=n.props.task;return f.default.createElement("div",{className:"text-center text-muted",style:O.done},1==e.accepted&&f.default.createElement("span",{className:"glyphicon glyphicon-ok-circle"}),1==e.accepted?" 已分享":"已忽略")},n.openJobDetail=function(){(0,m.default)(n.props.task.job.share_url)},l=a,o(n,l)}return l(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props.cursor;(0,h.bindBroadcast)("task_is_done",function(){e.select("task").select("accepted").set(1)})}},{key:"render",value:function(){var e=this.props,t=e.task,a=e.contact,n=e.extra,r=t.job;return f.default.createElement("div",{className:"bg"},f.default.createElement(i.default,{title:"求分享职位"}),f.default.createElement(j,{contact:a}),f.default.createElement("div",{className:"list-group-item"},f.default.createElement("div",{className:"text-muted small"},a.name+": "+(t.attach||"求分享职位"))),f.default.createElement("div",{className:"list-group-item small",style:O.applyMargin},"求分享",f.default.createElement("span",{className:"text-muted",style:O.recName},'我正在招 "'),f.default.createElement("span",{className:"text-primary",onClick:this.openJobDetail},r.position),f.default.createElement("span",{className:"text-muted",style:O.recName},'" 职位, '+T[r.salary||0]+" "+r.province+" "+r.company)),n.hbval&&f.default.createElement(w,{hbval:n.hbval}),t.accepted?this.renderDoneArea():this.renderBottomButtons())}}]),t}(N.default);var T=["3k及以下/月","3k-7k/月","7k-15k/月","10k-20k/月","15k-30k/月","30k-50k/月","50k以上/月"]}});