<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-btn @click="googleLogin">Googleアカウントでログイン</v-btn>

      <v-text-field type="email" label="メールアドレス" v-model="$store.state.email"></v-text-field>
      <p>{{ $store.state.email }}</p>

      <v-text-field type="password" label="パスワード" v-model="$store.state.password"></v-text-field>

      <v-btn @click="signUp">
        <v-icon left>mdi-account</v-icon>新規会員登録
      </v-btn>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["signUp", "googleLogin"])
  }
};
</script>
