(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{479:function(t,a,s){t.exports=s.p+"assets/img/age.7721e88c.png"},480:function(t,a,s){t.exports=s.p+"assets/img/attractor.ba1b32ae.png"},481:function(t,a,s){t.exports=s.p+"assets/img/friction.61cf64bf.png"},482:function(t,a,s){t.exports=s.p+"assets/img/gravity.1c7f9df6.png"},483:function(t,a,s){t.exports=s.p+"assets/img/turbulence.9a46fe12.png"},484:function(t,a,s){t.exports=s.p+"assets/img/wander.e57633ce.png"},631:function(t,a,s){"use strict";s.r(a);var e=s(24),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"affecting-particles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#affecting-particles"}},[t._v("#")]),t._v(" Affecting Particles")]),t._v(" "),e("p",[t._v("Particles are emitted by the emitter. After a particle was emitted it can’t be changed any more by the emitter. The affectors allows you to influence particles after they have been emitted.")]),t._v(" "),e("p",[t._v("Each type of affector affects particles in a different way:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Age")]),t._v(" - alter where the particle is in its life-cycle")]),t._v(" "),e("li",[e("code",[t._v("Attractor")]),t._v(" - attract particles towards a specific point")]),t._v(" "),e("li",[e("code",[t._v("Friction")]),t._v(" - slows down movement proportional to the particle’s current velocity")]),t._v(" "),e("li",[e("code",[t._v("Gravity")]),t._v(" - set’s an acceleration in an angle")]),t._v(" "),e("li",[e("code",[t._v("Turbulence")]),t._v(" - fluid like forces based on a noise image")]),t._v(" "),e("li",[e("code",[t._v("Wander")]),t._v(" -  randomly vary the trajectory")]),t._v(" "),e("li",[e("code",[t._v("GroupGoal")]),t._v(" -  change the state of a group of a particle")]),t._v(" "),e("li",[e("code",[t._v("SpriteGoal")]),t._v(" - change the state of a sprite particle")])]),t._v(" "),e("h2",{attrs:{id:"age"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#age"}},[t._v("#")]),t._v(" Age")]),t._v(" "),e("p",[t._v("Allows particle to age faster. the "),e("code",[t._v("lifeLeft")]),t._v(" property specified how much life a particle should have left.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Age")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("anchors.horizontalCenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("horizontalCenter")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("system")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("particleSystem")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("advancePosition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("lifeLeft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1200")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("once")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tracer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),e("p",[t._v("In the example, we shorten the life of the upper particles once when they reach the age of affector to 1200 msec. As we have set the "),e("code",[t._v("advancePosition")]),t._v(" to true, we see the particle appearing again on a position when the particle has 1200 msecs left to live.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(479),alt:"image"}})]),t._v(" "),e("h2",{attrs:{id:"attractor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attractor"}},[t._v("#")]),t._v(" Attractor")]),t._v(" "),e("p",[t._v("The attractor attracts particles towards a specific point. The point is specified using "),e("code",[t._v("pointX")]),t._v(" and "),e("code",[t._v("pointY")]),t._v(", which is relative to the attractor geometry. The strength specifies the force of attraction. In our example we let particles travel from left to right. The attractor is placed on the top and half of the particles travel through the attractor. Affector only affect particles while they are in their bounding box. This split allows us to see the normal stream and the affected stream simultaneous.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Attractor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("anchors.horizontalCenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("horizontalCenter")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("system")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("particleSystem")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointX")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pointY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("strength")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tracer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),e("p",[t._v("It’s easy to see that the upper half of the particles are affected by the attracted to the top. The attraction point is set to top-left (0/0 point) of the attractor with a force of 1.0.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(480),alt:"image"}})]),t._v(" "),e("h2",{attrs:{id:"friction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#friction"}},[t._v("#")]),t._v(" Friction")]),t._v(" "),e("p",[t._v("The friction affector slows down particles by a factor until a certain threshold is reached.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Friction")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("anchors.horizontalCenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("horizontalCenter")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("system")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("particleSystem")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("factor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("threshold")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tracer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),e("p",[t._v("In the upper friction area, the particles are slowed down by a factor of 0.8 until the particle reaches 25 pixels per seconds velocity. The threshold act’s like a filter. Particles traveling above the threshold velocity are slowed down by the given factor.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(481),alt:"image"}})]),t._v(" "),e("h2",{attrs:{id:"gravity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gravity"}},[t._v("#")]),t._v(" Gravity")]),t._v(" "),e("p",[t._v("The gravity affector applies an acceleration In the example we stream the particles from the bottom to the top using an angle direction. The right side is unaffected, where on the left a gravity effect is applied. The gravity is angled to 90 degrees (bottom-direction) with a magnitude of 50.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gravity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("system")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("particleSystem")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("magnitude")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("angle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tracer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),e("p",[t._v("Particles on the left side try to climb up, but the steady applied acceleration towards the bottom drags them into the direction of the gravity.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(482),alt:"image"}})]),t._v(" "),e("h2",{attrs:{id:"turbulence"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#turbulence"}},[t._v("#")]),t._v(" Turbulence")]),t._v(" "),e("p",[t._v("The turbulence affector applies a "),e("em",[t._v("chaos")]),t._v(" map of force vectors to the particles. The chaos map is defined by a noise image, which can be defined with the "),e("em",[t._v("noiseSource")]),t._v(" property. The strength defines how strong the vector will be applied to the particle movements.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Turbulence")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("anchors.horizontalCenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("horizontalCenter")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("system")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("particleSystem")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("strength")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tracer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),e("p",[t._v("In the upper area of the example, particles are influenced by the turbulence. Their movement is more erratic. The amount of erratic deviation from the original path is defined by the strength.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(483),alt:"image"}})]),t._v(" "),e("h2",{attrs:{id:"wander"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wander"}},[t._v("#")]),t._v(" Wander")]),t._v(" "),e("p",[t._v("The wander manipulates the trajectory. With the property "),e("em",[t._v("affectedParameter")]),t._v(" can be specified which parameter (velocity, position or acceleration) is affector by the wander. The "),e("em",[t._v("pace")]),t._v(" property specifies the maximum of attribute changes per second. The yVariance and yVariance specify the influence on x and y component of the particle trajectory.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wander")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("anchors.horizontalCenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("horizontalCenter")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("system")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("particleSystem")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("affectedParameter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("Wander"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Position")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("pace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("yVariance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tracer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),e("p",[t._v("In the top wander affector particles are shuffled around by random trajectory changes. In this case, the position is changed 200 times per second in the y-direction.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(484),alt:"image"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);