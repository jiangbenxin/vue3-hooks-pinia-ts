import { createApp,App } from 'vue'
import './style.css'
import App2 from './App.vue'
import {initRouter} from './router'
import {initStore} from './store'

import { createPinia,Pinia } from 'pinia' //引入pinia


const app:App = createApp(App2)
initRouter(app)
initStore(app)
const pinia: Pinia = createPinia()
app
    .use(pinia)
    .mount('#app')