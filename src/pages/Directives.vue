<template>
	<div>
		<button v-ripple="'red'">Baby blue looks good on me.</button>
		<button v-ripple>I prefer neon green.</button>
	</div>
</template>

<script>
import { Ripple } from "./../directives/Ripple.js";

export default {
	name: "Directives",
	directives: {
		Ripple
	},
	data(){
		return {
			msg: 'bla'
		}
	}
};
</script>
<style scoped>
.link{
	padding: 20px;
	color: #fff;
	border: 1px solid #000;
	border-radius: 8px;
	margin-right: 20px;
	background-color: #000;
	text-decoration: none;
}
button{
	background: #000;
	color: #fff;
	display: block;
	width: 60%;
padding: 30px 0;
position: relative;
margin: 0 auto 20px;
overflow: hidden;

}
</style>