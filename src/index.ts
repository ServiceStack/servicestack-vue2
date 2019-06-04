// Import vue components
import Forbidden from './components/Forbidden.vue';
import ErrorSummary from './components/ErrorSummary.vue';
import Input from './components/Input.vue';
import Select from './components/Select.vue';
import CheckBox from './components/CheckBox.vue';
import Button from './components/Button.vue';
import SvgImage from './components/SvgImage.vue';
import Link from './components/Link.vue';
import LinkButton from './components/LinkButton.vue';
import Nav from './components/Nav.vue';
import Navbar from './components/Navbar.vue';
import NavLink from './components/NavLink.vue';
import NavButtonGroup from './components/NavButtonGroup.vue';
import NavLinkButton from './components/NavLinkButton.vue';

// install function executed by Vue.use()
function install(Vue: any) {
  if ((install as any).installed) return;
  (install as any).installed = true;

  Vue.component('Forbidden', Forbidden);
  Vue.component('error-summary', ErrorSummary);
  Vue.component('v-input', Input);
  Vue.component('v-select', Select);
  Vue.component('v-checkbox', CheckBox);
  Vue.component('v-button', Button);
  Vue.component('v-svg', SvgImage);
  Vue.component('v-link', Link);
  Vue.component('v-link-button', LinkButton);
  Vue.component('v-nav', Nav);
  Vue.component('v-navbar', Navbar);
  Vue.component('v-nav-link', NavLink);
  Vue.component('v-nav-button-group', NavButtonGroup);
  Vue.component('v-nav-link-button', NavLinkButton);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = (window as any).Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = (global as any).Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;

// To allow individual component use, export components
// each can be registered via Vue.component()

export {
  Forbidden,
  ErrorSummary,
  Input,
  Select,
  CheckBox,
  Button,
  SvgImage,
  Link,
  LinkButton,
  Nav,
  Navbar,
  NavLink,
  NavButtonGroup,
  NavLinkButton,
};
