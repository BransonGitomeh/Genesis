module.exports = {
	view:(ctrl,args)=>{
		return m(".switch",[
				m("label",
					args.beforeTxt ? args.beforeTxt : args.beforeTxt,
					m("input[type=checkbox]", {
                        onclick: m.withAttr("checked", args.value), 
                        checked: args.value(),
                        onchange:(e)=>{
							args.onChange ? args.onChange(args.value()) :""
						}
                    }),
					m("span",{class:"lever"}),
					args.afterTxt ? args.afterTxt : args.afterTxt
				)
			])
	}
}

