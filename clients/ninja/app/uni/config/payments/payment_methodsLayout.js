var payments = require('./payments');

var breadcrumb = require("../breadCrumb");

var crumps = function() {
	return [{
		text: "Payment options",
		url: "/uni/admin/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/" + "schools"
	}]
}

module.exports = {
	view: function(controller, atrrs) {
		return m(".row",
			m(breadcrumb, {
				crumps: crumps()
			}),
			m(payments)
		)
	}
}