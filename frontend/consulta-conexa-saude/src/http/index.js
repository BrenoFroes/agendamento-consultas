import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'http://localhost:3333'

Object.keys(services).map(service => (
  services[service] = Vue.resource('', {}, services[service])
))

const setBearerToken = token => {
  // eslint-disable-next-line
  http.headers.common["Authorization"] = `Bearer ${token}`
}

export { http, setBearerToken }
export default services
