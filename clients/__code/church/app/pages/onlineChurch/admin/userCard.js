module.exports = {
  view:function(){
    return m("li",{class:"user-details blue darken-3"},[
      m(".row",[
        //pic image
        m(".col col s4 m4 l4",[
          m("img",{src:"http://www.imran.com/xyper_images/icon-user-default.png", class:"circle responsive-img profile-image"})
        ]),
        //dropdown and roal
        m(".col col s8 m8 l8 black-text",[
          m("a",{
            class:"btn-flat dropdown-button waves-effect waves-light white-text profile-btn",
            config:function(){
              $(".dropdown-button").dropdown( {
                inDuration: 300,
                outDuration:125,
                constrain_width:!0,
                hover:!1,
                alignment:"left",
                gutter:0,
                belowOrigin:!0
              })
            }
          },[
            m("span",{class:"white-text"},"Admin1 name"),
            m("i",{class:"mdi-navigation-arrow-drop-down right"})
          ]),

          //roal
          m("p",{class:"user-roal white-text"},"Administrator")
        ])
      ])
    ])
  }
}
