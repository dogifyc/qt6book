# 动画

动画被应用于属性变更期间。一个动画定义了属性变化时，从一个值变到另一个值的缓动曲线。这些动画曲线创建了从一个值到另一个值的平滑过渡。

一个动画由一些动态属性，缓动曲线，时长组成。Qt Quick 中的所有动画都由同一个计时器控制，因此是同步的。这提升了动画性能和质量。

::: tip 动画通过修改属性值控制属性的变化

这是一条基本原则。QML 基于元素，属性和脚本。每个元素都提供了几十个属性，每个属性都能被动画。在本书中，你会看到这个壮观的竞技场。

你可以看看一些动画，鉴赏它们，或者发挥你的创造力。请牢记：*动画控制属性变更，每个元素都有几十个属性受您控制*。

**释放力量吧!**
:::

![](./assets/animation_sequence.png)

<<< @/docs/ch05-fluid/src/animation/AnimationExample.qml#global

以上实例展示了一个针对 `x` 和 `rotation` 属性的简单动画。每个动画耗时 4000 毫秒。该动画作用于 `x`，将其横坐标渐渐移至 240 px。该动画也作用于角度属性，从当前角度转至 360 度。两个动画是并行运行的，且在点击 `MouseArea` 后开始的。

你可以通过修改 `to` 和 `duration` 属性来处理动画，也可添加新的动画（例如，`opacity` 或 `scale`）。**这些组合在一起可以使得对象慢慢消失在深空！**

## 动画元素

这里有好几种动画类型，每种都针对特定的用例优化。这是一份重要动画的列表：


* `PropertyAnimation` - 针对属性值的动态修改

* `NumberAnimation` - 针对实数类型的动态修改

* `ColorAnimation` - 针对颜色的动态修改

* `RotationAnimation` - 针对旋转角度的动态修改

除了这些广泛使用的基础动画元素，Qt Quick 还提供了更多针对特殊用例的动画：


* `PauseAnimation` - 允许暂停动画

* `SequentialAnimation` - 允许依次执行动画

* `ParallelAnimation` - 允许并行运行动画

* `AnchorAnimation` - 针对锚值得动态修改

* `ParentAnimation` - 针对父值的动态修改

* `SmoothedAnimation` - 允许属性值动态追踪一个值

* `SpringAnimation` - 允许属性值像弹簧一样追踪一个值

* `PathAnimation` - 元素沿一条路径动态前进

* `Vector3dAnimation` - 以 QVector3d 值执行动画

稍后我们会学习如何创建动画序列。在制作更复杂的动画时，有时需要在动画进行时修改属性或运行脚本。Qt Quick 为此提供了动作元素，只要动画元素能用的地方，动作元素就可用：


* `PropertyAction` - 在动画中立刻修改属性

* `ScriptAction` - 定义动画中运行的脚本

本章会用小而精的例子介绍主要的动画类型。

## 应用动画

有几种应用动画的方法：


* **Animation on property（属性动画）** - 元素完全加载后自动运行

* **Behavior on property（属性行为）** - 属性值修改后自动运行

* **Standalone Animation（独立动画）** - 显式地通过 `start()` 或 `running` 设置为 true 时运行动画（如，属性绑定）

*后续我们会看看如何在 state 变化过程中使用动画。*

## 点击图片 V2

为了示范如何使用动画，我们重用了前文的 ClickableImage 组件，并为其添加了一个文本元素。

<<< @/docs/ch05-fluid/src/animation/ClickableImageV2.qml#global

为了组织图片下面的元素，我们使用了 Column 定位器，并基于列的 childrenRect 属性计算了宽高。我们导出了 text，图片 souce 属性和点击信号。同时我们期望文本的宽度和图片一样，支持换行。利用文本元素的 `wrapMode` 属性，我们实现了换行功能。

::: tip 父级/子级 元素几何依赖
因为翻转了几何依赖（父元素的形状依赖子元素），我们无法对 ClickableImageV2 设置 `width` 或 `height`，因为这会破坏绑定关系。

若父元素仅作为容器，且子元素会适应父元素，则更应该倾向于使子元素的形状依赖于父元素的形状。
:::

### 依次排列的对象

![](./assets/animationtypes_start.png)

这三个对象的 y 坐标是一样的(`y=200`)。都需要移动到 `y=40`，每个元素使用了不同的方法实现了此目的，每个方法有不同的副作用和特性。

### 第一个对象

第一个对象使用 `Animation on <property>` 策略。该动画立刻启用。

<<< @/docs/ch05-fluid/src/animation/AnimationTypesExample.qml#animation-on-property

