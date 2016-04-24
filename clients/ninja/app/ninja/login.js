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
        $("body").removeClass("purple centered");
        $("html").removeClass("centered");
      }
    }
  },
  view: function(ctrl, args) {
    return m("div",{
      id:"login-page",
      class:"row"
    },[

    m(".col s12 z-depth-5 hoverable card-panel", {
      id: "login-page",
      config: function() {
        $("body").addClass("purple centered");
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
              role:"core",
              cmd:"auth",
              identifier: ctrl.schema.identifier(),
              password: ctrl.schema.password(),
            }
          }).then(function(res) {
            if(res){
              m.route("/home")
            }
          })

        }
      }, [
      
        m(".row", [
          m(".input-field col s12 l12 center", [
            args ?
            m("img", {
              src: args ? args.holderPic : "",
              class: "responsive-img valign profile-image-login"
            })
            :"",
            m("p", {
              class: "center login-form-text"
            }, "login")
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
            sizes: "s12 m12 l12",
          })
        ]),

        m(".row", [
          m(".input-field col s12", [
            m("button", {
              class: "btn  waves-effect waves-light col s12 purple",
              type: "submit"
            }, "authenticate me")
          ])
        ])
      ])
    ])
    ])
  }
}