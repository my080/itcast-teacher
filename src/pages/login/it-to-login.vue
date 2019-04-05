<template>
	<div class="to-login">
		{{ test }}
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {},
		data () {
			return {
				test: this.$store.state.login.test
			}
		}
	}
</script>

<style>

</style>