import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue'
import HomeView from '../HomeView.vue'
import store from '../../../store'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(BootstrapVue)

const localVue = createLocalVue()

localVue.use(Vuex)

describe ('homeView = Unit', () => {
  it('shoud be a vue instance' , () => {
    const wrapper = mount(HomeView, {
      localVue,
      store,
      BootstrapVue
    })
    expect(wrapper.vm).toBeDefined()
  })
}) 