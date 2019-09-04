<template>
	<div class>
		<Inputs v-model="value" :placeholder="placeholder" label="Email Address" validate>
			<template #icon>
				<Icon>
					<img class="image-slot" :src="imageUrl" alt />
				</Icon>
			</template>
		</Inputs>
		<hr class="custom-hr" />
		<Button buttonClass="medium rounded">
			Custom Button
			<template v-slot:icon>
				<Icon>
					<img class="image-slot" :src="imageUrl" alt />
				</Icon>
			</template>
		</Button>
		<hr class="custom-hr" />
		<Switcher>{{message}}</Switcher>
		<hr class="custom-hr" />
		<Avatar avatarClass="large" />
		<hr class="custom-hr" />
		<Select v-model="flight.departure" :options="options"></Select>
	</div>
</template>

<script>
import Inputs from "./../components/Input";
import Button from "./../components/Button";
import Switcher from "./../components/Switcher";
import Avatar from "./../components/Avatar";
import Select from "./../components/Select";
import Icon from "./../components/Icon";

export default {
	name: "Components",
	components: {
		Inputs,
		Button,
		Switcher,
		Avatar,
		Select,
		Icon
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
