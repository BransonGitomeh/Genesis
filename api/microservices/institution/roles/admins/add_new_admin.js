  makeUser = (req,res,next) => {
    db.user.create({
    	identifier:req.body.userIdentifier,
    	password:req.body.userPassword
    }).exec((err, createdUser) => {
      if(err) throw err;
      req.progress.createdUser = createdUser

      next()
    })
  };

  makeUserProfile = (req,res,next) => {
    db.user_profile.create({username:req.body.userUsername}).exec((err, createdProfile) => {
      if(err) throw err;
      req.progress.createdProfile = createdProfile

      next()
    })
  };

  combineUserAndProfile = (req,res,next) => {
    db.user.update({id:req.progress.createdUser.id},{profile:req.progress.createdProfile}).exec((err,updatedUser) => {
    	if(err) throw err

    	db.user_profile.update({id:req.progress.createdProfile.id},{user:req.progress.createdUser.id}).exec((err,updatedProfile) => {
    		if(err) throw err
    		next()
    	})
    })
  };

  addUserToAdminTheUni = (req,res,next) => {
    db.university.findOne({id:req.params.id}).exec((err, university)=>{
      if(err) throw err;

      university.admins.add(req.progress.createdUser.id)
      // res.send(universities)
      university.save((err) => {
      	if(err) throw err
      	next()
      })
    })
  };

  getUniversity = (req,res,next) => {
  	req.progress = {};
    db.university.findOne(req.params.id).populate("admins").exec((err, foundUniversity) => {
      if(err) throw err;
      req.progress.foundUniversity = foundUniversity
      // res.send(universities)
      next()
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

module.exports = [getUniversity,makeUser,makeUserProfile,combineUserAndProfile,addUserToAdminTheUni,respond]
