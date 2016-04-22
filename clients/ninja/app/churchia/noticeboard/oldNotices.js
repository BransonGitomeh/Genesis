module.exports = {
  controller: function() {
    return {
      notices: m.request({
        method: "post",
        url: apiUrl + "/services",
        data:{
          role:"church",
          cmd:"get_old_notices",
          church_id:m.route.param("churchId")
        }
      })
    }
  },
  view: function(controller) {
    return m("div", [
      controller.notices().old_noticeboard_items.length > 0 ? m("ul", {
        class: "collection with-header"
      }, [
        m("li", {
          class: "collection-header blue white-text"
        }, m("h4", "Past notices")),
        controller.notices().old_noticeboard_items.map(function(notice) {
          return m("li", {
            class: "collection-item"
          }, notice.title, [
            m("a", {
              class: "secondary-content btn-floating blue",
              onclick() {
                m.request({
                  method: "GET",
                  url: apiUrl + "/basic/returnOldNotice/" + notice.id
                }).then(m.route(m.route()))
              }
            }, [
              m("i", {
                class: "mdi-hardware-keyboard-arrow-left"
              })
            ]),
            m("br"),
            m("span", "( shared " + moment.duration(moment(notice.createdAt).diff(moment(new Date())), 'milliseconds').humanize() + " ago" + " )")
          ])
        })

      ]) : ""
    ])

  }
}