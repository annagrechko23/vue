<template>
	<div class="avatar-selector">
		<div>
			<img
				v-if="!value"
				src="https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm"
				class="avatar-default"
			/>
			<kit-avatar :value="value" />

			<kit-input type="text" v-model="url" placeholder="Image Url:" @change="handleAvatarChange">
				<template #icon>
					<kit-icon icon="user" />
				</template>
			</kit-input>
		</div>
	</div>
</template>

<script>
export default {
	name: "kit-upload",
	data() {
		return {
			url: ""
		};
	},
	props: {
		value: String
	},
	methods: {
		handleAvatarChange() {
			const file = this.url;
			if (file) {
				this.$emit("input", file);
			} else {
				this.$emit("input", null);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.avatar-selector {
	align-items: center;
	display: flex;
	width: 30%;
	margin-bottom: 3px;
}

.avatar-default {
	border-radius: 50%;
	max-width: 150px;
}
</style>