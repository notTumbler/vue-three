import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/Home'

const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: () => import('./views/index/Index.vue'),
                    children: [
                        {
                            path: '/index',
                            name: 'index',
                            component: () => import('./components/index/VideoList')
                        }

                    ]
                },
                {
                    path: '/follow',
                    name: 'follow',
                    component: () => import('./views/follow/Follow.vue')
                }
            ]
        }
    ]

})

export default router

