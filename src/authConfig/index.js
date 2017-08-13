import { log } from 'utilities'

export const checkAuth = _ =>
  localStorage.userId ? localStorage.userId : false
