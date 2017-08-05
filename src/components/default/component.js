import m from 'mithril'
import { registerTask, loginTask } from './model'
import { log } from '../../utils/index.js'

export const Default = {
  state:{
    register:false
  },
  current: {
    email:'',
    password:''
  },

  register: () => {
    const onError = e => log('error')(e)
    const onSuccess = s => log('yes')(s)

    registerTask(Default.current).fork(onError, onSuccess)
  },

  login: () => {
    const onError = e => log('error')(e)
    const onSuccess = s => {
      log('yes')(s)
      localStorage.setItem(`${app_name}_user`, JSON.stringify(s))
      return s
    }

    loginTask(Default.current).fork(onError, onSuccess)
  }
}

module.exports = Default
