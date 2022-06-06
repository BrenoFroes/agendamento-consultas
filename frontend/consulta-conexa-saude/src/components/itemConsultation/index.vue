<template>
  <div class="content-consultation">
    <div class="text">
      <h2>{{ consultation.patient.first_name }} {{ consultation.patient.last_name }}</h2>
      <p>{{ date }}</p>
    </div>
    <button v-if="this.step == 0" @click.prevent="next()" class="btn btn-custom">Atender</button>
    <button v-if="this.step == 1" @click.prevent="next()" class="btn btn-custom btn-loading">
      Atendendo &nbsp;
      <img :src="svgLoading" width="16px" height="16px" alt="Carregando">
    </button>
    <button v-if="this.step == 2" class="btn btn-custom btn-finished">Finalizado</button>
  </div>
</template>

<script>
export default {
  name: 'ItemConsultation',
  data: () => ({
    date: '',
    step: 0,
    svgLoading: require('../../assets/svg/loading.svg')
  }),
  props: {
    consultation: { type: Object, required: true }
  },
  created () {
    const data = new Date(this.consultation.date)
    const formatData = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    const formatHour = `${data.getHours()}:${data.getMinutes()}`
    this.date = `${formatData} às ${formatHour}`
  },
  methods: {
    next () {
      this.step = this.step + 1
    }
  },
  computed: {
    searchQuery: {
      get () {
        return this.consultation
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-consultation {
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  .btn-custom:focus{
    color: white;
  }
  .btn-custom:hover{
    color: white;
  }
  .btn-loading{
    background-color: #F28080;
  }
  .btn-finished{
    background-color: #273856;
  }
  h2 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #575453;
  }
  p {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #575453;
  }
</style>
