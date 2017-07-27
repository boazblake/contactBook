/* global firebase */
/* eslint no-undef: "error" */
import Task from "data.task"
import { fromNullable } from "data.maybe"
import Either  from "data.either"
import { log  } from '../../utils/index.js'
import { compose, map, prop} from 'ramda'
import { tagged } from 'daggy'

//--models---------------------------------------------------------------------
const vm =
  tagged('firstName', 'lastName', 'profilePic', 'id' )

//--Load------------------------------------------------------------------------
const findUsers = ref =>
  ref.once('value')

const findUsersTask = ref =>
  new Task((rej, res) => findUsers(ref).then(res, rej))

const open = x =>
  x.val()

const safeParse =
  compose(fromNullable, open)


// const toArray = x =>
//   new Map([...Object.entries(x)])

const toArray = x =>
  [...Object.entries(x)]

const toViewModel = x =>{
  log('x')(x[0][1])
  x => vm(x[0][1].firstName, x[0][1].lastName, x[0][1].profilePic, x[0][1].id, )
}

export const getUsersTask =
  compose( map(map(toViewModel))
        , map(map(toArray))
        , map(safeParse)
        , findUsersTask )

  // (fbDto => res(fromNullable(fbDto).map(safeParse).map(toArray).map(toViewModel)), rej)
  // })
