import Input from "./../components/Input";
import Button from "./../components/Button";
import Switcher from "./../components/Switcher";
import Avatar from "./../components/Avatar";
import Select from "./../components/Select";
import Icon from "./../components/Icon";
import ripple from "./../directives/Ripple.js";

const kit = {
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
      Vue.component(Select.name, [Select]);
      Vue.component(Icon.name, [Icon]);
    }
  }
};

export default kit;
