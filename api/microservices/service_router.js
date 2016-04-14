module.exports = function(db){
	return {
		test:function(options){
			this.add({
				role:"test",
				cmd:"greet"
			},(args, res)=>{
				console.log("awesemness")
				res(null,{result:"hello world"})
			})
		}
	}
}