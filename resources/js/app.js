require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

const Beranda = require('./pages/Beranda.vue')
const Tentang = require('./pages/Tentang.vue')

const routes = [{
        path: '/beranda',
        component: Beranda
    },
    {
        path: '/tentang',
        component: Tentang
    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    data: {
        title: 'Laravel 8',
    },
    router,
});
