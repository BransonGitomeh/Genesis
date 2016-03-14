var item = require('./todo-list/item');

module.exports = {
  view:function(controller,atrrs){
    return m(".row",[
      m("div",{class:"col l4 white-text"},[
        m("ul",{class:"collection with-header"},[
          m("li",{class:"collection-header cyan"},[
            m("h4",{class:"task-card-title"},"Premier tasks"),
            m("p",{class:"task-card-date"},"University/school management thing"),
          ]),
          m(item,{
            text:"some awesome thing i am to do",
            due:"kesho morning",
            type:"aweosmness hehe",
            complete:m.prop(false)
          })
        ])
      ])
    ])
  }
}

// <ul id="task-card" class="collection with-header">
//                                     <li class="collection-header cyan">
//                                         <h4 class="task-card-title">My Task</h4>
//                                         <p class="task-card-date">March 26, 2015</p>
//                                     </li>
//                                     <li class="collection-item dismissable" style="touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
//                                         <input type="checkbox" id="task1">
//                                         <label for="task1" style="text-decoration: none;">Create Mobile App UI. <a href="#" class="secondary-content"><span class="ultra-small">Today</span></a>
//                                         </label>
//                                         <span class="task-cat teal">Mobile App</span>
//                                     </li>
//
//                                 </ul>
