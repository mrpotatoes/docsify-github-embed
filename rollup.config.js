import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

import pkgConfig from './package.json'

const defConfig = (fileName) => ({
  input: 'src/index.js',
  output: {
    file: `dist/${fileName}.js`,
    format: 'umd'
  },
  plugins: [
    babel({
      babelrc: false,
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      presets: [['@babel/env', { modules: false }]],
      plugins: [
        ['@babel/transform-runtime'],
        ['@babel/plugin-proposal-object-rest-spread'],
      ],
    }),

    postcss(),
    resolve(),
    commonjs(),
  ]
})

const outputs = (fileName, minify = false) => {
  const config = defConfig(fileName)

  // I mean, this is kinda gross but w/e.
  if (minify) {
    config.plugins.push(uglify())
    config.output.file = `dist/${fileName}.min.js`
  }

  return config
}

// I run this for both even on build. Dun care. 
export default [
  outputs('plugin'),
  outputs(pkgConfig.name, true),
]
