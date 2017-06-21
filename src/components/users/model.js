/* global firebase */
/* eslint no-undef: "error" */
const UserRef = firebase.database().ref("api/v1/users/")
const Task = require("data.task")
const Maybe = require("data.maybe")

const toMaybe = obj => {
  return obj.val() == null
    ? Maybe.Nothing()
    : Maybe.Just(obj)
}

const parseFirebaseDto = dto =>{
  return dto.isNothing
    ? Maybe.Nothing()
    : Maybe.Just(dto.value.val())
}

const makeArray = obj => {
  const toArray = dto => {
    let res = Object.keys(dto)
    return res.map(k => {
      return [k, dto[k]]
    })
  }

  return obj.isNothing
    ? Maybe.Nothing()
    : Maybe.Just(toArray(obj.value))
}

export const getUsersTask =
  new Task((rej, res) => {
    UserRef.once("value")
      .then(fbDto => toMaybe(fbDto))
      .then(dto => parseFirebaseDto(dto))
      .then( obj => makeArray(obj))
      .then(res, rej)
  })
