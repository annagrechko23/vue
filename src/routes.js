import Vue from 'vue'
import VueRouter from 'vue-router'
import Components from '@/pages/Components'
import Directives from '@/pages/Directives'

Vue.use(VueRouter)

const routes = [{
        path: '/components',
        component: Components
    },
    {
        path: '/directives',
        component: Directives
    },

];

export default routes;