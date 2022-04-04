import 'solana-wallets-vue/styles.css'
import './main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { sync } from 'vuex-router-sync'

import routes from './routes'
import store from './vuex'
import App from './App.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    store
})

sync(store, router);

createApp(App).use(router).mount('#app')
