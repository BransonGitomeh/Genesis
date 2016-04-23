//libs
var seneca = require("seneca")()
var bunyan = require('bunyan');

var express = require("express")
var path = require("path")

//internal config/utility libs
var config = require("./config")
var log = bunyan.createLogger({
	name: "core"
});

require("./init/index.js")(require("./init/collections")(), config, function(app) {

	log.info("Confuguring all routes")

	require("./init/routes")().map((routeFile) => routeFile(app, app.locals.collections))

	log.info("Attemting to start server")

	app.listen(config.port(), config.ip(), 511, (err) => {

		if (err) throw err

		log.info("Api  :smile: @-> http://localhost:%s", config.port())

	})

	/*
	 *a service directory stores services that are related to one another,
	 *this is just to organise the services into groves that can be moved independently
	 *
	 *currrently you need to pass the db into a service directory for it to have db access
	 *i future i wish to split every sevice with its own data store so it is independent
	 *
	 *a service directory can have its own service directory too to increase controll etc
	 *
	 *services are allowed to call one another even outside their service directories to increase code re-use as much as possible
	 *
	 *routing remains intact for back words compatibility , till no more requests head to them
	 */

	//import a sevice directory
	var student_services = require("./microservices/service_router.js")(app.locals.collections);
	//register all the services in it
	for (x in student_services) seneca.use(student_services[x])

	/*
	 *a post must be used to access a service, the args,
	 *target and command for that service  must be in the body of the post
	 *this allows the entire process to be transfered securely via https and
	 *for other mechanisms to be employed to encrypt the body for more security,
	 *this just eases everything
	 */
	app.post("/services", (req, res) => {

		if (!(req.body.role && req.body.cmd)) {
			res.status(401)
			res.send("oops, you need to specify role and cmd")
		} else {
			seneca.act(req.body, (err, result) => res.send(err || result))
		}

	})
	app.use(express.static(path.join(__dirname, 'public')));

	app.use('/', express.static(path.join(__dirname + '/public/homepage')));

})