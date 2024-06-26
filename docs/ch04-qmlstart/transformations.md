## 简单变化

变化操作对象的几何形状。一般来说，QML 项目可以被转换，旋转和放大缩小。这些操作有简单方式和高级方式两种。

让我们从简单的变化开始。这将作为我们的学习的起点。

简单的变化通过修改 `x,y` 坐标来实现。旋转通过 `rotation` 属性完成。该值的格式的角度（0.. 360）。缩小和放大通过 `scale` 属性完成，其值 <1 意味着缩小，`>1` 意味着放大。旋转和缩放不会修改元素的坐标和大小：`x,y` 和 `width/height` 不会改变，仅修改了绘图指令。

展示例子前，先看看这个：`ClickableImage` 元素。`ClickableImage` 是一个包含鼠标点击区域的图片。一个有用的经验法则 —— 如果一段代码重复出现三次，就将其封装为组件。

<<< @/docs/ch04-qmlstart/src/transformation/ClickableImage.qml#global

![](./assets/objects.png)

我们用可点击图片展示3个对象，方形，圆形和三角形。每个对象被点击时都会进行简单变化。点击背景将会重置场景。

<<< @/docs/ch04-qmlstart/src/transformation/TransformationExample.qml#no-tests

![](./assets/objects_transformed.png)

每次点击原型会增加其 x 坐标，而每次点击放行会使其旋转。每次点击三角形会触发组合变化，旋转和放大。对于放大和旋转操作，我们设置了 `antialiasing: true`，起用了因为性能原因而关闭的抗锯齿功能（与裁剪属性 `clip` 相同）。当你在工作中看到图形里有些栅格化的边缘时，打开平滑开关可能是个不错的主意。

::: tip 提示
为了在缩放图片时达到更佳的显示效果，建议仅做缩小操作，不要做放大操作。使用一个较大的放大系数放大图片会导致图片模糊不清。当缩放图片时，你需要考虑使用 `smooth: true` 牺牲性能，启用更高质量的过滤器。
:::

背景的 `MouseArea` 覆盖了整个背景图并重置了对象状态。

::: tip 提示
代码中先出现的元素在堆栈中的排序（称为 z 排序）更低。如果你多次点击 `circle`，你会看到它出现在了 `box` 之下。z 排序也可通过元素的 `z` 属性修改。

![](./assets/objects_overlap.png)

这是因为在代码中，`box` 在后面。鼠标区域也遵循相同的规则。代码中靠后的鼠标区域会与靠前的重叠，并捕捉鼠标事件。

请牢记：*元素的顺序与其在文档中的顺序息息相关*。
:::

