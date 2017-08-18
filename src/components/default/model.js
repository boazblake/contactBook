import Task from 'data.task'
import { compose, map } from 'ramda'
import { log } from 'utilities'



// =====REGISTER================================================================

export const registerUser = data =>
  m.request({
    method: "POST",
    url: "http://localhost:8080/auth/register",
    data: data
  })

export const registerUserTask = data =>
  new Task((rej, res) => registerUser(data).then(res, rej))

export const registerTask =
  compose(map(log('registered')),registerUserTask)

  // =====LOGIN================================================================

export const loginUser = data =>
  m.request({
    method:"POST",
    url:"http://localhost:8080/auth/login",
    data:data
  })


export const loginUserTask = data =>
  new Task((rej, res) => loginUser(data).then(res, rej))

export const loginTask =
  compose(loginUserTask)
