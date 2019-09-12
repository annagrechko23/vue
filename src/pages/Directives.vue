<template>
	<div>
		<button class="button" v-ripple="'red'">Baby blue looks good on me.</button>
		<button class="button" v-ripple>I prefer neon green.</button>
	</div>
</template>

<script>
export default {
	name: "Directives"
};
</script>

<style scoped>
.link {
	padding: 20px;
	color: #fff;
	border: 1px solid #000;
	border-radius: 8px;
	margin-right: 20px;
	background-color: #000;
	text-decoration: none;
}

</style>