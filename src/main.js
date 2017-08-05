// Global styles
// import "./static/styles/main.scss";
import "./static/styles/styles.css";

import UserList from "./components/users/view.js"
import userModel from "./components/user/view.js"
import registerUser from "./components/default/view.js"
import Layout from "./templates/Layout"

m.route(document.body, "/list", {

  "/list": {
    render: function () {
      return m(Layout, m(UserList))
    }
  },

  "/edit/:id": {
    render: function (vnode) {
      return m(Layout, m(userModel, vnode.attrs))
    }
  },

  "/new": {
    render: function () {
      return m(Layout, m(userModel))
    }
  },

  "/register": {
    render: function () {
      return m(Layout, m(registerUser))
    }
  }

})
