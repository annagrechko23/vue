import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueCookies from 'vue-cookies';

import { VueHammer } from "vue2-hammer";
import store from "./store";
import routes from "./routes";
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
    ripple
} from "./kit/directives";

Vue.config.productionTip = false;

Vue.use(VueHammer);
Vue.use(VueCookies);
Vue.use(VueRouter);
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
    directives: [ripple]
});

const router = new VueRouter({ routes });

new Vue({
		router,
		store,
    render: h => h(App)
}).$mount("#app");