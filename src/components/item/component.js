import m from "mithril"
import { clone } from "ramda"
import { initializeTask , addTask, findTask, editTask, removeTask, saveTask} from "./model.js"
import { log } from "utilities"

export const Item = {
  state: {
    currentItem:{},
    updatedItem:{},
  },
  data: {},
  errors:{},

  edit:id => {
    Item.state.edit = true
    const onError = e => console.log("E",e)
    const onSuccess = data => {
      Item.state.currentItem = data
      Item.state.updatedItem = clone(Item.state.currentItem)
    }
    findTask(id).fork(onError, onSuccess)
  },

  add: ()=> {
    console.log('add')
    Item.reset()
  },

  save: () => {
    const onError = e => log("e")(e)

    const onSuccess = item => {
      Item.state.currentItem = item
      Item.state.updatedItem = clone(Item.state.currentItem)
    }

    saveTask(Item.state.edit)(Item.state.updatedItem).fork(onError, onSuccess)
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
      { edit: false
      , updatedItem:
          { firstName: ""
          , lastName: ""
          , image: "http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
          , id: ""
          }
      , currentItem: {}
      }
    Item.errors = {}
  },

}

module.exports = Item
