import Vue from "vue";
import App from "./App.vue";
import VueSweetalert2 from "vue-sweetalert2";
import { BootstrapVue } from "bootstrap-vue";

import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
