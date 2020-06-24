import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Todos from '../views/Todos.vue';
import EditTodo from '../views/EditTodo.vue';

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
  },
  {
    path: '/sign_in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/todo/:id?/edit',
    name: 'EditTodo',
    component: EditTodo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
