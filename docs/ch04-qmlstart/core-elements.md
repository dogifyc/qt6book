# 核心元素

元素可被分为可见或不可见元素。可见元素（如 `Rectangle`）有几何外观，通常在屏幕上占有一个区域。不可见元素（如 `Timer`）提供常见功能，通常用于控制可见元素。

当前，我们会关注基础元素，如 `Item`， `Rectangle`， `Text`， `Image` 和 `MouseArea`。不过，通过 Qt Quick Controls 2 模块，可以利用标准平台组件（按钮，标签，silders）创建用户界面。

## Item 元素

`Item` 是所有可见元素的基础，因为其它所有的可见元素都继承自 `Item`。其本身并未绘制任何东西，但定义所有可见元素需要的属性：

* **Geometry（几何坐标）** - `x` 和 `y` 定义了左上位置，`width` 和 `height` 扩大了元素，`z` 用于提升和降低元素在堆栈中的层级。
* **Layout handling（处理布局）** - `anchors` 锚（left 左，right 右，top 上，bottom 底，vertical 垂直和 horizontal 水平居中）和可选的边距 `margins` 将元素相对其他元素定位。
* **Key handling（处理按键）** - `Key` 和 `KeyNavigation` 属性处理按键事件，`focus` 属性用于在最开始启用按键处理。
* **Transformation（变换）** - `scale` 缩放和 `rotate` 旋转变换和常见的可变换 `transform` 属性列表，如 *x,y,z*，还有 `transformOrigin` 点。
* **Visual（可见性）** - `opacity` 控制透明度，`visible` 控制展示和隐藏元素，`clip` 限制元素边界的绘制操作，而 `smooth` 增强渲染品质。
* **State definition（状态定义）** - `states` 列表属性包含了支持的状态列表，如当前 `state` 属性，`transitions` 列表属性会状态变更添加动画。

为了更好地理解不同的属性，我们将在本章的上下文中介绍它们。请记住，这些基本属性在每个可见元素上都是可用的，并且在这些元素之间是相同的。

::: tip 提示
`Item` 常用于容纳其它元素，类似 HTML 中的 *div* 元素。
:::

## 矩形元素

`Rectangle` 继承了 `Item` 并添加了填充颜色属性。另外，它通过 `border.color` 和 `border.width` 定义边框。要创建一个圆角矩形，可以通过 `radius` 属性。

```qml
Rectangle {
    id: rect1
    x: 12; y: 12
    width: 76; height: 96
    color: "lightsteelblue"
}
Rectangle {
    id: rect2
    x: 112; y: 12
    width: 76; height: 96
    border.color: "lightsteelblue"
    border.width: 4
    radius: 8
}
```

![](./assets/rectangle2.png)

