module.exports = {
  entry: { 'app': './public/js/app.js' },
  output: { publicPath: '/js', filename: 'bundle.js' },
  devServer: { contentBase: "public", port: 3000 },
  devtool: 'source-map',
}