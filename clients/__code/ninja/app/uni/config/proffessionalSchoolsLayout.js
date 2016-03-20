var item = require('./item');
var schools = require('./schools');


var inputComponent = require('../../../../__components/forminput');
var breadcrumb = require("./breadCrumb");

var crumps = function(){
	return [
		{text:"Schools"},
	]
}

module.exports = {
  view:function(controller,atrrs){
    return m(".row",
    	m(breadcrumb,{crumps:crumps()}),
    	m(schools)
    	// m(schools),
    	// m(schools)
    )
  }
}