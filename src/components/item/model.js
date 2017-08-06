/* global firebase */
/* eslint no-undef: "error" */
const getKey = () => firebase.database().ref().child("api/v1/users/").push().key
const ItemRef = id => firebase.database().ref(`api/v1/users/${id}`)
const delItem = id => ItemRef('').child(id).remove()
import Task from "data.task"


export const getTask = id =>
  new Task((rej, res) => ItemRef(id).once("value").then(res, rej))

export const editTask = data => {
  return new Task( (rej, res) =>
    ItemRef(data.id).update(
      { firstName:  data.firstName
        , lastName:   data.lastName
        , image: data.image
      }).then(res, rej))
}

export const addTask = data => pic => {
  data.id = getKey()
  data.image = pic

  return new Task((rej, res) => {
    ItemRef(data.id).set(data)
      .then(res, rej) })
}


export const delTask = id => {
  return new Task((rej, res)=> {
    delItem(id).then(res,rej)
  })

// export const registerTask = name => password =>
//   return new Task((rej, res) => )
}
