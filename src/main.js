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

createApp(App).use(store).use(router).use(VueAxios,axios).mount('#app')
