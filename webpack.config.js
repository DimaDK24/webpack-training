const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    import: './src/import.js',
    prefetch: './src/prefetch.js'
  },
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
