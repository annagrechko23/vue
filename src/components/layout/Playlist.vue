<template>
	<div class="main-wrap">
		<h1 class="main-title">{{title}}</h1>
		<div class v-if="window.width > 767">
			<div class="list-wrap">
				<kit-card v-for="item in setAlbums" :list="item" :key="item.id">
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
		</div>
		<kit-slider-mobile v-else :list="setAlbums">
			<template #favorites>
				<kit-icon icon="heart" />
			</template>
			<template #playlist>
				<kit-icon icon="bookmark" />
			</template>
			<template #remove>
				<kit-icon icon="trash" />
			</template>
		</kit-slider-mobile>
	</div>
</template>

<script>
export default {
	name: "playlist",
	props: {
		title: {
			type: String,
			default: "Playlist"
		},
		setAlbums: { type: Array, default: () => [] }
	},

	data() {
		return {
			mobile: window.innerWidth <= 700,
			window: {
				width: 0
			}
		};
	},

	async created() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	destroyed() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		handleResize() {
			this.window.width = window.innerWidth;
		}
	}
};
</script>
