module.exports = {
  view: function(ctrl, attrs) {
    // console.log(attrs.link.title);
    return m("li", {
      class: 'waves-effect waves-block waves-blue ' + attrs.link.direction + " " + (m.route() === attrs.link.url ? 'active' : '')
    }, [
      m("a", {
        href: attrs.link.url,
        class: "left truncate",
        config: m.route
      }, attrs.link.title)
    ])

  }
}