window.onload = function(e) {
	"use strict"

	var main = {
		loadCodeMirror: function () {
			var textAreas = document.getElementsByClassName("code-mirror");
			var coreMirrorInstances = [];
			for (var i = textAreas.length - 1; i >= 0; i--) {
				coreMirrorInstances.push(CodeMirror.fromTextArea(textAreas[i], {
				    mode: {name: "javascript", json: true},
			        theme: "default",
			        lineNumbers: true,
			        readOnly: true
				}));
			}


			textAreas = document.getElementsByClassName("code-mirror-html");
			for (i = textAreas.length - 1; i >= 0; i--) {
				coreMirrorInstances.push(CodeMirror.fromTextArea(textAreas[i], {
				    mode: {name: "htmlmixed"},
			        theme: "default",
			        lineNumbers: true,
			        readOnly: true
				}));
			}
		}
	};

	main.loadCodeMirror();
};