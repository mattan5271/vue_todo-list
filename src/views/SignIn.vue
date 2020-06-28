<template>
  <v-row justify="center">
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-flex text-center>
        <v-btn color="primary" @click="googleLogin">
          <v-icon left>mdi-google</v-icon>Googleアカウントでログイン
        </v-btn>
      </v-flex>
      <br />

      <v-text-field type="email" label="メールアドレス" v-model="$store.state.email"></v-text-field>

      <v-text-field type="password" label="パスワード" v-model="$store.state.password"></v-text-field>

      <v-flex text-center>
        <v-btn color="error" @click="signIn">
          <v-icon left>mdi-login</v-icon>ログイン
        </v-btn>
        <br />
        <br />

        <v-btn color="success" :to="{ name: 'SignUp' }">
          <v-icon left>mdi-account-plus</v-icon>新規会員登録はこちらから
        </v-btn>
      </v-flex>
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
