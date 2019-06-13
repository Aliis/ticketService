import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DateFilter from './filters/dateFilter'
import {store} from './store/store'
import axiosApi from 'axios';

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.filter('date', DateFilter )
window.axios = axiosApi;

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
