import Vue from "vue";
import App from "./App.vue";
import VueCookies from 'vue-cookies'
import { store } from "./store";
import Axios from "./plugins/axios";
import Initializer from "./plugins/initializer";
import router from "./routes";
import kit from "./kit";
import {
  Input,
  Button,
  Switcher,
  Card,
  Slider,
  Avatar,
  AvatarSelector,
  Select,
  Menu,
  Icon
} from "./kit/components";
import {
	ripple,
	swipe
} from "./kit/directives";

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(Axios, { store });
Initializer({ store }, router);

store.$router = router;
router.$store = store;

Vue.use(kit, {
  components: [
    Button,
    Input,
    Switcher,
    Avatar,
    Icon,
    Select,
    Menu,
    Card,
    AvatarSelector,
    Slider
  ],
  directives: [ripple, swipe]
});


new Vue({
  router,
	store,
  render: h => h(App)
}).$mount("#app");