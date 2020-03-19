(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{249:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("我们经常在面对一些游戏项目等兼容性要求不高的微型项目，使用Vue-route等路由管理，Vue-router压缩也有20多Kb,有点白白耗费资源。\n因此，在一些对兼容性要求不高的项目，可以尝试使用history Popstate事件来实现。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("当活动历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。")]),t._v(" "),a("p",[t._v("需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()或者history.forward()方法）")]),t._v(" "),a("p",[t._v("不同的浏览器在加载页面时处理popstate事件的形式存在差异。页面加载时Chrome和Safari通常会触发(emit )popstate事件，但Firefox则不会。")]),t._v(" "),t._m(3),t._v(" "),a("ul",[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("li",[a("p",[t._v("示例\n"),a("a",{attrs:{href:"https://gitee.com/fengdb/vue2.x-simple-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例源码：vue2.x-simple-router"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("由于源码在Github在国内访问不是很理想，迁移至Gitee上了。")]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/routing.html#%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%AE%80%E5%8D%95%E7%9A%84%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue路由官方文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event",target:"_blank",rel:"noopener noreferrer"}},[t._v("popstate_event-MDN"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("History_API-MDN"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue不依赖vue-router的小型项目开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue不依赖vue-router的小型项目开发","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue不依赖Vue-router的小型项目开发")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("背景")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"popstate事件介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#popstate事件介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" popstate事件介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"实现逻辑和代码参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现逻辑和代码参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 实现逻辑和代码参考")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("首先在Vue定义路由的响应式属性currentRoute")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("使用pushState更新页面记录并传入对应路径来触发popstate事件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("使用Popstate监听路径变化获取对应的路由组件名称")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("用计算属性监听路由变化动态引入路由组件进而渲染组件显示页面")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" routes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./routes'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    currentRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ViewComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" matchingView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" matchingView\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" matchingView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages/404.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ViewComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听popstate事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当路径变化的时候切换路径")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'popstate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentRoute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=e.exports}}]);