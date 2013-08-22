# fideo
### Makes your damn video embeds fit proper

I've been sticking loads of youtube and vimeo embeds in sites recently, and they're easy to do, but there's always a few extra lines of CSS and a couple of extra div wrappers you need to write to get them to be dynamically sized and/or work properly in a responsive design without them hanging out the end.

So fideo is a little piece of javascript that you run on the embedded iframe and it'll take care of everything. You don't need to add any images or CSS and it has no dependencies.

    <!-- Embed fideo (or copy/paste the .min.js into your plugins.js) -->
    <script src="fideo.min.js"></script>
    <script>
        /* Call fideo as many times as you need to */
        fideo({ "target": "#selector", "size": "16:9" });
    </script>

At the moment there are three embedded aspect ratios, 16:9, 4:3 and 1:1 - if you don't specify a size when calling fideo, then it'll default to 16:9.

To do:

- Test on more platforms (so far tested on latest stable releases of Chrome, Firefox and Safari on OS X 10.7)
- Demo page, one exists at demo.html but it's a bit limited
- Refactor!
- More comprehensive readme!