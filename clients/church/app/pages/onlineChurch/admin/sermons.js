var navItem = require('../../../peices/navItem');
var url = "http://localhost:3000"

var event = {
  schema:{
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
      	var data = { author:event.schema.author(), content:event.schema.content() }
        m.request({method:"POST",url:url+"/sermons",data:data}).then(function(){ m.route( m.route() ) })
      },
      deleteAnEvent:function(id){
        m.request({method:"POST",url:url+"/sermonDelete",data:{id:id}}).then(function(){ m.route( m.route() ) })
      },
      event:event.schema,
      vm:event.vm
    }
  },
  view:function(ctrl,args){
    return m("div",[
      // console.log(ctrl.data.responseJSON),
      // m("h1","mithril"),
      //navbar
      //  m("div",[
      //     // ctrl.sessionIdentifier(),
      //     m("nav",{
      //         class:"blue"
      //     },[
      //         m(".containerx",[
      //             m(".nav-wrapper",[
      //               m("ul",[
      //                 m(navItem,{ name:"Upcoming events",url:"/onlineChurch/admin" }),
      //                 m(navItem,{ name:"Sermons",url:"/onlineChurch/admin/sermons" }),
      //                 m(navItem,{ name:"layout",url:"/onlineChurch/admin/layout" })
      //               ])
      //             ])
      //           ])
      //         ])
      //       ]),
      // m("a",{href:"/onlineChurch/admin",config:m.route},"upcomming events"),
      // m("a",{href:"/onlineChurch/admin/sermons",config:m.route},"sermons"),
      //navbar

      // m("br"),
      // // m("b","i am the admin Sermons editor"),
      // console.log("draw"),
      // m("form",{
      //   onsubmit:function(e){
      //     ctrl.postSermon()
      //     e.preventDefault();
      //   },
      //   config:function(){
      //     tinymce.init({
      //       selector: '#mytextarea',
      //       theme: 'modern',
      //       setup : function(editor) {
      //           editor.on('change', function(e) {
      //             console.log(editor.getContent());
      //             ctrl.event.content(editor.getContent())
      //           });
      //       },
      //     });
      //   }
      // },[
      //   // m("input",{
      //   //   oninput: m.withAttr("value", ctrl.event.author),
      //   //   placeholder:"author"
      //   // }),
      //   m("input",{
      //     oninput: m.withAttr("value", ctrl.event.content),
      //     id:"mytextarea",
      //     placeholder:"sermon-text"
      //   }),
      //   m("button","create")
      // ]),
            ctrl.churches().map(function(item){
              return m(".card-panel",[
                m("span",m.trust(item.content)),
                m("span",[
                  m("button",{
                    class:"btn red",
                    onclick:function(){
                      ctrl.deleteAnEvent(item.id)
                    }
                  },"remove")
                ])
              ])
            }),

      //make a create floating action button
      // <div class="fixed-action-btn">
      //   <a class="btn-floating btn-large red">
      //     <i class="large mdi-editor-mode-edit"></i>
      //   </a>
      // </div>
      m(".fixed-action-btn",[
        m("a",{
          href:"/onlineChurch/admin/newSermon",
          class:"btn-floating btn-large red",
          config:m.route
        },[
          m("i",{class:"mdi-editor-mode-edit"})
        ])
      ])
    ])
  }
}
