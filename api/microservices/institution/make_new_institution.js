module.exports = (req,res) => {
  db.university.create(req.body).exec((err, createdUniversity)=>{

    db.noticeboard.create().exec((err, createdNoticeboard) => {

      db.university.update({id:createdUniversity.id},{noticeboard:createdNoticeboard.id}).exec((err) => {
        db.noticeboard.update({id:createdNoticeboard.id},{university:createdUniversity.id}).exec((err) => {

          db.noticeboard.findOne({id:createdNoticeboard.id}).populate("university").exec((err, foundNoticeboard) => {

            db.university.findOne({id:createdUniversity.id}).populate("noticeboard").exec((err, foundUniversity) => {

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
