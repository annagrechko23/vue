<template>
	<playlist title="Playlist" :albums="albums" />
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Playlist from "../components/layout/Playlist.vue";

export default {
	name: "profile",
	components: {
		Playlist
	},
	computed: {
    ...mapState(['albums']),
		...mapGetters(["isAuth"])
	}
};
</script>