当对象被点击时，其 y 坐标会被重置为起始状态，这点对三个对象都有效。对第一个对象来说，动画运行时，点击不会重置 y 坐标。

这在视觉上会令人不适，因为 y 坐标会在动画开始前的几分之一秒被设定为一个新值。*应该避免这种属性竞争*。

### 第二个对象

第二个对象使用 `Behavior on` 行为动画。该行为告诉属性值应该渐变。该行为可以设置 `Behavior` 的属性 `enabled: false` 来禁用。

<<< @/docs/ch05-fluid/src/animation/AnimationTypesExample.qml#behavior-on

该对象会在被点击时开始移动（它的 y 坐标会被设置为 40）。重复点击不会重复设置，因为它的值已被设置了。

可以尝试为 y 坐标设置一个随机值（如 `40 + (Math.random() \* (205-40)`）。你会看到该对象总会动画至新未知，且因为动画的时长被设置为 4 秒，所以其会自动调整移动速度。

### 第三个对象

第三个对象使用了独立动画。该动画作用在元素上，几乎可出现在文档内的任意位置。

<<< @/docs/ch05-fluid/src/animation/AnimationTypesExample.qml#standalone

点击动作会通过 `start()` 函数启动动画。每个动画都有 start()，resume() 和 restart() 函数。此种动画包含了前文所提的其它动画更多的功能。

我们需要通过 `target` 属性定义动画的目标元素和需要动画的属性。本例中，还需要定义一个 `to` 值和 `from` 值，这将允许重启动画。

![](./assets/animationtypes.png)

点击背景图会重置所有对象的位置。第一个对象无法被重启，除非重启程序，重启程序会重新加载该元素。

::: tip 其它控制动画的方法

另一种启动和停止动画的方法是将一个属性绑定至动画的 `running` 属性。当用户能控制该属性时显得非常有用：

```qml
NumberAnimation {
    // [...]
    // 鼠标按下时，动画运行
    running: area.pressed
}
MouseArea {
    id: area
}
```
:::

## 缓动曲线

动画可以控制属性值的变化过程。缓和属性能够影响属性变更的曲线。

目前我们定义的动画都使用了线性插值，因为动画的缓和属性的初值是 `Easing.Linear`。最好是通过图标看看，y 坐标是被动画的属性，x 坐标是时间(*时长*)。线性插值会在图标的开始位置到结束位置间画出一条直线，起点值为 `from`，终点值为 `to`。缓和类型定义了变化曲线。

需要谨慎地为移动对象选择一个合适的缓和类型。例如，当滑出一个页面时，初始的速度应该很慢，然后加速，最后高速滑出，类似翻书。

:::tip 不应过度使用动画

与UI设计的其他方面一样，动画应该精心设计以支持 UI 流，而不是主导它。眼睛对移动物体非常敏感，所以动画极容易吸引用户的注意。
:::

下个例子中，我们会尝试一些缓动曲线。每个缓动曲线由同一个可点击图片展示，当其被点击时，`square` 动画会被设置一个新的缓动曲线，并调用 `restart()` 以新的曲线运行动画。

![](./assets/automatic/easingcurves.png)

本例的代码有点复杂。首先创建 `EasingTypes` 的网格和一个 `Box`，后者受缓动曲线控制。每个缓动类型展示了动画将使用的曲线。当用户点击曲线时，盒子会根据该曲线移动。该动画是一个独立动画，目标为盒子，作用于 x 坐标，时长为 2 秒。

::: tip 提示
EasingType 的内部实时渲染曲线，感兴趣的读者可以在 `EasingCurves` 示例中查找。
:::

<<< @/docs/ch05-fluid/src/easing/EasingCurves.qml#global

请试试该实例并观察动画进行时速度的变化。某些动画令人舒适，某些动画令人难受。

除了 `duration` 和 `easing.type` 外，你还可以微调动画。例如，常见的 `PropertyAnimation` 类型（大部分动画继承自它）还支持 `easing.amplitude`，`easing.overshoot` 和 `easing.period` 属性，这些允许你微调部分动画的行为。

