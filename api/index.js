var config = require("./config")
var fs = require("fs")

var bunyan = require('bunyan');

var log = bunyan.createLogger({name: "core"});

var routeFiles = require("./init/routes")()
var collections = require("./init/collections")()

require("./init/index.js")(collections,config,function(app){
	log.info("Confuguring all routes")
	routeFiles.map((routeFile) => routeFile(app,app.locals.collections))
	log.info("Attemting to start server")
	app.listen(config.port(),() => {
		log.info("Api  :smile: @-> http://localhost:%s",config.port())
	})
})
