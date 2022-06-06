<template>
  <div class="container-fluid p-0">
    <CustomHeader :name="name"></CustomHeader>
    <div class="container-fluid content">
      <h1>Consultas</h1>
      <div v-if="consultations.length > 0" class="container content-list">
        <h2>{{ consultations.length }} consultas agendadas</h2>
        <h3 v-if="success">Consulta agendada ✔</h3>
        <span v-for="item in consultations" :key="item.id" class="list">
          <ItemConsultation :consultation="item"></ItemConsultation>
        </span>
      </div>
      <img v-else :src="svgBlank" width="520px" height="360px" class="img-illus img-responsive" alt="Illustração">
      <div class="bottom fixed-bottom">
        <button v-b-modal.modal-2 class="btn btn-outline-custom">Ajuda</button>
        <b-button v-b-modal.modal-1 class="btn btn-custom">Agendar consulta</b-button>

        <b-modal ref="my-modal" id="modal-1" hide-footer title="Agendar consulta">
          <form @submit.prevent='sendConsultation()' class="my-form">
            <div class="form-group input-patient">
              <label for="pacientes">Paciente:</label>
              <select id="pacientes" name="pacientList" class="custom-input" v-model="form.patientId" required>
                <option v-for="item in patients" :key="item.id" :value="item.id">
                {{ item.first_name }}</option>
              </select>
            </div>
            <div class="form-group input-patient">
              <label for="datepicker" class="mt-4">Data: </label>
              <b-form-datepicker id="datepicker" v-model="date" required class="custom-input"></b-form-datepicker>
              <label for="datepicker" class="mt-4">Horário: </label>
              <b-form-timepicker v-model="hour" required locale="en" class="custom-input"></b-form-timepicker>
            </div>
            <b-button class="mt-4 ml-auto btn btn-custom" type="submit">Agendar</b-button>
          </form>
        </b-modal>

        <b-modal ref="my-modal-2" id="modal-2" title="Ajuda">
          <ol>
            <li>
              Clique em "Agendar" no canto inferior direito para agendar uma consulta, com data e horário
            </li>
            <li>
              Clique em "Atender" ou "Atendendo" para atualizar o status da consulta em questão
            </li>
          </ol>
          <p>Obs: Se ainda estiver com problemas entre em contato com o email contato@suporte.com</p>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/customHeader/index.vue'
import ItemConsultation from '@/components/itemConsultation/index.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'HomeView',
  components: { CustomHeader, ItemConsultation },
  data: () => ({
    svgBlank: require('../../assets/svg/blank-state.svg'),
    date: '',
    hour: '',
    form: {
      patientId: '',
      date: ''
    },
    success: false,
    name: ''
  }),
  mounted () {
    this.ActionFindConsultations()
    this.ActionFindPatients()
    this.getAuthUser()
  },
  updated () {
    this.ActionFindConsultations()
  },
  computed: {
    ...mapState('consultations', ['consultations']),
    ...mapState('consultations', ['patients']),
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('consultations', ['ActionFindConsultations', 'ActionFindPatients', 'ActionAddConsultation']),
    ...mapActions('auth', ['ActionGetUser']),
    async sendConsultation () {
      this.success = false
      try {
        const formatDate = this.date
        const formatHour = this.hour
        const time = `${formatDate},${formatHour}`
        const chosenDate = new Date(time)
        this.form.date = chosenDate
        if (await this.ActionAddConsultation(JSON.stringify(this.form))) {
          this.$refs['my-modal'].hide()
          this.success = true
        } else {
          alert('Não foi possível agendar a consulta')
        }
      } catch (err) {
        alert(err.body ? err.body.message : 'Não foi possível agendar a consulta')
      }
    },
    async getAuthUser () {
      try {
        this.name = await this.ActionGetUser()
      } catch (err) {
        console.error(err)
      }
    },
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toggleModal () {
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }
}
</script>
<style scoped>
  .content{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 134px 48px 48px 48px;
  }
  .content-list{
    max-width: 520px;
    width: 100%;
  }
  .modal-content > button[type=button] {
    background: none !important;
    background-color: transparent !important;
    border: none !important;
  }
  .my-form{
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: start;
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
    margin-bottom: 32px;
  }
  h2 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #535754;
    margin: 0 auto 24px auto;
  }
  h3 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    color: #27ff76;
    margin: 0 auto 24px auto;
  }
  .img-illus{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .custom-input{
    width: 100%;
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
  .input-patient{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
  }
  .input-hour{
    margin-top: 32px;
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
    border: 0px;
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 24px;
  }
  .btn-custom:hover{
    background-color: transparent;
    color: #2E50D4;
    border: 2px solid #2E50D4;
    box-shadow: none;
  }
  .btn-custom:hover, .btn-custom:focus{
    background-color: transparent;
    color: #2E50D4;
    border: 2px solid #2E50D4;
    box-shadow: none;
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
  .btn-outline-custom:hover, .btn-outline-custom:focus {
    background: #2E50D4;
    color: white;
  }
  .input-password{
    margin-top: 32px;
  }
  .bottom{
    padding: 17px 48px 17px 48px;
    background: #FFFFFB;
    box-shadow: 4px -4px 12px rgba(0, 0, 0, 0.05);
  }
  @media(max-width: 767px){
    h1 {
      font-size: 28px;
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
      justify-content: start;
      padding: 96px 32px 32px 32px;
    }
    .bottom{
      padding: 17px 32px 17px 32px;
    }
  }
</style>
