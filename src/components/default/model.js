import Task from 'data.task'
import { compose } from 'ramda'
import { log } from '../../utils/index'
import m from 'mithril'

export const registerUser = data =>
m.request({
  method: "POST",
  url: "http://localhost:8080/auth/register",
  data: data
})

export const registerUserTask = data =>
  new Task((rej, res) => registerUser(data).then(res, rej))


export const registerTask =
  compose(log('registered'),registerUserTask)
