//bodys for the post 
//req.body.uniId
//req.body.userId

module.exports = (app,db) => {
  getUniversityWithAdmins = (req,res,next) => {
    req.progress = {};

    db.university.findOne({id:req.body.uniId}).populate("admins").exec((err,foundUniversity) => {
      req.progress.foundUniversity = foundUniversity;
      next()
    })
  };

  CheckIfUserIsAdmin = (req,res,next) => {
    var admins = req.progress.foundUniversity.admins
    var result = false
    admins.map((admin) => {
      if(admin.id == req.body.userId){ //using === will fails as req.body returns strings
        result = true 
      }else{
        console.log(typeof(admin.id) + "!=" + typeof(req.body.userId))
      }
    })

    if(result === true){
      // var responce = {
      //   admins:req.progress.foundUniversity.admins,
      //   admin:req.body.userId,
      //   result:result
      // }
      res.send("he is an admin here")
    }else{
      // var responce = {
      //   admins:req.progress.foundUniversity.admins,
      //   admin:req.body.userId,
      //   result:result
      // }
      res.send("he is not an admin here")
    }
  };


  app.post("/basic/loginUserToUni",[
    getUniversityWithAdmins,
    CheckIfUserIsAdmin
  ])
}