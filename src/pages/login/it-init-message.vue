<template>
	<div class="dashboard-wrapper">
		<div class="row-fluid">
			<div class="widget-body">
				<div class="span6">
					<div class="sign-in-container">
						<form action="#" class="login-wrapper" method="post">
							<it-header :msg="msg" :prompt="prompt"></it-header>
							
							<div class="content">
								<i-form :model="formItem" :label-width="50">
									<i-form-item label="姓名：">
										<i-input v-model="formItem.input" placeholder="Enter something..."></i-input>
									</i-form-item>
									<i-form-item label="学段：">
										<template v-for="period in periods">
											<i-button class="menu-btn" type="primary" v-if="selectPeriod && period.id === selectPeriod.id" :key="period.id" @click="changePeriod(period)">{{ period.name }}</i-button>
											<i-button class="menu-btn" v-else :key="period.id" @click="changePeriod(period)">{{ period.name }}</i-button>
										</template>
									</i-form-item>
									<i-form-item label="学科：">
										<template v-for="subject in subjects">
											<i-button class="menu-btn" type="primary" v-if="selectSubject && subject.id === selectSubject.id" :key="subject.id">{{ subject.name }}</i-button>
											<i-button class="menu-btn" v-else :key="subject.id">{{ subject.name }}</i-button>
										</template>
									</i-form-item>
									<i-form-item label="学校：">
										<i-cascader></i-cascader>
									</i-form-item>
								</i-form>
							</div>
							<div class="actions">
								<a class="left-link" @click="toRegister" href="#">注册新老师</a>
								<input class="btn btn-danger" @click="login" name="Login" type="button" value="登录" >
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
	import Header from './components/header/it-header.vue'

	export default {
		name: 'it-init-message',
		components: {
			'it-header': Header
		},
		beforeCreate () {
			this.service = new LoginService()
		},
		data () {
			return {
				name: null,
				password: null,
				msg: '完善资料',
				prompt: '请完善老师个人资料',
				subjects: [],
				periods: [],
				selectSubject: null,
				selectPeriod: null,
				formItem: {
					input: null
				}
			}
		},
		created () {
			this.listPeriods()
			this.listSubjects()
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
			},
			listPeriods () {
				let that = this
				this.service.listPeriods().then(function (data) {
					if (data.status === 200) {
						if (data.data && data.data.length > 0) {
							that.periods = data.data
							that.selectPeriod = that.periods[0]
						}
					}
				})
			},
			listSubjects () {
				let that = this
				let param = {
					status: 0
				}
				this.service.listSubjects(param).then(function (data) {
					if (data.status === 200) {
						if (data.data && data.data.length > 0) {
							that.subjects = data.data
							that.selectSubject = that.subjects[0]
						}
					}
				}).catch(function () {})
			},
			changePeriod (period) {
				this.selectPeriod = period
			},
			changeSubject (subject) {
				this.selectSubject = subject
			}
		}
	}
</script>

<style lang="scss">
	@import "./login.scss";
</style>