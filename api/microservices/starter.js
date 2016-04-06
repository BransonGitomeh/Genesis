var m = require('seneca')()

m.add({
	role: 'math',
	cmd: 'sum'
}, function (msg, respond) {
  var sum = msg.left + msg.right
  respond(null, {answer: sum})
})

m.add({
	role: 'math',
	cmd: 'sum',
	centerPresent:true
}, function (msg, respond) {
  var sum = msg.left + msg.center + msg.right
  respond(null, {answer: sum})
})

m.add({
	role: 'person',
	cmd: 'talk',
	args:{
		age:200
	}
}, function (msg, respond) {
  var sum = msg.args.name + msg.args.lname + msg.args.mname
  respond(null, {answer: sum})
})

m.act({
	role: 'person',
	cmd: 'talk',
	args:{
		name:"branson",
		lname:"gitomeh",
		mname:"kuria"
	}
},(err, result) => {
  if (err) return console.error(err)
  console.log(result)
})

m.act({
	role: 'math',
	cmd: 'sum',
	integer:true,
	left: 33,
	right: 2
},(err, result) => {
  if (err) return console.error(err)
  console.log(result)
})

m.act({
	role: 'math',
	cmd: 'sum',
	integer:true,
	centerPresent:true,
	left: 2,
	center:2,
	right: 2
},(err, result) => {
  if (err) return console.error(err)
  console.log(result)
})

// m.act({
// 	role: 'speaker',
// 	cmd: 'talk',
// 	content: 'this is a micro services',
// }, (err, result) => {
//   if (err) return console.error(err)
//   console.log(result)
// })
