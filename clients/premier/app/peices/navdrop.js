module.exports = {
  view: function(ctrl, args) {
    var random = Math.random()
    return m("span", [
      m("li", {
        clasS:args.direction
        // class: 'waves-effect waves-block waves-blue ' + args.direction + " " + (m.route() === args.url ? 'active' : '')
      }, [
        m("a", {
          class: 'dropdown-button',
          "data-activates": args.title,
          config: function() {
            $('.dropdown-button').dropdown({
              inDuration: 300,
              outDuration: 225,
              constrain_width: false, // Does not change width of dropdown to that of the activator
              alignment: 'left',
              hover: true, // Activate on hover
              gutter: 0, // Spacing from edge
              belowOrigin: true // Displays dropdown below the button
            });
          },

        }, [
          args.drops ?
          m("i", {
            class: "mdi-navigation-arrow-drop-down right"
          }) : "",
        ], args.title)


      ]),
      m("ul", {
        id: args.title,
        class: "dropdown-content",
      }, [
        args.drops ?
        args.drops.map((drop) => {
          return m("li", [
            m("a", {
              href: drop.url,
              config: m.route
            }, drop.title)
          ])
        }) : ""
      ])
    ])
  }
}