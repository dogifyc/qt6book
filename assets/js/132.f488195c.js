(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{692:function(t,s,e){"use strict";e.r(s);var a=e(24),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"plugin-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-content"}},[t._v("#")]),t._v(" Plugin Content")]),t._v(" "),e("p",[t._v("A plugin is a library with a defined interface, which is loaded on demand. This differs from a library as a library is linked and loaded on startup of the application. In the QML case, the interface is called "),e("code",[t._v("QQmlExtensionPlugin")]),t._v(". There are two methods interesting for us "),e("code",[t._v("initializeEngine()")]),t._v(" and "),e("code",[t._v("registerTypes()")]),t._v(". When the plugin is loaded first the "),e("code",[t._v("initializeEngine()")]),t._v(" is called, which allows us to access the engine to expose plugin objects to the root context. In the majority, you will only use the "),e("code",[t._v("registerTypes()")]),t._v(" method. This allows you to register your custom QML types with the engine on the provided URL.")]),t._v(" "),e("p",[t._v("Let us explore by building a small "),e("code",[t._v("FileIO")]),t._v(" utility class. It would let you read and write text files from QML. A first iteration could look like this in a mocked QML implementation.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// FileIO.qml (good)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QtObject")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token javascript-function language-javascript"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token javascript-function language-javascript"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TEXT"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This is a pure QML implementation of a possible C++ based QML API. We use this to explore the API. We see we need a "),e("code",[t._v("read")]),t._v(" and a "),e("code",[t._v("write")]),t._v(" function. We also see that the "),e("code",[t._v("write")]),t._v(" function takes a "),e("code",[t._v("path")]),t._v(" and a "),e("code",[t._v("text")]),t._v(", while the "),e("code",[t._v("read")]),t._v(" function takes a "),e("code",[t._v("path")]),t._v(" and returns a "),e("code",[t._v("text")]),t._v(". As it looks, "),e("code",[t._v("path")]),t._v(" and "),e("code",[t._v("text")]),t._v(" are common parameters and maybe we can extract them as properties to make the API easier to use in a declarative context.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// FileIO.qml (better)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QtObject")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    property url source\n    property string text\n    "),e("span",{pre:!0,attrs:{class:"token javascript-function language-javascript"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// open file and write text ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token javascript-function language-javascript"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// read file and assign to text ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Yes, this looks more like a QML API. We use properties to allow our environment to bind to our properties and react to changes.")]),t._v(" "),e("p",[t._v("To create this API in C++ we would need to create a Qt C++ interface looking like this.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileIO")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token base-clause"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QObject")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Q_PROPERTY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QUrl source READ source WRITE setSource NOTIFY sourceChanged"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Q_PROPERTY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QString text READ text WRITE setText NOTIFY textChanged"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    Q_INVOKABLE "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Q_INVOKABLE "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("FileIO")]),t._v(" type need to be registered with the QML engine. We want to use it under the “org.example.io” module")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org.example.io 1.0\n\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileIO")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("A plugin could expose several types with the same module. But it can not expose several modules from one plugin. So there is a one to one relationship between modules and plugins. This relationship is expressed by the module identifier.")])])}),[],!1,null,null,null);s.default=n.exports}}]);