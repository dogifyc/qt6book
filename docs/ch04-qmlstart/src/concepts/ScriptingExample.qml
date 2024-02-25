/*
Copyright (c) 2012-2021, Juergen Bocklage Ryannel and Johan Thelin
All rights reserved.

Redistribution and use in source and binary forms, with or without 
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, 
   this list of conditions and the following disclaimer in the documentation 
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
   may be used to endorse or promote products derived from this software 
   without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// #region global
// ScriptingExample.qml

import QtQuick

Rectangle {
    width: 240
    height: 120

    // #region text
    Text {
        id: label

        x: 24; y: 24

        // 用于记录按下几次空格的自定义属性
        property int spacePresses: 0

        text: "Space pressed: " + spacePresses + " times"

        // (1) 文本变更处理器。需要用函数捕获参数
        onTextChanged: function(text) { 
            console.log("text changed to:", text)
        }

        // 需要焦点接收键盘事件
        focus: true

        // (2) 包含 JS 代码的处理器
        Keys.onSpacePressed: {
            increment()
        }

        // 按下 escape 时清空文本
        // #region clear-binding
        Keys.onEscapePressed: {
            label.text = ''
        }
        // #endregion clear-binding

        // (3) 一个 JS 函数
        function increment() {
            spacePresses = spacePresses + 1
        }
    }
    // #endregion text
}

// #endregion global