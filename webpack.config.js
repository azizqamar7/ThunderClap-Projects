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
    ['webflow-development']:
      './src/ThunderClap-website/services/webflow-development/index.js',

    ['refo/home']: './src/Refo/home/index.js',
    ['refo/about']: './src/Refo/about/index.js',
    ['refo/products/oboarding']: './src/Refo/products/onboarding/index.js',

    ['steel']: './src/steel/index.js',

    ['shopline/home']: './src/shopline/home/index.js',
    ['shopline/partner']: './src/shopline/partner/index.js',
    ['shopline/pricing']: './src/shopline/pricing/index.js',
    ['shopline/customers']: './src/shopline/customers/index.js',
    ['shopline/replatform']: './src/shopline/replatform/index.js',
    ['shopline/thankyou']: './src/shopline/home/index.js',
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
