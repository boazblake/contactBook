// Global styles
 import "./static/styles/main.scss";
import "./static/styles/styles.css";

import collection from "./components/collection/view.js"
import item from "./components/item/view.js"
import defaultModel from "./components/default/view.js"
import Layout from "./templates/Layout"
import { checkAuth } from 'authConfig'

m.route(document.body, "/default", {

  "/list": {
    render: ( ) =>
      checkAuth()
        ? m(Layout, m(collection))
        : m(Layout, m(defaultModel))
  },

  "/edit/:id": {
    render: vnode =>
      checkAuth()
        ? m(Layout, m(item, vnode.attrs))
        : m(Layout, m(defaultModel))
  },

  "/new": {
    render: () =>
      checkAuth()
        ? m(Layout, m(item))
        : m(Layout, m(defaultModel))
  },

  "/default": {
    render: () =>
      m(Layout, m(defaultModel))
  }

})
