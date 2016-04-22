var config = {
  entry: {
    // church:"./__code/church/route.js",
    premier:"./premier/route.js",
    ninja:"./ninja/route.js"
  },

  output:{
    path:'../api/public',
    filename: "[name]/[name].bundle.js",
    chunkFilename: "[id]/[id].chunk.js"
  },

  module: {
    noParse: []
  },

  watch:true,
  resolve:{
    extensions:['','.js'],
    alias: {}
  }
}

module.exports = config;
