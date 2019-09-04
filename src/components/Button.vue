 <template>
	<div class="wrap">
		<h1>Custom button</h1>
		<!-- size: small, middle, large
            shape: rounded, circle, square - as default
		-->
		<button :class="buttonClass" :disabled="disabled" >
			<slot></slot>
			<slot name="icon"></slot>
		</button>
	</div>
</template>
<script>
export default {
	name: "Button",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		buttonClass: {
			type: String,
			default: "middle rounded"
		},
		slotSrc: {
			type: String,
			default: "https://image.flaticon.com/icons/svg/67/67347.svg"
		}
	}
};
</script>

<style scoped>
.small {
	width: 100px;
	height: 50px;
	font-size: 12px;
}
.middle {
	width: 150px;
	height: 80px;
	font-size: 18px;
}
.large {
	width: 300px;
	height: 100px;
	font-size: 20px;
}
.rounded {
	border-radius: 8px;
}
.circle {
	border-radius: 50% 50%;
	height: 100px;
}
.square {
	border-radius: none;
	height: 60px;
}
.image-slot {
	max-width: 20px;
}
button {
	display: flex;
	justify-content: center;
	margin: 0 auto;
	outline: none;
	background: #f5f5f5;
	align-items: center;
	padding: 15px;
	box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>