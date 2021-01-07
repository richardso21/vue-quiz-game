import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueHighlightJS);

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
