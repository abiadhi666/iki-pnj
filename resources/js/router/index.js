import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

const Beranda = require("../pages/Beranda.vue").default;
const Tentang = require("../pages/Tentang.vue").default;
// const NotFound = require("./pages/NotFound.vue").default;
import NotFound from '../pages/NotFound.vue'
import User from '../pages/User.vue'

const routes = [
    {
        path: "/beranda",
        component: Beranda
    },
    {
        path: "/tentang",
        component: Tentang
    },
    {
      path: "/user/:name?",
      component: User,
      props: true,
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router
