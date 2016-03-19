module.exports = (app,db) => {
  addUserToAdminTheUni = (req,res,next) => {
    db.university.findOne({id:req.progress.foundUniversity.id}).exec((err, university)=>{
      if(err) throw err;

      university.admins.add(req.progress.createdUser.id)
      // res.send(universities)
      university.save((err) => {
      	if(err) throw err
      	next()
      })
    })
  };

  

  respond = (req,res,next) => {
  	db.university.findOne({id:req.progress.foundUniversity.id}).populate("admins").exec((err, foundUniversity) => {
  		db.user.findOne({id:req.progress.createdUser.id}).populate("profile").exec((err, foundUser) => {
  			db.user_profile.findOne({id:req.progress.createdProfile.id}).populate("user").exec((err, foundProfile) => {
	  			var responce = {
			    	university:foundUniversity,
			    	newUser:foundUser,
			    	newProfile:foundProfile
			    }

			    res.send(responce)
			  })
  		})
  	})
  };

  app.post("/basic/uniAuth/:id",[
  	makeUniversity,

  	makeUser,
  	makeUserProfile,
  	combineUserAndProfile,
  	addUserToAdminTheUni,
  	
  	respond
  ])
}