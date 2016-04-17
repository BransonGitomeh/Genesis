module.exports = (req, res) => {
	req.db.university.findOne({
		id: req.params.uniId
	}).populate("noticeboard").exec((err, foundUniversity) => {
		if (err) throw err;

		if (foundUniversity.noticeboard) {
			req.db.noticeboard.findOne({
				id: foundUniversity.noticeboard.id
			}).populate("noticeboard_items").exec((err, foundNoticeboard) => {
				if (err) throw err;
				res.send(foundNoticeboard)
			})
		} else {
			res.send({})
		}
	})
}