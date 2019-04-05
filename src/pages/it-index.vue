<template>
	<div id="index">
		<it-header></it-header>
		<header>
			<a href="#" class="logo">
				<img src="img/logo.png" alt="logo" />
			</a>
			<div class="btn-group">
				<button class="btn btn-primary">
					用户名
				</button>
				<button data-toggle="dropdown" class="btn btn-primary dropdown-toggle">
          <span class="caret">
          </span>
				</button>
				<ul class="dropdown-menu pull-right">
					<li>
						<a href="#">
							Edit Profile
						</a>
					</li>
					<li>
						<a href="#">
							Account Settings
						</a>
					</li>
					<li>
						<a href="#">
							Logout
						</a>
					</li>
				</ul>
			</div>
			<ul class="mini-nav">
				<li>
					<a href="#">
						<div class="fs1" aria-hidden="true" data-icon="&#xe040;"></div>
						<span class="info-label badge badge-warning">
              3
            </span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="fs1" aria-hidden="true" data-icon="&#xe04c;"></div>
						<span class="info-label badge badge-info">
              5
            </span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="fs1" aria-hidden="true" data-icon="&#xe037;"></div>
						<span class="info-label badge badge-success">
              9
            </span>
					</a>
				</li>
			</ul>
		</header>
		<div class="container-fluid">
			<div class="dashboard-container">
				<div class="top-nav">
					<ul>
						<li>
							<a href="index.html" class="selected">
								<div class="fs1" aria-hidden="true" data-icon="&#xe0a0;"></div>
								主页
							</a>
						</li>
						<li>
							<a href="forms.html">
								<div class="fs1" aria-hidden="true" data-icon="&#xe0b8;"></div>
								随堂练习
							</a>
						</li>
						<li>
							<a href="graphs.html">
								<div class="fs1" aria-hidden="true" data-icon="&#xe096;"></div>
								教学工具
							</a>
						</li>
						<li>
							<a href="ui-elements.html">
								<div class="fs1" aria-hidden="true" data-icon="&#xe0d2;"></div>
								个人中心
							</a>
						</li>
					</ul>
					<div class="clearfix">
					</div>
				</div>
				
				<div class="sub-nav">
					<!--<ul>-->
						<!--<li><a href="" class="heading">Dashboard</a></li>-->
						<!--<li>-->
							<!--<a href="#mailbox">-->
								<!--Mailbox-->
							<!--</a>-->
						<!--</li>-->
						<!--<li>-->
							<!--<a href="#todo">-->
								<!--ToDos-->
							<!--</a>-->
						<!--</li>-->
						<!--<li>-->
							<!--<a href="#chats">-->
								<!--Chats-->
							<!--</a>-->
						<!--</li>-->
						<!--<li>-->
							<!--<a href="#notifications">-->
								<!--Notifications-->
							<!--</a>-->
						<!--</li>-->
					<!--</ul>-->
					<div class="btn-group pull-right">
						<button class="btn btn-primary">
							Main Menu
						</button>
						<button data-toggle="dropdown" class="btn btn-primary dropdown-toggle">
              <span class="caret">
              </span>
						</button>
						<ul class="dropdown-menu pull-right">
							<li>
								<a href="index.html" data-original-title="">
									Dashboard
								</a>
							</li>
							<li>
								<a href="forms.html" data-original-title="">
									Forms
								</a>
							</li>
							<li>
								<a href="graphs.html" data-original-title="">
									Graphs
								</a>
							</li>
							<li>
								<a href="ui-elements.html" data-original-title="">
									UI Elements
								</a>
							</li>
							<li>
								<a href="icons.html" data-original-title="">
									Icons
								</a>
							</li>
							<li>
								<a href="tables.html" data-original-title="">
									Tables
								</a>
							</li>
							<li>
								<a href="media.html" data-original-title="">
									Media
								</a>
							</li>
							<li>
								<a href="calendar.html" data-original-title="">
									Calendar
								</a>
							</li>
							<li>
								<a href="typography.html" data-original-title="">
									Typography
								</a>
							</li>
							<li>
								<a href="edit-profile.html" data-original-title="">
									Edit Profile
								</a>
							</li>
							<li>
								<a href="invoice.html" data-original-title="">
									Invoice
								</a>
							</li>
							<li>
								<a href="login.html" data-original-title="">
									Login
								</a>
							</li>
							<li>
								<a href="404.html" data-original-title="">
									404 Page
								</a>
							</li>
							<li>
								<a href="500.html" data-original-title="">
									500 Page
								</a>
							</li>
							<li>
								<a href="help.html" data-original-title="">
									Help
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="dashboard-wrapper">
				
				
				</div>
			</div>
			<!--/.fluid-container-->
		</div>
		<it-footer></it-footer>
	</div>
</template>

<script>
	import Header from './components/header/it-header.vue'
	import Footer from './components/footer/it-footer.vue'
	
	export default {
		name: 'index',
		components: {
			'it-footer': Footer,
			'it-header': Header
		}
	}
</script>

<style>
	@import "../assets/css/main.css";
</style>