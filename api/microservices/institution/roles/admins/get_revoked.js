module.exports = (req, res) => {
  req.db.university.findOne({
    id: req.params.id
  }).populate("revoked_admins").exec((err, university) => {
    if (err) throw err;
    res.send(university.revoked_admins)
  })
}