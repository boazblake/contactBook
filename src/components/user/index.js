const m = require("mithril")
const R = require("ramda")
const { editUserTask, addUserTask, getUserTask, delUserTask} = require("./model.js")
const { log } = require("../../utils/index.js")

const User = {
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
      User.state.current = R.clone(User.data)
      User.state.updatedUserObject = R.clone(User.state.current)
      m.redraw()
    }

    getUserTask(id).fork(onError, onSuccess)
  },

  add: () => {
    User.reset()
    m.redraw()
  },

  save: () => {
    const onError =e => console.log("e",e)
    const onSuccess = () => {
      User.state.current = R.clone(User.state.updatedUserObject)
      User.state.updatedUserObject = R.clone(User.state.current)
    }

    User.state.current.id === ""
      ? addUserTask(User.state.updatedUserObject)(User.state.current.profilePic).fork(onError, onSuccess)
      : editUserTask(User.state.updatedUserObject).fork(onError, onSuccess)

  },

  deleteUser:(id) => {
    log("id")(id)
    id
      ? delUserTask(id).fork(e => console.error("e", e), s => log("s")(s))
      : console.log("USER IS NOT IN Db ") //TOAST THIS
  },

  reset:() => {
    User.data = {},
    User.state = {
      current:
        { firstName: ""
          , lastName: ""
          , profilePic: "http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
          , id: ""
        },
      updatedUserObject: { },
    },
    User.errors = {}
  },

}

module.exports = User
