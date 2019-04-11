<template>
	<div class="dashboard-wrapper">
		<div class="row-fluid">
			<div class="widget-body">
				<div class="span6">
					<div class="sign-in-container">
						<form action="#" class="login-wrapper" method="post">
							
							<it-header :msg="msg" :prompt="prompt"></it-header>
							
							<div class="content">
								<div class="row-fluid">
									<div class="span12">
										<input class="input span12 email" v-model="name" name="" placeholder="Email" required="required" type="email" value="">
									</div>
								</div>
								<div class="row-fluid">
									<div class="span12">
										<input class="input span12 password" v-model="password" name="" placeholder="Password" required="required" type="password">
									</div>
								</div>
							</div>
							<div class="actions">
								<a class="left-link" @click="toRegister" href="#">注册新老师</a>
								<input class="btn btn-danger" @click="login" name="Login" type="button" value="登录">
								<a class="right-link" href="#">忘记密码</a>
								<div class="clearfix"></div>
							</div>
						</form>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import LoginService from './service/login-service.js'
	import SessionStorage from '../../common/scripts/storage/promise/session-storage.js'
	import Header from './components/header/it-header.vue'

	export default {
		name: 'it-activate',
		components: {
			'it-header': Header
		},
		beforeCreate () {
			this.service = new LoginService()
			this.storage = new SessionStorage()
		},
		data () {
			return {
				name: null,
				password: null,
				msg: '登录',
				prompt: '请输入邮箱和登录密码'
			}
		},
		methods: {
			toRegister () {
				this.$router.push('/register')
			},
			login () {
				let that = this
				let param = {
					name: that.name,
					password: that.password
				}
				this.service.login(param)
			}
		}
	}
</script>

<style lang="scss">
	@import "./login.scss";
</style>