import { mount } from '@vue/test-utils'
import Login from '../index.vue'
import { mapActions, mapState } from 'vuex'

describe ('Login = Unit', () => {
  it('shoud be a vue instance' , () => {
    const wrapper = mount(Login)
    expect(wrapper.vm).toBeDefined()
  })
}) 