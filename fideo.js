// fideo.js
// http://github.com/Trolleymusic/fideo.js
(function () {
	window.fideo = (function (options) {
		var o,
			defaultSize = "16:9";
		this.Init = function (options) {
			var target = typeof(options.target) === "string" ? document.querySelectorAll(options.target) : options.target,
				i;

			o = options;

			// Target is a single HTML element
			if (target.nodeName) {
				return this.enhance(target);
			}

			// Check the target is an array
			if (!target.length) { return; }


			// Loop through the nodes
			for (i = 0; i < target.length; i++) {
				this.enhance(target[i]);
			}

		}

		this.enhance = function (target) {
			var wrapper = document.createElement("div"),
				guide = this.makeGuide(),
				parent = target.parentNode;

			wrapper.classList.add("jsFideo");
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

		this.root = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA"

		// base64 image datauri for each aspect ratio without the common header
		this.guides = {
			"3.5:1":"CMAAAAKCAQAAACUcy8sAAAAFElEQVR42mNkoApgHDVm1JiBMwYAEgcAC2DxERMAAAAASUVORK5CYII=",
			"2.35:1":"OsAAABkCAMAAABQMjfqAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAC1JREFUeNrtwTEBAAAAwiD7p14MH2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwE1cMAAB6Ne5JQAAAABJRU5ErkJggg==",
			"2.39:1": "O8AAABkCAMAAABZ2ZeQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAC1JREFUeNrtwQENAAAAwqD3T+3sARQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADddwAABcnqeAwAAAABJRU5ErkJggg==",
			"21:9": "BUAAAAJCAMAAADq3ZdEAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAtJREFUeAFjGBYAAADGAAHrkQKlAAAAAElFTkSuQmCC",
			"16:9": "BAAAAAJCAMAAAAM9FwAAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAtJREFUeAFjGKwAAACZAAEIdHvGAAAAAElFTkSuQmCC",
			"4:3": "AQAAAADCAMAAACDKl70AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUeAFjQAUAAA8AAeTdOmQAAAAASUVORK5CYII=",
			"1:1": "AEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12P4zwAAAgEBAKrChTYAAAAASUVORK5CYII=",
			"9:16": "AkAAAAQCAQAAABuQZ3IAAAAEElEQVR42mNkwACMo0K4hQALSAARu3DAkAAAAABJRU5ErkJggg=="
		}

		// Get the correct datauri string
		this.getGuide = function (size) {
			return this.root + (this.guides[size] ? this.guides[size] : this.guides[defaultSize]);
		}

		this.Init(options);

	});
}());
