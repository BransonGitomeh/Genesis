var navItem = require('../../../peices/navItem');
var input = require('../../../../../shared_components/forminput.js');

var url = "http://localhost:3000"

var event = {
  schema:{
    title:m.prop(""),
    snippet:m.prop(""),
    author:m.prop(""),
    content:m.prop("")
  },
  vm:{
    sending:m.prop(false)
  }
}

module.exports = {
  controller:function(){
    //getting the data
    var data =  m.request({ method:"GET", url:url + "/sermons", background: true, initialValue: [] })
    data.then(m.redraw) //redraw to render the data gotten from the server
    return {
      churches:data,
      postSermon:function(){
      	var data = {
          title:event.schema.author(),
          snippet:event.schema.author(), 
          author:event.schema.author(),
          content:event.schema.content()
        }
        m.request({method:"POST",url:url+"/sermons",data:data}).then(function(){ m.route( m.route() ) })
      },
      deleteAnEvent:function(id){
        m.request({method:"POST",url:url+"/sermonDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
      },
      event:event.schema,
      vm:event.vm,
      onunload: function() {
        if(tinymce){
          tinymce.remove("#mytextarea");
        }
      }
    }
  },
  view:function(ctrl,args){
    return m("div",[
      m("br"),
      console.log("draw"),
      m("form",{
        class:"card-panel",
        onsubmit:function(e){
          ctrl.postSermon()
          e.preventDefault();
        },
        config:function(){
          if(tinymce){
            tinymce.init({
              selector: '#mytextarea',
              theme: 'modern',
              height : "400",
              setup : function(editor) {
                  editor.on('change', function(e) {
                    console.log(editor.getContent());
                    ctrl.event.content(editor.getContent())
                  });
              },
            });
          }else{
            console.log("tiny mce is not loaded hence cannot be inistialized");
          }
        }
      },[
        m("h5",{class:"center"},"New Sermon"),

        m(input,{
          label:"Sermon title",
          type:"text",
          value:ctrl.event.title,
          icon:"mdi-maps-rate-review prefix",
          sizes:"col s12 l6"
        }),

        m(input,{
          label:"Sermon snippet",
          type:"textarea",
          value:ctrl.event.snippet,
          icon:"mdi-communication-stay-primary-landscape prefix",
          sizes:"col s12 l6"
        }),
          m("textarea",{
            oninput: m.withAttr("value", ctrl.event.content),
            id:"mytextarea",
            placeholder:"sermon-text"
          }),
          // m("br"),

          // m("button",{
          //
          //   class:"btn red"
          // },"create"),

          m(".fixed-action-btn",[
            m("a",{
              type:"submit",
              class:"btn-floating btn-large red",
              onclick:function(){
                ctrl.postSermon()
              }
            },[
              m("i",{class:"mdi-content-save"})
            ])
          ])
        ])


      ])
  }
}
