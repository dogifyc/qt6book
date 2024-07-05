# Controls 简介

Qt Quick 为你提供了基本的用于创建用户界面的基础图形和交互元素。利用 Qt Quick Controls 你可以从一个稍微结构化的基础开始。

Controls 提供了各种组件，简单的如文本，标签和按钮，复杂的如滑动和时钟。这些元素非常容易上手，如果你希望基于经典交互模式创建用户界面，因为它们提供了良好的基础。

Qt Quick Controls 提供了多种拆箱即用的风格，你可以看看下面的表格。*Basic* 风格是扁平化的。*Universal* 样式基于微软通用设计指导，而 *Material* 遵循 Google 的设计指导，而 *Fusion* 风格是一种面向桌面的风格。

某些样式可通过调色板微调。*Imagine* 风格基于静态图片，这让图形设计师不用写任何代码或调色盘就能创建一种新的风格。

* Basic
    
    ![](./assets/style-basic.png)

* Fusion

    ![](././assets/style-fusion.png)

* macOS

    ![](././assets/style-imagine.png)

* Material

    ![](././assets/style-material.png)

* Imagine

    ![](././assets/style-imagine.png)

* Windows

    ![](././assets/style-imagine.png)
    
* Universal
    
    ![](./assets/style-universal.png)

Qt Quick Controls 2 可通过 `QtQuick.Controls` 导入。下面的模块也很有趣：

* **`QtQuick.Controls`** - 基础控件
* **`QtQuick.Templates`** - 为控件提供基础行为和非可视化的基础类型
* **`QtQuick.Controls.Imagine`** - 支持图片样式主题
* **`QtQuick.Controls.Material`** - 支持 Material 样式主题
* **`QtQuick.Controls.Universal`** - 支持 Universal 样式主题
* **`Qt.labs.platform`** - 为如选择文件，颜色，系统托管图标和标准路径等常见任务提供平台原生的弹框。

:::warning 警告 Qt.Labs
注意，模块 `Qt.labs` 是实验性的，意味着它们的 API 在不同的 Qt 版本间会有不兼容的修改。
:::

