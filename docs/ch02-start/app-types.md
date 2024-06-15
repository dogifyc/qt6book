# 应用类型

本节展示了 Qt 6 能编写的各种应用类型。Qt 6 不仅限于此处介绍的应用类型，但下面的介绍会让您更好地了解 Qt 6 能实现的应用类型。

## 控制台应用

控制台应用并未提供用户界面，一般作为系统服务的一部分或者从命令行调用。Qt 6 自带了一套现成的组件，它们会帮助你高效地创建跨平台控制台应用。例如，网络文件 API，字符串处理和一个高效的命令行转换器。因为 Qt 是对 C++ 的高度抽象，你可以同时获得快速开发和高速执行能力。不要认为 Qt *仅仅* 是一个 UI 套件 ———— 它能提供更多的功能。

### 字符串处理

第一个例子演示了如何拼接两个字符串常量。需要承认的是，这不是一个实用的应用，但是它向你展示了没有事件循环的原生 C++ 应用是啥样的。

```cpp
// 引入需要的模型和类
#include <QtCore>

// text stream 可识别文本编码
QTextStream cout(stdout, QIODevice::WriteOnly);

int main(int argc, char** argv)
{
    // 避免编译告警
    Q_UNUSED(argc)
    Q_UNUSED(argv)
    QString s1("Paris");
    QString s2("London");
    // 拼接字符串
    QString s = s1 + " " + s2 + "!";
    cout << s << Qt::endl;
}
```

### 容器类

本例给应用新增了一个列表，并遍历了列表。Qt 自带了大量便于使用的容器类，它们和其它 Qt 类遵循同样的 API 规范。

```cpp
QString s1("Hello");
QString s2("Qt");
QList<QString> list;
// 流入容器
list << s1 << s2;
// Java 和 STL 类似遍历器
QListIterator<QString> iter(list);
while(iter.hasNext()) {
    cout << iter.next();
    if(iter.hasNext()) {
        cout << " ";
    }
}
cout << "!" << Qt::endl;
```

这里有个更高级的列表函数，这允许你将列表中的字符串拼接成一个。这在处理基于行的文本输入时，十分便利。反向处理（字符串转为字符串列表）可以通过 `QString::split()` 实现。

```cpp
QString s1("Hello");
QString s2("Qt");
// 方便的容器类
QStringList list;
list <<  s1 << s2;
// 拼接字符串
QString s = list.join(" ") + "!";
cout << s << Qt::endl;
```

### 文件 IO

下面的代码中，我们从本地目录读取了一个 CSV 文件，循环迭代每行，获取单元数据。我们只需 20 行左右的代码就能从 CSV 文件中获取表数据。文件返回了一个字节流，让我们能将其转成有效的 Unicode 编码的文本，需要将文件作为文本流的上级输入。要输出 CSV 文件，我们只需将文件以写入模式打开，将行依次流入该文本流。

```cpp
QList<QStringList> data;
// 文件操作
QFile file("sample.csv");
if(file.open(QIODevice::ReadOnly)) {
    QTextStream stream(&file);
    // loop forever macro
    forever {
        QString line = stream.readLine();
        // 判断字符串 'String()' 是否为 null
        if(line.isNull()) {
            break;
        }
        // 判断字符串 'QString("")' 是否为空
        if(line.isEmpty()) {
            continue;
        }
        QStringList row;
        // 迭代容器内的每一行
        foreach(const QString& cell, line.split(",")) {
            row.append(cell.trimmed());
        }
        data.append(row);
    }
}
// 无需清理
```

Qt 基于控制台的应用程序的部分到此结束。

## C++ 界面应用

控制台应用非常有用，但是有时你期望有个可视化的用户界面（GUI）。基于 GUI 的应用也需要后端代码来读取/写入文件，与网络沟通或将数据存在容器中。

