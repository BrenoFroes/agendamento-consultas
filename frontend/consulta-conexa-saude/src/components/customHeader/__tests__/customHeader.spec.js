import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue'
import CustomHeader from '../../customHeader'
import store from '../../../store'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(BootstrapVue)

const localVue = createLocalVue()

localVue.use(Vuex)

describe ('CustomHeader = Unit', () => {
  it('shoud be a vue instance' , () => {
    const wrapper = mount(CustomHeader, {
      propsData: {
        name: ''
      },
      localVue,
      store
    })
    expect(wrapper.vm).toBeDefined()
  })

  it('should update searchQuery when prop is changed', async() => {
    const wrapper = mount(CustomHeader, {
      propsData: {
        name: ''
      },
      localVue,
      store
    })

    await wrapper.setProps({ name: 'Breno' })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.searchQuery).toEqual('Breno')
  })

}) 