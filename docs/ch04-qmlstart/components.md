# 组件

组件是可复用的元素。QML 提供了创建组件的多种方式。目前，我们仅专注于最简单的形式——基于文件的组件。创建基于文件的组件是通过将 QML 元素放入一个文件，且将文件名命名为元素（如 `Button.qml`）。你可像使用来自 Qt Quick 模块的其它元素一样的使用此组件。在我们的实例中，你的代码应用像这样 `Button { ... }`。

举例来说，我们先创建一个矩形区域，其包含了一个文本组件和鼠标区域。这看起来像个按钮，对于我们来说，这就够了。

<<< @/docs/ch04-qmlstart/src/components/InlinedComponentExample.qml#button

UI 看起来如下。在第一张图中，UI 是其初始状态，第二张图中，按钮被点击了。

![](./assets/button_waiting.png)

![](./assets/button_clicked.png)


现在我们的任务将按钮 UI 提取成可复用的组件。为此，我们需先考虑按钮可能的 API。想象别人应该如何使用该按钮。这是我能想到的：

```qml
// 一个按钮的最小 API
Button {
    text: "Click Me"
    onClicked: { /* 做点啥 */ }
}
```

可以通过 `text` 属性修改文本，且实现自定义点击处理器。当然，也可以给按钮一个预设的合理大小，便于后续覆盖（本例中使用了 `width: 240`）。

为此，我们创建了一个 `Button.qml` 文件，且将按钮代码复制到里面。此外，我们需要在根级别导出用户可能要修改的属性。

<<< @/docs/ch04-qmlstart/src/components/Button.qml#global

我们已在根级别导出文本属性和点击信号。一般来说，我们将根元素命名为 root，便于后续引用。我们使用了 QML 提供的 `alias` 特性，这是一种在 QML 元素内部根级别导出属性的方法，这使得这些属性对外部可用。必须明确，只有根级别的属性可被文件外的其它组件访问到。

要使用我们的新 `Button` 元素，可用简单地在文件内声明它。所以，前面的例子可用再度简化。

<<< @/docs/ch04-qmlstart/src/components/ReusableComponentExample.qml#reusability

现在，你可用通过 `Button { ... }` 在 UI 中使用任意的按钮。一个实际的按钮会更加复杂，例如，提供点击反馈或展示装饰。

::: tip 提示
如果你想的话，可以更进一步，将 `Item` 作为根元素。这会阻止用户修改我们设计的按钮的颜色，且让我们更好的控制导出 API。目标是导出最少的 API。实际上，这意味着我们要将根元素  `Rectangle` 替换为 `Item`，并将原来的矩形元素嵌入新的根元素。

```qml
Item {
    id: root
    width: 116; height: 26

    property alias text: label.text
    signal clicked

    Rectangle {
        anchors.fill parent
        color: "lightsteelblue"
        border.color: "slategrey"
    }
    ...
}
```
:::

通过此技术，创建整套的可复用组件变得很简单。

