import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "@/pages/Profile";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import Reset from "@/pages/Reset";
import Playlist from "@/pages/Playlist";

Vue.use(VueRouter);
const router = new VueRouter({
	routes: [
	{
		path: '/',
		redirect: '/login',
	},
  {
    name: "/root",
    path: "/profile",
    component: Profile,
	},
	{
    path: "/reset",
    component: Reset
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
    component: Playlist
  }
]
});
export default router;
