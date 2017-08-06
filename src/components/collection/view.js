import m from "mithril"
import Collection from "./component.js"

const view = {
  oninit: Collection.load(),
  view:() => {
    return Collection.data.list[0]
      ? m(".item.list", Collection.data.list.map( item =>
        m("a.item-list-item"
          , { oncreate: m.route.link, href: `/edit/${item._id}`, key: item._id}
          , item.firstName + " " + item.lastName
        )
      ))
      : m("img", {src:'http://www.emptymag.com/wp-content/uploads/2016/06/EMPTY-masthead.png'})
  }
}

module.exports = view
