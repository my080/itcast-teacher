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
								<div class="row-fluid">
									<i-check-box class="check" v-model="isCheck">    我有邀请人</i-check-box>
									<div class="span12" v-show="isCheck">
										<input class="input span12 password" name="" v-model="inviteCode" :placeholder="inviterMsg" required="required" type="text">
									</div>
								</div>
							</div>
							<div class="actions">
								<a class="left-link" @click="toLogin" href="#">去登陆</a>
								<input class="btn btn-danger" name="Login" type="button" @click="send" value="发送邮件">
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
	import LoginService from './service/login-service.js'
	import SessionStorage from '../../common/scripts/storage/promise/session-storage.js'
	import Header from './components/header/it-header.vue'
	
	export default {
		name: 'it-register',
		components: {
			'it-header': Header
		},
		beforeCreate () {
			this.storage = new SessionStorage()
			this.loginService = new LoginService()
		},
		data () {
			return {
				isCheck: false,
				inviterMsg: '请输入邀请人账号',
				msg: '注册新老师',
				prompt: '请输入邮箱',
				email: '',
				inviteCode: '',
				activateCode: null
			}
		},
		mounted () {
			this.createCodes()
		},
		methods: {
			toLogin () {
				this.$router.push('/login')
			},
			send () {
				let that = this
				that.createCode()
					.then(that.sendEmail, that.createCodeError)
					.then(that.sendEmailSuccess, that.sendEmailError)
			},
			createCode () {
				let that = this
				that.activateCode = that.$md5(that.email + Math.random())
				let consumer = {
					email: that.email,
					activate: that.activateCode,
					create_time: new Date(),
					update_time: new Date()
				}
				return that.loginService.initConsumer(consumer)
			},
			createCodeError () {
				this.$Message.error('服务器存在异常，请与客服人员联系！')
			},
			sendEmail (data) {
				if (data.data.code === 200) {
					let that = this
					let url = 'http://localhost/#/activate?code=' + that.activateCode
					let link = '<a href="' + url +  '">' + url + '</a>'
					let param = {
						email: that.email,
						title: '激活邮件',
						html: link
					}
					return this.loginService.sendEmail(param)
				} else if (data.data.code === 201) {
					this.$Message.warning('该邮箱已经注册，请更换其他邮箱！')
				} else {
					this.$Message.error('服务器存在异常，请与客服人员联系！')
				}
			},
			sendEmailSuccess (data) {
				let that = this
				if (data && data.data.code === 200) {
					that.$Message.success('邮件已发送成功，注意查收！')
				}  else if (data) {
					that.$Message.error('邮件已发送失败，请重新发送！')
				}
			},
			sendEmailError () {
				this.$Message.error('服务器存在异常，校验邮件发送失败！')
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