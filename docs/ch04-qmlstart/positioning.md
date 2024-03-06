# 定位元素

有很多用于定位项目的 QML 元素。这些元素被称为定位器，Qt Quick 模块提供了这些定位器：`Row`，`Column`，`Grid` 和 `Flow`。后续你会看到它们展示相同的内容。


::: tip 提示
在了解细节前，让我介绍一下助手元素：红色，蓝色，绿色，亮色和暗色的矩形。这些组件各自包含了一个 48x48 的有色矩形。以下是 `RedSquare` 的参考代码：
:::

<<< @/docs/ch04-qmlstart/src/positioners/RedSquare.qml#global

请注意，`Qt.lighter(color)` 使矩形基于填充的颜色生成了一个更亮的边框。在后续实例中，我们会利用这些助手函数使代码变得更加精练和易于阅读。请牢记，每个矩形的初始尺寸都是 48x48。

`Column` 元素将子元素堆叠起来，形成一个纵向的列。`spacing` 属性可用于控制子元素的间距。

![](./assets/column.png)

<<< @/docs/ch04-qmlstart/src/positioners/ColumnExample.qml#global

`Row` 将子元素横向依次排列，可以从左到右，也可从右到左，依赖其 `layoutDirection` 属性。同上，`spacing` 用于控制子元素间距。

![](./assets/row.png)

<<< @/docs/ch04-qmlstart/src/positioners/RowExample.qml#global

`Grid` 元素将子元素放入网格中。通过 `rows` 和 `columns` 属性可以配置行列数。若二者仅设其一，另一项可以通过子元素的数据计算获得。例如，将行数设置为 3，其包含 6 个子元素，则列数会算得 2。`flow` 和 `layoutDirection` 属性用于控制元素顺序，`space` 属性用于控制元素间距。

![](./assets/grid.png)

<<< @/docs/ch04-qmlstart/src/positioners/GridExample.qml#global

最后一个定位器是 `Flow`。它将子元素按流排列。流的方向通过 `flow` 和 `layoutDirection` 控制。它允许从左到右，从右到左或从上到下。因为元素是流式添加的，他们会在需要时自动嵌入行或列中。为了使流正常工作，必须指定宽度或高度。它们可被直接指定或锚定布局。

![](./assets/flow.png)

<<< @/docs/ch04-qmlstart/src/positioners/FlowExample.qml#global

常见的与定位器一起使用的元素是 `Repeater`。它的工作方式类似 for 循环，会迭代 model。最简单的 model 例子是一个提供循环次数的数值。

![](./assets/repeater.png)

<<< @/docs/ch04-qmlstart/src/positioners/RepeaterExample.qml#global

在 repeater 实例中，我们使用了一些魔法。新增了自定义属性 `colorArray`，它是一个颜色数组。迭代器创建了一堆矩形（16 个，由 model 定义）。每次循环，它根据迭代器的子元素定义创建了一个矩形。通过 JS 数学函数 `Math.floor(Math.random()*3)` 为每个矩形选定了颜色。该函数返回了 0 -2 的随机整数，该整数作为从颜色数组的索引。前文提到过， JavaScript 是 Qt Quick 的核心模板，因此标准库在这里是可用的。

迭代器会自动注入 `index` 属性。它包含了当前循环的索引（0-15）。可用它处理循环，本例中，通过它计算 `Text` 元素的显示文本。

::: tip 提示
由于 `index` 属性是动态注入矩形的，将其申明为必要属性将增强其可读性，并有助于开发工具。这通过 `required property int index` 实现。
:::

::: tip 提示
更高级的处理大型模型和动态委托的动态视图将在模型-视图章节中介绍。当要呈现少量静态数据时，最好使用 Repeater。
:::

