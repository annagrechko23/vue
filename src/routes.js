
import Home from "@/pages/Home";
import Components from "@/pages/Components";
import Directives from "@/pages/Directives";
import Login from "@/pages/Login";

const routes = [
	{
    path: "/",
    component: Home
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
  }
];

export default routes;
