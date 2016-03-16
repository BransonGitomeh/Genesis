// var webpack = require('webpack');
// var path = require("path");
var CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin")
// var bower_dir = __dirname + '/bower_components';

var config = {
  // addVendor: function (name, path) {
  //   this.resolve.alias[name] = path;
  //   this.module.noParse.push(new RegExp('^' + name + '$'));
  // },
  entry: {
    church:"./clients/__code/church/route.js",
    premier:"./clients/__code/premier/route.js",
    ninja:"./clients/__code/ninja/route.js"
  },

  plugins: [
      // extracts common code from the builds
       new CommonsChunkPlugin({
           filename: "commons.js",
           name: "commons"
       }),

      // concats all the external libs
      //  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')

      // new webpack.ProvidePlugin({
      //     m: "mithril"
      // })
   ],

  output:{
    path:'./clients/__dist',
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
//
// config.addVendor('mithril', bower_dir + '/mithril/mithril.min.js');
// config.addVendor('moment', bower_dir + '/mithril/moment.min.js');


module.exports = config;
