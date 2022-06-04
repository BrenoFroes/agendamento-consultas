// Altera os dados do state sem que eles sejam alterados na raiz
import * as types from './mutations-types'

export default {
  [types.SET_CONSULTATIONS] (state, payload) {
    state.consultations = payload
  }
}
