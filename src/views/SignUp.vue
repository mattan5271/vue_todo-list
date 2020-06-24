<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-flex text-center>
        <v-btn color="primary" @click="googleLogin">
          <v-icon left>mdi-google</v-icon>Googleアカウントでログイン
        </v-btn>
      </v-flex>
      <br />

      <v-text-field type="email" label="メールアドレス" v-model="$store.state.email"></v-text-field>
      <p>{{ $store.state.email }}</p>

      <v-text-field type="password" label="パスワード" v-model="$store.state.password"></v-text-field>

      <v-flex text-center>
        <v-btn color="success" @click="signUp">
          <v-icon left>mdi-account</v-icon>新規会員登録
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
    ...mapActions(["signUp", "googleLogin"])
  }
};
</script>
