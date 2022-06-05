<template>
  <div class="content-consultation">
    <div class="text">
      <h2>{{ consultation.patient.first_name }} {{ consultation.patient.last_name }}</h2>
      <p>{{ data }}</p>
    </div>
    <button @click.prevent="" class="btn btn-custom">Atender</button>
  </div>
</template>

<script>
export default {
  name: 'ItemConsultation',
  data: () => ({
    data: ''
  }),
  props: {
    consultation: { type: Object, required: true }
  },
  created () {
    const data = new Date(this.consultation.date)
    const formatData = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    const formatHour = `${data.getHours()}:${data.getMinutes()}`
    this.data = `${formatData} às ${formatHour}`
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
