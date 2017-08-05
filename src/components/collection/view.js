import m from "mithril"
import Collection from "./component.js"

const view = {
  oninit: Collection.load,
  view:() => {
    return Collection.state.list
      ? m(".item.list", Collection.state.list.map( item =>
        m("a.item-list-item"
          , { oncreate: m.route.link, href: `/edit/${item[0]}`}
          , item[1].firstName + " " + item[1].lastName
        )
      ))
      : "Loading"
  }
}

module.exports = view
