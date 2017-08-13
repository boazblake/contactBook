import m from "mithril"

const logout = _ => {
  m.request(
    { method: "GET"
    , url: "http://localhost:8080/auth/logout",
    }).then(()=> {
      localStorage.removeItem('userId')
    })
}


const Layout = {
  view: function(vnode) {
    return m("main.layout",
      [ m("nav.menu ", {class:"c-nav c-nav--inline c-nav--light"},
        [ m("a[href='/list']",{oncreate: m.route.link, class:"c-nav__item"}, "COLLECTION")
        , m("a[href='/new']", {href: "new", onupdate: m.route.link, class:"c-nav__item"}, "ADD")
        , m("a[href='/default']", {oncreate: m.route.link, class:"c-nav__item"}, "Login")
        , m("button.button",{class: "c-button button-brand logout", onclick:logout},"Logout")
        ])
      , m("section", vnode.children)
      ]
    )
  }
}

module.exports = Layout
