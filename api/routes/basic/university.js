module.exports = function(app,db){
  app.get("/",(req,res) => {
    res.send("In the begining there was the word, and the word was with God, and the word was God")
    // express.static('public')
  })

  app.get(
    "/uniStats/:uniId",
    require('../../microservices/institution/queries/get_stats')
  )
  
  app.get(
    "/basic/getUniversities",
    require('../../microservices/institution/queries/getall')
  )

  app.get(
    "/basic/getRevokedAdmins/:id",
    require('../../microservices/institution/roles/admins/get_revoked')
  )

  app.get(
    "/basic/getAdmins/:id",
    require('../../microservices/institution/roles/admins/get_all_admins')
  )

  app.post(
    "/basic/revokeAdmin/:id",
    require('../../microservices/institution/roles/admins/revoke_admin')
  )

  app.post(
    "/basic/restoreAdmin/:id",
    require('../../microservices/institution/roles/admins/restore_admin')
  )

  app.post(
    "/basic/removeAdmin/:id",
    require('../../microservices/institution/roles/admins/remove_admin')
  )

  app.get(
    "/basic/getUniversity/:id",
    require('../../microservices/institution/queries/get_single_uni')
  )

  app.post(
    "/basic/addToNoticeboard/:uniId",
    require('../../microservices/institution/noticeboard/add_to_noticeboard')
  )

  app.get(
    "/basic/removeFromNoticeboard/:id",
    require('../../microservices/institution/noticeboard/remove_from_noticeboard')
  )

  app.get(
    "/basic/makeNoticeOld/:id",
    require('../../microservices/institution/noticeboard/make_old')
  )

  app.get(
    "/basic/returnOldNotice/:id",
    require('../../microservices/institution/noticeboard/undo_old')
  )

  app.get(
    "/basic/getNoticeboard/:uniId",
    require('../../microservices/institution/noticeboard/get_items_in_single_board')
  )

  app.get(
    "/basic/getNoticeboardOld/:uniId",
    require('../../microservices/institution/noticeboard/get_old_items_in_board')
  )

  app.post(
    "/basic/makeUniversity",
    require('../../microservices/institution/make_new_institution')
  )

}
