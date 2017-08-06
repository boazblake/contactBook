import m from "mithril"
import { clone } from "ramda"
// import { editTask, addTask, getTask, removeTask} from "./model.js"
import { addTask, findTask, editTask, removeTask} from "./model.js"
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
      Item.state.currentItem = data
      Item.state.updatedItem = clone(Item.state.currentItem)
    }
    findTask(id).fork(onError, onSuccess)
  },

  add: ()=> {
    Item.reset()
  },

  save: () => {
    const onError = e => log("e")(e)
    const onSuccess = item => {
      log('returned after save:')(item)
      Item.state.currentItem = item
      Item.state.updatedItem = clone(Item.state.currentItem)
    }

    Item.state.currentItem._id
      ? editTask(Item.state.updatedItem).fork(onError, onSuccess)
      : addTask(Item.state.updatedItem)(Item.state.currentItem.image).fork(onError, onSuccess)

  },

  deleteItem:(id) => {
    const onError = e => log('e')(e)
    const onSuccess = s => log('s')(s)
    log("id")(id)
    id
      ? removeTask(id).fork(onError, onSuccess)
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
