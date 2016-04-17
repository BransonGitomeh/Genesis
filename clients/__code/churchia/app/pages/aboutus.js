var footer = require("../peices/footer")
var topbar = require("../peices/topbar")

module.exports = {
        view:function(){
            return [
                m(topbar,{
                  fixed:true
                }),
                // m(hero),
                m(".row card-panel",[
                  m("h1","about us"),

                  // image of the church

                  m(".col l3",[
                    m(".tabs-wrapper .row",{
                    },[
                      m("img",{
                        class:"materialboxed",
                        "data-caption":"Our Sanctuary",
                        width:"250",
                        src:"http://jiarelief.org/wp-content/uploads/2013/05/Murrell-Ewing-Childrens-Home-11x17.jpg",
                        config:function(){
                          $('.materialboxed').materialbox();
                        }
                      }),

                      m("blockquote",{class:"card-panel flow-text"},"We are closely affiliated with the",[
                        m(".blue-text","Jordan inter`national Aid"),
                        m("div","and above is a model of the dream church that we are building at Joska")
                      ])
                    ])
                  ]),

                  m(".col l9",[
                    m(".card-panel",[
                      m("h3",{class:"center"},"About Us"),
                      m(".row",[

                        // the core values
                        m(".col l6",[
                          m("h5",{class:"center"},"Our Core Values"),

                            m("ol",[

                              m("li",[
                                m("b","BUILDING RELATIONSHIPS - "),
                                m("i","We live life with people")
                              ]),

                              m("br"),

                              m("li",[
                                m("b","RESTORING LIVES  - "),
                                m("i","It is never too late to be what God has designed us to be")
                              ]),

                               m("br"),

                              m("li",[
                                m("b","SHARING CHRIST  - "),
                                m("i","It is never too late to be what God has designed us to be")
                              ]),

                               m("br"),

                              m("li",[
                                m("b","LIVING CHRIST CENTERED  - "),
                                m("i","It is never too late to be what God has designed us to be")
                              ])
                            ])

                        ]),

                        // the Mission Statement

                        m(".col l6",[
                          m("h5",{class:"center"},"Our Mission statement"),

                          m("p","We exist to lead people to become fully committed Disciples of Christ"),

                          m("h6","OUR CORE FOUR"),

                          m("ol",[

                            m("li",[
                                m("b","Building"),
                            ]),
                            m("li",[
                                m("b","Unity"),
                            ]),
                            m("li",[
                                m("b","Teaching"),
                            ]),
                            m("li",[
                                m("b","Favor"),
                            ])
                          ])

                        ]),

                        m(".col l12",[
                            m("h4",{class:"center"},"Our Goals and  Objectives"),

                            m("h5",{class:"center"},"1. Scale up growth in gathering church"),

                            // objective 1
                            m("u","Objective 1 - To increase Gathering  Church membership from the current figure of 50 to 200 in 2016"),

                            // table with arranged content
                            m("table",{class:"bordered striped highlight hoverable"},[
                              m("thead",[
                                m("th","Expected Outcome "),
                                m("th","Specific Objectives: ")
                              ]),
                              m("tbody",[
                                m("td","A broad church membership"),
                                m("td",[
                                  m("ol",[
                                    m("li",[
                                      m("span","To train the Leaders and co-workers on "),m("br"),
                                      m("span","Church management skills")
                                    ]),
                                    m("li","To start training the pastoral team.")
                                  ])
                                ])
                              ])
                            ]),

                            // objective 2
                            m("u","Objective 2 - To groom and nurture the younger generation"),

                            // table with arranged content
                            m("table",{class:"bordered striped highlight hoverable"},[
                              m("thead",[
                                m("th","Expected Outcome "),
                                m("th","Specific Objectives: ")
                              ]),
                              m("tbody",[
                                m("td",[
                                  m("span","A Godly younger generation in all societal institutions,"),m("br"),
                                  m("b","(education, government and other sectors of economy.)")
                                ]),

                                m("td",[
                                  m("ol",[
                                    m("li","To develop dynamic, attractive and friendly programs"),
                                    m("li","to train children workers."),
                                    m("li","Rites of passage – develop a church programme to provide this important service")
                                  ])
                                ])
                              ])
                            ]),

                          // objective 3
                           m("u","Objective 3 - To increase attendance and participation of youths in Gathering Church"),

                            // table with arranged content
                            m("table",{class:"bordered striped highlight hoverable"},[
                              m("thead",[
                                m("th","Expected Outcome "),
                                m("th","Specific Objectives: ")
                              ]),
                              m("tbody",[
                                m("td",[
                                  m("span","A Godly younger generation in Gathering Church,"), //m("br"),
                                  // m("b","(education, government and other sectors of economy.)")
                                ]),

                                m("td",[
                                  m("ol",[
                                    m("li","To intensify our outreach to schools (Primary and secondary), colleges and universities in Joska Town"),
                                    m("li","To establish sport evangelism "),
                                    m("li","To reach the touts and motorcycle riders"),
                                    m("li","To start/ initiate  entertainment and media programmes"),
                                    m("li","To initiate youth services in Gathering Church "),

                                  ])
                                ])
                              ])
                            ]),

                          // objective 4
                           m("u","Objective 4 - To have an effective evangelism and outreach ministry at all departments"),

                            // table with arranged content
                            m("table",{class:"bordered striped highlight hoverable"},[
                              m("thead",[
                                m("th","Expected Outcome "),
                                m("th","Specific Objectives: ")
                              ]),
                              m("tbody",[
                                m("td",[
                                  m("span","Establish a fully equipped evangelistic team for evangelism"), //m("br"),
                                  // m("b","(education, government and other sectors of economy.)")
                                ]),

                                m("td",[
                                  m("ol",[
                                    m("li","To Train all members on evangelism and discipleship"),
                                    m("li","To establish sport evangelism "),
                                    m("li","To have a very strong discipleship department"),
                                    m("li","To train all members on how to use the four spiritual laws")
                                  ])
                                ])
                              ])
                            ]),

// objective 4
                           m("u","Objective 5 -  To establish 10 cells  in 2016 within the church"),

                            // table with arranged content
                            m("table",{class:"bordered striped highlight hoverable"},[
                              m("thead",[
                                m("th","Expected Outcome "),
                                m("th","Specific Objectives: ")
                              ]),
                              m("tbody",[
                                m("td",[
                                  m("span","Cell group ministry Members identify with a cell group"), //m("br"),
                                  // m("b","(education, government and other sectors of economy.)")
                                ]),

                                m("td",[
                                  m("ol",[
                                    m("li","To Train all members on evangelism and discipleship"),
                                    m("li","To Train all members on small group dynamics Church leadership to continuously give cell group topical study"),
                                    m("li","To train members on the use of life studies materials")
                                  ])
                                ])
                              ])
                            ]),

                            m("img",{
                            class:"materialboxed",
                            "data-caption":"Our Sanctuary",
                            width:"250",
                            src:"/app/images/organogram.png",
                            config:function(){
                              $('.materialboxed').materialbox();
                            }
                          }),

                            m(".divider"),

                            m("div",[
                              m("span",[
                                m("span","more goals can be downloaded from here"),

                              ])
                            ])







                        ])
                      ])
                    ])
                  ])
                ]),
                // custom component with unique content per page
                m(footer)

            ]
        }
    }

    // m.mount(document.body,homapage)
