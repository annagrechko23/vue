import Vue from "vue";
import App from "./App.vue";
import { VueHammer } from "vue2-hammer";
import VueCookies from 'vue-cookies'
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
	hammer
} from "./kit/directives";

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(VueHammer);

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
  directives: [ripple, hammer]
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");