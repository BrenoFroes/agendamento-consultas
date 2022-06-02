<template>
  <h1>Login</h1>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  created () {
    this.ActionSetUser({ name: 'Fulano', email: 'email@email.com' })
  },
  methods: {
    ...mapActions('auth', ['ActionSetUser']),
    submit () {
      console.log(this.form)
    }
  }
}
</script>
