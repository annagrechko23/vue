import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { VueHammer } from "vue2-hammer";
import routes from "./routes";
import kit from "./plugins/kit";
import Button from "./components/Button";
import Input from "./components/Input";
import Switcher from "./components/Switcher";
import Avatar from "./components/Avatar";
import Select from "./components/Select";
import Icon from "./components/Icon";
import Slider from "./components/Slider";
import SliderMobile from "./components/SliderMobile";
import ripple from "./directives/Ripple.js";

Vue.config.productionTip = false;

Vue.use(VueHammer);

Vue.use(VueRouter);
Vue.use(kit, {
  components: [
    Button,
    Input,
    Switcher,
    Avatar,
    Icon,
    Select,
    Slider,
    SliderMobile
  ],
  directives: [ripple]
});
const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
