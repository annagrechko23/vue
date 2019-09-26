import Vue from "vue";
import App from "./App.vue";
import VueCookies from 'vue-cookies'
import 'hammerjs';
import { store } from "./store";
import Axios from "./plugins/axios";
import router from "./routes";
import kit from "./kit";
import {
  Input,
  Button,
  Switcher,
  Card,
  SliderMobile,
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

store.$router = router;

router.$store = { store };

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
    SliderMobile
  ],
  directives: [ripple, swipe]
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");