在第一个基于视图的应用的代码段中，我们用最少的代码创建了一个窗口并展示它。在 Qt 中，一个没有上级的视图组件就是窗口。我们使用范围指针确保指针在超出范围的时候会被销毁。应用对象封装了 Qt 运行时，通过调用 `exec()` 启动了事件循环。随后，应用只会响应由诸如用户输入（鼠标或键盘），其它例如网络或文件 IO 的事件提供者触发的事件。应用只会在事件循环退出后退出。这需要调用 `quit()` 或关闭窗口。

当你运行代码时，你会看到一个 240 x 120 像素的窗口。完毕。

```cpp
include <QtGui>

int main(int argc, char** argv)
{
    QApplication app(argc, argv);
    QScopedPointer<QWidget> widget(new CustomWidget());
    widget->resize(240, 120);
    widget->show();
    return app.exec();
}
```

### 自定义视图组件

当你编写用户界面时，你可能需要创建自定义视图组件。通常来说，视图组件就是一个充满绘图调用的视窗。另外，该组件内置了如何处理键盘和鼠标输入的代码，以及其它外部事件。在 Qt 中，我们要自 QWidget 派生，并重写几个用于绘图和事件处理的函数。

```cpp
#pragma once

include <QtWidgets>

class CustomWidget : public QWidget
{
    Q_OBJECT
public:
    explicit CustomWidget(QWidget *parent = 0);
    void paintEvent(QPaintEvent *event);
    void mousePressEvent(QMouseEvent *event);
    void mouseMoveEvent(QMouseEvent *event);
private:
    QPoint m_lastPos;
};
```

在实现类中，我们给视图画了一个边框，且在鼠标最后的位置画了一个小矩形。这对低级自定义视图组件来说非常常见。鼠标和键盘事件修改了组件的内部装填，并触发了组件的重绘。我们不会过多介绍这份代码的细节，但是很高兴你知道这种可能性。Qt 自带了大量的预制桌面组件，你可能不需要这么做。

```cpp
include "customwidget.h"

CustomWidget::CustomWidget(QWidget *parent) :
    QWidget(parent)
{
}

void CustomWidget::paintEvent(QPaintEvent *)
{
    QPainter painter(this);
    QRect r1 = rect().adjusted(10,10,-10,-10);
    painter.setPen(QColor("#33B5E5"));
    painter.drawRect(r1);

    QRect r2(QPoint(0,0),QSize(40,40));
    if(m_lastPos.isNull()) {
        r2.moveCenter(r1.center());
    } else {
        r2.moveCenter(m_lastPos);
    }
    painter.fillRect(r2, QColor("#FFBB33"));
}

void CustomWidget::mousePressEvent(QMouseEvent *event)
{
    m_lastPos = event->pos();
    update();
}

void CustomWidget::mouseMoveEvent(QMouseEvent *event)
{
    m_lastPos = event->pos();
    update();
}
```

### 桌面组件

Qt 开发者早已为你准备了一套桌面组件，这些组件在不同的操作系统上具有本地化的外观。你只需在一个将这些组件放置在一个更大的面板上即可。Qt 中的一个视图组件也可以是其它组件的容器。这通过父子关系进行关联。这意味着我们需要制作现成组件，例如按钮，复选框，单选框，列表和网格，其它视图的子组件。达到此目的的其中一种方式如下所示。

以下是一个所谓的视图容器的头文件。

```cpp
class CustomWidget : public QWidget
{
    Q_OBJECT
public:
    explicit CustomWidget(QWidget *parent = 0);
private slots:
    void itemClicked(QListWidgetItem* item);
    void updateItem();
private:
    QListWidget *m_widget;
    QLineEdit *m_edit;
    QPushButton *m_button;
};
```

在实现中，我们使用布局来更好的排布组件。在视图尺寸变更时，布局管理器根据一些尺寸原则对组件进行重新布局。本例中有一个列表，一个行文本编辑器，一个按钮，它们垂直排布，允许用户编辑城市列表。我们用 Qt 的 `信号` 和 `槽` 来连接发送者和接收者。

