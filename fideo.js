// fideo.js
// http://github.com/Trolleymusic/fideo.js
(function () {
	fideo = (function (options) {
		var o,
			defaultSize = "16:9";
		this.Init = function (options) {
			var target = document.querySelectorAll(options.target),
				i;

			o = options;
			
			if (!target.length) { return; }
			
			for (i = 0; i < target.length; i++) {
				this.enhance(target[i]);
			}
			
		}
		
		this.enhance = function (target) {
			var wrapper = document.createElement("div"),
				guide = this.makeGuide(),
				parent = target.parentNode;

			wrapper.appendChild(guide);
			parent.insertBefore(wrapper, target);
			target.style.cssText = "position: absolute; width: 100%; height: 100%; top: 0; left: 0;"
			wrapper.appendChild(target);
			wrapper.style.cssText = "position: relative;";
		}
		
		// create the guide element
		this.makeGuide = function () {
			var guide = document.createElement("img");
			guide.src = this.getGuide(o.size || defaultSize);
			guide.style.cssText = "display: block; width: 100%; height: auto;";
			return guide;
		}
		
		// base64 image datauri for each aspect ratio
		//	Only one complete one is stored, the rest store the differences
		this.guides = {
  		"2.39:1": "O8AAABkCAYAAABuB2eiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkRCNEM5ODNDRjUxMTFFNDhDMkM4QUI0Q0M5REI0NjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkRCNEM5ODRDRjUxMTFFNDhDMkM4QUI0Q0M5REI0NjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCREI0Qzk4MUNGNTExMUU0OEMyQzhBQjRDQzlEQjQ2MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCREI0Qzk4MkNGNTExMUU0OEMyQzhBQjRDQzlEQjQ2MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvQU87kAAADuSURBVHja7NNBDQAACMQwwL/nwwM/klbCknWSAv4ZCcC8gHkB84J5AfMC5gXzAuYFzAuYF8wLmBcwL5gXMC9gXsC8YF7AvIB5wbyAeQHzAuYF8wLmBcwL5gXMC5gXzAuYFzAvYF4wL2BewLxgXsC8gHkB84J5AfMC5gXzAuYFzAuYF8wLmBcwL5gXMC9gXsC8YF7AvIB5wbyAeQHzgnkB8wLmBcwL5gXMC5gXzAuYFzAvYF4wL2BewLxgXsC8gHkB84J5AfMC5gXzAuYFzAvmlQDMC5gXMC+YFzAvYF4wL2BewLyAecG8gHmBqxVgANs+A8VVjUyLAAAAAElFTkSuQmCC",
			"21:9": "BUAAAAJCAYAAADdA2d2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjkzNzcwODRDRjJCMTFFNDg5NDQ5NUYyMjU2OTUwOTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjkzNzcwODNDRjJCMTFFNDg5NDQ5NUYyMjU2OTUwOTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4NDNDOEExMDI0MzExRTM4NThEQzMzMTQ3NkNCMjhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk4NDNDOEEyMDI0MzExRTM4NThEQzMzMTQ3NkNCMjhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rR2TVwAAABxJREFUeNpi/P//PwO1ARMDDcCooaOGUhkABBgABngDD0x3p1oAAAAASUVORK5CYII=",
			"16:9": ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA",
				"BA",
				"AAAA",
				"J",
				"CAYAAA",
				"A7Kqwy",
				"AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo",
				"5ODQzQzhBMT",
				"AyND",
				"M",
				"xMUUzODU4REMzMzE0NzZDQjI4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo",
				"5ODQzQzhBMj",
				"AyND",
				"M",
				"xMUUzODU4REMzMzE0NzZDQjI4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOj",
				"k4NDNDODlGMDI0Mz",
				"ExRTM4NThEQzMzMTQ3NkNCMjhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOj",
				"k4NDNDOEEwMDI0Mz",
				"ExRTM4NThEQzMzMTQ3NkNCMjhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+",
				"37VrXA",
				"AAAB",
				"p",
				"JREFUeNpi",
				"/P//PwMlgImBQjBqwLAwACDAAOVfAw9/ZDvcAAAAAElFTkSuQmCC"],
			"4:3" : ["AQ",
				"D",
				"C09K7G",
				"xMUQyMUJGOD",
				"Q",
				"xMUQyMUJGOT",
				"Q",
				"k4NDNDOEEzMDI0Mz",
				"k4NDNDOEE0MDI0Mz",
				"G4j1zw",
				"d",
				"/P//PwMyYGJAAxgCAAEGAJM5AwMMWSorAAAAAElFTkSuQmCC"],
			"1:1" : ["AE",
				"B",
				"AfFcSJ",
				"xMUQyMUJGQz",
				"Q",
				"xMUQyMUJGRD",
				"Q",
				"ExRDIxQkZBMDI0ND",
				"ExRDIxQkZCMDI0ND",
				"wvzvwg",
				"B",
				"+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII"]
		}
		
		// Get the correct datauri string
		this.getGuide = function (size) {
			var guide;
			
			if (!this.guides[size] || size === defaultSize) {
				return this.guides[defaultSize].join("");
			}
			
			if (typeof(this.guides[size]) === "string") {
				guide = [this.guides[defaultSize][0], this.guides[size]];
			} else {
				guide = this.guides[defaultSize];
				// Update the guide
				for (var i = 0; i < 12; i++) {
					guide[((i + 1) * 2) - 1] = this.guides[size][i];
				}
			}
			return guide.join("");
		}
		
		this.Init(options);
		
	});
}());