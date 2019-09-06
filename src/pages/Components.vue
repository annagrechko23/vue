<template>
	<div>
		<kit-input v-model="value" :placeholder="placeholder" label="Email Address" validate>
			<template #icon>
				<kit-icon>
					<infinity-icon class="image-slot" />
				</kit-icon>
			</template>
		</kit-input>
		<hr class="custom-hr" />
		<kit-button buttonClass="medium rounded">
			Custom Button
			<template v-slot:icon>
				<kit-icon>
					<campfire-icon class="image-slot" />
				</kit-icon>
			</template>
		</kit-button>
		<hr class="custom-hr" />
		<kit-switcher />
		<hr class="custom-hr" />
		<kit-avatar avatarClass="large" />
		<hr class="custom-hr" />
		<kit-select v-model="selected" :options="options" />
		<hr class="custom-hr" />
		<kit-slider v-if="!mobile" :list="lists" />
		<kit-slider-mobile v-else :list="lists" />
	</div>
</template>

<script>
import InfinityIcon from "vue-material-design-icons/Infinity.vue";
import CampfireIcon from "vue-material-design-icons/Campfire.vue";

export default {
	name: "Components",
	components: {
		InfinityIcon,
		CampfireIcon
	},
	data() {
		return {
			value: "",
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
			options: [
				{
					name: "Argentina",
					code: "AR"
				},
				{
					name: "United States of America",
					code: "US"
				},
				{
					name: "Germany",
					code: "DE"
				},
				{
					name: "China",
					code: "CN"
				}
			]
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
