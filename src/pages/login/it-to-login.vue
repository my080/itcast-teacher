<template>
	<div class="dashboard-wrapper">
		<div class="row-fluid">
			<div class="widget-body">
				<div class="span6">
					<div class="sign-in-container">
						<form action="#" class="login-wrapper" method="post">
							<div class="header">
								<div class="row-fluid">
									<div class="span12">
										<h3>登录<img src="../../assets/img/logo.jpg" class="pull-right"></h3>
										<p>请输入邮箱和登录密码</p>
									</div>
								</div>
							
							</div>
							<div class="content">
								<div class="row-fluid">
									<div class="span12">
										<input class="input span12 email" name="" placeholder="Email" required="required" type="email" value="">
									</div>
								</div>
								<div class="row-fluid">
									<div class="span12">
										<input class="input span12 password" name="" placeholder="Password" required="required" type="password">
									</div>
								</div>
							</div>
							<div class="actions">
								<input class="btn btn-danger" name="Login" type="submit" value="登录" >
								<a class="link" href="#">忘记密码</a>
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
	export default {
		name: 'to-login',
		components: {},
		data () {
			return {
				test: this.$store.state.login.test
			}
		}
	}
</script>

<style lang="scss">
    @import "./login.scss";
</style>