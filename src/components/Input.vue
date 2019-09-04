<template>
	<div class="wrap">
		<h1>Custom input</h1>
		<label v-if="label" class="form_label">{{ label }}</label>
		<div class="input-wrap">
			<slot name="icon"></slot>
		
			<input
				type="text"
				:value="value"
				class="form_class"
				@input="updateSelf($event.target.value)"
				:placeholder="placeholder"
				:disabled="disabled"
			/>
		</div>
		<p class="error" v-if="validate && !value">Error Message</p>
	</div>
</template>
<script>

export default {
	name: "Inputs",

	model: {
		prop: "value",
		event: "input"
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
		slotSrc: {
			type: String,
			default: "https://image.flaticon.com/icons/png/512/97/97895.png"
		},
		value: String
	},
	methods: {
		updateSelf(value) {
			this.$emit("input", value);
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