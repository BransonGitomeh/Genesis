module.exports = function(app,db){
  app.get("/",(req,res) => {
		db.user.create({name:"branson"}).exec(function(err, createdUser){
			res.send(createdUser)
		})
	});
}
