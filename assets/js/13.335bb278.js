(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{264:function(t,e,s){"use strict";s.r(e);var i=s(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("本文图片、部分翻译来自原文 "),s("a",{attrs:{href:"https://medium.freecodecamp.com/an-animated-guide-to-flexbox-d280cf6afc35#.h4n9x6uv7",target:"_blank",rel:"noopener noreferrer"}},[t._v("How Flexbox works — explained with big, colorful, animated gifs"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("示例如下")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("我们给其父级容器添加")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("一个 Flexbox 的容器有两个轴：主轴 交叉轴。如下：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("但是 Flex-direction 属性可以让主轴旋转，如下：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("justify-content 用来控制元素在主轴上的对齐方式")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),s("p",[t._v("进一步理解主轴和交叉轴的区别，把 justify-content 和 align-items 合在一起，看看在 flex-direction 两种值下的效果")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._m(41),t._v(" "),t._m(42)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"图解-flexbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图解-flexbox","aria-hidden":"true"}},[this._v("#")]),this._v(" 图解 Flexbox")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"属性-1-display-flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-1-display-flex","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性#1 "),e("code",[this._v("display: flex")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex1.gif",alt:"flex1.gif"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面4个 "),e("code",[this._v("div")]),this._v(" 默认为 "),e("code",[this._v("display: block")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex2.gif",alt:"flex2.gif"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其实把每个 "),e("code",[this._v("div")]),this._v(" 添加了一个 "),e("strong",[this._v("flex context")]),this._v("  (弹性上下文)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"属性-2-flex-direction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-2-flex-direction","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性#2 Flex Direction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex3.png",alt:"flex3.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("默认情况下容器中的每个元素都会沿着主轴自左向右一次排列。所以容器设置为 "),e("code",[this._v("display: flex")]),this._v(" 后所有的 "),e("code",[this._v("div")]),this._v(" 会排列在一行上")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex4.gif",alt:"flex4.gif"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("注意： "),e("code",[this._v("flex-direction: column")]),this._v(" 并不是把 "),e("code",[this._v("div")]),this._v(" 从主轴移动到交叉轴上，而是让主轴从水平变为垂直")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("flex-direction 还有两者值： "),e("code",[this._v("row-reverse")]),this._v(" 和 "),e("code",[this._v("column-reverse")]),this._v(" (顾名思义 就是反转)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex5.gif",alt:"flex5.gif"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"属性-3-justify-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-3-justify-content","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性#3 Justify Content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("先深入理解下主轴和交叉轴的区别。首先设置为 "),e("code",[this._v("flex-direction: row")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("justify-content")]),this._v(" 有5个可选值：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("flex-start")]),t._v(" "),s("li",[t._v("flex-end")]),t._v(" "),s("li",[t._v("center")]),t._v(" "),s("li",[t._v("space-between")]),t._v(" "),s("li",[t._v("space-around")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex6.gif",alt:"flex6.gif"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("space-between")]),this._v(" 会使每个 "),e("code",[this._v("div")]),this._v(" 之间产生相同的小的间隔，但在 "),e("code",[this._v("div")]),this._v(" 和容器之间没有间隔")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("space-around")]),t._v(" 会在每个 "),s("code",[t._v("div")]),t._v(" 两侧各产生一个相同的间隔，即容器和最外层的 "),s("code",[t._v("div")]),t._v(" 之间的间隔刚好是两个 "),s("code",[t._v("div")]),t._v(" 间隔的一半")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("注意："),e("code",[this._v("justify-content")]),this._v(" 是沿着主轴工作的。 "),e("code",[this._v("flex-direction")]),this._v(" 是改变的主轴方向的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"属性-4-align-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-4-align-items","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性#4 Align Items")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("justify-content")]),this._v(" 是沿着主轴工作的，而 "),e("code",[this._v("align-items")]),this._v(" 则是沿着交叉轴工作。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("首先重置 "),e("code",[this._v("flex-direction: row")]),this._v(" 两个轴展示如下：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex3.png",alt:"flex7.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("align-items")]),this._v(" 有5个可选值：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("flex-start")]),t._v(" "),s("li",[t._v("flex-end")]),t._v(" "),s("li",[t._v("center")]),t._v(" "),s("li",[t._v("stretch")]),t._v(" "),s("li",[t._v("baseline")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("看看后两个，其中每个 "),e("code",[this._v("div")]),this._v(" 中的数字都包含在一个 "),e("code",[this._v("p")]),this._v(" 标签中")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("align-items: stretch")]),t._v(" 时每个 "),s("code",[t._v("div")]),t._v(" 都会充满交叉轴"),s("br"),t._v(" "),s("code",[t._v("align-items: baseline")]),t._v(" 时按照 "),s("code",[t._v("p")]),t._v(" 标签的底部对齐")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex8.gif",alt:"flex8.gif"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("注意："),e("code",[this._v("align-items: stretch")]),this._v(" 时每个 "),e("code",[this._v("div")]),this._v(" 的 height 必须为 "),e("strong",[this._v("auto")]),this._v(" 否则 height 属性会覆盖 stretch 的效果")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("align-items: baseline")]),t._v(" 时如果 "),s("code",[t._v("div")]),t._v(" 内没有 "),s("code",[t._v("p")]),t._v(" 标签或者 "),s("code",[t._v("div")]),t._v(" 内没有文字或者子标签内没有文字将按照每个 "),s("code",[t._v("div")]),t._v(" 的底部对齐。如下：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex9.png",alt:"flex9.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex10.gif",alt:"flex10.gif"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("flex-direction: row")]),t._v(" 时每个 "),s("code",[t._v("div")]),t._v(" 按照水平主轴排列"),s("br"),t._v(" "),s("code",[t._v("flex-direction: column")]),t._v("时每个 "),s("code",[t._v("div")]),t._v(" 按照垂直主轴向下排列")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"属性-5-align-self"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-5-align-self","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性#5 Align Self")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("align-self")]),this._v(" 可以手动设置一个元素的对齐方式")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("它会针对一个 "),s("code",[t._v("div")]),t._v(" 覆盖掉 "),s("code",[t._v("align-items")]),t._v(" 属性，因为容器内元素属性都为 "),s("code",[t._v("auto")]),t._v(", 所以每个 "),s("code",[t._v("div")]),t._v(" 都会使用父容器的 "),s("code",[t._v("align-items")]),t._v(" 属性值")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".square#one")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 只有 #one 这个 div 会居中 */")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("将前两个 "),e("code",[this._v("div")]),this._v(" 设置 align-self 属性，后两个使用 "),e("code",[this._v("align-items: center")]),this._v(" 和 "),e("code",[this._v("flex-direction: row")]),this._v(" 如下")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.fengdb.com/public/images/flex11.gif",alt:"flex11.gif"}})])}],!1,null,null,null);e.default=n.exports}}]);