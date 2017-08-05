import m from "mithril"

const Layout = {
  view: function(vnode) {
    return m("main.layout", [
      m("nav.menu ", {class:"c-nav c-nav--inline c-nav--light"},[
        m("a[href='/list']",{oncreate: m.route.link, class:"c-nav__item"}, "COLLECTION")
        ,  m("a[href='/new']", {oncreate: m.route.link, class:"c-nav__item", data:"findmedataInLayout"}, "ADD")
        ,  m("a[href='/logout']", {oncreate: m.route.link, class:"c-nav__item", data:"findmedataInLayout"}, "LOGOUT")
      ])

    , m("section", vnode.children)
    ])
  }
}

module.exports = Layout
