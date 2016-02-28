module.exports = function(app,db){
  app.get("/",(req,res) => res.send("In the begining there was node, and then came frameworks and they <b>fucked everything up</b>"));
}
