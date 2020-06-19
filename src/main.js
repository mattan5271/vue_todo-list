import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxrrVRLYkfmI-OCX_7Q8ox-OWoYxeg4VE',
  authDomain: 'todo-list-81124.firebaseapp.com',
  databaseURL: 'https://todo-list-81124.firebaseio.com',
  projectId: 'todo-list-81124',
  storageBucket: 'todo-list-81124.appspot.com',
  messagingSenderId: '695406603596',
  appId: '1:695406603596:web:ce86522eb4467ee28433e9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
