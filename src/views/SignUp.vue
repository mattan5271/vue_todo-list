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

      <v-text-field type="email" label="メールアドレス" v-model="email"></v-text-field>

      <v-text-field type="password" label="パスワード" v-model="password"></v-text-field>

      <v-flex text-center>
        <v-btn color="success" @click="signUp">
          <v-icon left>mdi-account</v-icon>新規会員登録
        </v-btn>
        <br />
        <br />

        <v-btn color="error" :to="{ name: 'SignIn' }">
          <v-icon left>mdi-login</v-icon>ログインはこちらから
        </v-btn>
      </v-flex>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          const user = response.user;
          console.log(user.uid);
          firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .set({
              user_id: user.uid,
              email: user.email
            })
            .then(() => {
              this.$router.push("/");
            })
            .catch(e => {
              console.log(e);
            });
        });
    },
    ...mapActions(["googleLogin"])
  }
};
</script>
