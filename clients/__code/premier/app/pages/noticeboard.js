var noticeboard_item = require("../../../ninja/app/uni/noticeItem")
var oldNotices = require("../../../ninja/app/uni/oldNotices")
module.exports = {
    controller: function() {
        var items = m.request({
            method: "GET",
            url: apiUrl + "/basic/getNoticeboard/" + m.route.param("uniId"),
            background: true,
            initialValue: {
                noticeboard_items: []
            }
        });
        items.then(m.redraw);
        return {
            items: items
        }
    },
    view: function(ctrl, args) {
        return m(".noticeboard", [
            m(".row", [
                ctrl.items().noticeboard_items.length > 0 ?
                m(".col l8", [
                    ctrl.items().noticeboard_items.reverse().map(function(item) {
                        return m(noticeboard_item, {
                            id: item.id,
                            title: item.title,
                            content: item.content,
                            createdAt: item.createdAt,
                            deleteBtn: false
                        })
                    })
                ])

                : m(".loading center", [
                    m("br"),
                    m("br"),
                    m("br"),
                    m("br"),
                    m("br"),
                    m("br"),
                    m("br"),
                    m("br"),
                    m("br"),

                    m(".preloader-wrapper big active", [
                        m(".spinner-layer spinner-blue-only", [
                            m(".circle-clipper left", [
                                m(".circle")
                            ]),
                            m(".gap-patch", [
                                m(".circle")
                            ]),
                            m(".circle-clipper right", [
                                m(".circle")
                            ])
                        ])
                    ])

                ]),

                m(".col l4", [
                    m.component(oldNotices),
                ])
            ])
        ])
    }
}