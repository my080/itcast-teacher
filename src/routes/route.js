import Vue from 'vue'
import Router from 'vue-router'

/**
 * 登录模块路由集合
 */
import loginRoutes from '@/pages/login/route/route.js'
import homeRoutes from '@/pages/home/route/route.js'

Vue.use(Router)



let routes = []
routes = routes.concat(
	loginRoutes,
	homeRoutes
)

let router = new Router({
	routes: routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default router
