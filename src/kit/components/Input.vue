<template>
	<div class="wrap">
		<h1>Custom input</h1>
		<label v-if="label" class="form_label">{{ label }}</label>
		<div class="input-wrap">
			<slot name="icon"></slot>
			<input
				type="text"
        v-bind="$attrs"
				:value="value"
				class="form_class"
				@input="update($event.target.value)"
				:placeholder="placeholder"
				:disabled="disabled"
        v-on="$listeners"
			/>
		</div>
		<p class="error" v-if="validate && !value">Error Message</p>
	</div>
</template>
<script>

// v-on="$listeners" -> https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components

export default {
	name: "kit-input",
  inheritAttrs: false, // https://vuejs.org/v2/api/#inheritAttrs
	model: {
		prop: "value",
		event: "update" // I need to explain why
	},
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		validate: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: "bla"
		},
		label: {
			type: String
		},
		value: String
	},
	methods: {
		update(value) {
			this.$emit("update", value);
		}
	}
};
</script>

<style scoped>
.form_label {
	display: block;
	padding-bottom: 20px;
	font-family: "Roboto", sans-serif;
	line-height: 1.5;
	font-weight: normal;
	text-transform: capitalize;
}
.form_class {
	padding-left: 50px;
	height: 40px;
	box-shadow: 5px 4px 15px 2px rgba(0, 0, 0, 0.2);
	border: none;
	border-radius: 5px;
}
.error {
	color: red;
	font-weight: bold;
	display: block;
}
.image-slot {
	width: 20px;
	height: auto;
	padding: 10px 0;
}
.icon-wrap {
	position: relative;
	left: 37px;
}
.input-wrap {
	width: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>