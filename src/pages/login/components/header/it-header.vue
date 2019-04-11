<template>
	<div class="header">
		<div class="row-fluid">
			<div class="span12">
				<h3>{{ statusMsg }}<img src="../../../../assets/img/logo.jpg" class="pull-right"></h3>
				<p>{{ promptMsg }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login-header',
		props: ['msg', 'prompt'],
		data () {
			return {
				statusMsg: this.$props['msg'],
				promptMsg: this.$props['prompt']
			}
		}
	}
</script>

<style lang="scss">
	@import "header.scss";
</style>