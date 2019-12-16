export const lines = (hash) => hash.replace('#', '').replace(/L/g, '').split('-').map((str) => (parseInt(str)))
export const codePartial = (lines, code) => code.split("\n").slice(lines[0] - 1, lines[1]).join('\n')

// Tag builder.
export const codeblock = (code) => {
  const tag = document.createElement('code')
  tag.innerHTML = code
  tag.setAttribute('class', 'lang-js')

  return tag
}

// Tag builder.
export const preformatted = (codeString) => {
  const pre = document.createElement('pre')
  pre.appendChild(codeblock(codeString))
  pre.setAttribute('data-lang', 'js')

  return pre
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