<template>
	<nav>
		<router-link class="logo" to="/">
			<img src="https://s.ytimg.com/yts/img/music/web/on_platform_logo_dark-vfl_PUy2j.svg" />
		</router-link>
		<ul class="menu">
			<li>
				<router-link class="link" to="/playlist">Playlist</router-link>
			</li>

			<li>
				<router-link class="link" to="/favorite">Favorites</router-link>
			</li>
		</ul>
		<router-link class="link" to="/login">Login</router-link>
	</nav>
</template>

<script>
export default {
	name: "appHeader"
};
</script>

<style scoped>
.link {
	padding: 20px;
	color: #fff;
	text-decoration: none;
	font-family: "Helvetica Neue", sans-serif;
	font-weight: bold;
}
nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	text-align: left;
	margin-bottom: 20px;
	height: 100%;
	background: #000;
}
.logo {
	flex: 1 1 20%;
}
.menu {
	display: flex;
	flex: 1 0 32%;
}
</style>