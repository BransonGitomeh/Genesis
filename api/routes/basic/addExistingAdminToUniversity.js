//bodys for the post 
//req.body.identifier

module.exports = (app,db) => {
  getUniversity = (req,res,next) => {
    req.progress = {};
    console.log(req.body)

    db.university.findOne({id:req.params.uniId}).exec((err,foundUniversity) => {
      console.log(foundUniversity)
      req.progress.foundUniversity = foundUniversity;
      next()
    })
  };

  getUser = (req,res,next) => {
    db.user.findOne({identifier:req.body.identifier}).exec((err,foundUser) => {
      // if(err) throw err
      if(foundUser){
          console.log(foundUser)
          req.progress.foundUser = foundUser
          // res.send(req.progress)
          next()
      }else{
        var responce = {
          result:false
        }

        res.send(responce)
      }
    })
  };

  CombineUserToAdminUni = (req,res,next) => {
    var user = req.progress.foundUser.id;
    var university = req.progress.foundUniversity.id;

    db.user.findOne({id:user}).exec((err,foundUser) => {
      foundUser.unis_i_admin.add(university);

      foundUser.save((err) => {
         // if(err) throw err;
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
          result:true
        }

        res.send(responce)
      })
    })
  };

  app.post("/basic/addExistingUserToAdmin/:uniId",[
    getUniversity,
    getUser,
    CombineUserToAdminUni,
  	
  	respond
  ])
}