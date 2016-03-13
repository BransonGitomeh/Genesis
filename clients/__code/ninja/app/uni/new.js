module.exports = {
  controller:function(){
    return {
      universities:m.request({url:"http://localhost:3000/basic/getUniversities",method:"GET"})
    }
  },
  view:function(controller,atrrs){
    return m("div",[
      m("div",{class:"card-panel"},[
          m("div",{
            class:"btn waves-effect waves-block waves-light purple center",
            onclick:function(){
              m.request({url:"http://localhost:3000/test2/users",method:"GET"}).then(m.route( m.route() ))
            }
          },"initialize server with fake data")
      ])
    ])
  }
}
