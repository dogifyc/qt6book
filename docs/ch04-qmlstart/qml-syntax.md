# QML 语法

QML 是一种描述对象间如何互相关联的声明式语言。QtQuick 是基于 QML 的框架，用于构建用户界面。它将用户界面拆分成更小的元素，这些元素可以构成组件。QtQuick 描述了这些用户元素的外观和行为。此用户界面描述可用 JavaScript 扩充功能，提供简单或复杂的逻辑。从这个角度来看，它遵循HTML-JavaScript模式，但QML和QtQuick是从头开始设计的，用于描述用户界面，而不是文本文档。

在最简单的形式下，QtQuick 允许创建层级结构。子元素继承了父元素的坐标系。一个 `x,y` 坐标总是关联其父。

::: tip 提示
QtQuick 构建在 QML 之上。QML 语言仅知道元素，属性，信号和绑定。QtQuick 是一个基于 QML 的框架。使用默认属性，QtQuick元素的层次结构可以以一种优雅的方式构建。
:::

![](./assets/scene.png)

让我们从一个简单的QML文件示例开始，以解释不同的语法。

<<< @/docs/ch04-qmlstart/src/concepts/RectangleExample.qml#global

* `import` 语句导入模块。可以添加一个可选的 `<major>.<minor>` 版本。
* 就像 C/C++ 和 JavaScript 一样，可用 `//` 添加单行注释，`/* */` 添加多行注释。
* 每份 QML 文件只能有一个根元素，就像 HTML 一样
* 一个元素由其类型声明，后面跟着 `{ }`
* 元素可以有属性，形式如 `name: value`
* QML 文档内的任意元素可通过其 `id` （一个没有引号包裹的标识符）访问。
* 元素可以嵌套，意味着父元素可以有子元素。父元素可通过 `parent` 关键字访问

通过 `import` 语句，你通过名称导入了一个 QML 模块。在 Qt5 中，需要指定主要版本和次要版本，如 `2.15`，这在 Qt6 中是可选的。在本书中，我们抛弃了这个可选的版本号，因为你一般会使用所选的 Qt 套件的适配的最新版本。

::: tip 提示
通常你希望使用 id 或 `parent` 关键字访问特定元素。所以，利用 `id: root`，将根元素命名为 "root" 是个不错的选择。后续，你就无需考虑 QML 文档中，根元素的名称了。
:::

::: tip 提示
可以使用 Qt Quick 运行时从命令行运行实例，如下所示：

    $ $QTDIR/bin/qml RectangleExample.qml

需要将 `$QTDIR` 替换成您的 Qt 安装路径。`qml` 可执行程序初始化了 Qt Quick 运行环境，解释执行提供的 QML 文件。

在 Qt Creator 中，你可以打开对应的工程，运行 `RectangleExample.qml`。
:::

## 属性

元素由其名称声明，由属性和自定义属性定义。一个属性就是一个键值对，如 `width: 100`，`text: 'Greetings'`，`color: '#FF0000'`。属性会指定类型，且可以拥有初值。

```qml
Text {
    // (1) 标识符
    id: thisLabel

    // (2) 设置 x y 坐标
    x: 24; y: 16

    // (3) 绑定高度为 2 * width
    height: 2 * width

    // (4) 自定义属性
    property int times: 24

    // (5) 属性别名
    property alias anotherTimes: thisLabel.times

    // (6) 设置文本拼接内容
    text: "Greetings " + times

    // (7) 字体是个分组属性
    font.family: "Ubuntu"
    font.pixelSize: 24

    // (8) KeyNavigation 是个附件属性
    KeyNavigation.tab: otherLabel

    // (9) 属性变更时的信号处理
    onHeightChanged: console.log('height:', height)

    // 需要焦点接收键盘事件
    focus: true

    // 根据 focus 的值改变颜色
    color: focus ? "red" : "black"
}
```

让我们看看属性的不同特性：


* **(1)** `id` 是个非常特殊的类属性值，用于在 QML 文件（称为 "文档"）内引用元素。`id` 不是字符串类型的，而是一个标识符，是 QML 语言的一部分。文档内的 `id` 不能重复，且无法修改和查询（行为类似 C++ 中的引用）。

* **(2)** 属性可以根据其类型赋予其值。若没有赋值，则会自动选择初值。你需要查询文档中该元素的属性初值相关的内容。

