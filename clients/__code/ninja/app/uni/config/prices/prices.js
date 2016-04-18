var inputComponent = require('../../../../../__components/forminput');

var prices = [{
  id: "1",
  text: "price of It"
}, {
  id: "2",
  text: "price of law"
}]

module.exports = {
  controller: function() {
    return {
      // prices:m.request({method:"GET","url:"}),
      unit: m.request({
        url: apiUrl + "/services",
        method: "POST",
        data: {
          role: "unit",
          cmd: "get_prices",
          unit_id: m.route.param("unit_id")
        }
      }),
      schema: {
        price: m.prop()
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
                role: "unit",
                cmd: "add_price",
                unit_id: m.route.param("unit_id"),
                ammount: ctrl.schema.price()
              }
            }).then(m.route(m.route()))
          }
        },
        m(inputComponent, {
          value: ctrl.schema.price,
          label: "Name of new tri-semester",
          icon: "mdi-image-exposure-plus-1 prefix",
          type: "text",
          sizes: "s12 m12 l10",
        }),
        m(".col l2",
          m("br"),
          m(".btn-floating waves-effect waves-light ",
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
          }, "Prices"),
          // m("p", {
          //   class: "task-card-date"
          // }, "Active price is ", m("u", (ctrl.prices().active_tri_semester ? ctrl.prices().active_tri_semester.name : ""))),
        ]),
        ctrl.unit().result.other_prices.map(function(price) {
          console.log(ctrl.unit().result)
          console.log(price.id + " - " + ctrl.unit().result.price)
          return m("li", {
            class: "collection-item " + (price.id === ctrl.unit().result.price ? "grey lighten-2" : ""),
          }, price.ammount, [

            m("a", {
                class: "secondary-content waves-effect waves-light waves-block"
              },
              m("i", {
                class: "mdi-action-trending-up hoverable",
                onclick: () => {
                  m.request({
                    url: apiUrl + "/services",
                    method: "POST",
                    data: {
                      role: "unit",
                      cmd: "make_price_active",
                      unit_id: m.route.param("unit_id"),
                      price_id: price.id
                    }
                  }).then(m.route(m.route()))
                }
              }),

              m("i", {
                class: "mdi-navigation-close hoverable",
                onclick: () => {
                  var q = confirm("are you sure you want to remove this price?... accounts may go off balance for payments made for this price")

                  if (q) {
                    m.request({
                      url: apiUrl + "/services",
                      method: "POST",
                      data: {
                        role: "unit",
                        cmd: "destroy_price",
                        price_id: price.id
                      }
                    }).then(m.route(m.route()))
                  }

                }
              })
            )
          ])
        })
      ])
    ])
  }
}