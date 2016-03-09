var infocard = require("../../peices/infocard")
var sidebarItem = require('./sidebarItem');
var links = [
  {text:"Pillars Ministry",url:"/ministries/pillars"},
  {text:"Teeneez Ministry",url:"/ministries/teneez"},
  {text:"Ladies Ministry",url:"/ministries/wemen"},
	{text:"Children Ministry",url:"/ministries/children"},
	{text:"Home-Cells Ministry",url:"/ministries/home-cells"},
	{text:"Youth Ministry",url:"/ministries/youth"},

]

module.exports = {
	view:function(ctrl,args){
			// console.log(args.ministryConfig)
		    return m(".container",[
                    m("br"),
                    // m(".divider"),

                    // m("h3",{class:"center"},args.ministryConfig.head),

                    // m(".divider"),
                    m(".row",[
											m(".col l2 s12",[
													m("ul",{class:"section table-of-contents"},[
										            links.map(function(link){
										              return m(sidebarItem,{
										                text:link.text,
										                link:link.url
										              })
										            })
										      ]),
											]),
                      m(".col l8",[
                        // top pic and video promo
                        m(".row center",[
                          m(".col l7",[
                            m(infocard,{
                              url:args.ministryConfig.cardPicUrl,
                            })
                          ]),
                          m(".col l5",[
                            m("br"),
                            m(".video-container",[
                              m("iframe",{
                                width:"853",
                                height:"480",
                                src:args.ministryConfig.videoUrl,
                                frameborder:"0",
                                allowfullscreen:true
                              })
                            ])
                          ]),
                        ]),

                        m(".row",[
                          m("div",args.ministryConfig.Statement),
                          m("br"),
                          args.ministryConfig.Objective ?
                                                          m("p",[

                                                                m("h6",[
                                                                    m("b","OBJECTIVE :"),
                                                                    m("i",args.ministryConfig.Objective)
                                                                ]),

                                                          ])
                                                          :
                                                      m("span"," "),


                        args.ministryConfig.Verses ?
                          args.ministryConfig.Verses.map(function(Verse){
                            return m("p",[
                              m("b",Verse.header),
                              m("span",Verse.content)
                            ])
                          }) : m("span"),

												args.ministryConfig.Strategies ? m("h5",{class:"center"},"Strategies to achieve the above objective:") : m("span"),

												args.ministryConfig.Strategies ?

													args.ministryConfig.Strategies.map(function(strategy){ //m("li",strategy.head)
														return m("span",[
															m("li",strategy.head),
															strategy.bullets ?
																m("ol",[
																	strategy.bullets.map(function(bullet){
																		return m("li",bullet)
																	})
																])
															: m("span"),
														])
													})
												: m("span")


                        ])


                      ]),

					            //sidebar
                      m(".col l2 s12",[
                        m("b","Ministry Leadership"),
                        m(".divider"),

                        m("ul",{class:"collection"},[
                          args.ministryConfig.leaders ?
  	                        args.ministryConfig.leaders.map(function(leader){
  	                        	return m("li",{class:"collection-item avatar"},[
  		                            m("img",{
  		                              src:"/build/assets/img/icons/worship.jpg",
  		                              class:"responsive-img circle"
  		                            }),
  		                            m("span",{class:"title"},leader.name),
  		                            m("p",leader.position),
  		                            m("p",leader.message)
  		                          ])
  	                        })
                          :m("span","no leaders have been selected currently fro this ministry")

                        ]),

                        //leaders pictures
                        m(".divider"),
                        m("b","Regular meetings"),
                        m(".divider"),

                        m("ul",{class:"collection 12"},[
                         args.ministryConfig.regularMeetings ?
	                        args.ministryConfig.regularMeetings.map(function(meeting){
	                            return m("li",{class:"collection-item avatar"},[
		                            m("img",{
		                              src:meeting.picUrl,
		                              class:"responsive-img circle"
		                            }),
		                            m("p",{class:"title"},meeting.name,[
		                              m("a",{class:"secondary-content"},meeting.time)
		                            ]),
		                            m("p",meeting.occurencePeriod  + (meeting.where ? + " - " + meeting.where : " ")),
		                        ])
		                    })
                          : m("span","No meetings have been scheduled for the " + args.ministryConfig.head )
                        ])


                      ])
                    ])
                  ])
	}
}
