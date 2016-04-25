var moment = require("moment")

module.exports = (req, res) => {
	req.db.university.find()
		.populate("admins")
		.populate("students")
		.populate("registras")
		.exec((err, universities) => {
			if (err) throw err;
			var finalInfo = []

			universities.map((uni) => {
				finalInfo.push({
					id:uni.id,
					name: uni.name,
					admins: uni.admins.length,
					registras: uni.registras.length,
					students: uni.students.length,
					age: moment.duration(moment(uni.createdAt).diff(moment(new Date())), 'milliseconds').humanize()
				})
			})
			res.send(finalInfo)
		})
}