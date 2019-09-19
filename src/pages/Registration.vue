<template>
	<div class="registration-wrapper">
		<h1 class="login-title">Registration</h1>
		<form @submit="setUser(user)">
			<div class="avatar-wrapper">
				<kit-upload v-model="user.file" :formats="formats" :size="sizeKB" />

				<div class="title-inputs">
					<div class="wrap-input">
						<kit-input type="text" v-model="user.name" placeholder="First Name:">
							<template #icon>
								<kit-icon icon="user" />
							</template>
						</kit-input>
					</div>
					<div class="wrap-input">
						<kit-input type="text" v-model="user.surname" placeholder="Last Name:">
							<template #icon>
								<kit-icon icon="user" />
							</template>
						</kit-input>
					</div>
				</div>
			</div>

			<div class="wrap-input">
				<kit-input type="email" v-model="user.email" placeholder="Email:">
					<template #icon>
						<kit-icon icon="envelope" />
					</template>
				</kit-input>
			</div>
			<div class="wrap-input">
				<kit-input type="password" v-model="user.password" placeholder="Password:">
					<template #icon>
						<kit-icon icon="key" />
					</template>
				</kit-input>
			</div>
			<kit-button
				class="submit"
				v-model="user"
			
				size="large"
				shape="square"
			>Sign Up</kit-button>
		</form>
	</div>
</template>

<script>
export default {
	name: "registration",
	data() {
		return {
			formats: ["image/jpg", "image/jpeg", "image/png"],
			sizeKB: 700,

			user: {
				email: "",
				name: "",
				id: '',
				surname: "",
				image:
					"https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-songs-@288.png"
			}
		};
	},
	methods: {
		async setUser() {
			console.log(this.user);
			await this.$api.auth.signup(this.user)

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

.registration-wrapper {
	max-width: 600px;
	margin: 50px auto;
}
.avatar-wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.avatar-container {
	width: 30%;
}
.title-inputs {
	width: 60%;
}
</style>