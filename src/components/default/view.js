import m from "mithril"
import Default from "./component.js"

export const view = {
  view: function() {
    return(
      m("form", {
        onsubmit: function(e) {
          e.preventDefault()
          Default.state.register
          ? Default.register()
          : Default.login()
        }
      },
      [
        m("label.label", "Email"),
        m("input.input[type=text][placeholder=First name][required=true]", {
          oninput: m.withAttr("value", value => Default.current.email = value)}),

        m("label.label", "Password"),
        m("input.input[placeholder=Last name][required=true][type=password]", {
          oninput: m.withAttr("value", value => Default.current.password = value)}),

        m("button.button[type=submit]",{class: "c-button button-brand", onclick: m.withAttr("value", value => Default.state.register = true)},"Register"),
        m("button.button[type=submit]",{class: "c-button button-brand", onclick: m.withAttr("value", value => Default.state.register = false)},"Login"),
      ]))
  }
}

module.exports = view
