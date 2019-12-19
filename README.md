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

Follow this link if you want different languages: https://docsify.now.sh/language-highlight then change the attribute: `':lang=*'` to what you want; for instance PHP would be `':lang=php'`

Then within your markdown add a `github-embed` tag

This will show the entire file.
```md
[github-embed](https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/master/src/foundational/adts/diy.daggy.js ':lang=js')
```

This will show only render lines 4-27.
```md
[github-embed](https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/master/src/foundational/adts/diy.daggy.js#L4-L27 ':lang=js')
```

This will fail
```md
[github-embed](https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/master/src/foundational/adts/diy.daggy.js2#L4-L27 ':lang=js')
```

and will look like this:
```md
That URL gave us a 404, may wanna put in a new one.

https://github.com/mrpotatoes/functional-programming-in-js-reference/blob/master/src/foundational/adts/diy.daggy.js2#L4-L27
```

## To Note
* Does not follow links
* Only works with Github (PRs welcome for extra providers)
* Default language is `js` because it's an excellent language.
* Every code block will add links to the full file with `target=blank`.

## TODO
* Make the plugin repo so others can make their plugins with ease as well.

