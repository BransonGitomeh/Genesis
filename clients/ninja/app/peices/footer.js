var fbPagePlugin = require('../../../__components/plugins/fbPage')

module.exports={
        view:function(){
            return m("footer",{class:"page-footer " + primaryColor},[
                m(".container",[
                    m(".row center",[

                        m(".col l3 s12 white-text",[
                            m("h5",{class:"center"},"Help The Gathering Church Grow"),

                            m("p","We hope you have enjoyed Our Church! If you feel The Gathering Church has helped you out and want to support Our team, send us over a donation! Any amount would help support and continue development on this Church and is greatly appreciated."),

                            m("a",{class:"center btn waves-effect waves-light red " + color,href:"/onlineChurch/giving",config:m.route},"Give")
                        ]),

                        m(".col l3 s12 white-text",[
                            m("h5",{class:"center"},"Join Our Discussion"),

                            m("p","At the gathering church we love hearing the voices of our congregation, please join us and tell us what you feel, or what you want for the church"),

                            m("a",{class:"btn waves-effect waves-light red " + color, href:"/onlineChurch/blog",config:m.route},"Blog")

                        ]),

                        m(".col l3 s12 white-text",[
                            m("h5",{class:"center"},"Affiliations"),
                            m("a",{href:"http://jiarelief.org/"},[
                                m("img",{class:"btn waves-effect waves-light red " + color, src:"http://jiarelief.org/wp-content/themes/jia/images/jia.png"})
                            ])

                        ]),

                        m(".col l3 s12 white-text",[
                            // m("h5",{class:"center"},"Connect with us
                            m("br"),
                            m(fbPagePlugin,{
                              page:"https://web.facebook.com/Gathering-Church-617022945064040/?fref=ts",
                              width:"300",
                              height:"300",
                              hideCover:"false",
                              smallHeader:"true",
                              facePile:"true",
                              showPosts:"false",
                              tabs:"timeline,events,messages"
                            })
                        ]),

                    ])
                ]),

                m(".footer-copyright container",[
                        "Copyright © " + config.settings.installationYear + "-" + config.settings.currentYear + ", All rights reserved." + config.profile.churchName,[
                            m("span",{class:"right"}," < SSC: 0.1.0 />")
                        ]
                ])
            ])
        }
    }
