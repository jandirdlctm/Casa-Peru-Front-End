import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from "./components/Home";
import HouseSpecialties from "./components/HouseSpecialties";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
// import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/house-specialties', component: HouseSpecialties},
    {path: '/menu', component: Menu},
    {path: '/reviews', component: Reviews},
    // {path: '/contact', component: Contact},
    {path: '*', component: NotFound}
  ],
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
