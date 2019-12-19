import 'whatwg-fetch'
import { replacer, lines, codePartial, preformatted, urlParts, withoutHtml } from './lib'

async function replaceAsync(str, regex, asyncFn) {
  const promises = []

  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args)
    promises.push(promise)
  })

  const data = await Promise.all(promises)
  return str.replace(regex, () => data.shift())
}

$docsify.plugins = [
  (hook, vm) => {
    hook.beforeEach(async (content, next) => {
      const pattern = /\[github\-embed\]\((http|https:\/\/.+)\)/g
      const replacedString = await replaceAsync(content, pattern, replacer)

      next(replacedString)
    })
  }
].concat($docsify.plugins || [])
