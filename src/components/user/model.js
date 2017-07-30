/* global firebase */
/* eslint no-undef: "error" */
const getKey = () => firebase.database().ref().child("api/v1/users/").push().key
const UserRef = id => firebase.database().ref(`api/v1/users/${id}`)
const removeUser = id => UserRef('').child(id).remove()
import Task from "data.task"


export const getUserTask = id =>
  new Task((rej, res) => UserRef(id).once("value").then(res, rej))

export const editUserTask = data => {
  return new Task( (rej, res) =>
    UserRef(data.id).update(
      { firstName:  data.firstName
        , lastName:   data.lastName
        , profilePic: data.profilePic
      }).then(res, rej))
}

export const addUserTask = data => pic => {
  data.id = getKey()
  data.profilePic = pic

  return new Task((rej, res) => {
    UserRef(data.id).set(data)
      .then(res, rej) })
}


export const delUserTask = id => {
  return new Task((rej, res)=> {
    removeUser(id).then(res,rej)
  })
}
