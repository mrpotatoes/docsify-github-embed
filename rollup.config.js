import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
// import nodent from 'rollup-plugin-nodent'
import pkgConfig from './package.json'

const t = async () => {
  const butts = await 10;

  return butts
}

const outputs = (fileName) => ({
  input: 'src/index.js',
  output: {
    file: `dist/${fileName}.js`,
    format: 'umd'
  },
  plugins: [
    babel({
      // runtimeHelpers: true
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

export default [
  outputs('plugin'),
  outputs(pkgConfig.name),
]
