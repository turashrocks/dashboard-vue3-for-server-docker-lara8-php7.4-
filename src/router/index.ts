import {createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from "vue-router";
import Register from '@/public/Register.vue';
import Login from '@/public/Login.vue';
import Secure from '@/secure/Secure.vue';
import Dashboard from '@/secure/dashboard/Dashboard.vue';

const routes: Array<RouteRecordRaw> = [
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {
        path: '/dashboard',
        component: Secure,
        children: [
            // {path: '', redirect: '/dashboard'},
            {path: '/dashboard', component: Dashboard}
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
