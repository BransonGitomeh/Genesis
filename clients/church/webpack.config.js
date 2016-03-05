module.exports = {
  entry: ["./Router.js"],
  output:{
    path:'./build',
    filename: "churchia.js"
  },
  watch:true,
  resolve:{
    extensions:['','.js']
  }
}