```cpp
CustomWidget::CustomWidget(QWidget *parent) :
    QWidget(parent)
{
    QVBoxLayout *layout = new QVBoxLayout(this);
    m_widget = new QListWidget(this);
    layout->addWidget(m_widget);

    m_edit = new QLineEdit(this);
    layout->addWidget(m_edit);

    m_button = new QPushButton("Quit", this);
    layout->addWidget(m_button);
    setLayout(layout);

    QStringList cities;
    cities << "Paris" << "London" << "Munich";
    foreach(const QString& city, cities) {
        m_widget->addItem(city);
    }

    connect(m_widget, SIGNAL(itemClicked(QListWidgetItem*)), this, SLOT(itemClicked(QListWidgetItem*)));
    connect(m_edit, SIGNAL(editingFinished()), this, SLOT(updateItem()));
    connect(m_button, SIGNAL(clicked()), qApp, SLOT(quit()));
}

void CustomWidget::itemClicked(QListWidgetItem *item)
{
    Q_ASSERT(item);
    m_edit->setText(item->text());
}

void CustomWidget::updateItem()
{
    QListWidgetItem* item = m_widget->currentItem();
    if(item) {
        item->setText(m_edit->text());
    }
}
```

### 绘制形状

一些问题更适合可视化。如果手头的问题有点像几何问题，Qt graphics 视图会是一个不错的选择。一个图形视图在一个场景中放置简单的集合图形。用户可以与这些图形进行交互，或通过算法来定位它们。要填充一个几何图形，你需要一个图形视图和一个图形场景。场景附着在视图上，且填充这几何图形。

以下是一个短例。一个申明了视图和场景的头文件。

```cpp
class CustomWidgetV2 : public QWidget
{
    Q_OBJECT
public:
    explicit CustomWidgetV2(QWidget *parent = 0);
private:
    QGraphicsView *m_view;
    QGraphicsScene *m_scene;

};
```

在实现中，场景首先附着到视图中。该视图是一个由容器组件负责布局的组件。最后，我们为场景添加了一个小矩形边框，它会在视图上渲染。

```cpp
include "customwidgetv2.h"

CustomWidget::CustomWidget(QWidget *parent) :
    QWidget(parent)
{
    m_view = new QGraphicsView(this);
    m_scene = new QGraphicsScene(this);
    m_view->setScene(m_scene);

    QVBoxLayout *layout = new QVBoxLayout(this);
    layout->setMargin(0);
    layout->addWidget(m_view);
    setLayout(layout);

    QGraphicsItem* rect1 = m_scene->addRect(0,0, 40, 40, Qt::NoPen, QColor("#FFBB33"));
    rect1->setFlags(QGraphicsItem::ItemIsFocusable|QGraphicsItem::ItemIsMovable);
}
```

## 动态数据

到目前我们，我们已基本了解数据类型和如何使用组件和图形视图。在应用中，你会使用大量的结构化数据，这些数据需要被永久存储。当然，这些数据页需要被展示。为此，Qt 定义了模型。简单的模型如字符串列表模型，它填满了字符串，并挂载到列表视图上。

```cpp
m_view = new QListView(this);
m_model = new QStringListModel(this);
view->setModel(m_model);

QList<QString> cities;
cities << "Munich" << "Paris" << "London";
m_model->setStringList(cities);
```

另一种受欢迎的存取数据的方式是 SQL。Qt 集成了 SQLite，同时也支持其它数据库引擎（如 MySQL 和 PostgreSQL）。首选，你需要用如下的 schema 创建数据库：

```sql
CREATE TABLE city (name TEXT, country TEXT);
INSERT INTO city VALUES ("Munich", "Germany");
INSERT INTO city VALUES ("Paris", "France");
INSERT INTO city VALUES ("London", "United Kingdom");
```

用使用 SQL，我们需要在 .pro 文件中添加 SQL 模块

```
QT += sql
```

随后我们使用 C++ 打开数据库。首先，我们需要获取指定数据库引擎的新数据库对象。我们通过数据库对象打开数据库。对于 SQLite 来说，只需指定数据库文件的路径。Qt 提供了一些高阶数据库模型，其中有个叫表格模型。表格模型使用了一个表格标识符和一个可选的 where 子句。这个结果模型可以向前面的其它模型一样附着到一个列表视图中。

