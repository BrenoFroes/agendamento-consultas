<template>
  <div class="container-fluid p-0">
    <CustomHeader></CustomHeader>
    <div class="container-fluid content">
      <h1>Consultas</h1>
      <img :src="svgBlank" width="520px" height="360px" class="img-illus img-responsive" alt="Illustração">
      <div class="bottom">
        <button type="submit" class="btn btn-outline-custom">Ajuda</button>
        <button type="submit" class="btn btn-custom">Agendar consulta</button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/customHeader.vue'
export default {
  name: 'HomeView',
  components: { CustomHeader },
  data: () => ({
    svgBlank: require('@/assets/svg/blank-state.svg')
  })
}
</script>
<style scoped>
  .content{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 134px 48px 48px 48px;
  }
  h1 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -2.5px;
    color: #1C307F;
  }
  .img-illus{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
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
  .btn-custom{
    max-width: 160px;
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
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .btn-custom:hover{
    color: white;
  }
  .btn-outline-custom{
    max-width: 75px;
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
  .input-password{
    margin-top: 32px;
  }
  @media(max-width: 767px){
    h1 {
      font-size: 32px;
    }
    .img-desk{
      display: none;
    }
    .form-login{
      max-width: 272px;
      padding: 0;
    }
    .content{
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      padding: 64px 32px 32px 32px;
    }
  }
</style>
