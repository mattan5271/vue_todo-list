<template>
  <v-app>
    <div>
      <v-app-bar>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">Todoリスト</v-toolbar-title>
      </v-app-bar>
    </div>
    <v-main>
      <v-container fluid>
        <SideNav />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";

export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
      } else {
        this.deleteLoginUser();
      }
    });
  },
  methods: {
    ...mapActions(["setLoginUser", "deleteLoginUser", "toggleDrawer"])
  },
  components: {
    SideNav
  }
};
</script>
