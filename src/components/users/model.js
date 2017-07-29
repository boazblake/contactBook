/* global firebase */
/* eslint no-undef: "error" */
import Task from "data.task"
import { fromNullable } from "data.maybe"
import Either  from "data.either"
import { log  } from '../../utils/index.js'
import { compose, clone, map, prop, forEachObjIndexed} from 'ramda'
import { tagged } from 'daggy'

//--models---------------------------------------------------------------------
const toVm = x =>{
  return  { firstName: x.firstName
          , lastName: x.lastName
          , profilePic: x.profilePic
          , id: x.id
          }
}

//--Load------------------------------------------------------------------------
const findUsers = ref =>
  ref.once('value')

const findUsersTask = ref =>
  new Task((rej, res) => findUsers(ref).then(res, rej))

const open = x =>
  x.val()

const toArray = x =>
  [...Object.entries(x)]

const toViewModel =
  compose(toArray, forEachObjIndexed(toVm))

export const getUsersTask =
  compose( map(toViewModel)
         , map(open)
         , findUsersTask)
