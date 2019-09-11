<template>
	<div>
		<nav>
			<router-link class="link" to="/">Home</router-link>
			<router-link class="link" to='/playlist'>Playlist</router-link>
			<router-link class="link" to='/favorite'>Favorites</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	name: "header"
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
nav{
	margin-top: 30px;
	text-align: left;
	margin-bottom: 20px;
}
</style>