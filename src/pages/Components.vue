<template>
	<div>
		<kit-input v-model="value" :placeholder="placeholder" label="Email Address" validate>
			<template #icon>
				<kit-icon >
					<infinity-icon class="image-slot" />
				</kit-icon>
			</template>
		</kit-input>
		{{ value }}
		<hr class="custom-hr" />
		<kit-button size="medium" shape="rounded">
			Custom Button
		<template #icon>
			<kit-icon >
				<campfire-icon  class="image-slot" />
			</kit-icon>
				</template>
		</kit-button>
		<hr class="custom-hr" />
		<kit-switcher v-model="checked"  />
		<hr class="custom-hr" />
		<kit-avatar size="large" name="Vue js" />
		<hr class="custom-hr" />
		<kit-select v-model="selected" :options="options" />
		<hr class="custom-hr" />
				<h1>Custom Card</h1>
			<div v-if="!mobile"  class="list-wrap" :list="lists">
			
		<div v-for="character in lists" :key="character.id" :title="character.name">
			<kit-card >
			   <img slot="img" :src="character.img">
			  <template #favorites>
			<kit-icon >
				<heart-icon  class="image-slot" />
			</kit-icon>
				</template>
				<template #playlist>
			<kit-icon >
				<bookmark-icon class="image-slot" />
			</kit-icon>
					</template>
		</kit-card>
		</div>
	</div>
		<kit-slider-mobile v-else :list="lists" />
	</div>
</template>

<script>

export default {
	name: "Components",

	data() {
		return {
			value: "",
			checked: false,
			placeholder: "this",
			message: "new hint",
			mobile: window.innerWidth <= 700,
			selected: "",
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
			options: ["Argentina", "United States of America", "Germany", "China"]
		};
	},
	created() {
		addEventListener("resize", () => {
			this.mobile = innerWidth <= 700;
		});
	}
};
</script>

<style>
#app {
	text-align: center;
	overflow: hidden;
}

.image-slot {
	width: 30px;
	height: auto;
}
h1 {
	font-family: "Roboto", sans-serif;
	line-height: 1.5;
	font-weight: normal;
	text-transform: capitalize;
}
.wrap {
	margin-bottom: 40px;
}
.custom-hr {
	width: 80%;
	margin: 40px auto;
}
</style>
