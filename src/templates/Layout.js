import m from "mithril"

const Layout = {
  view: function(vnode) {
    return m("main.layout", [
      m("nav.menu ", {class:"c-nav c-nav--inline c-nav--light"},[
        m("a[href='/list']",{oncreate: m.route.link, class:"c-nav__item"}, "CONTACTS")
        ,  m("a[href='/new']", {oncreate: m.route.link, class:"c-nav__item", data:"findmedataInLayout"}, "ADD")
        ,  m("a[href='/register']", {oncreate: m.route.link, class:"c-nav__item", data:"findmedataInLayout"}, "REGISTER")
      ]),
      m("section", vnode.children)
    ])
  }
}

module.exports = Layout
