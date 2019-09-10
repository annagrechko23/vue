<template>
	<div class="avatar-container">
		<img class="avatar" v-if="src" :src="src" alt :class="size" />
		<span v-else class="avatar-text" :name="name" :class="size">{{getInitials}}</span>
	</div>
</template>

<script>
export default {
	name: "kit-avatar",
	props: {
		src: {
			type: String
		},
		name: { //added name
			type: String
		},
		size: { // used  option instead of className
			type: String,
			default: "medium",
			validator: type => ["small", "medium", "large"].includes(type)
		}
	},
	computed: {
		getInitials() {
			// replaced method
			const [firstName = "", lastName = ""] = this.name.split(" ");
			return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
		}
	},

};
</script>

<style scoped>
.avatar-text,
.avatar {
	align-content: center;
	align-items: center;
	justify-content: center;
	display: flex;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background: #ccc;
	color: #fff;
	font-size: 14px;
	margin: 0 auto;
	text-transform: uppercase;
}
.large {
	width: 100px;
	height: 100px;
	font-size: 40px;
}
.medium {
	width: 100px;
	height: 100px;
	font-size: 20px;
}
.small {
	width: 50px;
	height: 50px;
}
</style>