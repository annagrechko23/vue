<template>
	<div class="login-wrapper">
		<h1 class="login-title">Login</h1>
		<form @submit.stop="setUser">
			<div class="wrap-input">
				<kit-input type="email" v-model="profile.email" placeholder="Email:">
					<template #icon>
						<kit-icon icon="envelope" />
					</template>
				</kit-input>
			</div>
			<div class="wrap-input">
				<kit-input type="password" v-model="profile.password" placeholder="Password:">
					<template #icon>
						<kit-icon icon="key" />
					</template>
				</kit-input>
			</div>
			<kit-button class="submit" size="large" shape="square">Login</kit-button>
		</form>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "login",
	data() {
		return {
			profile: {
				name: "",
				surnname: "",
				email: "",
				image: "",
				id: ""
			}
		};
	},
	methods: {
		...mapActions(["login"]),
		async setUser() {
			await this.login(this.profile);
		}
	}
};
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