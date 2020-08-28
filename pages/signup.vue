<template>
  <v-container>
    <v-row justify="center">
      <v-card flat width="90%" max-width="368" color="transparent">
        <v-card-title class="justify-center headline">
          新規会員登録
        </v-card-title>
        <v-form ref="form" v-model="valid">
          <email-form :email.sync="email" :disabled="loading" />
          <password-form
            :password.sync="password"
            :disabled="loading"
            validation
          />
          <v-card-text class="text-center">
            <v-btn
              :disabled="!valid || loading"
              :loading="loading"
              color="primary"
              @click="signup"
            >
              登録する（無料）
            </v-btn>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <v-divider />
        </v-card-actions>
        <v-card-text class="text-center">
          会員登録はお済みですか？
        </v-card-text>
        <v-card-actions>
          <v-btn to="/login" class="mx-auto px-4">
            ログインする
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
  <!-- <div>
    新規会員登録ページ
    <email-form />
    <password-form />
  </div> -->
</template>

<script>
import emailForm from '~/components/users/emailForm.vue'
import passwordForm from '~/components/users/passwordForm.vue'

export default {
  components: {
    emailForm,
    passwordForm,
  },
  data: () => ({
    valid: true,
    email: '',
    password: '',
    loading: false,
  }),
  methods: {
    signup() {
      if (this.$refs.form.validate()) {
        this.loading = true
        alert(
          `email: ${this.email}\n` +
            `password: ${this.password}\n` +
            'これらを送信してuserを作成します。'
        )
        setTimeout(() => {
          this.loading = false
          this.$refs.form.reset()
        }, 2000)
      }
    },
  },
}
</script>
