<template>
  <div class="container">
    <form @submit.prevent="submit()">
      <div class="card my-20">
        <div class="card-header">
          <h1 class="text-xl text-red-600 font-bold uppercase">Login</h1>
        </div>
        <div class="card-body my-10">
          <div class="form-group">
            <input required v-model="form.email" placeholder="E-mail" type="email" class="form-control">
            <input required v-model="form.password" placeholder="Password" type="password" class="form-control">
          </div>
        </div>
        <button class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
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
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)
        this.$router.push({ name: 'home' })
      } catch (err) {
        alert(err.body ? err.body.message : 'Não foi possível fazer o login')
      }
    }
  }
}
</script>
