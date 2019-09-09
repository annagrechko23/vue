<template>
	<span class="icon-wrap">
		<slot ></slot>
	</span>
</template>

<script>
import Vue from "vue";
import InfinityIcon from "vue-material-design-icons/Infinity.vue";
import CampfireIcon from "vue-material-design-icons/Campfire.vue";

export default {
	name: "kit-icon",
 
};
Vue.component('campfire-icon', InfinityIcon);
Vue.component('infinity-icon', CampfireIcon);
</script>