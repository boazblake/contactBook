/* global firebase */
/* eslint no-undef: "error" */
import Task from "data.task"
import { fromNullable } from "data.maybe"
import { log  } from 'utilities'
import { compose, clone, map, prop, forEachObjIndexed} from 'ramda'

//--models---------------------------------------------------------------------
const toVm = x =>{
  return  { firstName: x.firstName
          , lastName: x.lastName
          , profilePic: x.profilePic
          , id: x.id
          }
}

//--Load------------------------------------------------------------------------
const find = ref =>
  ref.once('value')

const findTask = ref =>
  new Task((rej, res) => find(ref).then(res, rej))

const open = x =>
  x.val()

const toArray = x =>
  [...Object.entries(x)]

const toViewModel =
  compose(toArray, forEachObjIndexed(toVm))

export const getTask =
  compose( map(toViewModel)
         , map(open)
         , findTask)
