import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { VueHammer } from "vue2-hammer";
import routes from "./routes";
import kit from "./kit";
import {
    Input,
    Button,
    Switcher,
    Card,
    SliderMobile,
    Avatar,
    Select,
    Icon
} from "./kit/components";
import {
    ripple
} from "./kit/directives";

Vue.config.productionTip = false;

Vue.use(VueHammer);
// Vue.component('campfire-icon', CampfireIcon);

Vue.use(VueRouter);
Vue.use(kit, {
    components: [
        Button,
        Input,
        Switcher,
        Avatar,
        Icon,
        Select,
        Card,
        SliderMobile
    ],
    directives: [ripple]
});

const router = new VueRouter({ routes });

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");