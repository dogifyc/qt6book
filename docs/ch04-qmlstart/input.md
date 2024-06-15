# 输入元素

我们早已使用鼠标输入元素 `MouseArea`，接下来看看键盘输入。我们从文本编辑元素 `TextInput` 和 `TextEdit` 元素开始。

## TextInput

`TextInput` 允许用户输入一行文本。该元素支持输入约束，如 `validator`，`inputMask` 和 `echoMode`。

```qml
// textinput.qml

import QtQuick

Rectangle {
    width: 200
    height: 80
    color: "linen"

    TextInput {
        id: input1
        x: 8; y: 8
        width: 96; height: 20
        focus: true
        text: "Text Input 1"
    }

    TextInput {
        id: input2
        x: 8; y: 36
        width: 96; height: 20
        text: "Text Input 2"
    }
}
```

![](./assets/textinput.png)


用户可点击 `TextInput` 内部获得焦点。要支持通过键盘切换焦点，可以使用附加属性 `KeyNavigation`。

```qml
// textinput2.qml

import QtQuick

Rectangle {
    width: 200
    height: 80
    color: "linen"

    TextInput {
        id: input1
        x: 8; y: 8
        width: 96; height: 20
        focus: true
        text: "Text Input 1"
        KeyNavigation.tab: input2
    }

    TextInput {
        id: input2
        x: 8; y: 36
        width: 96; height: 20
        text: "Text Input 2"
        KeyNavigation.tab: input1
    }
}
```
附加属性 `KeyNavigation` 支持一些预设的导航键，按下导航键，可以在元素间切换焦点。

文本输入元素除了闪烁的光标和输入的文本外没有任何视觉展示。为了让用户能将元素识别为输入元素，需要一些视觉装饰，例如，简单的矩形。若将 `TextInput` 放入其它元素，需要确保导出了要使用的主要元素。

为了复用，我们将这段代码移入了自定义组件 `TLineEditV1`。

```qml
// TLineEditV1.qml

import QtQuick

Rectangle {
    width: 96; height: input.height + 8
    color: "lightsteelblue"
    border.color: "gray"

    property alias text: input.text
    property alias input: input

    TextInput {
        id: input
        anchors.fill: parent
        anchors.margins: 4
        focus: true
    }
}
```

::: tip 提示
若你想完全导出 `TextInput`，可以通过 `property alias input: input` 完成。第一个 `input` 是属性名称，第二个是元素名称。
:::

随后我们用 `TLineEditV1` 组件重写了 `KeyNavigation` 实例。

```qml
Rectangle {
    ...
    TLineEditV1 {
        id: input1
        ...
    }
    TLineEditV1 {
        id: input2
        ...
    }
}
```

![](./assets/textinput3.png)

尝试按下 tab 键触发导航。你会发现焦点并未切换至 `input2`。只配置 `focus: true` 是不够的。问题是当焦点切给 `input2` 元素时，`TlineEditV1` 内的顶级元素（`Rectangle`）获得了焦点，并未将焦点转发给 `TextInput`。为了避免此问题，QML 提供了 `FocusScope`。

## FocusScope

焦点作用域内最后一个 `focus: true` 的子元素会获得焦点。所以它将焦点转发给最后一个请求焦点的子元素。我们会用焦点作用域创建第二版的 TLineEdit 组件，名为 TLineEditV2。

```qml
// TLineEditV2.qml

import QtQuick

FocusScope {
    width: 96; height: input.height + 8
    Rectangle {
        anchors.fill: parent
        color: "lightsteelblue"
        border.color: "gray"

    }

    property alias text: input.text
    property alias input: input

    TextInput {
        id: input
        anchors.fill: parent
        anchors.margins: 4
        focus: true
    }
}
```

我们的实例现在长这样：

```qml
Rectangle {
    ...
    TLineEditV2 {
        id: input1
        ...
    }
    TLineEditV2 {
        id: input2
        ...
    }
}
```

现在按下 tab 键，能成功地在两个组件间正确切换，内部的子元素也能正确的获得焦点。

## TextEdit

`TextEdit` 与 `TextInput` 十分类似，支持多行文本。它没有文本约束属性，因为着依赖于查询文本内容尺寸（`contentHeight`，`contentWidth`）。我们也创建了名为 `TTextEdit` 的自定义组件，为编辑区域提供了背景色，使用了焦点作用域获得更好的焦点转发机制。

```qml
// TTextEdit.qml

import QtQuick

FocusScope {
    width: 96; height: 96
    Rectangle {
        anchors.fill: parent
        color: "lightsteelblue"
        border.color: "gray"

    }

    property alias text: input.text
    property alias input: input

    TextEdit {
        id: input
        anchors.fill: parent
        anchors.margins: 4
        focus: true
    }
}
```

你可以像使用 `TLineEdit` 组件一样使用它

```qml
// textedit.qml

import QtQuick

Rectangle {
    width: 136
    height: 120
    color: "linen"

    TTextEdit {
        id: input
        x: 8; y: 8
        width: 120; height: 104
        focus: true
        text: "Text Edit"
    }
}
```

![](./assets/textedit.png)

## Keys 元素

附加属性 `Keys` 允许在按下某个按键时执行代码。例如，为了移动，缩小或放大矩形，我们可以钩入上，下，左和右键，在按下这些键时变化元素，也可以钩入加和减键，在按下这些键时执行缩放元素操作。

<<< @/docs/ch04-qmlstart/src/input/KeysExample.qml#global

![](./assets/keys.png)

