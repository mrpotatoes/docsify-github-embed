import 'whatwg-fetch'
import { lines, codePartial } from './lib'
import './style.css'

const codeblock = (code) => {
  const tag = document.createElement('code')
  tag.innerHTML = code
  tag.setAttribute('class', 'lang-js')

  return tag
}

const preformatted = (codeString) => {
  const pre = document.createElement('pre')
  pre.appendChild(codeblock(codeString))
  pre.setAttribute('data-lang', 'js')

  return pre
}

const fetchCode = async (url) => {
  const parsedUrl = new URL(url)
  const isApiUrl = parsedUrl.hostname.split('.github.com').length === 2
  const hash = parsedUrl.hash

  // Straight up this is a garbage way of handling this.
  if (!parsedUrl.hostname.includes('github')) {
    throw new Error ('Yo, we only care about gihub. Sorry')
  }

  // Reset some properties to go to the right url.
  parsedUrl.hash = '' // unset the hash.
  parsedUrl.hostname = 'raw.githubusercontent.com' // default to raw.githubcontent.
  parsedUrl.pathname = parsedUrl.pathname.replace('blob/', '') // Remove.

  const response = await fetch(parsedUrl)
  const data = await response.text()

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

      embeds.forEach(async (embed, idx) => {
        const url = embed.getAttribute('url')
        const code = await fetchCode(url)
        console.log(idx)

        embed.appendChild(preformatted(code))
      })

      // This works, the above doesn't.
      const idx = 1
      const url = embeds[idx].getAttribute('url')
      const code = await fetchCode(url)
      const pre = preformatted(code)
      embeds[idx].appendChild(pre)

      // console.log(embeds.length)

      next(doc.documentElement.innerHTML)
    })
  }
].concat($docsify.plugins || [])
