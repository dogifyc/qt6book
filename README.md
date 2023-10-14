# Qt6 书籍

*Copyright(C) 2012-2021 Johan Thelin 和 Jürgen Bocklage-Ryannel*

Qt 6 书籍的新家（基于 QmlBook）

你能在 [https://www.qt.io/product/qt6/qml-book](https://www.qt.io/product/qt6/qml-book) 看到本书的最新版本, 最新的快照版在 [https://distracted-dijkstra-f5d508.netlify.app/](https://distracted-dijkstra-f5d508.netlify.app/)。

# 内容

1. 本地构建本书
2. 构建发行版本
3. 对于复核员
4. 对于作者

# 1. 本地构建本书

本书采用静态站点生成工具 [VuePress](https://vuepress.vuejs.org/)。包管理工具采用 [Yarn](https://yarnpkg.com/)。

本地运行：

```
$ yarn
$ yarn run docs:dev
```

访问 [localhost:8080](http://localhost:8080) 查看本书。

构建示例，运行：

```
$ yarn run examples:build
```

这将会创建 `_examples/` 目录。构建时，假定 CMake 能找到 Qt6。我一般在 Debian Linux 设备上使用这样的命令：

```
$ CMAKE_PREFIX_PATH=/path/to/Qt/6.2.0/gcc_64/lib/cmake/ yarn run examples:build
```

后续调用无需指定`CMAKE_PREFIX_PATH`。

# 2. 构建发行版本

要构建发行版，需要先构建文档，然后将这些示例打入一个 tar 包：

```
$ yarn run docs:build
$ yarn run examples:package
```

这将会在你的包根目录创建 `examples.tar.gz`，这也是 VuePress 输出的位置，如 `docs/.vuepress/dist/`。

Notice that the `examples:package` command assumes that the VuePress `dist/` directory exists.

# 3. 对审阅者

可在[项目面板](https://github.com/qmlbook/qt6book/projects/1) 挑选要审阅的章节。也可在[疑问](https://github.com/qmlbook/qt6book/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion)查看项目中标签为疑问的 issue。

欢迎审阅者提交 issue 或 pull request。选择对你来说最简单的方式！

# 4. 对于作者

章节列在 `docs/.vuepress/config.js` 中。请分别为章节添加标签 `Qt5`, `Qt6 Draft`，`Qt 6`。
