var navbar = require("../peices/navbar");

var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");

var contactForm = require("../../../../shared_components/contactForm")

var contactus={
  getData:function(){
    return{
      name : m.prop(""),
      age : m.prop(""),
      email : m.prop(""),
      location : m.prop(""),
      phonenumber : m.prop(""),
      message : m.prop("")
    }
  },
  setData:function(data){
    // console.log("asked to save");
    // console.log(data);
  }
};



module.exports = {

  controller:function(){
    var self = this;
    this.data = contactus.getData();

    this.save = function(errs){
      contactus.setData(this.data);
      console.log(self.data.email());
    }.bind(this)
  },

  view:function(ctrl){
      var items = [
        {icon:"medium mdi-action-home",text:"P.O. BOX 3279 Kigali, Rwanda"},
        {icon:"medium mdi-communication-ring-volume",text:"+250 735 156 902"},
        {icon:"medium mdi-communication-stay-current-portrait",text:"+250 783 000 101"}
      ]
      // var entered_values = []
      return m(".app",[
         m.component(navbar),

         m(".row",[
           //collumn 1 , the sidebar
           m(".col l3 hide-on-med-and-down",[
             m.component(sidebar)
           ]),
           //the sider and everything else
           m(".col l9",[
             m("h3",{class:"center"},"Contact Us"),

            //  contact links
             m(".row center",[
               items.map(function(item){
                 return m(".col l4",[
                  //  item with logo and info
                   m(".col l3",[
                     m("i",{class:item.icon})
                   ]),
                  //  text
                   m(".col l9",[
                     m("p",{class:"flow-text"},item.text)
                   ])
                 ])
               })


             ]),

            //  send message form inputs

            // contactForm here

            m(contactForm)

           ])

         ]),

         m.component(footer)
       ])

    }
}
