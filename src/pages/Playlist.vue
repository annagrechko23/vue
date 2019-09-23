<template>
	<playlist title="Playlist" :setAlbums="setAlbums"  />
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import Playlist from "../components/layout/Playlist.vue"
export default {
	name: "profile",
	components: {

		Playlist
	},
	data() {
		return {
			videos: this.setAlbums
		}
	},
	computed: {
		...mapGetters(["setAlbums"]),
		...mapState(['albums'])
	},
	async created() {
		await this.getAlbums();
	},
	methods: {
		...mapActions(["getAlbums"]),
	},
	watch: {
  setAlbums() {
    this.videos = this.setAlbums
  }
}
}
</script>

