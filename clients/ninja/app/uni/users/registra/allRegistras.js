// var myComponent = require("./noticeItem")

var inputComponent = require('../../../../../__components/forminput');
module.exports = {
  controller: function() {
    return {
      registras: m.request({
        url: apiUrl + "/services",
        method: "POST",
        data:{
          role:"registra",
          cmd:"get_all",
          uni_id:m.route.param("uniId")
        }
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
          // console.log(controller.registras().res.registras)
          m("tbody", [
            controller.registras().res.registras.map(function(admin) {
              return m("tr", [
                m("td", admin.identifier),
                // m("td",admin.createdAt),
                m("td", [
                  m("a",{
                    href:"/uni/admin/" + m.route.param("uniId") + "/" + m.route.param("uniId") + "/Registra/" + admin.id,
                    config:m.route,
                  },"more details")
                ])
              ])
            })
          ])
        ])      
      ])
    ])
  }
}