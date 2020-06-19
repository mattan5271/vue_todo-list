<template>
  <v-app>
    <div>
      <v-app-bar color="teal lighten-3" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Todoリスト</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn icon :to="{ name: 'SignUp' }">
            <v-icon>mdi-account</v-icon>
          </v-btn>

          <v-btn icon :to="{ name: 'SignIn' }">
            <v-icon>mdi-login</v-icon>
          </v-btn>

          <v-btn icon @click="googleLogout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </div>

    <v-navigation-drawer v-model="drawer" absolute temporary>
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
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fill-height text-center>
        <router-view />
      </v-container>
    </v-main>

    <v-bottom-navigation dark shift>
      <v-btn>
        <span>Video</span>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>
        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      items: [{ text: 'ホーム', icon: 'mdi-home', link: { name: 'Home' } }],
    };
  },
  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return 'blue-grey';
        case 1:
          return 'teal';
        case 2:
          return 'brown';
        case 3:
          return 'indigo';
      }
    },
    ...mapGetters(['userName', 'photoURL']),
  },
  methods: {
    ...mapActions(['googleLogout']),
  },
  components: {},
};
</script>
