<template>
	<div class="login-wrapper">
		<h1 class="login-title">Login</h1>
		<form>
			<div class="wrap-input">
				<kit-input type="email" v-model="email" placeholder="Email:" />
			</div>
			<div class="wrap-input">
				<kit-input type="password" v-model="password" placeholder="Password:" />
			</div>
			<kit-button class="submit" size="large" shape="square">Login</kit-button>
		</form>
	</div>
</template>

<script>
export default {
	name: "login",
	data() {
		return{
			password: '',
			email: ''

		}
	}
}
</script>

<style lang="scss" scoped>
.login-title {
	font-size: 30px;
	font-weight: bold;
	color: #403866;
	line-height: 1.2;
	text-transform: uppercase;
	text-align: center;
	width: 100%;
	display: block;
}

.login-wrapper {
	max-width: 600px;
	margin: 0 auto;
}
</style>