export default {
  findConsultations: { method: 'get', url: 'consultations?_expand=patient' },
  addConsultation: { method: 'post', url: 'consultations' }
}
