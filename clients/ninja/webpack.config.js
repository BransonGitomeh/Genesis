module.exports = {
  entry: ["./Router.js"],
  output:{
    path:'./build',
    filename: "ninja.js"
  },
  watch:true,
  resolve:{
    extensions:['','.js']
  }
}
