# 状态和变化

用户界面的某些部分通常可以用状态描述。状态定义了一个或多个属性值的变化过程，可以由特定的条件触发。

此外，状态切换可以附加变化，变化定义了动画的变化过程或额外执行的动作。动作也可在进入状态时触发。

## 状态

QML 中可通过 `State` 元素为任意元素定义状态，其值是 `states` 数组。

状态由名称标识，其最简单的形式由元素的一系列属性修改组成。默认状态由元素的初始属性定义，其名字为 `""`（一个空字符串）。

```qml
Item {
    id: root
    states: [
        State {
            name: "go"
            PropertyChanges { ... }
        },
        State {
            name: "stop"
            PropertyChanges { ... }
        }
    ]
}
```

通过为 `state` 属性赋予一个新的状态名称可以修改状态，这些状态被定义在元素的 `states` 属性中。

::: tip 用 when 控制状态
另一种控制状态的方式是通过 `State` 元素的 `when` 属性。`shen` 属性可以设置为一个表示式，当其值为 true 时，该状态会被启用。
:::

```qml
Item {
    id: root
    states: [
        ...
    ]

    Button {
        id: goButton
        ...
        onClicked: root.state = "go"
    }
}
```

![](./assets/trafficlight_sketch.png)

比如，红绿灯有两个信号灯。上方的是意味着禁行的红色，下面的是允许通过的绿灯。在此例中，两个灯不能同时亮。让我们看看状态变化图。

![](./assets/trafficlight_states.png)

当启动改系统时，它自动进入默认的 `stop` 状态。停止状态会将 `light1` 改为红色，`light2` 改为黑色。

外部事件能将状态改为 `go`。在启动状态中，`light1` 的颜色改为黑色，`light2` 的颜色改为绿色，允许行人通过。

为了更好的理解，我们画了一个包含两个灯的用户界面。为了简单，我们定义了两个矩形，矩形的圆角是宽度的一半（矩形宽和高相同，这意味着着是一个正方形）。

<<< @/docs/ch05-fluid/src/animation/StatesExample.qml#lights

如状态图中所示，我们定义了两种状态：`"go"` 状态和 `"stop"` 状态，它们分别将灯的颜色改为绿色或红色。我们将 `state` 属性改为 `stop`，确保交通灯的初始状态是 `stop`。

::: tip 初始状态
我们可以只定义一个 `"go"` 状态，通过将 `light` 设置为红色，`light2` 设置为黑色达到隐式设置初始状态的目的。由初始属性定义的状态和 `"stop"` 状态一致。
:::

<<< @/docs/ch05-fluid/src/animation/StatesExample.qml#states

Using `PropertyChanges { target: light2; color: "black" }` is not really required in these examples as the initial color of `light2` is already black. In a state, it’s only necessary to describe how the properties shall change from their default state (and not from the previous state).

A state change is triggered using a mouse area which covers the whole traffic light and toggles between the go- and stop-state when clicked.

<<< @/docs/ch05-fluid/src/animation/StatesExample.qml#interaction

![](./assets/trafficlight_ui.png)

We are now able to successfully change the state of the traffic lamp. To make the UI more appealing and natural, we should add some transitions with animation effects. A transition can be triggered by a state change.

::: tip Using scripting
It’s possible to create similar logic using scripting instead of QML states. However, QML is a better language than JavaScript for describing user interfaces. Where possible, aim to write declarative code instead of imperative code.
:::


## Transitions

A series of transitions can be added to every item. A transition is executed by a state change.

You can define on which state change a particular transition can be applied using the `from:` and `to:` properties. These two properties act like a filter: when the filter is true the transition will be applied. You can also use the wildcard “\*”, which means “any state”. 

For example, `from: "*"; to: "*"` means "from any state to any other state", and is the default value for `from` and `to`. This means the transition will be applied to every state switch.

For this example, we would like to animate the color changes when switching state from “go” to “stop”. For the other reversed state change (“stop” to “go”) we want to keep an immediate color change and don’t apply a transition. 

We restrict the transition with the `from` and `to` properties to filter only the state change from “go” to “stop”. Inside the transition, we add two color animations for each light, which shall animate the property changes defined in the state description.

<<< @/docs/ch05-fluid/src/animation/StatesExample.qml#transitions

You can change the state though clicking the UI. The state is applied immediately and will also change the state while a transition is running. So, try to click the UI while the state is in the transition from “stop” to “go”. You will see the change will happen immediately.

![](./assets/trafficlight_transition.png)

You could play around with this UI by, for example, scaling the inactive light down to highlight the active light. 

For this, you would need to add another property change for scaling to the states and also handle the animation for the scaling property in the transition. 

Another option would be to add an “attention” state where the lights are blinking yellow. For this, you would need to add a sequential animation to the transition for one second going to yellow (“to” property of the animation and one second going to “black”).

Maybe you would also want to change the easing curve to make it more visually appealing.

