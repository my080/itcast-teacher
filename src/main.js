import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store/index.js'
import router from './routes/route.js'
import './plugins/iview.js'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
