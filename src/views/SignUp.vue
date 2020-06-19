<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-btn rounded color="primary" dark @click="googleLogin"
        >Googleアカウントで新規会員登録</v-btn
      >

      <v-text-field
        label="メールアドレス"
        v-model="email"
        clearable
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="パスワード"
        hint="8文字以上"
        counter
        @click:append="show = !show"
      ></v-text-field>

      <v-btn class="ma-2" tile outlined color="success">
        <v-icon left>mdi-account</v-icon>新規会員登録
      </v-btn>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      show: false,
      email: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },
  methods: {
    ...mapActions(['googleLogin']),
  },
};
</script>
