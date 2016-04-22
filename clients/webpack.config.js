var config = {
  entry: {
    // church:"./__code/church/route.js",
    premier:"./__code/premier/route.js",
    ninja:"./__code/ninja/route.js"
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
