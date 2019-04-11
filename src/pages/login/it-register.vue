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
										<input class="input span12 email" name="" placeholder="Email" required="required" type="email" value="">
									</div>
								</div>
								<div class="row-fluid">
									<i-check-box class="check" v-model="isCheck">    我有邀请人</i-check-box>
									<div class="span12" v-show="isCheck">
										<input class="input span12 password" name="" :placeholder="inviterMsg" required="required" type="text">
									</div>
								</div>
							</div>
							<div class="actions">
								<a class="left-link" @click="toLogin" href="#">去登陆</a>
								<input class="btn btn-danger" name="Login" type="submit" value="下一步">
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

//	import IdentifyingCode from '../../common/scripts/utils/identifying-code.js'
	import Header from './components/header/it-header.vue'
	
	export default {
		name: 'register',
		components: {
			'it-header': Header
		},
		data () {
			return {
				isCheck: false,
				inviterMsg: '请输入邀请人账号',
				msg: '注册新老师',
				prompt: '请输入邮箱'
			}
		},
		mounted () {
			this.createCodes()
		},
		methods: {
			toLogin () {
				this.$router.push('/login')
			},
			createCodes () {
//				let options = {
//					canvasId: 'auth-code',
//					height: 50,
//					width: 200
//				}
//				this.identifyingCode = new IdentifyingCode()
//				this.identifyingCode.writeAuthCode(options)
			}
		}
	}
</script>

<style lang="scss">
	@import "./login.scss";
</style>