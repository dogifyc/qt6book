(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{465:function(t,s,a){t.exports=a.p+"assets/img/canvaspaint.031f2793.png"},616:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"canvas-paint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvas-paint"}},[t._v("#")]),t._v(" Canvas Paint")]),t._v(" "),n("p",[t._v("In this example, we will create a small paint application using the "),n("code",[t._v("Canvas")]),t._v(" element.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(465),alt:"image"}})]),t._v(" "),n("p",[t._v("For this, we arrange four color squares on the top of our scene using a row positioner. A color square is a simple rectangle filled with a mouse area to detect clicks.")]),t._v(" "),n("div",{staticClass:"language-qml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-qml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Row")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("colorTools")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("property")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("paintColor")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#33B5E5"')])]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("anchors")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("horizontalCenter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("horizontalCenter")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("topMargin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("spacing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Repeater")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("model")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#33B5E5"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#99CC00"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#FFBB33"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#FF4444"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ColorSquare")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            required property var modelData\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("modelData")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("active")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("colorTools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paintColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" color")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("onClicked")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                colorTools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paintColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),n("p",[t._v("The colors are stored in an array and the paint color. When one the user clicks in one of the squares the color of the square is assigned to the "),n("code",[t._v("paintColor")]),t._v(" property of the row named "),n("code",[t._v("colorTools")]),t._v(".")]),t._v(" "),n("p",[t._v("To enable tracking of the mouse events on the canvas we have a "),n("code",[t._v("MouseArea")]),t._v(" covering the canvas element and hooked up the pressed and position changed handlers.")]),t._v(" "),n("div",{staticClass:"language-qml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-qml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Canvas")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("canvas")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("property")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("real")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("lastX")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("property")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("real")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("lastY")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("property")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("colorTools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paintColor")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("anchors")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("colorTools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margins")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("onPaint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineWidth "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v("\n        ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strokeStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n        ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        lastX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" area"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mouseX\n        lastY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" area"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mouseY\n        ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lineTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stroke")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MouseArea")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("area")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("anchors.fill")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("onPressed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mouseX\n            canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mouseY\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("onPositionChanged")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestPaint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),n("p",[t._v("A mouse press stores the initial mouse position into the "),n("code",[t._v("lastX")]),t._v(" and "),n("code",[t._v("lastY")]),t._v(" properties. Every change on the mouse position triggers a paint request on the canvas, which will result in calling the "),n("code",[t._v("onPaint")]),t._v(" handler.")]),t._v(" "),n("p",[t._v("To finally draw the users stroke, in the "),n("code",[t._v("onPaint")]),t._v(" handler we begin a new path and move to the last position. Then we gather the new position from the mouse area and draw a line with the selected color to the new position. The mouse position is stored as the new "),n("code",[t._v("last")]),t._v(" position.")])])}),[],!1,null,null,null);s.default=e.exports}}]);