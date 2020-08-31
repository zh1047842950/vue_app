import Vue from 'vue'
import VueRouter, {RouteConfig} from "vue-router"
import {Home, About, Mall} from "@/views"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/mall',
        name: 'Mall',
        component: Mall
    },
    {path: '/*', redirect: "/home"}
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
