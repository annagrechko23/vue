<template>
	<playlist title="Playlist" :setAlbums="setAlbums" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Playlist from "../components/layout/Playlist.vue";

export default {
	name: "profile",
	components: {
		Playlist
	},
	computed: {
		...mapGetters(["setAlbums", "isAuth"])
	},
	async created() {
		await this.getAlbums();
	},
	methods: {
		...mapActions(["getAlbums"])
	},
};
</script>

