# 进阶技巧

## QML 的性能

QML 和 Javascript 是解释型语言。这意味着无需在运行前进行编译。作为替代，它们在一个执行引擎内运行。然而解释执行花费较大，故采用了好几种提供性能的技术。

QML 引擎使用了及时编译（JIT）技术来提升性能。引擎同时缓存了之前的输出，避免再次编译。这些对开发者是无感的。唯一的痕迹可在源文件旁找到以 `qmlc` 和 `jsc` 结尾的文件。

若想减少初始化时解析代码的耗时，可以提前编译 QML 和 Javascript。你需要将代码放入一个 Qt 资源文件，更详细的内容见 Qt 文档中的 [提前编译 QML](https://doc.qt.io/qt-6/qtquick-deployment.html#ahead-of-time-compilation) 章节。
