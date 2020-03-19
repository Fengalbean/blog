(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{183:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"laravel模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel模型","aria-hidden":"true"}},[e._v("#")]),e._v(" laravel模型")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#简介"}},[e._v("简介")])]),t("li",[t("a",{attrs:{href:"#定义模型"}},[e._v("定义模型")]),t("ul",[t("li",[t("a",{attrs:{href:"#eloquent-模型约定"}},[e._v("Eloquent 模型约定#")])]),t("li",[t("a",{attrs:{href:"#数据表名称"}},[e._v("数据表名称#")])]),t("li",[t("a",{attrs:{href:"#主键"}},[e._v("主键#")])]),t("li",[t("a",{attrs:{href:"#时间戳"}},[e._v("时间戳#")])]),t("li",[t("a",{attrs:{href:"#数据库连接"}},[e._v("数据库连接#")])])])]),t("li",[t("a",{attrs:{href:"#取回多个模型"}},[e._v("取回多个模型")]),t("ul",[t("li",[t("a",{attrs:{href:"#增加额外的限制"}},[e._v("增加额外的限制#")])]),t("li",[t("a",{attrs:{href:"#分块结果"}},[e._v("分块结果#")])]),t("li",[t("a",{attrs:{href:"#使用游标"}},[e._v("使用游标#")])])])]),t("li",[t("a",{attrs:{href:"#取回单个模型或集合"}},[e._v("取回单个模型或集合")]),t("ul",[t("li",[t("a",{attrs:{href:"#「未找到」异常"}},[e._v("「未找到」异常#")])]),t("li",[t("a",{attrs:{href:"#取回集合"}},[e._v("取回集合#")])])])]),t("li",[t("a",{attrs:{href:"#添加和更新模型"}},[e._v("添加和更新模型")]),t("ul",[t("li",[t("a",{attrs:{href:"#基本添加"}},[e._v("基本添加#")])]),t("li",[t("a",{attrs:{href:"#基本更新"}},[e._v("基本更新#")])]),t("li",[t("a",{attrs:{href:"#批量更新"}},[e._v("批量更新#")])]),t("li",[t("a",{attrs:{href:"#批量赋值"}},[e._v("批量赋值#")])]),t("li",[t("a",{attrs:{href:"#guarding-attributes"}},[e._v("Guarding Attributes#")])]),t("li",[t("a",{attrs:{href:"#其它创建的方法"}},[e._v("其它创建的方法#")])])])]),t("li",[t("a",{attrs:{href:"#删除模型"}},[e._v("删除模型")]),t("ul",[t("li",[t("a",{attrs:{href:"#通过主键来删除现有的模型"}},[e._v("通过主键来删除现有的模型#")])]),t("li",[t("a",{attrs:{href:"#通过查询来删除模型"}},[e._v("通过查询来删除模型#")])]),t("li",[t("a",{attrs:{href:"#软删除"}},[e._v("软删除#")])]),t("li",[t("a",{attrs:{href:"#查询被软删除的模型"}},[e._v("查询被软删除的模型#")])])])]),t("li",[t("a",{attrs:{href:"#查询作用域"}},[e._v("查询作用域")]),t("ul",[t("li",[t("a",{attrs:{href:"#全局作用域"}},[e._v("全局作用域#")])]),t("li",[t("a",{attrs:{href:"#编写全局作用域"}},[e._v("编写全局作用域#")])]),t("li",[t("a",{attrs:{href:"#应用全局作用域"}},[e._v("应用全局作用域#")])]),t("li",[t("a",{attrs:{href:"#匿名的全局作用域"}},[e._v("匿名的全局作用域#")])]),t("li",[t("a",{attrs:{href:"#移除全局作用域"}},[e._v("移除全局作用域#")])]),t("li",[t("a",{attrs:{href:"#本地作用域"}},[e._v("本地作用域#")])]),t("li",[t("a",{attrs:{href:"#利用查询范围"}},[e._v("利用查询范围#")])]),t("li",[t("a",{attrs:{href:"#动态范围"}},[e._v("动态范围#")])])])]),t("li",[t("a",{attrs:{href:"#事件观察器"}},[e._v("事件观察器")]),t("ul",[t("li",[t("a",{attrs:{href:"#观察者"}},[e._v("观察者#")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("Laravel 的 Eloquent ORM 提供了漂亮、简洁的 ActiveRecord 实现来和数据库进行交互。每个数据库表都有一个对应的「模型」可用来跟数据表进行交互。你可以通过模型查询数据表内的数据，以及将记录添加到数据表中。")]),e._v(" "),t("p",[e._v("在开始之前，请确认你已在 config/database.php 文件中设置好了数据库连接。更多数据库的设置信息请查看 数据库设置 文档。")]),e._v(" "),t("h2",{attrs:{id:"定义模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 定义模型")]),e._v(" "),t("p",[e._v("开始之前，让我们先来创建一个 Eloquent 模型。模型通常放在 app 目录中，不过你可以将他们随意放在任何可通过 composer.json 自动加载的地方。所有的 Eloquent 模型都继承自 Illuminate\\Database\\Eloquent\\Model 类。")]),e._v(" "),t("p",[e._v("创建模型实例的最简单方法是使用 make:model Artisan 命令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("php artisan make:model User\n")])])]),t("p",[e._v("当你生成一个模型时想要顺便生成一个 数据库迁移，可以使用 --migration 或 -m 选项：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("php artisan make:model User --migration\n\nphp artisan make:model User -m\n")])])]),t("h3",{attrs:{id:"eloquent-模型约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eloquent-模型约定","aria-hidden":"true"}},[e._v("#")]),e._v(" Eloquent 模型约定#")]),e._v(" "),t("p",[e._v("现在，让我们来看一个 Flight 模型类的例子，我们将会用它从 flights 数据表中取回与保存信息：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Flight extends Model\n{\n    //\n}\n")])])]),t("h3",{attrs:{id:"数据表名称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据表名称","aria-hidden":"true"}},[e._v("#")]),e._v(" 数据表名称#")]),e._v(" "),t("p",[e._v("请注意，我们并没有告诉 Eloquent Flight 模型该使用哪一个数据表。除非数据表明确地指定了其它名称，否则将使用类的「蛇形名称」、复数形式名称来作为数据表的名称。因此在此例子中，Eloquent 将会假设 Flight 模型被存储记录在 flights 数据表中。你可以在模型上定义一个 table 属性，用来指定自定义的数据表名称：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Flight extends Model\n{\n    /**\n     * 与模型关联的数据表\n     *\n     * @var string\n     */\n    protected $table = 'my_flights';\n}\n")])])]),t("h3",{attrs:{id:"主键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主键","aria-hidden":"true"}},[e._v("#")]),e._v(" 主键#")]),e._v(" "),t("p",[e._v("Eloquent 也会假设每个数据表都有一个叫做 id 的主键字段。你也可以定义一个 $primaryKey 属性来重写这个约定。")]),e._v(" "),t("p",[e._v("此外，Eloquent 假定主键是一个递增的整数值，这意味着在默认情况下主键将自动的被强制转换为 int。 如果你想使用非递增或者非数字的主键，你必须在你的模型 public $incrementing 属性设置为false。")]),e._v(" "),t("h3",{attrs:{id:"时间戳"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间戳","aria-hidden":"true"}},[e._v("#")]),e._v(" 时间戳#")]),e._v(" "),t("ul",[t("li",[e._v("默认情况下，Eloquent 会认为在你的数据库表有 created_at 和 updated_at 字段。如果你不希望让 Eloquent 来自动维护这两个字段，可在模型内将 $timestamps 属性设置为 false：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Flight extends Model\n{\n    /**\n     * 该模型是否被自动维护时间戳\n     *\n     * @var bool\n     */\n    public $timestamps = false;\n}\n")])])]),t("ul",[t("li",[e._v("如果你需要自定义自己的时间戳格式，可在模型内设置 $dateFormat 属性。这个属性决定了日期应如何在数据库中存储，以及当模型被序列化成数组或 JSON 格式：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Flight extends Model\n{\n    /**\n     * 模型的日期字段保存格式。\n     *\n     * @var string\n     */\n    protected $dateFormat = 'U';\n}\n")])])]),t("ul",[t("li",[e._v("如果你需要自定义用于存储时间戳的字段名，可在模型中设置 CREATED_AT 和 UPDATED_AT 常量：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nclass Flight extends Model\n{\n    const CREATED_AT = 'creation_date';\n    const UPDATED_AT = 'last_update';\n}\n")])])]),t("h3",{attrs:{id:"数据库连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库连接","aria-hidden":"true"}},[e._v("#")]),e._v(" 数据库连接#")]),e._v(" "),t("ul",[t("li",[e._v("默认情况下，所有的 Eloquent 模型会使用应用程序中默认的数据库连接设置。如果你想为模型指定不同的连接，可以使用 $connection 属性：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Flight extends Model\n{\n    /**\n     * 此模型的连接名称。\n     *\n     * @var string\n     */\n    protected $connection = 'connection-name';\n}\n")])])]),t("h2",{attrs:{id:"取回多个模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取回多个模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 取回多个模型")]),e._v(" "),t("ul",[t("li",[e._v("一旦你创建并 关联了一个模型到数据表 上，那么你就可以从数据库中获取数据。可把每个 Eloquent 模型想像成强大的 查询构造器，它让你可以流畅地查询与模型关联的数据表。例如：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nuse App\\Flight;\n\n$flights = App\\Flight::all();\n\nforeach ($flights as $flight) {\n    echo $flight->name;\n}\n")])])]),t("h3",{attrs:{id:"增加额外的限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增加额外的限制","aria-hidden":"true"}},[e._v("#")]),e._v(" 增加额外的限制#")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Eloquent 的 all 方法会返回在模型数据表中的所有结果。由于每个 Eloquent 模型都可以当作一个 查询构造器，所以你可以在查询中增加规则，然后使用 get 方法来获取结果：")])]),e._v(" "),t("li",[t("p",[e._v("这里的限制条件方法可查询DB查询构建器里面的方法")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flights = App\\Flight::where('active', 1)\n               ->orderBy('name', 'desc')\n               ->take(10)\n               ->get();\n")])])]),t("h3",{attrs:{id:"分块结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分块结果","aria-hidden":"true"}},[e._v("#")]),e._v(" 分块结果#")]),e._v(" "),t("p",[e._v("如果你需要处理数以千计的 Eloquent 查找结果，则可以使用 chunk 命令。chunk 方法将会获取一个 Eloquent 模型的「分块」，并将它们送到指定的 闭包 (Closure) 中进行处理。当你在处理大量结果时，使用 chunk 方法可节省内存：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Flight::chunk(200, function ($flights) {\n    foreach ($flights as $flight) {\n        //\n    }\n});\n")])])]),t("p",[e._v("传递到方法的第一个参数表示每次「分块」时你希望接收的数据数量。闭包则作为第二个参数传递，它将会在每次从数据取出分块时被调用。")]),e._v(" "),t("h3",{attrs:{id:"使用游标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用游标","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用游标#")]),e._v(" "),t("p",[e._v("cursor 允许你使用游标来遍历数据库数据，一次只执行单个查询。在处理大数据量请求时 cursor 方法可以大幅度减少内存的使用：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("foreach (Flight::where('foo', 'bar')->cursor() as $flight) {\n    //\n}\n")])])]),t("h2",{attrs:{id:"取回单个模型或集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取回单个模型或集合","aria-hidden":"true"}},[e._v("#")]),e._v(" 取回单个模型或集合")]),e._v(" "),t("ul",[t("li",[e._v("当然，除了从指定的数据表取回所有记录，你也可以通过 find 和 first 方法来取回单条记录。但这些方法返回的是单个模型的实例，而不是返回模型的集合：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 通过主键取回一个模型...\n$flight = App\\Flight::find(1);\n\n// 取回符合查询限制的第一个模型 ...\n$flight = App\\Flight::where('active', 1)->first();\n")])])]),t("ul",[t("li",[e._v("你也可以用主键的集合为参数调用find方法，它将返回符合条件的集合：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flights = App\\Flight::find([1, 2, 3]);\n")])])]),t("h3",{attrs:{id:"「未找到」异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#「未找到」异常","aria-hidden":"true"}},[e._v("#")]),e._v(" 「未找到」异常#")]),e._v(" "),t("p",[e._v("有时候你可能希望在找不到模型时抛出一个异常，这在路由或是控制器内特别有用。findOrFail 以及 firstOrFail 方法会取回查询的第一个结果。如果没有找到相应结果，则会抛出一个 Illuminate\\Database\\Eloquent\\ModelNotFoundException：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$model = App\\Flight::findOrFail(1);\n\n$model = App\\Flight::where('legs', '>', 100)->firstOrFail();\n")])])]),t("p",[e._v("如果该异常没有被捕获，则会自动返回 HTTP 404 响应给用户，因此当使用这些方法时，你没有必要明确的编写检查来返回 404 响应：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Route::get('/api/flights/{id}', function ($id) {\n    return App\\Flight::findOrFail($id);\n});\n")])])]),t("h3",{attrs:{id:"取回集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取回集合","aria-hidden":"true"}},[e._v("#")]),e._v(" 取回集合#")]),e._v(" "),t("p",[e._v("当然，你也可以使用 count、sum、max，和其它 查询构造器 提供的 聚合函数。这些方法会返回适当的标量值，而不是一个完整的模型实例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$count = App\\Flight::where('active', 1)->count();\n\n$max = App\\Flight::where('active', 1)->max('price');\n")])])]),t("h2",{attrs:{id:"添加和更新模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加和更新模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加和更新模型")]),e._v(" "),t("h3",{attrs:{id:"基本添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本添加","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本添加#")]),e._v(" "),t("p",[e._v("要在数据库中创建一条新记录，只需创建一个新模型实例，并在模型上设置属性和调用 save 方法即可：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Flight;\nuse Illuminate\\Http\\Request;\nuse App\\Http\\Controllers\\Controller;\n\nclass FlightController extends Controller\n{\n    /**\n     * 创建一个新的航班实例。\n     *\n     * @param  Request  $request\n     * @return Response\n     */\n    public function store(Request $request)\n    {\n        // 验证请求...\n\n        $flight = new Flight;\n\n        $flight->name = $request->name;\n\n        $flight->save();\n    }\n}\n")])])]),t("p",[e._v("在这个例子中，我们把来自 HTTP 请求中的 name 参数简单地指定给 App\\Flight 模型实例的 name 属性。当我们调用 save 方法，就会添加一条记录到数据库中。当 save 方法被调用时，created_at 以及 updated_at 时间戳将会被自动设置，因此我们不需要去手动设置它们。")]),e._v(" "),t("h3",{attrs:{id:"基本更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本更新","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本更新#")]),e._v(" "),t("p",[e._v("save 方法也可以用于更新数据库中已经存在的模型。要更新模型，则须先取回模型，再设置任何你希望更新的属性，接着调用 save 方法。同样的，updated_at 时间戳将会被自动更新，所以我们不需要手动设置它的值：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flight = App\\Flight::find(1);\n\n$flight->name = 'New Flight Name';\n\n$flight->save();\n")])])]),t("h3",{attrs:{id:"批量更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量更新","aria-hidden":"true"}},[e._v("#")]),e._v(" 批量更新#")]),e._v(" "),t("p",[e._v("也可以针对符合指定查询的任意数量模型进行更新。在这个例子中，所有 active 并且 destination 为 San Diego 的航班，都将会被标识为延迟：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("App\\Flight::where('active', 1)\n          ->where('destination', 'San Diego')\n          ->update(['delayed' => 1]);\n")])])]),t("p",[e._v("update 方法会期望收到一个含有字段与值对应的数组，而这些字段的内容将会被更新。")]),e._v(" "),t("h3",{attrs:{id:"批量赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量赋值","aria-hidden":"true"}},[e._v("#")]),e._v(" 批量赋值#")]),e._v(" "),t("p",[e._v("你也可以使用 create 方法通过一行代码来保存一个新模型。被插入数据库的模型实例将会返回给你。不过，在这样做之前，你需要先在你的模型上定义一个 fillable 或 guarded 属性，因为所有的 Eloquent 模型都针对批量赋值（Mass-Assignment）做了保护。")]),e._v(" "),t("p",[e._v("当用户通过 HTTP 请求传入了非预期的参数，并借助这些参数更改了数据库中你并不打算要更改的字段，这时就会出现批量赋值（Mass-Assignment）漏洞。例如，恶意用户可能会通过 HTTP 请求发送 is_admin 参数，然后对应到你模型的 create 方法，此操作能让该用户把自己升级为一个管理者。")]),e._v(" "),t("p",[e._v("所以，在开始之前，你应该定义好哪些模型属性是可以被批量赋值的。你可以在模型上使用 $fillable 属性来实现。例如，让我们让 Flight 模型的 name 属性可以被批量赋值：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Flight extends Model\n{\n    /**\n     * 可以被批量赋值的属性。\n     *\n     * @var array\n     */\n    protected $fillable = ['name'];\n}\n")])])]),t("p",[e._v("一旦我们已经设置好可以被批量赋值的属性，便能通过 create 方法来添加一条新记录到数据库。create 方法将返回已经被保存的模型实例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flight = App\\Flight::create(['name' => 'Flight 10']);\n")])])]),t("p",[e._v("如果你已经有一个 model 实例，你可以使用一个数组传递给 fill 方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flight->fill(['name' => 'Flight 22']);\n")])])]),t("h3",{attrs:{id:"guarding-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guarding-attributes","aria-hidden":"true"}},[e._v("#")]),e._v(" Guarding Attributes#")]),e._v(" "),t("p",[e._v("$fillable 作为一个可以被批量赋值的属性「白名单」。另外你也可以选择使用 $guarded。$guarded 属性应该包含一个你不想要被批量赋值的属性数组。所有不在数组里面的其它属性都可以被批量赋值。因此，$guarded 的功能更类似一个「黑名单」。使用的时候应该只选择 $fillable 或 $guarded 中的其中一个。 下面这个例子中，除了 price 所有的属性都可以被批量赋值：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Flight extends Model\n{\n    /**\n     * 不可被批量赋值的属性。\n     *\n     * @var array\n     */\n    protected $guarded = ['price'];\n}\n")])])]),t("p",[e._v("如果你想让所有的属性都可以被批量赋值，你应该定义 $guarded为空数组。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * 不可被批量赋值的属性。\n *\n * @var array\n */\nprotected $guarded = [];\n")])])]),t("h3",{attrs:{id:"其它创建的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它创建的方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 其它创建的方法#")]),e._v(" "),t("h4",{attrs:{id:"firstorcreate-firstornew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firstorcreate-firstornew","aria-hidden":"true"}},[e._v("#")]),e._v(" firstOrCreate/ firstOrNew#")]),e._v(" "),t("p",[e._v("还有两种其它方法，你可以用来通过属性批量赋值创建你的模型：firstOrCreate 和 firstOrNew。firstOrCreate 方法将会使用指定的字段／值对，来尝试寻找数据库中的记录。如果在数据库中找不到模型，则会使用指定的属性来添加一条记录。")]),e._v(" "),t("p",[e._v("firstOrNew 方法类似 firstOrCreate 方法，它会尝试使用指定的属性在数据库中寻找符合的纪录。如果模型未被找到，将会返回一个新的模型实例。请注意 firstOrnew 返回的模型还尚未保存到数据库。你需要通过手动调用 save 方法来保存它：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 通过name属性检索航班，当结果不存在时创建它...\n$flight = App\\Flight::firstOrCreate(['name' => 'Flight 10']);\n\n// 通过name属性检索航班，当结果不存在的时候用name属性和delayed属性去创建它\n$flight = App\\Flight::firstOrCreate(\n    ['name' => 'Flight 10'], ['delayed' => 1]\n);\n\n// 通过name属性检索航班，当结果不存在时实例化一个新实例...\n$flight = App\\Flight::firstOrNew(['name' => 'Flight 10']);\n\n// 通过name属性检索航班，当结果不存在的时候用name属性和delayed属性去实例化一个新实例\n$flight = App\\Flight::firstOrNew(\n    ['name' => 'Flight 10'], ['delayed' => 1]\n);\n")])])]),t("h4",{attrs:{id:"updateorcreate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updateorcreate","aria-hidden":"true"}},[e._v("#")]),e._v(" updateOrCreate#")]),e._v(" "),t("p",[e._v("其次，你可能会碰到模型已经存在则更新，否则创建新模型的情形，Laravel 提供了一个 updateOrCreate 方法来一步完成该操作，类似 firstOrCreate 方法， updateOrCreate 方法会持久化模型，所以无需调用 save() :")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// If there's a flight from Oakland to San Diego, set the price to $99.\n// If no matching model exists, create one.\n$flight = App\\Flight::updateOrCreate(\n    ['departure' => 'Oakland', 'destination' => 'San Diego'],\n    ['price' => 99]\n);\n")])])]),t("h2",{attrs:{id:"删除模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除模型")]),e._v(" "),t("p",[e._v("要删除模型，必须在模型实例上调用 delete 方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flight = App\\Flight::find(1);\n\n$flight->delete();\n")])])]),t("h3",{attrs:{id:"通过主键来删除现有的模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过主键来删除现有的模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 通过主键来删除现有的模型#")]),e._v(" "),t("p",[e._v("在上面的例子中，我们在调用 delete 方法之前会先从数据库中取回模型。不过，如果你已知道了模型中的主键，则可以不用取回模型就能直接删除它。若要直接删除，请调用 destroy 方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("App\\Flight::destroy(1);\n\nApp\\Flight::destroy([1, 2, 3]);\n\nApp\\Flight::destroy(1, 2, 3);\n")])])]),t("h3",{attrs:{id:"通过查询来删除模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过查询来删除模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 通过查询来删除模型#")]),e._v(" "),t("p",[e._v("当然，你也可以运行在一组模型删除查询。在这个例子中，我们会删除被标记为不活跃的所有航班。 像批量更新那样，批量删除不会删除的任何被删除的模型的事件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$deletedRows = App\\Flight::where('active', 0)->delete();    \n")])])]),t("p",[e._v("(当使用 Eloquent 批量删除语句时，deleting 和 deleted 模型事件不会在被删除模型实例上触发。因为删除语句执行时，不会检索回模型实例)")]),e._v(" "),t("h3",{attrs:{id:"软删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软删除","aria-hidden":"true"}},[e._v("#")]),e._v(" 软删除#")]),e._v(" "),t("p",[e._v("除了从数据库中移除实际记录，Eloquent 也可以「软删除」模型。当模型被软删除时，它们并不会真的从数据库中被移除。而是会在模型上设置一个 deleted_at 属性并将其添加到数据库。如果模型有一个非空值 deleted_at，代表模型已经被软删除了。要在模型上启动软删除，则必须在模型上使用 Illuminate\\Database\\Eloquent\\SoftDeletes trait 并添加 deleted_at 字段到你的 $dates 属性上：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\SoftDeletes;\n\nclass Flight extends Model\n{\n    use SoftDeletes;\n\n    /**\n     * 需要被转换成日期的属性。\n     *\n     * @var array\n     */\n    protected $dates = ['deleted_at'];\n}\n")])])]),t("p",[e._v("当然，你也应该添加 deleted_at 字段到数据表中。Laravel 结构生成器 包含了一个用来创建此字段的辅助函数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Schema::table('flights', function ($table) {\n    $table->softDeletes();\n});\n")])])]),t("p",[e._v("现在，当你在模型上调用 delete 方法时，deleted_at 字段将会被设置成目前的日期和时间。而且，当查询有启用软删除的模型时，被软删除的模型将会自动从所有查询结果中排除。")]),e._v(" "),t("p",[e._v("要确认指定的模型实例是否已经被软删除，可以使用 trashed 方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if ($flight->trashed()) {\n    //\n}\n")])])]),t("h3",{attrs:{id:"查询被软删除的模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询被软删除的模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 查询被软删除的模型#")]),e._v(" "),t("p",[e._v("包含被软删除的模型#")]),e._v(" "),t("p",[e._v("如上所述，被软删除的模型将会自动从所有的查询结果中排除。不过，你可以通过在查询中调用 withTrashed 方法来强制查询已被软删除的模型：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flights = App\\Flight::withTrashed()\n                ->where('account_id', 1)\n                ->get();\n")])])]),t("p",[e._v("withTrashed 方法也可以被用在 关联 查询：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flight->history()->withTrashed()->get();\n")])])]),t("h4",{attrs:{id:"只取出软删除数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只取出软删除数据","aria-hidden":"true"}},[e._v("#")]),e._v(" 只取出软删除数据#")]),e._v(" "),t("ul",[t("li",[e._v("onlyTrashed 会只取出软删除数据：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flights = App\\Flight::onlyTrashed()\n                ->where('airline_id', 1)\n                ->get();\n")])])]),t("h4",{attrs:{id:"恢复被软删除的模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复被软删除的模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 恢复被软删除的模型#")]),e._v(" "),t("p",[e._v("有时候你可能希望「取消删除」一个已被软删除的模型。要恢复一个已被软删除的模型到有效状态，则可在模型实例上使用 restore 方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flight->restore();\n\n")])])]),t("p",[e._v("你也可以在查询上使用 restore 方法来快速地恢复多个模型：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("App\\Flight::withTrashed()\n        ->where('airline_id', 1)\n        ->restore();\n")])])]),t("p",[e._v("与 withTrashed 方法类似，restore 方法也可以被用在 关联 查询上:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$flight->history()->restore();\n")])])]),t("h4",{attrs:{id:"永久地删除模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#永久地删除模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 永久地删除模型#")]),e._v(" "),t("p",[e._v("有时候你可能需要真正地从数据库移除模型。要永久地从数据库移除一个已被软删除的模型，则可使用 forceDelete 方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 强制删除单个模型实例...\n$flight->forceDelete();\n\n// 强制删除所有相关模型...\n$flight->history()->forceDelete();\n")])])]),t("h2",{attrs:{id:"查询作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询作用域","aria-hidden":"true"}},[e._v("#")]),e._v(" 查询作用域")]),e._v(" "),t("h3",{attrs:{id:"全局作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域","aria-hidden":"true"}},[e._v("#")]),e._v(" 全局作用域#")]),e._v(" "),t("p",[e._v("全局作用域允许我们为给定模型的所有查询添加条件约束。Laravel 自带的 软删除功能 就使用了全局作用域来从数据库中拉出所有没有被删除的模型。编写自定义的全局作用域可以提供一种方便的、简单的方式，来确保给定模型的每个查询都有特定的条件约束。")]),e._v(" "),t("h3",{attrs:{id:"编写全局作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写全局作用域","aria-hidden":"true"}},[e._v("#")]),e._v(" 编写全局作用域#")]),e._v(" "),t("p",[e._v("自定义全局作用域很简单，首先定义一个实现 Illuminate\\Database\\Eloquent\\Scope 接口的类，该接口要求你实现一个方法：apply。需要的话可以在 apply 方法中添加 where 条件到查询：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App\\Scopes;\n\nuse Illuminate\\Database\\Eloquent\\Scope;\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Builder;\n\nclass AgeScope implements Scope\n{\n    /**\n     * 应用作用域\n     *\n     * @param  \\Illuminate\\Database\\Eloquent\\Builder  $builder\n     * @param  \\Illuminate\\Database\\Eloquent\\Model  $model\n     * @return void\n     */\n    public function apply(Builder $builder, Model $model)\n    {\n        return $builder->where('age', '>', 200);\n    }\n}\n")])])]),t("p",[e._v("Laravel 没有规定你需要把这些类放置于哪个文件夹，你可以自由在 app 文件夹下创建 Scopes 文件夹来存放。")]),e._v(" "),t("h3",{attrs:{id:"应用全局作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用全局作用域","aria-hidden":"true"}},[e._v("#")]),e._v(" 应用全局作用域#")]),e._v(" "),t("p",[e._v("要将全局作用域分配给模型，需要重写给定模型的 boot 方法并使用 addGlobalScope 方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse App\\Scopes\\AgeScope;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    /**\n     * 数据模型的启动方法\n     *\n     * @return void\n     */\n    protected static function boot()\n    {\n        parent::boot();\n\n        static::addGlobalScope(new AgeScope);\n    }\n}\n")])])]),t("p",[e._v("添加作用域后，如果使用 User::all() 查询则会生成如下SQL语句：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select * from `users` where `age` > 200\n")])])]),t("h3",{attrs:{id:"匿名的全局作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名的全局作用域","aria-hidden":"true"}},[e._v("#")]),e._v(" 匿名的全局作用域#")]),e._v(" "),t("p",[e._v("Eloquent 还允许我们使用闭包定义全局作用域，这在实现简单作用域的时候特别有用，这样的话，我们就没必要定义一个单独的类了：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Builder;\n\nclass User extends Model\n{\n    /**\n     * 数据模型的启动方法\n     *\n     * @return void\n     */\n    protected static function boot()\n    {\n        parent::boot();\n\n        static::addGlobalScope('age', function(Builder $builder) {\n            $builder->where('age', '>', 200);\n        });\n    }\n}\n")])])]),t("p",[e._v("我们还可以通过以下方式，利用 age 标识符来移除全局作用：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("User::withoutGlobalScope('age')->get();\n")])])]),t("h3",{attrs:{id:"移除全局作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除全局作用域","aria-hidden":"true"}},[e._v("#")]),e._v(" 移除全局作用域#")]),e._v(" "),t("p",[e._v("如果想要在给定查询中移除指定全局作用域，可以使用 withoutGlobalScope：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("User::withoutGlobalScope(AgeScope::class)->get();\n")])])]),t("p",[e._v("如果你想要移除某几个或全部全局作用域，可以使用 withoutGlobalScopes 方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("User::withoutGlobalScopes()->get();\n\nUser::withoutGlobalScopes([FirstScope::class, SecondScope::class])->get();\n")])])]),t("h3",{attrs:{id:"本地作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地作用域","aria-hidden":"true"}},[e._v("#")]),e._v(" 本地作用域#")]),e._v(" "),t("p",[e._v("本地作用域允许我们定义通用的约束集合以便在应用中复用。例如，你可能经常需要获取最受欢迎的用户，要定义这样的一个作用域，只需简单在对应 Eloquent 模型方法前加上一个 scope 前缀，作用域总是返回查询构建器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    /**\n     * 限制查询只包括受欢迎的用户。\n     *\n     * @return \\Illuminate\\Database\\Eloquent\\Builder\n     */\n    public function scopePopular($query)\n    {\n        return $query->where('votes', '>', 100);\n    }\n\n    /**\n     * 限制查询只包括活跃的用户。\n     *\n     * @return \\Illuminate\\Database\\Eloquent\\Builder\n     */\n    public function scopeActive($query)\n    {\n        return $query->where('active', 1);\n    }\n}\n")])])]),t("h3",{attrs:{id:"利用查询范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用查询范围","aria-hidden":"true"}},[e._v("#")]),e._v(" 利用查询范围#")]),e._v(" "),t("p",[e._v("一旦定义了范围，则可以在查询模型时调用范围方法。在进行方法调用时不需要加上 scope 前缀。你甚至可以链式调用不同的范围，如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$users = App\\User::popular()->active()->orderBy('created_at')->get();$users = App\\User::popular()->active()->orderBy('created_at')->get();\n")])])]),t("h3",{attrs:{id:"动态范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态范围","aria-hidden":"true"}},[e._v("#")]),e._v(" 动态范围#")]),e._v(" "),t("p",[e._v("有时候，你可能希望定义一个可接受参数的范围。这时只需给你的范围加上额外的参数即可。范围参数应该被定义在 $query 参数之后：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    /**\n     * 限制查询只包括指定类型的用户。\n     *\n     * @return \\Illuminate\\Database\\Eloquent\\Builder\n     */\n    public function scopeOfType($query, $type)\n    {\n        return $query->where('type', $type);\n    }\n}\n")])])]),t("p",[e._v("现在，你可以在范围调用时传递参数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$users = App\\User::ofType('admin')->get();\n")])])]),t("h2",{attrs:{id:"事件观察器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件观察器","aria-hidden":"true"}},[e._v("#")]),e._v(" 事件观察器")]),e._v(" "),t("p",[e._v("Eloquent 模型会触发许多事件，让你在模型的生命周期的多个时间点进行监控： creating, created, updating, updated, saving, saved, deleting, deleted, restoring, restored.")]),e._v(" "),t("p",[e._v("事件让你每当有特定的模型类在数据库保存或更新时，执行代码。")]),e._v(" "),t("p",[e._v("当一个新模型被初次保存将会触发 creating 以及 created 事件。如果一个模型已经存在于数据库且调用了 save 方法，将会触发 updating 和 updated 事件。在这两种情况下都会触发 saving 和 saved 事件。")]),e._v(" "),t("p",[e._v("开始前，在你的 Eloquent 模型上定义一个 $dispatchesEvents 属性，将 Eloquent 模型的生命周期的各个点映射到你的 事件类 中。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App;\n\nuse App\\Events\\UserSaved;\nuse App\\Events\\UserDeleted;\nuse Illuminate\\Notifications\\Notifiable;\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\n\nclass User extends Authenticatable\n{\n    use Notifiable;\n\n    /**\n     * 模型的事件映射。\n     *\n     * @var array\n     */\n    protected $dispatchesEvents = [\n        'saved' => UserSaved::class,\n        'deleted' => UserDeleted::class,\n    ];\n}\n")])])]),t("h3",{attrs:{id:"观察者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者","aria-hidden":"true"}},[e._v("#")]),e._v(" 观察者#")]),e._v(" "),t("p",[e._v("如果你在一个给定的模型中监听许多事件，您可以使用观察者将所有监听器变成一个类。观察者类里的方法名应该反映Eloquent想监听的事件。 每种方法接收 model 作为其唯一的参数。 Laravel不包括观察者默认目录，所以你可以创建任何你喜欢你的目录来存放：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App\\Observers;\n\nuse App\\User;\n\nclass UserObserver\n{\n    /**\n     * 监听用户创建的事件。\n     *\n     * @param  User  $user\n     * @return void\n     */\n    public function created(User $user)\n    {\n        //\n    }\n\n    /**\n     * 监听用户删除事件。\n     *\n     * @param  User  $user\n     * @return void\n     */\n    public function deleting(User $user)\n    {\n        //\n    }\n}\n")])])]),t("p",[e._v("要注册一个观察者，需要用模型中的observe方法去观察。你可以在你的服务提供商之一的boot方法中注册观察者。在这个例子中，我们将在AppServiceProvider注册观察者：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n\nnamespace App\\Providers;\n\nuse App\\User;\nuse App\\Observers\\UserObserver;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass AppServiceProvider extends ServiceProvider\n{\n    /**\n     * 运行所有应用.\n     *\n     * @return void\n     */\n    public function boot()\n    {\n        User::observe(UserObserver::class);\n    }\n\n    /**\n     * 注册服务提供.\n     *\n     * @return void\n     */\n    public function register()\n    {\n        //\n    }\n}\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);