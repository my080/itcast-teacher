/**
 * 系统组件引用
 */
import Vue from 'vue'
import Router from 'vue-router'

/**
 * 系统主页
 */
import Index from '@/pages/index/it-index.vue'

Vue.use(Router)

let router = new Router({
	routes: [
		{
			path: '/main',
			name: 'index',
			component: Index,
		}
	]
})

export default router
