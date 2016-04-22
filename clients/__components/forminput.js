module.exports = {
  controller: () => {
    var id = Math.random();
    return {
      uniqId: () => {
        return id
      }
    }
  },
  view: function(ctrl, attrs) {
    var textarea = m("div", {
      class: "input-field validate  col " + attrs.sizes
    }, [
      attrs.icon ? m("i", {
        class: attrs.icon
      }) : m("span"),
      m("textarea[required]", {
        id: attrs.label + ctrl.uniqId(),
        // value:attrs.value(),
        name: attrs.label,
        type: attrs.type,
        class: "materialize-textarea",
        "aria-required": "true",
        oninput: m.withAttr("value", attrs.value)
      }),
      m("label", {
        for: attrs.label + ctrl.uniqId()
      }, attrs.label)
    ]);

    var input = m("div", {
      class: "input-field col " + attrs.sizes + (attrs.required ? "validate" : " ")
    }, [
      attrs.icon ? m("i", {
        class: attrs.icon
      }) : m("span"),
      m("input[required]", {
        id: attrs.label + ctrl.uniqId(),
        // value:attrs.value(),
        name: attrs.label,
        type: attrs.type,
        "aria-required": "true",
        oninput: m.withAttr("value", attrs.value),
        class:(attrs.type === "date" ? "datepicker" : ""),
        config: () => {
          if (attrs.type === "date") {
            $('.datepicker').pickadate({
              selectMonths: attrs.selectableMonths, // Creates a dropdown to control month
              selectYears: attrs.years // Creates a dropdown of 15 years to control year
            });
          }
        }
      }),
      m("label", {
        for: attrs.label + ctrl.uniqId()
      }, attrs.label)
    ]);

    var select = m(".input-field col s12",
      m("select", {
          config: function() {
            $('select').material_select();
            console.log(attrs)
          },
          onchange: function(e) {
            ctrl.schema.selectedCourse(e.target.value),
              alert(ctrl.schema.selectedCourse())
          }
        },

        m("option", {
          value: "",
          disabled: true,
          selected: true,
        }, "Course for student")
        // console.log(typeof(attrs.data))
        // attrs.data.map((item)=>console.log(item))
        // attrs.data.map((drop)=>{
        //   return m("option",{
        //     value:drop.id,
        //     selected:(m.route.param("selectedDepartment") == drop.id ? true : false)
        //   },drop.name)
        // })

      )
    );

    // return what is asked for
    if (attrs.type === "textarea") {
      return textarea
    } else if (attrs.type === "select") {
      return select
    } else {
      return input
    }
  }
}


// (m.route() === attrs.link.url ? 'active': '')