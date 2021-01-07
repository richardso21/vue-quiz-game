import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../views/Start.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Quiz.vue");
    }
  },
  {
    path: "/results",
    name: "Results",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Results.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