不是所有的缓动曲线都支持这些参数。请查询 `PropertyAnimation` 文档的 [easing table](http://doc.qt.io/qt-6/qml-qtquick-propertyanimation.html#easing-prop) ，看看哪些参数对哪些曲线有影响。

::: tip 选择正确的曲线

在用户界面中为元素选择正确的动画至关重要。请牢记，动画应该支持 UI 流，而不是激怒用户。
:::

## 组合动画

通常情况下，动画不止作用于一个属性。你可以期望同时运行几个动画，或依次运行动画，或在动画运行间隔执行脚本。

为此，可以使用组合动画。见名知意，它可以组合动画。有两种组合方式：并行或串行。可以将 `SequentialAnimation` 或 `ParallelAnimation` 作为其它动画的容器。这些分组动画本身就是动画，所以可以这样用。

![](./assets/groupedanimation.png)

### 并行动画

动画启动时，并行动画的直接子动画会并行运行。这使得你可以同时动画不同的属性。

<<< @/docs/ch05-fluid/src/animation/ParallelAnimationExample.qml#global

![](./assets/parallelanimation_sequence.png)

### 串行动画

串行动画依据从上到下的顺序依次执行每个子动画。

<<< @/docs/ch05-fluid/src/animation/SequentialAnimationExample.qml#global

![](./assets/sequentialanimation_sequence.png)

### 嵌套动画

组合动画也可嵌套。比如，串行动画可以有两个并行动画作为子动画。我们可以用一个足球的例子来可视化。想法是把一个球从左扔到右，并动画它的行为。

![](./assets/soccer_init.png)

要理解此动画，我们需要将其分解成几个必要的变化。需要牢记动画就是动态修改属性。以下是几种不同的变化：

* 从左到右的 x 变化(`X1`)

* y 变化，先是从下到上的 `Y1`，再是从上到下的 `Y2`，再加一个弹跳

* 整个动画周期的一个 360 度的旋转 `ROT1`

完整的动画耗时 3 秒。

![](./assets/soccer_plan.png)

先创建一个宽为 480，高为 360 的空元素作为根元素。

```qml
import QtQuick

Item {
    id: root

    property int duration: 3000

    width: 480
    height: 300

    // [...]
}
```

将完整的动画耗时定义为一个引用，便于在动画中同步时长。

下一步是添加背景色，分别是绿色和蓝色的渐变矩形。

<<< @/docs/ch05-fluid/src/animation/BouncingBallExample.qml#background

![](./assets/soccer_stage1.png)

上面的蓝色天空矩形的高度是 200 像素，下方的矩形的顶部锚定了天空的底部，底部锚定了根元素的底部。

让我们在绿色部分添加足球。该足球是一张图片，存储在 “assets/soccer_ball.png”。开始的时候，我们将其放在左下角。

<<< @/docs/ch05-fluid/src/animation/BouncingBallExample.qml#soccer-ball

![](./assets/soccer_stage2.png)

该图片附加了一个点击区域。若足球被点击，足球将重置位置并重新开始动画。

接下来，我们添加两个 y 变化。

```qml
SequentialAnimation {
    id: anim
    NumberAnimation {
        target: ball
        properties: "y"
        to: 20
        duration: root.duration * 0.4
    }
    NumberAnimation {
        target: ball
        properties: "y"
        to: 240
        duration: root.duration * 0.6
    }
}
```

![](./assets/soccer_stage3.png)

这指定了动画耗时的前 40% 是向上的动画，后 60% 是向下的动画，两个动画依次运行。变化目前是线性的，没有使用缓动曲线，后续我们会为其添加，目前我们只关注动画的运行。

下一步，我们要添加 x 的变化。x 的变化应与 y 的变化同步，所以，我们需要将 y 的变化和 x 的变化封装到并行动画中。

```qml
ParallelAnimation {
    id: anim
    SequentialAnimation {
        // ... our Y1, Y2 animation
    }
    NumberAnimation { // X1 animation
        target: ball
        properties: "x"
        to: 400
        duration: root.duration
    }
}
```

![](./assets/soccer_stage4.png)

最后，我们期望球能转起来。为此，我们需要在并行动画中添加一个新的动画。我们选择 `RotationAnimation`，因为它适用于旋转。

```qml
ParallelAnimation {
    id: anim
    SequentialAnimation {
        // ... our Y1, Y2 animation
    }
    NumberAnimation { // X1 animation
        // X1 animation
    }
    RotationAnimation {
        target: ball
        properties: "rotation"
        to: 720
        duration: root.duration
    }
}
```

这就是完整的动画序列。还剩一件事，就是为球提供正确的缓动曲线。对于 *Y1* 动画，我们使用 `Easing.OutCirc` 曲线，因为它应该看起来更像一个圆形运动。*Y2* 使用 `Easing.OutBounce` 来给球一个弹跳，弹跳应该发生在结尾（尝试使用 `Easing.InBounce`，你会看到弹跳开始得很快）。

The *X1* and *ROT1* animation are left as-is, with a linear curve.

以下是完整的动画代码：

<<< @/docs/ch05-fluid/src/animation/BouncingBallExample.qml#parallel-animation
