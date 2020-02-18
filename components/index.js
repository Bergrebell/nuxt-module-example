import Vue from "vue";
import components from "./lib";

// get options from module.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`);

for (const name in components) {
  Vue.component(name, {
    // extend the original component
    extends: components[name],
    // add _customCounterOptions prop to gain access to the options inside of the component
    props: {
      _customCounterOptions: {
        type: Object,
        default: () => ({ ...options })
      }
    }
  });
}
