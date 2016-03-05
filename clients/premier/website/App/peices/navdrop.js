var navdrop = {
  view:function(){
    var links = [
      { title:"Home", url:"/home",direction:'left'},
      { title:"Academics", url:"/love", direction:'left'},
      { title:"Operations", url:"/love", direction:'left'},
      { title:"Proffesional Development", url:"/love", direction:'left'},

      { title:"caroline", url:"/love", direction:'right'},
      { title:"Contact Us", url:"/contactus", direction:"right" },
    ];

    return m("li",[
      m("a[data-activates='dropdown2']",{
        class:'dropdown-button',
        config:function(){
          $('.dropdown-button').dropdown({
             inDuration: 300,
             outDuration: 225,
             constrain_width: false, // Does not change width of dropdown to that of the activator
             alignment: 'left',
             hover: true, // Activate on hover
             gutter: 0, // Spacing from edge
             belowOrigin: true // Displays dropdown below the button
           });
        }
      },"Other link")
    ]),

    m("ul[id='dropdown2']",{class:"dropdown-content"},[
      links.map(function(link){
        return m("li",[
          m("a",{
            href:link.url, config:m.route
          }, link.title)
        ]);
     })
    ])
  }
}
