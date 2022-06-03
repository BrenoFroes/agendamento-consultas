<template>
  <div class='container-fluid p-0'>
    <CustomHeader></CustomHeader>
    <div class="container vh-100 d-flex flex-column align-items-center justify-content-center">
      <div class="row w-100">
        <div class="col col-6 d-flex flex-column justify-content-start align-items-center">
          <h1 class="mb-5">Faça Login</h1>
          <img :src="svgIllustration" width="337px" height="265px" alt="Illustração">
        </div>
        <div class="col col-6">
          <form @submit.prevent='submit()'>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input required v-model='form.email' placeholder='E-mail' type='email' class='form-control' id="exampleInputEmail1">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input required v-model='form.password' placeholder='Password' type='password' class='form-control' id='"exampleInputPassword1"'>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import CustomHeader from '@/components/customHeader.vue'
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    },
    svgIllustration: require('@/assets/svg/illustration.svg')
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
  },
  components: { CustomHeader }
}
</script>
<style scoped>
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -2.5px;
    color: #1C307F;
  }
</style>
