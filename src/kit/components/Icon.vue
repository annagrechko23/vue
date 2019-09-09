<template>
	 <span class="icon-wrap" >
		{{iconTag}}
	</span>
</template>

<script>
import Vue from 'vue';
import InfinityIcon from "vue-material-design-icons/Infinity.vue";
import CampfireIcon from "vue-material-design-icons/Campfire.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import Bookmark from "vue-material-design-icons/Bookmark.vue";

export default {
	name: "kit-icon",
	components: {
		InfinityIcon,
		CampfireIcon,
		Heart,
		Bookmark
	},
	props: {
		icon: {
			type: String,
			default: null,
			required: true,
		}
	},
	data() {
		return {
			child_component: 'InfinityIcon' || 'CampfireIcon'
		};
	},
	computed: {
		iconTag() {
			return `<${this.icon} />`
		}
	}

};
// Vue.component('campfire-icon', InfinityIcon);
// Vue.component('infinity-icon', CampfireIcon);
// Vue.component('heart-icon', Heart);
// Vue.component('bookmark-icon', Bookmark);
</script>