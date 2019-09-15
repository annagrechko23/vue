<template>
	<span class="icon-wrap">
		<font-awesome-icon :icon="iconTag" />
	</span>
</template>

<script>
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faUserSecret,
	faHeart,
	faSave,
	faBookmark,
	faBoxes,
	faEnvelope,
	faKey,
	faUser,
	faTrash,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faHeart, faSave, faBookmark, faBoxes, faEnvelope, faKey, faUser, faTrash, faBars);

Vue.component("font-awesome-icon", FontAwesomeIcon);
export default {
	name: "kit-icon",

	props: {
		icon: {
			type: String,
			default: null,
			required: true
		}
	},
	computed: {
		iconTag() {
			return this.icon;
		}
	}
};
</script>