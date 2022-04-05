<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
         This is the login page
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Input your email" v-model="email"></v-text-field>
            <v-text-field label="Input your password" v-model="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="login"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      let data = {email: this.email, password: this.password}
      await this.$store.dispatch('login', data)
    }
  }
}
</script>
