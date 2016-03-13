module.exports = function(app,db){
  makeUser = (req,res,next) => {
    db.user.create({email:"sirbranson67@gmail.com",phone:"0711657108",password:"awesomeness"}).exec((err, createdUser)=>{
      req.progress = {};
      req.progress.createdUser = createdUser
      next();
    })
  };

  makeUserProfile = (req,res,next) => {
    db.user_profile.create({
      surname:"Branson",
      othernames:"gitomeh kuria",
      dob:new Date(),
      user:req.progress.createdUser.id
    }).exec((err, createdUserProfile)=>{
      req.progress.createdUserProfile = createdUserProfile;
      next();
    });
  };

  makeUserProfileRelationship = (req,res,next) => {
    var user = req.progress.createdUser
    var profile = req.progress.createdUserProfile

    db.user.update({id:user.id},{profile:profile.id}).exec((err,updated) => {if(err) throw err});
    db.user_profile.update({id:profile.id},{profile:user.id}).exec((err,updated) => {if(err) throw err});
    next(); //we dont need to wait for them to finish
  };

  makeStudent = (req,res,next) => {
    var user = req.progress.createdUser
    db.student.create({user:user.id}).exec((err, createdStudent)=>{
      req.progress.createdStudent = createdStudent
      next();
    })
  };

  makeStudentProfile = (req,res,next) => {
    db.student_profile.create({
      surname:"Branson",
      othernames:"gitomehKuria",
      dob:new Date(),
      more:"other fields blabla",
      student:req.progress.createdStudent.id
    }).exec((err, createdStudentProfile)=>{
      req.progress.createdStudentProfile = createdStudentProfile;
      next();
    });
  };

  makeStudentProfileRelationship = (req,res,next) => {
    var student = req.progress.createdUser
    var profile = req.progress.createdStudentProfile

    db.student.update({id:student.id},{profile:profile.id}).exec((err,updated) => {if(err) throw err});
    db.student_profile.update({id:profile.id},{profile:student.id}).exec((err,updated) => {if(err) throw err});
    next(); //we dont need to wait for them to finish
  };


  //fetch uni and teachers and admins and their profiles, send them
  makeUniversity = (req,res,next) => {
    db.university.create({
      name:"premier"
    }).exec((err,createdUni) => {
      req.progress.createdUniversity = createdUni;
      next();
    })
  }

  addUsersToAdminUniversity = (req,res,next) => {
    var user = req.progress.createdUser
    var university = req.progress.createdUniversity

    db.user.update({id:user.id},{uni_i_admin:university.id}).exec((err,updated) => {if(err) throw err});
    next();
  }

  addStudentToUniversity = (req,res,next) => {
    var student = req.progress.createdStudent
    var university = req.progress.createdUniversity

    db.student.findOne({id:student.id}).exec((err,foundStudent) => {
      if(err) throw err

      foundStudent.my_universities.add(university.id)
      foundStudent.save();
    });
    next();
  }

  addUsersToParentStudent = (req,res,next) => {
    var student = req.progress.createdStudent
    var parent = req.progress.createdStudent

    db.student.findOne({id:student.id}).exec((err,foundStudent) => {
      if(err) throw err

      foundStudent.guardians.add(parent.id)
      foundStudent.save();
    });
    next();
  }

  makeUniSchools = (req,res,next) => {
    var university = req.progress.createdUniversity

    db.proschool.create({name:"focim",uni:university.id}).exec((err,createdPschool) => {
      req.progress.createdPschool = createdPschool
      next();
    })

  }

  makeDepartments = (req,res,next) => {
    var university = req.progress.createdUniversity

    db.department.create({name:"ecd",uni:university.id}).exec((err,createdDepartment) => {
      req.progress.createdDepartment = createdDepartment
      next();
    })
  }
  //connected to a proschool
  makeCourses = (req,res,next) => {
    var school = req.progress.createdPschool

    db.course.create({name:"IT",school:school.id}).exec((err,createdCourse) => {
      req.progress.createdCourse = createdCourse
      next();
    })
  }

  makeLevel = (req,res,next) => {
    var course = req.progress.createdCourse

    db.level.create({name:"Diploma",course:course.id}).exec((err,createdLevel) => {
      req.progress.createdLevel = createdLevel
      next();
    })
  }

  makeStage = (req,res,next) => {
    var level = req.progress.createdLevel

    db.stage.create({name:"stage1/semester1",level:level.id}).exec((err,createdStage) => {
      req.progress.createdStage = createdStage
      next();
    })
  }

  //take a uni that has been made and assign it to this semester
  assignUnitsStage = (req,res,next) => {
    var stage = req.progress.createdStage
    var unit = req.progress.createdUnit

    //make the stage offer it..itll apply automatically to the other join table
    db.stage.findOne({id:stage.id}).exec((err,foundStage) => {
      foundStage.units_i_offer.add(unit.id)
      foundStage.save((err) => {
        if(err) console.error(err)
        next();
      })
    })
  }

  assignUnitsStudents = (req,res,next) => {
    var student = req.progress.createdStudent
    var unit = req.progress.createdUnit

    //make the stage offer it..itll apply automatically to the other join table
    db.student.findOne({id:student.id}).exec((err,foundStudent) => {
      foundStudent.units_im_taking.add(unit.id)
      foundStudent.save((err) => {
        if(err) console.error(err)
        next();
      })
    })
  }

  //connect to department
  makeUnits = (req,res,next) => {
    var department = req.progress.createdDepartment

    db.unit.create({name:"programming part 1",cost:40000,dep:department.id}).exec((err,createdUnit) => {
      req.progress.createdUnit = createdUnit
      next();
    })
  }

  selectCourse = (req,res,next) => {
    var student = req.progress.createdStudent
    var course = req.progress.createdCourse

    //make the stage offer it..itll apply automatically to the other join table
    db.student.update({id:student.id},{course:course.id}).exec((err,foundStudent) => {
        next();
    })
  }

  selectLevel = (req,res,next) => {
    var student = req.progress.createdStudent
    var level = req.progress.createdLevel

    //make the stage offer it..itll apply automatically to the other join table
    db.student.update({id:student.id},{level:level.id}).exec((err,foundStudent) => {
        next();
    })
  }

  selectStage = (req,res,next) => {
    var student = req.progress.createdStudent
    var stage = req.progress.createdStage

    //make the stage offer it..itll apply automatically to the other join table
    db.student.update({id:student.id},{stage:stage.id}).exec((err,foundStudent) => {
        next();
    })
  }

  selectUnits = (req,res,next) => {
    var student = req.progress.createdStudent
    var stage = req.progress.createdStage

    //make the stage offer it..itll apply automatically to the other join table
    db.student.findOne({id:student.id}).populate("stage").exec((err,foundStudent) => {
      // console.log(foundStudent);
      db.stage.findOne({id:foundStudent.stage.id}).populate("units_i_offer").exec((err,stage) => {
        // console.log(stage.units_i_offer);
        stage.units_i_offer.map((unit)=> {
          console.log(unit.id);
          foundStudent.units_im_taking.add(unit.id)
        })
        // console.log(foundStudent.units_im_taking);
        foundStudent.save((err)=>{
          // if(err) throw err
          next();
        })
      })
      //find units held by the stage you are in

    })
  }

  // selectUnits

  confirmSuccess = (req,res,next) => {
    var user = req.progress.createdUser
    var profile = req.progress.createdUserProfile
    var university = req.progress.createdUniversity

    var resObject = {}
    db.user_profile.findOne({id:profile.id}).populate("user").exec((err,user_profile)=> {
      db.user.findOne({id:user.id}).populate("profile").populate("student_accounts").exec((err,user)=> {
        db.university.findOne({id:university.id}).populate("admins").populate("students").populate("proschools").populate("departments").exec((err,university)=> {
          db.proschool.find().populate("uni").populate("courses").exec((err,proschools)=> {
            db.department.find().populate("uni").populate("units").exec((err,departments)=> {
              db.course.find().populate("school").populate("levels").populate("students").exec((err,courses)=> {
                db.unit.find().populate("dep").populate("stages_doing_me").exec((err,units)=> {
                  db.level.find().populate("stages").populate("course").exec((err,levels)=> {
                    db.stage.find().populate("units_i_offer").exec((err,stages)=> {
                      db.student.find().populate("stage").populate("level").populate("course").populate("profile").populate("user").populate("units_im_taking").populate("my_universities").populate("guardians").exec((err,students)=> {
                        db.student_profile.find().populate("student").exec((err,students_profiles)=> {

                          resObject.user = user
                          resObject.user_profile = user_profile
                          resObject.university = university
                          resObject.proschools = proschools
                          resObject.departments = departments
                          resObject.courses = courses
                          resObject.levels = levels
                          resObject.units = units
                          resObject.stages = stages
                          resObject.students = students
                          resObject.students_profiles = students_profiles

                          res.send(resObject)

                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  };

  //call them in order
  app.get("/test2/users",[
    makeUser,
    makeUserProfile,
    makeUserProfileRelationship,

    makeStudent,
    makeStudentProfile,
    makeStudentProfileRelationship,

    makeUniversity,
    addStudentToUniversity,
    addUsersToAdminUniversity,
    addUsersToParentStudent,

    //departments....
    makeDepartments, //ie d
    makeUnits,

    //proschool
    makeUniSchools, //ie focim
    makeCourses, //ie IT
    makeLevel, //ie diploma
    makeStage, //ie Stage 1/semester 1/whatever
    assignUnitsStage, //Assign units made in departments to semesters so that students can select them

    assignUnitsStudents,
    //students
    selectCourse,
    selectLevel,
    selectStage,
    // selectUnits, //comes with cost so far
    //return the result
    confirmSuccess
  ])
}
