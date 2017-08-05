// Global styles
// import "./static/styles/main.scss";
import "./static/styles/styles.css";

import collection from "./components/collection/view.js"
import item from "./components/item/view.js"
import defaultModel from "./components/default/view.js"
import Layout from "./templates/Layout"

m.route(document.body, "/list", {

  "/list": {
    render: function () {
      return m(Layout, m(collection))
    }
  },

  "/edit/:id": {
    render: function (vnode) {
      return m(Layout, m(item, vnode.attrs))
    }
  },

  "/new": {
    render: function () {
      return m(Layout, m(item))
    }
  },

  "/default": {
    render: function () {
      return m(Layout, m(defaultModel))
    }
  }

})
