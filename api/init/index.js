var express = require("express");
var app  = express();
var bodyParser = require("body-parser");
var config = require("../config");
var bunyan = require('bunyan');
var waterlineInstance = require("waterline")

var log = bunyan.createLogger({name: "core"});

var allowCrossDomain = function(req,res,next){
	log.info(req.method + "               " + req.url)
	if('OPTIONS' == req.method){
		// log.info("a cors req came in");
		res.header("Access-Control-Allow-Origin","*");
		res.header("Access-Control-Allow-Methods","GET,PUT,DELETE,PATCH,OPTIONS");
		res.header("Access-Control-Allow-Headers","Content-Type,Authorization,Content-Length,X-Requested-With");
		res.sendStatus(200)
	}else{
		res.header("Access-Control-Allow-Origin","*");
		res.header("Access-Control-Allow-Methods","GET,PUT,DELETE,PATCH,OPTIONS");
		res.header("Access-Control-Allow-Headers","Content-Type,Authorization,Content-Length,X-Requested-With");
		next();
	}
}

log.info("Innitialized Cors support");

//cross domain
app.use(allowCrossDomain)

log.info("Configuring body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//adapters
module.exports = (collections,config,callback) => {
	//initialize waterline
	log.info("Aquiring a Waterline instance");
	var Waterline = new waterlineInstance();

	//innitialise the collections
	log.info("reading all collections");
	collections.map(function(collection){
		collection.connection = config.adapter();
		collection.migrate = config.migration();
		var collectionInstance = waterlineInstance.Collection.extend(collection)
		Waterline.loadCollection(collectionInstance)
	})
	log.info("Collections '%s Adapter' && '%s Migration'",config.adapter(),config.migration())

	log.info("Innitializing waterline...")
	
	Waterline.initialize(config,function(err,models){
		if(err) throw err;
		app.locals.collections = models.collections

		var addDbToReq = function(req,res,next){
			req.db = models.collections
			next()
		}

		app.use(addDbToReq)

		log.info("Backend config complete, next()");
		callback(app) //returns an express app with models
	})
}
