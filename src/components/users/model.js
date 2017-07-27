/* global firebase */
/* eslint no-undef: "error" */
import Task from "data.task"
import { fromNullable } from "data.maybe"
import Either  from "data.either"
import { log, fold  } from '../../utils/index.js'
import { compose, identity, map, lensProp, forEachObjIndexed} from 'ramda'
import { tagged } from 'daggy'
import { data } from './data.js'

//--models---------------------------------------------------------------------
const UsersRef = firebase.database().ref(`api/v1/users/`)

const vm =
  tagged('firstName', 'lastName', 'profilePic', 'id' )

//--Load------------------------------------------------------------------------
const findUsers = _ =>// Promise.resolve(data)
 UsersRef.once('value')

const findUsersTask = ref =>
  new Task((rej, res) => findUsers(ref).then(res, rej))

const open = x =>
  x.val()

const safeParse =
  compose(fromNullable, open)

const toArray = x =>
  new Map([...Object.entries(x)])

const toViewModel = dto =>
  forEachObjIndexed((x =>
    vm(x.firstName, x.lastName, x.profilePc, x.id)), dto)


export const getUsersTask =
  compose(map(log('test')), map(map(toViewModel))
         , map(map(toArray)) // this data type is fucking me over
         , map(safeParse)
         , findUsersTask )
