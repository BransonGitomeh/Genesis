var inputComponent = require('../../../__components/forminput');

module.exports = {
  controller: function() {
    return {
      schema: {
        identifier: m.prop(""),
        password: m.prop(""),
        userType: m.prop("")
      },
      //other controller functions here
      onunload: function() {
        $("body").removeClass("blue centered");
        $("html").removeClass("centered");
      }
    }
  },
  view: function(ctrl, args) {
    return m("div", {
      id: "login-page",
      class: "row"
    }, [

      m(".col s12 z-depth-5 hoverable card-panel", {
        id: "login-page",
        config: function() {
          $("body").addClass("blue centered");
          $("html").addClass("centered");
        }
      }, [
        m("form", {
          onsubmit: function(e) {
            e.preventDefault();
            console.log("clicked")
            m.request({
              url: apiUrl + "/services",
              method: "POST",
              data: {
                role: "university",
                cmd: "auth",
                userType: ctrl.schema.userType(),
                uni_id: m.route.param("uniId"),
                username: ctrl.schema.identifier(),
                password: ctrl.schema.password(),
              }
            }).then(function(res) {
              console.log(res)
              if(res.eraro == true){
                alert(res.orig.code)
              }else{
                m.route("/uniadmin/" + m.route.param("uniName") + "/" + m.route.param("uniId"))
              }
            })

          }
        }, [
          m(".row", [
            m(".input-field col s12 l12 center", [
              m("img", {
                src: "http://premiercollege.ac.rw/images/default/logo.png",
                class: "responsive-img valign profile-image-login"
              }),
              // m("p", {
              //   class: "center login-form-text"
              // }, "login"),

              m(".row margin", [

                m(".input-field col s12", [
                  // <i class="material-icons prefix">mode_edit</i>

                  m("select", {
                    config: () => {
                      $('select').material_select();
                    },
                    onchange: (e) => {
                      console.log(e.target.value)
                      ctrl.schema.userType(e.target.value)
                    }
                  }, [

                    m("option", {
                      value: "",
                      disabled: true,
                      selected: true
                    }, "Login as?"),

                    m("option", {
                      value: "admin",
                    }, "Admin"),

                    m("option", {
                      value: "registra",
                    }, "Registra"),

                    m("option", {
                      value: "student",
                    }, "Student")

                  ]),
                  m("label", "Select user type")
                ])

              ]),

            ])
          ]),
          m(".row margin", [
            m(inputComponent, {
              value: ctrl.schema.identifier,
              label: "Email or Phone",
              icon: "mdi-hardware-phonelink prefix",
              type: "text",
              sizes: "s12 m12 l12",
            })
          ]),


          m(".row margin", [
            m(inputComponent, {
              value: ctrl.schema.password,
              label: "Password",
              icon: "mdi-action-lock prefix",
              type: "password",
              sizes: "s12 m12 l12 active",
            })
          ]),

          m(".row", [
            m(".input-field col s12", [
              m("button", {
                class: "btn  waves-effect waves-light col s12 blue",
                type: "submit"
              }, "authenticate me")
            ])
          ])
        ])
      ])
    ])
  }
}