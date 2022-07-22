import externals from 'rollup-plugin-peer-deps-external'
import vue from 'rollup-plugin-vue'

export default {
  input: [
    './src/index.js',
  ],
  output: [ {
    dir: 'dist',
    format: 'esm',
    sourcemap: true
  } ],
  plugins: [
    externals(),
    vue(),
  ]
}
