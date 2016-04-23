// var myComponent = require("./noticeItem")

var inputComponent = require('../../../../../__components/forminput');
module.exports = {
  controller: function() {
    return {
      admins: m.request({
        url: apiUrl + "/basic/getAdmins/" + m.route.param("uniId"),
        method: "GET"
      }),
      revokedAdmins: m.request({
        url: apiUrl + "/basic/getRevokedAdmins/" + m.route.param("uniId"),
        method: "GET"
      }),
      schema: {
        userIdentifier: m.prop(""),
        userUsername: m.prop(""),
        userPassword: m.prop(""),
        confirmPassword: m.prop("")
      }
    }
  },
  view: function(controller, atrrs) {
    return m(".row", [
      m(".col l12", [
        m("br"),
        //all admins
        // m("div", "Current Registra's"),
        m("a", {
          class: "btn blue right",
          href: "/uni/registra/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/add",
          config: m.route
        }, "add registra"),
        m("table", [

          m("thead", [
            m("tr", [
              m("th", "email"),
              // m("td","createdAt")
            ])
          ]),

          m("tbody", [
            controller.admins().map(function(admin) {
              return m("tr", [
                m("td", admin.identifier),
                // m("td",admin.createdAt),
                m("td", [
                  m("button", {
                    class: "btn-flat waves-effect waves-cyan waves-block hoverable",
                    onclick: function() {
                      m.request({
                        url: apiUrl + "/basic/revokeAdmin/" + m.route.param("uniId"),
                        method: "POST",
                        data: {
                          userId: admin.id
                        }
                      }).then(function() {
                        m.route(m.route())
                      })
                    }
                  }, "revoke admin rights")
                ]),
                m("td", [
                  m("button", {
                    class: "btn-flat waves-effect waves-cyan waves-block hoverable"
                  }, "View activity")
                ])
              ])
            })
          ])
        ])      
      ])
    ])
  }
}