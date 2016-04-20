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
                  }),
                  data_grapgh: m.request({
                        method: "post",
                        url: apiUrl + "/services",
                        data: {
                              role: "app",
                              cmd: "get_requests"
                        }
                  })
            }
      },
      view: (ctrl, args) => {
            var stats = ctrl.stats()
            return m(".row", [

                  m("div", {
                        class: "row"
                  }, [
                        m("div", {
                              id: "column_chart_lined",
                              style: "width:50%; height:400px;",
                              class: "col l6",
                              config: () => {
                                    var chart1 = new Highcharts.Chart({
                                          chart: {
                                                renderTo: "column_chart_lined",
                                                type: 'column'
                                          },
                                          title: {
                                                text: 'Perf gragh'
                                          },
                                          xAxis: {
                                                type: "datetime",
                                                categories: ctrl.data_grapgh().creaedAts,
                                                labels: {
                                                      enabled: false
                                                }
                                          },
                                          yAxis: {
                                                title: {
                                                      text: 'Process duration'
                                                }
                                          },
                                          series: [{
                                                name: 'Requests (' + ctrl.data_grapgh().durations.length + ' - time-ascending)',
                                                data: ctrl.data_grapgh().durations
                                          }]
                                    })
                              }
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
                  ]),
                  m(".card-stats", [

                        m(".row", [
                              // m(card, {
                              //       title: "All requests",
                              //       number: stats.requests,
                              //       color: "purple"
                              // }),

                              // m(card, {
                              //       title: "Universities",
                              //       number: stats.universities,
                              //       color: "purple darken-2"
                              // }),

                              // m(card, {
                              //       title: "Churches",
                              //       number: stats.churches,
                              //       color: "purple darken-3"
                              // })
                        ])
                  ]),

            ])
      }
}