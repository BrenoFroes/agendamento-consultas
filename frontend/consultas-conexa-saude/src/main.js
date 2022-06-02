import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/app.scss'
import VueResource from 'vue-resource'

createApp(App).use(store).use(router).use(VueResource).mount('#app')
