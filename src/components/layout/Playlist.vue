<template>
	<div class="main-wrap">
		<h1 class="main-title">{{title}}</h1>
		<div class v-if="window.width > 767">
			<kit-card :list="getAlbums">
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

		<kit-slider-mobile v-else :list="getAlbums" >
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
			// lists: [
			// 	{
			// 		id: 1,
			// 		name: "Cardi B",
			// 		handle: "Invasion of Privacy",
			// 		img:
			// 			"https://lastfm-img2.akamaized.net/i/u/770x0/7945422564255cad87cdaab2af2fa441.jpg"
			// 	},
			// 	{
			// 		id: 2,
			// 		name: "Migos",
			// 		handle: "Culture II",
			// 		img:
			// 			"https://media.pitchfork.com/photos/5a6b9d32fe3db33813a1dad5/2:1/w_790/migos-culture-ii-album.jpg"
			// 	},
			// 	{
			// 		id: 3,
			// 		name: "Offset",
			// 		handle: "Red Room",
			// 		img:
			// 			"https://hiphop-n-more.com/wp-content/uploads/2019/02/video-offset-red-room.jpg"
			// 	},
			// 	{
			// 		id: 4,
			// 		name: "A$AP Rocky",
			// 		handle: "Praise The Lord",
			// 		img: "https://i.ytimg.com/vi/Gvdnyx93oq8/maxresdefault.jpg"
			// 	},
			// 	{
			// 		id: 5,
			// 		name: "Lil Nas X",
			// 		handle: "Old Town Road ",
			// 		img:
			// 			"https://media.pitchfork.com/photos/5d091405303a816c21511bfc/1:1/w_600/7_LilNasX.jpg"
			// 	},
			// 	{
			// 		id: 6,
			// 		name: "Travis Scott ",
			// 		handle: "Astroworld",
			// 		img:
			// 			"https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg"
			// 	},
			// 	{
			// 		id: 7,
			// 		name: "T.I. ",
			// 		handle: "King",
			// 		img:
			// 			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEAgxdI9R2MJt45BAcvmAMBZSm2qH9J4EHFGH0DRwaJ_At5nL"
			// 	},
			// 	{
			// 		id: 8,
			// 		name: "Kanye West",
			// 		handle: "Kids See Ghosts",
			// 		img:
			// 			"https://images-na.ssl-images-amazon.com/images/I/61M0FgUeePL._SY400_.jpg"
			// 	},
			// 	{
			// 		id: 9,
			// 		name: "Kendrick Lamar ",
			// 		handle: "Damn",
			// 		img:
			// 			"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/04/kendrick-lamar-damn-cover-041317-920x584.jpg"
			// 	},
			// 	{
			// 		id: 10,
			// 		name: "Drake",
			// 		handle: "Scorpion",
			// 		img:
			// 			"https://imgix.bustle.com/uploads/image/2018/7/13/0be21071-faa1-4161-a654-dc1be7a1f0cd-screen-shot-2018-07-13-at-41137-pm.jpg"
			// 	},
			// 	{
			// 		id: 11,
			// 		name: "James",
			// 		handle: "@jokerjames",
			// 		img: "https://semantic-ui.com/images/avatar2/large/matthew.png"
			// 	},
			// 	{
			// 		id: 12,
			// 		name: "Fatima",
			// 		handle: "@fantasticfatima",
			// 		img: "https://semantic-ui.com/images/avatar2/large/molly.png"
			// 	},
			// 	{
			// 		id: 13,
			// 		name: "Xin",
			// 		handle: "@xeroxin",
			// 		img: "https://semantic-ui.com/images/avatar2/large/elyse.png"
			// 	},
			// 	{
			// 		id: 14,
			// 		name: "Fatima",
			// 		handle: "@fantasticfatima",
			// 		img: "https://semantic-ui.com/images/avatar2/large/molly.png"
			// 	}
			// ]
		};
	},
	computed: {
		...mapGetters(['getAlbums']),
	},
	created() {
		this.setAlbums();
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	destroyed() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		...mapActions(['setAlbums']),

		handleResize() {
			this.window.width = window.innerWidth;
		}
	}
};
</script>