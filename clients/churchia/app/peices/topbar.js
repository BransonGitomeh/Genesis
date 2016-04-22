var navbar = require("./navbar");

module.exports={
        view:function(){
            return  m("header",[
              m("div",{id:"index-banner",class:"section no-pad-bot " + color + " hide-on-med-and-down"},[
                    m(".container row center-on-small-only ",[
                      // logo area
                      m(".col l4 s12 white-text center-align",[
                        m("br"),

                        m("h1",[
                          m("b"," GATHERING CHURCH INTERNATIONAL")
                        ])
                      ]),

                      // services
                      m(".col l5 s12 white-text",[

                              m("h4","Join Us this monday at 9.00am"),


                          m(".divider"),
                          m(".row",[
                            m(".col l6",[

                              m("p","Express Service",[
                                m("b",": 9.00am"),
                                m("span"," to "),
                                m("b","10.30am ")
                              ]),

                              m("p","Main Service",[
                                m("b",": 10.30am"),
                                m("span"," to "),
                                m("b","1.00pm "),
                              ]),

                            ]),

                            m(".col l6",[
                              m("br"),

                              m("a",{
                                class:"btn white-text dropdown-button-topbar " + color,
                                "data-activates":'dropContact',
                                config:function(){
                                  $('.dropdown-button-topbar').dropdown();
                                }
                              },"Contact Us"),


                              m("ul",{
                                id:"dropContact",
                                class:"dropdown-content"
                              },[
                                m("li",[
                                  m("a",{href:"/Welcome/location",config:m.route},"Directions"),
                                ]),
                                m("li",[
                                  m("a",{href:"/Welcome/contactUs",config:m.route},"Reach an Usher")
                                ])


                              ])

                            ])
                          ]),









                      ]),

                      // Contact
                      // m(".col l2 s12 white-text",[
                      //     // m("h5","Contact"),
                      //     // m(".divider"),
                      //     // m("p","PST Martin: 0722409158")
                      // ]),

                      // location
                      m(".col l2 s12 white-text",[
                        m("img",{
                          class:"materialboxed",
                          "data-caption":"Our Sanctuary",
                          width:"250",
                          src:"/build/assets/img/orgFace/gathering_logo.png",
                          config:function(){
                            $('.materialboxed').materialbox();
                          }
                        })
                      ])
                    ])
                  ]),

                  m(navbar,{
                    fixed:false
                  }),
            ])


        }
    }
