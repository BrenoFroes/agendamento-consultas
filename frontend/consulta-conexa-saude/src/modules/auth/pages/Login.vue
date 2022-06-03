<template>
  <div class='container-fluid p-0'>
    <CustomHeader></CustomHeader>
    <div class="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
      <div class="row w-100">
        <div class="col col-6 d-flex flex-column justify-content-start align-items-center">
          <h1>Faça Login</h1>
          <img :src="svgIllustration" width="337px" height="265px" alt="Illustração">
        </div>
        <div class="col col-6 d-flex flex-column justify-content-center align-items-center">
          <form @submit.prevent='submit()' class="form-login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input required v-model='form.email' placeholder='Digite seu e-mail' type='email' class='form-control custom-input' id="exampleInputEmail1">
            </div>
            <div class="form-group input-password">
              <label for="exampleInputPassword1">
                Senha
                <img :src="svgHelp" width="16px" height="16px" v-b-popover.hover.top="'- Letra maiúscula, caracteres especiais e alfanuméricos.'" title="Sua senha deve ter:" alt="Ajuda">
              </label>
              <div class="input-group mt-4 custom-input">
                  <input v-if="showPassword" required v-model='form.password' placeholder='Digite sua senha' type='text' class='form-control border-0' id='"exampleInputPassword1"' />
                  <input v-else required v-model='form.password' placeholder='Digite sua senha' type='password' class='form-control border-0' id='"exampleInputPassword1"'>
                  <span @click="toggleShow" class="d-flex align-items-center">
                    <img v-if="showPassword" :src="svgSlash" width="16px" height="16px" alt="Senha">
                    <img v-else :src="svgEye" width="16px" height="16px" alt="Senha">
                  </span>
              </div>
            </div>
            <button type="submit" class="btn btn-custom">Entrar</button>
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
    showPassword: false,
    svgHelp: require('@/assets/svg/help.svg'),
    svgIllustration: require('@/assets/svg/illustration.svg'),
    svgEye: require('@/assets/svg/eye-solid.svg'),
    svgSlash: require('@/assets/svg/eye-slash-solid.svg')
  }),
  computed: {
    buttonLabel () {
      return (this.showPassword) ? 'Hide' : 'Show'
    }
  },
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)
        this.$router.push({ name: 'home' })
      } catch (err) {
        alert(err.body ? err.body.message : 'Não foi possível fazer o login')
      }
    },
    toggleShow () {
      this.showPassword = !this.showPassword
    }
  },
  components: { CustomHeader }

}
</script>
<style scoped>
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -2.5px;
    color: #1C307F;
    margin-bottom: 67px;
  }
  .custom-input{
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid #DAD2D0;
  }
  .custom-input::-webkit-input-placeholder {
   font-style: italic;
  }
  .custom-input:-moz-placeholder {
    font-style: italic;
  }
  .custom-input::-moz-placeholder {
    font-style: italic;
  }
  .custom-input:-ms-input-placeholder {
    font-style: italic;
  }
  .form-login{
    max-width: 235px;
    padding: 90px 0;
  }
  .btn-custom{
    background: #2E50D4;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    margin-top: 68px;
  }
  .btn-custom:hover{
    color: white;
  }
  .input-password{
    margin-top: 32px;
  }
</style>
