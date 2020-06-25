<template>
  <div>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="photoURL" v-if="photoURL" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ userName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, i) in $store.state.items"
          :key="i"
          :to="item.link"
          @click="signOut(item.text)"
          v-show="item.show"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import store from "../store";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["userName", "photoURL"])
  },
  methods: {
    signOut(name) {
      if (name === "ログアウト") {
        firebase.auth().signOut();
      }
    }
  }
};
</script>