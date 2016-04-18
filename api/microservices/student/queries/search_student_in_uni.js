var getAllStudents = require("../support/student.js").getAllStudents

var lunr = require("lunr")
var _ = require("underscore")

module.exports = (req, res) => {
	var searchTerm = req.body.searchTerm;

	getAllStudents(req.db, req.params.uniId, (students) => {

		var searchEngine = lunr(function() {
			this.field('adm', {
					boost: 10
				})
				//add search for all the fields in the student db
			for (x in students[0]) {
				this.field(x)
			}
			//TODO :add support for nested fields so the search can search
			// for courses levels etc and bring out the students
		})

		students.map((student) => searchEngine.add(student))

		var resultsIds = searchEngine.search(searchTerm)
		var resultObjects = []

		resultsIds.map((result) => {
			resultObjects.push(_.find(students, function(item) {
				return item.id == result.ref;
			}));
		})

		res.send((resultObjects.length > 0 ? resultObjects : students.splice(0, 10)))
	})

}