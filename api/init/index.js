var express = require("express");
var app  = express();
var bodyParser = require("body-parser");
var config = require("../config")

var allowCrossDomain = function(req,res,next){
	console.log(req.method + "               " + req.url)
	if('OPTIONS' == req.method){
		// console.log("a cors req came in");
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

app.use(allowCrossDomain)

console.log("configuring parser");
console.log("config body paring");
app.use(bodyParser.urlencoded({ extended: false }));
//complete config
console.log("configuring parser to return json");
app.use(bodyParser.json());
console.log("configuring starting a waterline instance");
var waterlineInstance = require("waterline")
//adapters
module.exports = (collections,config,callback) => {
	//initialize waterline
	var Waterline = new waterlineInstance();

	//innitialise the collections
	console.log("reading all collections");
	collections.map(function(collection){
		collection.connection = config.adapter();
		collection.migration = config.migration();
		var collectionInstance = waterlineInstance.Collection.extend(collection)
		Waterline.loadCollection(collectionInstance)
	})
	console.log("innitializing the collections to '%s' adapter",config.adapter())
	console.log("Collection migrations set to '%s'",config.migration());
	Waterline.initialize(config,function(err,models){
		if(err) throw err;
		app.locals.collections = models.collections
		console.log("collections init complete, calling back");
		callback(app) //returns an express app with models
	})
}
