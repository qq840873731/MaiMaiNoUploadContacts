webpackJsonp([30],{1145:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(77),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=e.exports=function(e,t,a){var n=1;r.default.showProgressDialog(e),t.then(function(e){1==n&&r.default.hideProgressDialog(),n=2,!a&&e&&r.default.toast(e)}).catch(function(e){1==n&&r.default.hideProgressDialog(),n=2,r.default.toast(e)})}},1636:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s,c,u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),f=n(d),m=a(75),_=n(m),p=a(17),h=n(p),v=a(15),y=n(v),g=a(77),b=n(g),w=a(1145),E=n(w),x=(s=o=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));c.call(a);var n=parseInt(5*Math.random());return a.state={textarea_sub:"最多1000字",defined_bg_url:"",default_bg_num:n},a}return l(t,e),u(t,[{key:"componentDidMount",value:function(){window.upload_callback=this.upload_callback}},{key:"render",value:function(){var e=void 0;this.props.pop_bg_ratio&&(e=this.props.pop_width*this.props.pop_bg_ratio);var t="/static/images/activity/mother_day/md_edit_bg"+this.state.default_bg_num+".jpg",a=this.state.defined_bg_url.length>0;return f.default.createElement("div",null,f.default.createElement("div",{className:"md_edit_bg_wrap p-relative w-100 o-hidden"},f.default.createElement("div",{className:"md_edit_bg",style:{height:e}},f.default.createElement("img",{src:a?this.state.defined_bg_url:t})),f.default.createElement("div",{className:"md_edit_bg_cover"}),MaiMai_Native.native_upload_image&&f.default.createElement("div",{className:"md_item_load_img text-center",onClick:this.uploadImg},f.default.createElement("img",{className:"md_camera",src:"/static/images/activity/mother_day/md_camera.png"}))),f.default.createElement("div",{className:"md_edit_textarea_wrap"},f.default.createElement("textarea",{onChange:this.textChange,className:"ny_edit_textarea",ref:"txt",placeholder:"谁是职场辣妈..."}),f.default.createElement("div",{className:"ny_edit_textarea_sub"},this.state.textarea_sub)),f.default.createElement("div",{className:"text-center p-y-5",onClick:this.publish},f.default.createElement("span",{className:"ny_pub_btn"},"发布")))}}]),t}(f.default.Component),c=function(){var e=this;this.textChange=function(t){var a=t.target.value.length,n=1e3-a;if(n<1e3){var r=n>=0?"剩余":"已超出",i=n>=0?n:-n,l=r+i+"字";e.setState({textarea_sub:l})}else e.setState({textarea_sub:"最多1000字"})},this.publish=h.default.debounce(function(){var t=e.refs.txt.value||"",a=e.state.default_bg_num;if(0==t.length)return void b.default.toast("请输入描述内容");if(t.length>1e3)return void b.default.toast("描述内容最多1000个字");var n=e.props,r=n.avatar,i=n.u,l=n.name,o=n.req,s=o.query?o.query.shareid:"",c=o.query?o.query.wxtoken:"",u=e.state.defined_bg_url,d="/sdk/activity/pub_mother_activity?"+y.default.stringify({uinfo:i}),f=fetch(d,{credentials:"same-origin",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:y.default.stringify({uinfo:i,text:t,avatar:r,name:l,shareid:s,wxtoken:c,default_bg_num:a,defined_bg_url:u})}).then(_.default.parse_online_json).then(function(t){e.props.cursor.select("data","feed").unshift(t.feed),b.default.dismiss(),e.props.showPubImg()}).catch(function(e){alert(e)});(0,E.default)("发送中",f)},500),this.upload_callback=function(t){e.props.is_ios&&MaiMai_Native.show_dialog_bg();var a=JSON.parse(t);e.setState({defined_bg_url:a.url})},this.uploadImg=function(){if(MaiMai_Native.native_upload_image){var t={type:2,compress:.6,security:1};MaiMai_Native.native_upload_image(JSON.stringify(t),"upload_callback"),e.props.is_ios&&MaiMai_Native.hide_dialog_bg()}}},s);t.default=e.exports=x},1637:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),f=n(d),m=a(77),_=n(m),p=a(169),h=n(p),v=a(75),y=n(v),g=a(17),b=n(g),w=a(15),E=n(w),x=a(78),N=n(x),k=a(115),M=a(276),j=(s=o=function(e){function t(){var e,a,n,l;r(this,t);for(var o=arguments.length,s=Array(o),u=0;u<o;u++)s[u]=arguments[u];return a=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.getImgHeight=function(e,t,a){return a/t*e},n.onShareWXFriend=b.default.debounce(function(){if(n.checkShareInterface()){var e=n.props.item;window.MaiMai_Native.native_share_v2&&window.MaiMai_Native.native_share_v2(4,JSON.stringify({icon_url:e.tmp_image,share_wx_type:2,title:e.title,desc:e.text}))}},500),n.onShareWX=b.default.debounce(function(){if(n.checkShareInterface()){var e=n.props.item;window.MaiMai_Native.native_share_v2&&window.MaiMai_Native.native_share_v2(3,JSON.stringify({icon_url:e.tmp_image,share_wx_type:2,title:e.title,desc:e.text}))}},500),n.checkShareInterface=function(){var e=n.context.auth_info,t=e.channel;return"AppStore"==t||"Development"==t||"InHouse"==t||"InHouseDev"==t||"develop"==t||(!M.lt(e.version,"4.15.7")||(toast("请下载最新版本客户端分享~"),!1))},n.showImg=function(e){e&&e.stopPropagation();var t=(n.context.req,n.props.item),a=!!window.MaiMai_Native.native_share_v2,r=(0,h.default)().width>500?500:(0,h.default)().width-40,i=(0,h.default)().height,l=i-(a?135:90),o=t.image[0].x,s=a?t.image[0].y:t.image[0].y+180,c=n.getImgHeight(r,o,s),u=a?t.image[0].url:t.tmp_image;_.default.popup2({content:f.default.createElement("div",{style:{width:r}},f.default.createElement("div",{className:"text-right font-0 m-b-10",onClick:_.default.dismiss},f.default.createElement("span",{className:"ny_close_pop"})),f.default.createElement("div",{className:"ny_view_word",style:{height:c>l?l:c}},f.default.createElement("img",{className:"mw-100 ny_border_radius_6",src:u})),f.default.createElement("div",{className:"text-center text-white m-t-10",style:{display:a?"block":"none"}},f.default.createElement("div",{className:"ny_wechat_wrap m-r",onClick:n.onShareWXFriend},f.default.createElement("span",{className:"ny_wechat"}),f.default.createElement("br",null),f.default.createElement("span",null,"微信好友")),f.default.createElement("div",{className:"ny_wecircle_wrap m-l",onClick:n.onShareWX},f.default.createElement("span",{className:"ny_wecircle"}),f.default.createElement("br",null),f.default.createElement("span",null,"朋友圈"))),!a&&f.default.createElement("div",{className:"ny_save_text text-center m-t-10"},"长按图片保存")),popupBgClass:" popup_container_bg_opacity_8"})},n.gotoDetail=function(e){if(e.stopPropagation(),n.context.auth_info.u<0)return void(0,k.launch_webview)();(0,N.default)(n.props.item.uinfo.id,n.context)},n.onLikeClicked=function(e){console.log("like clicked ");var t=n.context,a=t.auth_info,r=t.fconf,i=n.props,l=i.cursor,o=i.item;if(a&&a.access_token){1==o.mylike?(l.select("mylike").set(0),l.select("likes").set(o.likes-1)):(l.select("mylike").set(1),l.select("likes").set(o.likes+1));var s=r.online_url+"feed/v3/like?"+E.default.stringify(c({fid:o.id,like:1==o.mylike?0:1},a));fetch(s,{credentials:"same-origin"}).then(y.default.parse_online_json).then(function(e){}).catch(function(e){})}},l=a,i(n,l)}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props.item,t=e.image[0].url;return f.default.createElement("div",null,f.default.createElement("div",{className:"halfWidth fl md_item_wrap"},f.default.createElement("div",{className:"md_item"},f.default.createElement("div",{className:"md_item_top",onClick:this.showImg},f.default.createElement("img",{className:"md_item_img",src:t})),f.default.createElement("div",{className:"md_item_bottom"},f.default.createElement("div",{className:"md_text_summary"},e.text),f.default.createElement("div",{className:"p-x-10 p-b p-t-5 clearfix"},f.default.createElement("div",{className:"fl font-0 w-60",onClick:this.gotoDetail},f.default.createElement("div",{className:"avatar-25 m-r-5 font-0 fl"},f.default.createElement("img",{className:"radius-50 mw-100",src:e.uinfo.avatar})),f.default.createElement("div",{className:"md_name"},e.uinfo.name)),f.default.createElement("div",{className:"fr",onClick:this.onLikeClicked},f.default.createElement("span",{className:"font-12 m-t-5 "+(e.mylike?"ny_like_icon_red":"md_like_icon")},e.likes>0?e.likes:"")))))))}}]),t}(f.default.Component),o.contextTypes={auth_info:f.default.PropTypes.object,req:f.default.PropTypes.object,fconf:f.default.PropTypes.object},s);t.default=e.exports=j},930:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),f=n(d),m=a(983),_=n(m),p=a(77),h=n(p),v=a(1636),y=n(v),g=a(1637),b=n(g),w=a(169),E=n(w),x=a(165),N=n(x),k=a(75),M=n(k),j=a(15),P=n(j),O=a(981),I=a(982),C=(s=o=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.renderMoreItem=function(){var e={share_info:{title:"#脉脉职场辣妈征集令#给职场妈妈的一封情书",icon_url:"https://maimai.cn/static/images/activity/mother_day/mother_day_share_img.jpg",desc:"感恩职场妈妈，向伟大的妈妈们致敬"},more_items:[{title:"分享",callback:"MaiMai_Native.native_share(1)"}]};return f.default.createElement(_.default,{msg_to_app:e})},a.showPubImg=function(){a.pubItem&&setTimeout(function(){return a.pubItem.showImg()},200)},a.showEdit=function(e){var t=(0,E.default)().width-40,n=a.context.auth_info.channel,r="AppStore"==n||"Development"==n||"InHouse"==n||"InHouseDev"==n;h.default.popup(f.default.createElement("div",{style:{width:t}},f.default.createElement("span",{className:"ny_close_pop ny_close_pop_absolute",onClick:h.default.dismiss}),f.default.createElement("div",{className:"white-bg ny_border_radius_6"},f.default.createElement(y.default,c({},a.props,{req:a.context.req,showPubImg:a.showPubImg,is_ios:r,pop_width:t,pop_bg_ratio:422/670})))))},a.loadMore=function(){var e=a.context.req,t=a.props,n=t.cursor,r=t.u,i=e.query?e.query.wxtoken:"",l="/sdk/activity/get_mother_activities?"+P.default.stringify({count:20,page:a.nextPage,uinfo:r,wxtoken:i});a.refs.loader.bindRequest(function(){return fetch(l,{credentials:"same-origin"}).then(M.default.parse_online_json).then(function(e){0==a.nextPage?n.select("data").set(e):n.select("data","feed").concat(e.feed),a.nextPage++}).catch(function(e){M.default.toast_error_handler(e)})})},a.renderItemCell=function(e,t,n,r){return f.default.createElement(b.default,{key:e.id,item:e,cursor:t,showpop:e.id==r,ref:function(e){0==n&&(a.pubItem=e)}})},a.nextPage=1,a.state={},a}return l(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e,t){if(!this.props.wx_sdk_inited&&e.wx_sdk_inited){var a={title:"#脉脉职场辣妈征集令#给职场妈妈的一封情书",link:window.location.href,imgUrl:"https://maimai.cn/static/images/activity/mother_day/mother_day_share_img.jpg",desc:"感恩职场妈妈，向伟大的妈妈们致敬",success:function(){},cancel:function(){}};t.wx_sdk.onMenuShareAppMessage(a),t.wx_sdk.onMenuShareTimeline(a),t.wx_sdk.onMenuShareQQ(a),t.wx_sdk.onMenuShareQZone(a)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.cursor,n=t.data,r=t.feedid,i=t.name,l=t.avatar,o=!(n&&n.feed.length>=n.all);return f.default.createElement("div",null,f.default.createElement(O,{title:"#职场辣妈征集令#"}),this.renderMoreItem(),f.default.createElement("div",{className:"ny_info"},f.default.createElement("div",{className:"font-0 w-100"},f.default.createElement("img",{className:"mw-100",src:"/static/images/activity/mother_day/md_banner.jpg"})),f.default.createElement("div",{className:"p-x-20 p-y text-gray-90 text-justify"},f.default.createElement("div",null,"职场中，她们是巾帼不让须眉的精英员工；"),f.default.createElement("div",null,"生活中，她们是伟大无私的慈爱母亲。"),f.default.createElement("div",null,"2017年#感恩母亲节#现征集职场辣妈！上传1张靓照或亲子照，用百余字分享职场妈妈心得，亦或是感恩你的母亲／妻子，写下想对她说的话。"))),f.default.createElement("div",{className:"md_list clearfix"},f.default.createElement("div",{className:"halfWidth fl md_item_wrap"},f.default.createElement("div",{className:"md_item",onClick:this.showEdit},f.default.createElement("div",{className:"md_item_top md_edit_item_top"},f.default.createElement("div",{className:"md_item_load_img text-center"},f.default.createElement("img",{className:"md_camera m-b-10",src:"/static/images/activity/mother_day/md_camera.png"}),f.default.createElement("div",{className:"text-gray-bc"},"上传照片"))),f.default.createElement("div",{className:"md_item_bottom"},f.default.createElement("div",{className:"md_edit_text_summary"},f.default.createElement("span",{className:"md_say_something_icon text-gray-bc"},"谁是职场辣妈…")),f.default.createElement("div",{className:"p-x-10 p-b p-t-5 clearfix"},f.default.createElement("div",{className:"avatar-25 m-r-5 font-0 fl"},f.default.createElement("img",{className:"radius-50 mw-100",src:l})),f.default.createElement("div",{className:"ny_name"},i))))),f.default.createElement(I,{loadMore:this.loadMore,hasMore:o,threshold:30,loader:f.default.createElement(N.default,{ref:"loader",reload:this.loadMore,cursor:a.select("loading_status")})},n&&n.feed.map(function(t,n){return e.renderItemCell(t,a.select("data","feed",n),n,r)}))))}}]),t}(f.default.Component),o.contextTypes={auth_info:f.default.PropTypes.object,req:f.default.PropTypes.object,fconf:f.default.PropTypes.object,wx_sdk:f.default.PropTypes.object},s);t.default=e.exports=C}});