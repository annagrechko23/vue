<template>
	<div class="login-wrapper">
		<h1 class="login-title">Change Email</h1>
		<form @submit="save">
			<div class="wrap-input">
				<kit-input type="email" v-model="user.email" required placeholder="Current Email:">
					<template #icon>
						<kit-icon icon="envelope" />
					</template>
				</kit-input>
			</div>
			<div class="wrap-input">
				<kit-input type="email" v-model="user.newEmail" required placeholder="New Email:">
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
import { mapState, mapActions } from "vuex";

export default {
	name: "reset",
	computed: {
		...mapState(["user"])
	},
	created() {
		this.getProfile();
	},
	methods: {
		...mapActions(["getProfile", "changeEmail"]),
		save() {
			const profile = { // use const when you don't wanna change a variable
				name: this.user.name,
				surnname: this.user.surnname,
				email: this.user.newEmail,
				image: this.user.image,
				id: this.user.id
			};
			this.changeEmail(profile);
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