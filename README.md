<!--
* https://medium.com/dailyjs/the-pitfalls-of-async-await-in-array-loops-cf9cf713bfeb#2423
* https://zellwk.com/blog/async-await-in-loops/
-->

# Docsify Github Embed
<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-github-embed</code>
</p>

## TODO
* I'm having issues with the embed within a loop. Will need to fix. Hardcoded it works.
* Addo to the gloabl `document` `prototype` so I can chain operations allowing for cleaner code.
* Add source maps to `rollup.config.js` so it's easier to debug issues.
* Publish package, finally.
* Make the plugin repo so others can make their plugins with ease as well.

A plugin for docsify sidebar collapsed default

## Usage
Install docsify `npm i docsify-cli -g`

### Within your docsify app

In your html file add the plugin like so:
```html
 <script>
    window.$docsify = {
      // ...
    }
  </script>
  <script src="//unpkg.com/docsify-github-embed@1.0.0/dist/docsify-github-embed.js"></script>

  <!-- plugins -->
  <script src="//unpkg.???????.min.js">
```

Then within your markdown add a `github-embed` tag

This will show only render lines 4-27.
```html
<github-embed url="https://github.com/path/to/source/code.ext#L4-L27" />
```

This will show the entire file.
```html
<github-embed url="https://github.com/path/to/source/code.ext" />
```

### Local development
Run `yarn dev`

This will run:
```
"dev": "run-p dev:*",
"dev:start": "rollup -c -w",
"dev:serve": "serve dist",
"dev:docs": "docsify serve docs",
"dev:open": "open-cli http://localhost:3000",
```
Then you're ready to play around with this locally. If that's what you really want.
