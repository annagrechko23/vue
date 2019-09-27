<template>
	<nav>
		<kit-menu
			:width="250"
			format="push"
			direction="left"
			:links="[
        {'id': 1, 'text': 'Profile', 'url': '/profile'},
        {'id': 2, 'text': 'Change email', 'url': '/reset'},
      ]"
		></kit-menu>
		<router-link class="logo" to="/playlist">
			<img
				src="https://www.designfreelogoonline.com/wp-content/uploads/2014/10/00111-Abstract-logos-design-free-logo-online-01.png"
			/>
		</router-link>

		<router-link class="link" to="/login" v-if="!isAuth">Login</router-link>

		<a href="#" class="link" v-if="isAuth" @click="logout">Logout</a>
	</nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "appHeader",
	computed: mapGetters(['isAuth', 'getEmail']),
	methods: mapActions({
    async logout(dispatch) {
      await dispatch('logout');
      this.$router.push("/login");
    }
  })
};
</script>

<style  lang="scss" scoped>
.link {
	padding: 20px;
	color: #fff;
	text-decoration: none;
	font-family: "Helvetica Neue", sans-serif;
	font-weight: bold;
	text-align: right;
}
nav {
	display: grid;
	grid-template-columns: 50px 1fr 1fr;
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
	img {
		max-width: 80px;
	}
}
.menu {
	display: flex;
	flex: 1 0 32%;
}
</style>