var footer = require("../../../peices/footer")
var topbar = require("../../../peices/topbar")
var sidebar = require('./sidebar');

var verses = [
  {
    head:"2 Timothy 3:16",
    content:"The Bible to be the inspired word of God"
  },
  {
    head:"Deut 6:4; Mark 12:29",
    content:"In one God, is both holy spirit and became a man, Jesus"
  },
  {
    head:"1 Timothy 3:16; Mathew 1:23",
    content:"In the virgin birth and Diety of jesus christ, that he was God and Man"
  },
  {
    head:"Ephesians 2:8-9",
    content:"In sinners saved by Gods grace and not human efforts"
  },
  {
    head:"Mathew 28:19;Acts 2:38; 10-47-48",
    content:"In repentance and water baptism for the removal of sin - that its Gods plan for every believer to be baptised in water"
  },
  {
    head:"Mark 16:17,Acts 2:1-5; 19-1-6",
    content:"In the rebirth of makind by being field with the holy Spirit-that speaking in tongue is evidence of this initial spirit birth"
  },
  {
    head:"1 john 5:4",
    content:"That every believer is given power to live a victorios, Overcoming life"
  },
  {
    head:"Hebrews 12:14",
    content:"That every believer is powered to live in holiness"
  },
  {
    head:"Psalms 47:1",
    content:"In vibrant singing and an outward expression of worship"
  },
  {
    head:"1 corrinthians 12:14",
    content:"in the operation of the gifts of the holy spirit and corporately"
  },
  {
    head:"Mark 16:18; James 5:14; 1 Peter 2:24",
    content:"That devine healing through the redemptive work of christ is available for every believer"
  },
  {
    head:"Luke 22:17-20; 1 corrinthians 11:28-32",
    content:"in the table of the lord commonly called communion or the lord's supper, for believer"
  },
  {
    head:"John 5:24; John 3:16; Mark 9-43-48; revelation 20:10-15",
    content:"In Eternal Life for believers and eternal Punishment for unbelievers"
  },
]

module.exports = {
        view:function(){
            return [
              m(topbar,{
                fixed:true
              }),
                // m("br"),


                m(".row",[

                  m(".col l2",[
                    // m("p",{class:"flow-text"},"What we teach"),
                    m(sidebar)
                  ]),

                  m(".col l10 card-panel",[
                      m("h1",[
                        m("b","Our Statement Of faith")
                      ]),

                      verses.map(function(verse){
                        return m("span",[
                          m("h5",verse.head),
                          m("p",verse.content)
                        ])
                      })
                  ])

                ]),
                m(footer)
            ]
        }
}
