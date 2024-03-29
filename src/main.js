import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { VueFire } from 'vuefire'
import { firebaseApp } from '@/plugins/firebase'

import VueLazyLoad from 'vue3-lazyload'

import 'flowbite'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyLoad)

app.use(VueFire, {
  firebaseApp,
  modules: []
})

app.mount('#app')
