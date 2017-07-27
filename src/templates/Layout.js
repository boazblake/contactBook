import m from "mithril"

export const Layout = {
  view: function(vnode) {
    return m("main.layout", [
      m("nav.menu ", {class:"c-nav c-nav--inline c-nav--light"},[
        m("a[href='/list']",{oncreate: m.route.link, class:"c-nav__item"}, "CONTACTS")
        ,  m("a[href='/new']", {oncreate: m.route.link, class:"c-nav__item", data:"boaz"}, "ADD")
      ]),
      m("section", vnode.children)
    ])
  }
}
