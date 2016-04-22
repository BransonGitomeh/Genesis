module.exports = function(app, db) {
  app.get("/none", (req, res) => {
    res.send("In the begining there was the word, and the word was with God, and the word was God")
  })

  app.get(
    "/uniStats/:uniId",
    require('./microservices/institution/queries/get_stats')
  )

  app.get(
    "/basic/getUniversities",
    require('./microservices/institution/queries/getall')
  )

  app.get(
    "/basic/getRevokedAdmins/:id",
    require('./microservices/institution/roles/admins/get_revoked')
  )

  app.get(
    "/basic/getAdmins/:id",
    require('./microservices/institution/roles/admins/get_all_admins')
  )

  app.post(
    "/basic/revokeAdmin/:id",
    require('./microservices/institution/roles/admins/revoke_admin')
  )

  app.post(
    "/basic/restoreAdmin/:id",
    require('./microservices/institution/roles/admins/restore_admin')
  )

  app.post(
    "/basic/removeAdmin/:id",
    require('./microservices/institution/roles/admins/remove_admin')
  )

  app.get(
    "/basic/getUniversity/:id",
    require('./microservices/institution/queries/get_single_uni')
  )

  app.post(
    "/basic/addToNoticeboard/:uniId",
    require('./microservices/institution/noticeboard/add_to_noticeboard')
  )

  app.get(
    "/basic/removeFromNoticeboard/:id",
    require('./microservices/institution/noticeboard/remove_from_noticeboard')
  )

  app.get(
    "/basic/makeNoticeOld/:id",
    require('./microservices/institution/noticeboard/make_old')
  )

  app.get(
    "/basic/returnOldNotice/:id",
    require('./microservices/institution/noticeboard/undo_old')
  )

  app.get(
    "/basic/getNoticeboard/:uniId",
    require('./microservices/institution/noticeboard/get_items_in_single_board')
  )

  app.get(
    "/basic/getNoticeboardOld/:uniId",
    require('./microservices/institution/noticeboard/get_old_items_in_board')
  )

  app.post(
    "/basic/makeUniversity",
    require('./microservices/institution/make_new_institution')
  )

  app.post(
    "/basic/addExistingUserToAdmin/:uniId",
    require("./microservices/institution/roles/admins/add_existing_admin")
  )

  app.post(
    "/basic/addNewAdminToUniversity/:id",
    require("./microservices/institution/roles/admins/add_new_admin")
  )

  app.post(
    "/basic/loginUserToUni/:uniId",
    require('./microservices/institution/roles/admins/login')
  )

  app.post(
    "/basic/makeTri_semester/:uniId",
    require('./microservices/institution/settings/new_trisemester')
  )

  app.post(
    "/saerchStudent/:uniId",
    require('./microservices/student/queries/search_student_in_uni')
  )

  app.get(
    "/basic/getSchools/:id",
    require('./microservices/institution/settings/schools/get_all')
  )

  app.get(
    "/basic/getCourses/:department_id",
    require('./microservices/institution/settings/courses/get_all')
  )

  app.get(
    "/basic/getLevels/:course_id",
    require('./microservices/institution/settings/levels/get_all')
  )

  app.get(
    "/basic/getStages/:level_id",
    require('./microservices/institution/settings/stages/get_all')
  )

  app.get(
    "/basic/getUnitsOffered/:id",
    require('./microservices/institution/settings/units/get_offered')
  )

  app.get(
    "/basic/getUnitsOfferedVersusStudent/:semester_id/:student_id/:tri_sem_id",
    require('./microservices/institution/settings/units/get_offered_vs_student')
  )

  app.get(
    "/basic/getUnitsAvailable/:id",
    require('./microservices/institution/settings/units/get_available')
  )

  app.get(
    "/basic/studentsConfiguration/:student_id",
    require('./microservices/student/settings/get_configuration')
  )

  app.get(
    "/basic/getUnitsInCourse/:stage_id",
    require('./microservices/institution/settings/units/get_offered_by_course')
  )

  app.get(
    "/basic/getDepartments/:school_id",
    require('./microservices/institution/settings/departments/get_all')
  )

  app.post(
    "/basic/makeUnits/:department_id",
    require('./microservices/institution/settings/units/make_new')
  )

  app.get(
    "/basic/getStudy_sessions/:uniId",
    require('./microservices/institution/settings/study_modes/get_all')
  )

  app.post(
    "/basic/makeStudy_session/:uniId",
    require('./microservices/institution/settings/study_modes/make_new')
  )

  app.get(
    "/basic/getTri_semesters/:uniId",
    require('./microservices/institution/settings/tri_semesters/get_all')
  )

  app.get(
    "/basic/getActiveTri_semester/:uniId",
    require('./microservices/institution/settings/tri_semesters/get_active')
  )

  app.post(
    "/basic/makeTri_semesterActive/:uniId",
    require('./microservices/institution/settings/tri_semesters/make_active')
  )

  app.get(
    "/basic/makeTri_semesterDead/:tri_semester_id",
    require('./microservices/institution/settings/tri_semesters/kill_trisem')
  )

  app.post(
    "/basic/makeSchool/:id",
    require('./microservices/institution/settings/schools/make_new')
  )

  app.post(
    "/basic/makeCourse/:department_id",
    require('./microservices/institution/settings/courses/make_new')
  )

  app.post(
    "/basic/makeLevel/:id",
    require('./microservices/institution/settings/levels/make_new')
  )

  app.post(
    "/basic/makeStage/:id",
    require('./microservices/institution/settings/stages/make_new')
  )

  app.post(
    "/basic/makeDepartments/:school_id",
    require('./microservices/institution/settings/departments/make_new')
  )

  app.post(
    "/basic/addUnitToStage/:stage_id",
    require('./microservices/institution/settings/units/add_to_stage')
  )

  app.get(
    "/basic/feePayment/:paymentId",
    require('./microservices/institution/finance/make_fee_payment')
  )

  app.get(
    "/basic/getfeePayment/:paymentId/:student",
    require('./microservices/institution/finance/get_payments_for_single_student')
  )

  app.get(
    "/basic/getUniCourses/:uniId",
    require('./microservices/institution/queries/get_courses_of_a_uni')
  )

  app.post(
    "/basic/AddUnitToStudent/:student_id",
    require('./microservices/student/units/add_unit_to_myself')
  )

  app.post(
    "/basic/RemoveUnitFromStudent/:student_id",
    require('./microservices/student/units/remove_unit_from_myself')
  )

  app.post(
    "/basic/addTrisemToMe/:student_id",
    require('./microservices/student/tri_semesters/add_trisemester_to_myself')
  )

  app.get(
    "/basic/getMyTriSems/:student_id",
    require('./microservices/student/tri_semesters/get_all_my_trisems')
  )

  app.get(
    "/basic/getMyPayments/:student_id",
    require('./microservices/student/payments/get_all_my_payments')
  )

  app.post(
    "/basic/makePaymentToStudent/:student_id",
    require('./microservices/student/payments/make_payment_for_myself')
  )

  app.get(
    "/basic/getAllStudents/:uniId",
    require('./microservices/student/get_all')
  )

  app.post(
    "/basic/makeStudent/:uniId",
    require('./microservices/student/make_new')
  )

  app.get(
    "/student/getDepartmentsAndCourses/:student_id",
    require('./microservices/institution/queries/allCourses')
  )

  // student add course
  app.get(
      "/student/addCourseToMyself/:student_id/:course_id",
      require('./microservices/student/queries/addCourseToMyself')
    )
    //student remove course
  app.get(
      "/student/RemoveCourseFromMyself/:student_id/:course_id",
      require('./microservices/student/queries/RemoveCourseFromMyself')
    )
    // student add level
  app.get(
      "/student/addLevelToMyself/:student_id/:level_id",
      require('./microservices/student/queries/addLevelToMyself')
    )
    //student remove level
  app.get(
      "/student/RemoveLevelFromMyself/:student_id/:level_id",
      require('./microservices/student/queries/RemoveLevelFromMyself')
    )
    // student add stage
  app.get(
      "/student/addStageToMyself/:student_id/:stage_id",
      require('./microservices/student/queries/addStageToMyself')
    )
    //student remove stage
  app.get(
    "/student/RemoveStageFromMyself/:student_id/:stage_id",
    require('./microservices/student/queries/RemoveStageFromMyself')
  )

  //student add unit
  app.get(
    "/student/AddUnitToMyself/:student_id/:unit_id/:semester_id/:tri_semester_id",
    require('./microservices/student/queries/AddUnitToMyself')
  )

  //student remove unit
  app.get(
      "/student/RemoveUnitFromMyself/:student_id/:unit_id/:semester_id/:tri_semester_id",
      require('./microservices/student/queries/RemoveUnitFromMyself')
    )
    //get my units
  app.get(
    "/student/getMyUnits/:student_id",
    require('./microservices/student/units/get_my_units')
  )
}