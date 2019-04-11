<template>
	<div class="dashboard-wrapper">
		<div class="row-fluid">
			<div class="widget-body">
				<div class="span6">
					<div class="sign-in-container">
						<div class="login-wrapper">
							
							<it-header :msg="msg" :prompt="prompt"></it-header>
							
							<div class="content">
								<i-form :model="consumer" :rules="ruleValidate" :label-width="80">
									<i-form-item label="姓名：">
										<i-input v-model="consumer.name" placeholder="教师姓名"></i-input>
									</i-form-item>
									<i-form-item label="密码：">
										<i-input v-model="consumer.password" placeholder="请输入密码" type="password"></i-input>
									</i-form-item>
									<i-form-item label="确认密码：">
										<i-input v-model="consumer.passwdCheck" placeholder="请输入密码" type="password"></i-input>
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
								<!--<a class="left-link" @click="toRegister" href="#">注册新老师</a>-->
								<input class="btn btn-danger" @click="toLogin" name="Login" type="button" value="去登录" >
								<div class="clearfix"></div>
							</div>
						</div>
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
				consumer: {
					"name":"",
					"password":"",
					"passwdCheck": "",
					"status":"1",
					"schools":[],
					"periods":[],
					"subjects":[],
					"id":"5caef5e3fb221648c4cb3fe4"
				},
				ruleValidate: {
					name: [
						{ required: true, message: '姓名不能为空！', trigger: 'blur' }
					],
					passwdCheck: '',
					mail: [
						{ required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
						{ type: 'email', message: 'Incorrect email format', trigger: 'blur' }
					],
					city: [
						{ required: true, message: 'Please select the city', trigger: 'change' }
					],
					gender: [
						{ required: true, message: 'Please select gender', trigger: 'change' }
					],
					interest: [
						{ required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
						{ type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
					],
					date: [
						{ required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
					],
					time: [
						{ required: true, type: 'string', message: 'Please select time', trigger: 'change' }
					],
					desc: [
						{ required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
						{ type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
					]
				}
			}
		},
		created () {
			this.transformCode()
			this.listPeriods()
			this.listSubjects()
		},
		methods: {
			transformCode () {
				let that = this
				if (this.$route.query.hasOwnProperty('code')) {
					let code = this.$route.query.code
					let param = {
						code: code
					}
					this.service.getUserByCode(param).then(function (data) {
						if (data.data.code !== 200) {
							that.$router.push('/')
						}
						if (!data.data.data) {
							that.$router.push('/')
						}
					}, function () {
						that.$router.push('/')
					})
				} else {
					that.$router.push('/')
				}
			},
			toRegister () {
				this.$router.push('/register')
			},
			toLogin () {
				this.$router.push('/')
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