var item = require('./todo-list/item');
var card = require("./card")

module.exports = {
      controller: () => {
            return {
                  stats: m.request({
                        method: "post",
                        url: apiUrl + "/services",
                        data: {
                              role: "app",
                              cmd: "get_stats"
                        }
                  })
            }
      },
      view: (ctrl, args) => {
            var stats = ctrl.stats()
            return m(".row", [
                  m(".card-stats", [

                        m(".row", [
                              m(card, {
                                    title: "All requests",
                                    number: stats.requests,
                                    color: "purple"
                              }),

                              m(card, {
                                    title: "Universities",
                                    number: stats.universities,
                                    color: "purple darken-2"
                              }),

                              m(card, {
                                    title: "Churches",
                                    number: stats.churches,
                                    color: "purple darken-3"
                              })
                        ])
                  ])
            ])
      }
}