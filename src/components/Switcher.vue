 <template>
	<div class="wrap">
		<h1>Custom switcher</h1>
		<div class="some">
			<input type="checkbox" name="checkbox1" id="checkbox1" class="ios-toggle" :checked="checked" />
			<label for="checkbox1" class="checkbox-label"></label>
		</div>
	</div>
</template>
<script>
export default {
	name: "kit-switcher",
	props: {
		checked: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped>
.ios-toggle,
.ios-toggle:active {
	position: absolute;
	top: 0;
	height: 0;
	width: 0;
	opacity: 0;
	border: none;
	outline: none;
}

.checkbox-label {
	display: block;
	position: relative;
	padding: 10px;
	margin-bottom: 20px;
	font-size: 12px;
	line-height: 16px;
	width: 100%;
	height: 36px;
	border-radius: 18px;
	background: #f8f8f8;
	cursor: pointer;
}
.checkbox-label:before {
	content: "";
	display: block;
	position: absolute;
	z-index: 1;
	line-height: 34px;
	text-indent: 40px;
	height: 27px;
	width: 27px;
	border-radius: 100%;
	top: 0px;
	left: 0px;
	right: auto;
	background: white;
	box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #dddddd;
}

.ios-toggle:checked + .checkbox-label {
	box-shadow: inset 0 0 0 20px rgba(19, 191, 17, 1),
		0 0 0 2px rgba(19, 191, 17, 1);
}
.ios-toggle:checked + .checkbox-label:before {
	left: calc(100% - 27px);
	box-shadow: 0 0 0 2px transparent, 0 3px 3px rgba(0, 0, 0, 0.3);
}

#checkbox1 + .checkbox-label {
	margin: 0 auto;
	width: 36px;
	height: 7px;
	box-shadow: inset 0 0 0 0px rgba(19, 191, 17, 1), 0 0 0 2px #dddddd;
}
#checkbox1:checked + .checkbox-label {
	box-shadow: inset 0 0 0 18px rgba(19, 191, 17, 1),
		0 0 0 2px rgba(19, 191, 17, 1);
}
.some {
	position: relative;
}
</style>