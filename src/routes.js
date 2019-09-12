
import Profile from "@/pages/Profile";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Registration from "@/pages/Registration";
import Reset from "@/pages/Reset";
import Playlist from "@/pages/Playlist";

const routes = [
	{
		path: '/',
		component: Home,
	},
  {
    path: "/profile",
    component: Profile,
	},
	{
    path: "/reset",
    component: Reset
  },
	{
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
];

export default routes;
