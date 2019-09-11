<template>
    <div class="avatar-selector">
        <div>
            <input type="file" @change="handleAvatarChange" ref="avatarSelector">
						<img v-if="!value" src="https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm" class="avatar-default" @click="uploadAvatar" />
        </div> 
				<kit-avatar :value="value" />
    </div>
</template>

<script>
export default {
    name: 'kit-upload',
    props: {
        value: Blob,
        formats: Array,
        size: Number
    },
    
  
    methods: {
			uploadAvatar() {
					this.$refs.avatarSelector.click();
				},
        handleAvatarChange(e) {
            // URL.revokeObjectURL(this.value);
            const file = e.target.files[0];
            if (file) {
                this.$emit('input', file);
            } else {
                this.$emit('input', null);
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.avatar-selector {
    align-items: center;
    display: flex;
   width: 30%;
}
input[type="file"] {
  display: none;
}
.avatar-default{
	border-radius: 50%;
	max-width: 150px;
}
</style>