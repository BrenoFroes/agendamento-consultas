// Realiza as funções gerais sobre os dados do state usando o mutations como intermediário

import services from '@/http'
import * as types from './mutations-types'

export const ActionFindConsultations = ({ commit }) => (
  services.consultations.findConsultations().then(res => {
    commit(types.SET_CONSULTATIONS, res.body)
  })
)

export const ActionAddConsultation = (context, payload) => {
  services.consultations.addConsultation(payload)
}
