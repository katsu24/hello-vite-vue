import { createRouter, createWebHashHistory } from "vue-router";
import Home from './pages/HomePage.vue'
import About from './pages/AboutPage.vue'

const routes = [
    { name: "home", path: '/', component: Home },
    { name: "about", path: '/about', component: About }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})