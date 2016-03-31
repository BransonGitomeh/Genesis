var getAllStudents = require("../student/student.js")
var lunr = require("lunr")
var _ = require("underscore")


module.exports = (app,db) => {
	app.post("/saerchStudent/:uniId",(req,res) => {
		var searchTerm = req.body.searchTerm;

		getAllStudents(db,req.params.uniId,(students)=>{

			var searchEngine = lunr(function(){
			    this.field('adm', { boost: 10 })
			    this.field('name')
			})

			students.map((student)=>searchEngine.add(student))

			var resultsIds = searchEngine.search(searchTerm)
			var resultObjects = []

			resultsIds.map((result)=>{
				resultObjects.push(_.find(students, function(item) {
				    return item.id == result.ref; 
				}));
			})
			
			res.send(resultObjects)
		})

	})
}

