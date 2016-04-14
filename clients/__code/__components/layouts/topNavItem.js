module.exports = {
  view:function(ctrl,args){
    return m("li",{class:args.url === m.route() ? "active" : " "},[
      m("a",{
        class:"waves-effect waves-block waves-light dropdown-button",
        href:args.url,
        config:m.route,
        "data-activates":args.text,
        onclick:()=>{
          // alert("backing")
          (typeof(args.onClick) === "function" ? args.onClick() : "")
        }
      },[
        args.icon ? m("i",{class:args.icon}) : ""
      ],args.text ? args.text : ""),


      args.drops ? m("ul",{
        id:args.text,
        class:"dropdown-content",
        config:function(){
          $('.dropdown-button').dropdown({
              inDuration: 300,
              outDuration: 225,
              constrain_width: false, // Does not change width of dropdown to that of the activator
              hover: true, // Activate on hover
              gutter: 0, // Spacing from edge
              belowOrigin: true, // Displays dropdown below the button
              alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
          );
        }
      },[
        args.drops.map(function(drop){
          return m("li",{
            class:drop.url === m.route() ? " active " : ""
          },[
            m("a",{
              class:"waves-effect waves-block waves-light",
              href:drop.url,
              config:m.route,
            },[
              m("i",{class:drop.icon})
            ],drop.text ? drop.text : "")
          ])
        })
      ]) : ""
    ])
  }
}
