export const lines = (hash) => hash.replace('#', '').replace(/L/g, '').split('-').map((str) => (parseInt(str)))
export const codePartial = (lines, code) => code.split("\n").slice(lines[0] - 1, lines[1]).join('\n')

