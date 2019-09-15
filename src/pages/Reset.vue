<template>
	<div class="login-wrapper">
		<h1 class="login-title">Change Email</h1>
		<form>
			<div class="wrap-input">
				
				<kit-input type="email" v-model="email" placeholder="Current Email:">
					<template #icon>
						<kit-icon icon="envelope" />
						</template>
			</kit-input>
			</div>
			<div class="wrap-input">
				<kit-input type="email" v-model="newEmail" placeholder="New Email:">
							<template #icon>
						<kit-icon icon="envelope" />
						</template>
						</kit-input>
			</div>
			<kit-button class="submit" size="large" shape="square">Change</kit-button>
		</form>
	</div>
</template>

<script>
export default {
	name: "reset",
	data() {
		return{
			password: '',
			newEmail: ''

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
	margin: 100px auto;

}
</style>