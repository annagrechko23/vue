<template>
	<div class="registration-wrapper">
		<h1 class="login-title">Registration</h1>
		<form>
		<div class="avatar-wrapper	">
				<kit-input type="file" v-model="avatar" class="avatar-upload" placeholder="First Name:">
		
			</kit-input>
				<div class="title-inputs">
						<div class="wrap-input">
				
				<kit-input type="text" v-model="firstName" placeholder="First Name:">
					<template #icon>
						<kit-icon icon="user" />
						</template>
			</kit-input>
			</div>
			<div class="wrap-input">
				<kit-input type="text" v-model="lastName" placeholder="Last Name:">
							<template #icon>
						<kit-icon icon="user" />
						</template>
						</kit-input>
			</div>
			</div>
		</div>
					
		
			<div class="wrap-input">
				
				<kit-input type="email" v-model="email" placeholder="Email:">
					<template #icon>
						<kit-icon icon="envelope" />
						</template>
			</kit-input>
			</div>
			<div class="wrap-input">
				<kit-input type="password" v-model="password" placeholder="Password:">
							<template #icon>
						<kit-icon icon="key" />
						</template>
						</kit-input>
			</div>
			<kit-button class="submit" size="large" shape="square">Sign Up</kit-button>
		</form>
	</div>
</template>

<script>
export default {
	name: "registration",
	data() {
		return{
			password: '',
			email: '',
			firstName: '',
			lastName: '',
			src: 'https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-songs-@288.png'
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

.registration-wrapper {
	max-width: 600px;
	margin: 0 auto;
}
.avatar-wrapper{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.avatar-container{
	width: 30%;
}
.title-inputs{
	width: 60%;
}

</style>