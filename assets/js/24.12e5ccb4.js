(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{239:function(t,_,v){"use strict";v.r(_);var e=v(0),r=Object(e.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[t._m(0),t._v(" "),v("p",[v("a",{attrs:{href:"http://demo.fengdb.com/html5/audio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看demo演示以及源码使用"),v("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),v("p",[t._v("currentTime | 设置或返回音频中的当前播放位置（以秒计）。\nduration | 返回音频的长度（以秒计）。\nreadyState | 返回音频当前的就绪状态。\nnetworkState | 返回音频的当前网络状态。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("最近因为项目上用到音乐播放，就仔细研究了一下html5 audio API,利用国庆休息的时间，进行了一些总结，有些坑还没填好已经备注文档中。\n这篇文章主要是介绍一些基本使用，"),_("strong",[this._v("下一篇将主要与大家分享audio在各个浏览器和设备上存在的问题以及如何去解决。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"常用属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用属性")])},function(){var t=this.$createElement,_=this._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[this._v("属性")]),this._v(" "),_("th",[this._v("作用")])])]),this._v(" "),_("tbody",[_("tr",[_("td",[this._v("src")]),this._v(" "),_("td",[this._v("设置或返回是否在就绪（加载完成）后随即播放音频")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("pre",[_("code",[this._v("currentSrc | 返回当前音频的 URL。\n")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"功能播放设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能播放设置","aria-hidden":"true"}},[this._v("#")]),this._v(" 功能播放设置")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("值")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("paused")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("设置或返回音频是否暂停。")])]),t._v(" "),v("tr",[v("td",[t._v("ended")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("返回音频的播放是否已结束。")])]),t._v(" "),v("tr",[v("td",[t._v("muted")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("设置或返回是否关闭声音。")])]),t._v(" "),v("tr",[v("td",[t._v("controls")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("设置或返回音频是否应该显示控件（比如播放/暂停等）。")])]),t._v(" "),v("tr",[v("td",[t._v("loop")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("设置或返回音频是否应在结束时再次播放。")])]),t._v(" "),v("tr",[v("td",[t._v("autoplay")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("设置或返回是否在就绪（加载完成）后随即播放音频。")])]),t._v(" "),v("tr",[v("td",[t._v("preload")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("设置或返回音频的 preload 属性的值。")])]),t._v(" "),v("tr",[v("td",[t._v("volume")]),t._v(" "),v("td",[t._v("范围 0-1")]),t._v(" "),v("td",[t._v("设置或返回音频的音量。")])]),t._v(" "),v("tr",[v("td",[t._v("playbackRate")]),t._v(" "),v("td",[t._v("1.0/2.0倍速度 -2后退两倍速度")]),t._v(" "),v("td",[t._v("设置或返回音频/视频播放的速度(留下一个坑 负值不起作用)")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"常用方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用方法")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("canPlayType()")]),t._v(" "),v("td",[t._v('查浏览器是否可以播放指定的音频类型 "probably" - 浏览器最可能支持该音频/视频类型，"maybe" - 浏览器也许支持该音频/视频类型，"" - （空字符串）浏览器不支持该音频/视频类型')])]),t._v(" "),v("tr",[v("td",[t._v("fastSeek()")]),t._v(" "),v("td",[t._v("在音频播放器中指定播放时间")])]),t._v(" "),v("tr",[v("td",[t._v("load()")]),t._v(" "),v("td",[t._v("重新加载音频元素")])]),t._v(" "),v("tr",[v("td",[t._v("play()")]),t._v(" "),v("td",[t._v("开始播放音频")])]),t._v(" "),v("tr",[v("td",[t._v("pause()")]),t._v(" "),v("td",[t._v("暂停当前播放的音频")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"常用事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用事件")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("事件名称")]),t._v(" "),v("th",[t._v("事件描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("loadstart")]),t._v(" "),v("td",[t._v("客户端开始请求数据")])]),t._v(" "),v("tr",[v("td",[t._v("progress")]),t._v(" "),v("td",[t._v("客户端正在请求数据（或者说正在缓冲）")])]),t._v(" "),v("tr",[v("td",[t._v("play")]),t._v(" "),v("td",[t._v("播放中")])]),t._v(" "),v("tr",[v("td",[t._v("pause")]),t._v(" "),v("td",[t._v("暂停")])]),t._v(" "),v("tr",[v("td",[t._v("ended")]),t._v(" "),v("td",[t._v("播放结束")])]),t._v(" "),v("tr",[v("td",[t._v("timeupdate")]),t._v(" "),v("td",[t._v("当前播放时间发生改变的时候。常用作显示进度")])]),t._v(" "),v("tr",[v("td",[t._v("canplaythrough")]),t._v(" "),v("td",[t._v("歌曲已经载入完全完成")])]),t._v(" "),v("tr",[v("td",[t._v("canplay")]),t._v(" "),v("td",[t._v("缓冲至目前可播放状态。")])]),t._v(" "),v("tr",[v("td",[t._v("error")]),t._v(" "),v("td",[t._v("播放发生错误时。")])])])])}],!1,null,null,null);_.default=r.exports}}]);