import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon } from './plugins/icons'

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
