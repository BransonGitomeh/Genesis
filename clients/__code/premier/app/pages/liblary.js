var navbar = require("../peices/navbar");
var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
var pdfobject = require("../peices/pdfobject");

var working_hours = [
      {timeName:"Weekdays",duration:"8am-9pm"},
      {timeName:"Saturdays",duration:"8am-4pm"},
      {timeName:"Sundays and Public Holidays",duration:"Closed"}
];

var e_journal_sourses = [
      {
        url:"http://www.jstor.org/",
        name:"Jstor",
        explanation:"JSTOR is a digital library of academic journals, books, and primary sources."
      },
      {
        url:"http://www.emeraldinsight.com/",
        name:"Emerald Insight",
        explanation:"Journals in management and library and information services, engineering, applied science and technology."
      },
      {
        url:"http://www.ebscohost.com/",
        name:"EBS.co host",
        explanation:"Online Research Database"
      },
       {
        url:"http://www.sciencedirect.com/",
        name:"Science Direct",
        explanation:"ScienceDirect is the world's leading source for scientific, technical, and medical research. Explore journals, books and articles."
      }

];


module.exports = {


  view:function(ctrl){
    return m(".app",[
       m.component(navbar),

       m(".row",[
         //collumn 1 , the sidebar
         m(".col l3 hide-on-med-and-down",[
           m.component(sidebar)
         ]),
         //the sider and everything else
         m(".col l9",[
          //sections in the lib page
          m("section",[
              m("h3",{class:"center blue-text"},"Library"),
              m("p","Welcome to our Library, the Library is accessable to users who can freely sample books from the shelves for the purpose of providing accurate, up to date information, sources and resources which support teaching, training, learning and research activities in the college.")
          ]),

          m(".divider"),

          m("section",[
              m("h5",{class:"center"},"Working Hours"),
              console.log(working_hours),

              m("table",{class:"striped"},[
                m("thead",[
                  m("th","TIME"),
                  m("th","DURATION")
                ]),

                m("tbody",[
                  working_hours.map(function(hour){
                    return m("tr",[
                      m("td",hour.timeName),
                      m("td",hour.duration)
                    ])
                  })
                ])
              ]),
          ]),

          m(".divider"),

          // online books
          m("section",[
              m("h5",{class:"center"},"EBOOKS"),
              m("p","E-books Resources, Access over 2 million Electronic books online from ",[
                m("a[href='http://en.bookfi.net/']","Bookfi.net")
              ])
          ]),

          m(".divider"),

          // E-Journals
          m(".col l6",[
              m("section",[
                m("h5",{class:"center"},"E-Journals"),
               m("table",{class:"striped"},[
                  m("thead",[
                    m("th","Source"),
                    m("th","Reason For Recomendation")
                  ]),

                  m("tbody",[
                    e_journal_sourses.map(function(source){
                      return m("tr",[
                        m("td",[
                          m("a", {href:source.url}, source.name)
                        ]),
                        m("td",source.explanation)
                      ])
                    })
                  ])
                ]),
            ]),

            m(".divider"),

            // online books
            m("section",[
                m("h5",{class:"center"},"External Links"),
                m("p","External Links to other E-content will also be uploaded soon.")
            ]),

            m(".divider"),

           // online books
            m("section",[
                m("h5",{class:"center"},"Our Library Rules and Regulations"),
                m("p","The Library's prime purpose is to provide information services and materials to the PECDETC community. These library rules and regulations have been formulated to promote fair access and use of library resources and facilities. They shall apply to all library users including PECDETC staff.")
            ]),

            m(".divider"),

           m.component(pdfobject,{
               name:"Library_Rules_and_Regulations.pdf"
           }),

          ]),
          m(".col l6",[

          ])
           
          
         ])

       ]),

       m.component(footer)

     ])

  }
}
