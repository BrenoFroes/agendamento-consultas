import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue'
import itemConsultation from '../../itemConsultation'
import store from '../../../store'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(BootstrapVue)

const localVue = createLocalVue()

localVue.use(Vuex)

describe ('itemConsultation = Unit', () => {
  it('shoud be a vue instance' , () => {
    const wrapper = mount(itemConsultation, {
      propsData: {
        consultation: { "id": 0, "patientId": 0, "date": "", "patient": { "id": 0, "first_name": "", "last_name": "", "email": "" }}
      },
      localVue,
      store
    })
    expect(wrapper.vm).toBeDefined()
  })

  it('should update searchQuery when prop is changed', async() => {
    const wrapper = mount(itemConsultation, {
      propsData: {
        consultation: { "id": 0, "patientId": 0, "date": "", "patient": { "id": 0, "first_name": "", "last_name": "", "email": "" }}
      },
      localVue,
      store
    })

    await wrapper.setProps({ consultation: { "id": 1, "patientId": 1, "date": "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)", "patient": { "id": 1, "first_name": "Frodo", "last_name": "Baggins", "email": "frodo.baggins@mail.com" } } })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.searchQuery).toEqual({ "id": 1, "patientId": 1, "date": "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)", "patient": { "id": 1, "first_name": "Frodo", "last_name": "Baggins", "email": "frodo.baggins@mail.com" } })
  })

}) 