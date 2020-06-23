<template>
  <v-row justify="center">
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-btn @click="googleLogin">Googleアカウントでログイン</v-btn>

      <v-text-field type="email" label="メールアドレス" v-model="$store.state.email"></v-text-field>

      <v-text-field type="password" label="パスワード" v-model="$store.state.password"></v-text-field>

      <v-btn @click="signIn">
        <v-icon left>mdi-login</v-icon>ログイン
      </v-btn>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["signIn", "googleLogin"])
  }
};
</script>
