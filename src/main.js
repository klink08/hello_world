// Libraries
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PiniaColada } from '@pinia/colada'
import { DataLoaderPlugin } from 'vue-router/experimental'

// Project Files
import '@/assets/main.css'
import App from '@/App.vue'
import { router } from '@/router.js'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(DataLoaderPlugin, { router })
app.use(PiniaColada)
app.use(router)
app.mount('#app')
