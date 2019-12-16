# Docsify Github Embed
<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-github-embed</code>
</p>

A plugin for embedding github code into your wiki (unstyled). You can embed either full files or specific lines of code.

## Usage
Install docsify `npm i docsify-cli -g`

### Within your docsify app

In your html file add the plugin like so:
```html
  <!-- plugins -->
  <script src="//unpkg.com/docsify-github-embed/dist/docsify-github-embed.min.js" />
```

Then within your markdown add a `github-embed` tag

This will show the entire file.
```html
<github-embed url="https://github.com/path/to/source/code.ext" />
```

This will show only render lines 4-27.
```html
<github-embed url="https://github.com/path/to/source/code.ext#L4-L27" />
```

## TODO
* Make the plugin repo so others can make their plugins with ease as well.