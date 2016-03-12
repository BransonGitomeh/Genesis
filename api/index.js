var config = require("./config")
var fs = require("fs")

var routeFiles = require("./init/routes")()
var collections = require("./init/collections")()

require("./init/index.js")(collections,config,function(app){
	routeFiles.map((routeFile) => routeFile(app,app.locals.collections))

	app.listen(config.port(),() => {
			console.log("server started successfully @http://localhost:%s",config.port())
	})
})
