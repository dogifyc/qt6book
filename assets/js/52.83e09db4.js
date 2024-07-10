(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{447:function(e,t,a){e.exports=a.p+"assets/img/model-view-delegate.e3c0a434.png"},609:function(e,t,a){"use strict";a.r(t);var i=a(24),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"concept"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#concept"}},[e._v("#")]),e._v(" Concept")]),e._v(" "),i("p",[e._v("A common pattern when developing user interfaces is to keep the representation of the data separate from the visualization. This makes it possible to show the same data in different ways depending on what task the user is performing. For instance, a phone book could be arranged as a vertical list of text entries, or as a grid of pictures of the contacts. In both cases, the data is identical: the phone book, but the visualization differs. This division is commonly referred to as the model-view pattern. In this pattern, the data is referred to as the model, while the visualization is handled by the view.")]),e._v(" "),i("p",[e._v("In QML, the model and view are joined by the delegate. The responsibilities are divided as follows: The model provides the data. For each data item, there might be multiple values. In the example above, each phone book entry has a name, a picture, and a number. The data is arranged in a view, in which each item is visualized using a delegate. The task of the view is to arrange the delegates, while each delegate shows the values of each model item to the user.")]),e._v(" "),i("p",[e._v("This means that the delegate knows about the contents of the model and how to visualize it. The view knows about the concept of delegates and how to lay them out. The model only knows about the data it is representing.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(447),alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);