module.exports = {
  view:function(ctrl,args){
    return m("li",{class:"user-details " + args.color + " darken-3"},[
      m(".row",[
        //pic image
        m(".col col s4 m4 l4",[
          m("img",{src:"http://www.imran.com/xyper_images/icon-user-default.png", class:"circle responsive-img profile-image"})
        ]),
        //dropdown and roal
        m(".col col s8 m8 l8 black-text",[
          m("a",{
            class:"btn-flat profile-dropdown-button waves-effect waves-light white-text profile-btn",
            config:function(){
              $('.profile-dropdown-button').dropdown({
                  inDuration: 300,
                  outDuration: 225,
                  constrain_width: false, // Does not change width of dropdown to that of the activator
                  hover: true, // Activate on hover
                  gutter: 0, // Spacing from edge
                  belowOrigin: true, // Displays dropdown below the button
                  alignment: 'left' // Displays dropdown with edge aligned to the left of button
              });
            },
            "data-activates":"profile-dropdown"
          },"Branie",[
            m("i",{class:"mdi-navigation-arrow-drop-down right"})
          ]),

          m("ul",{
            id:"profile-dropdown",
            class:"dropdown-content",
            style:"width: 128px; position: absolute; top: 57px; left: 101.234px; opacity: 1; display: none;"
          },[
            m("li",[
              m("a",[
                m("i",{class:"mdi-action-face-unlock"})
              ],"Profile")
            ]),
            m("li",[
              m("a",[
                m("i",{class:"mdi-action-settings"})
              ],"Settings")
            ]),

            m("li",{class:"divider"}),

            m("li",[
              m("a",[
                m("i",{class:"mdi-hardware-keyboard-tab"})
              ],"Log out")
            ]),

          ]),

          //roal
          m("p",{class:"user-roal white-text"},"Administrator")
        ])
      ])
    ])
  }
}
