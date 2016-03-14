module.exports = [{
    identity: 'noticeboard',
    attributes: {
      university:{model:"university"},
      noticeboard_items:{
        collection:"noticeboard_item",
        via:"myboard"
      }
    }
  },{
    identity: 'noticeboard_item',
    attributes: {
      title:"string",
      content:"string",
      myboard:{model:"noticeboard"}
    }
  }
]
