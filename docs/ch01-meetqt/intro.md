# Qt 6 简介

## Qt Quick

Qt Quick 是 Qt 6 中使用的用户界面技术的总称。它在 Qt 4 引入，壮大于 Qt 6。Qt 6 是好几项技术的集合：

* QML - 用于用户界面的标记语言
* JavaScript - 动态脚本语言
* Qt C++ - 极致优化且轻量的 c++ 库

![](./assets/qt6_overview.png)

与 HTML 类似，QML 是一种标记语言。QML 由标签组成（在 Qt Quick 中被称为类型），包含了一对大括号，形如 `Item {}`。它是重新设计的，旨在让开发者快速创建更易读的用户界面。用户界面可通过 JavaScript 代码进一步增强。Qt Quick 能方便地通过 Qt C++ 编写的原生功能进行扩展。简而言之，声明式 UI 被称为前端，原生代码被称为后端。这使得你将密集的计算和原生操作从用户界面中分离出来。

在典型项目中，前端由 QML/JavaScript 开发。后端代码由 Qt C++ 开发，负责与系统交互和一些重活。这很自然的划分出了设计工程师和功能开发工程师。一般来说，后端代码由 Qt Test（Qt 单元测试框架）进行测试后，导出给前端工程使用。

## 认识用户界面

让我们利用 Qt Quick 创建一个简单的用户界面，它将展示 QML 语言的好几个知识点。最后的成品是一个有几个扇叶的纸风车。

![](./assets/showcase.png)

首先新建一个空的 `main.qml` 文件。所有的 QML 文件都有后缀 `.qml`。作为一种标记语言（类似 HTML），一个 QML 文档有且仅有一个根节点。在本例中，根节点是一个 `Image` 类型的，它的宽高基于指定的背景图：

```qml
import QtQuick

Image {
    id: root
    source: "images/background.png"
}
```

由于 QML 并未限制根节点的类型，本例中我们使用 `Image` 类型，它的 source 属性被设置为指定背景图。

![](./assets/background.png)

::: tip 提示
每种类型都有其属性。例如，图片有属性 `width` 和 `height`，均存储着像素值。它也有其它属性，例如 `source`。由于图片类型自动从图片中继承了尺寸，我们无需再手动设置 `width` 和 `height` 属性。
:::

大部分的标准类型位于 `QtQuick` 模块中，可在 `.qml` 文件的开头通过 import 语句导入。

`id` 是一个特殊的可选属性，它包含了一个标识符，可在文档的其它位置引用其关联的类型。重点： `id` 属性设置后就无法修改，且无法再运行时设置。本书约定以 `root` 作为最顶层节点的 id，便于在后续更大的 QML 文档中找到根节点。

用户界面中的前置元素，一根杆和风车是两张独立的图片。


![](./assets/pole.png)

![](./assets/pinwheel.png)

我们想将这根杆相对于背景图水平居中，底部对齐。而风车则置于背景图的正中心。

虽然我们的入门示例只使用了图片类型，后面我们会慢慢的引导你创建由更多不同类型组成的复杂界面。

```qml
Image {
    id: root
    ...
    Image {
        id: pole
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom: parent.bottom
        source: "images/pole.png"
    }

    Image {
        id: wheel
        anchors.centerIn: parent
        source: "images/pinwheel.png"
    }
    ...
}
```

将风车置于正中，我们需要用到名为 `anchor` 的复杂属性。锚点允许你指定父元素和其子元素之间的几何关系。例如，`anchors.centerIn: parent` 会将我置于父元素的中心。左对右，上对下，居中对填充，垂直居中对水平居中。一般来说，多个锚点同时使用时，他们必须互相兼容，例如，将一个元素的左侧和另一个元素的顶部对齐将不会产生任何作用。

风车只需一个简单的锚点。

::: tip 提示
有时，你想做些微调，例如，将其稍微偏移中心点。这可通过 `anchors.horizontalCenterOffset` 或 `anchors.verticalCenterOffset` 完成。类似的调整属性对其它的标点也是适用的，可通过文档查看完整的锚点属性。
:::

::: tip 提示
将子类型图片置于根节点（本例中是 `Image`）下说明了声明式语言的一个重要原则。你所申明的可视外观的层级和分组，会先绘制最顶层（我们的背景图）的层级，然后基于其坐标系，在其上继续绘制子层级。
:::

为了让案例变得更有趣，让我们赋予其一点交互性。当用鼠标点击画面的任一点时旋转风车。

我们使用 `MouseArea` 类型包裹根节点。

```qml
Image {
    id: root
    ...
    MouseArea {
        anchors.fill: parent
        onClicked: wheel.rotation += 90
    }
    ...
}
```

当用户点击 MouseArea 覆盖的区域时，他会发送一个信号。你可以通过重写 `onClicked` 函数来连接此信号。当信号被连接后，发送信号就会调用关联的函数。在本例中，当点击事件触发时，`id` 为 `wheel` 的元素（本例中为风车图片）会顺时针旋转 90 度。

::: tip 提示
这项技术对每种信号都有效，它的命名规则是 `on` + `SignalName`。同时，所有的属性值变更时，也会发送信号。这些信号的命名规则是：
:::

```js
    `on${property}Changed`
```

例如，若 `width` 属性值发生变化，你可以通过 `onWidthChanged: print(width)` 观察。

现在这个风车会在用户点击时旋转了，但旋转动作是立刻完成的，而不是在一段时间内慢慢转动。可以通过动画来实现平滑转动。动画定义了属性值如何在一段时间内转变成另一个值。要启用动画，需要使用 `Animation` 类型的 `Behavior` 属性。`Behavior` 为属性值的修改定义了一套变化过程。换而言之，无论何时属性值变化，动画就会运行。这只是在 QML 中使用动画的一种方式。

```qml
Image {
    id: root
    Image {
        id: wheel
        Behavior on rotation {
            NumberAnimation {
                duration: 250
            }
        }
    }
}
```

现在，无论何时旋转角度发生变化，它都会通过 `NumberAnimation` 触发一个 250 毫秒的动画。每次的 90 度旋转将耗时 250 毫秒，这将使得旋转变得流畅。

![](./assets/scene2.png)

::: tip 提示
你不会真的看到这个风车转的模糊。因为它的旋转只修改了角度。（assets 目录中有一个模糊的风车图片，你可以换它试试。）
:::

现在这个风车看起来好多了，且转的更舒心了。我们在也在这个过程中简单的了解了 Qt Quick 编程是如何工作的。

