//put tests for api's here to keep them away from the normal api's

module.exports = function(app,db){
  //make a user
  app.get("/tests/users",(req,res) => {
    db.user.create({identifier:"branson",password:"awesomeness"}).exec((err, createdUser)=>{
      if(err) throw err;
      res.send(created)
    })
  }),

  app.get("/tests/usersAndProfileMaking",(req,res) => {
    db.user.create({identifier:"branson",password:"awesomeness"}).exec((err, createdUser)=>{
      if(err) throw err;

      db.profile.create({
        surname:"branson",
        othernames:"gitomeh kuria",
        dob:new Date(),
        user:createdUser.id
      }).exec((err, createdProfile)=>{
        if(err) throw err;
        db.user.update({id:createdUser.id},{profile:createdProfile.id}).exec((err, updated) => {
          // db.profile.findOne({id:createdProfile.id}).populate("user").exec((err,prof)=>res.send(prof))
          db.user.findOne({id:createdUser.id}).populate("profile").exec((err,prof)=>res.send(prof))
        })
      })
      // res.send(created)
    })
  })
}
//
