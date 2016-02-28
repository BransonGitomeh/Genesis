module.exports = function(app,db){
  app.post("/tester",(req,res) => {
    console.log(req.body.name)
    res.send("post arrived")
  });
}
