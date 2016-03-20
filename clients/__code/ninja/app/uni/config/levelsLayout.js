var item = require('./item');
var schools = require('./schools');
var courses = require('./courses');
var levels = require('./levels');


var inputComponent = require('../../../../__components/forminput');
var breadcrumb = require("./breadCrumb");

var crumps = function(){
	return [
		{text:"Schools"},
		{text:"Courses"},
		{text:"Levels"}
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(schools),
    	m(courses),
    	m(levels)
    )
  }
}