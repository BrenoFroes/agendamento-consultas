import * as types from './mutation-types'
import * as storage from '../storage'
import services from '@/http'

export const ActionDoLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(res => {
    dispatch('ActionSetUser', res.body.name)
    dispatch('ActionSetToken', res.body.token)
  })
}

export const ActionCheckToken = ({ dispatch, state }) => {
  return new Promise((resolve, reject) => {
    try {
      if (state.token) {
        return Promise.resolve(state.token)
      }
      const token = storage.getLocalToken()
      const user = storage.getLocalUser()

      if (!token) {
        const err = Promise.reject(new Error('Token inválido'))
        window._Vue.$router.push({ name: 'login' })
        return err
      }

      dispatch('ActionSetToken', token)
      dispatch('ActionSetUser', user)
      resolve()
    } catch (err) {
      dispatch('ActionSignOut')
      reject(err)
    }
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  storage.setLocalUser(payload)
  commit(types.SET_USER, payload)
}

export const ActionGetUser = (context) => {
  const res = storage.getLocalUser()
  return res
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken()
  storage.deleteLocalUser()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}
