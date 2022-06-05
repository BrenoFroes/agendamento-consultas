// Realiza as funções gerais sobre os dados do state usando o mutations como intermediário

import services from '@/http'
import * as types from './mutations-types'

export const ActionFindConsultations = ({ commit }) => (
  services.consultations.findConsultations().then(res => {
    commit(types.SET_CONSULTATIONS, res.body)
  })
)

export const ActionFindPatients = ({ commit }) => (
  services.consultations.findPatients().then(res => {
    commit(types.SET_PATIENTS, res.body)
  })
)

export const ActionAddConsultation = async (context, payload) => {
  const res = await services.consultations.addConsultation(payload)
  if (res.status === 201) {
    return true
  } else {
    return false
  }
}
