/*
*this file should contain the auth functons related to an admin in the church
*deleting another user, making another user an admin, getting stats of the church,making branches etc
*/

module.exports = function(app,db){
  //bare-bone church stuff
  //making a new church
  app.post("/churchia/new",(req,res) => res.send(req.url)),
  //asks to login to a certain church
  app.post("/churchia/:id/login",(req,res) => res.send(req.url)),
  //asks to login to a certain church as admin
  app.post("/churchia/:id/admin/login",(req,res) => res.send(req.url)),
  //... same for every type of user there will be, follow above - normal, minLeader, admin, pastor etc as it comes

  //homepage
  //upload new pictures for homepage
  app.post("/churchia/:id/homepage/pics",(req,res) => res.send(req.url)),
  //get all pictures for
  app.get("/churchia/:id/homepage/pics",(req,res) => res.send(req.url)),
  //get the single content html blob for the homepage
  app.get("/churchia/:id/homepage/content",(req,res) => res.send(req.url)),
  //edit the single blob for html that the church has there
  app.post("/churchia/:id/homepage/content/:content/edit",(req,res) => res.send(req.url)),

  // sermons
  //add a sermon to a certain church
  app.post("/churchia/:id/sermons/add",(req,res) => res.send(req.url)),
  //remove a certain sermon from a certain church, needs auth level admin/whatever
  app.post("/churchia/:id/sermons/:sermon/remove",(req,res) => res.send(req.url)),
  //edit a sermon, needs auth
  app.post("/churchia/:id/sermons/:sermon/edit",(req,res) => res.send(req.url)),

  // members stuff
  //add a member to a certain church new , hence all params are expected to be inside body
  app.post("/churchia/:id/members/add",(req,res) => res.send(req.url)),
  //adds an already existing user to the church
  app.post("/churchia/:id/members/add/:user",(req,res) => res.send(req.url)),
  //remove a certain sermon from a certain church, needs auth level admin/whatever
  app.post("/churchia/:id/sermons/:user/remove",(req,res) => res.send(req.url)),
  //block a user from adding church stuff and accessing data needs auth
  app.post("/churchia/:id/sermons/:user/block",(req,res) => res.send(req.url)),

  // church admins stuff
  //add a admin to a certain church new , hence all params are expected to be inside body
  app.post("/churchia/:id/admins/add",(req,res) => res.send(req.url)),
  //adds an already existing user to the church admins
  app.post("/churchia/:id/admins/add/:user",(req,res) => res.send(req.url)),
  //remove a certain admin from a certain church, needs auth level admin/whatever
  app.post("/churchia/:id/admins/:user/remove",(req,res) => res.send(req.url))
}
