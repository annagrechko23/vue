<template>
	<div class="main-wrap">
		<tabs>
			<tab name="Info" :selected="true">
				<div class="registration-wrapper">
					<form>
						<div class="avatar-wrapper">
							<kit-upload v-model="file" :formats="formats" :size="sizeKB" />

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
							<kit-input type="email" v-model="email" disabled placeholder="Email:">
								<template #icon>
									<kit-icon icon="envelope" />
								</template>
							</kit-input>
						</div>
						<kit-button class="submit" size="large" shape="square">Save</kit-button>
					</form>
				</div>
			</tab>
			<tab name="Favorites">
				<playlist title="Your Favourite" />
			</tab>
		</tabs>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Tab from "../components/layout/Tab.vue";
import Tabs from "../components/layout/Tabs.vue";
import Playlist from "../components/layout/Playlist.vue";
export default {
	name: "profile",
	components: {
		Tab,
		Tabs,
		Playlist
	},
	computed: {
		...mapGetters(["isLoggedIn", "getEmail"])
	},
	data() {
		return {
			password: "",
			email: "",
			firstName: "",
			file: null,
			formats: ["image/jpg", "image/jpeg", "image/png"],
			sizeKB: 700,
			lastName: "",
			src:
				"https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-songs-@288.png"
		};
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