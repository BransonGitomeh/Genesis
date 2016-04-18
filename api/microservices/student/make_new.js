createStudent = (req, res, next) => {
  req.progress = {}
  req.db.student.create({
    adm: req.body.adm,
    name: req.body.names,

    course: req.body.course,
    level: req.body.level,
    stage: req.body.stage,
    study_mode: req.body.study_mode
  }).exec(function(err, created) {
    if (err) throw err;
    // res.send(created)
    // console.log(created)
    req.progress.createStudent = created;

    //save this records in the students hostory of stuff done before
    req.db.course.findOne({
      id: req.body.course
    }).exec((err, course) => {
      course.students_that_have_done_me_before.add(created.id)
      course.save()
    })

    req.db.level.findOne({
      id: req.body.level
    }).exec((err, level) => {
      level.students_that_have_done_me_before.add(created.id)
      level.save()
    })

    req.db.stage.findOne({
      id: req.body.stage
    }).exec((err, stage) => {
      stage.students_that_have_done_me_before.add(created.id)
      stage.save()
    })

    req.db.study_session.findOne({
      id: req.body.study_mode
    }).exec((err, study_session) => {
      study_session.students_that_have_done_me_before.add(created.id)
      study_session.save()
    })

    //find the activesem and make it available to the student, register him to it
    req.db.course.findOne({
        id: req.body.course
      })
      .populate("department.proschool.uni.active_tri_semester").exec((err, course) => {
        console.log(course)
        created.save(console.log);
      })

    next();
  })
};



createRelationships = (req, res, next) => {
  next()
}

connectPayments = (req, res, next) => {
  next()
}

respond = (req, res, next) => {
  req.db.student.findOne({
      id: req.progress.createStudent.id
    })
    .populate("course")
    .populate("level")
    .populate("stage")
    .populate("study_mode")
    .exec((err, student) => {
      // console.log(student)
      req.progress = {}
      res.send((student || err))
    })
}

module.exports = [
  createStudent,
  createRelationships,
  connectPayments,
  respond
]