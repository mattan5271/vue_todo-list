import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { todosRef } from '../plugins/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    todos: [],
  },
  mutations: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((response) => {
          console.log(response);
          router.push({ name: 'Todos' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setLoginUser(state, user) {
      state.login_user = user;
      todosRef
        .where('user_id', '==', state.login_user.uid)
        .onSnapshot((querySnapshot) => {
          const obj = {};
          querySnapshot.forEach((doc) => {
            obj[doc.id] = doc.data();
          });
          state.todos = obj;
        });
    },
    deleteLoginUser(state) {
      state.login_user = null;
      router.push({ name: 'SignIn' });
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    googleLogin({ commit }) {
      commit('googleLogin');
    },
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user);
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser');
    },
    toggleDrawer({ commit }) {
      commit('toggleDrawer');
    },
  },
  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ''),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ''),
  },
});
