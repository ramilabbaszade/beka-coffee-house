import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/MainPage.vue')
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import('./pages/Basket.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router