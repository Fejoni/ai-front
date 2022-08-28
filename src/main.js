// Vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

// Bootstrap (CSS)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.js'

// Components
import Default from "@/layouts/Default";
import Auth from "@/layouts/Auth";
import Admin from "@/layouts/Admin";

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios,axios)
    .component("default-layout", Default)
    .component("auth-layout", Auth)
    .component("admin-layout", Admin)
    .mount('#app')

function isLoggedIn() {
    return localStorage.getItem('isLoggedIn')
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                name: 'about',
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})