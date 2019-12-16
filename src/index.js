import 'whatwg-fetch'
import { lines, codePartial, preformatted, urlParts } from './lib'

const fetchCode = async (url) => {
  const { hash, parsedUrl } = urlParts(url)
  const response = await fetch(parsedUrl)
  const data = await response.text()

  // If I ever want to do this better I really shoul consider it.
  if (response.status !== 200) {
    return 'That URL gave us a 404, may wanna put in a new one.'
  }

  // Get the lines from the code.
  return (hash)
    ? codePartial(lines(hash), data)
    : data
}

$docsify.plugins = [
  (hook, vm) => {
    hook.doneEach(function(html, next) {})

    hook.afterEach(async (html, next) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const embeds = [...doc.querySelectorAll('github-embed')]
      const urls = embeds.map(embed => embed.getAttribute('url'))

      for (const [idx, url] of urls.entries()) {
        const code = await fetchCode(url)
        const pre = preformatted(code)
        embeds[idx].appendChild(pre)
      }

      next(doc.documentElement.innerHTML)
    })
  }
].concat($docsify.plugins || [])
