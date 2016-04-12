  var noticeItem = require("./noticeItem")
  var oldNotices = require("./oldNotices")
  var inputComponent = require('../../../__components/forminput');
  module.exports = {
    controller: function() {
      return {
        noticeboardItems: m.request({
          url: apiUrl + "/basic/getNoticeboard/" + m.route.param("uniId"),
          method: "GET"
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
                m.route("/uni/" + m.route.param("uniName") + "/" + m.route.param("uniId") + "/noticeboard/add")
              },
              type: "submit",
              class: "btn waves-effect waves-block waves-light blue right"
            }, "Create New Notice")
          ])
        ]),


        m(".row", [
          m(".col l8", [
            m(".divider"),
            controller.noticeboardItems().noticeboard_items.map(function(item) {
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