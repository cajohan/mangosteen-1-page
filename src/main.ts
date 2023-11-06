import { createApp } from 'vue'
import { App } from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './config/routers'
import { history } from './shared/history'
import '@svgstore';


const router = createRouter({ history: history, routes: routes })

const app = createApp(App)
app.use(router)
app.mount('#app')
