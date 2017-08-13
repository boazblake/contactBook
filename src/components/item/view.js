import m from "mithril"
import Item from "./component.js"

export const view = {
  oninit: vnode =>
    vnode.attrs.id
      ? Item.edit(vnode.attrs.id)
      : Item.add(),

  view: vnode => {
    vnode.attrs.id
      ? Item.edit(vnode.attrs.id)
      : Item.add()

    return Item.state.currentItem
      ? m("form", {
        onsubmit: function(e) {
          e.preventDefault()
          Item.save()
        }
      }, [  m('formField',
              m("label.label", "First name"),
              m("input.input[type=text][placeholder=First name][required=true]", {
                oninput: m.withAttr("value", value => Item.state.updatedItem.firstName = value),
                value: Item.state.updatedItem.firstName})),

          m("label.label", "Last name"),
          m("input.input[placeholder=Last name][required=true]", {
            oninput: m.withAttr("value", value => Item.state.updatedItem.lastName = value),
            value: Item.state.updatedItem.lastName}),

          m("label.label", "image"),
          m("img", {src:Item.state.currentItem.image}),

          m("button.button[type=submit]",{class: "c-button button-brand"},"Save"),

          Item.state.edit
            ? m("button.button",{ class:"c-button c-button--error", onclick:m.withAttr("userId", Item.delete )
              , userId:Item.state.updatedItem._id}, "X")
            : ""
            ,
          ])

        : "LOADING"
  }
}

module.exports = view
