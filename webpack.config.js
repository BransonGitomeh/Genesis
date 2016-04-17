var config = {

  entry: {
    church: "./clients/__code/churchia/router.js",
    premier: "./clients/__code/premier/route.js",
    ninja: "./clients/__code/ninja/route.js",
    homepage: "./clients/__code/homepage/router.js"
  },

  output: {
    path: './clients/__dist',
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