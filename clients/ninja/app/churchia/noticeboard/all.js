  var noticeItem = require("./noticeItem")
  var oldNotices = require("./oldNotices")
  var inputComponent = require('../../../../__components/forminput');
  module.exports = {
    controller: function() {
      return {
        noticeboardItems: m.request({
          url: apiUrl + "/services",
          method: "Post",
          data:{
            role:"church",
            cmd:"get_notices",
            church_id:m.route.param("churchId")
          }
        }),
        schema: {
          title: m.prop(""),
          content: m.prop("")
        }
      }
    },
    view: function(controller, atrrs) {
      return m("div", [
        m("nav", [
          m(".nav-wrapper blue", [
            m(".col s6", [
              m("a", {
                class: "breadcrumb"
              }, "Dashboard"),
              m("a", {
                class: "breadcrumb"
              }, "Noticeboard")
            ])
          ])
        ]),

        m(".row", [
          m(".col l12", [
            m("br"),
            m(".flow-text left", "Current Noticeboard Items"),

            m("button", {
              onclick: () => {
                m.route( m.route() + "/new" )
              },
              type: "submit",
              class: "btn waves-effect waves-block waves-light blue right"
            }, "Create New Notice")
          ])
        ]),


        m(".row", [
          m(".col l8", [
            m(".divider"),
            controller.noticeboardItems().result.map(function(item) {
              return m(noticeItem, {
                id: item.id,
                title: item.title,
                content: item.content,
                args: item.createdAt,
                deleteBtn: true
              })
            }),
            // m("div","branson")
          ]),

          m(".col l4",
            m(".divider"),
            m(oldNotices)
            // m("div","awesome")
          )
        ])
      ])
    }
  }