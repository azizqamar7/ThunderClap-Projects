const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    ['global']: './src/global/index.js',
    ['home']: './src/home/index.js',
    ['webflow-design-agency']:
      './src/ThunderClap-website/services/webflow-design-agency/index.js',
    ['webflow-maintainence']:
      './src/ThunderClap-website/services/webflow-maintainence/index.js',
    ['refo/home']: './src/Refo/home/index.js',
    ['steel']: './src/steel/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true,
  },
}
