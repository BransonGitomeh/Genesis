//bodys for the post 
//req.body.uniId
//req.body.userId

module.exports = (app,db) => {
  checkUserCreds = (req,res,next) => {
    req.progress = {};

    db.user.findOne({identifier:req.body.identifier}).exec((err,foundUser) => {
      if(err) throw err;
        if(foundUser){
          req.progress.foundUser = foundUser;

            if(foundUser.password === req.body.password){
              next()
              // res.send(foundUser)
            }else{
              var responce = {
                status:"401",
                message:"pass is not correct"
              }
              res.send(responce)
            }
      }else{

        var responce = {
            status:"401",
            message:"user " + req.body.identifier + " not found"
        }
        res.send(responce)
      }
    })
  };

  getUniversityWithAdmins = (req,res,next) => {
    db.university.findOne({id:req.params.uniId}).populate("admins").populate("revoked_admins").exec((err,foundUniversity) => {
      req.progress.foundUniversity = foundUniversity;
      next()
    })
  };

  CheckIfUserIsAdmin = (req,res,next) => {
    var admins = req.progress.foundUniversity.admins
    var revoked_admins = req.progress.foundUniversity.revoked_admins
    var user = req.progress.foundUser
    var result = {
      adminStatus:false,
      revoked:false
    }
    // console.log(admins)
    //check if he is an admin
    admins.map((admin) => {
      if(admin.id == user.id){ //using === will fails as req.body returns strings
        result.adminStatus = true 
      }else{
        // console.log(typeof(admin.id) + "!=" + typeof(user.id))
      }
    })

    //check if revoked access by another admin
    revoked_admins.map((revoked_admin) => {
      if(revoked_admin.id == user.id){ //using === will fails as req.body returns strings
        console.log(user.id + " access revoked")
        result.revoked = true 
      }else{
        // console.log(typeof(revoked_admin.id) + "!=" + typeof(req.body.userId))
      }
    })

    var responce = {}

    if(result.adminStatus === true){
      responce.message="you are an admin",
      responce.result=true
    }

    if(result.revoked === true){
        responce.message="your admin rights have been revoked",
        responce.result=false
    }

    res.send(responce)
  };


  app.post("/basic/loginUserToUni/:uniId",[
    checkUserCreds,
    getUniversityWithAdmins,
    CheckIfUserIsAdmin
  ])
}