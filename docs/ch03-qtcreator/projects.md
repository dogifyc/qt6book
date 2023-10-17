# 项目管理

Qt Creator 以项目的方式管理您的源代码。你可以通过 `File ‣ New File or Project` 创建新项目。创建新项目时，你会看到很多应用模板供你选择。Qt Creator 能够创建桌面，嵌入式和移动端应用，甚至是使用 Qt for Python 的 python 项目。这里的模板包括使用视图或 Qt Quick，甚至只使用控制台的准系统。对于初学者来说，选择模板是件很困难的事，所以我们为你选择了三种类型。

* **Other Project / QtQuick UI Prototype**：便于使用 QML，因为未使用 C++ 的构建步骤。最适合仅需更改属性的的项目。

* **Applications (Qt Quick) / Qt Quick Application (Empty)**：创建一个干净的使用 cmake 支持的 C++ 工程，包含一个渲染空窗口的 QML 主文档。这是所有原生 QML 应用的通用起点。

* **Libraries / Qt Quick 2.0 Extension Plug-in**：使用该向导为 Qt Quick UI 创建插件存根。插件通过原生元素继承 Qt Quick。这对创建可复用的 Qt Quick 库是很理想的。

* **Applications (Qt) / Qt Widgets Application**：创建使用 Qt 视图桌面应用的起点。如果你计划创建传统的基于 C++ 视图的应用，这将是你的起点。

* **Applications (Qt) / Qt Console Application**：创建一个不包含任何用户界面的起点。如果你计划用 Qt C++ 创建一个传统的 C++ 命令行工具，这将是你的起点。

::: tip 提示
在本书的开头部分，我们会主要使用 **QtQuick UI Prototype** 类型或 **Qt Quick Application**，这取决于我们是否在使用 Qt Quick 的同时用了 C++ 代码。后面介绍 C++ 的内容时，我们会使用 **Qt Console Application** 类型。在介绍继承 Qt Quick 的自定义原生插件时，我们会使用 *Qt Quick 2.0 Extension Plug-in* 类型向导。
:::
