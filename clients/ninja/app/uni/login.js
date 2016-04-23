var inputComponent = require('../../../__components/forminput');

module.exports = {
  controller: function() {
    return {
      schema: {
        identifier: m.prop(""),
        password: m.prop("")
      },
      //other controller functions here
      onunload: function() {
        $("body").removeClass("cyan centered");
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
          $("body").addClass("cyan centered");
          $("html").addClass("centered");
        }
      }, [
        m("form", {
          onsubmit: function(e) {
            e.preventDefault();
            console.log("clicked")
            m.request({
              url: apiUrl + "/basic/loginUserToUni/" + m.route.param("uniId"),
              method: "POST",
              data: {
                identifier: ctrl.schema.identifier(),
                password: ctrl.schema.password(),
              }
            }).then(function(res) {
              console.log(res)
              var uniName = m.route.param("uniName")
              if (res.result === true) {

                console.log(res)
                m.route("/uniadmin/" + uniName + "/" + m.route.param("uniId"))
              } else {
                alert(res.message)
              }

              // if(res.result === true){
              //    cosole.log("im gonna go in successfully")
              // }else{
              //   console.log(res.result)
              // }
            })

          }
        }, [
          m(".row", [
            m(".input-field col s12 l12 center", [
              m("img", {
                src: args.holderPic,
                class: "responsive-img valign profile-image-login"
              }),
              m("p", {
                class: "center login-form-text"
              }, "login"),
              // <div class="input-field col s12">
              //     <select>
              //     <option value="" disabled selected>Choose your option</option>
              //     <option value="1">Option 1</option>
              //     <option value="2">Option 2</option>
              //     <option value="3">Option 3</option>
              //   </select>
              //   <label>Materialize Select</label>
              // </div>

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

            m(".input-field col s12", [
              m("select", [

                m("option", {
                  value: "",
                  disabled: true,
                  selected: true
                }, "Login as?"),

                m("option", {
                  value: "1",
                  disabled: true,
                  selected: true
                }, "Admin")

              ])
            ])

          ]),
          
          m(".row margin", [
            m(inputComponent, {
              value: ctrl.schema.password,
              label: "Password",
              icon: "mdi-action-lock prefix",
              type: "password",
              sizes: "s12 m12 l12",
            })
          ]),

          m(".row", [
            m(".input-field col s12", [
              m("button", {
                class: "btn  waves-effect waves-light col s12 cyan",
                type: "submit"
              }, "authenticate me")
            ])
          ])
        ])
      ])
    ])
  }
}