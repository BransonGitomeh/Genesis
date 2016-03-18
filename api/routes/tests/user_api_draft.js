module.exports = function(app,db){
  //making a new user & profile and all about a user
  app.post("/users/new",(req,res) => res.send(req.url)),
  //deleting an account definately comes with other stuff before delete
  app.delete("/users/:id",(req,res) => res.send(req.url)),
  //check if email exists
  app.get("/users/:identifier",(req,res) => res.send(req.url)),
  //send send password to get the auth key, password is inside the body of the post
  app.post("/users/:identifier",(req,res) => res.send(req.url))
}
