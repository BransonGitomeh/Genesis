module.exports = function(app,db){
  app.get("/testWaterline",(req,res) => {
		db.user.find().exec(function(err, foundUser){
        if(err) throw err
        console.log(foundUser);
        res.send(foundUser)
		})
	}),

  app.post("/testWaterline",(req,res) => {
		db.user.create({identifier:"branson"}).exec(function(err, createdUser){
      console.log(createdUser);
      res.send(createdUser)
		})
	});
}