::: tip 提示
有效的色值可见 SVG 颜色名称（参考 [http://www.w3.org/TR/css3-color/#svg-color](http://www.w3.org/TR/css3-color/#svg-color))。可以在 QML 中以多种方式指定颜色，不过最常见是方式是 RGB 字符串(‘#FF4444’)和颜色名称(‘white’)。

可以通过 JavaScript 创建随机颜色：

```qml
color: Qt.rgba( Math.random(), Math.random(), Math.random(), 1 )
```

:::

除了填充单色背景和边框，矩形还支持自定义渐变：

```qml
Rectangle {
    id: rect1
    x: 12; y: 12
    width: 176; height: 96
    gradient: Gradient {
        GradientStop { position: 0.0; color: "lightsteelblue" }
        GradientStop { position: 1.0; color: "slategray" }
    }
    border.color: "slategray"
}
```

![](./assets/rectangle3.png)

渐变由一系列的渐变帧定义。每帧有一个坐标和颜色。该位置标记了 y 坐标（0是顶部，1是底部）。`GradientStop` 的颜色指定了该坐标的颜色。

::: tip 提示
一个没有 *width/height* 的矩形将不可见。这通常在你有好几个宽高互相依赖的矩形，且它们的依赖逻辑出错时出现。请小心！
:::

::: tip 提示
无法创建一个有角度的渐变。因此，最好用一张事先备好的图片达成目的。可以试试在渐变的同时旋转矩形，不过，请明白旋转的矩形坐标并不会改变，且会导致元素坐标与可见区域不同的问题。从作者的角度来看，这种情况下使用预先设计好的图片是个更好的办法。
:::

## 文本元素

要展示文本，可以使用 `Text` 元素。它最明显的属性就是 `text`，类型是 `string`。该元素根据其获得的文本和文本使用的字体计算其初始宽度。字体可通过 font 分组属性设置（如 `font.family`，`font.pixelSize` 等等）。可用 `color` 属性修改文本属性。

```qml
Text {
    text: "The quick brown fox"
    color: "#303030"
    font.family: "Ubuntu"
    font.pixelSize: 28
}
```

![](./assets/text.png)

文本可通过 `horizontalAlignment` 和 `verticalAlignment` 属性靠边对其或居中对齐。为了进一步增强文本渲染，你可使用 `style` 和 `styleColor` 属性，这允许你渲染轮廓，凸起和凹陷的文本。

对于长文本，你通常想要定义一个 *break* 位置，如 *A very … long text*。这可通过 `elide` 属性实现。`elide` 属性允许设置文本的省略位置如左，右，居中。

如果你不想看到省略模式的‘…’，却仍想看到全部文本，你可以使用 `wrapMode` 属性（仅在显示指定宽度时生效）对文本进行换行：

```qml
Text {
    width: 40; height: 120
    text: 'A very long text'
    // '...' 会出现在中间
    elide: Text.ElideMiddle
    // 红色的文本边框
    style: Text.Sunken
    styleColor: '#FF4444'
    // 文本对齐顶部
    verticalAlignment: Text.AlignTop
    // 仅在没有定义省略模式时有效
    // wrapMode: Text.WordWrap
}
```

一个 `Text` 元素仅展示所设置的文本，其占据的剩余空间是透明的。这意味着没有渲染任何背景，所以你可以在需要时设置一个可见的背景。

::: tip 提示
`Text` 元素的初始宽度依赖于其字体和文本。未设置文本和宽度的 `Text` 元素将不可见，因为其宽度是0。
:::

::: tip 提示
通常，当你想要布局 `Text` 元素时，你需要区分对齐 `Text` 元素边界内的文本和对齐元素边界盒本身。在前一种情况下，你需要使用  `horizontalAlignment` 和 `verticalAlignment` 属性，而对于后者，你需要操纵元素集合元素或使用锚。
:::

## 图片元素

`Image` 元素允许展示不同格式的图片（如 `PNG`， `JPG`， `GIF`， `BMP`， `WEBP`）。 *对于完整的支持图片格式，请查看[Qt 文档](https://doc.qt.io/qt-6/qimagereader.html#supportedImageFormats)*。除了通过 `source` 属性提供图片 URL，它也有一个 `fillMode` 属性，控制改变大小。

```qml
Image {
    x: 12; y: 12
    // width: 72
    // height: 72
    source: "assets/triangle_red.png"
}
Image {
    x: 12+64+12; y: 12
    // width: 72
    height: 72/2
    source: "assets/triangle_red.png"
    fillMode: Image.PreserveAspectCrop
    clip: true
}
```

![](./assets/image.png)

::: tip 提示
URL 可以是一个带斜杠的本地路径( “./images/home.png” )或网络链接(如 “[http://example.org/home.png](http://example.org/home.png)”)。
:::

::: tip 提示
使用了 `PreserveAspectCrop` 的 `Image` 元素应该启用裁剪避免图片渲染超出 `Image` 元素的边界。默认情况下裁剪是禁用的(`clip: false`)。你需要启用裁剪(`clip: true`)来限制绘图区域在元素边界内。这可被用于任何可见元素，, 但[应谨慎使用](https://doc.qt.io/qt-6/qtquick-performance.html#clipping)。
:::

::: tip 提示
使用 C++ 你能通过 `QQuickImageProvider` 创建自定义图片提供器。这意味着你可以动态地多线程创建图片。
:::

## 鼠标区域元素

和元素交互，通常使用 `MouseArea`。这是一个矩形的可以捕获鼠标事件的不可见元素。当用户与可视化部分交互时，鼠标区域通常与可见项一起使用，以执行命令。

```qml
Rectangle {
    id: rect1
    x: 12; y: 12
    width: 76; height: 96
    color: "lightsteelblue"
    MouseArea {
        id: area
        width: parent.width
        height: parent.height
        onClicked: rect2.visible = !rect2.visible
    }
}

Rectangle {
    id: rect2
    x: 112; y: 12
    width: 76; height: 96
    border.color: "lightsteelblue"
    border.width: 4
    radius: 8
}
```

![MouseArea](./assets/mousearea1.png)

![MouseArea](./assets/mousearea2.png)

::: tip 提示
这是 Qt Quick 一个重要特性：输入处理和视觉展示是分开的。这允许实际的交互区域比用户界面更大。
:::

::: tip 提示
对于更多更复杂的交互，查看[Qt Quick 输入处理](https://doc.qt.io/qt-6/qtquickhandlers-index.html)。他们被用于代替 `MouseArea` 和 `Flickable` 等元素，并提供更强大的控制和灵活性。其思想是在每个处理程序实例中处理一个交互方面，而不是像以前那样在单个元素中集中处理来自给定源的所有事件。
:::

