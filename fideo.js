// fideo.js
// http://github.com/Trolleymusic/fideo.js
(function () {
	fideo = (function (options) {
		var o,
			defaultSize = "16:9";
		this.Init = function (options) {
			var target = document.querySelectorAll(options.target),
				wrapper = document.createElement("div"),
				guide,
				parent;

			o = options;
			
			if (!target.length) { return; }
			
			target = target[0]; // only does this for one, should we loop through them?
			
			guide = this.makeGuide()
			wrapper.appendChild(guide);
			parent = target.parentNode;
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
			var guide = this.guides[defaultSize];
			if (this.guides[size] && size != defaultSize) {
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
