
/**
 * 登录模块页面
 */
const Home = r => require.ensure([], () => r(require('@/pages/home/it-home.vue')), 'home')


const homeRoutes = [
	{
		path: '/home',
		name: 'home',
		component: Home,
		children: []
	}
]

export default homeRoutes

