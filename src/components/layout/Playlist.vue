<template>
	<div class="main-wrap">
		<h1 class="main-title">{{title}}</h1>
		<div class v-if="window.width > 767">
			<kit-card :list="setAlbums">
				<template #favorites>
					<kit-icon icon="heart" />
				</template>
				<template #playlist>
					<kit-icon icon="bookmark" />
				</template>
					<template #remove>
					<kit-icon icon="trash" />
				</template>
			</kit-card>
		</div>

		<kit-slider-mobile v-else :list="setAlbums" >
			<template #favorites>
					<kit-icon icon="heart" />
				</template>
				<template #playlist>
					<kit-icon icon="bookmark" />
				</template>

		</kit-slider-mobile>
	</div>
</template>

<script>
	import { mapGetters, mapActions  } from 'vuex';
export default {
	name: "playlist",
	props: {
		title: {
			type: String,
			default: "Playlist"
		}
	},

	data() {
		return {
			mobile: window.innerWidth <= 700,
			window: {
				width: 0
			},
		};
	},
	computed: {
		...mapGetters(['setAlbums']),
	},
	created() {
		this.getAlbums();
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	destroyed() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		...mapActions(['getAlbums']),

		handleResize() {
			this.window.width = window.innerWidth;
		}
	}
};
</script>