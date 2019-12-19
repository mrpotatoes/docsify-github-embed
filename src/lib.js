// @TODO: List all my patterns here.
// @TODO: Remove all unnecessary exports.

export const lines = (hash) => hash.replace('#', '').replace(/L/g, '').split('-').map((str) => (parseInt(str)))

export const codePartial = (lines, code) => code.split("\n").slice(lines[0] - 1, lines[1]).join('\n')

const fetchCode = async (url) => {
  const { hash, parsedUrl } = urlParts(url)
  const response = await fetch(parsedUrl)
  const data = await response.text()

  // If I ever want to do this better I really shoul consider it.
  if (response.status !== 200) {
    return `That URL gave us a 404, may wanna put in a new one.\n\n${url}`
  }

  // Get the lines from the code.
  return (hash)
    ? codePartial(lines(hash), data)
    : data
}

const lang = (matches) => (
  (matches !== null)
    ? matches[0].replace(/'/g, '').split('=')[1]
    : ''
)

export const replacer = async (matched, url, offset, string) => {
  const langPattern = /(\'\:lang\=(.*)\')/gmi
  const codeLang = lang(url.match(langPattern))
  const urlNoLang = url.replace(langPattern, '').replace(' ', '')

  const code = await fetchCode(urlNoLang)
  const formattedCode = preformatted(code, codeLang)
  const parts = urlNoLang.split('/')
  const filename = parts[parts.length - 1]
  const link = `_View file external: [${filename}](${urlNoLang} ':target=_blank')_`

  return formattedCode + link
}

// Currently doesn't do anything.
export const withoutHtml = html => html

// Tag builder.
export const preformatted = (codeString, lang = 'js') => {
  // @TODO: Make this a template literal.
  return "\n```" + lang +"\n" + codeString + "\n```\n\n"
}

// Break up the URL into bits I need.
export const urlParts = (url) => {
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

  return {
  	parsedUrl, hash
  }
}
