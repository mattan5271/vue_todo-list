import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    login_user: null,
    drawer: false,
  },
  mutations: {
    signUp(state) {
      console.log(state.email);
      firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        .then((user) => {
          alert('Sign Up: ', user.email);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    signIn(state) {
      firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password)
        .then(
          (user) => {
            alert('Sign In');
          },
          (error) => {
            alert(error.message);
          }
        );
    },
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    addTodo() {
      this.todosRef.add({ name: this.name, isDone: false });
      this.name = '';
    },
  },
  actions: {
    signUp({ commit }, user) {
      commit('signUp', user);
    },
    signIn({ commit }, user) {
      commit('signIn', user);
    },
    signOut() {
      firebase.auth().signOut();
    },
    googleLogin() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
      this.setLoginUser();
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
