import {
    Input,
    Button,
    Switcher,
    Avatar,
		Select,
		AvatarSelector,
    Icon,
    Card,
    Slider
} from "./components";
import {
    ripple, swipe
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
            Vue.directive(ripple.name, swipe);
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
            Vue.component(Slider.name, [Slider]);
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