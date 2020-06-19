import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
  },
  actions: {
    googleLogin() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    googleLogout() {
      firebase.auth().signOut();
    },
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user);
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser');
    },
  },
  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ''),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ''),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
  },
});
