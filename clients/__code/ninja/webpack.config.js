var config = {

  entry: {
    ninja: "./route.js",
  },

  output: {
    path: '../../../../__dist',
    filename: "[name]/[name].bundle.js",
    chunkFilename: "[id]/[id].chunk.js"
  },

  module: {
    noParse: [],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },

  watch: true,
  resolve: {
    extensions: ['', '.js'],
    alias: {}
  },
  stats: false

}

module.exports = config;