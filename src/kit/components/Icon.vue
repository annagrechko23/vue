<template>
	<span class="icon-wrap" :is="child_component">
		<slot ></slot>
	</span>
</template>

<script>
import InfinityIcon from "vue-material-design-icons/Infinity.vue";
import CampfireIcon from "vue-material-design-icons/Campfire.vue";

export default {
	name: "kit-icon",
	components: {
		CampfireIcon,
		InfinityIcon
	},
	data() {
		return {
			child_component: 'InfinityIcon' || 'CampfireIcon'
		};
	}
};
// Vue.component('campfire-icon', InfinityIcon);
// Vue.component('infinity-icon', CampfireIcon);
</script>