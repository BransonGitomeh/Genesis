module.exports = (req,res) => {
  req.db.university.create(req.body).exec((err, createdUniversity)=>{

    req.db.noticeboard.create().exec((err, createdNoticeboard) => {

      req.db.university.update({id:createdUniversity.id},{noticeboard:createdNoticeboard.id}).exec((err) => {
        req.db.noticeboard.update({id:createdNoticeboard.id},{university:createdUniversity.id}).exec((err) => {

          req.db.noticeboard.findOne({id:createdNoticeboard.id}).populate("university").exec((err, foundNoticeboard) => {

            req.db.university.findOne({id:createdUniversity.id}).populate("noticeboard").exec((err, foundUniversity) => {

              var responce = {
                university:foundUniversity,
                noticeboard:foundNoticeboard
              }

              res.send(responce)

            })

          })

        })

      })

    })

  })

}

/*
*this is what im supposed to be using,
*but i needs some fixing, TODO
*/

// module.exports = (app,db) => {
//   makeUniversity = (req,res,next) => {
//     req.progress = {};
//
//     req.db.university.create(req.body).exec((err, createdUniversity) => {
//       if(err) throw err;
//       req.progress.foundUniversity = createdUniversity
//       // res.send(universities)
//       next()
//     })
//   };
//
//   makeUser = (req,res,next) => {
//
//     req.db.user.create({
//     	identifier:req.body.uniName + "Admin",
//     	password:req.body.uniName
//     }).exec((err, createdUser) => {
//       if(err) throw err;
//       req.progress.createdUser = createdUser
//
//       next()
//     })
//   };
//
//   makeUserProfile = (req,res,next) => {
//     req.db.user_profile.create().exec((err, createdProfile) => {
//       if(err) throw err;
//       req.progress.createdProfile = createdProfile
//
//       next()
//     })
//   };
//
//   combineUserAndProfile = (req,res,next) => {
//     req.db.user.update({id:req.progress.createdUser.id},{profile:req.progress.createdProfile}).exec((err,updatedUser) => {
//     	if(err) throw err
//
//     	req.db.user_profile.update({id:req.progress.createdProfile.id},{user:req.progress.createdUser.id}).exec((err,updatedProfile) => {
//     		if(err) throw err
//     		next()
//     	})
//     })
//   };
//
//   addUserToAdminTheUni = (req,res,next) => {
//     req.db.university.findOne({id:req.progress.foundUniversity.id}).exec((err, university)=>{
//       if(err) throw err;
//
//       university.admins.add(req.progress.createdUser.id)
//       // res.send(universities)
//       university.save((err) => {
//       	if(err) throw err
//       	next()
//       })
//     })
//   };
//
//
//
//   respond = (req,res,next) => {
//   	req.db.university.findOne({id:req.progress.foundUniversity.id}).populate("admins").exec((err, foundUniversity) => {
//   		req.db.user.findOne({id:req.progress.createdUser.id}).populate("profile").exec((err, foundUser) => {
//   			req.db.user_profile.findOne({id:req.progress.createdProfile.id}).populate("user").exec((err, foundProfile) => {
// 	  			var responce = {
// 			    	university:foundUniversity,
// 			    	newUser:foundUser,
// 			    	newProfile:foundProfile
// 			    }
//
// 			    res.send(responce)
// 			  })
//   		})
//   	})
//   };
//
//   app.post("/basic/makeUniversity",[
//   	makeUniversity,
//
//   	makeUser,
//   	makeUserProfile,
//   	combineUserAndProfile,
//   	addUserToAdminTheUni,
//
//   	respond
//   ])
// }
