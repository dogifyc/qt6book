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

* **(4)** Adding new properties to an element is done using the `property` qualifier followed by the type, the name and the optional initial value (`property <type> <name> : <value>`). If no initial value is given, a default initial value is chosen.

::: tip
You can also declare one property to be the default property using `default` keyword. If another element is created inside the element and not explicitly bound to a property, it is bound to the default property. For instance, This is used when you add child elements. The child elements are added automatically to the default property `children` of type list if they are visible elements.
:::

* **(5)** Another important way of declaring properties is using the `alias` keyword (`property alias <name>: <reference>`). The `alias` keyword allows us to forward a property of an object or an object itself from within the type to an outer scope. We will use this technique later when defining components to export the inner properties or element ids to the root level. A property alias does not need a type, it uses the type of the referenced property or object.

* **(6)** The `text` property depends on the custom property `times` of type int. The `int` based value is automatically converted to a `string` type. The expression itself is another example of binding and results in the text being updated every time the `times` property changes.


* **(7)** Some properties are grouped properties. This feature is used when a property is more structured and related properties should be grouped together. Another way of writing grouped properties is `font { family: "Ubuntu"; pixelSize: 24 }`.


* **(8)** Some properties belong to the element class itself. This is done for global settings elements which appear only once in the application (e.g. keyboard input). The writing is `<Element>.<property>: <value>`.


* **(9)** For every property, you can provide a signal handler. This handler is called after the property changes. For example, here we want to be notified whenever the height changes and use the built-in console to log a message to the system.

::: warning
An element id should only be used to reference elements inside your document (e.g. the current file). QML provides a mechanism called "dynamic scoping", where documents loaded later on overwrite the element IDs from documents loaded earlier. This makes it possible to reference element IDs from previously loaded documents if they have not yet been overwritten. It’s like creating global variables. Unfortunately, this frequently leads to really bad code in practice, where the program depends on the order of execution. Unfortunately, this can’t be turned off. Please only use this with care; or, even better, don’t use this mechanism at all. It’s better to export the element you want to provide to the outside world using properties on the root element of your document.
:::

## Scripting

QML and JavaScript (also known as ECMAScript) are best friends. In the *JavaScript* chapter we will go into more detail on this symbiosis. Currently, we just want to make you aware of this relationship.

<<< @/docs/ch04-qmlstart/src/concepts/ScriptingExample.qml#text

* **(1)** The text changed handler `onTextChanged` prints the current text every time the text changed due to the space bar being pressed. As we use a parameter injected by the signal, we need to use the function syntax here. It's also possible to use an arrow function (`(text) => {}`), but we feel `function(text) {}` is more readable.


* **(2)** When the text element receives the space key (because the user pressed the space bar on the keyboard) we call a JavaScript function `increment()`.


* **(3)** Definition of a JavaScript function in the form of `function <name>(<parameters>) { ... }`, which increments our counter `spacePresses`. Every time `spacePresses` is incremented, bound properties will also be updated.

## Binding

The difference between the QML `:` (binding) and the JavaScript `=` (assignment) is that the binding is a contract and keeps true over the lifetime of the binding, whereas the JavaScript assignment (`=`) is a one time value assignment.

The lifetime of a binding ends when a new binding is set on the property or even when a JavaScript value is assigned to the property. For example, a key handler setting the text property to an empty string would destroy our increment display:

<<< @/docs/ch04-qmlstart/src/concepts/ScriptingExample.qml#clear-binding{2}


After pressing escape, pressing the space bar will not update the display anymore, as the previous binding of the `text` property (*text: “Space pressed: ” + spacePresses + ” times”*) was destroyed.

When you have conflicting strategies to change a property as in this case (text updated by a change to a property increment via a binding and text cleared by a JavaScript assignment) then you can’t use bindings! You need to use assignment on both property change paths as the binding will be destroyed by the assignment (broken contract!).

