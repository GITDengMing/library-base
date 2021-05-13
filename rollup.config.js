import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

const extensions = [
  '.js', '.jsx', '.ts', '.tsx'
]

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: { file: pkg.main, format: 'cjs', indent: false },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      babel({
        extensions,
        plugins: ['@babel/plugin-transform-runtime'],
        babelHelpers: 'runtime'
      })
    ]
  },

  // ES
  {
    input: 'src/index.ts',
    output: { file: pkg.module, format: 'es', indent: false },
    plugins: [
      resolve({ extensions }),
      babel({
        extensions,
        plugins: ['@babel/plugin-transform-runtime'],
        babelHelpers: 'runtime'
      })
    ]
  },

  // UMD
  {
    input: 'src/index.ts',
    output: {
      file: pkg.unpkg,
      format: 'umd',
      name: 'library-base',
      indent: false
    },
    plugins: [
      resolve({ extensions }),
      babel({ extensions, babelHelpers: 'bundled', exclude: 'node_modules/**' })
    ]
  }
]
