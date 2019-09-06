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
		<kit-select v-model="flight.departure" :options="options"></kit-select>
	</div>
</template>

<script>
import InfinityIcon from 'vue-material-design-icons/Infinity.vue';
import CampfireIcon from 'vue-material-design-icons/Campfire.vue';

export default {
	name: "Components",
	components: {
		InfinityIcon,
		CampfireIcon,
	},
	data() {
		return {
			value: "",
			placeholder: "this",
			imageUrl:
				"https://cdn-images-1.medium.com/max/2000/1*b3nQCtGsY2BWPFO_sUVRrg.png",
			message: "new hint",
			avatarUrl: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
			flight: {
				departure: {
					date: "01/03/2019",
					country: {
						name: "Argentina",
						code: "AR"
					}
				}
			},
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
	}
};
</script>
<style>
#app {
	text-align: center;
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
