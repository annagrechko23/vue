<template>
	<nav>
		<div class="logo-wrap">
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
		</div>
	

		<router-link class="link" to="/login" v-if="!isAuth">Login</router-link>
<div class="link link-image" v-if="isAuth">
	<kit-avatar :value="user.image" />
	<p>{{user.name}} {{user.surnname}}</p>

</div>
		<a href="#" class="link" v-if="isAuth" @click="logout">Logout</a>
	</nav>
</template>

<script>
import { mapActions, mapGetters, mapState} from "vuex";

export default {
	name: "appHeader",
	computed: {
		...mapGetters(['isAuth', 'getEmail']),
		...mapState(['user'])
	},
	methods: mapActions({
    async logout(dispatch) {
      await dispatch('logout');
      this.$router.push("/login");
    }
  })
};
</script>

<style  lang="scss" scoped>
.logo-wrap{
	display: flex;
    align-items: center;
}
.link {
	padding: 20px;
	color: #fff;
	text-decoration: none;
	font-family: "Helvetica Neue", sans-serif;
	font-weight: bold;
	text-align: right;
}
.link-image{
display: grid;
padding: 10px;
    justify-items: unset;
    grid-template-columns: 50px 103px;
    align-items: center;

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
	img {
		max-width: 80px;
	}
}
.menu {
	display: flex;
	flex: 1 0 32%;
}
</style>