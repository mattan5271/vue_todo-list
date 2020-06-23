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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      items: [
        { text: "ホーム", icon: "mdi-home", link: { name: "Home" } },
        { text: "TODO管理", icon: "mdi-menu", link: { name: "Todos" } },
        { text: "新規会員登録", icon: "mdi-account", link: { name: "SignUp" } },
        { text: "ログイン", icon: "mdi-login", link: { name: "SignIn" } }
      ]
    };
  },
  computed: {
    ...mapGetters(["userName", "photoURL"])
  }
};
</script>