# docsify-github-embed

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
  <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>

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