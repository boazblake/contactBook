import { clone, map } from 'ramda'
import { getUsersTask } from "./model.js"
import { log } from '../../utils/index.js'
const UsersRef = firebase.database().ref(`api/v1/users/`)


const Users = {
  state: {
    ref:UsersRef,
    id:0
  },
  data: {
    list: []
  },
  errors: {},

  load: () => {
    const onError = e =>
      console.error("we have a problem", e)

    const onSuccess = dto => {
      const value = []
      const data = dto ? dto : null

      if (!data) {
        return console.error("no users")
      }

      Users.data.list = data
      Users.state.list = clone(Users.data.list)
      m.redraw()
    }
    getUsersTask(Users.state.ref).fork(onError, onSuccess)
  },

  reset: () =>{}

}


module.exports = Users
