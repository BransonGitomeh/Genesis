var inputComponent = require('../../../__components/forminput');
module.exports = {
  controller:function(){
    return {
      schema:{
        name:m.prop("")
      }
    }
  },
  view:function(controller,atrrs){
    return m("form",{
      class:"card-panel",
      onsubmit:function(e){
        m.request({
          url:"http://localhost:3000/basic/makeUniversity",
          method:"POST",
          data:{
            name:controller.schema.name()
          }
        }).then(m.route("/uni/all"))
        e.preventDefault();
      }
    },[
      m(inputComponent,{
        label:"Name of new uni",
        icon:"mdi-communication-business prefix",
        type:"text",
        value:controller.schema.name
      }),
        m("button",{
            type:"submit",
            class:"btn waves-effect waves-block waves-light purple center"
        },"create school")
    ])
  }
}
