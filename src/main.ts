import { createApp,App } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import App2 from './App.vue'
import {initRouter} from './router'
import {initStore} from './store'
import { ElMessage } from 'element-plus'
import { createPinia,Pinia } from 'pinia' //引入pinia

const app:App = createApp(App2)
initRouter(app)
initStore(app)
app.provide('$ElMessage', ElMessage)

const pinia: Pinia = createPinia()
app
    .use(pinia)
    .mount('#app')