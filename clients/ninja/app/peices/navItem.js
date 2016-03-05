module.exports = {
        view:function(ctrl,args){
            return m("li",{
              class:args.direction + " dropdown-button " + (m.route() === args.url ? "active" : ""),
              "data-activates":args.dropId
          },[
                m("a",{
                  href:args.url,
                  config:m.route
                },args.name,[
                  (args.dropId ? m("i",{class:"mdi-navigation-arrow-drop-down right"})  : m("span"))
                ])
            ])
        }
    }
