//bodys for the post 
//req.body.uniId
//req.body.userId

module.exports = (app,db) => {
  getUniversity = (req,res,next) => {
    req.progress = {};
    console.log(req.body)

    db.university.findOne({id:req.body.uniId}).exec((err,foundUniversity) => {
      console.log(foundUniversity)
      req.progress.foundUniversity = foundUniversity;
      next()
    })
  };

  getUser = (req,res,next) => {
    db.user.findOne({id:req.body.userId}).exec((err,foundUser) => {
      console.log(foundUser)
      req.progress.foundUser = foundUser;
      next()
    })
  };

  CombineUserToAdminUni = (req,res,next) => {
    var user = req.progress.foundUser.id;
    var university = req.progress.foundUniversity.id;

    db.user.findOne({id:user}).exec((err,foundUser) => {
      foundUser.unis_i_admin.add(university);

      foundUser.save((err) => {
         if(err) throw err;
        next();
      })
      
    });
  };


  respond = (req,res,next) => {
    var user = req.progress.foundUser.id;
    var university = req.progress.foundUniversity.id;

    db.user.findOne({id:user}).populate("unis_i_admin").exec((err,foundUser) => {
      db.university.findOne({id:university}).populate("admins").exec((err,foundUniversity) => {
      	var responce = {
          university:foundUniversity,
          user:foundUser
        }

        res.send(responce)
      })
    })
  };

  app.post("/basic/userToAdmin",[
    getUniversity,
    getUser,
    CombineUserToAdminUni,
  	
  	respond
  ])
}