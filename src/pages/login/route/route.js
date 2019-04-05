
/**
 * 登录模块页面
 */
const ToLogin = r => require.ensure([], () => r(require('@/pages/login/it-to-login.vue')), 'to-login')
const Login = r => require.ensure([], () => r(require('@/pages/login/it-login.vue')), 'login')


const loginRoutes = [
	{
		path: '/login',
		name: 'login',
		component: Login,
		children: []
	},
	{
		path: '/to-login',
		name: 'to-login',
		component: ToLogin
	}
]

export default loginRoutes

