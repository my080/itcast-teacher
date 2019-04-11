
/**
 * 登录模块页面
 */
const Login = r => require.ensure([], () => r(require('@/pages/login/it-login.vue')), 'login')
const Register = r => require.ensure([], () => r(require('@/pages/login/it-register.vue')), 'register')
const InitMessage = r => require.ensure([], () => r(require('@/pages/login/it-init-message')), 'register')


const loginRoutes = [
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/init-message',
		name: 'init-message',
		component: InitMessage
	}
]

export default loginRoutes

