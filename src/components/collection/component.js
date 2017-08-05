import { clone, map } from 'ramda'
import { getTask } from "./model.js"
import { log } from 'utilities'
const CollectionRef = firebase.database().ref(`api/v1/users/`)


const Collection = {
  state: {
    ref:CollectionRef,
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

      Collection.data.list = data
      Collection.state.list = clone(Collection.data.list)
      m.redraw()
    }
    getTask(Collection.state.ref).fork(onError, onSuccess)
  },

  reset: () =>{}

}


module.exports = Collection
