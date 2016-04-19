var navitem = require('./navitem')
var navdrop = require('./navdrop')

module.exports = {
  view: function(args) {
    // settings for the nav-bar
    var navColor = "blue";
    var dropIcon = "material-icons right"
      //dynamic data
    var navbar = [{
      "title": "Academics",
      direction: "left",
      drops: [{
        title: "Department of Early Childhood Development",
        url: "/academics/ecd"
      }, {
        title: "Department of Examinations",
        url: "/academics/examinations"
      }, {
        title: "Academic Calender",
        url: "/academics/calender"
      }, {
        title: "Library",
        url: "/academics/liblary"
      }, {
        title: "Admissions",
        url: "/academics/admissions"
      }]
    }, {
      title: "Operations",
      direction: "left",
      drops: [{
        title: "Governance",
        url: "/operations/governance"
      }, {
        title: "Service Charter",
        url: "/operations/service_charter"
      }, {
        title: "Human Resource Department",
        url: "/operations/HR"
      }, {
        title: "Finance Department",
        url: "/operations/finance"
      }, {
        title: "Downloads",
        url: "/operations/downloads"
      }]
    }, {
      title: "Proffessional_Development",
      direction: "left",
      drops: [{
        title: "Continuous Teacher Development Courses",
        url: "/proffessional_development/ctdc"
      }, {
        title: "Short Courses",
        url: "/proffessional_development/shortcourses"
      }, {
        title: "Bronchure",
        url: "/proffessional_development/bronchure"
      }]
    }, {
      title: "Portals",
      direction: "right",
      drops: [{
        title: "Student",
        url: "/auth/Student/pass-1/",
      }, {
        title: "Staff",
        url: "/auth/Staff/pass-1/",
      }, {
        title: "Admin",
        url: "/uniLogin/" + appName + "/" + appId,
      }]
    }]

    var navItems = [];
    var sideItems = [];
    return m("header", [
      m('nav', [
        m("div", {
          class: "nav-wrapper " + navColor
        }, [ //where settings of the nav-bar go


          m("ul", [
            m("a", {
              class: "brand-logo hide-on-large-only"
            }, "Premier ECDE Teachers college"),

            m("a", {
              class: "button-collapse waves-effect waves-light",
              "data-activates": "side-nav",
              alt: "menu",
              config: function() {
                $(".button-collapse").sideNav();
              }
            }, [
              m("i", {
                class: "small mdi-navigation-menu",
                alt: "menu"
              })
            ]),


            m("ul", {
              class: "hide-on-med-and-down"
            }, [

              m(navitem, {
                link: {
                  title: "Home",
                  direction: "left",
                  url: "/"
                }
              }),

              navbar.map((item) => {
                return m(navdrop, {
                  title: item.title,
                  direction: item.direction,
                  url: item.url,
                  drops: item.drops
                })
              }),

              m(navitem, {
                link: {
                  title: "Contact Us",
                  direction: "right",
                  url: "/contactus"
                }
              }),

              m(navitem, {
                link: {
                  title: "Noticeboard",
                  direction: "right",
                  url: "/noticeboard/" + appId
                }
              })

            ])
          ]),

          m("ul", {
            class: "side-nav",
            id: "side-nav"
          }, [
            m.component(navitem, {
              link: {
                title: "Welcome",
                url: "/"
              }
            })
          ])
        ])
      ])
    ])
  }
}