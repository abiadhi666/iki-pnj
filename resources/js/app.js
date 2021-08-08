require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

const Beranda = require('./pages/Beranda.vue').default
const Tentang = require('./pages/Tentang.vue').default
const NotFound = require('./pages/NotFound.vue').default

const routes = [{
        path: '/beranda',
        component: Beranda
    },
    {
        path: '/tentang',
        component: Tentang
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    data: {
        title: 'Laravel 8',
    },
    router,
});
