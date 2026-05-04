import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { layzPlugin } from './directives'
import { componentPlugin } from '@/components/index.ts'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(layzPlugin)
app.use(componentPlugin)

// 禁用 v-infinite-scroll 的废弃警告
app.config.warnHandler = (msg, instance, trace) => {
  if (!msg.includes('v-infinite-scroll is about to be deprecated')) {
    console.warn(msg, instance, trace)
  }
}



app.mount('#app')
