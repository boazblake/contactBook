import m from "mithril"
import { clone } from "ramda"
// import { editTask, addTask, getTask, delTask} from "./model.js"
import { addTask} from "./model.mongo.js"
import { log } from "utilities"

export const Item = {
  state: {
    currentItem:{},
    updatedItem:{},
  },
  data: {},
  errors:{},

  edit:id => {
    const onError = e => console.log("E",e)
    const onSuccess = data => {
      Item.data = data
      Item.state.currentItem = clone(Item.data)
      Item.state.updatedItem = clone(Item.state.currentItem)
      m.redraw()
    }

    getTask(id).fork(onError, onSuccess)
  },

  add: _ => {
    console.log('adding an item', _)
    Item.reset()
  },

  save: () => {
    const onError =e => console.log("e",e)
    const onSuccess = item => {
      log('yes')(item)
      Item.state.currentItem = item
      Item.state.updatedItem = clone(Item.state.currentItem)
    }

    Item.state.currentItem.id
      ? editTask(Item.state.updatedItem).fork(onError, onSuccess)
      : addTask(Item.state.updatedItem)(Item.state.currentItem.image).fork(onError, onSuccess)

  },

  deleteItem:(id) => {
    log("id")(id)
    id
      ? delTask(id).fork(e => console.error("e", e), s => log("s")(s))
      : console.log("USER IS NOT IN Db ") //TOAST THIS
  },

  reset:() => {
    Item.data = {}
    Item.state =
      { currentItem:
        { firstName: ""
          , lastName: ""
          , image: "http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
          , id: ""
        }
      , updatedItem: { }
      }
    Item.errors = {}
  },

}

module.exports = Item
