var footer = require("../peices/footer")
var topbar = require("../peices/topbar")
var contactForm = require("../../../shared_components/contactForm")


module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                // m(hero),
                m(".row",[
                  // m("h1","about us")
                  // m(".col s12 l5",[
                  //   // m("div","good welcoming picture to show we will respond")
                  //    m("img",{
                  //       class:"materialboxed",
                  //       "data-caption":"Our Sanctuary",
                  //       src:"/build/assets/img/icons/contactus.jpg",
                  //       config:function(){
                  //         $('.materialboxed').materialbox();
                  //       }
                  //     }),

                  // ]),

                  m(".col s12 l12",[
                   m.component(contactForm)
                  ])
                ]),
                // custom component with unique content per page
                m(footer)
            ]
        }
    }

    // m.mount(document.body,homapage)
