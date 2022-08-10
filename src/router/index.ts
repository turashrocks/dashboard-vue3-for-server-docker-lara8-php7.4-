import {createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from "vue-router";
import Register from '@/public/Register.vue';
import Login from '@/public/Login.vue';
import Secure from '@/secure/Secure.vue';
import Dashboard from '@/secure/dashboard/Dashboard.vue';
import Department from '@/secure/dashboard/Department.vue';

const routes: Array<RouteRecordRaw> = [
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {
        path: '/dashboard',
        component: Secure,
        children: [
            // {path: '', redirect: '/dashboard'},
            {path: '/dashboard', component: Dashboard},
            {path: '/departments', component: Department},
        //     {path: '/departments/create', component: UsersCreate},
        //     {path: '/departments/:id/edit', component: UsersEdit},
        //     {path: '/students', component: Users},
        //     {path: '/students/create', component: UsersCreate},
        //     {path: '/students/:id/edit', component: UsersEdit},
        //     {path: '/results', component: UsersCreate},
        //     {path: '/results/create', component: UsersCreate},
        //     {path: '/results/:id/edit', component: UsersEdit},
         ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
