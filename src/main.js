import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './routes/route.js'
import md5 from 'js-md5'
import './plugins/iview.js'

Vue.config.productionTip = false
Vue.prototype.$md5 = md5

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
