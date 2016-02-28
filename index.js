var initializeFW = require("genesis-express-waterline")
//import the config
var config = require("./config")
var fs = require("fs")

//read the collections
fs.readdir("./collections",(err,files) => {
	var collections = []
	files.map((file) => {
		collections.push(require("./collections/" + file))
	})

	//innit the framework
	initializeFW(collections,config,function(app){
		//snoop through all the files inside routes folder and get the [app.gets] to complete the routing
		fs.readdir("./routes",(err,files) => {
			files.map((file) => require("./routes/" + file)(app,app.locals.collections))
		})

		app.listen(config.port(),function(){
			console.log("server started")
		})

	})
})
