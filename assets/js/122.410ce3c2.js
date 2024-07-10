(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{676:function(e,t,o){"use strict";o.r(t);var a=o(24),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"browser-html-vs-qt-quick-qml"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#browser-html-vs-qt-quick-qml"}},[e._v("#")]),e._v(" Browser/HTML vs Qt Quick/QML")]),e._v(" "),o("p",[e._v("The browser is the runtime to render HTML and execute the Javascript associated with the HTML. Nowadays modern web applications contain much more JavaScript than HTML. The Javascript inside the browser is a standard ECMAScript environment with some additional browser APIs. A typical JS environment inside the browser has a global object named "),o("code",[e._v("window")]),e._v(" which is used to interact with the browser window (title, location URL, DOM tree etc.) Browsers provide functions to access DOM nodes by their id, class etc. (which were used by jQuery to provide the CSS selectors) and recently also by CSS selectors ("),o("code",[e._v("querySelector")]),e._v(", "),o("code",[e._v("querySelectorAll")]),e._v("). Additionally, there is a possibility to call a function after a certain amount of time ("),o("code",[e._v("setTimeout")]),e._v(") and to call it repeatedly ("),o("code",[e._v("setInterval")]),e._v("). Besides these (and other browser APIs), the environment is similar to QML/JS.")]),e._v(" "),o("p",[e._v("Another difference is how JS can appear inside HTML and QML. In HTML, you can execute JS only during the initial page load or in event handlers (e.g. page loaded, mouse pressed). For example, your JS initializes normally on page load, which is comparable to "),o("code",[e._v("Component.onCompleted")]),e._v(" in QML. By default, you cannot use JS for property bindings in a browser (AngularJS enhances the DOM tree to allow these, but this is far away from standard HTML).")]),e._v(" "),o("p",[e._v("In QML, JS is a much more of a first-class citizen and is much deeper integrated into the QML render tree. Which makes the syntax much more readable. Besides these differences, people who have developed HTML/JS applications should feel at home using QML/JS.")])])}),[],!1,null,null,null);t.default=r.exports}}]);