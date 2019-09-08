<template>
	<div class="wrap">
		<h1>Avatar</h1>
		<img class="avatar" v-if="avatarSrc" :src="avatarSrc" alt :class="avatarClass" />
		<span v-else class="avatar-text" :class="avatarClass">{{getInitials()}}</span>
	</div>
</template>

<script>
export default {
	name: "kit-avatar",
	data() {
		return {
			firstName: "Vue", // we don't need these variables
			lastName: "js",
			fullName: ""
		};
	},
	props: { // I wanna pass 2 props (name and src)
		avatarSrc: {
			type: String
		},
		avatarClass: { // if we wanna size or color let it be something like this -> { size: { type: String, default: 'medium', validator: type => ['small', 'medium', 'large'].includes(type)} }
			type: String
		}
  },
  cumputed: {
    initials() { // I think it is prettier
      const [firstName = '', lastName = ''] = this.name.split(' ');
      return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
    }
  },
	methods: {
		getInitials() { // use computed for this (read https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods)
			this.fullName = `${this.firstName} ${this.lastName}`;
			return this.fullName
				.split(" ")
				.map(n => n[0])
				.join("");
		}
	}
};
</script>

<style scoped>
.avatar-text {
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