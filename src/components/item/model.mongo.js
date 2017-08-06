import m from 'mithril'
import Task from 'data.task'
import { compose, map } from 'ramda'
import { log } from "utilities"


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
