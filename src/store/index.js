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
    todos: [],
    items: [
      {
        text: 'TODO管理',
        icon: 'mdi-menu',
        link: { name: 'Todos' },
        show: false,
      },
      {
        text: '新規会員登録',
        icon: 'mdi-account-plus',
        link: { name: 'SignUp' },
        show: true,
      },
      {
        text: 'ログイン',
        icon: 'mdi-login',
        link: { name: 'SignIn' },
        show: true,
      },
      { text: 'ログアウト', icon: 'mdi-logout', show: false },
    ],
  },
  mutations: {
    signIn(state) {
      firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password)
        .then(
          (user) => {
            alert('Login successful');
          },
          (error) => {
            alert(error.message);
          }
        );
    },
    setLoginUser(state, user) {
      state.login_user = user;
      if (state.login_user.uid) {
        firebase
          .firestore()
          .collection('todos')
          .where('user_id', '==', state.login_user.uid)
          .onSnapshot((querySnapshot) => {
            let obj = {};
            querySnapshot.forEach((doc) => {
              obj[doc.id] = doc.data();
            });
            state.todos = obj;
          });
      }
      state.items[0].show = true;
      state.items[1].show = false;
      state.items[2].show = false;
      state.items[3].show = true;
    },
    deleteLoginUser(state) {
      state.login_user = null;
      state.items[0].show = false;
      state.items[1].show = true;
      state.items[2].show = true;
      state.items[3].show = false;
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
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
