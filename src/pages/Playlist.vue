<template>
	<div class="main-wrap">
	<h1 class="main-title">Your Playlist</h1>
		<div class="" v-if="!mobile">
				<kit-card  :list="lists">
					<template #favorites>
					<kit-icon icon="heart" />
					</template>
					<template #playlist>
					<kit-icon icon="bookmark" />
					</template>
					<template #remove >
					<kit-icon icon="trash" />
					</template>
				</kit-card>
			</div>
		
				<kit-slider-mobile v-else :list="lists" />
	</div>
</template>

<script>
export default {
	name: "playlist",
	data() {
		return {
		mobile: window.innerWidth <= 700,
			lists: [
				{
					id: 1,
					name: "James",
					handle: "@jokerjames",
					img: "https://semantic-ui.com/images/avatar2/large/matthew.png"
				},
				{
					id: 2,
					name: "Fatima",
					handle: "@fantasticfatima",
					img: "https://semantic-ui.com/images/avatar2/large/molly.png"
				},
				{
					id: 3,
					name: "Xin",
					handle: "@xeroxin",
					img: "https://semantic-ui.com/images/avatar2/large/elyse.png"
				},
				{
					id: 4,
					name: "Fatima",
					handle: "@fantasticfatima",
					img: "https://semantic-ui.com/images/avatar2/large/molly.png"
				},
				{
					id: 5,
					name: "Xin",
					handle: "@xeroxin",
					img: "https://semantic-ui.com/images/avatar2/large/elyse.png"
				},
				{
					id: 6,
					name: "Xin",
					handle: "@xeroxin",
					img: "https://semantic-ui.com/images/avatar2/large/elyse.png"
				},
				{
					id: 7,
					name: "Fatima",
					handle: "@fantasticfatima",
					img: "https://semantic-ui.com/images/avatar2/large/molly.png"
				},
				{
					id: 8,
					name: "Xin",
					handle: "@xeroxin",
					img: "https://semantic-ui.com/images/avatar2/large/elyse.png"
				}
			],
			
		}
	}
};
</script>