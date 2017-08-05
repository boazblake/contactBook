import m from 'mithril'
import { registerTask } from './model'
import { log } from '../../utils/index.js'

export const Default = {
  state: {
    email:'',
    pasword:''
  },

  register: () => {
    const onError = e => log('error')(e)
    const onSuccess = s => log('yes')(s)

    registerTask(Default.state).fork(onError, onSuccess)
  }
}

module.exports = Default