```cpp
QSqlDatabase db = QSqlDatabase::addDatabase("QSQLITE");
db.setDatabaseName("cities.db");
if(!db.open()) {
    qFatal("unable to open database");
}

m_model = QSqlTableModel(this);
m_model->setTable("city");
m_model->setHeaderData(0, Qt::Horizontal, "City");
m_model->setHeaderData(1, Qt::Horizontal, "Country");

view->setModel(m_model);
m_model->select();
```

对于进阶的模型操作，Qt 提供了一个排序文件代理模型，它允许你对模型进行排序，过滤，和转换。

```cpp
QSortFilterProxyModel* proxy = new QSortFilterProxyModel(this);
proxy->setSourceModel(m_model);
view->setModel(proxy);
view->setSortingEnabled(true);
```

过滤器作用于要被过滤的列上，且需要一个字符串过滤器参数。

```cpp
proxy->setFilterKeyColumn(0);
proxy->setFilterCaseSensitivity(Qt::CaseInsensitive);
proxy->setFilterFixedString(QString)
```

过滤器代理模型比这里展示的要厉害的多。不过目前，只要记住过滤器的存在即可。

!!! 注意

    以上就是 Qt 5 能够开发的各种典型应用的概述。桌面开发一直在发展，不久，移动端设备会成为新的桌面设备。移动端设备拥有一个不同的用户界面设计。它们比桌面软件要简单的多。它们专注于做一件事，且做这件事的过程很简单。动画是移动端的一种重要体验。用户界面需要让人感觉到灵动和流畅。传统的 Qt 技术不太适合这个市场。

*接下来：Qt Quick 来救你*

## Qt Quick 应用

在现代软件开发中有一个固有的冲突。用户界面比后端服务变化的快多了。在传统技术中，你需要同步开发前端和后端。当客户想要在软件开发过程中修改用户界面或在项目期间变更用户界面的理念时，会导致一些冲突。敏捷项目需要敏捷方法。

Qt Quick 提供了一个声明式的环境，用户界面（前端）在其中以类似 HTML 的方式申明，而后端则是原生 C++ 代码。这使得你可以两全其美。

以下是一个简单的 Qt Quick UI

```qml
import QtQuick

Rectangle {
    width: 240; height: 240
    Rectangle {
        width: 40; height: 40
        anchors.centerIn: parent
        color: '#FFBB33'
    }
}
```

这种声明式的语言被称为 QML，且在执行时需要一个运行时环境。Qt 提供了一个名为 `qml` 的标准运行时环境，你也可以写一个自定义的运行时环境。为此，我们需要一个快捷视图，且需要在 C++ 代码中设置这个 主 QML 文档。然后你可以显示这个用户界面。

```cpp
#include <QtGui>
#include <QtQml>

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);
    QQmlApplicationEngine engine("main.qml");
    return app.exec();
}
```

让我们回到更早的例子中。在这个例子中，我们使用了一个 C++ 的城市模型。它很适合用在我们的声明式 QML 代码中。

为了启用这个模型，我们先编写前端代码，看看我们打算如何使用它。本例中，前端期望一个名为 `cityModel` 的模型，它可被用在列表视图中。

```qml
import QtQuick

Rectangle {
    width: 240; height: 120
    ListView {
        width: 180; height: 120
        anchors.centerIn: parent
        model: cityModel
        delegate: Text { text: model.city }
    }
}
```

要启用 `cityModel`，我们基本可以复用前面的模型，不过要在我们的根上下文中添加一个 context 属性。根上下文是主文档中的另一个根元素。

```cpp
m_model = QSqlTableModel(this);
... // some magic code
QHash<int, QByteArray> roles;
roles[Qt::UserRole+1] = "city";
roles[Qt::UserRole+2] = "country";
m_model->setRoleNames(roles);
engine.rootContext()->setContextProperty("cityModel", m_model);
```


