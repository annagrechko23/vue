
import Components from "@/pages/Components";
import Directives from "@/pages/Directives";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Registration from "@/pages/Registration";

const routes = [
	{
		path: '/',
		component: Home,
	},
  {
    path: "/components",
    component: Components
  },
  {
    path: "/directives",
    component: Directives
	},
	{
    path: "/login",
    component: Login
  },
	{
    path: "/registration",
    component: Registration
  }
];

export default routes;
