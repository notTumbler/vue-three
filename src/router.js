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
                },
                {
                    path:'/msg',
                    name:'msg',
                    component: () => import('./views/msg/msg.vue')
                }
                ,
                {
                    path: '/me',
                    neme: 'me',
                    component:() => import('./views/Me/me.vue')
                }
            ]
        },
        {
            path:'/sign',
            name:'sign',
            component:() => import('./views/sign.vue')
        },
        {
            path:"/tpsign",
            name:'tpsign',
            component:() => import('./views/tpsign.vue')
        },
        {
            path:'/code',
            name:'code',
            component:() => import('./views/code.vue')
        },
        {
            path:'/toast',
            name:'toast',
            component:() => import('./components/toast/toast.vue')
        },
        {
            path:'/edit',
            name:'edit',
            component:() => import('./views/Me/edit.vue')
        },
        {
            path:'/publish',
            name:'publish',
            component:() => import('./views/publish/publish.vue')
        }

    ]

})

export default router

