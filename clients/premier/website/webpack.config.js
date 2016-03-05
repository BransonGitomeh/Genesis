module.exports = {
  entry: ["./App/Router.js"],
  output:{
    path:'./build',
    filename: "homepage.js"
  },
  watch:true,
  resolve:{
    extensions:['','.js']
  }
}
