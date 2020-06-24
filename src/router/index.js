import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Todos from '../views/Todos.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: SignUp,
    beforeEnter(to, from, next) {
      if (store.state.login_user !== null) {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
  {
    path: '/sign_in',
    name: 'SignIn',
    component: SignIn,
    beforeEnter(to, from, next) {
      if (store.state.login_user !== null) {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
    beforeEnter(to, from, next) {
      if (store.state.login_user === null) {
        next({ name: 'SignIn' });
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
