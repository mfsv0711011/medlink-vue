import { createRouter, createWebHistory } from "vue-router";
import {defineAsyncComponent} from "vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/MainLayout.vue'))
            },
            component: () => import('@/pages/Home.vue'),
        },
        {
            path: '/admin',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
            },
            component: () => import('@/pages/Admin.vue'),
        },
        {
            path: '/customer',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/MainLayout.vue'))
            },
            component: () => import('@/pages/Customer.vue'),
        },
        {
            path: '/auth',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/AuthLayout.vue'))
            },
            component: () => import('@/pages/Auth.vue'),
        },
        {
            path: '/doctor-info/:id',
            name: 'doctor-info',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/AuthLayout.vue'))
            },
            component: () => import('@/pages/DoctorInfo.vue'),
        }
    ]
})
