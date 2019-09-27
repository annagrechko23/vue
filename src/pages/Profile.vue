<template>
	<div class="main-wrap">
		<tabs>
			<tab name="Info" :selected="true">
				<div class="registration-wrapper">
					<form @submit="save">
						<div class="avatar-wrapper">
							<kit-upload v-model="user.image" :formats="formats" :size="sizeKB" />
							<div class="title-inputs">
								<div class="wrap-input">
									<kit-input type="text" v-model="user.name" placeholder="First Name:">
										<template #icon>
											<kit-icon icon="user" />
										</template>
									</kit-input>
								</div>
								<div class="wrap-input">
									<kit-input type="text" v-model="user.surnname" placeholder="Last Name:">
										<template #icon>
											<kit-icon icon="user" />
										</template>
									</kit-input>
								</div>
							</div>
						</div>

						<div class="wrap-input">
							<kit-input type="email" v-model="user.email" disabled placeholder="Email:">
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
				<playlist :setAlbums="favourites" title="Your Favourite" />
			</tab>
		</tabs>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
	data() {
		return {
			formats: ["image/jpg", "image/jpeg", "image/png"],
			sizeKB: 700
		};
	},
	computed: mapGetters(["isAuth", "user", "favourites"]),
	methods: mapActions({
    async updateProfile(dispatch) {
      await dispatch('updateProfile', {
        name: this.user.name,
        surnname: this.user.surnname,
        email: this.user.email,
        image: this.user.image,
        id: this.user.id
      });
    }
  })
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

.avatar-wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.avatar-container {
	width: 30%;
}

</style>