module.exports = {
  view: function(ctrl, args) {
    return m("div", {
      class: "card-panel row"
    }, [
      m("div", {
        class: "col l6"
      }, [
        m("h5", {
          class: "left"
        }, args.title),
      ]),
      m("div", {
        class: "col l6"
      }, [
        m("br"),
        m("div", {
          class: "right"
        }, "( shared " + moment.duration(moment(args.createdAt).diff(moment(new Date())), 'milliseconds').humanize() + " ago" + " )")
      ]),

      m("div", {
        class: "divider col l12"
      }),

      m("div", {
        class: "col l12"
      }, [
        m("p", args.content)
      ]),

    m("div", {
        class: "divider"
      }),
      m("br"),
      m("div", [
          m("div", {
              class: "col l12"
            }, [
              args.deleteBtn === true ?
              m("span", [
                  //remove
                  m("button", {
                    class: "btn red right",
                    onclick: function() {
                      m.request({
                        url: apiUrl + "/services",
                        method: "POST",
                        data: {
                          role: "church",
                          cmd: "remove_notice",
                          notice_id: args.id
                        }
                      }).then(m.route(m.route()))
                    }
                  }, "remove"),
                  //make old
                  m("button", {
              class: "btn-flat right",
              onclick: function() {
                m.request({
                  url: apiUrl + "/services",
                  method: "POST",
                  data: {
                    role: "church",
                    cmd: "make_notice_old",
                    notice_id:args.id 
                  }
                }).then(m.route(m.route()))
              }
            }, "move to old"),
          ]) : ""

          // m("div",{class:"right"},"weird text")
        ]),
      ])
    ])
  }
}