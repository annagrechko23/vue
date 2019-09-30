import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "@/pages/Profile";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import Reset from "@/pages/Reset";
import Playlist from "@/pages/Playlist";

Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: "/",
			redirect: '/playlist',
			component: Playlist,
      meta: {
        requiresAuth: true,
      }
		},
  {
    path: "/profile",
		component: Profile,
		meta: {
			requiresAuth: true,
		}
	},
	{
    path: "/reset",
    component: Reset,
    meta: {
      requiresAuth: true,
    }
  },
	{
		name: "login",
    path: "/login",
    component: Login
  },
	{
    path: "/registration",
    component: Registration
  },
	{
    path: "/playlist",
		component: Playlist,
		meta: {
			requiresAuth: true,
		}
  }
],

});

export default router;
