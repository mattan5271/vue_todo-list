<template>
  <v-app>
    <div>
      <v-app-bar>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Todoリスト</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items v-if="$store.state.login_user">
          <v-btn @click="signOut">ログアウト</v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </div>
    <v-main>
      <v-container fill-height>
        <SideNav />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";

export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        if (
          this.$router.currentRoute.name === "SignIn" ||
          this.$router.currentRoute.name === "SignUp"
        )
          this.$router.push({ name: "Home" });
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: "SignIn" });
      }
    });
  },
  methods: {
    ...mapActions([
      "signOut",
      "setLoginUser",
      "deleteLoginUser",
      "toggleDrawer"
    ])
  },
  components: {
    SideNav
  }
};
</script>
