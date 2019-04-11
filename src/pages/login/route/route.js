
/**
 * 登录模块页面
 */
const Login = r => require.ensure([], () => r(require('@/pages/login/it-login.vue')), 'login')
const Register = r => require.ensure([], () => r(require('@/pages/login/it-register.vue')), 'register')
const InitMessage = r => require.ensure([], () => r(require('@/pages/login/it-init-message.vue')), 'init-message')
const ForgetPassword = r => require.ensure([], () => r(require('@/pages/login/it-forget-password.vue')), 'register')
const Activate = r => require.ensure([], () => r(require('@/pages/login/it-activate.vue')), 'register')
const ResetPassword = r => require.ensure([], () => r(require('@/pages/login/it-activate.vue')), 'reset-password')

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
	},
	{
		path: '/forget-password',
		name: 'forget-password',
		component: ForgetPassword
	},
	{
		path: '/activate',
		name: 'activate',
		component: Activate
	},
	{
		path: '/reset-password',
		name: 'reset-password',
		component: ResetPassword
	}
]

export default loginRoutes