* **(3)** 属性值可以依赖一个或多个其它属性，这被称为 *绑定*。绑定属性会在其依赖属性修改时更新。就像签了合同，在本例中，`height` 总是两倍的 `width`。

* **(4)** 可以通过修饰符 `property`，名称和可选的初值(`property <type> <name> : <value>`)为元素添加新属性。若未指定初值，则会选择默认初值。

::: tip 提示
也可通过关键字 `default` 将某个属性申明为默认属性。若在元素内创建了另一个元素，且未显式地绑定至一个属性，它将绑定至默认属性。举例来说，这通常在你添加子元素时使用。可见子元素会自动加入列表类型的默认属性 `children`。
:::

* **(5)** 另一种申明属性的重要方式是通过 `alias` 关键字(`property alias <name>: <reference>`)。`alias` 关键字允许我们将对象的属性或对象本身的从类型内转发到外部作用域。稍后在定义组件时，我们将使用这种技术将内部属性或元素id导出到根级别。属性别名无需类型，它直接使用其指向的属性或对象的类型。

* **(6)** `text` 属性依赖 int 类型的自定义属性 `times`。该 `int` 类型的值会自动转换为 `string` 类型。该表达式也是另一个例子，每次 `times` 属性变更，都会使得 text 被更新。

* **(7)** 某些属性是分组属性。该特性用于当某个属性更加结构化，且需要分组打包时。另一种书写分组属性的方法是 `font { family: "Ubuntu"; pixelSize: 24 }`。


* **(8)** 一些属性属于元素所属类。全局设置元素只在应用程序中出现一次（如，键盘输入）。写法是 `<Element>.<property>: <value>`。


* **(9)** 对于每个属性，你可提供一个信号处理器。该处理器会在属性值修改后被调用。例如，我们期望在高度变更时收到通知，使用内置的控制台打印日志。、

::: warning 警告
元素 id 应仅被用于在文档内引用元素（即当前文件）。QML 提供了称为“动态作用域”的机制，稍候加载的文件会覆盖以前加载的文件的元素 ID。这使得在后续后加载的文件中引用之前未被覆盖的 id 称为可能。就像创建了全局变量。不幸地是，实践中这通常导致屎山代码，因为程序依赖其执行顺序。更糟的是，无法关闭该机制。请小心谨慎地使用此机制，或者，干脆别用。在文件的根元素上导出需要提供给外部作用域的元素是个更好的办法。
:::

## 脚本

QML 和 JavaScript（也被称为 ECMAScript）是最佳拍档。在 *JavaScript* 章节，我们会更加深入这种共生关系。目前，你只需知道这种关系的存在。

<<< @/docs/ch04-qmlstart/src/concepts/ScriptingExample.qml#text

* **(1)** 每次空格键被按下时，监听文本变更的处理器 `onTextChanged` 都会打印文本。因为我们需要使用信号注入的参数，所以这里得用函数语法。也可用箭头函数(`(text) => {}`)，但我们觉得 `function(text) {}` 更具可读性。


* **(2)** 当 text 元素收到空格键（因为用户在键盘上按下了空格键），会调用 JavaScript 函数 `increment()`。


* **(3)** 定义形如 `function <name>(<parameters>) { ... }` 的 JavaScript 函数会增加计数器 `spacePresses`。每次 `spacePresses` 增加后，绑定属性也会被更新。

## 绑定

QML 的 `:` (绑定) 和 JavaScript 的 `=` (赋值) 的区别是，绑定是一个合约，且在绑定周期内一直生效，而 JavaScript 的赋值(`=`)仅是单次操作。

为属性设置新绑定或将一个 JavaScript 值赋予该属性都会终止绑定的生命周期。例如，一个将 text 属性设置为空字符串的按键处理器会停止增长显示：

<<< @/docs/ch04-qmlstart/src/concepts/ScriptingExample.qml#clear-binding{2}

按下 escape 键后，再按空格键将不会更新文本显示，因为 `text` 属性之前的绑定 (*text: “Space pressed: ” + spacePresses + ” times”*) 被破坏了。

当你有如本例中冲突的策略去修改属性时（通过绑定更新文本和通过 JavaScipt 赋值清空文本），你就不能用绑定！你应该在两个属性变更时都使用赋值，因为绑定关系会被赋值破坏。

