<template>
	<!-- <span class="icon-wrap" :is="child_component"> -->
	<span class="icon-wrap" >
		<slot ></slot>
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
	data() {
		return {
			child_component: 'InfinityIcon' || 'CampfireIcon'
		};
	}
};
Vue.component('campfire-icon', InfinityIcon);
Vue.component('infinity-icon', CampfireIcon);
Vue.component('heart-icon', Heart);
Vue.component('bookmark-icon', Bookmark);
</script>