var inputComponent = require('../../../../../__components/forminput');

var levels = [{
  id: "1",
  text: "diploma"
}, {
  id: "2",
  text: "digree"
}]

module.exports = {
  controller: function() {
    return {
      // schools:m.request({method:"GET","url:"}),
      pay_channels: m.request({
        url: apiUrl + "/services",
        method: "POST",
        data: {
          role: "finance",
          cmd: "get_payment_channels_in_a_uni",
          uni_id: m.route.param("uniId")
        }
      }),
      schema: {
        channel_name: m.prop(),
        channel_number: m.prop(),
        location: m.prop()
      }
    }
  },
  view: function(ctrl, args) {
    return m("div", {
      class: "col l4"
    }, [
      m("form", {
          class: "row",
          onsubmit: function(e) {
            e.preventDefault()
            m.request({
              url: apiUrl + "/services",
              method: "POST",
              data: {
                role: "finance",
                cmd: "create_payment_chanel",
                channel_name: ctrl.schema.channel_name(),
                uni_id: m.route.param("uniId"),
                channel_number: ctrl.schema.channel_number(),
                location: ctrl.schema.location()
              }
            }).then(m.route(m.route()))
          }
        },
        m(inputComponent, {
          value: ctrl.schema.channel_name,
          label: "Name of new Channel",
          type: "text",
          sizes: "s12 m12 l12",
        }),

        m(inputComponent, {
          value: ctrl.schema.channel_number,
          label: "Unique Number ie. bank account number",
          type: "text",
          sizes: "s12 m12 l12",
        }),

        m(inputComponent, {
          value: ctrl.schema.location,
          label: "location of payment, mobile/stateName",
          type: "text",
          sizes: "s12 m12 l10",
        }),

        m(".col l2",
          m("br"),
          m("button", {
              type: "submit",
              class: "btn-floating waves-effect waves-light "
            },
            m("i", {
              class: "mdi-content-send blue"
            })
          )
        )
      ),

      m("ul", {
        class: "collection with-header"
      }, [
        m("li", {
          class: "collection-header blue white-text"
        }, [
          m("h4", {
            class: "task-card-title"
          }, "Payment channels")
        ]),
        ctrl.pay_channels().result.map(function(channel) {
          return m("a", {
            class: "collection-item",
          }, channel.name + " - " + channel.channel_number + " - " + channel.location)
        })

      ])
    ])
  }
}