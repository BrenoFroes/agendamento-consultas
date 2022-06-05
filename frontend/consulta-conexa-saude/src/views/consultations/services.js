export default {
  findConsultations: { method: 'get', url: 'consultations?_expand=patient' },
  findPatients: { method: 'get', url: 'patients' },
  addConsultation: { method: 'post', url: 'consultations' }
}
