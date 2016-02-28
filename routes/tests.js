module.exports = function(app,db){
  app.get("/testWaterline",(req,res) => {
		db.user.create({name:"branson"}).exec(function(err, createdUser){
			res.send(createdUser)
		})
	});
}
