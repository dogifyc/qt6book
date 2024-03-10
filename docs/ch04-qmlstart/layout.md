# 布局元素

QML 提供了一种灵活的方式来使用锚来布局元素。锚是 `Item` 的基本概念，对所有可见 QML 元素可用。锚的行为类似合约，比直接计算坐标变更更强大。锚是相对关系的表达式；锚总是要标定一个相对元素。

![](./assets/anchors.png)

每个元素有 6 个主要的锚线（`top` 顶部, `bottom` 底部, `left` 左侧, `right` 右侧, `horizontalCenter` 水平中线, `verticalCenter`垂直中线）。此外，`Text` 元素还有一个 `baseline` 锚线。每个锚线均提供了偏移。`top`，`bottom`，`left`，和 `right` 锚的偏移又被称为边距。`horizontalCenter`，`verticalCenter` 和 `baseline` 的偏移就叫偏移。

![](./assets/anchorgrid.png)


* **(1)** 子元素填充父元素

    ```qml
    GreenSquare {
        BlueSquare {
            width: 12
            anchors.fill: parent
            anchors.margins: 8
            text: '(1)'
        }
    }
    ```
    


* **(2)** 子元素左对齐父元素

    ```qml
    GreenSquare {
        BlueSquare {
            width: 48
            y: 8
            anchors.left: parent.left
            anchors.leftMargin: 8
            text: '(2)'
        }
    }
    ```



* **(3)** 子元素左侧与父元素右侧对齐

    ```qml
    GreenSquare {
        BlueSquare {
            width: 48
            anchors.left: parent.right
            text: '(3)'
        }
    }
    ```



* **(4)** 居中对齐的元素。`Blue1` 相对父元素水平居中。`Blue2` 的也是水平居中的，但是是相对 `Blue1` 的，且其顶部与 `Blue` 的底部锚线对齐。

    ```qml
    GreenSquare {
        BlueSquare {
            id: blue1
            width: 48; height: 24
            y: 8
            anchors.horizontalCenter: parent.horizontalCenter
        }
        BlueSquare {
            id: blue2
            width: 72; height: 24
            anchors.top: blue1.bottom
            anchors.topMargin: 4
            anchors.horizontalCenter: blue1.horizontalCenter
            text: '(4)'
        }
    }
    ```



* **(5)** 子元素居中于父元素

    ```qml
    GreenSquare {
        BlueSquare {
            width: 48
            anchors.centerIn: parent
            text: '(5)'
        }
    }
    ```



* **(6)** 子元素的水平中线，垂直中线分别与父元素的水平中线，垂直中线分别对齐，水平中线有向左的相对偏移。

    ```qml
    GreenSquare {
        BlueSquare {
            width: 48
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.horizontalCenterOffset: -12
            anchors.verticalCenter: parent.verticalCenter
            text: '(6)'
        }
    }
    ```

## 彩蛋

上方的矩形被神奇地增强了，允许拖拽。(1) 中的子元素无法拖拽，因为其锚定了所有的锚线（虽然你可以拖动 (1) 中的父元素，因为它没有锚定的元素）。(2) 可被垂直拖动，因为它只有左侧锚线锚定了。(3) 也类似。(4) 中的两个子元素只能被垂直拖动，因为它们被水平居中了。(5) 中的子元素中心对齐了，所以无法被拖动。(6) 同 (5)。拖动元素意味着改变其 `x,y` 坐标。由于锚定比设置 `x,y` 属性更强，因此拖动受到锚定线的限制。后续我们讨论动画时会看到这种影响。

