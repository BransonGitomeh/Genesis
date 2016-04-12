module.exports = (req,res) => {
	req.db.student.findOne({
		id:req.params.student_id
	}).exec((err,student)=>{
		console.log(err)
		student.levels_ive_done_before.remove(req.params.level_id)
		student.save((err)=>{
			console.log(err)
			res.send(student)
		})
	})
}


// @gochomugo: thats true.but i think the errors only being passed via a param on the `.exec` callback allows you the developer to do whatever you want to do with the error, throw it, ignore it, log it, whatever you want, it opens up to alot of freedom to what to do, as per experience unless you have a really crappy app, the erors are predictable and you can deal with them or allow a silent fail and alert if you have no idea what just happend, what other error "handling" do you advocate for?

// knex makes a query and if you mess your db with that query then ni shauri yako haha, i dont think it really cares much, though i havent used it so im probabably not the best source of info.
// an idiomatic error object in waterline looks like 
// ```
// 13:29:29.720Z  INFO core: GET               /student/addLevelToMyself/5705823617283130164b480f/5707aca032bea55c5c539a62
// null
// [ { type: 'insert',
//     collection: 'level_students_that_have_done_me_before__student_levels_ive_done_before',
//     criteria: 
//      { level_students_that_have_done_me_before: '5707aca032bea55c5c539a62',
//        student_levels_ive_done_before: '5705823617283130164b480f' },
//     values: 
//      { level_students_that_have_done_me_before: '5707aca032bea55c5c539a62',
//        student_levels_ive_done_before: '5705823617283130164b480f' },
//     err: [Error: Trying to '.add()' an instance which already exists!] } ]

// ```
// here im making a many-many relation that already exists, thats not dangerous, so i just let that fail silently

// as you can see the error is quite expressive 

// as for waterline-knex, yea that would be awesome.though the sails team has been mentaining its projects less and less with time that its flustrating.