var navitem = require('./navitem')
// var JD = require('../../../../../__components/libs/jollyData');

module.exports = {
  view: function(args){
    // settings for the nav-bar
    var navColor = "blue";
    var dropIcon="material-icons right"
    //dynamic data
    var dropdowns = [{
      "Academics":[{
                "links":[
                  { title:"Department of Early Childhood Development", url:"/academics/ecd",direction:'left' },
                  { title:"Department of Examinations", url:"/academics/examinations",direction:'left' },
                  { title:"Academic Calender", url:"/academics/calender",direction:'left' },
                  { title:"Library", url:"/academics/liblary",direction:'left' },
                  { title:"Admissions", url:"/academics/admissions",direction:'left' },

                ],
                "settings":{
                  direction:"left"
                }
          }],
      "Operations":[{
                    "links":[
                      { title:"Governance", url:"/operations/governance",direction:'left' },
                      { title:"Service Charter", url:"/operations/service_charter",direction:'left' },
                      { title:"Human Resource Department", url:"/operations/HR",direction:'left' },
                      { title:"Finance Department", url:"/operations/finance",direction:'left' },
                      { title:"Downloads", url:"/operations/downloads",direction:'left' }
                    ],
                    "settings":{
                      direction:"left"
                    }
          }],

      "Proffessional_Development":[{
                        "links":[
                          { title:"Continuous Teacher Development Courses", url:"/proffessional_development/ctdc",direction:'left' },
                          { title:"Short Courses", url:"/proffessional_development/shortcourses",direction:'left' },
                          { title:"Bronchure", url:"/proffessional_development/bronchure",direction:'left' }

                        ],
                        "settings":{
                          direction:"left"
                        }
          }],

      "Portals":[{
                          "links":[
                              { title:"Student", url:"/auth/Student/pass-1/",direction:'left' },
                              { title:"Staff", url:"/auth/Staff/pass-1/",direction:'left' },
                              { title:"Admin", url:"/uniLogin/" + appName + "/" + appId,direction:'left' }
                           ],
                            "settings":{
                              direction:"right"
                            }
          }],

    }]


    var navItems = [];
    var sideItems = [];
    return m("header",[
        m('nav',[
          m("div",{class:"nav-wrapper " + navColor},[ //where settings of the nav-bar go


            m("ul",[
              m("a",{class: "brand-logo hide-on-large-only"},"Premier ECDE Teachers college"),
      
              m("a",{
                class:"button-collapse waves-effect waves-light",
                "data-activates":"side-nav",
                alt:"menu",
                config:function(){
                  $(".button-collapse").sideNav();
                }
              },[
                m("i",{
                  class:"small mdi-navigation-menu",
                  alt:"menu"
                })
              ]),
       

              m("ul",{class:"hide-on-med-and-down"},[

                  m(navitem,{link:{
                      title:"Welcome",
                      direction:"left",
                      url:"/"
                    }
                  }),
                  console.log(dropdowns),
                  //create all the links on the navbar using the object on the top
                   // dropdowns.map(function(newdropTitles){
                   //   for(dropTitle in newdropTitles){

                   //    //push the m(links) generated into an array that will be returned later
                   //   navItems.push(
                   //     m("li",{class:newdropTitles[dropTitle][0].settings.direction},[
                   //       m("a",{
                   //          class:'dropdown-button',
                   //          config:function(){
                   //            $('.dropdown-button').dropdown({
                   //               inDuration: 300,
                   //               outDuration: 225,
                   //               constrain_width: false, // Does not change width of dropdown to that of the activator
                   //               alignment: 'left',
                   //               hover: true, // Activate on hover
                   //               gutter: 0, // Spacing from edge
                   //               belowOrigin: true // Displays dropdown below the button
                   //             });
                   //          },
                   //          "data-activates":dropTitle
                   //        },[
                   //          m("i",{class:"mdi-navigation-arrow-drop-down right"}),
                   //          m("span",dropTitle)
                   //        ])
                   //     ]),

                   //     m("ul",{ //wrapper arround the li links
                   //       class:"dropdown-content",
                   //       id:dropTitle
                   //     },[
                   //       newdropTitles[dropTitle][0].links.map(function(droplink){ //dynamic links with a's inside
                   //      //  console.log(droplink.url);
                   //           return m("li",{
                   //             class:(m.route() === droplink.url ? 'active': '')
                   //           },[
                   //             m("a",{
                   //               class:(m.route() === droplink.url ? 'active': ''),
                   //               href:droplink.url,
                   //               config:m.route
                   //             }, droplink.title)
                   //           ]);
                   //         })
                   //     ])
                   //     );

                   //   }
                   //   //return the array containing all the links in the dom
                   //   return navItems
                   // }),


                   m(navitem,{link:{
                     title:"Contact Us",
                     direction:"right",
                     url:"/contactus"
                   }}),

                   m(navitem,{link:{
                     title:"Noticeboard",
                     direction:"right",
                     url:"/noticeboard/" + appId
                   }})

                 ])
             ]),

             m("ul",{class:"side-nav",id:"side-nav"},[
                m.component(navitem,{link:{
                  title:"Welcome",
                  url:"/"
                }}),

               // dropdowns.map(function(newdropTitles){
               //   for(dropTitle in newdropTitles){
               //     newdropTitles[dropTitle][0].links.map(function(droplink){

               //        sideItems.push(
               //          m.component(navitem,{link:{
               //            title:droplink.title,
               //            url:droplink.url
               //          }})
               //        )
               //     })
               //   }

               //   return sideItems
               // }),


              //  m.component(navitem,{link:{
              //    title:"home",
              //    url:"/"
              //  }}),
             ]),
           ])
         ])
       ])
  }
}
