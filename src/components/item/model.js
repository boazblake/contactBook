import m from 'mithril'
import Task from 'data.task'
import { compose, map } from 'ramda'
import { log } from "utilities"

// ==== POST ==================================================================
export const post = data =>
  m.request(
    { method: "POST"
    , url: 'http://localhost:8080/items/add'
    , data: data
    })

export const postTask = data =>
  new Task((rej, res) => post(data).then(res, rej))

export const toRequest = item => image =>{
    let Dto =
      { firstName: item.firstName
      , lastName: item.lastName
      , image: image
      }
    return Dto
  }

export const addTask = item =>
  compose(postTask
          ,log('saved item?')
          ,toRequest(item))

// ==== GET ==================================================================
export const fetch = id =>
  m.request(
    { method:'GET'
    , url: `http://localhost:8080/items/${id}`
    }
  )

export const findTask = id =>
  new Task((rej, res) => fetch(id).then(res, rej))

  // ==== UPDATE ==================================================================
  export const editTask = _ => {}
  // ==== DELETE ==================================================================
export const remove = id =>
  m.request(
    { method: 'DELETE'
    , url: `http://localhost/items/${id}`
    , data : {_id:id}
    }
  )

export const removeTask = id =>
  new Task((rej, res) => remove(id).then(res, rej) )
