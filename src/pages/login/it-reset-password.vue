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
										<input class="input span12 email" v-model="email" name="" placeholder="Email" required="required" type="email" value="">
									</div>
								</div>
							</div>
							<div class="actions">
								<a class="left-link" @click="toLogin" href="#">返回登录</a>
								<input class="btn btn-danger" @click="login" name="Login" type="button" value="登录" >
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
		name: 'it-forget-password',
		components: {
			'it-header': Header
		},
		beforeCreate () {
			this.service = new LoginService()
			this.storage = new SessionStorage()
		},
		data () {
			return {
				email: null,
				msg: '找回密码',
				prompt: '请输入邮箱地址'
			}
		},
		methods: {
			toLogin () {
				this.$router.push('/')
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