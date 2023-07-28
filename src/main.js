import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const myApp = createApp(App)
myApp.use(router)
myApp.use(ElementPlus)
myApp.mount('#app')
