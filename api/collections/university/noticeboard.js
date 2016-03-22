module.exports = [{
    identity: 'noticeboard',
    attributes: {
      university:{model:"university"},
      noticeboard_items:{
        collection:"noticeboard_item",
        via:"myboard"
      },
      old_noticeboard_items:{
        collection:"noticeboard_item",
        via:"oldboard"
      }
    }
  },{
    identity: 'noticeboard_item',
    attributes: {
      title:"string",
      content:"string",
      myboard:{model:"noticeboard"},
      oldboard:{model:"noticeboard"}
    }
  }
]
