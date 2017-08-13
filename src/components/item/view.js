import m from "mithril"
import Item from "./component.js"

export const view = {
  oninit: vnode => vnode.attrs.id ? Item.edit(vnode.attrs.id) : Item.add,
  view: function() {
    return Item.state.currentItem
      ? m("form", {
        onsubmit: function(e) {
          e.preventDefault()
          Item.save()
        }
      }, [

        m("label.label", "First name"),
        m("input.input[type=text][placeholder=First name][required=true]", {
          oninput: m.withAttr("value", value => Item.state.updatedItem.firstName = value),
          value: Item.state.updatedItem.firstName}),

        m("label.label", "Last name"),
        m("input.input[placeholder=Last name][required=true]", {
          oninput: m.withAttr("value", value => Item.state.updatedItem.lastName = value),
          value: Item.state.updatedItem.lastName}),

        m("label.label", "image"),
        m("img", {src:Item.state.updatedItem.image}),

        m("button.button[type=submit]",{class: "c-button button-brand"},"Save"),

        m("button.button",{ class:"c-button c-button--error", onclick:m.withAttr("userId", Item.deleteItem )
          , userId:Item.state.updatedItem._id}, "X"),

        ])  : "LOADING"
  }
}

module.exports = view
