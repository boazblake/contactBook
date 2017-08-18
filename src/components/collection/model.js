import Task from 'data.task'
import { compose, map } from 'ramda'

export const fetch = _ =>
  m.request(
    { method:'GET'
    , url: 'http://localhost:8080/items/'
    }
  )

export const findTask = _ =>
  new Task((rej, res) => fetch().then(res, rej))
