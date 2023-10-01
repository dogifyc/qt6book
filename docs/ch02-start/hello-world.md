# Hello World

为了测试你的安装是否正确，我们会创建一个小型的 *hello world* 应用。请打开 Qt Creator 并创建一个 Qt Quick 工程( `File ‣ New File or Project ‣ Other Project ‣ Qt Quick UI Prototype` )，将其命名为 `HelloWorld`。

::: tip 提示
Qt Creator IDE 允许你创建多种类型的应用。若无特别指出，我们总是使用 Qt Quick UI 原型工程。 对于生产应用程序，您通常更喜欢基于 `CMake` 的项目，但对于快速原型设计，这种类型更适合。
:::

::: tip 提示
一个典型的 Qt Quick 应用是由名为 QmlEngine 的运行环境驱动的，它会加载初始的 QML 代码。开发者可以利用运行环境注册 C++ 类型获得与原生代码交互的能力。这些 C++ 类也可以打包成一个插件，在后面通过 import 语句动态导入。`qml` 工具是一个与构建的运行环境，可被直接使用。在初学阶段，我们不会介绍如何开发原生部分，专注于 Qt 6 的 QML 部分。这也是我们为什么从原型工程开始的原因。
:::

Qt Creator 创建了好几个文件。`HelloWorld.qmlproject` 是工程文件，存储了关联的项目配置。该文件由 Qt Creator 管理，所以请不要修改他。

另一个文件 `HelloWorld.qml` 是应用代码。打开它，在阅读后续内容前，先试着理解它。

```qml
// HelloWorld.qml

import QtQuick
import QtQuick.Window

Window {
    width: 640
    height: 480
    visible: true
    title: qsTr("Hello World")
}
```

`HelloWorld.qml` 是有 QML 语言编写的。我们会在下一章节深入讨论 QML 语言。QML 将用户界面描述为了一棵多层的树。在本例中，一个标题为 “Hello World”，尺寸为 640 x 480 像素的窗口。

要手动运行应用个，点击左侧的运行工具![](./assets/qtcreator-run.png) , 或在菜单上点击 Build > Run。

Qt Creator 会在后台运行 `qml`，并将你的 QML 文档作为第一个参数。`qml` 应用会转换此文档，并运行用户界面。你将会看到这个东西：

![](./assets/example.png)

Qt 6 成了！这意味着我们能进行下一步了。

::: tip 提示
若您是一位系统集成商，则需要安装 Qt SDK 以获取最新的稳定 Qt 版本，以及针对特定设备目标从源代码编译的 Qt 版本。
:::

::: tip 提示
从源码构建。

如果你想在命令行构建 Qt 6，你需要先下载源码的副本，然后构建它。访问 Qt 的百科，查找最新的如何从 git 构建 Qt 的文档。

构建完成后（大约需要 2 杯咖啡的时间），Qt 6 会存在于 `qtbase` 目录。等待期间喝啥都行，但我们推荐咖啡。

若你想要试下编译结果，可以在 Qt 6 的默认环境下运行实例：

    $ qtbase/bin/qml
:::

