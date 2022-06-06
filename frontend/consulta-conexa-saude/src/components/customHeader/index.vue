<template>
  <div class="top fixed-top">
    <img :src="svgLogo" class="img-responsive" width="114px" height="23.26px" alt="Logo Conexa">
    <div v-if="name" class="right">
      <h1>Olá, Dr. {{ name }}</h1>
      <button @click.prevent="logout()" class="btn btn-outline-custom">Sair</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CustomHeader',
  data: () => ({
    svgLogo: require('../../assets/svg/logo-conexa.svg'),
    stage: 0
  }),
  props: {
    name: { type: String, required: false }
  },
  methods: {
    ...mapActions('auth', ['ActionSignOut']),
    async logout () {
      try {
        await this.ActionSignOut()
        this.$router.push({ name: 'login' })
      } catch (err) {
        alert(err.body ? err.body.message : 'Não foi possível fazer deslogar')
      }
    }
  },
  computed: {
    searchQuery: {
      get () {
        return this.name
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top{
  background: #FFFFFB;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.right{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  min-width: 270px;
}
h1{
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #575453;
  margin: 0;
}
.btn-outline-custom{
  max-width: 116px;
  background-color: transparent;
  color: #2E50D4;
  border: 2px solid #2E50D4;
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
}
.btn-outline-custom:hover{
  max-width: 116px;
  background-color: #2E50D4;
  color: white;
  border: 2px solid #2E50D4;
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
}
@media(max-width: 767px){
  img{
    margin: auto;
  }
  .top{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right{
    min-width: 250px;
  }
}
@media(max-width: 525px){
  h1 {
    display: none;
  }
  .right{
    min-width: 0;
  }
}
</style>
