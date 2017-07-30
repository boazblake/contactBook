import m from "mithril"
import { clone } from "ramda"
import { editUserTask, addUserTask, getUserTask, delUserTask} from "./model.js"
import { log } from "../../utils/index.js"

export const User = {
  state: {
    current:{},
    updatedUserObject:{},
  },
  data: {},
  errors:{},

  edit:id => {
    const onError =e => console.log("E",e)
    const onSuccess = data => {
      User.data = data.val()
      User.state.current = clone(User.data)
      User.state.updatedUserObject = clone(User.state.current)
      m.redraw()
    }

    getUserTask(id).fork(onError, onSuccess)
  },

  add: _ => {
    console.log('hi', _)
    User.reset()
  },

  save: () => {
    const onError =e => console.log("e",e)
    const onSuccess = () => {
      User.state.current = clone(User.state.updatedUserObject)
      User.state.updatedUserObject = clone(User.state.current)
    }
    User.state.current.id
      ? editUserTask(User.state.updatedUserObject).fork(onError, onSuccess)
      : addUserTask(User.state.updatedUserObject)(User.state.current.profilePic).fork(onError, onSuccess)

  },

  deleteUser:(id) => {
    log("id")(id)
    id
      ? delUserTask(id).fork(e => console.error("e", e), s => log("s")(s))
      : console.log("USER IS NOT IN Db ") //TOAST THIS
  },

  reset:() => {
    User.data = {}
    User.state =
      { current:
        { firstName: ""
          , lastName: ""
          , profilePic: "http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
          , id: ""
        }
      , updatedUserObject: { }
      }
    User.errors = {}
  },

}

module.exports = User
