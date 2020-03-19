(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{208:function(n,t,e){"use strict";e.r(t);var a=e(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"为什么讨论编程风格？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么讨论编程风格？","aria-hidden":"true"}},[n._v("#")]),n._v(" 为什么讨论编程风格？")]),n._v(" "),e("p",[n._v("组件一个团队，团队每个人都各自一套编程习惯。")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("任何开发者都不会在乎某个文件的作者是谁，没有必要花费时间和精力再去理解代码逻辑，并重新排版，这样节约时间。")])]),n._v(" "),e("li",[e("p",[n._v("当代码风格不同时，就很容易发现风格不一致的代码")])]),n._v(" "),e("li")]),n._v(" "),e("h2",{attrs:{id:"基本格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本格式","aria-hidden":"true"}},[n._v("#")]),n._v(" 基本格式")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("缩进层级")]),n._v(" "),e("p",[n._v("使用四个空格，设置tab键 为四个空格")])]),n._v(" "),e("li",[e("p",[n._v("语句结尾")]),n._v(" "),e("p",[n._v("要么独占一行，要么以分号结尾。")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 合格代码\nvar team = "omwteam";\n\nfunction sayTeam () {\n    \n    return {\n        name: "freddy",\n        data: []\n    }\n}\n\n// 不合格代码\n\nvar team = "omwteam"\n\nfunction sayTeam () {\n    \n    return \n    {\n        name: "freddy",\n        data: []\n    }\n}\n\n// 这段代码会被编译器解析成如下这段代码\n// 原意结果是返回一个对象，实际上却返回 undefined;\n\nvar team = "omwteam";\n\nfunction sayTeam () {\n    \n    return ;\n    {\n        name: "freddy",\n        data: []\n    }\n}\n')])])]),e("ul",[e("li",[e("p",[n._v("行的长度")]),n._v(" "),e("p",[n._v("单行长度不应超过80行，超过80行应强制换行。")])]),n._v(" "),e("li",[e("p",[n._v("适当的地方换行")]),n._v(" "),e("p",[n._v("当一行超过80个时，需要手动换行，换行部分应使用两个缩进；")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 正确做法\ncallback(this,document,'test',[],'xxx','dsds',windows,\n        'ddsds');\n        \n// 不正确 换行部分只有一个缩进\ncallback(this,document,'test',[],'xxx','dsds',windows,\n    'ddsds');\n    \n// 不正确 换行部分带上 \",\"运算符前面\ncallback(this,document,'test',[],'xxx','dsds',windows\n    ,'ddsds');       \n        \n")])])]),e("ul",[e("li",[e("p",[n._v("在合适的地方加上空行，以增加代码的可读性")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("在方法之间。")])]),n._v(" "),e("li",[e("p",[n._v("在方法中的局部变量和第一条语句")])]),n._v(" "),e("li",[e("p",[n._v("在多行或者单行注释之前")])]),n._v(" "),e("li",[e("p",[n._v("在方法内的逻辑片段之间插入空行，提高可读性")])])])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 合理的写法\nvar list = [];\n\nif (list && list.length) {\n    \n    for (i = 0, l = list.length; i < l; i++) {\n        item = list[i];\n        type = object[item]\n        \n        if (Object.hasOwnProperty(item)) {\n            \n            if (type && type === 'object') {\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }\n}\n\n// 不合理的\nvar list = [];\n\nif (list && list.length) {\n    for (i = 0, l = list.length; i < l; i++) {\n        item = list[i];\n        type = object[item]\n        if ( Object.hasOwnProperty(item) ) {\n            if (type && type === 'object') {\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }\n}\n")])])]),e("ul",[e("li",[e("p",[n._v("变量与函数命名")]),n._v(" "),e("p",[n._v("一般采用驼峰法，语义化准则以增强代码的可读性")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var anotherVarible;\nvar thisIsMyName;\n\n\n// 好的写法\nvar count = '';\nvar myName = '';\n\n// 不好的写法 变量写起来像函数\nvar getCount = '';\nvar isFound = '';\n\n// 好的写法\n\nfunction getName () {\n    return myName;\n}\n\n// 不好的写法： 函数看起来像变量\n\nfunction theName () {\n    return count;\n}\n\n")])])])])}],!1,null,null,null);t.default=s.exports}}]);