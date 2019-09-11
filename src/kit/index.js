import {
    Input,
    Button,
    Switcher,
    Avatar,
		Select,
		AvatarSelector,
    Icon,
    Card,
    SliderMobile
} from "./components";
import {
    ripple
} from "./directives";

export default {
    install(Vue, args = {}) {
        const components = args.components || [];
        const directives = args.directives || [];
        if (directives.length) {
            directives.forEach(Directive => {
                Vue.directive(Directive.name, Directive);
            });
        } else {
            Vue.directive(ripple.name, ripple);
        }
        if (components.length) {
            components.forEach(Component => {
                Vue.component(Component.name, Component);
            });
        } else {
            Vue.component(Button.name, [Button]);
            Vue.component(Input.name, [Input]);
            Vue.component(Switcher.name, [Switcher]);
            Vue.component(Avatar.name, [Avatar]);
            Vue.component(AvatarSelector.name, [AvatarSelector]);
            Vue.component(Select.name, [Select]);
            Vue.component(Icon.name, [Icon]);
            Vue.component(Card.name, [Card]);
            Vue.component(SliderMobile.name, [SliderMobile]);
        }
    }
};

export {
    Input,
    Button,
    Switcher,
    Avatar,
    Select,
    Icon,
    ripple
};