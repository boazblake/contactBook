import { clone, map } from 'ramda'
import { findTask } from "./model.js"
import { log } from 'utilities'


const Collection = {
  state: {},
  data: {
    list: []
  },
  errors: {},

  load: () => {
    const onError = e =>
      console.error("we have a problem", e)

    const onSuccess = dto =>
      Collection.data.list = dto

    findTask().fork(onError, onSuccess)
  },

  reset: () => {}

}


module.exports = Collection
