module.exports = function(app,db){
  app.get("/testWaterline",(req,res) => {
		db.user.find().exec(function(err, foundUser){
        if(err) throw err
        console.log(foundUser);
        setTimeout(() => {
          res.send(foundUser)
        },1)
		})
	}),

  app.post("/testWaterline",(req,res) => {
		db.user.create({identifier:req.body.name}).exec(function(err, createdUser){
      console.log(createdUser);
      setTimeout(() => {
        res.send(createdUser)
      },1000)
		})
	});
}
